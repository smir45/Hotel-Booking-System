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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst BlogData = ()=>{\n    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: Blog , 1: setBlog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const datas = Blog;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const result = await axios__WEBPACK_IMPORTED_MODULE_3___default()(\"http://localhost:8000/api/blog/post/get\");\n            setBlog(result.data);\n            setIsLoading(false);\n        };\n        fetchData();\n    }, []);\n    if (isLoading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"login-back-loading\",\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/blogdata.js\",\n                lineNumber: 21,\n                columnNumber: 12\n            },\n            __self: undefined,\n            children: \"Loading...\"\n        }));\n    }\n    console.log(datas);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/blogdata.js\",\n            lineNumber: 25,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/blogdata.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            },\n            __self: undefined,\n            children: datas.map((data)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/blogdata.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    },\n                    __self: undefined,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        __source: {\n                            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/blogdata.js\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        },\n                        __self: undefined,\n                        children: data.title\n                    })\n                }, data.id)\n            )\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogData);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcG9zdGRhdGFzL2Jsb2dkYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDbEI7QUFDUDtBQUV6QixLQUFLLENBQUNLLFFBQVEsT0FBUyxDQUFDO0lBQ3RCLEtBQUssTUFBRUMsU0FBUyxNQUFFQyxZQUFZLE1BQUlOLCtDQUFRLENBQUMsSUFBSTtJQUMvQyxLQUFLLE1BQUVPLElBQUksTUFBRUMsT0FBTyxNQUFJUiwrQ0FBUSxDQUFDLElBQUk7SUFDckMsS0FBSyxDQUFDUyxLQUFLLEdBQUdGLElBQUk7SUFFbEJOLGdEQUFTLEtBQU8sQ0FBQztRQUNmLEtBQUssQ0FBQ1MsU0FBUyxhQUFlLENBQUM7WUFDN0IsS0FBSyxDQUFDQyxNQUFNLEdBQUcsS0FBSyxDQUFDUiw0Q0FBSyxDQUN4QixDQUF5QztZQUUzQ0ssT0FBTyxDQUFDRyxNQUFNLENBQUNDLElBQUk7WUFDbkJOLFlBQVksQ0FBQyxLQUFLO1FBQ3BCLENBQUM7UUFDREksU0FBUztJQUNYLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxFQUFFLEVBQUVMLFNBQVMsRUFBRSxDQUFDO1FBQ2QsTUFBTSxzRUFBRVEsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBb0I7Ozs7Ozs7c0JBQUMsQ0FBVTs7SUFDdkQsQ0FBQztJQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsS0FBSztJQUNqQixNQUFNLHNFQUNISSxDQUFHOzs7Ozs7O3VGQUNEQSxDQUFHOzs7Ozs7O3NCQUNESixLQUFLLENBQUNRLEdBQUcsRUFBRUwsSUFBSSx3RUFDYkMsQ0FBRzs7Ozs7OzttR0FDREssQ0FBRTs7Ozs7OztrQ0FBRU4sSUFBSSxDQUFDTyxLQUFLOzttQkFEUFAsSUFBSSxDQUFDUSxFQUFFOzs7O0FBTzNCLENBQUM7QUFFRCxpRUFBZWhCLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9wb3N0ZGF0YXMvYmxvZ2RhdGEuanM/M2VhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgQmxvZ0RhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW0Jsb2csIHNldEJsb2ddID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IGRhdGFzID0gQmxvZztcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKFxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYmxvZy9wb3N0L2dldFwiXG4gICAgICApO1xuICAgICAgc2V0QmxvZyhyZXN1bHQuZGF0YSk7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tYmFjay1sb2FkaW5nXCI+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuICBjb25zb2xlLmxvZyhkYXRhcylcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge2RhdGFzLm1hcCgoZGF0YSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtkYXRhLmlkfT5cbiAgICAgICAgICAgIDxoMT57ZGF0YS50aXRsZX08L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZ0RhdGE7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJyb3V0ZXIiLCJheGlvcyIsIkJsb2dEYXRhIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiQmxvZyIsInNldEJsb2ciLCJkYXRhcyIsImZldGNoRGF0YSIsInJlc3VsdCIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaDEiLCJ0aXRsZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/postdatas/blogdata.js\n");

/***/ }),

/***/ "./pages/blog.jsx":
/*!************************!*\
  !*** ./pages/blog.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_api_postdatas_blogdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/api/postdatas/blogdata */ \"./pages/api/postdatas/blogdata.js\");\n\n\n\nconst Blog = ()=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_api_postdatas_blogdata__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/blog.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            },\n            __self: undefined\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtEO0FBQ0k7QUFFdEQsS0FBSyxDQUFDSSxJQUFJLE9BQVMsQ0FBQztJQUNsQixNQUFNO3VGQUVERCxxRUFBUTs7Ozs7Ozs7O0FBR2YsQ0FBQztBQUVELGlFQUFlQyxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nLmpzeD85YTQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmxvZ0RhdGEgZnJvbSAnLi4vcGFnZXMvYXBpL3Bvc3RkYXRhcy9ibG9nZGF0YSdcblxuY29uc3QgQmxvZyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJsb2dEYXRhIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCbG9nRGF0YSIsIkJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog.jsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/blog.jsx"));
module.exports = __webpack_exports__;

})();