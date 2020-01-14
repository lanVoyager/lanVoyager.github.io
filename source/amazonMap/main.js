
//// Initialize Map
    var myPoint;
    var mymap = L.map('map');
    var points = L.layerGroup();



//L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
//    subdomains: 'abcd',
//    maxZoom: 19
//}).addTo(mymap);

//L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
//    subdomains: 'abcd',
//    maxZoom: 19
//}).addTo(mymap);

var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(mymap);


myPoint = {
"type": "FeatureCollection",
"features": [
{ "type": "Feature", "properties": { "Name": "Day 6",      "Type": "overnight/mealbreak",  "description": "Local People Cabana","extra": "Day 4 lunchbreak"}, "geometry": { "type": "Point", "coordinates": [ -75.212418, -5.2274412 ] } },
{ "type": "Feature", "properties": { "Name": "Day 5",      "Type": "stopby",               "description": "Lago Cocha Pasgo", "extra": ""},                   "geometry": { "type": "Point", "coordinates": [ -75.099434, -5.1563615 ] } },
{ "type": "Feature", "properties": { "Name": "Day 4 & 5",  "Type": "overnight",            "description": "Local People Cabana", "extra": ""},                "geometry": { "type": "Point", "coordinates": [ -75.169185, -5.2140464 ] } },
{ "type": "Feature", "properties": { "Name": "Day 3 & 7",  "Type": "overnight",            "description": "Local People Cabana", "extra": ""},                "geometry": { "type": "Point", "coordinates": [ -75.331278, -5.2874205 ] } },
{ "type": "Feature", "properties": { "Name": "Day 2 & 8",  "Type": "overnight",            "description": "Campamento Tipishca Huama", "extra": ""},          "geometry": { "type": "Point", "coordinates": [ -75.3849, -5.2479699 ] } },
{ "type": "Feature", "properties": { "Name": "Day 2",      "Type": "lunchbreak",           "description": "No Cabana", "extra": ""},                          "geometry": { "type": "Point", "coordinates": [ -75.403521, -5.226915 ] } },
{ "type": "Feature", "properties": { "Name": "Day 9",      "Type": "lunchbreak",           "description": "No Cabana", "extra": ""},                          "geometry": { "type": "Point", "coordinates": [ -75.41947, -5.2195282 ] } },
{ "type": "Feature", "properties": { "Name": "Day 9",      "Type": "overnight/mealbreak",  "description": "Camtaol",   "extra": "Day 2 breakfast"},           "geometry": { "type": "Point", "coordinates": [ -75.442372, -5.2060204 ] } },
{ "type": "Feature", "properties": { "Name": "Day 1",      "Type": "overnight",            "description": "Panteon", "extra": ""},                            "geometry": { "type": "Point", "coordinates": [ -75.484666, -5.2000914 ] } },
{ "type": "Feature", "properties": { "Name": "Day 10",     "Type": "overnight",            "description": "Poza Gloria", "extra": ""},                        "geometry": { "type": "Point", "coordinates": [ -75.518653, -5.2021435 ] } },
{ "type": "Feature", "properties": { "Name": "Day 1",      "Type": "lunchbreak",           "description": "Tranka", "extra": ""},                             "geometry": { "type": "Point", "coordinates": [ -75.549923, -5.1935253 ] } },
{ "type": "Feature", "properties": { "Name": "Day 11",     "Type": "lunchbreak",           "description": "no Cabana", "extra": ""},                          "geometry": { "type": "Point", "coordinates": [ -75.565158, -5.2199329 ] } }
]
}

function getColor(myType) {
 switch (myType) {
            case 'overnight':
              return  '#ff7800';
            case 'lunchbreak':
              return 'blue';
            case 'overnight/mealbreak':
                return 'red';
            case 'stopby':
                return 'green';
          }
}

var pointLayer = L.geoJSON(myPoint, {
  pointToLayer: function(feature,latlng){
    label = String(feature.properties.Name) // .bindTooltip can't use straight 'feature.properties.attribute'
    return new L.CircleMarker(latlng, {
      radius: 8,
    fillColor: getColor(feature.properties.Type),
    //color: "#000",
    //weight: 1,
    opacity: 0,
    fillOpacity: 0.8
    }).bindTooltip(label, {permanent: true, direction: "top", className: "my-labels"}).openTooltip();
    }
  });

//pointLayer.addData(myPoint);
mymap.addLayer(pointLayer);
mymap.fitBounds(pointLayer.getBounds());

var legend = L.control({position: 'bottomleft'});
    legend.onAdd = function (mymap) {

    var div = L.DomUtil.create('div', 'info legend');
    labels = ['<strong>Location Type</strong>'],
    categories = ['overnight','lunchbreak','overnight/mealbreak','stopby'];

    for (var i = 0; i < categories.length; i++) {

            div.innerHTML += 
            labels.push(
                '<span class="dot" style="background-color:' + getColor(categories[i]) + '"></span> ' +
            (categories[i] ? categories[i] : '+'));

        }
        div.innerHTML = labels.join('<br>');
    return div;
    };

legend.addTo(mymap);

