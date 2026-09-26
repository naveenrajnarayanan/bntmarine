import Link from "next/link";
import { PageGrid } from "@/components/system/Container";
import { Text } from "@/components/system/Text";
import { navItems } from "@/lib/site/nav";

const contactEmail = "sales@bntmarine.com";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border-subtle">
      <PageGrid data-scroll-reveal className="gap-y-space-32 py-space-48">
        <div className="col-span-4 md:col-span-4 lg:col-span-5">
          <Link href="/#hero" className="type-eyebrow text-text-primary">
            BNT Marine
          </Link>
          <Text variant="body-small" tone="secondary" className="mt-space-16">
            Marine craft, considered as complete systems.
          </Text>
        </div>

        <nav
          aria-label="Footer"
          className="col-span-4 md:col-span-4 lg:col-span-4"
        >
          <Text variant="eyebrow">Explore</Text>
          <ul className="mt-space-16 grid grid-cols-2 gap-x-space-24 gap-y-space-16">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="type-eyebrow text-text-secondary hover:text-text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-4 md:col-span-8 lg:col-span-3">
          <Text variant="eyebrow">Enquiries</Text>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-space-16 inline-block text-body-small text-text-primary underline decoration-border-subtle underline-offset-4 hover:text-brand-primary"
          >
            {contactEmail}
          </a>
        </div>
      </PageGrid>
    </footer>
  );
}