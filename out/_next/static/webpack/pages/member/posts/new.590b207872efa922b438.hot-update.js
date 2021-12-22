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
              data: data.getMyPosts
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
              data: data.getMyPost
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
            return _context3.abrupt("return", {
              data: data.createPost
            });

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
            return _context4.abrupt("return", {
              data: data.updatePost
            });

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
    var _yield$client$mutate5, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _utilities_api__WEBPACK_IMPORTED_MODULE_6__["default"].mutate({
              mutation: DELTE_POST,
              variables: {
                token: token,
                id: id
              }
            });

          case 2:
            _yield$client$mutate5 = _context5.sent;
            data = _yield$client$mutate5.data;
            return _context5.abrupt("return", {
              data: data.deletePost
            });

          case 5:
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
      state.items = lodash__WEBPACK_IMPORTED_MODULE_5__["mapKeys"](action.payload.data, 'id');
    },
    fetchMemberPost: function fetchMemberPost(state, action) {
      state.loading = false;
      state.error = null;
      var post = action.payload.data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3NsaWNlL21lbWJlclBvc3RzLnRzIl0sIm5hbWVzIjpbInJlcXVlc3RHZXRNZW1iZXJQb3N0cyIsInRva2VuIiwidXNlcklkIiwiY2xpZW50IiwibXV0YXRlIiwibXV0YXRpb24iLCJHRVRfTVlfUE9TVFMiLCJ2YXJpYWJsZXMiLCJhdXRob3JJZCIsImRhdGEiLCJnZXRNeVBvc3RzIiwicmVxdWVzdEdldE1lbWJlclBvc3QiLCJpZCIsIkdFVF9NWV9QT1NUIiwiZ2V0TXlQb3N0IiwicmVxdWVzdFBvc3RNZW1iZXJQb3N0IiwidmFsdWVzIiwiQ1JFQVRFX1BPU1QiLCJjcmVhdGVQb3N0IiwicmVxdWVzdFB1dE1lbWJlclBvc3QiLCJVUERBVEVfUE9TVCIsInVwZGF0ZVBvc3QiLCJyZXF1ZXN0RGVsZXRlTWVtYmVyUG9zdCIsIkRFTFRFX1BPU1QiLCJkZWxldGVQb3N0IiwibWVtYmVyUG9zdHNTbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJlcnJvciIsIml0ZW1zIiwicmVkdWNlcnMiLCJmZXRjaFN0YXJ0Iiwic3RhdGUiLCJhY3Rpb24iLCJmZXRjaEZhaWx1cmUiLCJwYXlsb2FkIiwiZmV0Y2hNZW1iZXJQb3N0cyIsIl8iLCJmZXRjaE1lbWJlclBvc3QiLCJwb3N0IiwidW5mZXRjaE1lbWJlclBvc3QiLCJyZXNwb25zZSIsImFjdGlvbnMiLCJyZXF1ZXN0IiwiZnVuYyIsImRpc3BhdGNoIiwic3RhY2siLCJnZXRNZW1iZXJQb3N0cyIsImdldE1lbWJlclBvc3QiLCJwb3N0TWVtYmVyUG9zdCIsInZhbHVlIiwicHV0TWVtYmVyUG9zdCIsImRlbGV0ZU1lbWJlclBvc3QiLCJzZWxlY3RNZW1iZXJQb3N0cyIsIm1lbWJlclBvc3RzIiwicmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtB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L0IsK0VBQWdCLENBQUNnQyxPQUFoQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZW1iZXIvcG9zdHMvbmV3LjU5MGIyMDc4NzJlZmE5MjJiNDM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCB7IEdFVF9NWV9QT1NUUywgR0VUX01ZX1BPU1QsIENSRUFURV9QT1NULCBVUERBVEVfUE9TVCwgREVMRVRFX1BPU1QgfSAgZnJvbSAnQC9jb21tb24vY29uc3RhbnRzL2FwaSdcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIkAvdXRpbGl0aWVzL2FwaVwiO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnQC9zdG9yZS9TdG9yZVR5cGVzJ1xyXG5cclxuY29uc3QgcmVxdWVzdEdldE1lbWJlclBvc3RzID0gYXN5bmMgKHRva2VuOiBzdHJpbmcsIHVzZXJJZDogbnVtYmVyKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcclxuICAgIG11dGF0aW9uOiBHRVRfTVlfUE9TVFMsXHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgdG9rZW4sXHJcbiAgICAgIGF1dGhvcklkOiB1c2VySWRcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHsgZGF0YTogZGF0YS5nZXRNeVBvc3RzIH1cclxufVxyXG5cclxuY29uc3QgcmVxdWVzdEdldE1lbWJlclBvc3QgPSBhc3luYyAodG9rZW46c3RyaW5nLCBpZDogbnVtYmVyKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcclxuICAgIG11dGF0aW9uOiBHRVRfTVlfUE9TVCxcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICB0b2tlbixcclxuICAgICAgaWRcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHsgZGF0YTogZGF0YS5nZXRNeVBvc3QgfVxyXG59XHJcblxyXG5jb25zdCByZXF1ZXN0UG9zdE1lbWJlclBvc3QgPSBhc3luYyAodG9rZW46c3RyaW5nLCB2YWx1ZXM6IFBvc3QpID0+IHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xyXG4gICAgbXV0YXRpb246IENSRUFURV9QT1NULFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgdG9rZW5cclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHsgZGF0YTogZGF0YS5jcmVhdGVQb3N0IH1cclxufVxyXG5cclxuY29uc3QgcmVxdWVzdFB1dE1lbWJlclBvc3QgPSBhc3luYyAodG9rZW46IHN0cmluZywgaWQ6IG51bWJlciwgdmFsdWVzOiBQb3N0KSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHsgbXV0YXRpb246IFVQREFURV9QT1NULFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgdG9rZW4sXHJcbiAgICAgIGlkXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiB7IGRhdGE6IGRhdGEudXBkYXRlUG9zdCB9XHJcbn1cclxuXHJcbmNvbnN0IHJlcXVlc3REZWxldGVNZW1iZXJQb3N0ID0gYXN5bmMgKHRva2VuOiBzdHJpbmcsIGlkOiBudW1iZXIpID0+IHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoeyBtdXRhdGlvbjogREVMVEVfUE9TVCxcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICB0b2tlbixcclxuICAgICAgaWRcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHsgZGF0YTogZGF0YS5kZWxldGVQb3N0IH1cclxufVxyXG5cclxuY29uc3QgbWVtYmVyUG9zdHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnbWVtYmVyX3Bvc3RzJyxcclxuICBpbml0aWFsU3RhdGU6IHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiBudWxsLCBpdGVtczogW10gfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgLy8g6YCa5L+h44KS6ZaL5aeL44GX44Gf5pmC44Gr5ZG844G26Zai5pWwXHJcbiAgICBmZXRjaFN0YXJ0KHN0YXRlPywgYWN0aW9uPykge1xyXG4gICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZVxyXG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGxcclxuICAgIH0sXHJcbiAgICAvLyDpgJrkv6HjgYzlpLHmlZfjgZfjgZ/mmYLjgavlkbzjgbbplqLmlbBcclxuICAgIGZldGNoRmFpbHVyZShzdGF0ZT8sIGFjdGlvbj8pIHtcclxuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWRcclxuICAgIH0sXHJcbiAgICBmZXRjaE1lbWJlclBvc3RzKHN0YXRlPywgYWN0aW9uPykge1xyXG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsXHJcbiAgICAgIHN0YXRlLml0ZW1zID0gXy5tYXBLZXlzKGFjdGlvbi5wYXlsb2FkLmRhdGEsICdpZCcpXHJcbiAgICB9LFxyXG4gICAgZmV0Y2hNZW1iZXJQb3N0KHN0YXRlPywgYWN0aW9uPykge1xyXG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsXHJcbiAgICAgIGNvbnN0IHBvc3QgPSBhY3Rpb24ucGF5bG9hZC5kYXRhXHJcbiAgICAgIHN0YXRlLml0ZW1zID0geyAuLi5zdGF0ZS5pdGVtcywgW3Bvc3QuaWRdOiBwb3N0IH1cclxuICAgIH0sXHJcbiAgICB1bmZldGNoTWVtYmVyUG9zdChzdGF0ZT8sIGFjdGlvbj8pIHtcclxuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmVycm9yID0gbnVsbFxyXG4gICAgICBjb25zdCBpZCA9IGFjdGlvbi5wYXlsb2FkLnJlc3BvbnNlXHJcbiAgICAgIGRlbGV0ZSBzdGF0ZS5pdGVtc1tpZF1cclxuICAgICAgc3RhdGUuaXRlbXMgPSB7IC4uLnN0YXRlLml0ZW1zIH1cclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuXHJcbi8vIEFjdGlvbnNcclxuZXhwb3J0IGNvbnN0IHtcclxuICBmZXRjaFN0YXJ0LFxyXG4gIGZldGNoRmFpbHVyZSxcclxuICBmZXRjaE1lbWJlclBvc3RzLFxyXG4gIGZldGNoTWVtYmVyUG9zdCxcclxuICB1bmZldGNoTWVtYmVyUG9zdCxcclxufSA9IG1lbWJlclBvc3RzU2xpY2UuYWN0aW9uc1xyXG5cclxuY29uc3QgcmVxdWVzdCA9IChmdW5jKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hTdGFydCgpKVxyXG4gICAgZGlzcGF0Y2goZnVuYylcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hGYWlsdXJlKGVycm9yLnN0YWNrKSlcclxuICB9XHJcbn1cclxuXHJcbi8vIOWklumDqOOBi+OCieOBr+OBk+OBrumWouaVsOOCkuWRvOOCk+OBp+OCguOCieOBhlxyXG5leHBvcnQgY29uc3QgZ2V0TWVtYmVyUG9zdHMgPSAodG9rZW46IHN0cmluZywgdXNlcklkOiBudW1iZXIpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHJlcXVlc3QoZmV0Y2hNZW1iZXJQb3N0cyhhd2FpdCByZXF1ZXN0R2V0TWVtYmVyUG9zdHModG9rZW4sIHVzZXJJZCkpKSlcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0TWVtYmVyUG9zdCA9ICh0b2tlbjogc3RyaW5nLCBpZDogbnVtYmVyKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaChyZXF1ZXN0KGZldGNoTWVtYmVyUG9zdChhd2FpdCByZXF1ZXN0R2V0TWVtYmVyUG9zdCh0b2tlbiwgaWQpKSkpXHJcbn1cclxuZXhwb3J0IGNvbnN0IHBvc3RNZW1iZXJQb3N0ID0gKHRva2VuOiBzdHJpbmcsIHZhbHVlOiBQb3N0KSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaChyZXF1ZXN0KGZldGNoTWVtYmVyUG9zdChhd2FpdCByZXF1ZXN0UG9zdE1lbWJlclBvc3QodG9rZW4sIHZhbHVlKSkpKVxyXG59XHJcbmV4cG9ydCBjb25zdCBwdXRNZW1iZXJQb3N0ID0gKHRva2VuOiBzdHJpbmcsIGlkOiBudW1iZXIsIHZhbHVlOiBQb3N0KSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaChyZXF1ZXN0KGZldGNoTWVtYmVyUG9zdChhd2FpdCByZXF1ZXN0UHV0TWVtYmVyUG9zdCh0b2tlbiwgaWQsIHZhbHVlKSkpKVxyXG59XHJcbmV4cG9ydCBjb25zdCBkZWxldGVNZW1iZXJQb3N0ID0gKHRva2VuOiBzdHJpbmcsIGlkOiBudW1iZXIpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHJlcXVlc3QodW5mZXRjaE1lbWJlclBvc3QoYXdhaXQgcmVxdWVzdERlbGV0ZU1lbWJlclBvc3QodG9rZW4sIGlkKSkpKVxyXG59XHJcblxyXG4vLyBTZWxlY3RvcnNcclxuZXhwb3J0IGNvbnN0IHNlbGVjdE1lbWJlclBvc3RzID0gKHsgbWVtYmVyUG9zdHMgfSkgPT4gbWVtYmVyUG9zdHNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbWJlclBvc3RzU2xpY2UucmVkdWNlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9