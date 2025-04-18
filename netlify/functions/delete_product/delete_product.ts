import { Handler } from "@netlify/functions";
import connect_db from "../../utils/connect_db";
import createResponse from "../../utils/createResponse";

export const handler: Handler = async (event) => {
  const method = "DELETE";

  try {
    const product = event.body ? JSON.parse(event.body) : null;

    if (!product) return createResponse(400, method, "Wrong request");

    const response = await connect_db(async (collection) => {
      return await collection.deleteOne({ STYLE: product.STYLE });
    });
    if (!response.deletedCount) {
      return createResponse(404, method, "Couldn't delete the record");
    }

    return createResponse(200, method, "The record has been deleted");

    // return {
    //   statusCode: 200,
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Headers": "Content-Type",
    //     "Access-Control-Allow-Methods": "DELETE",
    //   },
    //   body: JSON.stringify({ response }),
    // };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
