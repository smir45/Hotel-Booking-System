"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/componentsFiles/dashboardBanner.jsx":
/*!********************************************************!*\
  !*** ./components/componentsFiles/dashboardBanner.jsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-date-range */ \"./node_modules/react-date-range/dist/index.js\");\n/* harmony import */ var react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-date-range/dist/styles.css */ \"./node_modules/react-date-range/dist/styles.css\");\n/* harmony import */ var react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-date-range/dist/theme/default.css */ \"./node_modules/react-date-range/dist/theme/default.css\");\n/* harmony import */ var react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined, _this1 = undefined;\nvar _s = $RefreshSig$();\nvar DashboardBannerElements = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), searchInput = ref[0], setSearchInput = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date()), startDate = ref1[0], setStartDate = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date()), endDate = ref2[0], setEndDate = ref2[1];\n    var selectionRange = {\n        startDate: startDate,\n        endDate: endDate,\n        key: 'Selection'\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/components/componentsFiles/dashboardBanner.jsx\",\n            lineNumber: 18,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"container p-5 min-w-full\",\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/components/componentsFiles/dashboardBanner.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"flex p-5 w-auto items-center m-auto justify-center border-2 \",\n                __source: {\n                    fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/components/componentsFiles/dashboardBanner.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"flex\",\n                        __source: {\n                            fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/components/componentsFiles/dashboardBanner.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                className: \"p-2 w-80 border-2 rounded-l-xl border-pmry outline-none \",\n                                type: \"search\",\n                                name: \"search\",\n                                id: \"search\",\n                                placeholder: \"Search your destination\",\n                                __source: {\n                                    fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/components/componentsFiles/dashboardBanner.jsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 13\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-white bg-pmry p-2 border-2 rounded-r-xl border-pmry\",\n                                __source: {\n                                    fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/components/componentsFiles/dashboardBanner.jsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiSearch, {\n                                    className: \"text-2xl\",\n                                    __source: {\n                                        fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/components/componentsFiles/dashboardBanner.jsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this\n                                })\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"date\",\n                        __source: {\n                            fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/components/componentsFiles/dashboardBanner.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"checkin\",\n                            __source: {\n                                fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/components/componentsFiles/dashboardBanner.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_date_range__WEBPACK_IMPORTED_MODULE_2__.DateRangePicker, {\n                                ranges: [\n                                    selectionRange\n                                ],\n                                onChange: _this.handleSelect,\n                                __source: {\n                                    fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/components/componentsFiles/dashboardBanner.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                },\n                                __self: _this\n                            })\n                        })\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s(DashboardBannerElements, \"MB9KV/6AXLC8Da/liq2i+ig2w/s=\");\n_c = DashboardBannerElements;\nvar DashboardBanner = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/components/componentsFiles/dashboardBanner.jsx\",\n            lineNumber: 49,\n            columnNumber: 5\n        },\n        __self: _this1,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DashboardBannerElements, {\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/finalyearproject/client/components/componentsFiles/dashboardBanner.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            },\n            __self: _this1\n        })\n    }));\n};\n_c1 = DashboardBanner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardBanner);\nvar _c, _c1;\n$RefreshReg$(_c, \"DashboardBannerElements\");\n$RefreshReg$(_c1, \"DashboardBanner\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbXBvbmVudHNGaWxlcy9kYXNoYm9hcmRCYW5uZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDUDtBQUNTO0FBQ1Q7QUFDTzs7O0FBRWhELEdBQUssQ0FBQ0ssdUJBQXVCLEdBQUcsUUFDaEMsR0FEc0MsQ0FBQzs7SUFDbkMsR0FBSyxDQUFpQ0osR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBMUNLLFdBQVcsR0FBb0JMLEdBQVksS0FBOUJNLGNBQWMsR0FBSU4sR0FBWTtJQUNsRCxHQUFLLENBQThCQSxJQUFvQixHQUFwQkEsK0NBQVEsQ0FBQyxHQUFHLENBQUNPLElBQUksS0FBNUNDLFNBQVMsR0FBa0JSLElBQW9CLEtBQXBDUyxZQUFZLEdBQUlULElBQW9CO0lBQ3ZELEdBQUssQ0FBeUJBLElBQW9CLEdBQXBCQSwrQ0FBUSxDQUFDLEdBQUcsQ0FBQ08sSUFBSSxLQUF4Q0csT0FBTyxHQUFnQlYsSUFBb0IsS0FBbENXLFVBQVUsR0FBSVgsSUFBb0I7SUFFbEQsR0FBSyxDQUFDWSxjQUFjLEdBQUcsQ0FBQztRQUNwQkosU0FBUyxFQUFFQSxTQUFTO1FBQ3BCRSxPQUFPLEVBQUVBLE9BQU87UUFDaEJHLEdBQUcsRUFBRSxDQUFXO0lBQ3BCLENBQUM7SUFDSCxNQUFNLHNFQUNIQyxDQUFJOzs7Ozs7O3VGQUNGQyxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUEwQjs7Ozs7Ozs0RkFDdENELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUE4RDs7Ozs7Ozs7MEZBQzFFRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBTTs7Ozs7Ozs7aUdBQ2xCQyxDQUFLO2dDQUNKRCxTQUFTLEVBQUMsQ0FBMEQ7Z0NBQ3BFRSxJQUFJLEVBQUMsQ0FBUTtnQ0FDYkMsSUFBSSxFQUFDLENBQVE7Z0NBQ2JDLEVBQUUsRUFBQyxDQUFRO2dDQUNYQyxXQUFXLEVBQUMsQ0FBeUI7Ozs7Ozs7O2lHQUV0Q04sQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQTBEOzs7Ozs7OytHQUN0RWQsb0RBQVE7b0NBQUNjLFNBQVMsRUFBQyxDQUFVOzs7Ozs7Ozs7Ozt5RkFHakNELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFNOzs7Ozs7O3VHQUNsQkQsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQVM7Ozs7Ozs7MkdBQ3ZCYiw2REFBZTtnQ0FDcEJtQixNQUFNLEVBQUUsQ0FBQ1Y7b0NBQUFBLGNBQWM7Z0NBQUEsQ0FBQztnQ0FDeEJXLFFBQVEsUUFBT0MsWUFBWTs7Ozs7Ozs7Ozs7Ozs7QUFRbkMsQ0FBQztHQXRDS3BCLHVCQUF1QjtLQUF2QkEsdUJBQXVCO0FBd0M3QixHQUFLLENBQUNxQixlQUFlLEdBQUcsUUFDeEIsR0FEOEIsQ0FBQztJQUM3QixNQUFNLHNFQUNIWCxDQUFJOzs7Ozs7O3VGQUNGVix1QkFBdUI7Ozs7Ozs7OztBQUc5QixDQUFDO01BTktxQixlQUFlO0FBUXJCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21wb25lbnRzRmlsZXMvZGFzaGJvYXJkQmFubmVyLmpzeD9lM2IyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmlTZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCB7IERhdGVSYW5nZVBpY2tlciB9IGZyb20gJ3JlYWN0LWRhdGUtcmFuZ2UnO1xuaW1wb3J0ICdyZWFjdC1kYXRlLXJhbmdlL2Rpc3Qvc3R5bGVzLmNzcyc7IFxuaW1wb3J0ICdyZWFjdC1kYXRlLXJhbmdlL2Rpc3QvdGhlbWUvZGVmYXVsdC5jc3MnOyBcblxuY29uc3QgRGFzaGJvYXJkQmFubmVyRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCAgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuICAgIGNvbnN0IFtlbmREYXRlLCBzZXRFbmREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuXG4gICAgY29uc3Qgc2VsZWN0aW9uUmFuZ2UgPSB7XG4gICAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiBlbmREYXRlLFxuICAgICAgICBrZXk6ICdTZWxlY3Rpb24nXG4gICAgfVxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC01IG1pbi13LWZ1bGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHAtNSB3LWF1dG8gaXRlbXMtY2VudGVyIG0tYXV0byBqdXN0aWZ5LWNlbnRlciBib3JkZXItMiBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgdy04MCBib3JkZXItMiByb3VuZGVkLWwteGwgYm9yZGVyLXBtcnkgb3V0bGluZS1ub25lIFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgaWQ9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCB5b3VyIGRlc3RpbmF0aW9uXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctcG1yeSBwLTIgYm9yZGVyLTIgcm91bmRlZC1yLXhsIGJvcmRlci1wbXJ5XCI+XG4gICAgICAgICAgICAgIDxGaVNlYXJjaCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tpblwiPlxuICAgICAgICAgICAgPERhdGVSYW5nZVBpY2tlclxuICAgICAgICByYW5nZXM9e1tzZWxlY3Rpb25SYW5nZV19XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdH1cbiAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5jb25zdCBEYXNoYm9hcmRCYW5uZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8RGFzaGJvYXJkQmFubmVyRWxlbWVudHMgLz5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRCYW5uZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZpU2VhcmNoIiwiRGF0ZVJhbmdlUGlja2VyIiwiRGFzaGJvYXJkQmFubmVyRWxlbWVudHMiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwiRGF0ZSIsInN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsImVuZERhdGUiLCJzZXRFbmREYXRlIiwic2VsZWN0aW9uUmFuZ2UiLCJrZXkiLCJtYWluIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImlkIiwicGxhY2Vob2xkZXIiLCJyYW5nZXMiLCJvbkNoYW5nZSIsImhhbmRsZVNlbGVjdCIsIkRhc2hib2FyZEJhbm5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/componentsFiles/dashboardBanner.jsx\n");

/***/ })

});