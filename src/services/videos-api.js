import axios from 'axios';

import { BASE_URL } from './api-settings';

// const TOKEN = '';

// axios.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;

export const fetchVideos = async () => {
  return await axios.get(`${BASE_URL}/data.json`);
};

export const addVideo = (video, token) => {
  return axios.post(`${BASE_URL}/data/videos.json?auth=${token}`, video);
};

export const deleteVideo = id => {
  return axios.delete(`${BASE_URL}/data/videos/${id}.json`);
};

export const toggleCompleted = (id, payload) => {
  return axios.patch(`${BASE_URL}/data/videos/${id}/.json`, {
    watched: payload,
  });
};
