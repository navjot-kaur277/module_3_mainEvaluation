import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";


const CustomerDashboard = () => {
    const [restaurants , setRestaurants] = useState([]);
     const [filters, setFilters]= useState ({search: "", type: "", parking: ""});

     useEffect = (() => {
        const data = JSON.parse(localStorage.getItem("evalData")) || [];
        setRestaurants(data);
     }, [] );

     const filteredRestaurants = restaurants.filter((r) => {
  const matchesSearch = r.name
    .toLowerCase()
    .includes(filters.search.toLowerCase());

  const matchesType = filters.type ? r.type === filters.type : true;

  const matchParking = filters.parking
    ? String(r.parking) === filters.parking
    : true;

  return matchParking && matchesType && matchesSearch;
});  


     

}




 














// Form Inputs 
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