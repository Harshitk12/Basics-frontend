import { createContext, useContext, useState } from "react";
import { getWeatherData,getWeatherDataForLocation } from "../api";

const WeatherContext=createContext();

export const useWeather=()=>{
    return useContext(WeatherContext);
}

export const WeatherProvider =(props)=>{
    const [data,setData]=useState();
    const [searchCity,setSearchCity]=useState('');

    const fetchData=async()=>{
        const response=await getWeatherData(searchCity);
        setData(response);
    }

    const fetchCurrentUserLocationData=()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            getWeatherDataForLocation(position.coords.latitude,position.coords.longitude)
            .then((data)=>setData(data));
        })
    }

    return (<WeatherContext.Provider value={{searchCity,data,setSearchCity,fetchData,fetchCurrentUserLocationData}}>{props.children}</WeatherContext.Provider>)
}