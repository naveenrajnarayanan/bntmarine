import { SiteHeader } from "@/components/navigation/SiteHeader";
import { PageShell } from "@/components/system/Container";
import { Text } from "@/components/system/Text";

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <>
      <SiteHeader />
      <main className="section-space">
        <PageShell className="pt-space-128">
          <Text variant="eyebrow">BNT Marine</Text>
          <Text as="h1" variant="h1" className="mt-space-24">
            {title}
          </Text>
        </PageShell>
      </main>
    </>
  );
}
