Object.defineProperties(ol.layer.Base.prototype, {
  'opacity': {
    get: function() {
      return this.getOpacity();
    },
    set: function(value) {
      this.setOpacity(value);
    }
  },
  'visible': {
    get: function() {
      return this.getVisible();
    },
    set: function(value) {
      this.setVisible(value);
    }
  }
});

Object.defineProperties(ol.layer.Layer.prototype, {
  'source': {
    get: function() {
      return this.getSource();
    },
    set: function(value) {
      this.setSource(value);
    }
  }
});

Object.defineProperties(ol.layer.Vector.prototype, {
  'style': {
    get: function() {
      return this.getStyle();
    },
    set: function(value) {
      this.setStyle(value);
    }
  }
});
