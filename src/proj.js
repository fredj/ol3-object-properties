Object.defineProperties(ol.proj.Projection.prototype, {
  'axisOrientation': {
    get: function() {
      return this.getAxisOrientation();
    }
  },
  'code': {
    get: function() {
      return this.getCode();
    }
  },
  'extent': {
    get: function() {
      return this.getExtent();
    },
    set: function(value) {
      this.setExtent(value);
    }
  },
  'global': {
    get: function() {
      return this.isGlobal();
    },
    set: function(value) {
      this.setGlobal(value);
    }
  },
  'units': {
    get: function() {
      return this.getUnits();
    }
  }
});
