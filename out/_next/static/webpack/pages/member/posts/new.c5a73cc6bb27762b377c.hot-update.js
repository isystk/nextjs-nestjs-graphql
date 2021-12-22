webpackHotUpdate_N_E("pages/member/posts/new",{

/***/ "./src/store/slice/memberPosts.ts":
/*!****************************************!*\
  !*** ./src/store/slice/memberPosts.ts ***!
  \****************************************/
/*! exports provided: fetchStart, fetchFailure, fetchMemberPosts, fetchMemberPost, unfetchMemberPost, getMemberPosts, getMemberPost, postMemberPost, putMemberPost, deleteMemberPost, selectMemberPosts, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStart", function() { return fetchStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFailure", function() { return fetchFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMemberPosts", function() { return fetchMemberPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMemberPost", function() { return fetchMemberPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unfetchMemberPost", function() { return unfetchMemberPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMemberPosts", function() { return getMemberPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMemberPost", function() { return getMemberPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postMemberPost", function() { return postMemberPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putMemberPost", function() { return putMemberPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMemberPost", function() { return deleteMemberPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMemberPosts", function() { return selectMemberPosts; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _common_constants_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/constants/api */ "./src/common/constants/api.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var requestGetMemberPosts = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(userId) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", {});

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function requestGetMemberPosts(_x) {
    return _ref.apply(this, arguments);
  };
}();

var requestGetMemberPost = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", {});

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function requestGetMemberPost(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var requestPostMemberPost = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(values) {
    var _yield$client$mutate, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return client.mutate({
              mutation: _common_constants_api__WEBPACK_IMPORTED_MODULE_4__["CREATE_POST"],
              variables: _objectSpread({}, values)
            });

          case 2:
            _yield$client$mutate = _context3.sent;
            data = _yield$client$mutate.data;
            console.log('create post', data);
            return _context3.abrupt("return", _objectSpread({}, data.createPost));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function requestPostMemberPost(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var requestPutMemberPost = /*#__PURE__*/function () {
  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(id, values) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", {});

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function requestPutMemberPost(_x4, _x5) {
    return _ref4.apply(this, arguments);
  };
}();

var requestDeleteMemberPost = /*#__PURE__*/function () {
  var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", {});

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function requestDeleteMemberPost(_x6) {
    return _ref5.apply(this, arguments);
  };
}();

var memberPostsSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__["createSlice"])({
  name: 'member_posts',
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
    fetchMemberPosts: function fetchMemberPosts(state, action) {
      state.loading = false;
      state.error = null;
      state.items = lodash__WEBPACK_IMPORTED_MODULE_5__["mapKeys"](action.payload.response, 'id');
    },
    fetchMemberPost: function fetchMemberPost(state, action) {
      state.loading = false;
      state.error = null;
      var post = action.payload.response;
      state.items = _objectSpread(_objectSpread({}, state.items), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, post.id, post));
    },
    unfetchMemberPost: function unfetchMemberPost(state, action) {
      state.loading = false;
      state.error = null;
      var id = action.payload.response;
      delete state.items[id];
      state.items = _objectSpread({}, state.items);
    }
  }
}); // Actions

var _memberPostsSlice$act = memberPostsSlice.actions,
    fetchStart = _memberPostsSlice$act.fetchStart,
    fetchFailure = _memberPostsSlice$act.fetchFailure,
    fetchMemberPosts = _memberPostsSlice$act.fetchMemberPosts,
    fetchMemberPost = _memberPostsSlice$act.fetchMemberPost,
    unfetchMemberPost = _memberPostsSlice$act.unfetchMemberPost;


var request = function request(func) {
  return /*#__PURE__*/function () {
    var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              try {
                dispatch(fetchStart());
                dispatch(func);
              } catch (error) {
                dispatch(fetchFailure(error.stack));
              }

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x7) {
      return _ref6.apply(this, arguments);
    };
  }();
}; // 外部からはこの関数を呼んでもらう


var getMemberPosts = function getMemberPosts(userId) {
  return /*#__PURE__*/function () {
    var _ref7 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.t0 = dispatch;
              _context7.t1 = request;
              _context7.t2 = fetchMemberPosts;
              _context7.next = 5;
              return requestGetMemberPosts(userId);

            case 5:
              _context7.t3 = _context7.sent;
              _context7.t4 = (0, _context7.t2)(_context7.t3);
              _context7.t5 = (0, _context7.t1)(_context7.t4);
              (0, _context7.t0)(_context7.t5);

            case 9:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function (_x8) {
      return _ref7.apply(this, arguments);
    };
  }();
};
var getMemberPost = function getMemberPost(id) {
  return /*#__PURE__*/function () {
    var _ref8 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.t0 = dispatch;
              _context8.t1 = request;
              _context8.t2 = fetchMemberPost;
              _context8.next = 5;
              return requestGetMemberPost(id);

            case 5:
              _context8.t3 = _context8.sent;
              _context8.t4 = (0, _context8.t2)(_context8.t3);
              _context8.t5 = (0, _context8.t1)(_context8.t4);
              (0, _context8.t0)(_context8.t5);

            case 9:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function (_x9) {
      return _ref8.apply(this, arguments);
    };
  }();
};
var postMemberPost = function postMemberPost(value) {
  return /*#__PURE__*/function () {
    var _ref9 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee9(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.t0 = dispatch;
              _context9.t1 = request;
              _context9.t2 = fetchMemberPost;
              _context9.next = 5;
              return requestPostMemberPost(value);

            case 5:
              _context9.t3 = _context9.sent;
              _context9.t4 = (0, _context9.t2)(_context9.t3);
              _context9.t5 = (0, _context9.t1)(_context9.t4);
              (0, _context9.t0)(_context9.t5);

            case 9:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function (_x10) {
      return _ref9.apply(this, arguments);
    };
  }();
};
var putMemberPost = function putMemberPost(id, value) {
  return /*#__PURE__*/function () {
    var _ref10 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee10(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.t0 = dispatch;
              _context10.t1 = request;
              _context10.t2 = fetchMemberPost;
              _context10.next = 5;
              return requestPutMemberPost(id, value);

            case 5:
              _context10.t3 = _context10.sent;
              _context10.t4 = (0, _context10.t2)(_context10.t3);
              _context10.t5 = (0, _context10.t1)(_context10.t4);
              (0, _context10.t0)(_context10.t5);

            case 9:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function (_x11) {
      return _ref10.apply(this, arguments);
    };
  }();
};
var deleteMemberPost = function deleteMemberPost(id) {
  return /*#__PURE__*/function () {
    var _ref11 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee11(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.t0 = dispatch;
              _context11.t1 = request;
              _context11.t2 = unfetchMemberPost;
              _context11.next = 5;
              return requestDeleteMemberPost(id);

            case 5:
              _context11.t3 = _context11.sent;
              _context11.t4 = (0, _context11.t2)(_context11.t3);
              _context11.t5 = (0, _context11.t1)(_context11.t4);
              (0, _context11.t0)(_context11.t5);

            case 9:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function (_x12) {
      return _ref11.apply(this, arguments);
    };
  }();
}; // Selectors

var selectMemberPosts = function selectMemberPosts(_ref12) {
  var memberPosts = _ref12.memberPosts;
  return memberPosts;
};
/* harmony default export */ __webpack_exports__["default"] = (memberPostsSlice.reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3NsaWNlL21lbWJlclBvc3RzLnRzIl0sIm5hbWVzIjpbInJlcXVlc3RHZXRNZW1iZXJQb3N0cyIsInVzZXJJZCIsInJlcXVlc3RHZXRNZW1iZXJQb3N0IiwiaWQiLCJyZXF1ZXN0UG9zdE1lbWJlclBvc3QiLCJ2YWx1ZXMiLCJjbGllbnQiLCJtdXRhdGUiLCJtdXRhdGlvbiIsIkNSRUFURV9QT1NUIiwidmFyaWFibGVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVQb3N0IiwicmVxdWVzdFB1dE1lbWJlclBvc3QiLCJyZXF1ZXN0RGVsZXRlTWVtYmVyUG9zdCIsIm1lbWJlclBvc3RzU2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJpdGVtcyIsInJlZHVjZXJzIiwiZmV0Y2hTdGFydCIsInN0YXRlIiwiYWN0aW9uIiwiZmV0Y2hGYWlsdXJlIiwicGF5bG9hZCIsImZldGNoTWVtYmVyUG9zdHMiLCJfIiwicmVzcG9uc2UiLCJmZXRjaE1lbWJlclBvc3QiLCJwb3N0IiwidW5mZXRjaE1lbWJlclBvc3QiLCJhY3Rpb25zIiwicmVxdWVzdCIsImZ1bmMiLCJkaXNwYXRjaCIsInN0YWNrIiwiZ2V0TWVtYmVyUG9zdHMiLCJnZXRNZW1iZXJQb3N0IiwicG9zdE1lbWJlclBvc3QiLCJ2YWx1ZSIsInB1dE1lbWJlclBvc3QiLCJkZWxldGVNZW1iZXJQb3N0Iiwic2VsZWN0TWVtYmVyUG9zdHMiLCJtZW1iZXJQb3N0cyIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLHFCQUFxQjtBQUFBLDhMQUFHLGlCQUFPQyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FDckIsRUFEcUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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RixPQUQrQztBQUFBLDhCQUN2Q0osZUFEdUM7QUFBQTtBQUFBLHFCQUNqQmxCLG9CQUFvQixDQUFDWixFQUFELEVBQUt5QyxLQUFMLENBREg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXRCO0FBR0EsSUFBTUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDM0MsRUFBRDtBQUFBO0FBQUEsa01BQWdCLG1CQUFPb0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQzlDQSxRQUQ4QztBQUFBLDhCQUNyQ0YsT0FEcUM7QUFBQSw4QkFDN0JGLGlCQUQ2QjtBQUFBO0FBQUEscUJBQ0xuQix1QkFBdUIsQ0FBQ2IsRUFBRCxDQURsQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBekIsQyxDQUlQOztBQUNPLElBQU00QyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsTUFBR0MsV0FBSCxVQUFHQSxXQUFIO0FBQUEsU0FBcUJBLFdBQXJCO0FBQUEsQ0FBMUI7QUFFUS9CLCtFQUFnQixDQUFDZ0MsT0FBaEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyL3Bvc3RzL25ldy5jNWE3M2NjNmJiMjc3NjJiMzc3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBDUkVBVEVfUE9TVCB9ICBmcm9tICdAL2NvbW1vbi9jb25zdGFudHMvYXBpJ1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJ0Avc3RvcmUvU3RvcmVUeXBlcydcclxuXHJcbmNvbnN0IHJlcXVlc3RHZXRNZW1iZXJQb3N0cyA9IGFzeW5jICh1c2VySWQ6IHN0cmluZykgPT4ge1xyXG4gIHJldHVybiB7ICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlcXVlc3RHZXRNZW1iZXJQb3N0ID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcclxuICByZXR1cm4geyAgfVxyXG59XHJcblxyXG5jb25zdCByZXF1ZXN0UG9zdE1lbWJlclBvc3QgPSBhc3luYyAodmFsdWVzOiBQb3N0KSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcclxuICAgIG11dGF0aW9uOiBDUkVBVEVfUE9TVCxcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAuLi52YWx1ZXNcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2coJ2NyZWF0ZSBwb3N0JywgZGF0YSlcclxuICByZXR1cm4geyAuLi5kYXRhLmNyZWF0ZVBvc3QgfVxyXG59XHJcblxyXG5jb25zdCByZXF1ZXN0UHV0TWVtYmVyUG9zdCA9IGFzeW5jIChpZDogc3RyaW5nLCB2YWx1ZXM6IFBvc3QpID0+IHtcclxuICByZXR1cm4geyAgfVxyXG59XHJcblxyXG5jb25zdCByZXF1ZXN0RGVsZXRlTWVtYmVyUG9zdCA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIHsgIH1cclxufVxyXG5cclxuY29uc3QgbWVtYmVyUG9zdHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnbWVtYmVyX3Bvc3RzJyxcclxuICBpbml0aWFsU3RhdGU6IHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiBudWxsLCBpdGVtczogW10gfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgLy8g6YCa5L+h44KS6ZaL5aeL44GX44Gf5pmC44Gr5ZG844G26Zai5pWwXHJcbiAgICBmZXRjaFN0YXJ0KHN0YXRlPywgYWN0aW9uPykge1xyXG4gICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZVxyXG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGxcclxuICAgIH0sXHJcbiAgICAvLyDpgJrkv6HjgYzlpLHmlZfjgZfjgZ/mmYLjgavlkbzjgbbplqLmlbBcclxuICAgIGZldGNoRmFpbHVyZShzdGF0ZT8sIGFjdGlvbj8pIHtcclxuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWRcclxuICAgIH0sXHJcbiAgICBmZXRjaE1lbWJlclBvc3RzKHN0YXRlPywgYWN0aW9uPykge1xyXG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsXHJcbiAgICAgIHN0YXRlLml0ZW1zID0gXy5tYXBLZXlzKGFjdGlvbi5wYXlsb2FkLnJlc3BvbnNlLCAnaWQnKVxyXG4gICAgfSxcclxuICAgIGZldGNoTWVtYmVyUG9zdChzdGF0ZT8sIGFjdGlvbj8pIHtcclxuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmVycm9yID0gbnVsbFxyXG4gICAgICBjb25zdCBwb3N0ID0gYWN0aW9uLnBheWxvYWQucmVzcG9uc2VcclxuICAgICAgc3RhdGUuaXRlbXMgPSB7IC4uLnN0YXRlLml0ZW1zLCBbcG9zdC5pZF06IHBvc3QgfVxyXG4gICAgfSxcclxuICAgIHVuZmV0Y2hNZW1iZXJQb3N0KHN0YXRlPywgYWN0aW9uPykge1xyXG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsXHJcbiAgICAgIGNvbnN0IGlkID0gYWN0aW9uLnBheWxvYWQucmVzcG9uc2VcclxuICAgICAgZGVsZXRlIHN0YXRlLml0ZW1zW2lkXVxyXG4gICAgICBzdGF0ZS5pdGVtcyA9IHsgLi4uc3RhdGUuaXRlbXMgfVxyXG4gICAgfSxcclxuICB9LFxyXG59KVxyXG5cclxuLy8gQWN0aW9uc1xyXG5leHBvcnQgY29uc3Qge1xyXG4gIGZldGNoU3RhcnQsXHJcbiAgZmV0Y2hGYWlsdXJlLFxyXG4gIGZldGNoTWVtYmVyUG9zdHMsXHJcbiAgZmV0Y2hNZW1iZXJQb3N0LFxyXG4gIHVuZmV0Y2hNZW1iZXJQb3N0LFxyXG59ID0gbWVtYmVyUG9zdHNTbGljZS5hY3Rpb25zXHJcblxyXG5jb25zdCByZXF1ZXN0ID0gKGZ1bmMpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBkaXNwYXRjaChmZXRjaFN0YXJ0KCkpXHJcbiAgICBkaXNwYXRjaChmdW5jKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBkaXNwYXRjaChmZXRjaEZhaWx1cmUoZXJyb3Iuc3RhY2spKVxyXG4gIH1cclxufVxyXG5cclxuLy8g5aSW6YOo44GL44KJ44Gv44GT44Gu6Zai5pWw44KS5ZG844KT44Gn44KC44KJ44GGXHJcbmV4cG9ydCBjb25zdCBnZXRNZW1iZXJQb3N0cyA9ICh1c2VySWQ6IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2gocmVxdWVzdChmZXRjaE1lbWJlclBvc3RzKGF3YWl0IHJlcXVlc3RHZXRNZW1iZXJQb3N0cyh1c2VySWQpKSkpXHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldE1lbWJlclBvc3QgPSAoaWQ6IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2gocmVxdWVzdChmZXRjaE1lbWJlclBvc3QoYXdhaXQgcmVxdWVzdEdldE1lbWJlclBvc3QoaWQpKSkpXHJcbn1cclxuZXhwb3J0IGNvbnN0IHBvc3RNZW1iZXJQb3N0ID0gKHZhbHVlOiBQb3N0KSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaChyZXF1ZXN0KGZldGNoTWVtYmVyUG9zdChhd2FpdCByZXF1ZXN0UG9zdE1lbWJlclBvc3QodmFsdWUpKSkpXHJcbn1cclxuZXhwb3J0IGNvbnN0IHB1dE1lbWJlclBvc3QgPSAoaWQ6IHN0cmluZywgdmFsdWU6IFBvc3QpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHJlcXVlc3QoZmV0Y2hNZW1iZXJQb3N0KGF3YWl0IHJlcXVlc3RQdXRNZW1iZXJQb3N0KGlkLCB2YWx1ZSkpKSlcclxufVxyXG5leHBvcnQgY29uc3QgZGVsZXRlTWVtYmVyUG9zdCA9IChpZDogc3RyaW5nKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaChyZXF1ZXN0KHVuZmV0Y2hNZW1iZXJQb3N0KGF3YWl0IHJlcXVlc3REZWxldGVNZW1iZXJQb3N0KGlkKSkpKVxyXG59XHJcblxyXG4vLyBTZWxlY3RvcnNcclxuZXhwb3J0IGNvbnN0IHNlbGVjdE1lbWJlclBvc3RzID0gKHsgbWVtYmVyUG9zdHMgfSkgPT4gbWVtYmVyUG9zdHNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbWJlclBvc3RzU2xpY2UucmVkdWNlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9