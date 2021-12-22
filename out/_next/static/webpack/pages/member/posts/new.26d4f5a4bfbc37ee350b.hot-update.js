webpackHotUpdate_N_E("pages/member/posts/new",{

/***/ "./src/pages/member/posts/new.tsx":
/*!****************************************!*\
  !*** ./src/pages/member/posts/new.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_constants_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/constants/url */ "./src/common/constants/url.ts");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Layout */ "./src/components/Layout.tsx");
/* harmony import */ var _auth_AuthProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/auth/AuthProvider */ "./src/auth/AuthProvider.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _components_pages_Head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/pages/Head */ "./src/components/pages/Head.tsx");
/* harmony import */ var _components_pages_Member_Posts_MemberPostsForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/pages/Member/Posts/MemberPostsForm */ "./src/components/pages/Member/Posts/MemberPostsForm.tsx");
var _jsxFileName = "/root/study/nextjs-nestjs-graphql/src/pages/member/posts/new.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var MemberPostsNew = function MemberPostsNew() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var auth = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_auth_AuthProvider__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      nowLoading = _useState[0],
      setNowLoading = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var user = auth.currentUser;

    if (!user) {
      router.push(_common_constants_url__WEBPACK_IMPORTED_MODULE_2__["URL"].LOGIN);
    } else {
      setNowLoading(false);
    }
  }, []);

  if (nowLoading) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Loading...");
  }

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_components_pages_Head__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "\u6295\u7A3F\u767B\u9332",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("nav", {
    className: "breadcrumb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: _common_constants_url__WEBPACK_IMPORTED_MODULE_2__["URL"].HOME,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: "home",
    style: {
      width: 16
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 19
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }
  }, "HOME")))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: _common_constants_url__WEBPACK_IMPORTED_MODULE_2__["URL"].MEMBER,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 19
    }
  }, "\u30DE\u30A4\u30DA\u30FC\u30B8")))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "\u6295\u7A3F\u767B\u9332"))), __jsx("div", {
    className: "entry-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "entry-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "\u6295\u7A3F\u767B\u9332")), __jsx("div", {
    className: "entry-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(_components_pages_Member_Posts_MemberPostsForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
    user: auth.currentUser,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }))));
};

_s(MemberPostsNew, "sLYmUp+GtbJF6BM9gEDud0lfLGo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = MemberPostsNew;
/* harmony default export */ __webpack_exports__["default"] = (MemberPostsNew);

var _c;

$RefreshReg$(_c, "MemberPostsNew");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21lbWJlci9wb3N0cy9uZXcudHN4Il0sIm5hbWVzIjpbIk1lbWJlclBvc3RzTmV3Iiwicm91dGVyIiwidXNlUm91dGVyIiwiYXV0aCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsInVzZVN0YXRlIiwibm93TG9hZGluZyIsInNldE5vd0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJwdXNoIiwiVVJMIiwiTE9HSU4iLCJIT01FIiwid2lkdGgiLCJNRU1CRVIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBa0IsR0FBRyxTQUFyQkEsY0FBcUIsR0FBTTtBQUFBOztBQUMvQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyx3REFBVSxDQUFDQyw4REFBRCxDQUF2Qjs7QUFGK0Isa0JBR0tDLHNEQUFRLENBQVUsSUFBVixDQUhiO0FBQUEsTUFHeEJDLFVBSHdCO0FBQUEsTUFHWkMsYUFIWTs7QUFLL0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLElBQUksR0FBR1AsSUFBSSxDQUFDUSxXQUFsQjs7QUFDQSxRQUFJLENBQUNELElBQUwsRUFBVztBQUNUVCxZQUFNLENBQUNXLElBQVAsQ0FBWUMseURBQUcsQ0FBQ0MsS0FBaEI7QUFDRCxLQUZELE1BRU87QUFDTE4sbUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDRDtBQUNGLEdBUFEsRUFPTixFQVBNLENBQVQ7O0FBU0EsTUFBSUQsVUFBSixFQUFnQjtBQUNkLFdBQU8sZ0ZBQVA7QUFDRDs7QUFFRCxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBTSxTQUFLLEVBQUMsMEJBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRU0seURBQUcsQ0FBQ0UsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBQyxNQUF0QjtBQUE2QixTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLENBREYsQ0FERixDQURGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVILHlEQUFHLENBQUNJLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FERixDQURGLENBREYsQ0FURixFQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQWhCRixDQURGLENBSkYsRUF3QkU7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURGLENBeEJGLEVBMkJFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0ZBQUQ7QUFBaUIsUUFBSSxFQUFFZCxJQUFJLENBQUNRLFdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQTNCRixDQUZGLENBREY7QUFvQ0QsQ0F0REQ7O0dBQU1YLGM7VUFDV0UscUQ7OztLQURYRixjO0FBd0RTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZW1iZXIvcG9zdHMvbmV3LjI2ZDRmNWE0YmZiYzM3ZWUzNTBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IFVSTCB9IGZyb20gJ0AvY29tbW9uL2NvbnN0YW50cy91cmwnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICdAL2F1dGgvQXV0aFByb3ZpZGVyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IEhlYWQgZnJvbSAnQC9jb21wb25lbnRzL3BhZ2VzL0hlYWQnXHJcbmltcG9ydCBNZW1iZXJQb3N0c0Zvcm0gZnJvbSAnQC9jb21wb25lbnRzL3BhZ2VzL01lbWJlci9Qb3N0cy9NZW1iZXJQb3N0c0Zvcm0nXHJcblxyXG5jb25zdCBNZW1iZXJQb3N0c05ldzogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBhdXRoID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxuICBjb25zdCBbbm93TG9hZGluZywgc2V0Tm93TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXJcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICByb3V0ZXIucHVzaChVUkwuTE9HSU4pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXROb3dMb2FkaW5nKGZhbHNlKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICBpZiAobm93TG9hZGluZykge1xyXG4gICAgcmV0dXJuIDw+TG9hZGluZy4uLjwvPlxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxIZWFkIHRpdGxlPVwi5oqV56i/55m76YyyXCIgLz5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy88IS0tIOODkeODs+OBj+OBmiAtLT5cclxuICAgICAgICB9XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtVUkwuSE9NRX0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiaG9tZVwiIHN0eWxlPXt7IHdpZHRoOiAxNiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5IT01FPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1VSTC5NRU1CRVJ9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPuODnuOCpOODmuODvOOCuDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT7mipXnqL/nmbvpjLI8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVudHJ5LWhlYWRlclwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImVudHJ5LXRpdGxlXCI+5oqV56i/55m76YyyPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVudHJ5LWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxNZW1iZXJQb3N0c0Zvcm0gdXNlcj17YXV0aC5jdXJyZW50VXNlcn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW1iZXJQb3N0c05ld1xyXG4iXSwic291cmNlUm9vdCI6IiJ9