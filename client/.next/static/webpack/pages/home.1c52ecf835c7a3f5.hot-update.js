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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toast-notifications */ \"./node_modules/react-toast-notifications/dist/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined, _this1 = undefined;\nvar _s = $RefreshSig$();\nvar DashboardTrendingElements = function() {\n    var _this2 = _this;\n    _s();\n    var addToast = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__.useToasts)().addToast;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), trending = ref1[0], setTrending = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), error = ref2[0], setError = ref2[1];\n    var datas = trending;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var getCookie = function getCookie(name) {\n            var nameEQ = name + \"=\";\n            var ca = document.cookie.split(';');\n            for(var i = 0; i < ca.length; i++){\n                var c = ca[i];\n                while(c.charAt(0) == ' ')c = c.substring(1, c.length);\n                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);\n            }\n            return null;\n        };\n        var fetchData = _asyncToGenerator(_Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var result;\n            return _Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default()(\"http://localhost:8000/api/blog/hotels\");\n                    case 2:\n                        result = _ctx.sent;\n                        setTrending(result.data);\n                        setIsLoading(false);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        fetchData();\n        if (!getCookie(\"token\")) {\n            addToast('Please Login to Continue', {\n                appearance: \"error\"\n            });\n            return next_router__WEBPACK_IMPORTED_MODULE_5___default().push(\"/login\");\n        }\n    }, []);\n    if (isLoading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            className: \"login-back-loading\",\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                lineNumber: 43,\n                columnNumber: 12\n            },\n            __self: _this,\n            children: \"Loading...\"\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"main\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n            lineNumber: 46,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            class: \"flex w-4/5 mx-auto\",\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                lineNumber: 84,\n                columnNumber: 3\n            },\n            __self: _this,\n            children: datas.map(function(data) {\n                // <div class=\"flex flex-col items-center justify-center max-w-sm mx-auto\">\n                //     <div class=\"w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md\" style={{backgroundImage: data.image}}></div>\n                //     <div class=\"w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800\">\n                //         <h3 class=\"py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white\">Nike Revolt</h3>\n                //         <div class=\"flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700\">\n                //             <span class=\"font-bold text-gray-800 dark:text-gray-200\">$129</span>\n                //             <button class=\"px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none\">Add to cart</button>\n                //         </div>\n                //     </div>\n                // </div>\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                    class: \"shadow-lg rounded-2xl bg-white w-64 m-auto p-2\",\n                    __source: {\n                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 1\n                    },\n                    __self: _this2,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"img\", {\n                            src: data.image,\n                            alt: \"adidas\",\n                            class: \"w-72 p-4 h-36 m-auto\",\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                lineNumber: 101,\n                                columnNumber: 5\n                            },\n                            __self: _this2\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                            class: \"bg-pmry m-3 p-4 rounded-lg\",\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                lineNumber: 102,\n                                columnNumber: 5\n                            },\n                            __self: _this2,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                                    class: \"text-white text-xl font-bold \",\n                                    __source: {\n                                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 9\n                                    },\n                                    __self: _this2,\n                                    children: \"Adidas\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                                    class: \"text-white text-xs\",\n                                    __source: {\n                                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 9\n                                    },\n                                    __self: _this2,\n                                    children: \"Live your dream\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                                    class: \"flex items-center justify-between \",\n                                    __source: {\n                                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 9\n                                    },\n                                    __self: _this2,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                                            class: \"text-white\",\n                                            __source: {\n                                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                                lineNumber: 110,\n                                                columnNumber: 13\n                                            },\n                                            __self: _this2,\n                                            children: \"$98.00\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                                            type: \"button\",\n                                            class: \"w-10 h-10 text-base font-medium rounded-full text-white bg-pink-500 hover:bg-pink-700\",\n                                            __source: {\n                                                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                                lineNumber: 113,\n                                                columnNumber: 13\n                                            },\n                                            __self: _this2,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"svg\", {\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                width: \"16\",\n                                                height: \"16\",\n                                                class: \"mx-auto\",\n                                                fill: \"white\",\n                                                viewBox: \"0 0 1792 1792\",\n                                                __source: {\n                                                    fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                                    lineNumber: 114,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this2,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"path\", {\n                                                    d: \"M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z\",\n                                                    __source: {\n                                                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                                                        lineNumber: 115,\n                                                        columnNumber: 21\n                                                    },\n                                                    __self: _this2\n                                                })\n                                            })\n                                        })\n                                    ]\n                                })\n                            ]\n                        })\n                    ]\n                }, data.id);\n            })\n        })\n    }));\n};\n_s(DashboardTrendingElements, \"/Vp2DT53VOlJDKQuzZnafy+AUJU=\", false, function() {\n    return [\n        react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__.useToasts\n    ];\n});\n_c = DashboardTrendingElements;\nvar DashboardTrending = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n            lineNumber: 134,\n            columnNumber: 5\n        },\n        __self: _this1,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DashboardTrendingElements, {\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/trendingDashboard.jsx\",\n                lineNumber: 135,\n                columnNumber: 7\n            },\n            __self: _this1\n        })\n    }));\n};\n_c1 = DashboardTrending;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardTrending);\nvar _c, _c1;\n$RefreshReg$(_c, \"DashboardTrendingElements\");\n$RefreshReg$(_c1, \"DashboardTrending\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbXBvbmVudHNGaWxlcy9EYXNoQ29tcG9uZW50cy90cmVuZGluZ0Rhc2hib2FyZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDekI7QUFDRztBQUNJO0FBQ3FCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRCxHQUFLLENBQUNPLHlCQUF5QixHQUFHLFFBQ2xDLEdBRHdDLENBQUM7OztJQUN2QyxHQUFLLENBQUdDLFFBQVEsR0FBS0Ysb0VBQVMsR0FBdEJFLFFBQVE7SUFDaEIsR0FBSyxDQUE2QlAsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBeENRLFNBQVMsR0FBa0JSLEdBQWMsS0FBOUJTLFlBQVksR0FBSVQsR0FBYztJQUNoRCxHQUFLLENBQTJCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF0Q1UsUUFBUSxHQUFpQlYsSUFBYyxLQUE3QlcsV0FBVyxHQUFJWCxJQUFjO0lBQzlDLEdBQUssQ0FBcUJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQWhDWSxLQUFLLEdBQWNaLElBQWMsS0FBMUJhLFFBQVEsR0FBSWIsSUFBYztJQUN4QyxHQUFLLENBQUNjLEtBQUssR0FBR0osUUFBUTtJQUV0QlQsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7WUFRTmMsU0FBUyxHQUFsQixRQUFRLENBQUNBLFNBQVMsQ0FBQ0MsSUFBSSxFQUFFLENBQUM7WUFDeEIsR0FBRyxDQUFDQyxNQUFNLEdBQUdELElBQUksR0FBRyxDQUFHO1lBQ3ZCLEdBQUcsQ0FBQ0UsRUFBRSxHQUFHQyxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUc7WUFDbEMsR0FBRyxDQUFDLEdBQUcsQ0FBQ0MsQ0FBQyxHQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFHSixFQUFFLENBQUNLLE1BQU0sRUFBQ0QsQ0FBQyxHQUFJLENBQUM7Z0JBQzVCLEdBQUcsQ0FBQ0UsQ0FBQyxHQUFHTixFQUFFLENBQUNJLENBQUM7c0JBQ0xFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUMsS0FBRyxDQUFHLEdBQUVELENBQUMsR0FBR0EsQ0FBQyxDQUFDRSxTQUFTLENBQUMsQ0FBQyxFQUFDRixDQUFDLENBQUNELE1BQU07Z0JBQ25ELEVBQUUsRUFBRUMsQ0FBQyxDQUFDRyxPQUFPLENBQUNWLE1BQU0sS0FBSyxDQUFDLEVBQUUsTUFBTSxDQUFDTyxDQUFDLENBQUNFLFNBQVMsQ0FBQ1QsTUFBTSxDQUFDTSxNQUFNLEVBQUNDLENBQUMsQ0FBQ0QsTUFBTTtZQUN6RSxDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUk7UUFDYixDQUFDO1FBaEJELEdBQUssQ0FBQ0ssU0FBUyxrTEFBRyxRQUFRLFdBQUksQ0FBQztnQkFDdkJDLE1BQU07Ozs7OytCQUFTM0IsNENBQUssQ0FBQyxDQUF1Qzs7d0JBQTVEMkIsTUFBTTt3QkFDWmxCLFdBQVcsQ0FBQ2tCLE1BQU0sQ0FBQ0MsSUFBSTt3QkFDdkJyQixZQUFZLENBQUMsS0FBSzs7Ozs7O1FBQ3BCLENBQUM7UUFFRG1CLFNBQVM7UUFhVCxFQUFFLEdBQUViLFNBQVMsQ0FBQyxDQUFPLFNBQUUsQ0FBQztZQUN0QlIsUUFBUSxDQUFFLENBQTBCLDJCQUFHLENBQUM7Z0JBQUN3QixVQUFVLEVBQUUsQ0FBTztZQUFDLENBQUM7WUFDOUQsTUFBTSxDQUFDM0IsdURBQVcsQ0FBQyxDQUFRO1FBQzdCLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBSUwsRUFBRSxFQUFFSSxTQUFTLEVBQUUsQ0FBQztRQUNkLE1BQU0sc0VBQUV5QixDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFvQjs7Ozs7OztzQkFBQyxDQUFVOztJQUN2RCxDQUFDO0lBQ0QsTUFBTSxzRUFDSEMsQ0FBSTs7Ozs7Ozt1RkFzQ05GLENBQUc7WUFBQ0csS0FBSyxFQUFDLENBQW9COzs7Ozs7O3NCQUM1QnRCLEtBQUssQ0FBQ3VCLEdBQUcsQ0FBQyxRQUFRLENBQVBQLElBQUk7Z0JBRWhCLEVBQTJFO2dCQUMzRSxFQUFnSTtnQkFFaEksRUFBdUc7Z0JBQ3ZHLEVBQXdIO2dCQUV4SCxFQUFpRztnQkFDakcsRUFBbUY7Z0JBQ25GLEVBQTBRO2dCQUMxUSxFQUFpQjtnQkFDakIsRUFBYTtnQkFDYixFQUFTOzhCQUViLE1BQU0seURBQUxHLENBQUc7b0JBQUNHLEtBQUssRUFBQyxDQUFpRDs7Ozs7Ozs7NkZBQ3ZERSxDQUFHOzRCQUFDQyxHQUFHLEVBQUVULElBQUksQ0FBQ1UsS0FBSzs0QkFBRUMsR0FBRyxFQUFDLENBQVE7NEJBQUNMLEtBQUssRUFBQyxDQUFzQjs7Ozs7Ozs7OEZBQzlESCxDQUFHOzRCQUFDRyxLQUFLLEVBQUMsQ0FBNEI7Ozs7Ozs7O3FHQUNsQ00sQ0FBQztvQ0FBQ04sS0FBSyxFQUFDLENBQStCOzs7Ozs7OzhDQUFDLENBRXpDOztxR0FDQ00sQ0FBQztvQ0FBQ04sS0FBSyxFQUFDLENBQW9COzs7Ozs7OzhDQUFDLENBRTlCOztzR0FDQ0gsQ0FBRztvQ0FBQ0csS0FBSyxFQUFDLENBQW9DOzs7Ozs7Ozs2R0FDMUNNLENBQUM7NENBQUNOLEtBQUssRUFBQyxDQUFZOzs7Ozs7O3NEQUFDLENBRXRCOzs2R0FDQ08sQ0FBTTs0Q0FBQ0MsSUFBSSxFQUFDLENBQVE7NENBQUNSLEtBQUssRUFBQyxDQUF1Rjs7Ozs7OzsySEFDOUdTLENBQUc7Z0RBQUNDLEtBQUssRUFBQyxDQUE0QjtnREFBQ0MsS0FBSyxFQUFDLENBQUk7Z0RBQUNDLE1BQU0sRUFBQyxDQUFJO2dEQUFDWixLQUFLLEVBQUMsQ0FBUztnREFBQ2EsSUFBSSxFQUFDLENBQU87Z0RBQUNDLE9BQU8sRUFBQyxDQUFlOzs7Ozs7OytIQUM5R0MsQ0FBSTtvREFBQ0MsQ0FBQyxFQUFDLENBQWdOOzs7Ozs7Ozs7Ozs7Ozs7bUJBZjFLdEIsSUFBSSxDQUFDdUIsRUFBRTs7OztBQThCekUsQ0FBQztHQTNISy9DLHlCQUF5Qjs7UUFDUkQsZ0VBQVM7OztLQUQxQkMseUJBQXlCO0FBNkgvQixHQUFLLENBQUNnRCxpQkFBaUIsR0FBRyxRQUMxQixHQURnQyxDQUFDO0lBQy9CLE1BQU0sc0VBQ0hyQixDQUFHOzs7Ozs7O3VGQUNEM0IseUJBQXlCOzs7Ozs7Ozs7QUFHaEMsQ0FBQztNQU5LZ0QsaUJBQWlCO0FBUXZCLCtEQUFlQSxpQkFBaUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbXBvbmVudHNGaWxlcy9EYXNoQ29tcG9uZW50cy90cmVuZGluZ0Rhc2hib2FyZC5qc3g/N2FiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVRvYXN0cyB9IGZyb20gXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCI7XG5cbmNvbnN0IERhc2hib2FyZFRyZW5kaW5nRWxlbWVudHMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYWRkVG9hc3QgfSA9IHVzZVRvYXN0cygpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt0cmVuZGluZywgc2V0VHJlbmRpbmddID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IGRhdGFzID0gdHJlbmRpbmc7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcyhcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYmxvZy9ob3RlbHNcIik7XG4gICAgICBzZXRUcmVuZGluZyhyZXN1bHQuZGF0YSk7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgICBmdW5jdGlvbiBnZXRDb29raWUobmFtZSkge1xuICAgICAgdmFyIG5hbWVFUSA9IG5hbWUgKyBcIj1cIjtcbiAgICAgIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuICAgICAgZm9yKHZhciBpPTA7aSA8IGNhLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICB2YXIgYyA9IGNhW2ldO1xuICAgICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKT09JyAnKSBjID0gYy5zdWJzdHJpbmcoMSxjLmxlbmd0aCk7XG4gICAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lRVEpID09IDApIHJldHVybiBjLnN1YnN0cmluZyhuYW1lRVEubGVuZ3RoLGMubGVuZ3RoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBpZighZ2V0Q29va2llKFwidG9rZW5cIikpe1xuICAgICAgYWRkVG9hc3QoKCdQbGVhc2UgTG9naW4gdG8gQ29udGludWUnKSwgeyBhcHBlYXJhbmNlOiBcImVycm9yXCIgfSk7XG4gICAgICByZXR1cm4gcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgfVxuICB9LCBbXSk7XG5cblxuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1iYWNrLWxvYWRpbmdcIj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXktNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTJ4bCB0ZXh0LXByaW1hcnkgbXgtYXV0b1wiPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLWItNCBweS0yIHB4LTQgYm9yZGVyLXBtcnkgbXgtYXV0byBteS01IHVwcGVyY2FzZVwiXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCJmaXQtY29udGVudFwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgdXBjb21taW5nXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwLTIgZm9udC1leHRyYWJvbGQgdGV4dC01eGwgdGV4dC1jZW50ZXIgbWItNVwiPlxuICAgICAgICAgICAgRmVhdHVyZSBUb3Vyc1xuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1mbG93LXJvdyBncmlkLWNvbHMtNSBvcmRlci01IGdhcC0yIHctNC81IG14LWF1dG9cIj5cbiAgICAgICAgICB7ZGF0YXMubWFwKChkYXRhKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17ZGF0YS5pZH0+IFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG90ZWwvW3NsdWddXCIgYXM9e2AvaG90ZWwvJHtkYXRhLnNsdWd9YH0gY2xhc3NOYW1lPVwiaG92ZXI6Y3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiA8YSBocmVmPVwiXCI+ICovfVxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgYm9yZGVyIGJnLWdyYXktNjAwIHJvdW5kZWQtM3hsXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjM1MHB4XCIsIG1heFdpZHRoOiBcIjI1MHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogPC9hPiAqL31cbiAgICAgICAgICAgICAgICB7LyogPC9MaW5rPlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICovfSBcblxuXG5cbiAgPGRpdiBjbGFzcz1cImZsZXggdy00LzUgbXgtYXV0b1wiPlxuICAgIHtkYXRhcy5tYXAoKGRhdGEpID0+XG4gICAgXG4gICAgLy8gPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1heC13LXNtIG14LWF1dG9cIj5cbiAgICAvLyAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBoLTY0IGJnLWdyYXktMzAwIGJnLWNlbnRlciBiZy1jb3ZlciByb3VuZGVkLWxnIHNoYWRvdy1tZFwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBkYXRhLmltYWdlfX0+PC9kaXY+XG5cbiAgICAvLyAgICAgPGRpdiBjbGFzcz1cInctNTYgLW10LTEwIG92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1sZyBtZDp3LTY0IGRhcms6YmctZ3JheS04MDBcIj5cbiAgICAvLyAgICAgICAgIDxoMyBjbGFzcz1cInB5LTIgZm9udC1ib2xkIHRyYWNraW5nLXdpZGUgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTgwMCB1cHBlcmNhc2UgZGFyazp0ZXh0LXdoaXRlXCI+TmlrZSBSZXZvbHQ8L2gzPlxuICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTMgcHktMiBiZy1ncmF5LTIwMCBkYXJrOmJnLWdyYXktNzAwXCI+XG4gICAgLy8gICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtZ3JheS0yMDBcIj4kMTI5PC9zcGFuPlxuICAgIC8vICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJweC0yIHB5LTEgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgdXBwZXJjYXNlIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCB0cmFuc2Zvcm0gYmctZ3JheS04MDAgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGZvY3VzOmJnLWdyYXktNzAwIGRhcms6Zm9jdXM6YmctZ3JheS02MDAgZm9jdXM6b3V0bGluZS1ub25lXCI+QWRkIHRvIGNhcnQ8L2J1dHRvbj5cbiAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgIC8vICAgICA8L2Rpdj5cbiAgICAvLyA8L2Rpdj5cblxuPGRpdiBjbGFzcz1cInNoYWRvdy1sZyByb3VuZGVkLTJ4bCAgYmctd2hpdGUgdy02NCBtLWF1dG8gcC0yXCIga2V5PXtkYXRhLmlkfT5cbiAgICA8aW1nIHNyYz17ZGF0YS5pbWFnZX0gYWx0PVwiYWRpZGFzXCIgY2xhc3M9XCJ3LTcyIHAtNCBoLTM2IG0tYXV0b1wiLz5cbiAgICA8ZGl2IGNsYXNzPVwiYmctcG1yeSBtLTMgcC00IHJvdW5kZWQtbGdcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXdoaXRlIHRleHQteGwgZm9udC1ib2xkIFwiPlxuICAgICAgICAgICAgQWRpZGFzXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXdoaXRlIHRleHQteHNcIj5cbiAgICAgICAgICAgIExpdmUgeW91ciBkcmVhbVxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAkOTguMDBcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidy0xMCBoLTEwIHRleHQtYmFzZSBmb250LW1lZGl1bSByb3VuZGVkLWZ1bGwgdGV4dC13aGl0ZSBiZy1waW5rLTUwMCBob3ZlcjpiZy1waW5rLTcwMFwiPlxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGNsYXNzPVwibXgtYXV0b1wiIGZpbGw9XCJ3aGl0ZVwiIHZpZXdCb3g9XCIwIDAgMTc5MiAxNzkyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYwMCA3MzZ2MTkycTAgNDAtMjggNjh0LTY4IDI4aC00MTZ2NDE2cTAgNDAtMjggNjh0LTY4IDI4aC0xOTJxLTQwIDAtNjgtMjh0LTI4LTY4di00MTZoLTQxNnEtNDAgMC02OC0yOHQtMjgtNjh2LTE5MnEwLTQwIDI4LTY4dDY4LTI4aDQxNnYtNDE2cTAtNDAgMjgtNjh0NjgtMjhoMTkycTQwIDAgNjggMjh0MjggNjh2NDE2aDQxNnE0MCAwIDY4IDI4dDI4IDY4elwiPlxuICAgICAgICAgICAgICAgICAgICA8L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuICAgICl9XG4gIDwvZGl2PlxuXG5cblxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cbmNvbnN0IERhc2hib2FyZFRyZW5kaW5nID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8RGFzaGJvYXJkVHJlbmRpbmdFbGVtZW50cyAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkVHJlbmRpbmc7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiTGluayIsInJvdXRlciIsInVzZVRvYXN0cyIsIkRhc2hib2FyZFRyZW5kaW5nRWxlbWVudHMiLCJhZGRUb2FzdCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInRyZW5kaW5nIiwic2V0VHJlbmRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZGF0YXMiLCJnZXRDb29raWUiLCJuYW1lIiwibmFtZUVRIiwiY2EiLCJkb2N1bWVudCIsImNvb2tpZSIsInNwbGl0IiwiaSIsImxlbmd0aCIsImMiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwiZmV0Y2hEYXRhIiwicmVzdWx0IiwiZGF0YSIsImFwcGVhcmFuY2UiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImNsYXNzIiwibWFwIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJwIiwiYnV0dG9uIiwidHlwZSIsInN2ZyIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsIiwidmlld0JveCIsInBhdGgiLCJkIiwiaWQiLCJEYXNoYm9hcmRUcmVuZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/componentsFiles/DashComponents/trendingDashboard.jsx\n");

/***/ })

});