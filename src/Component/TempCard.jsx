import React, { useState, useEffect } from 'react'

const TempCard = ({ tempInfo }) => {
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset
  } = tempInfo;
  const [weatherState, setWeatherMod] = useState("Sunny");
  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherMod("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherMod("wi-fog");
          break;
        case "Clear":
          setWeatherMod("wi-day-sunny");
          break;
        case "Smoke":
          setWeatherMod("wi-smoke")
        default:
          break;
      }

    }
  })

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()} : ${date.getMinutes()}`;





  return (
    <div>
      <div className="container">
        <div className = "container-one">
          <div >
            <i className={`wi ${weatherState}`}></i>
          </div>
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div >
            <div > {weathermood}</div>
            <div > {name}, {country}</div>
          </div>
          <div className  = "container-two"> {new Date().toLocaleString()} </div>
        </div>
        <div >
          <div className="container-three">
            <div>
              <p> < i className={"wi wi-humidity"}></i></p>
              <p >
                {humidity}<br></br>
                Humidity
              </p>
            </div>
            <div >
              <p> < i className={"wi wi-rain"}></i></p>
              <p >
                {pressure}<br></br>
                Pressure
              </p>
            </div>
            <div >
              <p> < i className={"wi wi-strong-wind"}></i></p>
              <p >
                {speed} <br></br>
                Speed
              </p>
            </div>

            <div >
              <p> < i className={"wi wi-sunset"}></i></p>
              <p >
                {timeStr}<br></br>
                Sunset
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TempCard
