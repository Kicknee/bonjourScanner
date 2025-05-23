import { Handler } from "@netlify/functions";
import connect_db from "../../utils/connect_db";
import createResponse from "../../utils/createResponse";

export const handler: Handler = async () => {
  const method = "GET";

  try {
    const products = await connect_db(async (collection) => {
      return await collection.find({}).toArray();
    });
    if (!products || products.length === 0)
      return createResponse(404, method, "Couldn't get records");

    return createResponse(
      200,
      method,
      "Records have been downloaded",
      products
    );
  } catch (error) {
    return createResponse(
      500,
      method,
      error instanceof Error ? error.message : "Unexpected Error"
    );
  }
};
