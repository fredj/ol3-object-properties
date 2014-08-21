Object.defineProperties(ol.style.Style.prototype, {
  'fill': {
    get: function() {
      return this.getFill();
    }
  },
  'geometry': {
    get: function() {
      return this.getGeometry();
    },
    set: function(value) {
      this.setGeometry(value);
    }
  },
  'image': {
    get: function() {
      return this.getImage();
    }
  },
  'stroke': {
    get: function() {
      return this.getStroke();
    }
  },
  'text': {
    get: function() {
      return this.getText();
    }
  },
  'zIndex': {
    get: function() {
      return this.getZIndex();
    },
    set: function(value) {
      this.setZIndex(value);
    }
  }
});

Object.defineProperties(ol.style.Fill.prototype, {
  'color': {
    get: function() {
      return this.getColor();
    },
    set: function(value) {
      this.setColor(value);
    }
  }
});

Object.defineProperties(ol.style.Stroke.prototype, {
  'color': {
    get: function() {
      return this.getColor();
    },
    set: function(value) {
      this.setColor(value);
    }
  },
  'width': {
    get: function() {
      return this.getWidth();
    },
    set: function(value) {
      this.setWidth(value);
    }
  }
});
