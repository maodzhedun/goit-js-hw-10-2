import axios from 'axios';

const API_KEY =
  'live_KYUqlAZRUKE1mCTly8AL088DTrCsGXq2hgIRc8uViQX7yrVrSLMbbAOD2Yoyj2sV';
const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const SEARH_URL = 'https://api.thecatapi.com/v1/images/search';

axios.defaults.headers.common['x-api-key'] = API_KEY;

function fetchBreeds() {
 return axios.get(BASE_URL).then(function (response) {
    
    // обработка успешного запроса
    console.log('then', response);
  })
  .catch(function (error) {
    // обработка ошибки
    console.log('catch',error);
  })
  .finally(function () {
    console.log("Finaly search")
  });
}

console.log(fetchBreeds())

function fetchCatByBreed(breedId){
    return axios.get(`${SEARH_URL}?breed_ids=${breedId}`).then(function (response) {
    
        // обработка успешного запроса
        console.log('then', response);
      })
      .catch(function (error) {
        // обработка ошибки
        console.log('catch',error);
      })
      .finally(function () {
        console.log("Finaly search")
      });
}

console.log(fetchCatByBreed('ycho'))

export { fetchBreeds, fetchCatByBreed };
