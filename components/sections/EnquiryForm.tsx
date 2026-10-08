"use client";

import type { FormEvent } from "react";
import { Text } from "@/components/system/Text";

const contactEmail = "sales@bntmarine.com";

export function EnquiryForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const body = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Phone number: ${formData.get("phone")}`,
      `Country: ${formData.get("country")}`,
      `Enquiry topic: ${formData.get("topic")}`,
      "",
      "Message:",
      formData.get("message"),
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      "BNT Marine enquiry",
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Send an enquiry to BNT Marine"
      className="grid w-full grid-cols-1 gap-space-24 md:grid-cols-2"
    >
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
          className="mt-space-8 w-full border border-border-subtle bg-background-secondary px-space-16 py-space-12 text-body text-text-primary"
        />
      </div>

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
          className="mt-space-8 w-full border border-border-subtle bg-background-secondary px-space-16 py-space-12 text-body text-text-primary"
        />
      </div>

      <div>
        <Text
          as="label"
          htmlFor="enquiry-phone"
          variant="eyebrow"
          className="type-eyebrow text-text-secondary"
        >
          Phone number
        </Text>
        <input
          id="enquiry-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          className="mt-space-8 w-full border border-border-subtle bg-background-secondary px-space-16 py-space-12 text-body text-text-primary"
        />
      </div>

      <div>
        <Text
          as="label"
          htmlFor="enquiry-country"
          variant="eyebrow"
          className="type-eyebrow text-text-secondary"
        >
          Country
        </Text>
        <input
          id="enquiry-country"
          name="country"
          type="text"
          autoComplete="country-name"
          required
          className="mt-space-8 w-full border border-border-subtle bg-background-secondary px-space-16 py-space-12 text-body text-text-primary"
        />
      </div>

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
          className="mt-space-8 w-full border border-border-subtle bg-background-secondary px-space-16 py-space-12 text-body text-text-primary"
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
          className="mt-space-8 min-h-space-160 w-full resize-y border border-border-subtle bg-background-secondary px-space-16 py-space-12 text-body text-text-primary"
        />
      </div>

      <button
        type="submit"
        className="w-fit border border-border-default px-space-24 py-space-16 text-cta text-text-primary hover:border-brand-primary hover:text-brand-primary md:col-span-2"
      >
        Send enquiry
      </button>
    </form>
  );
}
