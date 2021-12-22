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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvTWVtYmVyL1Bvc3RzL01lbWJlclBvc3RzRm9ybS50c3giXSwibmFtZXMiOlsiTWVtYmVyUG9zdHNGb3JtIiwicHJvcHMiLCJwb3N0SWQiLCJ1c2VyIiwiaXNFZGl0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJub3dMb2FkaW5nIiwic2V0Tm93TG9hZGluZyIsInVzZVNlbGVjdG9yIiwic2VsZWN0TWVtYmVyUG9zdHMiLCJsb2FkaW5nIiwiZXJyb3IiLCJpdGVtcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJnZXRNZW1iZXJQb3N0IiwidG9rZW4iLCJOdW1iZXIiLCJwb3N0Iiwic2V0UG9zdCIsImRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGhvdG8iLCJyZWdpc3RfZGF0YV95eXl5bW1kZCIsInJlZ2lzdF9kYXRldGltZSIsIm1vbWVudCIsImZvcm1hdCIsInVzZVN0eWxlIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFkZGluZyIsInNwYWNpbmciLCJidXR0b24iLCJtYXJnaW4iLCJjbGFzc2VzIiwidXNlcklkIiwiaW5pdGlhbFZhbHVlcyIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiWXVwIiwic2hhcGUiLCJyZXF1aXJlZCIsIm9uU3VibWl0IiwidmFsdWVzIiwic2hvd0xvYWRpbmciLCJhdXRob3JJZCIsImlkIiwicHV0TWVtYmVyUG9zdCIsInBvc3RNZW1iZXJQb3N0IiwicHVzaCIsIlVSTCIsIk1FTUJFUiIsImhpZGVMb2FkaW5nIiwib25EZWxldGVDbGljayIsIndpbmRvdyIsImNvbmZpcm0iLCJkZWxldGVNZW1iZXJQb3N0Iiwic2V0RmllbGRWYWx1ZSIsImRpcnR5IiwiaXNWYWxpZCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7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RUFBQyxXQUZWO0FBR0UsV0FBSyxFQUFDLFNBSFI7QUFJRSxVQUFJLEVBQUMsUUFKUDtBQUtFLGVBQVMsRUFBRTFCLE9BQU8sQ0FBQ0YsTUFMckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FaRixDQURGLENBZEYsQ0FERjtBQXlDRCxHQXRESCxDQUZGLENBREYsQ0FERixDQURGO0FBaUVELENBM0pEOztHQUFNcEMsZTtVQUdXTSxxRCxFQUVtQkksdUQsRUFFakJNLHVEOzs7S0FQYmhCLGU7QUE2SlNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21lbWJlci9wb3N0cy9baWRdLjI0M2JlMzQ5ZWU4NmRmMjEzYTUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgRkMgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBVUkwgfSBmcm9tICdAL2NvbW1vbi9jb25zdGFudHMvdXJsJ1xyXG5pbXBvcnQgeyBzaG93TG9hZGluZywgaGlkZUxvYWRpbmcgfSBmcm9tICdAL3N0b3JlL3NsaWNlL3BhcnRzJ1xyXG5pbXBvcnQge1xyXG4gIGdldE1lbWJlclBvc3QsXHJcbiAgcG9zdE1lbWJlclBvc3QsXHJcbiAgcHV0TWVtYmVyUG9zdCxcclxuICBkZWxldGVNZW1iZXJQb3N0LFxyXG4gIHNlbGVjdE1lbWJlclBvc3RzLFxyXG59IGZyb20gJ0Avc3RvcmUvc2xpY2UvbWVtYmVyUG9zdHMnXHJcbmltcG9ydCB7IElucHV0LCBUZXh0YXJlYSB9IGZyb20gJ0AvY29tcG9uZW50cy9lbGVtZW50cy9JbnB1dCdcclxuXHJcbmltcG9ydCB7IERhdGEsIFBvc3QsIFVzZXIgfSBmcm9tICdAL3N0b3JlL1N0b3JlVHlwZXMnXHJcbmltcG9ydCB7XHJcbiAgR3JpZCxcclxuICBtYWtlU3R5bGVzLFxyXG4gIENhcmQsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ2FyZEFjdGlvbnMsXHJcbiAgQnV0dG9uLFxyXG4gIENhcmRIZWFkZXIsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSAnZm9ybWlrJ1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJ1xyXG5pbXBvcnQgSW1hZ2VGaWxlIGZyb20gJ0AvY29tcG9uZW50cy9lbGVtZW50cy9JbnB1dC9JbWFnZUZpbGUnXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG50eXBlIFBvc3REaXNwbGF5ID0gUG9zdCAmIHtcclxuICBpZDogc3RyaW5nXHJcbiAgcmVnaXN0X2RhdGFfeXl5eW1tZGQ6IHN0cmluZ1xyXG59XHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgcG9zdElkPzogc3RyaW5nXHJcbiAgdXNlcjogVXNlclxyXG59XHJcbnR5cGUgU3RhdGUgPSB7XHJcbiAgbWVtYmVyUG9zdHM6IERhdGE8UG9zdD5bXVxyXG59XHJcblxyXG5jb25zdCBNZW1iZXJQb3N0c0Zvcm06IEZDPFByb3BzPiA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICBjb25zdCB7IHBvc3RJZCwgdXNlciB9ID0gcHJvcHNcclxuICBjb25zdCBpc0VkaXQgPSAhIXBvc3RJZFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgW25vd0xvYWRpbmcsIHNldE5vd0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSlcclxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBpdGVtcyB9ID0gdXNlU2VsZWN0b3Ioc2VsZWN0TWVtYmVyUG9zdHMpXHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyDjg5Hjgrnjga7mipXnqL9JROOBi+OCieaKleeov+ODh+ODvOOCv+OCkuWPluW+l+OBmeOCi1xyXG4gICAgOyhhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChwb3N0SWQpIHtcclxuICAgICAgICBhd2FpdCBkaXNwYXRjaChnZXRNZW1iZXJQb3N0KHVzZXIudG9rZW4sIE51bWJlcihwb3N0SWQpKSlcclxuICAgICAgICBzZXROb3dMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldE5vd0xvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH0pKClcclxuICB9LCBbcG9zdElkXSlcclxuXHJcbiAgY29uc3QgW3Bvc3QsIHNldFBvc3RdOiBQb3N0RGlzcGxheSA9IHVzZVN0YXRlKHt9KVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gaXRlbXNbcG9zdElkXT8uZGF0YSB8fCB7XHJcbiAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICBwaG90bzogJycsXHJcbiAgICB9XHJcbiAgICBzZXRQb3N0KHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgcmVnaXN0X2RhdGFfeXl5eW1tZGQ6XHJcbiAgICAgICAgZGF0YS5yZWdpc3RfZGF0ZXRpbWUgJiZcclxuICAgICAgICBtb21lbnQoZGF0YS5yZWdpc3RfZGF0ZXRpbWUpLmZvcm1hdCgnWVlZWS9NTS9ERCBISDptbScpLFxyXG4gICAgfSlcclxuICB9LCBbaXRlbXNdKVxyXG5cclxuICBjb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcGFkZGluZzoge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG4gIH0pKVxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpXHJcblxyXG4gIGlmIChsb2FkaW5nIHx8IG5vd0xvYWRpbmcpIHJldHVybiA8cD4uLi5sb2FkaW5nPC9wPlxyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPntlcnJvcn08L3A+XHJcbiAgaWYgKHBvc3RJZCAmJiBwb3N0ICYmIHVzZXJJZCAhPT0gcG9zdC51c2VySWQpIHJldHVybiA8cD5Ob3QgRm91bmQ8L3A+XHJcblxyXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XHJcbiAgICAuLi5wb3N0LFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gKG1lc3NhZ2UpID0+IDxwIGNsYXNzTmFtZT1cImVycm9yXCI+e21lc3NhZ2V9PC9wPlxyXG4gIGNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgdGl0bGU6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChlcnJvck1lc3NhZ2UoJ+OCv+OCpOODiOODq+OCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhOOAgicpKSxcclxuICAgIGRlc2NyaXB0aW9uOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXHJcbiAgICAgIGVycm9yTWVzc2FnZSgn5pys5paH44KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCJylcclxuICAgICksXHJcbiAgICBwaG90bzogWXVwLnN0cmluZygpLnJlcXVpcmVkKGVycm9yTWVzc2FnZSgn5YaZ55yf44KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCJykpLFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgLy8g44Ot44O844OH44Kj44Oz44Kw6KGo56S6XHJcbiAgICBkaXNwYXRjaChzaG93TG9hZGluZygpKVxyXG4gICAgY29uc3QgZGF0YSA9IHsgLi4udmFsdWVzLCBhdXRob3JJZDogTnVtYmVyKHVzZXIuaWQpIH1cclxuICAgIGlmIChpc0VkaXQpIHtcclxuICAgICAgYXdhaXQgZGlzcGF0Y2gocHV0TWVtYmVyUG9zdCh1c2VyLnRva2VuLCBOdW1iZXIocG9zdElkKSwgZGF0YSkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhd2FpdCBkaXNwYXRjaChwb3N0TWVtYmVyUG9zdCh1c2VyLnRva2VuLCBkYXRhKSlcclxuICAgIH1cclxuICAgIC8vIOODnuOCpOODmuODvOOCuFRPUOOBq+eUu+mdoumBt+enu+OBmeOCi1xyXG4gICAgcm91dGVyLnB1c2goVVJMLk1FTUJFUilcclxuICAgIC8vIOODreODvOODh+OCo+ODs+OCsOmdnuihqOekulxyXG4gICAgZGlzcGF0Y2goaGlkZUxvYWRpbmcoKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRGVsZXRlQ2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIXdpbmRvdy5jb25maXJtKCfliYrpmaTjgZfjgb7jgZnjgILjgojjgo3jgZfjgYTjgafjgZnjgYvvvJ8nKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIC8vIOODreODvOODh+OCo+ODs+OCsOihqOekulxyXG4gICAgZGlzcGF0Y2goc2hvd0xvYWRpbmcoKSlcclxuICAgIGF3YWl0IGRpc3BhdGNoKGRlbGV0ZU1lbWJlclBvc3QocG9zdElkKSlcclxuICAgIC8vIOODnuOCpOODmuODvOOCuFRPUOOBq+eUu+mdoumBt+enu+OBmeOCi1xyXG4gICAgcm91dGVyLnB1c2goVVJMLk1FTUJFUilcclxuICAgIC8vIOODreODvOODh+OCo+ODs+OCsOmdnuihqOekulxyXG4gICAgZGlzcGF0Y2goaGlkZUxvYWRpbmcoKSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBzcGFjaW5nPXsxfT5cclxuICAgICAgPEdyaWQgaXRlbSBtZD17MTJ9PlxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYWRkaW5nfT5cclxuICAgICAgICAgIDxDYXJkSGVhZGVyIHRpdGxlPVwi5oqV56i/44GZ44KL6KiY5LqL5YaF5a6544KS5YWl5Yqb44GX44Gm44GP44Gg44GV44GE44CCXCI+PC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfVxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXt2YWxpZGF0aW9uU2NoZW1hfVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgIHNldEZpZWxkVmFsdWUsXHJcbiAgICAgICAgICAgICAgZGlydHksXHJcbiAgICAgICAgICAgICAgaXNWYWxpZCxcclxuICAgICAgICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgICAgIGhhbmRsZUJsdXIsXHJcbiAgICAgICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lciBzcGFjaW5nPXsxfSBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGxhYmVsPVwi44K/44Kk44OI44OrXCIgbmFtZT1cInRpdGxlXCIgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhIGxhYmVsPVwi5pys5paHXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZUZpbGUgbGFiZWw9XCLlhpnnnJ9cIiBuYW1lPVwicGhvdG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2lzRWRpdCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIkJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkRlbGV0ZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg5YmK6Zmk44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFkaXJ0eSB8fCAhaXNWYWxpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDnmbvpjLLjgZnjgotcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbWJlclBvc3RzRm9ybVxyXG4iXSwic291cmNlUm9vdCI6IiJ9