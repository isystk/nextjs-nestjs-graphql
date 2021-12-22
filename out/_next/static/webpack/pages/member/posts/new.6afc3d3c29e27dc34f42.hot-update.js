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
      user = props.user;
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
              return dispatch(Object(_store_slice_memberPosts__WEBPACK_IMPORTED_MODULE_8__["getMemberPost"])(user.token, Number(postId)));

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
    var data = items[postId] || {
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
  console.log(postId, user.id, post.authorId, post);
  if (postId && post && user.id !== post.authorId) return __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 59
    }
  }, "Not Found");

  var initialValues = _objectSpread({}, post);

  var errorMessage = function errorMessage(message) {
    return __jsx("p", {
      className: "error",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
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
                authorId: Number(user.id)
              });

              if (!isEdit) {
                _context2.next = 7;
                break;
              }

              _context2.next = 5;
              return dispatch(Object(_store_slice_memberPosts__WEBPACK_IMPORTED_MODULE_8__["putMemberPost"])(user.token, Number(postId), data));

            case 5:
              _context2.next = 9;
              break;

            case 7:
              _context2.next = 9;
              return dispatch(Object(_store_slice_memberPosts__WEBPACK_IMPORTED_MODULE_8__["postMemberPost"])(user.token, data));

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
      lineNumber: 134,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
    item: true,
    md: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Card"], {
    className: classes.padding,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["CardHeader"], {
    title: "\u6295\u7A3F\u3059\u308B\u8A18\u4E8B\u5185\u5BB9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }), __jsx(formik__WEBPACK_IMPORTED_MODULE_11__["Formik"], {
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
        lineNumber: 152,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["CardContent"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
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
        lineNumber: 154,
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
        lineNumber: 155,
        columnNumber: 23
      }
    }, __jsx(_components_elements_Input__WEBPACK_IMPORTED_MODULE_9__["Input"], {
      label: "\u30BF\u30A4\u30C8\u30EB",
      name: "title",
      type: "text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
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
        lineNumber: 158,
        columnNumber: 23
      }
    }, __jsx(_components_elements_Input__WEBPACK_IMPORTED_MODULE_9__["Textarea"], {
      label: "\u672C\u6587",
      name: "description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
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
        lineNumber: 161,
        columnNumber: 23
      }
    }, __jsx(_components_elements_Input_ImageFile__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: "\u5199\u771F",
      name: "photo",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 25
      }
    })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["CardActions"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
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
        lineNumber: 167,
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
        lineNumber: 169,
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
        lineNumber: 179,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvTWVtYmVyL1Bvc3RzL01lbWJlclBvc3RzRm9ybS50c3giXSwibmFtZXMiOlsiTWVtYmVyUG9zdHNGb3JtIiwicHJvcHMiLCJwb3N0SWQiLCJ1c2VyIiwiaXNFZGl0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJub3dMb2FkaW5nIiwic2V0Tm93TG9hZGluZyIsInVzZVNlbGVjdG9yIiwic2VsZWN0TWVtYmVyUG9zdHMiLCJsb2FkaW5nIiwiZXJyb3IiLCJpdGVtcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJnZXRNZW1iZXJQb3N0IiwidG9rZW4iLCJOdW1iZXIiLCJwb3N0Iiwic2V0UG9zdCIsImRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGhvdG8iLCJyZWdpc3RfZGF0YV95eXl5bW1kZCIsInJlZ2lzdF9kYXRldGltZSIsIm1vbWVudCIsImZvcm1hdCIsInVzZVN0eWxlIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFkZGluZyIsInNwYWNpbmciLCJidXR0b24iLCJtYXJnaW4iLCJjbGFzc2VzIiwiY29uc29sZSIsImxvZyIsImlkIiwiYXV0aG9ySWQiLCJpbml0aWFsVmFsdWVzIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJzaGFwZSIsInJlcXVpcmVkIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJzaG93TG9hZGluZyIsInB1dE1lbWJlclBvc3QiLCJwb3N0TWVtYmVyUG9zdCIsInB1c2giLCJVUkwiLCJNRU1CRVIiLCJoaWRlTG9hZGluZyIsIm9uRGVsZXRlQ2xpY2siLCJ3aW5kb3ciLCJjb25maXJtIiwiZGVsZXRlTWVtYmVyUG9zdCIsInNldEZpZWxkVmFsdWUiLCJkaXJ0eSIsImlzVmFsaWQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBR0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTs7QUFhQSxJQUFNQSxlQUEwQixHQUFHLFNBQTdCQSxlQUE2QixDQUFDQyxLQUFELEVBQWtCO0FBQUE7O0FBQUEsTUFDM0NDLE1BRDJDLEdBQzFCRCxLQUQwQixDQUMzQ0MsTUFEMkM7QUFBQSxNQUNuQ0MsSUFEbUMsR0FDMUJGLEtBRDBCLENBQ25DRSxJQURtQztBQUVuRCxNQUFNQyxNQUFNLEdBQUcsQ0FBQyxDQUFDRixNQUFqQjtBQUNBLE1BQU1HLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBSG1ELGtCQUlmQyxzREFBUSxDQUFVLElBQVYsQ0FKTztBQUFBLE1BSTVDQyxVQUo0QztBQUFBLE1BSWhDQyxhQUpnQzs7QUFBQSxxQkFLakJDLCtEQUFXLENBQUNDLDBFQUFELENBTE07QUFBQSxNQUszQ0MsT0FMMkMsZ0JBSzNDQSxPQUwyQztBQUFBLE1BS2xDQyxLQUxrQyxnQkFLbENBLEtBTGtDO0FBQUEsTUFLM0JDLEtBTDJCLGdCQUszQkEsS0FMMkI7O0FBT25ELE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQTs7QUFBQyxxTEFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0lmLE1BREo7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFFUWEsUUFBUSxDQUFDRyw4RUFBYSxDQUFDZixJQUFJLENBQUNnQixLQUFOLEVBQWFDLE1BQU0sQ0FBQ2xCLE1BQUQsQ0FBbkIsQ0FBZCxDQUZoQjs7QUFBQTtBQUdFTywyQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUhGO0FBQUE7O0FBQUE7QUFLRUEsMkJBQWEsQ0FBQyxLQUFELENBQWI7O0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDtBQVFGLEdBVlEsRUFVTixDQUFDUCxNQUFELENBVk0sQ0FBVDs7QUFSbUQsbUJBb0JkSyxzREFBUSxDQUFDLEVBQUQsQ0FwQk07QUFBQSxNQW9CNUNjLElBcEI0QztBQUFBLE1Bb0J0Q0MsT0FwQnNDOztBQXFCbkRMLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1NLElBQUksR0FBR1QsS0FBSyxDQUFDWixNQUFELENBQUwsSUFBaUI7QUFDNUJzQixXQUFLLEVBQUUsRUFEcUI7QUFFNUJDLGlCQUFXLEVBQUUsRUFGZTtBQUc1QkMsV0FBSyxFQUFFO0FBSHFCLEtBQTlCO0FBS0FKLFdBQU8saUNBQ0ZDLElBREU7QUFFTEksMEJBQW9CLEVBQ2xCSixJQUFJLENBQUNLLGVBQUwsSUFDQUMsOENBQU0sQ0FBQ04sSUFBSSxDQUFDSyxlQUFOLENBQU4sQ0FBNkJFLE1BQTdCLENBQW9DLGtCQUFwQztBQUpHLE9BQVA7QUFNRCxHQVpRLEVBWU4sQ0FBQ2hCLEtBQUQsQ0FaTSxDQUFUO0FBY0EsTUFBTWlCLFFBQVEsR0FBR0MscUVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBWTtBQUN0Q0MsYUFBTyxFQUFFO0FBQ1BBLGVBQU8sRUFBRUQsS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZDtBQURGLE9BRDZCO0FBSXRDQyxZQUFNLEVBQUU7QUFDTkMsY0FBTSxFQUFFSixLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkO0FBREY7QUFKOEIsS0FBWjtBQUFBLEdBQUQsQ0FBM0I7QUFRQSxNQUFNRyxPQUFPLEdBQUdQLFFBQVEsRUFBeEI7QUFFQSxNQUFJbkIsT0FBTyxJQUFJSixVQUFmLEVBQTJCLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBUDtBQUMzQixNQUFJSyxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlBLEtBQUosQ0FBUDtBQUNYMEIsU0FBTyxDQUFDQyxHQUFSLENBQVl0QyxNQUFaLEVBQW9CQyxJQUFJLENBQUNzQyxFQUF6QixFQUE2QnBCLElBQUksQ0FBQ3FCLFFBQWxDLEVBQTRDckIsSUFBNUM7QUFDQSxNQUFJbkIsTUFBTSxJQUFJbUIsSUFBVixJQUFrQmxCLElBQUksQ0FBQ3NDLEVBQUwsS0FBWXBCLElBQUksQ0FBQ3FCLFFBQXZDLEVBQWlELE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDs7QUFFakQsTUFBTUMsYUFBYSxxQkFDZHRCLElBRGMsQ0FBbkI7O0FBSUEsTUFBTXVCLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE9BQUQ7QUFBQSxXQUFhO0FBQUcsZUFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFzQkEsT0FBdEIsQ0FBYjtBQUFBLEdBQXJCOztBQUNBLE1BQU1DLGdCQUFnQixHQUFHQywyQ0FBQSxHQUFhQyxLQUFiLENBQW1CO0FBQzFDeEIsU0FBSyxFQUFFdUIsMkNBQUEsR0FBYUUsUUFBYixDQUFzQkwsWUFBWSxDQUFDLGdCQUFELENBQWxDLENBRG1DO0FBRTFDbkIsZUFBVyxFQUFFc0IsMkNBQUEsR0FBYUUsUUFBYixDQUNYTCxZQUFZLENBQUMsY0FBRCxDQURELENBRjZCO0FBSzFDbEIsU0FBSyxFQUFFcUIsMkNBQUEsR0FBYUUsUUFBYixDQUFzQkwsWUFBWSxDQUFDLGNBQUQsQ0FBbEM7QUFMbUMsR0FBbkIsQ0FBekI7O0FBUUEsTUFBTU0sUUFBUTtBQUFBLGlNQUFHLGtCQUFPQyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNmO0FBQ0FwQyxzQkFBUSxDQUFDcUMsc0VBQVcsRUFBWixDQUFSO0FBQ003QixrQkFIUyxtQ0FHRzRCLE1BSEg7QUFHV1Qsd0JBQVEsRUFBRXRCLE1BQU0sQ0FBQ2pCLElBQUksQ0FBQ3NDLEVBQU47QUFIM0I7O0FBQUEsbUJBSVhyQyxNQUpXO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBS1BXLFFBQVEsQ0FBQ3NDLDhFQUFhLENBQUNsRCxJQUFJLENBQUNnQixLQUFOLEVBQWFDLE1BQU0sQ0FBQ2xCLE1BQUQsQ0FBbkIsRUFBNkJxQixJQUE3QixDQUFkLENBTEQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxxQkFPUFIsUUFBUSxDQUFDdUMsK0VBQWMsQ0FBQ25ELElBQUksQ0FBQ2dCLEtBQU4sRUFBYUksSUFBYixDQUFmLENBUEQ7O0FBQUE7QUFTZjtBQUNBbEIsb0JBQU0sQ0FBQ2tELElBQVAsQ0FBWUMseURBQUcsQ0FBQ0MsTUFBaEIsRUFWZSxDQVdmOztBQUNBMUMsc0JBQVEsQ0FBQzJDLHNFQUFXLEVBQVosQ0FBUjs7QUFaZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSUixRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBZUEsTUFBTVMsYUFBYTtBQUFBLGlNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDZkMsTUFBTSxDQUFDQyxPQUFQLENBQWUsZ0JBQWYsQ0FEZTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnREFFWCxLQUZXOztBQUFBO0FBSXBCO0FBQ0E5QyxzQkFBUSxDQUFDcUMsc0VBQVcsRUFBWixDQUFSO0FBTG9CO0FBQUEscUJBTWRyQyxRQUFRLENBQUMrQyxpRkFBZ0IsQ0FBQzVELE1BQUQsQ0FBakIsQ0FOTTs7QUFBQTtBQU9wQjtBQUNBRyxvQkFBTSxDQUFDa0QsSUFBUCxDQUFZQyx5REFBRyxDQUFDQyxNQUFoQixFQVJvQixDQVNwQjs7QUFDQTFDLHNCQUFRLENBQUMyQyxzRUFBVyxFQUFaLENBQVI7O0FBVm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWJDLGFBQWE7QUFBQTtBQUFBO0FBQUEsS0FBbkI7O0FBYUEsU0FDRSxNQUFDLHVEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGtCQUFjLEVBQUMsUUFBL0I7QUFBd0MsV0FBTyxFQUFFLENBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBTSxhQUFTLEVBQUVyQixPQUFPLENBQUNKLE9BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQVksU0FBSyxFQUFDLDhHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDhDQUFEO0FBQ0UsaUJBQWEsRUFBRVMsYUFEakI7QUFFRSxvQkFBZ0IsRUFBRUcsZ0JBRnBCO0FBR0UsWUFBUSxFQUFFSSxRQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRyxpQkFPSztBQUFBLFFBTkphLGFBTUksU0FOSkEsYUFNSTtBQUFBLFFBTEpDLEtBS0ksU0FMSkEsS0FLSTtBQUFBLFFBSkpDLE9BSUksU0FKSkEsT0FJSTtBQUFBLFFBSEpkLE1BR0ksU0FISkEsTUFHSTtBQUFBLFFBRkplLFlBRUksU0FGSkEsWUFFSTtBQUFBLFFBREpDLFVBQ0ksU0FESkEsVUFDSTtBQUNKLFdBQ0UsTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx1REFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLGVBQVMsTUFBcEI7QUFBcUIsYUFBTyxFQUFFLENBQTlCO0FBQWlDLG9CQUFjLEVBQUMsUUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsdURBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFtQixRQUFFLEVBQUUsRUFBdkI7QUFBMkIsUUFBRSxFQUFFLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdFQUFEO0FBQU8sV0FBSyxFQUFDLDBCQUFiO0FBQW9CLFVBQUksRUFBQyxPQUF6QjtBQUFpQyxVQUFJLEVBQUMsTUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsRUFJRSxNQUFDLHVEQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFLEVBQWY7QUFBbUIsUUFBRSxFQUFFLEVBQXZCO0FBQTJCLFFBQUUsRUFBRSxFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxtRUFBRDtBQUFVLFdBQUssRUFBQyxjQUFoQjtBQUFxQixVQUFJLEVBQUMsYUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBSkYsRUFPRSxNQUFDLHVEQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFLEVBQWY7QUFBbUIsUUFBRSxFQUFFLEVBQXZCO0FBQTJCLFFBQUUsRUFBRSxFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw2RUFBRDtBQUFXLFdBQUssRUFBQyxjQUFqQjtBQUFzQixVQUFJLEVBQUMsT0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBUEYsQ0FERixDQURGLEVBY0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx1REFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxFQUFmO0FBQW1CLFFBQUUsRUFBRSxDQUF2QjtBQUEwQixRQUFFLEVBQUUsQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHL0QsTUFBTSxJQUNMLE1BQUMseURBQUQ7QUFDRSxhQUFPLEVBQUMsV0FEVjtBQUVFLFdBQUssRUFBQyxXQUZSO0FBR0UsVUFBSSxFQUFDLFFBSFA7QUFJRSxlQUFTLEVBQUVrQyxPQUFPLENBQUNGLE1BSnJCO0FBS0UsYUFBTyxFQUFFdUIsYUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUZKLEVBWUUsTUFBQyx5REFBRDtBQUNFLGNBQVEsRUFBRSxDQUFDSyxLQUFELElBQVUsQ0FBQ0MsT0FEdkI7QUFFRSxhQUFPLEVBQUMsV0FGVjtBQUdFLFdBQUssRUFBQyxTQUhSO0FBSUUsVUFBSSxFQUFDLFFBSlA7QUFLRSxlQUFTLEVBQUUzQixPQUFPLENBQUNGLE1BTHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBWkYsQ0FERixDQWRGLENBREY7QUF5Q0QsR0F0REgsQ0FGRixDQURGLENBREYsQ0FERjtBQWlFRCxDQTVKRDs7R0FBTXBDLGU7VUFHV00scUQsRUFFbUJJLHVELEVBRWpCTSx1RDs7O0tBUGJoQixlO0FBOEpTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZW1iZXIvcG9zdHMvbmV3LjZhZmMzZDNjMjllMjdkYzM0ZjQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgRkMgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBVUkwgfSBmcm9tICdAL2NvbW1vbi9jb25zdGFudHMvdXJsJ1xyXG5pbXBvcnQgeyBzaG93TG9hZGluZywgaGlkZUxvYWRpbmcgfSBmcm9tICdAL3N0b3JlL3NsaWNlL3BhcnRzJ1xyXG5pbXBvcnQge1xyXG4gIGdldE1lbWJlclBvc3QsXHJcbiAgcG9zdE1lbWJlclBvc3QsXHJcbiAgcHV0TWVtYmVyUG9zdCxcclxuICBkZWxldGVNZW1iZXJQb3N0LFxyXG4gIHNlbGVjdE1lbWJlclBvc3RzLFxyXG59IGZyb20gJ0Avc3RvcmUvc2xpY2UvbWVtYmVyUG9zdHMnXHJcbmltcG9ydCB7IElucHV0LCBUZXh0YXJlYSB9IGZyb20gJ0AvY29tcG9uZW50cy9lbGVtZW50cy9JbnB1dCdcclxuXHJcbmltcG9ydCB7IERhdGEsIFBvc3QsIFVzZXIgfSBmcm9tICdAL3N0b3JlL1N0b3JlVHlwZXMnXHJcbmltcG9ydCB7XHJcbiAgR3JpZCxcclxuICBtYWtlU3R5bGVzLFxyXG4gIENhcmQsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ2FyZEFjdGlvbnMsXHJcbiAgQnV0dG9uLFxyXG4gIENhcmRIZWFkZXIsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSAnZm9ybWlrJ1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJ1xyXG5pbXBvcnQgSW1hZ2VGaWxlIGZyb20gJ0AvY29tcG9uZW50cy9lbGVtZW50cy9JbnB1dC9JbWFnZUZpbGUnXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG50eXBlIFBvc3REaXNwbGF5ID0gUG9zdCAmIHtcclxuICBpZDogc3RyaW5nXHJcbiAgcmVnaXN0X2RhdGFfeXl5eW1tZGQ6IHN0cmluZ1xyXG59XHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgcG9zdElkPzogc3RyaW5nXHJcbiAgdXNlcjogVXNlclxyXG59XHJcbnR5cGUgU3RhdGUgPSB7XHJcbiAgbWVtYmVyUG9zdHM6IERhdGE8UG9zdD5bXVxyXG59XHJcblxyXG5jb25zdCBNZW1iZXJQb3N0c0Zvcm06IEZDPFByb3BzPiA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICBjb25zdCB7IHBvc3RJZCwgdXNlciB9ID0gcHJvcHNcclxuICBjb25zdCBpc0VkaXQgPSAhIXBvc3RJZFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgW25vd0xvYWRpbmcsIHNldE5vd0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSlcclxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBpdGVtcyB9ID0gdXNlU2VsZWN0b3Ioc2VsZWN0TWVtYmVyUG9zdHMpXHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyDjg5Hjgrnjga7mipXnqL9JROOBi+OCieaKleeov+ODh+ODvOOCv+OCkuWPluW+l+OBmeOCi1xyXG4gICAgOyhhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChwb3N0SWQpIHtcclxuICAgICAgICBhd2FpdCBkaXNwYXRjaChnZXRNZW1iZXJQb3N0KHVzZXIudG9rZW4sIE51bWJlcihwb3N0SWQpKSlcclxuICAgICAgICBzZXROb3dMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldE5vd0xvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH0pKClcclxuICB9LCBbcG9zdElkXSlcclxuXHJcbiAgY29uc3QgW3Bvc3QsIHNldFBvc3RdOiBQb3N0RGlzcGxheSA9IHVzZVN0YXRlKHt9KVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gaXRlbXNbcG9zdElkXSB8fCB7XHJcbiAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICBwaG90bzogJycsXHJcbiAgICB9XHJcbiAgICBzZXRQb3N0KHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgcmVnaXN0X2RhdGFfeXl5eW1tZGQ6XHJcbiAgICAgICAgZGF0YS5yZWdpc3RfZGF0ZXRpbWUgJiZcclxuICAgICAgICBtb21lbnQoZGF0YS5yZWdpc3RfZGF0ZXRpbWUpLmZvcm1hdCgnWVlZWS9NTS9ERCBISDptbScpLFxyXG4gICAgfSlcclxuICB9LCBbaXRlbXNdKVxyXG5cclxuICBjb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcGFkZGluZzoge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG4gIH0pKVxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpXHJcblxyXG4gIGlmIChsb2FkaW5nIHx8IG5vd0xvYWRpbmcpIHJldHVybiA8cD4uLi5sb2FkaW5nPC9wPlxyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPntlcnJvcn08L3A+XHJcbiAgY29uc29sZS5sb2cocG9zdElkLCB1c2VyLmlkLCBwb3N0LmF1dGhvcklkLCBwb3N0KVxyXG4gIGlmIChwb3N0SWQgJiYgcG9zdCAmJiB1c2VyLmlkICE9PSBwb3N0LmF1dGhvcklkKSByZXR1cm4gPHA+Tm90IEZvdW5kPC9wPlxyXG5cclxuICBjb25zdCBpbml0aWFsVmFsdWVzID0ge1xyXG4gICAgLi4ucG9zdCxcclxuICB9XHJcblxyXG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IChtZXNzYWdlKSA9PiA8cCBjbGFzc05hbWU9XCJlcnJvclwiPnttZXNzYWdlfTwvcD5cclxuICBjb25zdCB2YWxpZGF0aW9uU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgIHRpdGxlOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoZXJyb3JNZXNzYWdlKCfjgr/jgqTjg4jjg6vjgpLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIInKSksXHJcbiAgICBkZXNjcmlwdGlvbjogWXVwLnN0cmluZygpLnJlcXVpcmVkKFxyXG4gICAgICBlcnJvck1lc3NhZ2UoJ+acrOaWh+OCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAgicpXHJcbiAgICApLFxyXG4gICAgcGhvdG86IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChlcnJvck1lc3NhZ2UoJ+WGmeecn+OCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAgicpKSxcclxuICB9KVxyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgIC8vIOODreODvOODh+OCo+ODs+OCsOihqOekulxyXG4gICAgZGlzcGF0Y2goc2hvd0xvYWRpbmcoKSlcclxuICAgIGNvbnN0IGRhdGEgPSB7IC4uLnZhbHVlcywgYXV0aG9ySWQ6IE51bWJlcih1c2VyLmlkKSB9XHJcbiAgICBpZiAoaXNFZGl0KSB7XHJcbiAgICAgIGF3YWl0IGRpc3BhdGNoKHB1dE1lbWJlclBvc3QodXNlci50b2tlbiwgTnVtYmVyKHBvc3RJZCksIGRhdGEpKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgZGlzcGF0Y2gocG9zdE1lbWJlclBvc3QodXNlci50b2tlbiwgZGF0YSkpXHJcbiAgICB9XHJcbiAgICAvLyDjg57jgqTjg5rjg7zjgrhUT1DjgavnlLvpnaLpgbfnp7vjgZnjgotcclxuICAgIHJvdXRlci5wdXNoKFVSTC5NRU1CRVIpXHJcbiAgICAvLyDjg63jg7zjg4fjgqPjg7PjgrDpnZ7ooajnpLpcclxuICAgIGRpc3BhdGNoKGhpZGVMb2FkaW5nKCkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkRlbGV0ZUNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCF3aW5kb3cuY29uZmlybSgn5YmK6Zmk44GX44G+44GZ44CC44KI44KN44GX44GE44Gn44GZ44GL77yfJykpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICAvLyDjg63jg7zjg4fjgqPjg7PjgrDooajnpLpcclxuICAgIGRpc3BhdGNoKHNob3dMb2FkaW5nKCkpXHJcbiAgICBhd2FpdCBkaXNwYXRjaChkZWxldGVNZW1iZXJQb3N0KHBvc3RJZCkpXHJcbiAgICAvLyDjg57jgqTjg5rjg7zjgrhUT1DjgavnlLvpnaLpgbfnp7vjgZnjgotcclxuICAgIHJvdXRlci5wdXNoKFVSTC5NRU1CRVIpXHJcbiAgICAvLyDjg63jg7zjg4fjgqPjg7PjgrDpnZ7ooajnpLpcclxuICAgIGRpc3BhdGNoKGhpZGVMb2FkaW5nKCkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgc3BhY2luZz17MX0+XHJcbiAgICAgIDxHcmlkIGl0ZW0gbWQ9ezEyfT5cclxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucGFkZGluZ30+XHJcbiAgICAgICAgICA8Q2FyZEhlYWRlciB0aXRsZT1cIuaKleeov+OBmeOCi+iomOS6i+WGheWuueOCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAglwiPjwvQ2FyZEhlYWRlcj5cclxuICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc31cclxuICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17dmFsaWRhdGlvblNjaGVtYX1cclxuICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlLFxyXG4gICAgICAgICAgICAgIGRpcnR5LFxyXG4gICAgICAgICAgICAgIGlzVmFsaWQsXHJcbiAgICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgICAgICAgICBoYW5kbGVCbHVyLFxyXG4gICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgc3BhY2luZz17MX0ganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIuOCv+OCpOODiOODq1wiIG5hbWU9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYSBsYWJlbD1cIuacrOaWh1wiIG5hbWU9XCJkZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VGaWxlIGxhYmVsPVwi5YaZ55yfXCIgbmFtZT1cInBob3RvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpc0VkaXQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25EZWxldGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIOWJiumZpOOBmeOCi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZGlydHkgfHwgIWlzVmFsaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiU3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg55m76Yyy44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW1iZXJQb3N0c0Zvcm1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==