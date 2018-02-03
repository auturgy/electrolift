require("./scss/style.scss");
require("leaflet/dist/leaflet.css");
require("./components/indicators");
require("./components/map");
var { ipcRenderer } = require("electron");
var state = require("./state");
var m = require("mithril");

m.render($('.buttons')[0], [
    m('button', { 
        onclick: () => {
            state.center_map = state && state.center_map ? false : true;
        }
    }, 'Center map'),
    m('button', { 
        onclick: () => {
            console.log('This will start missions one day.');
            ipcRenderer.send("doMission", true);
        }
    }, 'Start Mission'),
    m('button', { 
        onclick: () => {
            ipcRenderer.send("sendCommand", 20);
        }
    }, 'Return to Launch'),
]);