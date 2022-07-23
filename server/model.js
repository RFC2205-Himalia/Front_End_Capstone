const axios = require('axios');

axios.defaults.headers.common['Authorization'] = process.env.AUTH_TOKEN;

const getProductData = (urlTail) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc${urlTail}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': process.env.AUTH_TOKEN
    }
  };
  // console.log("options", options.url)
  // console.log('auth', process.env.AUTH_TOKEN)

  // axios.get('/user_login', {
  //   params: {
  //     username: 'john1904',
  //   }
  // })
  // .then(function (response) {
  //   console.log(response);
  // })

  return axios.get(options.url, options.headers);
}

const postProductData = (urlTail, data) => {
  console.log(urlTail);
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc${urlTail}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${process.env.AUTH_TOKEN}`
    }
  };

  return axios.post(options.url, data, options.headers);
}

const putProductData = (urlTail) => {
  console.log("in model");
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc${urlTail}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${process.env.AUTH_TOKEN}`
    }
  };

  return axios.put(options.url, options.headers);
}

module.exports = {
  getProductData,
  postProductData,
  putProductData,
}




