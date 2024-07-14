import { expect, test, assert, suite } from '../src'
import { two } from './submodule'

test('Math.sqrt()', () => {
  assert.equal(Math.sqrt(4), two)
  assert.equal(Math.sqrt(2), Math.SQRT2)
  expect(Math.sqrt(144)).toStrictEqual(13)
})

test('JSON', () => {
  const input = {
    foo: 'hello',
    bar: 'world',
  }

  const output = JSON.stringify(input)

  expect(output).eq('{"foo":"hello","bar":"world"}')
  assert.deepEqual(JSON.parse(output), input, 'matches original')
})

test('async', async() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 200)
  })
})

const hi = suite('suite')

hi.test('expect truthy', () => {
  expect({}).toBeTruthy()
  expect(null).not.toBeTruthy()
})
