import { useState } from "react";
import Simmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams(); 
    const resInfo = useRestaurantMenu(resId);
    const [menuList, setMenuList] = useState([]);
    const [vegMenuList, setVegMenuList] = useState([]);
    const [clicked, setClicked] = useState('');    

    window.getAllMenuList = (response) =>{
        setMenuList(response?.data?.cards[2].groupedCard?.cardGroupMap.REGULAR?.cards[2].card?.card?.itemCards);
        setVegMenuList(response?.data?.cards[2].groupedCard?.cardGroupMap.REGULAR?.cards[2].card?.card?.itemCards);        
    }

    if(resInfo === null) return <Simmer />;   
    const {name, cuisines, costForTwoMessage, sla} = resInfo?.data?.cards[0]?.card.card.info;

    return(
        <div className="menu-items">
            <h2>{name}</h2>
            <h3>{sla.deliveryTime} mins - {costForTwoMessage}</h3>
            <div className="veg-only">
                <h3>Veg Only</h3>
                <button className="vegOnlyLabel"
                    onClick={() => {
                        if(!clicked) { 
                            const vegList = menuList.filter((veg) => 
                                veg.card.info.isVeg 
                            );
                            setVegMenuList(vegList);
                            setClicked('active');
                        } else {
                            setClicked('');
                            setVegMenuList(menuList);
                        }
                    }}>
                    <span className={"ToggleSwitch_toggleBar__1peIy "+clicked}>
                        <span className={"ToggleSwitch_toggleThumb__NBLuA " + clicked}>
                            <span className="ToggleSwitch_toggleThumbContent__33ZU6">
                                <span className="styles_vegOnlyCircle__3UQr3"></span>
                            </span>
                        </span>
                    </span>
                </button>
            </div>
            <ul>
                {vegMenuList.map((resItems) => {
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