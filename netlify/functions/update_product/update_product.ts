import { Handler } from "@netlify/functions";
import connect_db from "../../utils/connect_db";
import createResponse from "../../utils/createResponse";

export const handler: Handler = async (event) => {
  const method = "PATCH";
  try {
    const updatedProduct = event.body ? JSON.parse(event.body) : null;

    if (!updatedProduct) {
      return createResponse(400, method, "Wrong request");
    }

    if (!updatedProduct.STYLE) {
      return createResponse(400, method, "Missing STYLE property");
    }
    delete updatedProduct._id;

    const response = await connect_db(async (collection) => {
      const result = await collection.updateOne(
        { STYLE: updatedProduct.STYLE },
        { $set: updatedProduct }
      );

      if (result.matchedCount === 0) {
        return createResponse(404, method, "Product not found");
      }

      if (result.modifiedCount === 0) {
        return createResponse(400, method, "No changes were made");
      }

      return createResponse(200, method, "The product has been updated");
    });

    return response;
  } catch (error) {
    return createResponse(
      500,
      method,
      error instanceof Error ? error.message : "Internal Server Error"
    );
  }
};
