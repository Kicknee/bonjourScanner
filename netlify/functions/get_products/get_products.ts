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
        "Access-Control-Allow-Origin": "*", // Pozwala na żądania z dowolnej domeny
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
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

// exports.handler = async (event, context) => {
//   return {
//     statusCode: 200,
//     headers: {
//       'Access-Control-Allow-Origin': '*', // Pozwala na żądania z dowolnej domeny
//       'Access-Control-Allow-Headers': 'Content-Type',
//       'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
//     },
//     body: JSON.stringify({ message: "Hello, World!" }),
//   };
// };
