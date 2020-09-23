import { Action } from "./Products.reducer";
import { Product } from "../../shared/Table/Table.mockdata";
import { ProductCreator } from "../../components/Products/ProductForm";

export const insertNewProduct = (): Action<Product> => {
  return {
    type: "INSERT_NEW_PRODUCT",
    payload: {
      _id: "AJFKAfjalja",
      name: "Corona",
      price: 1.5,
      stock: 5,
    },
  };
};
