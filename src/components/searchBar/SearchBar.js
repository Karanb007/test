import React, { useState, useEffect, useRef } from 'react'
import './searchBar.css'
const SearchBar = ({setPlayers,data}) => {


  const handleSearch = (e)=>{
    let searchTerm = e.target.value
    if(searchTerm !== ""){
      const searchResult = data.filter((player)=>{
         return Object.values(player).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
   })
   
   setPlayers(searchResult)
    }else{
      setPlayers(data)

    }
   

  }
  
  return (
    <>
    <input  type="text" placeholder='search player...' className='searchBar' onChange={handleSearch}/>
    </>
  )
}

export default SearchBar