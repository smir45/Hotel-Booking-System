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

/***/ "./pages/api/postdatas/SearchDatas.js":
/*!********************************************!*\
  !*** ./pages/api/postdatas/SearchDatas.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst searchDatas = ()=>{\n    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: search , 1: setBlog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const datas = search;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const result = await axios__WEBPACK_IMPORTED_MODULE_3___default()(\"http://localhost:8000/api/blog/post/get\");\n            setBlog(result.data);\n            setIsLoading(false);\n        };\n        fetchData();\n    }, []);\n    if (isLoading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"login-back-loading\",\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/SearchDatas.js\",\n                lineNumber: 19,\n                columnNumber: 12\n            },\n            __self: undefined,\n            children: \"Loading...\"\n        }));\n    }\n    console.log(datas);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/SearchDatas.js\",\n            lineNumber: 23,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/SearchDatas.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            },\n            __self: undefined,\n            children: datas.map((data)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/SearchDatas.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    },\n                    __self: undefined,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        __source: {\n                            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/SearchDatas.js\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        },\n                        __self: undefined,\n                        children: data.title\n                    })\n                }, data.id)\n            )\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchDatas);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcG9zdGRhdGFzL1NlYXJjaERhdGFzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDbEI7QUFDUDtBQUV6QixLQUFLLENBQUNLLFdBQVcsT0FBUyxDQUFDO0lBQ3pCLEtBQUssTUFBRUMsU0FBUyxNQUFFQyxZQUFZLE1BQUlOLCtDQUFRLENBQUMsSUFBSTtJQUMvQyxLQUFLLE1BQUVPLE1BQU0sTUFBRUMsT0FBTyxNQUFJUiwrQ0FBUSxDQUFDLElBQUk7SUFDdkMsS0FBSyxDQUFDUyxLQUFLLEdBQUdGLE1BQU07SUFFcEJOLGdEQUFTLEtBQU8sQ0FBQztRQUNmLEtBQUssQ0FBQ1MsU0FBUyxhQUFlLENBQUM7WUFDN0IsS0FBSyxDQUFDQyxNQUFNLEdBQUcsS0FBSyxDQUFDUiw0Q0FBSyxDQUFDLENBQXlDO1lBQ3BFSyxPQUFPLENBQUNHLE1BQU0sQ0FBQ0MsSUFBSTtZQUNuQk4sWUFBWSxDQUFDLEtBQUs7UUFDcEIsQ0FBQztRQUNESSxTQUFTO0lBQ1gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMLEVBQUUsRUFBRUwsU0FBUyxFQUFFLENBQUM7UUFDZCxNQUFNLHNFQUFFUSxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFvQjs7Ozs7OztzQkFBQyxDQUFVOztJQUN2RCxDQUFDO0lBQ0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxLQUFLO0lBQ2pCLE1BQU0sc0VBQ0hJLENBQUc7Ozs7Ozs7dUZBQ0RBLENBQUc7Ozs7Ozs7c0JBQ0RKLEtBQUssQ0FBQ1EsR0FBRyxFQUFFTCxJQUFJLHdFQUNiQyxDQUFHOzs7Ozs7O21HQUNESyxDQUFFOzs7Ozs7O2tDQUFFTixJQUFJLENBQUNPLEtBQUs7O21CQURQUCxJQUFJLENBQUNRLEVBQUU7Ozs7QUFPM0IsQ0FBQztBQUVELGlFQUFlaEIsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3Bvc3RkYXRhcy9TZWFyY2hEYXRhcy5qcz9mYmNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBzZWFyY2hEYXRhcyA9ICgpID0+IHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc2VhcmNoLCBzZXRCbG9nXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBkYXRhcyA9IHNlYXJjaDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9ibG9nL3Bvc3QvZ2V0XCIpO1xuICAgICAgc2V0QmxvZyhyZXN1bHQuZGF0YSk7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH07XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWJhY2stbG9hZGluZ1wiPkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cbiAgY29uc29sZS5sb2coZGF0YXMpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7ZGF0YXMubWFwKChkYXRhKSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2RhdGEuaWR9PlxuICAgICAgICAgICAgPGgxPntkYXRhLnRpdGxlfTwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hEYXRhcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwicm91dGVyIiwiYXhpb3MiLCJzZWFyY2hEYXRhcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNlYXJjaCIsInNldEJsb2ciLCJkYXRhcyIsImZldGNoRGF0YSIsInJlc3VsdCIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaDEiLCJ0aXRsZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/postdatas/SearchDatas.js\n");

/***/ }),

/***/ "./pages/search.jsx":
/*!**************************!*\
  !*** ./pages/search.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_postdatas_SearchDatas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/postdatas/SearchDatas */ \"./pages/api/postdatas/SearchDatas.js\");\n\n\nconst Search = ()=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_api_postdatas_SearchDatas__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/search.jsx\",\n            lineNumber: 4,\n            columnNumber: 10\n        },\n        __self: undefined\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2guanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXFEO0FBRXJELEtBQUssQ0FBQ0MsTUFBTSxPQUFTLENBQUM7SUFDcEIsTUFBTSxzRUFBRUQsa0VBQVc7Ozs7Ozs7O0FBRXJCLENBQUM7QUFFRCxpRUFBZUMsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2VhcmNoLmpzeD85ZmE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWFyY2hEYXRhcyBmcm9tICcuL2FwaS9wb3N0ZGF0YXMvU2VhcmNoRGF0YXMnXG5cbmNvbnN0IFNlYXJjaCA9ICgpID0+IHtcbiAgcmV0dXJuIDxTZWFyY2hEYXRhcy8+XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyJdLCJuYW1lcyI6WyJTZWFyY2hEYXRhcyIsIlNlYXJjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/search.jsx\n");

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