import { Handler } from "@netlify/functions";
import connect_db from "../../utils/connect_db";

interface ResponseType {
  statusCode: number;
  message: string;
}
export const handler: Handler = async (event) => {
  try {
    const newProduct = event.body ? JSON.parse(event.body) : null;

    if (!newProduct) return { statusCode: 400, message: "Wrong request" };

    const response = (await connect_db(async (collection) => {
      const alreadyExists = await collection.findOne({
        STYLE: newProduct.STYLE,
      });

      if (alreadyExists) return { statusCode: 403, message: "Already exists" };

      const newEntry = await collection.insertOne(newProduct);

      if (newEntry.insertedId)
        return { statusCode: 200, message: "A new record has been added" };
    })) as ResponseType;

    return {
      statusCode: response.statusCode,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST",
      },
      body: JSON.stringify(response.message),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
