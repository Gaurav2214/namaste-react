import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    return (
        <div className="item-list">
                {items.map((item) => 
                    <div key={item.card.info.id} className="p-2 m-2 border-grey-100 border-b-2">
                        <div className=" py-2 flex justify-between">
                            <div className="w-10/12 ">
                                <span className=" font-semibold">{item.card.info.name} </span>
                                <span> - ₹ {item.card.info.price ? 
                                    item.card.info.price/100 : 
                                    item.card.info.defaultPrice/100} 
                                </span>
                                <p className="text-xs">{item.card.info.description}</p>
                            </div>
                            <div className=" w-2/12 img-container">
                                <img className="styles_itemImage__3CsDL" width={256} loading="lazy" 
                                    alt={item.card.info.name} 
                                    src={CDN_URL + item.card.info.imageId} 
                                />
                                <button className="btn-add">Add </button>
                            </div>
                        </div>
                        
                    </div>)}
        </div>
    )
}

export default ItemList;