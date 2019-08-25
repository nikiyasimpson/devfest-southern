webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Person_PersonList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Person/PersonList */ "./components/Person/PersonList.js");
/* harmony import */ var _components_elements_AnchorButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/elements/AnchorButton */ "./components/elements/AnchorButton.js");
/* harmony import */ var _components_elements_OffsetHeading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/elements/OffsetHeading */ "./components/elements/OffsetHeading.js");
/* harmony import */ var _components_elements_Section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/elements/Section */ "./components/elements/Section.js");
/* harmony import */ var _components_SponsorList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SponsorList */ "./components/SponsorList.js");
/* harmony import */ var _components_icons_devfest_logo_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/icons/devfest_logo.svg */ "./components/icons/devfest_logo.svg");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_elements_Anchor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/elements/Anchor */ "./components/elements/Anchor.js");
/* harmony import */ var _components_Schedule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Schedule */ "./components/Schedule.js");
/* harmony import */ var _components_Emcee__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Emcee */ "./components/Emcee.js");
/* harmony import */ var _components_Tito__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Tito */ "./components/Tito.js");

var _jsxFileName = "/Users/aparnakn/Documents/GDG/devfest-houston-2019.github.io/pages/index.js";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: 'Product Sans', sans-serif;\n  margin-left: 20px;\n  text-align: center;\n  &#title {\n    width: 100%;\n    font-size: 3em;\n    display: block;\n    @media (min-width: 300px) {\n      display: none;\n      overflow: hidden;\n    }\n  }\n  &#mobiletitle {\n    @media (min-width: 700px) {\n      display: none;\n      overflow: hidden;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}















var speakers = __webpack_require__(/*! ../data/speakers.yml.json */ "./data/speakers.yml.json");

var emcee = __webpack_require__(/*! ../data/mc.yml.json */ "./data/mc.yml.json")[0];

var schedule = __webpack_require__(/*! ../data/schedule.yml.json */ "./data/schedule.yml.json");

var sponsors = __webpack_require__(/*! ../data/sponsors.yml.json */ "./data/sponsors.yml.json");

var partners = __webpack_require__(/*! ../data/partners.yml.json */ "./data/partners.yml.json");

var organizers = __webpack_require__(/*! ../data/organizers.yml.json */ "./data/organizers.yml.json");

var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    skyline: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    id: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_icons_devfest_logo_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
    alt: "DevFest 2019",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    id: "mobiletitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Mobile title here"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: {
      fontSize: '34px',
      marginTop: '25px',
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Houston, September 28, 2019")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "DevFest Houston is a single-day, single-track, inclusive conference for all developers. GDG Houston and Women Techmakers Houston invite you to join us on Saturday, September 28, 2019 at CUBIO Innovation Center in Houston for our first annual DevFest!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "We are pleased to offer a limited number of scholarships to potential attendees. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_Anchor__WEBPACK_IMPORTED_MODULE_11__["default"], {
    href: "#",
    target: "_blank",
    rel: "noopener noreferrer",
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Apply here"), ".")
  /*<Tito /> */
  , react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_AnchorButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "white/blue",
    href: "https://ti.to/gdg-houston/gdg-devfest-houston",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Register now"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_OffsetHeading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "sponsors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Sponsors"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SponsorList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sponsors: sponsors,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Sponsorship offers marketing exposure, hiring help, and adoration from our community, and can be in-kind (space, drinks, volunteers, swag, etc.) or monetary. Interested in becoming a sponsor? Contact us today:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_AnchorButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "https://docs.google.com/forms/d/1yCwRgOiRDn8jL2Tso7fNTtySUeP0rgpdlSnGBCG-eYc/",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Become a sponsor"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_OffsetHeading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "partner-organizations",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Partner Organizations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SponsorList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sponsors: partners,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_Section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_elements_OffsetHeading__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "organizers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Organizers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Person_PersonList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    people: organizers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.ae1a12d23adf9c039770.hot-update.js.map