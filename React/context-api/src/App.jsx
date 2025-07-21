import React from "react";
import Item from './Components/Item';
import Cart from "./Components/Cart";
import './App.css'
function App() {

  return (
    <>
    <Item name='mac-book' price={1000}/>
    <Item name='realme 12+' price={400}/>
    <Item name='Asus-vivobook pro 15' price={400}/>
    <Cart/>
    </>
    
  )
}

export default App
