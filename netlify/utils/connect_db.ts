import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DATABASE!;
const collectionName = process.env.MONGODB_COLLECTION!;

if (!uri || !dbName || !collectionName) {
  throw new Error("Missing required environment variables.");
}

let cachedClient: MongoClient | null = null;

export default async function connect_db(callback) {
  if (!cachedClient) {
    cachedClient = new MongoClient(uri);
    await cachedClient.connect();
  }

  const db = cachedClient.db(dbName);
  const collection = db.collection(collectionName);

  return await callback(collection);
}
