import { createSlice  } from "@reduxjs/toolkit";




const STATUSES = {
    IDLE:'idel',
    ERROR:'error',
    LOADING:'loading'
}

export const playersSlice = createSlice({
     name:'players',
     initialState:{
        data:[],
        status:STATUSES.IDLE
     },
     reducers:{
        setAllPlayers(state,action){
            state.data = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        }
     }
})  

export const { setAllPlayers,setStatus } = playersSlice.actions
export default playersSlice.reducer


export function fetchAllPlayers(){
    return async function fetchAllPlayersThunk(dispatch,getState){
            dispatch(setStatus(STATUSES.LOADING))
        try{
             
            const res = await fetch("https://api.npoint.io/20c1afef1661881ddc9c")
            const data = await res.json()
            console.log(data) 
            dispatch(setAllPlayers(data.playerList))
            dispatch(setStatus(STATUSES.IDLE))

        }catch(error){
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

