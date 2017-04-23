# wer [![Build Status](https://travis-ci.org/bukinoshita/wer.svg?branch=master)](https://travis-ci.org/bukinoshita/wer)

> Get your geolocation information :round_pushpin:

## Install
```
$ npm install --save wer
```

## Usage
```js
import wer from 'wer'

wer().then(location => location)

/*{
  ip: '111.1.111.11',
  country_code: 'US',
  country_name: 'United States',
  region_code: 'NY',
  region_name: 'New York',
  city: 'New York',
  zip_code: '',
  time_zone: 'North_America/New_York',
  latitude: -11.1111,
  longitude: -22.2222,
  metro_code: 0
}*/

```

## API
### wer()

Returns a promise

## Related
- [starbucks-cli](https://github.com/bukinoshita/starbucks-cli) — Starbucks on Command Line

## License
[MIT](https://github.com/bukinoshita/wer/blob/master/LICENSE) &copy; Bu Kinoshita
