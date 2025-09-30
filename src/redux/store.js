import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import userSLices from './userSLices'
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer: {
      user: userSLices,
      cart: cartSlice
    }
})

export default store;