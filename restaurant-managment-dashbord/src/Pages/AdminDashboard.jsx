import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Navbar  from "../components/Navbar";
import { type } from "@testing-library/user-event/dist/type";

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [restaurants, setRestaurants] = useState([]);

    const [filters, setFilters]= useState ({search: "", type: "", parking: ""});
};

const [formData, setFormData] = useState({
  name: "",
  address: "",
  type: "Rajasthani",
  parking: "true",
  image:
    "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg",
});

useEffect (() => {
    const data = JSON.parse(
        localStorage.getItem("evalData")) ||
        [];
        setRestaurants(data)}, []);
    
    
    
        const handleAdd = (e) => {
            e.preventDefault();
            const newRestaurant = 
            {...formData, id: Date.now(), parking: formData.parking === "true"};
            const updated = [...restaurants, newRestaurant];

            setRestaurants(updated);
            localStorage.setItem("evalData", JSON.stringify(updated));
            alert("Added Successfully");
            setFormData({...formData, name:"", address: ""});
        };

        const handleDelete= (id) => {
            if (window.confirm("Are you sure?")) {
                const updated = 
                restaurants.filters((r)=> r.id !== id);
                setRestaurants(updated);
                localStorage.setItem("evalData",JSON.stringify(updated));
            }
        };

        const filteredRestaurants = restaurants.filter((r)=> {
            const matchesSearch = r.name.toLowerCase(). includes (filters.search.toLowerCase());

            const matchesType = filters.type ? r.type === filters.type : true;

            const matchParking = filters.parking ? String(r.parking)=== filters.parking : true;

            return matchParking && matchesType && matchesSearch
        });

        return (
          <div className="container">
            <div className="sidebar">
              <h3>Add Restaurant</h3>
              <form onSubmit={handleAdd}>
                <div className="form-group">
                  <label> Name </label>
                  <input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Type</label>
                  <select
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                  >
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
                  <select
                    value={formData.parking}
                    onChange={(e) =>
                      setFormData({ ...formData, parking: e.target.value })
                    }
                  >
                    <option value="true">Yes</option>
                    <option value="false">No </option>
                  </select>
                </div>

                <button type="submit" className="btn">
                  Add Restaurant
                </button>
              </form>
            </div>

            <div className=" main-content">
              <Navbar filters={filters} setFilters={setFilters} />

              <div className="card-grid">
                {filteredRestaurants.map((r) => (
                  <div key={r.id} className="card">
                    <img src={r.image} alt={r.name} />
                    <h4>{r.name}</h4>
                    <p>{r.address}</p>
                    <p>Type : {r.type}</p>
                    <p>Parking : {r.parking ? "Yes" : "No"}</p>
                    <button className="btn" onClick={() => navigate("/admin/restaurants/update" , {state : r})}>
                       Update
                    </button>

                    <button className="btn btn-danger" onClick={() => handleDelete(r.id)} >
                       Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );


        export default AdminDashboard;
