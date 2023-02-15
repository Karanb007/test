import { configureStore } from '@reduxjs/toolkit'
import playersReducer from './playersSlice'
import playerReducer from './playerSlice'
export const store = configureStore({
  reducer: {
    players:playersReducer,
    player:playerReducer,
  },
})