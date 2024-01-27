import { fetchCountriesByName } from './fetchCountries';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import debounce from './useDebounce';

const nameField = document.querySelector('#search-box');
const countriesList = document.querySelector('.country-list');
nameField.addEventListener('input', debounce(handleName));

async function handleName(e) {
  let countries = [];
  let value = e.target.value.trim();
  countriesList.replaceChildren();
  if (value !== '') {
    countries = await fetchCountriesByName(value);
  }

  if (countries.length >= 10) {
    iziToast.success({
      position: 'topRight',
      message: 'Too many matches found. Please enter a more specific name.',
    });
  }
  if (countries.length > 2 && countries.length < 10) {
    countriesList.insertAdjacentHTML('beforeend', initCountryItem(countries));
  }

  if (countries.length === 1) {
    countriesList.insertAdjacentHTML(
      'beforeend',
      initCountryItem(countries, true)
    );
  }
}

function initCountryItem(items, single = false) {
  return items
    .map(
      ({ name, flags, capital, population, languages }) => `
    <li>
      <div class="country-list__general">
        <img src="${flags.svg}" alt="${name.official}" width="30"/>
        ${!single ? `<p>${name.official}</p>` : `<h2>${name.official}</h2>`}
      </div>
      <div class="country-list__sub-info ${!single && 'hidden'}">
        <div>
          <p>
            <strong>Capital:</strong>
          </p>
          <p>${capital}</p>
        </div>
        <div>
          <p>
            <strong>Population:</strong>
          </p>
          <p>${population}</p>
        </div>
        <div>
          <p>
            <strong>Languages:</strong>
          </p>
          <p>${Object.values(languages)}</p>
        </div>
      </div>
    </li>
  `
    )
    .join('');
}
