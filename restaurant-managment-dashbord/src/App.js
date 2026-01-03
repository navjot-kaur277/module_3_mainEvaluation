import React from "react";
import {Routes, Route} from "react-router-dom";
import {AuthProvider from "./context/AuthContext"};
import PrivateRoute from "./components/PrivateRoute"
import Login from "./Pages/Login";
import AdminDashboard from "./Pages/AdminDashboard";
import CustomerDashboard from "./Pages/CustomerDashboard";
import updateRestaurant from "./Pages/UpdateRestaurant";
import "./App.css";

function App () {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/"
        element={<Login/>} />
        <Route path="/admin/dashboard"
        element={<PrivateRoute role ="Admin">
          <updateRestaurant/>
        </PrivateRoute>} />
        <Route path="/customers/dashboard"
        element = {<PrivateRoute role = "Customer">
          <CustomerDashboard/>
        </PrivateRoute>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
