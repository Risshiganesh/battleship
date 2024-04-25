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
    grid-template-rows: 200px 1fr 50px;
}

.header-div {
    width: 100%;
    height: 100%;
    border: 2px solid blue;
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

    --height-and-width: max(350px, 30vw);
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
        /* border: 2px solid greenyellow; */
        width: 350px;
        height: 350px;

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

}`, "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT,UAAU;CACV,sBAAsB;AACvB;;AAEA;;IAEI,YAAY;IACZ,WAAW;IACX,uBAAuB;AAC3B;;AAEA;;IAEI,oDAAoD;;IAEpD,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,8BAA8B;IAC9B,aAAa;IACb;;AAEJ;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;AAC3B;;;AAGA;;IAEI,aAAa;IACb,SAAS;AACb;;;AAGA;IACI,WAAW;IACX,YAAY;IACZ,4BAA4B;IAC5B,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sCAAsC;IACtC,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,wBAAwB;IACxB,kBAAkB;AACtB;;;AAGA;;;IAGI,oCAAoC;IACpC,oCAAoC;;IAEpC,0BAA0B;IAC1B,8BAA8B;IAC9B,+BAA+B;IAC/B,aAAa;IACb,sCAAsC;IACtC,YAAY;;AAEhB;;;AAGA;;IAEI,YAAY;IACZ,WAAW;IACX,gCAAgC;IAChC,kBAAkB;IAClB,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,mCAAmC;IACnC,iCAAiC;AACrC;;AAEA;;IAEI,2BAA2B;;AAE/B;AACA;IACI,gDAAgD;IAChD,wBAAwB;AAC5B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,4BAA4B;AAChC;;;AAGA;IACI,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;AAC3B;AACA;IACI,gCAAgC;;IAEhC;;QAEI,mCAAmC;QACnC,YAAY;QACZ,aAAa;;IAEjB;IACA;QACI,QAAQ;IACZ;IACA;QACI,QAAQ;IACZ;;IAEA;QACI,QAAQ;IACZ;;IAEA;QACI,QAAQ;IACZ;;AAEJ","sourcesContent":["*{\n margin: 0;\n padding: 0;\n box-sizing: border-box;\n}\n\nhtml,\nbody{\n    height: 100%;\n    width: 100%;\n    background-color: black;\n}\n\n.main-container {\n\n    /* Have a minimum height and width for .player-div */\n\n    width: 100%;\n    height: 100%;\n    border: 2px solid red;\n    display: grid;\n    grid-template-rows: 200px 1fr 50px;\n}\n\n.header-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid blue;\n}\n\n.player-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid pink;\n    /* background-color: yellow; */\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr))\n\n}\n\n.footer-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid green;\n}\n\n\n.player1-div,\n.player2-div{\n    padding: 20px;\n    gap: 15px;\n}\n\n\n.player1-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid lightgreen;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    /* text-align: center; */\n    /* color: white; */\n}\n\n.player2-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid lightgoldenrodyellow;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    /* text-align: center; */\n    /* color: white; */\n}\n\n\n.player1-grid,\n.player2-grid{\n\n    --height-and-width: max(350px, 30vw);\n    --border-size: 2px solid greenyellow;\n\n    border: var(--border-size);\n    width: var(--height-and-width);\n    height: var(--height-and-width);\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    color: white;\n\n}\n\n\n.player1-label,\n.player2-label{\n    color: white;\n    width: 100%;\n    border: 2px solid blanchedalmond;\n    text-align: center;\n    /* padding: 10px; */\n}\n\n\n.grid-column{\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    /* border: 2px solid turquoise; */\n}\n\n.grid-row{\n\n    border: 2px solid turquoise;\n    \n}\n.grid-row:hover{\n    /* background-color: rgba(255, 255, 0, 0.156); */\n    border: 3px solid yellow;\n}\n\n.clicked {\n    background-color: red;\n}\n\n.ship-located {\n    background-color: darkorchid;\n}\n\n\n.ship-is-hit{\n    background-color: darkred;\n}\n\n.attack-missed{\n    background-color: white;\n}\n@media (max-width: 770px){\n    /* change player font position */\n\n    .player1-grid,\n    .player2-grid{\n        /* border: 2px solid greenyellow; */\n        width: 350px;\n        height: 350px;\n\n    }\n    .player1-div{\n        order: 2;\n    }\n    .player2-div{\n        order: 1;\n    }\n\n    .player2-grid{\n        order: 2;\n    }\n\n    .player2-label{\n        order: 1;\n    }\n\n}"],"sourceRoot":""}]);
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




// These playerBoards are side effects (external state) / (dependencies).
let player1Board; 
let player2Board;


function gameFlow () {

    const player1 = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__.createPlayer)("real");
    const player2 = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__.createPlayer)("computer"); 

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
    const player2PatrolBoat = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.createShip)(2)

    player1.board.placeShip({x:9,y:9}, "north", player1Carrier);
    player1.board.placeShip({x:0,y:0}, "east", player1Battleship);
    player1.board.placeShip({x:5,y:5}, "east", player1Destroyer);
    player1.board.placeShip({x:2,y:2}, "east", player1Submarine);
    player1.board.placeShip({x:9,y:0}, "south", player1PatrolBoat);

    for (let index = 0; index < 10; index++) {
        // const element = array[index];
        
        player1.board.receiveAttack(9,index)
        player1.board.receiveAttack(index,index)
    }


    player2.board.placeShip({x:8,y:8}, "west", player2Carrier);
    player2.board.placeShip({x:0,y:0}, "east", player2Battleship);
    player2.board.placeShip({x:5,y:5}, "east", player2Destroyer);
    player2.board.placeShip({x:2,y:2}, "east", player2Submarine);
    player2.board.placeShip({x:9,y:5}, "south", player2PatrolBoat);


    for (let index = 0; index < 10; index++) {
        // const element = array[index];
        
        // player2.board.receiveAttack(9,index)
        player2.board.receiveAttack(index,index)
    }


    player1Board = (0,_renderBoard__WEBPACK_IMPORTED_MODULE_2__.populatePlayer1Board)(player1);
    player2Board = (0,_renderBoard__WEBPACK_IMPORTED_MODULE_2__.populatePlayer2Board)(player2);

   

    // console.log(player1.board.allSunk())

    // while (!(player1.board.allSunk()) || !(player2.board.allSunk())) {
    //     player1Board.showShips()
    // }

    player1Board.displayGrids()

    player1Board.showShips()

    


    player2Board.displayGrids()

    player2Board.showHitMap()

    // console.log("game over")

    // const turnState = currentTurn()



}

// merge turnstate into gameflow or gameflow into turnstate? Because cannot show ships (player1Board must be accessed).

// in turnState create a function to check if gameover and who won using allSunk() from each boards. Is checked everytime a grid is clicked.



// player1Board.displayGrids()

    // player1Board.showShips()

    


    // player2Board.displayGrids()

    // player2Board.showHitMap()

const turnState = (function () {
    let playerTurn = "player1";

    

    function updateTurn() {
        if (playerTurn === "player1") {
            playerTurn = "player2"

            player1Board.deleteGrids();
            player1Board.displayGrids();
            player1Board.showHitMap();

            player2Board.deleteGrids();
            player2Board.displayGrids();
            player2Board.showShips();
            player2Board.showHitMap();


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

            return
        }
    }

    function getTurn() {
        return playerTurn;
    }

    return{
        updateTurn,
        getTurn
    }
})()




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
function populatePlayer1Board (player1, playerTurn){
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
        showHitMap
    }

}

// Merge it into one function - above
function populatePlayer2Board (player2, player2type, playerTurn) {

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
        showHitMap
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

        // console.log(currentPlayerTurn)

        console.log(currentPlayerTurn)
        if (isPlayer === currentPlayerTurn) {
            // turnState.updateTurn()
            console.log("Not your own board!")
            return
        }

        // turn this to a function? or is there another way?

        const x = columnIndex
        const y = rowIndex;
        console.log(x,y);

        console.log(player.board.hitMap[x][y])

        if (player.board.hitMap[x][y] === "Miss" || player.board.hitMap[x][y] === "Hit") {
            console.log("Grid already chosen")
            return;
        }


        player.board.receiveAttack(x,y)
        _gameFlow__WEBPACK_IMPORTED_MODULE_0__.turnState.updateTurn()
        if (player.board.ownGrid[x][y]) {
            // remove this if not necessary
            grid.classList.add('ship-is-hit')
            console.log(player.board.ownGrid[x][y].getHits())
            // check if allSunk()
            return
        }

        grid.classList.add('attack-missed');
        // re-render hitMap and remove all displayShips





        // let playerTurn = true

        // if (playerTurn) {
           
            
        // }
        
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
/* harmony export */   createDOM: () => (/* binding */ createDOM)
/* harmony export */ });

function createDOM () {

    const body = document.querySelector('body');

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');
    body.append(mainContainer);

        const headerDiv = document.createElement('div');
        headerDiv.classList.add('header-div');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdKRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7O0FBR0EsU0FBUzs7O0FBR1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSw0QkFBNEIsNEJBQTRCO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCLGdDQUFnQzs7QUFFeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLGdDQUFnQzs7O0FBR3hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7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O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7O1VDakNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7O0FBRW1CO0FBQy9DLFlBQVksU0FBUzs7O0FBR3JCOztBQUVBOzs7QUFHd0M7O0FBRUY7O0FBRXRDLFlBQVksZ0JBQWdCOztBQUU1QixxREFBUztBQUNULG1EQUFROzs7QUFHUjtBQUNBO0FBQ0EsNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcz82MDFkIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lRmxvdy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVuZGVyQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZW5kZXJET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuIG1hcmdpbjogMDtcbiBwYWRkaW5nOiAwO1xuIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLm1haW4tY29udGFpbmVyIHtcblxuICAgIC8qIEhhdmUgYSBtaW5pbXVtIGhlaWdodCBhbmQgd2lkdGggZm9yIC5wbGF5ZXItZGl2ICovXG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMDBweCAxZnIgNTBweDtcbn1cblxuLmhlYWRlci1kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xufVxuXG4ucGxheWVyLWRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHBpbms7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogeWVsbG93OyAqL1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzODBweCwgMWZyKSlcblxufVxuXG4uZm9vdGVyLWRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xufVxuXG5cbi5wbGF5ZXIxLWRpdixcbi5wbGF5ZXIyLWRpdntcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGdhcDogMTVweDtcbn1cblxuXG4ucGxheWVyMS1kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZWVuO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cbn1cblxuLnBsYXllcjItZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xufVxuXG5cbi5wbGF5ZXIxLWdyaWQsXG4ucGxheWVyMi1ncmlke1xuXG4gICAgLS1oZWlnaHQtYW5kLXdpZHRoOiBtYXgoMzUwcHgsIDMwdncpO1xuICAgIC0tYm9yZGVyLXNpemU6IDJweCBzb2xpZCBncmVlbnllbGxvdztcblxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyLXNpemUpO1xuICAgIHdpZHRoOiB2YXIoLS1oZWlnaHQtYW5kLXdpZHRoKTtcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodC1hbmQtd2lkdGgpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgY29sb3I6IHdoaXRlO1xuXG59XG5cblxuLnBsYXllcjEtbGFiZWwsXG4ucGxheWVyMi1sYWJlbHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhbmNoZWRhbG1vbmQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXG59XG5cblxuLmdyaWQtY29sdW1ue1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgdHVycXVvaXNlOyAqL1xufVxuXG4uZ3JpZC1yb3d7XG5cbiAgICBib3JkZXI6IDJweCBzb2xpZCB0dXJxdW9pc2U7XG4gICAgXG59XG4uZ3JpZC1yb3c6aG92ZXJ7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgMC4xNTYpOyAqL1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHllbGxvdztcbn1cblxuLmNsaWNrZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnNoaXAtbG9jYXRlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya29yY2hpZDtcbn1cblxuXG4uc2hpcC1pcy1oaXR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcbn1cblxuLmF0dGFjay1taXNzZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzcwcHgpe1xuICAgIC8qIGNoYW5nZSBwbGF5ZXIgZm9udCBwb3NpdGlvbiAqL1xuXG4gICAgLnBsYXllcjEtZ3JpZCxcbiAgICAucGxheWVyMi1ncmlke1xuICAgICAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBncmVlbnllbGxvdzsgKi9cbiAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuXG4gICAgfVxuICAgIC5wbGF5ZXIxLWRpdntcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgfVxuICAgIC5wbGF5ZXIyLWRpdntcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgfVxuXG4gICAgLnBsYXllcjItZ3JpZHtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgfVxuXG4gICAgLnBsYXllcjItbGFiZWx7XG4gICAgICAgIG9yZGVyOiAxO1xuICAgIH1cblxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLHNCQUFzQjtBQUN2Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxvREFBb0Q7O0lBRXBELFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2I7O0FBRUo7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7O0FBR0E7O0lBRUksYUFBYTtJQUNiLFNBQVM7QUFDYjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7OztJQUdJLG9DQUFvQztJQUNwQyxvQ0FBb0M7O0lBRXBDLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsWUFBWTs7QUFFaEI7OztBQUdBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxpQ0FBaUM7QUFDckM7O0FBRUE7O0lBRUksMkJBQTJCOztBQUUvQjtBQUNBO0lBQ0ksZ0RBQWdEO0lBQ2hELHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7O0FBR0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGdDQUFnQzs7SUFFaEM7O1FBRUksbUNBQW1DO1FBQ25DLFlBQVk7UUFDWixhQUFhOztJQUVqQjtJQUNBO1FBQ0ksUUFBUTtJQUNaO0lBQ0E7UUFDSSxRQUFRO0lBQ1o7O0lBRUE7UUFDSSxRQUFRO0lBQ1o7O0lBRUE7UUFDSSxRQUFRO0lBQ1o7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gbWFyZ2luOiAwO1xcbiBwYWRkaW5nOiAwO1xcbiBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcblxcbiAgICAvKiBIYXZlIGEgbWluaW11bSBoZWlnaHQgYW5kIHdpZHRoIGZvciAucGxheWVyLWRpdiAqL1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggMWZyIDUwcHg7XFxufVxcblxcbi5oZWFkZXItZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG59XFxuXFxuLnBsYXllci1kaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBwaW5rO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzgwcHgsIDFmcikpXFxuXFxufVxcblxcbi5mb290ZXItZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XFxufVxcblxcblxcbi5wbGF5ZXIxLWRpdixcXG4ucGxheWVyMi1kaXZ7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuXFxuLnBsYXllcjEtZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmVlbjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cXG59XFxuXFxuLnBsYXllcjItZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgICAvKiBjb2xvcjogd2hpdGU7ICovXFxufVxcblxcblxcbi5wbGF5ZXIxLWdyaWQsXFxuLnBsYXllcjItZ3JpZHtcXG5cXG4gICAgLS1oZWlnaHQtYW5kLXdpZHRoOiBtYXgoMzUwcHgsIDMwdncpO1xcbiAgICAtLWJvcmRlci1zaXplOiAycHggc29saWQgZ3JlZW55ZWxsb3c7XFxuXFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyLXNpemUpO1xcbiAgICB3aWR0aDogdmFyKC0taGVpZ2h0LWFuZC13aWR0aCk7XFxuICAgIGhlaWdodDogdmFyKC0taGVpZ2h0LWFuZC13aWR0aCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxufVxcblxcblxcbi5wbGF5ZXIxLWxhYmVsLFxcbi5wbGF5ZXIyLWxhYmVse1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFuY2hlZGFsbW9uZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xcbn1cXG5cXG5cXG4uZ3JpZC1jb2x1bW57XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCB0dXJxdW9pc2U7ICovXFxufVxcblxcbi5ncmlkLXJvd3tcXG5cXG4gICAgYm9yZGVyOiAycHggc29saWQgdHVycXVvaXNlO1xcbiAgICBcXG59XFxuLmdyaWQtcm93OmhvdmVye1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjE1Nik7ICovXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHllbGxvdztcXG59XFxuXFxuLmNsaWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5zaGlwLWxvY2F0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb3JjaGlkO1xcbn1cXG5cXG5cXG4uc2hpcC1pcy1oaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcbi5hdHRhY2stbWlzc2Vke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc3MHB4KXtcXG4gICAgLyogY2hhbmdlIHBsYXllciBmb250IHBvc2l0aW9uICovXFxuXFxuICAgIC5wbGF5ZXIxLWdyaWQsXFxuICAgIC5wbGF5ZXIyLWdyaWR7XFxuICAgICAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBncmVlbnllbGxvdzsgKi9cXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXG4gICAgICAgIGhlaWdodDogMzUwcHg7XFxuXFxuICAgIH1cXG4gICAgLnBsYXllcjEtZGl2e1xcbiAgICAgICAgb3JkZXI6IDI7XFxuICAgIH1cXG4gICAgLnBsYXllcjItZGl2e1xcbiAgICAgICAgb3JkZXI6IDE7XFxuICAgIH1cXG5cXG4gICAgLnBsYXllcjItZ3JpZHtcXG4gICAgICAgIG9yZGVyOiAyO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5ZXIyLWxhYmVse1xcbiAgICAgICAgb3JkZXI6IDE7XFxuICAgIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJGYWN0b3J5XCI7XG5pbXBvcnQgeyBjcmVhdGVTaGlwIH0gZnJvbSBcIi4vc2hpcEZhY3RvcnlcIjtcbmltcG9ydCB7IHBvcHVsYXRlUGxheWVyMUJvYXJkLCBwb3B1bGF0ZVBsYXllcjJCb2FyZCB9IGZyb20gXCIuL3JlbmRlckJvYXJkXCI7XG5cbi8vIFRoZXNlIHBsYXllckJvYXJkcyBhcmUgc2lkZSBlZmZlY3RzIChleHRlcm5hbCBzdGF0ZSkgLyAoZGVwZW5kZW5jaWVzKS5cbmxldCBwbGF5ZXIxQm9hcmQ7IFxubGV0IHBsYXllcjJCb2FyZDtcblxuXG5mdW5jdGlvbiBnYW1lRmxvdyAoKSB7XG5cbiAgICBjb25zdCBwbGF5ZXIxID0gY3JlYXRlUGxheWVyKFwicmVhbFwiKTtcbiAgICBjb25zdCBwbGF5ZXIyID0gY3JlYXRlUGxheWVyKFwiY29tcHV0ZXJcIik7IFxuXG4gICAgLy8gcGxhY2UgcGxheWVyMSBzaGlwc1xuICAgIC8vIFR5cGVzIG9mIHNoaXBcbiAgICAvLyAtIENhcnJpZXIsIHNpemUgNVxuICAgIC8vIC0gQmF0dGxlc2hpcCwgc2l6ZSA0XG4gICAgLy8gLSBEZXN0cm95ZXIsIHNpemUgM1xuICAgIC8vIC0gU3VibWFyaW5lLCBzaXplIDNcbiAgICAvLyAtIFBhdHJvbCBCb2F0LCBzaXplIDJcblxuICAgIGNvbnN0IHBsYXllcjFDYXJyaWVyID0gY3JlYXRlU2hpcCg1KTtcbiAgICBjb25zdCBwbGF5ZXIxQmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoNCk7XG4gICAgY29uc3QgcGxheWVyMURlc3Ryb3llciA9IGNyZWF0ZVNoaXAoMyk7XG4gICAgY29uc3QgcGxheWVyMVN1Ym1hcmluZSA9IGNyZWF0ZVNoaXAoMyk7XG4gICAgY29uc3QgcGxheWVyMVBhdHJvbEJvYXQgPSBjcmVhdGVTaGlwKDIpXG5cblxuICAgIGNvbnN0IHBsYXllcjJDYXJyaWVyID0gY3JlYXRlU2hpcCg1KTtcbiAgICBjb25zdCBwbGF5ZXIyQmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoNCk7XG4gICAgY29uc3QgcGxheWVyMkRlc3Ryb3llciA9IGNyZWF0ZVNoaXAoMyk7XG4gICAgY29uc3QgcGxheWVyMlN1Ym1hcmluZSA9IGNyZWF0ZVNoaXAoMyk7XG4gICAgY29uc3QgcGxheWVyMlBhdHJvbEJvYXQgPSBjcmVhdGVTaGlwKDIpXG5cbiAgICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcCh7eDo5LHk6OX0sIFwibm9ydGhcIiwgcGxheWVyMUNhcnJpZXIpO1xuICAgIHBsYXllcjEuYm9hcmQucGxhY2VTaGlwKHt4OjAseTowfSwgXCJlYXN0XCIsIHBsYXllcjFCYXR0bGVzaGlwKTtcbiAgICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcCh7eDo1LHk6NX0sIFwiZWFzdFwiLCBwbGF5ZXIxRGVzdHJveWVyKTtcbiAgICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcCh7eDoyLHk6Mn0sIFwiZWFzdFwiLCBwbGF5ZXIxU3VibWFyaW5lKTtcbiAgICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcCh7eDo5LHk6MH0sIFwic291dGhcIiwgcGxheWVyMVBhdHJvbEJvYXQpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7XG4gICAgICAgIC8vIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG4gICAgICAgIFxuICAgICAgICBwbGF5ZXIxLmJvYXJkLnJlY2VpdmVBdHRhY2soOSxpbmRleClcbiAgICAgICAgcGxheWVyMS5ib2FyZC5yZWNlaXZlQXR0YWNrKGluZGV4LGluZGV4KVxuICAgIH1cblxuXG4gICAgcGxheWVyMi5ib2FyZC5wbGFjZVNoaXAoe3g6OCx5Ojh9LCBcIndlc3RcIiwgcGxheWVyMkNhcnJpZXIpO1xuICAgIHBsYXllcjIuYm9hcmQucGxhY2VTaGlwKHt4OjAseTowfSwgXCJlYXN0XCIsIHBsYXllcjJCYXR0bGVzaGlwKTtcbiAgICBwbGF5ZXIyLmJvYXJkLnBsYWNlU2hpcCh7eDo1LHk6NX0sIFwiZWFzdFwiLCBwbGF5ZXIyRGVzdHJveWVyKTtcbiAgICBwbGF5ZXIyLmJvYXJkLnBsYWNlU2hpcCh7eDoyLHk6Mn0sIFwiZWFzdFwiLCBwbGF5ZXIyU3VibWFyaW5lKTtcbiAgICBwbGF5ZXIyLmJvYXJkLnBsYWNlU2hpcCh7eDo5LHk6NX0sIFwic291dGhcIiwgcGxheWVyMlBhdHJvbEJvYXQpO1xuXG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTA7IGluZGV4KyspIHtcbiAgICAgICAgLy8gY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcbiAgICAgICAgXG4gICAgICAgIC8vIHBsYXllcjIuYm9hcmQucmVjZWl2ZUF0dGFjayg5LGluZGV4KVxuICAgICAgICBwbGF5ZXIyLmJvYXJkLnJlY2VpdmVBdHRhY2soaW5kZXgsaW5kZXgpXG4gICAgfVxuXG5cbiAgICBwbGF5ZXIxQm9hcmQgPSBwb3B1bGF0ZVBsYXllcjFCb2FyZChwbGF5ZXIxKTtcbiAgICBwbGF5ZXIyQm9hcmQgPSBwb3B1bGF0ZVBsYXllcjJCb2FyZChwbGF5ZXIyKTtcblxuICAgXG5cbiAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIxLmJvYXJkLmFsbFN1bmsoKSlcblxuICAgIC8vIHdoaWxlICghKHBsYXllcjEuYm9hcmQuYWxsU3VuaygpKSB8fCAhKHBsYXllcjIuYm9hcmQuYWxsU3VuaygpKSkge1xuICAgIC8vICAgICBwbGF5ZXIxQm9hcmQuc2hvd1NoaXBzKClcbiAgICAvLyB9XG5cbiAgICBwbGF5ZXIxQm9hcmQuZGlzcGxheUdyaWRzKClcblxuICAgIHBsYXllcjFCb2FyZC5zaG93U2hpcHMoKVxuXG4gICAgXG5cblxuICAgIHBsYXllcjJCb2FyZC5kaXNwbGF5R3JpZHMoKVxuXG4gICAgcGxheWVyMkJvYXJkLnNob3dIaXRNYXAoKVxuXG4gICAgLy8gY29uc29sZS5sb2coXCJnYW1lIG92ZXJcIilcblxuICAgIC8vIGNvbnN0IHR1cm5TdGF0ZSA9IGN1cnJlbnRUdXJuKClcblxuXG5cbn1cblxuLy8gbWVyZ2UgdHVybnN0YXRlIGludG8gZ2FtZWZsb3cgb3IgZ2FtZWZsb3cgaW50byB0dXJuc3RhdGU/IEJlY2F1c2UgY2Fubm90IHNob3cgc2hpcHMgKHBsYXllcjFCb2FyZCBtdXN0IGJlIGFjY2Vzc2VkKS5cblxuLy8gaW4gdHVyblN0YXRlIGNyZWF0ZSBhIGZ1bmN0aW9uIHRvIGNoZWNrIGlmIGdhbWVvdmVyIGFuZCB3aG8gd29uIHVzaW5nIGFsbFN1bmsoKSBmcm9tIGVhY2ggYm9hcmRzLiBJcyBjaGVja2VkIGV2ZXJ5dGltZSBhIGdyaWQgaXMgY2xpY2tlZC5cblxuXG5cbi8vIHBsYXllcjFCb2FyZC5kaXNwbGF5R3JpZHMoKVxuXG4gICAgLy8gcGxheWVyMUJvYXJkLnNob3dTaGlwcygpXG5cbiAgICBcblxuXG4gICAgLy8gcGxheWVyMkJvYXJkLmRpc3BsYXlHcmlkcygpXG5cbiAgICAvLyBwbGF5ZXIyQm9hcmQuc2hvd0hpdE1hcCgpXG5cbmNvbnN0IHR1cm5TdGF0ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHBsYXllclR1cm4gPSBcInBsYXllcjFcIjtcblxuICAgIFxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVHVybigpIHtcbiAgICAgICAgaWYgKHBsYXllclR1cm4gPT09IFwicGxheWVyMVwiKSB7XG4gICAgICAgICAgICBwbGF5ZXJUdXJuID0gXCJwbGF5ZXIyXCJcblxuICAgICAgICAgICAgcGxheWVyMUJvYXJkLmRlbGV0ZUdyaWRzKCk7XG4gICAgICAgICAgICBwbGF5ZXIxQm9hcmQuZGlzcGxheUdyaWRzKCk7XG4gICAgICAgICAgICBwbGF5ZXIxQm9hcmQuc2hvd0hpdE1hcCgpO1xuXG4gICAgICAgICAgICBwbGF5ZXIyQm9hcmQuZGVsZXRlR3JpZHMoKTtcbiAgICAgICAgICAgIHBsYXllcjJCb2FyZC5kaXNwbGF5R3JpZHMoKTtcbiAgICAgICAgICAgIHBsYXllcjJCb2FyZC5zaG93U2hpcHMoKTtcbiAgICAgICAgICAgIHBsYXllcjJCb2FyZC5zaG93SGl0TWFwKCk7XG5cblxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGxheWVyVHVybiA9PT0gXCJwbGF5ZXIyXCIpIHtcbiAgICAgICAgICAgIHBsYXllclR1cm4gPSBcInBsYXllcjFcIlxuXG4gICAgICAgICAgICBwbGF5ZXIyQm9hcmQuZGVsZXRlR3JpZHMoKTtcbiAgICAgICAgICAgIHBsYXllcjJCb2FyZC5kaXNwbGF5R3JpZHMoKTtcbiAgICAgICAgICAgIHBsYXllcjJCb2FyZC5zaG93SGl0TWFwKCk7XG5cbiAgICAgICAgICAgIHBsYXllcjFCb2FyZC5kZWxldGVHcmlkcygpO1xuICAgICAgICAgICAgcGxheWVyMUJvYXJkLmRpc3BsYXlHcmlkcygpO1xuICAgICAgICAgICAgcGxheWVyMUJvYXJkLnNob3dTaGlwcygpO1xuICAgICAgICAgICAgcGxheWVyMUJvYXJkLnNob3dIaXRNYXAoKTtcblxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUdXJuKCkge1xuICAgICAgICByZXR1cm4gcGxheWVyVHVybjtcbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIHVwZGF0ZVR1cm4sXG4gICAgICAgIGdldFR1cm5cbiAgICB9XG59KSgpXG5cblxuZXhwb3J0IHtcbiAgICBnYW1lRmxvdyxcbiAgICB0dXJuU3RhdGVcbn0iLCJmdW5jdGlvbiBjcmVhdGVHYW1lYm9hcmQoKXtcbiAgICBjb25zdCBvd25HcmlkID0gY3JlYXRlR3JpZCgpO1xuICAgIGNvbnN0IGhpdE1hcCA9IGNyZWF0ZUdyaWQoKTtcbiAgICBjb25zdCBwbGFjZWRTaGlwcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlR3JpZCAoKSB7XG5cbiAgICAgICAgY29uc3QgbmV3R3JpZCA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGdyaWRTaXplID0gMTA7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGdyaWRTaXplOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3dzID0gW11cbiAgICAgICAgICAgIHJvd3MubGVuZ3RoID0gMTA7XG5cbiAgICAgICAgICAgIG5ld0dyaWRbaW5kZXhdID0gcm93c1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld0dyaWQ7XG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcCAoY29vcmRpbmF0ZXMsIGRpcmVjdGlvbiwgc2hpcE9iamVjdCkge1xuXG5cbiAgICAgICAgY29uc3QgcG90ZW50aWFsQ29vcmRzID0gZ2V0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMsIGRpcmVjdGlvbiwgc2hpcE9iamVjdCk7XG4gICAgICAgIGNvbnN0IGdlbmVyYXRlZENvb3JkcyA9IHBvdGVudGlhbENvb3Jkcy5wb3RlbnRpYWxDb29yZGluYXRlcztcbiAgICAgICAgbGV0IHBsYWNlbWVudFZhbGlkaXR5ID0gcG90ZW50aWFsQ29vcmRzLnZhbGlkaXR5O1xuICAgICAgICBsZXQgcGxhY2VtZW50TXNnID0gXCJQbGFjZW1lbnRfc3VjY2Vzc1wiXG5cbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgLy8gICAgQ2hlY2tzIGlmIG92ZXJsYXBwaW5nIHNoaXBzIGV4aXN0XG4gICAgICAgIHBsYWNlbWVudFZhbGlkaXR5ID0gY2hlY2tQbGFjZW1lbnRWYWxpZGl0eShwbGFjZW1lbnRWYWxpZGl0eSwgZ2VuZXJhdGVkQ29vcmRzLCBvd25HcmlkKTtcbiAgICBcbiAgICAgICAgXG5cbiAgICAgICAgaWYgKCFwbGFjZW1lbnRWYWxpZGl0eSkge1xuICAgICAgICAgICAgcGxhY2VtZW50TXNnID0gXCJQbGFjZW1lbnRfZmFpbGVkXCJcbiAgICAgICAgICAgIHJldHVybiBwbGFjZW1lbnRNc2dcbiAgICAgICAgfVxuXG5cblxuICAgICAgICBnZW5lcmF0ZWRDb29yZHMuZm9yRWFjaChjb29yZHMgPT4ge1xuXG4gICAgICAgICAgICBvd25HcmlkW2Nvb3Jkc1swXV1bY29vcmRzWzFdXSA9IHNoaXBPYmplY3Q7XG5cblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHBsYWNlZFNoaXBzLnB1c2goc2hpcE9iamVjdClcbiAgXG5cbiAgICAgICByZXR1cm4gcGxhY2VtZW50TXNnXG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2sgKHgsIHkpIHtcblxuICAgICAgICBpZiAoaGl0TWFwW3hdW3ldID09PSBcIk1pc3NcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwiQWxyZWFkeSBNaXNzXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghb3duR3JpZFt4XVt5XSkge1xuICAgICAgICAgICAgaGl0TWFwW3hdW3ldID0gXCJNaXNzXCJcbiAgICAgICAgICAgIHJldHVybiBcIk1pc3NcIlxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoaGl0TWFwW3hdW3ldID09PSBcIkhpdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJBbHJlYWR5IEhpdFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hpcCA9IG93bkdyaWRbeF1beV07XG4gICAgICAgIHNoaXAuaGl0KClcbiAgICAgICAgaGl0TWFwW3hdW3ldID0gJ0hpdCc7XG4gICAgICAgIHJldHVybiBcIkhpdFwiXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWxsU3VuayAoKSB7XG5cbiAgICAgICAgbGV0IGV2ZXJ5U2hpcFN1bmsgPSB0cnVlO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwbGFjZWRTaGlwcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBwbGFjZWRTaGlwc1tpbmRleF07XG5cbiAgICAgICAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIGV2ZXJ5U2hpcFN1bmsgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV2ZXJ5U2hpcFN1bmtcbiAgICB9XG4gICAgXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvd25HcmlkLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGFsbFN1bmssXG4gICAgICAgIGhpdE1hcFxuICAgIH1cblxuXG5cbn1cblxuXG5mdW5jdGlvbiBnZXRDb29yZGluYXRlcyAoY29vcmRpbmF0ZXMsIGRpcmVjdGlvbiwgc2hpcE9iamVjdCkge1xuXG4gICAgbGV0IHZhbGlkaXR5ID0gdHJ1ZTtcblxuICAgIGNvbnN0IHBvdGVudGlhbENvb3JkaW5hdGVzID0gW11cblxuICAgIFxuICAgIGlmIChjb29yZGluYXRlcy54IDwgMCB8fCBjb29yZGluYXRlcy55IDwgMCB8fCBjb29yZGluYXRlcy54ID4gOSB8fCBjb29yZGluYXRlcy55ID4gOSApIHtcbiAgICAgICAgICAgIFxuICAgICAgICB2YWxpZGl0eSA9IGZhbHNlXG5cbiAgICAgICAgcmV0dXJuIHZhbGlkaXR5XG5cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcE9iamVjdC5nZXRMZW5ndGgoKTsgaW5kZXgrKykge1xuXG4gICAgICAgIFxuICAgICAgICBsZXQgeGNvb3JkcztcbiAgICAgICAgbGV0IHljb29yZHM7XG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJub3J0aFwiKSB7XG4gICAgICAgICAgICB4Y29vcmRzID0gY29vcmRpbmF0ZXMueFxuICAgICAgICAgICAgeWNvb3JkcyA9IGNvb3JkaW5hdGVzLnkgLSBpbmRleDtcblxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJzb3V0aFwiKSB7XG5cbiAgICAgICAgICAgIHhjb29yZHMgPSBjb29yZGluYXRlcy54XG4gICAgICAgICAgICB5Y29vcmRzID0gY29vcmRpbmF0ZXMueSArIGluZGV4O1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJlYXN0XCIpIHtcblxuICAgICAgICAgICAgeGNvb3JkcyA9IGNvb3JkaW5hdGVzLnggKyBpbmRleDtcbiAgICAgICAgICAgIHljb29yZHMgPSBjb29yZGluYXRlcy55OyBcblxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ3ZXN0XCIpIHtcbiAgICAgICAgICAgIHhjb29yZHMgPSBjb29yZGluYXRlcy54IC0gaW5kZXg7XG4gICAgICAgICAgICB5Y29vcmRzID0gY29vcmRpbmF0ZXMueTsgXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh4Y29vcmRzIDwgMCB8fCB5Y29vcmRzIDwgMCB8fCB4Y29vcmRzID4gOSB8fCB5Y29vcmRzID4gOSApIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFsaWRpdHkgPSBmYWxzZVxuXG4gICAgICAgIH1cblxuICAgICAgICBwb3RlbnRpYWxDb29yZGluYXRlcy5wdXNoKFt4Y29vcmRzLHljb29yZHNdKVxuICAgICAgICBcbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgXG4gICAgICAgIHZhbGlkaXR5LFxuICAgICAgICBwb3RlbnRpYWxDb29yZGluYXRlc1xuICAgIH1cbn1cblxuXG5cbmZ1bmN0aW9uIGNoZWNrUGxhY2VtZW50VmFsaWRpdHkgKHBsYWNlbWVudFZhbGlkaXR5LCBnZW5lcmF0ZWRDb29yZHMsIG93bkdyaWQpIHtcblxuICAgIGlmICghcGxhY2VtZW50VmFsaWRpdHkpIHtcbiAgICAgICAgcmV0dXJuIHBsYWNlbWVudFZhbGlkaXR5XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGdlbmVyYXRlZENvb3Jkcy5sZW5ndGg7IGluZGV4KyspIHtcblxuXG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IGdlbmVyYXRlZENvb3Jkc1tpbmRleF07XG4gICBcbiAgICAgICAgY29uc3Qgc2hpcCA9IG93bkdyaWRbY29vcmRzWzBdXVtjb29yZHNbMV1dXG5cbiAgICAgICAgaWYgKHNoaXApIHtcbiAgICAgICAgICAgIHBsYWNlbWVudFZhbGlkaXR5ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWNlbWVudFZhbGlkaXR5XG59XG5cblxuZXhwb3J0e1xuICAgIGNyZWF0ZUdhbWVib2FyZCxcbiAgICBnZXRDb29yZGluYXRlcyxcbiAgICBjaGVja1BsYWNlbWVudFZhbGlkaXR5XG59IiwiaW1wb3J0IHsgY3JlYXRlR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkRmFjdG9yeVwiXG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXllciAodHlwZSwgZW5lbXlIaXRtYXAsIGF0dGFja0VuZW15KSB7XG4gICAgY29uc3QgYm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoKTtcblxuICAgIGlmICghKHR5cGUgPT09IFwicmVhbFwiIHx8IHR5cGUgPT09IFwiY29tcHV0ZXJcIikpIHtcbiAgICAgICAgcmV0dXJuIFwiSW52YWxpZF9pbnB1dFwiO1xuICAgIH1cbiAgICAvLyBQbGF5ZXIgbG9naWMgYW5kIGNvbXB1dGVyIGxvZ2ljIGlzIG5vdCBjb21wbGV0ZS5cblxuICAgIGlmICh0eXBlID09PSBcInJlYWxcIikge1xuICAgIFxuICAgICAgICAvLyBjcmVhdGUgcGxheWVyXG4gICAgICAgIC8vIGNyZWF0ZSBib2FyZFxuICAgICAgICAvLyAtIEFscmVhZHkgZG9uZSBhYm92ZVxuXG4gICAgICAgIC8vIERvIGFsbCB0aGlzIGxvZ2ljIGluc2lkZSBoZXJlIG9yIG9uIGEgZGlmZmVyZW50IG1vZHVsZT9cblxuICAgICAgICAvLyBwbGFjZSBzaGlwcyAod2hhdCB0eXBlcyBvZiBzaGlwIGFuZCBob3cgbWFueT8pXG4gICAgICAgIC8vIC0gY3JlYXRlIDUgdHlwZXMgb2Ygc2hpcHMgYW5kIHBsYWNlIHRoZW1cblxuICAgICAgICAvLyBHQU1FRkxPVyBCRUdJTlNcbiAgICAgICAgLy8gZXhlY3V0ZSBvcHBvbmVudCdzIHJlY2VpdmVBdHRhY2sgZnVuY3Rpb25cbiAgICAgICAgLy8gaWYgb3Bwb25lbnQgYWxsU3VuaygpIGlzIGZhbHNlLCB0aGVuIG9wcG9uZW50IGV4ZWN1dGVzIHlvdXIgcmVjZWl2ZUF0dGFjayBmdW5jdGlvblxuICAgICAgICAvLyBpZiBvcHBvbmVudCBhbGxTdW5rKCkgaXMgdHJ1ZSwgdGhlbiB5b3Ugd2luLlxuICAgICAgICAvLyBUaGUgYWJvdmUgYXBwbGllcyB0byBvcHBvbmVudCBhcyB3ZWxsLlxuICAgICAgICAvLyBpZiB5b3UgYWNjaWRlbnRseSBjaG9vc2UgZ3JpZHMgdGhhdCB3ZXJlIGFscmVhZHkgaGl0IG9yIG1pc3NlZCwgeW91IHdpbGwgYmUgcHJvbXB0ZWQgdG8gdHJ5IGFnYWluXG4gICAgICAgIFxuICAgICAgICAvLyBVSVxuICAgICAgICAvLyBPcHBvbmVudCB3aWxsIG9ubHkgc2VlIHlvdXIgZ3JpZCBhcyBoaXQgbWFwIGFuZCB2aWNlIHZlcnNhLlxuICAgICAgICAvLyBBdCBldmVyeSB0dXJuLCB0aGUgZW50aXJlIERPTSB3aWxsIHJlbmRlciBvd25HcmlkIGFuZCBlbmVteSBoaXRtYXAgYW5kIHZpY2UgdmVyc2EuXG5cbiAgICBcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgIFxuICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGV4Y2VwdCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgaXMgdXNlZCB3aXRoIHJlY2VpdmVBdHRhY2sgZm9yIGNvb3JkaW5hdGVzXG4gICAgICAgIC8vIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgcnVucyBNYXRoLmZsb29yLCBhbmQgdGVzdCBpdC5cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlLFxuICAgICAgICBib2FyZFxuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBtYXRoLmZsb29yIGZ1bmN0aW9uIHNlcGFyYXRlbHkgYmVsb3cgaGVyZS5cbiAgICBcbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVQbGF5ZXJcbn0iLCJpbXBvcnQgeyBjdXJyZW50VHVybiwgdHVyblN0YXRlIH0gZnJvbSBcIi4vZ2FtZUZsb3dcIjtcblxuLy8gSG93IGRvIHlvdSByZW5kZXIgdGhlIGJvYXJkP1xuXG4vLyBzZWxlY3QgdGhlIHBsYXllciBib3JkZXIgZ3JpZHMgZmlyc3QuXG5cbi8vIHRoZW4gaW1wb3J0IGFuZCBsb29wIHRocm91Z2ggb3duR3JpZCBhbmQgaGl0bWFwXG5cbi8vIHRoaXMgZnVuY3Rpb24gaGFzIHRvIGJlIHJldXNhYmxlIGZvciBib3RoIHBsYXllciAxIGFuZCBwbGF5ZXIgMi5cblxuLy8gaXQgd2lsbCBjaGVjayB3aG9zZSB0dXJuIGFuZCB0eXBlIG9mIHBsYXllciB0aGUgcGxheWVyIGlzIHBsYXlpbmcgd2l0aC5cblxuLy8gaWYgcGxheWluZyBhZ2FpbnRzIGFpIGl0IHdpbGwgb25seSBldmVyIHJlbmRlciB0aGUgYWkgcGxheWVyJ3MgaGl0bWFwLiBuZXZlciByZW5kZXJzIGFpIHBsYXllcidzIG9ud0dyaWQuXG5cbi8vIGlmIHBsYXlpbmcgYWdhaW5zdCBhbm90aGVyIHBsYXllciBhZnRlciBhIHBsYXllciBhdHRhY2tzLCBhIGZpeGVkIGJsYWNrIGRpdiB3aWxsIGNvdmVyIHVwIHRoZSBlbnRpcmUgc2NyZWVuIGFuZCBzaG93IGEgdGV4dCBvZiB3aGV0aGVyIHRoZSBwbGF5ZXIgaGl0IG9yIG1pc3MsIGFsc28gc2hvd3Mgd2hvc2UgdHVybiBpcyBuZXh0IHdpdGggYSBidXR0b24gbGFiZWxsZWQgXCJzdGFydCB0dXJuXCIuIHdpdGggdGhlIG5leHQgcGxheWVyJ3MgZ3JpZHMgYW5kIGhpdG1hcHMgYWxyZWFkdCByZW5kZXJlZCBiZWhpbmQgdGhlIGJsYWNrIGRpdi5cblxuLy8gc2hpcHMgYXJlIGRpc3BsYXllZCBpbiBkYXJrIGdyZXkgY29sb3VyXG5cbi8vIGhpdHMgYXJlIGRpc3BsYXllZCBpbiByZWRcblxuLy8gbWlzc2VzIGFyZSBkaXNwbGF5ZWQgaW4gd2hpdGVcblxuXG5cblxuLy8gZmlyc3QgeW91IG11c3QgZ2V0IG93bkdyaWQgb2YgcGxheWVyIG9uZSBhbmQgZGlzcGxheSB0aGUgZ3JpZHMgY29ycmVjdGx5LlxuXG4vLyBUaGVuIHlvdSBtdXN0IGdldCBwbGF5ZXIgdHdvJ3MgaGl0bWFwIGFuZCBkaXNwbGF5IHRoZSBncmlkcyBjb3JyZWN0bHkuXG5cbi8vIGFmdGVyIHRoYXQgeW91IG11c3QgY3JlYXRlIGFub3RoZXIgZnVudGlvbiB0byBkaXNwbGF5IHNoaXBzIGNvcnJlY3RseS4gLWFkZCBjbGFzc2VzIHRvIHRoZSBjb3JyZWN0IGdyaWRzLlxuXG4vLyBUaGVuIHlvdSBjcmVhdGUgYW5vdGhlciBmdW5jdGlvbiB0byByZW5kZXIgaGl0bWFwIGNvcnJlY3RseS5cblxuLy8gSGl0bWFwIHdpbGwgYmUgZGlzcGxheWVkIG9uIHBsYXllciBvbmUgZ3JpZCBhbmQgcGxheWVyIHR3byBncmlkLlxuXG4vLyBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBncmlkcy4gKERPTkUpXG5cblxuLy8gYWRkIGNvb3JkaW5hdGVzIGFzIGFuIG9iamVjdCBcImNvbnN0IGNvb3JkcyA9IHt4OjAseTowfVwiIGluc2lkZSBhZGRldmVudGxpc3RlbmVyIGNhbGxiYWNrIGZ1bmN0aW9uPyB1c2UgY29sdW1uSW5kZXggYW5uZCByb3dJbmRleD8gKERPTkUpXG5cblxuXG4vLyByZWZhY3RvciBpZiBuZWNlc3NhcnlcbmZ1bmN0aW9uIHBvcHVsYXRlUGxheWVyMUJvYXJkIChwbGF5ZXIxLCBwbGF5ZXJUdXJuKXtcbiAgICBjb25zdCBwbGF5ZXIxR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIxLWdyaWQnKTtcblxuXG4gICAgXG4gICAgZnVuY3Rpb24gZGlzcGxheUdyaWRzKCkge1xuICAgICAgICBjcmVhdGVHcmlkcyhwbGF5ZXIxLCBwbGF5ZXIxR3JpZCwgXCJwbGF5ZXIxXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUdyaWRzKCkge1xuICAgICAgICB3aGlsZSAocGxheWVyMUdyaWQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgcGxheWVyMUdyaWQuZmlyc3RDaGlsZC5yZW1vdmUoKVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBzaG93U2hpcHMoKSB7XG4gICAgICAgIGRpc3BsYXlTaGlwcyhudWxsLHBsYXllcjEsIHBsYXllcjFHcmlkKTtcbiAgICB9XG4gICAgXG5cblxuXG4gICAgZnVuY3Rpb24gc2hvd0hpdE1hcCgpIHtcbiAgICAgICAgZGlzcGxheUhpdE1hcChwbGF5ZXIxLCBwbGF5ZXIxR3JpZCk7XG4gICAgfVxuXG4gICBcblxuICAgXG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXlHcmlkcyxcbiAgICAgICAgZGVsZXRlR3JpZHMsXG4gICAgICAgIHNob3dTaGlwcyxcbiAgICAgICAgc2hvd0hpdE1hcFxuICAgIH1cblxufVxuXG4vLyBNZXJnZSBpdCBpbnRvIG9uZSBmdW5jdGlvbiAtIGFib3ZlXG5mdW5jdGlvbiBwb3B1bGF0ZVBsYXllcjJCb2FyZCAocGxheWVyMiwgcGxheWVyMnR5cGUsIHBsYXllclR1cm4pIHtcblxuICAgIGNvbnN0IHBsYXllcjJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjItZ3JpZCcpO1xuXG4gICAgZnVuY3Rpb24gZGlzcGxheUdyaWRzICgpIHtcbiAgICAgICAgY3JlYXRlR3JpZHMocGxheWVyMiwgcGxheWVyMkdyaWQsIFwicGxheWVyMlwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVHcmlkcygpIHtcbiAgICAgICAgd2hpbGUgKHBsYXllcjJHcmlkLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBsYXllcjJHcmlkLmZpcnN0Q2hpbGQucmVtb3ZlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dTaGlwcyAoKSB7XG4gICAgICAgIGRpc3BsYXlTaGlwcyhudWxsLHBsYXllcjIsIHBsYXllcjJHcmlkKTtcbiAgICB9XG4gICAgXG5cbiAgICBmdW5jdGlvbiBzaG93SGl0TWFwICgpIHtcbiAgICAgICAgZGlzcGxheUhpdE1hcChwbGF5ZXIyLCBwbGF5ZXIyR3JpZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheUdyaWRzLFxuICAgICAgICBkZWxldGVHcmlkcyxcbiAgICAgICAgc2hvd1NoaXBzLFxuICAgICAgICBzaG93SGl0TWFwXG4gICAgfVxuICAgIFxuICAgIFxufVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlR3JpZHMgKHBsYXllciwgcGxheWVyRE9NR3JpZCwgaXNQbGF5ZXIpIHtcbiAgICAvLyBwdXQgdGhlIGdyaWQgbWFraW5nIGxvb3AgYmVsb3cgaW5zaWRlIGhlcmVcblxuICAgIGZvciAobGV0IGNvbHVtbkluZGV4ID0gMDsgY29sdW1uSW5kZXggPCBwbGF5ZXIuYm9hcmQub3duR3JpZC5sZW5ndGg7IGNvbHVtbkluZGV4KyspIHtcbiAgICAgICAgY29uc3QgY29sdW1uID0gcGxheWVyLmJvYXJkLm93bkdyaWRbY29sdW1uSW5kZXhdO1xuXG5cbiAgICAgICAgY29uc3QgZ3JpZENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBncmlkQ29sdW1uLmNsYXNzTGlzdC5hZGQoXCJncmlkLWNvbHVtblwiKTtcbiAgICAgICAgLy8gZ3JpZENvbHVtbi50ZXh0Q29udGVudCA9IGNvbHVtbkluZGV4XG4gICAgICAgIHBsYXllckRPTUdyaWQuYXBwZW5kKGdyaWRDb2x1bW4pXG4gICAgICAgIFxuXG5cbiAgICAgICAgZm9yIChsZXQgcm93SW5kZXggPSA5OyByb3dJbmRleCA+PSAwOyByb3dJbmRleC0tKSB7XG4gICAgICAgICAgICAvLyBjb25zdCBlbGVtZW50ID0gY29sdW1uW3Jvd0luZGV4XTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVEVTVFwiKVxuICAgICAgICAgICAgY29uc3QgZ3JpZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZ3JpZFJvdy5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1yb3dcIik7XG4gICAgICAgICAgICAvLyBncmlkUm93LnRleHRDb250ZW50ID0gcm93SW5kZXg7XG4gICAgICAgICAgICBncmlkQ29sdW1uLmFwcGVuZChncmlkUm93KTtcblxuICAgICAgICAgICBjbGlja0JvYXJkKHBsYXllciwgZ3JpZFJvdywgY29sdW1uSW5kZXgsIHJvd0luZGV4LCBpc1BsYXllcilcbiAgICAgICAgfVxuXG4gICAgICAgXG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuZnVuY3Rpb24gZGlzcGxheVNoaXBzKHRvRGlzcGxheSwgcGxheWVyLCBwbGF5ZXJET01HcmlkKSB7XG4gICAgICAgIC8vIGlmIHBsYXllciAyIHR1cm4gZG9uJ3QgZGlzcGxheSBzaGlwc1xuXG4gICAgICAgIC8vIHJlbW92ZSBsYXRlclxuICAgICAgICB0b0Rpc3BsYXkgPSB0cnVlXG5cbiAgICAgICAgaWYgKHRvRGlzcGxheSkge1xuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBvd25HcmlkIGdyaWRzIGFycmF5IGFuZCBpZiBub3QgZW1wdHksIGFzc2lnbiBhIGdyZXkgY2xhc3MgdG8gdGhhdCBncmlkLiBcblxuICAgICAgICAgICAgY29uc3QgcGxheWVyQ29sdW1ucyA9IHBsYXllckRPTUdyaWQuY2hpbGROb2Rlc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgcGxheWVyLmJvYXJkLm93bkdyaWQubGVuZ3RoOyBjb2xJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93cyA9IHBsYXllci5ib2FyZC5vd25HcmlkW2NvbEluZGV4XTtcblxuICAgICAgICAgICAgICAgIC8vIEJvYXJkIHJlbmRlcnMgdXBzaWRlIGRvd24gaWYgSSBkb24ndCB1c2UgXCJub2RlUm93SXRlcmF0b3JcIi5cbiAgICAgICAgICAgICAgICBsZXQgbm9kZXNSb3dJdGVyYXRvciA9IDBcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd05vZGVzID0gcGxheWVyQ29sdW1uc1tjb2xJbmRleF0uY2hpbGROb2RlcztcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJvd05vZGVzKVxuXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcmV2ZXJzZWRSb3dOb2RlID0gcm93Tm9kZXMucmV2ZXJzZSgpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcm93SW5kZXggPSA5OyByb3dJbmRleCA+PSAwOyByb3dJbmRleC0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJvd3Nbcm93SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBpZiAocm93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0cnVlKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dOb2Rlc1tub2Rlc1Jvd0l0ZXJhdG9yXS5jbGFzc0xpc3QuYWRkKCdzaGlwLWxvY2F0ZWQnKVxuXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbm9kZXNSb3dJdGVyYXRvcisrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbn1cblxuXG5cblxuZnVuY3Rpb24gZGlzcGxheUhpdE1hcChwbGF5ZXIscGxheWVyRE9NR3JpZCkge1xuXG4gICAgLy8gcGxheWVyLmJvYXJkLmhpdE1hcFxuXG4gICAgLy8gZGlzcGxheSBoaXRtYXAgYWZ0ZXIgZGlzcGxheSBzaGlwIHJ1bnMsIFRoaXMgc2hvdWxkIG92ZXJyaWRlIHRoZSBjbGFzc2VzIG9mIGRpc3BsYXlTaGlwc1xuXG4gICAgbGV0IHRvRGlzcGxheSA9IHRydWVcblxuICAgIGlmICh0b0Rpc3BsYXkpIHtcbiAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBvd25HcmlkIGdyaWRzIGFycmF5IGFuZCBpZiBub3QgZW1wdHksIGFzc2lnbiBhIGdyZXkgY2xhc3MgdG8gdGhhdCBncmlkLiBcblxuICAgICAgICBjb25zdCBwbGF5ZXJDb2x1bW5zID0gcGxheWVyRE9NR3JpZC5jaGlsZE5vZGVzXG5cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIuYm9hcmQuaGl0TWFwKVxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IHBsYXllci5ib2FyZC5oaXRNYXAubGVuZ3RoOyBjb2xJbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3dzID0gcGxheWVyLmJvYXJkLmhpdE1hcFtjb2xJbmRleF07XG5cbiAgICAgICAgICAgIC8vIEJvYXJkIHJlbmRlcnMgdXBzaWRlIGRvd24gaWYgSSBkb24ndCB1c2UgXCJub2RlUm93SXRlcmF0b3JcIi5cbiAgICAgICAgICAgIGxldCBub2Rlc1Jvd0l0ZXJhdG9yID0gMFxuXG4gICAgICAgICAgICBjb25zdCByb3dOb2RlcyA9IHBsYXllckNvbHVtbnNbY29sSW5kZXhdLmNoaWxkTm9kZXM7XG5cblxuICAgICAgICAgICAgZm9yIChsZXQgcm93SW5kZXggPSA5OyByb3dJbmRleCA+PSAwOyByb3dJbmRleC0tKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gcm93c1tyb3dJbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA9PT0gXCJIaXRcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0cnVlKVxuXG4gICAgICAgICAgICAgICAgICAgIHJvd05vZGVzW25vZGVzUm93SXRlcmF0b3JdLmNsYXNzTGlzdC5hZGQoJ3NoaXAtaXMtaGl0JylcblxuXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICBpZiAocm93ID09PSBcIk1pc3NcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0cnVlKVxuXG4gICAgICAgICAgICAgICAgICAgIHJvd05vZGVzW25vZGVzUm93SXRlcmF0b3JdLmNsYXNzTGlzdC5hZGQoJ2F0dGFjay1taXNzZWQnKVxuXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbm9kZXNSb3dJdGVyYXRvcisrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG5cblxuXG5cblxuZnVuY3Rpb24gY2xpY2tCb2FyZCAocGxheWVyLCBncmlkLCBjb2x1bW5JbmRleCwgcm93SW5kZXgsIGlzUGxheWVyKSB7XG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBjdXJyZW50UGxheWVyVHVybiA9IHR1cm5TdGF0ZS5nZXRUdXJuKCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudFBsYXllclR1cm4pXG5cbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFBsYXllclR1cm4pXG4gICAgICAgIGlmIChpc1BsYXllciA9PT0gY3VycmVudFBsYXllclR1cm4pIHtcbiAgICAgICAgICAgIC8vIHR1cm5TdGF0ZS51cGRhdGVUdXJuKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm90IHlvdXIgb3duIGJvYXJkIVwiKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyB0dXJuIHRoaXMgdG8gYSBmdW5jdGlvbj8gb3IgaXMgdGhlcmUgYW5vdGhlciB3YXk/XG5cbiAgICAgICAgY29uc3QgeCA9IGNvbHVtbkluZGV4XG4gICAgICAgIGNvbnN0IHkgPSByb3dJbmRleDtcbiAgICAgICAgY29uc29sZS5sb2coeCx5KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIuYm9hcmQuaGl0TWFwW3hdW3ldKVxuXG4gICAgICAgIGlmIChwbGF5ZXIuYm9hcmQuaGl0TWFwW3hdW3ldID09PSBcIk1pc3NcIiB8fCBwbGF5ZXIuYm9hcmQuaGl0TWFwW3hdW3ldID09PSBcIkhpdFwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdyaWQgYWxyZWFkeSBjaG9zZW5cIilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soeCx5KVxuICAgICAgICB0dXJuU3RhdGUudXBkYXRlVHVybigpXG4gICAgICAgIGlmIChwbGF5ZXIuYm9hcmQub3duR3JpZFt4XVt5XSkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoaXMgaWYgbm90IG5lY2Vzc2FyeVxuICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdzaGlwLWlzLWhpdCcpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIuYm9hcmQub3duR3JpZFt4XVt5XS5nZXRIaXRzKCkpXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBhbGxTdW5rKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdhdHRhY2stbWlzc2VkJyk7XG4gICAgICAgIC8vIHJlLXJlbmRlciBoaXRNYXAgYW5kIHJlbW92ZSBhbGwgZGlzcGxheVNoaXBzXG5cblxuXG5cblxuICAgICAgICAvLyBsZXQgcGxheWVyVHVybiA9IHRydWVcblxuICAgICAgICAvLyBpZiAocGxheWVyVHVybikge1xuICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgIH0pXG59XG5cbmV4cG9ydHtcbiAgICBwb3B1bGF0ZVBsYXllcjFCb2FyZCxcbiAgICBwb3B1bGF0ZVBsYXllcjJCb2FyZFxufSIsIlxuZnVuY3Rpb24gY3JlYXRlRE9NICgpIHtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lcicpO1xuICAgIGJvZHkuYXBwZW5kKG1haW5Db250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWRpdicpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZChoZWFkZXJEaXYpO1xuXG4gICAgICAgIGNvbnN0IHBsYXllckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwbGF5ZXJEaXYuY2xhc3NMaXN0LmFkZCgncGxheWVyLWRpdicpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZChwbGF5ZXJEaXYpO1xuXG4gICAgICAgIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb290ZXJEaXYuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWRpdicpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZChmb290ZXJEaXYpO1xuXG5cblxuXG5cblxuICAgIGNvbnN0IHBsYXllcjFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5ZXIxRGl2LmNsYXNzTGlzdC5hZGQoJ3BsYXllcjEtZGl2Jyk7XG4gICAgcGxheWVyRGl2LmFwcGVuZChwbGF5ZXIxRGl2KTtcbiAgICAvLyBwbGF5ZXIxRGl2LnRleHRDb250ZW50ID0gXCJQbGF5ZXIgMVwiO1xuXG4gICAgICAgIGNvbnN0IHBsYXllcjFHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllcjFHcmlkLmNsYXNzTGlzdC5hZGQoJ3BsYXllcjEtZ3JpZCcpO1xuICAgICAgICBwbGF5ZXIxRGl2LmFwcGVuZChwbGF5ZXIxR3JpZCk7XG5cbiAgICAgICAgY29uc3QgcGxheWVyMUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllcjFMYWJlbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXIxLWxhYmVsJyk7XG4gICAgICAgIHBsYXllcjFMYWJlbC50ZXh0Q29udGVudCA9IFwiUGxheWVyIDFcIlxuICAgICAgICBwbGF5ZXIxRGl2LmFwcGVuZChwbGF5ZXIxTGFiZWwpXG5cbiAgICBjb25zdCBwbGF5ZXIyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVyMkRpdi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXIyLWRpdicpO1xuICAgIHBsYXllckRpdi5hcHBlbmQocGxheWVyMkRpdilcbiAgICAvLyBwbGF5ZXIyRGl2LnRleHRDb250ZW50ID0gXCJQbGF5ZXIgMlwiO1xuXG4gICAgICAgIGNvbnN0IHBsYXllcjJHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllcjJHcmlkLmNsYXNzTGlzdC5hZGQoJ3BsYXllcjItZ3JpZCcpO1xuICAgICAgICBwbGF5ZXIyRGl2LmFwcGVuZChwbGF5ZXIyR3JpZCk7XG5cbiAgICAgICAgY29uc3QgcGxheWVyMkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllcjJMYWJlbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXIyLWxhYmVsJyk7XG4gICAgICAgIHBsYXllcjJMYWJlbC50ZXh0Q29udGVudCA9IFwiUGxheWVyIDJcIlxuICAgICAgICBwbGF5ZXIyRGl2LmFwcGVuZChwbGF5ZXIyTGFiZWwpXG5cblxuICAgIC8vIENyZWF0ZSBib2FyZCBkaXYsIG1ha2Ugc3VyZSB0aGVyZSBpcyBtaW5pbXVtIHNpemUgZm9yIGhlaWdodCBhbmQgd2lkdGhcbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVET01cbn1cblxuIiwiIGZ1bmN0aW9uIGNyZWF0ZVNoaXAgKGxlbmd0aCl7XG4gICAgbGV0IHRvdGFsSGl0cyA9IDA7XG4gICAgbGV0IHN1bmsgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdldExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aFxuICAgIH1cblxuICAgIGNvbnN0IGdldEhpdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0b3RhbEhpdHNcbiAgICB9XG5cbiAgICBjb25zdCBpc1N1bmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0b3RhbEhpdHMgPj0gbGVuZ3RoKSB7XG4gICAgICAgICAgICBzdW5rID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdW5rXG4gICAgfVxuXG5cbiAgICBjb25zdCBoaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRvdGFsSGl0cysrXG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICBnZXRMZW5ndGgsXG4gICAgICAgIGdldEhpdHMsXG4gICAgICAgIGlzU3VuayxcbiAgICAgICAgaGl0XG4gICAgfVxuIH1cblxuXG4gZXhwb3J0e1xuICAgIGNyZWF0ZVNoaXBcbiB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJGYWN0b3J5XCI7XG4vLyBpbXBvcnQgeyBtb2R1bGUgfSBmcm9tICcuL21vZHVsZSc7XG5cblxuLy8gVGhpcyBpcyBqdXN0IGEgQ1JVRC4gSXQgc2hvdWxkIGJlIGVhc3kuIEJ1dCBtYWtlIHN1cmUgdG8gZm9sbG93IHRoZSBpbnN0cnVjdGlvbnMuXG5cbi8vIG1vZHVsZSgpXG5cblxuaW1wb3J0IHsgY3JlYXRlRE9NIH0gZnJvbSBcIi4vcmVuZGVyRE9NXCI7XG5cbmltcG9ydCB7IGdhbWVGbG93IH0gZnJvbSAnLi9nYW1lRmxvdyc7XG5cbi8vIGltcG9ydCB7IHBvcHVsYXRlQm9hcmQgfSBmcm9tICcuL3JlbmRlckJvYXJkJztcblxuY3JlYXRlRE9NKCk7XG5nYW1lRmxvdygpO1xuXG5cbi8vIHJlbW92ZSB0aGlzIGxhdGVyXG4vLyBjb25zdCB0ZXN0UGxheWVyID0gY3JlYXRlUGxheWVyKFwicmVhbFwiKTtcbi8vIHBvcHVsYXRlQm9hcmQodGVzdFBsYXllcikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=