import { ObjectId } from "mongodb";

export interface ProductType {
  _id?: ObjectId;
  STYLE: string;
  TYPE: string;
  PLACE: string;
  LEFT: number;
  COLOR: string;
  BRAND: string;
  SHIPPING_COMPANY: string;
}

export interface ModalType {
  show: boolean;
  message: string;
}

export interface ResponseType {
  status: string;
  message: string;
  payload?: ProductType | ProductType[];
}
