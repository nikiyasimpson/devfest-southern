webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MobileNav.js":
/*!*********************************!*\
  !*** ./components/MobileNav.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_onclickoutside__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-onclickoutside */ "./node_modules/react-onclickoutside/dist/react-onclickoutside.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./theme */ "./components/theme.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _elements_AnchorButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./elements/AnchorButton */ "./components/elements/AnchorButton.js");








var _jsxFileName = "/Users/kaushik/Extra-Curricular/GoogleDeveloperGroup/dev-fest-website/devfest-houston-2019.github.io/components/MobileNav.js";

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  &.is-visible {\n    display: flex;\n    flex-direction: column;\n    overflow: visible;\n    transition: transform .2s ease-in-out .1s, opacity .2s ease-in-out .2s;\n  }\n  &.is-hidden {\n    display: none;\n    overflow: hidden;\n    transform: translateY(-100%);\n    opacity: 0;\n    transition: transform .2s ease-in-out .1s, opacity .2s ease-in-out .2s;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  position: relative;\n  @media (min-width: 885px) {\n    display: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  color: ", ";\n  cursor: pointer;\n  font-size: 0.8em;\n  font-weight: 700;\n  padding: 1.5em 1.5em 1.5em 1em;\n  text-decoration: none;\n  text-transform: uppercase;\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  border-top: 1px solid ", ";\n  color: ", ";\n  font-size: 0.8em;\n  font-weight: 700;\n  padding: 1.5em 1.5em 1.5em 1em;\n  text-decoration: none;\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n  &:last-of-type {\n    border-bottom: 1px solid ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var MobileNavLink = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].a(_templateObject(), _theme__WEBPACK_IMPORTED_MODULE_11__["default"].colors.blueExtraLight, _theme__WEBPACK_IMPORTED_MODULE_11__["default"].colors.blue, _theme__WEBPACK_IMPORTED_MODULE_11__["default"].colors.blueExtraLight, _theme__WEBPACK_IMPORTED_MODULE_11__["default"].colors.blueLight, _theme__WEBPACK_IMPORTED_MODULE_11__["default"].colors.blueExtraLight);
var MenuLink = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject2(), _theme__WEBPACK_IMPORTED_MODULE_11__["default"].colors.blue, _theme__WEBPACK_IMPORTED_MODULE_11__["default"].colors.blueExtraLight, _theme__WEBPACK_IMPORTED_MODULE_11__["default"].colors.blueLight);
var NavMobileContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject3());
var MobileTopNav = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject4());
var MobileLinks = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div(_templateObject5());

var MobileMenu =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MobileMenu, _Component);

  function MobileMenu() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MobileMenu);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MobileMenu).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "openMenu", function () {
      _this.setState({
        isOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "closeMenu", function () {
      _this.setState({
        isOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClickOutside", function () {
      _this.closeMenu();
    });

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MobileMenu, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(NavMobileContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MobileTopNav, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MenuLink, {
        onClick: this.state.isOpen ? this.closeMenu : this.openMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Menu"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_elements_AnchorButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: {
          alignSelf: 'center',
          marginRight: '1em'
        },
        href: "https://ti.to/gdg-houston/gdg-devfest-houston-2019",
        small: "true",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Register now")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MobileLinks, {
        className: this.state.isOpen ? 'is-visible' : 'is-hidden',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
        passHref: true,
        href: "https://www.papercall.io/devfest-houston",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MobileNavLink, {
        onClick: this.closeMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Call For Papers")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
        passHref: true,
        href: "/location",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MobileNavLink, {
        onClick: this.closeMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Location")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
        passHref: true,
        href: "/conduct",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MobileNavLink, {
        onClick: this.closeMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Code of Conduct")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
        passHref: true,
        href: "https://forms.gle/pdJkmWLtVZc9qA889",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MobileNavLink, {
        onClick: this.closeMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Inclusivity")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
        passHref: true,
        href: "https://forms.gle/VDqt8hHJJwQYA9Wt7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MobileNavLink, {
        onClick: this.closeMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Volunteers"))));
    }
  }]);

  return MobileMenu;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_onclickoutside__WEBPACK_IMPORTED_MODULE_9__["default"])(MobileMenu));

/***/ })

})
//# sourceMappingURL=index.js.7f6cbdd22cc488208adc.hot-update.js.map