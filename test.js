var expect = require('chai').expect
  , includes = require('./')

describe('includes', function() {
  it('should check whether datum includes pattern', function() {
    expect(includes('.js')('file.js')).to.be.ok
    expect(includes('.js')('file.txt')).to.not.be.ok
  })
})