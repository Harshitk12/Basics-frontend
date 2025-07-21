import React from "react";
import { useContext } from "react";
import { CartContext } from "../Contexts/Cart";

function Cart(){
    const cart=useContext(CartContext);
    let total=0;
    cart.items.map((item)=>{total+=item.price});
    return(
        <div className="cart">
            <h1>Cart</h1>
            {cart && cart.items.map((item)=><li>{item.name} - ${item.price}</li>)}
            <h5>Total Bill: ${total}</h5>
        </div>
    )
} 
export default Cart;