"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/searchpage",{

/***/ "./pages/api/postdatas/SearchDatas.js":
/*!********************************************!*\
  !*** ./pages/api/postdatas/SearchDatas.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction SearchDatas(param) {\n    var data = param.data;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/SearchDatas.js\",\n                    lineNumber: 8,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"Search Datas\"\n            }),\n            data.map(function(search) {\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n                    id: data.id,\n                    __source: {\n                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/SearchDatas.js\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h1\", {\n                        __source: {\n                            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/SearchDatas.js\",\n                            lineNumber: 12,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: [\n                            data.title,\n                            \" \",\n                            data.id,\n                            \" \"\n                        ]\n                    })\n                }));\n            })\n        ]\n    }));\n}\n_c = SearchDatas;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchDatas);\nvar _c;\n$RefreshReg$(_c, \"SearchDatas\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcG9zdGRhdGFzL1NlYXJjaERhdGFzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1g7QUFDZDtTQUVoQkssV0FBVyxDQUFDLEtBQVEsRUFBRSxDQUFDO1FBQVRDLElBQUksR0FBTixLQUFRLENBQU5BLElBQUk7O0lBQ3pCLE1BQU07O2lGQUVEQyxDQUFFOzs7Ozs7OzBCQUFDLENBQVk7O1lBQ2ZELElBQUksQ0FBQ0UsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsTUFBTSxFQUFLLENBQUM7Z0JBQ3JCLE1BQU0sc0VBQ0hDLENBQUk7b0JBQUNDLEVBQUUsRUFBRUwsSUFBSSxDQUFDSyxFQUFFOzs7Ozs7O29HQUNkSixDQUFFOzs7Ozs7Ozs0QkFDQUQsSUFBSSxDQUFDTSxLQUFLOzRCQUFDLENBQUM7NEJBQUNOLElBQUksQ0FBQ0ssRUFBRTs0QkFBRSxDQUFHOzs7O1lBSWxDLENBQUM7OztBQUdQLENBQUM7S0FmUU4sV0FBVzs7QUFpQnBCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL3Bvc3RkYXRhcy9TZWFyY2hEYXRhcy5qcz9mYmNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZnVuY3Rpb24gU2VhcmNoRGF0YXMoeyBkYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPlNlYXJjaCBEYXRhczwvaDE+XG4gICAgICB7ZGF0YS5tYXAoKHNlYXJjaCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxtYWluIGlkPXtkYXRhLmlkfT5cbiAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAge2RhdGEudGl0bGV9IHtkYXRhLmlkfXtcIiBcIn1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaERhdGFzO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvXCIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRhdGEsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiYXhpb3MiLCJTZWFyY2hEYXRhcyIsImRhdGEiLCJoMSIsIm1hcCIsInNlYXJjaCIsIm1haW4iLCJpZCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/postdatas/SearchDatas.js\n");

/***/ })

});