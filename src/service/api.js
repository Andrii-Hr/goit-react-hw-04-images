const axios = require('axios');

const URL = 'https://pixabay.com/api';
const KEY = '31044778-b32f7b2c13ee5e474f3d777e0';

export function getImages(keyword, page) {
  return axios
    .get(
      `${URL}/?q=${keyword}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(r => r.data);
}
