'use strict'

const got = require('got')

module.exports = () =>
  got('https://ipinfo.io/json')
    .then(res => {
      const json = JSON.parse(res.body)
      const lat = json.loc.split(',')[0]
      const long = json.loc.split(',')[1]
      const data = Object.assign({}, json, { lat, long })

      return data
    })
    .catch(err => err)
