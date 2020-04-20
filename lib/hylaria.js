const axios = require('axios');
const Player = require('./structures/Player');
const Server = require('./structures/Server');

/**
 * Fetch a Minecraft Player
 * @param {string} identifier Player identifier (username or uuid)
 * @returns {Promise<Player>} The Player
 */
async function fetchPlayer(identifier) {
  try {
    const { data } = await axios.get(`https://mc.unosial.com/players/infos/${identifier}`);
    return new Player(data.data);
  } catch (error) {
    if (error.response && error.response.status === 400) throw new Error('Invalid identifier');
    throw new Error('Unexpected API Error');
  }
}

/**
 * Fetch a Minecraft Server
 * @param {string} address Address of the server
 * @param {?number} [port=25565] Port of the server
 * @returns {Promise<Server>} The Server
 */
async function fetchServer(address, port = 25565) {
  try {
    const { data } = await axios.get(`https://mc.unosial.com/servers/infos/${address}:${port}`);
    return new Server(data.data);
  } catch (error) {
    if (error.response && error.response.status === 400) throw new Error('Invalid address');
    throw new Error('Unexpected API Error');
  }
}

module.exports = {
  fetchPlayer,
  fetchServer,
  Player,
  Server,
};
