import { Anchor } from "lucide-react";
import { PageGrid } from "@/components/system/Container";
import { Text } from "@/components/system/Text";

const statistics = [
  { value: 13, label: "Years of Yachting Excellence" },
  { value: 30, label: "Present Style" },
  { value: 6, label: "Destinations" },
];

export function Numbers() {
  return (
    <PageGrid
      as="section"
      data-scroll-reveal
      aria-labelledby="numbers-title"
      className="section-space border-y border-border-subtle lg:items-center"
    >
      <div className="col-span-4 flex items-start gap-space-16 md:col-span-8 md:items-center lg:col-span-4 lg:flex-col lg:items-start lg:gap-space-24">
        <Anchor
          aria-hidden="true"
          className="mt-space-4 size-6 shrink-0 text-brand-primary md:size-8"
          strokeWidth={1.5}
        />
        <div>
          <Text id="numbers-title" as="h2" variant="h2">
            Numbers
          </Text>
          <Text variant="eyebrow" className="mt-space-12">
            By the numbers
          </Text>
        </div>
      </div>

      <ul className="col-span-4 grid grid-cols-1 gap-x-space-24 gap-y-space-32 md:col-span-8 md:grid-cols-3 lg:col-span-8">
        {statistics.map(({ value, label }) => (
          <li key={label} className="border-t border-border-subtle pt-space-24">
            <Text
              as="span"
              variant="display-large"
              aria-label={String(value)}
              data-scroll-count={value}
            >
              {value}
            </Text>
            <Text variant="body" tone="secondary" className="mt-space-12">
              {label}
            </Text>
          </li>
        ))}
      </ul>
    </PageGrid>
  );
}