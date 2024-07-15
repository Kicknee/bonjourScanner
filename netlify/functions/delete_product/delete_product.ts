import { Handler } from "@netlify/functions";
import connect_db from "../../utils/connect_db";

export const handler: Handler = async (event) => {
  try {
    const { STYLE } = event.body ? JSON.parse(event.body) : null;

    const response = await connect_db(async (collection) => {
      return await collection.deleteOne({ STYLE });
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ response }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString(),
    };
  }
};
