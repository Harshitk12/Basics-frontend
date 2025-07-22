import { useWeather } from "../Contexts/Weather";

const Card=(props)=>{
    const weather =useWeather();
    const temp = weather?.data?.current?.temp_c;
    const location = weather?.data?.location;

    return(
        <div className="card">
            <img src={weather?.data?.current?.condition?.icon}/>
            {temp !== undefined && <h2>{temp} C</h2>}
            {location?.name && (
                <h5>
                    {location.name}
                    {location.region && `,${location.region}`}
                    {location.country && `,${location.country}`}
                </h5>
            )}
        </div>
    )
}

export default Card;