
Georgia = [-85.4221511, 32.6581551]
Atlanta = [-84.5606895, 33.7676338]
Chatham = [-81.3517554, 31.9710868]
Cherokee = [-84.598498, 34.2428643]
Clarke = [-83.6762254, 33.9439412]
Clayton = [-84.4914782, 33.5005916]
Cobb = [-84.6972675, 33.9123906]
Columbia = [-82.3756277, 33.5275606]
DeKalb = [-84.3270541, 33.7927093]
Douglas = [-84.8846811, 33.689703]
Fayette = [-84.6445106, 33.4036378]
Forsyth = [-84.2323434, 34.1927884]
Fulton = [-84.7543935, 33.8440335]
Gwinnett = [-84.3181539, 33.9600231]
Hall = [-84.1192562, 34.3058696]
Henry = [-84.2785356, 33.4724802]
Whitfield =[-85.0763108, 34.6651835]

var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat(Atlanta),
      zoom: 8
    })
  });

  var layer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat(Chatham)),
            })
        ]
    })
  });
  map.addLayer(layer);
  
  var container = document.getElementById('popup');
   var content = document.getElementById('popup-content');
   var closer = document.getElementById('popup-closer');
  
   var overlay = new ol.Overlay({
       element: container,
       autoPan: true,
       autoPanAnimation: {
           duration: 250
       }
   });
   map.addOverlay(overlay);
  
   closer.onclick = function() {
       overlay.setPosition(undefined);
       closer.blur();
       return false;
   };
  
   map.on('singleclick', function (event) {
    if (map.hasFeatureAtPixel(event.pixel) === true) {
        var coordinate = event.coordinate;
  
        content.innerHTML = '<b>Chatham County</b><br />68,300 total inmigrants';
        overlay.setPosition(coordinate);
    } else {
        overlay.setPosition(undefined);
        closer.blur();
    }
  });


  var layer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat(Cherokee)),
            })
        ]
    })
  });
  map.addLayer(layer);
  
  var container = document.getElementById('popup');
   var content = document.getElementById('popup-content');
   var closer = document.getElementById('popup-closer');
  
   var overlay = new ol.Overlay({
       element: container,
       autoPan: true,
       autoPanAnimation: {
           duration: 250
       }
   });
   map.addOverlay(overlay);
  
   closer.onclick = function() { 
       overlay.setPosition(undefined);
       closer.blur();
       return false;
   };
  
   map.on('singleclick', function (event) {
    if (map.hasFeatureAtPixel(event.pixel) === true) {
        var coordinate = event.coordinate;
  
        content.innerHTML = '<b>Cherokee County</b><br />88,800 total inmigrants';
        overlay.setPosition(coordinate);
    } else {
        overlay.setPosition(undefined);
        closer.blur();
    }
  });
  
  // content.innerHTML = '<b>Hello world!</b><br />I am a popup.';
var layer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat(Clarke)),
            })
        ]
    })
  });
  map.addLayer(layer);
  
  var container = document.getElementById('popup');
   var content = document.getElementById('popup-content');
   var closer = document.getElementById('popup-closer');
  
   var overlay = new ol.Overlay({
       element: container,
       autoPan: true,
       autoPanAnimation: {
           duration: 250
       }
   });
   map.addOverlay(overlay);
  
   closer.onclick = function() { 
       overlay.setPosition(undefined);
       closer.blur();
       return false;
   };
  
   map.on('singleclick', function (event) {
    if (map.hasFeatureAtPixel(event.pixel) === true) {
        var coordinate = event.coordinate;
  
        content.innerHTML = '<b>Clarke County</b><br />45,200 total inmigrants';
        overlay.setPosition(coordinate);
    } else {
        overlay.setPosition(undefined);
        closer.blur();
    }
  });
  
  // content.innerHTML = '<b>Hello world!</b><br />I am a popup.';
  // overlay.setPosition(ol.proj.fromLonLat([4.35247, 50.84673]));  
  var layer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat(Clayton)),
            })
        ]
    })
  });
  map.addLayer(layer);
  
  var container = document.getElementById('popup');
   var content = document.getElementById('popup-content');
   var closer = document.getElementById('popup-closer');
  
   var overlay = new ol.Overlay({
       element: container,
       autoPan: true,
       autoPanAnimation: {
           duration: 250
       }
   });
   map.addOverlay(overlay);
  
   closer.onclick = function() { 
       overlay.setPosition(undefined);
       closer.blur();
       return false;
   };
  
   map.on('singleclick', function (event) {
    if (map.hasFeatureAtPixel(event.pixel) === true) {
        var coordinate = event.coordinate;
  
        content.innerHTML = '<b>Clayton County</b><br />168,700 total inmigrants';
        overlay.setPosition(coordinate);
    } else {
        overlay.setPosition(undefined);
        closer.blur();
    }
  });
  
  // content.innerHTML = '<b>Hello world!</b><br />I am a popup.';
  // overlay.setPosition(ol.proj.fromLonLat([4.35247, 50.84673]));  
  var layer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat(Cobb)),
            })
        ]
    })
  });
  map.addLayer(layer);
  
  var container = document.getElementById('popup');
   var content = document.getElementById('popup-content');
   var closer = document.getElementById('popup-closer');
  
   var overlay = new ol.Overlay({
       element: container,
       autoPan: true,
       autoPanAnimation: {
           duration: 250
       }
   });
   map.addOverlay(overlay);
  
   closer.onclick = function() { 
       overlay.setPosition(undefined);
       closer.blur();
       return false;
   };
  
   map.on('singleclick', function (event) {
    if (map.hasFeatureAtPixel(event.pixel) === true) {
        var coordinate = event.coordinate;
  
        content.innerHTML = '<b>Cobb County</b><br />545,400 total inmigrants';
        overlay.setPosition(coordinate);
    } else {
        overlay.setPosition(undefined);
        closer.blur();
    }
  });
  
  // content.innerHTML = '<b>Hello world!</b><br />I am a popup.';
  // overlay.setPosition(ol.proj.fromLonLat([4.35247, 50.84673]));  
  var layer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat(Columbia)),
            })
        ]
    })
  });
  map.addLayer(layer);
  
  var container = document.getElementById('popup');
   var content = document.getElementById('popup-content');
   var closer = document.getElementById('popup-closer');
  
   var overlay = new ol.Overlay({
       element: container,
       autoPan: true,
       autoPanAnimation: {
           duration: 250
       }
   });
   map.addOverlay(overlay);
  
   closer.onclick = function() { 
       overlay.setPosition(undefined);
       closer.blur();
       return false;
   };
  
   map.on('singleclick', function (event) {
    if (map.hasFeatureAtPixel(event.pixel) === true) {
        var coordinate = event.coordinate;
  
        content.innerHTML = '<b>Columbia County</b><br />32,800 total inmigrants';
        overlay.setPosition(coordinate);
    } else {
        overlay.setPosition(undefined);
        closer.blur();
    }
  });
  
  // content.innerHTML = '<b>Hello world!</b><br />I am a popup.';
  // overlay.setPosition(ol.proj.fromLonLat([4.35247, 50.84673]));
  var layer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat(DeKalb)),
            })
        ]
    })
  });
    map.addLayer(layer);
    
    var container = document.getElementById('popup');
    var content = document.getElementById('popup-content');
    var closer = document.getElementById('popup-closer');
    
    var overlay = new ol.Overlay({
        element: container,
        autoPan: true,
        autoPanAnimation: {
            duration: 250
        }
    });
    map.addOverlay(overlay);
    
    closer.onclick = function() { 
        overlay.setPosition(undefined);
        closer.blur();
        return false;
    };
    
    map.on('singleclick', function (event) {
      if (map.hasFeatureAtPixel(event.pixel) === true) {
          var coordinate = event.coordinate;
    
          content.innerHTML = '<b>DeKalb County</b><br />540,900 total inmigrants';
          overlay.setPosition(coordinate);
      } else {
          overlay.setPosition(undefined);
          closer.blur();
      }
    });
  
  // content.innerHTML = '<b>Hello world!</b><br />I am a popup.';
  // overlay.setPosition(ol.proj.fromLonLat([4.35247, 50.84673]));  
  var layer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat(Douglas)),
            })
        ]
    })
  });
    map.addLayer(layer);
    
    var container = document.getElementById('popup');
    var content = document.getElementById('popup-content');
    var closer = document.getElementById('popup-closer');
    
    var overlay = new ol.Overlay({
        element: container,
        autoPan: true,
        autoPanAnimation: {
            duration: 250
        }
    });
    map.addOverlay(overlay);
    
    closer.onclick = function() { 
        overlay.setPosition(undefined);
        closer.blur();
        return false;
    };
    
    map.on('singleclick', function (event) {
      if (map.hasFeatureAtPixel(event.pixel) === true) {
          var coordinate = event.coordinate;
    
          content.innerHTML = '<b>Douglas County</b><br />50,700 total inmigrants';
          overlay.setPosition(coordinate);
      } else {
          overlay.setPosition(undefined);
          closer.blur();
      }
    });
  
  // content.innerHTML = '<b>Hello world!</b><br />I am a popup.';
  // overlay.setPosition(ol.proj.fromLonLat([4.35247, 50.84673]));  