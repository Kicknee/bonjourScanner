import { Handler } from "@netlify/functions";
import connect_db from "../../utils/connect_db";

export const handler: Handler = async (event) => {
  try {
    const updatedProduct = event.body ? JSON.parse(event.body) : null;

    if (!updatedProduct) return { statusCode: 400, message: "Wrong request" };

    const response = await connect_db(async (collection) => {
      // const alreadyExists = await collection.findOne({
      //   STYLE: updatedProduct.STYLE,
      // });

      // if (alreadyExists) return { statusCode: 403, message: "Already exists" };

      const updatedEntry = await await collection.updateOne(
        { STYLE: updatedProduct.STYLE },
        { $set: updatedProduct }
      );

      if (updatedEntry.insertedId)
        return { statusCode: 200, message: "A new record has been updated" };
    });

    return {
      statusCode: response.statusCode,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST",
      },
      body: JSON.stringify(response),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
