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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _common_constants_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/constants/api */ "./src/common/constants/api.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utilities_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utilities/api */ "./src/utilities/api.ts");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var requestGetMemberPosts = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(userId) {
    var _yield$client$mutate, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _utilities_api__WEBPACK_IMPORTED_MODULE_6__["default"].mutate({
              mutation: _common_constants_api__WEBPACK_IMPORTED_MODULE_4__["GET_MY_POSTS"],
              variables: _objectSpread({}, values)
            });

          case 2:
            _yield$client$mutate = _context.sent;
            data = _yield$client$mutate.data;
            return _context.abrupt("return", data.getMyPosts);

          case 5:
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
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
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
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(values) {
    var _yield$client$mutate2, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _utilities_api__WEBPACK_IMPORTED_MODULE_6__["default"].mutate({
              mutation: CREATE_POST,
              variables: _objectSpread({}, values)
            });

          case 2:
            _yield$client$mutate2 = _context3.sent;
            data = _yield$client$mutate2.data;
            return _context3.abrupt("return", _objectSpread({}, data.createPost));

          case 5:
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
  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id, values) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
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
  var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
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
      state.items = _objectSpread(_objectSpread({}, state.items), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, post.id, post));
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
    var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
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
    var _ref7 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
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
    var _ref8 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
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
    var _ref9 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
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
    var _ref10 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
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
    var _ref11 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL3NsaWNlL21lbWJlclBvc3RzLnRzIl0sIm5hbWVzIjpbInJlcXVlc3RHZXRNZW1iZXJQb3N0cyIsInVzZXJJZCIsImNsaWVudCIsIm11dGF0ZSIsIm11dGF0aW9uIiwiR0VUX01ZX1BPU1RTIiwidmFyaWFibGVzIiwidmFsdWVzIiwiZGF0YSIsImdldE15UG9zdHMiLCJyZXF1ZXN0R2V0TWVtYmVyUG9zdCIsImlkIiwicmVxdWVzdFBvc3RNZW1iZXJQb3N0IiwiQ1JFQVRFX1BPU1QiLCJjcmVhdGVQb3N0IiwicmVxdWVzdFB1dE1lbWJlclBvc3QiLCJyZXF1ZXN0RGVsZXRlTWVtYmVyUG9zdCIsIm1lbWJlclBvc3RzU2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJpdGVtcyIsInJlZHVjZXJzIiwiZmV0Y2hTdGFydCIsInN0YXRlIiwiYWN0aW9uIiwiZmV0Y2hGYWlsdXJlIiwicGF5bG9hZCIsImZldGNoTWVtYmVyUG9zdHMiLCJfIiwicmVzcG9uc2UiLCJmZXRjaE1lbWJlclBvc3QiLCJwb3N0IiwidW5mZXRjaE1lbWJlclBvc3QiLCJhY3Rpb25zIiwicmVxdWVzdCIsImZ1bmMiLCJkaXNwYXRjaCIsInN0YWNrIiwiZ2V0TWVtYmVyUG9zdHMiLCJnZXRNZW1iZXJQb3N0IiwicG9zdE1lbWJlclBvc3QiLCJ2YWx1ZSIsInB1dE1lbWJlclBvc3QiLCJkZWxldGVNZW1iZXJQb3N0Iiwic2VsZWN0TWVtYmVyUG9zdHMiLCJtZW1iZXJQb3N0cyIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLHFCQUFxQjtBQUFBLDhMQUFHLGlCQUFPQyxNQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNMQyxzREFB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QU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ2xDLEVBQUQsRUFBYWlDLEtBQWI7QUFBQTtBQUFBLGtNQUE2QixtQkFBT0wsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQ3hEQSxRQUR3RDtBQUFBLDhCQUMvQ0YsT0FEK0M7QUFBQSw4QkFDdkNKLGVBRHVDO0FBQUE7QUFBQSxxQkFDakJsQixvQkFBb0IsQ0FBQ0osRUFBRCxFQUFLaUMsS0FBTCxDQURIOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBN0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF0QjtBQUdBLElBQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ25DLEVBQUQ7QUFBQTtBQUFBLGtNQUFnQixtQkFBTzRCLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUM5Q0EsUUFEOEM7QUFBQSw4QkFDckNGLE9BRHFDO0FBQUEsOEJBQzdCRixpQkFENkI7QUFBQTtBQUFBLHFCQUNMbkIsdUJBQXVCLENBQUNMLEVBQUQsQ0FEbEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXpCLEMsQ0FJUDs7QUFDTyxJQUFNb0MsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLE1BQUdDLFdBQUgsVUFBR0EsV0FBSDtBQUFBLFNBQXFCQSxXQUFyQjtBQUFBLENBQTFCO0FBRVEvQiwrRUFBZ0IsQ0FBQ2dDLE9BQWhDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZGU3ZTBkZjRlZmM2NzU4NmNlMmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgR0VUX01ZX1BPU1RTIH0gIGZyb20gJ0AvY29tbW9uL2NvbnN0YW50cy9hcGknXHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCJAL3V0aWxpdGllcy9hcGlcIjtcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJ0Avc3RvcmUvU3RvcmVUeXBlcydcclxuXHJcbmNvbnN0IHJlcXVlc3RHZXRNZW1iZXJQb3N0cyA9IGFzeW5jICh1c2VySWQ6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XHJcbiAgICBtdXRhdGlvbjogR0VUX01ZX1BPU1RTLFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIC4uLnZhbHVlc1xyXG4gICAgfSxcclxuICB9KTtcclxuICByZXR1cm4gZGF0YS5nZXRNeVBvc3RzXHJcbn1cclxuXHJcbmNvbnN0IHJlcXVlc3RHZXRNZW1iZXJQb3N0ID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcclxuICByZXR1cm4geyAgfVxyXG59XHJcblxyXG5jb25zdCByZXF1ZXN0UG9zdE1lbWJlclBvc3QgPSBhc3luYyAodmFsdWVzOiBQb3N0KSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcclxuICAgIG11dGF0aW9uOiBDUkVBVEVfUE9TVCxcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAuLi52YWx1ZXNcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHsgLi4uZGF0YS5jcmVhdGVQb3N0IH1cclxufVxyXG5cclxuY29uc3QgcmVxdWVzdFB1dE1lbWJlclBvc3QgPSBhc3luYyAoaWQ6IHN0cmluZywgdmFsdWVzOiBQb3N0KSA9PiB7XHJcbiAgcmV0dXJuIHsgIH1cclxufVxyXG5cclxuY29uc3QgcmVxdWVzdERlbGV0ZU1lbWJlclBvc3QgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xyXG4gIHJldHVybiB7ICB9XHJcbn1cclxuXHJcbmNvbnN0IG1lbWJlclBvc3RzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ21lbWJlcl9wb3N0cycsXHJcbiAgaW5pdGlhbFN0YXRlOiB7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogbnVsbCwgaXRlbXM6IFtdIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIC8vIOmAmuS/oeOCkumWi+Wni+OBl+OBn+aZguOBq+WRvOOBtumWouaVsFxyXG4gICAgZmV0Y2hTdGFydChzdGF0ZT8sIGFjdGlvbj8pIHtcclxuICAgICAgc3RhdGUubG9hZGluZyA9IHRydWVcclxuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsXHJcbiAgICB9LFxyXG4gICAgLy8g6YCa5L+h44GM5aSx5pWX44GX44Gf5pmC44Gr5ZG844G26Zai5pWwXHJcbiAgICBmZXRjaEZhaWx1cmUoc3RhdGU/LCBhY3Rpb24/KSB7XHJcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICB9LFxyXG4gICAgZmV0Y2hNZW1iZXJQb3N0cyhzdGF0ZT8sIGFjdGlvbj8pIHtcclxuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmVycm9yID0gbnVsbFxyXG4gICAgICBzdGF0ZS5pdGVtcyA9IF8ubWFwS2V5cyhhY3Rpb24ucGF5bG9hZC5yZXNwb25zZSwgJ2lkJylcclxuICAgIH0sXHJcbiAgICBmZXRjaE1lbWJlclBvc3Qoc3RhdGU/LCBhY3Rpb24/KSB7XHJcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGxcclxuICAgICAgY29uc3QgcG9zdCA9IGFjdGlvbi5wYXlsb2FkLnJlc3BvbnNlXHJcbiAgICAgIHN0YXRlLml0ZW1zID0geyAuLi5zdGF0ZS5pdGVtcywgW3Bvc3QuaWRdOiBwb3N0IH1cclxuICAgIH0sXHJcbiAgICB1bmZldGNoTWVtYmVyUG9zdChzdGF0ZT8sIGFjdGlvbj8pIHtcclxuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmVycm9yID0gbnVsbFxyXG4gICAgICBjb25zdCBpZCA9IGFjdGlvbi5wYXlsb2FkLnJlc3BvbnNlXHJcbiAgICAgIGRlbGV0ZSBzdGF0ZS5pdGVtc1tpZF1cclxuICAgICAgc3RhdGUuaXRlbXMgPSB7IC4uLnN0YXRlLml0ZW1zIH1cclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuXHJcbi8vIEFjdGlvbnNcclxuZXhwb3J0IGNvbnN0IHtcclxuICBmZXRjaFN0YXJ0LFxyXG4gIGZldGNoRmFpbHVyZSxcclxuICBmZXRjaE1lbWJlclBvc3RzLFxyXG4gIGZldGNoTWVtYmVyUG9zdCxcclxuICB1bmZldGNoTWVtYmVyUG9zdCxcclxufSA9IG1lbWJlclBvc3RzU2xpY2UuYWN0aW9uc1xyXG5cclxuY29uc3QgcmVxdWVzdCA9IChmdW5jKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hTdGFydCgpKVxyXG4gICAgZGlzcGF0Y2goZnVuYylcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hGYWlsdXJlKGVycm9yLnN0YWNrKSlcclxuICB9XHJcbn1cclxuXHJcbi8vIOWklumDqOOBi+OCieOBr+OBk+OBrumWouaVsOOCkuWRvOOCk+OBp+OCguOCieOBhlxyXG5leHBvcnQgY29uc3QgZ2V0TWVtYmVyUG9zdHMgPSAodXNlcklkOiBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHJlcXVlc3QoZmV0Y2hNZW1iZXJQb3N0cyhhd2FpdCByZXF1ZXN0R2V0TWVtYmVyUG9zdHModXNlcklkKSkpKVxyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRNZW1iZXJQb3N0ID0gKGlkOiBzdHJpbmcpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHJlcXVlc3QoZmV0Y2hNZW1iZXJQb3N0KGF3YWl0IHJlcXVlc3RHZXRNZW1iZXJQb3N0KGlkKSkpKVxyXG59XHJcbmV4cG9ydCBjb25zdCBwb3N0TWVtYmVyUG9zdCA9ICh2YWx1ZTogUG9zdCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2gocmVxdWVzdChmZXRjaE1lbWJlclBvc3QoYXdhaXQgcmVxdWVzdFBvc3RNZW1iZXJQb3N0KHZhbHVlKSkpKVxyXG59XHJcbmV4cG9ydCBjb25zdCBwdXRNZW1iZXJQb3N0ID0gKGlkOiBzdHJpbmcsIHZhbHVlOiBQb3N0KSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBkaXNwYXRjaChyZXF1ZXN0KGZldGNoTWVtYmVyUG9zdChhd2FpdCByZXF1ZXN0UHV0TWVtYmVyUG9zdChpZCwgdmFsdWUpKSkpXHJcbn1cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZU1lbWJlclBvc3QgPSAoaWQ6IHN0cmluZykgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2gocmVxdWVzdCh1bmZldGNoTWVtYmVyUG9zdChhd2FpdCByZXF1ZXN0RGVsZXRlTWVtYmVyUG9zdChpZCkpKSlcclxufVxyXG5cclxuLy8gU2VsZWN0b3JzXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RNZW1iZXJQb3N0cyA9ICh7IG1lbWJlclBvc3RzIH0pID0+IG1lbWJlclBvc3RzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1iZXJQb3N0c1NsaWNlLnJlZHVjZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==