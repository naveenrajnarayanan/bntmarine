import { PageGrid } from "@/components/system/Container";
import { Text } from "@/components/system/Text";

export function About() {
  return (
    <PageGrid
      as="section"
      id="about"
      data-scroll-reveal
      aria-labelledby="about-title"
      className="section-space scroll-mt-[56px] md:scroll-mt-[68px] border-t border-border-subtle"
    >
      {/* HEADING */}
      <div className="col-span-4 md:col-span-12 lg:col-span-12">
        <Text variant="eyebrow">About</Text>

        <Text
          id="about-title"
          as="h2"
          variant="h2"
          className="
            mt-space-24
            max-w-[90rem]
            tracking-[-0.045em]
            leading-[1]
          "
        >
          About Our Company
        </Text>
      </div>

      {/* CONTENT */}
      <div
        className="
          col-span-4
          mt-space-48
          md:col-span-12
          md:mt-space-12
          lg:col-span-12
          
        "
      >
        <Text
          variant="body-large"
          tone="secondary"
          className="
    max-w-[60rem]
    text-[1.25rem]
    leading-[1.7]
    tracking-[-0.01em]
    md:text-[1.35rem]
    lg:text-[1.4rem]
  "
        >
          Our range brings together craft for fishing, passenger transport,
          semi-submarine use and multihull forms. Each asks different questions
          of its design; the vessel is considered as a whole.
        </Text>

      <ul className="mt-space-48">
        <li className="grid grid-cols-4 items-center gap-x-space-16 border-t border-border-subtle py-space-24">
          <Text
            as="span"
            variant="h4"
            className="col-span-4 text-left text-[1.5rem] font-medium leading-[1.2] tracking-[-0.03em] text-text-primary md:col-span-1 md:text-left md:text-[1.65rem] lg:text-[2rem]"
          >
            The range
          </Text>

          <Text
            variant="body"
            tone="secondary"
            className="
              col-span-4
              mt-space-12
              text-[1.25rem]
              leading-[1.7]
              tracking-[-0.01em]
              md:col-span-3
              md:mt-0
              md:text-[1.35rem]
              lg:text-[1.4rem]
            "
          >
            Aluminium passenger ferry, High speed crew boat, rescue boat,
            ambulance boat, semi-submarine, game fishing vessel, catamaran and
            trimaran.
          </Text>
        </li>

        <li className="grid grid-cols-4 items-center gap-x-space-16 border-t border-border-subtle py-space-24">
          <Text
            as="span"
            variant="h4"
            className="col-span-4 text-left text-[1.5rem] font-medium leading-[1.2] tracking-[-0.03em] text-text-primary md:col-span-1 md:text-left md:text-[1.65rem] lg:text-[2rem]"
          >
            Our philosophy
          </Text>

          <Text
            variant="body"
            tone="secondary"
            className="
              col-span-4
              mt-space-12
              text-[1.25rem]
              leading-[1.7]
              tracking-[-0.01em]
              md:col-span-3
              md:mt-0
              md:text-[1.35rem]
              lg:text-[1.4rem]
            "
          >
            Structure, performance and finish are treated as one discipline,
            considered in relation to the complete craft.
          </Text>
        </li>

        <li className="grid grid-cols-4 items-center gap-x-space-16 border-t border-border-subtle py-space-24">
          <Text
            as="span"
            variant="h4"
            className="col-span-4 text-left text-[1.5rem] font-medium leading-[1.2] tracking-[-0.03em] text-text-primary md:col-span-1 md:text-left md:text-[1.65rem] lg:text-[2rem]"
          >
            Engineering &amp; manufacturing
          </Text>

          <Text
            variant="body"
            tone="secondary"
            className="
              col-span-4
              mt-space-12
              text-[1.25rem]
              leading-[1.7]
              tracking-[-0.01em]
              md:col-span-3
              md:mt-0
              md:text-[1.35rem]
              lg:text-[1.4rem]
            "
          >
            Engineering and manufacturing belong in the same conversation.
            Construction, function and finish are considered together, rather than
            as separate stages.
          </Text>
        </li>
      </ul>
      </div>
    </PageGrid>
  );
}
