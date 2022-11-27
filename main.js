function createMap() {

    var map = L.map('map').setView([37.8, -96], 4);

    var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', 
       { maxZoom: 19,
    }).addTo(map);

    function onEachFeature(feature, layer){
        console.log(feature);
    }

    function style(feature) {
        var colorScale = d3.scaleQuantize()
            .domain([0,1000])
            .range(colorbrewer.YlorRd[9]);
        return {
            fillColor: colorScale(feature.properties.density),
            opacity: 1,
            fillOpacity: 0.7
        };
    }

    var geojson = L.geoJson(statesData, {style: style, onEachFeature: onEachFeature}).addTo(map);


}   

function init(){
    createMap();
}

window.onload = init;
