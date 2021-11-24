/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/searchpage";
exports.ids = ["pages/searchpage"];
exports.modules = {

/***/ "./components/componentsFiles/DateRangeComponent.jsx":
/*!***********************************************************!*\
  !*** ./components/componentsFiles/DateRangeComponent.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-date-range */ \"react-date-range\");\n/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_date_range__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-date-range/dist/styles.css */ \"./node_modules/react-date-range/dist/styles.css\");\n/* harmony import */ var react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-date-range/dist/theme/default.css */ \"./node_modules/react-date-range/dist/theme/default.css\");\n/* harmony import */ var react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst DateRangeComponent = ()=>{\n    const { 0: startDate , 1: setStartDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const { 0: endDate , 1: setEndDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const handleSelect = (ranges)=>{\n        setStartDate(ranges.Selection.startDate);\n        setEndDate(ranges.Selection.endDate);\n    };\n    const selectionRange = {\n        startDate: startDate,\n        endDate: endDate,\n        key: \"Selection\"\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DateRangeComponent.jsx\",\n            lineNumber: 21,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"flex col-span-3 flex-col mx-auto\",\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DateRangeComponent.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            },\n            __self: undefined,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_date_range__WEBPACK_IMPORTED_MODULE_2__.DateRangePicker, {\n                ranges: [\n                    selectionRange\n                ],\n                minDate: new Date(),\n                rangeColors: [\n                    \"#375488\",\n                    \"#375485\"\n                ],\n                onChange: handleSelect,\n                __source: {\n                    fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/components/componentsFiles/DateRangeComponent.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                },\n                __self: undefined\n            })\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateRangeComponent);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbXBvbmVudHNGaWxlcy9EYXRlUmFuZ2VDb21wb25lbnQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNBO0FBQ1Q7QUFDTztBQUVoRCxLQUFLLENBQUNJLGtCQUFrQixPQUFTLENBQUM7SUFDaEMsS0FBSyxNQUFFQyxTQUFTLE1BQUVDLFlBQVksTUFBSUwsK0NBQVEsQ0FBQyxHQUFHLENBQUNNLElBQUk7SUFDbkQsS0FBSyxNQUFFQyxPQUFPLE1BQUVDLFVBQVUsTUFBSVIsK0NBQVEsQ0FBQyxHQUFHLENBQUNNLElBQUk7SUFFL0MsS0FBSyxDQUFDRyxZQUFZLElBQUlDLE1BQU0sR0FBSyxDQUFDO1FBQ2hDTCxZQUFZLENBQUNLLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDUCxTQUFTO1FBQ3ZDSSxVQUFVLENBQUNFLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDSixPQUFPO0lBQ3JDLENBQUM7SUFFRCxLQUFLLENBQUNLLGNBQWMsR0FBRyxDQUFDO1FBQ3RCUixTQUFTLEVBQUVBLFNBQVM7UUFDcEJHLE9BQU8sRUFBRUEsT0FBTztRQUNoQk0sR0FBRyxFQUFFLENBQVc7SUFDbEIsQ0FBQztJQUNELE1BQU0sc0VBQ0hDLENBQUk7Ozs7Ozs7dUZBQ0ZDLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQWtDOzs7Ozs7OzJGQUM5Q2QsNkRBQWU7Z0JBQ2RRLE1BQU0sRUFBRSxDQUFDRTtvQkFBQUEsY0FBYztnQkFBQSxDQUFDO2dCQUN4QkssT0FBTyxFQUFFLEdBQUcsQ0FBQ1gsSUFBSTtnQkFDakJZLFdBQVcsRUFBRSxDQUFDO29CQUFBLENBQVM7b0JBQUUsQ0FBUztnQkFBQSxDQUFDO2dCQUNuQ0MsUUFBUSxFQUFFVixZQUFZOzs7Ozs7Ozs7O0FBS2hDLENBQUM7QUFHRCxpRUFBZU4sa0JBQWtCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbXBvbmVudHNGaWxlcy9EYXRlUmFuZ2VDb21wb25lbnQuanN4P2FlZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERhdGVSYW5nZVBpY2tlciB9IGZyb20gXCJyZWFjdC1kYXRlLXJhbmdlXCI7XG5pbXBvcnQgXCJyZWFjdC1kYXRlLXJhbmdlL2Rpc3Qvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IFwicmVhY3QtZGF0ZS1yYW5nZS9kaXN0L3RoZW1lL2RlZmF1bHQuY3NzXCI7XG5cbmNvbnN0IERhdGVSYW5nZUNvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuICBjb25zdCBbZW5kRGF0ZSwgc2V0RW5kRGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcblxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAocmFuZ2VzKSA9PiB7XG4gICAgc2V0U3RhcnREYXRlKHJhbmdlcy5TZWxlY3Rpb24uc3RhcnREYXRlKTtcbiAgICBzZXRFbmREYXRlKHJhbmdlcy5TZWxlY3Rpb24uZW5kRGF0ZSk7XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0aW9uUmFuZ2UgPSB7XG4gICAgc3RhcnREYXRlOiBzdGFydERhdGUsXG4gICAgZW5kRGF0ZTogZW5kRGF0ZSxcbiAgICBrZXk6IFwiU2VsZWN0aW9uXCIsXG4gIH07XG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggY29sLXNwYW4tMyBmbGV4LWNvbCBteC1hdXRvXCI+XG4gICAgICAgIDxEYXRlUmFuZ2VQaWNrZXJcbiAgICAgICAgICByYW5nZXM9e1tzZWxlY3Rpb25SYW5nZV19XG4gICAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX1cbiAgICAgICAgICByYW5nZUNvbG9ycz17W1wiIzM3NTQ4OFwiLCBcIiMzNzU0ODVcIl19XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgRGF0ZVJhbmdlQ29tcG9uZW50OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRGF0ZVJhbmdlUGlja2VyIiwiRGF0ZVJhbmdlQ29tcG9uZW50Iiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiRGF0ZSIsImVuZERhdGUiLCJzZXRFbmREYXRlIiwiaGFuZGxlU2VsZWN0IiwicmFuZ2VzIiwiU2VsZWN0aW9uIiwic2VsZWN0aW9uUmFuZ2UiLCJrZXkiLCJtYWluIiwiZGl2IiwiY2xhc3NOYW1lIiwibWluRGF0ZSIsInJhbmdlQ29sb3JzIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/componentsFiles/DateRangeComponent.jsx\n");

/***/ }),

/***/ "./pages/searchpage.jsx":
/*!******************************!*\
  !*** ./pages/searchpage.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ \"react-icons/fi\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_componentsFiles_DateRangeComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/componentsFiles/DateRangeComponent */ \"./components/componentsFiles/DateRangeComponent.jsx\");\n\n\n\n\nconst SearchPageElements = ()=>{\n    const { 0: searchInput , 1: setSearchInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/searchpage.jsx\",\n            lineNumber: 9,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"container p-5 min-w-full\",\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/searchpage.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            },\n            __self: undefined,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"flex p-5 w-auto items-center m-auto justify-center border-2 \",\n                __source: {\n                    fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/searchpage.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                },\n                __self: undefined,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"flex\",\n                        __source: {\n                            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/searchpage.jsx\",\n                            lineNumber: 12,\n                            columnNumber: 11\n                        },\n                        __self: undefined,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                                className: \"p-2 w-80 border-2 rounded-l-xl border-pmry outline-none \",\n                                type: \"search\",\n                                name: \"search\",\n                                id: \"search\",\n                                placeholder: \"Search your destination\",\n                                __source: {\n                                    fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/searchpage.jsx\",\n                                    lineNumber: 13,\n                                    columnNumber: 13\n                                },\n                                __self: undefined\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"text-white bg-pmry p-2 border-2 rounded-r-xl border-pmry\",\n                                __source: {\n                                    fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/searchpage.jsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 13\n                                },\n                                __self: undefined,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiSearch, {\n                                    className: \"text-2xl\",\n                                    __source: {\n                                        fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/searchpage.jsx\",\n                                        lineNumber: 21,\n                                        columnNumber: 15\n                                    },\n                                    __self: undefined\n                                })\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"date\",\n                        __source: {\n                            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/searchpage.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        },\n                        __self: undefined\n                    })\n                ]\n            })\n        })\n    }));\n};\nconst SearchPage = ()=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/searchpage.jsx\",\n            lineNumber: 35,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SearchPageElements, {\n            __source: {\n                fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/searchpage.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            },\n            __self: undefined\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2hwYWdlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDUDtBQUN3QztBQUVqRixLQUFLLENBQUNLLGtCQUFrQixPQUFTLENBQUM7SUFDOUIsS0FBSyxNQUFFQyxXQUFXLE1BQUVDLGNBQWMsTUFBSU4sK0NBQVEsQ0FBQyxDQUFFO0lBRW5ELE1BQU0sc0VBQ0hPLENBQUk7Ozs7Ozs7dUZBQ0ZDLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQTBCOzs7Ozs7OzRGQUN0Q0QsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQThEOzs7Ozs7OzswRkFDMUVELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFNOzs7Ozs7OztpR0FDbEJDLENBQUs7Z0NBQ0pELFNBQVMsRUFBQyxDQUEwRDtnQ0FDcEVFLElBQUksRUFBQyxDQUFRO2dDQUNiQyxJQUFJLEVBQUMsQ0FBUTtnQ0FDYkMsRUFBRSxFQUFDLENBQVE7Z0NBQ1hDLFdBQVcsRUFBQyxDQUF5Qjs7Ozs7Ozs7aUdBRXRDTixDQUFHO2dDQUFDQyxTQUFTLEVBQUMsQ0FBMEQ7Ozs7Ozs7K0dBQ3RFUCxvREFBUTtvQ0FBQ08sU0FBUyxFQUFDLENBQVU7Ozs7Ozs7Ozs7O3lGQUdqQ0QsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQU07Ozs7Ozs7Ozs7OztBQU8vQixDQUFDO0FBRUQsS0FBSyxDQUFDTSxVQUFVLE9BQVMsQ0FBQztJQUN4QixNQUFNLHNFQUNIUixDQUFJOzs7Ozs7O3VGQUNGSCxrQkFBa0I7Ozs7Ozs7OztBQUd6QixDQUFDO0FBRUQsaUVBQWVXLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3NlYXJjaHBhZ2UuanN4P2QyMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaVNlYXJjaCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuaW1wb3J0IERhdGVSYW5nZUNvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21wb25lbnRzRmlsZXMvRGF0ZVJhbmdlQ29tcG9uZW50XCI7XG5cbmNvbnN0IFNlYXJjaFBhZ2VFbGVtZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTUgbWluLXctZnVsbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcC01IHctYXV0byBpdGVtcy1jZW50ZXIgbS1hdXRvIGp1c3RpZnktY2VudGVyIGJvcmRlci0yIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiB3LTgwIGJvcmRlci0yIHJvdW5kZWQtbC14bCBib3JkZXItcG1yeSBvdXRsaW5lLW5vbmUgXCJcbiAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICBpZD1cInNlYXJjaFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHlvdXIgZGVzdGluYXRpb25cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1wbXJ5IHAtMiBib3JkZXItMiByb3VuZGVkLXIteGwgYm9yZGVyLXBtcnlcIj5cbiAgICAgICAgICAgICAgPEZpU2VhcmNoIGNsYXNzTmFtZT1cInRleHQtMnhsXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICB7LyogPERhdGVSYW5nZUNvbXBvbmVudCAvPiAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5jb25zdCBTZWFyY2hQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPFNlYXJjaFBhZ2VFbGVtZW50cyAvPlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZpU2VhcmNoIiwiRGF0ZVJhbmdlQ29tcG9uZW50IiwiU2VhcmNoUGFnZUVsZW1lbnRzIiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsIm1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiaWQiLCJwbGFjZWhvbGRlciIsIlNlYXJjaFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/searchpage.jsx\n");

/***/ }),

/***/ "./node_modules/react-date-range/dist/styles.css":
/*!*******************************************************!*\
  !*** ./node_modules/react-date-range/dist/styles.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-date-range/dist/theme/default.css":
/*!**************************************************************!*\
  !*** ./node_modules/react-date-range/dist/theme/default.css ***!
  \**************************************************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-date-range":
/*!***********************************!*\
  !*** external "react-date-range" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-date-range");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/searchpage.jsx"));
module.exports = __webpack_exports__;

})();