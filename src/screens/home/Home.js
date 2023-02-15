import React, { useEffect,useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from '../../components/searchBar/SearchBar'
import { fetchAllPlayers, getAllPlayers } from '../../store/playersSlice'
import Player from '../../components/player/Player'
import './home.css'
const Home = () => {
   const dispatch = useDispatch()
   const [players,setPlayers] = useState([]) 
   const {data,status} = useSelector((state)=>state.players)
  
   useEffect(()=>{
     dispatch(fetchAllPlayers())  
   },[])

   useEffect(()=>{
    setPlayers(data) 
   },[data])

   
   
   

    return (
    <>
    <div className='container' >
      <div className='mb-5'>
      <SearchBar players={players} setPlayers={setPlayers} data={data}/>
      </div>

      <Row className="mb-3">
      {status == "loading" && <div>Loading...</div>}
      {players && players.map((item,i)=>(
 <Col sm={12} md={4} lg={3} key={i} className='mb-5'>

 <Player player={item}/>
</Col>
      ))} 
      
       
      </Row>
    </div>
    </>
  )
}

export default Home