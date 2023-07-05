import axios from 'axios';

export default function postBrand(brand: string) {
  axios.post('https://gateway.traefik.me/api/brand/name', {
    name: brand,
  })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}
