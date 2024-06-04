import React from 'react'
import { Navigate } from "react-router-dom";
import { getToken } from "../../utils/token"

const Protect = ({ children }) => {
    let token = getToken();
    if (!token) {
        return <Navigate to={'/login'} />;
    }
    return children;
}
export default Protect