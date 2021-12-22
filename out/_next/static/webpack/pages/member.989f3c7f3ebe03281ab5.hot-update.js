webpackHotUpdate_N_E("pages/member",{

/***/ "./src/pages/member/posts/list.tsx":
/*!*****************************************!*\
  !*** ./src/pages/member/posts/list.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_constants_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/common/constants/url */ "./src/common/constants/url.ts");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Layout */ "./src/components/Layout.tsx");
/* harmony import */ var material_ui_Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! material-ui/Table */ "./node_modules/material-ui/Table/index.js");
/* harmony import */ var material_ui_Table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(material_ui_Table__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store_slice_memberPosts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/store/slice/memberPosts */ "./src/store/slice/memberPosts.ts");
/* harmony import */ var _auth_AuthProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/auth/AuthProvider */ "./src/auth/AuthProvider.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _components_pages_Head__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/pages/Head */ "./src/components/pages/Head.tsx");




var _jsxFileName = "/root/study/nextjs-nestjs-graphql/src/pages/member/posts/list.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var MemberPostsList = function MemberPostsList() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var auth = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_auth_AuthProvider__WEBPACK_IMPORTED_MODULE_11__["AuthContext"]);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_store_slice_memberPosts__WEBPACK_IMPORTED_MODULE_10__["selectMemberPosts"]),
      loading = _useSelector.loading,
      error = _useSelector.error,
      items = _useSelector.items;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      nowLoading = _useState[0],
      setNowLoading = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var user = auth.currentUser;

    if (!user) {
      router.push(_common_constants_url__WEBPACK_IMPORTED_MODULE_6__["URL"].LOGIN);
    } else {
      setNowLoading(false);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    ;

    Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = auth.currentUser;
              _context.t0 = user;

              if (!_context.t0) {
                _context.next = 5;
                break;
              }

              _context.next = 5;
              return dispatch(Object(_store_slice_memberPosts__WEBPACK_IMPORTED_MODULE_10__["getMemberPosts"])(user.token, Number(user.id)));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [dispatch]);
  var posts = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return lodash__WEBPACK_IMPORTED_MODULE_12__["map"](items, function (post, i) {
      var data = post.data;
      return _objectSpread(_objectSpread({
        id: post.id
      }, data), {}, {
        regist_data_yyyymmdd: moment__WEBPACK_IMPORTED_MODULE_9___default()(data.regist_datetime).format('YYYY/MM/DD HH:mm')
      });
    });
  });
  if (loading || nowLoading) return __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 37
    }
  }, "...loading");
  if (error) return __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, error);

  var renderPosts = function renderPosts() {
    var photoStyle = {
      display: 'flex',
      flexDirection: 'row'
    };
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, (posts || []).map(function (post) {
      return __jsx(material_ui_Table__WEBPACK_IMPORTED_MODULE_8__["TableRow"], {
        key: post.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }
      }, __jsx(material_ui_Table__WEBPACK_IMPORTED_MODULE_8__["TableRowColumn"], {
        width: "120px",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 15
        }
      }, post.id), __jsx(material_ui_Table__WEBPACK_IMPORTED_MODULE_8__["TableRowColumn"], {
        width: "100px",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 15
        }
      }, post.title), __jsx(material_ui_Table__WEBPACK_IMPORTED_MODULE_8__["TableRowColumn"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 15
        }
      }, __jsx("div", {
        style: photoStyle,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }
      }, [post.photo].map(function (image, index) {
        return __jsx("span", {
          style: {
            marginLeft: '10px'
          },
          key: "image".concat(index),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 21
          }
        }, image && __jsx("img", {
          src: image,
          width: "100px",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 33
          }
        }));
      }))), __jsx(material_ui_Table__WEBPACK_IMPORTED_MODULE_8__["TableRowColumn"], {
        width: "100px",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 15
        }
      }, post.regist_data_yyyymmdd), __jsx(material_ui_Table__WEBPACK_IMPORTED_MODULE_8__["TableRowColumn"], {
        width: "100px",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 15
        }
      }, __jsx("input", {
        type: "button",
        onClick: function onClick(e) {
          e.preventDefault();
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("".concat(_common_constants_url__WEBPACK_IMPORTED_MODULE_6__["URL"].MEMBER_POSTS, "/").concat(post.id));
        },
        value: "\u5909\u66F4",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 17
        }
      })));
    }));
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, __jsx(_components_pages_Head__WEBPACK_IMPORTED_MODULE_15__["default"], {
    title: "\u6295\u7A3F\u4E00\u89A7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, __jsx("nav", {
    className: "breadcrumb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    href: _common_constants_url__WEBPACK_IMPORTED_MODULE_6__["URL"].HOME,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeIcon"], {
    icon: "home",
    style: {
      width: 16
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 19
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 19
    }
  }, "HOME")))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, "\u30DE\u30A4\u30DA\u30FC\u30B8"))), __jsx("div", {
    className: "entry-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "entry-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, "\u6295\u7A3F\u4E00\u89A7")), __jsx("div", {
    className: "entry-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "button",
    onClick: function onClick(e) {
      e.preventDefault();
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(_common_constants_url__WEBPACK_IMPORTED_MODULE_6__["URL"].MEMBER_POSTS_NEW);
    },
    value: "\u65B0\u898F\u767B\u9332",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  })), __jsx(material_ui_Table__WEBPACK_IMPORTED_MODULE_8__["Table"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, __jsx(material_ui_Table__WEBPACK_IMPORTED_MODULE_8__["TableHeader"], {
    displaySelectAll: false,
    adjustForCheckbox: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, __jsx(material_ui_Table__WEBPACK_IMPORTED_MODULE_8__["TableRow"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  }, __jsx(material_ui_Table__WEBPACK_IMPORTED_MODULE_8__["TableRowColumn"], {
    width: "120px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }, "ID"), __jsx(material_ui_Table__WEBPACK_IMPORTED_MODULE_8__["TableRowColumn"], {
    width: "100px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, "\u30BF\u30A4\u30C8\u30EB"), __jsx(material_ui_Table__WEBPACK_IMPORTED_MODULE_8__["TableRowColumn"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }, "\u753B\u50CF"), __jsx(material_ui_Table__WEBPACK_IMPORTED_MODULE_8__["TableRowColumn"], {
    width: "100px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }, "\u6295\u7A3F\u65E5\u6642"), __jsx(material_ui_Table__WEBPACK_IMPORTED_MODULE_8__["TableRowColumn"], {
    width: "100px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 19
    }
  })))), __jsx(material_ui_Table__WEBPACK_IMPORTED_MODULE_8__["TableBody"], {
    displayRowCheckbox: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, renderPosts())))));
};

_s(MemberPostsList, "+q+AWg4qln88a4YZv2wWl399Bxk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = MemberPostsList;
/* harmony default export */ __webpack_exports__["default"] = (MemberPostsList);

var _c;

$RefreshReg$(_c, "MemberPostsList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21lbWJlci9wb3N0cy9saXN0LnRzeCJdLCJuYW1lcyI6WyJNZW1iZXJQb3N0c0xpc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhdXRoIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic2VsZWN0TWVtYmVyUG9zdHMiLCJsb2FkaW5nIiwiZXJyb3IiLCJpdGVtcyIsInVzZVN0YXRlIiwibm93TG9hZGluZyIsInNldE5vd0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJwdXNoIiwiVVJMIiwiTE9HSU4iLCJnZXRNZW1iZXJQb3N0cyIsInRva2VuIiwiTnVtYmVyIiwiaWQiLCJwb3N0cyIsInN0YXRlIiwiXyIsInBvc3QiLCJpIiwiZGF0YSIsInJlZ2lzdF9kYXRhX3l5eXltbWRkIiwibW9tZW50IiwicmVnaXN0X2RhdGV0aW1lIiwiZm9ybWF0IiwicmVuZGVyUG9zdHMiLCJwaG90b1N0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtYXAiLCJ0aXRsZSIsInBob3RvIiwiaW1hZ2UiLCJpbmRleCIsIm1hcmdpbkxlZnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJSb3V0ZXIiLCJNRU1CRVJfUE9TVFMiLCJIT01FIiwid2lkdGgiLCJNRU1CRVJfUE9TVFNfTkVXIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFTQSxJQUFNQSxlQUFtQixHQUFHLFNBQXRCQSxlQUFzQixHQUFNO0FBQUE7O0FBQ2hDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLHdEQUFVLENBQUNDLCtE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aUJDLHVELEVBbUJwQkEsdUQ7OztLQXZCVlIsZTtBQXlJU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyLjk4OWYzYzdmM2ViZTAzMjgxYWI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgRkMgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IFVSTCB9IGZyb20gJ0AvY29tbW9uL2NvbnN0YW50cy91cmwnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IHtcclxuICBUYWJsZSxcclxuICBUYWJsZUJvZHksXHJcbiAgVGFibGVIZWFkZXIsXHJcbiAgVGFibGVSb3csXHJcbiAgVGFibGVSb3dDb2x1bW4sXHJcbn0gZnJvbSAnbWF0ZXJpYWwtdWkvVGFibGUnXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5pbXBvcnQgeyBzZWxlY3RNZW1iZXJQb3N0cywgZ2V0TWVtYmVyUG9zdHMgfSBmcm9tICdAL3N0b3JlL3NsaWNlL21lbWJlclBvc3RzJ1xyXG5cclxuaW1wb3J0IHsgRGF0YSwgUG9zdCB9IGZyb20gJ0Avc3RvcmUvU3RvcmVUeXBlcydcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICdAL2F1dGgvQXV0aFByb3ZpZGVyJ1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCBIZWFkIGZyb20gJ0AvY29tcG9uZW50cy9wYWdlcy9IZWFkJ1xyXG50eXBlIFN0YXRlID0ge1xyXG4gIG1lbWJlclBvc3RzOiBEYXRhPFBvc3Q+W11cclxufVxyXG50eXBlIFBvc3REaXNwbGF5ID0gUG9zdCAmIHtcclxuICBpZDogc3RyaW5nXHJcbiAgcmVnaXN0X2RhdGFfeXl5eW1tZGQ6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBNZW1iZXJQb3N0c0xpc3Q6IEZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgYXV0aCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgaXRlbXMgfSA9IHVzZVNlbGVjdG9yKHNlbGVjdE1lbWJlclBvc3RzKVxyXG4gIGNvbnN0IFtub3dMb2FkaW5nLCBzZXROb3dMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlclxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFVSTC5MT0dJTilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE5vd0xvYWRpbmcoZmFsc2UpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICA7KGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXJcclxuICAgICAgdXNlciAmJiAoYXdhaXQgZGlzcGF0Y2goZ2V0TWVtYmVyUG9zdHModXNlci50b2tlbiwgTnVtYmVyKHVzZXIuaWQpKSkpXHJcbiAgICB9KSgpXHJcbiAgfSwgW2Rpc3BhdGNoXSlcclxuXHJcbiAgY29uc3QgcG9zdHMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4gXy5tYXAoXHJcbiAgICAgIGl0ZW1zLFxyXG4gICAgICAocG9zdCwgaSk6IFBvc3REaXNwbGF5ID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhOiBQb3N0ID0gcG9zdC5kYXRhXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiBwb3N0LmlkLFxyXG4gICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgIHJlZ2lzdF9kYXRhX3l5eXltbWRkOiBtb21lbnQoZGF0YS5yZWdpc3RfZGF0ZXRpbWUpLmZvcm1hdChcclxuICAgICAgICAgICAgJ1lZWVkvTU0vREQgSEg6bW0nXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKVxyXG4gIH0pXHJcblxyXG4gIGlmIChsb2FkaW5nIHx8IG5vd0xvYWRpbmcpIHJldHVybiA8cD4uLi5sb2FkaW5nPC9wPlxyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPntlcnJvcn08L3A+XHJcblxyXG4gIGNvbnN0IHJlbmRlclBvc3RzID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IHBob3RvU3R5bGUgPSB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHsocG9zdHMgfHwgW10pLm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cG9zdC5pZH0+XHJcbiAgICAgICAgICAgICAgPFRhYmxlUm93Q29sdW1uIHdpZHRoPVwiMTIwcHhcIj57cG9zdC5pZH08L1RhYmxlUm93Q29sdW1uPlxyXG4gICAgICAgICAgICAgIDxUYWJsZVJvd0NvbHVtbiB3aWR0aD1cIjEwMHB4XCI+e3Bvc3QudGl0bGV9PC9UYWJsZVJvd0NvbHVtbj5cclxuICAgICAgICAgICAgICA8VGFibGVSb3dDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtwaG90b1N0eWxlIGFzIFJlYWN0LkNTU1Byb3BlcnRpZXN9PlxyXG4gICAgICAgICAgICAgICAgICB7W3Bvc3QucGhvdG9dLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEwcHgnIH19IGtleT17YGltYWdlJHtpbmRleH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpbWFnZSAmJiA8aW1nIHNyYz17aW1hZ2V9IHdpZHRoPVwiMTAwcHhcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZVJvd0NvbHVtbj5cclxuICAgICAgICAgICAgICA8VGFibGVSb3dDb2x1bW4gd2lkdGg9XCIxMDBweFwiPlxyXG4gICAgICAgICAgICAgICAge3Bvc3QucmVnaXN0X2RhdGFfeXl5eW1tZGR9XHJcbiAgICAgICAgICAgICAgPC9UYWJsZVJvd0NvbHVtbj5cclxuICAgICAgICAgICAgICA8VGFibGVSb3dDb2x1bW4gd2lkdGg9XCIxMDBweFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKGAke1VSTC5NRU1CRVJfUE9TVFN9LyR7cG9zdC5pZH1gKVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIuWkieabtFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvVGFibGVSb3dDb2x1bW4+XHJcbiAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxIZWFkIHRpdGxlPVwi5oqV56i/5LiA6KanXCIgLz5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy88IS0tIOODkeODs+OBj+OBmiAtLT5cclxuICAgICAgICB9XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtVUkwuSE9NRX0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiaG9tZVwiIHN0eWxlPXt7IHdpZHRoOiAxNiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5IT01FPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPuODnuOCpOODmuODvOOCuDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW50cnktaGVhZGVyXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZW50cnktdGl0bGVcIj7mipXnqL/kuIDopqc8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW50cnktY29udGVudFwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFVSTC5NRU1CRVJfUE9TVFNfTkVXKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdmFsdWU9XCLmlrDopo/nmbvpjLJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgICA8VGFibGVIZWFkZXIgZGlzcGxheVNlbGVjdEFsbD17ZmFsc2V9IGFkanVzdEZvckNoZWNrYm94PXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlUm93Q29sdW1uIHdpZHRoPVwiMTIwcHhcIj5JRDwvVGFibGVSb3dDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVSb3dDb2x1bW4gd2lkdGg9XCIxMDBweFwiPuOCv+OCpOODiOODqzwvVGFibGVSb3dDb2x1bW4+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVSb3dDb2x1bW4+55S75YOPPC9UYWJsZVJvd0NvbHVtbj5cclxuICAgICAgICAgICAgICAgIDxUYWJsZVJvd0NvbHVtbiB3aWR0aD1cIjEwMHB4XCI+5oqV56i/5pel5pmCPC9UYWJsZVJvd0NvbHVtbj5cclxuICAgICAgICAgICAgICAgIDxUYWJsZVJvd0NvbHVtbiB3aWR0aD1cIjEwMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZVJvd0NvbHVtbj5cclxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxyXG4gICAgICAgICAgICA8VGFibGVCb2R5IGRpc3BsYXlSb3dDaGVja2JveD17ZmFsc2V9PntyZW5kZXJQb3N0cygpfTwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW1iZXJQb3N0c0xpc3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==