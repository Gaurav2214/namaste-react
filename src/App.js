import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
//import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";

// chunking
// code splitting
// Dynamic bundling
// lazy loading
// on demand loading

const Grocery = lazy(() => import("./components/Grocery"));
//const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const AppLayout = () => {

    const [userName, setUserName] = useState();
    //authentication
    useEffect(() => {
        const data = {
            name: "Gaurav Tripathi",
        }
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value = {{ loggedInUser: userName, setUserName }}>
                <div className="app-container">
                    <React.Fragment>
                        <Header />
                        <Outlet />
                        <Footer />
                    </React.Fragment>
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
                //element: <Suspense fallback={<h1>Loading....</h1>}><EnhancedComp /></Suspense>,
            },
            {
                path: "/contact",
                element: <Suspense fallback={<h1>Loading....</h1>}><Contact /></Suspense>,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
                errorElement: <Error />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />
    },    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);