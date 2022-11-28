function createMap() {
    var map = L.map('map').setView([37.8, -96], 4); // 4 specifies the zoom

    var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);
    
    function onEachFeature(feature, layer) {
        layers.on({
            mouseover: highlightFeature,
            mouseout: resetHighLight,
        });
    }

    function resetHighlight(e) {
        geojson.resetSyle(e.target)
    }

    function highlightFeature(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7,
        })

        layer.bringToFront();
    }

    function style(feature) {
        var colorScale = d3.scaleQuantize()
            .domain([0, 1000])
            .range(colorbrewer.YlorRd[9]); // output

        return {
            fillColor: colorScale(feature.properties.density),
            fillOpacity: 0.7
        }
    }

    var geojson = L.geoJson(statesData, {style: style, onEachFeature: onEachFeature}).addTo(map);
}

function init() {
    createMap();
}

window.onload = init();