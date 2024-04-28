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
    font-size: 25px;

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
        width: 330px;
        height: 330px;

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

}`, "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT,UAAU;CACV,sBAAsB;AACvB;;AAEA;;IAEI,YAAY;IACZ,WAAW;IACX,uBAAuB;AAC3B;;AAEA;;IAEI,oDAAoD;;IAEpD,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,eAAe;;IAEf,aAAa;AACjB;;;;;AAKA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,8BAA8B;IAC9B,aAAa;IACb;;AAEJ;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;AAC3B;;;AAGA;;IAEI,aAAa;IACb,SAAS;AACb;;;AAGA;IACI,WAAW;IACX,YAAY;IACZ,4BAA4B;IAC5B,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sCAAsC;IACtC,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,wBAAwB;IACxB,kBAAkB;AACtB;;;AAGA;;;IAGI,oCAAoC;IACpC,oCAAoC;;IAEpC,0BAA0B;IAC1B,8BAA8B;IAC9B,+BAA+B;IAC/B,aAAa;IACb,sCAAsC;IACtC,YAAY;;AAEhB;;;AAGA;;IAEI,YAAY;IACZ,WAAW;IACX,gCAAgC;IAChC,kBAAkB;IAClB,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,mCAAmC;IACnC,iCAAiC;IACjC,kBAAkB;AACtB;;AAEA;;IAEI,2BAA2B;;AAE/B;AACA;IACI,gDAAgD;IAChD,wBAAwB;AAC5B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,4BAA4B;AAChC;;;AAGA;IACI,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;AAC3B;AACA;IACI,gCAAgC;;IAEhC;;;QAGI,sCAAsC;QACtC,YAAY;QACZ,aAAa;;IAEjB;IACA;QACI,QAAQ;IACZ;IACA;QACI,QAAQ;IACZ;;IAEA;QACI,QAAQ;IACZ;;IAEA;QACI,QAAQ;IACZ;;AAEJ","sourcesContent":["*{\n margin: 0;\n padding: 0;\n box-sizing: border-box;\n}\n\nhtml,\nbody{\n    height: 100%;\n    width: 100%;\n    background-color: black;\n}\n\n.main-container {\n\n    /* Have a minimum height and width for .player-div */\n\n    width: 100%;\n    height: 100%;\n    border: 2px solid red;\n    display: grid;\n    grid-template-rows: 100px 1fr 50px;\n}\n\n.header-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid blue;\n    color: white;\n    text-align: center;\n    font-size: 25px;\n\n    padding: 30px;\n}\n\n\n\n\n.player-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid pink;\n    /* background-color: yellow; */\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr))\n\n}\n\n.footer-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid green;\n}\n\n\n.player1-div,\n.player2-div{\n    padding: 20px;\n    gap: 15px;\n}\n\n\n.player1-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid lightgreen;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    /* text-align: center; */\n    /* color: white; */\n}\n\n.player2-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid lightgoldenrodyellow;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    /* text-align: center; */\n    /* color: white; */\n}\n\n\n.player1-grid,\n.player2-grid{\n\n    --height-and-width: max(330px, 30vw);\n    --border-size: 2px solid greenyellow;\n\n    border: var(--border-size);\n    width: var(--height-and-width);\n    height: var(--height-and-width);\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    color: white;\n\n}\n\n\n.player1-label,\n.player2-label{\n    color: white;\n    width: 100%;\n    border: 2px solid blanchedalmond;\n    text-align: center;\n    /* padding: 10px; */\n}\n\n\n.grid-column{\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    /* border: 2px solid turquoise; */\n    text-align: center;\n}\n\n.grid-row{\n\n    border: 2px solid turquoise;\n    \n}\n.grid-row:hover{\n    /* background-color: rgba(255, 255, 0, 0.156); */\n    border: 3px solid yellow;\n}\n\n.clicked {\n    background-color: red;\n}\n\n.ship-located {\n    background-color: darkorchid;\n}\n\n\n.ship-is-hit{\n    background-color: darkred;\n}\n\n.attack-missed{\n    background-color: white;\n}\n@media (max-width: 770px){\n    /* change player font position */\n\n    .player1-grid,\n    .player2-grid{\n        \n        /* Might have to reduce size further */\n        width: 330px;\n        height: 330px;\n\n    }\n    .player1-div{\n        order: 2;\n    }\n    .player2-div{\n        order: 1;\n    }\n\n    .player2-grid{\n        order: 2;\n    }\n\n    .player2-label{\n        order: 1;\n    }\n\n}"],"sourceRoot":""}]);
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

    // Change the coordinates display to the default Battleship style. Letter and Number e.g: A1,B9,E7,etc. 

    // Create pass device screen for 2 player option.

    // Include a game restart button that clears all state and recreates the entire board with new random ship placements. (Create a function in turnstate that resets player turn to player one and call it when the restart button is clicked).

    // create tests for hitMap one for hit and one for miss. (Haven't created this yet - ensures you can refactor safely later on).
    // console.log(player1.board.placeShip({x:9,y:9}, "north", player1Carrier));
    // player1.board.placeShip({x:0,y:0}, "east", player1Battleship);
    // player1.board.placeShip({x:5,y:5}, "east", player1Destroyer);
    // player1.board.placeShip({x:2,y:2}, "east", player1Submarine);
    // player1.board.placeShip({x:9,y:0}, "south", player1PatrolBoat);



    // console.log(player2.board.placeShip({x:9,y:9}, "north", player2Carrier));
    // player2.board.placeShip({x:0,y:0}, "east", player2Battleship);
    // player2.board.placeShip({x:5,y:5}, "east", player2Destroyer);
    // player2.board.placeShip({x:2,y:2}, "east", player2Submarine);
    // player2.board.placeShip({x:9,y:0}, "south", player2PatrolBoat);

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


    placeAllShips(player1, allPlayer1Ships);
    placeAllShips(player2, allPlayer2Ships)

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
        
        const player1Loses = player1Board.player1.board.allSunk();
        console.log(player1Loses);

        const player2Loses = player2Board.player2.board.allSunk();
        console.log(player2Loses);

        if (player1Loses) {
            (0,_renderDOM__WEBPACK_IMPORTED_MODULE_3__.updateHeader)("Player 2 wins!")
            return true;
        }

        if (player2Loses) {
            (0,_renderDOM__WEBPACK_IMPORTED_MODULE_3__.updateHeader)("Player 1 wins!")
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


        const result = player.board.receiveAttack(x,y);

        const letterArrayX = ["A","B","C","D","E","F","G","H","I","J"];

        const numberArrayY = [10,9,8,7,6,5,4,3,2,1]
        if (currentPlayerTurn === "player1") {


            (0,_renderDOM__WEBPACK_IMPORTED_MODULE_1__.updateHeader)(`Player 1 chose ${letterArrayX[x]}${numberArrayY[y]} and it's a ${result.toLowerCase()}`);
        }

        if (currentPlayerTurn === "player2") {


            (0,_renderDOM__WEBPACK_IMPORTED_MODULE_1__.updateHeader)(`Player 2 chose ${letterArrayX[x]}${numberArrayY[y]} and it's a ${result.toLowerCase()}`);

        }
        

        _gameFlow__WEBPACK_IMPORTED_MODULE_0__.turnState.updateTurn();

        if (player.board.ownGrid[x][y]) {
  
            grid.classList.add('ship-is-hit')
            console.log(player.board.ownGrid[x][y].getHits())
            // check if allSunk()
            // turnState.isGameOver();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7VUNqQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0E0Qjs7QUFFbUI7QUFDL0MsWUFBWSxTQUFTOzs7QUFHckI7O0FBRUE7OztBQUd3Qzs7QUFFRjs7QUFFdEMsWUFBWSxnQkFBZ0I7O0FBRTVCLHFEQUFTO0FBQ1QsbURBQVE7OztBQUdSO0FBQ0E7QUFDQSw0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzPzYwMWQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVGbG93LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZW5kZXJCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3JlbmRlckRPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gbWFyZ2luOiAwO1xuIHBhZGRpbmc6IDA7XG4gYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCxcbmJvZHl7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuXG4gICAgLyogSGF2ZSBhIG1pbmltdW0gaGVpZ2h0IGFuZCB3aWR0aCBmb3IgLnBsYXllci1kaXYgKi9cblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciA1MHB4O1xufVxuXG4uaGVhZGVyLWRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI1cHg7XG5cbiAgICBwYWRkaW5nOiAzMHB4O1xufVxuXG5cblxuXG4ucGxheWVyLWRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHBpbms7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogeWVsbG93OyAqL1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzODBweCwgMWZyKSlcblxufVxuXG4uZm9vdGVyLWRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xufVxuXG5cbi5wbGF5ZXIxLWRpdixcbi5wbGF5ZXIyLWRpdntcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGdhcDogMTVweDtcbn1cblxuXG4ucGxheWVyMS1kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZWVuO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cbn1cblxuLnBsYXllcjItZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xufVxuXG5cbi5wbGF5ZXIxLWdyaWQsXG4ucGxheWVyMi1ncmlke1xuXG4gICAgLS1oZWlnaHQtYW5kLXdpZHRoOiBtYXgoMzMwcHgsIDMwdncpO1xuICAgIC0tYm9yZGVyLXNpemU6IDJweCBzb2xpZCBncmVlbnllbGxvdztcblxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyLXNpemUpO1xuICAgIHdpZHRoOiB2YXIoLS1oZWlnaHQtYW5kLXdpZHRoKTtcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodC1hbmQtd2lkdGgpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgY29sb3I6IHdoaXRlO1xuXG59XG5cblxuLnBsYXllcjEtbGFiZWwsXG4ucGxheWVyMi1sYWJlbHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhbmNoZWRhbG1vbmQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXG59XG5cblxuLmdyaWQtY29sdW1ue1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgdHVycXVvaXNlOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdyaWQtcm93e1xuXG4gICAgYm9yZGVyOiAycHggc29saWQgdHVycXVvaXNlO1xuICAgIFxufVxuLmdyaWQtcm93OmhvdmVye1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuMTU2KTsgKi9cbiAgICBib3JkZXI6IDNweCBzb2xpZCB5ZWxsb3c7XG59XG5cbi5jbGlja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5zaGlwLWxvY2F0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtvcmNoaWQ7XG59XG5cblxuLnNoaXAtaXMtaGl0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XG59XG5cbi5hdHRhY2stbWlzc2Vke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc3MHB4KXtcbiAgICAvKiBjaGFuZ2UgcGxheWVyIGZvbnQgcG9zaXRpb24gKi9cblxuICAgIC5wbGF5ZXIxLWdyaWQsXG4gICAgLnBsYXllcjItZ3JpZHtcbiAgICAgICAgXG4gICAgICAgIC8qIE1pZ2h0IGhhdmUgdG8gcmVkdWNlIHNpemUgZnVydGhlciAqL1xuICAgICAgICB3aWR0aDogMzMwcHg7XG4gICAgICAgIGhlaWdodDogMzMwcHg7XG5cbiAgICB9XG4gICAgLnBsYXllcjEtZGl2e1xuICAgICAgICBvcmRlcjogMjtcbiAgICB9XG4gICAgLnBsYXllcjItZGl2e1xuICAgICAgICBvcmRlcjogMTtcbiAgICB9XG5cbiAgICAucGxheWVyMi1ncmlke1xuICAgICAgICBvcmRlcjogMjtcbiAgICB9XG5cbiAgICAucGxheWVyMi1sYWJlbHtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgfVxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysc0JBQXNCO0FBQ3ZCOztBQUVBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLG9EQUFvRDs7SUFFcEQsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZixhQUFhO0FBQ2pCOzs7OztBQUtBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYjs7QUFFSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOzs7QUFHQTs7SUFFSSxhQUFhO0lBQ2IsU0FBUztBQUNiOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOzs7QUFHQTs7O0lBR0ksb0NBQW9DO0lBQ3BDLG9DQUFvQzs7SUFFcEMsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxZQUFZOztBQUVoQjs7O0FBR0E7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLGlDQUFpQztJQUNqQyxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksMkJBQTJCOztBQUUvQjtBQUNBO0lBQ0ksZ0RBQWdEO0lBQ2hELHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7O0FBR0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGdDQUFnQzs7SUFFaEM7OztRQUdJLHNDQUFzQztRQUN0QyxZQUFZO1FBQ1osYUFBYTs7SUFFakI7SUFDQTtRQUNJLFFBQVE7SUFDWjtJQUNBO1FBQ0ksUUFBUTtJQUNaOztJQUVBO1FBQ0ksUUFBUTtJQUNaOztJQUVBO1FBQ0ksUUFBUTtJQUNaOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuIG1hcmdpbjogMDtcXG4gcGFkZGluZzogMDtcXG4gYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG5cXG4gICAgLyogSGF2ZSBhIG1pbmltdW0gaGVpZ2h0IGFuZCB3aWR0aCBmb3IgLnBsYXllci1kaXYgKi9cXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciA1MHB4O1xcbn1cXG5cXG4uaGVhZGVyLWRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcblxcblxcblxcbi5wbGF5ZXItZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcGluaztcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogeWVsbG93OyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM4MHB4LCAxZnIpKVxcblxcbn1cXG5cXG4uZm9vdGVyLWRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG5cXG4ucGxheWVyMS1kaXYsXFxuLnBsYXllcjItZGl2e1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcblxcbi5wbGF5ZXIxLWRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JlZW47XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgICAvKiBjb2xvcjogd2hpdGU7ICovXFxufVxcblxcbi5wbGF5ZXIyLWRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z29sZGVucm9keWVsbG93O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xcbn1cXG5cXG5cXG4ucGxheWVyMS1ncmlkLFxcbi5wbGF5ZXIyLWdyaWR7XFxuXFxuICAgIC0taGVpZ2h0LWFuZC13aWR0aDogbWF4KDMzMHB4LCAzMHZ3KTtcXG4gICAgLS1ib3JkZXItc2l6ZTogMnB4IHNvbGlkIGdyZWVueWVsbG93O1xcblxcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci1zaXplKTtcXG4gICAgd2lkdGg6IHZhcigtLWhlaWdodC1hbmQtd2lkdGgpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodC1hbmQtd2lkdGgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG5cXG5cXG4ucGxheWVyMS1sYWJlbCxcXG4ucGxheWVyMi1sYWJlbHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhbmNoZWRhbG1vbmQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cXG59XFxuXFxuXFxuLmdyaWQtY29sdW1ue1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgdHVycXVvaXNlOyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ncmlkLXJvd3tcXG5cXG4gICAgYm9yZGVyOiAycHggc29saWQgdHVycXVvaXNlO1xcbiAgICBcXG59XFxuLmdyaWQtcm93OmhvdmVye1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjE1Nik7ICovXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHllbGxvdztcXG59XFxuXFxuLmNsaWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5zaGlwLWxvY2F0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb3JjaGlkO1xcbn1cXG5cXG5cXG4uc2hpcC1pcy1oaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcbi5hdHRhY2stbWlzc2Vke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc3MHB4KXtcXG4gICAgLyogY2hhbmdlIHBsYXllciBmb250IHBvc2l0aW9uICovXFxuXFxuICAgIC5wbGF5ZXIxLWdyaWQsXFxuICAgIC5wbGF5ZXIyLWdyaWR7XFxuICAgICAgICBcXG4gICAgICAgIC8qIE1pZ2h0IGhhdmUgdG8gcmVkdWNlIHNpemUgZnVydGhlciAqL1xcbiAgICAgICAgd2lkdGg6IDMzMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMzBweDtcXG5cXG4gICAgfVxcbiAgICAucGxheWVyMS1kaXZ7XFxuICAgICAgICBvcmRlcjogMjtcXG4gICAgfVxcbiAgICAucGxheWVyMi1kaXZ7XFxuICAgICAgICBvcmRlcjogMTtcXG4gICAgfVxcblxcbiAgICAucGxheWVyMi1ncmlke1xcbiAgICAgICAgb3JkZXI6IDI7XFxuICAgIH1cXG5cXG4gICAgLnBsYXllcjItbGFiZWx7XFxuICAgICAgICBvcmRlcjogMTtcXG4gICAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZVBsYXllciB9IGZyb20gXCIuL3BsYXllckZhY3RvcnlcIjtcbmltcG9ydCB7IGNyZWF0ZVNoaXAgfSBmcm9tIFwiLi9zaGlwRmFjdG9yeVwiO1xuaW1wb3J0IHsgcG9wdWxhdGVQbGF5ZXIxQm9hcmQsIHBvcHVsYXRlUGxheWVyMkJvYXJkIH0gZnJvbSBcIi4vcmVuZGVyQm9hcmRcIjtcbmltcG9ydCB7IHVwZGF0ZUhlYWRlciB9IGZyb20gXCIuL3JlbmRlckRPTVwiO1xuXG4vLyBUaGVzZSBwbGF5ZXJCb2FyZHMgYXJlIHNpZGUgZWZmZWN0cyAoZXh0ZXJuYWwgc3RhdGUpIC8gKGRlcGVuZGVuY2llcykuXG5sZXQgcGxheWVyMUJvYXJkOyBcbmxldCBwbGF5ZXIyQm9hcmQ7XG5cblxuZnVuY3Rpb24gZ2FtZUZsb3cgKCkge1xuXG4gICAgY29uc3QgcGxheWVyMSA9IGNyZWF0ZVBsYXllcihcInJlYWxcIik7XG4gICAgLy8gY29uc3QgcGxheWVyMiA9IGNyZWF0ZVBsYXllcihcImNvbXB1dGVyXCIpO1xuICAgIGNvbnN0IHBsYXllcjIgPSBjcmVhdGVQbGF5ZXIoXCJyZWFsXCIpOyAgXG5cbiAgICAvLyBwbGFjZSBwbGF5ZXIxIHNoaXBzXG4gICAgLy8gVHlwZXMgb2Ygc2hpcFxuICAgIC8vIC0gQ2Fycmllciwgc2l6ZSA1XG4gICAgLy8gLSBCYXR0bGVzaGlwLCBzaXplIDRcbiAgICAvLyAtIERlc3Ryb3llciwgc2l6ZSAzXG4gICAgLy8gLSBTdWJtYXJpbmUsIHNpemUgM1xuICAgIC8vIC0gUGF0cm9sIEJvYXQsIHNpemUgMlxuXG4gICAgY29uc3QgcGxheWVyMUNhcnJpZXIgPSBjcmVhdGVTaGlwKDUpO1xuICAgIGNvbnN0IHBsYXllcjFCYXR0bGVzaGlwID0gY3JlYXRlU2hpcCg0KTtcbiAgICBjb25zdCBwbGF5ZXIxRGVzdHJveWVyID0gY3JlYXRlU2hpcCgzKTtcbiAgICBjb25zdCBwbGF5ZXIxU3VibWFyaW5lID0gY3JlYXRlU2hpcCgzKTtcbiAgICBjb25zdCBwbGF5ZXIxUGF0cm9sQm9hdCA9IGNyZWF0ZVNoaXAoMilcblxuXG4gICAgY29uc3QgcGxheWVyMkNhcnJpZXIgPSBjcmVhdGVTaGlwKDUpO1xuICAgIGNvbnN0IHBsYXllcjJCYXR0bGVzaGlwID0gY3JlYXRlU2hpcCg0KTtcbiAgICBjb25zdCBwbGF5ZXIyRGVzdHJveWVyID0gY3JlYXRlU2hpcCgzKTtcbiAgICBjb25zdCBwbGF5ZXIyU3VibWFyaW5lID0gY3JlYXRlU2hpcCgzKTtcbiAgICBjb25zdCBwbGF5ZXIyUGF0cm9sQm9hdCA9IGNyZWF0ZVNoaXAoMik7XG5cblxuXG4gICAgLy8gY29uc3QgY2FycmllciA9IGNyZWF0ZVNoaXAoNSk7XG4gICAgLy8gY29uc3QgYmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoNCk7XG4gICAgLy8gY29uc3QgZGVzdHJveWVyID0gY3JlYXRlU2hpcCgzKTtcbiAgICAvLyBjb25zdCBzdWJtYXJpbmUgPSBjcmVhdGVTaGlwKDMpO1xuICAgIC8vIGNvbnN0IHBhdHJvbEJvYXQgPSBjcmVhdGVTaGlwKDIpXG5cbiAgICBjb25zdCBhbGxQbGF5ZXIxU2hpcHMgPSBbcGxheWVyMUNhcnJpZXIsIHBsYXllcjFCYXR0bGVzaGlwLCBwbGF5ZXIxRGVzdHJveWVyLCBwbGF5ZXIxU3VibWFyaW5lLCBwbGF5ZXIxUGF0cm9sQm9hdF07XG5cbiAgICBjb25zdCBhbGxQbGF5ZXIyU2hpcHMgPSBbcGxheWVyMkNhcnJpZXIsIHBsYXllcjJCYXR0bGVzaGlwLCBwbGF5ZXIyRGVzdHJveWVyLCBwbGF5ZXIyU3VibWFyaW5lLCBwbGF5ZXIyUGF0cm9sQm9hdF1cbiAgICAvLyBcbiAgICAvLyBcbiAgICAvLyBcbiAgICAvLyBcbiAgICAvLyBcbiAgICAvLyBSZW1vdmUgYWxsIG9mIHRoZSBiZWxvdyBhbmQgY3JlYXRlIGEgZnVuY3Rpb24gdGhhdCByYW5kb21seSBwbGFjZXMgc2hpcHMuIEl0IGlzIG11Y2ggbW9yZSByZXVzYWJsZSAoYmVjYXVzZSB5b3UgY2FuIHN0aWxsIHVzZSBpdCBsYXRlciB3aXRoIGEgcmFuZG9taXplIGJ1dHRvbiB3aGVuIHlvdSBhZGQgZHJhZyBhbmQgZHJvcCBmZWF0dXJlKSBhbmQgZWFzaWVyIHRvIGltcGxlbWVudCwganVzdCB1c2UgTWF0aC5yYW5kb20gYW5kIGlmIFwiUGxhY2VtZW50X2ZhaWxlZFwiLCBydW4gdGhlIHBsYWNlU2hpcCBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNoaXAgYWdhaW4uIChEb25lKVxuXG4gICAgLy8gQWxzbyB1c2UgTWF0aC5yYW5kb20gZnVuY3Rpb24gdG8gY2hvb3NlIHBvc2l0aW9ucyAwIHRvIDMgYmVjYXVzZSA0IG9wdGlvbnMuIFB1dCB0aGUgb3B0aW9ucyBpbiBhbiBhcnJheS4gKERvbmUpXG5cbiAgICAvLyBDaGFuZ2UgdGhlIGNvb3JkaW5hdGVzIGRpc3BsYXkgdG8gdGhlIGRlZmF1bHQgQmF0dGxlc2hpcCBzdHlsZS4gTGV0dGVyIGFuZCBOdW1iZXIgZS5nOiBBMSxCOSxFNyxldGMuIFxuXG4gICAgLy8gQ3JlYXRlIHBhc3MgZGV2aWNlIHNjcmVlbiBmb3IgMiBwbGF5ZXIgb3B0aW9uLlxuXG4gICAgLy8gSW5jbHVkZSBhIGdhbWUgcmVzdGFydCBidXR0b24gdGhhdCBjbGVhcnMgYWxsIHN0YXRlIGFuZCByZWNyZWF0ZXMgdGhlIGVudGlyZSBib2FyZCB3aXRoIG5ldyByYW5kb20gc2hpcCBwbGFjZW1lbnRzLiAoQ3JlYXRlIGEgZnVuY3Rpb24gaW4gdHVybnN0YXRlIHRoYXQgcmVzZXRzIHBsYXllciB0dXJuIHRvIHBsYXllciBvbmUgYW5kIGNhbGwgaXQgd2hlbiB0aGUgcmVzdGFydCBidXR0b24gaXMgY2xpY2tlZCkuXG5cbiAgICAvLyBjcmVhdGUgdGVzdHMgZm9yIGhpdE1hcCBvbmUgZm9yIGhpdCBhbmQgb25lIGZvciBtaXNzLiAoSGF2ZW4ndCBjcmVhdGVkIHRoaXMgeWV0IC0gZW5zdXJlcyB5b3UgY2FuIHJlZmFjdG9yIHNhZmVseSBsYXRlciBvbikuXG4gICAgLy8gY29uc29sZS5sb2cocGxheWVyMS5ib2FyZC5wbGFjZVNoaXAoe3g6OSx5Ojl9LCBcIm5vcnRoXCIsIHBsYXllcjFDYXJyaWVyKSk7XG4gICAgLy8gcGxheWVyMS5ib2FyZC5wbGFjZVNoaXAoe3g6MCx5OjB9LCBcImVhc3RcIiwgcGxheWVyMUJhdHRsZXNoaXApO1xuICAgIC8vIHBsYXllcjEuYm9hcmQucGxhY2VTaGlwKHt4OjUseTo1fSwgXCJlYXN0XCIsIHBsYXllcjFEZXN0cm95ZXIpO1xuICAgIC8vIHBsYXllcjEuYm9hcmQucGxhY2VTaGlwKHt4OjIseToyfSwgXCJlYXN0XCIsIHBsYXllcjFTdWJtYXJpbmUpO1xuICAgIC8vIHBsYXllcjEuYm9hcmQucGxhY2VTaGlwKHt4OjkseTowfSwgXCJzb3V0aFwiLCBwbGF5ZXIxUGF0cm9sQm9hdCk7XG5cblxuXG4gICAgLy8gY29uc29sZS5sb2cocGxheWVyMi5ib2FyZC5wbGFjZVNoaXAoe3g6OSx5Ojl9LCBcIm5vcnRoXCIsIHBsYXllcjJDYXJyaWVyKSk7XG4gICAgLy8gcGxheWVyMi5ib2FyZC5wbGFjZVNoaXAoe3g6MCx5OjB9LCBcImVhc3RcIiwgcGxheWVyMkJhdHRsZXNoaXApO1xuICAgIC8vIHBsYXllcjIuYm9hcmQucGxhY2VTaGlwKHt4OjUseTo1fSwgXCJlYXN0XCIsIHBsYXllcjJEZXN0cm95ZXIpO1xuICAgIC8vIHBsYXllcjIuYm9hcmQucGxhY2VTaGlwKHt4OjIseToyfSwgXCJlYXN0XCIsIHBsYXllcjJTdWJtYXJpbmUpO1xuICAgIC8vIHBsYXllcjIuYm9hcmQucGxhY2VTaGlwKHt4OjkseTowfSwgXCJzb3V0aFwiLCBwbGF5ZXIyUGF0cm9sQm9hdCk7XG5cbiAgICBmdW5jdGlvbiBwbGFjZUFsbFNoaXBzIChwbGF5ZXIsIHNoaXBzQXJyYXkpe1xuXG4gICAgICAgIFxuICAgICAgICBzaGlwc0FycmF5LmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKGNyZWF0ZVJhbmRvbUNvb3JkcygpLCBjaG9vc2VEaXJlY3Rpb24oKSwgc2hpcClcblxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gXCJQbGFjZW1lbnRfZmFpbGVkXCIpIHtcblxuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBwbGFjZUFsbFNoaXBzKHBsYXllciwgW3NoaXBdKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBcIlBsYWNlbWVudF9zdWNjZXNzXCIpIHtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWxsIHNoaXBzIHN1Y2Nlc3NmdWxseSBwbGFjZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJhbmRvbUNvb3JkcyAoKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuXG4gICAgICAgIHJldHVybntcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGNob29zZURpcmVjdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgZGlyZWN0aW9uQXJyYXkgPSBbXCJub3J0aFwiLCBcInNvdXRoXCIsIFwiZWFzdFwiLCBcIndlc3RcIl07XG5cbiAgICAgICAgLy8gZnJvbSAwIHRvIDNcbiAgICAgICAgY29uc3QgY2hvb3NlUmFuZG9tRGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjQpO1xuXG4gICAgICAgIGlmIChjaG9vc2VSYW5kb21EaXJlY3Rpb24gPiAzIHx8IGNob29zZVJhbmRvbURpcmVjdGlvbiA8IDApIHtcbiAgICAgICAgICAgIHRocm93KFwiQ2hvb3NlIFJhbmRvbSBEaXJlY3Rpb24gaXMgbm90IHdvcmtpbmcgY29ycmVjdGx5XCIpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGlyZWN0aW9uQXJyYXlbY2hvb3NlUmFuZG9tRGlyZWN0aW9uXVxuXG4gICAgfVxuXG5cbiAgICBwbGFjZUFsbFNoaXBzKHBsYXllcjEsIGFsbFBsYXllcjFTaGlwcyk7XG4gICAgcGxhY2VBbGxTaGlwcyhwbGF5ZXIyLCBhbGxQbGF5ZXIyU2hpcHMpXG5cbiAgICAvLyBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTA7IGluZGV4KyspIHtcblxuICAgICAgICBcbiAgICAvLyAgICAgcGxheWVyMS5ib2FyZC5yZWNlaXZlQXR0YWNrKDksaW5kZXgpXG4gICAgLy8gICAgIHBsYXllcjEuYm9hcmQucmVjZWl2ZUF0dGFjayhpbmRleCxpbmRleClcbiAgICAvLyB9XG5cblxuICAgIC8vIHBsYXllcjIuYm9hcmQucGxhY2VTaGlwKHt4OjkseTo5fSwgXCJ3ZXN0XCIsIHBsYXllcjJDYXJyaWVyKTtcbiAgICAvLyBwbGF5ZXIyLmJvYXJkLnBsYWNlU2hpcCh7eDowLHk6MH0sIFwiZWFzdFwiLCBwbGF5ZXIyQmF0dGxlc2hpcCk7XG4gICAgLy8gcGxheWVyMi5ib2FyZC5wbGFjZVNoaXAoe3g6NSx5OjV9LCBcImVhc3RcIiwgcGxheWVyMkRlc3Ryb3llcik7XG4gICAgLy8gcGxheWVyMi5ib2FyZC5wbGFjZVNoaXAoe3g6Mix5OjJ9LCBcImVhc3RcIiwgcGxheWVyMlN1Ym1hcmluZSk7XG4gICAgLy8gcGxheWVyMi5ib2FyZC5wbGFjZVNoaXAoe3g6OSx5OjV9LCBcInNvdXRoXCIsIHBsYXllcjJQYXRyb2xCb2F0KTtcblxuXG4gICAgLy8gZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7XG5cbiAgICAvLyAgICAgcGxheWVyMi5ib2FyZC5yZWNlaXZlQXR0YWNrKGluZGV4LGluZGV4KVxuICAgIC8vIH1cblxuXG4gICAgLy8gSSBwcm9iYWJseSBjYW4gcmVtb3ZlIHBsYXllci50eXBlIGFuZCBpdCBtaWdodCBzdGlsbCB3b3JrIGNvcnJlY3RseS5cbiAgICBwbGF5ZXIxQm9hcmQgPSBwb3B1bGF0ZVBsYXllcjFCb2FyZChwbGF5ZXIxKTtcbiAgICBwbGF5ZXIyQm9hcmQgPSBwb3B1bGF0ZVBsYXllcjJCb2FyZChwbGF5ZXIyKTtcblxuICAgXG5cblxuICAgIC8vIFRoZSBvbmVzIGJlbG93IHN0YXkgYXMgaXQgaXMuXG5cbiAgICBwbGF5ZXIxQm9hcmQuZGlzcGxheUdyaWRzKClcblxuICAgIHBsYXllcjFCb2FyZC5zaG93U2hpcHMoKVxuXG4gICAgXG5cblxuICAgIHBsYXllcjJCb2FyZC5kaXNwbGF5R3JpZHMoKVxuXG4gICAgcGxheWVyMkJvYXJkLnNob3dIaXRNYXAoKVxuXG4gXG5cblxuXG59XG5cblxuXG5cblxuXG5jb25zdCB0dXJuU3RhdGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGxldCBwbGF5ZXJUdXJuID0gXCJwbGF5ZXIxXCI7XG5cbiAgICBcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVR1cm4oKSB7XG5cbiAgICAgICAgLy8gUHJldmVudHMgY29tcHV0ZXIgZnJvbSBwbGF5aW5nXG4gICAgICAgIGlmIChpc0dhbWVPdmVyKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHBsYXllclR1cm4gPT09IFwicGxheWVyMVwiKSB7XG4gICAgICAgICAgICBwbGF5ZXJUdXJuID0gXCJwbGF5ZXIyXCJcblxuICAgICAgICAgICAgcGxheWVyMUJvYXJkLmRlbGV0ZUdyaWRzKCk7XG4gICAgICAgICAgICBwbGF5ZXIxQm9hcmQuZGlzcGxheUdyaWRzKCk7XG4gICAgICAgICAgICBwbGF5ZXIxQm9hcmQuc2hvd0hpdE1hcCgpO1xuXG4gICAgICAgICAgICBwbGF5ZXIyQm9hcmQuZGVsZXRlR3JpZHMoKTtcbiAgICAgICAgICAgIHBsYXllcjJCb2FyZC5kaXNwbGF5R3JpZHMoKTtcbiAgICAgICAgICAgIHBsYXllcjJCb2FyZC5zaG93U2hpcHMoKTtcbiAgICAgICAgICAgIHBsYXllcjJCb2FyZC5zaG93SGl0TWFwKCk7XG5cblxuICAgICAgICAgICAgaWYgKHBsYXllcjJCb2FyZC5wbGF5ZXIyLnR5cGUgPT09ICdjb21wdXRlcicpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlckF0dGFja3MocGxheWVyMUJvYXJkLnBsYXllcjEpXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGxheWVyVHVybiA9PT0gXCJwbGF5ZXIyXCIpIHtcbiAgICAgICAgICAgIHBsYXllclR1cm4gPSBcInBsYXllcjFcIlxuXG4gICAgICAgICAgICBwbGF5ZXIyQm9hcmQuZGVsZXRlR3JpZHMoKTtcbiAgICAgICAgICAgIHBsYXllcjJCb2FyZC5kaXNwbGF5R3JpZHMoKTtcbiAgICAgICAgICAgIHBsYXllcjJCb2FyZC5zaG93SGl0TWFwKCk7XG5cbiAgICAgICAgICAgIHBsYXllcjFCb2FyZC5kZWxldGVHcmlkcygpO1xuICAgICAgICAgICAgcGxheWVyMUJvYXJkLmRpc3BsYXlHcmlkcygpO1xuICAgICAgICAgICAgcGxheWVyMUJvYXJkLnNob3dTaGlwcygpO1xuICAgICAgICAgICAgcGxheWVyMUJvYXJkLnNob3dIaXRNYXAoKTtcblxuICAgICAgICAgICAgaWYgKHBsYXllcjFCb2FyZC5wbGF5ZXIxLnR5cGUgPT09ICdjb21wdXRlcicpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlckF0dGFja3MocGxheWVyMkJvYXJkLnBsYXllcjIpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VHVybigpIHtcbiAgICAgICAgcmV0dXJuIHBsYXllclR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNHYW1lT3ZlciAoKSB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwbGF5ZXIxTG9zZXMgPSBwbGF5ZXIxQm9hcmQucGxheWVyMS5ib2FyZC5hbGxTdW5rKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllcjFMb3Nlcyk7XG5cbiAgICAgICAgY29uc3QgcGxheWVyMkxvc2VzID0gcGxheWVyMkJvYXJkLnBsYXllcjIuYm9hcmQuYWxsU3VuaygpO1xuICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIyTG9zZXMpO1xuXG4gICAgICAgIGlmIChwbGF5ZXIxTG9zZXMpIHtcbiAgICAgICAgICAgIHVwZGF0ZUhlYWRlcihcIlBsYXllciAyIHdpbnMhXCIpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbGF5ZXIyTG9zZXMpIHtcbiAgICAgICAgICAgIHVwZGF0ZUhlYWRlcihcIlBsYXllciAxIHdpbnMhXCIpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICB1cGRhdGVUdXJuLFxuICAgICAgICBnZXRUdXJuLFxuICAgICAgICBpc0dhbWVPdmVyXG4gICAgfVxufSkoKVxuXG5cbmxldCB0ZXN0ID0gMFxuXG5mdW5jdGlvbiBjb21wdXRlckF0dGFja3MgKHBsYXllcikge1xuXG4gICAgY29uc29sZS5sb2coXCJDb21wdXRlciBhdHRhY2tzXCIpO1xuXG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBwbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayh4LHkpXG5cbiAgICAvLyBjb25zb2xlLmxvZyhcIkNvb3JkczogXCIreCx5KVxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICBpZiAocmVzdWx0ID09PSBcIkFscmVhZHkgSGl0XCIgfHwgcmVzdWx0ID09IFwiQWxyZWFkeSBNaXNzXCIpIHtcbiAgICAgICAgIHJldHVybiBjb21wdXRlckF0dGFja3MocGxheWVyKVxuICAgIH1cblxuICAgXG5cbiAgICAvLyBjb25zb2xlLmxvZyhcIkNvbXB1dGVyIGhhcyBzdWNjZXNzZnVsbHkgYXR0YWNrZWQuXCIpO1xuXG4gICAgY29uc3QgbGV0dGVyQXJyYXlYID0gW1wiQVwiLFwiQlwiLFwiQ1wiLFwiRFwiLFwiRVwiLFwiRlwiLFwiR1wiLFwiSFwiLFwiSVwiLFwiSlwiXTtcblxuICAgICAgICBjb25zdCBudW1iZXJBcnJheVkgPSBbMTAsOSw4LDcsNiw1LDQsMywyLDFdO1xuXG4gICAgdXBkYXRlSGVhZGVyKGBDb21wdXRlciBjaG9zZSAke2xldHRlckFycmF5WFt4XX0ke251bWJlckFycmF5WVt5XX0gYW5kIGl0J3MgYSAke3Jlc3VsdC50b0xvd2VyQ2FzZSgpfWApO1xuICAgIHR1cm5TdGF0ZS51cGRhdGVUdXJuKCk7XG5cbiAgIFxuICAgIHRlc3QrK1xuICAgIGNvbnNvbGUubG9nKCdDb21wdXRlciBhdHRhY2tzOicgKyB0ZXN0KVxuICAgIHJldHVybiBcbn1cblxuXG5leHBvcnQge1xuICAgIGdhbWVGbG93LFxuICAgIHR1cm5TdGF0ZVxufSIsImZ1bmN0aW9uIGNyZWF0ZUdhbWVib2FyZCgpe1xuICAgIGNvbnN0IG93bkdyaWQgPSBjcmVhdGVHcmlkKCk7XG4gICAgY29uc3QgaGl0TWFwID0gY3JlYXRlR3JpZCgpO1xuICAgIGNvbnN0IHBsYWNlZFNoaXBzID0gW107XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVHcmlkICgpIHtcblxuICAgICAgICBjb25zdCBuZXdHcmlkID0gW107XG5cbiAgICAgICAgY29uc3QgZ3JpZFNpemUgPSAxMDtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZ3JpZFNpemU7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBbXVxuICAgICAgICAgICAgcm93cy5sZW5ndGggPSAxMDtcblxuICAgICAgICAgICAgbmV3R3JpZFtpbmRleF0gPSByb3dzXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3R3JpZDtcbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwIChjb29yZGluYXRlcywgZGlyZWN0aW9uLCBzaGlwT2JqZWN0KSB7XG5cblxuICAgICAgICBjb25zdCBwb3RlbnRpYWxDb29yZHMgPSBnZXRDb29yZGluYXRlcyhjb29yZGluYXRlcywgZGlyZWN0aW9uLCBzaGlwT2JqZWN0KTtcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVkQ29vcmRzID0gcG90ZW50aWFsQ29vcmRzLnBvdGVudGlhbENvb3JkaW5hdGVzO1xuICAgICAgICBsZXQgcGxhY2VtZW50VmFsaWRpdHkgPSBwb3RlbnRpYWxDb29yZHMudmFsaWRpdHk7XG4gICAgICAgIGxldCBwbGFjZW1lbnRNc2cgPSBcIlBsYWNlbWVudF9zdWNjZXNzXCJcblxuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAvLyAgICBDaGVja3MgaWYgb3ZlcmxhcHBpbmcgc2hpcHMgZXhpc3RcbiAgICAgICAgcGxhY2VtZW50VmFsaWRpdHkgPSBjaGVja1BsYWNlbWVudFZhbGlkaXR5KHBsYWNlbWVudFZhbGlkaXR5LCBnZW5lcmF0ZWRDb29yZHMsIG93bkdyaWQpO1xuICAgIFxuICAgICAgICBcblxuICAgICAgICBpZiAoIXBsYWNlbWVudFZhbGlkaXR5KSB7XG4gICAgICAgICAgICBwbGFjZW1lbnRNc2cgPSBcIlBsYWNlbWVudF9mYWlsZWRcIlxuICAgICAgICAgICAgcmV0dXJuIHBsYWNlbWVudE1zZ1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIGdlbmVyYXRlZENvb3Jkcy5mb3JFYWNoKGNvb3JkcyA9PiB7XG5cbiAgICAgICAgICAgIG93bkdyaWRbY29vcmRzWzBdXVtjb29yZHNbMV1dID0gc2hpcE9iamVjdDtcblxuXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgcGxhY2VkU2hpcHMucHVzaChzaGlwT2JqZWN0KVxuICBcblxuICAgICAgIHJldHVybiBwbGFjZW1lbnRNc2dcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayAoeCwgeSkge1xuXG4gICAgICAgIGlmIChoaXRNYXBbeF1beV0gPT09IFwiTWlzc1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJBbHJlYWR5IE1pc3NcIlxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvd25HcmlkW3hdW3ldKSB7XG4gICAgICAgICAgICBoaXRNYXBbeF1beV0gPSBcIk1pc3NcIlxuICAgICAgICAgICAgcmV0dXJuIFwiTWlzc1wiXG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChoaXRNYXBbeF1beV0gPT09IFwiSGl0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkFscmVhZHkgSGl0XCI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaGlwID0gb3duR3JpZFt4XVt5XTtcbiAgICAgICAgc2hpcC5oaXQoKVxuICAgICAgICBoaXRNYXBbeF1beV0gPSAnSGl0JztcbiAgICAgICAgcmV0dXJuIFwiSGl0XCJcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbGxTdW5rICgpIHtcblxuICAgICAgICBsZXQgZXZlcnlTaGlwU3VuayA9IHRydWU7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBsYWNlZFNoaXBzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IHBsYWNlZFNoaXBzW2luZGV4XTtcblxuICAgICAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgZXZlcnlTaGlwU3VuayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXZlcnlTaGlwU3Vua1xuICAgIH1cbiAgICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIG93bkdyaWQsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgYWxsU3VuayxcbiAgICAgICAgaGl0TWFwXG4gICAgfVxuXG5cblxufVxuXG5cbmZ1bmN0aW9uIGdldENvb3JkaW5hdGVzIChjb29yZGluYXRlcywgZGlyZWN0aW9uLCBzaGlwT2JqZWN0KSB7XG5cbiAgICBsZXQgdmFsaWRpdHkgPSB0cnVlO1xuXG4gICAgY29uc3QgcG90ZW50aWFsQ29vcmRpbmF0ZXMgPSBbXVxuXG4gICAgXG4gICAgaWYgKGNvb3JkaW5hdGVzLnggPCAwIHx8IGNvb3JkaW5hdGVzLnkgPCAwIHx8IGNvb3JkaW5hdGVzLnggPiA5IHx8IGNvb3JkaW5hdGVzLnkgPiA5ICkge1xuICAgICAgICAgICAgXG4gICAgICAgIHZhbGlkaXR5ID0gZmFsc2VcblxuICAgICAgICByZXR1cm4gdmFsaWRpdHlcblxuICAgIH1cblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwT2JqZWN0LmdldExlbmd0aCgpOyBpbmRleCsrKSB7XG5cbiAgICAgICAgXG4gICAgICAgIGxldCB4Y29vcmRzO1xuICAgICAgICBsZXQgeWNvb3JkcztcblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcIm5vcnRoXCIpIHtcbiAgICAgICAgICAgIHhjb29yZHMgPSBjb29yZGluYXRlcy54XG4gICAgICAgICAgICB5Y29vcmRzID0gY29vcmRpbmF0ZXMueSAtIGluZGV4O1xuXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcInNvdXRoXCIpIHtcblxuICAgICAgICAgICAgeGNvb3JkcyA9IGNvb3JkaW5hdGVzLnhcbiAgICAgICAgICAgIHljb29yZHMgPSBjb29yZGluYXRlcy55ICsgaW5kZXg7XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcImVhc3RcIikge1xuXG4gICAgICAgICAgICB4Y29vcmRzID0gY29vcmRpbmF0ZXMueCArIGluZGV4O1xuICAgICAgICAgICAgeWNvb3JkcyA9IGNvb3JkaW5hdGVzLnk7IFxuXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcIndlc3RcIikge1xuICAgICAgICAgICAgeGNvb3JkcyA9IGNvb3JkaW5hdGVzLnggLSBpbmRleDtcbiAgICAgICAgICAgIHljb29yZHMgPSBjb29yZGluYXRlcy55OyBcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHhjb29yZHMgPCAwIHx8IHljb29yZHMgPCAwIHx8IHhjb29yZHMgPiA5IHx8IHljb29yZHMgPiA5ICkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YWxpZGl0eSA9IGZhbHNlXG5cbiAgICAgICAgfVxuXG4gICAgICAgIHBvdGVudGlhbENvb3JkaW5hdGVzLnB1c2goW3hjb29yZHMseWNvb3Jkc10pXG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICBcbiAgICAgICAgdmFsaWRpdHksXG4gICAgICAgIHBvdGVudGlhbENvb3JkaW5hdGVzXG4gICAgfVxufVxuXG5cblxuZnVuY3Rpb24gY2hlY2tQbGFjZW1lbnRWYWxpZGl0eSAocGxhY2VtZW50VmFsaWRpdHksIGdlbmVyYXRlZENvb3Jkcywgb3duR3JpZCkge1xuXG4gICAgaWYgKCFwbGFjZW1lbnRWYWxpZGl0eSkge1xuICAgICAgICByZXR1cm4gcGxhY2VtZW50VmFsaWRpdHlcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZ2VuZXJhdGVkQ29vcmRzLmxlbmd0aDsgaW5kZXgrKykge1xuXG5cbiAgICAgICAgY29uc3QgY29vcmRzID0gZ2VuZXJhdGVkQ29vcmRzW2luZGV4XTtcbiAgIFxuICAgICAgICBjb25zdCBzaGlwID0gb3duR3JpZFtjb29yZHNbMF1dW2Nvb3Jkc1sxXV1cblxuICAgICAgICBpZiAoc2hpcCkge1xuICAgICAgICAgICAgcGxhY2VtZW50VmFsaWRpdHkgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gcGxhY2VtZW50VmFsaWRpdHlcbn1cblxuXG5leHBvcnR7XG4gICAgY3JlYXRlR2FtZWJvYXJkLFxuICAgIGdldENvb3JkaW5hdGVzLFxuICAgIGNoZWNrUGxhY2VtZW50VmFsaWRpdHlcbn0iLCJpbXBvcnQgeyBjcmVhdGVHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRGYWN0b3J5XCJcblxuZnVuY3Rpb24gY3JlYXRlUGxheWVyICh0eXBlLCBlbmVteUhpdG1hcCwgYXR0YWNrRW5lbXkpIHtcbiAgICBjb25zdCBib2FyZCA9IGNyZWF0ZUdhbWVib2FyZCgpO1xuXG4gICAgaWYgKCEodHlwZSA9PT0gXCJyZWFsXCIgfHwgdHlwZSA9PT0gXCJjb21wdXRlclwiKSkge1xuICAgICAgICByZXR1cm4gXCJJbnZhbGlkX2lucHV0XCI7XG4gICAgfVxuICAgIC8vIFBsYXllciBsb2dpYyBhbmQgY29tcHV0ZXIgbG9naWMgaXMgbm90IGNvbXBsZXRlLlxuXG4gICAgaWYgKHR5cGUgPT09IFwicmVhbFwiKSB7XG4gICAgXG4gICAgICAgIC8vIGNyZWF0ZSBwbGF5ZXJcbiAgICAgICAgLy8gY3JlYXRlIGJvYXJkXG4gICAgICAgIC8vIC0gQWxyZWFkeSBkb25lIGFib3ZlXG5cbiAgICAgICAgLy8gRG8gYWxsIHRoaXMgbG9naWMgaW5zaWRlIGhlcmUgb3Igb24gYSBkaWZmZXJlbnQgbW9kdWxlP1xuXG4gICAgICAgIC8vIHBsYWNlIHNoaXBzICh3aGF0IHR5cGVzIG9mIHNoaXAgYW5kIGhvdyBtYW55PylcbiAgICAgICAgLy8gLSBjcmVhdGUgNSB0eXBlcyBvZiBzaGlwcyBhbmQgcGxhY2UgdGhlbVxuXG4gICAgICAgIC8vIEdBTUVGTE9XIEJFR0lOU1xuICAgICAgICAvLyBleGVjdXRlIG9wcG9uZW50J3MgcmVjZWl2ZUF0dGFjayBmdW5jdGlvblxuICAgICAgICAvLyBpZiBvcHBvbmVudCBhbGxTdW5rKCkgaXMgZmFsc2UsIHRoZW4gb3Bwb25lbnQgZXhlY3V0ZXMgeW91ciByZWNlaXZlQXR0YWNrIGZ1bmN0aW9uXG4gICAgICAgIC8vIGlmIG9wcG9uZW50IGFsbFN1bmsoKSBpcyB0cnVlLCB0aGVuIHlvdSB3aW4uXG4gICAgICAgIC8vIFRoZSBhYm92ZSBhcHBsaWVzIHRvIG9wcG9uZW50IGFzIHdlbGwuXG4gICAgICAgIC8vIGlmIHlvdSBhY2NpZGVudGx5IGNob29zZSBncmlkcyB0aGF0IHdlcmUgYWxyZWFkeSBoaXQgb3IgbWlzc2VkLCB5b3Ugd2lsbCBiZSBwcm9tcHRlZCB0byB0cnkgYWdhaW5cbiAgICAgICAgXG4gICAgICAgIC8vIFVJXG4gICAgICAgIC8vIE9wcG9uZW50IHdpbGwgb25seSBzZWUgeW91ciBncmlkIGFzIGhpdCBtYXAgYW5kIHZpY2UgdmVyc2EuXG4gICAgICAgIC8vIEF0IGV2ZXJ5IHR1cm4sIHRoZSBlbnRpcmUgRE9NIHdpbGwgcmVuZGVyIG93bkdyaWQgYW5kIGVuZW15IGhpdG1hcCBhbmQgdmljZSB2ZXJzYS5cblxuICAgIFxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgICAgXG4gICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgZXhjZXB0IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSBpcyB1c2VkIHdpdGggcmVjZWl2ZUF0dGFjayBmb3IgY29vcmRpbmF0ZXNcbiAgICAgICAgLy8gY3JlYXRlIGEgZnVuY3Rpb24gdGhhdCBydW5zIE1hdGguZmxvb3IsIGFuZCB0ZXN0IGl0LlxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIGJvYXJkXG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIG1hdGguZmxvb3IgZnVuY3Rpb24gc2VwYXJhdGVseSBiZWxvdyBoZXJlLlxuICAgIFxufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZVBsYXllclxufSIsImltcG9ydCB7IGN1cnJlbnRUdXJuLCB0dXJuU3RhdGUgfSBmcm9tIFwiLi9nYW1lRmxvd1wiO1xuXG5pbXBvcnQgeyB1cGRhdGVIZWFkZXIgfSBmcm9tIFwiLi9yZW5kZXJET01cIjtcblxuLy8gSG93IGRvIHlvdSByZW5kZXIgdGhlIGJvYXJkP1xuXG4vLyBzZWxlY3QgdGhlIHBsYXllciBib3JkZXIgZ3JpZHMgZmlyc3QuXG5cbi8vIHRoZW4gaW1wb3J0IGFuZCBsb29wIHRocm91Z2ggb3duR3JpZCBhbmQgaGl0bWFwXG5cbi8vIHRoaXMgZnVuY3Rpb24gaGFzIHRvIGJlIHJldXNhYmxlIGZvciBib3RoIHBsYXllciAxIGFuZCBwbGF5ZXIgMi5cblxuLy8gaXQgd2lsbCBjaGVjayB3aG9zZSB0dXJuIGFuZCB0eXBlIG9mIHBsYXllciB0aGUgcGxheWVyIGlzIHBsYXlpbmcgd2l0aC5cblxuLy8gaWYgcGxheWluZyBhZ2FpbnRzIGFpIGl0IHdpbGwgb25seSBldmVyIHJlbmRlciB0aGUgYWkgcGxheWVyJ3MgaGl0bWFwLiBuZXZlciByZW5kZXJzIGFpIHBsYXllcidzIG9ud0dyaWQuXG5cbi8vIGlmIHBsYXlpbmcgYWdhaW5zdCBhbm90aGVyIHBsYXllciBhZnRlciBhIHBsYXllciBhdHRhY2tzLCBhIGZpeGVkIGJsYWNrIGRpdiB3aWxsIGNvdmVyIHVwIHRoZSBlbnRpcmUgc2NyZWVuIGFuZCBzaG93IGEgdGV4dCBvZiB3aGV0aGVyIHRoZSBwbGF5ZXIgaGl0IG9yIG1pc3MsIGFsc28gc2hvd3Mgd2hvc2UgdHVybiBpcyBuZXh0IHdpdGggYSBidXR0b24gbGFiZWxsZWQgXCJzdGFydCB0dXJuXCIuIHdpdGggdGhlIG5leHQgcGxheWVyJ3MgZ3JpZHMgYW5kIGhpdG1hcHMgYWxyZWFkdCByZW5kZXJlZCBiZWhpbmQgdGhlIGJsYWNrIGRpdi5cblxuLy8gc2hpcHMgYXJlIGRpc3BsYXllZCBpbiBkYXJrIGdyZXkgY29sb3VyXG5cbi8vIGhpdHMgYXJlIGRpc3BsYXllZCBpbiByZWRcblxuLy8gbWlzc2VzIGFyZSBkaXNwbGF5ZWQgaW4gd2hpdGVcblxuXG5cblxuLy8gZmlyc3QgeW91IG11c3QgZ2V0IG93bkdyaWQgb2YgcGxheWVyIG9uZSBhbmQgZGlzcGxheSB0aGUgZ3JpZHMgY29ycmVjdGx5LlxuXG4vLyBUaGVuIHlvdSBtdXN0IGdldCBwbGF5ZXIgdHdvJ3MgaGl0bWFwIGFuZCBkaXNwbGF5IHRoZSBncmlkcyBjb3JyZWN0bHkuXG5cbi8vIGFmdGVyIHRoYXQgeW91IG11c3QgY3JlYXRlIGFub3RoZXIgZnVudGlvbiB0byBkaXNwbGF5IHNoaXBzIGNvcnJlY3RseS4gLWFkZCBjbGFzc2VzIHRvIHRoZSBjb3JyZWN0IGdyaWRzLlxuXG4vLyBUaGVuIHlvdSBjcmVhdGUgYW5vdGhlciBmdW5jdGlvbiB0byByZW5kZXIgaGl0bWFwIGNvcnJlY3RseS5cblxuLy8gSGl0bWFwIHdpbGwgYmUgZGlzcGxheWVkIG9uIHBsYXllciBvbmUgZ3JpZCBhbmQgcGxheWVyIHR3byBncmlkLlxuXG4vLyBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBncmlkcy4gKERPTkUpXG5cblxuLy8gYWRkIGNvb3JkaW5hdGVzIGFzIGFuIG9iamVjdCBcImNvbnN0IGNvb3JkcyA9IHt4OjAseTowfVwiIGluc2lkZSBhZGRldmVudGxpc3RlbmVyIGNhbGxiYWNrIGZ1bmN0aW9uPyB1c2UgY29sdW1uSW5kZXggYW5uZCByb3dJbmRleD8gKERPTkUpXG5cblxuXG4vLyByZWZhY3RvciBpZiBuZWNlc3NhcnlcbmZ1bmN0aW9uIHBvcHVsYXRlUGxheWVyMUJvYXJkIChwbGF5ZXIxKXtcbiAgICBjb25zdCBwbGF5ZXIxR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIxLWdyaWQnKTtcblxuXG4gICAgXG4gICAgZnVuY3Rpb24gZGlzcGxheUdyaWRzKCkge1xuICAgICAgICBjcmVhdGVHcmlkcyhwbGF5ZXIxLCBwbGF5ZXIxR3JpZCwgXCJwbGF5ZXIxXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUdyaWRzKCkge1xuICAgICAgICB3aGlsZSAocGxheWVyMUdyaWQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgcGxheWVyMUdyaWQuZmlyc3RDaGlsZC5yZW1vdmUoKVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBzaG93U2hpcHMoKSB7XG4gICAgICAgIGRpc3BsYXlTaGlwcyhudWxsLHBsYXllcjEsIHBsYXllcjFHcmlkKTtcbiAgICB9XG4gICAgXG5cblxuXG4gICAgZnVuY3Rpb24gc2hvd0hpdE1hcCgpIHtcbiAgICAgICAgZGlzcGxheUhpdE1hcChwbGF5ZXIxLCBwbGF5ZXIxR3JpZCk7XG4gICAgfVxuXG4gICBcblxuICAgXG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXlHcmlkcyxcbiAgICAgICAgZGVsZXRlR3JpZHMsXG4gICAgICAgIHNob3dTaGlwcyxcbiAgICAgICAgc2hvd0hpdE1hcCxcbiAgICAgICAgcGxheWVyMVxuICAgIH1cblxufVxuXG4vLyBNZXJnZSBpdCBpbnRvIG9uZSBmdW5jdGlvbiAtIGFib3ZlXG5mdW5jdGlvbiBwb3B1bGF0ZVBsYXllcjJCb2FyZCAocGxheWVyMikge1xuXG4gICAgY29uc3QgcGxheWVyMkdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMi1ncmlkJyk7XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5R3JpZHMgKCkge1xuICAgICAgICBjcmVhdGVHcmlkcyhwbGF5ZXIyLCBwbGF5ZXIyR3JpZCwgXCJwbGF5ZXIyXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUdyaWRzKCkge1xuICAgICAgICB3aGlsZSAocGxheWVyMkdyaWQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgcGxheWVyMkdyaWQuZmlyc3RDaGlsZC5yZW1vdmUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1NoaXBzICgpIHtcbiAgICAgICAgZGlzcGxheVNoaXBzKG51bGwscGxheWVyMiwgcGxheWVyMkdyaWQpO1xuICAgIH1cbiAgICBcblxuICAgIGZ1bmN0aW9uIHNob3dIaXRNYXAgKCkge1xuICAgICAgICBkaXNwbGF5SGl0TWFwKHBsYXllcjIsIHBsYXllcjJHcmlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXNwbGF5R3JpZHMsXG4gICAgICAgIGRlbGV0ZUdyaWRzLFxuICAgICAgICBzaG93U2hpcHMsXG4gICAgICAgIHNob3dIaXRNYXAsXG4gICAgICAgIHBsYXllcjJcbiAgICB9XG4gICAgXG4gICAgXG59XG5cblxuXG5mdW5jdGlvbiBjcmVhdGVHcmlkcyAocGxheWVyLCBwbGF5ZXJET01HcmlkLCBpc1BsYXllcikge1xuICAgIC8vIHB1dCB0aGUgZ3JpZCBtYWtpbmcgbG9vcCBiZWxvdyBpbnNpZGUgaGVyZVxuXG4gICAgZm9yIChsZXQgY29sdW1uSW5kZXggPSAwOyBjb2x1bW5JbmRleCA8IHBsYXllci5ib2FyZC5vd25HcmlkLmxlbmd0aDsgY29sdW1uSW5kZXgrKykge1xuICAgICAgICBjb25zdCBjb2x1bW4gPSBwbGF5ZXIuYm9hcmQub3duR3JpZFtjb2x1bW5JbmRleF07XG5cblxuICAgICAgICBjb25zdCBncmlkQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdyaWRDb2x1bW4uY2xhc3NMaXN0LmFkZChcImdyaWQtY29sdW1uXCIpO1xuICAgICAgICAvLyBncmlkQ29sdW1uLnRleHRDb250ZW50ID0gY29sdW1uSW5kZXhcbiAgICAgICAgcGxheWVyRE9NR3JpZC5hcHBlbmQoZ3JpZENvbHVtbilcbiAgICAgICAgXG5cblxuICAgICAgICBmb3IgKGxldCByb3dJbmRleCA9IDk7IHJvd0luZGV4ID49IDA7IHJvd0luZGV4LS0pIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IGVsZW1lbnQgPSBjb2x1bW5bcm93SW5kZXhdO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJURVNUXCIpXG4gICAgICAgICAgICBjb25zdCBncmlkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBncmlkUm93LmNsYXNzTGlzdC5hZGQoXCJncmlkLXJvd1wiKTtcbiAgICAgICAgICAgIC8vIGdyaWRSb3cudGV4dENvbnRlbnQgPSByb3dJbmRleDtcbiAgICAgICAgICAgIGdyaWRDb2x1bW4uYXBwZW5kKGdyaWRSb3cpO1xuXG4gICAgICAgICAgIGNsaWNrQm9hcmQocGxheWVyLCBncmlkUm93LCBjb2x1bW5JbmRleCwgcm93SW5kZXgsIGlzUGxheWVyKVxuICAgICAgICB9XG5cbiAgICAgICBcbiAgICAgICAgXG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBkaXNwbGF5U2hpcHModG9EaXNwbGF5LCBwbGF5ZXIsIHBsYXllckRPTUdyaWQpIHtcbiAgICAgICAgLy8gaWYgcGxheWVyIDIgdHVybiBkb24ndCBkaXNwbGF5IHNoaXBzXG5cbiAgICAgICAgLy8gcmVtb3ZlIGxhdGVyXG4gICAgICAgIHRvRGlzcGxheSA9IHRydWVcblxuICAgICAgICBpZiAodG9EaXNwbGF5KSB7XG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggYWxsIG93bkdyaWQgZ3JpZHMgYXJyYXkgYW5kIGlmIG5vdCBlbXB0eSwgYXNzaWduIGEgZ3JleSBjbGFzcyB0byB0aGF0IGdyaWQuIFxuXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJDb2x1bW5zID0gcGxheWVyRE9NR3JpZC5jaGlsZE5vZGVzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBwbGF5ZXIuYm9hcmQub3duR3JpZC5sZW5ndGg7IGNvbEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dzID0gcGxheWVyLmJvYXJkLm93bkdyaWRbY29sSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgLy8gQm9hcmQgcmVuZGVycyB1cHNpZGUgZG93biBpZiBJIGRvbid0IHVzZSBcIm5vZGVSb3dJdGVyYXRvclwiLlxuICAgICAgICAgICAgICAgIGxldCBub2Rlc1Jvd0l0ZXJhdG9yID0gMFxuXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93Tm9kZXMgPSBwbGF5ZXJDb2x1bW5zW2NvbEluZGV4XS5jaGlsZE5vZGVzO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocm93Tm9kZXMpXG5cbiAgICAgICAgICAgICAgICAvLyBjb25zdCByZXZlcnNlZFJvd05vZGUgPSByb3dOb2Rlcy5yZXZlcnNlKCk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCByb3dJbmRleCA9IDk7IHJvd0luZGV4ID49IDA7IHJvd0luZGV4LS0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gcm93c1tyb3dJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRydWUpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd05vZGVzW25vZGVzUm93SXRlcmF0b3JdLmNsYXNzTGlzdC5hZGQoJ3NoaXAtbG9jYXRlZCcpXG5cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBub2Rlc1Jvd0l0ZXJhdG9yKytcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxufVxuXG5cblxuXG5mdW5jdGlvbiBkaXNwbGF5SGl0TWFwKHBsYXllcixwbGF5ZXJET01HcmlkKSB7XG5cbiAgICAvLyBwbGF5ZXIuYm9hcmQuaGl0TWFwXG5cbiAgICAvLyBkaXNwbGF5IGhpdG1hcCBhZnRlciBkaXNwbGF5IHNoaXAgcnVucywgVGhpcyBzaG91bGQgb3ZlcnJpZGUgdGhlIGNsYXNzZXMgb2YgZGlzcGxheVNoaXBzXG5cbiAgICBsZXQgdG9EaXNwbGF5ID0gdHJ1ZVxuXG4gICAgaWYgKHRvRGlzcGxheSkge1xuICAgICAgICAvLyBsb29wIHRocm91Z2ggYWxsIG93bkdyaWQgZ3JpZHMgYXJyYXkgYW5kIGlmIG5vdCBlbXB0eSwgYXNzaWduIGEgZ3JleSBjbGFzcyB0byB0aGF0IGdyaWQuIFxuXG4gICAgICAgIGNvbnN0IHBsYXllckNvbHVtbnMgPSBwbGF5ZXJET01HcmlkLmNoaWxkTm9kZXNcblxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBsYXllci5ib2FyZC5oaXRNYXApXG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgcGxheWVyLmJvYXJkLmhpdE1hcC5sZW5ndGg7IGNvbEluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBwbGF5ZXIuYm9hcmQuaGl0TWFwW2NvbEluZGV4XTtcblxuICAgICAgICAgICAgLy8gQm9hcmQgcmVuZGVycyB1cHNpZGUgZG93biBpZiBJIGRvbid0IHVzZSBcIm5vZGVSb3dJdGVyYXRvclwiLlxuICAgICAgICAgICAgbGV0IG5vZGVzUm93SXRlcmF0b3IgPSAwXG5cbiAgICAgICAgICAgIGNvbnN0IHJvd05vZGVzID0gcGxheWVyQ29sdW1uc1tjb2xJbmRleF0uY2hpbGROb2RlcztcblxuXG4gICAgICAgICAgICBmb3IgKGxldCByb3dJbmRleCA9IDk7IHJvd0luZGV4ID49IDA7IHJvd0luZGV4LS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSByb3dzW3Jvd0luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAocm93ID09PSBcIkhpdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRydWUpXG5cbiAgICAgICAgICAgICAgICAgICAgcm93Tm9kZXNbbm9kZXNSb3dJdGVyYXRvcl0uY2xhc3NMaXN0LmFkZCgnc2hpcC1pcy1oaXQnKVxuXG5cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGlmIChyb3cgPT09IFwiTWlzc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRydWUpXG5cbiAgICAgICAgICAgICAgICAgICAgcm93Tm9kZXNbbm9kZXNSb3dJdGVyYXRvcl0uY2xhc3NMaXN0LmFkZCgnYXR0YWNrLW1pc3NlZCcpXG5cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBub2Rlc1Jvd0l0ZXJhdG9yKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBjbGlja0JvYXJkIChwbGF5ZXIsIGdyaWQsIGNvbHVtbkluZGV4LCByb3dJbmRleCwgaXNQbGF5ZXIpIHtcbiAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXJUdXJuID0gdHVyblN0YXRlLmdldFR1cm4oKTtcblxuICAgICAgICBjb25zdCBnYW1lSXNPdmVyID0gdHVyblN0YXRlLmlzR2FtZU92ZXIoKTtcblxuICAgICAgICBpZiAoZ2FtZUlzT3Zlcikge1xuXG5cbiAgICAgICAgfVxuXG5cblxuICAgICAgICBcbiAgICAgICAgaWYgKGlzUGxheWVyID09PSBjdXJyZW50UGxheWVyVHVybikge1xuXG5cbiAgICAgICAgICAgIHVwZGF0ZUhlYWRlcihcIk5vdCB5b3VyIG93biBib2FyZCFcIik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgeCA9IGNvbHVtbkluZGV4XG4gICAgICAgIGNvbnN0IHkgPSByb3dJbmRleDtcbiAgICAgICAgY29uc29sZS5sb2coeCx5KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIuYm9hcmQuaGl0TWFwW3hdW3ldKVxuXG4gICAgICAgIGlmIChwbGF5ZXIuYm9hcmQuaGl0TWFwW3hdW3ldID09PSBcIk1pc3NcIiB8fCBwbGF5ZXIuYm9hcmQuaGl0TWFwW3hdW3ldID09PSBcIkhpdFwiKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkdyaWQgYWxyZWFkeSBjaG9zZW5cIilcblxuICAgICAgICAgICAgdXBkYXRlSGVhZGVyKFwiR3JpZCBhbHJlYWR5IGNob3NlblwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gcGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soeCx5KTtcblxuICAgICAgICBjb25zdCBsZXR0ZXJBcnJheVggPSBbXCJBXCIsXCJCXCIsXCJDXCIsXCJEXCIsXCJFXCIsXCJGXCIsXCJHXCIsXCJIXCIsXCJJXCIsXCJKXCJdO1xuXG4gICAgICAgIGNvbnN0IG51bWJlckFycmF5WSA9IFsxMCw5LDgsNyw2LDUsNCwzLDIsMV1cbiAgICAgICAgaWYgKGN1cnJlbnRQbGF5ZXJUdXJuID09PSBcInBsYXllcjFcIikge1xuXG5cbiAgICAgICAgICAgIHVwZGF0ZUhlYWRlcihgUGxheWVyIDEgY2hvc2UgJHtsZXR0ZXJBcnJheVhbeF19JHtudW1iZXJBcnJheVlbeV19IGFuZCBpdCdzIGEgJHtyZXN1bHQudG9Mb3dlckNhc2UoKX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50UGxheWVyVHVybiA9PT0gXCJwbGF5ZXIyXCIpIHtcblxuXG4gICAgICAgICAgICB1cGRhdGVIZWFkZXIoYFBsYXllciAyIGNob3NlICR7bGV0dGVyQXJyYXlYW3hdfSR7bnVtYmVyQXJyYXlZW3ldfSBhbmQgaXQncyBhICR7cmVzdWx0LnRvTG93ZXJDYXNlKCl9YCk7XG5cbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICB0dXJuU3RhdGUudXBkYXRlVHVybigpO1xuXG4gICAgICAgIGlmIChwbGF5ZXIuYm9hcmQub3duR3JpZFt4XVt5XSkge1xuICBcbiAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnc2hpcC1pcy1oaXQnKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocGxheWVyLmJvYXJkLm93bkdyaWRbeF1beV0uZ2V0SGl0cygpKVxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgYWxsU3VuaygpXG4gICAgICAgICAgICAvLyB0dXJuU3RhdGUuaXNHYW1lT3ZlcigpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2F0dGFjay1taXNzZWQnKTtcblxuICAgICAgICBcbiAgICB9KVxufVxuXG5leHBvcnR7XG4gICAgcG9wdWxhdGVQbGF5ZXIxQm9hcmQsXG4gICAgcG9wdWxhdGVQbGF5ZXIyQm9hcmRcbn0iLCJcbmZ1bmN0aW9uIGNyZWF0ZURPTSAoKSB7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250YWluZXInKTtcbiAgICBib2R5LmFwcGVuZChtYWluQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1kaXYnKTtcbiAgICAgICAgaGVhZGVyRGl2LnRleHRDb250ZW50ID0gJ1BsYXllciAxIGdvZXMgZmlyc3QnXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKGhlYWRlckRpdik7XG5cbiAgICAgICAgY29uc3QgcGxheWVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllckRpdi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItZGl2Jyk7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKHBsYXllckRpdik7XG5cbiAgICAgICAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvb3RlckRpdi5jbGFzc0xpc3QuYWRkKCdmb290ZXItZGl2Jyk7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKGZvb3RlckRpdik7XG5cblxuXG4gICAgXG5cblxuXG5cblxuICAgIGNvbnN0IHBsYXllcjFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5ZXIxRGl2LmNsYXNzTGlzdC5hZGQoJ3BsYXllcjEtZGl2Jyk7XG4gICAgcGxheWVyRGl2LmFwcGVuZChwbGF5ZXIxRGl2KTtcbiAgICAvLyBwbGF5ZXIxRGl2LnRleHRDb250ZW50ID0gXCJQbGF5ZXIgMVwiO1xuXG4gICAgICAgIGNvbnN0IHBsYXllcjFHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllcjFHcmlkLmNsYXNzTGlzdC5hZGQoJ3BsYXllcjEtZ3JpZCcpO1xuICAgICAgICBwbGF5ZXIxRGl2LmFwcGVuZChwbGF5ZXIxR3JpZCk7XG5cbiAgICAgICAgY29uc3QgcGxheWVyMUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllcjFMYWJlbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXIxLWxhYmVsJyk7XG4gICAgICAgIHBsYXllcjFMYWJlbC50ZXh0Q29udGVudCA9IFwiUGxheWVyIDFcIlxuICAgICAgICBwbGF5ZXIxRGl2LmFwcGVuZChwbGF5ZXIxTGFiZWwpXG5cbiAgICBjb25zdCBwbGF5ZXIyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVyMkRpdi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXIyLWRpdicpO1xuICAgIHBsYXllckRpdi5hcHBlbmQocGxheWVyMkRpdilcbiAgICAvLyBwbGF5ZXIyRGl2LnRleHRDb250ZW50ID0gXCJQbGF5ZXIgMlwiO1xuXG4gICAgICAgIGNvbnN0IHBsYXllcjJHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllcjJHcmlkLmNsYXNzTGlzdC5hZGQoJ3BsYXllcjItZ3JpZCcpO1xuICAgICAgICBwbGF5ZXIyRGl2LmFwcGVuZChwbGF5ZXIyR3JpZCk7XG5cbiAgICAgICAgY29uc3QgcGxheWVyMkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllcjJMYWJlbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXIyLWxhYmVsJyk7XG4gICAgICAgIHBsYXllcjJMYWJlbC50ZXh0Q29udGVudCA9IFwiUGxheWVyIDJcIlxuICAgICAgICBwbGF5ZXIyRGl2LmFwcGVuZChwbGF5ZXIyTGFiZWwpXG5cblxuICAgIC8vIENyZWF0ZSBib2FyZCBkaXYsIG1ha2Ugc3VyZSB0aGVyZSBpcyBtaW5pbXVtIHNpemUgZm9yIGhlaWdodCBhbmQgd2lkdGhcbn1cblxuXG5mdW5jdGlvbiB1cGRhdGVIZWFkZXIgKHN0YXR1c01lc3NhZ2UpIHtcbiAgICBjb25zdCBzdGF0dXNEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1kaXYnKTtcblxuICAgIHN0YXR1c0Rpc3BsYXkudGV4dENvbnRlbnQgPSBzdGF0dXNNZXNzYWdlXG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlRE9NLFxuICAgIHVwZGF0ZUhlYWRlclxufVxuXG4iLCIgZnVuY3Rpb24gY3JlYXRlU2hpcCAobGVuZ3RoKXtcbiAgICBsZXQgdG90YWxIaXRzID0gMDtcbiAgICBsZXQgc3VuayA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2V0TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbGVuZ3RoXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SGl0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRvdGFsSGl0c1xuICAgIH1cblxuICAgIGNvbnN0IGlzU3VuayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRvdGFsSGl0cyA+PSBsZW5ndGgpIHtcbiAgICAgICAgICAgIHN1bmsgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1bmtcbiAgICB9XG5cblxuICAgIGNvbnN0IGhpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdG90YWxIaXRzKytcbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIGdldExlbmd0aCxcbiAgICAgICAgZ2V0SGl0cyxcbiAgICAgICAgaXNTdW5rLFxuICAgICAgICBoaXRcbiAgICB9XG4gfVxuXG5cbiBleHBvcnR7XG4gICAgY3JlYXRlU2hpcFxuIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vYXNzZXRzL3N0eWxlLmNzcyc7XG5cbmltcG9ydCB7IGNyZWF0ZVBsYXllciB9IGZyb20gXCIuL3BsYXllckZhY3RvcnlcIjtcbi8vIGltcG9ydCB7IG1vZHVsZSB9IGZyb20gJy4vbW9kdWxlJztcblxuXG4vLyBUaGlzIGlzIGp1c3QgYSBDUlVELiBJdCBzaG91bGQgYmUgZWFzeS4gQnV0IG1ha2Ugc3VyZSB0byBmb2xsb3cgdGhlIGluc3RydWN0aW9ucy5cblxuLy8gbW9kdWxlKClcblxuXG5pbXBvcnQgeyBjcmVhdGVET00gfSBmcm9tIFwiLi9yZW5kZXJET01cIjtcblxuaW1wb3J0IHsgZ2FtZUZsb3cgfSBmcm9tICcuL2dhbWVGbG93JztcblxuLy8gaW1wb3J0IHsgcG9wdWxhdGVCb2FyZCB9IGZyb20gJy4vcmVuZGVyQm9hcmQnO1xuXG5jcmVhdGVET00oKTtcbmdhbWVGbG93KCk7XG5cblxuLy8gcmVtb3ZlIHRoaXMgbGF0ZXJcbi8vIGNvbnN0IHRlc3RQbGF5ZXIgPSBjcmVhdGVQbGF5ZXIoXCJyZWFsXCIpO1xuLy8gcG9wdWxhdGVCb2FyZCh0ZXN0UGxheWVyKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==