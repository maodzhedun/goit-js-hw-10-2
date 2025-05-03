import SlimSelect from 'slim-select';
import getRefs from './js/get-refs';
import { Notify } from 'notiflix';
import { Report } from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { createMarkup, createCardMarkup } from './js/template/createmarkup';

const refs = getRefs();

fetchBreeds()
  .then(array => {
    loadBreeds();
    return (refs.selectForms.innerHTML = createMarkup(array.data));
  })
  .then(() => slimSelect())
  .catch(fetchError);

refs.selectForms.addEventListener('change', loadCatCard);

function loadCatCard(event) {
  const id = event.target.value;

  fetchCatByBreed(id)
    .then(respons => {
      loadBreeds();
      return (refs.catContainer.innerHTML = createCardMarkup(respons.data));
    })
    .then(() => loadSuccess())
    .catch(fetchError);
}

function loadBreeds() {
  refs.selectForms.hidden = false;
  refs.loaderEl.classList.remove('loader');
}

function loadSuccess() {
  Notify.success('Data load success');
}

function fetchError() {
  Report.failure(refs.errorSign.textContent, '');
}

function slimSelect() {
  new SlimSelect({
    select: refs.selectForms,
  });
}
