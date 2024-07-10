import { Handler } from "@netlify/functions";
import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();

const client = new MongoClient(process.env.MONGODB_URI);

export const handler: Handler = async () => {
  try {
    await client.connect();

    const database = await client.db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION);

    const products = await collection.find({}).toArray();

    return {
      statusCode: 200,
      body: JSON.stringify(products),
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
