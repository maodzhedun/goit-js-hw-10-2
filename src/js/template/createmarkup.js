function createMarkup(array) {
  return array
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

function createCardMarkup({
  0: {
    url,
    breeds: {
      0: { name, temperament, description },
    },
  },
}) {
  console.log(url, name, temperament, description);
  return `<img src="${url}" width='800' alt="${name}">
    <div>
      <h2 class='title'>${name}</h2>
      <p class='item'>${temperament}</p>
      <p class='item'>${description}</p>
    </div>`;
}

export { createMarkup, createCardMarkup };
