# wer [![Build Status](https://travis-ci.org/bukinoshita/wer.svg?branch=master)](https://travis-ci.org/bukinoshita/wer)

> Get your geolocation information :round_pushpin:

## Install

```
$ yarn add wer
```

## Usage

```js
const wer = require('wer')

await wer()

/*{
  ip: '<ip>',
  city: '<city>',
  region: '<region>',
  country: '<country>',
  loc: '<loc>',
  hostname: '<hostname>',
  org: '<org>',
  lat: '<lat>',
  long: '<long>'
}*/
```

## API

### wer()

Returns a promise

## Related

- [starbucks-cli](https://github.com/bukinoshita/starbucks-cli) — Starbucks on Command Line
- [has-uber-cli](https://github.com/bukinoshita/has-uber-cli) — Check if Uber is available in your city with CLI

## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
