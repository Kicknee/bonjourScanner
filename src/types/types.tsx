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

export interface ProductProp {
  productProp: ProductType;
}

export interface ModalType {
  show: boolean;
  message: string;
}
