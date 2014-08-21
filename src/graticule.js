Object.defineProperties(ol.Graticule.prototype, {
  'map': {
    get: function() {
      return this.getMap();
    },
    set: function(value) {
      this.setMap(value);
    }
  },
  'meridians': {
    get: function() {
      return this.getMeridians();
    }
  },
  'parallels': {
    get: function() {
      return this.getParallels();
    }
  }
});
