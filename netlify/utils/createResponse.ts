import type { HandlerResponse } from "@netlify/functions";

type Methods = "GET" | "POST" | "PATCH" | "DELETE";

export default function createResponse(
  statusCode: number,
  method: Methods,
  message: string,
  payload: unknown = undefined
): HandlerResponse {
  const body: Record<string, unknown> = {
    status: statusCode,
    message,
  };

  if (payload !== undefined) {
    body.payload = payload;
  }
  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": method,
    },
    body: JSON.stringify(body),
  };
}
