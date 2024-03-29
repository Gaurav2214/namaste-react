import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    // if no dependency array => useEffect is called on every render
    // if dependency array is empty = [] => useEffect is called on initial render(just once) 
    // if dependency array is [btnNameReact] => called every time when btnNameReact is updated
    useEffect(() => {
        console.log("Header render");
    }, [btnNameReact]);

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);

    //subscribing to the store using the selector hook
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return(
        <div className="header flex justify-between bg-pink-50">
            <div className=" w-50">
                <img width={100} height={70} src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul className="flex p-4 m-4">
                    <li className="pl-1">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="pl-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className=" pl-2">
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                    <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className=" px-4 font-bold text-xl">
                        <Link to="/cart">Card - ({cartItems.length} items)</Link>
                    </li>
                    <li>
                        <button className="login"
                        onClick={() => {
                            btnNameReact === 'Login' ? setBtnNameReact('Logout') : setBtnNameReact('Login');
                            }}>{btnNameReact}</button>
                    </li>
                    <li>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;