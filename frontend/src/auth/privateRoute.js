import React from 'react'
import { Redirect, Route } from 'react-router'
import { isAuthenticated } from '.'

const PrivateRoute = ({ children }) => {
    return (
        <Route render={() => {
            return isAuthenticated() ? children : <Redirect to={{ pathname: '/signin' }} />
        }} />
    )
}

export default PrivateRoute
