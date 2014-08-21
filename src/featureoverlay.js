Object.defineProperties(ol.FeatureOverlay.prototype, {
  'features': {
    get: function() {
      return this.getFeatures().__getObservedArray();
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
  'style': {
    get: function() {
      return this.getStyle();
    },
    set: function(value) {
      this.setStyle(value);
    }
  }
});
