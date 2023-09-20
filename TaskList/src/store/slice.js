import { createSlice } from '@reduxjs/toolkit';
import data from '../db/taskList.json';

export const taskListSlice = createSlice({
  name: 'list',
  initialState: {
    value: data,
  },
  reducers: {
    addNew: (state, action) => {
      const item = action.payload;
      const newList = [...state.value, item];
      state.value = newList;
    },
    deleteItem:  (state, action) => {
      const id = +action.payload;
      const index = state.value.findIndex(item => item.id === id);
      state.value.splice(index, 1);
    },
    updateItem: (state, action)=> {
      const itemUpdate = action.payload;
      const index = state.value.findIndex(item => item.id === itemUpdate.id);
      state.value.splice(index, 1, itemUpdate);
    },
    deleteAll: (state) => {
      state.value = [];
    },
  },
})

// Action creators are generated for each case reducer function
export const { addNew, deleteItem  } = taskListSlice.actions;

export default taskListSlice.reducer;