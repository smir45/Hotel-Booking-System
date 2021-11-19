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
exports.id = "pages/blog";
exports.ids = ["pages/blog"];
exports.modules = {

/***/ "./pages/api/postdatas/blogdata.js":
/*!*****************************************!*\
  !*** ./pages/api/postdatas/blogdata.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst BlogData = ()=>{\n    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: Blog , 1: setBlog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const datas = Blog;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const result = await axios__WEBPACK_IMPORTED_MODULE_2___default()(\"http://localhost:8000/api/blog/post/\");\n            setBlog(result.data);\n            setIsLoading(false);\n        };\n        fetchData();\n    }, []);\n    if (isLoading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"login-back-loading\",\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/pages/api/postdatas/blogdata.js\",\n                lineNumber: 20,\n                columnNumber: 12\n            },\n            __self: undefined,\n            children: \"Loading...\"\n        }));\n    }\n    console.log(datas);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/pages/api/postdatas/blogdata.js\",\n            lineNumber: 24,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/pages/api/postdatas/blogdata.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            },\n            __self: undefined,\n            children: datas.map((data)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/pages/api/postdatas/blogdata.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    },\n                    __self: undefined,\n                    children: [\n                        console.log(data.title),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/pages/api/postdatas/blogdata.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            },\n                            __self: undefined,\n                            children: data.title\n                        })\n                    ]\n                }, data.id)\n            )\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogData);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcG9zdGRhdGFzL2Jsb2dkYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ3pCO0FBRXpCLEtBQUssQ0FBQ0ksUUFBUSxPQUFTLENBQUM7SUFDdEIsS0FBSyxNQUFFQyxTQUFTLE1BQUVDLFlBQVksTUFBSUwsK0NBQVEsQ0FBQyxJQUFJO0lBQy9DLEtBQUssTUFBRU0sSUFBSSxNQUFFQyxPQUFPLE1BQUlQLCtDQUFRLENBQUMsSUFBSTtJQUNyQyxLQUFLLENBQUNRLEtBQUssR0FBR0YsSUFBSTtJQUVsQkwsZ0RBQVMsS0FBTyxDQUFDO1FBQ2YsS0FBSyxDQUFDUSxTQUFTLGFBQWUsQ0FBQztZQUM3QixLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNSLDRDQUFLLENBQ3hCLENBQXNDO1lBRXhDSyxPQUFPLENBQUNHLE1BQU0sQ0FBQ0MsSUFBSTtZQUNuQk4sWUFBWSxDQUFDLEtBQUs7UUFDcEIsQ0FBQztRQUNESSxTQUFTO0lBQ1gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMLEVBQUUsRUFBRUwsU0FBUyxFQUFFLENBQUM7UUFDZCxNQUFNLHNFQUFFUSxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFvQjs7Ozs7OztzQkFBQyxDQUFVOztJQUN2RCxDQUFDO0lBQ0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxLQUFLO0lBQ2pCLE1BQU0sc0VBQ0hJLENBQUc7Ozs7Ozs7dUZBQ0RBLENBQUc7Ozs7Ozs7c0JBQ0RKLEtBQUssQ0FBQ1EsR0FBRyxFQUFFTCxJQUFJLHlFQUNiQyxDQUFHOzs7Ozs7Ozt3QkFDREUsT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUksQ0FBQ00sS0FBSzs2RkFDdEJDLENBQUU7Ozs7Ozs7c0NBQUVQLElBQUksQ0FBQ00sS0FBSzs7O21CQUZQTixJQUFJLENBQUNRLEVBQUU7Ozs7QUFRM0IsQ0FBQztBQUVELGlFQUFlaEIsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3Bvc3RkYXRhcy9ibG9nZGF0YS5qcz8zZWFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IEJsb2dEYXRhID0gKCkgPT4ge1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtCbG9nLCBzZXRCbG9nXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBkYXRhcyA9IEJsb2c7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyhcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2Jsb2cvcG9zdC9cIlxuICAgICAgKTtcbiAgICAgIHNldEJsb2cocmVzdWx0LmRhdGEpO1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWJhY2stbG9hZGluZ1wiPkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cbiAgY29uc29sZS5sb2coZGF0YXMpXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtkYXRhcy5tYXAoKGRhdGEpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17ZGF0YS5pZH0+XG4gICAgICAgICAgICB7Y29uc29sZS5sb2coZGF0YS50aXRsZSl9XG4gICAgICAgICAgICA8aDE+e2RhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dEYXRhOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJCbG9nRGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIkJsb2ciLCJzZXRCbG9nIiwiZGF0YXMiLCJmZXRjaERhdGEiLCJyZXN1bHQiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInRpdGxlIiwiaDEiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/postdatas/blogdata.js\n");

/***/ }),

/***/ "./pages/blog.jsx":
/*!************************!*\
  !*** ./pages/blog.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_api_postdatas_blogdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/api/postdatas/blogdata */ \"./pages/api/postdatas/blogdata.js\");\n\n\n\nconst Blog = ()=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_api_postdatas_blogdata__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/pages/blog.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            },\n            __self: undefined\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtEO0FBQ0k7QUFFdEQsS0FBSyxDQUFDSSxJQUFJLE9BQVMsQ0FBQztJQUNsQixNQUFNO3VGQUVERCxxRUFBUTs7Ozs7Ozs7O0FBR2YsQ0FBQztBQUVELGlFQUFlQyxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nLmpzeD85YTQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmxvZ0RhdGEgZnJvbSAnLi4vcGFnZXMvYXBpL3Bvc3RkYXRhcy9ibG9nZGF0YSdcblxuY29uc3QgQmxvZyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJsb2dEYXRhIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCbG9nRGF0YSIsIkJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog.jsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

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
var __webpack_exports__ = (__webpack_exec__("./pages/blog.jsx"));
module.exports = __webpack_exports__;

})();