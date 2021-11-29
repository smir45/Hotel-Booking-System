"use strict";
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
exports.id = "pages/blog/[blogid]";
exports.ids = ["pages/blog/[blogid]"];
exports.modules = {

/***/ "./pages/blog/[blogid].js":
/*!********************************!*\
  !*** ./pages/blog/[blogid].js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst getStaticPaths = async ()=>{\n    const res = await fetch(\"http://localhost:8000/api/blog/post/get\");\n    const data = await res.json();\n    console.log(data);\n    const paths = data.map((post)=>{\n        return {\n            params: {\n                slug: post.slug\n            }\n        };\n    });\n    return {\n        paths,\n        fallback: false\n    };\n};\nconst getStaticProps = async ({ context  })=>{\n    const slug = context.params.slug;\n    const res = await fetch(\"http://localhost:8000/api/blog/post/\" + slug);\n    const data = await res.json();\n    return {\n        props: {\n            post: data\n        }\n    };\n};\nconst BlogPost = ({ post  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/blog/[blogid].js\",\n            lineNumber: 31,\n            columnNumber: 9\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/blog/[blogid].js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                },\n                __self: undefined,\n                children: \"Trial\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/blog/[blogid].js\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                },\n                __self: undefined,\n                children: post.title\n            })\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPost);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tibG9naWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlCO0FBRWxCLEtBQUssQ0FBQ0MsY0FBYyxhQUFlLENBQUM7SUFDdkMsS0FBSyxDQUFDQyxHQUFHLEdBQUcsS0FBSyxDQUFDQyxLQUFLLENBQUMsQ0FBeUM7SUFDakUsS0FBSyxDQUFDQyxJQUFJLEdBQUcsS0FBSyxDQUFDRixHQUFHLENBQUNHLElBQUk7SUFDM0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJO0lBRWhCLEtBQUssQ0FBQ0ksS0FBSyxHQUFHSixJQUFJLENBQUNLLEdBQUcsRUFBQ0MsSUFBSSxHQUFJLENBQUM7UUFDNUIsTUFBTSxDQUFDLENBQUM7WUFDSkMsTUFBTSxFQUFFLENBQUM7Z0JBQUNDLElBQUksRUFBRUYsSUFBSSxDQUFDRSxJQUFJO1lBQUEsQ0FBQztRQUM5QixDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sRUFBQztRQUNISixLQUFLO1FBQ0xLLFFBQVEsRUFBRSxLQUFLO0lBQ25CLENBQUM7QUFDTCxDQUFDO0FBRU0sS0FBSyxDQUFDQyxjQUFjLFVBQVUsQ0FBQyxDQUFDQyxPQUFPLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDbEQsS0FBSyxDQUFDSCxJQUFJLEdBQUdHLE9BQU8sQ0FBQ0osTUFBTSxDQUFDQyxJQUFJO0lBQ2hDLEtBQUssQ0FBQ1YsR0FBRyxHQUFHLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLENBQXNDLHdDQUFHUyxJQUFJO0lBQ3JFLEtBQUssQ0FBQ1IsSUFBSSxHQUFHLEtBQUssQ0FBQ0YsR0FBRyxDQUFDRyxJQUFJO0lBRTNCLE1BQU0sQ0FBQyxDQUFDO1FBQ0pXLEtBQUssRUFBRSxDQUFDO1lBQUNOLElBQUksRUFBRU4sSUFBSTtRQUFDLENBQUM7SUFDekIsQ0FBQztBQUNMLENBQUM7QUFFRCxLQUFLLENBQUNhLFFBQVEsSUFBSSxDQUFDLENBQUNQLElBQUksRUFBQyxDQUFDLEdBQUssQ0FBQztJQUM1QixNQUFNLHVFQUNEUSxDQUFHOzs7Ozs7OztpRkFDQ0MsQ0FBRTs7Ozs7OzswQkFBQyxDQUFLOztpRkFDUkEsQ0FBRTs7Ozs7OzswQkFBRVQsSUFBSSxDQUFDVSxLQUFLOzs7O0FBRzNCLENBQUM7QUFFRCxpRUFBZUgsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2Jsb2cvW2Jsb2dpZF0uanM/MzhjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9ibG9nL3Bvc3QvZ2V0XCIpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcChwb3N0ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhcmFtczogeyBzbHVnOiBwb3N0LnNsdWd9XG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybntcbiAgICAgICAgcGF0aHMsXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgY29udGV4dCB9KSA9PiB7XG4gICAgY29uc3Qgc2x1ZyA9IGNvbnRleHQucGFyYW1zLnNsdWc7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2Jsb2cvcG9zdC9cIiArIHNsdWcpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHsgcG9zdDogZGF0YSB9XG4gICAgfVxufVxuXG5jb25zdCBCbG9nUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+VHJpYWw8L2gxPlxuICAgICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvZ1Bvc3RcbiJdLCJuYW1lcyI6WyJheGlvcyIsImdldFN0YXRpY1BhdGhzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJwYXRocyIsIm1hcCIsInBvc3QiLCJwYXJhbXMiLCJzbHVnIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwcm9wcyIsIkJsb2dQb3N0IiwiZGl2IiwiaDEiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[blogid].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/[blogid].js"));
module.exports = __webpack_exports__;

})();