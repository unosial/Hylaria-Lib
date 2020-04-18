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
    return `https://mc.unosial.com/players/skin/${this.uuid}`;
  }

  /**
   * Get player skull
   * @param {number} size Size of the skull
   * @param {boolean} layer If you would like layer in skull
   * @returns {?string} URL of the skull
   */
  getSkull(size = 128, layer = false) {
    if (!this.hasSkin) return null;
    if (Number.isNaN(size) || size < 8 || size > 2048) throw TypeError('Size must be a number under 8 and 2048');
    if (typeof layer !== 'boolean') throw TypeError('Layer parameter must be a boolean');
    return `https://mc.unosial.com/players/skull/${this.uuid}?helmet=${layer}&size=${size}`;
  }

  /**
   * Get player body
   * @param {number} size Size of the body
   * @param {boolean} layer If you would like layer in skull
   * @returns {?string} URL of the skin
   */
  getBody(size = 128, layer = false) {
    if (!this.hasSkin) return null;
    if (Number.isNaN(size) || size < 8 || size > 2048) throw TypeError('Size must be a number under 8 and 2048');
    if (typeof layer !== 'boolean') throw TypeError('Layer parameter must be a boolean');
    return `https://mc.unosial.com/players/body/${this.uuid}?helmet=${layer}&size=${size}`;
  }
};
