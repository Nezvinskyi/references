import { createSlice } from '@reduxjs/toolkit';

import videos from '../data/db.json';
const initialState = videos;

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    addVideo: (state, action) => [...state, action.payload],
  },
});

export const { addVideo } = videosSlice.actions;

export default videosSlice.reducer;
