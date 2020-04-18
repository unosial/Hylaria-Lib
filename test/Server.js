/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const { expect } = require('chai');
const nock = require('nock');
const hylaria = require('../index');
const Server = require('../structures/Server');

let server;

describe('hylaria#fetchServer()', () => {
  before(async () => {
    server = await hylaria.fetchServer('play.hypixel.net');
  });

  context('without arguments', () => {
    it('should throw error', async () => {
      try {
        await hylaria.fetchServer();
      } catch (err) {
        expect(() => { throw err; })
          .to.throw(Error, 'Invalid address');
      }
    });
  });

  context('with invalid address', () => {
    it('should throw error', async () => {
      try {
        await hylaria.fetchServer('--------');
      } catch (err) {
        expect(() => { throw err; })
          .to.throw(Error, 'Invalid address');
      }
    });
  });

  context('with invalid response from API', () => {
    it('should throw error', async () => {
      try {
        nock.disableNetConnect();
        await hylaria.fetchServer('--------');
      } catch (err) {
        nock.enableNetConnect();
        expect(() => { throw err; })
          .to.throw(Error, 'Unexpected API Error');
      }
    });
  });

  context('with valid address', () => {
    it('should return Server doc', async () => {
      expect(server)
        .to.be.instanceOf(Server);
    });
  });
});

describe('Player#getFavicon()', () => {
  context('Player#hasFavicon equal false', () => {
    it('should return null', () => {
      server.hasFavicon = false;
      expect(server.getFavicon()).be.null;
    });
  });
  context('Player#hasFavicon equal true', () => {
    it('should return url of skin', () => {
      server.hasFavicon = true;
      expect(server.getFavicon()).eq('https://mc.unosial.com/servers/favicon/play.hypixel.net:25565');
    });
  });
});
