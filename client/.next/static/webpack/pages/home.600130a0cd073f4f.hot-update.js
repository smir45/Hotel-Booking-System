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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toast-notifications */ \"./node_modules/react-toast-notifications/dist/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined, _this1 = undefined;\nvar _s = $RefreshSig$();\nvar DashboardTrendingElements = function() {\n    var _this2 = _this;\n    _s();\n    var addToast = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__.useToasts)().addToast;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), trending = ref1[0], setTrending = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), error = ref2[0], setError = ref2[1];\n    var datas = trending;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var getCookie = function getCookie(name) {\n            var nameEQ = name + \"=\";\n            var ca = document.cookie.split(\";\");\n            for(var i = 0; i < ca.length; i++){\n                var c = ca[i];\n                while(c.charAt(0) == \" \")c = c.substring(1, c.length);\n                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);\n            }\n            return null;\n        };\n        var fetchData = _asyncToGenerator(_Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var result;\n            return _Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default()(\"http://localhost:8000/api/blog/hotels\");\n                    case 2:\n                        result = _ctx.sent;\n                        setTrending(result.data);\n                        setIsLoading(false);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        fetchData();\n        if (!getCookie(\"token\")) {\n            addToast(\"Please Login to Continue\", {\n                appearance: \"error\"\n            });\n            return next_router__WEBPACK_IMPORTED_MODULE_5___default().push(\"/login\");\n        }\n    }, []);\n    if (isLoading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            className: \"login-back-loading\",\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                lineNumber: 40,\n                columnNumber: 12\n            },\n            __self: _this,\n            children: \"Loading...\"\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"main\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n            lineNumber: 43,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            className: \"flex w-11/12 mx-auto md:flex-col sm:flex-col xsm:flex-col lg:w-11/12 lg:flex-row sm:w-8/12 xsm:w-4/5\",\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: datas.map(function(data) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                    class: \"max-w-xs mx-2 overflow-hidden bg-pmry text-white rounded-lg shadow-lg sm:my-5 xsm:my-5 md:my-5 lg:my-2 dark:bg-gray-800\",\n                    __source: {\n                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    },\n                    __self: _this2,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                            class: \"px-4 py-2\",\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            },\n                            __self: _this2,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                                    class: \"text-3xl font-bold text-gray-800 uppercase dark:text-white\",\n                                    __source: {\n                                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this2,\n                                    children: \"NIKE AIR\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                                    class: \"mt-1 text-sm text-gray-600 dark:text-gray-400\",\n                                    __source: {\n                                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this2,\n                                    children: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus\"\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"img\", {\n                            class: \"object-cover w-full h-48 mt-2\",\n                            src: data.image,\n                            alt: \"NIKE AIR\",\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            },\n                            __self: _this2\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                            class: \"flex items-center justify-between px-4 py-2 bg-gray-900\",\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            },\n                            __self: _this2,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                                    class: \"text-lg font-bold text-white\",\n                                    __source: {\n                                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this2,\n                                    children: \"$129\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                                    class: \"px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none\",\n                                    __source: {\n                                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this2,\n                                    children: \"Add to cart\"\n                                })\n                            ]\n                        })\n                    ]\n                }, data.id);\n            })\n        })\n    }));\n};\n_s(DashboardTrendingElements, \"/Vp2DT53VOlJDKQuzZnafy+AUJU=\", false, function() {\n    return [\n        react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__.useToasts\n    ];\n});\n_c = DashboardTrendingElements;\nvar DashboardTrending = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n            lineNumber: 102,\n            columnNumber: 5\n        },\n        __self: _this1,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DashboardTrendingElements, {\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            },\n            __self: _this1\n        })\n    }));\n};\n_c1 = DashboardTrending;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardTrending);\nvar _c, _c1;\n$RefreshReg$(_c, \"DashboardTrendingElements\");\n$RefreshReg$(_c1, \"DashboardTrending\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbXBvbmVudHNGaWxlcy9EYXNoQ29tcG9uZW50cy90cmVuZGluZ0Rhc2hib2FyZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDekI7QUFDRztBQUNJO0FBQ3FCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRCxHQUFLLENBQUNPLHlCQUF5QixHQUFHLFFBQ2xDLEdBRHdDLENBQUM7OztJQUN2QyxHQUFLLENBQUdDLFFBQVEsR0FBS0Ysb0VBQVMsR0FBdEJFLFFBQVE7SUFDaEIsR0FBSyxDQUE2QlAsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBeENRLFNBQVMsR0FBa0JSLEdBQWMsS0FBOUJTLFlBQVksR0FBSVQsR0FBYztJQUNoRCxHQUFLLENBQTJCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF0Q1UsUUFBUSxHQUFpQlYsSUFBYyxLQUE3QlcsV0FBVyxHQUFJWCxJQUFjO0lBQzlDLEdBQUssQ0FBcUJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQWhDWSxLQUFLLEdBQWNaLElBQWMsS0FBMUJhLFFBQVEsR0FBSWIsSUFBYztJQUN4QyxHQUFLLENBQUNjLEtBQUssR0FBR0osUUFBUTtJQUV0QlQsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7WUFRTmMsU0FBUyxHQUFsQixRQUFRLENBQUNBLFNBQVMsQ0FBQ0MsSUFBSSxFQUFFLENBQUM7WUFDeEIsR0FBRyxDQUFDQyxNQUFNLEdBQUdELElBQUksR0FBRyxDQUFHO1lBQ3ZCLEdBQUcsQ0FBQ0UsRUFBRSxHQUFHQyxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUc7WUFDbEMsR0FBRyxDQUFFLEdBQUcsQ0FBQ0MsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSixFQUFFLENBQUNLLE1BQU0sRUFBRUQsQ0FBQyxHQUFJLENBQUM7Z0JBQ25DLEdBQUcsQ0FBQ0UsQ0FBQyxHQUFHTixFQUFFLENBQUNJLENBQUM7c0JBQ0xFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFHLEdBQUVELENBQUMsR0FBR0EsQ0FBQyxDQUFDRSxTQUFTLENBQUMsQ0FBQyxFQUFFRixDQUFDLENBQUNELE1BQU07Z0JBQ3RELEVBQUUsRUFBRUMsQ0FBQyxDQUFDRyxPQUFPLENBQUNWLE1BQU0sS0FBSyxDQUFDLEVBQUUsTUFBTSxDQUFDTyxDQUFDLENBQUNFLFNBQVMsQ0FBQ1QsTUFBTSxDQUFDTSxNQUFNLEVBQUVDLENBQUMsQ0FBQ0QsTUFBTTtZQUN4RSxDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUk7UUFDYixDQUFDO1FBaEJELEdBQUssQ0FBQ0ssU0FBUyxrTEFBRyxRQUFRLFdBQUksQ0FBQztnQkFDdkJDLE1BQU07Ozs7OytCQUFTM0IsNENBQUssQ0FBQyxDQUF1Qzs7d0JBQTVEMkIsTUFBTTt3QkFDWmxCLFdBQVcsQ0FBQ2tCLE1BQU0sQ0FBQ0MsSUFBSTt3QkFDdkJyQixZQUFZLENBQUMsS0FBSzs7Ozs7O1FBQ3BCLENBQUM7UUFFRG1CLFNBQVM7UUFZVCxFQUFFLEdBQUdiLFNBQVMsQ0FBQyxDQUFPLFNBQUcsQ0FBQztZQUN4QlIsUUFBUSxDQUFDLENBQTBCLDJCQUFFLENBQUM7Z0JBQUN3QixVQUFVLEVBQUUsQ0FBTztZQUFDLENBQUM7WUFDNUQsTUFBTSxDQUFDM0IsdURBQVcsQ0FBQyxDQUFRO1FBQzdCLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsRUFBRSxFQUFFSSxTQUFTLEVBQUUsQ0FBQztRQUNkLE1BQU0sc0VBQUV5QixDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFvQjs7Ozs7OztzQkFBQyxDQUFVOztJQUN2RCxDQUFDO0lBQ0QsTUFBTSxzRUFDSEMsQ0FBSTs7Ozs7Ozt1RkFvQ0ZGLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQXNHOzs7Ozs7O3NCQUNsSHBCLEtBQUssQ0FBQ3NCLEdBQUcsQ0FBQyxRQUFRLENBQVBOLElBQUk7OEJBQ2QsTUFBTSx5REFBTEcsQ0FBRztvQkFBQ0ksS0FBSyxFQUFDLENBQXlIOzs7Ozs7Ozs4RkFDbklKLENBQUc7NEJBQUNJLEtBQUssRUFBQyxDQUFXOzs7Ozs7OztxR0FDakJDLENBQUU7b0NBQUNELEtBQUssRUFBQyxDQUE0RDs7Ozs7Ozs4Q0FBQyxDQUFROztxR0FDOUVFLENBQUM7b0NBQUNGLEtBQUssRUFBQyxDQUErQzs7Ozs7Ozs4Q0FBQyxDQUFvSDs7Ozs2RkFHaExHLENBQUc7NEJBQUNILEtBQUssRUFBQyxDQUErQjs0QkFBQ0ksR0FBRyxFQUFFWCxJQUFJLENBQUNZLEtBQUs7NEJBQUVDLEdBQUcsRUFBQyxDQUFVOzs7Ozs7Ozs4RkFFekVWLENBQUc7NEJBQUNJLEtBQUssRUFBQyxDQUF5RDs7Ozs7Ozs7cUdBQy9EQyxDQUFFO29DQUFDRCxLQUFLLEVBQUMsQ0FBOEI7Ozs7Ozs7OENBQUMsQ0FBSTs7cUdBQzVDTyxDQUFNO29DQUFDUCxLQUFLLEVBQUMsQ0FBMEs7Ozs7Ozs7OENBQUMsQ0FBVzs7Ozs7bUJBVjlEUCxJQUFJLENBQUNlLEVBQUU7Ozs7QUFpQjNKLENBQUM7R0EzRkt2Qyx5QkFBeUI7O1FBQ1JELGdFQUFTOzs7S0FEMUJDLHlCQUF5QjtBQTZGL0IsR0FBSyxDQUFDd0MsaUJBQWlCLEdBQUcsUUFDMUIsR0FEZ0MsQ0FBQztJQUMvQixNQUFNLHNFQUNIYixDQUFHOzs7Ozs7O3VGQUNEM0IseUJBQXlCOzs7Ozs7Ozs7QUFHaEMsQ0FBQztNQU5Ld0MsaUJBQWlCO0FBUXZCLCtEQUFlQSxpQkFBaUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbXBvbmVudHNGaWxlcy9EYXNoQ29tcG9uZW50cy90cmVuZGluZ0Rhc2hib2FyZC5qc3g/N2FiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVRvYXN0cyB9IGZyb20gXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCI7XG5cbmNvbnN0IERhc2hib2FyZFRyZW5kaW5nRWxlbWVudHMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt0cmVuZGluZywgc2V0VHJlbmRpbmddID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IGRhdGFzID0gdHJlbmRpbmc7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyhcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYmxvZy9ob3RlbHNcIik7XG4gICAgICBzZXRUcmVuZGluZyhyZXN1bHQuZGF0YSk7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgICBmdW5jdGlvbiBnZXRDb29raWUobmFtZSkge1xuICAgICAgdmFyIG5hbWVFUSA9IG5hbWUgKyBcIj1cIjtcbiAgICAgIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjID0gY2FbaV07XG4gICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PSBcIiBcIikgYyA9IGMuc3Vic3RyaW5nKDEsIGMubGVuZ3RoKTtcbiAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lRVEpID09IDApIHJldHVybiBjLnN1YnN0cmluZyhuYW1lRVEubGVuZ3RoLCBjLmxlbmd0aCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIWdldENvb2tpZShcInRva2VuXCIpKSB7XG4gICAgICBhZGRUb2FzdChcIlBsZWFzZSBMb2dpbiB0byBDb250aW51ZVwiLCB7IGFwcGVhcmFuY2U6IFwiZXJyb3JcIiB9KTtcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tYmFjay1sb2FkaW5nXCI+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG15LTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGwgdGV4dC1wcmltYXJ5IG14LWF1dG9cIj5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci1iLTQgcHktMiBweC00IGJvcmRlci1wbXJ5IG14LWF1dG8gbXktNSB1cHBlcmNhc2VcIlxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiZml0LWNvbnRlbnRcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHVwY29tbWluZ1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicC0yIGZvbnQtZXh0cmFib2xkIHRleHQtNXhsIHRleHQtY2VudGVyIG1iLTVcIj5cbiAgICAgICAgICAgIEZlYXR1cmUgVG91cnNcbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtZmxvdy1yb3cgZ3JpZC1jb2xzLTUgb3JkZXItNSBnYXAtMiB3LTQvNSBteC1hdXRvXCI+XG4gICAgICAgICAge2RhdGFzLm1hcCgoZGF0YSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2RhdGEuaWR9PiBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hvdGVsL1tzbHVnXVwiIGFzPXtgL2hvdGVsLyR7ZGF0YS5zbHVnfWB9IGNsYXNzTmFtZT1cImhvdmVyOmN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICB7LyogPGEgaHJlZj1cIlwiPiAqL31cbiAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgYm9yZGVyIGJnLWdyYXktNjAwIHJvdW5kZWQtM3hsXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjM1MHB4XCIsIG1heFdpZHRoOiBcIjI1MHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogPC9hPiAqL31cbiAgICAgIHsvKiA8L0xpbms+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gKi99XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LTExLzEyIG14LWF1dG8gbWQ6ZmxleC1jb2wgc206ZmxleC1jb2wgeHNtOmZsZXgtY29sIGxnOnctMTEvMTIgbGc6ZmxleC1yb3cgc206dy04LzEyIHhzbTp3LTQvNVwiPlxuICAgICAgICB7ZGF0YXMubWFwKChkYXRhKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1heC13LXhzIG14LTIgb3ZlcmZsb3ctaGlkZGVuIGJnLXBtcnkgdGV4dC13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1sZyBzbTpteS01IHhzbTpteS01IG1kOm15LTUgbGc6bXktMiBkYXJrOmJnLWdyYXktODAwXCIga2V5PXtkYXRhLmlkfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtNCBweS0yXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIHVwcGVyY2FzZSBkYXJrOnRleHQtd2hpdGVcIj5OSUtFIEFJUjwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwibXQtMSB0ZXh0LXNtIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTW9kaSBxdW9zIHF1aWRlbSBzZXF1aSBpbGx1bSBmYWNlcmUgcmVjdXNhbmRhZSB2b2x1cHRhdGlidXM8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gIFxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJvYmplY3QtY292ZXIgdy1mdWxsIGgtNDggbXQtMlwiIHNyYz17ZGF0YS5pbWFnZX0gYWx0PVwiTklLRSBBSVJcIi8+XG4gIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtNCBweS0yIGJnLWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtd2hpdGVcIj4kMTI5PC9oMT5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInB4LTIgcHktMSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCB1cHBlcmNhc2UgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIHRyYW5zZm9ybSBiZy13aGl0ZSByb3VuZGVkIGhvdmVyOmJnLWdyYXktMjAwIGZvY3VzOmJnLWdyYXktNDAwIGZvY3VzOm91dGxpbmUtbm9uZVwiPkFkZCB0byBjYXJ0PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5jb25zdCBEYXNoYm9hcmRUcmVuZGluZyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPERhc2hib2FyZFRyZW5kaW5nRWxlbWVudHMgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFRyZW5kaW5nO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkxpbmsiLCJyb3V0ZXIiLCJ1c2VUb2FzdHMiLCJEYXNoYm9hcmRUcmVuZGluZ0VsZW1lbnRzIiwiYWRkVG9hc3QiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ0cmVuZGluZyIsInNldFRyZW5kaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImRhdGFzIiwiZ2V0Q29va2llIiwibmFtZSIsIm5hbWVFUSIsImNhIiwiZG9jdW1lbnQiLCJjb29raWUiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJjIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImZldGNoRGF0YSIsInJlc3VsdCIsImRhdGEiLCJhcHBlYXJhbmNlIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJtYXAiLCJjbGFzcyIsImgxIiwicCIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwiYnV0dG9uIiwiaWQiLCJEYXNoYm9hcmRUcmVuZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/componentsFiles/DashComponents/trendingDashboard.jsx\n");

/***/ })

});