import React from "react";
import { CartContext } from "../Contexts/Cart";
import { useContext } from "react";

function Item(props){
    const {items,setItems}=useContext(CartContext);
    return(
        <div className="item-card">
            <h4>{props.name}</h4>
            <p>price : ${props.price}</p>
            <button onClick={()=>{setItems([...items,{name:props.name,price:props.price}])}}>Add to Cart</button>
        </div>
    )
}

export default Item;