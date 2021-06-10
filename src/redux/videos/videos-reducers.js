import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../services/videos-api';

const initialState = { videos: [], loading: false, error: null };

export const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
  const { data } = await api.fetchVideos();

  const videos = [];
  Object.entries(data.videos).forEach(entry => {
    videos.push({ id: entry[0], ...entry[1] });
  });
  return videos;
});

export const addVideo = createAsyncThunk(
  'videos/addVideo',

  async (video, thunkAPI) => {
    const {
      auth: { token },
    } = thunkAPI.getState();
    try {
      const { data } = await api.addVideo(video, token);
      return { id: data.name, ...video };
    } catch (error) {
      console.log(error.message);
      return error;
    }
  },
);

export const editVideo = createAsyncThunk(
  'videos/editVideo',
  async ({ id, formData }) => {
    try {
      const { data } = await api.editVideo(id, formData);
      return { id: id, ...data };
    } catch (error) {
      console.log(error.message);
    }
  },
);

export const deleteVideo = createAsyncThunk('videos/deleteVideo', async id => {
  try {
    await api.deleteVideo(id);
    return id;
  } catch (error) {
    return error;
  }
});

export const toggleCompleted = createAsyncThunk(
  'videos/toggleCompleted',
  async ({ id, watched }) => {
    const { data } = await api.toggleCompleted(id, watched);
    return { id, watched: data.watched };
  },
);

export const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    // addVideo: (state, action) => [...state, action.payload],
  },
  extraReducers: {
    [fetchVideos.fulfilled]: (state, action) => {
      state.videos = [...action.payload];
      state.loading = false;
    },
    [fetchVideos.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchVideos.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },
    [addVideo.fulfilled]: (state, { payload }) => {
      state.videos = [...state.videos, payload];
      state.loading = false;
    },
    [addVideo.pending]: (state, action) => {
      state.loading = true;
    },
    [addVideo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteVideo.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteVideo.fulfilled]: (state, { payload }) => {
      state.videos = state.videos.filter(item => item.id !== payload);
      state.loading = false;
    },
    [deleteVideo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [toggleCompleted.pending]: (state, action) => {
      state.loading = true;
    },
    [toggleCompleted.fulfilled]: (state, { payload }) => {
      state.videos = state.videos.map(item =>
        item.id !== payload.id ? item : { ...item, watched: payload.watched },
      );
      state.loading = false;
    },
    [toggleCompleted.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [editVideo.pending]: (state, action) => {
      state.loading = true;
    },
    [editVideo.fulfilled]: (state, { payload }) => {
      state.videos = state.videos.map(item =>
        item.id !== payload.id ? item : payload,
      );
      state.loading = false;
    },
    [editVideo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// export const { addVideo } = videosSlice.actions;

export default videosSlice.reducer;
