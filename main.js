/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

html,
body{
    height: 100%;
    width: 100%;
    background-color: black;
    position: relative;
}

/* .start-menu {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: black;
} */


.pass-device{
    border: 3px solid pink;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: gray;
    
    padding: 20%;
    
    display: none;
}

.show-pass-device{
    display: grid;
    justify-items: center;
    align-items: center;
    /* grid-template-rows: 170px 200px; */
    gap: 20px;
}


.pass-device-message {
    border: 3px solid red;
    width: 100%;
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center;


    text-align: center;
    vertical-align: middle;
    padding: 50px;
    font-size: 40px;
    /* line-height: 100%; */
}

.pass-device-button {
    border: 3px solid blue;
    width: 200px;
    height: 70px;
    font-size: 25px;
    border-radius: 15px;
    align-self: start;
}

.main-container {

    /* Have a minimum height and width for .player-div */

    width: 100%;
    height: 100%;
    border: 2px solid red;
    display: grid;
    grid-template-rows: 100px 1fr 50px;
}

.header-div {
    width: 100%;
    height: 100%;
    border: 2px solid blue;
    color: white;
    text-align: center;
    font-size: 20px;

    padding: 30px;
}




.player-div {
    width: 100%;
    height: 100%;
    border: 2px solid pink;
    /* background-color: yellow; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr))

}

.footer-div {
    width: 100%;
    height: 100%;
    border: 2px solid green;
}


.player1-div,
.player2-div{
    padding: 20px;
    gap: 15px;
}


.player1-div {
    width: 100%;
    height: 100%;
    border: 2px solid lightgreen;
    display: grid;
    justify-items: center;
    align-items: center;
    /* text-align: center; */
    /* color: white; */
}

.player2-div {
    width: 100%;
    height: 100%;
    border: 2px solid lightgoldenrodyellow;
    display: grid;
    justify-items: center;
    align-items: center;
    /* text-align: center; */
    /* color: white; */
}


.player1-grid,
.player2-grid{

    --height-and-width: max(330px, 30vw);
    --border-size: 2px solid greenyellow;

    border: var(--border-size);
    width: var(--height-and-width);
    height: var(--height-and-width);
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    color: white;

}


.player1-label,
.player2-label{
    color: white;
    width: 100%;
    border: 2px solid blanchedalmond;
    text-align: center;
    /* padding: 10px; */
}


.grid-column{
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    /* border: 2px solid turquoise; */
    text-align: center;
}

.grid-row{

    border: 2px solid turquoise;
    
}
.grid-row:hover{
    /* background-color: rgba(255, 255, 0, 0.156); */
    border: 3px solid yellow;
}

.clicked {
    background-color: red;
}

.ship-located {
    background-color: darkorchid;
}


.ship-is-hit{
    background-color: darkred;
}

.attack-missed{
    background-color: white;
}
@media (max-width: 770px){
    /* change player font position */

    .player1-grid,
    .player2-grid{
        
        /* Might have to reduce size further */
        width: 300px;
        height: 300px;

    }
    .player1-div{
        order: 2;
    }
    .player2-div{
        order: 1;
    }

    .player2-grid{
        order: 2;
    }

    .player2-label{
        order: 1;
    }

}`, "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT,UAAU;CACV,sBAAsB;AACvB;;AAEA;;IAEI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;;;;;GAKG;;;AAGH;IACI,sBAAsB;IACtB,eAAe;IACf,WAAW;IACX,YAAY;IACZ,sBAAsB;;IAEtB,YAAY;;IAEZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,qCAAqC;IACrC,SAAS;AACb;;;AAGA;IACI,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,mBAAmB;;;IAGnB,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;IACb,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;;IAEI,oDAAoD;;IAEpD,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,eAAe;;IAEf,aAAa;AACjB;;;;;AAKA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,8BAA8B;IAC9B,aAAa;IACb;;AAEJ;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;AAC3B;;;AAGA;;IAEI,aAAa;IACb,SAAS;AACb;;;AAGA;IACI,WAAW;IACX,YAAY;IACZ,4BAA4B;IAC5B,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sCAAsC;IACtC,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,wBAAwB;IACxB,kBAAkB;AACtB;;;AAGA;;;IAGI,oCAAoC;IACpC,oCAAoC;;IAEpC,0BAA0B;IAC1B,8BAA8B;IAC9B,+BAA+B;IAC/B,aAAa;IACb,sCAAsC;IACtC,YAAY;;AAEhB;;;AAGA;;IAEI,YAAY;IACZ,WAAW;IACX,gCAAgC;IAChC,kBAAkB;IAClB,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,mCAAmC;IACnC,iCAAiC;IACjC,kBAAkB;AACtB;;AAEA;;IAEI,2BAA2B;;AAE/B;AACA;IACI,gDAAgD;IAChD,wBAAwB;AAC5B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,4BAA4B;AAChC;;;AAGA;IACI,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;AAC3B;AACA;IACI,gCAAgC;;IAEhC;;;QAGI,sCAAsC;QACtC,YAAY;QACZ,aAAa;;IAEjB;IACA;QACI,QAAQ;IACZ;IACA;QACI,QAAQ;IACZ;;IAEA;QACI,QAAQ;IACZ;;IAEA;QACI,QAAQ;IACZ;;AAEJ","sourcesContent":["*{\n margin: 0;\n padding: 0;\n box-sizing: border-box;\n}\n\nhtml,\nbody{\n    height: 100%;\n    width: 100%;\n    background-color: black;\n    position: relative;\n}\n\n/* .start-menu {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: black;\n} */\n\n\n.pass-device{\n    border: 3px solid pink;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: gray;\n    \n    padding: 20%;\n    \n    display: none;\n}\n\n.show-pass-device{\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    /* grid-template-rows: 170px 200px; */\n    gap: 20px;\n}\n\n\n.pass-device-message {\n    border: 3px solid red;\n    width: 100%;\n    height: 100%;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n\n\n    text-align: center;\n    vertical-align: middle;\n    padding: 50px;\n    font-size: 40px;\n    /* line-height: 100%; */\n}\n\n.pass-device-button {\n    border: 3px solid blue;\n    width: 200px;\n    height: 70px;\n    font-size: 25px;\n    border-radius: 15px;\n    align-self: start;\n}\n\n.main-container {\n\n    /* Have a minimum height and width for .player-div */\n\n    width: 100%;\n    height: 100%;\n    border: 2px solid red;\n    display: grid;\n    grid-template-rows: 100px 1fr 50px;\n}\n\n.header-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid blue;\n    color: white;\n    text-align: center;\n    font-size: 20px;\n\n    padding: 30px;\n}\n\n\n\n\n.player-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid pink;\n    /* background-color: yellow; */\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr))\n\n}\n\n.footer-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid green;\n}\n\n\n.player1-div,\n.player2-div{\n    padding: 20px;\n    gap: 15px;\n}\n\n\n.player1-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid lightgreen;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    /* text-align: center; */\n    /* color: white; */\n}\n\n.player2-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid lightgoldenrodyellow;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    /* text-align: center; */\n    /* color: white; */\n}\n\n\n.player1-grid,\n.player2-grid{\n\n    --height-and-width: max(330px, 30vw);\n    --border-size: 2px solid greenyellow;\n\n    border: var(--border-size);\n    width: var(--height-and-width);\n    height: var(--height-and-width);\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    color: white;\n\n}\n\n\n.player1-label,\n.player2-label{\n    color: white;\n    width: 100%;\n    border: 2px solid blanchedalmond;\n    text-align: center;\n    /* padding: 10px; */\n}\n\n\n.grid-column{\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    /* border: 2px solid turquoise; */\n    text-align: center;\n}\n\n.grid-row{\n\n    border: 2px solid turquoise;\n    \n}\n.grid-row:hover{\n    /* background-color: rgba(255, 255, 0, 0.156); */\n    border: 3px solid yellow;\n}\n\n.clicked {\n    background-color: red;\n}\n\n.ship-located {\n    background-color: darkorchid;\n}\n\n\n.ship-is-hit{\n    background-color: darkred;\n}\n\n.attack-missed{\n    background-color: white;\n}\n@media (max-width: 770px){\n    /* change player font position */\n\n    .player1-grid,\n    .player2-grid{\n        \n        /* Might have to reduce size further */\n        width: 300px;\n        height: 300px;\n\n    }\n    .player1-div{\n        order: 2;\n    }\n    .player2-div{\n        order: 1;\n    }\n\n    .player2-grid{\n        order: 2;\n    }\n\n    .player2-label{\n        order: 1;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gameFlow.js":
/*!*************************!*\
  !*** ./src/gameFlow.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameFlow: () => (/* binding */ gameFlow),
/* harmony export */   turnState: () => (/* binding */ turnState)
/* harmony export */ });
/* harmony import */ var _playerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerFactory */ "./src/playerFactory.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");
/* harmony import */ var _renderBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderBoard */ "./src/renderBoard.js");
/* harmony import */ var _renderDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderDOM */ "./src/renderDOM.js");





// These playerBoards are side effects (external state) / (dependencies).
let player1Board; 
let player2Board;


function gameFlow () {

    const player1 = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__.createPlayer)("real");
    // const player2 = createPlayer("computer");
    const player2 = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__.createPlayer)("real");  

    // place player1 ships
    // Types of ship
    // - Carrier, size 5
    // - Battleship, size 4
    // - Destroyer, size 3
    // - Submarine, size 3
    // - Patrol Boat, size 2

    const player1Carrier = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.createShip)(5);
    const player1Battleship = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.createShip)(4);
    const player1Destroyer = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.createShip)(3);
    const player1Submarine = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.createShip)(3);
    const player1PatrolBoat = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.createShip)(2)


    const player2Carrier = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.createShip)(5);
    const player2Battleship = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.createShip)(4);
    const player2Destroyer = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.createShip)(3);
    const player2Submarine = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.createShip)(3);
    const player2PatrolBoat = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.createShip)(2);



    // const carrier = createShip(5);
    // const battleship = createShip(4);
    // const destroyer = createShip(3);
    // const submarine = createShip(3);
    // const patrolBoat = createShip(2)

    const allPlayer1Ships = [player1Carrier, player1Battleship, player1Destroyer, player1Submarine, player1PatrolBoat];

    const allPlayer2Ships = [player2Carrier, player2Battleship, player2Destroyer, player2Submarine, player2PatrolBoat]
    // 
    // 
    // 
    // 
    // 
    // Remove all of the below and create a function that randomly places ships. It is much more reusable (because you can still use it later with a randomize button when you add drag and drop feature) and easier to implement, just use Math.random and if "Placement_failed", run the placeShip function with the same ship again. (Done)

    // Also use Math.random function to choose positions 0 to 3 because 4 options. Put the options in an array. (Done)

    // Change the coordinates display to the default Battleship style. Letter and Number e.g: A1,B9,E7,etc. (Done)


    // Create a start menu that allows the player to choose whether to play against Computer or a real player.

    // Create pass device screen for 2 player option. Verify if this is done. Seems to work, check what happens to pass menu if gameover.

    // Include a game restart button that clears all state and recreates the entire board with new random ship placements. (Create a function in turnstate that resets player turn to player one and call it when the restart button is clicked).

    // create tests for hitMap one for hit and one for miss. (Haven't created this yet - ensures you can refactor safely later on).

    // Check all DOM modules as to whether or not you need to write tests for any of the functions. (Anything that runs because of DOM event should not be tested, only pure logic should be tested)


    // Label the grids with letters and numbers? Use grids.


    
    console.log(player1.board.placeShip({x:9,y:9}, "north", player1Carrier));
    player1.board.placeShip({x:0,y:0}, "east", player1Battleship);
    player1.board.placeShip({x:5,y:5}, "east", player1Destroyer);
    player1.board.placeShip({x:2,y:2}, "east", player1Submarine);
    player1.board.placeShip({x:9,y:0}, "south", player1PatrolBoat);



    console.log(player2.board.placeShip({x:9,y:9}, "north", player2Carrier));
    player2.board.placeShip({x:0,y:0}, "east", player2Battleship);
    player2.board.placeShip({x:5,y:5}, "east", player2Destroyer);
    player2.board.placeShip({x:2,y:2}, "east", player2Submarine);
    player2.board.placeShip({x:9,y:0}, "south", player2PatrolBoat);

    function placeAllShips (player, shipsArray){

        
        shipsArray.forEach(ship => {
            const result = player.board.placeShip(createRandomCoords(), chooseDirection(), ship)

            if (result === "Placement_failed") {




                return placeAllShips(player, [ship])
            }

            if (result === "Placement_success") {

                console.log("All ships successfully placed");
                return;
            }
        });

        
    }


    function createRandomCoords () {
            
        const x = Math.floor(Math.random()*10);
        const y = Math.floor(Math.random()*10);

        return{
            x,
            y
        }
    }


    function chooseDirection () {

        const directionArray = ["north", "south", "east", "west"];

        // from 0 to 3
        const chooseRandomDirection = Math.floor(Math.random()*4);

        if (chooseRandomDirection > 3 || chooseRandomDirection < 0) {
            throw("Choose Random Direction is not working correctly")
        }

        return directionArray[chooseRandomDirection]

    }


    // placeAllShips(player1, allPlayer1Ships);
    // placeAllShips(player2, allPlayer2Ships)




    // for (let index = 0; index < 10; index++) {

        
    //     player1.board.receiveAttack(9,index)
    //     player1.board.receiveAttack(index,index)
    // }


    // player2.board.placeShip({x:9,y:9}, "west", player2Carrier);
    // player2.board.placeShip({x:0,y:0}, "east", player2Battleship);
    // player2.board.placeShip({x:5,y:5}, "east", player2Destroyer);
    // player2.board.placeShip({x:2,y:2}, "east", player2Submarine);
    // player2.board.placeShip({x:9,y:5}, "south", player2PatrolBoat);


    // for (let index = 0; index < 10; index++) {

    //     player2.board.receiveAttack(index,index)
    // }


    // I probably can remove player.type and it might still work correctly.
    player1Board = (0,_renderBoard__WEBPACK_IMPORTED_MODULE_2__.populatePlayer1Board)(player1);
    player2Board = (0,_renderBoard__WEBPACK_IMPORTED_MODULE_2__.populatePlayer2Board)(player2);

   


    // The ones below stay as it is.

    player1Board.displayGrids()

    player1Board.showShips()

    


    player2Board.displayGrids()

    player2Board.showHitMap()

 



}






const turnState = (function () {
    let playerTurn = "player1";

    

    function updateTurn() {

        // Prevents computer from playing
        if (isGameOver()) {
            return;
        }


        if (playerTurn === "player1") {
            playerTurn = "player2"

            player1Board.deleteGrids();
            player1Board.displayGrids();
            player1Board.showHitMap();

            player2Board.deleteGrids();
            player2Board.displayGrids();
            player2Board.showShips();
            player2Board.showHitMap();


            if (player2Board.player2.type === 'computer') {
                computerAttacks(player1Board.player1)
            }


            return
        }

        if (playerTurn === "player2") {
            playerTurn = "player1"

            player2Board.deleteGrids();
            player2Board.displayGrids();
            player2Board.showHitMap();

            player1Board.deleteGrids();
            player1Board.displayGrids();
            player1Board.showShips();
            player1Board.showHitMap();

            if (player1Board.player1.type === 'computer') {
                computerAttacks(player2Board.player2)
            }

            return
        }
    }

    function getTurn() {
        return playerTurn;
    }

    function isGameOver () {
        const passDeviceMsg = document.querySelector('.pass-device-message');

        const passDeviceButton = document.querySelector('.pass-device-button');
        
        const player1Loses = player1Board.player1.board.allSunk();
        console.log(player1Loses);

        const player2Loses = player2Board.player2.board.allSunk();
        console.log(player2Loses);

        if (player1Loses) {
            
            passDeviceMsg.textContent = "Player 2 wins!";
            passDeviceButton.textContent = 'See board';
            (0,_renderDOM__WEBPACK_IMPORTED_MODULE_3__.updateHeader)("Player 2 wins!");
            return true;
        }

        if (player2Loses) {
            
            passDeviceMsg.textContent = "Player 1 wins!";
            passDeviceButton.textContent = 'See board';
            (0,_renderDOM__WEBPACK_IMPORTED_MODULE_3__.updateHeader)("Player 1 wins!");
            return true;
        }

    }

    return{
        updateTurn,
        getTurn,
        isGameOver
    }
})()


let test = 0

function computerAttacks (player) {

    console.log("Computer attacks");

    const x = Math.floor(Math.random() * 10);

    const y = Math.floor(Math.random() * 10);

    const result = player.board.receiveAttack(x,y)

    // console.log("Coords: "+x,y)
    // console.log(result)
    if (result === "Already Hit" || result == "Already Miss") {
         return computerAttacks(player)
    }

   

    // console.log("Computer has successfully attacked.");

    const letterArrayX = ["A","B","C","D","E","F","G","H","I","J"];

        const numberArrayY = [10,9,8,7,6,5,4,3,2,1];

    (0,_renderDOM__WEBPACK_IMPORTED_MODULE_3__.updateHeader)(`Computer chose ${letterArrayX[x]}${numberArrayY[y]} and it's a ${result.toLowerCase()}`);
    turnState.updateTurn();

   
    test++
    console.log('Computer attacks:' + test)
    return 
}




/***/ }),

/***/ "./src/gameboardFactory.js":
/*!*********************************!*\
  !*** ./src/gameboardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkPlacementValidity: () => (/* binding */ checkPlacementValidity),
/* harmony export */   createGameboard: () => (/* binding */ createGameboard),
/* harmony export */   getCoordinates: () => (/* binding */ getCoordinates)
/* harmony export */ });
function createGameboard(){
    const ownGrid = createGrid();
    const hitMap = createGrid();
    const placedShips = [];

    function createGrid () {

        const newGrid = [];

        const gridSize = 10;

        for (let index = 0; index < gridSize; index++) {
            const rows = []
            rows.length = 10;

            newGrid[index] = rows
        }

        return newGrid;
    }



    function placeShip (coordinates, direction, shipObject) {


        const potentialCoords = getCoordinates(coordinates, direction, shipObject);
        const generatedCoords = potentialCoords.potentialCoordinates;
        let placementValidity = potentialCoords.validity;
        let placementMsg = "Placement_success"

        
        

    //    Checks if overlapping ships exist
        placementValidity = checkPlacementValidity(placementValidity, generatedCoords, ownGrid);
    
        

        if (!placementValidity) {
            placementMsg = "Placement_failed"
            return placementMsg
        }



        generatedCoords.forEach(coords => {

            ownGrid[coords[0]][coords[1]] = shipObject;


        });


        placedShips.push(shipObject)
  

       return placementMsg
        
    }

    function receiveAttack (x, y) {

        if (hitMap[x][y] === "Miss") {
            return "Already Miss"
        }

        if (!ownGrid[x][y]) {
            hitMap[x][y] = "Miss"
            return "Miss"
        }


        if (hitMap[x][y] === "Hit") {
            return "Already Hit";
        }

        const ship = ownGrid[x][y];
        ship.hit()
        hitMap[x][y] = 'Hit';
        return "Hit"
    }

    function allSunk () {

        let everyShipSunk = true;

        for (let index = 0; index < placedShips.length; index++) {
            const ship = placedShips[index];

            if (!ship.isSunk()) {
                everyShipSunk = false;
                break;
            }
            
        }

        return everyShipSunk
    }
    

    return {
        ownGrid,
        placeShip,
        receiveAttack,
        allSunk,
        hitMap
    }



}


function getCoordinates (coordinates, direction, shipObject) {

    let validity = true;

    const potentialCoordinates = []

    
    if (coordinates.x < 0 || coordinates.y < 0 || coordinates.x > 9 || coordinates.y > 9 ) {
            
        validity = false

        return validity

    }

    for (let index = 0; index < shipObject.getLength(); index++) {

        
        let xcoords;
        let ycoords;

        if (direction === "north") {
            xcoords = coordinates.x
            ycoords = coordinates.y - index;

            
        }
        if (direction === "south") {

            xcoords = coordinates.x
            ycoords = coordinates.y + index;

        }
        if (direction === "east") {

            xcoords = coordinates.x + index;
            ycoords = coordinates.y; 

            
        }
        if (direction === "west") {
            xcoords = coordinates.x - index;
            ycoords = coordinates.y; 

        }

        if (xcoords < 0 || ycoords < 0 || xcoords > 9 || ycoords > 9 ) {
            
            validity = false

        }

        potentialCoordinates.push([xcoords,ycoords])
        
    }


    return {
    
        validity,
        potentialCoordinates
    }
}



function checkPlacementValidity (placementValidity, generatedCoords, ownGrid) {

    if (!placementValidity) {
        return placementValidity
    }

    for (let index = 0; index < generatedCoords.length; index++) {


        const coords = generatedCoords[index];
   
        const ship = ownGrid[coords[0]][coords[1]]

        if (ship) {
            placementValidity = false;
            break;
        }

    }

    return placementValidity
}




/***/ }),

/***/ "./src/playerFactory.js":
/*!******************************!*\
  !*** ./src/playerFactory.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPlayer: () => (/* binding */ createPlayer)
/* harmony export */ });
/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory */ "./src/gameboardFactory.js");


function createPlayer (type, enemyHitmap, attackEnemy) {
    const board = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_0__.createGameboard)();

    if (!(type === "real" || type === "computer")) {
        return "Invalid_input";
    }
    // Player logic and computer logic is not complete.

    if (type === "real") {
    
        // create player
        // create board
        // - Already done above

        // Do all this logic inside here or on a different module?

        // place ships (what types of ship and how many?)
        // - create 5 types of ships and place them

        // GAMEFLOW BEGINS
        // execute opponent's receiveAttack function
        // if opponent allSunk() is false, then opponent executes your receiveAttack function
        // if opponent allSunk() is true, then you win.
        // The above applies to opponent as well.
        // if you accidently choose grids that were already hit or missed, you will be prompted to try again
        
        // UI
        // Opponent will only see your grid as hit map and vice versa.
        // At every turn, the entire DOM will render ownGrid and enemy hitmap and vice versa.

    
    }

    if (type === "computer") {
        
        // same as above except Math.floor(Math.random() * 10) is used with receiveAttack for coordinates
        // create a function that runs Math.floor, and test it.
    }

    return {
        type,
        board
    }

    // create math.floor function separately below here.
    
}



/***/ }),

/***/ "./src/renderBoard.js":
/*!****************************!*\
  !*** ./src/renderBoard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populatePlayer1Board: () => (/* binding */ populatePlayer1Board),
/* harmony export */   populatePlayer2Board: () => (/* binding */ populatePlayer2Board)
/* harmony export */ });
/* harmony import */ var _gameFlow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameFlow */ "./src/gameFlow.js");
/* harmony import */ var _renderDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderDOM */ "./src/renderDOM.js");




// How do you render the board?

// select the player border grids first.

// then import and loop through ownGrid and hitmap

// this function has to be reusable for both player 1 and player 2.

// it will check whose turn and type of player the player is playing with.

// if playing againts ai it will only ever render the ai player's hitmap. never renders ai player's onwGrid.

// if playing against another player after a player attacks, a fixed black div will cover up the entire screen and show a text of whether the player hit or miss, also shows whose turn is next with a button labelled "start turn". with the next player's grids and hitmaps alreadt rendered behind the black div.

// ships are displayed in dark grey colour

// hits are displayed in red

// misses are displayed in white




// first you must get ownGrid of player one and display the grids correctly.

// Then you must get player two's hitmap and display the grids correctly.

// after that you must create another funtion to display ships correctly. -add classes to the correct grids.

// Then you create another function to render hitmap correctly.

// Hitmap will be displayed on player one grid and player two grid.

// Add event listeners to the grids. (DONE)


// add coordinates as an object "const coords = {x:0,y:0}" inside addeventlistener callback function? use columnIndex annd rowIndex? (DONE)



// refactor if necessary
function populatePlayer1Board (player1){
    const player1Grid = document.querySelector('.player1-grid');


    
    function displayGrids() {
        createGrids(player1, player1Grid, "player1");
    }

    function deleteGrids() {
        while (player1Grid.firstChild) {
            player1Grid.firstChild.remove()
        }
    }


    function showShips() {
        displayShips(null,player1, player1Grid);
    }
    



    function showHitMap() {
        displayHitMap(player1, player1Grid);
    }

   

   


    return {
        displayGrids,
        deleteGrids,
        showShips,
        showHitMap,
        player1
    }

}

// Merge it into one function - above
function populatePlayer2Board (player2) {

    const player2Grid = document.querySelector('.player2-grid');

    function displayGrids () {
        createGrids(player2, player2Grid, "player2");
    }

    function deleteGrids() {
        while (player2Grid.firstChild) {
            player2Grid.firstChild.remove()
        }
    }

    function showShips () {
        displayShips(null,player2, player2Grid);
    }
    

    function showHitMap () {
        displayHitMap(player2, player2Grid);
    }

    return {
        displayGrids,
        deleteGrids,
        showShips,
        showHitMap,
        player2
    }
    
    
}



function createGrids (player, playerDOMGrid, isPlayer) {
    // put the grid making loop below inside here

    for (let columnIndex = 0; columnIndex < player.board.ownGrid.length; columnIndex++) {
        const column = player.board.ownGrid[columnIndex];


        const gridColumn = document.createElement('div');
        gridColumn.classList.add("grid-column");
        // gridColumn.textContent = columnIndex
        playerDOMGrid.append(gridColumn)
        


        for (let rowIndex = 9; rowIndex >= 0; rowIndex--) {
            // const element = column[rowIndex];
            // console.log("TEST")
            const gridRow = document.createElement('div');
            gridRow.classList.add("grid-row");
            // gridRow.textContent = rowIndex;
            gridColumn.append(gridRow);

           clickBoard(player, gridRow, columnIndex, rowIndex, isPlayer)
        }

       
        
    }
}










function displayShips(toDisplay, player, playerDOMGrid) {
        // if player 2 turn don't display ships

        // remove later
        toDisplay = true

        if (toDisplay) {
            // loop through all ownGrid grids array and if not empty, assign a grey class to that grid. 

            const playerColumns = playerDOMGrid.childNodes
            
            for (let colIndex = 0; colIndex < player.board.ownGrid.length; colIndex++) {
                const rows = player.board.ownGrid[colIndex];

                // Board renders upside down if I don't use "nodeRowIterator".
                let nodesRowIterator = 0

                const rowNodes = playerColumns[colIndex].childNodes;

                // console.log(rowNodes)

                // const reversedRowNode = rowNodes.reverse();

                for (let rowIndex = 9; rowIndex >= 0; rowIndex--) {
                    const row = rows[rowIndex];
                    if (row) {
                        // console.log(true)

                        rowNodes[nodesRowIterator].classList.add('ship-located')


                    }
                    
                    nodesRowIterator++
                }
                
            }
            
        }
}




function displayHitMap(player,playerDOMGrid) {

    // player.board.hitMap

    // display hitmap after display ship runs, This should override the classes of displayShips

    let toDisplay = true

    if (toDisplay) {
        // loop through all ownGrid grids array and if not empty, assign a grey class to that grid. 

        const playerColumns = playerDOMGrid.childNodes


        // console.log(player.board.hitMap)
        
        for (let colIndex = 0; colIndex < player.board.hitMap.length; colIndex++) {
            const rows = player.board.hitMap[colIndex];

            // Board renders upside down if I don't use "nodeRowIterator".
            let nodesRowIterator = 0

            const rowNodes = playerColumns[colIndex].childNodes;


            for (let rowIndex = 9; rowIndex >= 0; rowIndex--) {
                const row = rows[rowIndex];
                if (row === "Hit") {
                    // console.log(true)

                    rowNodes[nodesRowIterator].classList.add('ship-is-hit')


                }


                if (row === "Miss") {
                    // console.log(true)

                    rowNodes[nodesRowIterator].classList.add('attack-missed')


                }
                
                nodesRowIterator++
            }
            
        }
        
    }
}








function clickBoard (player, grid, columnIndex, rowIndex, isPlayer) {
    grid.addEventListener('click', function () {

        const passDeviceDiv = document.querySelector('.pass-device');

        const passDeviceMsg = document.querySelector('.pass-device-message');

        const currentPlayerTurn = _gameFlow__WEBPACK_IMPORTED_MODULE_0__.turnState.getTurn();

        const gameIsOver = _gameFlow__WEBPACK_IMPORTED_MODULE_0__.turnState.isGameOver();

        if (gameIsOver) {


        }



        
        if (isPlayer === currentPlayerTurn) {


            (0,_renderDOM__WEBPACK_IMPORTED_MODULE_1__.updateHeader)("Not your own board!");
            return
        }


        const x = columnIndex
        const y = rowIndex;
        console.log(x,y);

        console.log(player.board.hitMap[x][y])

        if (player.board.hitMap[x][y] === "Miss" || player.board.hitMap[x][y] === "Hit") {
            // console.log("Grid already chosen")

            (0,_renderDOM__WEBPACK_IMPORTED_MODULE_1__.updateHeader)("Grid already chosen");
            return;
        }


        // Remove later is pass device message works correctly.
        // if (player.type === "real") {
        //     passDeviceDiv.classList.add('show-pass-device');

        //     if (currentPlayerTurn === "player1") {
        //         passDeviceMsg.textContent = "Pass the device to Player 2";
        //     }
           
        //     if (currentPlayerTurn === "player2") {
        //         passDeviceMsg.textContent = "Pass the device to Player 1";
        //     }

            
        // }

        

        const result = player.board.receiveAttack(x,y);

        const letterArrayX = ["A","B","C","D","E","F","G","H","I","J"];

        const numberArrayY = [10,9,8,7,6,5,4,3,2,1]
        if (currentPlayerTurn === "player1") {

            // Create new div for pass the device msg?
            passDeviceMsg.textContent = `It's a ${result.toUpperCase()}! \r\n Pass the device to Player 2`;

            
            (0,_renderDOM__WEBPACK_IMPORTED_MODULE_1__.updateHeader)(`Player 1 chose ${letterArrayX[x]}${numberArrayY[y]} and it's a ${result.toUpperCase()}`);

        }

        if (currentPlayerTurn === "player2") {

            passDeviceMsg.textContent = `It's a ${result.toUpperCase()}! \r\n Pass the device to Player 1`;


            (0,_renderDOM__WEBPACK_IMPORTED_MODULE_1__.updateHeader)(`Player 2 chose ${letterArrayX[x]}${numberArrayY[y]} and it's a ${result.toUpperCase()}`);

        }

        if (player.type === "real") {
            passDeviceDiv.classList.add('show-pass-device');
        }

        
        

        _gameFlow__WEBPACK_IMPORTED_MODULE_0__.turnState.updateTurn();

        if (player.board.ownGrid[x][y]) {
  
            grid.classList.add('ship-is-hit')
            console.log(player.board.ownGrid[x][y].getHits())
     
            return
        }

        grid.classList.add('attack-missed');

        
    })
}



/***/ }),

/***/ "./src/renderDOM.js":
/*!**************************!*\
  !*** ./src/renderDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDOM: () => (/* binding */ createDOM),
/* harmony export */   updateHeader: () => (/* binding */ updateHeader)
/* harmony export */ });

function createDOM () {

    const body = document.querySelector('body');

    const startMenu = document.createElement('div');
    startMenu.classList.add('start-menu');
    body.append(startMenu);
    

    const passDeviceDiv = document.createElement('div');
    passDeviceDiv.classList.add('pass-device');
    body.append(passDeviceDiv);


        const passDeviceMsg = document.createElement('div');
        passDeviceMsg.classList.add('pass-device-message');
        passDeviceDiv.append(passDeviceMsg);


        const passDeviceButton = document.createElement('button');
        passDeviceButton.classList.add('pass-device-button');
        passDeviceButton.textContent = "Start turn";
        passDeviceDiv.append(passDeviceButton);

        passDeviceButton.addEventListener('click', function(e){
            e.preventDefault();
            passDeviceDiv.classList.remove('show-pass-device');

            // console.log("Test")
        })


    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');
    body.append(mainContainer);

        const headerDiv = document.createElement('div');
        headerDiv.classList.add('header-div');
        headerDiv.textContent = 'Player 1 goes first'
        mainContainer.append(headerDiv);

        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player-div');
        mainContainer.append(playerDiv);

        const footerDiv = document.createElement('div');
        footerDiv.classList.add('footer-div');
        mainContainer.append(footerDiv);



    





    const player1Div = document.createElement('div');
    player1Div.classList.add('player1-div');
    playerDiv.append(player1Div);
    // player1Div.textContent = "Player 1";

        const player1Grid = document.createElement('div');
        player1Grid.classList.add('player1-grid');
        player1Div.append(player1Grid);

        const player1Label = document.createElement('div');
        player1Label.classList.add('player1-label');
        player1Label.textContent = "Player 1"
        player1Div.append(player1Label)

    const player2Div = document.createElement('div');
    player2Div.classList.add('player2-div');
    playerDiv.append(player2Div)
    // player2Div.textContent = "Player 2";

        const player2Grid = document.createElement('div');
        player2Grid.classList.add('player2-grid');
        player2Div.append(player2Grid);

        const player2Label = document.createElement('div');
        player2Label.classList.add('player2-label');
        player2Label.textContent = "Player 2"
        player2Div.append(player2Label)


    // Create board div, make sure there is minimum size for height and width
}


function updateHeader (statusMessage) {
    const statusDisplay = document.querySelector('.header-div');

    statusDisplay.textContent = statusMessage
}





/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createShip: () => (/* binding */ createShip)
/* harmony export */ });
 function createShip (length){
    let totalHits = 0;
    let sunk = false;

    const getLength = function () {
        return length
    }

    const getHits = function () {
        return totalHits
    }

    const isSunk = function () {
        if (totalHits >= length) {
            sunk = true
        }
        return sunk
    }


    const hit = function () {
        totalHits++
    }

    return{
        getLength,
        getHits,
        isSunk,
        hit
    }
 }


 

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ "./src/assets/style.css");
/* harmony import */ var _playerFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerFactory */ "./src/playerFactory.js");
/* harmony import */ var _renderDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderDOM */ "./src/renderDOM.js");
/* harmony import */ var _gameFlow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameFlow */ "./src/gameFlow.js");



// import { module } from './module';


// This is just a CRUD. It should be easy. But make sure to follow the instructions.

// module()






// import { populateBoard } from './renderBoard';

(0,_renderDOM__WEBPACK_IMPORTED_MODULE_2__.createDOM)();
(0,_gameFlow__WEBPACK_IMPORTED_MODULE_3__.gameFlow)();


// remove this later
// const testPlayer = createPlayer("real");
// populateBoard(testPlayer)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixxQkFBcUI7QUFDckI7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLE9BQU8sdUZBQXVGLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sU0FBUyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxhQUFhLFlBQVksVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksZUFBZSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFlBQVksVUFBVSxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFFBQVEsTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsT0FBTyxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFlBQVksUUFBUSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sYUFBYSxN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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOzs7QUFHQSxTQUFTOzs7QUFHVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLDRCQUE0Qiw0QkFBNEI7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSx3QkFBd0IsZ0NBQWdDOztBQUV4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsZ0NBQWdDOzs7QUFHeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pNb0Q7O0FBRXBEO0FBQ0Esa0JBQWtCLGtFQUFlOztBQUVqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEb0Q7O0FBRVQ7O0FBRTNDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQSxpREFBaUQsUUFBUTs7OztBQUl6RDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUEsOEJBQThCLDJDQUEyQztBQUN6RTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsK0JBQStCLGVBQWU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyx3Q0FBd0M7QUFDM0U7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBdUMsZUFBZTtBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsK0JBQStCLHVDQUF1QztBQUN0RTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQSxtQ0FBbUMsZUFBZTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOzs7QUFHQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsa0NBQWtDLGdEQUFTOztBQUUzQywyQkFBMkIsZ0RBQVM7O0FBRXBDOzs7QUFHQTs7OztBQUlBO0FBQ0E7OztBQUdBLFlBQVksd0RBQVk7QUFDeEI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWSx3REFBWTtBQUN4QjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtELHFCQUFxQjs7QUFFdkU7QUFDQSxZQUFZLHdEQUFZLG1CQUFtQixnQkFBZ0IsRUFBRSxpQkFBaUIsYUFBYSxxQkFBcUI7O0FBRWhIOztBQUVBOztBQUVBLGtEQUFrRCxxQkFBcUI7OztBQUd2RSxZQUFZLHdEQUFZLG1CQUFtQixnQkFBZ0IsRUFBRSxpQkFBaUIsYUFBYSxxQkFBcUI7O0FBRWhIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFFBQVEsZ0RBQVM7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoWEE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFLQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7OztVQ2pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCOztBQUVtQjtBQUMvQyxZQUFZLFNBQVM7OztBQUdyQjs7QUFFQTs7O0FBR3dDOztBQUVGOztBQUV0QyxZQUFZLGdCQUFnQjs7QUFFNUIscURBQVM7QUFDVCxtREFBUTs7O0FBR1I7QUFDQTtBQUNBLDRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3M/NjAxZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUZsb3cuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3JlbmRlckJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVuZGVyRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiBtYXJnaW46IDA7XG4gcGFkZGluZzogMDtcbiBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLFxuYm9keXtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiAuc3RhcnQtbWVudSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn0gKi9cblxuXG4ucGFzcy1kZXZpY2V7XG4gICAgYm9yZGVyOiAzcHggc29saWQgcGluaztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgXG4gICAgcGFkZGluZzogMjAlO1xuICAgIFxuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93LXBhc3MtZGV2aWNle1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNzBweCAyMDBweDsgKi9cbiAgICBnYXA6IDIwcHg7XG59XG5cblxuLnBhc3MtZGV2aWNlLW1lc3NhZ2Uge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgLyogbGluZS1oZWlnaHQ6IDEwMCU7ICovXG59XG5cbi5wYXNzLWRldmljZS1idXR0b24ge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsdWU7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcblxuICAgIC8qIEhhdmUgYSBtaW5pbXVtIGhlaWdodCBhbmQgd2lkdGggZm9yIC5wbGF5ZXItZGl2ICovXG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnIgNTBweDtcbn1cblxuLmhlYWRlci1kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuXG4gICAgcGFkZGluZzogMzBweDtcbn1cblxuXG5cblxuLnBsYXllci1kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBwaW5rO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHllbGxvdzsgKi9cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzgwcHgsIDFmcikpXG5cbn1cblxuLmZvb3Rlci1kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcbn1cblxuXG4ucGxheWVyMS1kaXYsXG4ucGxheWVyMi1kaXZ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBnYXA6IDE1cHg7XG59XG5cblxuLnBsYXllcjEtZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmVlbjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgICAvKiBjb2xvcjogd2hpdGU7ICovXG59XG5cbi5wbGF5ZXIyLWRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z29sZGVucm9keWVsbG93O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cbn1cblxuXG4ucGxheWVyMS1ncmlkLFxuLnBsYXllcjItZ3JpZHtcblxuICAgIC0taGVpZ2h0LWFuZC13aWR0aDogbWF4KDMzMHB4LCAzMHZ3KTtcbiAgICAtLWJvcmRlci1zaXplOiAycHggc29saWQgZ3JlZW55ZWxsb3c7XG5cbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci1zaXplKTtcbiAgICB3aWR0aDogdmFyKC0taGVpZ2h0LWFuZC13aWR0aCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQtYW5kLXdpZHRoKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxufVxuXG5cbi5wbGF5ZXIxLWxhYmVsLFxuLnBsYXllcjItbGFiZWx7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYW5jaGVkYWxtb25kO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xufVxuXG5cbi5ncmlkLWNvbHVtbntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHR1cnF1b2lzZTsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ncmlkLXJvd3tcblxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHR1cnF1b2lzZTtcbiAgICBcbn1cbi5ncmlkLXJvdzpob3ZlcntcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjE1Nik7ICovXG4gICAgYm9yZGVyOiAzcHggc29saWQgeWVsbG93O1xufVxuXG4uY2xpY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uc2hpcC1sb2NhdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb3JjaGlkO1xufVxuXG5cbi5zaGlwLWlzLWhpdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xufVxuXG4uYXR0YWNrLW1pc3NlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NzBweCl7XG4gICAgLyogY2hhbmdlIHBsYXllciBmb250IHBvc2l0aW9uICovXG5cbiAgICAucGxheWVyMS1ncmlkLFxuICAgIC5wbGF5ZXIyLWdyaWR7XG4gICAgICAgIFxuICAgICAgICAvKiBNaWdodCBoYXZlIHRvIHJlZHVjZSBzaXplIGZ1cnRoZXIgKi9cbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuXG4gICAgfVxuICAgIC5wbGF5ZXIxLWRpdntcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgfVxuICAgIC5wbGF5ZXIyLWRpdntcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgfVxuXG4gICAgLnBsYXllcjItZ3JpZHtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgfVxuXG4gICAgLnBsYXllcjItbGFiZWx7XG4gICAgICAgIG9yZGVyOiAxO1xuICAgIH1cblxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLHNCQUFzQjtBQUN2Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7Ozs7O0dBS0c7OztBQUdIO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjs7SUFFdEIsWUFBWTs7SUFFWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLFNBQVM7QUFDYjs7O0FBR0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjs7O0lBR25CLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxvREFBb0Q7O0lBRXBELFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7O0lBRWYsYUFBYTtBQUNqQjs7Ozs7QUFLQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2I7O0FBRUo7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7O0FBR0E7O0lBRUksYUFBYTtJQUNiLFNBQVM7QUFDYjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7OztJQUdJLG9DQUFvQztJQUNwQyxvQ0FBb0M7O0lBRXBDLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsWUFBWTs7QUFFaEI7OztBQUdBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxpQ0FBaUM7SUFDakMsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLDJCQUEyQjs7QUFFL0I7QUFDQTtJQUNJLGdEQUFnRDtJQUNoRCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7OztBQUdBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQ0FBZ0M7O0lBRWhDOzs7UUFHSSxzQ0FBc0M7UUFDdEMsWUFBWTtRQUNaLGFBQWE7O0lBRWpCO0lBQ0E7UUFDSSxRQUFRO0lBQ1o7SUFDQTtRQUNJLFFBQVE7SUFDWjs7SUFFQTtRQUNJLFFBQVE7SUFDWjs7SUFFQTtRQUNJLFFBQVE7SUFDWjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiBtYXJnaW46IDA7XFxuIHBhZGRpbmc6IDA7XFxuIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogLnN0YXJ0LW1lbnUge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn0gKi9cXG5cXG5cXG4ucGFzcy1kZXZpY2V7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHBpbms7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgXFxuICAgIHBhZGRpbmc6IDIwJTtcXG4gICAgXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaG93LXBhc3MtZGV2aWNle1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogMTcwcHggMjAwcHg7ICovXFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuXFxuLnBhc3MtZGV2aWNlLW1lc3NhZ2Uge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIC8qIGxpbmUtaGVpZ2h0OiAxMDAlOyAqL1xcbn1cXG5cXG4ucGFzcy1kZXZpY2UtYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmx1ZTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuXFxuICAgIC8qIEhhdmUgYSBtaW5pbXVtIGhlaWdodCBhbmQgd2lkdGggZm9yIC5wbGF5ZXItZGl2ICovXFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnIgNTBweDtcXG59XFxuXFxuLmhlYWRlci1kaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcblxcbiAgICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG4ucGxheWVyLWRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHBpbms7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHllbGxvdzsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzODBweCwgMWZyKSlcXG5cXG59XFxuXFxuLmZvb3Rlci1kaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuXFxuLnBsYXllcjEtZGl2LFxcbi5wbGF5ZXIyLWRpdntcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG5cXG4ucGxheWVyMS1kaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZWVuO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xcbn1cXG5cXG4ucGxheWVyMi1kaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdvbGRlbnJvZHllbGxvdztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cXG59XFxuXFxuXFxuLnBsYXllcjEtZ3JpZCxcXG4ucGxheWVyMi1ncmlke1xcblxcbiAgICAtLWhlaWdodC1hbmQtd2lkdGg6IG1heCgzMzBweCwgMzB2dyk7XFxuICAgIC0tYm9yZGVyLXNpemU6IDJweCBzb2xpZCBncmVlbnllbGxvdztcXG5cXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItc2l6ZSk7XFxuICAgIHdpZHRoOiB2YXIoLS1oZWlnaHQtYW5kLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQtYW5kLXdpZHRoKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuXFxuXFxuLnBsYXllcjEtbGFiZWwsXFxuLnBsYXllcjItbGFiZWx7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYW5jaGVkYWxtb25kO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXFxufVxcblxcblxcbi5ncmlkLWNvbHVtbntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHR1cnF1b2lzZTsgKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ3JpZC1yb3d7XFxuXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHR1cnF1b2lzZTtcXG4gICAgXFxufVxcbi5ncmlkLXJvdzpob3ZlcntcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgMC4xNTYpOyAqL1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB5ZWxsb3c7XFxufVxcblxcbi5jbGlja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uc2hpcC1sb2NhdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya29yY2hpZDtcXG59XFxuXFxuXFxuLnNoaXAtaXMtaGl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcbn1cXG5cXG4uYXR0YWNrLW1pc3NlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NzBweCl7XFxuICAgIC8qIGNoYW5nZSBwbGF5ZXIgZm9udCBwb3NpdGlvbiAqL1xcblxcbiAgICAucGxheWVyMS1ncmlkLFxcbiAgICAucGxheWVyMi1ncmlke1xcbiAgICAgICAgXFxuICAgICAgICAvKiBNaWdodCBoYXZlIHRvIHJlZHVjZSBzaXplIGZ1cnRoZXIgKi9cXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICAgIGhlaWdodDogMzAwcHg7XFxuXFxuICAgIH1cXG4gICAgLnBsYXllcjEtZGl2e1xcbiAgICAgICAgb3JkZXI6IDI7XFxuICAgIH1cXG4gICAgLnBsYXllcjItZGl2e1xcbiAgICAgICAgb3JkZXI6IDE7XFxuICAgIH1cXG5cXG4gICAgLnBsYXllcjItZ3JpZHtcXG4gICAgICAgIG9yZGVyOiAyO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5ZXIyLWxhYmVse1xcbiAgICAgICAgb3JkZXI6IDE7XFxuICAgIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJGYWN0b3J5XCI7XG5pbXBvcnQgeyBjcmVhdGVTaGlwIH0gZnJvbSBcIi4vc2hpcEZhY3RvcnlcIjtcbmltcG9ydCB7IHBvcHVsYXRlUGxheWVyMUJvYXJkLCBwb3B1bGF0ZVBsYXllcjJCb2FyZCB9IGZyb20gXCIuL3JlbmRlckJvYXJkXCI7XG5pbXBvcnQgeyB1cGRhdGVIZWFkZXIgfSBmcm9tIFwiLi9yZW5kZXJET01cIjtcblxuLy8gVGhlc2UgcGxheWVyQm9hcmRzIGFyZSBzaWRlIGVmZmVjdHMgKGV4dGVybmFsIHN0YXRlKSAvIChkZXBlbmRlbmNpZXMpLlxubGV0IHBsYXllcjFCb2FyZDsgXG5sZXQgcGxheWVyMkJvYXJkO1xuXG5cbmZ1bmN0aW9uIGdhbWVGbG93ICgpIHtcblxuICAgIGNvbnN0IHBsYXllcjEgPSBjcmVhdGVQbGF5ZXIoXCJyZWFsXCIpO1xuICAgIC8vIGNvbnN0IHBsYXllcjIgPSBjcmVhdGVQbGF5ZXIoXCJjb21wdXRlclwiKTtcbiAgICBjb25zdCBwbGF5ZXIyID0gY3JlYXRlUGxheWVyKFwicmVhbFwiKTsgIFxuXG4gICAgLy8gcGxhY2UgcGxheWVyMSBzaGlwc1xuICAgIC8vIFR5cGVzIG9mIHNoaXBcbiAgICAvLyAtIENhcnJpZXIsIHNpemUgNVxuICAgIC8vIC0gQmF0dGxlc2hpcCwgc2l6ZSA0XG4gICAgLy8gLSBEZXN0cm95ZXIsIHNpemUgM1xuICAgIC8vIC0gU3VibWFyaW5lLCBzaXplIDNcbiAgICAvLyAtIFBhdHJvbCBCb2F0LCBzaXplIDJcblxuICAgIGNvbnN0IHBsYXllcjFDYXJyaWVyID0gY3JlYXRlU2hpcCg1KTtcbiAgICBjb25zdCBwbGF5ZXIxQmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoNCk7XG4gICAgY29uc3QgcGxheWVyMURlc3Ryb3llciA9IGNyZWF0ZVNoaXAoMyk7XG4gICAgY29uc3QgcGxheWVyMVN1Ym1hcmluZSA9IGNyZWF0ZVNoaXAoMyk7XG4gICAgY29uc3QgcGxheWVyMVBhdHJvbEJvYXQgPSBjcmVhdGVTaGlwKDIpXG5cblxuICAgIGNvbnN0IHBsYXllcjJDYXJyaWVyID0gY3JlYXRlU2hpcCg1KTtcbiAgICBjb25zdCBwbGF5ZXIyQmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoNCk7XG4gICAgY29uc3QgcGxheWVyMkRlc3Ryb3llciA9IGNyZWF0ZVNoaXAoMyk7XG4gICAgY29uc3QgcGxheWVyMlN1Ym1hcmluZSA9IGNyZWF0ZVNoaXAoMyk7XG4gICAgY29uc3QgcGxheWVyMlBhdHJvbEJvYXQgPSBjcmVhdGVTaGlwKDIpO1xuXG5cblxuICAgIC8vIGNvbnN0IGNhcnJpZXIgPSBjcmVhdGVTaGlwKDUpO1xuICAgIC8vIGNvbnN0IGJhdHRsZXNoaXAgPSBjcmVhdGVTaGlwKDQpO1xuICAgIC8vIGNvbnN0IGRlc3Ryb3llciA9IGNyZWF0ZVNoaXAoMyk7XG4gICAgLy8gY29uc3Qgc3VibWFyaW5lID0gY3JlYXRlU2hpcCgzKTtcbiAgICAvLyBjb25zdCBwYXRyb2xCb2F0ID0gY3JlYXRlU2hpcCgyKVxuXG4gICAgY29uc3QgYWxsUGxheWVyMVNoaXBzID0gW3BsYXllcjFDYXJyaWVyLCBwbGF5ZXIxQmF0dGxlc2hpcCwgcGxheWVyMURlc3Ryb3llciwgcGxheWVyMVN1Ym1hcmluZSwgcGxheWVyMVBhdHJvbEJvYXRdO1xuXG4gICAgY29uc3QgYWxsUGxheWVyMlNoaXBzID0gW3BsYXllcjJDYXJyaWVyLCBwbGF5ZXIyQmF0dGxlc2hpcCwgcGxheWVyMkRlc3Ryb3llciwgcGxheWVyMlN1Ym1hcmluZSwgcGxheWVyMlBhdHJvbEJvYXRdXG4gICAgLy8gXG4gICAgLy8gXG4gICAgLy8gXG4gICAgLy8gXG4gICAgLy8gXG4gICAgLy8gUmVtb3ZlIGFsbCBvZiB0aGUgYmVsb3cgYW5kIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgcmFuZG9tbHkgcGxhY2VzIHNoaXBzLiBJdCBpcyBtdWNoIG1vcmUgcmV1c2FibGUgKGJlY2F1c2UgeW91IGNhbiBzdGlsbCB1c2UgaXQgbGF0ZXIgd2l0aCBhIHJhbmRvbWl6ZSBidXR0b24gd2hlbiB5b3UgYWRkIGRyYWcgYW5kIGRyb3AgZmVhdHVyZSkgYW5kIGVhc2llciB0byBpbXBsZW1lbnQsIGp1c3QgdXNlIE1hdGgucmFuZG9tIGFuZCBpZiBcIlBsYWNlbWVudF9mYWlsZWRcIiwgcnVuIHRoZSBwbGFjZVNoaXAgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaGlwIGFnYWluLiAoRG9uZSlcblxuICAgIC8vIEFsc28gdXNlIE1hdGgucmFuZG9tIGZ1bmN0aW9uIHRvIGNob29zZSBwb3NpdGlvbnMgMCB0byAzIGJlY2F1c2UgNCBvcHRpb25zLiBQdXQgdGhlIG9wdGlvbnMgaW4gYW4gYXJyYXkuIChEb25lKVxuXG4gICAgLy8gQ2hhbmdlIHRoZSBjb29yZGluYXRlcyBkaXNwbGF5IHRvIHRoZSBkZWZhdWx0IEJhdHRsZXNoaXAgc3R5bGUuIExldHRlciBhbmQgTnVtYmVyIGUuZzogQTEsQjksRTcsZXRjLiAoRG9uZSlcblxuXG4gICAgLy8gQ3JlYXRlIGEgc3RhcnQgbWVudSB0aGF0IGFsbG93cyB0aGUgcGxheWVyIHRvIGNob29zZSB3aGV0aGVyIHRvIHBsYXkgYWdhaW5zdCBDb21wdXRlciBvciBhIHJlYWwgcGxheWVyLlxuXG4gICAgLy8gQ3JlYXRlIHBhc3MgZGV2aWNlIHNjcmVlbiBmb3IgMiBwbGF5ZXIgb3B0aW9uLiBWZXJpZnkgaWYgdGhpcyBpcyBkb25lLiBTZWVtcyB0byB3b3JrLCBjaGVjayB3aGF0IGhhcHBlbnMgdG8gcGFzcyBtZW51IGlmIGdhbWVvdmVyLlxuXG4gICAgLy8gSW5jbHVkZSBhIGdhbWUgcmVzdGFydCBidXR0b24gdGhhdCBjbGVhcnMgYWxsIHN0YXRlIGFuZCByZWNyZWF0ZXMgdGhlIGVudGlyZSBib2FyZCB3aXRoIG5ldyByYW5kb20gc2hpcCBwbGFjZW1lbnRzLiAoQ3JlYXRlIGEgZnVuY3Rpb24gaW4gdHVybnN0YXRlIHRoYXQgcmVzZXRzIHBsYXllciB0dXJuIHRvIHBsYXllciBvbmUgYW5kIGNhbGwgaXQgd2hlbiB0aGUgcmVzdGFydCBidXR0b24gaXMgY2xpY2tlZCkuXG5cbiAgICAvLyBjcmVhdGUgdGVzdHMgZm9yIGhpdE1hcCBvbmUgZm9yIGhpdCBhbmQgb25lIGZvciBtaXNzLiAoSGF2ZW4ndCBjcmVhdGVkIHRoaXMgeWV0IC0gZW5zdXJlcyB5b3UgY2FuIHJlZmFjdG9yIHNhZmVseSBsYXRlciBvbikuXG5cbiAgICAvLyBDaGVjayBhbGwgRE9NIG1vZHVsZXMgYXMgdG8gd2hldGhlciBvciBub3QgeW91IG5lZWQgdG8gd3JpdGUgdGVzdHMgZm9yIGFueSBvZiB0aGUgZnVuY3Rpb25zLiAoQW55dGhpbmcgdGhhdCBydW5zIGJlY2F1c2Ugb2YgRE9NIGV2ZW50IHNob3VsZCBub3QgYmUgdGVzdGVkLCBvbmx5IHB1cmUgbG9naWMgc2hvdWxkIGJlIHRlc3RlZClcblxuXG4gICAgLy8gTGFiZWwgdGhlIGdyaWRzIHdpdGggbGV0dGVycyBhbmQgbnVtYmVycz8gVXNlIGdyaWRzLlxuXG5cbiAgICBcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcCh7eDo5LHk6OX0sIFwibm9ydGhcIiwgcGxheWVyMUNhcnJpZXIpKTtcbiAgICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcCh7eDowLHk6MH0sIFwiZWFzdFwiLCBwbGF5ZXIxQmF0dGxlc2hpcCk7XG4gICAgcGxheWVyMS5ib2FyZC5wbGFjZVNoaXAoe3g6NSx5OjV9LCBcImVhc3RcIiwgcGxheWVyMURlc3Ryb3llcik7XG4gICAgcGxheWVyMS5ib2FyZC5wbGFjZVNoaXAoe3g6Mix5OjJ9LCBcImVhc3RcIiwgcGxheWVyMVN1Ym1hcmluZSk7XG4gICAgcGxheWVyMS5ib2FyZC5wbGFjZVNoaXAoe3g6OSx5OjB9LCBcInNvdXRoXCIsIHBsYXllcjFQYXRyb2xCb2F0KTtcblxuXG5cbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIyLmJvYXJkLnBsYWNlU2hpcCh7eDo5LHk6OX0sIFwibm9ydGhcIiwgcGxheWVyMkNhcnJpZXIpKTtcbiAgICBwbGF5ZXIyLmJvYXJkLnBsYWNlU2hpcCh7eDowLHk6MH0sIFwiZWFzdFwiLCBwbGF5ZXIyQmF0dGxlc2hpcCk7XG4gICAgcGxheWVyMi5ib2FyZC5wbGFjZVNoaXAoe3g6NSx5OjV9LCBcImVhc3RcIiwgcGxheWVyMkRlc3Ryb3llcik7XG4gICAgcGxheWVyMi5ib2FyZC5wbGFjZVNoaXAoe3g6Mix5OjJ9LCBcImVhc3RcIiwgcGxheWVyMlN1Ym1hcmluZSk7XG4gICAgcGxheWVyMi5ib2FyZC5wbGFjZVNoaXAoe3g6OSx5OjB9LCBcInNvdXRoXCIsIHBsYXllcjJQYXRyb2xCb2F0KTtcblxuICAgIGZ1bmN0aW9uIHBsYWNlQWxsU2hpcHMgKHBsYXllciwgc2hpcHNBcnJheSl7XG5cbiAgICAgICAgXG4gICAgICAgIHNoaXBzQXJyYXkuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBsYXllci5ib2FyZC5wbGFjZVNoaXAoY3JlYXRlUmFuZG9tQ29vcmRzKCksIGNob29zZURpcmVjdGlvbigpLCBzaGlwKVxuXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBcIlBsYWNlbWVudF9mYWlsZWRcIikge1xuXG5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBsYWNlQWxsU2hpcHMocGxheWVyLCBbc2hpcF0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IFwiUGxhY2VtZW50X3N1Y2Nlc3NcIikge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbGwgc2hpcHMgc3VjY2Vzc2Z1bGx5IHBsYWNlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUmFuZG9tQ29vcmRzICgpIHtcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG5cbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY2hvb3NlRGlyZWN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBkaXJlY3Rpb25BcnJheSA9IFtcIm5vcnRoXCIsIFwic291dGhcIiwgXCJlYXN0XCIsIFwid2VzdFwiXTtcblxuICAgICAgICAvLyBmcm9tIDAgdG8gM1xuICAgICAgICBjb25zdCBjaG9vc2VSYW5kb21EaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNCk7XG5cbiAgICAgICAgaWYgKGNob29zZVJhbmRvbURpcmVjdGlvbiA+IDMgfHwgY2hvb3NlUmFuZG9tRGlyZWN0aW9uIDwgMCkge1xuICAgICAgICAgICAgdGhyb3coXCJDaG9vc2UgUmFuZG9tIERpcmVjdGlvbiBpcyBub3Qgd29ya2luZyBjb3JyZWN0bHlcIilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaXJlY3Rpb25BcnJheVtjaG9vc2VSYW5kb21EaXJlY3Rpb25dXG5cbiAgICB9XG5cblxuICAgIC8vIHBsYWNlQWxsU2hpcHMocGxheWVyMSwgYWxsUGxheWVyMVNoaXBzKTtcbiAgICAvLyBwbGFjZUFsbFNoaXBzKHBsYXllcjIsIGFsbFBsYXllcjJTaGlwcylcblxuXG5cblxuICAgIC8vIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMDsgaW5kZXgrKykge1xuXG4gICAgICAgIFxuICAgIC8vICAgICBwbGF5ZXIxLmJvYXJkLnJlY2VpdmVBdHRhY2soOSxpbmRleClcbiAgICAvLyAgICAgcGxheWVyMS5ib2FyZC5yZWNlaXZlQXR0YWNrKGluZGV4LGluZGV4KVxuICAgIC8vIH1cblxuXG4gICAgLy8gcGxheWVyMi5ib2FyZC5wbGFjZVNoaXAoe3g6OSx5Ojl9LCBcIndlc3RcIiwgcGxheWVyMkNhcnJpZXIpO1xuICAgIC8vIHBsYXllcjIuYm9hcmQucGxhY2VTaGlwKHt4OjAseTowfSwgXCJlYXN0XCIsIHBsYXllcjJCYXR0bGVzaGlwKTtcbiAgICAvLyBwbGF5ZXIyLmJvYXJkLnBsYWNlU2hpcCh7eDo1LHk6NX0sIFwiZWFzdFwiLCBwbGF5ZXIyRGVzdHJveWVyKTtcbiAgICAvLyBwbGF5ZXIyLmJvYXJkLnBsYWNlU2hpcCh7eDoyLHk6Mn0sIFwiZWFzdFwiLCBwbGF5ZXIyU3VibWFyaW5lKTtcbiAgICAvLyBwbGF5ZXIyLmJvYXJkLnBsYWNlU2hpcCh7eDo5LHk6NX0sIFwic291dGhcIiwgcGxheWVyMlBhdHJvbEJvYXQpO1xuXG5cbiAgICAvLyBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTA7IGluZGV4KyspIHtcblxuICAgIC8vICAgICBwbGF5ZXIyLmJvYXJkLnJlY2VpdmVBdHRhY2soaW5kZXgsaW5kZXgpXG4gICAgLy8gfVxuXG5cbiAgICAvLyBJIHByb2JhYmx5IGNhbiByZW1vdmUgcGxheWVyLnR5cGUgYW5kIGl0IG1pZ2h0IHN0aWxsIHdvcmsgY29ycmVjdGx5LlxuICAgIHBsYXllcjFCb2FyZCA9IHBvcHVsYXRlUGxheWVyMUJvYXJkKHBsYXllcjEpO1xuICAgIHBsYXllcjJCb2FyZCA9IHBvcHVsYXRlUGxheWVyMkJvYXJkKHBsYXllcjIpO1xuXG4gICBcblxuXG4gICAgLy8gVGhlIG9uZXMgYmVsb3cgc3RheSBhcyBpdCBpcy5cblxuICAgIHBsYXllcjFCb2FyZC5kaXNwbGF5R3JpZHMoKVxuXG4gICAgcGxheWVyMUJvYXJkLnNob3dTaGlwcygpXG5cbiAgICBcblxuXG4gICAgcGxheWVyMkJvYXJkLmRpc3BsYXlHcmlkcygpXG5cbiAgICBwbGF5ZXIyQm9hcmQuc2hvd0hpdE1hcCgpXG5cbiBcblxuXG5cbn1cblxuXG5cblxuXG5cbmNvbnN0IHR1cm5TdGF0ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHBsYXllclR1cm4gPSBcInBsYXllcjFcIjtcblxuICAgIFxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVHVybigpIHtcblxuICAgICAgICAvLyBQcmV2ZW50cyBjb21wdXRlciBmcm9tIHBsYXlpbmdcbiAgICAgICAgaWYgKGlzR2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAocGxheWVyVHVybiA9PT0gXCJwbGF5ZXIxXCIpIHtcbiAgICAgICAgICAgIHBsYXllclR1cm4gPSBcInBsYXllcjJcIlxuXG4gICAgICAgICAgICBwbGF5ZXIxQm9hcmQuZGVsZXRlR3JpZHMoKTtcbiAgICAgICAgICAgIHBsYXllcjFCb2FyZC5kaXNwbGF5R3JpZHMoKTtcbiAgICAgICAgICAgIHBsYXllcjFCb2FyZC5zaG93SGl0TWFwKCk7XG5cbiAgICAgICAgICAgIHBsYXllcjJCb2FyZC5kZWxldGVHcmlkcygpO1xuICAgICAgICAgICAgcGxheWVyMkJvYXJkLmRpc3BsYXlHcmlkcygpO1xuICAgICAgICAgICAgcGxheWVyMkJvYXJkLnNob3dTaGlwcygpO1xuICAgICAgICAgICAgcGxheWVyMkJvYXJkLnNob3dIaXRNYXAoKTtcblxuXG4gICAgICAgICAgICBpZiAocGxheWVyMkJvYXJkLnBsYXllcjIudHlwZSA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyQXR0YWNrcyhwbGF5ZXIxQm9hcmQucGxheWVyMSlcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbGF5ZXJUdXJuID09PSBcInBsYXllcjJcIikge1xuICAgICAgICAgICAgcGxheWVyVHVybiA9IFwicGxheWVyMVwiXG5cbiAgICAgICAgICAgIHBsYXllcjJCb2FyZC5kZWxldGVHcmlkcygpO1xuICAgICAgICAgICAgcGxheWVyMkJvYXJkLmRpc3BsYXlHcmlkcygpO1xuICAgICAgICAgICAgcGxheWVyMkJvYXJkLnNob3dIaXRNYXAoKTtcblxuICAgICAgICAgICAgcGxheWVyMUJvYXJkLmRlbGV0ZUdyaWRzKCk7XG4gICAgICAgICAgICBwbGF5ZXIxQm9hcmQuZGlzcGxheUdyaWRzKCk7XG4gICAgICAgICAgICBwbGF5ZXIxQm9hcmQuc2hvd1NoaXBzKCk7XG4gICAgICAgICAgICBwbGF5ZXIxQm9hcmQuc2hvd0hpdE1hcCgpO1xuXG4gICAgICAgICAgICBpZiAocGxheWVyMUJvYXJkLnBsYXllcjEudHlwZSA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyQXR0YWNrcyhwbGF5ZXIyQm9hcmQucGxheWVyMilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUdXJuKCkge1xuICAgICAgICByZXR1cm4gcGxheWVyVHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0dhbWVPdmVyICgpIHtcbiAgICAgICAgY29uc3QgcGFzc0RldmljZU1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzLWRldmljZS1tZXNzYWdlJyk7XG5cbiAgICAgICAgY29uc3QgcGFzc0RldmljZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzLWRldmljZS1idXR0b24nKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHBsYXllcjFMb3NlcyA9IHBsYXllcjFCb2FyZC5wbGF5ZXIxLmJvYXJkLmFsbFN1bmsoKTtcbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyMUxvc2VzKTtcblxuICAgICAgICBjb25zdCBwbGF5ZXIyTG9zZXMgPSBwbGF5ZXIyQm9hcmQucGxheWVyMi5ib2FyZC5hbGxTdW5rKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllcjJMb3Nlcyk7XG5cbiAgICAgICAgaWYgKHBsYXllcjFMb3Nlcykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwYXNzRGV2aWNlTXNnLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgMiB3aW5zIVwiO1xuICAgICAgICAgICAgcGFzc0RldmljZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdTZWUgYm9hcmQnO1xuICAgICAgICAgICAgdXBkYXRlSGVhZGVyKFwiUGxheWVyIDIgd2lucyFcIik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbGF5ZXIyTG9zZXMpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcGFzc0RldmljZU1zZy50ZXh0Q29udGVudCA9IFwiUGxheWVyIDEgd2lucyFcIjtcbiAgICAgICAgICAgIHBhc3NEZXZpY2VCdXR0b24udGV4dENvbnRlbnQgPSAnU2VlIGJvYXJkJztcbiAgICAgICAgICAgIHVwZGF0ZUhlYWRlcihcIlBsYXllciAxIHdpbnMhXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybntcbiAgICAgICAgdXBkYXRlVHVybixcbiAgICAgICAgZ2V0VHVybixcbiAgICAgICAgaXNHYW1lT3ZlclxuICAgIH1cbn0pKClcblxuXG5sZXQgdGVzdCA9IDBcblxuZnVuY3Rpb24gY29tcHV0ZXJBdHRhY2tzIChwbGF5ZXIpIHtcblxuICAgIGNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgYXR0YWNrc1wiKTtcblxuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gcGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soeCx5KVxuXG4gICAgLy8gY29uc29sZS5sb2coXCJDb29yZHM6IFwiK3gseSlcbiAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgaWYgKHJlc3VsdCA9PT0gXCJBbHJlYWR5IEhpdFwiIHx8IHJlc3VsdCA9PSBcIkFscmVhZHkgTWlzc1wiKSB7XG4gICAgICAgICByZXR1cm4gY29tcHV0ZXJBdHRhY2tzKHBsYXllcilcbiAgICB9XG5cbiAgIFxuXG4gICAgLy8gY29uc29sZS5sb2coXCJDb21wdXRlciBoYXMgc3VjY2Vzc2Z1bGx5IGF0dGFja2VkLlwiKTtcblxuICAgIGNvbnN0IGxldHRlckFycmF5WCA9IFtcIkFcIixcIkJcIixcIkNcIixcIkRcIixcIkVcIixcIkZcIixcIkdcIixcIkhcIixcIklcIixcIkpcIl07XG5cbiAgICAgICAgY29uc3QgbnVtYmVyQXJyYXlZID0gWzEwLDksOCw3LDYsNSw0LDMsMiwxXTtcblxuICAgIHVwZGF0ZUhlYWRlcihgQ29tcHV0ZXIgY2hvc2UgJHtsZXR0ZXJBcnJheVhbeF19JHtudW1iZXJBcnJheVlbeV19IGFuZCBpdCdzIGEgJHtyZXN1bHQudG9Mb3dlckNhc2UoKX1gKTtcbiAgICB0dXJuU3RhdGUudXBkYXRlVHVybigpO1xuXG4gICBcbiAgICB0ZXN0KytcbiAgICBjb25zb2xlLmxvZygnQ29tcHV0ZXIgYXR0YWNrczonICsgdGVzdClcbiAgICByZXR1cm4gXG59XG5cblxuZXhwb3J0IHtcbiAgICBnYW1lRmxvdyxcbiAgICB0dXJuU3RhdGVcbn0iLCJmdW5jdGlvbiBjcmVhdGVHYW1lYm9hcmQoKXtcbiAgICBjb25zdCBvd25HcmlkID0gY3JlYXRlR3JpZCgpO1xuICAgIGNvbnN0IGhpdE1hcCA9IGNyZWF0ZUdyaWQoKTtcbiAgICBjb25zdCBwbGFjZWRTaGlwcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlR3JpZCAoKSB7XG5cbiAgICAgICAgY29uc3QgbmV3R3JpZCA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGdyaWRTaXplID0gMTA7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGdyaWRTaXplOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3dzID0gW11cbiAgICAgICAgICAgIHJvd3MubGVuZ3RoID0gMTA7XG5cbiAgICAgICAgICAgIG5ld0dyaWRbaW5kZXhdID0gcm93c1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld0dyaWQ7XG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcCAoY29vcmRpbmF0ZXMsIGRpcmVjdGlvbiwgc2hpcE9iamVjdCkge1xuXG5cbiAgICAgICAgY29uc3QgcG90ZW50aWFsQ29vcmRzID0gZ2V0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMsIGRpcmVjdGlvbiwgc2hpcE9iamVjdCk7XG4gICAgICAgIGNvbnN0IGdlbmVyYXRlZENvb3JkcyA9IHBvdGVudGlhbENvb3Jkcy5wb3RlbnRpYWxDb29yZGluYXRlcztcbiAgICAgICAgbGV0IHBsYWNlbWVudFZhbGlkaXR5ID0gcG90ZW50aWFsQ29vcmRzLnZhbGlkaXR5O1xuICAgICAgICBsZXQgcGxhY2VtZW50TXNnID0gXCJQbGFjZW1lbnRfc3VjY2Vzc1wiXG5cbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgLy8gICAgQ2hlY2tzIGlmIG92ZXJsYXBwaW5nIHNoaXBzIGV4aXN0XG4gICAgICAgIHBsYWNlbWVudFZhbGlkaXR5ID0gY2hlY2tQbGFjZW1lbnRWYWxpZGl0eShwbGFjZW1lbnRWYWxpZGl0eSwgZ2VuZXJhdGVkQ29vcmRzLCBvd25HcmlkKTtcbiAgICBcbiAgICAgICAgXG5cbiAgICAgICAgaWYgKCFwbGFjZW1lbnRWYWxpZGl0eSkge1xuICAgICAgICAgICAgcGxhY2VtZW50TXNnID0gXCJQbGFjZW1lbnRfZmFpbGVkXCJcbiAgICAgICAgICAgIHJldHVybiBwbGFjZW1lbnRNc2dcbiAgICAgICAgfVxuXG5cblxuICAgICAgICBnZW5lcmF0ZWRDb29yZHMuZm9yRWFjaChjb29yZHMgPT4ge1xuXG4gICAgICAgICAgICBvd25HcmlkW2Nvb3Jkc1swXV1bY29vcmRzWzFdXSA9IHNoaXBPYmplY3Q7XG5cblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHBsYWNlZFNoaXBzLnB1c2goc2hpcE9iamVjdClcbiAgXG5cbiAgICAgICByZXR1cm4gcGxhY2VtZW50TXNnXG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2sgKHgsIHkpIHtcblxuICAgICAgICBpZiAoaGl0TWFwW3hdW3ldID09PSBcIk1pc3NcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwiQWxyZWFkeSBNaXNzXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghb3duR3JpZFt4XVt5XSkge1xuICAgICAgICAgICAgaGl0TWFwW3hdW3ldID0gXCJNaXNzXCJcbiAgICAgICAgICAgIHJldHVybiBcIk1pc3NcIlxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoaGl0TWFwW3hdW3ldID09PSBcIkhpdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJBbHJlYWR5IEhpdFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hpcCA9IG93bkdyaWRbeF1beV07XG4gICAgICAgIHNoaXAuaGl0KClcbiAgICAgICAgaGl0TWFwW3hdW3ldID0gJ0hpdCc7XG4gICAgICAgIHJldHVybiBcIkhpdFwiXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWxsU3VuayAoKSB7XG5cbiAgICAgICAgbGV0IGV2ZXJ5U2hpcFN1bmsgPSB0cnVlO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwbGFjZWRTaGlwcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBwbGFjZWRTaGlwc1tpbmRleF07XG5cbiAgICAgICAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIGV2ZXJ5U2hpcFN1bmsgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV2ZXJ5U2hpcFN1bmtcbiAgICB9XG4gICAgXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvd25HcmlkLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGFsbFN1bmssXG4gICAgICAgIGhpdE1hcFxuICAgIH1cblxuXG5cbn1cblxuXG5mdW5jdGlvbiBnZXRDb29yZGluYXRlcyAoY29vcmRpbmF0ZXMsIGRpcmVjdGlvbiwgc2hpcE9iamVjdCkge1xuXG4gICAgbGV0IHZhbGlkaXR5ID0gdHJ1ZTtcblxuICAgIGNvbnN0IHBvdGVudGlhbENvb3JkaW5hdGVzID0gW11cblxuICAgIFxuICAgIGlmIChjb29yZGluYXRlcy54IDwgMCB8fCBjb29yZGluYXRlcy55IDwgMCB8fCBjb29yZGluYXRlcy54ID4gOSB8fCBjb29yZGluYXRlcy55ID4gOSApIHtcbiAgICAgICAgICAgIFxuICAgICAgICB2YWxpZGl0eSA9IGZhbHNlXG5cbiAgICAgICAgcmV0dXJuIHZhbGlkaXR5XG5cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcE9iamVjdC5nZXRMZW5ndGgoKTsgaW5kZXgrKykge1xuXG4gICAgICAgIFxuICAgICAgICBsZXQgeGNvb3JkcztcbiAgICAgICAgbGV0IHljb29yZHM7XG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJub3J0aFwiKSB7XG4gICAgICAgICAgICB4Y29vcmRzID0gY29vcmRpbmF0ZXMueFxuICAgICAgICAgICAgeWNvb3JkcyA9IGNvb3JkaW5hdGVzLnkgLSBpbmRleDtcblxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJzb3V0aFwiKSB7XG5cbiAgICAgICAgICAgIHhjb29yZHMgPSBjb29yZGluYXRlcy54XG4gICAgICAgICAgICB5Y29vcmRzID0gY29vcmRpbmF0ZXMueSArIGluZGV4O1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJlYXN0XCIpIHtcblxuICAgICAgICAgICAgeGNvb3JkcyA9IGNvb3JkaW5hdGVzLnggKyBpbmRleDtcbiAgICAgICAgICAgIHljb29yZHMgPSBjb29yZGluYXRlcy55OyBcblxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ3ZXN0XCIpIHtcbiAgICAgICAgICAgIHhjb29yZHMgPSBjb29yZGluYXRlcy54IC0gaW5kZXg7XG4gICAgICAgICAgICB5Y29vcmRzID0gY29vcmRpbmF0ZXMueTsgXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh4Y29vcmRzIDwgMCB8fCB5Y29vcmRzIDwgMCB8fCB4Y29vcmRzID4gOSB8fCB5Y29vcmRzID4gOSApIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFsaWRpdHkgPSBmYWxzZVxuXG4gICAgICAgIH1cblxuICAgICAgICBwb3RlbnRpYWxDb29yZGluYXRlcy5wdXNoKFt4Y29vcmRzLHljb29yZHNdKVxuICAgICAgICBcbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgXG4gICAgICAgIHZhbGlkaXR5LFxuICAgICAgICBwb3RlbnRpYWxDb29yZGluYXRlc1xuICAgIH1cbn1cblxuXG5cbmZ1bmN0aW9uIGNoZWNrUGxhY2VtZW50VmFsaWRpdHkgKHBsYWNlbWVudFZhbGlkaXR5LCBnZW5lcmF0ZWRDb29yZHMsIG93bkdyaWQpIHtcblxuICAgIGlmICghcGxhY2VtZW50VmFsaWRpdHkpIHtcbiAgICAgICAgcmV0dXJuIHBsYWNlbWVudFZhbGlkaXR5XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGdlbmVyYXRlZENvb3Jkcy5sZW5ndGg7IGluZGV4KyspIHtcblxuXG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IGdlbmVyYXRlZENvb3Jkc1tpbmRleF07XG4gICBcbiAgICAgICAgY29uc3Qgc2hpcCA9IG93bkdyaWRbY29vcmRzWzBdXVtjb29yZHNbMV1dXG5cbiAgICAgICAgaWYgKHNoaXApIHtcbiAgICAgICAgICAgIHBsYWNlbWVudFZhbGlkaXR5ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWNlbWVudFZhbGlkaXR5XG59XG5cblxuZXhwb3J0e1xuICAgIGNyZWF0ZUdhbWVib2FyZCxcbiAgICBnZXRDb29yZGluYXRlcyxcbiAgICBjaGVja1BsYWNlbWVudFZhbGlkaXR5XG59IiwiaW1wb3J0IHsgY3JlYXRlR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkRmFjdG9yeVwiXG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXllciAodHlwZSwgZW5lbXlIaXRtYXAsIGF0dGFja0VuZW15KSB7XG4gICAgY29uc3QgYm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoKTtcblxuICAgIGlmICghKHR5cGUgPT09IFwicmVhbFwiIHx8IHR5cGUgPT09IFwiY29tcHV0ZXJcIikpIHtcbiAgICAgICAgcmV0dXJuIFwiSW52YWxpZF9pbnB1dFwiO1xuICAgIH1cbiAgICAvLyBQbGF5ZXIgbG9naWMgYW5kIGNvbXB1dGVyIGxvZ2ljIGlzIG5vdCBjb21wbGV0ZS5cblxuICAgIGlmICh0eXBlID09PSBcInJlYWxcIikge1xuICAgIFxuICAgICAgICAvLyBjcmVhdGUgcGxheWVyXG4gICAgICAgIC8vIGNyZWF0ZSBib2FyZFxuICAgICAgICAvLyAtIEFscmVhZHkgZG9uZSBhYm92ZVxuXG4gICAgICAgIC8vIERvIGFsbCB0aGlzIGxvZ2ljIGluc2lkZSBoZXJlIG9yIG9uIGEgZGlmZmVyZW50IG1vZHVsZT9cblxuICAgICAgICAvLyBwbGFjZSBzaGlwcyAod2hhdCB0eXBlcyBvZiBzaGlwIGFuZCBob3cgbWFueT8pXG4gICAgICAgIC8vIC0gY3JlYXRlIDUgdHlwZXMgb2Ygc2hpcHMgYW5kIHBsYWNlIHRoZW1cblxuICAgICAgICAvLyBHQU1FRkxPVyBCRUdJTlNcbiAgICAgICAgLy8gZXhlY3V0ZSBvcHBvbmVudCdzIHJlY2VpdmVBdHRhY2sgZnVuY3Rpb25cbiAgICAgICAgLy8gaWYgb3Bwb25lbnQgYWxsU3VuaygpIGlzIGZhbHNlLCB0aGVuIG9wcG9uZW50IGV4ZWN1dGVzIHlvdXIgcmVjZWl2ZUF0dGFjayBmdW5jdGlvblxuICAgICAgICAvLyBpZiBvcHBvbmVudCBhbGxTdW5rKCkgaXMgdHJ1ZSwgdGhlbiB5b3Ugd2luLlxuICAgICAgICAvLyBUaGUgYWJvdmUgYXBwbGllcyB0byBvcHBvbmVudCBhcyB3ZWxsLlxuICAgICAgICAvLyBpZiB5b3UgYWNjaWRlbnRseSBjaG9vc2UgZ3JpZHMgdGhhdCB3ZXJlIGFscmVhZHkgaGl0IG9yIG1pc3NlZCwgeW91IHdpbGwgYmUgcHJvbXB0ZWQgdG8gdHJ5IGFnYWluXG4gICAgICAgIFxuICAgICAgICAvLyBVSVxuICAgICAgICAvLyBPcHBvbmVudCB3aWxsIG9ubHkgc2VlIHlvdXIgZ3JpZCBhcyBoaXQgbWFwIGFuZCB2aWNlIHZlcnNhLlxuICAgICAgICAvLyBBdCBldmVyeSB0dXJuLCB0aGUgZW50aXJlIERPTSB3aWxsIHJlbmRlciBvd25HcmlkIGFuZCBlbmVteSBoaXRtYXAgYW5kIHZpY2UgdmVyc2EuXG5cbiAgICBcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgIFxuICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGV4Y2VwdCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgaXMgdXNlZCB3aXRoIHJlY2VpdmVBdHRhY2sgZm9yIGNvb3JkaW5hdGVzXG4gICAgICAgIC8vIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgcnVucyBNYXRoLmZsb29yLCBhbmQgdGVzdCBpdC5cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlLFxuICAgICAgICBib2FyZFxuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBtYXRoLmZsb29yIGZ1bmN0aW9uIHNlcGFyYXRlbHkgYmVsb3cgaGVyZS5cbiAgICBcbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVQbGF5ZXJcbn0iLCJpbXBvcnQgeyBjdXJyZW50VHVybiwgdHVyblN0YXRlIH0gZnJvbSBcIi4vZ2FtZUZsb3dcIjtcblxuaW1wb3J0IHsgdXBkYXRlSGVhZGVyIH0gZnJvbSBcIi4vcmVuZGVyRE9NXCI7XG5cbi8vIEhvdyBkbyB5b3UgcmVuZGVyIHRoZSBib2FyZD9cblxuLy8gc2VsZWN0IHRoZSBwbGF5ZXIgYm9yZGVyIGdyaWRzIGZpcnN0LlxuXG4vLyB0aGVuIGltcG9ydCBhbmQgbG9vcCB0aHJvdWdoIG93bkdyaWQgYW5kIGhpdG1hcFxuXG4vLyB0aGlzIGZ1bmN0aW9uIGhhcyB0byBiZSByZXVzYWJsZSBmb3IgYm90aCBwbGF5ZXIgMSBhbmQgcGxheWVyIDIuXG5cbi8vIGl0IHdpbGwgY2hlY2sgd2hvc2UgdHVybiBhbmQgdHlwZSBvZiBwbGF5ZXIgdGhlIHBsYXllciBpcyBwbGF5aW5nIHdpdGguXG5cbi8vIGlmIHBsYXlpbmcgYWdhaW50cyBhaSBpdCB3aWxsIG9ubHkgZXZlciByZW5kZXIgdGhlIGFpIHBsYXllcidzIGhpdG1hcC4gbmV2ZXIgcmVuZGVycyBhaSBwbGF5ZXIncyBvbndHcmlkLlxuXG4vLyBpZiBwbGF5aW5nIGFnYWluc3QgYW5vdGhlciBwbGF5ZXIgYWZ0ZXIgYSBwbGF5ZXIgYXR0YWNrcywgYSBmaXhlZCBibGFjayBkaXYgd2lsbCBjb3ZlciB1cCB0aGUgZW50aXJlIHNjcmVlbiBhbmQgc2hvdyBhIHRleHQgb2Ygd2hldGhlciB0aGUgcGxheWVyIGhpdCBvciBtaXNzLCBhbHNvIHNob3dzIHdob3NlIHR1cm4gaXMgbmV4dCB3aXRoIGEgYnV0dG9uIGxhYmVsbGVkIFwic3RhcnQgdHVyblwiLiB3aXRoIHRoZSBuZXh0IHBsYXllcidzIGdyaWRzIGFuZCBoaXRtYXBzIGFscmVhZHQgcmVuZGVyZWQgYmVoaW5kIHRoZSBibGFjayBkaXYuXG5cbi8vIHNoaXBzIGFyZSBkaXNwbGF5ZWQgaW4gZGFyayBncmV5IGNvbG91clxuXG4vLyBoaXRzIGFyZSBkaXNwbGF5ZWQgaW4gcmVkXG5cbi8vIG1pc3NlcyBhcmUgZGlzcGxheWVkIGluIHdoaXRlXG5cblxuXG5cbi8vIGZpcnN0IHlvdSBtdXN0IGdldCBvd25HcmlkIG9mIHBsYXllciBvbmUgYW5kIGRpc3BsYXkgdGhlIGdyaWRzIGNvcnJlY3RseS5cblxuLy8gVGhlbiB5b3UgbXVzdCBnZXQgcGxheWVyIHR3bydzIGhpdG1hcCBhbmQgZGlzcGxheSB0aGUgZ3JpZHMgY29ycmVjdGx5LlxuXG4vLyBhZnRlciB0aGF0IHlvdSBtdXN0IGNyZWF0ZSBhbm90aGVyIGZ1bnRpb24gdG8gZGlzcGxheSBzaGlwcyBjb3JyZWN0bHkuIC1hZGQgY2xhc3NlcyB0byB0aGUgY29ycmVjdCBncmlkcy5cblxuLy8gVGhlbiB5b3UgY3JlYXRlIGFub3RoZXIgZnVuY3Rpb24gdG8gcmVuZGVyIGhpdG1hcCBjb3JyZWN0bHkuXG5cbi8vIEhpdG1hcCB3aWxsIGJlIGRpc3BsYXllZCBvbiBwbGF5ZXIgb25lIGdyaWQgYW5kIHBsYXllciB0d28gZ3JpZC5cblxuLy8gQWRkIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgZ3JpZHMuIChET05FKVxuXG5cbi8vIGFkZCBjb29yZGluYXRlcyBhcyBhbiBvYmplY3QgXCJjb25zdCBjb29yZHMgPSB7eDowLHk6MH1cIiBpbnNpZGUgYWRkZXZlbnRsaXN0ZW5lciBjYWxsYmFjayBmdW5jdGlvbj8gdXNlIGNvbHVtbkluZGV4IGFubmQgcm93SW5kZXg/IChET05FKVxuXG5cblxuLy8gcmVmYWN0b3IgaWYgbmVjZXNzYXJ5XG5mdW5jdGlvbiBwb3B1bGF0ZVBsYXllcjFCb2FyZCAocGxheWVyMSl7XG4gICAgY29uc3QgcGxheWVyMUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMS1ncmlkJyk7XG5cblxuICAgIFxuICAgIGZ1bmN0aW9uIGRpc3BsYXlHcmlkcygpIHtcbiAgICAgICAgY3JlYXRlR3JpZHMocGxheWVyMSwgcGxheWVyMUdyaWQsIFwicGxheWVyMVwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVHcmlkcygpIHtcbiAgICAgICAgd2hpbGUgKHBsYXllcjFHcmlkLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBsYXllcjFHcmlkLmZpcnN0Q2hpbGQucmVtb3ZlKClcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc2hvd1NoaXBzKCkge1xuICAgICAgICBkaXNwbGF5U2hpcHMobnVsbCxwbGF5ZXIxLCBwbGF5ZXIxR3JpZCk7XG4gICAgfVxuICAgIFxuXG5cblxuICAgIGZ1bmN0aW9uIHNob3dIaXRNYXAoKSB7XG4gICAgICAgIGRpc3BsYXlIaXRNYXAocGxheWVyMSwgcGxheWVyMUdyaWQpO1xuICAgIH1cblxuICAgXG5cbiAgIFxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXNwbGF5R3JpZHMsXG4gICAgICAgIGRlbGV0ZUdyaWRzLFxuICAgICAgICBzaG93U2hpcHMsXG4gICAgICAgIHNob3dIaXRNYXAsXG4gICAgICAgIHBsYXllcjFcbiAgICB9XG5cbn1cblxuLy8gTWVyZ2UgaXQgaW50byBvbmUgZnVuY3Rpb24gLSBhYm92ZVxuZnVuY3Rpb24gcG9wdWxhdGVQbGF5ZXIyQm9hcmQgKHBsYXllcjIpIHtcblxuICAgIGNvbnN0IHBsYXllcjJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjItZ3JpZCcpO1xuXG4gICAgZnVuY3Rpb24gZGlzcGxheUdyaWRzICgpIHtcbiAgICAgICAgY3JlYXRlR3JpZHMocGxheWVyMiwgcGxheWVyMkdyaWQsIFwicGxheWVyMlwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVHcmlkcygpIHtcbiAgICAgICAgd2hpbGUgKHBsYXllcjJHcmlkLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBsYXllcjJHcmlkLmZpcnN0Q2hpbGQucmVtb3ZlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dTaGlwcyAoKSB7XG4gICAgICAgIGRpc3BsYXlTaGlwcyhudWxsLHBsYXllcjIsIHBsYXllcjJHcmlkKTtcbiAgICB9XG4gICAgXG5cbiAgICBmdW5jdGlvbiBzaG93SGl0TWFwICgpIHtcbiAgICAgICAgZGlzcGxheUhpdE1hcChwbGF5ZXIyLCBwbGF5ZXIyR3JpZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheUdyaWRzLFxuICAgICAgICBkZWxldGVHcmlkcyxcbiAgICAgICAgc2hvd1NoaXBzLFxuICAgICAgICBzaG93SGl0TWFwLFxuICAgICAgICBwbGF5ZXIyXG4gICAgfVxuICAgIFxuICAgIFxufVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlR3JpZHMgKHBsYXllciwgcGxheWVyRE9NR3JpZCwgaXNQbGF5ZXIpIHtcbiAgICAvLyBwdXQgdGhlIGdyaWQgbWFraW5nIGxvb3AgYmVsb3cgaW5zaWRlIGhlcmVcblxuICAgIGZvciAobGV0IGNvbHVtbkluZGV4ID0gMDsgY29sdW1uSW5kZXggPCBwbGF5ZXIuYm9hcmQub3duR3JpZC5sZW5ndGg7IGNvbHVtbkluZGV4KyspIHtcbiAgICAgICAgY29uc3QgY29sdW1uID0gcGxheWVyLmJvYXJkLm93bkdyaWRbY29sdW1uSW5kZXhdO1xuXG5cbiAgICAgICAgY29uc3QgZ3JpZENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBncmlkQ29sdW1uLmNsYXNzTGlzdC5hZGQoXCJncmlkLWNvbHVtblwiKTtcbiAgICAgICAgLy8gZ3JpZENvbHVtbi50ZXh0Q29udGVudCA9IGNvbHVtbkluZGV4XG4gICAgICAgIHBsYXllckRPTUdyaWQuYXBwZW5kKGdyaWRDb2x1bW4pXG4gICAgICAgIFxuXG5cbiAgICAgICAgZm9yIChsZXQgcm93SW5kZXggPSA5OyByb3dJbmRleCA+PSAwOyByb3dJbmRleC0tKSB7XG4gICAgICAgICAgICAvLyBjb25zdCBlbGVtZW50ID0gY29sdW1uW3Jvd0luZGV4XTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVEVTVFwiKVxuICAgICAgICAgICAgY29uc3QgZ3JpZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZ3JpZFJvdy5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1yb3dcIik7XG4gICAgICAgICAgICAvLyBncmlkUm93LnRleHRDb250ZW50ID0gcm93SW5kZXg7XG4gICAgICAgICAgICBncmlkQ29sdW1uLmFwcGVuZChncmlkUm93KTtcblxuICAgICAgICAgICBjbGlja0JvYXJkKHBsYXllciwgZ3JpZFJvdywgY29sdW1uSW5kZXgsIHJvd0luZGV4LCBpc1BsYXllcilcbiAgICAgICAgfVxuXG4gICAgICAgXG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuZnVuY3Rpb24gZGlzcGxheVNoaXBzKHRvRGlzcGxheSwgcGxheWVyLCBwbGF5ZXJET01HcmlkKSB7XG4gICAgICAgIC8vIGlmIHBsYXllciAyIHR1cm4gZG9uJ3QgZGlzcGxheSBzaGlwc1xuXG4gICAgICAgIC8vIHJlbW92ZSBsYXRlclxuICAgICAgICB0b0Rpc3BsYXkgPSB0cnVlXG5cbiAgICAgICAgaWYgKHRvRGlzcGxheSkge1xuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBvd25HcmlkIGdyaWRzIGFycmF5IGFuZCBpZiBub3QgZW1wdHksIGFzc2lnbiBhIGdyZXkgY2xhc3MgdG8gdGhhdCBncmlkLiBcblxuICAgICAgICAgICAgY29uc3QgcGxheWVyQ29sdW1ucyA9IHBsYXllckRPTUdyaWQuY2hpbGROb2Rlc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgcGxheWVyLmJvYXJkLm93bkdyaWQubGVuZ3RoOyBjb2xJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93cyA9IHBsYXllci5ib2FyZC5vd25HcmlkW2NvbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIC8vIEJvYXJkIHJlbmRlcnMgdXBzaWRlIGRvd24gaWYgSSBkb24ndCB1c2UgXCJub2RlUm93SXRlcmF0b3JcIi5cbiAgICAgICAgICAgICAgICBsZXQgbm9kZXNSb3dJdGVyYXRvciA9IDBcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd05vZGVzID0gcGxheWVyQ29sdW1uc1tjb2xJbmRleF0uY2hpbGROb2RlcztcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJvd05vZGVzKVxuXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcmV2ZXJzZWRSb3dOb2RlID0gcm93Tm9kZXMucmV2ZXJzZSgpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcm93SW5kZXggPSA5OyByb3dJbmRleCA+PSAwOyByb3dJbmRleC0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJvd3Nbcm93SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBpZiAocm93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0cnVlKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dOb2Rlc1tub2Rlc1Jvd0l0ZXJhdG9yXS5jbGFzc0xpc3QuYWRkKCdzaGlwLWxvY2F0ZWQnKVxuXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbm9kZXNSb3dJdGVyYXRvcisrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbn1cblxuXG5cblxuZnVuY3Rpb24gZGlzcGxheUhpdE1hcChwbGF5ZXIscGxheWVyRE9NR3JpZCkge1xuXG4gICAgLy8gcGxheWVyLmJvYXJkLmhpdE1hcFxuXG4gICAgLy8gZGlzcGxheSBoaXRtYXAgYWZ0ZXIgZGlzcGxheSBzaGlwIHJ1bnMsIFRoaXMgc2hvdWxkIG92ZXJyaWRlIHRoZSBjbGFzc2VzIG9mIGRpc3BsYXlTaGlwc1xuXG4gICAgbGV0IHRvRGlzcGxheSA9IHRydWVcblxuICAgIGlmICh0b0Rpc3BsYXkpIHtcbiAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBvd25HcmlkIGdyaWRzIGFycmF5IGFuZCBpZiBub3QgZW1wdHksIGFzc2lnbiBhIGdyZXkgY2xhc3MgdG8gdGhhdCBncmlkLiBcblxuICAgICAgICBjb25zdCBwbGF5ZXJDb2x1bW5zID0gcGxheWVyRE9NR3JpZC5jaGlsZE5vZGVzXG5cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIuYm9hcmQuaGl0TWFwKVxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IHBsYXllci5ib2FyZC5oaXRNYXAubGVuZ3RoOyBjb2xJbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3dzID0gcGxheWVyLmJvYXJkLmhpdE1hcFtjb2xJbmRleF07XG5cbiAgICAgICAgICAgIC8vIEJvYXJkIHJlbmRlcnMgdXBzaWRlIGRvd24gaWYgSSBkb24ndCB1c2UgXCJub2RlUm93SXRlcmF0b3JcIi5cbiAgICAgICAgICAgIGxldCBub2Rlc1Jvd0l0ZXJhdG9yID0gMFxuXG4gICAgICAgICAgICBjb25zdCByb3dOb2RlcyA9IHBsYXllckNvbHVtbnNbY29sSW5kZXhdLmNoaWxkTm9kZXM7XG5cblxuICAgICAgICAgICAgZm9yIChsZXQgcm93SW5kZXggPSA5OyByb3dJbmRleCA+PSAwOyByb3dJbmRleC0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gcm93c1tyb3dJbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA9PT0gXCJIaXRcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0cnVlKVxuXG4gICAgICAgICAgICAgICAgICAgIHJvd05vZGVzW25vZGVzUm93SXRlcmF0b3JdLmNsYXNzTGlzdC5hZGQoJ3NoaXAtaXMtaGl0JylcblxuXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICBpZiAocm93ID09PSBcIk1pc3NcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0cnVlKVxuXG4gICAgICAgICAgICAgICAgICAgIHJvd05vZGVzW25vZGVzUm93SXRlcmF0b3JdLmNsYXNzTGlzdC5hZGQoJ2F0dGFjay1taXNzZWQnKVxuXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbm9kZXNSb3dJdGVyYXRvcisrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG5cblxuXG5cblxuXG5cblxuZnVuY3Rpb24gY2xpY2tCb2FyZCAocGxheWVyLCBncmlkLCBjb2x1bW5JbmRleCwgcm93SW5kZXgsIGlzUGxheWVyKSB7XG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBwYXNzRGV2aWNlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhc3MtZGV2aWNlJyk7XG5cbiAgICAgICAgY29uc3QgcGFzc0RldmljZU1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzLWRldmljZS1tZXNzYWdlJyk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFBsYXllclR1cm4gPSB0dXJuU3RhdGUuZ2V0VHVybigpO1xuXG4gICAgICAgIGNvbnN0IGdhbWVJc092ZXIgPSB0dXJuU3RhdGUuaXNHYW1lT3ZlcigpO1xuXG4gICAgICAgIGlmIChnYW1lSXNPdmVyKSB7XG5cblxuICAgICAgICB9XG5cblxuXG4gICAgICAgIFxuICAgICAgICBpZiAoaXNQbGF5ZXIgPT09IGN1cnJlbnRQbGF5ZXJUdXJuKSB7XG5cblxuICAgICAgICAgICAgdXBkYXRlSGVhZGVyKFwiTm90IHlvdXIgb3duIGJvYXJkIVwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCB4ID0gY29sdW1uSW5kZXhcbiAgICAgICAgY29uc3QgeSA9IHJvd0luZGV4O1xuICAgICAgICBjb25zb2xlLmxvZyh4LHkpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllci5ib2FyZC5oaXRNYXBbeF1beV0pXG5cbiAgICAgICAgaWYgKHBsYXllci5ib2FyZC5oaXRNYXBbeF1beV0gPT09IFwiTWlzc1wiIHx8IHBsYXllci5ib2FyZC5oaXRNYXBbeF1beV0gPT09IFwiSGl0XCIpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiR3JpZCBhbHJlYWR5IGNob3NlblwiKVxuXG4gICAgICAgICAgICB1cGRhdGVIZWFkZXIoXCJHcmlkIGFscmVhZHkgY2hvc2VuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyBSZW1vdmUgbGF0ZXIgaXMgcGFzcyBkZXZpY2UgbWVzc2FnZSB3b3JrcyBjb3JyZWN0bHkuXG4gICAgICAgIC8vIGlmIChwbGF5ZXIudHlwZSA9PT0gXCJyZWFsXCIpIHtcbiAgICAgICAgLy8gICAgIHBhc3NEZXZpY2VEaXYuY2xhc3NMaXN0LmFkZCgnc2hvdy1wYXNzLWRldmljZScpO1xuXG4gICAgICAgIC8vICAgICBpZiAoY3VycmVudFBsYXllclR1cm4gPT09IFwicGxheWVyMVwiKSB7XG4gICAgICAgIC8vICAgICAgICAgcGFzc0RldmljZU1zZy50ZXh0Q29udGVudCA9IFwiUGFzcyB0aGUgZGV2aWNlIHRvIFBsYXllciAyXCI7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICAvLyAgICAgaWYgKGN1cnJlbnRQbGF5ZXJUdXJuID09PSBcInBsYXllcjJcIikge1xuICAgICAgICAvLyAgICAgICAgIHBhc3NEZXZpY2VNc2cudGV4dENvbnRlbnQgPSBcIlBhc3MgdGhlIGRldmljZSB0byBQbGF5ZXIgMVwiO1xuICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKHgseSk7XG5cbiAgICAgICAgY29uc3QgbGV0dGVyQXJyYXlYID0gW1wiQVwiLFwiQlwiLFwiQ1wiLFwiRFwiLFwiRVwiLFwiRlwiLFwiR1wiLFwiSFwiLFwiSVwiLFwiSlwiXTtcblxuICAgICAgICBjb25zdCBudW1iZXJBcnJheVkgPSBbMTAsOSw4LDcsNiw1LDQsMywyLDFdXG4gICAgICAgIGlmIChjdXJyZW50UGxheWVyVHVybiA9PT0gXCJwbGF5ZXIxXCIpIHtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyBkaXYgZm9yIHBhc3MgdGhlIGRldmljZSBtc2c/XG4gICAgICAgICAgICBwYXNzRGV2aWNlTXNnLnRleHRDb250ZW50ID0gYEl0J3MgYSAke3Jlc3VsdC50b1VwcGVyQ2FzZSgpfSEgXFxyXFxuIFBhc3MgdGhlIGRldmljZSB0byBQbGF5ZXIgMmA7XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdXBkYXRlSGVhZGVyKGBQbGF5ZXIgMSBjaG9zZSAke2xldHRlckFycmF5WFt4XX0ke251bWJlckFycmF5WVt5XX0gYW5kIGl0J3MgYSAke3Jlc3VsdC50b1VwcGVyQ2FzZSgpfWApO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFBsYXllclR1cm4gPT09IFwicGxheWVyMlwiKSB7XG5cbiAgICAgICAgICAgIHBhc3NEZXZpY2VNc2cudGV4dENvbnRlbnQgPSBgSXQncyBhICR7cmVzdWx0LnRvVXBwZXJDYXNlKCl9ISBcXHJcXG4gUGFzcyB0aGUgZGV2aWNlIHRvIFBsYXllciAxYDtcblxuXG4gICAgICAgICAgICB1cGRhdGVIZWFkZXIoYFBsYXllciAyIGNob3NlICR7bGV0dGVyQXJyYXlYW3hdfSR7bnVtYmVyQXJyYXlZW3ldfSBhbmQgaXQncyBhICR7cmVzdWx0LnRvVXBwZXJDYXNlKCl9YCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbGF5ZXIudHlwZSA9PT0gXCJyZWFsXCIpIHtcbiAgICAgICAgICAgIHBhc3NEZXZpY2VEaXYuY2xhc3NMaXN0LmFkZCgnc2hvdy1wYXNzLWRldmljZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgICAgIHR1cm5TdGF0ZS51cGRhdGVUdXJuKCk7XG5cbiAgICAgICAgaWYgKHBsYXllci5ib2FyZC5vd25HcmlkW3hdW3ldKSB7XG4gIFxuICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdzaGlwLWlzLWhpdCcpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIuYm9hcmQub3duR3JpZFt4XVt5XS5nZXRIaXRzKCkpXG4gICAgIFxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2F0dGFjay1taXNzZWQnKTtcblxuICAgICAgICBcbiAgICB9KVxufVxuXG5leHBvcnR7XG4gICAgcG9wdWxhdGVQbGF5ZXIxQm9hcmQsXG4gICAgcG9wdWxhdGVQbGF5ZXIyQm9hcmRcbn0iLCJcbmZ1bmN0aW9uIGNyZWF0ZURPTSAoKSB7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgY29uc3Qgc3RhcnRNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RhcnRNZW51LmNsYXNzTGlzdC5hZGQoJ3N0YXJ0LW1lbnUnKTtcbiAgICBib2R5LmFwcGVuZChzdGFydE1lbnUpO1xuICAgIFxuXG4gICAgY29uc3QgcGFzc0RldmljZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhc3NEZXZpY2VEaXYuY2xhc3NMaXN0LmFkZCgncGFzcy1kZXZpY2UnKTtcbiAgICBib2R5LmFwcGVuZChwYXNzRGV2aWNlRGl2KTtcblxuXG4gICAgICAgIGNvbnN0IHBhc3NEZXZpY2VNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcGFzc0RldmljZU1zZy5jbGFzc0xpc3QuYWRkKCdwYXNzLWRldmljZS1tZXNzYWdlJyk7XG4gICAgICAgIHBhc3NEZXZpY2VEaXYuYXBwZW5kKHBhc3NEZXZpY2VNc2cpO1xuXG5cbiAgICAgICAgY29uc3QgcGFzc0RldmljZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwYXNzRGV2aWNlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Bhc3MtZGV2aWNlLWJ1dHRvbicpO1xuICAgICAgICBwYXNzRGV2aWNlQnV0dG9uLnRleHRDb250ZW50ID0gXCJTdGFydCB0dXJuXCI7XG4gICAgICAgIHBhc3NEZXZpY2VEaXYuYXBwZW5kKHBhc3NEZXZpY2VCdXR0b24pO1xuXG4gICAgICAgIHBhc3NEZXZpY2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHBhc3NEZXZpY2VEaXYuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1wYXNzLWRldmljZScpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlRlc3RcIilcbiAgICAgICAgfSlcblxuXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250YWluZXInKTtcbiAgICBib2R5LmFwcGVuZChtYWluQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1kaXYnKTtcbiAgICAgICAgaGVhZGVyRGl2LnRleHRDb250ZW50ID0gJ1BsYXllciAxIGdvZXMgZmlyc3QnXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKGhlYWRlckRpdik7XG5cbiAgICAgICAgY29uc3QgcGxheWVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllckRpdi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItZGl2Jyk7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKHBsYXllckRpdik7XG5cbiAgICAgICAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvb3RlckRpdi5jbGFzc0xpc3QuYWRkKCdmb290ZXItZGl2Jyk7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKGZvb3RlckRpdik7XG5cblxuXG4gICAgXG5cblxuXG5cblxuICAgIGNvbnN0IHBsYXllcjFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5ZXIxRGl2LmNsYXNzTGlzdC5hZGQoJ3BsYXllcjEtZGl2Jyk7XG4gICAgcGxheWVyRGl2LmFwcGVuZChwbGF5ZXIxRGl2KTtcbiAgICAvLyBwbGF5ZXIxRGl2LnRleHRDb250ZW50ID0gXCJQbGF5ZXIgMVwiO1xuXG4gICAgICAgIGNvbnN0IHBsYXllcjFHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllcjFHcmlkLmNsYXNzTGlzdC5hZGQoJ3BsYXllcjEtZ3JpZCcpO1xuICAgICAgICBwbGF5ZXIxRGl2LmFwcGVuZChwbGF5ZXIxR3JpZCk7XG5cbiAgICAgICAgY29uc3QgcGxheWVyMUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllcjFMYWJlbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXIxLWxhYmVsJyk7XG4gICAgICAgIHBsYXllcjFMYWJlbC50ZXh0Q29udGVudCA9IFwiUGxheWVyIDFcIlxuICAgICAgICBwbGF5ZXIxRGl2LmFwcGVuZChwbGF5ZXIxTGFiZWwpXG5cbiAgICBjb25zdCBwbGF5ZXIyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVyMkRpdi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXIyLWRpdicpO1xuICAgIHBsYXllckRpdi5hcHBlbmQocGxheWVyMkRpdilcbiAgICAvLyBwbGF5ZXIyRGl2LnRleHRDb250ZW50ID0gXCJQbGF5ZXIgMlwiO1xuXG4gICAgICAgIGNvbnN0IHBsYXllcjJHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllcjJHcmlkLmNsYXNzTGlzdC5hZGQoJ3BsYXllcjItZ3JpZCcpO1xuICAgICAgICBwbGF5ZXIyRGl2LmFwcGVuZChwbGF5ZXIyR3JpZCk7XG5cbiAgICAgICAgY29uc3QgcGxheWVyMkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllcjJMYWJlbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXIyLWxhYmVsJyk7XG4gICAgICAgIHBsYXllcjJMYWJlbC50ZXh0Q29udGVudCA9IFwiUGxheWVyIDJcIlxuICAgICAgICBwbGF5ZXIyRGl2LmFwcGVuZChwbGF5ZXIyTGFiZWwpXG5cblxuICAgIC8vIENyZWF0ZSBib2FyZCBkaXYsIG1ha2Ugc3VyZSB0aGVyZSBpcyBtaW5pbXVtIHNpemUgZm9yIGhlaWdodCBhbmQgd2lkdGhcbn1cblxuXG5mdW5jdGlvbiB1cGRhdGVIZWFkZXIgKHN0YXR1c01lc3NhZ2UpIHtcbiAgICBjb25zdCBzdGF0dXNEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1kaXYnKTtcblxuICAgIHN0YXR1c0Rpc3BsYXkudGV4dENvbnRlbnQgPSBzdGF0dXNNZXNzYWdlXG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlRE9NLFxuICAgIHVwZGF0ZUhlYWRlclxufVxuXG4iLCIgZnVuY3Rpb24gY3JlYXRlU2hpcCAobGVuZ3RoKXtcbiAgICBsZXQgdG90YWxIaXRzID0gMDtcbiAgICBsZXQgc3VuayA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2V0TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbGVuZ3RoXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SGl0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRvdGFsSGl0c1xuICAgIH1cblxuICAgIGNvbnN0IGlzU3VuayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRvdGFsSGl0cyA+PSBsZW5ndGgpIHtcbiAgICAgICAgICAgIHN1bmsgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1bmtcbiAgICB9XG5cblxuICAgIGNvbnN0IGhpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdG90YWxIaXRzKytcbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIGdldExlbmd0aCxcbiAgICAgICAgZ2V0SGl0cyxcbiAgICAgICAgaXNTdW5rLFxuICAgICAgICBoaXRcbiAgICB9XG4gfVxuXG5cbiBleHBvcnR7XG4gICAgY3JlYXRlU2hpcFxuIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vYXNzZXRzL3N0eWxlLmNzcyc7XG5cbmltcG9ydCB7IGNyZWF0ZVBsYXllciB9IGZyb20gXCIuL3BsYXllckZhY3RvcnlcIjtcbi8vIGltcG9ydCB7IG1vZHVsZSB9IGZyb20gJy4vbW9kdWxlJztcblxuXG4vLyBUaGlzIGlzIGp1c3QgYSBDUlVELiBJdCBzaG91bGQgYmUgZWFzeS4gQnV0IG1ha2Ugc3VyZSB0byBmb2xsb3cgdGhlIGluc3RydWN0aW9ucy5cblxuLy8gbW9kdWxlKClcblxuXG5pbXBvcnQgeyBjcmVhdGVET00gfSBmcm9tIFwiLi9yZW5kZXJET01cIjtcblxuaW1wb3J0IHsgZ2FtZUZsb3cgfSBmcm9tICcuL2dhbWVGbG93JztcblxuLy8gaW1wb3J0IHsgcG9wdWxhdGVCb2FyZCB9IGZyb20gJy4vcmVuZGVyQm9hcmQnO1xuXG5jcmVhdGVET00oKTtcbmdhbWVGbG93KCk7XG5cblxuLy8gcmVtb3ZlIHRoaXMgbGF0ZXJcbi8vIGNvbnN0IHRlc3RQbGF5ZXIgPSBjcmVhdGVQbGF5ZXIoXCJyZWFsXCIpO1xuLy8gcG9wdWxhdGVCb2FyZCh0ZXN0UGxheWVyKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==