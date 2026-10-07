import Image from "next/image";
import Link from "next/link";
import { PageGrid } from "@/components/system/Container";
import { Text } from "@/components/system/Text";
import { navItems } from "@/lib/site/nav";

const contactEmail = "sales@bntmarine.com";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border-subtle">
      <PageGrid
        data-scroll-reveal
        className="gap-y-space-48 py-space-64"
      >
        {/* BRAND / ADDRESS */}
        <div className="col-span-4 md:col-span-6 lg:col-span-4">
          <Link
            href="/#hero"
            className="inline-flex items-center"
            aria-label="BNT home"
          >
            <Image
              src="/Img/bnt_new_logo_vectorized.png"
              alt="BNT Marine"
              width={120}
              height={72}
              className="h-20 w-auto object-contain md:h-24"
            />
          </Link>

          <div className="mt-space-24 space-y-space-16 text-body-small">
            <p className="leading-[1.7] text-text-secondary">
              <span className="font-medium text-text-primary">
                Register Office:
              </span>{" "}
              74/5 Abishekapakkam Main Road,
              <br />
              Thavalakuppam, Puducherry 605007, India.
            </p>

            <p className="leading-[1.7] text-text-secondary">
              <span className="font-medium text-text-primary">
                Yard Site:
              </span>{" "}
              New Port area, Puducherry - 605001, India.
            </p>

            <p className="leading-[1.7] text-text-secondary">
              <span className="font-medium text-text-primary">
                Andaman Branch:
              </span>{" "}
              BNT Marine Crafts India PVT LTD, S Square Complex, Shadipur,
              South Andaman, 744106, Andaman and Nicobar Islands.
            </p>
          </div>
        </div>

        {/* EXPLORE */}
        <nav
          aria-label="Footer"
          className="col-span-4 md:col-span-6 lg:col-span-4"
        >
          <Text variant="eyebrow">Explore</Text>

          <ul className="mt-space-24 grid grid-cols-2 gap-x-space-32 gap-y-space-16">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="
                    type-eyebrow
                    text-text-secondary
                    transition-colors
                    duration-300
                    hover:text-text-primary
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ENQUIRIES */}
        <div className="col-span-4 md:col-span-12 lg:col-span-4">
          <Text variant="eyebrow">Enquiries</Text>

          <div className="mt-space-24 space-y-space-16 text-body-small">
            <div className="space-y-space-10 text-text-secondary">
              <a
                href="tel:+916382946876"
                className="
                  block
                  transition-colors
                  duration-300
                  hover:text-brand-primary
                "
              >
                Mobile 1: +91 63829 46876
              </a>

              <a
                href="tel:+919159714768"
                className="
                  block
                  transition-colors
                  duration-300
                  hover:text-brand-primary
                "
              >
                Mobile 2: +91 91597 14768
              </a>
            </div>

            <a
              href={`mailto:${contactEmail}`}
              className="
                inline-block
                underline
                decoration-border-subtle
                underline-offset-4
                transition-colors
                duration-300
                hover:text-brand-primary
              "
            >
              {contactEmail}
            </a>
          </div>
        </div>
      </PageGrid>
    </footer>
  );
}