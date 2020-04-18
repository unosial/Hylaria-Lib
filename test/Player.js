/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const { expect } = require('chai');
const nock = require('nock');
const hylaria = require('../index');
const Player = require('../structures/Player');

let yumekowo;
let alex;

describe('hylaria#fetchPlayer()', () => {
  before(async () => {
    alex = await hylaria.fetchPlayer('alex');
  });

  context('without arguments', () => {
    it('should throw error', async () => {
      try {
        await hylaria.fetchPlayer();
      } catch (err) {
        expect(() => { throw err; })
          .to.throw(Error, 'Invalid identifier');
      }
    });
  });

  context('with invalid argument', () => {
    it('should throw error', async () => {
      try {
        await hylaria.fetchPlayer('--------');
      } catch (err) {
        expect(() => { throw err; })
          .to.throw(Error, 'Invalid identifier');
      }
    });
  });

  context('with invalid response from API', () => {
    it('should throw error', async () => {
      try {
        nock.disableNetConnect();
        await hylaria.fetchPlayer('Yumekowo');
      } catch (err) {
        nock.enableNetConnect();
        expect(() => { throw err; })
          .to.throw(Error, 'Unexpected API Error');
      }
    });
  });

  context('with valid username or UUID', () => {
    it('should return Player doc', async () => {
      yumekowo = await hylaria.fetchPlayer('Yumekowo');
      expect(yumekowo)
        .to.be.instanceOf(Player);
    });
  });
});

describe('Player#getSkin()', () => {
  context('Player#hasSkin equal false', () => {
    it('should return null', async () => {
      expect(alex.getSkin()).be.null;
    });
  });
  context('Player#hasSkin equal true', () => {
    it('should return url of skin', async () => {
      expect(yumekowo.getSkin()).eq('https://mc.unosial.com/players/skin/9581c43c2b9d4fbdb3de91115363c3ce');
    });
  });
});

describe('Player#getSkull()', () => {
  context('Player#hasSkin equal false', () => {
    it('should return null', async () => {
      expect(alex.getSkull()).be.null;
    });
  });
  context('Player#hasSkin equal true', () => {
    it('should return url of skin', async () => {
      expect(yumekowo.getSkull()).eq('https://mc.unosial.com/players/skull/9581c43c2b9d4fbdb3de91115363c3ce?helmet=false&size=128');
    });
  });
  context('Player#getSkull() has invalid size', () => {
    it('should throw error', async () => {
      expect(() => yumekowo.getSkull('sdsdsdsdsdsd')).to.throw(TypeError, 'Size must be a number under 8 and 2048');
    });
  });
  context('Player#getSkull() has invalid layer parameter', () => {
    it('should throw error', async () => {
      expect(() => yumekowo.getSkull(128, 'sdsdsdsdsdsd')).to.throw(TypeError, 'Layer parameter must be a boolean');
    });
  });
});

describe('Player#getBody()', () => {
  context('Player#hasSkin equal false', () => {
    it('should return null', async () => {
      expect(alex.getBody()).be.null;
    });
  });
  context('Player#hasSkin equal true', () => {
    it('should return url of skin', async () => {
      expect(yumekowo.getBody()).eq('https://mc.unosial.com/players/body/9581c43c2b9d4fbdb3de91115363c3ce?helmet=false&size=128');
    });
  });
  context('Player#getBody() has invalid size', () => {
    it('should throw error', async () => {
      expect(() => yumekowo.getBody('sdsdsdsdsdsd')).to.throw(TypeError, 'Size must be a number under 8 and 2048');
    });
  });
  context('Player#getBody() has invalid layer parameter', () => {
    it('should throw error', async () => {
      expect(() => yumekowo.getBody(128, 'sdsdsdsdsdsd')).to.throw(TypeError, 'Layer parameter must be a boolean');
    });
  });
});
