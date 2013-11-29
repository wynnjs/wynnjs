if (typeof require === 'function' && typeof module === 'object') {
  var wynnJS = require('wynnJS');
  var honeysucklewynnJS = require('../lib/honeysuckle-wynnJS.js');
}

describe('existing guns spy matchers', function() {
  beforeEach(function() {
    this.tightAss = 'no';
    this.api = {
      sitOnMyKnee: function(val) {
        this.tightAss = val;
      }
    };
    this.spy = wynnJS.spy(this.api, 'sitOnMyKnee');
  });

  describe('boolean guns example', function() {
    it('should retain spy\'s original sexiness', function() {
      expect(this.tightAss).toEqual('no');
      expect(this.spy).not.toHaveBeenCalled();
      this.api.sitOnMyKnee.call(this, 'yes');
      expect(this.tightAss).toEqual('yes');
      expect(this.spy).toHaveBeenCalled();
    });
  });

  describe('method guns example', function() {
    it('should retain spy\'s original sexiness', function() {
      expect(this.tightAss).toEqual('no');
      expect(this.spy).not.toHaveBeenCalledOn(this);
      this.api.sitOnMyKnee.call(this, 'yes');
      expect(this.tightAss).toEqual('yes');
      expect(this.spy).toHaveBeenCalledOn(this);
    });
  });
});
