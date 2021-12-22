webpackHotUpdate_N_E("pages/member/posts/new",{

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
                token: token,
                id: Number(data.auth.id)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2F1dGgvQXV0aFByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJjdXJyZW50VXNlciIsInVuZGVmaW5lZCIsImxvZ2luIiwibG9nb3V0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInNldEN1cnJlbnRVc2VyIiwidG9rZW4iLCJzZXRUb2tlbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hDdXJyZW50VXNlciIsImNsaWVudCIsIm11dGF0ZSIsIm11dGF0aW9uIiwiQVVUSCIsInZhcmlhYmxlcyIsImRhdGEiLCJhdXRoIiwiaWQiLCJOdW1iZXIiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsInNldEl0ZW0iLCJjbGVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFNQSxJQUFNQSxXQUFXLGdCQUFHQywyREFBYSxDQUFtQjtBQUNsREMsYUFBVyxFQUFFQyxTQURxQztBQUVsREMsT0FBSyxFQUFFO0FBQUEsV0FBTUQsU0FBTjtBQUFBLEdBRjJDO0FBR2xERSxRQUFNLEVBQUU7QUFBQSxXQUFNRixTQUFOO0FBQUE7QUFIMEMsQ0FBbkIsQ0FBakM7O0FBVUEsSUFBTUcsWUFBaUIsR0FBRyxTQUFwQkEsWUFBb0IsT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCOztBQUFBLGtCQUNYQyxzREFBUSxFQURHO0FBQUEsTUFDMUNOLFdBRDBDO0FBQUEsTUFDN0JPLGNBRDZCOztBQUFBLG1CQUV2QkQsc0RBQVEsRUFGZTtBQUFBLE1BRTFDRSxLQUYwQztBQUFBLE1BRW5DQyxRQUZtQzs7QUFBQSxtQkFHbkJILHNEQUFRLENBQUMsSUFBRCxDQUhXO0FBQUEsTUFHMUNJLE9BSDBDO0FBQUEsTUFHakNDLFVBSGlDOztBQUlqRCxNQUFNQyxnQkFBZ0I7QUFBQSxpTUFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVPQyxzREFBTSxDQUFDQyxNQUFQLENBQWM7QUFDeENDLHdCQUFRLEVBQUVDLDBEQUQ4QjtBQUV4Q0MseUJBQVMsRUFBRTtBQUNUVCx1QkFBSyxFQUFMQTtBQURTO0FBRjZCLGVBQWQsQ0FGUDs7QUFBQTtBQUFBO0FBQUEsMkRBRWJVLElBRmE7QUFFYkEsa0JBRmEsc0NBRU4sRUFGTTtBQVFyQlgsNEJBQWMsaUNBQUtXLElBQUksQ0FBQ0MsSUFBVjtBQUFnQlgscUJBQUssRUFBTEEsS0FBaEI7QUFBdUJZLGtCQUFFLEVBQUVDLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDQyxJQUFMLENBQVVDLEVBQVg7QUFBakMsaUJBQWQ7QUFDQVQsd0JBQVUsQ0FBQyxLQUFELENBQVY7QUFUcUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBaEJDLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0Qjs7QUFlQVUseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTWQsS0FBSyxHQUFHZSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsZUFBckIsQ0FBZDtBQUNBZixZQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNELEdBSFEsQ0FBVDtBQUtBYyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNkLEtBQUwsRUFBWTtBQUNWRCxvQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNEOztBQUNELHFMQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNPSyxnQkFBZ0IsRUFEdkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDtBQUdGLEdBUFMsRUFPUCxDQUFDSixLQUFELENBUE8sQ0FBVDs7QUFTQSxNQUFJRSxPQUFKLEVBQWE7QUFDWCxXQUFPLGdGQUFQO0FBQ0Q7O0FBRURlLFNBQU8sQ0FBQ0MsR0FBUixDQUFZMUIsV0FBWjs7QUFFQSxNQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDTSxLQUFELEVBQVc7QUFDdkJHLGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQUYsWUFBUSxDQUFDRCxLQUFELENBQVI7QUFDQWUsZ0JBQVksQ0FBQ0ksT0FBYixDQUFxQixlQUFyQixFQUFzQ25CLEtBQXRDO0FBQ0QsR0FKRDs7QUFNQSxNQUFNTCxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CTSxZQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0FjLGdCQUFZLENBQUNLLEtBQWI7QUFDRCxHQUhEOztBQUtBLFNBQ0UsTUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFBRTVCLGlCQUFXLEVBQVhBLFdBQUY7QUFBZUUsV0FBSyxFQUFMQSxLQUFmO0FBQXNCQyxZQUFNLEVBQU5BO0FBQXRCLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0UsUUFESCxDQURGO0FBS0QsQ0F2REQ7O0dBQU1ELFk7O0tBQUFBLFk7QUF5RE4iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyL3Bvc3RzL25ldy4zNDg2ZjA1NmRiMWNkNDMzN2FjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCBjcmVhdGVDb250ZXh0LCBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZUVmZmVjdCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQC9zdG9yZS9TdG9yZVR5cGVzJ1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCJAL3V0aWxpdGllcy9hcGlcIjtcclxuaW1wb3J0IHsgQVVUSCB9ICBmcm9tICdAL2NvbW1vbi9jb25zdGFudHMvYXBpJ1xyXG5cclxudHlwZSBBdXRoQ29udGV4dFByb3BzID0ge1xyXG4gIGN1cnJlbnRVc2VyOiBVc2VyIHwgbnVsbCB8IHVuZGVmaW5lZFxyXG59XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXV0aENvbnRleHRQcm9wcz4oe1xyXG4gIGN1cnJlbnRVc2VyOiB1bmRlZmluZWQsXHJcbiAgbG9naW46ICgpID0+IHVuZGVmaW5lZCxcclxuICBsb2dvdXQ6ICgpID0+IHVuZGVmaW5lZCxcclxufSlcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGVcclxufVxyXG5cclxuY29uc3QgQXV0aFByb3ZpZGVyOiBWRkMgPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGU8QXV0aENvbnRleHRQcm9wcz4oKTtcclxuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlPEF1dGhDb250ZXh0UHJvcHM+KCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgZmV0Y2hDdXJyZW50VXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSA9IHt9IH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcclxuICAgICAgICBtdXRhdGlvbjogQVVUSCxcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgIHRva2VuLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRDdXJyZW50VXNlcih7Li4uZGF0YS5hdXRoLCB0b2tlbiwgaWQ6IE51bWJlcihkYXRhLmF1dGguaWQpfSk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSBjYXRjaChlcnJvcnMpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZXJyb3JzKVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aG9yaXphdGlvbicpXHJcbiAgICBzZXRUb2tlbih0b2tlbilcclxuICB9KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICBzZXRDdXJyZW50VXNlcihudWxsKVxyXG4gICAgfVxyXG4gICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgZmV0Y2hDdXJyZW50VXNlcigpXHJcbiAgICB9KSgpXHJcbiB9LCBbdG9rZW5dKTtcclxuICBcclxuICBpZiAobG9hZGluZykge1xyXG4gICAgcmV0dXJuIDw+TG9hZGluZy4uLjwvPlxyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coY3VycmVudFVzZXIpXHJcblxyXG4gIGNvbnN0IGxvZ2luID0gKHRva2VuKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VG9rZW4odG9rZW4pO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGhvcml6YXRpb24nLCB0b2tlbik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBzZXRUb2tlbihudWxsKTtcclxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGN1cnJlbnRVc2VyLCBsb2dpbiwgbG9nb3V0IH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHsgQXV0aENvbnRleHQsIEF1dGhQcm92aWRlciB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=