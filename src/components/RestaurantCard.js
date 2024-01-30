import { CDN_URL, LOGO_URL} from "../utils/constants";
import { useContext } from 'react';
import UserContext from "../utils/UserContext";

const stylecard = {
    background: '#f6f6f6',
}
const stylecard1 = {
    position: 'relative'
}

const RestaurantCard = (props) => {
    const {loggedInUser} = useContext(UserContext);
    const {resData} = props;
    const {
        cloudinaryImageId, 
        name, 
        cuisines, 
        costForTwo, 
        avgRating, 
        sla } = resData?.info;

    return(
        <div style={stylecard}>
            <img width={200} height={130} src={CDN_URL + cloudinaryImageId} alt="" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} star</h4>
            <h4>{sla.deliveryTime} minutes</h4>
            <h4>User: {loggedInUser}</h4>
        </div>
    )
}

export const withPromoted = (RestaurantCard) => {
    return (props) => {
        return(
            <div style={stylecard1}>
                <div className="promoted-label">Promoted</div>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;