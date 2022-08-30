import axios from "axios"
import { useEffect, useState } from "react"
import Weather from "./components/Weather"
import {usePosition} from "./hooks/usePosition"
const App=()=>{
    const [weather,setWeather]=useState()
    const {latitude,longitude } = usePosition();
    const getWeatherData=async (lat,lon)=>{
        const key=process.env.REACT_APP_WEATHER_API_KEY
        const lang=navigator.language.split("-")[0]
       
        try{
            const {data}=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`)
            setWeather(data)
        }
       catch{
        alert("Veri Alınırken Hata oluştu")
       }
    }
    useEffect(()=>{
        latitude&&longitude&&getWeatherData(latitude,longitude)
    },[latitude,longitude])
  
    return  <div>
     
        <Weather weather={weather}/>
        </div>
}
export default App