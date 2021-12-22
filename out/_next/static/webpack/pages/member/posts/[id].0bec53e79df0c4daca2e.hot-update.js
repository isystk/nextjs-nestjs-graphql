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
              // // マイページTOPに画面遷移する
              // router.push(URL.MEMBER)
              // ローディング非表示
              dispatch(Object(_store_slice_parts__WEBPACK_IMPORTED_MODULE_7__["hideLoading"])());

            case 10:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvTWVtYmVyL1Bvc3RzL01lbWJlclBvc3RzRm9ybS50c3giXSwibmFtZXMiOlsiTWVtYmVyUG9zdHNGb3JtIiwicHJvcHMiLCJwb3N0SWQiLCJ1c2VyIiwiaXNFZGl0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJub3dMb2FkaW5nIiwic2V0Tm93TG9hZGluZyIsInVzZVNlbGVjdG9yIiwic2VsZWN0TWVtYmVyUG9zdHMiLCJsb2FkaW5nIiwiZXJyb3IiLCJpdGVtcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJnZXRNZW1iZXJQb3N0IiwidG9rZW4iLCJOdW1iZXIiLCJwb3N0Iiwic2V0UG9zdCIsImRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGhvdG8iLCJyZWdpc3RfZGF0YV95eXl5bW1kZCIsInJlZ2lzdF9kYXRldGltZSIsIm1vbWVudCIsImZvcm1hdCIsInVzZVN0eWxlIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFkZGluZyIsInNwYWNpbmciLCJidXR0b24iLCJtYXJnaW4iLCJjbGFzc2VzIiwiY29uc29sZSIsImxvZyIsImlkIiwiYXV0aG9ySWQiLCJpbml0aWFsVmFsdWVzIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsInZhbGlkYXRpb25TY2hlbWEiLCJZdXAiLCJzaGFwZSIsInJlcXVpcmVkIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJzaG93TG9hZGluZyIsInB1dE1lbWJlclBvc3QiLCJwb3N0TWVtYmVyUG9zdCIsImhpZGVMb2FkaW5nIiwib25EZWxldGVDbGljayIsIndpbmRvdyIsImNvbmZpcm0iLCJkZWxldGVNZW1iZXJQb3N0IiwicHVzaCIsIlVSTCIsIk1FTUJFUiIsInNldEZpZWxkVmFsdWUiLCJkaXJ0eSIsImlzVmFsaWQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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LGtDQUZKLEVBWUUsTUFBQyx5REFBRDtBQUNFLGNBQVEsRUFBRSxDQUFDUSxLQUFELElBQVUsQ0FBQ0MsT0FEdkI7QUFFRSxhQUFPLEVBQUMsV0FGVjtBQUdFLFdBQUssRUFBQyxTQUhSO0FBSUUsVUFBSSxFQUFDLFFBSlA7QUFLRSxlQUFTLEVBQUUzQixPQUFPLENBQUNGLE1BTHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBWkYsQ0FERixDQWRGLENBREY7QUF5Q0QsR0F0REgsQ0FGRixDQURGLENBREYsQ0FERjtBQWlFRCxDQTVKRDs7R0FBTXBDLGU7VUFHV00scUQsRUFFbUJJLHVELEVBRWpCTSx1RDs7O0tBUGJoQixlO0FBOEpTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tZW1iZXIvcG9zdHMvW2lkXS4wYmVjNTNlNzlkZjBjNGRhY2EyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIEZDIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgVVJMIH0gZnJvbSAnQC9jb21tb24vY29uc3RhbnRzL3VybCdcclxuaW1wb3J0IHsgc2hvd0xvYWRpbmcsIGhpZGVMb2FkaW5nIH0gZnJvbSAnQC9zdG9yZS9zbGljZS9wYXJ0cydcclxuaW1wb3J0IHtcclxuICBnZXRNZW1iZXJQb3N0LFxyXG4gIHBvc3RNZW1iZXJQb3N0LFxyXG4gIHB1dE1lbWJlclBvc3QsXHJcbiAgZGVsZXRlTWVtYmVyUG9zdCxcclxuICBzZWxlY3RNZW1iZXJQb3N0cyxcclxufSBmcm9tICdAL3N0b3JlL3NsaWNlL21lbWJlclBvc3RzJ1xyXG5pbXBvcnQgeyBJbnB1dCwgVGV4dGFyZWEgfSBmcm9tICdAL2NvbXBvbmVudHMvZWxlbWVudHMvSW5wdXQnXHJcblxyXG5pbXBvcnQgeyBEYXRhLCBQb3N0LCBVc2VyIH0gZnJvbSAnQC9zdG9yZS9TdG9yZVR5cGVzJ1xyXG5pbXBvcnQge1xyXG4gIEdyaWQsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmRBY3Rpb25zLFxyXG4gIEJ1dHRvbixcclxuICBDYXJkSGVhZGVyLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gJ2Zvcm1paydcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCdcclxuaW1wb3J0IEltYWdlRmlsZSBmcm9tICdAL2NvbXBvbmVudHMvZWxlbWVudHMvSW5wdXQvSW1hZ2VGaWxlJ1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxudHlwZSBQb3N0RGlzcGxheSA9IFBvc3QgJiB7XHJcbiAgaWQ6IHN0cmluZ1xyXG4gIHJlZ2lzdF9kYXRhX3l5eXltbWRkOiBzdHJpbmdcclxufVxyXG50eXBlIFByb3BzID0ge1xyXG4gIHBvc3RJZD86IHN0cmluZ1xyXG4gIHVzZXI6IFVzZXJcclxufVxyXG50eXBlIFN0YXRlID0ge1xyXG4gIG1lbWJlclBvc3RzOiBEYXRhPFBvc3Q+W11cclxufVxyXG5cclxuY29uc3QgTWVtYmVyUG9zdHNGb3JtOiBGQzxQcm9wcz4gPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwb3N0SWQsIHVzZXIgfSA9IHByb3BzXHJcbiAgY29uc3QgaXNFZGl0ID0gISFwb3N0SWRcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFtub3dMb2FkaW5nLCBzZXROb3dMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpXHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgaXRlbXMgfSA9IHVzZVNlbGVjdG9yKHNlbGVjdE1lbWJlclBvc3RzKVxyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8g44OR44K544Gu5oqV56i/SUTjgYvjgonmipXnqL/jg4fjg7zjgr/jgpLlj5blvpfjgZnjgotcclxuICAgIDsoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAocG9zdElkKSB7XHJcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goZ2V0TWVtYmVyUG9zdCh1c2VyLnRva2VuLCBOdW1iZXIocG9zdElkKSkpXHJcbiAgICAgICAgc2V0Tm93TG9hZGluZyhmYWxzZSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXROb3dMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9KSgpXHJcbiAgfSwgW3Bvc3RJZF0pXHJcblxyXG4gIGNvbnN0IFtwb3N0LCBzZXRQb3N0XTogUG9zdERpc3BsYXkgPSB1c2VTdGF0ZSh7fSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGl0ZW1zW3Bvc3RJZF0gfHwge1xyXG4gICAgICB0aXRsZTogJycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgcGhvdG86ICcnLFxyXG4gICAgfVxyXG4gICAgc2V0UG9zdCh7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIHJlZ2lzdF9kYXRhX3l5eXltbWRkOlxyXG4gICAgICAgIGRhdGEucmVnaXN0X2RhdGV0aW1lICYmXHJcbiAgICAgICAgbW9tZW50KGRhdGEucmVnaXN0X2RhdGV0aW1lKS5mb3JtYXQoJ1lZWVkvTU0vREQgSEg6bW0nKSxcclxuICAgIH0pXHJcbiAgfSwgW2l0ZW1zXSlcclxuXHJcbiAgY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHBhZGRpbmc6IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIH0sXHJcbiAgICBidXR0b246IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxuICB9KSlcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKVxyXG5cclxuICBpZiAobG9hZGluZyB8fCBub3dMb2FkaW5nKSByZXR1cm4gPHA+Li4ubG9hZGluZzwvcD5cclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD57ZXJyb3J9PC9wPlxyXG4gIGNvbnNvbGUubG9nKHBvc3RJZCwgdXNlci5pZCwgcG9zdC5hdXRob3JJZCwgcG9zdClcclxuICBpZiAocG9zdElkICYmIHBvc3QgJiYgTnVtYmVyKHVzZXIuaWQpICE9PSBOdW1iZXIocG9zdC5hdXRob3JJZCkpIHJldHVybiA8cD5Ob3QgRm91bmQ8L3A+XHJcblxyXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XHJcbiAgICAuLi5wb3N0LFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gKG1lc3NhZ2UpID0+IDxwIGNsYXNzTmFtZT1cImVycm9yXCI+e21lc3NhZ2V9PC9wPlxyXG4gIGNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgdGl0bGU6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChlcnJvck1lc3NhZ2UoJ+OCv+OCpOODiOODq+OCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAgicpKSxcclxuICAgIGRlc2NyaXB0aW9uOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXHJcbiAgICAgIGVycm9yTWVzc2FnZSgn5pys5paH44KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCJylcclxuICAgICksXHJcbiAgICBwaG90bzogWXVwLnN0cmluZygpLnJlcXVpcmVkKGVycm9yTWVzc2FnZSgn5YaZ55yf44KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCJykpLFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgLy8g44Ot44O844OH44Kj44Oz44Kw6KGo56S6XHJcbiAgICBkaXNwYXRjaChzaG93TG9hZGluZygpKVxyXG4gICAgY29uc3QgZGF0YSA9IHsgLi4udmFsdWVzLCBhdXRob3JJZDogTnVtYmVyKHVzZXIuaWQpIH1cclxuICAgIGlmIChpc0VkaXQpIHtcclxuICAgICAgYXdhaXQgZGlzcGF0Y2gocHV0TWVtYmVyUG9zdCh1c2VyLnRva2VuLCBOdW1iZXIocG9zdElkKSwgZGF0YSkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhd2FpdCBkaXNwYXRjaChwb3N0TWVtYmVyUG9zdCh1c2VyLnRva2VuLCBkYXRhKSlcclxuICAgIH1cclxuICAgIC8vIC8vIOODnuOCpOODmuODvOOCuFRPUOOBq+eUu+mdoumBt+enu+OBmeOCi1xyXG4gICAgLy8gcm91dGVyLnB1c2goVVJMLk1FTUJFUilcclxuICAgIC8vIOODreODvOODh+OCo+ODs+OCsOmdnuihqOekulxyXG4gICAgZGlzcGF0Y2goaGlkZUxvYWRpbmcoKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlQ2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIXdpbmRvdy5jb25maXJtKCfliYrpmaTjgZfjgb7jgZnjgILjgojjgo3jgZfjgYTjgafjgZnjgYvvvJ8nKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIC8vIOODreODvOODh+OCo+ODs+OCsOihqOekulxyXG4gICAgZGlzcGF0Y2goc2hvd0xvYWRpbmcoKSlcclxuICAgIGF3YWl0IGRpc3BhdGNoKGRlbGV0ZU1lbWJlclBvc3QocG9zdElkKSlcclxuICAgIC8vIOODnuOCpOODmuODvOOCuFRPUOOBq+eUu+mdoumBt+enu+OBmeOCi1xyXG4gICAgcm91dGVyLnB1c2goVVJMLk1FTUJFUilcclxuICAgIC8vIOODreODvOODh+OCo+ODs+OCsOmdnuihqOekulxyXG4gICAgZGlzcGF0Y2goaGlkZUxvYWRpbmcoKSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBzcGFjaW5nPXsxfT5cclxuICAgICAgPEdyaWQgaXRlbSBtZD17MTJ9PlxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYWRkaW5nfT5cclxuICAgICAgICAgIDxDYXJkSGVhZGVyIHRpdGxlPVwi5oqV56i/44GZ44KL6KiY5LqL5YaF5a6544KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCXCI+PC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfVxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXt2YWxpZGF0aW9uU2NoZW1hfVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgIHNldEZpZWxkVmFsdWUsXHJcbiAgICAgICAgICAgICAgZGlydHksXHJcbiAgICAgICAgICAgICAgaXNWYWxpZCxcclxuICAgICAgICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgICAgIGhhbmRsZUJsdXIsXHJcbiAgICAgICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGxhYmVsPVwi44K/44Kk44OI44OrXCIgbmFtZT1cInRpdGxlXCIgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhIGxhYmVsPVwi5pys5paHXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZUZpbGUgbGFiZWw9XCLlhpnnnJ9cIiBuYW1lPVwicGhvdG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2lzRWRpdCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIkJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkRlbGV0ZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg5YmK6Zmk44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFkaXJ0eSB8fCAhaXNWYWxpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDnmbvpjLLjgZnjgotcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbWJlclBvc3RzRm9ybVxyXG4iXSwic291cmNlUm9vdCI6IiJ9