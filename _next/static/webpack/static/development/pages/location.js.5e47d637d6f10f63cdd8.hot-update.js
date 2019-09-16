webpackHotUpdate("static/development/pages/location.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: NAV_BREAKPOINT, Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_BREAKPOINT", function() { return NAV_BREAKPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme */ "./components/theme.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons_gdg_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/gdg_logo.svg */ "./components/icons/gdg_logo.svg");
/* harmony import */ var _elements_AnchorButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/AnchorButton */ "./components/elements/AnchorButton.js");
/* harmony import */ var _MobileNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MobileNav */ "./components/MobileNav.js");

var _jsxFileName = "/Users/kaushik/Extra-Curricular/GoogleDeveloperGroup/dev-fest-website/devfest-houston-2019.github.io/components/Navbar.js";


function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tmargin-top: 9px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tdisplay: none;\n\t@media (min-width: ", ") {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tmargin: 0 auto;\n\t\tmax-width: 980px;\n\t\tpadding: 15px;\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tbackground: rgba(255,255,255,0.97);\n\tposition: fixed;\n\ttop: 0;\n\twidth: 100%;\n\tz-index: 5;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tcolor: ", ";\n\tfont-weight: 700;\n\tpadding: 1em;\n\ttext-decoration: none;\n\t&:hover {\n\t\tcolor: ", ";\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var NAV_BREAKPOINT = '885px';
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject(), _theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.blue, _theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.blueLight);
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav(_templateObject2());
var NavDesktopContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3(), NAV_BREAKPOINT);
var NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4());

var StaticLogo = function StaticLogo() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_gdg_logo_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    alt: "GDG",
    width: "70px",
    height: "35px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })));
};

var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Nav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavDesktopContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StaticLogo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLinks, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    passHref: true,
    href: "https://www.papercall.io/devfest-houston",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Call For Papers")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    passHref: true,
    href: "/#speakers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Speakers")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    passHref: true,
    href: "/#schedule",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Talks")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    passHref: true,
    href: "/location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Location")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    passHref: true,
    href: "/conduct",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Code of Conduct")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    passHref: true,
    href: "https://forms.gle/VDqt8hHJJwQYA9Wt7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Volunteers")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elements_AnchorButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "https://ti.to/gdg-houston/gdg-devfest-houston-2019",
    medium: "true",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Register now"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MobileNav__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=location.js.5e47d637d6f10f63cdd8.hot-update.js.map