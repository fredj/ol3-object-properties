Object.defineProperties(ol.View.prototype, {
  'center': {
    get: function() {
      return this.getCenter();
    },
    set: function(value) {
      this.setCenter(value);
    }
  },
  'projection': {
    get: function() {
      return this.getProjection();
    }
  },
  'resolution': {
    get: function() {
      return this.getResolution();
    },
    set: function(value) {
      this.setResolution(value);
      // FIXME: notify zoom
    }
  },
  'rotation': {
    get: function() {
      return this.getRotation();
    },
    set: function(value) {
      this.setRotation(value);
    }
  },
  'zoom': {
    get: function() {
      return this.getZoom();
    },
    set: function(value) {
      this.setZoom(value);
      // FIXME: notify resolution
    }
  }
});
