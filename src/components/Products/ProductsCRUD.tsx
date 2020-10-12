import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import Table, { TableHeader } from "../../shared/Table";
import { Product } from "../../shared/Table/Table.mockdata";
import ProductForm, { ProductCreator } from "../Products/ProductForm";
import * as ProductAction from '../../redux/Products/Products.actions';
import { RootState, ThunkDispatch } from '../../redux';

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

    const dispatch: ThunkDispatch = useDispatch()

    const showErrorAlert = (err: Error) => {
        Swal.fire('Oops', err.message, 'error')
    }

    const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>()

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [])

    async function fetchData() {
        dispatch(ProductAction.getProducts())
            .catch(showErrorAlert)
    }

    const handleProductSubmit = async (product: ProductCreator) => {
        dispatch(ProductAction.insertNewProduct(product))
            .then(() => Swal.fire('Created!', 'The product has been created.', 'success'))
            .catch(showErrorAlert)
    }

    const handleProductUpdate = async (newProduct: Product) => {
        dispatch(ProductAction.updateProduct(newProduct))
            .then(() => {
                setUpdatingProduct(undefined)
                Swal.fire('Updated!', 'The product has been updated.', 'success')
            }).catch(showErrorAlert)
    }

    const handleProductDetail = (product: Product) => {
        Swal.fire(
            'Product details',
            `${product.name} costs $${product.price}. There are ${product.stock} available in stock.`,
            'info'
        )
    }

    const deleteProduct = async (id: string) => {
        dispatch(ProductAction.deleteProduct(id))
            .then(() => Swal.fire('Deleted!', 'The product has been deleted.', 'success'))
            .catch(showErrorAlert)
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
        }).then(({ value }) => value && deleteProduct(product._id))
    }

    return <>
        <Table headers={headers} data={props.products} enableAction
            itemsPerPage={3}
            onDetail={handleProductDetail}
            onEdit={setUpdatingProduct}
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