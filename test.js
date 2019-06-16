// Packages
import test from 'ava'

// Root
import wer from '.'

test('it should get ip', async t => {
  const result = await wer()

  t.truthy(result)
})
