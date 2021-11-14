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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst BlogData = ()=>{\n    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: Blog , 1: setBlog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const datas = Blog;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchData() {\n            // try {\n            //   const response = await fetch(\"http://localhost:8000/api/blog/post/\");\n            //   const data = await response.json();\n            //   setBlog(data);\n            //   setIsLoading(false);\n            // } catch (error) {\n            //   setIsLoading(false);\n            // }\n            // fetch data using Axios\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"http://localhost:8000/api/blog/post/\");\n            setBlog(response.data);\n            setIsLoading(false);\n        }\n        fetchData();\n    }, []);\n    if (isLoading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"login-back-loading\",\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/pages/api/postdatas/blogdata.js\",\n                lineNumber: 28,\n                columnNumber: 12\n            },\n            __self: undefined,\n            children: \"Loading...\"\n        }));\n    }\n    console.log(datas);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/pages/api/postdatas/blogdata.js\",\n            lineNumber: 32,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/pages/api/postdatas/blogdata.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            },\n            __self: undefined,\n            children: datas.map((data)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/pages/api/postdatas/blogdata.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    },\n                    __self: undefined,\n                    children: [\n                        console.log(data.title),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/pages/api/postdatas/blogdata.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            },\n                            __self: undefined,\n                            children: data.title\n                        })\n                    ]\n                }, data.id)\n            )\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogData);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcG9zdGRhdGFzL2Jsb2dkYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ3pCO0FBRXpCLEtBQUssQ0FBQ0ksUUFBUSxPQUFTLENBQUM7SUFDdEIsS0FBSyxNQUFFQyxTQUFTLE1BQUVDLFlBQVksTUFBSUwsK0NBQVEsQ0FBQyxJQUFJO0lBQy9DLEtBQUssTUFBRU0sSUFBSSxNQUFFQyxPQUFPLE1BQUlQLCtDQUFRLENBQUMsSUFBSTtJQUNyQyxLQUFLLENBQUNRLEtBQUssR0FBR0YsSUFBSTtJQUVsQkwsZ0RBQVMsS0FBTyxDQUFDO3VCQUNBUSxTQUFTLEdBQUcsQ0FBQztZQUMxQixFQUFRO1lBQ1IsRUFBMEU7WUFDMUUsRUFBd0M7WUFDeEMsRUFBbUI7WUFDbkIsRUFBeUI7WUFDekIsRUFBb0I7WUFDcEIsRUFBeUI7WUFDekIsRUFBSTtZQUNKLEVBQXlCO1lBRXpCLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLEtBQUssQ0FBQ1IsZ0RBQVMsQ0FBQyxDQUFzQztZQUN2RUssT0FBTyxDQUFDRyxRQUFRLENBQUNFLElBQUk7WUFDckJQLFlBQVksQ0FBQyxLQUFLO1FBQ3BCLENBQUM7UUFDREksU0FBUztJQUNYLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxFQUFFLEVBQUVMLFNBQVMsRUFBRSxDQUFDO1FBQ2QsTUFBTSxzRUFBRVMsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBb0I7Ozs7Ozs7c0JBQUMsQ0FBVTs7SUFDdkQsQ0FBQztJQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsS0FBSztJQUNqQixNQUFNLHNFQUNISyxDQUFHOzs7Ozs7O3VGQUNEQSxDQUFHOzs7Ozs7O3NCQUNETCxLQUFLLENBQUNTLEdBQUcsRUFBRUwsSUFBSSx5RUFDYkMsQ0FBRzs7Ozs7Ozs7d0JBQ0RFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixJQUFJLENBQUNNLEtBQUs7NkZBQ3RCQyxDQUFFOzs7Ozs7O3NDQUFFUCxJQUFJLENBQUNNLEtBQUs7OzttQkFGUE4sSUFBSSxDQUFDUSxFQUFFOzs7O0FBUTNCLENBQUM7QUFFRCxpRUFBZWpCLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9wb3N0ZGF0YXMvYmxvZ2RhdGEuanM/M2VhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBCbG9nRGF0YSA9ICgpID0+IHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbQmxvZywgc2V0QmxvZ10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgZGF0YXMgPSBCbG9nO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuICAgICAgLy8gdHJ5IHtcbiAgICAgIC8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYmxvZy9wb3N0L1wiKTtcbiAgICAgIC8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIC8vICAgc2V0QmxvZyhkYXRhKTtcbiAgICAgIC8vICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAvLyB9XG4gICAgICAvLyBmZXRjaCBkYXRhIHVzaW5nIEF4aW9zXG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9ibG9nL3Bvc3QvXCIpO1xuICAgICAgc2V0QmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1iYWNrLWxvYWRpbmdcIj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG4gIGNvbnNvbGUubG9nKGRhdGFzKVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7ZGF0YXMubWFwKChkYXRhKSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2RhdGEuaWR9PlxuICAgICAgICAgICAge2NvbnNvbGUubG9nKGRhdGEudGl0bGUpfVxuICAgICAgICAgICAgPGgxPntkYXRhLnRpdGxlfTwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nRGF0YTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiQmxvZ0RhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJCbG9nIiwic2V0QmxvZyIsImRhdGFzIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInRpdGxlIiwiaDEiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/postdatas/blogdata.js\n");

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