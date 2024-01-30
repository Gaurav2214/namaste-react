import RestaurantCard, { withPromoted } from "./RestaurantCard";
import { useContext, useState } from "react";
import Simmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/UserContext";


const Body = () => {

    const [filterRes, setFilterRes] = useState([]);
    const [searchText, setSearchText] = useState("");

    const listOfRestaurent = useRestaurantList(); 
    window.getAllRestaurantList = (response) => {
        setFilterRes(response);
    }   
    
    const RestaurantCardPromoted = withPromoted(RestaurantCard); 

    const onlineStatus = useOnlineStatus();
    const {loggedInUser, setUserName} = useContext(UserContext);
    
    if(onlineStatus === false) {
        return( 
            <h1>
                Looks like you're offline. Please check your internet connection.
            </h1>
        )
    }

    return listOfRestaurent.length === 0 ? (<Simmer />) : (
        <div className="body">
            <div className="filter flex items-center">
                <div className="search">
                    <button className="search-btn mr-2" 
                        onClick={() => {
                            const filteredList = listOfRestaurent.filter((res) => 
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilterRes(filteredList);
                        }}
                    >Search</button>
                    <input 
                        type="text" 
                        className="search-box" 
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />                    
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
                <div className="search m-4 p-4 flex items-center">
                    <label className=" mr-2">UserName: </label>
                    <input 
                        className="search-box border border-gray-300"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)} 
                    />
                </div>
            </div>
            <div className="res-container">
                {
                    filterRes.map((restaurant) => (
                        <Link className="res-card" to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
                            {
                                restaurant.info.totalRatingsString == '10K+' ? 
                                <RestaurantCardPromoted resData={restaurant} /> : 
                                <RestaurantCard resData={restaurant} />
                            }                            
                        </Link>
                    ))
                }                               
            </div>
        </div>
    )
}

export default Body;