import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './SearchBox.css'
import { useState } from 'react';
import { red } from '@mui/material/colors';

// export default function({setWeatherInfo}){
export default function({updateInfo}){
        
         let [city,setCity]=useState("");
         let [isErr,setErr]=useState(false);
        const API_URL="https://api.openweathermap.org/data/2.5/weather";
        const API_KEY="20e778af213ea5ccd534f3d1abcfa7ad";

        let getWeatherInfo = async ()=>{

         try {
            let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result={
              city:city,
              temp:jsonResponse.main.temp,
              tempMin:jsonResponse.main.temp_min,
              tempMax:jsonResponse.main.temp_max,
              humidity:jsonResponse.main.humidity,
              feelsLike:jsonResponse.main.feels_like,
              weatherDisc:jsonResponse.weather[0].description
            };
            console.log(result);
              return result;
            //   updateInfo(result);
              // setWeatherInfo(result);
         } catch (error) {
            throw error;
         }

        };



        let handleChange=(evt)=>{
            setCity(evt.target.value)
        }
         
        let handleSubmit= async (evt)=>{
            try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let result = await getWeatherInfo();
            updateInfo(result);
            }catch(error){
                setErr(true);
            }
            
        };

    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit} >
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br /> <br />
            {isErr && <b> <p style={{color: red}} >NO SUCH PLACE AVAILABLE HERE...</p></b>}
            <button variant="contained" type='submit'>search</button>
            </form>
        </div>
    )
}