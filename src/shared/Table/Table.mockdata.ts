export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

const Products: Product[] = [
  {
    id: 1,
    name: "Cookie",
    price: 1.25,
    stock: 20,
  },
  {
    id: 2,
    name: "Milk 1L",
    price: 0.99,
    stock: 10,
  },
  {
    id: 3,
    name: "Guinness 500ml",
    price: 1.99,
    stock: 24,
  },
  {
    id: 4,
    name: "Peanut 250g",
    price: 0.39,
    stock: 5,
  },
];

export default Products;
