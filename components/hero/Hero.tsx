"use client";

import { useCallback, useEffect, useState } from "react";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { HeroVideo } from "@/components/hero/HeroVideo";
import { ScrollIndicator } from "@/components/hero/ScrollIndicator";
import "./hero.css";

const HERO_SRC = "/videos/bnt-hero.mp4";

export function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  const onReady = useCallback(() => {
    setVideoReady(true);
  }, []);

  useEffect(() => {
    const navigation = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming | undefined;

    if (navigation?.type !== "reload") {
      return;
    }

    window.history.replaceState(
      window.history.state,
      "",
      `${window.location.pathname}${window.location.search}`,
    );
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SiteHeader revealed />
      <section id="hero" className="hero" aria-label="BNT Marine">
        <HeroVideo src={HERO_SRC} onReady={onReady} visible={videoReady} />
        <ScrollIndicator revealed />
      </section>
    </>
  );
}
