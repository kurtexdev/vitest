import { it, describe, assert } from '../src'

describe.skip('skipped suite', () => {
  it('no fail as suite is skipped', () => {
    assert.equal(Math.sqrt(4), 3)
  })
})

describe.todo('unimplemented suite')

describe('task modes', () => {
  it.skip('no fail as it task is skipped', () => {
    assert.equal(Math.sqrt(4), 3)
  })

  it('sdfsdf', () => {
    assert.equal(2, 3)
  })

  it.todo('unimplemented task')
})

it('sdfsdf', () => {
  assert.equal(2, 3)
})
