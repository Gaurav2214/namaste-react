import { useEffect, useState } from "react";
import { RES_URL } from "./constants";

const useRestaurantList = () => {
    const [listOfRestaurent, setListOfRestaurent] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(RES_URL);
        const jsonData = await data.json();
        setListOfRestaurent(jsonData?.data?.cards[2]?.card?.card.gridElements.infoWithStyle.restaurants);
        window.getAllRestaurantList(jsonData?.data?.cards[2]?.card?.card.gridElements.infoWithStyle.restaurants);
    }
    return listOfRestaurent;
}

export default useRestaurantList;