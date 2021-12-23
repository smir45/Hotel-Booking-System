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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spinners */ \"react-spinners\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    // implement react spinner\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setLoading(true);\n        setTimeout(()=>{\n            setLoading(false);\n        });\n    }, []);\n    const override = `\n  display: block;\n  margin: 0 auto;\n  width: 100%;\n  border-color: red;\n  `;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_spinners__WEBPACK_IMPORTED_MODULE_3__.BarLoader, {\n            css: override,\n            size: 5,\n            color: \"#375488\",\n            loading: loading,\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/_app.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            },\n            __self: this\n        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n            ...pageProps,\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/_app.js\",\n                lineNumber: 33,\n                columnNumber: 9\n            },\n            __self: this\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDaUI7QUFFUjtTQUVqQ0ksS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsRUFBMEI7SUFDMUIsS0FBSyxNQUFFQyxPQUFPLE1BQUVDLFVBQVUsTUFBSVAsK0NBQVEsQ0FBQyxJQUFJO0lBQzNDQyxnREFBUyxLQUFPLENBQUM7UUFDZk0sVUFBVSxDQUFDLElBQUk7UUFDZkMsVUFBVSxLQUFPLENBQUM7WUFDaEJELFVBQVUsQ0FBQyxLQUFLO1FBQ2xCLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsS0FBSyxDQUFDRSxRQUFRLElBQUk7SUFPbEIsTUFBTTs7WUFJRUM7WUFDQUMsSUFBSSxFQUFFLENBQUM7O1lBRVBMLE9BQU8sRUFBRUEsSUFBQUEsc0RBQU87Ozs7Ozs7Z0NBR2pCRixTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7OztBQUloQyxDQUFDO0FBRUQsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEJhckxvYWRlciB9IGZyb20gXCJyZWFjdC1zcGlubmVyc1wiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgLy8gaW1wbGVtZW50IHJlYWN0IHNwaW5uZXJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0sICk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvdmVycmlkZSA9IGBcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gIGA7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgIDxCYXJMb2FkZXJcbiAgICAgICAgICBjc3M9e292ZXJyaWRlfVxuICAgICAgICAgIHNpemU9ezV9XG4gICAgICAgICAgY29sb3I9e1wiIzM3NTQ4OFwifVxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQmFyTG9hZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldFRpbWVvdXQiLCJvdmVycmlkZSIsImNzcyIsInNpemUiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-spinners":
/*!*********************************!*\
  !*** external "react-spinners" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-spinners");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();