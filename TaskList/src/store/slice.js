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
      debugger;
      const id = +action.payload;
      const index = state.value.findIndex(item => item.id === id);
      const newList = [...state.value];
      newList.splice(index, 1);
      state.value.splice(index, 1);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addNew, deleteItem  } = taskListSlice.actions;

export default taskListSlice.reducer;