var expect = require('chai').expect
  , includes = require('./')

describe('includes', function() {

  it('should check whether datum includes pattern', function() {
    expect(includes('.js')('file.js')).to.be.ok
    expect(includes('.js')('file.txt')).to.not.be.ok
  })

  it('should fail gracefull with falsy', function() {
    expect(includes('.js')(false)).to.not.be.ok
    expect(includes('.js')({})).to.not.be.ok
  })

})