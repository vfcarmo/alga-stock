import React, { useState } from "react";
import Form from "../../shared/Form";
import Input from "../../shared/Input";
import Button from "../../shared/Button";

const initialFormState = {
    name: '',
    price: '',
    stock: ''
}

const ProductForm = () => {

    const [form, setForm] = useState(initialFormState)
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <Form title="Product from" onSubmit={() => console.log(form)}>
            <Input
                label="Name"
                placeholder="E.g.: Cookie"
                name="name"
                value={form.name}
                required
                onChange={handleInputChange}
            ></Input>
            <Input
                label="Price"
                placeholder="E.g.: 1.25"
                type="number"
                step="0.01"
                min={0}
                name="price"
                value={form.price}
                required
                onChange={handleInputChange}
            ></Input>
            <Input
                label="Stock"
                placeholder="E.g.: 10"
                type="number"
                min={0}
                name="stock"
                value={form.stock}
                required
                onChange={handleInputChange}
            ></Input>
            <Button>Submit</Button>
        </Form>
    );
};

export default ProductForm;
