import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const BASE_URL = 'https://restcountries.com/v3.1';
const REQUEST_PARAMETERS = 'name,capital,population,flags,languages';

async function fetchCountriesByName(search = '') {
  try {
    const response = await fetch(
      `${BASE_URL}/name/${search}?fields=${REQUEST_PARAMETERS}`
    );
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: 'Oops, there is no country with that name',
    });
  }
}

export { fetchCountriesByName };
