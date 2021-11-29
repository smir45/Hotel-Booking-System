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
exports.id = "pages/blog/[blogslug]";
exports.ids = ["pages/blog/[blogslug]"];
exports.modules = {

/***/ "./pages/blog/[blogslug].js":
/*!**********************************!*\
  !*** ./pages/blog/[blogslug].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getStaticPaths = async ()=>{\n    const res = await fetch(\"http://localhost:8000/api/blog/post/get\");\n    const data = await res.json();\n    console.log(data);\n    const paths = data.map((post)=>{\n        return {\n            params: {\n                slug: post.slug.toString()\n            }\n        };\n    });\n    return {\n        paths,\n        fallback: false\n    };\n};\nconst getStaticProps = async ({ context  })=>{\n    const slug = context.params.slug;\n    const res = await fetch(\"http://localhost:8000/api/blog/post/\" + slug);\n    const data = await res.json();\n    return {\n        props: {\n            post: data\n        }\n    };\n};\nconst BlogPost = ({ post  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/blog/[blogslug].js\",\n            lineNumber: 31,\n            columnNumber: 9\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/ctrlscrpt/Documents/FinalYearProject/client/pages/blog/[blogslug].js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                },\n                __self: undefined,\n                children: \"Trial\"\n            }),\n            \"\\xdf\"\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPost);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tibG9nc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQU8sS0FBSyxDQUFDQSxjQUFjLGFBQWUsQ0FBQztJQUN2QyxLQUFLLENBQUNDLEdBQUcsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUF5QztJQUNqRSxLQUFLLENBQUNDLElBQUksR0FBRyxLQUFLLENBQUNGLEdBQUcsQ0FBQ0csSUFBSTtJQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUk7SUFFaEIsS0FBSyxDQUFDSSxLQUFLLEdBQUdKLElBQUksQ0FBQ0ssR0FBRyxFQUFDQyxJQUFJLEdBQUksQ0FBQztRQUM1QixNQUFNLENBQUMsQ0FBQztZQUNKQyxNQUFNLEVBQUUsQ0FBQztnQkFBQ0MsSUFBSSxFQUFFRixJQUFJLENBQUNFLElBQUksQ0FBQ0MsUUFBUTtZQUFHLENBQUM7UUFDMUMsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNLEVBQUM7UUFDSEwsS0FBSztRQUNMTSxRQUFRLEVBQUUsS0FBSztJQUNuQixDQUFDO0FBQ0wsQ0FBQztBQUdNLEtBQUssQ0FBQ0MsY0FBYyxVQUFVLENBQUMsQ0FBQ0MsT0FBTyxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQ2xELEtBQUssQ0FBQ0osSUFBSSxHQUFHSSxPQUFPLENBQUNMLE1BQU0sQ0FBQ0MsSUFBSTtJQUNoQyxLQUFLLENBQUNWLEdBQUcsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFzQyx3Q0FBR1MsSUFBSTtJQUNyRSxLQUFLLENBQUNSLElBQUksR0FBRyxLQUFLLENBQUNGLEdBQUcsQ0FBQ0csSUFBSTtJQUUzQixNQUFNLENBQUMsQ0FBQztRQUNKWSxLQUFLLEVBQUUsQ0FBQztZQUFDUCxJQUFJLEVBQUVOLElBQUk7UUFBQyxDQUFDO0lBQ3pCLENBQUM7QUFDTCxDQUFDO0FBRUQsS0FBSyxDQUFDYyxRQUFRLElBQUksQ0FBQyxDQUFDUixJQUFJLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFFNUIsTUFBTSx1RUFDRFMsQ0FBRzs7Ozs7Ozs7aUZBQ0NDLENBQUU7Ozs7Ozs7MEJBQUMsQ0FBSzs7WUFBSyxDQUNkOzs7QUFHWixDQUFDO0FBRUQsaUVBQWVGLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL1tibG9nc2x1Z10uanM/MDFhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2Jsb2cvcG9zdC9nZXRcIik7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICBjb25zdCBwYXRocyA9IGRhdGEubWFwKHBvc3QgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFyYW1zOiB7IHNsdWc6IHBvc3Quc2x1Zy50b1N0cmluZygpIH1cbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJue1xuICAgICAgICBwYXRocyxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IGNvbnRleHQgfSkgPT4ge1xuICAgIGNvbnN0IHNsdWcgPSBjb250ZXh0LnBhcmFtcy5zbHVnO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9ibG9nL3Bvc3QvXCIgKyBzbHVnKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7IHBvc3Q6IGRhdGEgfVxuICAgIH1cbn1cblxuY29uc3QgQmxvZ1Bvc3QgPSAoeyBwb3N0IH0pID0+IHtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlRyaWFsPC9oMT7Dn1xuICAgICAgICAgICAgey8qIDxoMT57cG9zdC50aXRsZX08L2gxPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nUG9zdFxuIl0sIm5hbWVzIjpbImdldFN0YXRpY1BhdGhzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJwYXRocyIsIm1hcCIsInBvc3QiLCJwYXJhbXMiLCJzbHVnIiwidG9TdHJpbmciLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInByb3BzIiwiQmxvZ1Bvc3QiLCJkaXYiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[blogslug].js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/blog/[blogslug].js"));
module.exports = __webpack_exports__;

})();