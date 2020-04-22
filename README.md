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

-   [About](#about)
-   [Installation](#installation)
-   [Usage](#usage)
    -   [Fetch Player](#fetch-player)
    -   [Fetch Server](#fetch-server)
    -   [Player Schema](#player-schema)
    -   [Server Schema](#server-schema)
    -   [Player Methods](#player-methods)
    -   [Server Method](#server-method)
-   [Links](#links)

## About

**Hylaria-Lib** is a powerful **Node.js module** that allows you to easily interact with the [Hylaria API](https://mc.unosial.com)

## Installation

#### Using [npm](https://npmjs.org):

    $ npm i hylaria-lib

#### Using [yarn](https://yarnpkg.com/):

    $ yarn add hylaria-lib

## Getting started

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

More things are available in the documentation: [docs.hylaria.com](https://docs.hylaria.com)

## Links

-   Website: [hylaria.com](https://hylaria.com)
-   NPM Package page: [hylaria-lib](https://www.npmjs.com/package/hylaria-lib)
-   [License](LICENSE.md)
