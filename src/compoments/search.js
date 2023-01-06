import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'

function Search() {
 const [searchTerm,setSearchTerm] = React.useState('')
  const navigate=useNavigate();
//this method is used to not call the database for every 
//letter we added in the search bar so we can add a timeout
//when this timeout is end so we can call the server side to get the data

  React.useEffect(()=>{
    const delay=setTimeout(()=>{
      if(searchTerm){
        navigate("/search?s="+searchTerm)
      }
    },500)
    return ()=>{
      clearTimeout(delay)
    }
  },[searchTerm,navigate])

    const handleChange=(ev)=>{
      setSearchTerm(ev.target.value)
        

    }
  return (
    <SearchSpace>
        <SearchLable>Search</SearchLable>
        <SearchInput type='text' name="search" onChange={handleChange}/>
    </SearchSpace>
  )
}

export default Search

const SearchSpace=styled.div`
display: flex;
`;
const SearchInput=styled.input`
margin-left: 10px;
height: 30px;
margin-top: 5px;
`
const SearchLable=styled.label`
    text-size:18px;
`
