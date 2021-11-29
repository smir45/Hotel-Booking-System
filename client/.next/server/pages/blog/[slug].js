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
exports.id = "pages/blog/[slug]";
exports.ids = ["pages/blog/[slug]"];
exports.modules = {

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getStaticPaths = async ()=>{\n    const paths = await fetch('https://jsonplaceholder.typicode.com/posts');\n    const posts = await paths.json();\n    const pathsArr = posts.map((post)=>({\n            params: {\n                slug: post.slug\n            }\n        })\n    );\n    return {\n        paths,\n        fallback: false\n    };\n};\nasync function getStaticProps(context) {\n    const res = await fetch(`http://localhost:8000/api/blog/post/get/${context.params.slug}`);\n    const post = await res.json();\n    console.log(post);\n    return {\n        props: {\n            post: post\n        }\n    };\n}\nconst BlogPost = ({ post  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/blog/[slug].js\",\n            lineNumber: 31,\n            columnNumber: 9\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/blog/[slug].js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                },\n                __self: undefined,\n                children: \"Trial\"\n            }),\n            \"\\xdf\"\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPost);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBTyxLQUFLLENBQUNBLGNBQWMsYUFBZSxDQUFDO0lBQ3ZDLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLENBQTRDO0lBQ3RFLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEtBQUssQ0FBQ0YsS0FBSyxDQUFDRyxJQUFJO0lBQzlCLEtBQUssQ0FBQ0MsUUFBUSxHQUFHRixLQUFLLENBQUNHLEdBQUcsRUFBQ0MsSUFBSSxJQUFLLENBQUM7WUFDakNDLE1BQU0sRUFBRSxDQUFDO2dCQUNMQyxJQUFJLEVBQUVGLElBQUksQ0FBQ0UsSUFBSTtZQUNuQixDQUFDO1FBQ0wsQ0FBQzs7SUFDRCxNQUFNLENBQUMsQ0FBQztRQUNKUixLQUFLO1FBQ0xTLFFBQVEsRUFBRSxLQUFLO0lBQ25CLENBQUM7QUFDTCxDQUFDO0FBR00sZUFBZUMsY0FBYyxDQUFDQyxPQUFPLEVBQUUsQ0FBQztJQUMzQyxLQUFLLENBQUNDLEdBQUcsR0FBRyxLQUFLLENBQUNYLEtBQUssRUFBRSx3Q0FBd0MsRUFBRVUsT0FBTyxDQUFDSixNQUFNLENBQUNDLElBQUk7SUFDdEYsS0FBSyxDQUFDRixJQUFJLEdBQUcsS0FBSyxDQUFDTSxHQUFHLENBQUNULElBQUk7SUFDM0JVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixJQUFJO0lBQ2hCLE1BQU0sQ0FBQyxDQUFDO1FBQ0pTLEtBQUssRUFBRSxDQUFDO1lBQ0pULElBQUksRUFBRUEsSUFBSTtRQUNkLENBQUM7SUFDTCxDQUFDO0FBRUgsQ0FBQztBQUVILEtBQUssQ0FBQ1UsUUFBUSxJQUFJLENBQUMsQ0FBQ1YsSUFBSSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBRTVCLE1BQU0sdUVBQ0RXLENBQUc7Ozs7Ozs7O2lGQUNDQyxDQUFFOzs7Ozs7OzBCQUFDLENBQUs7O1lBQUssQ0FDZDs7O0FBR1osQ0FBQztBQUVELGlFQUFlRixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYmxvZy9bc2x1Z10uanM/ZmE3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcGF0aHMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJylcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHBhdGhzLmpzb24oKVxuICAgIGNvbnN0IHBhdGhzQXJyID0gcG9zdHMubWFwKHBvc3QgPT4gKHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBzbHVnOiBwb3N0LnNsdWdcbiAgICAgICAgfVxuICAgIH0pKVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzLFxuICAgICAgICBmYWxsYmFjazogZmFsc2VcbiAgICB9XG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9ibG9nL3Bvc3QvZ2V0LyR7Y29udGV4dC5wYXJhbXMuc2x1Z31gKTtcbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhwb3N0KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcG9zdDogcG9zdFxuICAgICAgICB9XG4gICAgfVxuXG4gIH1cblxuY29uc3QgQmxvZ1Bvc3QgPSAoeyBwb3N0IH0pID0+IHtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlRyaWFsPC9oMT7Dn1xuICAgICAgICAgICAgey8qIDxoMT57cG9zdC50aXRsZX08L2gxPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nUG9zdFxuIl0sIm5hbWVzIjpbImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJmZXRjaCIsInBvc3RzIiwianNvbiIsInBhdGhzQXJyIiwibWFwIiwicG9zdCIsInBhcmFtcyIsInNsdWciLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsIkJsb2dQb3N0IiwiZGl2IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/blog/[slug].js"));
module.exports = __webpack_exports__;

})();