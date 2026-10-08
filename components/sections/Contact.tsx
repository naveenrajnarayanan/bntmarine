
import { PageGrid } from "@/components/system/Container";
import { Text } from "@/components/system/Text";
import { EnquiryForm } from "@/components/sections/EnquiryForm";

export function ContactSection() {
  return (
    <PageGrid
      as="section"
      id="contact"
      data-scroll-reveal
      aria-labelledby="contact-title"
      className="section-space scroll-mt-[56px] md:scroll-mt-[68px] items-start border-t border-border-subtle"
    >
      <div className="col-span-4 md:col-span-12">
        <Text variant="eyebrow">Contact</Text>
        <Text
          id="contact-title"
          as="h2"
          variant="h2"
          className="mt-space-24"
        >
          Start a conversation.
        </Text>
      </div>

      <div className="col-span-4 mt-space-48 md:col-span-12">
        <EnquiryForm />
      </div>
    </PageGrid>
  );
}
