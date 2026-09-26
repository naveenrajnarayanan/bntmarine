"use client";

import { useCallback, useEffect, useState } from "react";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { HeroVideo } from "@/components/hero/HeroVideo";
import { ScrollIndicator } from "@/components/hero/ScrollIndicator";
import "./hero.css";

const HERO_SRC = "/videos/bnt-hero.mp4";

export function Hero() {
  const [videoReady, setVideoReady] = useState(false);
  const [chromeReady, setChromeReady] = useState(false);

  const onReady = useCallback(() => {
    setVideoReady(true);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (media.matches) {
      setChromeReady(true);
      return;
    }

    if (!videoReady) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      setChromeReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [videoReady]);

  return (
    <>
      <SiteHeader revealed={chromeReady} />
      <section id="hero" className="hero" aria-label="BNT Marine">
        <HeroVideo src={HERO_SRC} onReady={onReady} visible={videoReady} />
        <ScrollIndicator revealed={chromeReady} />
      </section>
    </>
  );
}
