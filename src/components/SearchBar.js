import React, { useState } from "react";
import styled from "styled-components";
const SearchBar=({setCity})=>{
const [input,setInput]=useState('');

const handleSearch=(e)=>{
    e.preventDefault();
    if(input.trim()){
        setCity(input)
        setInput('')
    }
}
return(
    <SearchForm onSubmit={handleSearch}>
       <SearchInput
        type="text"
        placeholder="Search City"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
       />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
)

};
const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #00796b;
  border-radius: 5px;
  width: 300px;
  font-size: 1rem;
`;

const SearchButton = styled.button`
  padding: 10px 15px;
  background-color: #004d40;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00251a;
  }
`;

export default SearchBar;