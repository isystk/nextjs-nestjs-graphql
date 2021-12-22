webpackHotUpdate_N_E("pages/member/posts/[id]",{

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
            return _context4.abrupt("return", _objectSpread({}, data.createPost));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3NsaWNlL21lbWJlclBvc3RzLnRzIl0sIm5hbWVzIjpbInJlcXVlc3RHZXRNZW1iZXJQb3N0cyIsInRva2VuIiwidXNlcklkIiwiY2xpZW50IiwibXV0YXRlIiwibXV0YXRpb24iLCJHRVRfTVlfUE9TVFMiLCJ2YXJpYWJsZXMiLCJhdXRob3JJZCIsImRhdGEiLCJyZXF1ZXN0R2V0TWVtYmVyUG9zdCIsImlkIiwiR0VUX01ZX1BPU1QiLCJyZXF1ZXN0UG9zdE1lbWJlclBvc3QiLCJ2YWx1ZXMiLCJDUkVBVEVfUE9TVCIsImNyZWF0ZVBvc3QiLCJyZXF1ZXN0UHV0TWVtYmVyUG9zdCIsIlVQREFURV9QT1NUIiwicmVxdWVzdERlbGV0ZU1lbWJlclBvc3QiLCJtZW1iZXJQb3N0c1NsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwibG9hZGluZyIsImVycm9yIiwiaXRlbXMiLCJyZWR1Y2VycyIsImZldGNoU3RhcnQiLCJzdGF0ZSIsImFjdGlvbiIsImZldGNoRmFpbHVyZSIsInBheWxvYWQiLCJmZXRjaE1lbWJlclBvc3RzIiwiXyIsImdldE15UG9zdHMiLCJmZXRjaE1lbWJlclBvc3QiLCJwb3N0IiwiZ2V0TXlQb3N0IiwidW5mZXRjaE1lbWJlclBvc3QiLCJyZXNwb25zZSIsImFjdGlvbnMiLCJyZXF1ZXN0IiwiZnVuYyIsImRpc3BhdGNoIiwic3RhY2siLCJnZXRNZW1iZXJQb3N0cyIsImdldE1lbWJlclBvc3QiLCJwb3N0TWVtYmVyUG9zdCIsInZhbHVlIiwicHV0TWVtYmVyUG9zdCIsImRlbGV0ZU1lbWJlclBvc3QiLCJzZWxlY3RNZW1iZXJQb3N0cyIsIm1lbWJlclBvc3RzIiwicmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEscUJBQXFCO0FBQUEsOExBQUcs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QUFBO0FBQUEscUJBQ2hDbkIsb0JBQW9CLENBQUNoQixLQUFELEVBQVFVLEVBQVIsRUFBWXNDLEtBQVosQ0FEWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTVDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdEI7QUFHQSxJQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNsRCxLQUFELEVBQWdCVSxFQUFoQjtBQUFBO0FBQUEsa01BQStCLG1CQUFPaUMsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQzdEQSxRQUQ2RDtBQUFBLDhCQUNwREYsT0FEb0Q7QUFBQSw4QkFDNUNILGlCQUQ0QztBQUFBO0FBQUEscUJBQ3BCcEIsdUJBQXVCLENBQUNsQixLQUFELEVBQVFVLEVBQVIsQ0FESDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQS9COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBekIsQyxDQUlQOztBQUNPLElBQU15QyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsTUFBR0MsV0FBSCxVQUFHQSxXQUFIO0FBQUEsU0FBcUJBLFdBQXJCO0FBQUEsQ0FBMUI7QUFFUWpDLCtFQUFnQixDQUFDa0MsT0FBaEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyL3Bvc3RzL1tpZF0uN2Y1NzAzZmZhYTQyZjU2OTZkNDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgR0VUX01ZX1BPU1RTLCBHRVRfTVlfUE9TVCwgQ1JFQVRFX1BPU1QsIFVQREFURV9QT1NUIH0gIGZyb20gJ0AvY29tbW9uL2NvbnN0YW50cy9hcGknXHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCJAL3V0aWxpdGllcy9hcGlcIjtcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJ0Avc3RvcmUvU3RvcmVUeXBlcydcclxuXHJcbmNvbnN0IHJlcXVlc3RHZXRNZW1iZXJQb3N0cyA9IGFzeW5jICh0b2tlbjogc3RyaW5nLCB1c2VySWQ6IG51bWJlcikgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XHJcbiAgICBtdXRhdGlvbjogR0VUX01ZX1BPU1RTLFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIHRva2VuLFxyXG4gICAgICBhdXRob3JJZDogdXNlcklkXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiB7IGRhdGEgfVxyXG59XHJcblxyXG5jb25zdCByZXF1ZXN0R2V0TWVtYmVyUG9zdCA9IGFzeW5jICh0b2tlbjpzdHJpbmcsIGlkOiBudW1iZXIpID0+IHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xyXG4gICAgbXV0YXRpb246IEdFVF9NWV9QT1NULFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIHRva2VuLFxyXG4gICAgICBpZFxyXG4gICAgfSxcclxuICB9KTtcclxuICByZXR1cm4geyBkYXRhIH1cclxufVxyXG5cclxuY29uc3QgcmVxdWVzdFBvc3RNZW1iZXJQb3N0ID0gYXN5bmMgKHRva2VuOnN0cmluZywgdmFsdWVzOiBQb3N0KSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcclxuICAgIG11dGF0aW9uOiBDUkVBVEVfUE9TVCxcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAuLi52YWx1ZXMsXHJcbiAgICAgIHRva2VuXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiB7IC4uLmRhdGEuY3JlYXRlUG9zdCB9XHJcbn1cclxuXHJcbmNvbnN0IHJlcXVlc3RQdXRNZW1iZXJQb3N0ID0gYXN5bmMgKHRva2VuOiBzdHJpbmcsIGlkOiBudW1iZXIsIHZhbHVlczogUG9zdCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XHJcbiAgICBtdXRhdGlvbjogVVBEQVRFX1BPU1QsXHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgLi4udmFsdWVzLFxyXG4gICAgICB0b2tlbixcclxuICAgICAgaWRcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHsgLi4uZGF0YS5jcmVhdGVQb3N0IH1cclxufVxyXG5cclxuY29uc3QgcmVxdWVzdERlbGV0ZU1lbWJlclBvc3QgPSBhc3luYyAodG9rZW46IHN0cmluZywgaWQ6IG51bWJlcikgPT4ge1xyXG4gIHJldHVybiB7ICB9XHJcbn1cclxuXHJcbmNvbnN0IG1lbWJlclBvc3RzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ21lbWJlcl9wb3N0cycsXHJcbiAgaW5pdGlhbFN0YXRlOiB7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogbnVsbCwgaXRlbXM6IFtdIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIC8vIOmAmuS/oeOCkumWi+Wni+OBl+OBn+aZguOBq+WRvOOBtumWouaVsFxyXG4gICAgZmV0Y2hTdGFydChzdGF0ZT8sIGFjdGlvbj8pIHtcclxuICAgICAgc3RhdGUubG9hZGluZyA9IHRydWVcclxuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsXHJcbiAgICB9LFxyXG4gICAgLy8g6YCa5L+h44GM5aSx5pWX44GX44Gf5pmC44Gr5ZG844G26Zai5pWwXHJcbiAgICBmZXRjaEZhaWx1cmUoc3RhdGU/LCBhY3Rpb24/KSB7XHJcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICB9LFxyXG4gICAgZmV0Y2hNZW1iZXJQb3N0cyhzdGF0ZT8sIGFjdGlvbj8pIHtcclxuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmVycm9yID0gbnVsbFxyXG4gICAgICBzdGF0ZS5pdGVtcyA9IF8ubWFwS2V5cyhhY3Rpb24ucGF5bG9hZC5kYXRhLmdldE15UG9zdHMsICdpZCcpXHJcbiAgICB9LFxyXG4gICAgZmV0Y2hNZW1iZXJQb3N0KHN0YXRlPywgYWN0aW9uPykge1xyXG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsXHJcbiAgICAgIGNvbnN0IHBvc3QgPSBhY3Rpb24ucGF5bG9hZC5kYXRhLmdldE15UG9zdFxyXG4gICAgICBzdGF0ZS5pdGVtcyA9IHsgLi4uc3RhdGUuaXRlbXMsIFtwb3N0LmlkXTogcG9zdCB9XHJcbiAgICB9LFxyXG4gICAgdW5mZXRjaE1lbWJlclBvc3Qoc3RhdGU/LCBhY3Rpb24/KSB7XHJcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGxcclxuICAgICAgY29uc3QgaWQgPSBhY3Rpb24ucGF5bG9hZC5yZXNwb25zZVxyXG4gICAgICBkZWxldGUgc3RhdGUuaXRlbXNbaWRdXHJcbiAgICAgIHN0YXRlLml0ZW1zID0geyAuLi5zdGF0ZS5pdGVtcyB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcblxyXG4vLyBBY3Rpb25zXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgZmV0Y2hTdGFydCxcclxuICBmZXRjaEZhaWx1cmUsXHJcbiAgZmV0Y2hNZW1iZXJQb3N0cyxcclxuICBmZXRjaE1lbWJlclBvc3QsXHJcbiAgdW5mZXRjaE1lbWJlclBvc3QsXHJcbn0gPSBtZW1iZXJQb3N0c1NsaWNlLmFjdGlvbnNcclxuXHJcbmNvbnN0IHJlcXVlc3QgPSAoZnVuYykgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGRpc3BhdGNoKGZldGNoU3RhcnQoKSlcclxuICAgIGRpc3BhdGNoKGZ1bmMpXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGRpc3BhdGNoKGZldGNoRmFpbHVyZShlcnJvci5zdGFjaykpXHJcbiAgfVxyXG59XHJcblxyXG4vLyDlpJbpg6jjgYvjgonjga/jgZPjga7plqLmlbDjgpLlkbzjgpPjgafjgoLjgonjgYZcclxuZXhwb3J0IGNvbnN0IGdldE1lbWJlclBvc3RzID0gKHRva2VuOiBzdHJpbmcsIHVzZXJJZDogbnVtYmVyKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaChyZXF1ZXN0KGZldGNoTWVtYmVyUG9zdHMoYXdhaXQgcmVxdWVzdEdldE1lbWJlclBvc3RzKHRva2VuLCB1c2VySWQpKSkpXHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldE1lbWJlclBvc3QgPSAodG9rZW46IHN0cmluZywgaWQ6IG51bWJlcikgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2gocmVxdWVzdChmZXRjaE1lbWJlclBvc3QoYXdhaXQgcmVxdWVzdEdldE1lbWJlclBvc3QodG9rZW4sIGlkKSkpKVxyXG59XHJcbmV4cG9ydCBjb25zdCBwb3N0TWVtYmVyUG9zdCA9ICh0b2tlbjogc3RyaW5nLCB2YWx1ZTogUG9zdCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2gocmVxdWVzdChmZXRjaE1lbWJlclBvc3QoYXdhaXQgcmVxdWVzdFBvc3RNZW1iZXJQb3N0KHRva2VuLCB2YWx1ZSkpKSlcclxufVxyXG5leHBvcnQgY29uc3QgcHV0TWVtYmVyUG9zdCA9ICh0b2tlbjogc3RyaW5nLCBpZDogbnVtYmVyLCB2YWx1ZTogUG9zdCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2gocmVxdWVzdChmZXRjaE1lbWJlclBvc3QoYXdhaXQgcmVxdWVzdFB1dE1lbWJlclBvc3QodG9rZW4sIGlkLCB2YWx1ZSkpKSlcclxufVxyXG5leHBvcnQgY29uc3QgZGVsZXRlTWVtYmVyUG9zdCA9ICh0b2tlbjogc3RyaW5nLCBpZDogbnVtYmVyKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaChyZXF1ZXN0KHVuZmV0Y2hNZW1iZXJQb3N0KGF3YWl0IHJlcXVlc3REZWxldGVNZW1iZXJQb3N0KHRva2VuLCBpZCkpKSlcclxufVxyXG5cclxuLy8gU2VsZWN0b3JzXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RNZW1iZXJQb3N0cyA9ICh7IG1lbWJlclBvc3RzIH0pID0+IG1lbWJlclBvc3RzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1iZXJQb3N0c1NsaWNlLnJlZHVjZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==