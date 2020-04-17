module.exports = class Server {
  /**
   * Create Server instance
   * @param {*} data Data of the server
   */
  constructor(data) {
    this.address = data.address;
    this.port = data.port;
    this.version = data.version;
    this.protocol = data.protocol;
    this.motd = data.motd;
    this.onlinePlayers = data.players.online;
    this.maxPlayers = data.players.max;
    this.hasFavicon = !!data.icon;
  }

  /**
   * Get server favicon
   * @returns {?string} URL of the favicon
   */
  getFavicon() {
    if (!this.hasFavicon) return null;
    return `https://mc.unosial.com/servers/favicon/${this.address}:${this.port}`;
  }
};
