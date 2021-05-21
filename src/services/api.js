import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5005';

export const fetchVideos = () => {
  axios.get('/videos');
};

export const addVideo = video => {
  axios.post('/videos', video).then(response => response.data);
};

export const deleteVideo = id => {
  axios.delete(`/videos/${id}`).then(response => response.data);
};

export const toggleCompleted = (id, payload) => {
  axios
    .patch(`/videos/${id}`, { watched: payload })
    .then(response => response.data);
};
