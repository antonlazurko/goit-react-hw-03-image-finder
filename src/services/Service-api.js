import axios from 'axios';
//18968535-a98ecca7bd1b0403c78b07ef3
function fetchImage(query) {
  return axios
    .get(
      `https://pixabay.com/api/?key=18968535-a98ecca7bd1b0403c78b07ef3&q=${query}&image_type=photo`,
    )
    .then(response => response);
}
export default fetchImage;
