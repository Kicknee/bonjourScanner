import { Handler } from "@netlify/functions";
import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();
import connect_db from "../../utils/connect_db";

const client = new MongoClient(process.env.MONGODB_URI);

export const handler: Handler = async (event) => {
  try {
    const newProduct = event.body ? JSON.parse(event.body) : null;

    console.log(newProduct);

    const response = await connect_db(async (collection) => {
      return await collection.insertOne(newProduct);
    });
    // await client.connect();

    // const database = await client.db(process.env.MONGODB_DATABASE);
    // const collection = database.collection(process.env.MONGODB_COLLECTION);

    // const updatedProduct = event.body ? JSON.parse(event.body) : null;

    // console.log(updatedProduct);

    // const response = await collection.insertOne(updatedProduct);

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
