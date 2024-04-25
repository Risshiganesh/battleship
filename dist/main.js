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

}`, "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT,UAAU;CACV,sBAAsB;AACvB;;AAEA;;IAEI,YAAY;IACZ,WAAW;IACX,uBAAuB;AAC3B;;AAEA;;IAEI,oDAAoD;;IAEpD,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,eAAe;;IAEf,aAAa;AACjB;;;;;AAKA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,8BAA8B;IAC9B,aAAa;IACb;;AAEJ;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;AAC3B;;;AAGA;;IAEI,aAAa;IACb,SAAS;AACb;;;AAGA;IACI,WAAW;IACX,YAAY;IACZ,4BAA4B;IAC5B,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sCAAsC;IACtC,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,wBAAwB;IACxB,kBAAkB;AACtB;;;AAGA;;;IAGI,oCAAoC;IACpC,oCAAoC;;IAEpC,0BAA0B;IAC1B,8BAA8B;IAC9B,+BAA+B;IAC/B,aAAa;IACb,sCAAsC;IACtC,YAAY;;AAEhB;;;AAGA;;IAEI,YAAY;IACZ,WAAW;IACX,gCAAgC;IAChC,kBAAkB;IAClB,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,mCAAmC;IACnC,iCAAiC;AACrC;;AAEA;;IAEI,2BAA2B;;AAE/B;AACA;IACI,gDAAgD;IAChD,wBAAwB;AAC5B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,4BAA4B;AAChC;;;AAGA;IACI,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;AAC3B;AACA;IACI,gCAAgC;;IAEhC;;QAEI,mCAAmC;QACnC,YAAY;QACZ,aAAa;;IAEjB;IACA;QACI,QAAQ;IACZ;IACA;QACI,QAAQ;IACZ;;IAEA;QACI,QAAQ;IACZ;;IAEA;QACI,QAAQ;IACZ;;AAEJ","sourcesContent":["*{\n margin: 0;\n padding: 0;\n box-sizing: border-box;\n}\n\nhtml,\nbody{\n    height: 100%;\n    width: 100%;\n    background-color: black;\n}\n\n.main-container {\n\n    /* Have a minimum height and width for .player-div */\n\n    width: 100%;\n    height: 100%;\n    border: 2px solid red;\n    display: grid;\n    grid-template-rows: 100px 1fr 50px;\n}\n\n.header-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid blue;\n    color: white;\n    text-align: center;\n    font-size: 25px;\n\n    padding: 30px;\n}\n\n\n\n\n.player-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid pink;\n    /* background-color: yellow; */\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr))\n\n}\n\n.footer-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid green;\n}\n\n\n.player1-div,\n.player2-div{\n    padding: 20px;\n    gap: 15px;\n}\n\n\n.player1-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid lightgreen;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    /* text-align: center; */\n    /* color: white; */\n}\n\n.player2-div {\n    width: 100%;\n    height: 100%;\n    border: 2px solid lightgoldenrodyellow;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    /* text-align: center; */\n    /* color: white; */\n}\n\n\n.player1-grid,\n.player2-grid{\n\n    --height-and-width: max(350px, 30vw);\n    --border-size: 2px solid greenyellow;\n\n    border: var(--border-size);\n    width: var(--height-and-width);\n    height: var(--height-and-width);\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    color: white;\n\n}\n\n\n.player1-label,\n.player2-label{\n    color: white;\n    width: 100%;\n    border: 2px solid blanchedalmond;\n    text-align: center;\n    /* padding: 10px; */\n}\n\n\n.grid-column{\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    /* border: 2px solid turquoise; */\n}\n\n.grid-row{\n\n    border: 2px solid turquoise;\n    \n}\n.grid-row:hover{\n    /* background-color: rgba(255, 255, 0, 0.156); */\n    border: 3px solid yellow;\n}\n\n.clicked {\n    background-color: red;\n}\n\n.ship-located {\n    background-color: darkorchid;\n}\n\n\n.ship-is-hit{\n    background-color: darkred;\n}\n\n.attack-missed{\n    background-color: white;\n}\n@media (max-width: 770px){\n    /* change player font position */\n\n    .player1-grid,\n    .player2-grid{\n        /* border: 2px solid greenyellow; */\n        width: 350px;\n        height: 350px;\n\n    }\n    .player1-div{\n        order: 2;\n    }\n    .player2-div{\n        order: 1;\n    }\n\n    .player2-grid{\n        order: 2;\n    }\n\n    .player2-label{\n        order: 1;\n    }\n\n}"],"sourceRoot":""}]);
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


    player1Board = (0,_renderBoard__WEBPACK_IMPORTED_MODULE_2__.populatePlayer1Board)(player1, player1.type);
    player2Board = (0,_renderBoard__WEBPACK_IMPORTED_MODULE_2__.populatePlayer2Board)(player2, player2.type);

   

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

            // build AI here?
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

    (0,_renderDOM__WEBPACK_IMPORTED_MODULE_3__.updateHeader)(`Computer chose x: ${x} and y: ${y} and it's a ${result.toLowerCase()}`);
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
function populatePlayer1Board (player1, player1Type){
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
function populatePlayer2Board (player2, player2Type) {

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

            // console.log("Game is over")

            // updateHeader("Game is over");
            return
        }

        // console.log(currentPlayerTurn)

        (0,_renderDOM__WEBPACK_IMPORTED_MODULE_1__.updateHeader)(`It is ${currentPlayerTurn}'s turn.`)
        if (isPlayer === currentPlayerTurn) {
            // turnState.updateTurn()
            // console.log("Not your own board!")

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

        (0,_renderDOM__WEBPACK_IMPORTED_MODULE_1__.updateHeader)(`${currentPlayerTurn} chose x: ${x} and y: ${y} and it's a ${result.toLowerCase()}`);

        _gameFlow__WEBPACK_IMPORTED_MODULE_0__.turnState.updateTurn();

        if (player.board.ownGrid[x][y]) {
  
            grid.classList.add('ship-is-hit')
            console.log(player.board.ownGrid[x][y].getHits())
            // check if allSunk()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFlBQVksd0RBQVk7QUFDeEI7QUFDQTs7QUFFQTtBQUNBLFlBQVksd0RBQVk7QUFDeEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJLHdEQUFZLHNCQUFzQixHQUFHLFNBQVMsR0FBRyxhQUFhLHFCQUFxQjtBQUN2Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbE5BO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOzs7QUFHQSxTQUFTOzs7QUFHVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLDRCQUE0Qiw0QkFBNEI7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFH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RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCOztBQUVtQjtBQUMvQyxZQUFZLFNBQVM7OztBQUdyQjs7QUFFQTs7O0FBR3dDOztBQUVGOztBQUV0QyxZQUFZLGdCQUFnQjs7QUFFNUIscURBQVM7QUFDVCxtREFBUTs7O0FBR1I7QUFDQTtBQUNBLDRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3M/NjAxZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUZsb3cuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3JlbmRlckJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVuZGVyRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiBtYXJnaW46IDA7XG4gcGFkZGluZzogMDtcbiBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLFxuYm9keXtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG5cbiAgICAvKiBIYXZlIGEgbWluaW11bSBoZWlnaHQgYW5kIHdpZHRoIGZvciAucGxheWVyLWRpdiAqL1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyIDUwcHg7XG59XG5cbi5oZWFkZXItZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcblxuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5cblxuXG5cbi5wbGF5ZXItZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgcGluaztcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7ICovXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM4MHB4LCAxZnIpKVxuXG59XG5cbi5mb290ZXItZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XG59XG5cblxuLnBsYXllcjEtZGl2LFxuLnBsYXllcjItZGl2e1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZ2FwOiAxNXB4O1xufVxuXG5cbi5wbGF5ZXIxLWRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JlZW47XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xufVxuXG4ucGxheWVyMi1kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdvbGRlbnJvZHllbGxvdztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgICAvKiBjb2xvcjogd2hpdGU7ICovXG59XG5cblxuLnBsYXllcjEtZ3JpZCxcbi5wbGF5ZXIyLWdyaWR7XG5cbiAgICAtLWhlaWdodC1hbmQtd2lkdGg6IG1heCgzNTBweCwgMzB2dyk7XG4gICAgLS1ib3JkZXItc2l6ZTogMnB4IHNvbGlkIGdyZWVueWVsbG93O1xuXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItc2l6ZSk7XG4gICAgd2lkdGg6IHZhcigtLWhlaWdodC1hbmQtd2lkdGgpO1xuICAgIGhlaWdodDogdmFyKC0taGVpZ2h0LWFuZC13aWR0aCk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICBjb2xvcjogd2hpdGU7XG5cbn1cblxuXG4ucGxheWVyMS1sYWJlbCxcbi5wbGF5ZXIyLWxhYmVse1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFuY2hlZGFsbW9uZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cbn1cblxuXG4uZ3JpZC1jb2x1bW57XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCB0dXJxdW9pc2U7ICovXG59XG5cbi5ncmlkLXJvd3tcblxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHR1cnF1b2lzZTtcbiAgICBcbn1cbi5ncmlkLXJvdzpob3ZlcntcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjE1Nik7ICovXG4gICAgYm9yZGVyOiAzcHggc29saWQgeWVsbG93O1xufVxuXG4uY2xpY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uc2hpcC1sb2NhdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb3JjaGlkO1xufVxuXG5cbi5zaGlwLWlzLWhpdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xufVxuXG4uYXR0YWNrLW1pc3NlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NzBweCl7XG4gICAgLyogY2hhbmdlIHBsYXllciBmb250IHBvc2l0aW9uICovXG5cbiAgICAucGxheWVyMS1ncmlkLFxuICAgIC5wbGF5ZXIyLWdyaWR7XG4gICAgICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVueWVsbG93OyAqL1xuICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgIGhlaWdodDogMzUwcHg7XG5cbiAgICB9XG4gICAgLnBsYXllcjEtZGl2e1xuICAgICAgICBvcmRlcjogMjtcbiAgICB9XG4gICAgLnBsYXllcjItZGl2e1xuICAgICAgICBvcmRlcjogMTtcbiAgICB9XG5cbiAgICAucGxheWVyMi1ncmlke1xuICAgICAgICBvcmRlcjogMjtcbiAgICB9XG5cbiAgICAucGxheWVyMi1sYWJlbHtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgfVxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysc0JBQXNCO0FBQ3ZCOztBQUVBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLG9EQUFvRDs7SUFFcEQsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZixhQUFhO0FBQ2pCOzs7OztBQUtBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYjs7QUFFSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOzs7QUFHQTs7SUFFSSxhQUFhO0lBQ2IsU0FBUztBQUNiOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOzs7QUFHQTs7O0lBR0ksb0NBQW9DO0lBQ3BDLG9DQUFvQzs7SUFFcEMsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxZQUFZOztBQUVoQjs7O0FBR0E7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLGlDQUFpQztBQUNyQzs7QUFFQTs7SUFFSSwyQkFBMkI7O0FBRS9CO0FBQ0E7SUFDSSxnREFBZ0Q7SUFDaEQsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOzs7QUFHQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0NBQWdDOztJQUVoQzs7UUFFSSxtQ0FBbUM7UUFDbkMsWUFBWTtRQUNaLGFBQWE7O0lBRWpCO0lBQ0E7UUFDSSxRQUFRO0lBQ1o7SUFDQTtRQUNJLFFBQVE7SUFDWjs7SUFFQTtRQUNJLFFBQVE7SUFDWjs7SUFFQTtRQUNJLFFBQVE7SUFDWjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiBtYXJnaW46IDA7XFxuIHBhZGRpbmc6IDA7XFxuIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuXFxuICAgIC8qIEhhdmUgYSBtaW5pbXVtIGhlaWdodCBhbmQgd2lkdGggZm9yIC5wbGF5ZXItZGl2ICovXFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnIgNTBweDtcXG59XFxuXFxuLmhlYWRlci1kaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcblxcbiAgICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG4ucGxheWVyLWRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHBpbms7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHllbGxvdzsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzODBweCwgMWZyKSlcXG5cXG59XFxuXFxuLmZvb3Rlci1kaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuXFxuLnBsYXllcjEtZGl2LFxcbi5wbGF5ZXIyLWRpdntcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG5cXG4ucGxheWVyMS1kaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyZWVuO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xcbn1cXG5cXG4ucGxheWVyMi1kaXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdvbGRlbnJvZHllbGxvdztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cXG59XFxuXFxuXFxuLnBsYXllcjEtZ3JpZCxcXG4ucGxheWVyMi1ncmlke1xcblxcbiAgICAtLWhlaWdodC1hbmQtd2lkdGg6IG1heCgzNTBweCwgMzB2dyk7XFxuICAgIC0tYm9yZGVyLXNpemU6IDJweCBzb2xpZCBncmVlbnllbGxvdztcXG5cXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItc2l6ZSk7XFxuICAgIHdpZHRoOiB2YXIoLS1oZWlnaHQtYW5kLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQtYW5kLXdpZHRoKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuXFxuXFxuLnBsYXllcjEtbGFiZWwsXFxuLnBsYXllcjItbGFiZWx7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYW5jaGVkYWxtb25kO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXFxufVxcblxcblxcbi5ncmlkLWNvbHVtbntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHR1cnF1b2lzZTsgKi9cXG59XFxuXFxuLmdyaWQtcm93e1xcblxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0dXJxdW9pc2U7XFxuICAgIFxcbn1cXG4uZ3JpZC1yb3c6aG92ZXJ7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuMTU2KTsgKi9cXG4gICAgYm9yZGVyOiAzcHggc29saWQgeWVsbG93O1xcbn1cXG5cXG4uY2xpY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnNoaXAtbG9jYXRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtvcmNoaWQ7XFxufVxcblxcblxcbi5zaGlwLWlzLWhpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXG59XFxuXFxuLmF0dGFjay1taXNzZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzcwcHgpe1xcbiAgICAvKiBjaGFuZ2UgcGxheWVyIGZvbnQgcG9zaXRpb24gKi9cXG5cXG4gICAgLnBsYXllcjEtZ3JpZCxcXG4gICAgLnBsYXllcjItZ3JpZHtcXG4gICAgICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVueWVsbG93OyAqL1xcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcXG5cXG4gICAgfVxcbiAgICAucGxheWVyMS1kaXZ7XFxuICAgICAgICBvcmRlcjogMjtcXG4gICAgfVxcbiAgICAucGxheWVyMi1kaXZ7XFxuICAgICAgICBvcmRlcjogMTtcXG4gICAgfVxcblxcbiAgICAucGxheWVyMi1ncmlke1xcbiAgICAgICAgb3JkZXI6IDI7XFxuICAgIH1cXG5cXG4gICAgLnBsYXllcjItbGFiZWx7XFxuICAgICAgICBvcmRlcjogMTtcXG4gICAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZVBsYXllciB9IGZyb20gXCIuL3BsYXllckZhY3RvcnlcIjtcbmltcG9ydCB7IGNyZWF0ZVNoaXAgfSBmcm9tIFwiLi9zaGlwRmFjdG9yeVwiO1xuaW1wb3J0IHsgcG9wdWxhdGVQbGF5ZXIxQm9hcmQsIHBvcHVsYXRlUGxheWVyMkJvYXJkIH0gZnJvbSBcIi4vcmVuZGVyQm9hcmRcIjtcbmltcG9ydCB7IHVwZGF0ZUhlYWRlciB9IGZyb20gXCIuL3JlbmRlckRPTVwiO1xuXG4vLyBUaGVzZSBwbGF5ZXJCb2FyZHMgYXJlIHNpZGUgZWZmZWN0cyAoZXh0ZXJuYWwgc3RhdGUpIC8gKGRlcGVuZGVuY2llcykuXG5sZXQgcGxheWVyMUJvYXJkOyBcbmxldCBwbGF5ZXIyQm9hcmQ7XG5cblxuZnVuY3Rpb24gZ2FtZUZsb3cgKCkge1xuXG4gICAgY29uc3QgcGxheWVyMSA9IGNyZWF0ZVBsYXllcihcInJlYWxcIik7XG4gICAgY29uc3QgcGxheWVyMiA9IGNyZWF0ZVBsYXllcihcImNvbXB1dGVyXCIpOyBcblxuICAgIC8vIHBsYWNlIHBsYXllcjEgc2hpcHNcbiAgICAvLyBUeXBlcyBvZiBzaGlwXG4gICAgLy8gLSBDYXJyaWVyLCBzaXplIDVcbiAgICAvLyAtIEJhdHRsZXNoaXAsIHNpemUgNFxuICAgIC8vIC0gRGVzdHJveWVyLCBzaXplIDNcbiAgICAvLyAtIFN1Ym1hcmluZSwgc2l6ZSAzXG4gICAgLy8gLSBQYXRyb2wgQm9hdCwgc2l6ZSAyXG5cbiAgICBjb25zdCBwbGF5ZXIxQ2FycmllciA9IGNyZWF0ZVNoaXAoNSk7XG4gICAgY29uc3QgcGxheWVyMUJhdHRsZXNoaXAgPSBjcmVhdGVTaGlwKDQpO1xuICAgIGNvbnN0IHBsYXllcjFEZXN0cm95ZXIgPSBjcmVhdGVTaGlwKDMpO1xuICAgIGNvbnN0IHBsYXllcjFTdWJtYXJpbmUgPSBjcmVhdGVTaGlwKDMpO1xuICAgIGNvbnN0IHBsYXllcjFQYXRyb2xCb2F0ID0gY3JlYXRlU2hpcCgyKVxuXG5cbiAgICBjb25zdCBwbGF5ZXIyQ2FycmllciA9IGNyZWF0ZVNoaXAoNSk7XG4gICAgY29uc3QgcGxheWVyMkJhdHRsZXNoaXAgPSBjcmVhdGVTaGlwKDQpO1xuICAgIGNvbnN0IHBsYXllcjJEZXN0cm95ZXIgPSBjcmVhdGVTaGlwKDMpO1xuICAgIGNvbnN0IHBsYXllcjJTdWJtYXJpbmUgPSBjcmVhdGVTaGlwKDMpO1xuICAgIGNvbnN0IHBsYXllcjJQYXRyb2xCb2F0ID0gY3JlYXRlU2hpcCgyKVxuXG4gICAgcGxheWVyMS5ib2FyZC5wbGFjZVNoaXAoe3g6OSx5Ojl9LCBcIm5vcnRoXCIsIHBsYXllcjFDYXJyaWVyKTtcbiAgICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcCh7eDowLHk6MH0sIFwiZWFzdFwiLCBwbGF5ZXIxQmF0dGxlc2hpcCk7XG4gICAgcGxheWVyMS5ib2FyZC5wbGFjZVNoaXAoe3g6NSx5OjV9LCBcImVhc3RcIiwgcGxheWVyMURlc3Ryb3llcik7XG4gICAgcGxheWVyMS5ib2FyZC5wbGFjZVNoaXAoe3g6Mix5OjJ9LCBcImVhc3RcIiwgcGxheWVyMVN1Ym1hcmluZSk7XG4gICAgcGxheWVyMS5ib2FyZC5wbGFjZVNoaXAoe3g6OSx5OjB9LCBcInNvdXRoXCIsIHBsYXllcjFQYXRyb2xCb2F0KTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMDsgaW5kZXgrKykge1xuICAgICAgICAvLyBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuICAgICAgICBcbiAgICAgICAgcGxheWVyMS5ib2FyZC5yZWNlaXZlQXR0YWNrKDksaW5kZXgpXG4gICAgICAgIHBsYXllcjEuYm9hcmQucmVjZWl2ZUF0dGFjayhpbmRleCxpbmRleClcbiAgICB9XG5cblxuICAgIHBsYXllcjIuYm9hcmQucGxhY2VTaGlwKHt4OjgseTo4fSwgXCJ3ZXN0XCIsIHBsYXllcjJDYXJyaWVyKTtcbiAgICBwbGF5ZXIyLmJvYXJkLnBsYWNlU2hpcCh7eDowLHk6MH0sIFwiZWFzdFwiLCBwbGF5ZXIyQmF0dGxlc2hpcCk7XG4gICAgcGxheWVyMi5ib2FyZC5wbGFjZVNoaXAoe3g6NSx5OjV9LCBcImVhc3RcIiwgcGxheWVyMkRlc3Ryb3llcik7XG4gICAgcGxheWVyMi5ib2FyZC5wbGFjZVNoaXAoe3g6Mix5OjJ9LCBcImVhc3RcIiwgcGxheWVyMlN1Ym1hcmluZSk7XG4gICAgcGxheWVyMi5ib2FyZC5wbGFjZVNoaXAoe3g6OSx5OjV9LCBcInNvdXRoXCIsIHBsYXllcjJQYXRyb2xCb2F0KTtcblxuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7XG4gICAgICAgIC8vIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG4gICAgICAgIFxuICAgICAgICAvLyBwbGF5ZXIyLmJvYXJkLnJlY2VpdmVBdHRhY2soOSxpbmRleClcbiAgICAgICAgcGxheWVyMi5ib2FyZC5yZWNlaXZlQXR0YWNrKGluZGV4LGluZGV4KVxuICAgIH1cblxuXG4gICAgcGxheWVyMUJvYXJkID0gcG9wdWxhdGVQbGF5ZXIxQm9hcmQocGxheWVyMSwgcGxheWVyMS50eXBlKTtcbiAgICBwbGF5ZXIyQm9hcmQgPSBwb3B1bGF0ZVBsYXllcjJCb2FyZChwbGF5ZXIyLCBwbGF5ZXIyLnR5cGUpO1xuXG4gICBcblxuICAgIC8vIGNvbnNvbGUubG9nKHBsYXllcjEuYm9hcmQuYWxsU3VuaygpKVxuXG4gICAgLy8gd2hpbGUgKCEocGxheWVyMS5ib2FyZC5hbGxTdW5rKCkpIHx8ICEocGxheWVyMi5ib2FyZC5hbGxTdW5rKCkpKSB7XG4gICAgLy8gICAgIHBsYXllcjFCb2FyZC5zaG93U2hpcHMoKVxuICAgIC8vIH1cblxuICAgIHBsYXllcjFCb2FyZC5kaXNwbGF5R3JpZHMoKVxuXG4gICAgcGxheWVyMUJvYXJkLnNob3dTaGlwcygpXG5cbiAgICBcblxuXG4gICAgcGxheWVyMkJvYXJkLmRpc3BsYXlHcmlkcygpXG5cbiAgICBwbGF5ZXIyQm9hcmQuc2hvd0hpdE1hcCgpXG5cbiAgICAvLyBjb25zb2xlLmxvZyhcImdhbWUgb3ZlclwiKVxuXG4gICAgLy8gY29uc3QgdHVyblN0YXRlID0gY3VycmVudFR1cm4oKVxuXG5cblxufVxuXG4vLyBtZXJnZSB0dXJuc3RhdGUgaW50byBnYW1lZmxvdyBvciBnYW1lZmxvdyBpbnRvIHR1cm5zdGF0ZT8gQmVjYXVzZSBjYW5ub3Qgc2hvdyBzaGlwcyAocGxheWVyMUJvYXJkIG11c3QgYmUgYWNjZXNzZWQpLlxuXG4vLyBpbiB0dXJuU3RhdGUgY3JlYXRlIGEgZnVuY3Rpb24gdG8gY2hlY2sgaWYgZ2FtZW92ZXIgYW5kIHdobyB3b24gdXNpbmcgYWxsU3VuaygpIGZyb20gZWFjaCBib2FyZHMuIElzIGNoZWNrZWQgZXZlcnl0aW1lIGEgZ3JpZCBpcyBjbGlja2VkLlxuXG5cblxuXG5jb25zdCB0dXJuU3RhdGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGxldCBwbGF5ZXJUdXJuID0gXCJwbGF5ZXIxXCI7XG5cbiAgICBcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVR1cm4oKSB7XG4gICAgICAgIGlmIChwbGF5ZXJUdXJuID09PSBcInBsYXllcjFcIikge1xuICAgICAgICAgICAgcGxheWVyVHVybiA9IFwicGxheWVyMlwiXG5cbiAgICAgICAgICAgIHBsYXllcjFCb2FyZC5kZWxldGVHcmlkcygpO1xuICAgICAgICAgICAgcGxheWVyMUJvYXJkLmRpc3BsYXlHcmlkcygpO1xuICAgICAgICAgICAgcGxheWVyMUJvYXJkLnNob3dIaXRNYXAoKTtcblxuICAgICAgICAgICAgcGxheWVyMkJvYXJkLmRlbGV0ZUdyaWRzKCk7XG4gICAgICAgICAgICBwbGF5ZXIyQm9hcmQuZGlzcGxheUdyaWRzKCk7XG4gICAgICAgICAgICBwbGF5ZXIyQm9hcmQuc2hvd1NoaXBzKCk7XG4gICAgICAgICAgICBwbGF5ZXIyQm9hcmQuc2hvd0hpdE1hcCgpO1xuXG4gICAgICAgICAgICAvLyBidWlsZCBBSSBoZXJlP1xuICAgICAgICAgICAgaWYgKHBsYXllcjJCb2FyZC5wbGF5ZXIyLnR5cGUgPT09ICdjb21wdXRlcicpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlckF0dGFja3MocGxheWVyMUJvYXJkLnBsYXllcjEpXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGxheWVyVHVybiA9PT0gXCJwbGF5ZXIyXCIpIHtcbiAgICAgICAgICAgIHBsYXllclR1cm4gPSBcInBsYXllcjFcIlxuXG4gICAgICAgICAgICBwbGF5ZXIyQm9hcmQuZGVsZXRlR3JpZHMoKTtcbiAgICAgICAgICAgIHBsYXllcjJCb2FyZC5kaXNwbGF5R3JpZHMoKTtcbiAgICAgICAgICAgIHBsYXllcjJCb2FyZC5zaG93SGl0TWFwKCk7XG5cbiAgICAgICAgICAgIHBsYXllcjFCb2FyZC5kZWxldGVHcmlkcygpO1xuICAgICAgICAgICAgcGxheWVyMUJvYXJkLmRpc3BsYXlHcmlkcygpO1xuICAgICAgICAgICAgcGxheWVyMUJvYXJkLnNob3dTaGlwcygpO1xuICAgICAgICAgICAgcGxheWVyMUJvYXJkLnNob3dIaXRNYXAoKTtcblxuICAgICAgICAgICAgaWYgKHBsYXllcjFCb2FyZC5wbGF5ZXIxLnR5cGUgPT09ICdjb21wdXRlcicpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlckF0dGFja3MocGxheWVyMkJvYXJkLnBsYXllcjIpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VHVybigpIHtcbiAgICAgICAgcmV0dXJuIHBsYXllclR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNHYW1lT3ZlciAoKSB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwbGF5ZXIxTG9zZXMgPSBwbGF5ZXIxQm9hcmQucGxheWVyMS5ib2FyZC5hbGxTdW5rKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllcjFMb3Nlcyk7XG5cbiAgICAgICAgY29uc3QgcGxheWVyMkxvc2VzID0gcGxheWVyMkJvYXJkLnBsYXllcjIuYm9hcmQuYWxsU3VuaygpO1xuICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIyTG9zZXMpO1xuXG4gICAgICAgIGlmIChwbGF5ZXIxTG9zZXMpIHtcbiAgICAgICAgICAgIHVwZGF0ZUhlYWRlcihcIlBsYXllciAyIHdpbnMhXCIpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbGF5ZXIyTG9zZXMpIHtcbiAgICAgICAgICAgIHVwZGF0ZUhlYWRlcihcIlBsYXllciAxIHdpbnMhXCIpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJue1xuICAgICAgICB1cGRhdGVUdXJuLFxuICAgICAgICBnZXRUdXJuLFxuICAgICAgICBpc0dhbWVPdmVyXG4gICAgfVxufSkoKVxuXG5cbmxldCB0ZXN0ID0gMFxuXG5mdW5jdGlvbiBjb21wdXRlckF0dGFja3MgKHBsYXllcikge1xuXG4gICAgY29uc29sZS5sb2coXCJDb21wdXRlciBhdHRhY2tzXCIpO1xuXG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBwbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayh4LHkpXG5cbiAgICAvLyBjb25zb2xlLmxvZyhcIkNvb3JkczogXCIreCx5KVxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICBpZiAocmVzdWx0ID09PSBcIkFscmVhZHkgSGl0XCIgfHwgcmVzdWx0ID09IFwiQWxyZWFkeSBNaXNzXCIpIHtcbiAgICAgICAgIHJldHVybiBjb21wdXRlckF0dGFja3MocGxheWVyKVxuICAgIH1cblxuICAgXG5cbiAgICAvLyBjb25zb2xlLmxvZyhcIkNvbXB1dGVyIGhhcyBzdWNjZXNzZnVsbHkgYXR0YWNrZWQuXCIpO1xuXG4gICAgdXBkYXRlSGVhZGVyKGBDb21wdXRlciBjaG9zZSB4OiAke3h9IGFuZCB5OiAke3l9IGFuZCBpdCdzIGEgJHtyZXN1bHQudG9Mb3dlckNhc2UoKX1gKTtcbiAgICB0dXJuU3RhdGUudXBkYXRlVHVybigpO1xuXG4gICBcbiAgICB0ZXN0KytcbiAgICBjb25zb2xlLmxvZygnQ29tcHV0ZXIgYXR0YWNrczonICsgdGVzdClcbiAgICByZXR1cm4gXG59XG5cblxuZXhwb3J0IHtcbiAgICBnYW1lRmxvdyxcbiAgICB0dXJuU3RhdGVcbn0iLCJmdW5jdGlvbiBjcmVhdGVHYW1lYm9hcmQoKXtcbiAgICBjb25zdCBvd25HcmlkID0gY3JlYXRlR3JpZCgpO1xuICAgIGNvbnN0IGhpdE1hcCA9IGNyZWF0ZUdyaWQoKTtcbiAgICBjb25zdCBwbGFjZWRTaGlwcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlR3JpZCAoKSB7XG5cbiAgICAgICAgY29uc3QgbmV3R3JpZCA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGdyaWRTaXplID0gMTA7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGdyaWRTaXplOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3dzID0gW11cbiAgICAgICAgICAgIHJvd3MubGVuZ3RoID0gMTA7XG5cbiAgICAgICAgICAgIG5ld0dyaWRbaW5kZXhdID0gcm93c1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld0dyaWQ7XG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcCAoY29vcmRpbmF0ZXMsIGRpcmVjdGlvbiwgc2hpcE9iamVjdCkge1xuXG5cbiAgICAgICAgY29uc3QgcG90ZW50aWFsQ29vcmRzID0gZ2V0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMsIGRpcmVjdGlvbiwgc2hpcE9iamVjdCk7XG4gICAgICAgIGNvbnN0IGdlbmVyYXRlZENvb3JkcyA9IHBvdGVudGlhbENvb3Jkcy5wb3RlbnRpYWxDb29yZGluYXRlcztcbiAgICAgICAgbGV0IHBsYWNlbWVudFZhbGlkaXR5ID0gcG90ZW50aWFsQ29vcmRzLnZhbGlkaXR5O1xuICAgICAgICBsZXQgcGxhY2VtZW50TXNnID0gXCJQbGFjZW1lbnRfc3VjY2Vzc1wiXG5cbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgLy8gICAgQ2hlY2tzIGlmIG92ZXJsYXBwaW5nIHNoaXBzIGV4aXN0XG4gICAgICAgIHBsYWNlbWVudFZhbGlkaXR5ID0gY2hlY2tQbGFjZW1lbnRWYWxpZGl0eShwbGFjZW1lbnRWYWxpZGl0eSwgZ2VuZXJhdGVkQ29vcmRzLCBvd25HcmlkKTtcbiAgICBcbiAgICAgICAgXG5cbiAgICAgICAgaWYgKCFwbGFjZW1lbnRWYWxpZGl0eSkge1xuICAgICAgICAgICAgcGxhY2VtZW50TXNnID0gXCJQbGFjZW1lbnRfZmFpbGVkXCJcbiAgICAgICAgICAgIHJldHVybiBwbGFjZW1lbnRNc2dcbiAgICAgICAgfVxuXG5cblxuICAgICAgICBnZW5lcmF0ZWRDb29yZHMuZm9yRWFjaChjb29yZHMgPT4ge1xuXG4gICAgICAgICAgICBvd25HcmlkW2Nvb3Jkc1swXV1bY29vcmRzWzFdXSA9IHNoaXBPYmplY3Q7XG5cblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIHBsYWNlZFNoaXBzLnB1c2goc2hpcE9iamVjdClcbiAgXG5cbiAgICAgICByZXR1cm4gcGxhY2VtZW50TXNnXG4gICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2sgKHgsIHkpIHtcblxuICAgICAgICBpZiAoaGl0TWFwW3hdW3ldID09PSBcIk1pc3NcIikge1xuICAgICAgICAgICAgcmV0dXJuIFwiQWxyZWFkeSBNaXNzXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghb3duR3JpZFt4XVt5XSkge1xuICAgICAgICAgICAgaGl0TWFwW3hdW3ldID0gXCJNaXNzXCJcbiAgICAgICAgICAgIHJldHVybiBcIk1pc3NcIlxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoaGl0TWFwW3hdW3ldID09PSBcIkhpdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJBbHJlYWR5IEhpdFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hpcCA9IG93bkdyaWRbeF1beV07XG4gICAgICAgIHNoaXAuaGl0KClcbiAgICAgICAgaGl0TWFwW3hdW3ldID0gJ0hpdCc7XG4gICAgICAgIHJldHVybiBcIkhpdFwiXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWxsU3VuayAoKSB7XG5cbiAgICAgICAgbGV0IGV2ZXJ5U2hpcFN1bmsgPSB0cnVlO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwbGFjZWRTaGlwcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBwbGFjZWRTaGlwc1tpbmRleF07XG5cbiAgICAgICAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIGV2ZXJ5U2hpcFN1bmsgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV2ZXJ5U2hpcFN1bmtcbiAgICB9XG4gICAgXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBvd25HcmlkLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGFsbFN1bmssXG4gICAgICAgIGhpdE1hcFxuICAgIH1cblxuXG5cbn1cblxuXG5mdW5jdGlvbiBnZXRDb29yZGluYXRlcyAoY29vcmRpbmF0ZXMsIGRpcmVjdGlvbiwgc2hpcE9iamVjdCkge1xuXG4gICAgbGV0IHZhbGlkaXR5ID0gdHJ1ZTtcblxuICAgIGNvbnN0IHBvdGVudGlhbENvb3JkaW5hdGVzID0gW11cblxuICAgIFxuICAgIGlmIChjb29yZGluYXRlcy54IDwgMCB8fCBjb29yZGluYXRlcy55IDwgMCB8fCBjb29yZGluYXRlcy54ID4gOSB8fCBjb29yZGluYXRlcy55ID4gOSApIHtcbiAgICAgICAgICAgIFxuICAgICAgICB2YWxpZGl0eSA9IGZhbHNlXG5cbiAgICAgICAgcmV0dXJuIHZhbGlkaXR5XG5cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcE9iamVjdC5nZXRMZW5ndGgoKTsgaW5kZXgrKykge1xuXG4gICAgICAgIFxuICAgICAgICBsZXQgeGNvb3JkcztcbiAgICAgICAgbGV0IHljb29yZHM7XG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJub3J0aFwiKSB7XG4gICAgICAgICAgICB4Y29vcmRzID0gY29vcmRpbmF0ZXMueFxuICAgICAgICAgICAgeWNvb3JkcyA9IGNvb3JkaW5hdGVzLnkgLSBpbmRleDtcblxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJzb3V0aFwiKSB7XG5cbiAgICAgICAgICAgIHhjb29yZHMgPSBjb29yZGluYXRlcy54XG4gICAgICAgICAgICB5Y29vcmRzID0gY29vcmRpbmF0ZXMueSArIGluZGV4O1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJlYXN0XCIpIHtcblxuICAgICAgICAgICAgeGNvb3JkcyA9IGNvb3JkaW5hdGVzLnggKyBpbmRleDtcbiAgICAgICAgICAgIHljb29yZHMgPSBjb29yZGluYXRlcy55OyBcblxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ3ZXN0XCIpIHtcbiAgICAgICAgICAgIHhjb29yZHMgPSBjb29yZGluYXRlcy54IC0gaW5kZXg7XG4gICAgICAgICAgICB5Y29vcmRzID0gY29vcmRpbmF0ZXMueTsgXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh4Y29vcmRzIDwgMCB8fCB5Y29vcmRzIDwgMCB8fCB4Y29vcmRzID4gOSB8fCB5Y29vcmRzID4gOSApIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFsaWRpdHkgPSBmYWxzZVxuXG4gICAgICAgIH1cblxuICAgICAgICBwb3RlbnRpYWxDb29yZGluYXRlcy5wdXNoKFt4Y29vcmRzLHljb29yZHNdKVxuICAgICAgICBcbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgXG4gICAgICAgIHZhbGlkaXR5LFxuICAgICAgICBwb3RlbnRpYWxDb29yZGluYXRlc1xuICAgIH1cbn1cblxuXG5cbmZ1bmN0aW9uIGNoZWNrUGxhY2VtZW50VmFsaWRpdHkgKHBsYWNlbWVudFZhbGlkaXR5LCBnZW5lcmF0ZWRDb29yZHMsIG93bkdyaWQpIHtcblxuICAgIGlmICghcGxhY2VtZW50VmFsaWRpdHkpIHtcbiAgICAgICAgcmV0dXJuIHBsYWNlbWVudFZhbGlkaXR5XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGdlbmVyYXRlZENvb3Jkcy5sZW5ndGg7IGluZGV4KyspIHtcblxuXG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IGdlbmVyYXRlZENvb3Jkc1tpbmRleF07XG4gICBcbiAgICAgICAgY29uc3Qgc2hpcCA9IG93bkdyaWRbY29vcmRzWzBdXVtjb29yZHNbMV1dXG5cbiAgICAgICAgaWYgKHNoaXApIHtcbiAgICAgICAgICAgIHBsYWNlbWVudFZhbGlkaXR5ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWNlbWVudFZhbGlkaXR5XG59XG5cblxuZXhwb3J0e1xuICAgIGNyZWF0ZUdhbWVib2FyZCxcbiAgICBnZXRDb29yZGluYXRlcyxcbiAgICBjaGVja1BsYWNlbWVudFZhbGlkaXR5XG59IiwiaW1wb3J0IHsgY3JlYXRlR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkRmFjdG9yeVwiXG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXllciAodHlwZSwgZW5lbXlIaXRtYXAsIGF0dGFja0VuZW15KSB7XG4gICAgY29uc3QgYm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoKTtcblxuICAgIGlmICghKHR5cGUgPT09IFwicmVhbFwiIHx8IHR5cGUgPT09IFwiY29tcHV0ZXJcIikpIHtcbiAgICAgICAgcmV0dXJuIFwiSW52YWxpZF9pbnB1dFwiO1xuICAgIH1cbiAgICAvLyBQbGF5ZXIgbG9naWMgYW5kIGNvbXB1dGVyIGxvZ2ljIGlzIG5vdCBjb21wbGV0ZS5cblxuICAgIGlmICh0eXBlID09PSBcInJlYWxcIikge1xuICAgIFxuICAgICAgICAvLyBjcmVhdGUgcGxheWVyXG4gICAgICAgIC8vIGNyZWF0ZSBib2FyZFxuICAgICAgICAvLyAtIEFscmVhZHkgZG9uZSBhYm92ZVxuXG4gICAgICAgIC8vIERvIGFsbCB0aGlzIGxvZ2ljIGluc2lkZSBoZXJlIG9yIG9uIGEgZGlmZmVyZW50IG1vZHVsZT9cblxuICAgICAgICAvLyBwbGFjZSBzaGlwcyAod2hhdCB0eXBlcyBvZiBzaGlwIGFuZCBob3cgbWFueT8pXG4gICAgICAgIC8vIC0gY3JlYXRlIDUgdHlwZXMgb2Ygc2hpcHMgYW5kIHBsYWNlIHRoZW1cblxuICAgICAgICAvLyBHQU1FRkxPVyBCRUdJTlNcbiAgICAgICAgLy8gZXhlY3V0ZSBvcHBvbmVudCdzIHJlY2VpdmVBdHRhY2sgZnVuY3Rpb25cbiAgICAgICAgLy8gaWYgb3Bwb25lbnQgYWxsU3VuaygpIGlzIGZhbHNlLCB0aGVuIG9wcG9uZW50IGV4ZWN1dGVzIHlvdXIgcmVjZWl2ZUF0dGFjayBmdW5jdGlvblxuICAgICAgICAvLyBpZiBvcHBvbmVudCBhbGxTdW5rKCkgaXMgdHJ1ZSwgdGhlbiB5b3Ugd2luLlxuICAgICAgICAvLyBUaGUgYWJvdmUgYXBwbGllcyB0byBvcHBvbmVudCBhcyB3ZWxsLlxuICAgICAgICAvLyBpZiB5b3UgYWNjaWRlbnRseSBjaG9vc2UgZ3JpZHMgdGhhdCB3ZXJlIGFscmVhZHkgaGl0IG9yIG1pc3NlZCwgeW91IHdpbGwgYmUgcHJvbXB0ZWQgdG8gdHJ5IGFnYWluXG4gICAgICAgIFxuICAgICAgICAvLyBVSVxuICAgICAgICAvLyBPcHBvbmVudCB3aWxsIG9ubHkgc2VlIHlvdXIgZ3JpZCBhcyBoaXQgbWFwIGFuZCB2aWNlIHZlcnNhLlxuICAgICAgICAvLyBBdCBldmVyeSB0dXJuLCB0aGUgZW50aXJlIERPTSB3aWxsIHJlbmRlciBvd25HcmlkIGFuZCBlbmVteSBoaXRtYXAgYW5kIHZpY2UgdmVyc2EuXG5cbiAgICBcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gXCJjb21wdXRlclwiKSB7XG4gICAgICAgIFxuICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGV4Y2VwdCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgaXMgdXNlZCB3aXRoIHJlY2VpdmVBdHRhY2sgZm9yIGNvb3JkaW5hdGVzXG4gICAgICAgIC8vIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgcnVucyBNYXRoLmZsb29yLCBhbmQgdGVzdCBpdC5cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlLFxuICAgICAgICBib2FyZFxuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBtYXRoLmZsb29yIGZ1bmN0aW9uIHNlcGFyYXRlbHkgYmVsb3cgaGVyZS5cbiAgICBcbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVQbGF5ZXJcbn0iLCJpbXBvcnQgeyBjdXJyZW50VHVybiwgdHVyblN0YXRlIH0gZnJvbSBcIi4vZ2FtZUZsb3dcIjtcblxuaW1wb3J0IHsgdXBkYXRlSGVhZGVyIH0gZnJvbSBcIi4vcmVuZGVyRE9NXCI7XG5cbi8vIEhvdyBkbyB5b3UgcmVuZGVyIHRoZSBib2FyZD9cblxuLy8gc2VsZWN0IHRoZSBwbGF5ZXIgYm9yZGVyIGdyaWRzIGZpcnN0LlxuXG4vLyB0aGVuIGltcG9ydCBhbmQgbG9vcCB0aHJvdWdoIG93bkdyaWQgYW5kIGhpdG1hcFxuXG4vLyB0aGlzIGZ1bmN0aW9uIGhhcyB0byBiZSByZXVzYWJsZSBmb3IgYm90aCBwbGF5ZXIgMSBhbmQgcGxheWVyIDIuXG5cbi8vIGl0IHdpbGwgY2hlY2sgd2hvc2UgdHVybiBhbmQgdHlwZSBvZiBwbGF5ZXIgdGhlIHBsYXllciBpcyBwbGF5aW5nIHdpdGguXG5cbi8vIGlmIHBsYXlpbmcgYWdhaW50cyBhaSBpdCB3aWxsIG9ubHkgZXZlciByZW5kZXIgdGhlIGFpIHBsYXllcidzIGhpdG1hcC4gbmV2ZXIgcmVuZGVycyBhaSBwbGF5ZXIncyBvbndHcmlkLlxuXG4vLyBpZiBwbGF5aW5nIGFnYWluc3QgYW5vdGhlciBwbGF5ZXIgYWZ0ZXIgYSBwbGF5ZXIgYXR0YWNrcywgYSBmaXhlZCBibGFjayBkaXYgd2lsbCBjb3ZlciB1cCB0aGUgZW50aXJlIHNjcmVlbiBhbmQgc2hvdyBhIHRleHQgb2Ygd2hldGhlciB0aGUgcGxheWVyIGhpdCBvciBtaXNzLCBhbHNvIHNob3dzIHdob3NlIHR1cm4gaXMgbmV4dCB3aXRoIGEgYnV0dG9uIGxhYmVsbGVkIFwic3RhcnQgdHVyblwiLiB3aXRoIHRoZSBuZXh0IHBsYXllcidzIGdyaWRzIGFuZCBoaXRtYXBzIGFscmVhZHQgcmVuZGVyZWQgYmVoaW5kIHRoZSBibGFjayBkaXYuXG5cbi8vIHNoaXBzIGFyZSBkaXNwbGF5ZWQgaW4gZGFyayBncmV5IGNvbG91clxuXG4vLyBoaXRzIGFyZSBkaXNwbGF5ZWQgaW4gcmVkXG5cbi8vIG1pc3NlcyBhcmUgZGlzcGxheWVkIGluIHdoaXRlXG5cblxuXG5cbi8vIGZpcnN0IHlvdSBtdXN0IGdldCBvd25HcmlkIG9mIHBsYXllciBvbmUgYW5kIGRpc3BsYXkgdGhlIGdyaWRzIGNvcnJlY3RseS5cblxuLy8gVGhlbiB5b3UgbXVzdCBnZXQgcGxheWVyIHR3bydzIGhpdG1hcCBhbmQgZGlzcGxheSB0aGUgZ3JpZHMgY29ycmVjdGx5LlxuXG4vLyBhZnRlciB0aGF0IHlvdSBtdXN0IGNyZWF0ZSBhbm90aGVyIGZ1bnRpb24gdG8gZGlzcGxheSBzaGlwcyBjb3JyZWN0bHkuIC1hZGQgY2xhc3NlcyB0byB0aGUgY29ycmVjdCBncmlkcy5cblxuLy8gVGhlbiB5b3UgY3JlYXRlIGFub3RoZXIgZnVuY3Rpb24gdG8gcmVuZGVyIGhpdG1hcCBjb3JyZWN0bHkuXG5cbi8vIEhpdG1hcCB3aWxsIGJlIGRpc3BsYXllZCBvbiBwbGF5ZXIgb25lIGdyaWQgYW5kIHBsYXllciB0d28gZ3JpZC5cblxuLy8gQWRkIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgZ3JpZHMuIChET05FKVxuXG5cbi8vIGFkZCBjb29yZGluYXRlcyBhcyBhbiBvYmplY3QgXCJjb25zdCBjb29yZHMgPSB7eDowLHk6MH1cIiBpbnNpZGUgYWRkZXZlbnRsaXN0ZW5lciBjYWxsYmFjayBmdW5jdGlvbj8gdXNlIGNvbHVtbkluZGV4IGFubmQgcm93SW5kZXg/IChET05FKVxuXG5cblxuLy8gcmVmYWN0b3IgaWYgbmVjZXNzYXJ5XG5mdW5jdGlvbiBwb3B1bGF0ZVBsYXllcjFCb2FyZCAocGxheWVyMSwgcGxheWVyMVR5cGUpe1xuICAgIGNvbnN0IHBsYXllcjFHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjEtZ3JpZCcpO1xuXG5cbiAgICBcbiAgICBmdW5jdGlvbiBkaXNwbGF5R3JpZHMoKSB7XG4gICAgICAgIGNyZWF0ZUdyaWRzKHBsYXllcjEsIHBsYXllcjFHcmlkLCBcInBsYXllcjFcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlR3JpZHMoKSB7XG4gICAgICAgIHdoaWxlIChwbGF5ZXIxR3JpZC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBwbGF5ZXIxR3JpZC5maXJzdENoaWxkLnJlbW92ZSgpXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHNob3dTaGlwcygpIHtcbiAgICAgICAgZGlzcGxheVNoaXBzKG51bGwscGxheWVyMSwgcGxheWVyMUdyaWQpO1xuICAgIH1cbiAgICBcblxuXG5cbiAgICBmdW5jdGlvbiBzaG93SGl0TWFwKCkge1xuICAgICAgICBkaXNwbGF5SGl0TWFwKHBsYXllcjEsIHBsYXllcjFHcmlkKTtcbiAgICB9XG5cbiAgIFxuXG4gICBcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheUdyaWRzLFxuICAgICAgICBkZWxldGVHcmlkcyxcbiAgICAgICAgc2hvd1NoaXBzLFxuICAgICAgICBzaG93SGl0TWFwLFxuICAgICAgICBwbGF5ZXIxXG4gICAgfVxuXG59XG5cbi8vIE1lcmdlIGl0IGludG8gb25lIGZ1bmN0aW9uIC0gYWJvdmVcbmZ1bmN0aW9uIHBvcHVsYXRlUGxheWVyMkJvYXJkIChwbGF5ZXIyLCBwbGF5ZXIyVHlwZSkge1xuXG4gICAgY29uc3QgcGxheWVyMkdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMi1ncmlkJyk7XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5R3JpZHMgKCkge1xuICAgICAgICBjcmVhdGVHcmlkcyhwbGF5ZXIyLCBwbGF5ZXIyR3JpZCwgXCJwbGF5ZXIyXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUdyaWRzKCkge1xuICAgICAgICB3aGlsZSAocGxheWVyMkdyaWQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgcGxheWVyMkdyaWQuZmlyc3RDaGlsZC5yZW1vdmUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1NoaXBzICgpIHtcbiAgICAgICAgZGlzcGxheVNoaXBzKG51bGwscGxheWVyMiwgcGxheWVyMkdyaWQpO1xuICAgIH1cbiAgICBcblxuICAgIGZ1bmN0aW9uIHNob3dIaXRNYXAgKCkge1xuICAgICAgICBkaXNwbGF5SGl0TWFwKHBsYXllcjIsIHBsYXllcjJHcmlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXNwbGF5R3JpZHMsXG4gICAgICAgIGRlbGV0ZUdyaWRzLFxuICAgICAgICBzaG93U2hpcHMsXG4gICAgICAgIHNob3dIaXRNYXAsXG4gICAgICAgIHBsYXllcjJcbiAgICB9XG4gICAgXG4gICAgXG59XG5cblxuXG5mdW5jdGlvbiBjcmVhdGVHcmlkcyAocGxheWVyLCBwbGF5ZXJET01HcmlkLCBpc1BsYXllcikge1xuICAgIC8vIHB1dCB0aGUgZ3JpZCBtYWtpbmcgbG9vcCBiZWxvdyBpbnNpZGUgaGVyZVxuXG4gICAgZm9yIChsZXQgY29sdW1uSW5kZXggPSAwOyBjb2x1bW5JbmRleCA8IHBsYXllci5ib2FyZC5vd25HcmlkLmxlbmd0aDsgY29sdW1uSW5kZXgrKykge1xuICAgICAgICBjb25zdCBjb2x1bW4gPSBwbGF5ZXIuYm9hcmQub3duR3JpZFtjb2x1bW5JbmRleF07XG5cblxuICAgICAgICBjb25zdCBncmlkQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdyaWRDb2x1bW4uY2xhc3NMaXN0LmFkZChcImdyaWQtY29sdW1uXCIpO1xuICAgICAgICAvLyBncmlkQ29sdW1uLnRleHRDb250ZW50ID0gY29sdW1uSW5kZXhcbiAgICAgICAgcGxheWVyRE9NR3JpZC5hcHBlbmQoZ3JpZENvbHVtbilcbiAgICAgICAgXG5cblxuICAgICAgICBmb3IgKGxldCByb3dJbmRleCA9IDk7IHJvd0luZGV4ID49IDA7IHJvd0luZGV4LS0pIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IGVsZW1lbnQgPSBjb2x1bW5bcm93SW5kZXhdO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJURVNUXCIpXG4gICAgICAgICAgICBjb25zdCBncmlkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBncmlkUm93LmNsYXNzTGlzdC5hZGQoXCJncmlkLXJvd1wiKTtcbiAgICAgICAgICAgIC8vIGdyaWRSb3cudGV4dENvbnRlbnQgPSByb3dJbmRleDtcbiAgICAgICAgICAgIGdyaWRDb2x1bW4uYXBwZW5kKGdyaWRSb3cpO1xuXG4gICAgICAgICAgIGNsaWNrQm9hcmQocGxheWVyLCBncmlkUm93LCBjb2x1bW5JbmRleCwgcm93SW5kZXgsIGlzUGxheWVyKVxuICAgICAgICB9XG5cbiAgICAgICBcbiAgICAgICAgXG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBkaXNwbGF5U2hpcHModG9EaXNwbGF5LCBwbGF5ZXIsIHBsYXllckRPTUdyaWQpIHtcbiAgICAgICAgLy8gaWYgcGxheWVyIDIgdHVybiBkb24ndCBkaXNwbGF5IHNoaXBzXG5cbiAgICAgICAgLy8gcmVtb3ZlIGxhdGVyXG4gICAgICAgIHRvRGlzcGxheSA9IHRydWVcblxuICAgICAgICBpZiAodG9EaXNwbGF5KSB7XG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggYWxsIG93bkdyaWQgZ3JpZHMgYXJyYXkgYW5kIGlmIG5vdCBlbXB0eSwgYXNzaWduIGEgZ3JleSBjbGFzcyB0byB0aGF0IGdyaWQuIFxuXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJDb2x1bW5zID0gcGxheWVyRE9NR3JpZC5jaGlsZE5vZGVzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBwbGF5ZXIuYm9hcmQub3duR3JpZC5sZW5ndGg7IGNvbEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dzID0gcGxheWVyLmJvYXJkLm93bkdyaWRbY29sSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgLy8gQm9hcmQgcmVuZGVycyB1cHNpZGUgZG93biBpZiBJIGRvbid0IHVzZSBcIm5vZGVSb3dJdGVyYXRvclwiLlxuICAgICAgICAgICAgICAgIGxldCBub2Rlc1Jvd0l0ZXJhdG9yID0gMFxuXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93Tm9kZXMgPSBwbGF5ZXJDb2x1bW5zW2NvbEluZGV4XS5jaGlsZE5vZGVzO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocm93Tm9kZXMpXG5cbiAgICAgICAgICAgICAgICAvLyBjb25zdCByZXZlcnNlZFJvd05vZGUgPSByb3dOb2Rlcy5yZXZlcnNlKCk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCByb3dJbmRleCA9IDk7IHJvd0luZGV4ID49IDA7IHJvd0luZGV4LS0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gcm93c1tyb3dJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRydWUpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd05vZGVzW25vZGVzUm93SXRlcmF0b3JdLmNsYXNzTGlzdC5hZGQoJ3NoaXAtbG9jYXRlZCcpXG5cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBub2Rlc1Jvd0l0ZXJhdG9yKytcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxufVxuXG5cblxuXG5mdW5jdGlvbiBkaXNwbGF5SGl0TWFwKHBsYXllcixwbGF5ZXJET01HcmlkKSB7XG5cbiAgICAvLyBwbGF5ZXIuYm9hcmQuaGl0TWFwXG5cbiAgICAvLyBkaXNwbGF5IGhpdG1hcCBhZnRlciBkaXNwbGF5IHNoaXAgcnVucywgVGhpcyBzaG91bGQgb3ZlcnJpZGUgdGhlIGNsYXNzZXMgb2YgZGlzcGxheVNoaXBzXG5cbiAgICBsZXQgdG9EaXNwbGF5ID0gdHJ1ZVxuXG4gICAgaWYgKHRvRGlzcGxheSkge1xuICAgICAgICAvLyBsb29wIHRocm91Z2ggYWxsIG93bkdyaWQgZ3JpZHMgYXJyYXkgYW5kIGlmIG5vdCBlbXB0eSwgYXNzaWduIGEgZ3JleSBjbGFzcyB0byB0aGF0IGdyaWQuIFxuXG4gICAgICAgIGNvbnN0IHBsYXllckNvbHVtbnMgPSBwbGF5ZXJET01HcmlkLmNoaWxkTm9kZXNcblxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBsYXllci5ib2FyZC5oaXRNYXApXG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgcGxheWVyLmJvYXJkLmhpdE1hcC5sZW5ndGg7IGNvbEluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBwbGF5ZXIuYm9hcmQuaGl0TWFwW2NvbEluZGV4XTtcblxuICAgICAgICAgICAgLy8gQm9hcmQgcmVuZGVycyB1cHNpZGUgZG93biBpZiBJIGRvbid0IHVzZSBcIm5vZGVSb3dJdGVyYXRvclwiLlxuICAgICAgICAgICAgbGV0IG5vZGVzUm93SXRlcmF0b3IgPSAwXG5cbiAgICAgICAgICAgIGNvbnN0IHJvd05vZGVzID0gcGxheWVyQ29sdW1uc1tjb2xJbmRleF0uY2hpbGROb2RlcztcblxuXG4gICAgICAgICAgICBmb3IgKGxldCByb3dJbmRleCA9IDk7IHJvd0luZGV4ID49IDA7IHJvd0luZGV4LS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSByb3dzW3Jvd0luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAocm93ID09PSBcIkhpdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRydWUpXG5cbiAgICAgICAgICAgICAgICAgICAgcm93Tm9kZXNbbm9kZXNSb3dJdGVyYXRvcl0uY2xhc3NMaXN0LmFkZCgnc2hpcC1pcy1oaXQnKVxuXG5cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGlmIChyb3cgPT09IFwiTWlzc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRydWUpXG5cbiAgICAgICAgICAgICAgICAgICAgcm93Tm9kZXNbbm9kZXNSb3dJdGVyYXRvcl0uY2xhc3NMaXN0LmFkZCgnYXR0YWNrLW1pc3NlZCcpXG5cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBub2Rlc1Jvd0l0ZXJhdG9yKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBjbGlja0JvYXJkIChwbGF5ZXIsIGdyaWQsIGNvbHVtbkluZGV4LCByb3dJbmRleCwgaXNQbGF5ZXIpIHtcbiAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXJUdXJuID0gdHVyblN0YXRlLmdldFR1cm4oKTtcblxuICAgICAgICBjb25zdCBnYW1lSXNPdmVyID0gdHVyblN0YXRlLmlzR2FtZU92ZXIoKTtcblxuICAgICAgICBpZiAoZ2FtZUlzT3Zlcikge1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkdhbWUgaXMgb3ZlclwiKVxuXG4gICAgICAgICAgICAvLyB1cGRhdGVIZWFkZXIoXCJHYW1lIGlzIG92ZXJcIik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRQbGF5ZXJUdXJuKVxuXG4gICAgICAgIHVwZGF0ZUhlYWRlcihgSXQgaXMgJHtjdXJyZW50UGxheWVyVHVybn0ncyB0dXJuLmApXG4gICAgICAgIGlmIChpc1BsYXllciA9PT0gY3VycmVudFBsYXllclR1cm4pIHtcbiAgICAgICAgICAgIC8vIHR1cm5TdGF0ZS51cGRhdGVUdXJuKClcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTm90IHlvdXIgb3duIGJvYXJkIVwiKVxuXG4gICAgICAgICAgICB1cGRhdGVIZWFkZXIoXCJOb3QgeW91ciBvd24gYm9hcmQhXCIpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IHggPSBjb2x1bW5JbmRleFxuICAgICAgICBjb25zdCB5ID0gcm93SW5kZXg7XG4gICAgICAgIGNvbnNvbGUubG9nKHgseSk7XG5cbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyLmJvYXJkLmhpdE1hcFt4XVt5XSlcblxuICAgICAgICBpZiAocGxheWVyLmJvYXJkLmhpdE1hcFt4XVt5XSA9PT0gXCJNaXNzXCIgfHwgcGxheWVyLmJvYXJkLmhpdE1hcFt4XVt5XSA9PT0gXCJIaXRcIikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJHcmlkIGFscmVhZHkgY2hvc2VuXCIpXG5cbiAgICAgICAgICAgIHVwZGF0ZUhlYWRlcihcIkdyaWQgYWxyZWFkeSBjaG9zZW5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKHgseSk7XG5cbiAgICAgICAgdXBkYXRlSGVhZGVyKGAke2N1cnJlbnRQbGF5ZXJUdXJufSBjaG9zZSB4OiAke3h9IGFuZCB5OiAke3l9IGFuZCBpdCdzIGEgJHtyZXN1bHQudG9Mb3dlckNhc2UoKX1gKTtcblxuICAgICAgICB0dXJuU3RhdGUudXBkYXRlVHVybigpO1xuXG4gICAgICAgIGlmIChwbGF5ZXIuYm9hcmQub3duR3JpZFt4XVt5XSkge1xuICBcbiAgICAgICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnc2hpcC1pcy1oaXQnKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocGxheWVyLmJvYXJkLm93bkdyaWRbeF1beV0uZ2V0SGl0cygpKVxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgYWxsU3VuaygpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnYXR0YWNrLW1pc3NlZCcpO1xuXG4gICAgICAgIFxuICAgIH0pXG59XG5cbmV4cG9ydHtcbiAgICBwb3B1bGF0ZVBsYXllcjFCb2FyZCxcbiAgICBwb3B1bGF0ZVBsYXllcjJCb2FyZFxufSIsIlxuZnVuY3Rpb24gY3JlYXRlRE9NICgpIHtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lcicpO1xuICAgIGJvZHkuYXBwZW5kKG1haW5Db250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWRpdicpO1xuICAgICAgICBoZWFkZXJEaXYudGV4dENvbnRlbnQgPSAnUGxheWVyIDEgZ29lcyBmaXJzdCdcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoaGVhZGVyRGl2KTtcblxuICAgICAgICBjb25zdCBwbGF5ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcGxheWVyRGl2LmNsYXNzTGlzdC5hZGQoJ3BsYXllci1kaXYnKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmQocGxheWVyRGl2KTtcblxuICAgICAgICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9vdGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1kaXYnKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoZm9vdGVyRGl2KTtcblxuXG5cbiAgICBcblxuXG5cblxuXG4gICAgY29uc3QgcGxheWVyMURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYXllcjFEaXYuY2xhc3NMaXN0LmFkZCgncGxheWVyMS1kaXYnKTtcbiAgICBwbGF5ZXJEaXYuYXBwZW5kKHBsYXllcjFEaXYpO1xuICAgIC8vIHBsYXllcjFEaXYudGV4dENvbnRlbnQgPSBcIlBsYXllciAxXCI7XG5cbiAgICAgICAgY29uc3QgcGxheWVyMUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcGxheWVyMUdyaWQuY2xhc3NMaXN0LmFkZCgncGxheWVyMS1ncmlkJyk7XG4gICAgICAgIHBsYXllcjFEaXYuYXBwZW5kKHBsYXllcjFHcmlkKTtcblxuICAgICAgICBjb25zdCBwbGF5ZXIxTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcGxheWVyMUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3BsYXllcjEtbGFiZWwnKTtcbiAgICAgICAgcGxheWVyMUxhYmVsLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgMVwiXG4gICAgICAgIHBsYXllcjFEaXYuYXBwZW5kKHBsYXllcjFMYWJlbClcblxuICAgIGNvbnN0IHBsYXllcjJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5ZXIyRGl2LmNsYXNzTGlzdC5hZGQoJ3BsYXllcjItZGl2Jyk7XG4gICAgcGxheWVyRGl2LmFwcGVuZChwbGF5ZXIyRGl2KVxuICAgIC8vIHBsYXllcjJEaXYudGV4dENvbnRlbnQgPSBcIlBsYXllciAyXCI7XG5cbiAgICAgICAgY29uc3QgcGxheWVyMkdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcGxheWVyMkdyaWQuY2xhc3NMaXN0LmFkZCgncGxheWVyMi1ncmlkJyk7XG4gICAgICAgIHBsYXllcjJEaXYuYXBwZW5kKHBsYXllcjJHcmlkKTtcblxuICAgICAgICBjb25zdCBwbGF5ZXIyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcGxheWVyMkxhYmVsLmNsYXNzTGlzdC5hZGQoJ3BsYXllcjItbGFiZWwnKTtcbiAgICAgICAgcGxheWVyMkxhYmVsLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgMlwiXG4gICAgICAgIHBsYXllcjJEaXYuYXBwZW5kKHBsYXllcjJMYWJlbClcblxuXG4gICAgLy8gQ3JlYXRlIGJvYXJkIGRpdiwgbWFrZSBzdXJlIHRoZXJlIGlzIG1pbmltdW0gc2l6ZSBmb3IgaGVpZ2h0IGFuZCB3aWR0aFxufVxuXG5cbmZ1bmN0aW9uIHVwZGF0ZUhlYWRlciAoc3RhdHVzTWVzc2FnZSkge1xuICAgIGNvbnN0IHN0YXR1c0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWRpdicpO1xuXG4gICAgc3RhdHVzRGlzcGxheS50ZXh0Q29udGVudCA9IHN0YXR1c01lc3NhZ2Vcbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVET00sXG4gICAgdXBkYXRlSGVhZGVyXG59XG5cbiIsIiBmdW5jdGlvbiBjcmVhdGVTaGlwIChsZW5ndGgpe1xuICAgIGxldCB0b3RhbEhpdHMgPSAwO1xuICAgIGxldCBzdW5rID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZXRMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBsZW5ndGhcbiAgICB9XG5cbiAgICBjb25zdCBnZXRIaXRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdG90YWxIaXRzXG4gICAgfVxuXG4gICAgY29uc3QgaXNTdW5rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodG90YWxIaXRzID49IGxlbmd0aCkge1xuICAgICAgICAgICAgc3VuayA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vua1xuICAgIH1cblxuXG4gICAgY29uc3QgaGl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0b3RhbEhpdHMrK1xuICAgIH1cblxuICAgIHJldHVybntcbiAgICAgICAgZ2V0TGVuZ3RoLFxuICAgICAgICBnZXRIaXRzLFxuICAgICAgICBpc1N1bmssXG4gICAgICAgIGhpdFxuICAgIH1cbiB9XG5cblxuIGV4cG9ydHtcbiAgICBjcmVhdGVTaGlwXG4gfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9hc3NldHMvc3R5bGUuY3NzJztcblxuaW1wb3J0IHsgY3JlYXRlUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyRmFjdG9yeVwiO1xuLy8gaW1wb3J0IHsgbW9kdWxlIH0gZnJvbSAnLi9tb2R1bGUnO1xuXG5cbi8vIFRoaXMgaXMganVzdCBhIENSVUQuIEl0IHNob3VsZCBiZSBlYXN5LiBCdXQgbWFrZSBzdXJlIHRvIGZvbGxvdyB0aGUgaW5zdHJ1Y3Rpb25zLlxuXG4vLyBtb2R1bGUoKVxuXG5cbmltcG9ydCB7IGNyZWF0ZURPTSB9IGZyb20gXCIuL3JlbmRlckRPTVwiO1xuXG5pbXBvcnQgeyBnYW1lRmxvdyB9IGZyb20gJy4vZ2FtZUZsb3cnO1xuXG4vLyBpbXBvcnQgeyBwb3B1bGF0ZUJvYXJkIH0gZnJvbSAnLi9yZW5kZXJCb2FyZCc7XG5cbmNyZWF0ZURPTSgpO1xuZ2FtZUZsb3coKTtcblxuXG4vLyByZW1vdmUgdGhpcyBsYXRlclxuLy8gY29uc3QgdGVzdFBsYXllciA9IGNyZWF0ZVBsYXllcihcInJlYWxcIik7XG4vLyBwb3B1bGF0ZUJvYXJkKHRlc3RQbGF5ZXIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9