import type { HandlerResponse } from "@netlify/functions";
import { ObjectId } from "mongodb";

type Methods = "POST" | "PATCH" | "DELETE";

// interface ProductType {
//   _id?: ObjectId;
//   STYLE: string;
//   TYPE: string;
//   PLACE: string;
//   LEFT: number;
//   COLOR: string;
//   BRAND: string;
//   SHIPPING_COMPANY: string;
// }

export default function createResponse(
  statusCode: number,
  method: Methods,
  message: string,
  payload = undefined
): HandlerResponse {
  const body: Record<string, unknown> = {
    statusCode,
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
