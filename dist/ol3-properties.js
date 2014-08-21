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

Object.defineProperties(ol.control.Control.prototype, {
  'map': {
    get: function() {
      return this.getMap();
    },
    set: function(value) {
      this.setMap(value);
    }
  }
});

Object.defineProperties(ol.control.MousePosition.prototype, {
  'projection': {
    get: function() {
      return this.getProjection();
    },
    set: function(value) {
      this.setProjection(value);
    }
  }
});

Object.defineProperties(ol.control.ScaleLine.prototype, {
  'units': {
    get: function() {
      return this.getUnits();
    },
    set: function(value) {
      this.setUnits(value);
    }
  }
});

Object.defineProperties(ol.DeviceOrientation.prototype, {
  'alpha': {
    get: function() {
      return this.getAlpha();
    }
  },
  'beta': {
    get: function() {
      return this.getBeta();
    }
  },
  'gamma': {
    get: function() {
      return this.getGamma();
    }
  },
  'heading': {
    get: function() {
      return this.getHeading();
    }
  },
  'tracking': {
    get: function() {
      return this.getTracking();
    },
    set: function(value) {
      this.setTracking(value);
    }
  }
});

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

Object.defineProperties(ol.Geolocation.prototype, {
  'accuracy': {
    get: function() {
      return this.getAccuracy();
    }
  },
  'position': {
    get: function() {
      return this.getPosition();
    }
  },
  'projection': {
    get: function() {
      return this.getProjection();
    },
    set: function(value) {
      this.setProjection(value);
    }
  },
  'tracking': {
    get: function() {
      return this.getTracking();
    },
    set: function(value) {
      this.setTracking(value);
    }
  }
});

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

Object.defineProperties(ol.Graticule.prototype, {
  'map': {
    get: function() {
      return this.getMap();
    },
    set: function(value) {
      this.setMap(value);
    }
  },
  'meridians': {
    get: function() {
      return this.getMeridians();
    }
  },
  'parallels': {
    get: function() {
      return this.getParallels();
    }
  }
});

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

Object.defineProperties(ol.Object.prototype, {
  'properties': {
    get: function() {
      return this.getProperties();
    }
  }
});

Object.defineProperties(ol.Observable.prototype, {
  'revision': {
    get: function() {
      return this.getRevision();
    }
  }
});

Object.defineProperties(ol.Overlay.prototype, {
  'element': {
    get: function() {
      return this.getElement();
    },
    set: function(value) {
      this.setElement(value);
    }
  },
  'map': {
    get: function() {
      return this.getMap();
    },
    set: function(value) {
      this.setMap(value);
    }
  },
  'offset': {
    get: function() {
      return this.getOffset();
    },
    set: function(value) {
      this.setOffset(value);
    }
  },
  'position': {
    get: function() {
      return this.getPosition();
    },
    set: function(value) {
      this.setPosition(value);
    }
  }
});

Object.defineProperties(ol.proj.Projection.prototype, {
  'axisOrientation': {
    get: function() {
      return this.getAxisOrientation();
    }
  },
  'code': {
    get: function() {
      return this.getCode();
    }
  },
  'extent': {
    get: function() {
      return this.getExtent();
    },
    set: function(value) {
      this.setExtent(value);
    }
  },
  'global': {
    get: function() {
      return this.isGlobal();
    },
    set: function(value) {
      this.setGlobal(value);
    }
  },
  'units': {
    get: function() {
      return this.getUnits();
    }
  }
});

// FIXME: ol.source.MapQuest.prototype.getLayer

Object.defineProperties(ol.source.Source.prototype, {
  'attributions': {
    get: function() {
      return this.getAttributions();
    }
  },
  'state': {
    get: function() {
      return this.getState();
    }
  },
  'projection': {
    get: function() {
      return this.getProjection();
    }
  }
});

ol.source.Vector.prototype.__getObservedFeatures = function() {
  if (!this.__observedFeatures) {
    this.__observedFeatures = this.getFeatures().slice();

    var source = this;
    Array.observe(this.__observedFeatures, function(changes) {
      changes.forEach(function(change) {
        if (change.type == 'splice') {
          for (var i = 0; i < change.addedCount; i++) {
            source.addFeature(change.object[change.index + i]);
          }
          for (var i = 0; i < change.removed.length; i++) {
            source.removeFeature(change.removed[i]);
          }
        }
      });
    });
  }
  return this.__observedFeatures;
};


Object.defineProperties(ol.source.Vector.prototype, {
  'extent': {
    get: function() {
      return this.getExtent();
    }
  },
  'features': {
    get: function() {
      return this.__getObservedFeatures();
    },
    set: function(value) {
      this.features.forEach(function(item) {
        this.removeFeature(item);
      }, this);

      // TODO: Array.unobserve
      this.addFeatures(value);
    }
  }
});

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

Object.defineProperties(ol.View.prototype, {
  'center': {
    get: function() {
      return this.getCenter();
    },
    set: function(value) {
      this.setCenter(value);
    }
  },
  'projection': {
    get: function() {
      return this.getProjection();
    }
  },
  'resolution': {
    get: function() {
      return this.getResolution();
    },
    set: function(value) {
      this.setResolution(value);
      // FIXME: notify zoom
    }
  },
  'rotation': {
    get: function() {
      return this.getRotation();
    },
    set: function(value) {
      this.setRotation(value);
    }
  },
  'zoom': {
    get: function() {
      return this.getZoom();
    },
    set: function(value) {
      this.setZoom(value);
      // FIXME: notify resolution
    }
  }
});
