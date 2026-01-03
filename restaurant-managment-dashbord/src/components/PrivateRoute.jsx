import React, { Children, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const PrivateRoute =
 ({Children, role}) => {
    const {user} = 
    useContext(AuthContext);

    if (!user) return <Navigate to ="/" />;

    if (role && user.role !== role)
        return <Navigate to= "/" />;
    return Children;
 };

 export default PrivateRoute;