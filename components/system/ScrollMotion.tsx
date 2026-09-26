"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";

type MotionLibraries = {
  gsap: typeof import("gsap").gsap;
  ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;
  Lenis: typeof import("lenis").default;
};

let motionLibrariesPromise: Promise<MotionLibraries> | null = null;

function loadMotionLibraries() {
  motionLibrariesPromise ??= Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
    import("lenis"),
  ]).then(([gsapModule, scrollTriggerModule, lenisModule]) => ({
    gsap: gsapModule.gsap,
    ScrollTrigger: scrollTriggerModule.ScrollTrigger,
    Lenis: lenisModule.default,
  }));

  return motionLibrariesPromise;
}

type ScrollMotionProps = {
  children: ReactNode;
};

export function ScrollMotion({ children }: ScrollMotionProps) {
  const pathname = usePathname();

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let cancelled = false;
    let loading = false;
    let libraries: MotionLibraries | null = null;
    let lenis: InstanceType<MotionLibraries["Lenis"]> | null = null;
    let unsubscribeScroll: (() => void) | undefined;

    const tick = (time: number) => {
      lenis?.raf(time * 1000);
    };

    const startWithLibraries = () => {
      if (!libraries || motionPreference.matches || lenis) {
        return;
      }

      const { gsap, ScrollTrigger, Lenis } = libraries;
      gsap.registerPlugin(ScrollTrigger);
      lenis = new Lenis({
        autoRaf: false,
        anchors: true,
        stopInertiaOnNavigate: true,
        respectReducedMotion: true,
      });
      unsubscribeScroll = lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    };

    const start = () => {
      if (motionPreference.matches || lenis || loading) {
        return;
      }

      if (libraries) {
        startWithLibraries();
        return;
      }

      loading = true;
      void loadMotionLibraries()
        .then((loadedLibraries) => {
          loading = false;
          libraries = loadedLibraries;
          if (!cancelled) {
            startWithLibraries();
          }
        })
        .catch(() => {
          loading = false;
        });
    };

    const stop = () => {
      if (!lenis) {
        return;
      }

      libraries?.gsap.ticker.remove(tick);
      unsubscribeScroll?.();
      unsubscribeScroll = undefined;
      lenis.destroy();
      lenis = null;
    };

    const updateMotionPreference = () => {
      if (motionPreference.matches) {
        stop();
      } else {
        start();
      }
    };

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);

    return () => {
      cancelled = true;
      motionPreference.removeEventListener("change", updateMotionPreference);
      stop();
    };
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let cancelled = false;
    let loading = false;
    let libraries: MotionLibraries | null = null;
    let context: ReturnType<MotionLibraries["gsap"]["context"]> | null = null;
    let refreshFrame = 0;
    const interactionCleanup: (() => void)[] = [];

    const clear = () => {
      window.cancelAnimationFrame(refreshFrame);
      context?.revert();
      context = null;
      interactionCleanup.splice(0).forEach((cleanup) => cleanup());
      const revealElements = document.querySelectorAll<HTMLElement>(
        "[data-scroll-reveal]",
      );
      const interactionElements = document.querySelectorAll<HTMLElement>(
        "[data-gsap-interaction]",
      );

      if (libraries && revealElements.length > 0) {
        libraries.gsap.set(revealElements, {
          clearProps: "opacity,visibility,transform",
        });
      }

      if (libraries && interactionElements.length > 0) {
        libraries.gsap.set(interactionElements, { clearProps: "transform" });
      }
    };

    const setup = () => {
      if (motionPreference.matches || context || loading) {
        return;
      }

      loading = true;
      void loadMotionLibraries()
        .then((loadedLibraries) => {
          loading = false;
          libraries = loadedLibraries;
          if (cancelled || motionPreference.matches || context) {
            return;
          }

          const { gsap, ScrollTrigger } = libraries;
          gsap.registerPlugin(ScrollTrigger);
          context = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>("[data-scroll-reveal]").forEach(
              (element) => {
                gsap.fromTo(
                  element,
                  { autoAlpha: 0, y: 24 },
                  {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power2.out",
                    immediateRender: false,
                    clearProps: "opacity,visibility,transform",
                    scrollTrigger: {
                      trigger: element,
                      start: "top 88%",
                      once: true,
                    },
                  },
                );
              },
            );

            const hero = document.querySelector<HTMLElement>(".hero");
            const heroMedia = document.querySelector<HTMLElement>(".hero-media");

            if (hero && heroMedia) {
              gsap.to(heroMedia, {
                "--hero-parallax-offset": "28px",
                ease: "none",
                scrollTrigger: {
                  trigger: hero,
                  start: "top top",
                  end: "bottom top",
                  scrub: 0.6,
                },
              });
            }

            document
              .querySelectorAll<HTMLElement>("[data-gsap-interaction]")
              .forEach((element) => {
                const nudge = gsap.quickTo(element, "x", {
                  duration: 0.24,
                  ease: "power2.out",
                });
                const enter = () => nudge(4);
                const leave = () => nudge(0);

                element.addEventListener("pointerenter", enter);
                element.addEventListener("pointerleave", leave);
                element.addEventListener("focus", enter);
                element.addEventListener("blur", leave);
                interactionCleanup.push(() => {
                  element.removeEventListener("pointerenter", enter);
                  element.removeEventListener("pointerleave", leave);
                  element.removeEventListener("focus", enter);
                  element.removeEventListener("blur", leave);
                });
              });
          });

          refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());
        })
        .catch(() => {
          loading = false;
        });
    };

    const updateMotionPreference = () => {
      if (motionPreference.matches) {
        clear();
      } else {
        setup();
      }
    };

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);

    return () => {
      cancelled = true;
      motionPreference.removeEventListener("change", updateMotionPreference);
      clear();
    };
  }, [pathname]);

  return <>{children}</>;
}