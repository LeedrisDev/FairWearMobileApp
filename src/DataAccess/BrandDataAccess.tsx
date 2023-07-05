import axios from 'axios';

function postBrand(brand:string) {
  const formdata = new FormData();
  formdata.append('name', brand);

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://gateway.traefik.me/api/brand/name',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'PostmanRuntime/7.32.3',
      Accept: '*/*',
      Host: 'gateway.traefik.me',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
        'Access-Control-Allow-Origin': '*',
    },
    formdata,
  };

  axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
}

export default postBrand;
