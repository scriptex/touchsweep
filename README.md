[![Travis CI](https://travis-ci.com/scriptex/touchsweep.svg?branch=master)](https://travis-ci.com/scriptex/touchsweep)
[![Github Build](https://github.com/scriptex/touchsweep/workflows/Build/badge.svg)](https://github.com/scriptex/touchsweep/actions?query=workflow%3ABuild)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/34d3d75710534dc6a38c3584a1dcd068)](https://www.codacy.com/gh/scriptex/touchsweep/dashboard?utm_source=github.com&utm_medium=referral&utm_content=scriptex/touchsweep&utm_campaign=Badge_Grade)
[![Codebeat Badge](https://codebeat.co/badges/d765a4c8-2c0e-44f2-89c3-fa364fdc14e6)](https://codebeat.co/projects/github-com-scriptex-touchsweep-master)
[![CodeFactor Badge](https://www.codefactor.io/repository/github/scriptex/touchsweep/badge)](https://www.codefactor.io/repository/github/scriptex/touchsweep)
[![DeepScan grade](https://deepscan.io/api/teams/3574/projects/5257/branches/40799/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3574&pid=5257&bid=40799)
[![Analytics](https://ga-beacon-361907.ew.r.appspot.com/UA-83446952-1/github.com/scriptex/touchsweep/README.md?pixel)](https://github.com/scriptex/touchsweep/)

# TouchSweep

> Super tiny vanilla JS module to detect swipe direction and trigger custom events accordingly.

## Visitor stats

![GitHub stars](https://img.shields.io/github/stars/scriptex/touchsweep?style=social)
![GitHub forks](https://img.shields.io/github/forks/scriptex/touchsweep?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/scriptex/touchsweep?style=social)
![GitHub followers](https://img.shields.io/github/followers/scriptex?style=social)

## Code stats

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/scriptex/touchsweep)
![GitHub repo size](https://img.shields.io/github/repo-size/scriptex/touchsweep?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/scriptex/touchsweep?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/scriptex/touchsweep?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/touchsweep?style=plastic)

## Install

```sh
npm i touchsweep
```

or

```sh
yarn add touchsweep
```

## Usage

```javascript
import TouchSweep from 'touchsweep';

const area = document.getElementById('swipe-area');
const data = {
	value: 1
};
const touchThreshold = 20;

const touchSweepInstance = new TouchSweep(area, data, touchThreshold);

// Then listen for custom swipe events and do your magic:

area.addEventListener('swipeleft', event => {
	// You have swiped left
	// Custom event data is located in `event.detail`
	// Details about coordinates are also available under `event.detail`
});

area.addEventListener('swiperight', event => {
	// You have swiped right
	// Custom event data is located in `event.detail`
	// Details about coordinates are also available under `event.detail`
});

area.addEventListener('swipedown', event => {
	// You have swiped down
	// Custom event data is located in `event.detail`
	// Details about coordinates are also available under `event.detail`
});

area.addEventListener('swipeup', event => {
	// You have swiped up
	// Custom event data is located in `event.detail`
	// Details about coordinates are also available under `event.detail`
});

area.addEventListener('swipemove', event => {
	// You are swiped continuously
	// Custom event data is located in `event.detail`
	// Details about coordinates are also available under `event.detail`
});

area.addEventListener('tap', event => {
	// You have tapped
	// Custom event data is located in `event.detail`
	// Details about coordinates are also available under `event.detail`
});
```

## Options and default settings

The module constructor accepts three (3) arguments:

-   `element`: A HTML Element. Default is `document.body`
-   `eventData`: A plain JS object. Default is `{}`
-   `threshold`: How many pixels to count until an event is fired. Default is 40

## API

TouchSweep provides a minimal API for you to use.

The `TouchSweep` instance exposes two public methods which allow you to add or to remove all event listeners responsible for the module functionality.

This is useful in cases where you want to remove the `TouchSweep` container/area from the DOM and prevent possible memory leaks by removing all event listeners related to this DOM element.

In order to remove all previously attached event listeners:

```javascript
touchSweepInstance.unbind();
```

In order to add all previously removed event listeners:

```javascript
touchSweepInstance.bind();
```

## Supported Browsers

Currently all evergreen browsers are supported.

## Demo

There is a simple demo illustrating how the TouchSweep library works.

Check the code [here](https://github.com/scriptex/touchsweep/blob/master/demo/index.html) and the live demo [here](https://touchsweep.atanas.info)

## Typescript

`TouchSweep` is written in Typescript and provides full Typescript support out of the box.

## LICENSE

MIT

---

<div align="center">
    Connect with me:
</div>

<br />

<div align="center">
    <a href="https://atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/logo.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="mailto:hi@atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/email.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.linkedin.com/in/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linkedin.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://github.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/github.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://gitlab.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/gitlab.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://twitter.com/scriptexbg">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/twitter.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.npmjs.com/~scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/npm.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.youtube.com/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/youtube.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://stackoverflow.com/users/4140082/atanas-atanasov">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/stackoverflow.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://codepen.io/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codepen.svg" width="20" alt="">
    </a>
    &nbsp;
    <a href="https://profile.codersrank.io/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codersrank.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://linktr.ee/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linktree.svg" height="20" alt="">
    </a>
</div>

---

<div align="center">
Support and sponsor my work:
<br />
<br />
<a href="https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20developer%20profile%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome" title="Tweet">
	<img src="https://img.shields.io/badge/Tweet-Share_my_profile-blue.svg?logo=twitter&color=38A1F3" />
</a>
<a href="https://paypal.me/scriptex" title="Donate on Paypal">
	<img src="https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?logo=paypal&color=222d65" />
</a>
<a href="https://revolut.me/scriptex" title="Donate on Revolut">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/revolut.json" />
</a>
<a href="https://patreon.com/atanas" title="Become a Patron">
	<img src="https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?logo=patreon&color=e64413" />
</a>
<a href="https://ko-fi.com/scriptex" title="Buy Me A Coffee">
	<img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi" />
</a>
<a href="https://liberapay.com/scriptex/donate" title="Donate on Liberapay">
	<img src="https://img.shields.io/liberapay/receives/scriptex?label=Donate%20on%20Liberapay&logo=liberapay" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" title="Donate Bitcoin">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" title="Donate Etherium">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" title="Donate Shiba Inu">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" />
</a>
</div>
