Object.defineProperties(ol.DeviceOrientation.prototype, {
  'alpha': {
    get: function() {
      return this.getAlpha();
    }
  },
  'beta': {
    get: function() {
      return this.getBeta();
    }
  },
  'gamma': {
    get: function() {
      return this.getGamma();
    }
  },
  'heading': {
    get: function() {
      return this.getHeading();
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
