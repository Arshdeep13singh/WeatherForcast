import React, { useState, useEffect } from "react";
// import "./App.css";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import CityName from "./components/CityName";
import Temperature from "./components/Temperature";
import WeatherCondition from "./components/WeatherCondition";
import ForecastCard from "./components/ForecastCard";
import styled from "styled-components";

const API_KEY = process.env.REACT_APP_WEATHER_API;
function App() {
  const [city, setCity] = useState("New York");
  const [wetherData, setWeatherData] = useState(undefined);
  const [forcastData, setForcastData] = useState(undefined);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    fatchApi(city);
  }, [city]);
  const fatchApi = async (city) => {
    try {
      const weatherreport = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const forcastreport = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(weatherreport.data);
      setForcastData(forcastreport.data);
    } catch (error) {
      console.log("Error fatching weather data");
    }
    
  };
  const toggleUnit=()=> {
    setIsCelsius((prevIsCalsius) => !prevIsCalsius);
  };
  const getFilterForcast=(list)=>{
    if (!list) return [];
    return list.filter((item)=>item.dt_txt.includes("12:00:00"));
  }
  return (
    <AppContainer>
      <Header>Weather Forcast</Header>
      <SearchBar setCity={setCity} />
      <WeatherContainer>
      {wetherData && (
        <>
          <CityName city={wetherData.name} />
          <Temperature
            temp={wetherData.main.temp}
            isCelsius={isCelsius}
            toggleUnit={toggleUnit}
          />
          <WeatherCondition
            condition={wetherData.weather[0].description}
            icon={wetherData.weather[0].icon}
          />

        </>
      )}
      </WeatherContainer>
      <h2>5-Day Forecast</h2>
      <ForecastContainer>
        {forcastData && forcastData.list ?
          getFilterForcast(forcastData.list).map((day, index) => (
            <ForecastCard key={index} day={day} isCelsius={isCelsius} />
          )):(<p>Loading forecast data...</p>)}
      </ForecastContainer>
    </AppContainer>
  );
}
const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #00796b;
`;

const WeatherContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
  background-color: #b2dfdb;
  border-radius: 8px;
`;
const ForecastContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  overflow-x: auto;  
  gap: 15px;
  padding: 10px;
`;

export default App;
