Object.defineProperties(ol.Map.prototype, {
  'controls': {
    get: function() {
      return this.getControls().__getObservedArray();
    }
  },
  'interactions': {
    get: function() {
      return this.getInteractions().__getObservedArray();
    }
  },
  'layers': {
    get: function() {
      return this.getLayers().__getObservedArray();
    }
  },
  'overlays': {
    get: function() {
      return this.getOverlays().__getObservedArray();
    }
  },
  'size': {
    get: function() {
      return this.getSize();
    },
    set: function(value) {
      this.setSize(value);
    }
  },
  'target': {
    get: function() {
      return this.getTargetElement();
    },
    set: function(value) {
      this.setTarget(value);
    }
  },
  'viewport': {
    get: function() {
      return this.getViewport();
    }
  },
  'view': {
    get: function() {
      return this.getView();
    },
    set: function(value) {
      this.setView(value);
    }
  }
});
