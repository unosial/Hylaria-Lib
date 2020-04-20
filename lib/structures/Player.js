const CustomError = require('../helpers/CustomError');
const defaults = require('../defaults');
const utils = require('../helpers/Utils');

/**
 * Player class
 */
module.exports = class Player {
  /**
   * Create Player instance
   * @param {*} data Data of the player
   */
  constructor(data) {
    this.uuid = data.uuid;
    this.username = data.username;
    this.history = data.history.map((h) => {
      const usernameHistory = {
        username: h.username,
        changedAt: new Date(h.changedAt),
      };
      return usernameHistory;
    });
    this.isDemo = data.demo;
    this.isMigrated = !data.legacy;
    this.hasSkin = !!data.textures.skin;
    this.hasCape = !!data.textures.cape;
    this.hasOptifineCape = !!data.textures.cape;
  }

  /**
   * Get player skin
   * @returns {?string} URL of the skin
   */
  getSkin() {
    if (!this.hasSkin) return null;
    return Player.getSkin(this.uuid);
  }

  /**
   * Get player skull
   * @param {number} size Size of the skull
   * @param {boolean} layer If you would like layer in skull
   * @returns {?string} URL of the skull
   */
  getSkull(size = 128, layer = false) {
    if (!this.hasSkin) return null;
    return Player.getSkull(this.uuid, size, layer);
  }

  /**
   * Get player body
   * @param {number} size Size of the body
   * @param {boolean} layer If you would like layer in body
   * @returns {?string} URL of the body
   */
  getBody(size = 128, layer = false) {
    if (!this.hasSkin) return null;
    return Player.getBody(this.uuid, size, layer);
  }

  /**
   * Get player cape
   * @returns {?string} URL of the cape
   */
  getCape() {
    if (!this.hasCape) return null;
    return Player.getCape(this.uuid);
  }

  /**
   * Get player optifine cape
   * @returns {?string} URL of the optifine cape
   */
  getOptifineCape() {
    if (!this.hasOptifineCape) return null;
    return Player.getOptifineCape(this.uuid);
  }

  /**
   * Get player skin buffer
   * @returns {?Promise<?Buffer>} Buffer of the skin
   */
  getSkinBuffer() {
    if (!this.hasSkin) return null;
    return Player.getSkinBuffer(this.uuid);
  }

  /**
   * Get player skull buffer
   * @param {number} size Size of the skull
   * @param {boolean} layer If you would like layer in skull
   * @returns {?Promise<?Buffer>} Buffer of the skull
   */
  getSkullBuffer(size = 128, layer = false) {
    if (!this.hasSkin) return null;
    return Player.getSkullBuffer(this.uuid, size, layer);
  }

  /**
   * Get player body buffer
   * @param {number} size Size of the body
   * @param {boolean} layer If you would like layer in body
   * @returns {?Promise<?Buffer>} Buffer of the body
   */
  getBodyBuffer(size = 128, layer = false) {
    if (!this.hasSkin) return null;
    return Player.getBodyBuffer(this.uuid, size, layer);
  }

  /**
   * Get player cape buffer
   * @returns {?Promise<?Buffer>} Buffer of the cape
   */
  getCapeBuffer() {
    if (!this.hasCape) return null;
    return Player.getCapeBuffer(this.uuid);
  }

  /**
   * Get player optifine cape buffer
   * @returns {?Promise<?Buffer>} Buffer of the optifine cape
   */
  getOptifineCapeBuffer() {
    if (!this.hasOptifineCape) return null;
    return Player.getOptifineCapeBuffer(this.uuid);
  }

  /**
   * Get player skin
   * @param {string} identifier Player identifier
   * @returns {string} URL of player skin
   */
  static getSkin(identifier) {
    if (typeof identifier !== 'string') throw new CustomError('HylariaLibIDError', 'Invalid Identifier');
    if (!identifier.match(/[a-zA-Z0-9\-_]+/g)) throw new CustomError('HylariaLibIDError', 'Invalid Identifier');
    return `${defaults.API_BASE_ROUTE}/players/skin/${identifier}`;
  }

  /**
   * Get player skull
   * @param {string} identifier Player identifier
   * @param {number} size Skull size
   * @param {boolean} layer Active layer or not
   * @returns {string} URL of player skull
   */
  static getSkull(identifier, size = 128, layer = true) {
    if (!utils.isInteger(size)) throw new CustomError('HylariaTypeError', 'Size of skull must be an Integer');
    if (size < 8 || size > 2048) throw new CustomError('HylariaTypeError', 'Size of skull must be between 8 and 2048');
    if (!['true', 'false', true, false].includes(layer)) throw new CustomError('HylariaTypeError', 'Layer of skull must be equal to true or false');
    if (typeof identifier !== 'string') throw new CustomError('HylariaLibIDError', 'Invalid Identifier');
    if (!identifier.match(/[a-zA-Z0-9\-_]{3,35}/g)) throw new CustomError('HylariaLibIDError', 'Invalid Identifier');
    return `${defaults.API_BASE_ROUTE}/players/skull/${identifier}?size=${size}&helmet=${layer}`;
  }

  /**
   * Get player body
   * @param {string} identifier Player identifier
   * @param {number} size Body size
   * @param {boolean} layer Active layer or not
   * @returns {string} URL of player body
   */
  static getBody(identifier, size = 128, layer = true) {
    if (!utils.isInteger(size)) throw new CustomError('HylariaTypeError', 'Size of body must be an Integer');
    if (!['true', 'false', true, false].includes(layer)) throw new CustomError('HylariaTypeError', 'Layer of body must be equal to true or false');
    if (typeof identifier !== 'string') throw new CustomError('HylariaLibIDError', 'Invalid Identifier');
    if (!identifier.match(/[a-zA-Z0-9\-_]{3,35}/g)) throw new CustomError('HylariaLibIDError', 'Invalid Identifier');
    return `${defaults.API_BASE_ROUTE}/players/body/${identifier}?size=${size}&helmet=${layer}`;
  }

  /**
   * Get player cape
   * @param {string} identifier Player identifier
   * @returns {string} URL of player cape
   */
  static getCape(identifier) {
    if (typeof identifier !== 'string') throw new CustomError('HylariaLibIDError', 'Invalid Identifier');
    if (!identifier.match(/[a-zA-Z0-9\-_]{3,35}/g)) throw new CustomError('HylariaLibIDError', 'Invalid Identifier');
    return `${defaults.API_BASE_ROUTE}/players/cape/${identifier}`;
  }

  /**
   * Get player optifine cape
   * @param {string} identifier Player identifier
   * @returns {string} URL of player optifine cape
   */
  static getOptifineCape(identifier) {
    if (typeof identifier !== 'string') throw new CustomError('HylariaLibIDError', 'Invalid Identifier');
    if (!identifier.match(/[a-zA-Z0-9\-_]{3,35}/g)) throw new CustomError('HylariaLibIDError', 'Invalid Identifier');
    return `${defaults.API_BASE_ROUTE}/players/optifinecape/${identifier}`;
  }

  /**
   * Get Buffer of player skin
   * @param {string} identifier Player identifier
   * @returns {Promise<?Buffer>} Buffer of player skin
   */
  static async getSkinBuffer(identifier) {
    const imgURL = Player.getSkin(identifier);
    try {
      const { data } = await defaults.AXIOS_DEFAULT({ url: imgURL });
      return data;
    } catch (error) {
      if (error.response && error.response.status === '400') throw new CustomError('HylariaLibIDError', 'Invalid Identifier');
      throw new CustomError('HylariaLibError', 'Unexpected API Error');
    }
  }

  /**
   * Get Buffer of player skull
   * @param {string} identifier Player identifier
   * @param {number} size Skull size
   * @param {boolean} layer Active layer or not
   * @returns {Promise<?Buffer>} Buffer of player skull
   */
  static async getSkullBuffer(identifier, size = 128, layer = false) {
    const imgURL = Player.getSkull(identifier, size, layer);
    try {
      const { data } = await defaults.AXIOS_DEFAULT({ url: imgURL });
      return data;
    } catch (error) {
      if (error.response && error.response.status === '400') throw new CustomError('HylariaLibIDError', 'Invalid Identifier');
      throw new CustomError('HylariaLibError', 'Unexpected API Error');
    }
  }

  /**
   * Get Buffer of player body
   * @param {string} identifier Player identifier
   * @param {number} size Body size
   * @param {boolean} layer Active layer or not
   * @returns {Promise<?Buffer>} Buffer of player body
   */
  static async getBodyBuffer(identifier, size = 128, layer = false) {
    const imgURL = Player.getBody(identifier, size, layer);
    try {
      const { data } = await defaults.AXIOS_DEFAULT({ url: imgURL });
      return data;
    } catch (error) {
      if (error.response && error.response.status === '400') throw new CustomError('HylariaLibIDError', 'Invalid Identifier');
      throw new CustomError('HylariaLibError', 'Unexpected API Error');
    }
  }

  /**
   * Get Buffer of player cape
   * @param {string} identifier Player identifier
   * @returns {Promise<?Buffer>} Buffer of player cape
   */
  static async getCapeBuffer(identifier) {
    const imgURL = Player.getCape(identifier);
    try {
      const { data } = await defaults.AXIOS_DEFAULT({ url: imgURL });
      return data;
    } catch (error) {
      if (error.response && error.response.status === '400') throw new CustomError('HylariaLibIDError', 'Invalid Identifier');
      throw new CustomError('HylariaLibError', 'Unexpected API Error');
    }
  }

  /**
   * Get Buffer of player optifine cape
   * @param {string} identifier Player identifier
   * @returns {Promise<?Buffer>} Buffer of player optifine cape
   */
  static async getOptifineCapeBuffer(identifier) {
    const imgURL = Player.getCape(identifier);
    try {
      const { data } = await defaults.AXIOS_DEFAULT({ url: imgURL });
      return data;
    } catch (error) {
      if (error.response && error.response.status === '400') throw new CustomError('HylariaLibIDError', 'Invalid Identifier');
      throw new CustomError('HylariaLibError', 'Unexpected API Error');
    }
  }
};
