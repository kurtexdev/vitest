import { it, describe, assert, beforeAll, afterAll, beforeEach, afterEach } from '../src'

describe('before and after hooks', () => {
  let eachState = 'start'
  let eachCount = 0
  let allState = 'start'
  let allCount = 0

  beforeAll(() => {
    allState = 'running'
  })
  afterAll(() => {
    allState = 'done'
    allCount++
  })

  beforeEach(() => {
    eachState = 'running'
  })
  afterEach(() => {
    eachState = 'done'
    eachCount++
  })

  it('beforeEach works', () => {
    assert.equal(eachState, 'running')
  })

  // It should work if tests are run in serial, skip for now
  it.skip('afterEach called', () => {
    assert.equal(eachState, 'running')
    assert.equal(eachCount, 1)
  })

  it('beforeAll works', () => {
    assert.equal(allState, 'running')
  })

  it('afterAll not called', () => {
    assert.equal(allState, 'running')
    assert.equal(allCount, 0)
  })
})
