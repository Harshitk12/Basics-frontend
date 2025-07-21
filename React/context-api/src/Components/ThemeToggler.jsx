import React from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import { useContext } from "react";

export default function ThemeToggler(){
    const {theme,setTheme}=useContext(ThemeContext);
    return(
        <>
        <p>Current Theme :{theme}</p>
        <button onClick={()=>{setTheme(theme==='light'?'dark':'light')}}>Toggle </button>
        </>
    )
}