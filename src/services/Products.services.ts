import http from "../utils/http";
import { Product } from "../shared/Table/Table.mockdata";
import { ProductCreator } from "../components/Products/ProductForm";

export const getAllProducts = () =>
  http.get<Product[]>("/products").then((res) => res.data);

export const getSingleProduct = (_id: string) =>
  http.get<Product>(`/products/${_id}`);

export const createSingleProduct = (product: ProductCreator) =>
  http.post("/products", product);

export const updateSingleProduct = ({ _id, name, price, stock }: Product) =>
  http.patch(`/products/${_id}`, {
    ...(name && { name }),
    ...(price && { price }),
    ...(stock && { stock }),
  });

export const deleteSingleProduct = (_id: string) =>
  http.delete(`/products/${_id}`);
