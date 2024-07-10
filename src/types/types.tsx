import { ObjectId } from "mongodb";

export interface ProductType {
  _id: ObjectId | undefined;
  STYLE: string | undefined;
  TYPE: string | undefined;
  PLACE: string | undefined;
  LEFT: number | undefined;
  COLOR: string | undefined;
  BRAND: string | undefined;
  SHIPPING_COMPANY: string | undefined;
}
