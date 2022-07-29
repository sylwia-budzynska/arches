const Path = require('path');
const { 
    USER_DEFINED_ARCHES_CORE_DIRECTORY, 
    USER_DEFINED_PROJECT_ROOT_DIRECTORY,
    USER_DEFINED_DJANGO_SERVER_ADDRESS, 
    USER_DEFINED_WEBPACK_DEVELOPMENT_SERVER_PORT,
    USER_DEFINED_PUBLIC_PATH,
} = require('./webpack-user-config');


const projectPath = Path.resolve(Path.parse(__dirname)['dir'], './arches');

const archesCoreDirectory = USER_DEFINED_ARCHES_CORE_DIRECTORY || projectPath;
const projectRootDirectory = USER_DEFINED_PROJECT_ROOT_DIRECTORY || projectPath + '/app';
const djangoServerAddress = USER_DEFINED_DJANGO_SERVER_ADDRESS || "http://localhost:8000/";
const webpackDevelopmentServerPort = USER_DEFINED_WEBPACK_DEVELOPMENT_SERVER_PORT || 9000;
const publicPath = USER_DEFINED_PUBLIC_PATH || "/static/";

module.exports = {
    ARCHES_CORE_DIRECTORY: archesCoreDirectory,
    PROJECT_ROOT_DIRECTORY: projectRootDirectory,
    DJANGO_SERVER_ADDRESS: djangoServerAddress,
    WEBPACK_DEVELOPMENT_SERVER_PORT: webpackDevelopmentServerPort,
    PUBLIC_PATH: publicPath,
    ARCHES_CORE_NODE_MODULES_ALIASES: JSON.stringify({
        "plugins/knockout-select2": "Path.resolve(__dirname, `${archesCoreDirectory}/app/media/plugins`, 'knockout-select2.js')",
        "nifty": "Path.resolve(__dirname, `${archesCoreDirectory}/app/media/plugins`, 'nifty')",
        "leaflet-side-by-side": "Path.resolve(__dirname, `${archesCoreDirectory}/app/media/plugins`, 'leaflet-side-by-side/index')",
        "themepunch-tools": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/plugins`, 'revolution-slider/rs-plugin/js/jquery.themepunch.tools.min')",
        "revolution-slider": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/plugins`, 'revolution-slider')",
        "async": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/requirejs-plugins/src/async`)",
        "text": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/requirejs-text/text`)",
        "jquery": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/jquery/dist/jquery.min`)",
        "js-cookie": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/js-cookie/src/js.cookie`)",
        "select2": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/select2/select2`)",
        "bootstrap": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/bootstrap/dist/js/bootstrap.min`)",
        "jquery-ui": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/jqueryui/jquery-ui.min`)",
        "backbone": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/backbone/backbone-min`)",
        "underscore": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/underscore/underscore-min`)",
        "jquery-validate": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/jquery-validation/dist/jquery.validate.min`)",
        "d3": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/d3/dist/d3.min`)",
        "dropzone": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/dropzone/dist/min/dropzone-amd-module.min`)",
        "ckeditor": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/ckeditor/ckeditor`)",
        "ckeditor-jquery": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/ckeditor/adapters/jquery`)",
        "knockout": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/knockout/build/output/knockout-latest`)",
        "knockout-mapping": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/knockout-mapping/dist/knockout.mapping.min`)",
        "moment": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/moment/moment.js`)",
        "bootstrap-datetimepicker": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min`)",
        "blueimp-gallery": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/blueimp-gallery/js/blueimp-gallery.min`)",
        "blueimp-jquery": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/blueimp-gallery/js/jquery.blueimp-gallery.min`)",
        "blueimp-helper": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/blueimp-gallery/js/blueimp-helper.min`)",
        "datatables.net": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/datatables.net/js/jquery.dataTables.min`)",
        "datatables.net-bs": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/datatables.net-bs/js/dataTables.bootstrap.min`)",
        "datatables.net-buttons": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/datatables.net-buttons/js/dataTables.buttons.min`)",
        "datatables.net-buttons-print": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/datatables.net-buttons/js/buttons.print.min`)",
        "datatables.net-buttons-html5": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/datatables.net-buttons/js/buttons.html5.min`)",
        "datatables.net-buttons-bs": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/datatables.net-buttons-bs/js/buttons.bootstrap.min`)",
        "datatables.net-responsive": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/datatables.net-responsive/js/dataTables.responsive`)",
        "datatables.net-responsive-bs": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/datatables.net-responsive-bs/js/responsive.bootstrap`)",
        "chosen": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/chosen-js/chosen.jquery.min`)",
        "mapbox-gl": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/mapbox-gl/dist/mapbox-gl`)",
        "mapbox-gl-draw": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw`)",
        "mapbox-gl-geocoder": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min`)",
        "proj4": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/proj4/dist/proj4`)",
        "noUiSlider": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/nouislider/distribute/nouislider.min`)",
        "geojson-extent": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/@mapbox/geojson-extent/geojson-extent`)",
        "geojsonhint": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/@mapbox/geojsonhint/geojsonhint`)",
        "bootstrap-colorpicker": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min`)",
        "uuid": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/uuidjs/dist/uuid.core`)",
        "turf": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/@turf/turf/turf.min`)",
        "geohash": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/latlon-geohash/latlon-geohash`)",
        "leaflet": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/leaflet/dist/leaflet`)",
        "leaflet-iiif": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/leaflet-iiif/leaflet-iiif`)",
        "leaflet-draw": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/leaflet-draw/dist/leaflet.draw`)",
        "leaflet-fullscreen": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/leaflet.fullscreen/Control.FullScreen`)",
        "metismenu": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/metismenu/dist/metisMenu.min`)",
        "knockstrap": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/knockstrap/build/knockstrap.min`)",
        "jqtree": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/jqtree/tree.jquery`)",
        "dom-4": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/dom4/build/dom4`)",
        "numeral": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/numeral/numeral`)",
        "togeojson": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/@tmcw/togeojson/dist/togeojson.umd`)",
        "cytoscape": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/cytoscape/dist/cytoscape.min`)",
        "cytoscape-cola": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/cytoscape-cola/cytoscape-cola`)",
        "webcola": "Path.resolve(__dirname, `${PROJECT_ROOT_DIRECTORY}/media/node_modules/webcola/WebCola/cola.min`)"
    }),
}