import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    // if no dependency array => useEffect is called on every render
    // if dependency array is empty = [] => useEffect is called on initial render(just once) 
    // if dependency array is [btnNameReact] => called every time when btnNameReact is updated
    useEffect(() => {
        console.log("Header render");
    }, [btnNameReact]);

    const onlineStatus = useOnlineStatus();

    return(
        <div className="header">
            <div className="logo">
                <img width={100} height={70} src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                    <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>Card</li>
                    <li>
                        <button className="login"
                        onClick={() => {
                            btnNameReact === 'Login' ? setBtnNameReact('Logout') : setBtnNameReact('Login');
                            }}>{btnNameReact}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;