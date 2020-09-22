import React, { useState } from "react";
import Swal from 'sweetalert2'
import "./App.css";
import Header from "../Header";
import Container from "../../shared/Container";
import Table, { TableHeader } from "../../shared/Table";
import Products, { Product } from "../../shared/Table/Table.mockdata";
import ProductForm, { ProductCreator } from "../Products/ProductForm";

const headers: TableHeader[] = [
  { key: "id", value: "#" },
  { key: "name", value: "Product" },
  { key: "price", value: "Price", right: true },
  { key: "stock", value: "Available Stock", right: true },
];


function App() {
  const [products, setProducts] = useState(Products)
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>()

  const handleProductSubmit = (product: ProductCreator) => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        ...product
      }
    ])
  }

  const handleProductUpdate = (newProduct: Product) => {
    setProducts(products.map(product => product.id === newProduct.id ? newProduct : product))

    setUpdatingProduct(undefined)
  }

  const handleProductDetail = (product: Product) => {
    Swal.fire(
      'Product details',
      `${product.name} costs $${product.price}. There are ${product.stock} available in stock.`,
      'info'
    )
  }

  const handleProductEdit = (product: Product) => {
    setUpdatingProduct(product)
  }

  const deleteProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id))
  }

  const handleProductDelete = (product: Product) => {
    Swal.fire({
      title: `Do you want delete ${product.name}?`,
      text: 'You wont be able to revert this!',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonColor: '#09f',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(product.id)
        Swal.fire('Deleted!', 'The product has been deleted.', 'success')
      }
    })
  }

  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <Table headers={headers} data={products} enableAction
          onDetail={handleProductDetail}
          onEdit={handleProductEdit}
          onDelete={handleProductDelete} />
        <ProductForm
          form={updatingProduct}
          onSubmit={handleProductSubmit}
          onUpdate={handleProductUpdate}
        />
      </Container>
    </div>
  );
}

export default App;
