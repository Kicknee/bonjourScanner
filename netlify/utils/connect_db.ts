import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DATABASE;
const collectionName = process.env.MONGODB_COLLECTION;

if (!uri || !dbName || !collectionName) {
  throw new Error("Missing required environment variables.");
}

const client = new MongoClient(uri);

export default async (callback) => {
  try {
    await client.connect();

    const database = await client.db(dbName);
    const collection = database.collection(collectionName);

    const result = await callback(collection);

    return result;
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
};
