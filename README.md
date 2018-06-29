[![GitHub stars](https://img.shields.io/github/stars/scriptex/touchsweep.svg?style=social&label=Stars)](https://github.com/scriptex/touchsweep)
[![GitHub forks](https://img.shields.io/github/forks/scriptex/touchsweep.svg?style=social&label=Fork)](https://github.com/scriptex/touchsweep/network#fork-destination-box)
[![GitHub release](https://img.shields.io/github/release/scriptex/touchsweep.svg)](https://github.com/scriptex/touchsweep/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/touchsweep.svg)](https://github.com/scriptex/touchsweep/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/touchsweep.svg)](https://github.com/scriptex/touchsweep/commits/master)
[![Github file size](https://img.shields.io/github/size/scriptex/touchsweep/dist/touchsweep.min.js.svg)](https://github.com/scriptex/touchsweep)
[![Build Status](https://travis-ci.org/scriptex/touchsweep.svg?branch=master)](https://travis-ci.org/scriptex/touchsweep)
[![npm](https://img.shields.io/npm/dt/touchsweep.svg)](https://www.npmjs.com/package/touchsweep)
[![npm](https://img.shields.io/npm/v/touchsweep.svg)](https://www.npmjs.com/package/touchsweep)
[![license](https://img.shields.io/github/license/scriptex/touchsweep.svg)](https://github.com/scriptex/touchsweep)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/touchsweep/README.md)](https://github.com/scriptex/touchsweep/)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/scriptex/touchsweep/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/scriptex/touchsweep/graphs/commit-activity)
[![Greenkeeper badge](https://badges.greenkeeper.io/scriptex/touchsweep.svg)](https://greenkeeper.io/)

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://github.com/scriptex/)

# TouchSweep

Super tiny vanilla JS module to detect swipe direction and trigger custom events accordingly.

This module works on touch-enabled devices only.

## Install

```sh
npm i touchsweep
```

or

```sh
yarn add touchsweep
```

or

just download this repository and use the files located in `dist` folder.

## Usage

```javascript
import TouchSweep from 'touchsweep';

const area = document.getElementById('swipe-area');
const data = {
	value: 1
};
const touchThreshold = 20;

new TouchSweep(area, data, touchThreshold);

// Then listen for custom swipe events and do your magic:

area.addEventListener('swipeleft', event => {
	// You have swiped left
	// Custom event data is located in event.detail
});

area.addEventListener('swiperight', event => {
	// You have swiped right
	// Custom event data is located in event.detail
});

area.addEventListener('swipedown', event => {
	// You have swiped down
	// Custom event data is located in event.detail
});

area.addEventListener('swipeup', event => {
	// You have swiped up
	// Custom event data is located in event.detail
});

area.addEventListener('tap', event => {
	// You have tapped
	// Custom event data is located in event.detail
});
```

## Options and default settings

The module constructor accepts three (3) arguments:

-   `element`: A HTML Element. Default is `document.body`
-   `eventData`: A plain JS object. Default is `{}`
-   `threshold`: How many pixels to count until an event is fired. Default is 40

## Supported Browsers

Currently all evergreen browsers are supported.
IE 10+ support is planned in the near future.

## Demo

There is a simple demo illustrating how the AnimateMe library works.

Check it out [here](https://github.com/scriptex/animateme/blob/master/demo/index.html)

## LICENSE

MIT
