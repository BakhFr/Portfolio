import { configureStore } from '@reduxjs/toolkit';
import taskListSlice from './slice';

export default configureStore({
  reducer: {
    taskList: taskListSlice,
  },
  devTools: true,
})