webpackHotUpdate_N_E("pages/member/posts/[id]",{

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
  console.log(postId, user.id, post.authorId, post);
  if (postId && post && Number(user.id) !== Number(post.authorId)) return __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 75
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvTWVtYmVyL1Bvc3RzL01lbWJlclBvc3RzRm9ybS50c3giXSwibmFtZXMiOlsiTWVtYmVyUG9zdHNGb3JtIiwicHJvcHMiLCJwb3N0SWQiLCJ1c2VyIiwiaXNFZGl0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJub3dMb2FkaW5nIiwic2V0Tm93TG9hZGluZyIsInVzZVNlbGVjdG9yIiwic2VsZWN0TWVtYmVyUG9zdHMiLCJsb2FkaW5nIiwiZXJyb3IiLCJpdGVtcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJnZXRNZW1iZXJQb3N0IiwidG9rZW4iLCJOdW1iZXIiLCJwb3N0Iiwic2V0UG9zdCIsImRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGhvdG8iLCJyZWdpc3RfZGF0YV95eXl5bW1kZCIsInJlZ2lzdF9kYXRldGltZSIsIm1vbWVudCIsImZvcm1hdCIsInVzZVN0eWxlIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFkZGluZyIsInNwYWNpbmciLCJidXR0b24iLCJtYXJnaW4iLCJjbGFzc2VzIiwiY29uc29sZSIsImxvZyIsImlkIiwiYXV0aG9ySWQiLCJpbml0aWFsVmFsdWVzIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJzaGFwZSIsInJlcXVpcmVkIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJzaG93TG9hZGluZyIsInB1dE1lbWJlclBvc3QiLCJwb3N0TWVtYmVyUG9zdCIsInB1c2giLCJVUkwiLCJNRU1CRVIiLCJoaWRlTG9hZGluZyIsIm9uRGVsZXRlQ2xpY2siLCJ3aW5kb3ciLCJjb25maXJtIiwiZGVsZXRlTWVtYmVyUG9zdCIsInNldEZpZWxkVmFsdWUiLCJkaXJ0eSIsImlzVmFsaWQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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a0MsT0FBTyxDQUFDRixNQUpyQjtBQUtFLGFBQU8sRUFBRXVCLGFBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FGSixFQVlFLE1BQUMseURBQUQ7QUFDRSxjQUFRLEVBQUUsQ0FBQ0ssS0FBRCxJQUFVLENBQUNDLE9BRHZCO0FBRUUsYUFBTyxFQUFDLFdBRlY7QUFHRSxXQUFLLEVBQUMsU0FIUjtBQUlFLFVBQUksRUFBQyxRQUpQO0FBS0UsZUFBUyxFQUFFM0IsT0FBTyxDQUFDRixNQUxyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQVpGLENBREYsQ0FkRixDQURGO0FBeUNELEdBdERILENBRkYsQ0FERixDQURGLENBREY7QUFpRUQsQ0E1SkQ7O0dBQU1wQyxlO1VBR1dNLHFELEVBRW1CSSx1RCxFQUVqQk0sdUQ7OztLQVBiaEIsZTtBQThKU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWVtYmVyL3Bvc3RzL1tpZF0uOWEyOTY3ZmI4MmFkZTg4ZjRjNzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBGQyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IFVSTCB9IGZyb20gJ0AvY29tbW9uL2NvbnN0YW50cy91cmwnXHJcbmltcG9ydCB7IHNob3dMb2FkaW5nLCBoaWRlTG9hZGluZyB9IGZyb20gJ0Avc3RvcmUvc2xpY2UvcGFydHMnXHJcbmltcG9ydCB7XHJcbiAgZ2V0TWVtYmVyUG9zdCxcclxuICBwb3N0TWVtYmVyUG9zdCxcclxuICBwdXRNZW1iZXJQb3N0LFxyXG4gIGRlbGV0ZU1lbWJlclBvc3QsXHJcbiAgc2VsZWN0TWVtYmVyUG9zdHMsXHJcbn0gZnJvbSAnQC9zdG9yZS9zbGljZS9tZW1iZXJQb3N0cydcclxuaW1wb3J0IHsgSW5wdXQsIFRleHRhcmVhIH0gZnJvbSAnQC9jb21wb25lbnRzL2VsZW1lbnRzL0lucHV0J1xyXG5cclxuaW1wb3J0IHsgRGF0YSwgUG9zdCwgVXNlciB9IGZyb20gJ0Avc3RvcmUvU3RvcmVUeXBlcydcclxuaW1wb3J0IHtcclxuICBHcmlkLFxyXG4gIG1ha2VTdHlsZXMsXHJcbiAgQ2FyZCxcclxuICBDYXJkQ29udGVudCxcclxuICBDYXJkQWN0aW9ucyxcclxuICBCdXR0b24sXHJcbiAgQ2FyZEhlYWRlcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmltcG9ydCB7IEZvcm1paywgRm9ybSwgRmllbGQgfSBmcm9tICdmb3JtaWsnXHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnXHJcbmltcG9ydCBJbWFnZUZpbGUgZnJvbSAnQC9jb21wb25lbnRzL2VsZW1lbnRzL0lucHV0L0ltYWdlRmlsZSdcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbnR5cGUgUG9zdERpc3BsYXkgPSBQb3N0ICYge1xyXG4gIGlkOiBzdHJpbmdcclxuICByZWdpc3RfZGF0YV95eXl5bW1kZDogc3RyaW5nXHJcbn1cclxudHlwZSBQcm9wcyA9IHtcclxuICBwb3N0SWQ/OiBzdHJpbmdcclxuICB1c2VyOiBVc2VyXHJcbn1cclxudHlwZSBTdGF0ZSA9IHtcclxuICBtZW1iZXJQb3N0czogRGF0YTxQb3N0PltdXHJcbn1cclxuXHJcbmNvbnN0IE1lbWJlclBvc3RzRm9ybTogRkM8UHJvcHM+ID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcG9zdElkLCB1c2VyIH0gPSBwcm9wc1xyXG4gIGNvbnN0IGlzRWRpdCA9ICEhcG9zdElkXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbbm93TG9hZGluZywgc2V0Tm93TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKVxyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGl0ZW1zIH0gPSB1c2VTZWxlY3RvcihzZWxlY3RNZW1iZXJQb3N0cylcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIOODkeOCueOBruaKleeov0lE44GL44KJ5oqV56i/44OH44O844K/44KS5Y+W5b6X44GZ44KLXHJcbiAgICA7KGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHBvc3RJZCkge1xyXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKGdldE1lbWJlclBvc3QodXNlci50b2tlbiwgTnVtYmVyKHBvc3RJZCkpKVxyXG4gICAgICAgIHNldE5vd0xvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0Tm93TG9hZGluZyhmYWxzZSlcclxuICAgICAgfVxyXG4gICAgfSkoKVxyXG4gIH0sIFtwb3N0SWRdKVxyXG5cclxuICBjb25zdCBbcG9zdCwgc2V0UG9zdF06IFBvc3REaXNwbGF5ID0gdXNlU3RhdGUoe30pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBpdGVtc1twb3N0SWRdPy5kYXRhIHx8IHtcclxuICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgIHBob3RvOiAnJyxcclxuICAgIH1cclxuICAgIHNldFBvc3Qoe1xyXG4gICAgICAuLi5kYXRhLFxyXG4gICAgICByZWdpc3RfZGF0YV95eXl5bW1kZDpcclxuICAgICAgICBkYXRhLnJlZ2lzdF9kYXRldGltZSAmJlxyXG4gICAgICAgIG1vbWVudChkYXRhLnJlZ2lzdF9kYXRldGltZSkuZm9ybWF0KCdZWVlZL01NL0REIEhIOm1tJyksXHJcbiAgICB9KVxyXG4gIH0sIFtpdGVtc10pXHJcblxyXG4gIGNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICBwYWRkaW5nOiB7XHJcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sXHJcbiAgfSkpXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKClcclxuXHJcbiAgaWYgKGxvYWRpbmcgfHwgbm93TG9hZGluZykgcmV0dXJuIDxwPi4uLmxvYWRpbmc8L3A+XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+e2Vycm9yfTwvcD5cclxuICBjb25zb2xlLmxvZyhwb3N0SWQsIHVzZXIuaWQsIHBvc3QuYXV0aG9ySWQsIHBvc3QpXHJcbiAgaWYgKHBvc3RJZCAmJiBwb3N0ICYmIE51bWJlcih1c2VyLmlkKSAhPT0gTnVtYmVyKHBvc3QuYXV0aG9ySWQpKSByZXR1cm4gPHA+Tm90IEZvdW5kPC9wPlxyXG5cclxuICBjb25zdCBpbml0aWFsVmFsdWVzID0ge1xyXG4gICAgLi4ucG9zdCxcclxuICB9XHJcblxyXG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IChtZXNzYWdlKSA9PiA8cCBjbGFzc05hbWU9XCJlcnJvclwiPnttZXNzYWdlfTwvcD5cclxuICBjb25zdCB2YWxpZGF0aW9uU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgIHRpdGxlOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoZXJyb3JNZXNzYWdlKCfjgr/jgqTjg4jjg6vjgpLlhaXlipvjgZfjgabjgY/jgaDjgZXjgYTjgIInKSksXHJcbiAgICBkZXNjcmlwdGlvbjogWXVwLnN0cmluZygpLnJlcXVpcmVkKFxyXG4gICAgICBlcnJvck1lc3NhZ2UoJ+acrOaWh+OCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAgicpXHJcbiAgICApLFxyXG4gICAgcGhvdG86IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChlcnJvck1lc3NhZ2UoJ+WGmeecn+OCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAgicpKSxcclxuICB9KVxyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgIC8vIOODreODvOODh+OCo+ODs+OCsOihqOekulxyXG4gICAgZGlzcGF0Y2goc2hvd0xvYWRpbmcoKSlcclxuICAgIGNvbnN0IGRhdGEgPSB7IC4uLnZhbHVlcywgYXV0aG9ySWQ6IE51bWJlcih1c2VyLmlkKSB9XHJcbiAgICBpZiAoaXNFZGl0KSB7XHJcbiAgICAgIGF3YWl0IGRpc3BhdGNoKHB1dE1lbWJlclBvc3QodXNlci50b2tlbiwgTnVtYmVyKHBvc3RJZCksIGRhdGEpKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgZGlzcGF0Y2gocG9zdE1lbWJlclBvc3QodXNlci50b2tlbiwgZGF0YSkpXHJcbiAgICB9XHJcbiAgICAvLyDjg57jgqTjg5rjg7zjgrhUT1DjgavnlLvpnaLpgbfnp7vjgZnjgotcclxuICAgIHJvdXRlci5wdXNoKFVSTC5NRU1CRVIpXHJcbiAgICAvLyDjg63jg7zjg4fjgqPjg7PjgrDpnZ7ooajnpLpcclxuICAgIGRpc3BhdGNoKGhpZGVMb2FkaW5nKCkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkRlbGV0ZUNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCF3aW5kb3cuY29uZmlybSgn5YmK6Zmk44GX44G+44GZ44CC44KI44KN44GX44GE44Gn44GZ44GL77yfJykpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICAvLyDjg63jg7zjg4fjgqPjg7PjgrDooajnpLpcclxuICAgIGRpc3BhdGNoKHNob3dMb2FkaW5nKCkpXHJcbiAgICBhd2FpdCBkaXNwYXRjaChkZWxldGVNZW1iZXJQb3N0KHBvc3RJZCkpXHJcbiAgICAvLyDjg57jgqTjg5rjg7zjgrhUT1DjgavnlLvpnaLpgbfnp7vjgZnjgotcclxuICAgIHJvdXRlci5wdXNoKFVSTC5NRU1CRVIpXHJcbiAgICAvLyDjg63jg7zjg4fjgqPjg7PjgrDpnZ7ooajnpLpcclxuICAgIGRpc3BhdGNoKGhpZGVMb2FkaW5nKCkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgc3BhY2luZz17MX0+XHJcbiAgICAgIDxHcmlkIGl0ZW0gbWQ9ezEyfT5cclxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucGFkZGluZ30+XHJcbiAgICAgICAgICA8Q2FyZEhlYWRlciB0aXRsZT1cIuaKleeov+OBmeOCi+iomOS6i+WGheWuueOCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAglwiPjwvQ2FyZEhlYWRlcj5cclxuICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc31cclxuICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17dmFsaWRhdGlvblNjaGVtYX1cclxuICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlLFxyXG4gICAgICAgICAgICAgIGRpcnR5LFxyXG4gICAgICAgICAgICAgIGlzVmFsaWQsXHJcbiAgICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgICAgICAgICBoYW5kbGVCbHVyLFxyXG4gICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgc3BhY2luZz17MX0ganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIuOCv+OCpOODiOODq1wiIG5hbWU9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYSBsYWJlbD1cIuacrOaWh1wiIG5hbWU9XCJkZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VGaWxlIGxhYmVsPVwi5YaZ55yfXCIgbmFtZT1cInBob3RvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpc0VkaXQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25EZWxldGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIOWJiumZpOOBmeOCi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZGlydHkgfHwgIWlzVmFsaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiU3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg55m76Yyy44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW1iZXJQb3N0c0Zvcm1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==