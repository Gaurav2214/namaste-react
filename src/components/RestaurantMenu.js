import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import Simmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json);
        console.log(json);
    }
    
    if(resInfo === null) return <Simmer />;
    
    const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[0]?.card.card.info;
    const {itemCards} = 
        resInfo?.data?.cards[2].groupedCard?.cardGroupMap.REGULAR?.cards[2].card?.card;

    return(
        <div className="menu-items">
            {/* {resInfo.map((resItems) => {})} */}
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <ul>
                {itemCards.map((resItems) => {
                    return (<li key={resItems.card.info.id}>
                        {resItems.card.info.name} - Rs. {resItems.card.info.defaultPrice/100 || resItems.card.info.price/100}
                    </li>)
                    })
                }
            </ul>
        </div>
    );    
}

export default RestaurantMenu;