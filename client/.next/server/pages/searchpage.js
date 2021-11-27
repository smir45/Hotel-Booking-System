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
exports.id = "pages/searchpage";
exports.ids = ["pages/searchpage"];
exports.modules = {

/***/ "./pages/searchpage.jsx":
/*!******************************!*\
  !*** ./pages/searchpage.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function getStaticProps() {\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/todos/\");\n    const data = await response.json();\n    return {\n        props: {\n            elements: data\n        }\n    };\n}\nfunction SearchPage({ elements  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/searchpage.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"Search Datas\"\n            }),\n            elements.map((element)=>{\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                    __source: {\n                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/searchpage.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h1\", {\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/searchpage.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: [\n                                element.title,\n                                \" \",\n                                element.id\n                            ]\n                        }),\n                        console.log(element.id)\n                    ]\n                }, element.id));\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2hwYWdlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNYO0FBQ2Q7QUFFbEIsZUFBZUssY0FBYyxHQUFHLENBQUM7SUFDdEMsS0FBSyxDQUFDQyxRQUFRLEdBQUcsS0FBSyxDQUFDQyxLQUFLLENBQUMsQ0FBNkM7SUFDMUUsS0FBSyxDQUFDQyxJQUFJLEdBQUcsS0FBSyxDQUFDRixRQUFRLENBQUNHLElBQUk7SUFFaEMsTUFBTSxDQUFDLENBQUM7UUFDTkMsS0FBSyxFQUFFLENBQUM7WUFDTkMsUUFBUSxFQUFHSCxJQUFJO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztTQUVRSSxVQUFVLENBQUMsQ0FBQyxDQUFDRCxRQUFRLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakMsTUFBTTs7aUZBRURFLENBQUU7Ozs7Ozs7MEJBQUMsQ0FBWTs7WUFDZkYsUUFBUSxDQUFDRyxHQUFHLEVBQUVDLE9BQU8sR0FBSyxDQUFDO2dCQUMxQixNQUFNLHVFQUNIQyxDQUFJOzs7Ozs7Ozs4RkFDRkgsQ0FBRTs7Ozs7Ozs7Z0NBQ0FFLE9BQU8sQ0FBQ0UsS0FBSztnQ0FBQyxDQUFDO2dDQUFDRixPQUFPLENBQUNHLEVBQUU7Ozt3QkFFNUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxPQUFPLENBQUNHLEVBQUU7O21CQUpkSCxPQUFPLENBQUNHLEVBQUU7WUFRekIsQ0FBQzs7O0FBR1AsQ0FBQztBQUVELGlFQUFlTixVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zZWFyY2hwYWdlLmpzeD9kMjE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3RvZG9zL1wiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBlbGVtZW50cyA6IGRhdGFcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBTZWFyY2hQYWdlKHsgZWxlbWVudHMgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+U2VhcmNoIERhdGFzPC9oMT5cbiAgICAgIHtlbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bWFpbiBrZXk9e2VsZW1lbnQuaWR9PlxuICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICB7ZWxlbWVudC50aXRsZX0ge2VsZW1lbnQuaWR9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAge2NvbnNvbGUubG9nKGVsZW1lbnQuaWQpfVxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICBcbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiYXhpb3MiLCJnZXRTdGF0aWNQcm9wcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInByb3BzIiwiZWxlbWVudHMiLCJTZWFyY2hQYWdlIiwiaDEiLCJtYXAiLCJlbGVtZW50IiwibWFpbiIsInRpdGxlIiwiaWQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/searchpage.jsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/searchpage.jsx"));
module.exports = __webpack_exports__;

})();