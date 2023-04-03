import React ,{useState, useEffect} from 'react'
import TempCard from "./TempCard.jsx"

const Weather = () => {
 

const [searchValue , setSearchValue] = useState("Delhi");
const[tempInfo,setTempInfo] = useState({});
const getWeatherInfo =  async() => {
  try{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=940789ee1d4e6301b320ad4a45de6b9c`;
    const res = await fetch(url)
    const data = await res.json();
    const {temp,humidity, pressure} = data.main;
    const {main:weathermood} = data.weather[0];
    const {name} = data;
    const{speed} = data.wind;
    const {country,sunset} = data.sys;
    const myNewWeatherInfo = {
      temp,humidity,pressure,weathermood,name,speed,
      country,sunset
    };
    setTempInfo(myNewWeatherInfo);

    console.log(temp);
  }catch(error){
    console.log("The error is ", error);
  }
  

}
useEffect(() => {
  getWeatherInfo();

},[])

  return (
    <>
      <div >
        <div className  = "search">
          <h1><i class="fa-light fa-cloud-fog"></i>Weather</h1>
         <div>
            <input type="text"
              placeholder='Search any city'
              autoFocus
              className="Search"
              valude={searchValue}
              onChange={(e) => { setSearchValue(e.target.value) }}
            ></input>
            <button onClick={getWeatherInfo} className="button" type="button" >Search</button>
 </div>
        </div>
     <TempCard  tempInfo = {tempInfo}/ >

      </div>
    </>
  )
}

export default Weather
