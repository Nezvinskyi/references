// import { createSelector } from '@reduxjs/toolkit';

const getAllVideos = state => state.videos.videos;

const getFilter = state => state.filters;

const getFilteredVideos = state => {
  const videos = getAllVideos(state);
  const filters = getFilter(state);

  return videos.filter(video => {
    const { subjects, authors } = filters;
    if (subjects.length !== 0 && authors.length !== 0) {
      return (
        subjects.some(subject => subject === video.subject) &&
        authors?.some(author => author === video.author)
      );
    } else if (subjects.length !== 0 && authors.length === 0) {
      return subjects.some(subject => subject === video.subject);
    } else if (subjects.length === 0 && authors.length !== 0) {
      return authors?.some(author => author === video.author);
    } else return videos;
  });
};

export default {
  getFilteredVideos,
};
