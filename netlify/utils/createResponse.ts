import type { HandlerResponse } from "@netlify/functions";

type Methods = "POST" | "PATCH" | "DELETE";

export default function createResponse(
  statusCode: number,
  method: Methods,
  message: string
): HandlerResponse {
  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": method,
    },
    body: JSON.stringify({ message }),
  };
}
