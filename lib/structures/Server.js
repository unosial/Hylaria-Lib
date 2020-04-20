const CustomError = require('../helpers/CustomError');
const defaults = require('../defaults');
const utils = require('../helpers/Utils');

/**
 * Server class
 */
module.exports = class Server {
  /**
   * Create Server instance
   * @param {*} data Data of the server
   */
  constructor(data) {
    this.address = data.server.address;
    this.port = data.server.port;
    this.version = data.server.version;
    this.protocol = data.server.protocol;
    this.motd = data.motd;
    this.onlinePlayers = data.players.online;
    this.maxPlayers = data.players.max;
    this.hasFavicon = !!data.icon;
  }

  /**
   * Get favicon of server
   * @returns {?string} URL of server icon
   */
  getFavicon() {
    return Server.getFavicon(this.address, this.port);
  }

  /**
   * Get buffer of server favicon
   * @returns {Promise<?Buffer>}
   */
  getFaviconBuffer() {
    return Server.getFaviconBuffer(this.address, this.port);
  }

  /**
   * Get URL of server favicon
   * @param {string} address Server address
   * @param {number} port Server port
   * @returns {string} URL of favicon
   */
  static getFavicon(address, port = null) {
    if (typeof address !== 'string') throw new CustomError('HylariaLibAddressError', 'Invalid address');
    if (!address.match(/[a-zA-Z0-9\-_.]+/g)) throw new CustomError('HylariaLibAddressError', 'Invalid address');
    if (port && !utils.isInteger(port)) throw new CustomError('HylariaLibAddressError', 'Invalid port');
    return `${defaults.API_BASE_ROUTE}/servers/favicon/${address}${port ? `:${port}` : ''}`;
  }

  /**
   * Get buffer of server favicon
   * @param {string} address Server address
   * @param {number} port Server port
   * @returns {Promise<?Buffer>}Buffer of favicon
   */
  static async getFaviconBuffer(address, port = null) {
    const imgURL = Server.getSkin(address, port);
    try {
      const { data } = await utils.getImageBuffer(imgURL);
      return data;
    } catch (error) {
      if (error.response && error.response.status === '400') throw new CustomError('HylariaLibIDError', 'Invalid address');
      throw new CustomError('HylariaLibError', 'Unexpected API Error');
    }
  }
};
