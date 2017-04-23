'use strict'

import test from 'ava'
import wer from './../'

test('get location', async t => {
  const result = await wer().then(res => res)
  const {
    ip,
    country_code,
    country_name,
    region_code,
    region_name,
    city,
    time_zone,
    latitude,
    longitude
  } = result

  t.truthy(ip)
  t.truthy(country_code)
  t.truthy(country_name)
  t.truthy(region_code)
  t.truthy(region_name)
  t.truthy(city)
  t.truthy(time_zone)
  t.truthy(latitude)
  t.truthy(longitude)
})
