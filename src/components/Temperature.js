import React from "react";
import styled from "styled-components";
const Temperature=({isCelsius,temp,toggleUnit})=>{
    const convertedTemp=isCelsius?temp:(temp*9/5)+32;
    const unit = isCelsius?'c':'f';

    return(
        <TemperatureContainer>
            <TempDisplay>{Math.round(convertedTemp)}° {unit}</TempDisplay>
            <ToggleButton onClick={toggleUnit}>Switch to {isCelsius?'Fahernheit':'Celcius'}</ToggleButton>
        </TemperatureContainer>
    )
}
const TemperatureContainer = styled.div`
  margin: 20px 0;
`;

const TempDisplay = styled.h3`
  font-size: 4rem;
  color: #004d40;
`;

const ToggleButton = styled.button`
  margin-top: 10px;
  background-color: #004d40;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00251a;
  }
`;
export default Temperature;