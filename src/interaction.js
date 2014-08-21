Object.defineProperties(ol.interaction.Interaction.prototype, {
  'active': {
    get: function() {
      return this.getActive();
    },
    set: function(value) {
      this.setActive(value);
    }
  }
});
