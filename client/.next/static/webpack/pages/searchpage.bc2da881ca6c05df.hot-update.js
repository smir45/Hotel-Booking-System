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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\n// fetching data from the server\nvar SearchData = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), Blog = ref1[0], setBlog = ref1[1];\n    var datas = Blog;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchData = _asyncToGenerator(_Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var result;\n            return _Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default()(\"http://localhost:8000/api/blog/post/\");\n                    case 2:\n                        result = _ctx.sent;\n                        setBlog(result.data);\n                        setIsLoading(false);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        fetchData();\n    }, []);\n    if (isLoading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            className: \"login-back-loading\",\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/SearchDatas.js\",\n                lineNumber: 20,\n                columnNumber: 12\n            },\n            __self: _this,\n            children: \"Loading...\"\n        }));\n    }\n    console.log(datas);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/SearchDatas.js\",\n            lineNumber: 24,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/SearchDatas.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: datas.map(function(data) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/SearchDatas.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    },\n                    __self: _this1,\n                    children: [\n                        console.log(data.title),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/SearchDatas.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: data.title\n                        })\n                    ]\n                }, data.id);\n            })\n        })\n    }));\n};\n_s(SearchData, \"sLTXYAAYhGrQ2P9NR4RD88pmiWY=\");\n_c = SearchData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchData);\nvar _c;\n$RefreshReg$(_c, \"SearchData\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcG9zdGRhdGFzL1NlYXJjaERhdGFzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1g7QUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsRUFBZ0M7QUFDaEMsR0FBSyxDQUFDSyxVQUFVLEdBQUcsUUFDbkIsR0FEeUIsQ0FBQzs7O0lBQ3hCLEdBQUssQ0FBNkJKLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXhDSyxTQUFTLEdBQWtCTCxHQUFjLEtBQTlCTSxZQUFZLEdBQUlOLEdBQWM7SUFDaEQsR0FBSyxDQUFtQkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBOUJPLElBQUksR0FBYVAsSUFBYyxLQUF6QlEsT0FBTyxHQUFJUixJQUFjO0lBQ3RDLEdBQUssQ0FBQ1MsS0FBSyxHQUFHRixJQUFJO0lBRWxCTixnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmLEdBQUssQ0FBQ1MsU0FBUyxrTEFBRyxRQUFRLFdBQUksQ0FBQztnQkFDdkJDLE1BQU07Ozs7OytCQUFTUiw0Q0FBSyxDQUFDLENBQXNDOzt3QkFBM0RRLE1BQU07d0JBQ1pILE9BQU8sQ0FBQ0csTUFBTSxDQUFDQyxJQUFJO3dCQUNuQk4sWUFBWSxDQUFDLEtBQUs7Ozs7OztRQUNwQixDQUFDO1FBQ0RJLFNBQVM7SUFDWCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ0wsRUFBRSxFQUFFTCxTQUFTLEVBQUUsQ0FBQztRQUNkLE1BQU0sc0VBQUVRLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQW9COzs7Ozs7O3NCQUFDLENBQVU7O0lBQ3ZELENBQUM7SUFDREMsT0FBTyxDQUFDQyxHQUFHLENBQUNQLEtBQUs7SUFDakIsTUFBTSxzRUFDSEksQ0FBRzs7Ozs7Ozt1RkFDREEsQ0FBRzs7Ozs7OztzQkFDREosS0FBSyxDQUFDUSxHQUFHLENBQUMsUUFBUSxDQUFQTCxJQUFJOzhCQUNkLE1BQU0seURBQUxDLENBQUc7Ozs7Ozs7O3dCQUNERSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSSxDQUFDTSxLQUFLOzZGQUN0QkMsQ0FBRTs7Ozs7OztzQ0FBRVAsSUFBSSxDQUFDTSxLQUFLOzs7bUJBRlBOLElBQUksQ0FBQ1EsRUFBRTs7OztBQVEzQixDQUFDO0dBN0JLaEIsVUFBVTtLQUFWQSxVQUFVO0FBK0JoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FwaS9wb3N0ZGF0YXMvU2VhcmNoRGF0YXMuanM/ZmJjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbi8vIGZldGNoaW5nIGRhdGEgZnJvbSB0aGUgc2VydmVyXG5jb25zdCBTZWFyY2hEYXRhID0gKCkgPT4ge1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtCbG9nLCBzZXRCbG9nXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBkYXRhcyA9IEJsb2c7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyhcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYmxvZy9wb3N0L1wiKTtcbiAgICAgIHNldEJsb2cocmVzdWx0LmRhdGEpO1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1iYWNrLWxvYWRpbmdcIj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG4gIGNvbnNvbGUubG9nKGRhdGFzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge2RhdGFzLm1hcCgoZGF0YSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtkYXRhLmlkfT5cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhkYXRhLnRpdGxlKX1cbiAgICAgICAgICAgIDxoMT57ZGF0YS50aXRsZX08L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoRGF0YTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImF4aW9zIiwiU2VhcmNoRGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIkJsb2ciLCJzZXRCbG9nIiwiZGF0YXMiLCJmZXRjaERhdGEiLCJyZXN1bHQiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInRpdGxlIiwiaDEiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/postdatas/SearchDatas.js\n");

/***/ })

});