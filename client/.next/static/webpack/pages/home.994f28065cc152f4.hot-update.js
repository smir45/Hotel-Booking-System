"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./components/componentsFiles/DashComponents/trendingDashboard.jsx":
/*!*************************************************************************!*\
  !*** ./components/componentsFiles/DashComponents/trendingDashboard.jsx ***!
  \*************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toast-notifications */ \"./node_modules/react-toast-notifications/dist/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined, _this1 = undefined;\nvar _s = $RefreshSig$();\nvar DashboardTrendingElements = function() {\n    var _this2 = _this;\n    _s();\n    var addToast = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__.useToasts)().addToast;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), trending = ref1[0], setTrending = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), error = ref2[0], setError = ref2[1];\n    var datas = trending;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var getCookie = function getCookie(name) {\n            var nameEQ = name + \"=\";\n            var ca = document.cookie.split(\";\");\n            for(var i = 0; i < ca.length; i++){\n                var c = ca[i];\n                while(c.charAt(0) == \" \")c = c.substring(1, c.length);\n                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);\n            }\n            return null;\n        };\n        var fetchData = _asyncToGenerator(_Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var result;\n            return _Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default()(\"http://localhost:8000/api/blog/hotels\");\n                    case 2:\n                        result = _ctx.sent;\n                        setTrending(result.data);\n                        setIsLoading(false);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        fetchData();\n        if (!getCookie(\"token\")) {\n            addToast(\"Please Login to Continue\", {\n                appearance: \"error\"\n            });\n            return next_router__WEBPACK_IMPORTED_MODULE_5___default().push(\"/login\");\n        }\n    }, []);\n    if (isLoading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            className: \"login-back-loading\",\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                lineNumber: 40,\n                columnNumber: 12\n            },\n            __self: _this,\n            children: \"Loading...\"\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"main\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n            lineNumber: 43,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            className: \"flex w-11/12 mx-auto md:flex-col sm:flex-col xsm:flex-col lg:w-10/12 xl:mx-auto lg:flex-row sm:w-8/12 xsm:w-4/5\",\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: datas.map(function(data) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                    class: \"max-w-xs mx-2 overflow-hidden rounded-lg shadow-2xl sm:my-5 xsm:my-5 md:my-5 lg:my-2 dark:bg-gray-800\",\n                    __source: {\n                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    },\n                    __self: _this2,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                            class: \"px-4 py-2\",\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            },\n                            __self: _this2,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                                    class: \"text-3xl text-primary font-bold text-gray-800 uppercase dark:text-white\",\n                                    __source: {\n                                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this2,\n                                    children: \"NIKE AIR\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                                    class: \"mt-1 text-sm text-gray-600 dark:text-gray-400\",\n                                    __source: {\n                                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this2,\n                                    children: data.description\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"img\", {\n                            class: \"object-cover w-full h-48 mt-2\",\n                            src: data.image,\n                            alt: \"NIKE AIR\",\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            },\n                            __self: _this2\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                            class: \"flex items-center justify-between px-4 py-2 bg-gray-900\",\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            },\n                            __self: _this2,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"h1\", {\n                                    class: \"text-lg font-bold text-white\",\n                                    __source: {\n                                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this2,\n                                    children: [\n                                        \"$\",\n                                        data.price\n                                    ]\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                                    class: \"px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-red-200 focus:bg-gray-400 focus:outline-none\",\n                                    __source: {\n                                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this2,\n                                    children: \"Add to cart\"\n                                })\n                            ]\n                        })\n                    ]\n                }, data.id);\n            })\n        })\n    }));\n};\n_s(DashboardTrendingElements, \"/Vp2DT53VOlJDKQuzZnafy+AUJU=\", false, function() {\n    return [\n        react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__.useToasts\n    ];\n});\n_c = DashboardTrendingElements;\nvar DashboardTrending = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n            lineNumber: 102,\n            columnNumber: 5\n        },\n        __self: _this1,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DashboardTrendingElements, {\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            },\n            __self: _this1\n        })\n    }));\n};\n_c1 = DashboardTrending;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardTrending);\nvar _c, _c1;\n$RefreshReg$(_c, \"DashboardTrendingElements\");\n$RefreshReg$(_c1, \"DashboardTrending\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbXBvbmVudHNGaWxlcy9EYXNoQ29tcG9uZW50cy90cmVuZGluZ0Rhc2hib2FyZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDekI7QUFDRztBQUNJO0FBQ3FCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRCxHQUFLLENBQUNPLHlCQUF5QixHQUFHLFFBQ2xDLEdBRHdDLENBQUM7OztJQUN2QyxHQUFLLENBQUdDLFFBQVEsR0FBS0Ysb0VBQVMsR0FBdEJFLFFBQVE7SUFDaEIsR0FBSyxDQUE2QlAsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBeENRLFNBQVMsR0FBa0JSLEdBQWMsS0FBOUJTLFlBQVksR0FBSVQsR0FBYztJQUNoRCxHQUFLLENBQTJCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF0Q1UsUUFBUSxHQUFpQlYsSUFBYyxLQUE3QlcsV0FBVyxHQUFJWCxJQUFjO0lBQzlDLEdBQUssQ0FBcUJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQWhDWSxLQUFLLEdBQWNaLElBQWMsS0FBMUJhLFFBQVEsR0FBSWIsSUFBYztJQUN4QyxHQUFLLENBQUNjLEtBQUssR0FBR0osUUFBUTtJQUV0QlQsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7WUFRTmMsU0FBUyxHQUFsQixRQUFRLENBQUNBLFNBQVMsQ0FBQ0MsSUFBSSxFQUFFLENBQUM7WUFDeEIsR0FBRyxDQUFDQyxNQUFNLEdBQUdELElBQUksR0FBRyxDQUFHO1lBQ3ZCLEdBQUcsQ0FBQ0UsRUFBRSxHQUFHQyxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUc7WUFDbEMsR0FBRyxDQUFFLEdBQUcsQ0FBQ0MsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSixFQUFFLENBQUNLLE1BQU0sRUFBRUQsQ0FBQyxHQUFJLENBQUM7Z0JBQ25DLEdBQUcsQ0FBQ0UsQ0FBQyxHQUFHTixFQUFFLENBQUNJLENBQUM7c0JBQ0xFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFHLEdBQUVELENBQUMsR0FBR0EsQ0FBQyxDQUFDRSxTQUFTLENBQUMsQ0FBQyxFQUFFRixDQUFDLENBQUNELE1BQU07Z0JBQ3RELEVBQUUsRUFBRUMsQ0FBQyxDQUFDRyxPQUFPLENBQUNWLE1BQU0sS0FBSyxDQUFDLEVBQUUsTUFBTSxDQUFDTyxDQUFDLENBQUNFLFNBQVMsQ0FBQ1QsTUFBTSxDQUFDTSxNQUFNLEVBQUVDLENBQUMsQ0FBQ0QsTUFBTTtZQUN4RSxDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUk7UUFDYixDQUFDO1FBaEJELEdBQUssQ0FBQ0ssU0FBUyxrTEFBRyxRQUFRLFdBQUksQ0FBQztnQkFDdkJDLE1BQU07Ozs7OytCQUFTM0IsNENBQUssQ0FBQyxDQUF1Qzs7d0JBQTVEMkIsTUFBTTt3QkFDWmxCLFdBQVcsQ0FBQ2tCLE1BQU0sQ0FBQ0MsSUFBSTt3QkFDdkJyQixZQUFZLENBQUMsS0FBSzs7Ozs7O1FBQ3BCLENBQUM7UUFFRG1CLFNBQVM7UUFZVCxFQUFFLEdBQUdiLFNBQVMsQ0FBQyxDQUFPLFNBQUcsQ0FBQztZQUN4QlIsUUFBUSxDQUFDLENBQTBCLDJCQUFFLENBQUM7Z0JBQUN3QixVQUFVLEVBQUUsQ0FBTztZQUFDLENBQUM7WUFDNUQsTUFBTSxDQUFDM0IsdURBQVcsQ0FBQyxDQUFRO1FBQzdCLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsRUFBRSxFQUFFSSxTQUFTLEVBQUUsQ0FBQztRQUNkLE1BQU0sc0VBQUV5QixDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFvQjs7Ozs7OztzQkFBQyxDQUFVOztJQUN2RCxDQUFDO0lBQ0QsTUFBTSxzRUFDSEMsQ0FBSTs7Ozs7Ozt1RkFvQ0ZGLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQWlIOzs7Ozs7O3NCQUM3SHBCLEtBQUssQ0FBQ3NCLEdBQUcsQ0FBQyxRQUFRLENBQVBOLElBQUk7OEJBQ2QsTUFBTSx5REFBTEcsQ0FBRztvQkFBQ0ksS0FBSyxFQUFDLENBQXVHOzs7Ozs7Ozs4RkFDakhKLENBQUc7NEJBQUNJLEtBQUssRUFBQyxDQUFXOzs7Ozs7OztxR0FDakJDLENBQUU7b0NBQUNELEtBQUssRUFBQyxDQUF5RTs7Ozs7Ozs4Q0FBQyxDQUFROztxR0FDM0ZFLENBQUM7b0NBQUNGLEtBQUssRUFBQyxDQUErQzs7Ozs7Ozs4Q0FBRVAsSUFBSSxDQUFDVSxXQUFXOzs7OzZGQUc3RUMsQ0FBRzs0QkFBQ0osS0FBSyxFQUFDLENBQStCOzRCQUFDSyxHQUFHLEVBQUVaLElBQUksQ0FBQ2EsS0FBSzs0QkFBRUMsR0FBRyxFQUFDLENBQVU7Ozs7Ozs7OzhGQUV6RVgsQ0FBRzs0QkFBQ0ksS0FBSyxFQUFDLENBQXlEOzs7Ozs7OztzR0FDL0RDLENBQUU7b0NBQUNELEtBQUssRUFBQyxDQUE4Qjs7Ozs7Ozs7d0NBQUMsQ0FBQzt3Q0FBQ1AsSUFBSSxDQUFDZSxLQUFLOzs7cUdBQ3BEQyxDQUFNO29DQUFDVCxLQUFLLEVBQUMsQ0FBeUs7Ozs7Ozs7OENBQUMsQ0FBVzs7Ozs7bUJBVi9FUCxJQUFJLENBQUNpQixFQUFFOzs7O0FBaUJ6SSxDQUFDO0dBM0ZLekMseUJBQXlCOztRQUNSRCxnRUFBUzs7O0tBRDFCQyx5QkFBeUI7QUE2Ri9CLEdBQUssQ0FBQzBDLGlCQUFpQixHQUFHLFFBQzFCLEdBRGdDLENBQUM7SUFDL0IsTUFBTSxzRUFDSGYsQ0FBRzs7Ozs7Ozt1RkFDRDNCLHlCQUF5Qjs7Ozs7Ozs7O0FBR2hDLENBQUM7TUFOSzBDLGlCQUFpQjtBQVF2QiwrREFBZUEsaUJBQWlCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21wb25lbnRzRmlsZXMvRGFzaENvbXBvbmVudHMvdHJlbmRpbmdEYXNoYm9hcmQuanN4PzdhYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VUb2FzdHMgfSBmcm9tIFwicmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9uc1wiO1xuXG5jb25zdCBEYXNoYm9hcmRUcmVuZGluZ0VsZW1lbnRzID0gKCkgPT4ge1xuICBjb25zdCB7IGFkZFRvYXN0IH0gPSB1c2VUb2FzdHMoKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbdHJlbmRpbmcsIHNldFRyZW5kaW5nXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBkYXRhcyA9IHRyZW5kaW5nO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2Jsb2cvaG90ZWxzXCIpO1xuICAgICAgc2V0VHJlbmRpbmcocmVzdWx0LmRhdGEpO1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gICAgZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUpIHtcbiAgICAgIHZhciBuYW1lRVEgPSBuYW1lICsgXCI9XCI7XG4gICAgICB2YXIgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYyA9IGNhW2ldO1xuICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gXCIgXCIpIGMgPSBjLnN1YnN0cmluZygxLCBjLmxlbmd0aCk7XG4gICAgICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PSAwKSByZXR1cm4gYy5zdWJzdHJpbmcobmFtZUVRLmxlbmd0aCwgYy5sZW5ndGgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCFnZXRDb29raWUoXCJ0b2tlblwiKSkge1xuICAgICAgYWRkVG9hc3QoXCJQbGVhc2UgTG9naW4gdG8gQ29udGludWVcIiwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XG4gICAgICByZXR1cm4gcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWJhY2stbG9hZGluZ1wiPkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteS01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMnhsIHRleHQtcHJpbWFyeSBteC1hdXRvXCI+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItYi00IHB5LTIgcHgtNCBib3JkZXItcG1yeSBteC1hdXRvIG15LTUgdXBwZXJjYXNlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcImZpdC1jb250ZW50XCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB1cGNvbW1pbmdcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInAtMiBmb250LWV4dHJhYm9sZCB0ZXh0LTV4bCB0ZXh0LWNlbnRlciBtYi01XCI+XG4gICAgICAgICAgICBGZWF0dXJlIFRvdXJzXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWZsb3ctcm93IGdyaWQtY29scy01IG9yZGVyLTUgZ2FwLTIgdy00LzUgbXgtYXV0b1wiPlxuICAgICAgICAgIHtkYXRhcy5tYXAoKGRhdGEpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtkYXRhLmlkfT4gXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob3RlbC9bc2x1Z11cIiBhcz17YC9ob3RlbC8ke2RhdGEuc2x1Z31gfSBjbGFzc05hbWU9XCJob3ZlcjpjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgey8qIDxhIGhyZWY9XCJcIj4gKi99XG4gICAgICB7LyogPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIGJvcmRlciBiZy1ncmF5LTYwMCByb3VuZGVkLTN4bFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIzNTBweFwiLCBtYXhXaWR0aDogXCIyNTBweFwiIH19XG4gICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIDwvYT4gKi99XG4gICAgICB7LyogPC9MaW5rPlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy0xMS8xMiBteC1hdXRvIG1kOmZsZXgtY29sIHNtOmZsZXgtY29sIHhzbTpmbGV4LWNvbCBsZzp3LTEwLzEyIHhsOm14LWF1dG8gbGc6ZmxleC1yb3cgc206dy04LzEyIHhzbTp3LTQvNVwiPlxuICAgICAgICB7ZGF0YXMubWFwKChkYXRhKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1heC13LXhzIG14LTIgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgc2hhZG93LTJ4bCBzbTpteS01IHhzbTpteS01IG1kOm15LTUgbGc6bXktMiBkYXJrOmJnLWdyYXktODAwXCIga2V5PXtkYXRhLmlkfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtNCBweS0yXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQtM3hsIHRleHQtcHJpbWFyeSBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCB1cHBlcmNhc2UgZGFyazp0ZXh0LXdoaXRlXCI+TklLRSBBSVI8L2gxPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cIm10LTEgdGV4dC1zbSB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgICAgPGltZyBjbGFzcz1cIm9iamVjdC1jb3ZlciB3LWZ1bGwgaC00OCBtdC0yXCIgc3JjPXtkYXRhLmltYWdlfSBhbHQ9XCJOSUtFIEFJUlwiLz5cbiAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC00IHB5LTIgYmctZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC13aGl0ZVwiPiR7ZGF0YS5wcmljZX08L2gxPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHgtMiBweS0xIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIHVwcGVyY2FzZSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgdHJhbnNmb3JtIGJnLXdoaXRlIHJvdW5kZWQgaG92ZXI6YmctcmVkLTIwMCBmb2N1czpiZy1ncmF5LTQwMCBmb2N1czpvdXRsaW5lLW5vbmVcIj5BZGQgdG8gY2FydDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuY29uc3QgRGFzaGJvYXJkVHJlbmRpbmcgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxEYXNoYm9hcmRUcmVuZGluZ0VsZW1lbnRzIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRUcmVuZGluZztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJMaW5rIiwicm91dGVyIiwidXNlVG9hc3RzIiwiRGFzaGJvYXJkVHJlbmRpbmdFbGVtZW50cyIsImFkZFRvYXN0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidHJlbmRpbmciLCJzZXRUcmVuZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJkYXRhcyIsImdldENvb2tpZSIsIm5hbWUiLCJuYW1lRVEiLCJjYSIsImRvY3VtZW50IiwiY29va2llIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwiYyIsImNoYXJBdCIsInN1YnN0cmluZyIsImluZGV4T2YiLCJmZXRjaERhdGEiLCJyZXN1bHQiLCJkYXRhIiwiYXBwZWFyYW5jZSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwibWFwIiwiY2xhc3MiLCJoMSIsInAiLCJkZXNjcmlwdGlvbiIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwicHJpY2UiLCJidXR0b24iLCJpZCIsIkRhc2hib2FyZFRyZW5kaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/componentsFiles/DashComponents/trendingDashboard.jsx\n");

/***/ })

});