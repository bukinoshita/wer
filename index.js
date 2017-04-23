'use strict'

const got = require('got')

const wer = () => (
  got('https://freegeoip.net/json/')
    .then(res => JSON.parse(res.body))
    .catch(err => err)
)

module.exports = wer
