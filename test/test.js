
describe('dos-date()', function(){

  var assert = require('assert')
    , dos = require('dos-date');

  describe('with no arguments', function(){
    it('should return a date of now', function(){
      assert(dos());
    })
  })

  describe('with date', function(){
    it('should convert it to dos timestamp', function(){
      assert(10305 == dos(new Date(2000, 1, 1)))
    })
  })

})