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
      className="border-y border-border-subtle py-space-96"
    >
      {/* Section heading */}
      <div className="col-span-full flex items-end justify-between border-b border-border-subtle pb-space-32 lg:col-span-12">
        <div>
          <Text
            id="numbers-title"
            as="h2"
            variant="h2"
            className="tracking-tight"
          >
            Numbers
          </Text>

          <Text
            variant="eyebrow"
            tone="secondary"
            className="mt-space-8"
          >
            
          </Text>
        </div>

        <Text
          variant="eyebrow"
          tone="secondary"
          className="hidden lg:block"
        >
          By the numbers.
        </Text>
      </div>

      {/* Statistics */}
      <ul className="col-span-full grid grid-cols-1 md:grid-cols-3">
        {statistics.map(({ value, label }, index) => (
          <li
            key={label}
            className={[
              "relative pt-space-32 pb-space-16",
              index !== 0
                ? "md:border-l md:border-border-subtle md:pl-space-32"
                : "",
            ].join(" ")}
          >
            <Text
              as="span"
              variant="display-large"
              aria-label={String(value)}
              data-scroll-count={value}
              className="block leading-none tracking-[-0.04em]"
            >
              {value}
            </Text>

            <Text
              as="span"
              variant="body"
              tone="secondary"
              className="mt-space-16 block whitespace-nowrap"
            >
              {label}
            </Text>
          </li>
        ))}
      </ul>
    </PageGrid>
  );
}