import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Simmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";


const Body = () => {

    const [filterRes, setFilterRes] = useState([]);
    const [searchText, setSearchText] = useState("");

    const listOfRestaurent = useRestaurantList(); 
    window.getAllRestaurantList = (response) => {
        setFilterRes(response);
    }   
    
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) {
        return( 
            <h1>
                Looks like you're offline. Please check your internet connection.
            </h1>
        )
    }

    return listOfRestaurent.length === 0 ? (<Simmer />) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="search-box" 
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button className="search-btn" 
                        onClick={() => {
                            const filteredList = listOfRestaurent.filter((res) => 
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilterRes(filteredList);
                        }}
                    >Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurent.filter(
                        (res) => res.info.avgRating > 4.1
                    ); 
                    setFilterRes(filteredList);
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {
                    filterRes.map((restaurant) => (
                        <Link className="res-card" to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    ))
                }                               
            </div>
        </div>
    )
}

export default Body;