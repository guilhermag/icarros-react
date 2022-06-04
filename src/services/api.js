import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://webhook.site/2d78fbaf-fd1f-4bd3-80e0-55ca9e3fd850'
});

export const authAPI = axios.create({
  baseURL: 'https://sistemadeagendamentogama.herokuapp.com/'
});