Object.defineProperties(ol.geom.Geometry.prototype, {
  'extent': {
    get: function() {
      return this.getExtent();
    }
  },
  'coordinates': {
    get: function() {
      return this.getCoordinates();
    },
    set: function(value) {
      this.setCoordinates(value);
    }
  },
  'type': {
    get: function() {
      return this.getType();
    }
  }
});

Object.defineProperties(ol.geom.SimpleGeometry.prototype, {
  // FIXME: already a layout property
  // 'layout': {
  //   get: function() {
  //     return this.getLayout();
  //   }
  // },
  // FIXME: not exported
  // 'stride': {
  //   get: function() {
  //     return this.getStride();
  //   }
  // }
});

Object.defineProperties(ol.geom.Circle.prototype, {
  'center': {
    get: function() {
      return this.getCenter();
    },
    set: function(value) {
      this.setCenter(value);
    }
  },
  'radius': {
    get: function() {
      return this.getRadius();
    },
    set: function(value) {
      this.setRadius(value);
    }
  }
});

Object.defineProperties(ol.geom.LineString.prototype, {
  'length': {
    get: function() {
      return this.getLength();
    }
  }
});

Object.defineProperties(ol.geom.Polygon.prototype, {
  'area': {
    get: function() {
      return this.getArea();
    }
  },
  'rings': {
    get: function() {
      return this.getLinearRings();
    }
  }
});

Object.defineProperties(ol.geom.MultiPolygon.prototype, {
  'area': {
    get: function() {
      return this.getArea();
    }
  },
  'polygons': {
    get: function() {
      return this.getPolygons();
    }
    // FIXME: setPolygons not in api
  }
});
