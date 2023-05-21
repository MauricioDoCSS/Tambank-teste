import React from "react"
import { Navigate } from "react-router-dom"
import { Login } from "../../pages/Login/Login"

interface IChildren {
    children: any
}

export const PrivateRoute: React.FC<IChildren> = ({children}) => {
    const token = localStorage.getItem('authToken')

    if(token) {
        return children
    }
    return (
        <Navigate to="/login"/>
    )
}