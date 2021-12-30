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
exports.id = "pages/hotels";
exports.ids = ["pages/hotels"];
exports.modules = {

/***/ "./pages/hotels.jsx":
/*!**************************!*\
  !*** ./pages/hotels.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst searchDatas = ()=>{\n    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { 0: search , 1: setBlog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const datas = search;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const result = await axios__WEBPACK_IMPORTED_MODULE_3___default()(\"http://localhost:8000/api/blog/hotels\");\n            setBlog(result.data);\n            setIsLoading(false);\n        };\n        fetchData();\n    }, []);\n    if (isLoading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"login-back-loading\",\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/hotels.jsx\",\n                lineNumber: 19,\n                columnNumber: 12\n            },\n            __self: undefined,\n            children: \"Loading...\"\n        }));\n    }\n    console.log(datas);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/hotels.jsx\",\n            lineNumber: 23,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/hotels.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            },\n            __self: undefined,\n            children: datas.map((data)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/hotels.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    },\n                    __self: undefined,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/hotels.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            },\n                            __self: undefined,\n                            children: data.name\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/hotels.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            },\n                            __self: undefined,\n                            children: data.description\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/hotels.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            },\n                            __self: undefined,\n                            children: data.country\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/hotels.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            },\n                            __self: undefined,\n                            children: data.city\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/hotels.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            },\n                            __self: undefined,\n                            children: [\n                                \"hearts: \",\n                                data.hearts\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/hotels.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            },\n                            __self: undefined,\n                            children: [\n                                \"Price: \",\n                                data.price\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/hotels.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            },\n                            __self: undefined,\n                            children: [\n                                \"Stars: \",\n                                data.stars\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/hotels.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            },\n                            __self: undefined,\n                            children: [\n                                \"Reviews: \",\n                                data.reviews\n                            ]\n                        })\n                    ]\n                }, data.id)\n            )\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchDatas);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob3RlbHMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDbEI7QUFDUDtBQUV6QixLQUFLLENBQUNLLFdBQVcsT0FBUyxDQUFDO0lBQ3pCLEtBQUssTUFBRUMsU0FBUyxNQUFFQyxZQUFZLE1BQUlOLCtDQUFRLENBQUMsSUFBSTtJQUMvQyxLQUFLLE1BQUVPLE1BQU0sTUFBRUMsT0FBTyxNQUFJUiwrQ0FBUSxDQUFDLElBQUk7SUFDdkMsS0FBSyxDQUFDUyxLQUFLLEdBQUdGLE1BQU07SUFFcEJOLGdEQUFTLEtBQU8sQ0FBQztRQUNmLEtBQUssQ0FBQ1MsU0FBUyxhQUFlLENBQUM7WUFDN0IsS0FBSyxDQUFDQyxNQUFNLEdBQUcsS0FBSyxDQUFDUiw0Q0FBSyxDQUFDLENBQXVDO1lBQ2xFSyxPQUFPLENBQUNHLE1BQU0sQ0FBQ0MsSUFBSTtZQUNuQk4sWUFBWSxDQUFDLEtBQUs7UUFDcEIsQ0FBQztRQUNESSxTQUFTO0lBQ1gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMLEVBQUUsRUFBRUwsU0FBUyxFQUFFLENBQUM7UUFDZCxNQUFNLHNFQUFFUSxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFvQjs7Ozs7OztzQkFBQyxDQUFVOztJQUN2RCxDQUFDO0lBQ0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxLQUFLO0lBQ2pCLE1BQU0sc0VBQ0hJLENBQUc7Ozs7Ozs7dUZBQ0RBLENBQUc7Ozs7Ozs7c0JBQ0RKLEtBQUssQ0FBQ1EsR0FBRyxFQUFFTCxJQUFJLHlFQUNiQyxDQUFHOzs7Ozs7Ozs2RkFDREssQ0FBRTs7Ozs7OztzQ0FBRU4sSUFBSSxDQUFDTyxJQUFJOzs2RkFDYkQsQ0FBRTs7Ozs7OztzQ0FBRU4sSUFBSSxDQUFDUSxXQUFXOzs2RkFDcEJDLENBQUM7Ozs7Ozs7c0NBQUVULElBQUksQ0FBQ1UsT0FBTzs7NkZBQ2ZELENBQUM7Ozs7Ozs7c0NBQUVULElBQUksQ0FBQ1csSUFBSTs7OEZBQ1pGLENBQUM7Ozs7Ozs7O2dDQUFDLENBQVE7Z0NBQUNULElBQUksQ0FBQ1ksTUFBTTs7OzhGQUN0QkgsQ0FBQzs7Ozs7Ozs7Z0NBQUMsQ0FBTztnQ0FBQ1QsSUFBSSxDQUFDYSxLQUFLOzs7OEZBQ3BCSixDQUFDOzs7Ozs7OztnQ0FBQyxDQUFPO2dDQUFDVCxJQUFJLENBQUNjLEtBQUs7Ozs4RkFDcEJMLENBQUM7Ozs7Ozs7O2dDQUFDLENBQVM7Z0NBQUNULElBQUksQ0FBQ2UsT0FBTzs7OzttQkFSakJmLElBQUksQ0FBQ2dCLEVBQUU7Ozs7QUFjM0IsQ0FBQztBQUVELGlFQUFleEIsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG90ZWxzLmpzeD9iZGEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBzZWFyY2hEYXRhcyA9ICgpID0+IHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc2VhcmNoLCBzZXRCbG9nXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBkYXRhcyA9IHNlYXJjaDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9ibG9nL2hvdGVsc1wiKTtcbiAgICAgIHNldEJsb2cocmVzdWx0LmRhdGEpO1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1iYWNrLWxvYWRpbmdcIj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG4gIGNvbnNvbGUubG9nKGRhdGFzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge2RhdGFzLm1hcCgoZGF0YSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtkYXRhLmlkfT5cbiAgICAgICAgICAgIDxoMT57ZGF0YS5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8aDE+e2RhdGEuZGVzY3JpcHRpb259PC9oMT5cbiAgICAgICAgICAgIDxwPntkYXRhLmNvdW50cnl9PC9wPlxuICAgICAgICAgICAgPHA+e2RhdGEuY2l0eX08L3A+XG4gICAgICAgICAgICA8cD5oZWFydHM6IHtkYXRhLmhlYXJ0c308L3A+XG4gICAgICAgICAgICA8cD5QcmljZToge2RhdGEucHJpY2V9PC9wPlxuICAgICAgICAgICAgPHA+U3RhcnM6IHtkYXRhLnN0YXJzfTwvcD5cbiAgICAgICAgICAgIDxwPlJldmlld3M6IHtkYXRhLnJldmlld3N9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoRGF0YXM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInJvdXRlciIsImF4aW9zIiwic2VhcmNoRGF0YXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzZWFyY2giLCJzZXRCbG9nIiwiZGF0YXMiLCJmZXRjaERhdGEiLCJyZXN1bHQiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImgxIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicCIsImNvdW50cnkiLCJjaXR5IiwiaGVhcnRzIiwicHJpY2UiLCJzdGFycyIsInJldmlld3MiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/hotels.jsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/hotels.jsx"));
module.exports = __webpack_exports__;

})();