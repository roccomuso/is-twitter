const test = require('tape')
const isTwitter = require('../')

test('should fail on wrong IPs', (t) => {
  t.plan(2)
  isTwitter('1.1.1.1').then(outcome => t.notOk(outcome))
  isTwitter('123.123.123.123').catch(err => t.equal(err.code, 'ENOTFOUND'))
})

test('should fail with wrong inputs', (t) => {
  t.plan(3)
  isTwitter('helloworld').catch(err => t.ok(err))
  isTwitter('0.0.0.0.0.0').catch(err => t.ok(err))
  isTwitter().catch(err => t.ok(err))
})

test('should pass on valid .twttr.com crawler ip', (t) => {
  t.plan(1)
  isTwitter('199.59.150.182').then(outcome => t.ok(outcome))
})
