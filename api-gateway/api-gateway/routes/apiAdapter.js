const axios = require('axios');

module.exports = (baseURL) => {
  return axios.create({
    baseURL: baseURL,
    timeout: 5000,  // bisa dirubah sesuai dengan kebutuhan
  });
};


// // API_URL untuk menentukan URL API yang akan diakses
