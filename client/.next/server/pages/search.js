"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/search";
exports.ids = ["pages/search"];
exports.modules = {

/***/ "./pages/search.jsx":
/*!**************************!*\
  !*** ./pages/search.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function getStaticProps() {\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/todos/\");\n    const data = await response.json();\n    return {\n        props: {\n            elements: data\n        }\n    };\n}\nfunction SearchPage({ elements  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/search.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"Search Datas\"\n            }),\n            elements.map((element)=>{\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                    __source: {\n                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/search.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h1\", {\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/search.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: [\n                                element.title,\n                                \" \",\n                                element.id\n                            ]\n                        }),\n                        console.log(element.id)\n                    ]\n                }, element.id));\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2guanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1g7QUFDZDtBQUVsQixlQUFlSyxjQUFjLEdBQUcsQ0FBQztJQUN0QyxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUE2QztJQUMxRSxLQUFLLENBQUNDLElBQUksR0FBRyxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csSUFBSTtJQUVoQyxNQUFNLENBQUMsQ0FBQztRQUNOQyxLQUFLLEVBQUUsQ0FBQztZQUNOQyxRQUFRLEVBQUdILElBQUk7UUFDakIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO1NBRVFJLFVBQVUsQ0FBQyxDQUFDLENBQUNELFFBQVEsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUNqQyxNQUFNOztpRkFFREUsQ0FBRTs7Ozs7OzswQkFBQyxDQUFZOztZQUNmRixRQUFRLENBQUNHLEdBQUcsRUFBRUMsT0FBTyxHQUFLLENBQUM7Z0JBQzFCLE1BQU0sdUVBQ0hDLENBQUk7Ozs7Ozs7OzhGQUNGSCxDQUFFOzs7Ozs7OztnQ0FDQUUsT0FBTyxDQUFDRSxLQUFLO2dDQUFDLENBQUM7Z0NBQUNGLE9BQU8sQ0FBQ0csRUFBRTs7O3dCQUU1QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNMLE9BQU8sQ0FBQ0csRUFBRTs7bUJBSmRILE9BQU8sQ0FBQ0csRUFBRTtZQVF6QixDQUFDOzs7QUFHUCxDQUFDO0FBRUQsaUVBQWVOLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3NlYXJjaC5qc3g/OWZhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvcy9cIik7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZWxlbWVudHMgOiBkYXRhXG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gU2VhcmNoUGFnZSh7IGVsZW1lbnRzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPlNlYXJjaCBEYXRhczwvaDE+XG4gICAgICB7ZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPG1haW4ga2V5PXtlbGVtZW50LmlkfT5cbiAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAge2VsZW1lbnQudGl0bGV9IHtlbGVtZW50LmlkfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhlbGVtZW50LmlkKX1cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgXG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImF4aW9zIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwcm9wcyIsImVsZW1lbnRzIiwiU2VhcmNoUGFnZSIsImgxIiwibWFwIiwiZWxlbWVudCIsIm1haW4iLCJ0aXRsZSIsImlkIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/search.jsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/search.jsx"));
module.exports = __webpack_exports__;

})();