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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined, _this1 = undefined;\nvar DasboardStyles = {\n    border: \"1px solid red\",\n    height: \"100vh\",\n    width: \"100%\"\n};\nvar DasboardBannerMainElements = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/dashboardBannerMain.jsx\",\n            lineNumber: 12,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"\",\n            style: \"background-image: url(https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);\",\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/dashboardBannerMain.jsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            },\n            __self: _this\n        })\n    }));\n};\n_c = DasboardBannerMainElements;\nvar DasboardBannerMain = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/dashboardBannerMain.jsx\",\n            lineNumber: 23,\n            columnNumber: 9\n        },\n        __self: _this1,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DasboardBannerMainElements, {\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DashComponents/dashboardBannerMain.jsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            },\n            __self: _this1\n        })\n    }));\n};\n_c1 = DasboardBannerMain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DasboardBannerMain);\nvar _c, _c1;\n$RefreshReg$(_c, \"DasboardBannerMainElements\");\n$RefreshReg$(_c1, \"DasboardBannerMain\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbXBvbmVudHNGaWxlcy9EYXNoQ29tcG9uZW50cy9kYXNoYm9hcmRCYW5uZXJNYWluLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThCOztBQUU5QixHQUFLLENBQUNDLGNBQWMsR0FBRyxDQUFDO0lBQ3BCQyxNQUFNLEVBQUUsQ0FBZTtJQUN2QkMsTUFBTSxFQUFFLENBQU87SUFDZkMsS0FBSyxFQUFFLENBQU07QUFFakIsQ0FBQztBQUVELEdBQUssQ0FBQ0MsMEJBQTBCLEdBQUcsUUFDbkMsR0FEeUMsQ0FBQztJQUN0QyxNQUFNLHNFQUNEQyxDQUFJOzs7Ozs7O3VGQUNBQyxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFFO1lBQ2pCQyxLQUFLLEVBQUMsQ0FBZ0s7Ozs7Ozs7OztBQUtsTCxDQUFDO0tBVEtKLDBCQUEwQjtBQVdoQyxHQUFLLENBQUNLLGtCQUFrQixHQUFHLFFBQzNCLEdBRGlDLENBQUM7SUFDOUIsTUFBTSxzRUFDREgsQ0FBRzs7Ozs7Ozt1RkFDQ0YsMEJBQTBCOzs7Ozs7Ozs7QUFHdkMsQ0FBQztNQU5LSyxrQkFBa0I7QUFReEIsK0RBQWVBLGtCQUFrQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tcG9uZW50c0ZpbGVzL0Rhc2hDb21wb25lbnRzL2Rhc2hib2FyZEJhbm5lck1haW4uanN4PzY5OTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IERhc2JvYXJkU3R5bGVzID0ge1xuICAgIGJvcmRlcjogXCIxcHggc29saWQgcmVkXCIsXG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiXG5cbn1cblxuY29uc3QgRGFzYm9hcmRCYW5uZXJNYWluRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE4ODA2MTE4NDcxLWYyOGIyMGExZDc5ZD9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTM1MCZxPTgwKTtcIj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICApXG59XG5cbmNvbnN0IERhc2JvYXJkQmFubmVyTWFpbiA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8RGFzYm9hcmRCYW5uZXJNYWluRWxlbWVudHMgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNib2FyZEJhbm5lck1haW47Il0sIm5hbWVzIjpbIlJlYWN0IiwiRGFzYm9hcmRTdHlsZXMiLCJib3JkZXIiLCJoZWlnaHQiLCJ3aWR0aCIsIkRhc2JvYXJkQmFubmVyTWFpbkVsZW1lbnRzIiwibWFpbiIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiRGFzYm9hcmRCYW5uZXJNYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/componentsFiles/DashComponents/dashboardBannerMain.jsx\n");

/***/ })

});