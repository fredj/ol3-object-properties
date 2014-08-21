Object.defineProperties(ol.Feature.prototype, {
  'id': {
    get: function() {
      return this.getId();
    },
    set: function(value) {
      this.setId(value);
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
  'style': {
    get: function() {
      return this.getStyle();
    },
    set: function(value) {
      this.setStyle(value);
    }
  }
});
