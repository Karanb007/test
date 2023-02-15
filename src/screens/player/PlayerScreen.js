import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchPlayer } from '../../store/playerSlice'
import './player.css'
import  Player from '../../components/player/Player'

const PlayerScreen = () => {
  const dispatch = useDispatch()
  const params = useParams();
  const {data,status} = useSelector((state)=>state.player)
  console.log()
  console.log(data)
  useEffect(()=>{
    dispatch(fetchPlayer(params.id))
  },[])
  return (
    <div>
      {status == "loading" && <div>Loading...</div>}
      {(Object.keys(data).length !== 0) && (<Player player={data}/>)}
   
    </div>
  )
}

export default PlayerScreen