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

/***/ "./components/componentsFiles/DashComponents/dashboardBannerMain.jsx":
/*!***************************************************************************!*\
  !*** ./components/componentsFiles/DashComponents/dashboardBannerMain.jsx ***!
  \***************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toast-notifications */ \"./node_modules/react-toast-notifications/dist/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined, _this1 = undefined;\nvar _s = $RefreshSig$();\nvar DasboardBannerMainElements = function() {\n    var _this2 = _this;\n    _s();\n    var addToast = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__.useToasts)().addToast;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), trending = ref1[0], setTrending = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), error = ref2[0], setError = ref2[1];\n    var datas = trending;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var getCookie = function getCookie(name) {\n            var nameEQ = name + \"=\";\n            var ca = document.cookie.split(';');\n            for(var i = 0; i < ca.length; i++){\n                var c = ca[i];\n                while(c.charAt(0) == ' ')c = c.substring(1, c.length);\n                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);\n            }\n            return null;\n        };\n        var fetchData = _asyncToGenerator(_Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var result;\n            return _Users_ctrlscrpt_Documents_FinalYearProject_client_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default()(\"http://localhost:8000/api/blog/hotels\");\n                    case 2:\n                        result = _ctx.sent;\n                        setTrending(result.data);\n                        setIsLoading(false);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        fetchData();\n        if (!getCookie(\"token\")) {\n            addToast('Please Login to Continue', {\n                appearance: \"error\"\n            });\n            return next_router__WEBPACK_IMPORTED_MODULE_5___default().push(\"/login\");\n        }\n    }, []);\n    if (isLoading) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            className: \"login-back-loading\",\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/dashboardBannerMain.jsx\",\n                lineNumber: 43,\n                columnNumber: 12\n            },\n            __self: _this,\n            children: \"Loading...\"\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"main\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/dashboardBannerMain.jsx\",\n            lineNumber: 46,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"section\", {\n            class: \"text-gray-600 body-font\",\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/dashboardBannerMain.jsx\",\n                lineNumber: 48,\n                columnNumber: 1\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                class: \"container mx-auto flex px-5 py-24 md:flex-row flex-col items-center\",\n                __source: {\n                    fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/dashboardBannerMain.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 3\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                        class: \"lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center\",\n                        __source: {\n                            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/dashboardBannerMain.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"h1\", {\n                                class: \"title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900\",\n                                __source: {\n                                    fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/dashboardBannerMain.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 7\n                                },\n                                __self: _this,\n                                children: [\n                                    \"Before they sold out\",\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"br\", {\n                                        class: \"hidden lg:inline-block\",\n                                        __source: {\n                                            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/dashboardBannerMain.jsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 9\n                                        },\n                                        __self: _this\n                                    }),\n                                    \"readymade gluten\"\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"p\", {\n                                class: \"mb-8 leading-relaxed\",\n                                __source: {\n                                    fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/dashboardBannerMain.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 7\n                                },\n                                __self: _this,\n                                children: \"Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.\"\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                        class: \"flex flex-wrap md:-m-2 -m-1 w-3/5\",\n                        __source: {\n                            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/dashboardBannerMain.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 5\n                        },\n                        __self: _this,\n                        children: datas.map(function(data) {\n                            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                                class: \"flex flex-wrap w-1/2\",\n                                __source: {\n                                    fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/dashboardBannerMain.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 7\n                                },\n                                __self: _this2,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                                    class: \"md:p-2 p-1 w-1/2\",\n                                    __source: {\n                                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/dashboardBannerMain.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 9\n                                    },\n                                    __self: _this2,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"img\", {\n                                        alt: \"gallery\",\n                                        class: \"w-full object-cover h-full object-center block\",\n                                        src: data.image,\n                                        __source: {\n                                            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/dashboardBannerMain.jsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 11\n                                        },\n                                        __self: _this2\n                                    })\n                                })\n                            }, data.id);\n                        })\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s(DasboardBannerMainElements, \"/Vp2DT53VOlJDKQuzZnafy+AUJU=\", false, function() {\n    return [\n        react_toast_notifications__WEBPACK_IMPORTED_MODULE_6__.useToasts\n    ];\n});\n_c = DasboardBannerMainElements;\nvar DasboardBannerMain = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/dashboardBannerMain.jsx\",\n            lineNumber: 76,\n            columnNumber: 5\n        },\n        __self: _this1,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DasboardBannerMainElements, {\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/dashboardBannerMain.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            },\n            __self: _this1\n        })\n    }));\n};\n_c1 = DasboardBannerMain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DasboardBannerMain);\nvar _c, _c1;\n$RefreshReg$(_c, \"DasboardBannerMainElements\");\n$RefreshReg$(_c1, \"DasboardBannerMain\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbXBvbmVudHNGaWxlcy9EYXNoQ29tcG9uZW50cy9kYXNoYm9hcmRCYW5uZXJNYWluLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUN6QjtBQUNHO0FBQ0k7QUFDcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJELEdBQUssQ0FBQ08sMEJBQTBCLEdBQUcsUUFDbkMsR0FEeUMsQ0FBQzs7O0lBQ3hDLEdBQUssQ0FBR0MsUUFBUSxHQUFLRixvRUFBUyxHQUF0QkUsUUFBUTtJQUNoQixHQUFLLENBQTZCUCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF4Q1EsU0FBUyxHQUFrQlIsR0FBYyxLQUE5QlMsWUFBWSxHQUFJVCxHQUFjO0lBQ2hELEdBQUssQ0FBMkJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXRDVSxRQUFRLEdBQWlCVixJQUFjLEtBQTdCVyxXQUFXLEdBQUlYLElBQWM7SUFDOUMsR0FBSyxDQUFxQkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBaENZLEtBQUssR0FBY1osSUFBYyxLQUExQmEsUUFBUSxHQUFJYixJQUFjO0lBQ3hDLEdBQUssQ0FBQ2MsS0FBSyxHQUFHSixRQUFRO0lBRXRCVCxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztZQVFOYyxTQUFTLEdBQWxCLFFBQVEsQ0FBQ0EsU0FBUyxDQUFDQyxJQUFJLEVBQUUsQ0FBQztZQUN4QixHQUFHLENBQUNDLE1BQU0sR0FBR0QsSUFBSSxHQUFHLENBQUc7WUFDdkIsR0FBRyxDQUFDRSxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBRztZQUNsQyxHQUFHLENBQUMsR0FBRyxDQUFDQyxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUdKLEVBQUUsQ0FBQ0ssTUFBTSxFQUFDRCxDQUFDLEdBQUksQ0FBQztnQkFDNUIsR0FBRyxDQUFDRSxDQUFDLEdBQUdOLEVBQUUsQ0FBQ0ksQ0FBQztzQkFDTEUsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxLQUFHLENBQUcsR0FBRUQsQ0FBQyxHQUFHQSxDQUFDLENBQUNFLFNBQVMsQ0FBQyxDQUFDLEVBQUNGLENBQUMsQ0FBQ0QsTUFBTTtnQkFDbkQsRUFBRSxFQUFFQyxDQUFDLENBQUNHLE9BQU8sQ0FBQ1YsTUFBTSxLQUFLLENBQUMsRUFBRSxNQUFNLENBQUNPLENBQUMsQ0FBQ0UsU0FBUyxDQUFDVCxNQUFNLENBQUNNLE1BQU0sRUFBQ0MsQ0FBQyxDQUFDRCxNQUFNO1lBQ3pFLENBQUM7WUFDRCxNQUFNLENBQUMsSUFBSTtRQUNiLENBQUM7UUFoQkQsR0FBSyxDQUFDSyxTQUFTLGtMQUFHLFFBQVEsV0FBSSxDQUFDO2dCQUN2QkMsTUFBTTs7Ozs7K0JBQVMzQiw0Q0FBSyxDQUFDLENBQXVDOzt3QkFBNUQyQixNQUFNO3dCQUNabEIsV0FBVyxDQUFDa0IsTUFBTSxDQUFDQyxJQUFJO3dCQUN2QnJCLFlBQVksQ0FBQyxLQUFLOzs7Ozs7UUFDcEIsQ0FBQztRQUVEbUIsU0FBUztRQWFULEVBQUUsR0FBRWIsU0FBUyxDQUFDLENBQU8sU0FBRSxDQUFDO1lBQ3RCUixRQUFRLENBQUUsQ0FBMEIsMkJBQUcsQ0FBQztnQkFBQ3dCLFVBQVUsRUFBRSxDQUFPO1lBQUMsQ0FBQztZQUM5RCxNQUFNLENBQUMzQix1REFBVyxDQUFDLENBQVE7UUFDN0IsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFJTCxFQUFFLEVBQUVJLFNBQVMsRUFBRSxDQUFDO1FBQ2QsTUFBTSxzRUFBRXlCLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQW9COzs7Ozs7O3NCQUFDLENBQVU7O0lBQ3ZELENBQUM7SUFDRCxNQUFNLHNFQUNIQyxDQUFJOzs7Ozs7O3VGQUVSQyxDQUFPO1lBQUNDLEtBQUssRUFBQyxDQUF5Qjs7Ozs7Ozs0RkFDckNKLENBQUc7Z0JBQUNJLEtBQUssRUFBQyxDQUFxRTs7Ozs7Ozs7MEZBQzdFSixDQUFHO3dCQUFDSSxLQUFLLEVBQUMsQ0FBMEg7Ozs7Ozs7O2tHQUNsSUMsQ0FBRTtnQ0FBQ0QsS0FBSyxFQUFDLENBQWdFOzs7Ozs7OztvQ0FBQyxDQUN6RTt5R0FBQ0UsQ0FBRTt3Q0FBQ0YsS0FBSyxFQUFDLENBQXdCOzs7Ozs7OztvQ0FBRSxDQUN0Qzs7O2lHQUNDRyxDQUFDO2dDQUFDSCxLQUFLLEVBQUMsQ0FBc0I7Ozs7Ozs7MENBQUMsQ0FBOE47Ozs7eUZBRy9QSixDQUFHO3dCQUFDSSxLQUFLLEVBQUMsQ0FBbUM7Ozs7Ozs7a0NBQzdDdkIsS0FBSyxDQUFDMkIsR0FBRyxDQUFDLFFBQVEsQ0FBUFgsSUFBSTswQ0FDZCxNQUFNLHdEQUFMRyxDQUFHO2dDQUFDSSxLQUFLLEVBQUMsQ0FBc0I7Ozs7Ozs7K0dBQzlCSixDQUFHO29DQUFDSSxLQUFLLEVBQUMsQ0FBa0I7Ozs7Ozs7bUhBQzFCSyxDQUFHO3dDQUFDQyxHQUFHLEVBQUMsQ0FBUzt3Q0FBQ04sS0FBSyxFQUFDLENBQWdEO3dDQUFDTyxHQUFHLEVBQUVkLElBQUksQ0FBQ2UsS0FBSzs7Ozs7Ozs7OytCQUZ0RGYsSUFBSSxDQUFDZ0IsRUFBRTs7Ozs7OztBQWFwRCxDQUFDO0dBakVLeEMsMEJBQTBCOztRQUNURCxnRUFBUzs7O0tBRDFCQywwQkFBMEI7QUFtRWhDLEdBQUssQ0FBQ3lDLGtCQUFrQixHQUFHLFFBQzNCLEdBRGlDLENBQUM7SUFDaEMsTUFBTSxzRUFDSGQsQ0FBRzs7Ozs7Ozt1RkFDRDNCLDBCQUEwQjs7Ozs7Ozs7O0FBR2pDLENBQUM7TUFOS3lDLGtCQUFrQjtBQVF4QiwrREFBZUEsa0JBQWtCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21wb25lbnRzRmlsZXMvRGFzaENvbXBvbmVudHMvZGFzaGJvYXJkQmFubmVyTWFpbi5qc3g/Njk5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVRvYXN0cyB9IGZyb20gXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCI7XG5cbmNvbnN0IERhc2JvYXJkQmFubmVyTWFpbkVsZW1lbnRzID0gKCkgPT4ge1xuICBjb25zdCB7IGFkZFRvYXN0IH0gPSB1c2VUb2FzdHMoKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbdHJlbmRpbmcsIHNldFRyZW5kaW5nXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBkYXRhcyA9IHRyZW5kaW5nO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2Jsb2cvaG90ZWxzXCIpO1xuICAgICAgc2V0VHJlbmRpbmcocmVzdWx0LmRhdGEpO1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gICAgZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUpIHtcbiAgICAgIHZhciBuYW1lRVEgPSBuYW1lICsgXCI9XCI7XG4gICAgICB2YXIgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICAgIGZvcih2YXIgaT0wO2kgPCBjYS5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgdmFyIGMgPSBjYVtpXTtcbiAgICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCk9PScgJykgYyA9IGMuc3Vic3RyaW5nKDEsYy5sZW5ndGgpO1xuICAgICAgICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PSAwKSByZXR1cm4gYy5zdWJzdHJpbmcobmFtZUVRLmxlbmd0aCxjLmxlbmd0aCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgaWYoIWdldENvb2tpZShcInRva2VuXCIpKXtcbiAgICAgIGFkZFRvYXN0KCgnUGxlYXNlIExvZ2luIHRvIENvbnRpbnVlJyksIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiIH0pO1xuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgIH1cbiAgfSwgW10pO1xuXG5cblxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tYmFjay1sb2FkaW5nXCI+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuXG48c2VjdGlvbiBjbGFzcz1cInRleHQtZ3JheS02MDAgYm9keS1mb250XCI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IHB4LTUgcHktMjQgbWQ6ZmxleC1yb3cgZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImxnOmZsZXgtZ3JvdyBtZDp3LTEvMiBsZzpwci0yNCBtZDpwci0xNiBmbGV4IGZsZXgtY29sIG1kOml0ZW1zLXN0YXJ0IG1kOnRleHQtbGVmdCBtYi0xNiBtZDptYi0wIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgPGgxIGNsYXNzPVwidGl0bGUtZm9udCBzbTp0ZXh0LTR4bCB0ZXh0LTN4bCBtYi00IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5CZWZvcmUgdGhleSBzb2xkIG91dFxuICAgICAgICA8YnIgY2xhc3M9XCJoaWRkZW4gbGc6aW5saW5lLWJsb2NrXCIvPnJlYWR5bWFkZSBnbHV0ZW5cbiAgICAgIDwvaDE+XG4gICAgICA8cCBjbGFzcz1cIm1iLTggbGVhZGluZy1yZWxheGVkXCI+Q29wcGVyIG11ZyB0cnktaGFyZCBwaXRjaGZvcmsgcG91ci1vdmVyIGZyZWVnYW4gaGVpcmxvb20gbmV1dHJhIGFpciBwbGFudCBjb2xkLXByZXNzZWQgdGFjb3MgcG9rZSBiZWFyZCB0b3RlIGJhZy4gSGVpcmxvb20gZWNobyBwYXJrIG1sa3NoayB0b3RlIGJhZyBzZWx2YWdlIGhvdCBjaGlja2VuIGF1dGhlbnRpYyB0dW1lcmljIHRydWZmYXV0IGhleGFnb24gdHJ5LWhhcmQgY2hhbWJyYXkuPC9wPlxuICAgICAgXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIG1kOi1tLTIgLW0tMSB3LTMvNVwiPlxuICAgIHtkYXRhcy5tYXAoKGRhdGEpID0+IChcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCB3LTEvMlwiIGtleT17ZGF0YS5pZH0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZDpwLTIgcC0xIHctMS8yXCI+XG4gICAgICAgICAgPGltZyBhbHQ9XCJnYWxsZXJ5XCIgY2xhc3M9XCJ3LWZ1bGwgb2JqZWN0LWNvdmVyIGgtZnVsbCBvYmplY3QtY2VudGVyIGJsb2NrXCIgc3JjPXtkYXRhLmltYWdlfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgICBcbiAgPC9kaXY+XG48L3NlY3Rpb24+XG5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5jb25zdCBEYXNib2FyZEJhbm5lck1haW4gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxEYXNib2FyZEJhbm5lck1haW5FbGVtZW50cyAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzYm9hcmRCYW5uZXJNYWluO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkxpbmsiLCJyb3V0ZXIiLCJ1c2VUb2FzdHMiLCJEYXNib2FyZEJhbm5lck1haW5FbGVtZW50cyIsImFkZFRvYXN0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidHJlbmRpbmciLCJzZXRUcmVuZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJkYXRhcyIsImdldENvb2tpZSIsIm5hbWUiLCJuYW1lRVEiLCJjYSIsImRvY3VtZW50IiwiY29va2llIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwiYyIsImNoYXJBdCIsInN1YnN0cmluZyIsImluZGV4T2YiLCJmZXRjaERhdGEiLCJyZXN1bHQiLCJkYXRhIiwiYXBwZWFyYW5jZSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwic2VjdGlvbiIsImNsYXNzIiwiaDEiLCJiciIsInAiLCJtYXAiLCJpbWciLCJhbHQiLCJzcmMiLCJpbWFnZSIsImlkIiwiRGFzYm9hcmRCYW5uZXJNYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/componentsFiles/DashComponents/dashboardBannerMain.jsx\n");

/***/ })

});