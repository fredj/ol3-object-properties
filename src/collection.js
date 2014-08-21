// FIXME: use a polyfill

ol.Collection.prototype.__getObservedArray = function() {
  if (!this.__observedArray) {
    // FIXME: listen to this.on('change:length')
    // FIXME: handle change.type == 'add' ?
    // FIXME: handle change.type == 'delete'
    this.__observedArray = this.getArray().slice();

    var collection = this;
    Array.observe(this.__observedArray, function(changes) {
      changes.forEach(function(change) {
        if (change.type == 'splice') {
          for (var i = 0; i < change.addedCount; i++) {
            var index = change.index + i;
            collection.insertAt(index, change.object[index]);
          }
          for (var i = 0; i < change.removed.length; i++) {
            var index = change.index + i;
            collection.removeAt(index);
          }
        } else if (change.type == 'update') {
          var index = parseInt(change.name, 10);
          collection.setAt(index, change.object[index]);
        }
      });
    });
  }
  return this.__observedArray;
};
