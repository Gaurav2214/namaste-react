import UserContext from "../utils/UserContext";
import Button from "./Button";
import EnhancedComp from "./EnhancedComp";
const About = () => {
    const WithEnhanced = EnhancedComp(Button);
    const Text = (props) => <p style={props.style}>Hello World!</p>;

    const withStyle = (Component) => {
        return (props) => {
            const style = {color:'red', fontWeight:'700'};
            return(
                <Component style={style} {...props} />
            )
        }
    }

    const StyledText = withStyle(Text);

    return(
        <div className="about">
            <h2>This is about page</h2>
            <h3>Application info</h3>
            <div>LoggedIn User - 
                <UserContext.Consumer>
                    { ({loggedInUser}) => (
                        <h1 className=" text-xl font-bold"> {loggedInUser} </h1> 
                    )}
                </UserContext.Consumer>
            </div>
            <WithEnhanced />
            <StyledText />
        </div>
    )
}

export default About;