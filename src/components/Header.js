import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default Header;