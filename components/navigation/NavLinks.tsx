"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/design-system/cn";
import { typeClass } from "@/lib/design-system/classes";
import { navItems } from "@/lib/site/nav";
import { products } from "@/lib/site/products";

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
          (pathname === itemPath ||
            (item.href === "/products" && pathname.startsWith("/products/"))) &&
          (!itemHash || itemHash === "hero");
        const isProductsItem = item.href === "/products";

        return (
          <li
            key={item.href}
            className={isProductsItem ? "nav-products-item" : undefined}
          >
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
            {isProductsItem && (
              <ul className="nav-products-dropdown" aria-label="Products">
                {products.map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={`/products/${product.slug}`}
                      onClick={onNavigate}
                      className={cn(
                        typeClass.navigation,
                        "nav-products-link",
                        pathname === `/products/${product.slug}` && "is-active",
                      )}
                      aria-current={
                        pathname === `/products/${product.slug}` ? "page" : undefined
                      }
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
