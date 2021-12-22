webpackHotUpdate_N_E("pages/member/posts/new",{

/***/ "./src/common/constants/api.ts":
/*!*************************************!*\
  !*** ./src/common/constants/api.ts ***!
  \*************************************/
/*! exports provided: GET_POSTS, FIND_POST, SIGN_UP, SIGN_IN, AUTH, GET_MY_POSTS, GET_MY_POST, CREATE_POST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS", function() { return GET_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIND_POST", function() { return FIND_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP", function() { return SIGN_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN", function() { return SIGN_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH", function() { return AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MY_POSTS", function() { return GET_MY_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MY_POST", function() { return GET_MY_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_POST", function() { return CREATE_POST; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");


function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation createPost(\n    $title: String!\n    $description: String!\n    $photo: String!\n    $authorId: Float!\n    $token: String!\n  ) {\n    auth(\n      token: $token\n    ) {\n      id\n    }\n    createPost(\n      title: $title, \n      description: $description, \n      photo: $photo\n      authorId: $authorId\n    ) {\n      id\n      title\n      description\n      photo\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation getMyPost(\n    $authorId: Float!\n    $token: String!\n  ) {\n    auth(\n      token: $token\n    ) {\n      id\n    }\n    getMyPosts(\n      authorId: $authorId\n    ) {\n      id\n      title\n      description\n      photo\n      createdAt\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation getMyPosts(\n    $authorId: Float!\n    $token: String!\n  ) {\n    auth(\n      token: $token\n    ) {\n      id\n    }\n    getMyPosts(\n      authorId: $authorId\n    ) {\n      id\n      title\n      description\n      photo\n      createdAt\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation auth(\n    $token: String!\n  ) {\n    auth(\n      token: $token\n    ) {\n      id\n      name\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation signin(\n      $email: String!\n      $password: String!\n    ) {\n    signin(\n      email: $email\n      password: $password\n    ) {\n    token\n  }\n}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation signup(\n      $email: String!\n      $password: String!\n      $name: String!\n    ) {\n    signup(\n      email: $email\n      password: $password\n      name: $name\n    ) {\n    token\n  }\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query findPost($id: Float!) {\n    findPost(id: $id) {\n      id\n      title\n      description\n      photo\n      createdAt\n      updatedAt\n      authorId\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query {\n    getPosts {\n      id\n      title\n      description\n      photo\n      createdAt\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

 // 全件取得

var GET_POSTS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject()); // 指定したIDのPOSTを1件取得

var FIND_POST = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject2()); // 会員登録

var SIGN_UP = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject3()); // ログイン

var SIGN_IN = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject4()); // 認証済みチェック

var AUTH = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject5()); // My投稿一覧

var GET_MY_POSTS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject6()); // My投稿詳細

var GET_MY_POST = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject7()); // 投稿登録

var CREATE_POST = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject8());

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

/***/ }),

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
              mutation: GET_MY_POST,
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
              mutation: CREATE_POST,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbW1vbi9jb25zdGFudHMvYXBpLnRzIiwid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvc2xpY2UvbWVtYmVyUG9zdHMudHMiXSwibmFtZXMiOlsiR0VUX1BPU1RTIiwiZ3FsIiwiRklORF9QT1NUIiwiU0lHTl9VUCIsIlNJR05fSU4iLCJBVVRIIiwiR0VUX01ZX1BPU1RTIiwiR0VUX01ZX1BPU1QiLCJDUkVBVEVfUE9TVCIsInJlcXVlc3RHZXRNZW1iZXJQb3N0cyIsInRva2VuIiwidXNlcklkIiwiY2xpZW50IiwibXV0YXRlIiwibXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJhdXRob3JJZCIsImRhdGEiLCJyZXF1ZXN0R2V0TWVtYmVyUG9zdCIsImlkIiwicmVxdWVzdFBvc3RNZW1iZXJQb3N0IiwidmFsdWVzIiwiY3JlYXRlUG9zdCIsInJlcXVlc3RQdXRNZW1iZXJQb3N0IiwicmVxdWVzdERlbGV0ZU1lbWJlclBvc3QiLCJtZW1iZXJQb3N0c1NsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwibG9hZGluZyIsImVycm9yIiwiaXRlbXMiLCJyZWR1Y2VycyIsImZldGNoU3RhcnQiLCJzdGF0ZSIsImFjdGlvbiIsImZldGNoRmFpbHVyZSIsInBheWxvYWQiLCJmZXRjaE1lbWJlclBvc3RzIiwiXyIsImdldE15UG9zdHMiLCJmZXRjaE1lbWJlclBvc3QiLCJwb3N0IiwiZ2V0TXlQb3N0IiwidW5mZXRjaE1lbWJlclBvc3QiLCJyZXNwb25zZSIsImFjdGlvbnMiLCJyZXF1ZXN0IiwiZnVuYyIsImRpc3BhdGNoIiwic3RhY2siLCJnZXRNZW1iZXJQb3N0cyIsImdldE1lbWJlclBvc3QiLCJwb3N0TWVtYmVyUG9zdCIsInZhbHVlIiwicHV0TWVtYmVyUG9zdCIsImRlbGV0ZU1lbWJlclBvc3QiLCJzZWxlY3RNZW1iZXJQb3N0cyIsIm1lbWJlclBvc3RzIiwicmVkdWNlciJdLCJtYXBwaW5ncyI6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QUFwQkEsaUJBQW9CO0FBQUEsTUFBR0MsV0FBSCxVQUFHQSxXQUFIO0FBQUEsU0FBcUJBLFdBQXJCO0FBQUEsQ0FBMUI7QUFFUWpDLCtFQUFnQixDQUFDa0MsT0FBaEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyL3Bvc3RzL25ldy42NDY0MTEwZWU1NjQ5MzU3OGI1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5cclxuLy8g5YWo5Lu25Y+W5b6XXHJcbmV4cG9ydCBjb25zdCBHRVRfUE9TVFMgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgZ2V0UG9zdHMge1xyXG4gICAgICBpZFxyXG4gICAgICB0aXRsZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBwaG90b1xyXG4gICAgICBjcmVhdGVkQXRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG4vLyDmjIflrprjgZfjgZ9JROOBrlBPU1TjgpIx5Lu25Y+W5b6XXHJcbmV4cG9ydCBjb25zdCBGSU5EX1BPU1QgPSBncWxgXHJcbiAgcXVlcnkgZmluZFBvc3QoJGlkOiBGbG9hdCEpIHtcclxuICAgIGZpbmRQb3N0KGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgICAgdGl0bGVcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgcGhvdG9cclxuICAgICAgY3JlYXRlZEF0XHJcbiAgICAgIHVwZGF0ZWRBdFxyXG4gICAgICBhdXRob3JJZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbi8vIOS8muWToeeZu+mMslxyXG5leHBvcnQgY29uc3QgU0lHTl9VUCA9IGdxbGBcclxuICBtdXRhdGlvbiBzaWdudXAoXHJcbiAgICAgICRlbWFpbDogU3RyaW5nIVxyXG4gICAgICAkcGFzc3dvcmQ6IFN0cmluZyFcclxuICAgICAgJG5hbWU6IFN0cmluZyFcclxuICAgICkge1xyXG4gICAgc2lnbnVwKFxyXG4gICAgICBlbWFpbDogJGVtYWlsXHJcbiAgICAgIHBhc3N3b3JkOiAkcGFzc3dvcmRcclxuICAgICAgbmFtZTogJG5hbWVcclxuICAgICkge1xyXG4gICAgdG9rZW5cclxuICB9XHJcbn1cclxuYDtcclxuXHJcbi8vIOODreOCsOOCpOODs1xyXG5leHBvcnQgY29uc3QgU0lHTl9JTiA9IGdxbGBcclxuICBtdXRhdGlvbiBzaWduaW4oXHJcbiAgICAgICRlbWFpbDogU3RyaW5nIVxyXG4gICAgICAkcGFzc3dvcmQ6IFN0cmluZyFcclxuICAgICkge1xyXG4gICAgc2lnbmluKFxyXG4gICAgICBlbWFpbDogJGVtYWlsXHJcbiAgICAgIHBhc3N3b3JkOiAkcGFzc3dvcmRcclxuICAgICkge1xyXG4gICAgdG9rZW5cclxuICB9XHJcbn1cclxuYDtcclxuXHJcbi8vIOiqjeiovOa4iOOBv+ODgeOCp+ODg+OCr1xyXG5leHBvcnQgY29uc3QgQVVUSCA9IGdxbGBcclxuICBtdXRhdGlvbiBhdXRoKFxyXG4gICAgJHRva2VuOiBTdHJpbmchXHJcbiAgKSB7XHJcbiAgICBhdXRoKFxyXG4gICAgICB0b2tlbjogJHRva2VuXHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbi8vIE155oqV56i/5LiA6KanXHJcbmV4cG9ydCBjb25zdCBHRVRfTVlfUE9TVFMgPSBncWxgXHJcbiAgbXV0YXRpb24gZ2V0TXlQb3N0cyhcclxuICAgICRhdXRob3JJZDogRmxvYXQhXHJcbiAgICAkdG9rZW46IFN0cmluZyFcclxuICApIHtcclxuICAgIGF1dGgoXHJcbiAgICAgIHRva2VuOiAkdG9rZW5cclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gICAgZ2V0TXlQb3N0cyhcclxuICAgICAgYXV0aG9ySWQ6ICRhdXRob3JJZFxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIHBob3RvXHJcbiAgICAgIGNyZWF0ZWRBdFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbi8vIE155oqV56i/6Kmz57SwXHJcbmV4cG9ydCBjb25zdCBHRVRfTVlfUE9TVCA9IGdxbGBcclxuICBtdXRhdGlvbiBnZXRNeVBvc3QoXHJcbiAgICAkYXV0aG9ySWQ6IEZsb2F0IVxyXG4gICAgJHRva2VuOiBTdHJpbmchXHJcbiAgKSB7XHJcbiAgICBhdXRoKFxyXG4gICAgICB0b2tlbjogJHRva2VuXHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICAgIGdldE15UG9zdHMoXHJcbiAgICAgIGF1dGhvcklkOiAkYXV0aG9ySWRcclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICB0aXRsZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBwaG90b1xyXG4gICAgICBjcmVhdGVkQXRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG4vLyDmipXnqL/nmbvpjLJcclxuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NUID0gZ3FsYFxyXG4gIG11dGF0aW9uIGNyZWF0ZVBvc3QoXHJcbiAgICAkdGl0bGU6IFN0cmluZyFcclxuICAgICRkZXNjcmlwdGlvbjogU3RyaW5nIVxyXG4gICAgJHBob3RvOiBTdHJpbmchXHJcbiAgICAkYXV0aG9ySWQ6IEZsb2F0IVxyXG4gICAgJHRva2VuOiBTdHJpbmchXHJcbiAgKSB7XHJcbiAgICBhdXRoKFxyXG4gICAgICB0b2tlbjogJHRva2VuXHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICAgIGNyZWF0ZVBvc3QoXHJcbiAgICAgIHRpdGxlOiAkdGl0bGUsIFxyXG4gICAgICBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uLCBcclxuICAgICAgcGhvdG86ICRwaG90b1xyXG4gICAgICBhdXRob3JJZDogJGF1dGhvcklkXHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgdGl0bGVcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgcGhvdG9cclxuICAgIH1cclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgR0VUX01ZX1BPU1RTIH0gIGZyb20gJ0AvY29tbW9uL2NvbnN0YW50cy9hcGknXHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCJAL3V0aWxpdGllcy9hcGlcIjtcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJ0Avc3RvcmUvU3RvcmVUeXBlcydcclxuXHJcbmNvbnN0IHJlcXVlc3RHZXRNZW1iZXJQb3N0cyA9IGFzeW5jICh0b2tlbjogc3RyaW5nLCB1c2VySWQ6IG51bWJlcikgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XHJcbiAgICBtdXRhdGlvbjogR0VUX01ZX1BPU1RTLFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIHRva2VuLFxyXG4gICAgICBhdXRob3JJZDogdXNlcklkXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiB7IGRhdGEgfVxyXG59XHJcblxyXG5jb25zdCByZXF1ZXN0R2V0TWVtYmVyUG9zdCA9IGFzeW5jICh0b2tlbjpzdHJpbmcsIGlkOiBudW1iZXIpID0+IHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xyXG4gICAgbXV0YXRpb246IEdFVF9NWV9QT1NULFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIHRva2VuLFxyXG4gICAgICBpZFxyXG4gICAgfSxcclxuICB9KTtcclxuICByZXR1cm4geyBkYXRhIH1cclxufVxyXG5cclxuY29uc3QgcmVxdWVzdFBvc3RNZW1iZXJQb3N0ID0gYXN5bmMgKHRva2VuOnN0cmluZywgdmFsdWVzOiBQb3N0KSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcclxuICAgIG11dGF0aW9uOiBDUkVBVEVfUE9TVCxcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAuLi52YWx1ZXMsXHJcbiAgICAgIHRva2VuXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiB7IC4uLmRhdGEuY3JlYXRlUG9zdCB9XHJcbn1cclxuXHJcbmNvbnN0IHJlcXVlc3RQdXRNZW1iZXJQb3N0ID0gYXN5bmMgKHRva2VuOiBzdHJpbmcsIGlkOiBudW1iZXIsIHZhbHVlczogUG9zdCkgPT4ge1xyXG4gIHJldHVybiB7ICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlcXVlc3REZWxldGVNZW1iZXJQb3N0ID0gYXN5bmMgKHRva2VuOiBzdHJpbmcsIGlkOiBudW1iZXIpID0+IHtcclxuICByZXR1cm4geyAgfVxyXG59XHJcblxyXG5jb25zdCBtZW1iZXJQb3N0c1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdtZW1iZXJfcG9zdHMnLFxyXG4gIGluaXRpYWxTdGF0ZTogeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IG51bGwsIGl0ZW1zOiBbXSB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICAvLyDpgJrkv6HjgpLplovlp4vjgZfjgZ/mmYLjgavlkbzjgbbplqLmlbBcclxuICAgIGZldGNoU3RhcnQoc3RhdGU/LCBhY3Rpb24/KSB7XHJcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlXHJcbiAgICAgIHN0YXRlLmVycm9yID0gbnVsbFxyXG4gICAgfSxcclxuICAgIC8vIOmAmuS/oeOBjOWkseaVl+OBl+OBn+aZguOBq+WRvOOBtumWouaVsFxyXG4gICAgZmV0Y2hGYWlsdXJlKHN0YXRlPywgYWN0aW9uPykge1xyXG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgfSxcclxuICAgIGZldGNoTWVtYmVyUG9zdHMoc3RhdGU/LCBhY3Rpb24/KSB7XHJcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGxcclxuICAgICAgc3RhdGUuaXRlbXMgPSBfLm1hcEtleXMoYWN0aW9uLnBheWxvYWQuZGF0YS5nZXRNeVBvc3RzLCAnaWQnKVxyXG4gICAgfSxcclxuICAgIGZldGNoTWVtYmVyUG9zdChzdGF0ZT8sIGFjdGlvbj8pIHtcclxuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgIHN0YXRlLmVycm9yID0gbnVsbFxyXG4gICAgICBjb25zdCBwb3N0ID0gYWN0aW9uLnBheWxvYWQuZGF0YS5nZXRNeVBvc3RcclxuICAgICAgc3RhdGUuaXRlbXMgPSB7IC4uLnN0YXRlLml0ZW1zLCBbcG9zdC5pZF06IHBvc3QgfVxyXG4gICAgfSxcclxuICAgIHVuZmV0Y2hNZW1iZXJQb3N0KHN0YXRlPywgYWN0aW9uPykge1xyXG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsXHJcbiAgICAgIGNvbnN0IGlkID0gYWN0aW9uLnBheWxvYWQucmVzcG9uc2VcclxuICAgICAgZGVsZXRlIHN0YXRlLml0ZW1zW2lkXVxyXG4gICAgICBzdGF0ZS5pdGVtcyA9IHsgLi4uc3RhdGUuaXRlbXMgfVxyXG4gICAgfSxcclxuICB9LFxyXG59KVxyXG5cclxuLy8gQWN0aW9uc1xyXG5leHBvcnQgY29uc3Qge1xyXG4gIGZldGNoU3RhcnQsXHJcbiAgZmV0Y2hGYWlsdXJlLFxyXG4gIGZldGNoTWVtYmVyUG9zdHMsXHJcbiAgZmV0Y2hNZW1iZXJQb3N0LFxyXG4gIHVuZmV0Y2hNZW1iZXJQb3N0LFxyXG59ID0gbWVtYmVyUG9zdHNTbGljZS5hY3Rpb25zXHJcblxyXG5jb25zdCByZXF1ZXN0ID0gKGZ1bmMpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBkaXNwYXRjaChmZXRjaFN0YXJ0KCkpXHJcbiAgICBkaXNwYXRjaChmdW5jKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBkaXNwYXRjaChmZXRjaEZhaWx1cmUoZXJyb3Iuc3RhY2spKVxyXG4gIH1cclxufVxyXG5cclxuLy8g5aSW6YOo44GL44KJ44Gv44GT44Gu6Zai5pWw44KS5ZG844KT44Gn44KC44KJ44GGXHJcbmV4cG9ydCBjb25zdCBnZXRNZW1iZXJQb3N0cyA9ICh0b2tlbjogc3RyaW5nLCB1c2VySWQ6IG51bWJlcikgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2gocmVxdWVzdChmZXRjaE1lbWJlclBvc3RzKGF3YWl0IHJlcXVlc3RHZXRNZW1iZXJQb3N0cyh0b2tlbiwgdXNlcklkKSkpKVxyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRNZW1iZXJQb3N0ID0gKHRva2VuOiBzdHJpbmcsIGlkOiBudW1iZXIpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHJlcXVlc3QoZmV0Y2hNZW1iZXJQb3N0KGF3YWl0IHJlcXVlc3RHZXRNZW1iZXJQb3N0KHRva2VuLCBpZCkpKSlcclxufVxyXG5leHBvcnQgY29uc3QgcG9zdE1lbWJlclBvc3QgPSAodG9rZW46IHN0cmluZywgdmFsdWU6IFBvc3QpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHJlcXVlc3QoZmV0Y2hNZW1iZXJQb3N0KGF3YWl0IHJlcXVlc3RQb3N0TWVtYmVyUG9zdCh0b2tlbiwgdmFsdWUpKSkpXHJcbn1cclxuZXhwb3J0IGNvbnN0IHB1dE1lbWJlclBvc3QgPSAodG9rZW46IHN0cmluZywgaWQ6IG51bWJlciwgdmFsdWU6IFBvc3QpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKHJlcXVlc3QoZmV0Y2hNZW1iZXJQb3N0KGF3YWl0IHJlcXVlc3RQdXRNZW1iZXJQb3N0KHRva2VuLCBpZCwgdmFsdWUpKSkpXHJcbn1cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZU1lbWJlclBvc3QgPSAodG9rZW46IHN0cmluZywgaWQ6IG51bWJlcikgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgZGlzcGF0Y2gocmVxdWVzdCh1bmZldGNoTWVtYmVyUG9zdChhd2FpdCByZXF1ZXN0RGVsZXRlTWVtYmVyUG9zdCh0b2tlbiwgaWQpKSkpXHJcbn1cclxuXHJcbi8vIFNlbGVjdG9yc1xyXG5leHBvcnQgY29uc3Qgc2VsZWN0TWVtYmVyUG9zdHMgPSAoeyBtZW1iZXJQb3N0cyB9KSA9PiBtZW1iZXJQb3N0c1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtYmVyUG9zdHNTbGljZS5yZWR1Y2VyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=