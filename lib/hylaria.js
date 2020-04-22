const axios = require('axios');
const Player = require('./structures/Player');
const Server = require('./structures/Server');
const { API_BASE_ROUTE } = require('./defaults');

/**
 * Fetch a Minecraft Player
 * @param {string} identifier Player identifier (username or uuid)
 * @returns {Promise<Player>} The Player
 */
async function fetchPlayer(identifier) {
  let req;

  try {
    req = await axios.get(`${API_BASE_ROUTE}/players/infos/${identifier}`);
  } catch (error) {
    if (error.response && error.response.status === 400) throw new Error('Invalid identifier');
    throw new Error('Unexpected API Error');
  }

  return new Player(req.data.data);
}

/**
 * Fetch a Minecraft Server
 * @param {string} address Address of the server
 * @param {?number} [port=25565] Port of the server
 * @returns {Promise<Server>} The Server
 */
async function fetchServer(address, port = 25565) {
  let req;

  try {
    req = await axios.get(`${API_BASE_ROUTE}/servers/infos/${address}:${port}`);
  } catch (error) {
    if (error.response && error.response.status === 400) throw new Error('Invalid address');
    throw new Error('Unexpected API Error');
  }

  return new Server(req.data.data);
}

module.exports = {
  fetchPlayer,
  fetchServer,
  Player,
  Server,
};
