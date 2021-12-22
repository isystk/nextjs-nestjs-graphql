webpackHotUpdate_N_E("pages/member/posts/new",{

/***/ "./src/components/pages/Member/Posts/MemberPostsForm.tsx":
/*!***************************************************************!*\
  !*** ./src/components/pages/Member/Posts/MemberPostsForm.tsx ***!
  \***************************************************************/
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
/* harmony import */ var _store_slice_parts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store/slice/parts */ "./src/store/slice/parts.ts");
/* harmony import */ var _store_slice_memberPosts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/store/slice/memberPosts */ "./src/store/slice/memberPosts.ts");
/* harmony import */ var _components_elements_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/elements/Input */ "./src/components/elements/Input/index.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _components_elements_Input_ImageFile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/elements/Input/ImageFile */ "./src/components/elements/Input/ImageFile.tsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);




var _jsxFileName = "/root/study/nextjs-nestjs-graphql/src/components/pages/Member/Posts/MemberPostsForm.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var MemberPostsForm = function MemberPostsForm(props) {
  _s();

  var postId = props.postId,
      userId = props.userId;
  var isEdit = !!postId;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      nowLoading = _useState[0],
      setNowLoading = _useState[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_store_slice_memberPosts__WEBPACK_IMPORTED_MODULE_8__["selectMemberPosts"]),
      loading = _useSelector.loading,
      error = _useSelector.error,
      items = _useSelector.items;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    // パスの投稿IDから投稿データを取得する
    ;

    Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!postId) {
                _context.next = 6;
                break;
              }

              _context.next = 3;
              return dispatch(Object(_store_slice_memberPosts__WEBPACK_IMPORTED_MODULE_8__["getMemberPost"])(postId));

            case 3:
              setNowLoading(false);
              _context.next = 7;
              break;

            case 6:
              setNowLoading(false);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [postId]);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      post = _useState2[0],
      setPost = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var _items$postId;

    var data = ((_items$postId = items[postId]) === null || _items$postId === void 0 ? void 0 : _items$postId.data) || {
      title: '',
      description: '',
      photo: ''
    };
    setPost(_objectSpread(_objectSpread({}, data), {}, {
      regist_data_yyyymmdd: data.regist_datetime && moment__WEBPACK_IMPORTED_MODULE_14___default()(data.regist_datetime).format('YYYY/MM/DD HH:mm')
    }));
  }, [items]);
  var useStyle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])(function (theme) {
    return {
      padding: {
        padding: theme.spacing(3)
      },
      button: {
        margin: theme.spacing(1)
      }
    };
  });
  var classes = useStyle();
  if (loading || nowLoading) return __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 37
    }
  }, "...loading");
  if (error) return __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, error);
  if (postId && post && userId !== post.userId) return __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 56
    }
  }, "Not Found");

  var initialValues = _objectSpread({}, post);

  var errorMessage = function errorMessage(message) {
    return __jsx("p", {
      className: "error",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 37
      }
    }, message);
  };

  var validationSchema = yup__WEBPACK_IMPORTED_MODULE_12__["object"]().shape({
    title: yup__WEBPACK_IMPORTED_MODULE_12__["string"]().required(errorMessage('タイトルを入力してください。')),
    description: yup__WEBPACK_IMPORTED_MODULE_12__["string"]().required(errorMessage('本文を入力してください。')),
    photo: yup__WEBPACK_IMPORTED_MODULE_12__["string"]().required(errorMessage('写真を入力してください。'))
  });

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(values) {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // ローディング表示
              dispatch(Object(_store_slice_parts__WEBPACK_IMPORTED_MODULE_7__["showLoading"])());
              data = _objectSpread(_objectSpread({}, values), {}, {
                userId: userId
              });

              if (!isEdit) {
                _context2.next = 7;
                break;
              }

              _context2.next = 5;
              return dispatch(Object(_store_slice_memberPosts__WEBPACK_IMPORTED_MODULE_8__["putMemberPost"])(postId, data));

            case 5:
              _context2.next = 9;
              break;

            case 7:
              _context2.next = 9;
              return dispatch(Object(_store_slice_memberPosts__WEBPACK_IMPORTED_MODULE_8__["postMemberPost"])(data));

            case 9:
              // マイページTOPに画面遷移する
              router.push(_common_constants_url__WEBPACK_IMPORTED_MODULE_6__["URL"].MEMBER); // ローディング非表示

              dispatch(Object(_store_slice_parts__WEBPACK_IMPORTED_MODULE_7__["hideLoading"])());

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onDeleteClick = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (window.confirm('削除します。よろしいですか？')) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return", false);

            case 2:
              // ローディング表示
              dispatch(Object(_store_slice_parts__WEBPACK_IMPORTED_MODULE_7__["showLoading"])());
              _context3.next = 5;
              return dispatch(Object(_store_slice_memberPosts__WEBPACK_IMPORTED_MODULE_8__["deleteMemberPost"])(postId));

            case 5:
              // マイページTOPに画面遷移する
              router.push(_common_constants_url__WEBPACK_IMPORTED_MODULE_6__["URL"].MEMBER); // ローディング非表示

              dispatch(Object(_store_slice_parts__WEBPACK_IMPORTED_MODULE_7__["hideLoading"])());

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onDeleteClick() {
      return _ref3.apply(this, arguments);
    };
  }();

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
    container: true,
    justifyContent: "center",
    spacing: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
    item: true,
    md: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Card"], {
    className: classes.padding,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["CardHeader"], {
    title: "\u6295\u7A3F\u3059\u308B\u8A18\u4E8B\u5185\u5BB9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }), __jsx(formik__WEBPACK_IMPORTED_MODULE_11__["Formik"], {
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, function (_ref4) {
    var setFieldValue = _ref4.setFieldValue,
        dirty = _ref4.dirty,
        isValid = _ref4.isValid,
        values = _ref4.values,
        handleChange = _ref4.handleChange,
        handleBlur = _ref4.handleBlur;
    return __jsx(formik__WEBPACK_IMPORTED_MODULE_11__["Form"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["CardContent"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      container: true,
      spacing: 1,
      justifyContent: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 21
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      xs: 12,
      sm: 12,
      md: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 23
      }
    }, __jsx(_components_elements_Input__WEBPACK_IMPORTED_MODULE_9__["Input"], {
      label: "\u30BF\u30A4\u30C8\u30EB",
      name: "title",
      type: "text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 25
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      xs: 12,
      sm: 12,
      md: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 23
      }
    }, __jsx(_components_elements_Input__WEBPACK_IMPORTED_MODULE_9__["Textarea"], {
      label: "\u672C\u6587",
      name: "description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 25
      }
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      xs: 12,
      sm: 12,
      md: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 23
      }
    }, __jsx(_components_elements_Input_ImageFile__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: "\u5199\u771F",
      name: "photo",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 25
      }
    })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["CardActions"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      item: true,
      xs: 12,
      sm: 6,
      md: 6,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 21
      }
    }, isEdit && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      variant: "contained",
      color: "secondary",
      type: "Button",
      className: classes.button,
      onClick: onDeleteClick,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 25
      }
    }, "\u524A\u9664\u3059\u308B"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      disabled: !dirty || !isValid,
      variant: "contained",
      color: "primary",
      type: "Submit",
      className: classes.button,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 23
      }
    }, "\u767B\u9332\u3059\u308B"))));
  }))));
};

_s(MemberPostsForm, "mLr/wPUAniojP2IP4R6pNzp13nI=", true, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

_c = MemberPostsForm;
/* harmony default export */ __webpack_exports__["default"] = (MemberPostsForm);

var _c;

$RefreshReg$(_c, "MemberPostsForm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvTWVtYmVyL1Bvc3RzL01lbWJlclBvc3RzRm9ybS50c3giXSwibmFtZXMiOlsiTWVtYmVyUG9zdHNGb3JtIiwicHJvcHMiLCJwb3N0SWQiLCJ1c2VySWQiLCJpc0VkaXQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIm5vd0xvYWRpbmciLCJzZXROb3dMb2FkaW5nIiwidXNlU2VsZWN0b3IiLCJzZWxlY3RNZW1iZXJQb3N0cyIsImxvYWRpbmciLCJlcnJvciIsIml0ZW1zIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsImdldE1lbWJlclBvc3QiLCJwb3N0Iiwic2V0UG9zdCIsImRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGhvdG8iLCJyZWdpc3RfZGF0YV95eXl5bW1kZCIsInJlZ2lzdF9kYXRldGltZSIsIm1vbWVudCIsImZvcm1hdCIsInVzZVN0eWxlIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFkZGluZyIsInNwYWNpbmciLCJidXR0b24iLCJtYXJnaW4iLCJjbGFzc2VzIiwiaW5pdGlhbFZhbHVlcyIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiWXVwIiwic2hhcGUiLCJyZXF1aXJlZCIsIm9uU3VibWl0IiwidmFsdWVzIiwic2hvd0xvYWRpbmciLCJwdXRNZW1iZXJQb3N0IiwicG9zdE1lbWJlclBvc3QiLCJwdXNoIiwiVVJMIiwiTUVNQkVSIiwiaGlkZUxvYWRpbmciLCJvbkRlbGV0ZUNsaWNrIiwid2luZG93IiwiY29uZmlybSIsImRlbGV0ZU1lbWJlclBvc3QiLCJzZXRGaWVsZFZhbHVlIiwiZGlydHkiLCJpc1ZhbGlkIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FB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M0pEOztHQUFNbEMsZTtVQUdXTSxxRCxFQUVtQkksdUQsRUFFakJNLHVEOzs7S0FQYmhCLGU7QUE2SlNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lbWJlci9wb3N0cy9uZXcuN2VjMDRmMGU0MjUwZjVkYmRjZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBGQyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IFVSTCB9IGZyb20gJ0AvY29tbW9uL2NvbnN0YW50cy91cmwnXHJcbmltcG9ydCB7IHNob3dMb2FkaW5nLCBoaWRlTG9hZGluZyB9IGZyb20gJ0Avc3RvcmUvc2xpY2UvcGFydHMnXHJcbmltcG9ydCB7XHJcbiAgZ2V0TWVtYmVyUG9zdCxcclxuICBwb3N0TWVtYmVyUG9zdCxcclxuICBwdXRNZW1iZXJQb3N0LFxyXG4gIGRlbGV0ZU1lbWJlclBvc3QsXHJcbiAgc2VsZWN0TWVtYmVyUG9zdHMsXHJcbn0gZnJvbSAnQC9zdG9yZS9zbGljZS9tZW1iZXJQb3N0cydcclxuaW1wb3J0IHsgSW5wdXQsIFRleHRhcmVhIH0gZnJvbSAnQC9jb21wb25lbnRzL2VsZW1lbnRzL0lucHV0J1xyXG5cclxuaW1wb3J0IHsgRGF0YSwgUG9zdCB9IGZyb20gJ0Avc3RvcmUvU3RvcmVUeXBlcydcclxuaW1wb3J0IHtcclxuICBHcmlkLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgQ2FyZCxcclxuICBDYXJkQ29udGVudCxcclxuICBDYXJkQWN0aW9ucyxcclxuICBCdXR0b24sXHJcbiAgQ2FyZEhlYWRlcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tICdmb3JtaWsnXHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnXHJcbmltcG9ydCBJbWFnZUZpbGUgZnJvbSAnQC9jb21wb25lbnRzL2VsZW1lbnRzL0lucHV0L0ltYWdlRmlsZSdcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbnR5cGUgUG9zdERpc3BsYXkgPSBQb3N0ICYge1xyXG4gIGlkOiBzdHJpbmdcclxuICByZWdpc3RfZGF0YV95eXl5bW1kZDogc3RyaW5nXHJcbn1cclxudHlwZSBQcm9wcyA9IHtcclxuICBwb3N0SWQ/OiBzdHJpbmdcclxuICB1c2VySWQ6IHN0cmluZ1xyXG59XHJcbnR5cGUgU3RhdGUgPSB7XHJcbiAgbWVtYmVyUG9zdHM6IERhdGE8UG9zdD5bXVxyXG59XHJcblxyXG5jb25zdCBNZW1iZXJQb3N0c0Zvcm06IEZDPFByb3BzPiA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICBjb25zdCB7IHBvc3RJZCwgdXNlcklkIH0gPSBwcm9wc1xyXG4gIGNvbnN0IGlzRWRpdCA9ICEhcG9zdElkXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbbm93TG9hZGluZywgc2V0Tm93TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKVxyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGl0ZW1zIH0gPSB1c2VTZWxlY3RvcihzZWxlY3RNZW1iZXJQb3N0cylcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIOODkeOCueOBruaKleeov0lE44GL44KJ5oqV56i/44OH44O844K/44KS5Y+W5b6X44GZ44KLXHJcbiAgICA7KGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHBvc3RJZCkge1xyXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKGdldE1lbWJlclBvc3QocG9zdElkKSlcclxuICAgICAgICBzZXROb3dMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldE5vd0xvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH0pKClcclxuICB9LCBbcG9zdElkXSlcclxuXHJcbiAgY29uc3QgW3Bvc3QsIHNldFBvc3RdOiBQb3N0RGlzcGxheSA9IHVzZVN0YXRlKHt9KVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gaXRlbXNbcG9zdElkXT8uZGF0YSB8fCB7XHJcbiAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICBwaG90bzogJycsXHJcbiAgICB9XHJcbiAgICBzZXRQb3N0KHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgcmVnaXN0X2RhdGFfeXl5eW1tZGQ6XHJcbiAgICAgICAgZGF0YS5yZWdpc3RfZGF0ZXRpbWUgJiZcclxuICAgICAgICBtb21lbnQoZGF0YS5yZWdpc3RfZGF0ZXRpbWUpLmZvcm1hdCgnWVlZWS9NTS9ERCBISDptbScpLFxyXG4gICAgfSlcclxuICB9LCBbaXRlbXNdKVxyXG5cclxuICBjb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcGFkZGluZzoge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG4gIH0pKVxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpXHJcblxyXG4gIGlmIChsb2FkaW5nIHx8IG5vd0xvYWRpbmcpIHJldHVybiA8cD4uLi5sb2FkaW5nPC9wPlxyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPntlcnJvcn08L3A+XHJcbiAgaWYgKHBvc3RJZCAmJiBwb3N0ICYmIHVzZXJJZCAhPT0gcG9zdC51c2VySWQpIHJldHVybiA8cD5Ob3QgRm91bmQ8L3A+XHJcblxyXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XHJcbiAgICAuLi5wb3N0LFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gKG1lc3NhZ2UpID0+IDxwIGNsYXNzTmFtZT1cImVycm9yXCI+e21lc3NhZ2V9PC9wPlxyXG4gIGNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgdGl0bGU6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChlcnJvck1lc3NhZ2UoJ+OCv+OCpOODiOODq+OCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAgicpKSxcclxuICAgIGRlc2NyaXB0aW9uOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXHJcbiAgICAgIGVycm9yTWVzc2FnZSgn5pys5paH44KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCJylcclxuICAgICksXHJcbiAgICBwaG90bzogWXVwLnN0cmluZygpLnJlcXVpcmVkKGVycm9yTWVzc2FnZSgn5YaZ55yf44KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCJykpLFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgLy8g44Ot44O844OH44Kj44Oz44Kw6KGo56S6XHJcbiAgICBkaXNwYXRjaChzaG93TG9hZGluZygpKVxyXG4gICAgY29uc3QgZGF0YSA9IHsgLi4udmFsdWVzLCB1c2VySWQ6IHVzZXJJZCB9XHJcbiAgICBpZiAoaXNFZGl0KSB7XHJcbiAgICAgIGF3YWl0IGRpc3BhdGNoKHB1dE1lbWJlclBvc3QocG9zdElkLCBkYXRhKSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF3YWl0IGRpc3BhdGNoKHBvc3RNZW1iZXJQb3N0KGRhdGEpKVxyXG4gICAgfVxyXG4gICAgLy8g44Oe44Kk44Oa44O844K4VE9Q44Gr55S76Z2i6YG356e744GZ44KLXHJcbiAgICByb3V0ZXIucHVzaChVUkwuTUVNQkVSKVxyXG4gICAgLy8g44Ot44O844OH44Kj44Oz44Kw6Z2e6KGo56S6XHJcbiAgICBkaXNwYXRjaChoaWRlTG9hZGluZygpKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25EZWxldGVDbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghd2luZG93LmNvbmZpcm0oJ+WJiumZpOOBl+OBvuOBmeOAguOCiOOCjeOBl+OBhOOBp+OBmeOBi++8nycpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgLy8g44Ot44O844OH44Kj44Oz44Kw6KGo56S6XHJcbiAgICBkaXNwYXRjaChzaG93TG9hZGluZygpKVxyXG4gICAgYXdhaXQgZGlzcGF0Y2goZGVsZXRlTWVtYmVyUG9zdChwb3N0SWQpKVxyXG4gICAgLy8g44Oe44Kk44Oa44O844K4VE9Q44Gr55S76Z2i6YG356e744GZ44KLXHJcbiAgICByb3V0ZXIucHVzaChVUkwuTUVNQkVSKVxyXG4gICAgLy8g44Ot44O844OH44Kj44Oz44Kw6Z2e6KGo56S6XHJcbiAgICBkaXNwYXRjaChoaWRlTG9hZGluZygpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIHNwYWNpbmc9ezF9PlxyXG4gICAgICA8R3JpZCBpdGVtIG1kPXsxMn0+XHJcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnBhZGRpbmd9PlxyXG4gICAgICAgICAgPENhcmRIZWFkZXIgdGl0bGU9XCLmipXnqL/jgZnjgovoqJjkuovlhoXlrrnjgpLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIJcIj48L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e3ZhbGlkYXRpb25TY2hlbWF9XHJcbiAgICAgICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZSxcclxuICAgICAgICAgICAgICBkaXJ0eSxcclxuICAgICAgICAgICAgICBpc1ZhbGlkLFxyXG4gICAgICAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgaGFuZGxlQmx1cixcclxuICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIHNwYWNpbmc9ezF9IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCLjgr/jgqTjg4jjg6tcIiBuYW1lPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWEgbGFiZWw9XCLmnKzmlodcIiBuYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlRmlsZSBsYWJlbD1cIuWGmeecn1wiIG5hbWU9XCJwaG90b1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXNFZGl0ICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uRGVsZXRlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICDliYrpmaTjgZnjgotcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWRpcnR5IHx8ICFpc1ZhbGlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIlN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOeZu+mMsuOBmeOCi1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVtYmVyUG9zdHNGb3JtXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=