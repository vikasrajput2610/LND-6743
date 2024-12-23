import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    items: []
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    deleteItem(state, action) {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
  },
});

export const todoActions = todoSlice.actions;
export { todoSlice };
