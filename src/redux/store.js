import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import userSLices from './userSLices'

const store = configureStore({
    reducer: {
      user: userSLices
    }
})

export default store;