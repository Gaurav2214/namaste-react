import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Simmer from "./Shimmer";
import { RES_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const Body = () => {

    const [listOfRestaurent, setListOfRestaurent] = useState([]);
    const [filterRes, setFilterRes] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_URL);

        const jsonData = await data.json();
        setListOfRestaurent(jsonData?.data?.cards[2]?.card?.card.gridElements.infoWithStyle.restaurants);
        setFilterRes(jsonData?.data?.cards[2]?.card?.card.gridElements.infoWithStyle.restaurants);
        //console.log(jsonData);
    }  
    
    // Conditional Rendering
    // if(listOfRestaurent.length == 0){
    //     return (
    //         <Simmer />
    //     )
    // }

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
                        <Link to={"/restaurants/" + restaurant.info.id}>
                            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                        </Link>
                    ))
                }                               
            </div>
        </div>
    )
}

export default Body;