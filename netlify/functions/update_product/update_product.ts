import { Handler } from "@netlify/functions";
import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();

const client = new MongoClient(process.env.MONGODB_URI);

export const handler: Handler = async (event) => {
  try {
    await client.connect();

    const database = await client.db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION);

    const updatedProduct = event.body ? JSON.parse(event.body) : null;

    console.log(updatedProduct);

    const response = await collection.updateOne(
      { STYLE: updatedProduct.STYLE },
      { $set: updatedProduct }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ response }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString(),
    };
  } finally {
    await client.close();
  }
};
