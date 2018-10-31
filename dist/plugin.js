"use strict";

/**
 * This is main plugin loading function
 * Feel free to write your own compiler
 */
W.loadPlugin(
/* Mounting options */
{
  "name": "windy-plugin-examples",
  "version": "0.2.0",
  "author": "Windyty, S.E.",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/windycom/windy-plugins"
  },
  "description": "Windy plugin system enables anyone, with basic knowledge of Javascript to enhance Windy with new functionality (default desc).",
  "displayName": "Hello world",
  "hook": "contextmenu",
  "dependencies": ["https://unpkg.com/d3@5.7.0/dist/d3.min.js"],
  "className": "drop-down-menu",
  "classNameMobile": "drop-down-menu down",
  "attachPoint": "#map_container .leaflet-popup-pane",
  "attachPointMobile": "#plugins"
},
/* HTML */
'<h3>My graph</h3> <div> I was opened at <b data-ref="coords"></b>. You can place any graph, video, picture, or simly anything that relates to the coordinates. <br> This plugin also demonstrates loading of external library <b>d3</b> <div id="my-graph" data-ref="graph"></div> </div>',
/* CSS */
'#windy-plugin-examples{font-size:12px;padding:.5em .7em;line-height:2;z-index:100;position:absolute;width:300px;height:300px;margin-left:-10px}#windy-plugin-examples .closing-x{display:block}@media only screen and (max-device-width:736px){#windy-plugin-examples{display:block;left:0;top:0;right:0;width:calc(100% - 20px);margin:10px}}',
/* Constructor */
function () {
  var _this = this;

  var $ = W.require('$');

  var rs = W.require('rootScope');

  var map = W.require('map');

  var marker = null;
  console.log(this.node);
  console.log(this.refs.graph);
  var closingBtn = $('.closing-x', this.node);

  this.onopen = function (latLonObject) {
    var lat, lon;

    if (!latLonObject) {
      var c = map.getCenter();
      lat = c.lat;
      lon = c.lng;
    } else {
      lat = latLonObject.lat;
      lon = latLonObject.lon;
    }

    renderGraph();

    var leafletCoords = {
      lng: lon,
      lat: lat
    },
        _map$latLngToLayerPoi = map.latLngToLayerPoint(leafletCoords),
        x = _map$latLngToLayerPoi.x,
        y = _map$latLngToLayerPoi.y;

    if (!rs.isMobile) {
      _this.node.style.left = "".concat(x - 15, "px");
      _this.node.style.top = "".concat(y + 15, "px");
    } else {
      var height = _this.node.clientHeight;
      map.center(latLonObject, false).panBy([0, -0.5 * height + 50]);
    }

    if (marker) {
      marker.setLatLng([lat, lon]);
    } else {
      marker = L.marker([lat, lon], {
        icon: map.myMarkers.pulsatingIcon,
        zIndexOffset: -300
      }).addTo(map);
    }

    _this.refs.coords.textContent = "".concat(lat.toFixed(3), ", ").concat(lon.toFixed(3));

    _this.node.oncontextmenu = _this.node.ondblclick = _this.node.onclick = function (ev) {
      return ev.stopPropagation();
    };
  };

  this.onclose = function () {
    if (marker) {
      map.removeLayer(marker);
      marker = null;
    }
  };

  var renderGraph = function renderGraph() {
    _this.refs.graph.innerHTML = '';
    var svg = d3.select("#my-graph").append("svg").attr("width", '100%').attr("height", 80);
    svg.append("circle").attr("cx", '50%').attr("cy", '50%').attr("r", 20);
    svg.append('text').text('This circle was drawn with d3').attr('x', 0).attr('y', '95%');
  };
});