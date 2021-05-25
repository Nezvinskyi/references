import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authors: [],
  subjects: [],
};

const Filter = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleAuthor: (state, action) => {
      const { payload } = action;
      if (state.authors.find(author => author === payload)) {
        state.authors = state.authors.filter(author => author !== payload);
      } else {
        state.authors = [...state.authors, payload];
      }
    },
    toggleSubject: (state, action) => {
      const { payload } = action;
      if (state.subjects.find(subject => subject === payload)) {
        state.subjects = state.subjects.filter(subject => subject !== payload);
      } else {
        state.subjects = [...state.subjects, payload];
      }
    },
  },
});

export const { toggleAuthor, toggleSubject } = Filter.actions;

export default Filter.reducer;
