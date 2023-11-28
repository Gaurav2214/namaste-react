import { useState } from "react";
import Simmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const {resId} = useParams(); 
    const resInfo = useRestaurantMenu(resId);
    const [menuList, setMenuList] = useState([]);
    const [vegMenuList, setVegMenuList] = useState([]);
    const [clicked, setClicked] = useState('');  
    const [showIndex, setShowIndex] = useState(0);  

    window.getAllMenuList = (response) =>{
        setMenuList(response?.data?.cards[2].groupedCard?.cardGroupMap.REGULAR?.cards[2].card?.card?.itemCards);
        setVegMenuList(response?.data?.cards[2].groupedCard?.cardGroupMap.REGULAR?.cards[2].card?.card?.itemCards);        
    }

    if(resInfo === null) return <Simmer />;   
    const {name, cuisines, costForTwoMessage, sla} = resInfo?.data?.cards[0]?.card.card.info;
    const categories = resInfo?.data?.cards[2].groupedCard?.cardGroupMap.REGULAR?.cards.filter(c => 
        c.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        );
        //console.log(categories);

    return(
        <div className="menu-items mt-5">
            <h2>{name}</h2>
            <h3>{sla.deliveryTime} mins - {costForTwoMessage}</h3>
            <div className="veg-only mb-5">
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
            {
                categories.map((category, index) => (
                    //controlled component
                    <RestaurantCategory 
                        key={category?.card?.card?.title} 
                        data={category?.card?.card} 
                        showItems={index === showIndex ? true : false}
                        setShowIndex = {() => setShowIndex(index)}
                    />
                ))
            }
        </div>
    );    
}

export default RestaurantMenu;