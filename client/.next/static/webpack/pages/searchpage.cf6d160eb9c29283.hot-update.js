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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar SearchDatas = function() {\n    var _this1 = _this;\n    _s();\n    onst[isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), Blog = ref[0], setBlog = ref[1];\n    var datas = Blog;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchData = function fetchData() {\n            return _fetchData.apply(this, arguments);\n        };\n        function _fetchData() {\n            _fetchData = _asyncToGenerator(_Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response, data;\n                return _Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return fetch(\"http://localhost:8000/api/blog/post/get\");\n                        case 3:\n                            response = _ctx.sent;\n                            _ctx.next = 6;\n                            return response.json();\n                        case 6:\n                            data = _ctx.sent;\n                            setBlog(data);\n                            setIsLoading(false);\n                            _ctx.next = 14;\n                            break;\n                        case 11:\n                            _ctx.prev = 11;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            setIsLoading(false);\n                        case 14:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        11\n                    ]\n                ]);\n            }));\n            return _fetchData.apply(this, arguments);\n        }\n        fetchData();\n    }, []);\n    if (isLoading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            className: \"login-back-loading\",\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/SearchDatas.js\",\n                lineNumber: 24,\n                columnNumber: 12\n            },\n            __self: _this,\n            children: \"Loading...\"\n        }));\n    }\n    console.log(datas);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/SearchDatas.js\",\n            lineNumber: 28,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/SearchDatas.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: datas.map(function(data) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/SearchDatas.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    },\n                    __self: _this1,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                        __source: {\n                            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/SearchDatas.js\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        },\n                        __self: _this1,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/api/postdatas/SearchDatas.js\",\n                                lineNumber: 33,\n                                columnNumber: 17\n                            },\n                            __self: _this1,\n                            children: data.title\n                        })\n                    })\n                }, data.id);\n            })\n        })\n    }));\n};\n_s(SearchDatas, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = SearchDatas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchDatas);\nvar _c;\n$RefreshReg$(_c, \"SearchDatas\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcG9zdGRhdGFzL1NlYXJjaERhdGFzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1g7QUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsR0FBSyxDQUFDSyxXQUFXLEdBQUcsUUFDcEIsR0FEMEIsQ0FBQzs7O0lBQ3pCQyxJQUFJLENBQUVDLFNBQVMsRUFBRUMsWUFBWSxJQUFLUCwrQ0FBUSxDQUFDLElBQUk7SUFDL0MsR0FBSyxDQUFtQkEsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBOUJRLElBQUksR0FBYVIsR0FBYyxLQUF6QlMsT0FBTyxHQUFJVCxHQUFjO0lBQ3RDLEdBQUssQ0FBQ1UsS0FBSyxHQUFHRixJQUFJO0lBRWxCUCxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztZQUNBVSxTQUFTLEdBQXhCLFFBQVEsQ0FBT0EsU0FBUzttQkFBVEEsVUFBUzs7aUJBQVRBLFVBQVM7WUFBVEEsVUFBUyxrTEFBeEIsUUFBUSxXQUFtQixDQUFDO29CQUVsQkMsUUFBUSxFQUNSQyxJQUFJOzs7Ozs7bUNBRGFDLEtBQUssQ0FBQyxDQUF5Qzs7NEJBQWhFRixRQUFROzttQ0FDS0EsUUFBUSxDQUFDRyxJQUFJOzs0QkFBMUJGLElBQUk7NEJBQ1ZKLE9BQU8sQ0FBQ0ksSUFBSTs0QkFDWk4sWUFBWSxDQUFDLEtBQUs7Ozs7Ozs0QkFFbEJBLFlBQVksQ0FBQyxLQUFLOzs7Ozs7Ozs7OztZQUV0QixDQUFDO21CQVRjSSxVQUFTOztRQVV4QkEsU0FBUztJQUNYLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxFQUFFLEVBQUVMLFNBQVMsRUFBRSxDQUFDO1FBQ2QsTUFBTSxzRUFBRVUsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBb0I7Ozs7Ozs7c0JBQUMsQ0FBVTs7SUFDdkQsQ0FBQztJQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsS0FBSztJQUNqQixNQUFNLHNFQUNITSxDQUFHOzs7Ozs7O3VGQUNEQSxDQUFHOzs7Ozs7O3NCQUNETixLQUFLLENBQUNVLEdBQUcsQ0FBQyxRQUFRLENBQVBQLElBQUk7OEJBQ2QsTUFBTSx3REFBTEcsQ0FBRzs7Ozs7OzttR0FDREEsQ0FBRzs7Ozs7Ozt1R0FDQ0ssQ0FBRTs7Ozs7OztzQ0FBRVIsSUFBSSxDQUFDUyxLQUFLOzs7bUJBRlhULElBQUksQ0FBQ1UsRUFBRTs7OztBQVMzQixDQUFDO0dBbkNLbkIsV0FBVztLQUFYQSxXQUFXO0FBcUNqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FwaS9wb3N0ZGF0YXMvU2VhcmNoRGF0YXMuanM/ZmJjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IFNlYXJjaERhdGFzID0gKCkgPT4ge1xuICBvbnN0Wyhpc0xvYWRpbmcsIHNldElzTG9hZGluZyldID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtCbG9nLCBzZXRCbG9nXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBkYXRhcyA9IEJsb2c7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9ibG9nL3Bvc3QvZ2V0XCIpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRCbG9nKGRhdGEpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWJhY2stbG9hZGluZ1wiPkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cbiAgY29uc29sZS5sb2coZGF0YXMpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7ZGF0YXMubWFwKChkYXRhKSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2RhdGEuaWR9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+e2RhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoRGF0YXM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImF4aW9zIiwiU2VhcmNoRGF0YXMiLCJvbnN0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiQmxvZyIsInNldEJsb2ciLCJkYXRhcyIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZGF0YSIsImZldGNoIiwianNvbiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJoMSIsInRpdGxlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/postdatas/SearchDatas.js\n");

/***/ })

});