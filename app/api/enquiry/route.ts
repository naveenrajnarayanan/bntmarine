const contactEmail = "sales@bntmarine.com";
const allowedTopics = new Set([
  "Game Fishing",
  "Semi Submarine",
  "Catamaran 70 Passenger Ferry",
  "Trimaran",
  "General enquiry",
]);

function isText(value: unknown, maxLength: number): value is string {
  return (
    typeof value === "string" &&
    value.trim().length > 0 &&
    value.trim().length <= maxLength
  );
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { error: "Please submit a valid enquiry." },
      { status: 400 },
    );
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return Response.json(
      { error: "Please submit a valid enquiry." },
      { status: 400 },
    );
  }

  const form = payload as Record<string, unknown>;
  const { name, email, phone, country, topic, message } = form;

  if (
    !isText(name, 120) ||
    !isText(email, 254) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
    !isText(phone, 40) ||
    !isText(country, 100) ||
    !isText(topic, 100) ||
    !allowedTopics.has(topic.trim()) ||
    !isText(message, 5000)
  ) {
    return Response.json(
      { error: "Please check the form fields and try again." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error("Enquiry email delivery is missing Resend environment settings.");
    return Response.json(
      {
        error: `Enquiry delivery is not configured. Please email ${contactEmail} directly.`,
      },
      { status: 503 },
    );
  }

  const text = [
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    `Phone number: ${phone.trim()}`,
    `Country: ${country.trim()}`,
    `Enquiry topic: ${topic.trim()}`,
    "",
    "Message:",
    message.trim(),
  ].join("\n");

  let deliveryResponse: Response;

  try {
    deliveryResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [contactEmail],
        reply_to: email.trim(),
        subject: `BNT Marine enquiry: ${topic.trim()}`,
        text,
      }),
    });
  } catch (error) {
    console.error("Unable to reach the enquiry email provider.", error);
    return Response.json(
      {
        error: `We couldn't send your enquiry. Please email ${contactEmail} directly.`,
      },
      { status: 502 },
    );
  }

  if (!deliveryResponse.ok) {
    const details = await deliveryResponse.text();
    console.error("The enquiry email provider rejected the message.", details);
    return Response.json(
      {
        error: `We couldn't send your enquiry. Please email ${contactEmail} directly.`,
      },
      { status: 502 },
    );
  }

  return Response.json({ success: true });
}
