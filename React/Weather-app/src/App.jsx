import { useEffect } from "react";
import Card from './Components/Card';
import Input from './Components/Input';
import Button from './Components/Button';
import {useWeather} from './Contexts/Weather'
import './App.css'

function App() {
  const weather =useWeather();
  console.log(weather)
  useEffect(()=>{
    weather.fetchCurrentUserLocationData()
  },[])
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <div className="input-group">
        <Input/>
        <Button onClick={weather.fetchData} className='search' value="Search"/>
      </div>
      <Card/>
      <Button onClick={weather.fetchData} className='refresh' value="Refresh"/>
    </div>
  )
}

export default App
