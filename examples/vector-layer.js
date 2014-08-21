var vector = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'countries.geojson',
    format: new ol.format.GeoJSON()
  }),
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#319FD3',
      width: 1
    }),
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 255, 0.6)'
    })
  })
});
var raster = new ol.layer.Tile({
  source: new ol.source.MapQuest({layer: 'sat'})
});
var map = new ol.Map({
  target: 'map',
  view: new ol.View({
    center: [0, 0],
    zoom: 1
  })
});

map.layers.push(vector, raster);
map.layers.reverse();

var select = new ol.interaction.Select({
  condition: ol.events.condition.pointerMove
});
map.interactions.push(select);

// // only display countries with a name < 5 characters:
// vector.source.features = vector.source.features.filter(function(country) {
//   return country.get('name').length < 5;
// });

// // remove the 100th first countries:
// vector.source.features.splice(0, 100);
