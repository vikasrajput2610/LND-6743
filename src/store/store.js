import {configureStore} from '@reduxjs/toolkit'
import { todoSlice } from './todo_reducer'
import { itemSlice } from './item'
const store =configureStore({
    reducer:{
        todoReducer:todoSlice.reducer,
        itemCountReducer:itemSlice.reducer
    }
})


export default store;