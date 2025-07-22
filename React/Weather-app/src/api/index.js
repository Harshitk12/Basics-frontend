const baseURL='https://api.weatherapi.com/v1/current.json?key=747c564cfb3342918b265948240112'

export const getWeatherData=async (city)=>{
    const response=await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json();
}

export const getWeatherDataForLocation=async (lat, lon)=>{
    const response=await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`)
    return await response.json();
}