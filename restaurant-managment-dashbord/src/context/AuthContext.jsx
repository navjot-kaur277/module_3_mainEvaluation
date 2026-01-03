import React , {Children, createContext, useState} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider =
 ({Children}) => {
    const [user, setUser]= useState (null);
    const navigate = useNavigate ();

    const login = (email , password) => {
        if (email === "admin@gmail.com" &&  password === "admin1234") {
            setUser ({email, role : "Admin"});
            navigate("/admin/dashboard");
        } else if (email === "customer@gmail.com" && password === "customer1234") {
            setUser ({email , role : "Customer"});
            navigate ('/customers/dashboard');
        } else {
            alert ("Invalid credentials");
        }
    };

    const logout = () => {
        setUser(null);
        navigate("/");
    };

    return (
        <AuthContext.Provider value={
            {user, login,logout}
        }></AuthContext.Provider>
    );
 };