import { createSlice  } from "@reduxjs/toolkit";




const STATUSES = {
    IDLE:'idel',
    ERROR:'error',
    LOADING:'loading'
}

export const playerSlice = createSlice({
     name:'player',
     initialState:{
        data:{},
        status:STATUSES.IDLE
     },
     reducers:{
        setPlayer(state,action){
            state.data = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        }
     }
})  

export const {setPlayer,setStatus} = playerSlice.actions
export default playerSlice.reducer


export function fetchPlayer(id){
    return async function fetchPlayerThunk(dispatch,getState){
            dispatch(setStatus(STATUSES.LOADING))
        try{
             
            const res = await fetch("https://api.npoint.io/20c1afef1661881ddc9c")
            
            const data = await res.json()
            const filteredPlayer = data.playerList.filter((player)=>player.Id === id)
           
            dispatch(setPlayer(filteredPlayer[0]))
            dispatch(setStatus(STATUSES.IDLE))

        }catch(error){
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

