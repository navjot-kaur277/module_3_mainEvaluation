import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";


const UpdateRestaurant = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const [formData , setFormData] = useState({
        ...state, parking : String(state.parking)
    });

    const handleUpdate = (e) => {
        e.preventDefault();
        if (window.confirm("Update this restaurant?")) {
            const allData = JSON.parse(localStorage.getItem("evalData")) || [];

            const updateList = allData.map((item) => item.id === formdata.id ? {
                ...formData.parking === "true" } : item
            );

            localStorage.setItem("evalData", JSON.stringify(updatedList));
            navigate ("/admin/dashboard");
        }
    };

    return (
        <div className="container" style={{justifyContent : "center", alignItems: "center"}}>
            <div className="login-form" style={{width: "400px"}}>
                <h3>Update Restaurant</h3>
                <form onSubmit={handleUpdate}>
                      <div className="form-group">
                        <label>Type</label>
                        <select value={formData.type} onChange={(e)=> setFormData({...formData, type:e.target.value})}>
                            <option value="Rajasthani">Rajasthani</option>
                            <option value="Gujrati">Gujrati</option>
                            <option value="Mughlai">Mughlai</option>
                            <option value="Jain">Jain </option>
                            <option value="Thai">Thai </option>
                            <option value="North Indian"> North Indian </option>
                            <option value="South Indian">South Indian</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label> Parking </label>
                        <select value={formData.parking} onChange={(e)=> setFormData({...formData, parking:e.target.value})}>
                            <option value="true">Yes</option>
                            <option value="false">No </option>
                        </select>
                      </div>

                      <button type = "submit"
                        className="btn"
                      >
                        Update

                      </button>

                </form>

            </div>

        </div>
    );
};