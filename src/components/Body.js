import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Simmer from "./Shimmer";


const Body = () => {

    const [listOfRestaurent, setListOfRestaurent] = useState([]);
    const [filterRes, setFilterRes] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.587139&lng=77.442412&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData = await data.json();
        setListOfRestaurent(jsonData?.data?.cards[2]?.card?.card.gridElements.infoWithStyle.restaurants);
        setFilterRes(jsonData?.data?.cards[2]?.card?.card.gridElements.infoWithStyle.restaurants);
        console.log(jsonData);
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
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }                               
            </div>
        </div>
    )
}

export default Body;