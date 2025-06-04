import { Handler } from "@netlify/functions";
import createResponse from "../../utils/createResponse";

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return createResponse(405, "POST", "Method Not Allowed");
  }

  let { ip, url } = event.body && JSON.parse(event.body);

  if (ip === undefined || url === undefined) {
    return createResponse(400, "POST", "Invalid JSON");
  }

  const formatter = new Intl.DateTimeFormat("pl", {
    dateStyle: "short",
    timeStyle: "short",
  });

  const webhook = process.env.GOOGLE_SCRIPT_WEBHOOK;

  const createdAt = formatter.format(new Date());

  if (!webhook) {
    return createResponse(500, "POST", "Missing Google Script webhook URL");
  }

  try {
    await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ip, url, createdAt }),
    });

    return createResponse(200, "POST", "Logged");
  } catch (error) {
    return createResponse(
      500,
      "POST",
      error instanceof Error ? error.message : "Internal Server Error"
    );
  }
};
