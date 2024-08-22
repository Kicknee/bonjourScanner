import { Handler } from "@netlify/functions";
import connect_db from "../../utils/connect_db";

export const handler: Handler = async () => {
  try {
    const products = await connect_db(async (collection) => {
      return await collection.find({}).toArray();
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET",
      },
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
