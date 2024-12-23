import {createSlice} from '@reduxjs/toolkit'


const itemSlice=createSlice({
    name:'itemCounter',
    initialState:{itemCounter:0},
    reducers:{
        increment(state,action){
            state.itemCounter++;
        },
        decrement(state,action){
            state.itemCounter--;
        },
       
    }
})

 const itemCounterActions=itemSlice.actions;
 export {itemCounterActions,itemSlice}
