import { CDN_URL } from "../utils/constants";

const stylecard = {
    background: '#f6f6f6',
}

const RestaurantCard = (props) => {
    const {resData} = props;
    const {
        cloudinaryImageId, 
        name, 
        cuisines, 
        costForTwo, 
        avgRating, 
        sla } = resData?.info;

    return(
        <div className="res-card" style={stylecard}>
            <img width={200} height={130} src={CDN_URL + cloudinaryImageId} alt="" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} star</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;