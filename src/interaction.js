Object.defineProperties(ol.interaction.Interaction.prototype, {
  'map': {
    get: function() {
      return this.getMap();
    }
  },
  'active': {
    get: function() {
      return this.getActive();
    },
    set: function(value) {
      this.setActive(value);
    }
  }
});
