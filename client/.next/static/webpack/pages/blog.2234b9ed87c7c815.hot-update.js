"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/api/postdatas/blogdata.js":
/*!*****************************************!*\
  !*** ./pages/api/postdatas/blogdata.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ctrlscrpt_Documents_finalyearproject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_ctrlscrpt_Documents_finalyearproject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ctrlscrpt_Documents_finalyearproject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar BlogData = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), Blog = ref1[0], setBlog = ref1[1];\n    var datas = Blog;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchData = _asyncToGenerator(_Users_ctrlscrpt_Documents_finalyearproject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var result;\n            return _Users_ctrlscrpt_Documents_finalyearproject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default()(\"localhost:8000/api/auth/user/\");\n                    case 2:\n                        result = _ctx.sent;\n                        setBlog(result.data);\n                        setIsLoading(false);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        fetchData();\n    }, []);\n    if (isLoading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            className: \"login-back-loading\",\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/pages/api/postdatas/blogdata.js\",\n                lineNumber: 20,\n                columnNumber: 12\n            },\n            __self: _this,\n            children: \"Loading...\"\n        }));\n    }\n    console.log(datas);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/pages/api/postdatas/blogdata.js\",\n            lineNumber: 24,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/pages/api/postdatas/blogdata.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: datas.map(function(data) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/pages/api/postdatas/blogdata.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    },\n                    __self: _this1,\n                    children: [\n                        console.log(data.title),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/pages/api/postdatas/blogdata.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: data.title\n                        })\n                    ]\n                }, data.id);\n            })\n        })\n    }));\n};\n_s(BlogData, \"sLTXYAAYhGrQ2P9NR4RD88pmiWY=\");\n_c = BlogData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogData);\nvar _c;\n$RefreshReg$(_c, \"BlogData\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcG9zdGRhdGFzL2Jsb2dkYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRDtBQUN6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsR0FBSyxDQUFDSSxRQUFRLEdBQUcsUUFDakIsR0FEdUIsQ0FBQzs7O0lBQ3RCLEdBQUssQ0FBNkJILEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXhDSSxTQUFTLEdBQWtCSixHQUFjLEtBQTlCSyxZQUFZLEdBQUlMLEdBQWM7SUFDaEQsR0FBSyxDQUFtQkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBOUJNLElBQUksR0FBYU4sSUFBYyxLQUF6Qk8sT0FBTyxHQUFJUCxJQUFjO0lBQ3RDLEdBQUssQ0FBQ1EsS0FBSyxHQUFHRixJQUFJO0lBRWxCTCxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmLEdBQUssQ0FBQ1EsU0FBUyxrTEFBRyxRQUFRLFdBQUksQ0FBQztnQkFDdkJDLE1BQU07Ozs7OytCQUFTUiw0Q0FBSyxDQUN4QixDQUErQjs7d0JBRDNCUSxNQUFNO3dCQUdaSCxPQUFPLENBQUNHLE1BQU0sQ0FBQ0MsSUFBSTt3QkFDbkJOLFlBQVksQ0FBQyxLQUFLOzs7Ozs7UUFDcEIsQ0FBQztRQUNESSxTQUFTO0lBQ1gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMLEVBQUUsRUFBRUwsU0FBUyxFQUFFLENBQUM7UUFDZCxNQUFNLHNFQUFFUSxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFvQjs7Ozs7OztzQkFBQyxDQUFVOztJQUN2RCxDQUFDO0lBQ0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxLQUFLO0lBQ2pCLE1BQU0sc0VBQ0hJLENBQUc7Ozs7Ozs7dUZBQ0RBLENBQUc7Ozs7Ozs7c0JBQ0RKLEtBQUssQ0FBQ1EsR0FBRyxDQUFDLFFBQVEsQ0FBUEwsSUFBSTs4QkFDZCxNQUFNLHlEQUFMQyxDQUFHOzs7Ozs7Ozt3QkFDREUsT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUksQ0FBQ00sS0FBSzs2RkFDdEJDLENBQUU7Ozs7Ozs7c0NBQUVQLElBQUksQ0FBQ00sS0FBSzs7O21CQUZQTixJQUFJLENBQUNRLEVBQUU7Ozs7QUFRM0IsQ0FBQztHQS9CS2hCLFFBQVE7S0FBUkEsUUFBUTtBQWlDZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FwaS9wb3N0ZGF0YXMvYmxvZ2RhdGEuanM/M2VhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBCbG9nRGF0YSA9ICgpID0+IHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbQmxvZywgc2V0QmxvZ10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgZGF0YXMgPSBCbG9nO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MoXG4gICAgICAgIFwibG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvdXNlci9cIlxuICAgICAgKTtcbiAgICAgIHNldEJsb2cocmVzdWx0LmRhdGEpO1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWJhY2stbG9hZGluZ1wiPkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cbiAgY29uc29sZS5sb2coZGF0YXMpXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtkYXRhcy5tYXAoKGRhdGEpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17ZGF0YS5pZH0+XG4gICAgICAgICAgICB7Y29uc29sZS5sb2coZGF0YS50aXRsZSl9XG4gICAgICAgICAgICA8aDE+e2RhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dEYXRhOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJCbG9nRGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIkJsb2ciLCJzZXRCbG9nIiwiZGF0YXMiLCJmZXRjaERhdGEiLCJyZXN1bHQiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInRpdGxlIiwiaDEiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/postdatas/blogdata.js\n");

/***/ })

});