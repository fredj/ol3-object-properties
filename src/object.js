Object.defineProperties(ol.Object.prototype, {
  'properties': {
    get: function() {
      return this.getProperties();
    }
  }
});
