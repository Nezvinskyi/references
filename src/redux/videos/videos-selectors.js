// import { createSelector } from '@reduxjs/toolkit';
// import videos from '../../data/db.json';
// export const subjects = videos.subjects;
// export const authors = videos.authors;

const getAllVideos = state => state.videos.videos;

// const getFilter = state => state.filter;

export const getFilteredVideos = state => {
  const videos = getAllVideos(state);
  // const filters = getFilter(state);

  // return videos.filter(video => {
  //   const { subjects, authors } = filters;
  //   if (subjects.length !== 0 && authors.length !== 0) {
  //     return (
  //       subjects.some(subject => subject === video.subject) &&
  //       authors?.some(author => author === video.author)
  //     );
  //   } else if (subjects.length !== 0 && authors.length === 0) {
  //     return subjects.some(subject => subject === video.subject);
  //   } else if (subjects.length === 0 && authors.length !== 0) {
  //     return authors?.some(author => author === video.author);
  //   } else return videos;
  // });
  return videos;
};

export const getSubjects = state => {
  const videos = getAllVideos(state);
  return videos
    .map(video => video.subject)
    .reduce((acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]), [])
    .sort();
};

export const getAuthors = state => {
  const videos = getAllVideos(state);
  return videos
    .map(video => video.author)
    .reduce((acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]), [])
    .sort();
};
