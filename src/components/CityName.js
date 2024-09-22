import React from "react";
import styled from 'styled-components'
const CityName=({city})=>{
    return(
        <CityHeading>
       {city}
        </CityHeading>
    )
}
const CityHeading = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #00796b;
  text-transform: capitalize;
`;
export default CityName;