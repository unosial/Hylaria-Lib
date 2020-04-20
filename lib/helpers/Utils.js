const axios = require('axios');

function isInteger(number) {
  if (typeof number !== 'number') {
    if (typeof number !== 'string') return false;
    return number.match(/[0-9]+/g) !== null;
  }

  return Number.isInteger(number);
}

/**
 * Get Buffer of an image
 * @param {string} url URL of the image
 * @returns {Promise<?Buffer>} Buffer of the image
 */
async function getImageBuffer(url) {
  const { data, headers } = await await axios.get(url, { responseType: 'arraybuffer' });
  if (!headers['content-type'].startsWith('image')) return null;
  return Buffer.from(data);
}

module.exports = { isInteger, getImageBuffer };
