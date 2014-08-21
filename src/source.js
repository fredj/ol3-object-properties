// FIXME: ol.source.MapQuest.prototype.getLayer

Object.defineProperties(ol.source.Source.prototype, {
  'attributions': {
    get: function() {
      return this.getAttributions();
    }
  },
  'state': {
    get: function() {
      return this.getState();
    }
  },
  'projection': {
    get: function() {
      return this.getProjection();
    }
  }
});

Object.defineProperties(ol.source.WMTS.prototype, {
  'format': {
    get: function() {
      return this.getFormat();
    }
  },
  'layer': {
    get: function() {
      return this.getLayer();
    }
  },
  'matrixSet': {
    get: function() {
      return this.getMatrixSet();
    }
  },
  'style': {
    get: function() {
      return this.getStyle();
    }
  },
  'version': {
    get: function() {
      return this.getVersion();
    }
  }
});

ol.source.Vector.prototype.__getObservedFeatures = function() {
  if (!this.__observedFeatures) {
    this.__observedFeatures = this.getFeatures().slice();

    var source = this;
    Array.observe(this.__observedFeatures, function(changes) {
      changes.forEach(function(change) {
        if (change.type == 'splice') {
          for (var i = 0; i < change.addedCount; i++) {
            source.addFeature(change.object[change.index + i]);
          }
          for (var i = 0; i < change.removed.length; i++) {
            source.removeFeature(change.removed[i]);
          }
        }
      });
    });
  }
  return this.__observedFeatures;
};


Object.defineProperties(ol.source.Vector.prototype, {
  'extent': {
    get: function() {
      return this.getExtent();
    }
  },
  'features': {
    get: function() {
      return this.__getObservedFeatures();
    },
    set: function(value) {
      this.features.forEach(function(item) {
        this.removeFeature(item);
      }, this);

      // TODO: Array.unobserve
      this.addFeatures(value);
    }
  }
});
