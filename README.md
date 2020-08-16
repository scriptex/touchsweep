[![GitHub release](https://img.shields.io/github/release/scriptex/touchsweep.svg)](https://github.com/scriptex/touchsweep/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/touchsweep.svg)](https://github.com/scriptex/touchsweep/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/touchsweep.svg)](https://github.com/scriptex/touchsweep/commits/master)
[![Github file size](https://img.shields.io/github/size/scriptex/touchsweep/dist/touchsweep.min.js.svg)](https://github.com/scriptex/touchsweep)
[![Build Status](https://travis-ci.com/scriptex/touchsweep.svg?branch=master)](https://travis-ci.com/scriptex/touchsweep)
[![npm](https://img.shields.io/npm/dt/touchsweep.svg)](https://www.npmjs.com/package/touchsweep)
[![npm](https://img.shields.io/npm/v/touchsweep.svg)](https://www.npmjs.com/package/touchsweep)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/touchsweep/README.md)](https://github.com/scriptex/touchsweep/)

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

just download this repository and use the files located in `dist` folder

or include it from unpkg.com

```html
<script src="https://unpkg.com/touchsweep"></script>
```

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

There is a simple demo illustrating how the TouchSweep library works.

Check it out [here](https://github.com/scriptex/touchsweep/blob/master/demo/index.html)

## Support this project

[![Tweet](https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3)](https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Ftouchsweep&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome)
[![Donate](https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65)](https://www.paypal.me/scriptex)
[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/atanas)

## LICENSE

MIT
