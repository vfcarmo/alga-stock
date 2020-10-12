import React, { Component, FC } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'

type Role = 'admin' | 'customer' | undefined

const withPermission = (roles: Role[], redirect = '') => (Component: FC<any>) => (props: any) => {
    const auth = useSelector((state: RootState) => ({
        profile: state.authentication.profile
    }))

    return roles.includes(auth.profile?.role) ? <Component {...props} /> : redirect ? <Redirect to={redirect} /> : null
}

export default withPermission