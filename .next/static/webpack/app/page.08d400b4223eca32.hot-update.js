"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/RecentProjects.tsx":
/*!***************************************!*\
  !*** ./components/RecentProjects.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_FaLocationArrow_react_icons_fa6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FaLocationArrow!=!react-icons/fa6 */ \"(app-pages-browser)/./node_modules/react-icons/fa6/index.mjs\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data */ \"(app-pages-browser)/./data/index.ts\");\n/* harmony import */ var _ui_Pin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/Pin */ \"(app-pages-browser)/./components/ui/Pin.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst RecentProjects = ()=>{\n    _s();\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // Ensures this component only renders after mounting on the client\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setIsMounted(true);\n    }, []);\n    if (!isMounted) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"heading\",\n                children: [\n                    \"A small selection of\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-purple\",\n                        children: \"recent projects\"\n                    }, void 0, false, {\n                        fileName: \"/home/yuvraj/new portfolio/components/RecentProjects.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/yuvraj/new portfolio/components/RecentProjects.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap items-center justify-center p-4 gap-16 mt-10\",\n                children: _data__WEBPACK_IMPORTED_MODULE_3__.projects.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        href: item.github,\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Pin__WEBPACK_IMPORTED_MODULE_4__.PinContainer, {\n                                title: \"Check out the \".concat(item.title, \" code on GitHub\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"relative w-full h-full overflow-hidden lg:rounded-3xl\",\n                                                style: {\n                                                    backgroundColor: \"#13162D\"\n                                                },\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"/bg.png\",\n                                                    alt: \"background\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/yuvraj/new portfolio/components/RecentProjects.tsx\",\n                                                    lineNumber: 40,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/home/yuvraj/new portfolio/components/RecentProjects.tsx\",\n                                                lineNumber: 36,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: item.img,\n                                                alt: \"\".concat(item.title, \" cover\"),\n                                                className: \"z-10 absolute bottom-0\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/yuvraj/new portfolio/components/RecentProjects.tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/yuvraj/new portfolio/components/RecentProjects.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"font-bold lg:text-2xl md:text-xl text-base line-clamp-1\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/home/yuvraj/new portfolio/components/RecentProjects.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"lg:text-xl lg:font-normal font-light text-sm line-clamp-2\",\n                                        style: {\n                                            color: \"#BEC1DD\",\n                                            margin: \"1vh 0\"\n                                        },\n                                        children: item.des\n                                    }, void 0, false, {\n                                        fileName: \"/home/yuvraj/new portfolio/components/RecentProjects.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-between mt-7 mb-3\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center\",\n                                                children: item.iconLists.map((icon, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center\",\n                                                        style: {\n                                                            transform: \"translateX(-\".concat(5 * index + 2, \"px)\")\n                                                        },\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            src: icon,\n                                                            alt: \"icon\",\n                                                            className: \"p-2\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/yuvraj/new portfolio/components/RecentProjects.tsx\",\n                                                            lineNumber: 73,\n                                                            columnNumber: 25\n                                                        }, undefined)\n                                                    }, index, false, {\n                                                        fileName: \"/home/yuvraj/new portfolio/components/RecentProjects.tsx\",\n                                                        lineNumber: 66,\n                                                        columnNumber: 23\n                                                    }, undefined))\n                                            }, void 0, false, {\n                                                fileName: \"/home/yuvraj/new portfolio/components/RecentProjects.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex justify-center items-center\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"flex lg:text-xl md:text-xs text-sm text-purple\",\n                                                        children: \"Check Live Site\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/yuvraj/new portfolio/components/RecentProjects.tsx\",\n                                                        lineNumber: 79,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaLocationArrow_react_icons_fa6__WEBPACK_IMPORTED_MODULE_5__.FaLocationArrow, {\n                                                        className: \"ms-3\",\n                                                        color: \"#CBACF9\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/yuvraj/new portfolio/components/RecentProjects.tsx\",\n                                                        lineNumber: 82,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/yuvraj/new portfolio/components/RecentProjects.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/yuvraj/new portfolio/components/RecentProjects.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/yuvraj/new portfolio/components/RecentProjects.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/yuvraj/new portfolio/components/RecentProjects.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, undefined)\n                    }, item.id, false, {\n                        fileName: \"/home/yuvraj/new portfolio/components/RecentProjects.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/yuvraj/new portfolio/components/RecentProjects.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/yuvraj/new portfolio/components/RecentProjects.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RecentProjects, \"h7njlszr1nxUzrk46zHyBTBrvgI=\");\n_c = RecentProjects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecentProjects);\nvar _c;\n$RefreshReg$(_c, \"RecentProjects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUmVjZW50UHJvamVjdHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNkI7QUFDZTtBQUNNO0FBQ2hCO0FBQ007QUFFeEMsTUFBTU0saUJBQWlCOztJQUNyQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUM7SUFFM0MsbUVBQW1FO0lBQ25FRCxnREFBU0EsQ0FBQztRQUNSTyxhQUFhO0lBQ2YsR0FBRyxFQUFFO0lBRUwsSUFBSSxDQUFDRCxXQUFXLE9BQU87SUFFdkIscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTs7b0JBQVU7b0JBQ0Q7a0NBQ3JCLDhEQUFDRTt3QkFBS0YsV0FBVTtrQ0FBYzs7Ozs7Ozs7Ozs7OzBCQUVoQyw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pOLDJDQUFRQSxDQUFDUyxHQUFHLENBQUMsQ0FBQ0MscUJBQ2IsOERBQUNkLGlEQUFJQTt3QkFDSGUsTUFBTUQsS0FBS0UsTUFBTTt3QkFDakJDLFFBQU87d0JBQ1BDLEtBQUk7a0NBR0osNEVBQUNUOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDTCxpREFBWUE7Z0NBQUNjLE9BQU8saUJBQTRCLE9BQVhMLEtBQUtLLEtBQUssRUFBQzs7a0RBQy9DLDhEQUFDVjt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNEO2dEQUNDQyxXQUFVO2dEQUNWVSxPQUFPO29EQUFFQyxpQkFBaUI7Z0RBQVU7MERBRXBDLDRFQUFDQztvREFBSUMsS0FBSTtvREFBVUMsS0FBSTs7Ozs7Ozs7Ozs7MERBRXpCLDhEQUFDRjtnREFDQ0MsS0FBS1QsS0FBS1EsR0FBRztnREFDYkUsS0FBSyxHQUFjLE9BQVhWLEtBQUtLLEtBQUssRUFBQztnREFDbkJULFdBQVU7Ozs7Ozs7Ozs7OztrREFJZCw4REFBQ0M7d0NBQUdELFdBQVU7a0RBQ1hJLEtBQUtLLEtBQUs7Ozs7OztrREFHYiw4REFBQ007d0NBQ0NmLFdBQVU7d0NBQ1ZVLE9BQU87NENBQ0xNLE9BQU87NENBQ1BDLFFBQVE7d0NBQ1Y7a0RBRUNiLEtBQUtjLEdBQUc7Ozs7OztrREFHWCw4REFBQ25CO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ0Q7Z0RBQUlDLFdBQVU7MERBQ1pJLEtBQUtlLFNBQVMsQ0FBQ2hCLEdBQUcsQ0FBQyxDQUFDaUIsTUFBTUMsc0JBQ3pCLDhEQUFDdEI7d0RBRUNDLFdBQVU7d0RBQ1ZVLE9BQU87NERBQ0xZLFdBQVcsZUFBNkIsT0FBZCxJQUFJRCxRQUFRLEdBQUU7d0RBQzFDO2tFQUVBLDRFQUFDVDs0REFBSUMsS0FBS087NERBQU1OLEtBQUk7NERBQU9kLFdBQVU7Ozs7Ozt1REFOaENxQjs7Ozs7Ozs7OzswREFXWCw4REFBQ3RCO2dEQUFJQyxXQUFVOztrRUFDYiw4REFBQ2U7d0RBQUVmLFdBQVU7a0VBQWlEOzs7Ozs7a0VBRzlELDhEQUFDUCxtR0FBZUE7d0RBQUNPLFdBQVU7d0RBQU9nQixPQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFuRDNDWixLQUFLbUIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQTZEeEI7R0FuRk0zQjtLQUFBQTtBQXFGTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlY2VudFByb2plY3RzLnRzeD84Y2ZhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYUxvY2F0aW9uQXJyb3cgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmE2XCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCJAL2RhdGFcIjtcbmltcG9ydCB7IFBpbkNvbnRhaW5lciB9IGZyb20gXCIuL3VpL1BpblwiO1xuXG5jb25zdCBSZWNlbnRQcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgW2lzTW91bnRlZCwgc2V0SXNNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBFbnN1cmVzIHRoaXMgY29tcG9uZW50IG9ubHkgcmVuZGVycyBhZnRlciBtb3VudGluZyBvbiB0aGUgY2xpZW50XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNNb3VudGVkKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgaWYgKCFpc01vdW50ZWQpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS0yMFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmdcIj5cbiAgICAgICAgQSBzbWFsbCBzZWxlY3Rpb24gb2Z7XCIgXCJ9XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHVycGxlXCI+cmVjZW50IHByb2plY3RzPC9zcGFuPlxuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCBnYXAtMTYgbXQtMTBcIj5cbiAgICAgICAge3Byb2plY3RzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBocmVmPXtpdGVtLmdpdGh1Yn1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOm1pbi1oLVszMi41cmVtXSBoLVsyNXJlbV0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc206dy05NiB3LVs4MHZ3XVwiPlxuICAgICAgICAgICAgICA8UGluQ29udGFpbmVyIHRpdGxlPXtgQ2hlY2sgb3V0IHRoZSAke2l0ZW0udGl0bGV9IGNvZGUgb24gR2l0SHViYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzbTp3LTk2IHctWzgwdnddIG92ZXJmbG93LWhpZGRlbiBoLVsyMHZoXSBsZzpoLVszMHZoXSBtYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC1mdWxsIG92ZXJmbG93LWhpZGRlbiBsZzpyb3VuZGVkLTN4bFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMTMxNjJEXCIgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYmcucG5nXCIgYWx0PVwiYmFja2dyb3VuZFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltZ31cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtgJHtpdGVtLnRpdGxlfSBjb3ZlcmB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInotMTAgYWJzb2x1dGUgYm90dG9tLTBcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgbGc6dGV4dC0yeGwgbWQ6dGV4dC14bCB0ZXh0LWJhc2UgbGluZS1jbGFtcC0xXCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxnOnRleHQteGwgbGc6Zm9udC1ub3JtYWwgZm9udC1saWdodCB0ZXh0LXNtIGxpbmUtY2xhbXAtMlwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjQkVDMUREXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxdmggMFwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5kZXN9XG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXQtNyBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmljb25MaXN0cy5tYXAoKGljb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItd2hpdGUvWy4yXSByb3VuZGVkLWZ1bGwgYmctYmxhY2sgbGc6dy0xMCBsZzpoLTEwIHctOCBoLTggZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHs1ICogaW5kZXggKyAyfXB4KWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpY29ufSBhbHQ9XCJpY29uXCIgY2xhc3NOYW1lPVwicC0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGxnOnRleHQteGwgbWQ6dGV4dC14cyB0ZXh0LXNtIHRleHQtcHVycGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQ2hlY2sgTGl2ZSBTaXRlXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPEZhTG9jYXRpb25BcnJvdyBjbGFzc05hbWU9XCJtcy0zXCIgY29sb3I9XCIjQ0JBQ0Y5XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1BpbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2VudFByb2plY3RzO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZhTG9jYXRpb25BcnJvdyIsInByb2plY3RzIiwiUGluQ29udGFpbmVyIiwiUmVjZW50UHJvamVjdHMiLCJpc01vdW50ZWQiLCJzZXRJc01vdW50ZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNwYW4iLCJtYXAiLCJpdGVtIiwiaHJlZiIsImdpdGh1YiIsInRhcmdldCIsInJlbCIsInRpdGxlIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpbWciLCJzcmMiLCJhbHQiLCJwIiwiY29sb3IiLCJtYXJnaW4iLCJkZXMiLCJpY29uTGlzdHMiLCJpY29uIiwiaW5kZXgiLCJ0cmFuc2Zvcm0iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RecentProjects.tsx\n"));

/***/ })

});