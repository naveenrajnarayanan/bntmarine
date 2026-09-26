import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { typeClass } from "@/lib/design-system/classes";
import { cn } from "@/lib/design-system/cn";

type ScrollIndicatorProps = {
  revealed: boolean;
};

export function ScrollIndicator({ revealed }: ScrollIndicatorProps) {
  return (
    <Link
      href="#statement"
      aria-label="Scroll to explore"
      className={cn("hero-scroll", typeClass.eyebrow, revealed && "is-revealed")}
    >
      <span>Scroll</span>
      <ArrowDown
        className="hero-scroll-icon"
        size={12}
        strokeWidth={1.25}
        aria-hidden="true"
      />
    </Link>
  );
}
