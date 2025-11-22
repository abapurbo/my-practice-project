import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router";

export default function PrivateRoute({ children }) {
    const { loading, user } = useAuth()
    const location = useLocation()
    if (loading) {
        return <div className="flex justify-center items-center">
            <h1 className="text-primary text-5xl">Loading...</h1>
        </div>
    }

    if (user) {
        return children
    }

    return <Navigate to='/login' state={location.pathname}></Navigate>
}
