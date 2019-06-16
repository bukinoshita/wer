// Packages
const got = require('got')

const wer = async () => {
  try {
    const { body } = await got('https://ipinfo.io/json')
    const json = JSON.parse(body)
    const lat = json.loc.split(',')[0]
    const long = json.loc.split(',')[1]
    const data = Object.assign({}, json, { lat, long })

    return data
  } catch (error) {
    throw new TypeError(error)
  }
}

module.exports = wer
