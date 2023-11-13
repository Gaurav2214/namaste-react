import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    // if no dependency array => useEffect is called on evert render
    // if dependency array is empty = [] => useEffect is called on initial render(just once) 
    // id dependency array is [btnNameReact] => called every time when btnNameReact is updated
    useEffect(() => {
        console.log("Header render");
    }, [btnNameReact]);

    return(
        <div className="header">
            <div className="logo">
                <img width={100} height={70} src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
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