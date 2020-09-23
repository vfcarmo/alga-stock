import http from "../utils/http";
import { Product } from "../shared/Table/Table.mockdata";

export const getAllProducts = () =>
  http.get<Product[]>("/products").then((res) => res.data);
