import React from "react";
import styled from "styled-components";
const ForecastCard=({day,isCelsius})=>{
  const date=new Date(day.dt_txt).toLocaleDateString('en-US',{weekday:'long'});
    const tempMax=isCelsius?day.main.temp_max :(day.main.temp_max*9/5)+32;
    const tempMin=isCelsius?day.main.temp_min :(day.main.temp_min*9/5)+32;
    const iconUrl = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
  
  return(
    <ForecastContainer>
    <Card className="forecast-card">
        <DateHeading>{date}</DateHeading>
        <WeatherIcon src={iconUrl} alt={day.weather[0].description}/>
        <Temperature>{Math.round(tempMax)}° / {Math.round(tempMin)}°</Temperature>
    </Card>
    </ForecastContainer>
  )
}

const ForecastContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between; 
  margin-top: 20px;
  gap: 15px;
  padding: 10px;
`;

const Card = styled.div`
  background-color: #00796b;
  color: white;
  padding: 15px;
  border-radius: 8px;
  width: 150px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }
`;
const DateHeading = styled.h4`
   font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const WeatherIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const Temperature = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 5px 0;
`;
export default ForecastCard