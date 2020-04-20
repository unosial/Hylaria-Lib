<div align="center">

<img src="https://unosial.com/src/images/logo/logo.png" width="100px">
<br>

<a href="https://www.npmjs.com/package/hylaria-lib"><img src="https://img.shields.io/npm/v/hylaria-lib.svg?maxAge=3600" alt="NPM version" /></a>
<a href="https://www.npmjs.com/package/hylaria-lib"><img src="https://img.shields.io/npm/dt/hylaria-lib.svg?maxAge=3600" alt="NPM downloads" /></a>
<a href="https://travis-ci.org/github/unosial/Hylaria-Lib"><img src="https://api.travis-ci.org/unosial/Hylaria-Lib.svg"></a>
<a href="https://david-dm.org/unosial/Hylaria-Lib"><img src="https://david-dm.org/unosial/Hylaria-Lib/status.svg"></a>
<a href="https://codecov.io/gh/unosial/hylaria-lib/"><img src="https://codecov.io/gh/unosial/hylaria-lib/branch/master/graph/badge.svg"></a>
<a href="https://unosial.com/discord"><img src="https://discordapp.com/api/guilds/455308441360138242/embed.png"></a>

# Hylaria-Lib

</div>

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
  - [Fetch Player](#fetch-player)
  - [Fetch Server](#fetch-server)
  - [Player Schema](#player-schema)
  - [Server Schema](#server-schema)
  - [Player Methods](#player-methods)
  - [Server Method](#server-method)
- [Links](#links)

## About

**Hylaria-Lib** is a powerful **Node.js module** that allows you to easily interact with the [Hylaria API](https://mc.unosial.com)

## Installation

#### Using [npm](https://npmjs.org):
```
$ npm i hylaria-lib
```

#### Using [yarn](https://yarnpkg.com/):
```
$ yarn add hylaria-lib
```

## Usage

### Fetch Player:

```js
// CommonJS usage
const hylaria = require('hylaria-lib');

// Fetch an user named Yumekowo
hylaria.fetchPlayer('Yumekowo')
  .then(function (player) {
    // can now interact with Player instance
    console.log(player.username);
  })
  .catch(function (error) {
    // handle error
    console.error(error);
  });

// You can also fetch a player by his UUID
hylaria.fetchPlayer('9581c43c2b9d4fbdb3de91115363c3ce')
  .then(function (player) {
    // can now interact with Player instance
    console.log(player.username);
  })
  .catch(function (error) {
    // handle error
    console.error(error);
  });

```

### Fetch Server:

```js
// CommonJS usage
const hylaria = require('hylaria-lib');

// Fetch Hypixel
hylaria.fetchServer('play.hypixel.net')
  .then(function (server) {
    // can now interact with Server instance
    console.log(server.address);
  })
  .catch(function (error) {
    // handle error
    console.error(error);
  });

// You can also provide a server port
hylaria.fetchServer('play.hypixel.net', 25565)
  .then(function (server) {
    // can now interact with Server instance
    console.log(server.address);
  })
  .catch(function (error) {
    // handle error
    console.error(error);
  });
```

### Player Schema:

```js
{
  uuid: '9581c43c2b9d4fbdb3de91115363c3ce',
  username: 'Yumekowo',
  history: [
    { username: 'TikiLord', changedAt: null },
    { username: 'Picore', changedAt: '2018-05-09T23:09:57.000Z' },
    { username: 'OnDebian', changedAt: '2018-08-04T21:02:38.000Z' },
    { username: 'yuu_sh', changedAt: '2019-02-12T15:10:23.000Z' },
    { username: '0nDebian', changedAt: '2019-04-09T07:55:48.000Z' },
    { username: '0x394', changedAt: '2020-01-08T22:38:51.000Z' },
    { username: 'Yumekowo', changedAt: '2020-02-15T17:02:04.000Z' }
  ],
  isDemo: false,
  isMigrated: true,
  hasSkin: true,
  hasCape: false,
  hasOptifineCape: false
}
```

### Server Schema

```js
{
  address: 'play.hypixel.net',
  port: 25565,
  version: 'Requires MC 1.8-1.15',
  protocol: 47,
  motd: [
    '             §aHypixel Network  §c[1.8-1.15]',
    '     §b§lEASTER EVENT §7- §6§lTRIPLE COINS + EXP'
  ],
  onlinePlayers: 75440,
  maxPlayers: 90000,
  hasFavicon: true
}
```

### Player Methods

#### Get skin of player
```js
Player.getSkin()
// -> https://mc.unosial.com/players/skin/9581c43c2b9d4fbdb3de91115363c3ce
```

#### Get skull of player
```js
// You can set size of skull
// and also chose to see layer or not
Player.getSkull(128, true)
// -> https://mc.unosial.com/players/skull/9581c43c2b9d4fbdb3de91115363c3ce?helmet=true&size=128
```

#### Get body of player
```js
// You can set size of body
// and also chose to see layer or not
Player.getBody(128, true)
// -> https://mc.unosial.com/players/body/9581c43c2b9d4fbdb3de91115363c3ce?armor=true&size=128
```

#### Get cape of player
```js
// You can set size of body
// and also chose to see layer or not
Player.getCape(128, true)
// -> null (i don't have a cape)
```

#### Get optifine cape of player
```js
// You can set size of body
// and also chose to see layer or not
Player.getOptifineCape(128, true)
// -> null (i don't have an optifine cape)
```

### Server Method:

#### Get Server favicon
```js
Server.getFavicon()
// -> https://mc.unosial.com/servers/favicon/play.hypixel.net
```

## Links

- Website: [mc.unosial.com](https://mc.unosial.com)
- NPM Package page: [hylaria-lib](https://www.npmjs.com/package/hylaria-lib)
- [License](LICENSE.md)