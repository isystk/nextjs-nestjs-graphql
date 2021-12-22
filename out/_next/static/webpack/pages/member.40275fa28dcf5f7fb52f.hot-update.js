webpackHotUpdate_N_E("pages/member",{

/***/ "./src/auth/AuthProvider.tsx":
/*!***********************************!*\
  !*** ./src/auth/AuthProvider.tsx ***!
  \***********************************/
/*! exports provided: AuthContext, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utilities_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utilities/api */ "./src/utilities/api.ts");
/* harmony import */ var _common_constants_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/constants/api */ "./src/common/constants/api.ts");




var _jsxFileName = "/root/study/nextjs-nestjs-graphql/src/auth/AuthProvider.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["createContext"])({
  currentUser: undefined,
  login: function login() {
    return undefined;
  },
  logout: function logout() {
    return undefined;
  }
});

var AuthProvider = function AuthProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      currentUser = _useState[0],
      setCurrentUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      token = _useState2[0],
      setToken = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      loading = _useState3[0],
      setLoading = _useState3[1];

  var fetchCurrentUser = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _yield$client$mutate, _yield$client$mutate$, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _utilities_api__WEBPACK_IMPORTED_MODULE_4__["default"].mutate({
                mutation: _common_constants_api__WEBPACK_IMPORTED_MODULE_5__["AUTH"],
                variables: {
                  token: token
                }
              });

            case 3:
              _yield$client$mutate = _context.sent;
              _yield$client$mutate$ = _yield$client$mutate.data;
              data = _yield$client$mutate$ === void 0 ? {} : _yield$client$mutate$;
              setCurrentUser(_objectSpread(_objectSpread({}, data.auth), {}, {
                token: token
              }));
              setLoading(false);
              _context.next = 12;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function fetchCurrentUser() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var token = localStorage.getItem('authorization');
    setToken(token);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!token) {
      setCurrentUser(null);
    }

    Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetchCurrentUser();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }, [token]);

  if (loading) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, "Loading...");
  }

  console.log(currentUser);

  var login = function login(token) {
    setLoading(true);
    setToken(token);
    localStorage.setItem('authorization', token);
  };

  var logout = function logout() {
    setToken(null);
    localStorage.clear();
  };

  return __jsx(AuthContext.Provider, {
    value: {
      currentUser: currentUser,
      login: login,
      logout: logout
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, children);
};

_s(AuthProvider, "EldR8PBH08Gk42icaaOtrsUuVaw=");

_c = AuthProvider;


var _c;

$RefreshReg$(_c, "AuthProvider");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2F1dGgvQXV0aFByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJjdXJyZW50VXNlciIsInVuZGVmaW5lZCIsImxvZ2luIiwibG9nb3V0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInNldEN1cnJlbnRVc2VyIiwidG9rZW4iLCJzZXRUb2tlbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hDdXJyZW50VXNlciIsImNsaWVudCIsIm11dGF0ZSIsIm11dGF0aW9uIiwiQVVUSCIsInZhcmlhYmxlcyIsImRhdGEiLCJhdXRoIiwidXNlRWZmZWN0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwiY2xlYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBTUEsSUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsQ0FBbUI7QUFDbERDLGFBQVcsRUFBRUMsU0FEcUM7QUFFbERDLE9BQUssRUFBRTtBQUFBLFdBQU1ELFNBQU47QUFBQSxHQUYyQztBQUdsREUsUUFBTSxFQUFFO0FBQUEsV0FBTUYsU0FBTjtBQUFBO0FBSDBDLENBQW5CLENBQWpDOztBQVVBLElBQU1HLFlBQWlCLEdBQUcsU0FBcEJBLFlBQW9CLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjs7QUFBQSxrQkFDWEMsc0RBQVEsRUFERztBQUFBLE1BQzFDTixXQUQwQztBQUFBLE1BQzdCTyxjQUQ2Qjs7QUFBQSxtQkFFdkJELHNEQUFRLEVBRmU7QUFBQSxNQUUxQ0UsS0FGMEM7QUFBQSxNQUVuQ0MsUUFGbUM7O0FBQUEsbUJBR25CSCxzREFBUSxDQUFDLElBQUQsQ0FIVztBQUFBLE1BRzFDSSxPQUgwQztBQUFBLE1BR2pDQyxVQUhpQzs7QUFJakQsTUFBTUMsZ0JBQWdCO0FBQUEsaU1BQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFT0Msc0RBQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQ3hDQyx3QkFBUSxFQUFFQywwREFEOEI7QUFFeENDLHlCQUFTLEVBQUU7QUFDVFQsdUJBQUssRUFBTEE7QUFEUztBQUY2QixlQUFkLENBRlA7O0FBQUE7QUFBQTtBQUFBLDJEQUViVSxJQUZhO0FBRWJBLGtCQUZhLHNDQUVOLEVBRk07QUFRckJYLDRCQUFjLGlDQUFLVyxJQUFJLENBQUNDLElBQVY7QUFBZ0JYLHFCQUFLLEVBQUxBO0FBQWhCLGlCQUFkO0FBQ0FHLHdCQUFVLENBQUMsS0FBRCxDQUFWO0FBVHFCO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCQyxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBZUFRLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1aLEtBQUssR0FBR2EsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGVBQXJCLENBQWQ7QUFDQWIsWUFBUSxDQUFDRCxLQUFELENBQVI7QUFDRCxHQUhRLENBQVQ7QUFLQVkseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxDQUFDWixLQUFMLEVBQVk7QUFDVkQsb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDRDs7QUFDRCxxTEFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDT0ssZ0JBQWdCLEVBRHZCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQ7QUFHRixHQVBTLEVBT1AsQ0FBQ0osS0FBRCxDQVBPLENBQVQ7O0FBU0EsTUFBSUUsT0FBSixFQUFhO0FBQ1gsV0FBTyxnRkFBUDtBQUNEOztBQUVEYSxTQUFPLENBQUNDLEdBQVIsQ0FBWXhCLFdBQVo7O0FBRUEsTUFBTUUsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ00sS0FBRCxFQUFXO0FBQ3ZCRyxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FGLFlBQVEsQ0FBQ0QsS0FBRCxDQUFSO0FBQ0FhLGdCQUFZLENBQUNJLE9BQWIsQ0FBcUIsZUFBckIsRUFBc0NqQixLQUF0QztBQUNELEdBSkQ7O0FBTUEsTUFBTUwsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQk0sWUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNBWSxnQkFBWSxDQUFDSyxLQUFiO0FBQ0QsR0FIRDs7QUFLQSxTQUNFLE1BQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUUxQixpQkFBVyxFQUFYQSxXQUFGO0FBQWVFLFdBQUssRUFBTEEsS0FBZjtBQUFzQkMsWUFBTSxFQUFOQTtBQUF0QixLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLFFBREgsQ0FERjtBQUtELENBdkREOztHQUFNRCxZOztLQUFBQSxZO0FBeUROIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lbWJlci40MDI3NWZhMjhkY2Y1ZjdmYjUyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCBjcmVhdGVDb250ZXh0LCBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZUVmZmVjdCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQC9zdG9yZS9TdG9yZVR5cGVzJ1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCJAL3V0aWxpdGllcy9hcGlcIjtcclxuaW1wb3J0IHsgQVVUSCB9ICBmcm9tICdAL2NvbW1vbi9jb25zdGFudHMvYXBpJ1xyXG5cclxudHlwZSBBdXRoQ29udGV4dFByb3BzID0ge1xyXG4gIGN1cnJlbnRVc2VyOiBVc2VyIHwgbnVsbCB8IHVuZGVmaW5lZFxyXG59XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXV0aENvbnRleHRQcm9wcz4oe1xyXG4gIGN1cnJlbnRVc2VyOiB1bmRlZmluZWQsXHJcbiAgbG9naW46ICgpID0+IHVuZGVmaW5lZCxcclxuICBsb2dvdXQ6ICgpID0+IHVuZGVmaW5lZCxcclxufSlcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGVcclxufVxyXG5cclxuY29uc3QgQXV0aFByb3ZpZGVyOiBWRkMgPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGU8QXV0aENvbnRleHRQcm9wcz4oKTtcclxuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlPEF1dGhDb250ZXh0UHJvcHM+KCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgZmV0Y2hDdXJyZW50VXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSA9IHt9IH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcclxuICAgICAgICBtdXRhdGlvbjogQVVUSCxcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgIHRva2VuLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRDdXJyZW50VXNlcih7Li4uZGF0YS5hdXRoLCB0b2tlbn0pO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0gY2F0Y2goZXJyb3JzKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9ycylcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGhvcml6YXRpb24nKVxyXG4gICAgc2V0VG9rZW4odG9rZW4pXHJcbiAgfSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgc2V0Q3VycmVudFVzZXIobnVsbClcclxuICAgIH1cclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IGZldGNoQ3VycmVudFVzZXIoKVxyXG4gICAgfSkoKVxyXG4gfSwgW3Rva2VuXSk7XHJcbiAgXHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8PkxvYWRpbmcuLi48Lz5cclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKVxyXG5cclxuICBjb25zdCBsb2dpbiA9ICh0b2tlbikgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRva2VuKHRva2VuKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRob3JpemF0aW9uJywgdG9rZW4pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgc2V0VG9rZW4obnVsbCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjdXJyZW50VXNlciwgbG9naW4sIGxvZ291dCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCB7IEF1dGhDb250ZXh0LCBBdXRoUHJvdmlkZXIgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9