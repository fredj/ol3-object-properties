Object.defineProperties(ol.Overlay.prototype, {
  'element': {
    get: function() {
      return this.getElement();
    },
    set: function(value) {
      this.setElement(value);
    }
  },
  'map': {
    get: function() {
      return this.getMap();
    },
    set: function(value) {
      this.setMap(value);
    }
  },
  'offset': {
    get: function() {
      return this.getOffset();
    },
    set: function(value) {
      this.setOffset(value);
    }
  },
  'position': {
    get: function() {
      return this.getPosition();
    },
    set: function(value) {
      this.setPosition(value);
    }
  }
});
