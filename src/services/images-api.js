import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/?';

const KEY = '36182174-58580c701ddc81aa57ee59977';
const perPage = 12;

export async function fetchImages(sershString, page) {
  try {
    const data = await axios({
      params: {
        q: sershString,
        page,
        key: KEY,
        per_page: perPage,
        orientation: 'horizontal',
        image_type: 'photo',
      },
    });

    return data;
  } catch {
    return [];
  }
}
