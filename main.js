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

.game-title {
    font-size: 40px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 900;
    color: white;
}

.start-menu {
    
    
    
    display: none


}



.show-start-menu {

    display: grid;
    grid-template-rows: 300px 80px 200px;position: fixed;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 2;


    
}

.player-title-div {
    display: grid;
    align-items: end;
    justify-items: center;
}

.player-type-title{
    color: white;
    text-align: center;
    font-size: 30px;
    font-family: serif;
    font-weight: 900;
    /* vertical-align: middle; */
}
.player-type-div {
    display: grid;

    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: end;
    gap: 30px;
}

.player-type-div > button {
    width: 130px;
    height: 40px;
}

.computer-option {
    justify-self: end;
}

.real-player-option {
    justify-self: start;
}

.start-button-div {
    display: grid;
    justify-items: center;
    align-items: center;
}

.start-button {
    width: 150px;
    height: 50px;
}


.pass-device{
    border: 3px solid pink;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: gray;
    
    padding: 20%;
    z-index: 2;
    
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
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    position: relative;;

}

.game-over{
    position: fixed;
    display: none;
}

.enable-game-over{
    width: 100%;
    height: 100%;
    display: block;
}
/* Do I need z-index here? - Check if the link is still clickable if z-index is 0 after game is over */
.footer-div {
    width: 100%;
    height: 100%;
    border: 2px solid green;
    z-index: 1; 
    color: white;
    display: grid;
    justify-items: center;
    align-items: center;
}

.footer-link:hover{
    color: white;
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
        width: 280px;
        height: 280px;

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

}`, "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"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","sourcesContent":["*{\n margin: 0;\n padding: 0;\n box-sizing: border-box;\n}\n\nhtml,\nbody{\n    height: 100%;\n    width: 100%;\n    background-color: black;\n    position: relative;\n    \n}\n\n.game-title {\n    font-size: 40px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: 900;\n    color: white;\n}\n\n.start-menu {\n    \n    \n    \n    display: none\n\n\n}\n\n\n\n.show-start-menu {\n\n    display: grid;\n    grid-template-rows: 300px 80px 200px;position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: black;\n    z-index: 2;\n\n\n    \n}\n\n.player-title-div {\n    display: grid;\n    align-items: end;\n    justify-items: center;\n}\n\n.player-type-title{\n    color: white;\n    text-align: center;\n    font-size: 30px;\n    font-family: serif;\n    font-weight: 900;\n    /* vertical-align: middle; */\n}\n.player-type-div {\n    display: grid;\n\n    grid-template-columns: 1fr 1fr;\n    justify-items: center;\n    align-items: end;\n    gap: 30px;\n}\n\n.player-type-div > button {\n    width: 130px;\n    height: 40px;\n}\n\n.computer-option {\n    justify-self: end;\n}\n\n.real-player-option {\n    justify-self: start;\n}\n\n.start-button-div {\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n\n.start-button {\n    width: 150px;\n    height: 50px;\n}\n\n\n.pass-device{\n    border: 3px solid pink;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: gray;\n    \n    padding: 20%;\n    z-index: 2;\n    \n    display: none;\n}\n\n.show-pass-device{\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    /* grid-template-rows: 170px 200px; */\n    gap: 20px;\n}\n\n\n.pass-device-message {\n    border: 3px solid red;\n    width: 100%;\n    height: 100%;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n\n\n    text-align: center;\n    vertical-align: middle;\n    padding: 50px;\n    font-size: 40px;\n    /* line-height: 100%; */\n}\n\n.pass-device-button {\n    border: 3px solid blue;\n    width: 200px;\n    height: 70px;\n    font-size: 25px;\n    border-radius: 15px;\n    align-self: start;\n}\n\n.main-container {\n\n    /* Have a minimum height and width for .player-div */\n\n    width: 100%;\n    height: 100%;\n    border: 2px solid red;\n    display: grid;\n    grid-template-rows: 100px 1fr 50px;\n}\n\n.header-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid blue;\n    color: white;\n    text-align: center;\n    font-size: 20px;\n\n    padding: 30px;\n}\n\n\n\n\n.player-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid pink;\n    /* background-color: yellow; */\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));\n    position: relative;;\n\n}\n\n.game-over{\n    position: fixed;\n    display: none;\n}\n\n.enable-game-over{\n    width: 100%;\n    height: 100%;\n    display: block;\n}\n/* Do I need z-index here? - Check if the link is still clickable if z-index is 0 after game is over */\n.footer-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid green;\n    z-index: 1; \n    color: white;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n\n.footer-link:hover{\n    color: white;\n}\n\n.player1-div,\n.player2-div{\n    padding: 20px;\n    gap: 15px;\n}\n\n\n.player1-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid lightgreen;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    /* text-align: center; */\n    /* color: white; */\n}\n\n.player2-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid lightgoldenrodyellow;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    /* text-align: center; */\n    /* color: white; */\n}\n\n\n.player1-grid,\n.player2-grid{\n\n    --height-and-width: max(330px, 30vw);\n    --border-size: 2px solid greenyellow;\n\n    border: var(--border-size);\n    width: var(--height-and-width);\n    height: var(--height-and-width);\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    color: white;\n\n}\n\n\n.player1-label,\n.player2-label{\n    color: white;\n    width: 100%;\n    border: 2px solid blanchedalmond;\n    text-align: center;\n    /* padding: 10px; */\n}\n\n\n.grid-column{\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    /* border: 2px solid turquoise; */\n    text-align: center;\n}\n\n.grid-row{\n\n    border: 2px solid turquoise;\n    \n}\n.grid-row:hover{\n    /* background-color: rgba(255, 255, 0, 0.156); */\n    border: 3px solid yellow;\n}\n\n.clicked {\n    background-color: red;\n}\n\n.ship-located {\n    background-color: darkorchid;\n}\n\n\n.ship-is-hit{\n    background-color: darkred;\n}\n\n.attack-missed{\n    background-color: white;\n}\n@media (max-width: 770px){\n    /* change player font position */\n\n    .player1-grid,\n    .player2-grid{\n        \n        /* Might have to reduce size further */\n        width: 280px;\n        height: 280px;\n\n    }\n    .player1-div{\n        order: 2;\n    }\n    .player2-div{\n        order: 1;\n    }\n\n    .player2-grid{\n        order: 2;\n    }\n\n    .player2-label{\n        order: 1;\n    }\n\n}"],"sourceRoot":""}]);
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

/***/ "./src/DOMAction.js":
/*!**************************!*\
  !*** ./src/DOMAction.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameStart: () => (/* binding */ gameStart),
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



function gameStart () {
    const startMenu = document.querySelector('.start-menu');
    const playerTypeTitle = document.querySelector('.player-type-title');
    const startButton = document.querySelector('.start-button');
    const computerOption = document.querySelector('.computer-option');
    const realPlayerOption = document.querySelector('.real-player-option');
    
    
    startButton.addEventListener('click', function(e){

        e.preventDefault();

        startMenu.classList.remove('show-start-menu');

        (0,_gameFlow__WEBPACK_IMPORTED_MODULE_0__.gameFlow)();

    });

    computerOption.addEventListener("click", function (e) {
        e.preventDefault();

        playerTypeTitle.textContent = "Play against: Computer"

        ;(0,_gameFlow__WEBPACK_IMPORTED_MODULE_0__.setPlayer2Type)("computer");
    })

    realPlayerOption.addEventListener("click", function (e) {
        e.preventDefault();

        playerTypeTitle.textContent = "Play against: Your Friend"

        ;(0,_gameFlow__WEBPACK_IMPORTED_MODULE_0__.setPlayer2Type)("real");
    })


}


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

/***/ "./src/gameFlow.js":
/*!*************************!*\
  !*** ./src/gameFlow.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameFlow: () => (/* binding */ gameFlow),
/* harmony export */   setPlayer2Type: () => (/* binding */ setPlayer2Type),
/* harmony export */   turnState: () => (/* binding */ turnState)
/* harmony export */ });
/* harmony import */ var _playerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerFactory */ "./src/playerFactory.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");
/* harmony import */ var _DOMAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMAction */ "./src/DOMAction.js");
/* harmony import */ var _renderDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderDOM */ "./src/renderDOM.js");





// These playerBoards are side effects (external state) / (dependencies).
let player1Board; 
let player2Board;

let player2Type = "computer"

function setPlayer2Type (type){
    player2Type = type
}
function gameFlow () {

    const player1 = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__.createPlayer)("real");
    const player2 = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__.createPlayer)(player2Type);
    // const player2 = createPlayer("real");  

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


    // Create a start menu that allows the player to choose whether to play against Computer or a real player. (Done)

    // Create pass device screen for 2 player option. Verify if this is done. Seems to work, check what happens to pass menu if gameover. (Done)

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
    player1Board = (0,_DOMAction__WEBPACK_IMPORTED_MODULE_2__.populatePlayer1Board)(player1);
    player2Board = (0,_DOMAction__WEBPACK_IMPORTED_MODULE_2__.populatePlayer2Board)(player2);

   


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

            const passDevice = document.querySelector('.pass-device');
            passDevice.classList.add('show-pass-device');

            const gameOver = document.querySelector('.game-over');
            gameOver.classList.add('enable-game-over');
            // Make playerDiv not clickable

            player1Board.deleteGrids();
            player1Board.displayGrids();
            player1Board.showShips();
            player1Board.showHitMap();

            player2Board.deleteGrids();
            player2Board.displayGrids();
            player2Board.showShips();
            player2Board.showHitMap();


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
    startMenu.classList.add('show-start-menu');
    body.append(startMenu);

    
        const playerTitleDiv = document.createElement('div');
        playerTitleDiv.classList.add('player-title-div');
        startMenu.append(playerTitleDiv);

            const gameTitle = document.createElement('div');
            gameTitle.textContent = "BATTLESHIP"
            gameTitle.classList.add('game-title');
            playerTitleDiv.append(gameTitle);


            const playerTypeTitle = document.createElement('div');
            playerTypeTitle.classList.add('player-type-title');
            playerTypeTitle.textContent = 'Play against: Computer'
            playerTitleDiv.append(playerTypeTitle);

        const playerTypeDiv = document.createElement('div');
        playerTypeDiv.classList.add('player-type-div');
        startMenu.append(playerTypeDiv);


            const computerOption = document.createElement('button');
            computerOption.classList.add('computer-option');
            computerOption.textContent = "Computer";
            playerTypeDiv.append(computerOption);

            const realPlayerOption = document.createElement('button');
            realPlayerOption.classList.add('real-player-option');
            realPlayerOption.textContent = "Your friend";
            playerTypeDiv.append(realPlayerOption);

            

        const startButtonDiv = document.createElement('div');
        startButtonDiv.classList.add('start-button-div');
        startMenu.append(startButtonDiv);

            const startButton = document.createElement("button");
            startButton.textContent = "START!";
            startButton.classList.add('start-button');
            startButtonDiv.append(startButton);


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

            const gameOver = document.createElement('div');
            gameOver.classList.add('game-over');
            playerDiv.append(gameOver);

        const footerDiv = document.createElement('div');
        footerDiv.classList.add('footer-div');
        mainContainer.append(footerDiv);

            const footerLink = document.createElement('a');
            footerLink.classList.add('footer-link');
            footerLink.setAttribute("href", "https://github.com/Risshiganesh/battleship");
            footerLink.textContent = "Made by Risshiganesh Villalan";
            footerDiv.append(footerLink);



    





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
/* harmony import */ var _DOMAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMAction */ "./src/DOMAction.js");
/* harmony import */ var _gameFlow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameFlow */ "./src/gameFlow.js");



// import { module } from './module';


// This is just a CRUD. It should be easy. But make sure to follow the instructions.

// module()








// import { populateBoard } from './renderBoard';

(0,_renderDOM__WEBPACK_IMPORTED_MODULE_2__.createDOM)();
(0,_DOMAction__WEBPACK_IMPORTED_MODULE_3__.gameStart)();
// gameFlow();


// remove this later
// const testPlayer = createPlayer("real");
// populateBoard(testPlayer)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsYUFBYSxXQUFXLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksZUFBZSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFlBQVksVUFBVSxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSxPQUFPLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksWUFBWSxRQUFRLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLGFBQWEsUUFBUSxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUss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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBS0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7VUNqQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7O0FBRW1CO0FBQy9DLFlBQVksU0FBUzs7O0FBR3JCOztBQUVBOzs7QUFHd0M7O0FBRUE7O0FBRUY7O0FBRXRDLFlBQVksZ0JBQWdCOztBQUU1QixxREFBUztBQUNULHFEQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQSw0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzPzYwMWQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTUFjdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVGbG93LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZW5kZXJET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuIG1hcmdpbjogMDtcbiBwYWRkaW5nOiAwO1xuIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG59XG5cbi5nYW1lLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdGFydC1tZW51IHtcbiAgICBcbiAgICBcbiAgICBcbiAgICBkaXNwbGF5OiBub25lXG5cblxufVxuXG5cblxuLnNob3ctc3RhcnQtbWVudSB7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzAwcHggODBweCAyMDBweDtwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHotaW5kZXg6IDI7XG5cblxuICAgIFxufVxuXG4ucGxheWVyLXRpdGxlLWRpdiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLnBsYXllci10eXBlLXRpdGxle1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIC8qIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICovXG59XG4ucGxheWVyLXR5cGUtZGl2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIGdhcDogMzBweDtcbn1cblxuLnBsYXllci10eXBlLWRpdiA+IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLmNvbXB1dGVyLW9wdGlvbiB7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbi5yZWFsLXBsYXllci1vcHRpb24ge1xuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG59XG5cbi5zdGFydC1idXR0b24tZGl2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3RhcnQtYnV0dG9uIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG5cbi5wYXNzLWRldmljZXtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBwaW5rO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICBcbiAgICBwYWRkaW5nOiAyMCU7XG4gICAgei1pbmRleDogMjtcbiAgICBcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvdy1wYXNzLWRldmljZXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogMTcwcHggMjAwcHg7ICovXG4gICAgZ2FwOiAyMHB4O1xufVxuXG5cbi5wYXNzLWRldmljZS1tZXNzYWdlIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIC8qIGxpbmUtaGVpZ2h0OiAxMDAlOyAqL1xufVxuXG4ucGFzcy1kZXZpY2UtYnV0dG9uIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibHVlO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG5cbiAgICAvKiBIYXZlIGEgbWluaW11bSBoZWlnaHQgYW5kIHdpZHRoIGZvciAucGxheWVyLWRpdiAqL1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyIDUwcHg7XG59XG5cbi5oZWFkZXItZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcblxuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5cblxuXG5cbi5wbGF5ZXItZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgcGluaztcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7ICovXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM4MHB4LCAxZnIpKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7O1xuXG59XG5cbi5nYW1lLW92ZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5lbmFibGUtZ2FtZS1vdmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi8qIERvIEkgbmVlZCB6LWluZGV4IGhlcmU/IC0gQ2hlY2sgaWYgdGhlIGxpbmsgaXMgc3RpbGwgY2xpY2thYmxlIGlmIHotaW5kZXggaXMgMCBhZnRlciBnYW1lIGlzIG92ZXIgKi9cbi5mb290ZXItZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XG4gICAgei1pbmRleDogMTsgXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb290ZXItbGluazpob3ZlcntcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5wbGF5ZXIxLWRpdixcbi5wbGF5ZXIyLWRpdntcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGdhcDogMTVweDtcbn1cblxuXG4ucGxheWVyMS1kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZWVuO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cbn1cblxuLnBsYXllcjItZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xufVxuXG5cbi5wbGF5ZXIxLWdyaWQsXG4ucGxheWVyMi1ncmlke1xuXG4gICAgLS1oZWlnaHQtYW5kLXdpZHRoOiBtYXgoMzMwcHgsIDMwdncpO1xuICAgIC0tYm9yZGVyLXNpemU6IDJweCBzb2xpZCBncmVlbnllbGxvdztcblxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyLXNpemUpO1xuICAgIHdpZHRoOiB2YXIoLS1oZWlnaHQtYW5kLXdpZHRoKTtcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodC1hbmQtd2lkdGgpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgY29sb3I6IHdoaXRlO1xuXG59XG5cblxuLnBsYXllcjEtbGFiZWwsXG4ucGxheWVyMi1sYWJlbHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhbmNoZWRhbG1vbmQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXG59XG5cblxuLmdyaWQtY29sdW1ue1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgdHVycXVvaXNlOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdyaWQtcm93e1xuXG4gICAgYm9yZGVyOiAycHggc29saWQgdHVycXVvaXNlO1xuICAgIFxufVxuLmdyaWQtcm93OmhvdmVye1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuMTU2KTsgKi9cbiAgICBib3JkZXI6IDNweCBzb2xpZCB5ZWxsb3c7XG59XG5cbi5jbGlja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5zaGlwLWxvY2F0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtvcmNoaWQ7XG59XG5cblxuLnNoaXAtaXMtaGl0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XG59XG5cbi5hdHRhY2stbWlzc2Vke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc3MHB4KXtcbiAgICAvKiBjaGFuZ2UgcGxheWVyIGZvbnQgcG9zaXRpb24gKi9cblxuICAgIC5wbGF5ZXIxLWdyaWQsXG4gICAgLnBsYXllcjItZ3JpZHtcbiAgICAgICAgXG4gICAgICAgIC8qIE1pZ2h0IGhhdmUgdG8gcmVkdWNlIHNpemUgZnVydGhlciAqL1xuICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgIGhlaWdodDogMjgwcHg7XG5cbiAgICB9XG4gICAgLnBsYXllcjEtZGl2e1xuICAgICAgICBvcmRlcjogMjtcbiAgICB9XG4gICAgLnBsYXllcjItZGl2e1xuICAgICAgICBvcmRlcjogMTtcbiAgICB9XG5cbiAgICAucGxheWVyMi1ncmlke1xuICAgICAgICBvcmRlcjogMjtcbiAgICB9XG5cbiAgICAucGxheWVyMi1sYWJlbHtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgfVxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysc0JBQXNCO0FBQ3ZCOztBQUVBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBOzs7O0lBSUk7OztBQUdKOzs7O0FBSUE7O0lBRUksYUFBYTtJQUNiLG9DQUFvQyxDQUFDLGVBQWU7SUFDcEQsV0FBVztJQUNYLFlB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Q2hELHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7O0FBR0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGdDQUFnQzs7SUFFaEM7OztRQUdJLHNDQUFzQztRQUN0QyxZQUFZO1FBQ1osYUFBYTs7SUFFakI7SUFDQTtRQUNJLFFBQVE7SUFDWjtJQUNBO1FBQ0ksUUFBUTtJQUNaOztJQUVBO1FBQ0ksUUFBUTtJQUNaOztJQUVBO1FBQ0ksUUFBUTtJQUNaOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuIG1hcmdpbjogMDtcXG4gcGFkZGluZzogMDtcXG4gYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBcXG59XFxuXFxuLmdhbWUtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zdGFydC1tZW51IHtcXG4gICAgXFxuICAgIFxcbiAgICBcXG4gICAgZGlzcGxheTogbm9uZVxcblxcblxcbn1cXG5cXG5cXG5cXG4uc2hvdy1zdGFydC1tZW51IHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMDBweCA4MHB4IDIwMHB4O3Bvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHotaW5kZXg6IDI7XFxuXFxuXFxuICAgIFxcbn1cXG5cXG4ucGxheWVyLXRpdGxlLWRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllci10eXBlLXRpdGxle1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LWZhbWlseTogc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIC8qIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICovXFxufVxcbi5wbGF5ZXItdHlwZS1kaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4ucGxheWVyLXR5cGUtZGl2ID4gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5jb21wdXRlci1vcHRpb24ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnJlYWwtcGxheWVyLW9wdGlvbiB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbi5zdGFydC1idXR0b24tZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3RhcnQtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcblxcbi5wYXNzLWRldmljZXtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcGluaztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICBcXG4gICAgcGFkZGluZzogMjAlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNob3ctcGFzcy1kZXZpY2V7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNzBweCAyMDBweDsgKi9cXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5cXG4ucGFzcy1kZXZpY2UtbWVzc2FnZSB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgLyogbGluZS1oZWlnaHQ6IDEwMCU7ICovXFxufVxcblxcbi5wYXNzLWRldmljZS1idXR0b24ge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibHVlO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG5cXG4gICAgLyogSGF2ZSBhIG1pbmltdW0gaGVpZ2h0IGFuZCB3aWR0aCBmb3IgLnBsYXllci1kaXYgKi9cXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciA1MHB4O1xcbn1cXG5cXG4uaGVhZGVyLWRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcblxcblxcblxcbi5wbGF5ZXItZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcGluaztcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogeWVsbG93OyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM4MHB4LCAxZnIpKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOztcXG5cXG59XFxuXFxuLmdhbWUtb3ZlcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZW5hYmxlLWdhbWUtb3ZlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbi8qIERvIEkgbmVlZCB6LWluZGV4IGhlcmU/IC0gQ2hlY2sgaWYgdGhlIGxpbmsgaXMgc3RpbGwgY2xpY2thYmxlIGlmIHotaW5kZXggaXMgMCBhZnRlciBnYW1lIGlzIG92ZXIgKi9cXG4uZm9vdGVyLWRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbiAgICB6LWluZGV4OiAxOyBcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXItbGluazpob3ZlcntcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucGxheWVyMS1kaXYsXFxuLnBsYXllcjItZGl2e1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcblxcbi5wbGF5ZXIxLWRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JlZW47XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgICAvKiBjb2xvcjogd2hpdGU7ICovXFxufVxcblxcbi5wbGF5ZXIyLWRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z29sZGVucm9keWVsbG93O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xcbn1cXG5cXG5cXG4ucGxheWVyMS1ncmlkLFxcbi5wbGF5ZXIyLWdyaWR7XFxuXFxuICAgIC0taGVpZ2h0LWFuZC13aWR0aDogbWF4KDMzMHB4LCAzMHZ3KTtcXG4gICAgLS1ib3JkZXItc2l6ZTogMnB4IHNvbGlkIGdyZWVueWVsbG93O1xcblxcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci1zaXplKTtcXG4gICAgd2lkdGg6IHZhcigtLWhlaWdodC1hbmQtd2lkdGgpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodC1hbmQtd2lkdGgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG5cXG5cXG4ucGxheWVyMS1sYWJlbCxcXG4ucGxheWVyMi1sYWJlbHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhbmNoZWRhbG1vbmQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cXG59XFxuXFxuXFxuLmdyaWQtY29sdW1ue1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgdHVycXVvaXNlOyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ncmlkLXJvd3tcXG5cXG4gICAgYm9yZGVyOiAycHggc29saWQgdHVycXVvaXNlO1xcbiAgICBcXG59XFxuLmdyaWQtcm93OmhvdmVye1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjE1Nik7ICovXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHllbGxvdztcXG59XFxuXFxuLmNsaWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5zaGlwLWxvY2F0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb3JjaGlkO1xcbn1cXG5cXG5cXG4uc2hpcC1pcy1oaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcbi5hdHRhY2stbWlzc2Vke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc3MHB4KXtcXG4gICAgLyogY2hhbmdlIHBsYXllciBmb250IHBvc2l0aW9uICovXFxuXFxuICAgIC5wbGF5ZXIxLWdyaWQsXFxuICAgIC5wbGF5ZXIyLWdyaWR7XFxuICAgICAgICBcXG4gICAgICAgIC8qIE1pZ2h0IGhhdmUgdG8gcmVkdWNlIHNpemUgZnVydGhlciAqL1xcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyODBweDtcXG5cXG4gICAgfVxcbiAgICAucGxheWVyMS1kaXZ7XFxuICAgICAgICBvcmRlcjogMjtcXG4gICAgfVxcbiAgICAucGxheWVyMi1kaXZ7XFxuICAgICAgICBvcmRlcjogMTtcXG4gICAgfVxcblxcbiAgICAucGxheWVyMi1ncmlke1xcbiAgICAgICAgb3JkZXI6IDI7XFxuICAgIH1cXG5cXG4gICAgLnBsYXllcjItbGFiZWx7XFxuICAgICAgICBvcmRlcjogMTtcXG4gICAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdhbWVGbG93LCB0dXJuU3RhdGUsIHNldFBsYXllcjJUeXBlIH0gZnJvbSBcIi4vZ2FtZUZsb3dcIjtcblxuaW1wb3J0IHsgdXBkYXRlSGVhZGVyIH0gZnJvbSBcIi4vcmVuZGVyRE9NXCI7XG5cbi8vIEhvdyBkbyB5b3UgcmVuZGVyIHRoZSBib2FyZD9cblxuLy8gc2VsZWN0IHRoZSBwbGF5ZXIgYm9yZGVyIGdyaWRzIGZpcnN0LlxuXG4vLyB0aGVuIGltcG9ydCBhbmQgbG9vcCB0aHJvdWdoIG93bkdyaWQgYW5kIGhpdG1hcFxuXG4vLyB0aGlzIGZ1bmN0aW9uIGhhcyB0byBiZSByZXVzYWJsZSBmb3IgYm90aCBwbGF5ZXIgMSBhbmQgcGxheWVyIDIuXG5cbi8vIGl0IHdpbGwgY2hlY2sgd2hvc2UgdHVybiBhbmQgdHlwZSBvZiBwbGF5ZXIgdGhlIHBsYXllciBpcyBwbGF5aW5nIHdpdGguXG5cbi8vIGlmIHBsYXlpbmcgYWdhaW50cyBhaSBpdCB3aWxsIG9ubHkgZXZlciByZW5kZXIgdGhlIGFpIHBsYXllcidzIGhpdG1hcC4gbmV2ZXIgcmVuZGVycyBhaSBwbGF5ZXIncyBvbndHcmlkLlxuXG4vLyBpZiBwbGF5aW5nIGFnYWluc3QgYW5vdGhlciBwbGF5ZXIgYWZ0ZXIgYSBwbGF5ZXIgYXR0YWNrcywgYSBmaXhlZCBibGFjayBkaXYgd2lsbCBjb3ZlciB1cCB0aGUgZW50aXJlIHNjcmVlbiBhbmQgc2hvdyBhIHRleHQgb2Ygd2hldGhlciB0aGUgcGxheWVyIGhpdCBvciBtaXNzLCBhbHNvIHNob3dzIHdob3NlIHR1cm4gaXMgbmV4dCB3aXRoIGEgYnV0dG9uIGxhYmVsbGVkIFwic3RhcnQgdHVyblwiLiB3aXRoIHRoZSBuZXh0IHBsYXllcidzIGdyaWRzIGFuZCBoaXRtYXBzIGFscmVhZHQgcmVuZGVyZWQgYmVoaW5kIHRoZSBibGFjayBkaXYuXG5cbi8vIHNoaXBzIGFyZSBkaXNwbGF5ZWQgaW4gZGFyayBncmV5IGNvbG91clxuXG4vLyBoaXRzIGFyZSBkaXNwbGF5ZWQgaW4gcmVkXG5cbi8vIG1pc3NlcyBhcmUgZGlzcGxheWVkIGluIHdoaXRlXG5cblxuXG5cbi8vIGZpcnN0IHlvdSBtdXN0IGdldCBvd25HcmlkIG9mIHBsYXllciBvbmUgYW5kIGRpc3BsYXkgdGhlIGdyaWRzIGNvcnJlY3RseS5cblxuLy8gVGhlbiB5b3UgbXVzdCBnZXQgcGxheWVyIHR3bydzIGhpdG1hcCBhbmQgZGlzcGxheSB0aGUgZ3JpZHMgY29ycmVjdGx5LlxuXG4vLyBhZnRlciB0aGF0IHlvdSBtdXN0IGNyZWF0ZSBhbm90aGVyIGZ1bnRpb24gdG8gZGlzcGxheSBzaGlwcyBjb3JyZWN0bHkuIC1hZGQgY2xhc3NlcyB0byB0aGUgY29ycmVjdCBncmlkcy5cblxuLy8gVGhlbiB5b3UgY3JlYXRlIGFub3RoZXIgZnVuY3Rpb24gdG8gcmVuZGVyIGhpdG1hcCBjb3JyZWN0bHkuXG5cbi8vIEhpdG1hcCB3aWxsIGJlIGRpc3BsYXllZCBvbiBwbGF5ZXIgb25lIGdyaWQgYW5kIHBsYXllciB0d28gZ3JpZC5cblxuLy8gQWRkIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgZ3JpZHMuIChET05FKVxuXG5cbi8vIGFkZCBjb29yZGluYXRlcyBhcyBhbiBvYmplY3QgXCJjb25zdCBjb29yZHMgPSB7eDowLHk6MH1cIiBpbnNpZGUgYWRkZXZlbnRsaXN0ZW5lciBjYWxsYmFjayBmdW5jdGlvbj8gdXNlIGNvbHVtbkluZGV4IGFubmQgcm93SW5kZXg/IChET05FKVxuXG5cblxuZnVuY3Rpb24gZ2FtZVN0YXJ0ICgpIHtcbiAgICBjb25zdCBzdGFydE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtbWVudScpO1xuICAgIGNvbnN0IHBsYXllclR5cGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItdHlwZS10aXRsZScpO1xuICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWJ1dHRvbicpO1xuICAgIGNvbnN0IGNvbXB1dGVyT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLW9wdGlvbicpO1xuICAgIGNvbnN0IHJlYWxQbGF5ZXJPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVhbC1wbGF5ZXItb3B0aW9uJyk7XG4gICAgXG4gICAgXG4gICAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgc3RhcnRNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctc3RhcnQtbWVudScpO1xuXG4gICAgICAgIGdhbWVGbG93KCk7XG5cbiAgICB9KTtcblxuICAgIGNvbXB1dGVyT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgcGxheWVyVHlwZVRpdGxlLnRleHRDb250ZW50ID0gXCJQbGF5IGFnYWluc3Q6IENvbXB1dGVyXCJcblxuICAgICAgICBzZXRQbGF5ZXIyVHlwZShcImNvbXB1dGVyXCIpO1xuICAgIH0pXG5cbiAgICByZWFsUGxheWVyT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgcGxheWVyVHlwZVRpdGxlLnRleHRDb250ZW50ID0gXCJQbGF5IGFnYWluc3Q6IFlvdXIgRnJpZW5kXCJcblxuICAgICAgICBzZXRQbGF5ZXIyVHlwZShcInJlYWxcIik7XG4gICAgfSlcblxuXG59XG5cblxuLy8gcmVmYWN0b3IgaWYgbmVjZXNzYXJ5XG5mdW5jdGlvbiBwb3B1bGF0ZVBsYXllcjFCb2FyZCAocGxheWVyMSl7XG4gICAgY29uc3QgcGxheWVyMUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMS1ncmlkJyk7XG5cblxuICAgIFxuICAgIGZ1bmN0aW9uIGRpc3BsYXlHcmlkcygpIHtcbiAgICAgICAgY3JlYXRlR3JpZHMocGxheWVyMSwgcGxheWVyMUdyaWQsIFwicGxheWVyMVwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVHcmlkcygpIHtcbiAgICAgICAgd2hpbGUgKHBsYXllcjFHcmlkLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBsYXllcjFHcmlkLmZpcnN0Q2hpbGQucmVtb3ZlKClcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc2hvd1NoaXBzKCkge1xuICAgICAgICBkaXNwbGF5U2hpcHMobnVsbCxwbGF5ZXIxLCBwbGF5ZXIxR3JpZCk7XG4gICAgfVxuICAgIFxuXG5cblxuICAgIGZ1bmN0aW9uIHNob3dIaXRNYXAoKSB7XG4gICAgICAgIGRpc3BsYXlIaXRNYXAocGxheWVyMSwgcGxheWVyMUdyaWQpO1xuICAgIH1cblxuICAgXG5cbiAgIFxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXNwbGF5R3JpZHMsXG4gICAgICAgIGRlbGV0ZUdyaWRzLFxuICAgICAgICBzaG93U2hpcHMsXG4gICAgICAgIHNob3dIaXRNYXAsXG4gICAgICAgIHBsYXllcjFcbiAgICB9XG5cbn1cblxuLy8gTWVyZ2UgaXQgaW50byBvbmUgZnVuY3Rpb24gLSBhYm92ZVxuZnVuY3Rpb24gcG9wdWxhdGVQbGF5ZXIyQm9hcmQgKHBsYXllcjIpIHtcblxuICAgIGNvbnN0IHBsYXllcjJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjItZ3JpZCcpO1xuXG4gICAgZnVuY3Rpb24gZGlzcGxheUdyaWRzICgpIHtcbiAgICAgICAgY3JlYXRlR3JpZHMocGxheWVyMiwgcGxheWVyMkdyaWQsIFwicGxheWVyMlwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVHcmlkcygpIHtcbiAgICAgICAgd2hpbGUgKHBsYXllcjJHcmlkLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBsYXllcjJHcmlkLmZpcnN0Q2hpbGQucmVtb3ZlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dTaGlwcyAoKSB7XG4gICAgICAgIGRpc3BsYXlTaGlwcyhudWxsLHBsYXllcjIsIHBsYXllcjJHcmlkKTtcbiAgICB9XG4gICAgXG5cbiAgICBmdW5jdGlvbiBzaG93SGl0TWFwICgpIHtcbiAgICAgICAgZGlzcGxheUhpdE1hcChwbGF5ZXIyLCBwbGF5ZXIyR3JpZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheUdyaWRzLFxuICAgICAgICBkZWxldGVHcmlkcyxcbiAgICAgICAgc2hvd1NoaXBzLFxuICAgICAgICBzaG93SGl0TWFwLFxuICAgICAgICBwbGF5ZXIyXG4gICAgfVxuICAgIFxuICAgIFxufVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlR3JpZHMgKHBsYXllciwgcGxheWVyRE9NR3JpZCwgaXNQbGF5ZXIpIHtcbiAgICAvLyBwdXQgdGhlIGdyaWQgbWFraW5nIGxvb3AgYmVsb3cgaW5zaWRlIGhlcmVcblxuICAgIGZvciAobGV0IGNvbHVtbkluZGV4ID0gMDsgY29sdW1uSW5kZXggPCBwbGF5ZXIuYm9hcmQub3duR3JpZC5sZW5ndGg7IGNvbHVtbkluZGV4KyspIHtcbiAgICAgICAgY29uc3QgY29sdW1uID0gcGxheWVyLmJvYXJkLm93bkdyaWRbY29sdW1uSW5kZXhdO1xuXG5cbiAgICAgICAgY29uc3QgZ3JpZENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBncmlkQ29sdW1uLmNsYXNzTGlzdC5hZGQoXCJncmlkLWNvbHVtblwiKTtcbiAgICAgICAgLy8gZ3JpZENvbHVtbi50ZXh0Q29udGVudCA9IGNvbHVtbkluZGV4XG4gICAgICAgIHBsYXllckRPTUdyaWQuYXBwZW5kKGdyaWRDb2x1bW4pXG4gICAgICAgIFxuXG5cbiAgICAgICAgZm9yIChsZXQgcm93SW5kZXggPSA5OyByb3dJbmRleCA+PSAwOyByb3dJbmRleC0tKSB7XG4gICAgICAgICAgICAvLyBjb25zdCBlbGVtZW50ID0gY29sdW1uW3Jvd0luZGV4XTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVEVTVFwiKVxuICAgICAgICAgICAgY29uc3QgZ3JpZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZ3JpZFJvdy5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1yb3dcIik7XG4gICAgICAgICAgICAvLyBncmlkUm93LnRleHRDb250ZW50ID0gcm93SW5kZXg7XG4gICAgICAgICAgICBncmlkQ29sdW1uLmFwcGVuZChncmlkUm93KTtcblxuICAgICAgICAgICBjbGlja0JvYXJkKHBsYXllciwgZ3JpZFJvdywgY29sdW1uSW5kZXgsIHJvd0luZGV4LCBpc1BsYXllcilcbiAgICAgICAgfVxuXG4gICAgICAgXG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuZnVuY3Rpb24gZGlzcGxheVNoaXBzKHRvRGlzcGxheSwgcGxheWVyLCBwbGF5ZXJET01HcmlkKSB7XG4gICAgICAgIC8vIGlmIHBsYXllciAyIHR1cm4gZG9uJ3QgZGlzcGxheSBzaGlwc1xuXG4gICAgICAgIC8vIHJlbW92ZSBsYXRlclxuICAgICAgICB0b0Rpc3BsYXkgPSB0cnVlXG5cbiAgICAgICAgaWYgKHRvRGlzcGxheSkge1xuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBvd25HcmlkIGdyaWRzIGFycmF5IGFuZCBpZiBub3QgZW1wdHksIGFzc2lnbiBhIGdyZXkgY2xhc3MgdG8gdGhhdCBncmlkLiBcblxuICAgICAgICAgICAgY29uc3QgcGxheWVyQ29sdW1ucyA9IHBsYXllckRPTUdyaWQuY2hpbGROb2Rlc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgcGxheWVyLmJvYXJkLm93bkdyaWQubGVuZ3RoOyBjb2xJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93cyA9IHBsYXllci5ib2FyZC5vd25HcmlkW2NvbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIC8vIEJvYXJkIHJlbmRlcnMgdXBzaWRlIGRvd24gaWYgSSBkb24ndCB1c2UgXCJub2RlUm93SXRlcmF0b3JcIi5cbiAgICAgICAgICAgICAgICBsZXQgbm9kZXNSb3dJdGVyYXRvciA9IDBcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd05vZGVzID0gcGxheWVyQ29sdW1uc1tjb2xJbmRleF0uY2hpbGROb2RlcztcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJvd05vZGVzKVxuXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcmV2ZXJzZWRSb3dOb2RlID0gcm93Tm9kZXMucmV2ZXJzZSgpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcm93SW5kZXggPSA5OyByb3dJbmRleCA+PSAwOyByb3dJbmRleC0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJvd3Nbcm93SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBpZiAocm93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0cnVlKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dOb2Rlc1tub2Rlc1Jvd0l0ZXJhdG9yXS5jbGFzc0xpc3QuYWRkKCdzaGlwLWxvY2F0ZWQnKVxuXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbm9kZXNSb3dJdGVyYXRvcisrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbn1cblxuXG5cblxuZnVuY3Rpb24gZGlzcGxheUhpdE1hcChwbGF5ZXIscGxheWVyRE9NR3JpZCkge1xuXG4gICAgLy8gcGxheWVyLmJvYXJkLmhpdE1hcFxuXG4gICAgLy8gZGlzcGxheSBoaXRtYXAgYWZ0ZXIgZGlzcGxheSBzaGlwIHJ1bnMsIFRoaXMgc2hvdWxkIG92ZXJyaWRlIHRoZSBjbGFzc2VzIG9mIGRpc3BsYXlTaGlwc1xuXG4gICAgbGV0IHRvRGlzcGxheSA9IHRydWVcblxuICAgIGlmICh0b0Rpc3BsYXkpIHtcbiAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBvd25HcmlkIGdyaWRzIGFycmF5IGFuZCBpZiBub3QgZW1wdHksIGFzc2lnbiBhIGdyZXkgY2xhc3MgdG8gdGhhdCBncmlkLiBcblxuICAgICAgICBjb25zdCBwbGF5ZXJDb2x1bW5zID0gcGxheWVyRE9NR3JpZC5jaGlsZE5vZGVzXG5cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIuYm9hcmQuaGl0TWFwKVxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IHBsYXllci5ib2FyZC5oaXRNYXAubGVuZ3RoOyBjb2xJbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3dzID0gcGxheWVyLmJvYXJkLmhpdE1hcFtjb2xJbmRleF07XG5cbiAgICAgICAgICAgIC8vIEJvYXJkIHJlbmRlcnMgdXBzaWRlIGRvd24gaWYgSSBkb24ndCB1c2UgXCJub2RlUm93SXRlcmF0b3JcIi5cbiAgICAgICAgICAgIGxldCBub2Rlc1Jvd0l0ZXJhdG9yID0gMFxuXG4gICAgICAgICAgICBjb25zdCByb3dOb2RlcyA9IHBsYXllckNvbHVtbnNbY29sSW5kZXhdLmNoaWxkTm9kZXM7XG5cblxuICAgICAgICAgICAgZm9yIChsZXQgcm93SW5kZXggPSA5OyByb3dJbmRleCA+PSAwOyByb3dJbmRleC0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gcm93c1tyb3dJbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA9PT0gXCJIaXRcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0cnVlKVxuXG4gICAgICAgICAgICAgICAgICAgIHJvd05vZGVzW25vZGVzUm93SXRlcmF0b3JdLmNsYXNzTGlzdC5hZGQoJ3NoaXAtaXMtaGl0JylcblxuXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICBpZiAocm93ID09PSBcIk1pc3NcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0cnVlKVxuXG4gICAgICAgICAgICAgICAgICAgIHJvd05vZGVzW25vZGVzUm93SXRlcmF0b3JdLmNsYXNzTGlzdC5hZGQoJ2F0dGFjay1taXNzZWQnKVxuXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbm9kZXNSb3dJdGVyYXRvcisrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG5cblxuXG5cblxuXG5cblxuZnVuY3Rpb24gY2xpY2tCb2FyZCAocGxheWVyLCBncmlkLCBjb2x1bW5JbmRleCwgcm93SW5kZXgsIGlzUGxheWVyKSB7XG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBwYXNzRGV2aWNlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhc3MtZGV2aWNlJyk7XG5cbiAgICAgICAgY29uc3QgcGFzc0RldmljZU1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzLWRldmljZS1tZXNzYWdlJyk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFBsYXllclR1cm4gPSB0dXJuU3RhdGUuZ2V0VHVybigpO1xuXG4gICAgICAgIGNvbnN0IGdhbWVJc092ZXIgPSB0dXJuU3RhdGUuaXNHYW1lT3ZlcigpO1xuXG4gICAgICAgIGlmIChnYW1lSXNPdmVyKSB7XG5cblxuICAgICAgICB9XG5cblxuXG4gICAgICAgIFxuICAgICAgICBpZiAoaXNQbGF5ZXIgPT09IGN1cnJlbnRQbGF5ZXJUdXJuKSB7XG5cblxuICAgICAgICAgICAgdXBkYXRlSGVhZGVyKFwiTm90IHlvdXIgb3duIGJvYXJkIVwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCB4ID0gY29sdW1uSW5kZXhcbiAgICAgICAgY29uc3QgeSA9IHJvd0luZGV4O1xuICAgICAgICBjb25zb2xlLmxvZyh4LHkpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllci5ib2FyZC5oaXRNYXBbeF1beV0pXG5cbiAgICAgICAgaWYgKHBsYXllci5ib2FyZC5oaXRNYXBbeF1beV0gPT09IFwiTWlzc1wiIHx8IHBsYXllci5ib2FyZC5oaXRNYXBbeF1beV0gPT09IFwiSGl0XCIpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiR3JpZCBhbHJlYWR5IGNob3NlblwiKVxuXG4gICAgICAgICAgICB1cGRhdGVIZWFkZXIoXCJHcmlkIGFscmVhZHkgY2hvc2VuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyBSZW1vdmUgbGF0ZXIgaXMgcGFzcyBkZXZpY2UgbWVzc2FnZSB3b3JrcyBjb3JyZWN0bHkuXG4gICAgICAgIC8vIGlmIChwbGF5ZXIudHlwZSA9PT0gXCJyZWFsXCIpIHtcbiAgICAgICAgLy8gICAgIHBhc3NEZXZpY2VEaXYuY2xhc3NMaXN0LmFkZCgnc2hvdy1wYXNzLWRldmljZScpO1xuXG4gICAgICAgIC8vICAgICBpZiAoY3VycmVudFBsYXllclR1cm4gPT09IFwicGxheWVyMVwiKSB7XG4gICAgICAgIC8vICAgICAgICAgcGFzc0RldmljZU1zZy50ZXh0Q29udGVudCA9IFwiUGFzcyB0aGUgZGV2aWNlIHRvIFBsYXllciAyXCI7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICAvLyAgICAgaWYgKGN1cnJlbnRQbGF5ZXJUdXJuID09PSBcInBsYXllcjJcIikge1xuICAgICAgICAvLyAgICAgICAgIHBhc3NEZXZpY2VNc2cudGV4dENvbnRlbnQgPSBcIlBhc3MgdGhlIGRldmljZSB0byBQbGF5ZXIgMVwiO1xuICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKHgseSk7XG5cbiAgICAgICAgY29uc3QgbGV0dGVyQXJyYXlYID0gW1wiQVwiLFwiQlwiLFwiQ1wiLFwiRFwiLFwiRVwiLFwiRlwiLFwiR1wiLFwiSFwiLFwiSVwiLFwiSlwiXTtcblxuICAgICAgICBjb25zdCBudW1iZXJBcnJheVkgPSBbMTAsOSw4LDcsNiw1LDQsMywyLDFdXG4gICAgICAgIGlmIChjdXJyZW50UGxheWVyVHVybiA9PT0gXCJwbGF5ZXIxXCIpIHtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyBkaXYgZm9yIHBhc3MgdGhlIGRldmljZSBtc2c/XG4gICAgICAgICAgICBwYXNzRGV2aWNlTXNnLnRleHRDb250ZW50ID0gYEl0J3MgYSAke3Jlc3VsdC50b1VwcGVyQ2FzZSgpfSEgXFxyXFxuIFBhc3MgdGhlIGRldmljZSB0byBQbGF5ZXIgMmA7XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdXBkYXRlSGVhZGVyKGBQbGF5ZXIgMSBjaG9zZSAke2xldHRlckFycmF5WFt4XX0ke251bWJlckFycmF5WVt5XX0gYW5kIGl0J3MgYSAke3Jlc3VsdC50b1VwcGVyQ2FzZSgpfWApO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFBsYXllclR1cm4gPT09IFwicGxheWVyMlwiKSB7XG5cbiAgICAgICAgICAgIHBhc3NEZXZpY2VNc2cudGV4dENvbnRlbnQgPSBgSXQncyBhICR7cmVzdWx0LnRvVXBwZXJDYXNlKCl9ISBcXHJcXG4gUGFzcyB0aGUgZGV2aWNlIHRvIFBsYXllciAxYDtcblxuXG4gICAgICAgICAgICB1cGRhdGVIZWFkZXIoYFBsYXllciAyIGNob3NlICR7bGV0dGVyQXJyYXlYW3hdfSR7bnVtYmVyQXJyYXlZW3ldfSBhbmQgaXQncyBhICR7cmVzdWx0LnRvVXBwZXJDYXNlKCl9YCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbGF5ZXIudHlwZSA9PT0gXCJyZWFsXCIpIHtcbiAgICAgICAgICAgIHBhc3NEZXZpY2VEaXYuY2xhc3NMaXN0LmFkZCgnc2hvdy1wYXNzLWRldmljZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgICAgIHR1cm5TdGF0ZS51cGRhdGVUdXJuKCk7XG5cbiAgICAgICAgaWYgKHBsYXllci5ib2FyZC5vd25HcmlkW3hdW3ldKSB7XG4gIFxuICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdzaGlwLWlzLWhpdCcpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIuYm9hcmQub3duR3JpZFt4XVt5XS5nZXRIaXRzKCkpXG4gICAgIFxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2F0dGFjay1taXNzZWQnKTtcblxuICAgICAgICBcbiAgICB9KVxufVxuXG5leHBvcnR7XG4gICAgcG9wdWxhdGVQbGF5ZXIxQm9hcmQsXG4gICAgcG9wdWxhdGVQbGF5ZXIyQm9hcmQsXG4gICAgZ2FtZVN0YXJ0XG59IiwiaW1wb3J0IHsgY3JlYXRlUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyRmFjdG9yeVwiO1xuaW1wb3J0IHsgY3JlYXRlU2hpcCB9IGZyb20gXCIuL3NoaXBGYWN0b3J5XCI7XG5pbXBvcnQgeyBwb3B1bGF0ZVBsYXllcjFCb2FyZCwgcG9wdWxhdGVQbGF5ZXIyQm9hcmQgfSBmcm9tIFwiLi9ET01BY3Rpb25cIjtcbmltcG9ydCB7IHVwZGF0ZUhlYWRlciB9IGZyb20gXCIuL3JlbmRlckRPTVwiO1xuXG4vLyBUaGVzZSBwbGF5ZXJCb2FyZHMgYXJlIHNpZGUgZWZmZWN0cyAoZXh0ZXJuYWwgc3RhdGUpIC8gKGRlcGVuZGVuY2llcykuXG5sZXQgcGxheWVyMUJvYXJkOyBcbmxldCBwbGF5ZXIyQm9hcmQ7XG5cbmxldCBwbGF5ZXIyVHlwZSA9IFwiY29tcHV0ZXJcIlxuXG5mdW5jdGlvbiBzZXRQbGF5ZXIyVHlwZSAodHlwZSl7XG4gICAgcGxheWVyMlR5cGUgPSB0eXBlXG59XG5mdW5jdGlvbiBnYW1lRmxvdyAoKSB7XG5cbiAgICBjb25zdCBwbGF5ZXIxID0gY3JlYXRlUGxheWVyKFwicmVhbFwiKTtcbiAgICBjb25zdCBwbGF5ZXIyID0gY3JlYXRlUGxheWVyKHBsYXllcjJUeXBlKTtcbiAgICAvLyBjb25zdCBwbGF5ZXIyID0gY3JlYXRlUGxheWVyKFwicmVhbFwiKTsgIFxuXG4gICAgLy8gcGxhY2UgcGxheWVyMSBzaGlwc1xuICAgIC8vIFR5cGVzIG9mIHNoaXBcbiAgICAvLyAtIENhcnJpZXIsIHNpemUgNVxuICAgIC8vIC0gQmF0dGxlc2hpcCwgc2l6ZSA0XG4gICAgLy8gLSBEZXN0cm95ZXIsIHNpemUgM1xuICAgIC8vIC0gU3VibWFyaW5lLCBzaXplIDNcbiAgICAvLyAtIFBhdHJvbCBCb2F0LCBzaXplIDJcblxuICAgIGNvbnN0IHBsYXllcjFDYXJyaWVyID0gY3JlYXRlU2hpcCg1KTtcbiAgICBjb25zdCBwbGF5ZXIxQmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoNCk7XG4gICAgY29uc3QgcGxheWVyMURlc3Ryb3llciA9IGNyZWF0ZVNoaXAoMyk7XG4gICAgY29uc3QgcGxheWVyMVN1Ym1hcmluZSA9IGNyZWF0ZVNoaXAoMyk7XG4gICAgY29uc3QgcGxheWVyMVBhdHJvbEJvYXQgPSBjcmVhdGVTaGlwKDIpXG5cblxuICAgIGNvbnN0IHBsYXllcjJDYXJyaWVyID0gY3JlYXRlU2hpcCg1KTtcbiAgICBjb25zdCBwbGF5ZXIyQmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoNCk7XG4gICAgY29uc3QgcGxheWVyMkRlc3Ryb3llciA9IGNyZWF0ZVNoaXAoMyk7XG4gICAgY29uc3QgcGxheWVyMlN1Ym1hcmluZSA9IGNyZWF0ZVNoaXAoMyk7XG4gICAgY29uc3QgcGxheWVyMlBhdHJvbEJvYXQgPSBjcmVhdGVTaGlwKDIpO1xuXG5cblxuICAgIC8vIGNvbnN0IGNhcnJpZXIgPSBjcmVhdGVTaGlwKDUpO1xuICAgIC8vIGNvbnN0IGJhdHRsZXNoaXAgPSBjcmVhdGVTaGlwKDQpO1xuICAgIC8vIGNvbnN0IGRlc3Ryb3llciA9IGNyZWF0ZVNoaXAoMyk7XG4gICAgLy8gY29uc3Qgc3VibWFyaW5lID0gY3JlYXRlU2hpcCgzKTtcbiAgICAvLyBjb25zdCBwYXRyb2xCb2F0ID0gY3JlYXRlU2hpcCgyKVxuXG4gICAgY29uc3QgYWxsUGxheWVyMVNoaXBzID0gW3BsYXllcjFDYXJyaWVyLCBwbGF5ZXIxQmF0dGxlc2hpcCwgcGxheWVyMURlc3Ryb3llciwgcGxheWVyMVN1Ym1hcmluZSwgcGxheWVyMVBhdHJvbEJvYXRdO1xuXG4gICAgY29uc3QgYWxsUGxheWVyMlNoaXBzID0gW3BsYXllcjJDYXJyaWVyLCBwbGF5ZXIyQmF0dGxlc2hpcCwgcGxheWVyMkRlc3Ryb3llciwgcGxheWVyMlN1Ym1hcmluZSwgcGxheWVyMlBhdHJvbEJvYXRdXG4gICAgLy8gXG4gICAgLy8gXG4gICAgLy8gXG4gICAgLy8gXG4gICAgLy8gXG4gICAgLy8gUmVtb3ZlIGFsbCBvZiB0aGUgYmVsb3cgYW5kIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgcmFuZG9tbHkgcGxhY2VzIHNoaXBzLiBJdCBpcyBtdWNoIG1vcmUgcmV1c2FibGUgKGJlY2F1c2UgeW91IGNhbiBzdGlsbCB1c2UgaXQgbGF0ZXIgd2l0aCBhIHJhbmRvbWl6ZSBidXR0b24gd2hlbiB5b3UgYWRkIGRyYWcgYW5kIGRyb3AgZmVhdHVyZSkgYW5kIGVhc2llciB0byBpbXBsZW1lbnQsIGp1c3QgdXNlIE1hdGgucmFuZG9tIGFuZCBpZiBcIlBsYWNlbWVudF9mYWlsZWRcIiwgcnVuIHRoZSBwbGFjZVNoaXAgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaGlwIGFnYWluLiAoRG9uZSlcblxuICAgIC8vIEFsc28gdXNlIE1hdGgucmFuZG9tIGZ1bmN0aW9uIHRvIGNob29zZSBwb3NpdGlvbnMgMCB0byAzIGJlY2F1c2UgNCBvcHRpb25zLiBQdXQgdGhlIG9wdGlvbnMgaW4gYW4gYXJyYXkuIChEb25lKVxuXG4gICAgLy8gQ2hhbmdlIHRoZSBjb29yZGluYXRlcyBkaXNwbGF5IHRvIHRoZSBkZWZhdWx0IEJhdHRsZXNoaXAgc3R5bGUuIExldHRlciBhbmQgTnVtYmVyIGUuZzogQTEsQjksRTcsZXRjLiAoRG9uZSlcblxuXG4gICAgLy8gQ3JlYXRlIGEgc3RhcnQgbWVudSB0aGF0IGFsbG93cyB0aGUgcGxheWVyIHRvIGNob29zZSB3aGV0aGVyIHRvIHBsYXkgYWdhaW5zdCBDb21wdXRlciBvciBhIHJlYWwgcGxheWVyLiAoRG9uZSlcblxuICAgIC8vIENyZWF0ZSBwYXNzIGRldmljZSBzY3JlZW4gZm9yIDIgcGxheWVyIG9wdGlvbi4gVmVyaWZ5IGlmIHRoaXMgaXMgZG9uZS4gU2VlbXMgdG8gd29yaywgY2hlY2sgd2hhdCBoYXBwZW5zIHRvIHBhc3MgbWVudSBpZiBnYW1lb3Zlci4gKERvbmUpXG5cbiAgICAvLyBJbmNsdWRlIGEgZ2FtZSByZXN0YXJ0IGJ1dHRvbiB0aGF0IGNsZWFycyBhbGwgc3RhdGUgYW5kIHJlY3JlYXRlcyB0aGUgZW50aXJlIGJvYXJkIHdpdGggbmV3IHJhbmRvbSBzaGlwIHBsYWNlbWVudHMuIChDcmVhdGUgYSBmdW5jdGlvbiBpbiB0dXJuc3RhdGUgdGhhdCByZXNldHMgcGxheWVyIHR1cm4gdG8gcGxheWVyIG9uZSBhbmQgY2FsbCBpdCB3aGVuIHRoZSByZXN0YXJ0IGJ1dHRvbiBpcyBjbGlja2VkKS5cblxuICAgIC8vIGNyZWF0ZSB0ZXN0cyBmb3IgaGl0TWFwIG9uZSBmb3IgaGl0IGFuZCBvbmUgZm9yIG1pc3MuIChIYXZlbid0IGNyZWF0ZWQgdGhpcyB5ZXQgLSBlbnN1cmVzIHlvdSBjYW4gcmVmYWN0b3Igc2FmZWx5IGxhdGVyIG9uKS5cblxuICAgIC8vIENoZWNrIGFsbCBET00gbW9kdWxlcyBhcyB0byB3aGV0aGVyIG9yIG5vdCB5b3UgbmVlZCB0byB3cml0ZSB0ZXN0cyBmb3IgYW55IG9mIHRoZSBmdW5jdGlvbnMuIChBbnl0aGluZyB0aGF0IHJ1bnMgYmVjYXVzZSBvZiBET00gZXZlbnQgc2hvdWxkIG5vdCBiZSB0ZXN0ZWQsIG9ubHkgcHVyZSBsb2dpYyBzaG91bGQgYmUgdGVzdGVkKVxuXG5cbiAgICAvLyBMYWJlbCB0aGUgZ3JpZHMgd2l0aCBsZXR0ZXJzIGFuZCBudW1iZXJzPyBVc2UgZ3JpZHMuXG5cblxuICAgIFxuICAgIGNvbnNvbGUubG9nKHBsYXllcjEuYm9hcmQucGxhY2VTaGlwKHt4OjkseTo5fSwgXCJub3J0aFwiLCBwbGF5ZXIxQ2FycmllcikpO1xuICAgIHBsYXllcjEuYm9hcmQucGxhY2VTaGlwKHt4OjAseTowfSwgXCJlYXN0XCIsIHBsYXllcjFCYXR0bGVzaGlwKTtcbiAgICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcCh7eDo1LHk6NX0sIFwiZWFzdFwiLCBwbGF5ZXIxRGVzdHJveWVyKTtcbiAgICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcCh7eDoyLHk6Mn0sIFwiZWFzdFwiLCBwbGF5ZXIxU3VibWFyaW5lKTtcbiAgICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcCh7eDo5LHk6MH0sIFwic291dGhcIiwgcGxheWVyMVBhdHJvbEJvYXQpO1xuXG5cblxuICAgIGNvbnNvbGUubG9nKHBsYXllcjIuYm9hcmQucGxhY2VTaGlwKHt4OjkseTo5fSwgXCJub3J0aFwiLCBwbGF5ZXIyQ2FycmllcikpO1xuICAgIHBsYXllcjIuYm9hcmQucGxhY2VTaGlwKHt4OjAseTowfSwgXCJlYXN0XCIsIHBsYXllcjJCYXR0bGVzaGlwKTtcbiAgICBwbGF5ZXIyLmJvYXJkLnBsYWNlU2hpcCh7eDo1LHk6NX0sIFwiZWFzdFwiLCBwbGF5ZXIyRGVzdHJveWVyKTtcbiAgICBwbGF5ZXIyLmJvYXJkLnBsYWNlU2hpcCh7eDoyLHk6Mn0sIFwiZWFzdFwiLCBwbGF5ZXIyU3VibWFyaW5lKTtcbiAgICBwbGF5ZXIyLmJvYXJkLnBsYWNlU2hpcCh7eDo5LHk6MH0sIFwic291dGhcIiwgcGxheWVyMlBhdHJvbEJvYXQpO1xuXG4gICAgZnVuY3Rpb24gcGxhY2VBbGxTaGlwcyAocGxheWVyLCBzaGlwc0FycmF5KXtcblxuICAgICAgICBcbiAgICAgICAgc2hpcHNBcnJheS5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcGxheWVyLmJvYXJkLnBsYWNlU2hpcChjcmVhdGVSYW5kb21Db29yZHMoKSwgY2hvb3NlRGlyZWN0aW9uKCksIHNoaXApXG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IFwiUGxhY2VtZW50X2ZhaWxlZFwiKSB7XG5cblxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcGxhY2VBbGxTaGlwcyhwbGF5ZXIsIFtzaGlwXSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gXCJQbGFjZW1lbnRfc3VjY2Vzc1wiKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFsbCBzaGlwcyBzdWNjZXNzZnVsbHkgcGxhY2VkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVSYW5kb21Db29yZHMgKCkge1xuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcblxuICAgICAgICByZXR1cm57XG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjaG9vc2VEaXJlY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbkFycmF5ID0gW1wibm9ydGhcIiwgXCJzb3V0aFwiLCBcImVhc3RcIiwgXCJ3ZXN0XCJdO1xuXG4gICAgICAgIC8vIGZyb20gMCB0byAzXG4gICAgICAgIGNvbnN0IGNob29zZVJhbmRvbURpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0KTtcblxuICAgICAgICBpZiAoY2hvb3NlUmFuZG9tRGlyZWN0aW9uID4gMyB8fCBjaG9vc2VSYW5kb21EaXJlY3Rpb24gPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyhcIkNob29zZSBSYW5kb20gRGlyZWN0aW9uIGlzIG5vdCB3b3JraW5nIGNvcnJlY3RseVwiKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbkFycmF5W2Nob29zZVJhbmRvbURpcmVjdGlvbl1cblxuICAgIH1cblxuXG4gICAgLy8gcGxhY2VBbGxTaGlwcyhwbGF5ZXIxLCBhbGxQbGF5ZXIxU2hpcHMpO1xuICAgIC8vIHBsYWNlQWxsU2hpcHMocGxheWVyMiwgYWxsUGxheWVyMlNoaXBzKVxuXG5cblxuXG4gICAgLy8gZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7XG5cbiAgICAgICAgXG4gICAgLy8gICAgIHBsYXllcjEuYm9hcmQucmVjZWl2ZUF0dGFjayg5LGluZGV4KVxuICAgIC8vICAgICBwbGF5ZXIxLmJvYXJkLnJlY2VpdmVBdHRhY2soaW5kZXgsaW5kZXgpXG4gICAgLy8gfVxuXG5cbiAgICAvLyBwbGF5ZXIyLmJvYXJkLnBsYWNlU2hpcCh7eDo5LHk6OX0sIFwid2VzdFwiLCBwbGF5ZXIyQ2Fycmllcik7XG4gICAgLy8gcGxheWVyMi5ib2FyZC5wbGFjZVNoaXAoe3g6MCx5OjB9LCBcImVhc3RcIiwgcGxheWVyMkJhdHRsZXNoaXApO1xuICAgIC8vIHBsYXllcjIuYm9hcmQucGxhY2VTaGlwKHt4OjUseTo1fSwgXCJlYXN0XCIsIHBsYXllcjJEZXN0cm95ZXIpO1xuICAgIC8vIHBsYXllcjIuYm9hcmQucGxhY2VTaGlwKHt4OjIseToyfSwgXCJlYXN0XCIsIHBsYXllcjJTdWJtYXJpbmUpO1xuICAgIC8vIHBsYXllcjIuYm9hcmQucGxhY2VTaGlwKHt4OjkseTo1fSwgXCJzb3V0aFwiLCBwbGF5ZXIyUGF0cm9sQm9hdCk7XG5cblxuICAgIC8vIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMDsgaW5kZXgrKykge1xuXG4gICAgLy8gICAgIHBsYXllcjIuYm9hcmQucmVjZWl2ZUF0dGFjayhpbmRleCxpbmRleClcbiAgICAvLyB9XG5cblxuICAgIC8vIEkgcHJvYmFibHkgY2FuIHJlbW92ZSBwbGF5ZXIudHlwZSBhbmQgaXQgbWlnaHQgc3RpbGwgd29yayBjb3JyZWN0bHkuXG4gICAgcGxheWVyMUJvYXJkID0gcG9wdWxhdGVQbGF5ZXIxQm9hcmQocGxheWVyMSk7XG4gICAgcGxheWVyMkJvYXJkID0gcG9wdWxhdGVQbGF5ZXIyQm9hcmQocGxheWVyMik7XG5cbiAgIFxuXG5cbiAgICAvLyBUaGUgb25lcyBiZWxvdyBzdGF5IGFzIGl0IGlzLlxuXG4gICAgcGxheWVyMUJvYXJkLmRpc3BsYXlHcmlkcygpXG5cbiAgICBwbGF5ZXIxQm9hcmQuc2hvd1NoaXBzKClcblxuICAgIFxuXG5cbiAgICBwbGF5ZXIyQm9hcmQuZGlzcGxheUdyaWRzKClcblxuICAgIHBsYXllcjJCb2FyZC5zaG93SGl0TWFwKClcblxuIFxuXG5cblxufVxuXG5cblxuXG5cblxuY29uc3QgdHVyblN0YXRlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgcGxheWVyVHVybiA9IFwicGxheWVyMVwiO1xuXG4gICAgXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUdXJuKCkge1xuXG4gICAgICAgIC8vIFByZXZlbnRzIGNvbXB1dGVyIGZyb20gcGxheWluZ1xuICAgICAgICBpZiAoaXNHYW1lT3ZlcigpKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhc3NEZXZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzcy1kZXZpY2UnKTtcbiAgICAgICAgICAgIHBhc3NEZXZpY2UuY2xhc3NMaXN0LmFkZCgnc2hvdy1wYXNzLWRldmljZScpO1xuXG4gICAgICAgICAgICBjb25zdCBnYW1lT3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW92ZXInKTtcbiAgICAgICAgICAgIGdhbWVPdmVyLmNsYXNzTGlzdC5hZGQoJ2VuYWJsZS1nYW1lLW92ZXInKTtcbiAgICAgICAgICAgIC8vIE1ha2UgcGxheWVyRGl2IG5vdCBjbGlja2FibGVcblxuICAgICAgICAgICAgcGxheWVyMUJvYXJkLmRlbGV0ZUdyaWRzKCk7XG4gICAgICAgICAgICBwbGF5ZXIxQm9hcmQuZGlzcGxheUdyaWRzKCk7XG4gICAgICAgICAgICBwbGF5ZXIxQm9hcmQuc2hvd1NoaXBzKCk7XG4gICAgICAgICAgICBwbGF5ZXIxQm9hcmQuc2hvd0hpdE1hcCgpO1xuXG4gICAgICAgICAgICBwbGF5ZXIyQm9hcmQuZGVsZXRlR3JpZHMoKTtcbiAgICAgICAgICAgIHBsYXllcjJCb2FyZC5kaXNwbGF5R3JpZHMoKTtcbiAgICAgICAgICAgIHBsYXllcjJCb2FyZC5zaG93U2hpcHMoKTtcbiAgICAgICAgICAgIHBsYXllcjJCb2FyZC5zaG93SGl0TWFwKCk7XG5cblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAocGxheWVyVHVybiA9PT0gXCJwbGF5ZXIxXCIpIHtcbiAgICAgICAgICAgIHBsYXllclR1cm4gPSBcInBsYXllcjJcIlxuXG4gICAgICAgICAgICBwbGF5ZXIxQm9hcmQuZGVsZXRlR3JpZHMoKTtcbiAgICAgICAgICAgIHBsYXllcjFCb2FyZC5kaXNwbGF5R3JpZHMoKTtcbiAgICAgICAgICAgIHBsYXllcjFCb2FyZC5zaG93SGl0TWFwKCk7XG5cbiAgICAgICAgICAgIHBsYXllcjJCb2FyZC5kZWxldGVHcmlkcygpO1xuICAgICAgICAgICAgcGxheWVyMkJvYXJkLmRpc3BsYXlHcmlkcygpO1xuICAgICAgICAgICAgcGxheWVyMkJvYXJkLnNob3dTaGlwcygpO1xuICAgICAgICAgICAgcGxheWVyMkJvYXJkLnNob3dIaXRNYXAoKTtcblxuXG4gICAgICAgICAgICBpZiAocGxheWVyMkJvYXJkLnBsYXllcjIudHlwZSA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyQXR0YWNrcyhwbGF5ZXIxQm9hcmQucGxheWVyMSlcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbGF5ZXJUdXJuID09PSBcInBsYXllcjJcIikge1xuICAgICAgICAgICAgcGxheWVyVHVybiA9IFwicGxheWVyMVwiXG5cbiAgICAgICAgICAgIHBsYXllcjJCb2FyZC5kZWxldGVHcmlkcygpO1xuICAgICAgICAgICAgcGxheWVyMkJvYXJkLmRpc3BsYXlHcmlkcygpO1xuICAgICAgICAgICAgcGxheWVyMkJvYXJkLnNob3dIaXRNYXAoKTtcblxuICAgICAgICAgICAgcGxheWVyMUJvYXJkLmRlbGV0ZUdyaWRzKCk7XG4gICAgICAgICAgICBwbGF5ZXIxQm9hcmQuZGlzcGxheUdyaWRzKCk7XG4gICAgICAgICAgICBwbGF5ZXIxQm9hcmQuc2hvd1NoaXBzKCk7XG4gICAgICAgICAgICBwbGF5ZXIxQm9hcmQuc2hvd0hpdE1hcCgpO1xuXG4gICAgICAgICAgICBpZiAocGxheWVyMUJvYXJkLnBsYXllcjEudHlwZSA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyQXR0YWNrcyhwbGF5ZXIyQm9hcmQucGxheWVyMilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUdXJuKCkge1xuICAgICAgICByZXR1cm4gcGxheWVyVHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0dhbWVPdmVyICgpIHtcbiAgICAgICAgY29uc3QgcGFzc0RldmljZU1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzLWRldmljZS1tZXNzYWdlJyk7XG5cbiAgICAgICAgY29uc3QgcGFzc0RldmljZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzLWRldmljZS1idXR0b24nKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHBsYXllcjFMb3NlcyA9IHBsYXllcjFCb2FyZC5wbGF5ZXIxLmJvYXJkLmFsbFN1bmsoKTtcbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyMUxvc2VzKTtcblxuICAgICAgICBjb25zdCBwbGF5ZXIyTG9zZXMgPSBwbGF5ZXIyQm9hcmQucGxheWVyMi5ib2FyZC5hbGxTdW5rKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllcjJMb3Nlcyk7XG5cbiAgICAgICAgaWYgKHBsYXllcjFMb3Nlcykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwYXNzRGV2aWNlTXNnLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgMiB3aW5zIVwiO1xuICAgICAgICAgICAgcGFzc0RldmljZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdTZWUgYm9hcmQnO1xuICAgICAgICAgICAgdXBkYXRlSGVhZGVyKFwiUGxheWVyIDIgd2lucyFcIik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbGF5ZXIyTG9zZXMpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcGFzc0RldmljZU1zZy50ZXh0Q29udGVudCA9IFwiUGxheWVyIDEgd2lucyFcIjtcbiAgICAgICAgICAgIHBhc3NEZXZpY2VCdXR0b24udGV4dENvbnRlbnQgPSAnU2VlIGJvYXJkJztcbiAgICAgICAgICAgIHVwZGF0ZUhlYWRlcihcIlBsYXllciAxIHdpbnMhXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybntcbiAgICAgICAgdXBkYXRlVHVybixcbiAgICAgICAgZ2V0VHVybixcbiAgICAgICAgaXNHYW1lT3ZlclxuICAgIH1cbn0pKClcblxuXG5sZXQgdGVzdCA9IDBcblxuZnVuY3Rpb24gY29tcHV0ZXJBdHRhY2tzIChwbGF5ZXIpIHtcblxuICAgIGNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgYXR0YWNrc1wiKTtcblxuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gcGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soeCx5KVxuXG4gICAgLy8gY29uc29sZS5sb2coXCJDb29yZHM6IFwiK3gseSlcbiAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgaWYgKHJlc3VsdCA9PT0gXCJBbHJlYWR5IEhpdFwiIHx8IHJlc3VsdCA9PSBcIkFscmVhZHkgTWlzc1wiKSB7XG4gICAgICAgICByZXR1cm4gY29tcHV0ZXJBdHRhY2tzKHBsYXllcilcbiAgICB9XG5cbiAgIFxuXG4gICAgLy8gY29uc29sZS5sb2coXCJDb21wdXRlciBoYXMgc3VjY2Vzc2Z1bGx5IGF0dGFja2VkLlwiKTtcblxuICAgIGNvbnN0IGxldHRlckFycmF5WCA9IFtcIkFcIixcIkJcIixcIkNcIixcIkRcIixcIkVcIixcIkZcIixcIkdcIixcIkhcIixcIklcIixcIkpcIl07XG5cbiAgICAgICAgY29uc3QgbnVtYmVyQXJyYXlZID0gWzEwLDksOCw3LDYsNSw0LDMsMiwxXTtcblxuICAgIHVwZGF0ZUhlYWRlcihgQ29tcHV0ZXIgY2hvc2UgJHtsZXR0ZXJBcnJheVhbeF19JHtudW1iZXJBcnJheVlbeV19IGFuZCBpdCdzIGEgJHtyZXN1bHQudG9Mb3dlckNhc2UoKX1gKTtcbiAgICB0dXJuU3RhdGUudXBkYXRlVHVybigpO1xuXG4gICBcbiAgICB0ZXN0KytcbiAgICBjb25zb2xlLmxvZygnQ29tcHV0ZXIgYXR0YWNrczonICsgdGVzdClcbiAgICByZXR1cm4gXG59XG5cblxuZXhwb3J0IHtcbiAgICBnYW1lRmxvdyxcbiAgICB0dXJuU3RhdGUsXG4gICAgc2V0UGxheWVyMlR5cGVcbn0iLCJmdW5jdGlvbiBjcmVhdGVHYW1lYm9hcmQoKXtcbiAgICBjb25zdCBvd25HcmlkID0gY3JlYXRlR3JpZCgpO1xuICAgIGNvbnN0IGhpdE1hcCA9IGNyZWF0ZUdyaWQoKTtcbiAgICBjb25zdCBwbGFjZWRTaGlwcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlR3JpZCAoKSB7XG5cbiAgICAgICAgY29uc3QgbmV3R3JpZCA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGdyaWRTaXplID0gMTA7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGdyaWRTaXplOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3dzID0gW11cbiAgICAgICAgICAgIHJvd3MubGVuZ3RoID0gMTA7XG5cbiAgICAgICAgICAgIG5ld0dyaWRbaW5kZXhdID0gcm93c1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld0dyaWQ7XG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcCAoY29vcmRpbmF0ZXMsIGRpcmVjdGlvbiwgc2hpcE9iamVjdCkge1xuXG5cbiAgICAgICAgY29uc3QgcG90ZW50aWFsQ29vcmRzID0gZ2V0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMsIGRpcmVjdGlvbiwgc2hpcE9iamVjdCk7XG4gICAgICAgIGNvbnN0IGdlbmVyYXRlZENvb3JkcyA9IHBvdGVudGlhbENvb3Jkcy5wb3RlbnRpYWxDb29yZGluYXRlcztcbiAgICAgICAgbGV0IHBsYWNlbWVudFZhbGlkaXR5ID0gcG90ZW50aWFsQ29vcmRzLnZhbGlkaXR5O1xuICAgICAgICBsZXQgcGxhY2VtZW50TXNnID0gXCJQbGFjZW1lbnRfc3VjY2Vzc1wiXG5cbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgLy8gICAgQ2hlY2tzIGlmIG92ZXJsYXBwaW5nIHNoaXBzIGV4aXN0XG4gICAgICAgIHBsYWNlbWVudFZhbGlkaXR5ID0gY2hlY2tQbGFjZW1lbnRWYWxpZGl0eShwbGFjZW1lbnRWYWxpZGl0eSwgZ2VuZXJhdGVkQ29vcmRzLCBvd25HcmlkKTtcbiAgICBcbiAgICAgICAgXG5cbiAgICAgICAgaWYgKCFwbGFjZW1lbnRWYWxpZGl0eSkge1xuICAgICAgICAgICAgcGxhY2VtZW50TXNnID0gXCJQbGFjZW1lbnRfZmFpbGVkXCJcbiAgICAgICAgICAgIHJldHVybiBwbGFjZW1lbnRNc2dcbiAgICAgICAgfVxuXG5cblxuICAgICAgICBnZW5lcmF0ZWRDb29yZHMuZm9yRWFjaChjb29yZHMgPT4ge1xuXG4gICAgICAgICAgICBvd25HcmlkW2Nvb3Jkc1swXV1bY29vcmRzWzFdXSA9IHNoaXBPYmplY3Q7XG5cblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHBsYWNlZFNoaXBzLnB1c2goc2hpcE9iamVjdClcbiAgXG5cbiAgICAgICByZXR1cm4gcGxhY2VtZW50TXNnXG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2sgKHgsIHkpIHtcblxuICAgICAgICBpZiAoaGl0TWFwW3hdW3ldID09PSBcIk1pc3NcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwiQWxyZWFkeSBNaXNzXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghb3duR3JpZFt4XVt5XSkge1xuICAgICAgICAgICAgaGl0TWFwW3hdW3ldID0gXCJNaXNzXCJcbiAgICAgICAgICAgIHJldHVybiBcIk1pc3NcIlxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoaGl0TWFwW3hdW3ldID09PSBcIkhpdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJBbHJlYWR5IEhpdFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hpcCA9IG93bkdyaWRbeF1beV07XG4gICAgICAgIHNoaXAuaGl0KClcbiAgICAgICAgaGl0TWFwW3hdW3ldID0gJ0hpdCc7XG4gICAgICAgIHJldHVybiBcIkhpdFwiXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWxsU3VuayAoKSB7XG5cbiAgICAgICAgbGV0IGV2ZXJ5U2hpcFN1bmsgPSB0cnVlO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwbGFjZWRTaGlwcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBwbGFjZWRTaGlwc1tpbmRleF07XG5cbiAgICAgICAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIGV2ZXJ5U2hpcFN1bmsgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV2ZXJ5U2hpcFN1bmtcbiAgICB9XG4gICAgXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvd25HcmlkLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGFsbFN1bmssXG4gICAgICAgIGhpdE1hcFxuICAgIH1cblxuXG5cbn1cblxuXG5mdW5jdGlvbiBnZXRDb29yZGluYXRlcyAoY29vcmRpbmF0ZXMsIGRpcmVjdGlvbiwgc2hpcE9iamVjdCkge1xuXG4gICAgbGV0IHZhbGlkaXR5ID0gdHJ1ZTtcblxuICAgIGNvbnN0IHBvdGVudGlhbENvb3JkaW5hdGVzID0gW11cblxuICAgIFxuICAgIGlmIChjb29yZGluYXRlcy54IDwgMCB8fCBjb29yZGluYXRlcy55IDwgMCB8fCBjb29yZGluYXRlcy54ID4gOSB8fCBjb29yZGluYXRlcy55ID4gOSApIHtcbiAgICAgICAgICAgIFxuICAgICAgICB2YWxpZGl0eSA9IGZhbHNlXG5cbiAgICAgICAgcmV0dXJuIHZhbGlkaXR5XG5cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcE9iamVjdC5nZXRMZW5ndGgoKTsgaW5kZXgrKykge1xuXG4gICAgICAgIFxuICAgICAgICBsZXQgeGNvb3JkcztcbiAgICAgICAgbGV0IHljb29yZHM7XG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJub3J0aFwiKSB7XG4gICAgICAgICAgICB4Y29vcmRzID0gY29vcmRpbmF0ZXMueFxuICAgICAgICAgICAgeWNvb3JkcyA9IGNvb3JkaW5hdGVzLnkgLSBpbmRleDtcblxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJzb3V0aFwiKSB7XG5cbiAgICAgICAgICAgIHhjb29yZHMgPSBjb29yZGluYXRlcy54XG4gICAgICAgICAgICB5Y29vcmRzID0gY29vcmRpbmF0ZXMueSArIGluZGV4O1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJlYXN0XCIpIHtcblxuICAgICAgICAgICAgeGNvb3JkcyA9IGNvb3JkaW5hdGVzLnggKyBpbmRleDtcbiAgICAgICAgICAgIHljb29yZHMgPSBjb29yZGluYXRlcy55OyBcblxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ3ZXN0XCIpIHtcbiAgICAgICAgICAgIHhjb29yZHMgPSBjb29yZGluYXRlcy54IC0gaW5kZXg7XG4gICAgICAgICAgICB5Y29vcmRzID0gY29vcmRpbmF0ZXMueTsgXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh4Y29vcmRzIDwgMCB8fCB5Y29vcmRzIDwgMCB8fCB4Y29vcmRzID4gOSB8fCB5Y29vcmRzID4gOSApIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFsaWRpdHkgPSBmYWxzZVxuXG4gICAgICAgIH1cblxuICAgICAgICBwb3RlbnRpYWxDb29yZGluYXRlcy5wdXNoKFt4Y29vcmRzLHljb29yZHNdKVxuICAgICAgICBcbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgXG4gICAgICAgIHZhbGlkaXR5LFxuICAgICAgICBwb3RlbnRpYWxDb29yZGluYXRlc1xuICAgIH1cbn1cblxuXG5cbmZ1bmN0aW9uIGNoZWNrUGxhY2VtZW50VmFsaWRpdHkgKHBsYWNlbWVudFZhbGlkaXR5LCBnZW5lcmF0ZWRDb29yZHMsIG93bkdyaWQpIHtcblxuICAgIGlmICghcGxhY2VtZW50VmFsaWRpdHkpIHtcbiAgICAgICAgcmV0dXJuIHBsYWNlbWVudFZhbGlkaXR5XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGdlbmVyYXRlZENvb3Jkcy5sZW5ndGg7IGluZGV4KyspIHtcblxuXG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IGdlbmVyYXRlZENvb3Jkc1tpbmRleF07XG4gICBcbiAgICAgICAgY29uc3Qgc2hpcCA9IG93bkdyaWRbY29vcmRzWzBdXVtjb29yZHNbMV1dXG5cbiAgICAgICAgaWYgKHNoaXApIHtcbiAgICAgICAgICAgIHBsYWNlbWVudFZhbGlkaXR5ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWNlbWVudFZhbGlkaXR5XG59XG5cblxuZXhwb3J0e1xuICAgIGNyZWF0ZUdhbWVib2FyZCxcbiAgICBnZXRDb29yZGluYXRlcyxcbiAgICBjaGVja1BsYWNlbWVudFZhbGlkaXR5XG59IiwiaW1wb3J0IHsgY3JlYXRlR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkRmFjdG9yeVwiXG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXllciAodHlwZSwgZW5lbXlIaXRtYXAsIGF0dGFja0VuZW15KSB7XG4gICAgY29uc3QgYm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoKTtcblxuICAgIGlmICghKHR5cGUgPT09IFwicmVhbFwiIHx8IHR5cGUgPT09IFwiY29tcHV0ZXJcIikpIHtcbiAgICAgICAgcmV0dXJuIFwiSW52YWxpZF9pbnB1dFwiO1xuICAgIH1cbiAgICAvLyBQbGF5ZXIgbG9naWMgYW5kIGNvbXB1dGVyIGxvZ2ljIGlzIG5vdCBjb21wbGV0ZS5cblxuICAgIGlmICh0eXBlID09PSBcInJlYWxcIikge1xuICAgIFxuICAgICAgICAvLyBjcmVhdGUgcGxheWVyXG4gICAgICAgIC8vIGNyZWF0ZSBib2FyZFxuICAgICAgICAvLyAtIEFscmVhZHkgZG9uZSBhYm92ZVxuXG4gICAgICAgIC8vIERvIGFsbCB0aGlzIGxvZ2ljIGluc2lkZSBoZXJlIG9yIG9uIGEgZGlmZmVyZW50IG1vZHVsZT9cblxuICAgICAgICAvLyBwbGFjZSBzaGlwcyAod2hhdCB0eXBlcyBvZiBzaGlwIGFuZCBob3cgbWFueT8pXG4gICAgICAgIC8vIC0gY3JlYXRlIDUgdHlwZXMgb2Ygc2hpcHMgYW5kIHBsYWNlIHRoZW1cblxuICAgICAgICAvLyBHQU1FRkxPVyBCRUdJTlNcbiAgICAgICAgLy8gZXhlY3V0ZSBvcHBvbmVudCdzIHJlY2VpdmVBdHRhY2sgZnVuY3Rpb25cbiAgICAgICAgLy8gaWYgb3Bwb25lbnQgYWxsU3VuaygpIGlzIGZhbHNlLCB0aGVuIG9wcG9uZW50IGV4ZWN1dGVzIHlvdXIgcmVjZWl2ZUF0dGFjayBmdW5jdGlvblxuICAgICAgICAvLyBpZiBvcHBvbmVudCBhbGxTdW5rKCkgaXMgdHJ1ZSwgdGhlbiB5b3Ugd2luLlxuICAgICAgICAvLyBUaGUgYWJvdmUgYXBwbGllcyB0byBvcHBvbmVudCBhcyB3ZWxsLlxuICAgICAgICAvLyBpZiB5b3UgYWNjaWRlbnRseSBjaG9vc2UgZ3JpZHMgdGhhdCB3ZXJlIGFscmVhZHkgaGl0IG9yIG1pc3NlZCwgeW91IHdpbGwgYmUgcHJvbXB0ZWQgdG8gdHJ5IGFnYWluXG4gICAgICAgIFxuICAgICAgICAvLyBVSVxuICAgICAgICAvLyBPcHBvbmVudCB3aWxsIG9ubHkgc2VlIHlvdXIgZ3JpZCBhcyBoaXQgbWFwIGFuZCB2aWNlIHZlcnNhLlxuICAgICAgICAvLyBBdCBldmVyeSB0dXJuLCB0aGUgZW50aXJlIERPTSB3aWxsIHJlbmRlciBvd25HcmlkIGFuZCBlbmVteSBoaXRtYXAgYW5kIHZpY2UgdmVyc2EuXG5cbiAgICBcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgIFxuICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGV4Y2VwdCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgaXMgdXNlZCB3aXRoIHJlY2VpdmVBdHRhY2sgZm9yIGNvb3JkaW5hdGVzXG4gICAgICAgIC8vIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgcnVucyBNYXRoLmZsb29yLCBhbmQgdGVzdCBpdC5cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlLFxuICAgICAgICBib2FyZFxuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBtYXRoLmZsb29yIGZ1bmN0aW9uIHNlcGFyYXRlbHkgYmVsb3cgaGVyZS5cbiAgICBcbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVQbGF5ZXJcbn0iLCJcbmZ1bmN0aW9uIGNyZWF0ZURPTSAoKSB7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgY29uc3Qgc3RhcnRNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RhcnRNZW51LmNsYXNzTGlzdC5hZGQoJ3N0YXJ0LW1lbnUnKTtcbiAgICBzdGFydE1lbnUuY2xhc3NMaXN0LmFkZCgnc2hvdy1zdGFydC1tZW51Jyk7XG4gICAgYm9keS5hcHBlbmQoc3RhcnRNZW51KTtcblxuICAgIFxuICAgICAgICBjb25zdCBwbGF5ZXJUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwbGF5ZXJUaXRsZURpdi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItdGl0bGUtZGl2Jyk7XG4gICAgICAgIHN0YXJ0TWVudS5hcHBlbmQocGxheWVyVGl0bGVEaXYpO1xuXG4gICAgICAgICAgICBjb25zdCBnYW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGdhbWVUaXRsZS50ZXh0Q29udGVudCA9IFwiQkFUVExFU0hJUFwiXG4gICAgICAgICAgICBnYW1lVGl0bGUuY2xhc3NMaXN0LmFkZCgnZ2FtZS10aXRsZScpO1xuICAgICAgICAgICAgcGxheWVyVGl0bGVEaXYuYXBwZW5kKGdhbWVUaXRsZSk7XG5cblxuICAgICAgICAgICAgY29uc3QgcGxheWVyVHlwZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwbGF5ZXJUeXBlVGl0bGUuY2xhc3NMaXN0LmFkZCgncGxheWVyLXR5cGUtdGl0bGUnKTtcbiAgICAgICAgICAgIHBsYXllclR5cGVUaXRsZS50ZXh0Q29udGVudCA9ICdQbGF5IGFnYWluc3Q6IENvbXB1dGVyJ1xuICAgICAgICAgICAgcGxheWVyVGl0bGVEaXYuYXBwZW5kKHBsYXllclR5cGVUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgcGxheWVyVHlwZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwbGF5ZXJUeXBlRGl2LmNsYXNzTGlzdC5hZGQoJ3BsYXllci10eXBlLWRpdicpO1xuICAgICAgICBzdGFydE1lbnUuYXBwZW5kKHBsYXllclR5cGVEaXYpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjb21wdXRlck9wdGlvbi5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1vcHRpb24nKTtcbiAgICAgICAgICAgIGNvbXB1dGVyT3B0aW9uLnRleHRDb250ZW50ID0gXCJDb21wdXRlclwiO1xuICAgICAgICAgICAgcGxheWVyVHlwZURpdi5hcHBlbmQoY29tcHV0ZXJPcHRpb24pO1xuXG4gICAgICAgICAgICBjb25zdCByZWFsUGxheWVyT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICByZWFsUGxheWVyT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3JlYWwtcGxheWVyLW9wdGlvbicpO1xuICAgICAgICAgICAgcmVhbFBsYXllck9wdGlvbi50ZXh0Q29udGVudCA9IFwiWW91ciBmcmllbmRcIjtcbiAgICAgICAgICAgIHBsYXllclR5cGVEaXYuYXBwZW5kKHJlYWxQbGF5ZXJPcHRpb24pO1xuXG4gICAgICAgICAgICBcblxuICAgICAgICBjb25zdCBzdGFydEJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzdGFydEJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKCdzdGFydC1idXR0b24tZGl2Jyk7XG4gICAgICAgIHN0YXJ0TWVudS5hcHBlbmQoc3RhcnRCdXR0b25EaXYpO1xuXG4gICAgICAgICAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU1RBUlQhXCI7XG4gICAgICAgICAgICBzdGFydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdGFydC1idXR0b24nKTtcbiAgICAgICAgICAgIHN0YXJ0QnV0dG9uRGl2LmFwcGVuZChzdGFydEJ1dHRvbik7XG5cblxuICAgIGNvbnN0IHBhc3NEZXZpY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXNzRGV2aWNlRGl2LmNsYXNzTGlzdC5hZGQoJ3Bhc3MtZGV2aWNlJyk7XG4gICAgYm9keS5hcHBlbmQocGFzc0RldmljZURpdik7XG5cblxuICAgICAgICBjb25zdCBwYXNzRGV2aWNlTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBhc3NEZXZpY2VNc2cuY2xhc3NMaXN0LmFkZCgncGFzcy1kZXZpY2UtbWVzc2FnZScpO1xuICAgICAgICBwYXNzRGV2aWNlRGl2LmFwcGVuZChwYXNzRGV2aWNlTXNnKTtcblxuXG4gICAgICAgIGNvbnN0IHBhc3NEZXZpY2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcGFzc0RldmljZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwYXNzLWRldmljZS1idXR0b24nKTtcbiAgICAgICAgcGFzc0RldmljZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3RhcnQgdHVyblwiO1xuICAgICAgICBwYXNzRGV2aWNlRGl2LmFwcGVuZChwYXNzRGV2aWNlQnV0dG9uKTtcblxuICAgICAgICBwYXNzRGV2aWNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBwYXNzRGV2aWNlRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctcGFzcy1kZXZpY2UnKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJUZXN0XCIpXG4gICAgICAgIH0pXG5cblxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyJyk7XG4gICAgYm9keS5hcHBlbmQobWFpbkNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItZGl2Jyk7XG4gICAgICAgIGhlYWRlckRpdi50ZXh0Q29udGVudCA9ICdQbGF5ZXIgMSBnb2VzIGZpcnN0J1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZChoZWFkZXJEaXYpO1xuXG4gICAgICAgIGNvbnN0IHBsYXllckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwbGF5ZXJEaXYuY2xhc3NMaXN0LmFkZCgncGxheWVyLWRpdicpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZChwbGF5ZXJEaXYpO1xuXG4gICAgICAgICAgICBjb25zdCBnYW1lT3ZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZ2FtZU92ZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZS1vdmVyJyk7XG4gICAgICAgICAgICBwbGF5ZXJEaXYuYXBwZW5kKGdhbWVPdmVyKTtcblxuICAgICAgICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9vdGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1kaXYnKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoZm9vdGVyRGl2KTtcblxuICAgICAgICAgICAgY29uc3QgZm9vdGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIGZvb3RlckxpbmsuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWxpbmsnKTtcbiAgICAgICAgICAgIGZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9SaXNzaGlnYW5lc2gvYmF0dGxlc2hpcFwiKTtcbiAgICAgICAgICAgIGZvb3RlckxpbmsudGV4dENvbnRlbnQgPSBcIk1hZGUgYnkgUmlzc2hpZ2FuZXNoIFZpbGxhbGFuXCI7XG4gICAgICAgICAgICBmb290ZXJEaXYuYXBwZW5kKGZvb3RlckxpbmspO1xuXG5cblxuICAgIFxuXG5cblxuXG5cbiAgICBjb25zdCBwbGF5ZXIxRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVyMURpdi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXIxLWRpdicpO1xuICAgIHBsYXllckRpdi5hcHBlbmQocGxheWVyMURpdik7XG4gICAgLy8gcGxheWVyMURpdi50ZXh0Q29udGVudCA9IFwiUGxheWVyIDFcIjtcblxuICAgICAgICBjb25zdCBwbGF5ZXIxR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwbGF5ZXIxR3JpZC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXIxLWdyaWQnKTtcbiAgICAgICAgcGxheWVyMURpdi5hcHBlbmQocGxheWVyMUdyaWQpO1xuXG4gICAgICAgIGNvbnN0IHBsYXllcjFMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwbGF5ZXIxTGFiZWwuY2xhc3NMaXN0LmFkZCgncGxheWVyMS1sYWJlbCcpO1xuICAgICAgICBwbGF5ZXIxTGFiZWwudGV4dENvbnRlbnQgPSBcIlBsYXllciAxXCJcbiAgICAgICAgcGxheWVyMURpdi5hcHBlbmQocGxheWVyMUxhYmVsKVxuXG4gICAgY29uc3QgcGxheWVyMkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYXllcjJEaXYuY2xhc3NMaXN0LmFkZCgncGxheWVyMi1kaXYnKTtcbiAgICBwbGF5ZXJEaXYuYXBwZW5kKHBsYXllcjJEaXYpXG4gICAgLy8gcGxheWVyMkRpdi50ZXh0Q29udGVudCA9IFwiUGxheWVyIDJcIjtcblxuICAgICAgICBjb25zdCBwbGF5ZXIyR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwbGF5ZXIyR3JpZC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXIyLWdyaWQnKTtcbiAgICAgICAgcGxheWVyMkRpdi5hcHBlbmQocGxheWVyMkdyaWQpO1xuXG4gICAgICAgIGNvbnN0IHBsYXllcjJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwbGF5ZXIyTGFiZWwuY2xhc3NMaXN0LmFkZCgncGxheWVyMi1sYWJlbCcpO1xuICAgICAgICBwbGF5ZXIyTGFiZWwudGV4dENvbnRlbnQgPSBcIlBsYXllciAyXCJcbiAgICAgICAgcGxheWVyMkRpdi5hcHBlbmQocGxheWVyMkxhYmVsKVxuXG5cbiAgICAvLyBDcmVhdGUgYm9hcmQgZGl2LCBtYWtlIHN1cmUgdGhlcmUgaXMgbWluaW11bSBzaXplIGZvciBoZWlnaHQgYW5kIHdpZHRoXG59XG5cblxuZnVuY3Rpb24gdXBkYXRlSGVhZGVyIChzdGF0dXNNZXNzYWdlKSB7XG4gICAgY29uc3Qgc3RhdHVzRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItZGl2Jyk7XG5cbiAgICBzdGF0dXNEaXNwbGF5LnRleHRDb250ZW50ID0gc3RhdHVzTWVzc2FnZVxufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZURPTSxcbiAgICB1cGRhdGVIZWFkZXJcbn1cblxuIiwiIGZ1bmN0aW9uIGNyZWF0ZVNoaXAgKGxlbmd0aCl7XG4gICAgbGV0IHRvdGFsSGl0cyA9IDA7XG4gICAgbGV0IHN1bmsgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdldExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aFxuICAgIH1cblxuICAgIGNvbnN0IGdldEhpdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0b3RhbEhpdHNcbiAgICB9XG5cbiAgICBjb25zdCBpc1N1bmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0b3RhbEhpdHMgPj0gbGVuZ3RoKSB7XG4gICAgICAgICAgICBzdW5rID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdW5rXG4gICAgfVxuXG5cbiAgICBjb25zdCBoaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRvdGFsSGl0cysrXG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICBnZXRMZW5ndGgsXG4gICAgICAgIGdldEhpdHMsXG4gICAgICAgIGlzU3VuayxcbiAgICAgICAgaGl0XG4gICAgfVxuIH1cblxuXG4gZXhwb3J0e1xuICAgIGNyZWF0ZVNoaXBcbiB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJGYWN0b3J5XCI7XG4vLyBpbXBvcnQgeyBtb2R1bGUgfSBmcm9tICcuL21vZHVsZSc7XG5cblxuLy8gVGhpcyBpcyBqdXN0IGEgQ1JVRC4gSXQgc2hvdWxkIGJlIGVhc3kuIEJ1dCBtYWtlIHN1cmUgdG8gZm9sbG93IHRoZSBpbnN0cnVjdGlvbnMuXG5cbi8vIG1vZHVsZSgpXG5cblxuaW1wb3J0IHsgY3JlYXRlRE9NIH0gZnJvbSBcIi4vcmVuZGVyRE9NXCI7XG5cbmltcG9ydCB7IGdhbWVTdGFydCB9IGZyb20gJy4vRE9NQWN0aW9uJztcblxuaW1wb3J0IHsgZ2FtZUZsb3cgfSBmcm9tICcuL2dhbWVGbG93JztcblxuLy8gaW1wb3J0IHsgcG9wdWxhdGVCb2FyZCB9IGZyb20gJy4vcmVuZGVyQm9hcmQnO1xuXG5jcmVhdGVET00oKTtcbmdhbWVTdGFydCgpO1xuLy8gZ2FtZUZsb3coKTtcblxuXG4vLyByZW1vdmUgdGhpcyBsYXRlclxuLy8gY29uc3QgdGVzdFBsYXllciA9IGNyZWF0ZVBsYXllcihcInJlYWxcIik7XG4vLyBwb3B1bGF0ZUJvYXJkKHRlc3RQbGF5ZXIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9