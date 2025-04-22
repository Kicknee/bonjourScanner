import { Handler } from "@netlify/functions";
import connect_db from "../../utils/connect_db";
import createResponse from "../../utils/createResponse";

export const handler: Handler = async (event) => {
  const method = "PATCH";
  try {
    if (!event.body) {
      // return {
      //   statusCode: 400,
      //   body: JSON.stringify({ message: "Wrong request" }),
      // };
      return createResponse(400, method, "Wrong request");
    }

    const updatedProduct = JSON.parse(event.body);

    if (!updatedProduct.STYLE) {
      // return {
      //   statusCode: 400,
      //   body: JSON.stringify({ message: "Missing STYLE property" }),
      // };
      return createResponse(400, method, "Missing STYLE property");
    }
    const response = await connect_db(async (collection) => {
      const result = await collection.updateOne(
        { STYLE: updatedProduct.STYLE },
        { $set: updatedProduct }
      );

      if (result.matchedCount === 0) {
        // return { statusCode: 404, message: "Product not found" };
        return createResponse(404, method, "Product not found");
      }

      if (result.modifiedCount === 0) {
        // return { statusCode: 400, message: "No changes were made" };
        return createResponse(400, method, "No changes were made");
      }

      // return { statusCode: 200, message: "The product has been updated" };
      return createResponse(200, method, "The product has been updated");
    });

    return response;
  } catch (error) {
    // return {
    //   statusCode: 500,
    //   body: JSON.stringify(error),
    // };
    return createResponse(
      500,
      method,
      error instanceof Error ? error.message : "Unexpected Error"
    );
  }
};
