import { useWeather } from "../Contexts/Weather";

const Input=()=>{
    const weather=useWeather();
    const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      weather.fetchData();
    }
  };
    return(
        <input className="input-field" 
        placeholder="Search City"
        value={weather.searchCity}
        onChange={(e)=>weather.setSearchCity(e.target.value)}
        onKeyDown={handleKeyPress}
         />
    )
}

export default Input;