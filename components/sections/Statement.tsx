import { PageGrid } from "@/components/system/Container";
import { Text } from "@/components/system/Text";

export function Statement() {
  return (
    <PageGrid
      as="section"
      id="statement"
      data-scroll-reveal
      className="section-space scroll-mt-[56px] md:scroll-mt-[68px] bg-background-primary"
    >
      <div className="col-span-4 md:col-span-6 lg:col-span-7 lg:col-start-2">
        <Text variant="eyebrow">BNT Marine</Text>
        <Text as="h2" variant="h2" className="mt-space-24">
          Precision-built marine craft, considered as a complete system.
        </Text>
        <Text variant="body-large" tone="secondary" className="mt-space-32">
          Structure, performance, and finish are treated as one discipline.
          This statement is a placeholder for the editorial introduction and
          can be revised without changing the layout.
        </Text>
      </div>
    </PageGrid>
  );
}
