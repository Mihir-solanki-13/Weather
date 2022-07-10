import React, { useEffect } from 'react'
import "./css/style.css"
import {useState} from "react"
export default function Weather() {

  const [city, setCity] = useState("Mumbai");
  const [search, setSearch] = useState("mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7c8faec0ae660b248d5d8f1d3614dbc1`;
      const response = await fetch(url);
      const resJson = await response.json();
      //console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  },[search])

  return (
    <div>
      <div className="head">
        <h1>Weather</h1>
        </div>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <h1> No City Found</h1>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="tempmin_max">
                Min: {city.temp_min} °C| Max: {city.temp_max}°C;
              </h3>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </div>
  );
}
