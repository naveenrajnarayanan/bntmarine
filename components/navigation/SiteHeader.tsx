"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/design-system/cn";
import { PageShell } from "@/components/system/Container";
import { NavLinks } from "@/components/navigation/NavLinks";
import "./header.css";

type SiteHeaderProps = {
  revealed?: boolean;
};

export function SiteHeader({ revealed = false }: SiteHeaderProps) {
  const pathname = usePathname();
  const menuId = useId();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "site-header fixed inset-x-0 top-0 z-30",
        isHome ? (revealed ? "is-revealed" : null) : "is-static",
      )}
    >
      <PageShell className="relative z-50 flex items-center justify-between py-space-8 md:py-space-12">
        <Link
          href="/#hero"
          onClick={() => setMenuOpen(false)}
          className="site-wordmark shrink-0"
          aria-label="BNT Marine home"
        >
          <Image
            src="/Img/bnt_new_logo_vectorized.png"
            alt=""
            width={170}
            height={110}
            className="h-12 w-auto object-contain md:h-16"
            priority
          />
        </Link>

        <nav
          className="hidden md:block"
          aria-label="Primary"
        >
          <NavLinks />
        </nav>

        <button
          type="button"
          className="text-text-primary md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X size={16} strokeWidth={1.25} aria-hidden="true" />
          ) : (
            <Menu size={16} strokeWidth={1.25} aria-hidden="true" />
          )}
        </button>
      </PageShell>

      <div
        id={menuId}
        className={cn(
          "nav-menu-panel fixed inset-0 z-40 bg-background-primary md:hidden",
          menuOpen && "is-open",
        )}
      >
        <PageShell className="flex h-full flex-col justify-center">
          <nav aria-label="Mobile">
            <NavLinks stacked onNavigate={() => setMenuOpen(false)} />
          </nav>
        </PageShell>
      </div>
    </header>
  );
}
