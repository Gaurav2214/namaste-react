import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import React from "react";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return(
        <React.Fragment>
            <div className="cart-page text-center m-4 p-4">
                <h1 className=" text-xl font-bold">Card</h1>            
            <div>
                <button className=" text-white bg-slate-950 rounded-md p-2 mt-2" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length === 0 && (
                    <h1 className="mt-2"> Cart is empty. Add items to the card!</h1>
                )}
                <ItemList items={cartItems} />
            </div>
            </div>
        </React.Fragment>
    )
}

export default Cart;