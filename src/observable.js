Object.defineProperties(ol.Observable.prototype, {
  'revision': {
    get: function() {
      return this.getRevision();
    }
  }
});
