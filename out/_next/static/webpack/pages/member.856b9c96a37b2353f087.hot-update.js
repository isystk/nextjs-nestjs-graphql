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
        createdAt_yyyymmdd: post.createdAt ? moment__WEBPACK_IMPORTED_MODULE_9___default()(post.createdAt).format('YYYY/MM/DD') : ''
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
      }, post.createdAt_yyyymmdd), __jsx(material_ui_Table__WEBPACK_IMPORTED_MODULE_8__["TableRowColumn"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21lbWJlci9wb3N0cy9saXN0LnRzeCJdLCJuYW1lcyI6WyJNZW1iZXJQb3N0c0xpc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhdXRoIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic2VsZWN0TWVtYmVyUG9zdHMiLCJsb2FkaW5nIiwiZXJyb3IiLCJpdGVtcyIsInVzZVN0YXRlIiwibm93TG9hZGluZyIsInNldE5vd0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJwdXNoIiwiVVJMIiwiTE9HSU4iLCJnZXRNZW1iZXJQb3N0cyIsInRva2VuIiwiTnVtYmVyIiwiaWQiLCJwb3N0cyIsInN0YXRlIiwiXyIsInBvc3QiLCJpIiwiZGF0YSIsImNyZWF0ZWRBdF95eXl5bW1kZCIsImNyZWF0ZWRBdCIsIm1vbWVudCIsImZvcm1hdCIsInJlbmRlclBvc3RzIiwicGhvdG9TdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFwIiwidGl0bGUiLCJwaG90byIsImltYWdlIiwiaW5kZXgiLCJtYXJnaW5MZWZ0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiUm91dGVyIiwiTUVNQkVSX1BPU1RTIiwiSE9NRSIsIndpZHRoIiwiTUVNQkVSX1BPU1RTX05FVyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBU0EsSUFBTUEsZUFBbUIsR0FBRyxTQUF0QkEsZUFBc0IsR0FBTTtBQUFBOztBQUNoQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyx3REFBVSxDQUFDQywrREFBRCxDQUF2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O1VBQ1dFLHFELEVBRUVLLHVELEVBQ2lCQyx1RCxFQW1CcEJBLHVEOzs7S0F2QlZSLGU7QUF5SVNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lbWJlci44NTZiOWM5NmEzN2IyMzUzZjA4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIEZDIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBVUkwgfSBmcm9tICdAL2NvbW1vbi9jb25zdGFudHMvdXJsJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCB7XHJcbiAgVGFibGUsXHJcbiAgVGFibGVCb2R5LFxyXG4gIFRhYmxlSGVhZGVyLFxyXG4gIFRhYmxlUm93LFxyXG4gIFRhYmxlUm93Q29sdW1uLFxyXG59IGZyb20gJ21hdGVyaWFsLXVpL1RhYmxlJ1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuaW1wb3J0IHsgc2VsZWN0TWVtYmVyUG9zdHMsIGdldE1lbWJlclBvc3RzIH0gZnJvbSAnQC9zdG9yZS9zbGljZS9tZW1iZXJQb3N0cydcclxuXHJcbmltcG9ydCB7IERhdGEsIFBvc3QgfSBmcm9tICdAL3N0b3JlL1N0b3JlVHlwZXMnXHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnQC9hdXRoL0F1dGhQcm92aWRlcidcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICdAL2NvbXBvbmVudHMvcGFnZXMvSGVhZCdcclxudHlwZSBTdGF0ZSA9IHtcclxuICBtZW1iZXJQb3N0czogRGF0YTxQb3N0PltdXHJcbn1cclxudHlwZSBQb3N0RGlzcGxheSA9IFBvc3QgJiB7XHJcbiAgaWQ6IHN0cmluZ1xyXG4gIHJlZ2lzdF9kYXRhX3l5eXltbWRkOiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgTWVtYmVyUG9zdHNMaXN0OiBGQyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IGF1dGggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGl0ZW1zIH0gPSB1c2VTZWxlY3RvcihzZWxlY3RNZW1iZXJQb3N0cylcclxuICBjb25zdCBbbm93TG9hZGluZywgc2V0Tm93TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXJcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICByb3V0ZXIucHVzaChVUkwuTE9HSU4pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXROb3dMb2FkaW5nKGZhbHNlKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgOyhhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhdXRoLmN1cnJlbnRVc2VyXHJcbiAgICAgIHVzZXIgJiYgKGF3YWl0IGRpc3BhdGNoKGdldE1lbWJlclBvc3RzKHVzZXIudG9rZW4sIE51bWJlcih1c2VyLmlkKSkpKVxyXG4gICAgfSkoKVxyXG4gIH0sIFtkaXNwYXRjaF0pXHJcblxyXG4gIGNvbnN0IHBvc3RzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBTdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIF8ubWFwKFxyXG4gICAgICBpdGVtcyxcclxuICAgICAgKHBvc3QsIGkpOiBQb3N0RGlzcGxheSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YTogUG9zdCA9IHBvc3QuZGF0YVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpZDogcG9zdC5pZCxcclxuICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICBjcmVhdGVkQXRfeXl5eW1tZGQ6IHBvc3QuY3JlYXRlZEF0XHJcbiAgICAgICAgICAgICAgPyBtb21lbnQocG9zdC5jcmVhdGVkQXQpLmZvcm1hdCgnWVlZWS9NTS9ERCcpXHJcbiAgICAgICAgICAgICAgOiAnJyxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIClcclxuICB9KVxyXG5cclxuICBpZiAobG9hZGluZyB8fCBub3dMb2FkaW5nKSByZXR1cm4gPHA+Li4ubG9hZGluZzwvcD5cclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD57ZXJyb3J9PC9wPlxyXG5cclxuICBjb25zdCByZW5kZXJQb3N0cyA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBwaG90b1N0eWxlID0ge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICB7KHBvc3RzIHx8IFtdKS5tYXAoKHBvc3QpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Bvc3QuaWR9PlxyXG4gICAgICAgICAgICAgIDxUYWJsZVJvd0NvbHVtbiB3aWR0aD1cIjEyMHB4XCI+e3Bvc3QuaWR9PC9UYWJsZVJvd0NvbHVtbj5cclxuICAgICAgICAgICAgICA8VGFibGVSb3dDb2x1bW4gd2lkdGg9XCIxMDBweFwiPntwb3N0LnRpdGxlfTwvVGFibGVSb3dDb2x1bW4+XHJcbiAgICAgICAgICAgICAgPFRhYmxlUm93Q29sdW1uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17cGhvdG9TdHlsZSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzfT5cclxuICAgICAgICAgICAgICAgICAge1twb3N0LnBob3RvXS5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMHB4JyB9fSBrZXk9e2BpbWFnZSR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aW1hZ2UgJiYgPGltZyBzcmM9e2ltYWdlfSB3aWR0aD1cIjEwMHB4XCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvVGFibGVSb3dDb2x1bW4+XHJcbiAgICAgICAgICAgICAgPFRhYmxlUm93Q29sdW1uIHdpZHRoPVwiMTAwcHhcIj5cclxuICAgICAgICAgICAgICAgIHtwb3N0LmNyZWF0ZWRBdF95eXl5bW1kZH1cclxuICAgICAgICAgICAgICA8L1RhYmxlUm93Q29sdW1uPlxyXG4gICAgICAgICAgICAgIDxUYWJsZVJvd0NvbHVtbiB3aWR0aD1cIjEwMHB4XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goYCR7VVJMLk1FTUJFUl9QT1NUU30vJHtwb3N0LmlkfWApXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwi5aSJ5pu0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZVJvd0NvbHVtbj5cclxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWQgdGl0bGU9XCLmipXnqL/kuIDopqdcIiAvPlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAvLzwhLS0g44OR44Oz44GP44GaIC0tPlxyXG4gICAgICAgIH1cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1VSTC5IT01FfT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJob21lXCIgc3R5bGU9e3sgd2lkdGg6IDE2IH19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkhPTUU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+44Oe44Kk44Oa44O844K4PC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbnRyeS1oZWFkZXJcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJlbnRyeS10aXRsZVwiPuaKleeov+S4gOimpzwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbnRyeS1jb250ZW50XCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goVVJMLk1FTUJFUl9QT1NUU19ORVcpXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB2YWx1ZT1cIuaWsOimj+eZu+mMslwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICAgIDxUYWJsZUhlYWRlciBkaXNwbGF5U2VsZWN0QWxsPXtmYWxzZX0gYWRqdXN0Rm9yQ2hlY2tib3g9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVSb3dDb2x1bW4gd2lkdGg9XCIxMjBweFwiPklEPC9UYWJsZVJvd0NvbHVtbj5cclxuICAgICAgICAgICAgICAgIDxUYWJsZVJvd0NvbHVtbiB3aWR0aD1cIjEwMHB4XCI+44K/44Kk44OI44OrPC9UYWJsZVJvd0NvbHVtbj5cclxuICAgICAgICAgICAgICAgIDxUYWJsZVJvd0NvbHVtbj7nlLvlg488L1RhYmxlUm93Q29sdW1uPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlUm93Q29sdW1uIHdpZHRoPVwiMTAwcHhcIj7mipXnqL/ml6XmmYI8L1RhYmxlUm93Q29sdW1uPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlUm93Q29sdW1uIHdpZHRoPVwiMTAwcHhcIj5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlUm93Q29sdW1uPlxyXG4gICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XHJcbiAgICAgICAgICAgIDxUYWJsZUJvZHkgZGlzcGxheVJvd0NoZWNrYm94PXtmYWxzZX0+e3JlbmRlclBvc3RzKCl9PC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbWJlclBvc3RzTGlzdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9