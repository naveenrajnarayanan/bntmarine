"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Text } from "@/components/system/Text";

type SubmissionState =
  | { status: "idle" | "sending" }
  | { status: "success" | "error"; message: string };

export function EnquiryForm() {
  const [submission, setSubmission] = useState<SubmissionState>({
    status: "idle",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    setSubmission({ status: "sending" });

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to send your enquiry.");
      }

      form.reset();
      setSubmission({
        status: "success",
        message: "Your enquiry has been sent. We’ll be in touch soon.",
      });
    } catch (error) {
      setSubmission({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your enquiry. Please try again.",
      });
    }
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
        disabled={submission.status === "sending"}
        className="w-fit border border-border-default px-space-24 py-space-16 text-cta text-text-primary hover:border-brand-primary hover:text-brand-primary disabled:cursor-not-allowed disabled:opacity-50 md:col-span-2"
      >
        {submission.status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
      {submission.status === "success" || submission.status === "error" ? (
        <p
          role={submission.status === "error" ? "alert" : "status"}
          className={`text-body ${
            submission.status === "success"
              ? "text-brand-primary"
              : "text-text-secondary"
          } md:col-span-2`}
        >
          {submission.message}
        </p>
      ) : null}
    </form>
  );
}
