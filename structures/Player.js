module.exports = class Player {
  /**
   * Create Player instance
   * @param {*} data Data of the player
   */
  constructor(data) {
    this.uuid = data.uuid;
    this.username = data.username;
    this.history = data.history.map((h) => h.changedAt === new Date(h.changedAt));
    this.isDemo = data.demo;
    this.isMigrated = !data.legacy;
    this.hasSkin = !!this.textures.skin;
    this.hasCape = !!this.textures.cape;
    this.hasOptifineCape = !!this.textures.cape;
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
    return `https://mc.unosial.com/players/body/${this.uuid}?helmet=${layer}&size=${size}`;
  }
};
