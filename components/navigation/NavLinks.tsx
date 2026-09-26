"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/design-system/cn";
import { typeClass } from "@/lib/design-system/classes";
import { navItems } from "@/lib/site/nav";

type NavLinksProps = {
  onNavigate?: () => void;
  stacked?: boolean;
};

export function NavLinks({ onNavigate, stacked = false }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul
      className={cn(
        stacked
          ? "flex flex-col gap-space-32"
          : "flex items-center gap-space-32 lg:gap-space-48",
      )}
    >
      {navItems.map((item) => {
        const itemPath = item.href.split("#")[0];
        const itemHash = item.href.split("#")[1];
        const isActive =
          pathname === itemPath && (!itemHash || itemHash === "hero");

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={cn(
                stacked ? typeClass.h3 : typeClass.navigation,
                "nav-link type-eyebrow",
                isActive && "is-active",
              )}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
