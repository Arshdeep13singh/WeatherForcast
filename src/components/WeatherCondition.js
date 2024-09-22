import React from 'react'
import styled from 'styled-components';
const WeatherCondition=({condition,icon})=>{
       const iconUrl=`http://openweathermap.org/img/wn/${icon}.png`;
    
    return(
        <ConditionContainer>
            <WeatherIcon src={iconUrl} alt={condition}/>
            <ConditionText> {condition}</ConditionText>
        </ConditionContainer>
    )
}

const ConditionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WeatherIcon = styled.img`
  width: 80px;
  height: 80px;
`;

const ConditionText = styled.p`
  font-size: 1.5rem;
  margin-left: 10px;
  color: #00796b;
  text-transform: capitalize;
`;
export default WeatherCondition