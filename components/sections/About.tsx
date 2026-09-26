import { PageGrid } from "@/components/system/Container";
import { Text } from "@/components/system/Text";

export function About() {
  return (
    <PageGrid
      as="section"
      id="about"
      data-scroll-reveal
      aria-labelledby="about-title"
      className="section-space scroll-mt-space-96 items-center border-t border-border-subtle"
    >
      <div className="col-span-4 md:col-span-3 lg:col-span-4">
        <Text variant="eyebrow">About BNT Marine</Text>
        <Text
          id="about-title"
          as="h2"
          variant="h2"
          className="mt-space-24"
        >
          Marine craft, considered as complete systems.
        </Text>
      </div>

      <div className="col-span-4 mt-space-32 md:col-span-5 md:col-start-4 md:mt-0 lg:col-span-7 lg:col-start-6">
        <Text variant="body-large" tone="secondary">
          BNT Marine brings together craft for fishing, passenger transport,
          semi-submarine use and multihull forms. Each asks different questions
          of its design; the vessel is considered as a whole.
        </Text>

        <ul className="mt-space-48">
          <li className="grid grid-cols-4 gap-x-space-16 border-t border-border-subtle py-space-24">
            <Text variant="eyebrow" className="col-span-4 md:col-span-1">
              The range
            </Text>
            <Text
              variant="body"
              tone="secondary"
              className="col-span-4 mt-space-12 md:col-span-3 md:mt-0"
            >
              Game Fishing, Semi Submarine, Catamaran 70 Passenger Ferry and
              Trimaran.
            </Text>
          </li>
          <li className="grid grid-cols-4 gap-x-space-16 border-t border-border-subtle py-space-24">
            <Text variant="eyebrow" className="col-span-4 md:col-span-1">
              Our philosophy
            </Text>
            <Text
              variant="body"
              tone="secondary"
              className="col-span-4 mt-space-12 md:col-span-3 md:mt-0"
            >
              Structure, performance and finish are treated as one discipline,
              considered in relation to the complete craft.
            </Text>
          </li>
          <li className="grid grid-cols-4 gap-x-space-16 border-t border-border-subtle py-space-24">
            <Text variant="eyebrow" className="col-span-4 md:col-span-1">
              Engineering &amp; manufacturing
            </Text>
            <Text
              variant="body"
              tone="secondary"
              className="col-span-4 mt-space-12 md:col-span-3 md:mt-0"
            >
              Engineering and manufacturing belong in the same conversation.
              Construction, function and finish are considered together,
              rather than as separate stages.
            </Text>
          </li>
        </ul>
      </div>
    </PageGrid>
  );
}