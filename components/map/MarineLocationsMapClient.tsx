"use client";

import dynamic from "next/dynamic";

const MarineLocationsMap = dynamic(
  () =>
    import("./MarineLocationsMap").then(
      (mod) => mod.MarineLocationsMap
    ),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[520px] items-center justify-center bg-background-secondary text-sm text-text-secondary">
        Loading map…
      </div>
    ),
  }
);

export function MarineLocationsMapClient() {
  return <MarineLocationsMap />;
}