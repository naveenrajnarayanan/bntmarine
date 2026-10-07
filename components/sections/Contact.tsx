
import { PageGrid } from "@/components/system/Container";
import { Text } from "@/components/system/Text";
import { MarineLocationsMapClient } from "@/components/map/MarineLocationsMapClient";

const contactEmail = "sales@bntmarine.com";

export function ContactSection() {
  return (
    <PageGrid
      as="section"
      id="contact"
      data-scroll-reveal
      aria-labelledby="contact-title"
      className="section-space scroll-mt-[56px] md:scroll-mt-[68px] items-start border-t border-border-subtle"
    >
      {/* CONTACT INTRO */}
      <div className="col-span-4 md:col-span-3 lg:col-span-4">
        <Text variant="eyebrow">Contact</Text>

        <Text
          id="contact-title"
          as="h2"
          variant="h2"
          className="mt-space-24"
        >
          Start a conversation.
        </Text>

        <Text
          variant="body-large"
          tone="secondary"
          className="mt-space-32"
        >
          For product enquiries, project discussions and general questions,
          please get in touch with our team.
        </Text>

        <div className="mt-space-48">
          <Text variant="eyebrow">Email</Text>

          <a
            href={`mailto:${contactEmail}`}
            className="
              mt-space-8
              inline-block
              text-body-large
              text-text-primary
              underline
              decoration-border-subtle
              underline-offset-4
              hover:text-brand-primary
            "
          >
            {contactEmail}
          </a>
        </div>
      </div>

      {/* ENQUIRY FORM */}
      <div className="col-span-4 mt-space-64 md:col-span-5 md:col-start-4 md:mt-0 lg:col-span-7 lg:col-start-6">
        <Text id="enquiry-form-title" as="h3" variant="h3">
          Send an enquiry
        </Text>

        <Text
          variant="body-small"
          tone="secondary"
          className="mt-space-16"
        >
          Submitting opens your default email application with the enquiry
          details prepared.
        </Text>

        <form
          action={`mailto:${contactEmail}?subject=BNT%20Marine%20enquiry`}
          method="post"
          encType="text/plain"
          aria-labelledby="enquiry-form-title"
          className="mt-space-32"
        >
          <div className="grid grid-cols-1 gap-space-24 md:grid-cols-2">
            {/* NAME */}
            <div>
              <Text
                as="label"
                htmlFor="enquiry-name"
                variant="eyebrow"
                className="type-eyebrow text-text-secondary"
              >
                Name
              </Text>

              <input
                id="enquiry-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="
                  mt-space-8
                  w-full
                  border
                  border-border-subtle
                  bg-background-secondary
                  px-space-16
                  py-space-12
                  text-body
                  text-text-primary
                "
              />
            </div>

            {/* EMAIL */}
            <div>
              <Text
                as="label"
                htmlFor="enquiry-email"
                variant="eyebrow"
                className="type-eyebrow text-text-secondary"
              >
                Email
              </Text>

              <input
                id="enquiry-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="
                  mt-space-8
                  w-full
                  border
                  border-border-subtle
                  bg-background-secondary
                  px-space-16
                  py-space-12
                  text-body
                  text-text-primary
                "
              />
            </div>

            {/* TOPIC */}
            <div className="md:col-span-2">
              <Text
                as="label"
                htmlFor="enquiry-topic"
                variant="eyebrow"
                className="type-eyebrow text-text-secondary"
              >
                Enquiry topic
              </Text>

              <select
                id="enquiry-topic"
                name="topic"
                defaultValue=""
                required
                className="
                  mt-space-8
                  w-full
                  border
                  border-border-subtle
                  bg-background-secondary
                  px-space-16
                  py-space-12
                  text-body
                  text-text-primary
                "
              >
                <option value="" disabled>
                  Select a topic
                </option>

                <option>Game Fishing</option>
                <option>Semi Submarine</option>
                <option>Catamaran 70 Passenger Ferry</option>
                <option>Trimaran</option>
                <option>General enquiry</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div className="md:col-span-2">
              <Text
                as="label"
                htmlFor="enquiry-message"
                variant="eyebrow"
                className="type-eyebrow text-text-secondary"
              >
                Message
              </Text>

              <textarea
                id="enquiry-message"
                name="message"
                required
                rows={6}
                className="
                  mt-space-8
                  min-h-space-160
                  w-full
                  resize-y
                  border
                  border-border-subtle
                  bg-background-secondary
                  px-space-16
                  py-space-12
                  text-body
                  text-text-primary
                "
              />
            </div>
          </div>

          <button
            type="submit"
            className="
              mt-space-32
              border
              border-border-default
              px-space-24
              py-space-16
              text-cta
              text-text-primary
              hover:border-brand-primary
              hover:text-brand-primary
            "
          >
            Prepare enquiry email
          </button>
        </form>
      </div>

      {/* LOCATIONS MAP */}
      <div className="col-span-4 mt-space-96 md:col-span-12 lg:col-span-12">
        <MarineLocationsMapClient />
      </div>
    </PageGrid>
  );
}
