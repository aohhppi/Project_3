
// Georgia = [-85.4221511, 32.6581551]
Atlanta = [-84.5606895, 33.7676338]
// Chatham = [-81.3517554, 31.9710868]
// Cherokee = [-84.598498, 34.2428643]
// Clarke = [-83.6762254, 33.9439412]
// Clayton = [-84.4914782, 33.5005916]
// Cobb = [-84.6972675, 33.9123906]
// Columbia = [-82.3756277, 33.5275606]
// DeKalb = [-84.3270541, 33.7927093]
// Douglas = [-84.8846811, 33.689703]
// Fayette = [-84.6445106, 33.4036378]
// Forsyth = [-84.2323434, 34.1927884]
// Fulton = [-84.7543935, 33.8440335]
// Gwinnett = [-84.3181539, 33.9600231]
// Hall = [-84.1192562, 34.3058696]
// Henry = [-84.2785356, 33.4724802]
// Whitfield =[-85.0763108, 34.6651835]

var map = new ol.Map({
    target: 'map',
    // layers: [
    //   new ol.layer.Tile({
    //     source: new ol.source.OSM()
    //   })
    // ],
    view: new ol.View({
      center: ol.proj.fromLonLat(Atlanta),
      zoom: 5.25,
      maxZoom: 8,
      minZoom: 3
    })
  });

  // Base map layers group

  var openStreetMapStandard = new ol.layer.Tile({
    source: new ol.source.OSM(),
    visible: false,
    title: 'OSMStandard'
  })

  // var openStreetMapHumanitarian = new ol.layer.Tile({
 
  //   source: new ol.source.OSM({
  //     url: 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
  //   }),
  //   visible: false,
  //   title: 'OSMHumanitarian'
  // })

  var stamenTerrain = new ol.layer.Tile({
    source: new ol.source.XYZ({
      url: 'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg',
      attribuitions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    }),
    visible: true,
    title: 'StamenTerrain'
  })

  // map.addLayer(openStreetMapStandard)

  // add Layer Group
  var baseLayerGroup = new ol.layer.Group({
    layers: [
      openStreetMapStandard, stamenTerrain
    ]
  })

  map.addLayer(baseLayerGroup);

// Layer switcher logic for basemaps
  var baseLayerElements = document.querySelectorAll('.sidebar > input[type=radio]');
  // console.log(baseLayerElements);
  for(let baseLayerElement of baseLayerElements){
    // console.log(baseLayerElement);
    baseLayerElement.addEventListener('change', function(){
      // console.log(this);
      let baseLayerElementValue = this.value;
      baseLayerGroup.getLayers().forEach(function(element, index, array){
        // console.log(element.get('title'));
        let baseLayerTitle = element.get('title');
        element.setVisible(baseLayerTitle === baseLayerElementValue);
  //     // })
  //     // let baseLayerElementValue = this.value;
  //     // baseLayerGroup.getLayers().forEach(function(element, index, array){
  //     //   console.log(element.get('title'));
      })

    })
  }
  
  
  
  var fillStyle = new ol.style.Fill({
    color: [84, 118, 255, 1]
  })

  var strokeStyle = new ol.style.Stroke({
    color: [46, 45, 45, 1],
    width: 1.2
  })

  var circleStyle = new ol.style.Circle({
    fill: new ol.style.Fill({
      color: [245, 49, 5, 1]
    }),
    radius: 7,
    stroke: strokeStyle
  }) 

  var mapping = new ol.layer.Vector({
    source: new ol.source.Vector({
      url:'./static/js/geo.geojson',
      format: new ol.format.GeoJSON()
    }),
    visible: true,
    title: "test",
    style: new ol.style.Style({
      fill: fillStyle,
      stroke: strokeStyle,
      image: circleStyle
    })
  })

  map.addLayer(mapping);

  var overlayContainerElement = document.querySelector('.overlay-container');
  var overlayLayer = new ol.Overlay({
    element: overlayContainerElement
  })
  map.addOverlay(overlayLayer);

  var overlayFeatureName = document.getElementById('feature-name');
  var overlayFeatureInfo = document.getElementById('feature-info');

  map.on("click", function(e){
    overlayLayer.setPosition(undefined);
    map.forEachFeatureAtPixel(e.pixel, function(feature, layer){
      let clickedCoordinate = e.coordinate;
      let clickedFeatureName = feature.get("County");
      let clickedFeatureInfo = feature.get("Inmigrants");
      overlayLayer.setPosition(clickedCoordinate);
      overlayFeatureName.innerHTML = clickedFeatureName;
      overlayFeatureInfo.innerHTML = clickedFeatureInfo;     
    })
  })
  
