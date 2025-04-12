import { Handler } from "@netlify/functions";
import connect_db from "../../utils/connect_db";

export const handler: Handler = async (event) => {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Wrong request" }),
      };
    }

    const updatedProduct = JSON.parse(event.body);

    if (!updatedProduct.STYLE) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing STYLE property" }),
      };
    }
    const response = await connect_db(async (collection) => {
      const result = await collection.updateOne(
        { STYLE: updatedProduct.STYLE },
        { $set: updatedProduct }
      );

      if (result.matchedCount === 0) {
        return { statusCode: 404, message: "Product not found" };
      }

      if (result.modifiedCount === 0) {
        return { statusCode: 400, message: "No changes were made" };
      }

      return { statusCode: 200, message: "The product has been updated" };
    });

    return {
      statusCode: response.statusCode,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "PATCH",
      },
      body: JSON.stringify({ message: response.message }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
