import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import Table, { TableHeader } from "../../shared/Table";
import { Product } from "../../shared/Table/Table.mockdata";
import ProductForm, { ProductCreator } from "../Products/ProductForm";
import * as ProductAction from '../../redux/Products/Products.actions';
import { RootState } from '../../redux';

const headers: TableHeader[] = [
    { key: "_id", value: "#" },
    { key: "name", value: "Product" },
    { key: "price", value: "Price", right: true },
    { key: "stock", value: "Available Stock", right: true },
];

declare interface ProductsCRUDProps {
    products: Product[]
}

const ProductsCRUD: React.FC<ProductsCRUDProps> = (props) => {

    const dispatch = useDispatch()

    const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>()

    async function fetchData() {
        try {
            await dispatch(ProductAction.getProducts())
        } catch (error) {
            Swal.fire('Oops', error.message, 'error')
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleProductSubmit = async (product: ProductCreator) => {
        try {
            await dispatch(ProductAction.insertNewProduct(product))
            Swal.fire('Created!', 'The product has been created.', 'success')
        } catch (error) {
            Swal.fire('Oops', error.message, 'error')
        }
    }

    const handleProductUpdate = async (newProduct: Product) => {
        try {
            await dispatch(ProductAction.updateProduct(newProduct))
            Swal.fire('Updated!', 'The product has been updated.', 'success')
        } catch (error) {
            Swal.fire('Oops', error.message, 'error')
        }
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

    const deleteProduct = async (id: string) => {
        try {
            await dispatch(ProductAction.deleteProduct(id))
            Swal.fire('Deleted!', 'The product has been deleted.', 'success')
        } catch (error) {
            Swal.fire('Oops', error.message, 'error')
        }
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
                deleteProduct(product._id)
            }
        })
    }

    return <>
        <Table headers={headers} data={props.products} enableAction
            onDetail={handleProductDetail}
            onEdit={handleProductEdit}
            onDelete={handleProductDelete} />
        <ProductForm
            form={updatingProduct}
            onSubmit={handleProductSubmit}
            onUpdate={handleProductUpdate}
        />
    </>
}

const mapStateToProps = (state: RootState) => ({
    products: state.products
})

export default connect(mapStateToProps)(ProductsCRUD)