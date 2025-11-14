import {createSlice} from '@reduxjs/toolkit'

const initialState={
    value:0
}

const CounterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        // FIX: Must mutate the state directly or assign the new value.
        increment:(state)=>{
            state.value += 1 
            // OR state.value = state.value + 1
        },
        // FIX: Must mutate the state directly or assign the new value.
        decrement:(state)=>{
            state.value -= 1
            // OR state.value = state.value - 1
        },
        reset:(state)=>{
            state.value=0
        }
    }
})

export const {increment,decrement,reset}=CounterSlice.actions
export default CounterSlice.reducer