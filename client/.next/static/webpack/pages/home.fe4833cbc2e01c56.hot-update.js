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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toast-notifications */ \"./node_modules/react-toast-notifications/dist/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined, _this1 = undefined;\nvar _s = $RefreshSig$();\nvar DashboardTrendingElements = function() {\n    var _this2 = _this;\n    _s();\n    var addToast = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__.useToasts)().addToast;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), trending = ref1[0], setTrending = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), error = ref2[0], setError = ref2[1];\n    var datas = trending;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var getCookie = function getCookie(name) {\n            var nameEQ = name + \"=\";\n            var ca = document.cookie.split(';');\n            for(var i = 0; i < ca.length; i++){\n                var c = ca[i];\n                while(c.charAt(0) == ' ')c = c.substring(1, c.length);\n                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);\n            }\n            return null;\n        };\n        var fetchData = _asyncToGenerator(_Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var result;\n            return _Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default()(\"http://localhost:8000/api/blog/hotels\");\n                    case 2:\n                        result = _ctx.sent;\n                        setTrending(result.data);\n                        setIsLoading(false);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        fetchData();\n        if (!getCookie(\"token\")) {\n            addToast('Please Login to Continue', {\n                appearance: \"error\"\n            });\n            return next_router__WEBPACK_IMPORTED_MODULE_5___default().push(\"/login\");\n        }\n    }, []);\n    if (isLoading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            className: \"login-back-loading\",\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                lineNumber: 43,\n                columnNumber: 12\n            },\n            __self: _this,\n            children: \"Loading...\"\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"main\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n            lineNumber: 46,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            class: \"flex w-4/5 mx-auto\",\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                lineNumber: 84,\n                columnNumber: 3\n            },\n            __self: _this,\n            children: datas.map(function(data) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                    class: \"flex flex-col items-center justify-center max-w-sm mx-auto\",\n                    __source: {\n                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 5\n                    },\n                    __self: _this2,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"img\", {\n                            class: \"w-full h-64 bg-gray-300 bg-center mx-auto bg-cover rounded-lg shadow-md\",\n                            src: data.image,\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 9\n                            },\n                            __self: _this2\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                            class: \"w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800\",\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 9\n                            },\n                            __self: _this2,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h3\", {\n                                    class: \"py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white\",\n                                    __source: {\n                                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this2,\n                                    children: \"Nike Revolt\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                                    class: \"flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700\",\n                                    __source: {\n                                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this2,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n                                            class: \"font-bold text-gray-800 dark:text-gray-200\",\n                                            __source: {\n                                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this2,\n                                            children: \"$129\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                                            class: \"px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none\",\n                                            __source: {\n                                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                                lineNumber: 95,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this2,\n                                            children: \"Add to cart\"\n                                        })\n                                    ]\n                                })\n                            ]\n                        })\n                    ]\n                });\n            })\n        })\n    }));\n};\n_s(DashboardTrendingElements, \"/Vp2DT53VOlJDKQuzZnafy+AUJU=\", false, function() {\n    return [\n        react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__.useToasts\n    ];\n});\n_c = DashboardTrendingElements;\nvar DashboardTrending = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n            lineNumber: 110,\n            columnNumber: 5\n        },\n        __self: _this1,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DashboardTrendingElements, {\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            },\n            __self: _this1\n        })\n    }));\n};\n_c1 = DashboardTrending;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardTrending);\nvar _c, _c1;\n$RefreshReg$(_c, \"DashboardTrendingElements\");\n$RefreshReg$(_c1, \"DashboardTrending\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbXBvbmVudHNGaWxlcy9EYXNoQ29tcG9uZW50cy90cmVuZGluZ0Rhc2hib2FyZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDekI7QUFDRztBQUNJO0FBQ3FCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRCxHQUFLLENBQUNPLHlCQUF5QixHQUFHLFFBQ2xDLEdBRHdDLENBQUM7OztJQUN2QyxHQUFLLENBQUdDLFFBQVEsR0FBS0Ysb0VBQVMsR0FBdEJFLFFBQVE7SUFDaEIsR0FBSyxDQUE2QlAsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBeENRLFNBQVMsR0FBa0JSLEdBQWMsS0FBOUJTLFlBQVksR0FBSVQsR0FBYztJQUNoRCxHQUFLLENBQTJCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF0Q1UsUUFBUSxHQUFpQlYsSUFBYyxLQUE3QlcsV0FBVyxHQUFJWCxJQUFjO0lBQzlDLEdBQUssQ0FBcUJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQWhDWSxLQUFLLEdBQWNaLElBQWMsS0FBMUJhLFFBQVEsR0FBSWIsSUFBYztJQUN4QyxHQUFLLENBQUNjLEtBQUssR0FBR0osUUFBUTtJQUV0QlQsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7WUFRTmMsU0FBUyxHQUFsQixRQUFRLENBQUNBLFNBQVMsQ0FBQ0MsSUFBSSxFQUFFLENBQUM7WUFDeEIsR0FBRyxDQUFDQyxNQUFNLEdBQUdELElBQUksR0FBRyxDQUFHO1lBQ3ZCLEdBQUcsQ0FBQ0UsRUFBRSxHQUFHQyxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUc7WUFDbEMsR0FBRyxDQUFDLEdBQUcsQ0FBQ0MsQ0FBQyxHQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFHSixFQUFFLENBQUNLLE1BQU0sRUFBQ0QsQ0FBQyxHQUFJLENBQUM7Z0JBQzVCLEdBQUcsQ0FBQ0UsQ0FBQyxHQUFHTixFQUFFLENBQUNJLENBQUM7c0JBQ0xFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUMsS0FBRyxDQUFHLEdBQUVELENBQUMsR0FBR0EsQ0FBQyxDQUFDRSxTQUFTLENBQUMsQ0FBQyxFQUFDRixDQUFDLENBQUNELE1BQU07Z0JBQ25ELEVBQUUsRUFBRUMsQ0FBQyxDQUFDRyxPQUFPLENBQUNWLE1BQU0sS0FBSyxDQUFDLEVBQUUsTUFBTSxDQUFDTyxDQUFDLENBQUNFLFNBQVMsQ0FBQ1QsTUFBTSxDQUFDTSxNQUFNLEVBQUNDLENBQUMsQ0FBQ0QsTUFBTTtZQUN6RSxDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUk7UUFDYixDQUFDO1FBaEJELEdBQUssQ0FBQ0ssU0FBUyxrTEFBRyxRQUFRLFdBQUksQ0FBQztnQkFDdkJDLE1BQU07Ozs7OytCQUFTM0IsNENBQUssQ0FBQyxDQUF1Qzs7d0JBQTVEMkIsTUFBTTt3QkFDWmxCLFdBQVcsQ0FBQ2tCLE1BQU0sQ0FBQ0MsSUFBSTt3QkFDdkJyQixZQUFZLENBQUMsS0FBSzs7Ozs7O1FBQ3BCLENBQUM7UUFFRG1CLFNBQVM7UUFhVCxFQUFFLEdBQUViLFNBQVMsQ0FBQyxDQUFPLFNBQUUsQ0FBQztZQUN0QlIsUUFBUSxDQUFFLENBQTBCLDJCQUFHLENBQUM7Z0JBQUN3QixVQUFVLEVBQUUsQ0FBTztZQUFDLENBQUM7WUFDOUQsTUFBTSxDQUFDM0IsdURBQVcsQ0FBQyxDQUFRO1FBQzdCLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBSUwsRUFBRSxFQUFFSSxTQUFTLEVBQUUsQ0FBQztRQUNkLE1BQU0sc0VBQUV5QixDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFvQjs7Ozs7OztzQkFBQyxDQUFVOztJQUN2RCxDQUFDO0lBQ0QsTUFBTSxzRUFDSEMsQ0FBSTs7Ozs7Ozt1RkFzQ05GLENBQUc7WUFBQ0csS0FBSyxFQUFDLENBQW9COzs7Ozs7O3NCQUM1QnRCLEtBQUssQ0FBQ3VCLEdBQUcsQ0FBQyxRQUFRLENBQVBQLElBQUk7OEJBRWhCLE1BQU0seURBQUxHLENBQUc7b0JBQUNHLEtBQUssRUFBQyxDQUE0RDs7Ozs7Ozs7NkZBQ2xFRSxDQUFHOzRCQUFDRixLQUFLLEVBQUMsQ0FBeUU7NEJBQUNHLEdBQUcsRUFBRVQsSUFBSSxDQUFDVSxLQUFLOzs7Ozs7Ozs4RkFFbkdQLENBQUc7NEJBQUNHLEtBQUssRUFBQyxDQUFvRjs7Ozs7Ozs7cUdBQzFGSyxDQUFFO29DQUFDTCxLQUFLLEVBQUMsQ0FBa0Y7Ozs7Ozs7OENBQUMsQ0FBVzs7c0dBRXZHSCxDQUFHO29DQUFDRyxLQUFLLEVBQUMsQ0FBMEU7Ozs7Ozs7OzZHQUNoRk0sQ0FBSTs0Q0FBQ04sS0FBSyxFQUFDLENBQTRDOzs7Ozs7O3NEQUFDLENBQUk7OzZHQUM1RE8sQ0FBTTs0Q0FBQ1AsS0FBSyxFQUFDLENBQXdOOzs7Ozs7O3NEQUFDLENBQVc7Ozs7Ozs7Ozs7O0FBV2xRLENBQUM7R0FuR0s5Qix5QkFBeUI7O1FBQ1JELGdFQUFTOzs7S0FEMUJDLHlCQUF5QjtBQXFHL0IsR0FBSyxDQUFDc0MsaUJBQWlCLEdBQUcsUUFDMUIsR0FEZ0MsQ0FBQztJQUMvQixNQUFNLHNFQUNIWCxDQUFHOzs7Ozs7O3VGQUNEM0IseUJBQXlCOzs7Ozs7Ozs7QUFHaEMsQ0FBQztNQU5Lc0MsaUJBQWlCO0FBUXZCLCtEQUFlQSxpQkFBaUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbXBvbmVudHNGaWxlcy9EYXNoQ29tcG9uZW50cy90cmVuZGluZ0Rhc2hib2FyZC5qc3g/N2FiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVRvYXN0cyB9IGZyb20gXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCI7XG5cbmNvbnN0IERhc2hib2FyZFRyZW5kaW5nRWxlbWVudHMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt0cmVuZGluZywgc2V0VHJlbmRpbmddID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IGRhdGFzID0gdHJlbmRpbmc7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyhcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYmxvZy9ob3RlbHNcIik7XG4gICAgICBzZXRUcmVuZGluZyhyZXN1bHQuZGF0YSk7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgICBmdW5jdGlvbiBnZXRDb29raWUobmFtZSkge1xuICAgICAgdmFyIG5hbWVFUSA9IG5hbWUgKyBcIj1cIjtcbiAgICAgIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuICAgICAgZm9yKHZhciBpPTA7aSA8IGNhLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICB2YXIgYyA9IGNhW2ldO1xuICAgICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKT09JyAnKSBjID0gYy5zdWJzdHJpbmcoMSxjLmxlbmd0aCk7XG4gICAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lRVEpID09IDApIHJldHVybiBjLnN1YnN0cmluZyhuYW1lRVEubGVuZ3RoLGMubGVuZ3RoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBpZighZ2V0Q29va2llKFwidG9rZW5cIikpe1xuICAgICAgYWRkVG9hc3QoKCdQbGVhc2UgTG9naW4gdG8gQ29udGludWUnKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XG4gICAgICByZXR1cm4gcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgfVxuICB9LCBbXSk7XG5cblxuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1iYWNrLWxvYWRpbmdcIj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXktNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTJ4bCB0ZXh0LXByaW1hcnkgbXgtYXV0b1wiPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLWItNCBweS0yIHB4LTQgYm9yZGVyLXBtcnkgbXgtYXV0byBteS01IHVwcGVyY2FzZVwiXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCJmaXQtY29udGVudFwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgdXBjb21taW5nXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwLTIgZm9udC1leHRyYWJvbGQgdGV4dC01eGwgdGV4dC1jZW50ZXIgbWItNVwiPlxuICAgICAgICAgICAgRmVhdHVyZSBUb3Vyc1xuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1mbG93LXJvdyBncmlkLWNvbHMtNSBvcmRlci01IGdhcC0yIHctNC81IG14LWF1dG9cIj5cbiAgICAgICAgICB7ZGF0YXMubWFwKChkYXRhKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17ZGF0YS5pZH0+IFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG90ZWwvW3NsdWddXCIgYXM9e2AvaG90ZWwvJHtkYXRhLnNsdWd9YH0gY2xhc3NOYW1lPVwiaG92ZXI6Y3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiA8YSBocmVmPVwiXCI+ICovfVxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgYm9yZGVyIGJnLWdyYXktNjAwIHJvdW5kZWQtM3hsXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjM1MHB4XCIsIG1heFdpZHRoOiBcIjI1MHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogPC9hPiAqL31cbiAgICAgICAgICAgICAgICB7LyogPC9MaW5rPlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICovfSBcblxuXG5cbiAgPGRpdiBjbGFzcz1cImZsZXggdy00LzUgbXgtYXV0b1wiPlxuICAgIHtkYXRhcy5tYXAoKGRhdGEpID0+XG4gICAgXG4gICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1heC13LXNtIG14LWF1dG9cIj5cbiAgICAgICAgPGltZyBjbGFzcz1cInctZnVsbCBoLTY0IGJnLWdyYXktMzAwIGJnLWNlbnRlciBteC1hdXRvIGJnLWNvdmVyIHJvdW5kZWQtbGcgc2hhZG93LW1kXCIgc3JjPXtkYXRhLmltYWdlfSAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LTU2IC1tdC0xMCBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbGcgbWQ6dy02NCBkYXJrOmJnLWdyYXktODAwXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJweS0yIGZvbnQtYm9sZCB0cmFja2luZy13aWRlIHRleHQtY2VudGVyIHRleHQtZ3JheS04MDAgdXBwZXJjYXNlIGRhcms6dGV4dC13aGl0ZVwiPk5pa2UgUmV2b2x0PC9oMz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC0zIHB5LTIgYmctZ3JheS0yMDAgZGFyazpiZy1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC1ib2xkIHRleHQtZ3JheS04MDAgZGFyazp0ZXh0LWdyYXktMjAwXCI+JDEyOTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHgtMiBweS0xIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHVwcGVyY2FzZSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgdHJhbnNmb3JtIGJnLWdyYXktODAwIHJvdW5kZWQgaG92ZXI6YmctZ3JheS03MDAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMCBmb2N1czpiZy1ncmF5LTcwMCBkYXJrOmZvY3VzOmJnLWdyYXktNjAwIGZvY3VzOm91dGxpbmUtbm9uZVwiPkFkZCB0byBjYXJ0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKX1cbiAgPC9kaXY+XG5cblxuXG4gICAgPC9tYWluPlxuICApO1xufTtcblxuY29uc3QgRGFzaGJvYXJkVHJlbmRpbmcgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxEYXNoYm9hcmRUcmVuZGluZ0VsZW1lbnRzIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRUcmVuZGluZztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJMaW5rIiwicm91dGVyIiwidXNlVG9hc3RzIiwiRGFzaGJvYXJkVHJlbmRpbmdFbGVtZW50cyIsImFkZFRvYXN0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidHJlbmRpbmciLCJzZXRUcmVuZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJkYXRhcyIsImdldENvb2tpZSIsIm5hbWUiLCJuYW1lRVEiLCJjYSIsImRvY3VtZW50IiwiY29va2llIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwiYyIsImNoYXJBdCIsInN1YnN0cmluZyIsImluZGV4T2YiLCJmZXRjaERhdGEiLCJyZXN1bHQiLCJkYXRhIiwiYXBwZWFyYW5jZSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiY2xhc3MiLCJtYXAiLCJpbWciLCJzcmMiLCJpbWFnZSIsImgzIiwic3BhbiIsImJ1dHRvbiIsIkRhc2hib2FyZFRyZW5kaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/componentsFiles/DashComponents/trendingDashboard.jsx\n");

/***/ })

});