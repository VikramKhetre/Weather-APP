import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import './InfoBox.css';

export default function InfoBox({info}) {
    let HOT_URL="https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let COLD_URL="https://images.unsplash.com/photo-1425100599170-85ec4f00a6ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1620385019253-b051a26048ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
  return (
    <div className="InfoBox">
      {/* <h1>WeatherInfo - {info.weatherDisc}</h1> */}
      <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity>80 ? RAIN_URL: info.temp>18 ? HOT_URL: COLD_URL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {(info.city).toUpperCase()} {info.humidity> 80 ? <WaterDropIcon/>: info.temp>18 ? <WbSunnyIcon/>: <AcUnitIcon/>}

          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
           <p>Temperature = {info.temp}&deg;C</p> 
           <p>Humidity = {info.humidity}&deg;C</p>
           <p>Temp Max = {info.tempMax}&deg;C</p>
           <p>Temp Min = {info.tempMin}&deg;C</p>
           <p>Weather can be described as <b> {info.weatherDisc} </b> and feels like <b>{info.feelsLike}&deg;C</b></p>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
