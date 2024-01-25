import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherAPP(){
    const [WeateherInfo,setWeatherInfo] = useState({
        city:"PUNE",
        feelsLike: 17,
        humidity: 21,
        temp: 18.54,
        tempMax: 18.54,
        tempMin: 18.54,
        weatherDisc: "overcast clouds",
    });

    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }

    return(
        <div>
            <i><h2>Weateher APP</h2></i>
            <SearchBox updateInfo={updateInfo}/>
            {/* <SearchBox setWeatherInfo={setWeatherInfo}/> */}
            <InfoBox info={WeateherInfo}/>
        </div>
    )
    
}