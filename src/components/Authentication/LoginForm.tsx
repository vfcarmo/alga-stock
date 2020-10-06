import React, { useState } from 'react'
import Form from '../../shared/Form'
import Input from '../../shared/Input'
import Button from '../../shared/Button'

import { Link } from 'react-router-dom'

const initialFormState = {
    user: '',
    password: ''
}


const LoginForm: React.FC = () => {
    const [form, setForm] = useState(initialFormState)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleLogin = () => {
        console.table(form)
        setForm(initialFormState)
    }
    return <Form title="Login - AlgaStock" onSubmit={handleLogin}>
        <Input label="User" name="user" value={form.user} onChange={handleInputChange} placeholder="E.g.: your_user_name123" />
        <Input type="password" label="Password" name="password" value={form.password} onChange={handleInputChange} />
        <Button>Login</Button>
    </Form>
}

export default LoginForm