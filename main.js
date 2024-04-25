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

        if (player1Loses || player2Loses) {
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

            (0,_renderDOM__WEBPACK_IMPORTED_MODULE_1__.updateHeader)("Game is over");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSSx3REFBWSxzQkFBc0IsR0FBRyxTQUFTLEdBQUcsYUFBYSxxQkFBcUI7QUFDdkY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVNQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7O0FBR0EsU0FBUzs7O0FBR1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSw0QkFBNEIsNEJBQTRCO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FB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LFlBQVksU0FBUzs7O0FBR3JCOztBQUVBOzs7QUFHd0M7O0FBRUY7O0FBRXRDLFlBQVksZ0JBQWdCOztBQUU1QixxREFBUztBQUNULG1EQUFROzs7QUFHUjtBQUNBO0FBQ0EsNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcz82MDFkIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lRmxvdy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVuZGVyQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZW5kZXJET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuIG1hcmdpbjogMDtcbiBwYWRkaW5nOiAwO1xuIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLm1haW4tY29udGFpbmVyIHtcblxuICAgIC8qIEhhdmUgYSBtaW5pbXVtIGhlaWdodCBhbmQgd2lkdGggZm9yIC5wbGF5ZXItZGl2ICovXG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnIgNTBweDtcbn1cblxuLmhlYWRlci1kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuXG4gICAgcGFkZGluZzogMzBweDtcbn1cblxuXG5cblxuLnBsYXllci1kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBwaW5rO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHllbGxvdzsgKi9cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzgwcHgsIDFmcikpXG5cbn1cblxuLmZvb3Rlci1kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcbn1cblxuXG4ucGxheWVyMS1kaXYsXG4ucGxheWVyMi1kaXZ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBnYXA6IDE1cHg7XG59XG5cblxuLnBsYXllcjEtZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmVlbjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgICAvKiBjb2xvcjogd2hpdGU7ICovXG59XG5cbi5wbGF5ZXIyLWRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z29sZGVucm9keWVsbG93O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cbn1cblxuXG4ucGxheWVyMS1ncmlkLFxuLnBsYXllcjItZ3JpZHtcblxuICAgIC0taGVpZ2h0LWFuZC13aWR0aDogbWF4KDM1MHB4LCAzMHZ3KTtcbiAgICAtLWJvcmRlci1zaXplOiAycHggc29saWQgZ3JlZW55ZWxsb3c7XG5cbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci1zaXplKTtcbiAgICB3aWR0aDogdmFyKC0taGVpZ2h0LWFuZC13aWR0aCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQtYW5kLXdpZHRoKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxufVxuXG5cbi5wbGF5ZXIxLWxhYmVsLFxuLnBsYXllcjItbGFiZWx7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYW5jaGVkYWxtb25kO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xufVxuXG5cbi5ncmlkLWNvbHVtbntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHR1cnF1b2lzZTsgKi9cbn1cblxuLmdyaWQtcm93e1xuXG4gICAgYm9yZGVyOiAycHggc29saWQgdHVycXVvaXNlO1xuICAgIFxufVxuLmdyaWQtcm93OmhvdmVye1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuMTU2KTsgKi9cbiAgICBib3JkZXI6IDNweCBzb2xpZCB5ZWxsb3c7XG59XG5cbi5jbGlja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5zaGlwLWxvY2F0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtvcmNoaWQ7XG59XG5cblxuLnNoaXAtaXMtaGl0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XG59XG5cbi5hdHRhY2stbWlzc2Vke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc3MHB4KXtcbiAgICAvKiBjaGFuZ2UgcGxheWVyIGZvbnQgcG9zaXRpb24gKi9cblxuICAgIC5wbGF5ZXIxLWdyaWQsXG4gICAgLnBsYXllcjItZ3JpZHtcbiAgICAgICAgLyogYm9yZGVyOiAycHggc29saWQgZ3JlZW55ZWxsb3c7ICovXG4gICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcblxuICAgIH1cbiAgICAucGxheWVyMS1kaXZ7XG4gICAgICAgIG9yZGVyOiAyO1xuICAgIH1cbiAgICAucGxheWVyMi1kaXZ7XG4gICAgICAgIG9yZGVyOiAxO1xuICAgIH1cblxuICAgIC5wbGF5ZXIyLWdyaWR7XG4gICAgICAgIG9yZGVyOiAyO1xuICAgIH1cblxuICAgIC5wbGF5ZXIyLWxhYmVse1xuICAgICAgICBvcmRlcjogMTtcbiAgICB9XG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsU0FBUztDQUNULFVBQVU7Q0FDVixzQkFBc0I7QUFDdkI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksb0RBQW9EOztJQUVwRCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlOztJQUVmLGFBQWE7QUFDakI7Ozs7O0FBS0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiOztBQUVKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7OztBQUdBOztJQUVJLGFBQWE7SUFDYixTQUFTO0FBQ2I7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEI7OztBQUdBOzs7SUFHSSxvQ0FBb0M7SUFDcEMsb0NBQW9DOztJQUVwQywwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLFlBQVk7O0FBRWhCOzs7QUFHQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsaUNBQWlDO0FBQ3JDOztBQUVBOztJQUVJLDJCQUEyQjs7QUFFL0I7QUFDQTtJQUNJLGdEQUFnRDtJQUNoRCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7OztBQUdBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQ0FBZ0M7O0lBRWhDOztRQUVJLG1DQUFtQztRQUNuQyxZQUFZO1FBQ1osYUFBYTs7SUFFakI7SUFDQTtRQUNJLFFBQVE7SUFDWjtJQUNBO1FBQ0ksUUFBUTtJQUNaOztJQUVBO1FBQ0ksUUFBUTtJQUNaOztJQUVBO1FBQ0ksUUFBUTtJQUNaOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuIG1hcmdpbjogMDtcXG4gcGFkZGluZzogMDtcXG4gYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG5cXG4gICAgLyogSGF2ZSBhIG1pbmltdW0gaGVpZ2h0IGFuZCB3aWR0aCBmb3IgLnBsYXllci1kaXYgKi9cXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciA1MHB4O1xcbn1cXG5cXG4uaGVhZGVyLWRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcblxcblxcblxcbi5wbGF5ZXItZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcGluaztcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogeWVsbG93OyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM4MHB4LCAxZnIpKVxcblxcbn1cXG5cXG4uZm9vdGVyLWRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG5cXG4ucGxheWVyMS1kaXYsXFxuLnBsYXllcjItZGl2e1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcblxcbi5wbGF5ZXIxLWRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JlZW47XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgICAvKiBjb2xvcjogd2hpdGU7ICovXFxufVxcblxcbi5wbGF5ZXIyLWRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z29sZGVucm9keWVsbG93O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xcbn1cXG5cXG5cXG4ucGxheWVyMS1ncmlkLFxcbi5wbGF5ZXIyLWdyaWR7XFxuXFxuICAgIC0taGVpZ2h0LWFuZC13aWR0aDogbWF4KDM1MHB4LCAzMHZ3KTtcXG4gICAgLS1ib3JkZXItc2l6ZTogMnB4IHNvbGlkIGdyZWVueWVsbG93O1xcblxcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci1zaXplKTtcXG4gICAgd2lkdGg6IHZhcigtLWhlaWdodC1hbmQtd2lkdGgpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodC1hbmQtd2lkdGgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG5cXG5cXG4ucGxheWVyMS1sYWJlbCxcXG4ucGxheWVyMi1sYWJlbHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhbmNoZWRhbG1vbmQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cXG59XFxuXFxuXFxuLmdyaWQtY29sdW1ue1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgdHVycXVvaXNlOyAqL1xcbn1cXG5cXG4uZ3JpZC1yb3d7XFxuXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHR1cnF1b2lzZTtcXG4gICAgXFxufVxcbi5ncmlkLXJvdzpob3ZlcntcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgMC4xNTYpOyAqL1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB5ZWxsb3c7XFxufVxcblxcbi5jbGlja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uc2hpcC1sb2NhdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya29yY2hpZDtcXG59XFxuXFxuXFxuLnNoaXAtaXMtaGl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcbn1cXG5cXG4uYXR0YWNrLW1pc3NlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NzBweCl7XFxuICAgIC8qIGNoYW5nZSBwbGF5ZXIgZm9udCBwb3NpdGlvbiAqL1xcblxcbiAgICAucGxheWVyMS1ncmlkLFxcbiAgICAucGxheWVyMi1ncmlke1xcbiAgICAgICAgLyogYm9yZGVyOiAycHggc29saWQgZ3JlZW55ZWxsb3c7ICovXFxuICAgICAgICB3aWR0aDogMzUwcHg7XFxuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xcblxcbiAgICB9XFxuICAgIC5wbGF5ZXIxLWRpdntcXG4gICAgICAgIG9yZGVyOiAyO1xcbiAgICB9XFxuICAgIC5wbGF5ZXIyLWRpdntcXG4gICAgICAgIG9yZGVyOiAxO1xcbiAgICB9XFxuXFxuICAgIC5wbGF5ZXIyLWdyaWR7XFxuICAgICAgICBvcmRlcjogMjtcXG4gICAgfVxcblxcbiAgICAucGxheWVyMi1sYWJlbHtcXG4gICAgICAgIG9yZGVyOiAxO1xcbiAgICB9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyRmFjdG9yeVwiO1xuaW1wb3J0IHsgY3JlYXRlU2hpcCB9IGZyb20gXCIuL3NoaXBGYWN0b3J5XCI7XG5pbXBvcnQgeyBwb3B1bGF0ZVBsYXllcjFCb2FyZCwgcG9wdWxhdGVQbGF5ZXIyQm9hcmQgfSBmcm9tIFwiLi9yZW5kZXJCb2FyZFwiO1xuaW1wb3J0IHsgdXBkYXRlSGVhZGVyIH0gZnJvbSBcIi4vcmVuZGVyRE9NXCI7XG5cbi8vIFRoZXNlIHBsYXllckJvYXJkcyBhcmUgc2lkZSBlZmZlY3RzIChleHRlcm5hbCBzdGF0ZSkgLyAoZGVwZW5kZW5jaWVzKS5cbmxldCBwbGF5ZXIxQm9hcmQ7IFxubGV0IHBsYXllcjJCb2FyZDtcblxuXG5mdW5jdGlvbiBnYW1lRmxvdyAoKSB7XG5cbiAgICBjb25zdCBwbGF5ZXIxID0gY3JlYXRlUGxheWVyKFwicmVhbFwiKTtcbiAgICBjb25zdCBwbGF5ZXIyID0gY3JlYXRlUGxheWVyKFwiY29tcHV0ZXJcIik7IFxuXG4gICAgLy8gcGxhY2UgcGxheWVyMSBzaGlwc1xuICAgIC8vIFR5cGVzIG9mIHNoaXBcbiAgICAvLyAtIENhcnJpZXIsIHNpemUgNVxuICAgIC8vIC0gQmF0dGxlc2hpcCwgc2l6ZSA0XG4gICAgLy8gLSBEZXN0cm95ZXIsIHNpemUgM1xuICAgIC8vIC0gU3VibWFyaW5lLCBzaXplIDNcbiAgICAvLyAtIFBhdHJvbCBCb2F0LCBzaXplIDJcblxuICAgIGNvbnN0IHBsYXllcjFDYXJyaWVyID0gY3JlYXRlU2hpcCg1KTtcbiAgICBjb25zdCBwbGF5ZXIxQmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoNCk7XG4gICAgY29uc3QgcGxheWVyMURlc3Ryb3llciA9IGNyZWF0ZVNoaXAoMyk7XG4gICAgY29uc3QgcGxheWVyMVN1Ym1hcmluZSA9IGNyZWF0ZVNoaXAoMyk7XG4gICAgY29uc3QgcGxheWVyMVBhdHJvbEJvYXQgPSBjcmVhdGVTaGlwKDIpXG5cblxuICAgIGNvbnN0IHBsYXllcjJDYXJyaWVyID0gY3JlYXRlU2hpcCg1KTtcbiAgICBjb25zdCBwbGF5ZXIyQmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoNCk7XG4gICAgY29uc3QgcGxheWVyMkRlc3Ryb3llciA9IGNyZWF0ZVNoaXAoMyk7XG4gICAgY29uc3QgcGxheWVyMlN1Ym1hcmluZSA9IGNyZWF0ZVNoaXAoMyk7XG4gICAgY29uc3QgcGxheWVyMlBhdHJvbEJvYXQgPSBjcmVhdGVTaGlwKDIpXG5cbiAgICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcCh7eDo5LHk6OX0sIFwibm9ydGhcIiwgcGxheWVyMUNhcnJpZXIpO1xuICAgIHBsYXllcjEuYm9hcmQucGxhY2VTaGlwKHt4OjAseTowfSwgXCJlYXN0XCIsIHBsYXllcjFCYXR0bGVzaGlwKTtcbiAgICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcCh7eDo1LHk6NX0sIFwiZWFzdFwiLCBwbGF5ZXIxRGVzdHJveWVyKTtcbiAgICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcCh7eDoyLHk6Mn0sIFwiZWFzdFwiLCBwbGF5ZXIxU3VibWFyaW5lKTtcbiAgICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcCh7eDo5LHk6MH0sIFwic291dGhcIiwgcGxheWVyMVBhdHJvbEJvYXQpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7XG4gICAgICAgIC8vIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG4gICAgICAgIFxuICAgICAgICBwbGF5ZXIxLmJvYXJkLnJlY2VpdmVBdHRhY2soOSxpbmRleClcbiAgICAgICAgcGxheWVyMS5ib2FyZC5yZWNlaXZlQXR0YWNrKGluZGV4LGluZGV4KVxuICAgIH1cblxuXG4gICAgcGxheWVyMi5ib2FyZC5wbGFjZVNoaXAoe3g6OCx5Ojh9LCBcIndlc3RcIiwgcGxheWVyMkNhcnJpZXIpO1xuICAgIHBsYXllcjIuYm9hcmQucGxhY2VTaGlwKHt4OjAseTowfSwgXCJlYXN0XCIsIHBsYXllcjJCYXR0bGVzaGlwKTtcbiAgICBwbGF5ZXIyLmJvYXJkLnBsYWNlU2hpcCh7eDo1LHk6NX0sIFwiZWFzdFwiLCBwbGF5ZXIyRGVzdHJveWVyKTtcbiAgICBwbGF5ZXIyLmJvYXJkLnBsYWNlU2hpcCh7eDoyLHk6Mn0sIFwiZWFzdFwiLCBwbGF5ZXIyU3VibWFyaW5lKTtcbiAgICBwbGF5ZXIyLmJvYXJkLnBsYWNlU2hpcCh7eDo5LHk6NX0sIFwic291dGhcIiwgcGxheWVyMlBhdHJvbEJvYXQpO1xuXG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTA7IGluZGV4KyspIHtcbiAgICAgICAgLy8gY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcbiAgICAgICAgXG4gICAgICAgIC8vIHBsYXllcjIuYm9hcmQucmVjZWl2ZUF0dGFjayg5LGluZGV4KVxuICAgICAgICBwbGF5ZXIyLmJvYXJkLnJlY2VpdmVBdHRhY2soaW5kZXgsaW5kZXgpXG4gICAgfVxuXG5cbiAgICBwbGF5ZXIxQm9hcmQgPSBwb3B1bGF0ZVBsYXllcjFCb2FyZChwbGF5ZXIxLCBwbGF5ZXIxLnR5cGUpO1xuICAgIHBsYXllcjJCb2FyZCA9IHBvcHVsYXRlUGxheWVyMkJvYXJkKHBsYXllcjIsIHBsYXllcjIudHlwZSk7XG5cbiAgIFxuXG4gICAgLy8gY29uc29sZS5sb2cocGxheWVyMS5ib2FyZC5hbGxTdW5rKCkpXG5cbiAgICAvLyB3aGlsZSAoIShwbGF5ZXIxLmJvYXJkLmFsbFN1bmsoKSkgfHwgIShwbGF5ZXIyLmJvYXJkLmFsbFN1bmsoKSkpIHtcbiAgICAvLyAgICAgcGxheWVyMUJvYXJkLnNob3dTaGlwcygpXG4gICAgLy8gfVxuXG4gICAgcGxheWVyMUJvYXJkLmRpc3BsYXlHcmlkcygpXG5cbiAgICBwbGF5ZXIxQm9hcmQuc2hvd1NoaXBzKClcblxuICAgIFxuXG5cbiAgICBwbGF5ZXIyQm9hcmQuZGlzcGxheUdyaWRzKClcblxuICAgIHBsYXllcjJCb2FyZC5zaG93SGl0TWFwKClcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiZ2FtZSBvdmVyXCIpXG5cbiAgICAvLyBjb25zdCB0dXJuU3RhdGUgPSBjdXJyZW50VHVybigpXG5cblxuXG59XG5cbi8vIG1lcmdlIHR1cm5zdGF0ZSBpbnRvIGdhbWVmbG93IG9yIGdhbWVmbG93IGludG8gdHVybnN0YXRlPyBCZWNhdXNlIGNhbm5vdCBzaG93IHNoaXBzIChwbGF5ZXIxQm9hcmQgbXVzdCBiZSBhY2Nlc3NlZCkuXG5cbi8vIGluIHR1cm5TdGF0ZSBjcmVhdGUgYSBmdW5jdGlvbiB0byBjaGVjayBpZiBnYW1lb3ZlciBhbmQgd2hvIHdvbiB1c2luZyBhbGxTdW5rKCkgZnJvbSBlYWNoIGJvYXJkcy4gSXMgY2hlY2tlZCBldmVyeXRpbWUgYSBncmlkIGlzIGNsaWNrZWQuXG5cblxuXG5cbmNvbnN0IHR1cm5TdGF0ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHBsYXllclR1cm4gPSBcInBsYXllcjFcIjtcblxuICAgIFxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVHVybigpIHtcbiAgICAgICAgaWYgKHBsYXllclR1cm4gPT09IFwicGxheWVyMVwiKSB7XG4gICAgICAgICAgICBwbGF5ZXJUdXJuID0gXCJwbGF5ZXIyXCJcblxuICAgICAgICAgICAgcGxheWVyMUJvYXJkLmRlbGV0ZUdyaWRzKCk7XG4gICAgICAgICAgICBwbGF5ZXIxQm9hcmQuZGlzcGxheUdyaWRzKCk7XG4gICAgICAgICAgICBwbGF5ZXIxQm9hcmQuc2hvd0hpdE1hcCgpO1xuXG4gICAgICAgICAgICBwbGF5ZXIyQm9hcmQuZGVsZXRlR3JpZHMoKTtcbiAgICAgICAgICAgIHBsYXllcjJCb2FyZC5kaXNwbGF5R3JpZHMoKTtcbiAgICAgICAgICAgIHBsYXllcjJCb2FyZC5zaG93U2hpcHMoKTtcbiAgICAgICAgICAgIHBsYXllcjJCb2FyZC5zaG93SGl0TWFwKCk7XG5cbiAgICAgICAgICAgIC8vIGJ1aWxkIEFJIGhlcmU/XG4gICAgICAgICAgICBpZiAocGxheWVyMkJvYXJkLnBsYXllcjIudHlwZSA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyQXR0YWNrcyhwbGF5ZXIxQm9hcmQucGxheWVyMSlcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbGF5ZXJUdXJuID09PSBcInBsYXllcjJcIikge1xuICAgICAgICAgICAgcGxheWVyVHVybiA9IFwicGxheWVyMVwiXG5cbiAgICAgICAgICAgIHBsYXllcjJCb2FyZC5kZWxldGVHcmlkcygpO1xuICAgICAgICAgICAgcGxheWVyMkJvYXJkLmRpc3BsYXlHcmlkcygpO1xuICAgICAgICAgICAgcGxheWVyMkJvYXJkLnNob3dIaXRNYXAoKTtcblxuICAgICAgICAgICAgcGxheWVyMUJvYXJkLmRlbGV0ZUdyaWRzKCk7XG4gICAgICAgICAgICBwbGF5ZXIxQm9hcmQuZGlzcGxheUdyaWRzKCk7XG4gICAgICAgICAgICBwbGF5ZXIxQm9hcmQuc2hvd1NoaXBzKCk7XG4gICAgICAgICAgICBwbGF5ZXIxQm9hcmQuc2hvd0hpdE1hcCgpO1xuXG4gICAgICAgICAgICBpZiAocGxheWVyMUJvYXJkLnBsYXllcjEudHlwZSA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyQXR0YWNrcyhwbGF5ZXIyQm9hcmQucGxheWVyMilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUdXJuKCkge1xuICAgICAgICByZXR1cm4gcGxheWVyVHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0dhbWVPdmVyICgpIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHBsYXllcjFMb3NlcyA9IHBsYXllcjFCb2FyZC5wbGF5ZXIxLmJvYXJkLmFsbFN1bmsoKTtcbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyMUxvc2VzKTtcblxuICAgICAgICBjb25zdCBwbGF5ZXIyTG9zZXMgPSBwbGF5ZXIyQm9hcmQucGxheWVyMi5ib2FyZC5hbGxTdW5rKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllcjJMb3Nlcyk7XG5cbiAgICAgICAgaWYgKHBsYXllcjFMb3NlcyB8fCBwbGF5ZXIyTG9zZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIHVwZGF0ZVR1cm4sXG4gICAgICAgIGdldFR1cm4sXG4gICAgICAgIGlzR2FtZU92ZXJcbiAgICB9XG59KSgpXG5cblxubGV0IHRlc3QgPSAwXG5cbmZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrcyAocGxheWVyKSB7XG5cbiAgICBjb25zb2xlLmxvZyhcIkNvbXB1dGVyIGF0dGFja3NcIik7XG5cbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IHBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKHgseSlcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiQ29vcmRzOiBcIit4LHkpXG4gICAgLy8gY29uc29sZS5sb2cocmVzdWx0KVxuICAgIGlmIChyZXN1bHQgPT09IFwiQWxyZWFkeSBIaXRcIiB8fCByZXN1bHQgPT0gXCJBbHJlYWR5IE1pc3NcIikge1xuICAgICAgICAgcmV0dXJuIGNvbXB1dGVyQXR0YWNrcyhwbGF5ZXIpXG4gICAgfVxuXG4gICBcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgaGFzIHN1Y2Nlc3NmdWxseSBhdHRhY2tlZC5cIik7XG5cbiAgICB1cGRhdGVIZWFkZXIoYENvbXB1dGVyIGNob3NlIHg6ICR7eH0gYW5kIHk6ICR7eX0gYW5kIGl0J3MgYSAke3Jlc3VsdC50b0xvd2VyQ2FzZSgpfWApO1xuICAgIHR1cm5TdGF0ZS51cGRhdGVUdXJuKCk7XG5cbiAgIFxuICAgIHRlc3QrK1xuICAgIGNvbnNvbGUubG9nKCdDb21wdXRlciBhdHRhY2tzOicgKyB0ZXN0KVxuICAgIHJldHVybiBcbn1cblxuXG5leHBvcnQge1xuICAgIGdhbWVGbG93LFxuICAgIHR1cm5TdGF0ZVxufSIsImZ1bmN0aW9uIGNyZWF0ZUdhbWVib2FyZCgpe1xuICAgIGNvbnN0IG93bkdyaWQgPSBjcmVhdGVHcmlkKCk7XG4gICAgY29uc3QgaGl0TWFwID0gY3JlYXRlR3JpZCgpO1xuICAgIGNvbnN0IHBsYWNlZFNoaXBzID0gW107XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVHcmlkICgpIHtcblxuICAgICAgICBjb25zdCBuZXdHcmlkID0gW107XG5cbiAgICAgICAgY29uc3QgZ3JpZFNpemUgPSAxMDtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZ3JpZFNpemU7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBbXVxuICAgICAgICAgICAgcm93cy5sZW5ndGggPSAxMDtcblxuICAgICAgICAgICAgbmV3R3JpZFtpbmRleF0gPSByb3dzXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3R3JpZDtcbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwIChjb29yZGluYXRlcywgZGlyZWN0aW9uLCBzaGlwT2JqZWN0KSB7XG5cblxuICAgICAgICBjb25zdCBwb3RlbnRpYWxDb29yZHMgPSBnZXRDb29yZGluYXRlcyhjb29yZGluYXRlcywgZGlyZWN0aW9uLCBzaGlwT2JqZWN0KTtcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVkQ29vcmRzID0gcG90ZW50aWFsQ29vcmRzLnBvdGVudGlhbENvb3JkaW5hdGVzO1xuICAgICAgICBsZXQgcGxhY2VtZW50VmFsaWRpdHkgPSBwb3RlbnRpYWxDb29yZHMudmFsaWRpdHk7XG4gICAgICAgIGxldCBwbGFjZW1lbnRNc2cgPSBcIlBsYWNlbWVudF9zdWNjZXNzXCJcblxuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAvLyAgICBDaGVja3MgaWYgb3ZlcmxhcHBpbmcgc2hpcHMgZXhpc3RcbiAgICAgICAgcGxhY2VtZW50VmFsaWRpdHkgPSBjaGVja1BsYWNlbWVudFZhbGlkaXR5KHBsYWNlbWVudFZhbGlkaXR5LCBnZW5lcmF0ZWRDb29yZHMsIG93bkdyaWQpO1xuICAgIFxuICAgICAgICBcblxuICAgICAgICBpZiAoIXBsYWNlbWVudFZhbGlkaXR5KSB7XG4gICAgICAgICAgICBwbGFjZW1lbnRNc2cgPSBcIlBsYWNlbWVudF9mYWlsZWRcIlxuICAgICAgICAgICAgcmV0dXJuIHBsYWNlbWVudE1zZ1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIGdlbmVyYXRlZENvb3Jkcy5mb3JFYWNoKGNvb3JkcyA9PiB7XG5cbiAgICAgICAgICAgIG93bkdyaWRbY29vcmRzWzBdXVtjb29yZHNbMV1dID0gc2hpcE9iamVjdDtcblxuXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgcGxhY2VkU2hpcHMucHVzaChzaGlwT2JqZWN0KVxuICBcblxuICAgICAgIHJldHVybiBwbGFjZW1lbnRNc2dcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayAoeCwgeSkge1xuXG4gICAgICAgIGlmIChoaXRNYXBbeF1beV0gPT09IFwiTWlzc1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJBbHJlYWR5IE1pc3NcIlxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvd25HcmlkW3hdW3ldKSB7XG4gICAgICAgICAgICBoaXRNYXBbeF1beV0gPSBcIk1pc3NcIlxuICAgICAgICAgICAgcmV0dXJuIFwiTWlzc1wiXG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChoaXRNYXBbeF1beV0gPT09IFwiSGl0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkFscmVhZHkgSGl0XCI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaGlwID0gb3duR3JpZFt4XVt5XTtcbiAgICAgICAgc2hpcC5oaXQoKVxuICAgICAgICBoaXRNYXBbeF1beV0gPSAnSGl0JztcbiAgICAgICAgcmV0dXJuIFwiSGl0XCJcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbGxTdW5rICgpIHtcblxuICAgICAgICBsZXQgZXZlcnlTaGlwU3VuayA9IHRydWU7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBsYWNlZFNoaXBzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IHBsYWNlZFNoaXBzW2luZGV4XTtcblxuICAgICAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgZXZlcnlTaGlwU3VuayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXZlcnlTaGlwU3Vua1xuICAgIH1cbiAgICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIG93bkdyaWQsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgYWxsU3VuayxcbiAgICAgICAgaGl0TWFwXG4gICAgfVxuXG5cblxufVxuXG5cbmZ1bmN0aW9uIGdldENvb3JkaW5hdGVzIChjb29yZGluYXRlcywgZGlyZWN0aW9uLCBzaGlwT2JqZWN0KSB7XG5cbiAgICBsZXQgdmFsaWRpdHkgPSB0cnVlO1xuXG4gICAgY29uc3QgcG90ZW50aWFsQ29vcmRpbmF0ZXMgPSBbXVxuXG4gICAgXG4gICAgaWYgKGNvb3JkaW5hdGVzLnggPCAwIHx8IGNvb3JkaW5hdGVzLnkgPCAwIHx8IGNvb3JkaW5hdGVzLnggPiA5IHx8IGNvb3JkaW5hdGVzLnkgPiA5ICkge1xuICAgICAgICAgICAgXG4gICAgICAgIHZhbGlkaXR5ID0gZmFsc2VcblxuICAgICAgICByZXR1cm4gdmFsaWRpdHlcblxuICAgIH1cblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaGlwT2JqZWN0LmdldExlbmd0aCgpOyBpbmRleCsrKSB7XG5cbiAgICAgICAgXG4gICAgICAgIGxldCB4Y29vcmRzO1xuICAgICAgICBsZXQgeWNvb3JkcztcblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcIm5vcnRoXCIpIHtcbiAgICAgICAgICAgIHhjb29yZHMgPSBjb29yZGluYXRlcy54XG4gICAgICAgICAgICB5Y29vcmRzID0gY29vcmRpbmF0ZXMueSAtIGluZGV4O1xuXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcInNvdXRoXCIpIHtcblxuICAgICAgICAgICAgeGNvb3JkcyA9IGNvb3JkaW5hdGVzLnhcbiAgICAgICAgICAgIHljb29yZHMgPSBjb29yZGluYXRlcy55ICsgaW5kZXg7XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcImVhc3RcIikge1xuXG4gICAgICAgICAgICB4Y29vcmRzID0gY29vcmRpbmF0ZXMueCArIGluZGV4O1xuICAgICAgICAgICAgeWNvb3JkcyA9IGNvb3JkaW5hdGVzLnk7IFxuXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcIndlc3RcIikge1xuICAgICAgICAgICAgeGNvb3JkcyA9IGNvb3JkaW5hdGVzLnggLSBpbmRleDtcbiAgICAgICAgICAgIHljb29yZHMgPSBjb29yZGluYXRlcy55OyBcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHhjb29yZHMgPCAwIHx8IHljb29yZHMgPCAwIHx8IHhjb29yZHMgPiA5IHx8IHljb29yZHMgPiA5ICkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YWxpZGl0eSA9IGZhbHNlXG5cbiAgICAgICAgfVxuXG4gICAgICAgIHBvdGVudGlhbENvb3JkaW5hdGVzLnB1c2goW3hjb29yZHMseWNvb3Jkc10pXG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICBcbiAgICAgICAgdmFsaWRpdHksXG4gICAgICAgIHBvdGVudGlhbENvb3JkaW5hdGVzXG4gICAgfVxufVxuXG5cblxuZnVuY3Rpb24gY2hlY2tQbGFjZW1lbnRWYWxpZGl0eSAocGxhY2VtZW50VmFsaWRpdHksIGdlbmVyYXRlZENvb3Jkcywgb3duR3JpZCkge1xuXG4gICAgaWYgKCFwbGFjZW1lbnRWYWxpZGl0eSkge1xuICAgICAgICByZXR1cm4gcGxhY2VtZW50VmFsaWRpdHlcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZ2VuZXJhdGVkQ29vcmRzLmxlbmd0aDsgaW5kZXgrKykge1xuXG5cbiAgICAgICAgY29uc3QgY29vcmRzID0gZ2VuZXJhdGVkQ29vcmRzW2luZGV4XTtcbiAgIFxuICAgICAgICBjb25zdCBzaGlwID0gb3duR3JpZFtjb29yZHNbMF1dW2Nvb3Jkc1sxXV1cblxuICAgICAgICBpZiAoc2hpcCkge1xuICAgICAgICAgICAgcGxhY2VtZW50VmFsaWRpdHkgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gcGxhY2VtZW50VmFsaWRpdHlcbn1cblxuXG5leHBvcnR7XG4gICAgY3JlYXRlR2FtZWJvYXJkLFxuICAgIGdldENvb3JkaW5hdGVzLFxuICAgIGNoZWNrUGxhY2VtZW50VmFsaWRpdHlcbn0iLCJpbXBvcnQgeyBjcmVhdGVHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRGYWN0b3J5XCJcblxuZnVuY3Rpb24gY3JlYXRlUGxheWVyICh0eXBlLCBlbmVteUhpdG1hcCwgYXR0YWNrRW5lbXkpIHtcbiAgICBjb25zdCBib2FyZCA9IGNyZWF0ZUdhbWVib2FyZCgpO1xuXG4gICAgaWYgKCEodHlwZSA9PT0gXCJyZWFsXCIgfHwgdHlwZSA9PT0gXCJjb21wdXRlclwiKSkge1xuICAgICAgICByZXR1cm4gXCJJbnZhbGlkX2lucHV0XCI7XG4gICAgfVxuICAgIC8vIFBsYXllciBsb2dpYyBhbmQgY29tcHV0ZXIgbG9naWMgaXMgbm90IGNvbXBsZXRlLlxuXG4gICAgaWYgKHR5cGUgPT09IFwicmVhbFwiKSB7XG4gICAgXG4gICAgICAgIC8vIGNyZWF0ZSBwbGF5ZXJcbiAgICAgICAgLy8gY3JlYXRlIGJvYXJkXG4gICAgICAgIC8vIC0gQWxyZWFkeSBkb25lIGFib3ZlXG5cbiAgICAgICAgLy8gRG8gYWxsIHRoaXMgbG9naWMgaW5zaWRlIGhlcmUgb3Igb24gYSBkaWZmZXJlbnQgbW9kdWxlP1xuXG4gICAgICAgIC8vIHBsYWNlIHNoaXBzICh3aGF0IHR5cGVzIG9mIHNoaXAgYW5kIGhvdyBtYW55PylcbiAgICAgICAgLy8gLSBjcmVhdGUgNSB0eXBlcyBvZiBzaGlwcyBhbmQgcGxhY2UgdGhlbVxuXG4gICAgICAgIC8vIEdBTUVGTE9XIEJFR0lOU1xuICAgICAgICAvLyBleGVjdXRlIG9wcG9uZW50J3MgcmVjZWl2ZUF0dGFjayBmdW5jdGlvblxuICAgICAgICAvLyBpZiBvcHBvbmVudCBhbGxTdW5rKCkgaXMgZmFsc2UsIHRoZW4gb3Bwb25lbnQgZXhlY3V0ZXMgeW91ciByZWNlaXZlQXR0YWNrIGZ1bmN0aW9uXG4gICAgICAgIC8vIGlmIG9wcG9uZW50IGFsbFN1bmsoKSBpcyB0cnVlLCB0aGVuIHlvdSB3aW4uXG4gICAgICAgIC8vIFRoZSBhYm92ZSBhcHBsaWVzIHRvIG9wcG9uZW50IGFzIHdlbGwuXG4gICAgICAgIC8vIGlmIHlvdSBhY2NpZGVudGx5IGNob29zZSBncmlkcyB0aGF0IHdlcmUgYWxyZWFkeSBoaXQgb3IgbWlzc2VkLCB5b3Ugd2lsbCBiZSBwcm9tcHRlZCB0byB0cnkgYWdhaW5cbiAgICAgICAgXG4gICAgICAgIC8vIFVJXG4gICAgICAgIC8vIE9wcG9uZW50IHdpbGwgb25seSBzZWUgeW91ciBncmlkIGFzIGhpdCBtYXAgYW5kIHZpY2UgdmVyc2EuXG4gICAgICAgIC8vIEF0IGV2ZXJ5IHR1cm4sIHRoZSBlbnRpcmUgRE9NIHdpbGwgcmVuZGVyIG93bkdyaWQgYW5kIGVuZW15IGhpdG1hcCBhbmQgdmljZSB2ZXJzYS5cblxuICAgIFxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBcImNvbXB1dGVyXCIpIHtcbiAgICAgICAgXG4gICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgZXhjZXB0IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSBpcyB1c2VkIHdpdGggcmVjZWl2ZUF0dGFjayBmb3IgY29vcmRpbmF0ZXNcbiAgICAgICAgLy8gY3JlYXRlIGEgZnVuY3Rpb24gdGhhdCBydW5zIE1hdGguZmxvb3IsIGFuZCB0ZXN0IGl0LlxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIGJvYXJkXG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIG1hdGguZmxvb3IgZnVuY3Rpb24gc2VwYXJhdGVseSBiZWxvdyBoZXJlLlxuICAgIFxufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZVBsYXllclxufSIsImltcG9ydCB7IGN1cnJlbnRUdXJuLCB0dXJuU3RhdGUgfSBmcm9tIFwiLi9nYW1lRmxvd1wiO1xuXG5pbXBvcnQgeyB1cGRhdGVIZWFkZXIgfSBmcm9tIFwiLi9yZW5kZXJET01cIjtcblxuLy8gSG93IGRvIHlvdSByZW5kZXIgdGhlIGJvYXJkP1xuXG4vLyBzZWxlY3QgdGhlIHBsYXllciBib3JkZXIgZ3JpZHMgZmlyc3QuXG5cbi8vIHRoZW4gaW1wb3J0IGFuZCBsb29wIHRocm91Z2ggb3duR3JpZCBhbmQgaGl0bWFwXG5cbi8vIHRoaXMgZnVuY3Rpb24gaGFzIHRvIGJlIHJldXNhYmxlIGZvciBib3RoIHBsYXllciAxIGFuZCBwbGF5ZXIgMi5cblxuLy8gaXQgd2lsbCBjaGVjayB3aG9zZSB0dXJuIGFuZCB0eXBlIG9mIHBsYXllciB0aGUgcGxheWVyIGlzIHBsYXlpbmcgd2l0aC5cblxuLy8gaWYgcGxheWluZyBhZ2FpbnRzIGFpIGl0IHdpbGwgb25seSBldmVyIHJlbmRlciB0aGUgYWkgcGxheWVyJ3MgaGl0bWFwLiBuZXZlciByZW5kZXJzIGFpIHBsYXllcidzIG9ud0dyaWQuXG5cbi8vIGlmIHBsYXlpbmcgYWdhaW5zdCBhbm90aGVyIHBsYXllciBhZnRlciBhIHBsYXllciBhdHRhY2tzLCBhIGZpeGVkIGJsYWNrIGRpdiB3aWxsIGNvdmVyIHVwIHRoZSBlbnRpcmUgc2NyZWVuIGFuZCBzaG93IGEgdGV4dCBvZiB3aGV0aGVyIHRoZSBwbGF5ZXIgaGl0IG9yIG1pc3MsIGFsc28gc2hvd3Mgd2hvc2UgdHVybiBpcyBuZXh0IHdpdGggYSBidXR0b24gbGFiZWxsZWQgXCJzdGFydCB0dXJuXCIuIHdpdGggdGhlIG5leHQgcGxheWVyJ3MgZ3JpZHMgYW5kIGhpdG1hcHMgYWxyZWFkdCByZW5kZXJlZCBiZWhpbmQgdGhlIGJsYWNrIGRpdi5cblxuLy8gc2hpcHMgYXJlIGRpc3BsYXllZCBpbiBkYXJrIGdyZXkgY29sb3VyXG5cbi8vIGhpdHMgYXJlIGRpc3BsYXllZCBpbiByZWRcblxuLy8gbWlzc2VzIGFyZSBkaXNwbGF5ZWQgaW4gd2hpdGVcblxuXG5cblxuLy8gZmlyc3QgeW91IG11c3QgZ2V0IG93bkdyaWQgb2YgcGxheWVyIG9uZSBhbmQgZGlzcGxheSB0aGUgZ3JpZHMgY29ycmVjdGx5LlxuXG4vLyBUaGVuIHlvdSBtdXN0IGdldCBwbGF5ZXIgdHdvJ3MgaGl0bWFwIGFuZCBkaXNwbGF5IHRoZSBncmlkcyBjb3JyZWN0bHkuXG5cbi8vIGFmdGVyIHRoYXQgeW91IG11c3QgY3JlYXRlIGFub3RoZXIgZnVudGlvbiB0byBkaXNwbGF5IHNoaXBzIGNvcnJlY3RseS4gLWFkZCBjbGFzc2VzIHRvIHRoZSBjb3JyZWN0IGdyaWRzLlxuXG4vLyBUaGVuIHlvdSBjcmVhdGUgYW5vdGhlciBmdW5jdGlvbiB0byByZW5kZXIgaGl0bWFwIGNvcnJlY3RseS5cblxuLy8gSGl0bWFwIHdpbGwgYmUgZGlzcGxheWVkIG9uIHBsYXllciBvbmUgZ3JpZCBhbmQgcGxheWVyIHR3byBncmlkLlxuXG4vLyBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBncmlkcy4gKERPTkUpXG5cblxuLy8gYWRkIGNvb3JkaW5hdGVzIGFzIGFuIG9iamVjdCBcImNvbnN0IGNvb3JkcyA9IHt4OjAseTowfVwiIGluc2lkZSBhZGRldmVudGxpc3RlbmVyIGNhbGxiYWNrIGZ1bmN0aW9uPyB1c2UgY29sdW1uSW5kZXggYW5uZCByb3dJbmRleD8gKERPTkUpXG5cblxuXG4vLyByZWZhY3RvciBpZiBuZWNlc3NhcnlcbmZ1bmN0aW9uIHBvcHVsYXRlUGxheWVyMUJvYXJkIChwbGF5ZXIxLCBwbGF5ZXIxVHlwZSl7XG4gICAgY29uc3QgcGxheWVyMUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMS1ncmlkJyk7XG5cblxuICAgIFxuICAgIGZ1bmN0aW9uIGRpc3BsYXlHcmlkcygpIHtcbiAgICAgICAgY3JlYXRlR3JpZHMocGxheWVyMSwgcGxheWVyMUdyaWQsIFwicGxheWVyMVwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVHcmlkcygpIHtcbiAgICAgICAgd2hpbGUgKHBsYXllcjFHcmlkLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBsYXllcjFHcmlkLmZpcnN0Q2hpbGQucmVtb3ZlKClcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc2hvd1NoaXBzKCkge1xuICAgICAgICBkaXNwbGF5U2hpcHMobnVsbCxwbGF5ZXIxLCBwbGF5ZXIxR3JpZCk7XG4gICAgfVxuICAgIFxuXG5cblxuICAgIGZ1bmN0aW9uIHNob3dIaXRNYXAoKSB7XG4gICAgICAgIGRpc3BsYXlIaXRNYXAocGxheWVyMSwgcGxheWVyMUdyaWQpO1xuICAgIH1cblxuICAgXG5cbiAgIFxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXNwbGF5R3JpZHMsXG4gICAgICAgIGRlbGV0ZUdyaWRzLFxuICAgICAgICBzaG93U2hpcHMsXG4gICAgICAgIHNob3dIaXRNYXAsXG4gICAgICAgIHBsYXllcjFcbiAgICB9XG5cbn1cblxuLy8gTWVyZ2UgaXQgaW50byBvbmUgZnVuY3Rpb24gLSBhYm92ZVxuZnVuY3Rpb24gcG9wdWxhdGVQbGF5ZXIyQm9hcmQgKHBsYXllcjIsIHBsYXllcjJUeXBlKSB7XG5cbiAgICBjb25zdCBwbGF5ZXIyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIyLWdyaWQnKTtcblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlHcmlkcyAoKSB7XG4gICAgICAgIGNyZWF0ZUdyaWRzKHBsYXllcjIsIHBsYXllcjJHcmlkLCBcInBsYXllcjJcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlR3JpZHMoKSB7XG4gICAgICAgIHdoaWxlIChwbGF5ZXIyR3JpZC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBwbGF5ZXIyR3JpZC5maXJzdENoaWxkLnJlbW92ZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93U2hpcHMgKCkge1xuICAgICAgICBkaXNwbGF5U2hpcHMobnVsbCxwbGF5ZXIyLCBwbGF5ZXIyR3JpZCk7XG4gICAgfVxuICAgIFxuXG4gICAgZnVuY3Rpb24gc2hvd0hpdE1hcCAoKSB7XG4gICAgICAgIGRpc3BsYXlIaXRNYXAocGxheWVyMiwgcGxheWVyMkdyaWQpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXlHcmlkcyxcbiAgICAgICAgZGVsZXRlR3JpZHMsXG4gICAgICAgIHNob3dTaGlwcyxcbiAgICAgICAgc2hvd0hpdE1hcCxcbiAgICAgICAgcGxheWVyMlxuICAgIH1cbiAgICBcbiAgICBcbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUdyaWRzIChwbGF5ZXIsIHBsYXllckRPTUdyaWQsIGlzUGxheWVyKSB7XG4gICAgLy8gcHV0IHRoZSBncmlkIG1ha2luZyBsb29wIGJlbG93IGluc2lkZSBoZXJlXG5cbiAgICBmb3IgKGxldCBjb2x1bW5JbmRleCA9IDA7IGNvbHVtbkluZGV4IDwgcGxheWVyLmJvYXJkLm93bkdyaWQubGVuZ3RoOyBjb2x1bW5JbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGNvbHVtbiA9IHBsYXllci5ib2FyZC5vd25HcmlkW2NvbHVtbkluZGV4XTtcblxuXG4gICAgICAgIGNvbnN0IGdyaWRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ3JpZENvbHVtbi5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1jb2x1bW5cIik7XG4gICAgICAgIC8vIGdyaWRDb2x1bW4udGV4dENvbnRlbnQgPSBjb2x1bW5JbmRleFxuICAgICAgICBwbGF5ZXJET01HcmlkLmFwcGVuZChncmlkQ29sdW1uKVxuICAgICAgICBcblxuXG4gICAgICAgIGZvciAobGV0IHJvd0luZGV4ID0gOTsgcm93SW5kZXggPj0gMDsgcm93SW5kZXgtLSkge1xuICAgICAgICAgICAgLy8gY29uc3QgZWxlbWVudCA9IGNvbHVtbltyb3dJbmRleF07XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlRFU1RcIilcbiAgICAgICAgICAgIGNvbnN0IGdyaWRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGdyaWRSb3cuY2xhc3NMaXN0LmFkZChcImdyaWQtcm93XCIpO1xuICAgICAgICAgICAgLy8gZ3JpZFJvdy50ZXh0Q29udGVudCA9IHJvd0luZGV4O1xuICAgICAgICAgICAgZ3JpZENvbHVtbi5hcHBlbmQoZ3JpZFJvdyk7XG5cbiAgICAgICAgICAgY2xpY2tCb2FyZChwbGF5ZXIsIGdyaWRSb3csIGNvbHVtbkluZGV4LCByb3dJbmRleCwgaXNQbGF5ZXIpXG4gICAgICAgIH1cblxuICAgICAgIFxuICAgICAgICBcbiAgICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlTaGlwcyh0b0Rpc3BsYXksIHBsYXllciwgcGxheWVyRE9NR3JpZCkge1xuICAgICAgICAvLyBpZiBwbGF5ZXIgMiB0dXJuIGRvbid0IGRpc3BsYXkgc2hpcHNcblxuICAgICAgICAvLyByZW1vdmUgbGF0ZXJcbiAgICAgICAgdG9EaXNwbGF5ID0gdHJ1ZVxuXG4gICAgICAgIGlmICh0b0Rpc3BsYXkpIHtcbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBhbGwgb3duR3JpZCBncmlkcyBhcnJheSBhbmQgaWYgbm90IGVtcHR5LCBhc3NpZ24gYSBncmV5IGNsYXNzIHRvIHRoYXQgZ3JpZC4gXG5cbiAgICAgICAgICAgIGNvbnN0IHBsYXllckNvbHVtbnMgPSBwbGF5ZXJET01HcmlkLmNoaWxkTm9kZXNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IHBsYXllci5ib2FyZC5vd25HcmlkLmxlbmd0aDsgY29sSW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBwbGF5ZXIuYm9hcmQub3duR3JpZFtjb2xJbmRleF07XG5cbiAgICAgICAgICAgICAgICAvLyBCb2FyZCByZW5kZXJzIHVwc2lkZSBkb3duIGlmIEkgZG9uJ3QgdXNlIFwibm9kZVJvd0l0ZXJhdG9yXCIuXG4gICAgICAgICAgICAgICAgbGV0IG5vZGVzUm93SXRlcmF0b3IgPSAwXG5cbiAgICAgICAgICAgICAgICBjb25zdCByb3dOb2RlcyA9IHBsYXllckNvbHVtbnNbY29sSW5kZXhdLmNoaWxkTm9kZXM7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyb3dOb2RlcylcblxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHJldmVyc2VkUm93Tm9kZSA9IHJvd05vZGVzLnJldmVyc2UoKTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IHJvd0luZGV4ID0gOTsgcm93SW5kZXggPj0gMDsgcm93SW5kZXgtLSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3cgPSByb3dzW3Jvd0luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codHJ1ZSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgcm93Tm9kZXNbbm9kZXNSb3dJdGVyYXRvcl0uY2xhc3NMaXN0LmFkZCgnc2hpcC1sb2NhdGVkJylcblxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG5vZGVzUm93SXRlcmF0b3IrK1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG59XG5cblxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlIaXRNYXAocGxheWVyLHBsYXllckRPTUdyaWQpIHtcblxuICAgIC8vIHBsYXllci5ib2FyZC5oaXRNYXBcblxuICAgIC8vIGRpc3BsYXkgaGl0bWFwIGFmdGVyIGRpc3BsYXkgc2hpcCBydW5zLCBUaGlzIHNob3VsZCBvdmVycmlkZSB0aGUgY2xhc3NlcyBvZiBkaXNwbGF5U2hpcHNcblxuICAgIGxldCB0b0Rpc3BsYXkgPSB0cnVlXG5cbiAgICBpZiAodG9EaXNwbGF5KSB7XG4gICAgICAgIC8vIGxvb3AgdGhyb3VnaCBhbGwgb3duR3JpZCBncmlkcyBhcnJheSBhbmQgaWYgbm90IGVtcHR5LCBhc3NpZ24gYSBncmV5IGNsYXNzIHRvIHRoYXQgZ3JpZC4gXG5cbiAgICAgICAgY29uc3QgcGxheWVyQ29sdW1ucyA9IHBsYXllckRPTUdyaWQuY2hpbGROb2Rlc1xuXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cocGxheWVyLmJvYXJkLmhpdE1hcClcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBwbGF5ZXIuYm9hcmQuaGl0TWFwLmxlbmd0aDsgY29sSW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3Qgcm93cyA9IHBsYXllci5ib2FyZC5oaXRNYXBbY29sSW5kZXhdO1xuXG4gICAgICAgICAgICAvLyBCb2FyZCByZW5kZXJzIHVwc2lkZSBkb3duIGlmIEkgZG9uJ3QgdXNlIFwibm9kZVJvd0l0ZXJhdG9yXCIuXG4gICAgICAgICAgICBsZXQgbm9kZXNSb3dJdGVyYXRvciA9IDBcblxuICAgICAgICAgICAgY29uc3Qgcm93Tm9kZXMgPSBwbGF5ZXJDb2x1bW5zW2NvbEluZGV4XS5jaGlsZE5vZGVzO1xuXG5cbiAgICAgICAgICAgIGZvciAobGV0IHJvd0luZGV4ID0gOTsgcm93SW5kZXggPj0gMDsgcm93SW5kZXgtLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJvd3Nbcm93SW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChyb3cgPT09IFwiSGl0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codHJ1ZSlcblxuICAgICAgICAgICAgICAgICAgICByb3dOb2Rlc1tub2Rlc1Jvd0l0ZXJhdG9yXS5jbGFzc0xpc3QuYWRkKCdzaGlwLWlzLWhpdCcpXG5cblxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgaWYgKHJvdyA9PT0gXCJNaXNzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codHJ1ZSlcblxuICAgICAgICAgICAgICAgICAgICByb3dOb2Rlc1tub2Rlc1Jvd0l0ZXJhdG9yXS5jbGFzc0xpc3QuYWRkKCdhdHRhY2stbWlzc2VkJylcblxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG5vZGVzUm93SXRlcmF0b3IrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGNsaWNrQm9hcmQgKHBsYXllciwgZ3JpZCwgY29sdW1uSW5kZXgsIHJvd0luZGV4LCBpc1BsYXllcikge1xuICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFBsYXllclR1cm4gPSB0dXJuU3RhdGUuZ2V0VHVybigpO1xuXG4gICAgICAgIGNvbnN0IGdhbWVJc092ZXIgPSB0dXJuU3RhdGUuaXNHYW1lT3ZlcigpO1xuXG4gICAgICAgIGlmIChnYW1lSXNPdmVyKSB7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiR2FtZSBpcyBvdmVyXCIpXG5cbiAgICAgICAgICAgIHVwZGF0ZUhlYWRlcihcIkdhbWUgaXMgb3ZlclwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudFBsYXllclR1cm4pXG5cbiAgICAgICAgdXBkYXRlSGVhZGVyKGBJdCBpcyAke2N1cnJlbnRQbGF5ZXJUdXJufSdzIHR1cm4uYClcbiAgICAgICAgaWYgKGlzUGxheWVyID09PSBjdXJyZW50UGxheWVyVHVybikge1xuICAgICAgICAgICAgLy8gdHVyblN0YXRlLnVwZGF0ZVR1cm4oKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJOb3QgeW91ciBvd24gYm9hcmQhXCIpXG5cbiAgICAgICAgICAgIHVwZGF0ZUhlYWRlcihcIk5vdCB5b3VyIG93biBib2FyZCFcIik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgeCA9IGNvbHVtbkluZGV4XG4gICAgICAgIGNvbnN0IHkgPSByb3dJbmRleDtcbiAgICAgICAgY29uc29sZS5sb2coeCx5KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIuYm9hcmQuaGl0TWFwW3hdW3ldKVxuXG4gICAgICAgIGlmIChwbGF5ZXIuYm9hcmQuaGl0TWFwW3hdW3ldID09PSBcIk1pc3NcIiB8fCBwbGF5ZXIuYm9hcmQuaGl0TWFwW3hdW3ldID09PSBcIkhpdFwiKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkdyaWQgYWxyZWFkeSBjaG9zZW5cIilcblxuICAgICAgICAgICAgdXBkYXRlSGVhZGVyKFwiR3JpZCBhbHJlYWR5IGNob3NlblwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gcGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soeCx5KTtcblxuICAgICAgICB1cGRhdGVIZWFkZXIoYCR7Y3VycmVudFBsYXllclR1cm59IGNob3NlIHg6ICR7eH0gYW5kIHk6ICR7eX0gYW5kIGl0J3MgYSAke3Jlc3VsdC50b0xvd2VyQ2FzZSgpfWApO1xuXG4gICAgICAgIHR1cm5TdGF0ZS51cGRhdGVUdXJuKCk7XG5cbiAgICAgICAgaWYgKHBsYXllci5ib2FyZC5vd25HcmlkW3hdW3ldKSB7XG4gIFxuICAgICAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdzaGlwLWlzLWhpdCcpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIuYm9hcmQub3duR3JpZFt4XVt5XS5nZXRIaXRzKCkpXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBhbGxTdW5rKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdhdHRhY2stbWlzc2VkJyk7XG5cbiAgICAgICAgXG4gICAgfSlcbn1cblxuZXhwb3J0e1xuICAgIHBvcHVsYXRlUGxheWVyMUJvYXJkLFxuICAgIHBvcHVsYXRlUGxheWVyMkJvYXJkXG59IiwiXG5mdW5jdGlvbiBjcmVhdGVET00gKCkge1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyJyk7XG4gICAgYm9keS5hcHBlbmQobWFpbkNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItZGl2Jyk7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKGhlYWRlckRpdik7XG5cbiAgICAgICAgY29uc3QgcGxheWVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllckRpdi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItZGl2Jyk7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKHBsYXllckRpdik7XG5cbiAgICAgICAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvb3RlckRpdi5jbGFzc0xpc3QuYWRkKCdmb290ZXItZGl2Jyk7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKGZvb3RlckRpdik7XG5cblxuXG4gICAgXG5cblxuXG5cblxuICAgIGNvbnN0IHBsYXllcjFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5ZXIxRGl2LmNsYXNzTGlzdC5hZGQoJ3BsYXllcjEtZGl2Jyk7XG4gICAgcGxheWVyRGl2LmFwcGVuZChwbGF5ZXIxRGl2KTtcbiAgICAvLyBwbGF5ZXIxRGl2LnRleHRDb250ZW50ID0gXCJQbGF5ZXIgMVwiO1xuXG4gICAgICAgIGNvbnN0IHBsYXllcjFHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllcjFHcmlkLmNsYXNzTGlzdC5hZGQoJ3BsYXllcjEtZ3JpZCcpO1xuICAgICAgICBwbGF5ZXIxRGl2LmFwcGVuZChwbGF5ZXIxR3JpZCk7XG5cbiAgICAgICAgY29uc3QgcGxheWVyMUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllcjFMYWJlbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXIxLWxhYmVsJyk7XG4gICAgICAgIHBsYXllcjFMYWJlbC50ZXh0Q29udGVudCA9IFwiUGxheWVyIDFcIlxuICAgICAgICBwbGF5ZXIxRGl2LmFwcGVuZChwbGF5ZXIxTGFiZWwpXG5cbiAgICBjb25zdCBwbGF5ZXIyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVyMkRpdi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXIyLWRpdicpO1xuICAgIHBsYXllckRpdi5hcHBlbmQocGxheWVyMkRpdilcbiAgICAvLyBwbGF5ZXIyRGl2LnRleHRDb250ZW50ID0gXCJQbGF5ZXIgMlwiO1xuXG4gICAgICAgIGNvbnN0IHBsYXllcjJHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllcjJHcmlkLmNsYXNzTGlzdC5hZGQoJ3BsYXllcjItZ3JpZCcpO1xuICAgICAgICBwbGF5ZXIyRGl2LmFwcGVuZChwbGF5ZXIyR3JpZCk7XG5cbiAgICAgICAgY29uc3QgcGxheWVyMkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllcjJMYWJlbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXIyLWxhYmVsJyk7XG4gICAgICAgIHBsYXllcjJMYWJlbC50ZXh0Q29udGVudCA9IFwiUGxheWVyIDJcIlxuICAgICAgICBwbGF5ZXIyRGl2LmFwcGVuZChwbGF5ZXIyTGFiZWwpXG5cblxuICAgIC8vIENyZWF0ZSBib2FyZCBkaXYsIG1ha2Ugc3VyZSB0aGVyZSBpcyBtaW5pbXVtIHNpemUgZm9yIGhlaWdodCBhbmQgd2lkdGhcbn1cblxuXG5mdW5jdGlvbiB1cGRhdGVIZWFkZXIgKHN0YXR1c01lc3NhZ2UpIHtcbiAgICBjb25zdCBzdGF0dXNEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1kaXYnKTtcblxuICAgIHN0YXR1c0Rpc3BsYXkudGV4dENvbnRlbnQgPSBzdGF0dXNNZXNzYWdlXG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlRE9NLFxuICAgIHVwZGF0ZUhlYWRlclxufVxuXG4iLCIgZnVuY3Rpb24gY3JlYXRlU2hpcCAobGVuZ3RoKXtcbiAgICBsZXQgdG90YWxIaXRzID0gMDtcbiAgICBsZXQgc3VuayA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2V0TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbGVuZ3RoXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SGl0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRvdGFsSGl0c1xuICAgIH1cblxuICAgIGNvbnN0IGlzU3VuayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRvdGFsSGl0cyA+PSBsZW5ndGgpIHtcbiAgICAgICAgICAgIHN1bmsgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1bmtcbiAgICB9XG5cblxuICAgIGNvbnN0IGhpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdG90YWxIaXRzKytcbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIGdldExlbmd0aCxcbiAgICAgICAgZ2V0SGl0cyxcbiAgICAgICAgaXNTdW5rLFxuICAgICAgICBoaXRcbiAgICB9XG4gfVxuXG5cbiBleHBvcnR7XG4gICAgY3JlYXRlU2hpcFxuIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vYXNzZXRzL3N0eWxlLmNzcyc7XG5cbmltcG9ydCB7IGNyZWF0ZVBsYXllciB9IGZyb20gXCIuL3BsYXllckZhY3RvcnlcIjtcbi8vIGltcG9ydCB7IG1vZHVsZSB9IGZyb20gJy4vbW9kdWxlJztcblxuXG4vLyBUaGlzIGlzIGp1c3QgYSBDUlVELiBJdCBzaG91bGQgYmUgZWFzeS4gQnV0IG1ha2Ugc3VyZSB0byBmb2xsb3cgdGhlIGluc3RydWN0aW9ucy5cblxuLy8gbW9kdWxlKClcblxuXG5pbXBvcnQgeyBjcmVhdGVET00gfSBmcm9tIFwiLi9yZW5kZXJET01cIjtcblxuaW1wb3J0IHsgZ2FtZUZsb3cgfSBmcm9tICcuL2dhbWVGbG93JztcblxuLy8gaW1wb3J0IHsgcG9wdWxhdGVCb2FyZCB9IGZyb20gJy4vcmVuZGVyQm9hcmQnO1xuXG5jcmVhdGVET00oKTtcbmdhbWVGbG93KCk7XG5cblxuLy8gcmVtb3ZlIHRoaXMgbGF0ZXJcbi8vIGNvbnN0IHRlc3RQbGF5ZXIgPSBjcmVhdGVQbGF5ZXIoXCJyZWFsXCIpO1xuLy8gcG9wdWxhdGVCb2FyZCh0ZXN0UGxheWVyKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==