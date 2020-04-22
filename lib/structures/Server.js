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
   * Get icon of server
   * @returns {?string} URL of server icon
   */
  getIcon() {
    return Server.getIcon(this.address, this.port);
  }

  /**
   * Get buffer of server icon
   * @returns {Promise<?Buffer>}
   */
  getIconBuffer() {
    return Server.getIconBuffer(this.address, this.port);
  }

  /**
   * Get URL of server icon
   * @param {string} address Server address
   * @param {number} port Server port
   * @returns {string} URL of icon
   */
  static getIcon(address, port = null) {
    if (typeof address !== 'string') throw new CustomError('HylariaLibAddressError', 'Invalid address');
    if (!address.match(/[a-zA-Z0-9\-_.]+/g)) throw new CustomError('HylariaLibAddressError', 'Invalid address');
    if (port && !utils.isInteger(port)) throw new CustomError('HylariaLibAddressError', 'Invalid port');
    return `${defaults.API_BASE_ROUTE}/servers/icon/${address}${port ? `:${port}` : ''}`;
  }

  /**
   * Get buffer of server icon
   * @param {string} address Server address
   * @param {number} port Server port
   * @returns {Promise<?Buffer>}Buffer of icon
   */
  static async getIconBuffer(address, port = null) {
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
