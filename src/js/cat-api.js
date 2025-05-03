import axios from 'axios';

const API_KEY =
  'live_KYUqlAZRUKE1mCTly8AL088DTrCsGXq2hgIRc8uViQX7yrVrSLMbbAOD2Yoyj2sV';
const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const SEARCH_URL = 'https://api.thecatapi.com/v1/images/search';

axios.defaults.headers.common['x-api-key'] = API_KEY;

function fetchBreeds() {
  return axios.get(BASE_URL);
}

function fetchCatByBreed(breedId) {
  return axios.get(`${SEARCH_URL}?breed_ids=${breedId}`);
}

export { fetchBreeds, fetchCatByBreed };
