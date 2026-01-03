import React , {useEffect, useRef, useContext} from "react";
import { AuthContext } from "../context/AuthContext";


const Navbar = 
   ({ filters, setFilters}) => {
    const {logout , user } =
    useContext (AuthContext);

    const searchInputRef = useRef(null);

    useEffect( () => {
        if (searchInputRef.current) searchInputRef.current.focus();
    }, [] );

    const handleChange = (e) => {
        setFilters(
            {...filters, [e.target.name] : e.target.value});
    };

    return (
        <div className="navbar">
            <h3>{user?.role} Dashboard </h3>
            <input 
                type="text" 
                name="search"
                placeholder="Search..."
                value={filters.search}
                onChange={handleChange}
                ref={searchInputRef}
                style={{flex : 1}}
                />

             <select name="type" 
               onChange={handleChange}
               value={filters.type}>

                <option value="">All Types</option>
                <option value="Rajasthani">Rajasthani</option>
                <option value="Gujrati"> Gujrati</option>
                <option value="Mughlai">Mughlai</option>
                <option value="Jain">Jain</option>
                <option value="Thai">Thai</option>
                <option value="North Indian">North Indian</option>
                <option value="South Indian"> South Indian</option>
             </select>  

             <select name="parking" onChange={handleChange} value={filters.parking}>
                 <option value="">All Parking</option>
                 <option value="true">Yes</option>
                 <option value="false">No</option> 
                </select>
                
                <button className="btn btn-danger" onClick={logout}> Logout </button>

        </div>
    );
   };

   export default Navbar;