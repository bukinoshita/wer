'use strict'

import test from 'ava'
import wer from '.'

test(async t => {
  const result = await wer().then(res => res)
  const { ip, hostname, city, region, country, org, postal, lat, long } = result

  t.truthy(ip)
  t.truthy(hostname)
  t.truthy(city)
  t.truthy(region)
  t.truthy(org)
  t.truthy(country)
  t.truthy(postal)
  t.truthy(lat)
  t.truthy(long)
})
