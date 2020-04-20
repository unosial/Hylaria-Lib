const axios = require('axios').default;
const { version } = require('../package.json');

module.exports = {

  API_BASE_ROUTE: 'https://mc.unosial.com',
  AXIOS_DEFAULT: axios.create({
    headers: {
      'User-Agent': `Hylaria-Lib v${version} (https://hylaria.com)`,
    },
  }),

};
