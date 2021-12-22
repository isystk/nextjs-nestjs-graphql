webpackHotUpdate_N_E("pages/_app",{

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
/* harmony import */ var _utilities_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utilities/api */ "./src/utilities/api.ts");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var requestGetMemberPosts = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(token, userId) {
    var _yield$client$mutate, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _utilities_api__WEBPACK_IMPORTED_MODULE_6__["default"].mutate({
              mutation: _common_constants_api__WEBPACK_IMPORTED_MODULE_4__["GET_MY_POSTS"],
              variables: {
                token: token,
                authorId: userId
              }
            });

          case 2:
            _yield$client$mutate = _context.sent;
            data = _yield$client$mutate.data;
            return _context.abrupt("return", {
              data: data
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function requestGetMemberPosts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var requestGetMemberPost = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(token, id) {
    var _yield$client$mutate2, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _utilities_api__WEBPACK_IMPORTED_MODULE_6__["default"].mutate({
              mutation: _common_constants_api__WEBPACK_IMPORTED_MODULE_4__["GET_MY_POST"],
              variables: {
                token: token,
                id: id
              }
            });

          case 2:
            _yield$client$mutate2 = _context2.sent;
            data = _yield$client$mutate2.data;
            return _context2.abrupt("return", {
              data: data
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function requestGetMemberPost(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var requestPostMemberPost = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(token, values) {
    var _yield$client$mutate3, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _utilities_api__WEBPACK_IMPORTED_MODULE_6__["default"].mutate({
              mutation: _common_constants_api__WEBPACK_IMPORTED_MODULE_4__["CREATE_POST"],
              variables: _objectSpread(_objectSpread({}, values), {}, {
                token: token
              })
            });

          case 2:
            _yield$client$mutate3 = _context3.sent;
            data = _yield$client$mutate3.data;
            return _context3.abrupt("return", _objectSpread({}, data.createPost));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function requestPostMemberPost(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var requestPutMemberPost = /*#__PURE__*/function () {
  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(token, id, values) {
    var _yield$client$mutate4, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _utilities_api__WEBPACK_IMPORTED_MODULE_6__["default"].mutate({
              mutation: _common_constants_api__WEBPACK_IMPORTED_MODULE_4__["UPDATE_POST"],
              variables: _objectSpread(_objectSpread({}, values), {}, {
                token: token,
                id: id
              })
            });

          case 2:
            _yield$client$mutate4 = _context4.sent;
            data = _yield$client$mutate4.data;
            return _context4.abrupt("return", _objectSpread({}, data.updatePost));

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function requestPutMemberPost(_x7, _x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();

var requestDeleteMemberPost = /*#__PURE__*/function () {
  var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(token, id) {
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

  return function requestDeleteMemberPost(_x10, _x11) {
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
      state.items = lodash__WEBPACK_IMPORTED_MODULE_5__["mapKeys"](action.payload.data.getMyPosts, 'id');
    },
    fetchMemberPost: function fetchMemberPost(state, action) {
      state.loading = false;
      state.error = null;
      var post = action.payload.data.getMyPost;
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

    return function (_x12) {
      return _ref6.apply(this, arguments);
    };
  }();
}; // 外部からはこの関数を呼んでもらう


var getMemberPosts = function getMemberPosts(token, userId) {
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
              return requestGetMemberPosts(token, userId);

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

    return function (_x13) {
      return _ref7.apply(this, arguments);
    };
  }();
};
var getMemberPost = function getMemberPost(token, id) {
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
              return requestGetMemberPost(token, id);

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

    return function (_x14) {
      return _ref8.apply(this, arguments);
    };
  }();
};
var postMemberPost = function postMemberPost(token, value) {
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
              return requestPostMemberPost(token, value);

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

    return function (_x15) {
      return _ref9.apply(this, arguments);
    };
  }();
};
var putMemberPost = function putMemberPost(token, id, value) {
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
              return requestPutMemberPost(token, id, value);

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

    return function (_x16) {
      return _ref10.apply(this, arguments);
    };
  }();
};
var deleteMemberPost = function deleteMemberPost(token, id) {
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
              return requestDeleteMemberPost(token, id);

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

    return function (_x17) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3NsaWNlL21lbWJlclBvc3RzLnRzIl0sIm5hbWVzIjpbInJlcXVlc3RHZXRNZW1iZXJQb3N0cyIsInRva2VuIiwidXNlcklkIiwiY2xpZW50IiwibXV0YXRlIiwibXV0YXRpb24iLCJHRVRfTVlfUE9TVFMiLCJ2YXJpYWJsZXMiLCJhdXRob3JJZCIsImRhdGEiLCJyZXF1ZXN0R2V0TWVtYmVyUG9zdCIsImlkIiwiR0VUX01ZX1BPU1QiLCJyZXF1ZXN0UG9zdE1lbWJlclBvc3QiLCJ2YWx1ZXMiLCJDUkVBVEVfUE9TVCIsImNyZWF0ZVBvc3QiLCJyZXF1ZXN0UHV0TWVtYmVyUG9zdCIsIlVQREFURV9QT1NUIiwidXBkYXRlUG9zdCIsInJlcXVlc3REZWxldGVNZW1iZXJQb3N0IiwibWVtYmVyUG9zdHNTbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJlcnJvciIsIml0ZW1zIiwicmVkdWNlcnMiLCJmZXRjaFN0YXJ0Iiwic3RhdGUiLCJhY3Rpb24iLCJmZXRjaEZhaWx1cmUiLCJwYXlsb2FkIiwiZmV0Y2hNZW1iZXJQb3N0cyIsIl8iLCJnZXRNeVBvc3RzIiwiZmV0Y2hNZW1iZXJQb3N0IiwicG9zdCIsImdldE15UG9zdCIsInVuZmV0Y2hNZW1iZXJQb3N0IiwicmVzcG9uc2UiLCJhY3Rpb25zIiwicmVxdWVzdCIsImZ1bmMiLCJkaXNwYXRjaCIsInN0YWNrIiwiZ2V0TWVtYmVyUG9zdHMiLCJnZXRNZW1iZXJQb3N0IiwicG9zdE1lbWJlclBvc3QiLCJ2YWx1ZSIsInB1dE1lbWJlclBvc3QiLCJkZWxldGVNZW1iZXJQb3N0Iiwic2VsZWN0TWVtYmVyUG9zdHMiLCJtZW1iZXJQb3N0cyIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLHFCQUFx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QkFDdEROLGVBRHNEO0FBQUE7QUFBQSxxQkFDaENwQixvQkFBb0IsQ0FBQ2hCLEtBQUQsRUFBUVUsRUFBUixFQUFZdUMsS0FBWixDQURZOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNUM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF0QjtBQUdBLElBQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ25ELEtBQUQsRUFBZ0JVLEVBQWhCO0FBQUE7QUFBQSxrTUFBK0IsbUJBQU9rQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFDN0RBLFFBRDZEO0FBQUEsOEJBQ3BERixPQURvRDtBQUFBLDhCQUM1Q0gsaUJBRDRDO0FBQUE7QUFBQSxxQkFDcEJwQix1QkFBdUIsQ0FBQ25CLEtBQUQsRUFBUVUsRUFBUixDQURIOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBL0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF6QixDLENBSVA7O0FBQ08sSUFBTTBDLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxNQUFHQyxXQUFILFVBQUdBLFdBQUg7QUFBQSxTQUFxQkEsV0FBckI7QUFBQSxDQUExQjtBQUVRakMsK0VBQWdCLENBQUNrQyxPQUFoQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjA1NzUzYzA0ZTA2NTQwY2UxZDlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IEdFVF9NWV9QT1NUUywgR0VUX01ZX1BPU1QsIENSRUFURV9QT1NULCBVUERBVEVfUE9TVCB9ICBmcm9tICdAL2NvbW1vbi9jb25zdGFudHMvYXBpJ1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiQC91dGlsaXRpZXMvYXBpXCI7XHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tICdAL3N0b3JlL1N0b3JlVHlwZXMnXHJcblxyXG5jb25zdCByZXF1ZXN0R2V0TWVtYmVyUG9zdHMgPSBhc3luYyAodG9rZW46IHN0cmluZywgdXNlcklkOiBudW1iZXIpID0+IHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xyXG4gICAgbXV0YXRpb246IEdFVF9NWV9QT1NUUyxcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICB0b2tlbixcclxuICAgICAgYXV0aG9ySWQ6IHVzZXJJZFxyXG4gICAgfSxcclxuICB9KTtcclxuICByZXR1cm4geyBkYXRhIH1cclxufVxyXG5cclxuY29uc3QgcmVxdWVzdEdldE1lbWJlclBvc3QgPSBhc3luYyAodG9rZW46c3RyaW5nLCBpZDogbnVtYmVyKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcclxuICAgIG11dGF0aW9uOiBHRVRfTVlfUE9TVCxcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICB0b2tlbixcclxuICAgICAgaWRcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHsgZGF0YSB9XHJcbn1cclxuXHJcbmNvbnN0IHJlcXVlc3RQb3N0TWVtYmVyUG9zdCA9IGFzeW5jICh0b2tlbjpzdHJpbmcsIHZhbHVlczogUG9zdCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XHJcbiAgICBtdXRhdGlvbjogQ1JFQVRFX1BPU1QsXHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgLi4udmFsdWVzLFxyXG4gICAgICB0b2tlblxyXG4gICAgfSxcclxuICB9KTtcclxuICByZXR1cm4geyAuLi5kYXRhLmNyZWF0ZVBvc3QgfVxyXG59XHJcblxyXG5jb25zdCByZXF1ZXN0UHV0TWVtYmVyUG9zdCA9IGFzeW5jICh0b2tlbjogc3RyaW5nLCBpZDogbnVtYmVyLCB2YWx1ZXM6IFBvc3QpID0+IHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xyXG4gICAgbXV0YXRpb246IFVQREFURV9QT1NULFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgdG9rZW4sXHJcbiAgICAgIGlkXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiB7IC4uLmRhdGEudXBkYXRlUG9zdCB9XHJcbn1cclxuXHJcbmNvbnN0IHJlcXVlc3REZWxldGVNZW1iZXJQb3N0ID0gYXN5bmMgKHRva2VuOiBzdHJpbmcsIGlkOiBudW1iZXIpID0+IHtcclxuICByZXR1cm4geyAgfVxyXG59XHJcblxyXG5jb25zdCBtZW1iZXJQb3N0c1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdtZW1iZXJfcG9zdHMnLFxyXG4gIGluaXRpYWxTdGF0ZTogeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IG51bGwsIGl0ZW1zOiBbXSB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICAvLyDpgJrkv6HjgpLplovlp4vjgZfjgZ/mmYLjgavlkbzjgbbplqLmlbBcclxuICAgIGZldGNoU3RhcnQoc3RhdGU/LCBhY3Rpb24/KSB7XHJcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlXHJcbiAgICAgIHN0YXRlLmVycm9yID0gbnVsbFxyXG4gICAgfSxcclxuICAgIC8vIOmAmuS/oeOBjOWkseaVl+OBl+OBn+aZguOBq+WRvOOBtumWouaVsFxyXG4gICAgZmV0Y2hGYWlsdXJlKHN0YXRlPywgYWN0aW9uPykge1xyXG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgfSxcclxuICAgIGZldGNoTWVtYmVyUG9zdHMoc3RhdGU/LCBhY3Rpb24/KSB7XHJcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGxcclxuICAgICAgc3RhdGUuaXRlbXMgPSBfLm1hcEtleXMoYWN0aW9uLnBheWxvYWQuZGF0YS5nZXRNeVBvc3RzLCAnaWQnKVxyXG4gICAgfSxcclxuICAgIGZldGNoTWVtYmVyUG9zdChzdGF0ZT8sIGFjdGlvbj8pIHtcclxuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmVycm9yID0gbnVsbFxyXG4gICAgICBjb25zdCBwb3N0ID0gYWN0aW9uLnBheWxvYWQuZGF0YS5nZXRNeVBvc3RcclxuICAgICAgc3RhdGUuaXRlbXMgPSB7IC4uLnN0YXRlLml0ZW1zLCBbcG9zdC5pZF06IHBvc3QgfVxyXG4gICAgfSxcclxuICAgIHVuZmV0Y2hNZW1iZXJQb3N0KHN0YXRlPywgYWN0aW9uPykge1xyXG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsXHJcbiAgICAgIGNvbnN0IGlkID0gYWN0aW9uLnBheWxvYWQucmVzcG9uc2VcclxuICAgICAgZGVsZXRlIHN0YXRlLml0ZW1zW2lkXVxyXG4gICAgICBzdGF0ZS5pdGVtcyA9IHsgLi4uc3RhdGUuaXRlbXMgfVxyXG4gICAgfSxcclxuICB9LFxyXG59KVxyXG5cclxuLy8gQWN0aW9uc1xyXG5leHBvcnQgY29uc3Qge1xyXG4gIGZldGNoU3RhcnQsXHJcbiAgZmV0Y2hGYWlsdXJlLFxyXG4gIGZldGNoTWVtYmVyUG9zdHMsXHJcbiAgZmV0Y2hNZW1iZXJQb3N0LFxyXG4gIHVuZmV0Y2hNZW1iZXJQb3N0LFxyXG59ID0gbWVtYmVyUG9zdHNTbGljZS5hY3Rpb25zXHJcblxyXG5jb25zdCByZXF1ZXN0ID0gKGZ1bmMpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBkaXNwYXRjaChmZXRjaFN0YXJ0KCkpXHJcbiAgICBkaXNwYXRjaChmdW5jKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBkaXNwYXRjaChmZXRjaEZhaWx1cmUoZXJyb3Iuc3RhY2spKVxyXG4gIH1cclxufVxyXG5cclxuLy8g5aSW6YOo44GL44KJ44Gv44GT44Gu6Zai5pWw44KS5ZG844KT44Gn44KC44KJ44GGXHJcbmV4cG9ydCBjb25zdCBnZXRNZW1iZXJQb3N0cyA9ICh0b2tlbjogc3RyaW5nLCB1c2VySWQ6IG51bWJlcikgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2gocmVxdWVzdChmZXRjaE1lbWJlclBvc3RzKGF3YWl0IHJlcXVlc3RHZXRNZW1iZXJQb3N0cyh0b2tlbiwgdXNlcklkKSkpKVxyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRNZW1iZXJQb3N0ID0gKHRva2VuOiBzdHJpbmcsIGlkOiBudW1iZXIpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHJlcXVlc3QoZmV0Y2hNZW1iZXJQb3N0KGF3YWl0IHJlcXVlc3RHZXRNZW1iZXJQb3N0KHRva2VuLCBpZCkpKSlcclxufVxyXG5leHBvcnQgY29uc3QgcG9zdE1lbWJlclBvc3QgPSAodG9rZW46IHN0cmluZywgdmFsdWU6IFBvc3QpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHJlcXVlc3QoZmV0Y2hNZW1iZXJQb3N0KGF3YWl0IHJlcXVlc3RQb3N0TWVtYmVyUG9zdCh0b2tlbiwgdmFsdWUpKSkpXHJcbn1cclxuZXhwb3J0IGNvbnN0IHB1dE1lbWJlclBvc3QgPSAodG9rZW46IHN0cmluZywgaWQ6IG51bWJlciwgdmFsdWU6IFBvc3QpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHJlcXVlc3QoZmV0Y2hNZW1iZXJQb3N0KGF3YWl0IHJlcXVlc3RQdXRNZW1iZXJQb3N0KHRva2VuLCBpZCwgdmFsdWUpKSkpXHJcbn1cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZU1lbWJlclBvc3QgPSAodG9rZW46IHN0cmluZywgaWQ6IG51bWJlcikgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2gocmVxdWVzdCh1bmZldGNoTWVtYmVyUG9zdChhd2FpdCByZXF1ZXN0RGVsZXRlTWVtYmVyUG9zdCh0b2tlbiwgaWQpKSkpXHJcbn1cclxuXHJcbi8vIFNlbGVjdG9yc1xyXG5leHBvcnQgY29uc3Qgc2VsZWN0TWVtYmVyUG9zdHMgPSAoeyBtZW1iZXJQb3N0cyB9KSA9PiBtZW1iZXJQb3N0c1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtYmVyUG9zdHNTbGljZS5yZWR1Y2VyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=