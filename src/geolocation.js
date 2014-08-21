Object.defineProperties(ol.Geolocation.prototype, {
  'accuracy': {
    get: function() {
      return this.getAccuracy();
    }
  },
  'position': {
    get: function() {
      return this.getPosition();
    }
  },
  'projection': {
    get: function() {
      return this.getProjection();
    },
    set: function(value) {
      this.setProjection(value);
    }
  },
  'tracking': {
    get: function() {
      return this.getTracking();
    },
    set: function(value) {
      this.setTracking(value);
    }
  }
});
