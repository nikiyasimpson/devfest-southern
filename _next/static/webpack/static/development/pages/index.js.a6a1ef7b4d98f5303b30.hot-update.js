webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SocialLink.js":
/*!**********************************!*\
  !*** ./components/SocialLink.js ***!
  \**********************************/
/*! exports provided: GithubLink, TwitterLink, LinkedInLink, WebsiteLink, BlogLink, InstagramLink, FacebookLink, SlackLink, MeetupLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubLink", function() { return GithubLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterLink", function() { return TwitterLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedInLink", function() { return LinkedInLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteLink", function() { return WebsiteLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogLink", function() { return BlogLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramLink", function() { return InstagramLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookLink", function() { return FacebookLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlackLink", function() { return SlackLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetupLink", function() { return MeetupLink; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _icons_github_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/github.svg */ "./components/icons/github.svg");
/* harmony import */ var _icons_twitter_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/twitter.svg */ "./components/icons/twitter.svg");
/* harmony import */ var _icons_linkedin_in_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/linkedin-in.svg */ "./components/icons/linkedin-in.svg");
/* harmony import */ var _icons_globe_africa_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/globe-africa.svg */ "./components/icons/globe-africa.svg");
/* harmony import */ var _icons_pen_nib_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/pen-nib.svg */ "./components/icons/pen-nib.svg");
/* harmony import */ var _icons_instagram_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/instagram.svg */ "./components/icons/instagram.svg");
/* harmony import */ var _icons_facebook_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/facebook.svg */ "./components/icons/facebook.svg");
/* harmony import */ var _icons_slack_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons/slack.svg */ "./components/icons/slack.svg");
/* harmony import */ var _icons_meetup_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons/meetup.svg */ "./components/icons/meetup.svg");

var _jsxFileName = "/Users/kaushik/Extra-Curricular/GoogleDeveloperGroup/dev-fest-website/devfest-houston-2019.github.io/components/SocialLink.js";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-right: 12px;\n  svg {\n    width: 24px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject());

var SocialLink = function SocialLink(_ref) {
  var href = _ref.href,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLink, {
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, children);
};

var GithubLink = function GithubLink(_ref2) {
  var username = _ref2.username;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SocialLink, {
    href: "https://github.com/".concat(username),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_github_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }));
};
var TwitterLink = function TwitterLink(_ref3) {
  var username = _ref3.username;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SocialLink, {
    href: "https://twitter.com/".concat(username),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }));
};
var LinkedInLink = function LinkedInLink(_ref4) {
  var link = _ref4.link;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SocialLink, {
    href: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_linkedin_in_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }));
};
var WebsiteLink = function WebsiteLink(_ref5) {
  var link = _ref5.link;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SocialLink, {
    href: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_globe_africa_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }));
};
var BlogLink = function BlogLink(_ref6) {
  var link = _ref6.link;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SocialLink, {
    href: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_pen_nib_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }));
};
var InstagramLink = function InstagramLink(_ref7) {
  var link = _ref7.link;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SocialLink, {
    href: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_instagram_svg__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }));
};
var FacebookLink = function FacebookLink(_ref8) {
  var link = _ref8.link;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SocialLink, {
    href: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_facebook_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }));
};
var SlackLink = function SlackLink(_ref9) {
  var link = _ref9.link;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SocialLink, {
    href: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_slack_svg__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }));
};
var MeetupLink = function MeetupLink(_ref10) {
  var link = _ref10.link;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SocialLink, {
    href: link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons_meetup_svg__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.a6a1ef7b4d98f5303b30.hot-update.js.map