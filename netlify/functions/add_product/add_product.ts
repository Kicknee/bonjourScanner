import { Handler } from "@netlify/functions";
import connect_db from "../../utils/connect_db";
import createResponse from "../../utils/createResponse";

export const handler: Handler = async (event) => {
  const method = "POST";
  try {
    const newProduct = event.body ? JSON.parse(event.body) : null;

    if (!newProduct) return createResponse(400, method, "Wrong request");

    const response = await connect_db(async (collection) => {
      const alreadyExists = await collection.findOne({
        STYLE: newProduct.STYLE,
      });

      if (alreadyExists) return createResponse(400, method, "Already exists");

      const newEntry = await collection.insertOne(newProduct);

      if (newEntry.insertedId)
        return createResponse(200, method, "A new record has been added");
    });

    return createResponse(400, method, "Wrong Request");
  } catch (error) {
    return createResponse(500, method, "Internal Server Error");
  }
};
