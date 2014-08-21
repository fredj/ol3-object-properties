Object.defineProperties(ol.control.Control.prototype, {
  'map': {
    get: function() {
      return this.getMap();
    },
    set: function(value) {
      this.setMap(value);
    }
  }
});

Object.defineProperties(ol.control.MousePosition.prototype, {
  'projection': {
    get: function() {
      return this.getProjection();
    },
    set: function(value) {
      this.setProjection(value);
    }
  }
});

Object.defineProperties(ol.control.ScaleLine.prototype, {
  'units': {
    get: function() {
      return this.getUnits();
    },
    set: function(value) {
      this.setUnits(value);
    }
  }
});
