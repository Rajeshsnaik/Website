import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './features/CounterSlice.jsx'

export const store = configureStore({
    reducer: {
        counter: CounterReducer
    }
})