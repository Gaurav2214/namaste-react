import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, onClick}) => {
   
    return(
        <div className="m-auto bg-gray-50 shadow-lg p-4 mt-2">
            <div className="flex justify-between cursor-pointer" onClick={onClick}>
                <span className="font-bold text-lg">
                    {data.title} ({data.itemCards.length})
                </span>
                <span>⬇️</span>
            </div>
            {showItems && <ItemList items={data.itemCards} />}
        </div>
    )
}

export default RestaurantCategory;