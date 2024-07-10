import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();

const client = new MongoClient(process.env.MONGODB_URI);

export default async () => {
  await client.connect();

  const database = await client.db(process.env.MONGODB_DATABASE);
  const collection = database.collection(process.env.MONGODB_COLLECTION);

  return collection;
};
