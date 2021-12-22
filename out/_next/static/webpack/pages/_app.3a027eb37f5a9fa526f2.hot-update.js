webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/store/slice/posts.ts":
/*!**********************************!*\
  !*** ./src/store/slice/posts.ts ***!
  \**********************************/
/*! exports provided: fetchStart, fetchFailure, fetchPosts, fetchPost, readPosts, readPost, selectPosts, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStart", function() { return fetchStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFailure", function() { return fetchFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPosts", function() { return fetchPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPost", function() { return fetchPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readPosts", function() { return readPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readPost", function() { return readPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPosts", function() { return selectPosts; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _common_constants_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/constants/api */ "./src/common/constants/api.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utilities_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utilities/api */ "./src/utilities/api.ts");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var requestGetPosts = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var _yield$client$query, loading, error, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _utilities_api__WEBPACK_IMPORTED_MODULE_6__["default"].query({
              query: _common_constants_api__WEBPACK_IMPORTED_MODULE_4__["GET_POSTS"]
            });

          case 2:
            _yield$client$query = _context.sent;
            loading = _yield$client$query.loading;
            error = _yield$client$query.error;
            data = _yield$client$query.data;
            return _context.abrupt("return", {
              loading: loading,
              error: error,
              data: data
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function requestGetPosts() {
    return _ref.apply(this, arguments);
  };
}();

var requestGetPost = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(id) {
    var _yield$client$query2, loading, error, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _utilities_api__WEBPACK_IMPORTED_MODULE_6__["default"].query({
              query: _common_constants_api__WEBPACK_IMPORTED_MODULE_4__["FIND_POST"],
              variables: {
                id: Number(id)
              }
            });

          case 2:
            _yield$client$query2 = _context2.sent;
            loading = _yield$client$query2.loading;
            error = _yield$client$query2.error;
            data = _yield$client$query2.data;
            return _context2.abrupt("return", {
              loading: loading,
              error: error,
              data: data
            });

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function requestGetPost(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var postsSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__["createSlice"])({
  name: 'posts',
  initialState: {
    loading: false,
    error: null,
    items: []
  },
  reducers: {
    // 通信を開始した時に呼ぶ関数
    fetchStart: function fetchStart(state, action) {
      state.loading = true;
      state.error = null;
    },
    // 通信が失敗した時に呼ぶ関数
    fetchFailure: function fetchFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchPosts: function fetchPosts(state, action) {
      state.loading = false;
      state.error = null;
      state.items = lodash__WEBPACK_IMPORTED_MODULE_5__["mapKeys"](action.payload.data.getPosts, 'id');
    },
    fetchPost: function fetchPost(state, action) {
      state.loading = false;
      state.error = null;
      var post = action.payload.data.findPost;
      state.items = _objectSpread(_objectSpread({}, state.items), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, post.id, post));
    }
  }
}); // Actions

var _postsSlice$actions = postsSlice.actions,
    fetchStart = _postsSlice$actions.fetchStart,
    fetchFailure = _postsSlice$actions.fetchFailure,
    fetchPosts = _postsSlice$actions.fetchPosts,
    fetchPost = _postsSlice$actions.fetchPost;


var request = function request(func) {
  return /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              try {
                dispatch(fetchStart());
                dispatch(func);
              } catch (error) {
                dispatch(fetchFailure(error.stack));
              }

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
}; // 外部からはこの関数を呼んでもらう


var readPosts = function readPosts() {
  return /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.t0 = dispatch;
              _context4.t1 = request;
              _context4.t2 = fetchPosts;
              _context4.next = 5;
              return requestGetPosts();

            case 5:
              _context4.t3 = _context4.sent;
              _context4.t4 = (0, _context4.t2)(_context4.t3);
              _context4.t5 = (0, _context4.t1)(_context4.t4);
              (0, _context4.t0)(_context4.t5);

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x3) {
      return _ref4.apply(this, arguments);
    };
  }();
};
var readPost = function readPost(id) {
  return /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.t0 = dispatch;
              _context5.t1 = request;
              _context5.t2 = fetchPost;
              _context5.next = 5;
              return requestGetPost(id);

            case 5:
              _context5.t3 = _context5.sent;
              _context5.t4 = (0, _context5.t2)(_context5.t3);
              _context5.t5 = (0, _context5.t1)(_context5.t4);
              (0, _context5.t0)(_context5.t5);

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x4) {
      return _ref5.apply(this, arguments);
    };
  }();
}; // Selectors

var selectPosts = function selectPosts(_ref6) {
  var posts = _ref6.posts;
  return posts;
};
/* harmony default export */ __webpack_exports__["default"] = (postsSlice.reducer);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3NsaWNlL3Bvc3RzLnRzIl0sIm5hbWVzIjpbInJlcXVlc3RHZXRQb3N0cyIsImNsaWVudCIsInF1ZXJ5IiwiR0VUX1BPU1RTIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInJlcXVlc3RHZXRQb3N0IiwiaWQiLCJGSU5EX1BPU1QiLCJ2YXJpYWJsZXMiLCJOdW1iZXIiLCJwb3N0c1NsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwiaXRlbXMiLCJyZWR1Y2VycyIsImZldGNoU3RhcnQiLCJzdGF0ZSIsImFjdGlvbiIsImZldGNoRmFpbHVyZSIsInBheWxvYWQiLCJmZXRjaFBvc3RzIiwiXyIsImdldFBvc3RzIiwiZmV0Y2hQb3N0IiwicG9zdCIsImZpbmRQb3N0IiwiYWN0aW9ucyIsInJlcXVlc3QiLCJmdW5jIiwiZGlzcGF0Y2giLCJzdGFjayIsInJlYWRQb3N0cyIsInJlYWRQb3N0Iiwic2VsZWN0UG9zdHMiLCJwb3N0cyIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZTtBQUFBLDhMQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNpQkMsc0RBQU0sQ0FBQ0MsS0FBUCxDQUFhO0FBQ2xEQSxtQkFBSyxFQUFFQywrREFBU0E7QUFEa0MsYUFBYixDQURqQjs7QUFBQTtBQUFBO0FBQ2RDLG1CQURjLHVCQUNkQSxPQURjO0FBQ0xDLGlCQURLLHVCQUNMQSxLQURLO0FBQ0VDLGdCQURGLHVCQUNFQSxJQURGO0FBQUEsNkNBSWY7QUFBRUYscUJBQU8sRUFBUEEsT0FBRjtBQUFXQyxtQkFBSyxFQUFMQSxLQUFYO0FBQWtCQyxrQkFBSSxFQUFKQTtBQUFsQixhQUplOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFWOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBaEIsQyxDQVNBOzs7QUFDTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBO0FBQUEsaU1BQU0sa0JBQU9GLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUM3QkEsUUFENkI7QUFBQSw2QkFDcEJGLE9BRG9CO0FBQUEsNkJBQ1pQLFVBRFk7QUFBQTtBQUFBLHFCQUNLdkIsZUFBZSxFQURwQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU47O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFsQjtBQUdBLElBQU1tQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDM0IsRUFBRDtBQUFBO0FBQUEsaU1BQWdCLGtCQUFPd0IsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQ3RDQSxRQURzQztBQUFBLDZCQUM3QkYsT0FENkI7QUFBQSw2QkFDckJKLFNBRHFCO0FBQUE7QUFBQSxxQkFDTG5CLGNBQWMsQ0FBQ0MsRUFBRCxDQURUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFqQixDLENBSVA7O0FBQ08sSUFBTTRCLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBZjtBQUFBLENBQXBCO0FBRVF6Qix5RUFBVSxDQUFDMEIsT0FBMUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zYTAyN2ViMzdmNWE5ZmE1MjZmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBHRVRfUE9TVFMsIEZJTkRfUE9TVCB9ICBmcm9tICdAL2NvbW1vbi9jb25zdGFudHMvYXBpJ1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiQC91dGlsaXRpZXMvYXBpXCI7XHJcblxyXG5jb25zdCByZXF1ZXN0R2V0UG9zdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcclxuICAgIHF1ZXJ5OiBHRVRfUE9TVFMsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfVxyXG59XHJcblxyXG5jb25zdCByZXF1ZXN0R2V0UG9zdCA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcclxuICAgIHF1ZXJ5OiBGSU5EX1BPU1QsXHJcbiAgICB2YXJpYWJsZXM6IHsgaWQ6IE51bWJlcihpZCkgfSxcclxuICB9KTtcclxuICByZXR1cm4geyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9XHJcbn1cclxuXHJcbmNvbnN0IHBvc3RzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ3Bvc3RzJyxcclxuICBpbml0aWFsU3RhdGU6IHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiBudWxsLCBpdGVtczogW10gfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgLy8g6YCa5L+h44KS6ZaL5aeL44GX44Gf5pmC44Gr5ZG844G26Zai5pWwXHJcbiAgICBmZXRjaFN0YXJ0KHN0YXRlPywgYWN0aW9uPykge1xyXG4gICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZVxyXG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGxcclxuICAgIH0sXHJcbiAgICAvLyDpgJrkv6HjgYzlpLHmlZfjgZfjgZ/mmYLjgavlkbzjgbbplqLmlbBcclxuICAgIGZldGNoRmFpbHVyZShzdGF0ZT8sIGFjdGlvbj8pIHtcclxuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWRcclxuICAgIH0sXHJcbiAgICBmZXRjaFBvc3RzKHN0YXRlPywgYWN0aW9uPykge1xyXG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsXHJcbiAgICAgIHN0YXRlLml0ZW1zID0gXy5tYXBLZXlzKGFjdGlvbi5wYXlsb2FkLmRhdGEuZ2V0UG9zdHMsICdpZCcpXHJcbiAgICB9LFxyXG4gICAgZmV0Y2hQb3N0KHN0YXRlPywgYWN0aW9uPykge1xyXG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsXHJcbiAgICAgIGNvbnN0IHBvc3QgPSBhY3Rpb24ucGF5bG9hZC5kYXRhLmZpbmRQb3N0XHJcbiAgICAgIHN0YXRlLml0ZW1zID0geyAuLi5zdGF0ZS5pdGVtcywgW3Bvc3QuaWRdOiBwb3N0IH1cclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuXHJcbi8vIEFjdGlvbnNcclxuZXhwb3J0IGNvbnN0IHtcclxuICBmZXRjaFN0YXJ0LFxyXG4gIGZldGNoRmFpbHVyZSxcclxuICBmZXRjaFBvc3RzLFxyXG4gIGZldGNoUG9zdCxcclxufSA9IHBvc3RzU2xpY2UuYWN0aW9uc1xyXG5cclxuY29uc3QgcmVxdWVzdCA9IChmdW5jKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hTdGFydCgpKVxyXG4gICAgZGlzcGF0Y2goZnVuYylcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hGYWlsdXJlKGVycm9yLnN0YWNrKSlcclxuICB9XHJcbn1cclxuXHJcbi8vIOWklumDqOOBi+OCieOBr+OBk+OBrumWouaVsOOCkuWRvOOCk+OBp+OCguOCieOBhlxyXG5leHBvcnQgY29uc3QgcmVhZFBvc3RzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2gocmVxdWVzdChmZXRjaFBvc3RzKGF3YWl0IHJlcXVlc3RHZXRQb3N0cygpKSkpXHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlYWRQb3N0ID0gKGlkOiBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHJlcXVlc3QoZmV0Y2hQb3N0KGF3YWl0IHJlcXVlc3RHZXRQb3N0KGlkKSkpKVxyXG59XHJcblxyXG4vLyBTZWxlY3RvcnNcclxuZXhwb3J0IGNvbnN0IHNlbGVjdFBvc3RzID0gKHsgcG9zdHMgfSkgPT4gcG9zdHNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RzU2xpY2UucmVkdWNlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9