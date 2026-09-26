"use client";

import { useLayoutEffect, useRef } from "react";

const VIDEO_RATIO = 16 / 9;

function fitHeroVideo(container: HTMLElement, video: HTMLVideoElement) {
  const width = container.clientWidth;
  const height = container.clientHeight;

  if (width === 0 || height === 0) {
    return;
  }

  if (width <= 767) {
    video.style.width = `${width}px`;
    video.style.height = `${height}px`;
    video.style.objectFit = "contain";
    return;
  }

  video.style.objectFit = "cover";

  if (width / height > VIDEO_RATIO) {
    video.style.width = `${width}px`;
    video.style.height = `${width / VIDEO_RATIO}px`;
    return;
  }

  video.style.height = `${height}px`;
  video.style.width = `${height * VIDEO_RATIO}px`;
}

type HeroVideoProps = {
  src: string;
  onReady: () => void;
  visible: boolean;
};

export function HeroVideo({ src, onReady, visible }: HeroVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const readyRef = useRef(false);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;

    if (!container || !video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const applyFit = () => {
      fitHeroVideo(container, video);
    };

    const startPlayback = () => {
      if (motionPreference.matches) {
        return;
      }

      void video.play().catch(() => {
        /* Autoplay can be blocked; the posterless black stage remains until playback. */
      });
    };

    const markReady = () => {
      if (readyRef.current) {
        return;
      }

      readyRef.current = true;
      applyFit();
      startPlayback();
      onReady();
    };

    const updatePlayback = () => {
      if (motionPreference.matches) {
        video.pause();
      } else if (readyRef.current) {
        startPlayback();
      }
    };

    applyFit();

    const observer = new ResizeObserver(applyFit);
    observer.observe(container);

    video.addEventListener("loadedmetadata", applyFit);
    video.addEventListener("canplay", markReady);
    video.addEventListener("playing", markReady);
    motionPreference.addEventListener("change", updatePlayback);

    if (video.readyState >= 3) {
      markReady();
    }

    const fallback = window.setTimeout(markReady, 4000);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
      video.removeEventListener("loadedmetadata", applyFit);
      video.removeEventListener("canplay", markReady);
      video.removeEventListener("playing", markReady);
      motionPreference.removeEventListener("change", updatePlayback);
    };
  }, [onReady]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        className={visible ? "hero-media is-visible" : "hero-media"}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        aria-hidden="true"
        tabIndex={-1}
      />
    </div>
  );
}
