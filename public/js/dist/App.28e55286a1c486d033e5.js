/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/GameArea/GameArea.js":
/*!*********************************************!*\
  !*** ./src/components/GameArea/GameArea.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameArea)
/* harmony export */ });
/* harmony import */ var _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameArea.module.scss */ "./src/components/GameArea/GameArea.module.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Map_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Map/Map */ "./src/components/Map/Map.js");
/* harmony import */ var _HoverDisplayArea_HoverDisplayArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HoverDisplayArea/HoverDisplayArea */ "./src/components/HoverDisplayArea/HoverDisplayArea.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




function GameArea() {
  const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const handleHover = e => {
    setHovered(e.target.src);
  };
  const handleUnhover = () => {
    setHovered(null);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].gameArea
  }, /*#__PURE__*/React.createElement(_HoverDisplayArea_HoverDisplayArea__WEBPACK_IMPORTED_MODULE_3__["default"], {
    hovered: hovered
  }), /*#__PURE__*/React.createElement("div", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].row1
  }, /*#__PURE__*/React.createElement("div", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].monsterDeck
  }, /*#__PURE__*/React.createElement("p", null, "MONSTER DECK"), /*#__PURE__*/React.createElement("img", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].monsterDeckHolder,
    src: "/img/monster-deck-holder.png",
    alt: "Monster Deck"
  })), /*#__PURE__*/React.createElement("div", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].assetsStore
  }, /*#__PURE__*/React.createElement("p", null, "ASSETS"), /*#__PURE__*/React.createElement("div", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].assets
  }, /*#__PURE__*/React.createElement("img", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].smallCard,
    src: "/img/ally-back.png",
    alt: "Ally Deck",
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  }), /*#__PURE__*/React.createElement("img", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].smallCard,
    src: "/img/spell-back.png",
    alt: "Spell Deck",
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  }), /*#__PURE__*/React.createElement("img", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].smallCard,
    src: "/img/item-back.png",
    alt: "Item Deck",
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  }), /*#__PURE__*/React.createElement("img", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].smallCard,
    src: "/img/special-back.png",
    alt: "Special Items",
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  }), /*#__PURE__*/React.createElement("img", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].smallCard,
    src: "/img/conditions-deck.png",
    alt: "Conditions Deck",
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  })), /*#__PURE__*/React.createElement("div", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].store
  }, /*#__PURE__*/React.createElement("img", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].smallCard,
    src: "/img/45-thompson.png",
    alt: ".45 Thompson",
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  }), /*#__PURE__*/React.createElement("img", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].smallCard,
    src: "/img/liquid-courage.png",
    alt: "Liquid Courage",
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  }), /*#__PURE__*/React.createElement("img", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].smallCard,
    src: "/img/38-revolver.png",
    alt: ".38 Revolver",
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  }), /*#__PURE__*/React.createElement("img", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].smallCard,
    src: "/img/shotgun.png",
    alt: "Shotgun",
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  }), /*#__PURE__*/React.createElement("img", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].smallCard,
    src: "/img/first-aid-kit.png",
    alt: "First Aid Kit",
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  })), /*#__PURE__*/React.createElement("p", null, "STORE")), /*#__PURE__*/React.createElement("div", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].player1Area
  }, /*#__PURE__*/React.createElement("p", null, "PLAYER AREA")), /*#__PURE__*/React.createElement("div", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].archiveArea
  }, /*#__PURE__*/React.createElement("p", null, "ARCHIVE AREA")), /*#__PURE__*/React.createElement("div", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].eventArea
  }, /*#__PURE__*/React.createElement("div", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mediumCard
  }, /*#__PURE__*/React.createElement("p", null, "EVENT DISCARD")), /*#__PURE__*/React.createElement("img", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].eventDeck,
    src: "/img/event-deck.png",
    alt: "Event Deck"
  }))), /*#__PURE__*/React.createElement("div", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].row2
  }, /*#__PURE__*/React.createElement("div", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].player2Area
  }, /*#__PURE__*/React.createElement("p", null, "PLAYER AREA")), /*#__PURE__*/React.createElement("div", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].center
  }, /*#__PURE__*/React.createElement("p", null, "BOARD"), /*#__PURE__*/React.createElement(_Map_Map__WEBPACK_IMPORTED_MODULE_2__["default"], {
    hovered: hovered,
    setHovered: setHovered,
    handleUnhover: handleUnhover
  }), /*#__PURE__*/React.createElement("div", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].encounterDecks
  }, /*#__PURE__*/React.createElement("img", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mediumCard,
    src: "/img/northside-deck.png",
    alt: "Northside Deck",
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  }), /*#__PURE__*/React.createElement("img", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mediumCard,
    src: "/img/downtown-deck.png",
    alt: "Downtown Deck",
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  }), /*#__PURE__*/React.createElement("img", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mediumCard,
    src: "/img/easttown-deck.png",
    alt: "Easttown Deck",
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  }), /*#__PURE__*/React.createElement("img", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mediumCard,
    src: "/img/merchant-district-deck.png",
    alt: "Merchant District Deck"
  }), /*#__PURE__*/React.createElement("img", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mediumCard,
    src: "/img/rivertown-deck.png",
    alt: "Rivertown Deck",
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  }), /*#__PURE__*/React.createElement("img", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mediumCard,
    src: "/img/streets-deck.png",
    alt: "The Streets Deck",
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  })), /*#__PURE__*/React.createElement("p", null, "ENCOUNTER DECKS")), /*#__PURE__*/React.createElement("div", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].player3Area
  }, /*#__PURE__*/React.createElement("p", null, "PLAYER AREA"))), /*#__PURE__*/React.createElement("div", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].row3
  }, /*#__PURE__*/React.createElement("div", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].headlineArea
  }, /*#__PURE__*/React.createElement("img", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mediumCard,
    src: "/img/headline-deck.png",
    alt: "Headline Deck",
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mediumCard
  }, "HEADLINE DISCARD"))), /*#__PURE__*/React.createElement("div", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].anomalyDeckArea
  }, /*#__PURE__*/React.createElement("img", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mediumCard,
    src: "/img/altered-reality-anomaly-deck.png",
    alt: "Altered Reality Anomaly Deck",
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mediumCard
  }, "ANOMALY DISCARD"))), /*#__PURE__*/React.createElement("div", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].player4Area
  }, /*#__PURE__*/React.createElement("p", null, "PLAYER AREA")), /*#__PURE__*/React.createElement("div", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].diceArea
  }, /*#__PURE__*/React.createElement("p", null, "DICE AREA")), /*#__PURE__*/React.createElement("div", {
    className: _GameArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].mythosCup
  }, /*#__PURE__*/React.createElement("p", null, "MYTHOS CUP"))));
}

/***/ }),

/***/ "./src/components/HoverDisplayArea/HoverDisplayArea.js":
/*!*************************************************************!*\
  !*** ./src/components/HoverDisplayArea/HoverDisplayArea.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HoverDisplayArea)
/* harmony export */ });
/* harmony import */ var _HoverDisplayArea_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HoverDisplayArea.module.scss */ "./src/components/HoverDisplayArea/HoverDisplayArea.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function HoverDisplayArea(_ref) {
  let {
    hovered
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: _HoverDisplayArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].hoverDisplayArea
  }, hovered && /*#__PURE__*/React.createElement("img", {
    className: _HoverDisplayArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].hoveredImage,
    src: hovered,
    alt: "Hovered Image"
  }));
}

/***/ }),

/***/ "./src/components/InvestigatorMenuInvestigator/InvestigatorMenuInvestigator.js":
/*!*************************************************************************************!*\
  !*** ./src/components/InvestigatorMenuInvestigator/InvestigatorMenuInvestigator.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvestigatorMenuInvestigator)
/* harmony export */ });
/* harmony import */ var _InvestigatorMenuInvestigator_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvestigatorMenuInvestigator.module.scss */ "./src/components/InvestigatorMenuInvestigator/InvestigatorMenuInvestigator.module.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function InvestigatorMenuInvestigator(_ref) {
  let {
    investigatorMenuInvestigator,
    selection,
    setSelection,
    activeInvestigators,
    setActiveInvestigators
  } = _ref;
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  const handleInvestigatorClick = () => {
    setSelection('starting card selection');
    setActiveInvestigators([...activeInvestigators, investigatorMenuInvestigator]);
    navigate('/startingcards');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _InvestigatorMenuInvestigator_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].investigator,
    onClick: handleInvestigatorClick
  }, /*#__PURE__*/React.createElement("h1", null, investigatorMenuInvestigator.name));
}

/***/ }),

/***/ "./src/components/InvestigatorSelectionMenu/InvestigatorSelectionMenu.js":
/*!*******************************************************************************!*\
  !*** ./src/components/InvestigatorSelectionMenu/InvestigatorSelectionMenu.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvestigatorSelectionMenu)
/* harmony export */ });
/* harmony import */ var _InvestigatorMenuInvestigator_InvestigatorMenuInvestigator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../InvestigatorMenuInvestigator/InvestigatorMenuInvestigator */ "./src/components/InvestigatorMenuInvestigator/InvestigatorMenuInvestigator.js");
/* harmony import */ var _InvestigatorSelectionMenu_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvestigatorSelectionMenu.module.scss */ "./src/components/InvestigatorSelectionMenu/InvestigatorSelectionMenu.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function InvestigatorSelectionMenu(_ref) {
  let {
    selection,
    setSelection,
    investigatorMenuInvestigators,
    activeScenario,
    activeInvestigators,
    setActiveInvestigators
  } = _ref;
  const investigators = investigatorMenuInvestigators.map(investigator => /*#__PURE__*/React.createElement(_InvestigatorMenuInvestigator_InvestigatorMenuInvestigator__WEBPACK_IMPORTED_MODULE_0__["default"], {
    key: investigator._id,
    investigatorMenuInvestigator: investigator,
    selection: selection,
    setSelection: setSelection,
    activeInvestigators: activeInvestigators,
    setActiveInvestigators: setActiveInvestigators
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: _InvestigatorSelectionMenu_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].investigatorMenu
  }, /*#__PURE__*/React.createElement("h2", null, "Scenario: ".concat(activeScenario.name)), /*#__PURE__*/React.createElement("div", null, investigators));
}

/***/ }),

/***/ "./src/components/Logo/Logo.js":
/*!*************************************!*\
  !*** ./src/components/Logo/Logo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Logo)
/* harmony export */ });
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function Logo(_ref) {
  let {
    width
  } = _ref;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "/img/arkham-horror-3e-logo.png",
    alt: "Arkham Horror 3rd Edition Logo",
    style: {
      width
    }
  }));
}

/***/ }),

/***/ "./src/components/Map/Map.js":
/*!***********************************!*\
  !*** ./src/components/Map/Map.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Map)
/* harmony export */ });
/* harmony import */ var _Map_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Map.module.scss */ "./src/components/Map/Map.module.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HoverDisplayArea_HoverDisplayArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HoverDisplayArea/HoverDisplayArea */ "./src/components/HoverDisplayArea/HoverDisplayArea.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }



function Map(_ref) {
  let {
    hovered,
    setHovered,
    handleUnhover
  } = _ref;
  const [currentLocation, setCurrentLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('trainStation');
  const handleLocationChange = location => {
    setCurrentLocation(location);
  };
  const handleHover = e => {
    setHovered(e.target.getAttribute('data-locationimg'));
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_HoverDisplayArea_HoverDisplayArea__WEBPACK_IMPORTED_MODULE_2__["default"], {
    hovered: hovered
  }), /*#__PURE__*/React.createElement("img", {
    src: "/img/sample-map.png",
    alt: "Map"
  }), /*#__PURE__*/React.createElement("div", _extends({
    "data-locationimg": "/img/locations/arkham-advertiser.png",
    className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].arkhamAdvertiser,
    onClick: () => handleLocationChange('arkhamAdvertiser')
  }, currentLocation === 'arkhamAdvertiser' ? {
    style: {
      backgroundColor: 'red'
    }
  } : {}, {
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  })), /*#__PURE__*/React.createElement("div", _extends({
    "data-locationimg": "/img/locations/train-station.png",
    className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].trainStation,
    onClick: () => handleLocationChange('trainStation')
  }, currentLocation === 'trainStation' ? {
    style: {
      backgroundColor: 'red'
    }
  } : {}, {
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  })), /*#__PURE__*/React.createElement("div", _extends({
    "data-locationimg": "/img/locations/curiositie-shoppe.png",
    className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].curiositieShoppe,
    onClick: () => handleLocationChange('curiositieShoppe')
  }, currentLocation === 'curiositieShoppe' ? {
    style: {
      backgroundColor: 'red'
    }
  } : {}, {
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  })), /*#__PURE__*/React.createElement("div", _extends({
    "data-locationimg": "",
    className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scenicStreet1,
    onClick: () => handleLocationChange('scenicStreet1')
  }, currentLocation === 'scenicStreet1' ? {
    style: {
      backgroundColor: 'red'
    }
  } : {})), /*#__PURE__*/React.createElement("div", _extends({
    "data-locationimg": "/img/locations/independence-square.png",
    className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].independenceSquare,
    onClick: () => handleLocationChange('independenceSquare')
  }, currentLocation === 'independenceSquare' ? {
    style: {
      backgroundColor: 'red'
    }
  } : {}, {
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  })), /*#__PURE__*/React.createElement("div", _extends({
    "data-locationimg": "/img/locations/la-bella-luna.png",
    className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].laBellaLuna,
    onClick: () => handleLocationChange('laBellaLuna')
  }, currentLocation === 'laBellaLuna' ? {
    style: {
      backgroundColor: 'red'
    }
  } : {}, {
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  })), /*#__PURE__*/React.createElement("div", _extends({
    "data-locationimg": "/img/locations/arkham-asylum.png",
    className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].arkhamAsylum,
    onClick: () => handleLocationChange('arkhamAsylum')
  }, currentLocation === 'arkhamAsylum' ? {
    style: {
      backgroundColor: 'red'
    }
  } : {}, {
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  })), /*#__PURE__*/React.createElement("div", _extends({
    "data-locationimg": "",
    className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].residentialStreet1,
    onClick: () => handleLocationChange('residentialStreet1')
  }, currentLocation === 'residentialStreet1' ? {
    style: {
      backgroundColor: 'red'
    }
  } : {})), /*#__PURE__*/React.createElement("div", _extends({
    "data-locationimg": "/img/locations/hibbs-roadhouse.png",
    className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].masRoadhouse,
    onClick: () => handleLocationChange('masRoadhouse')
  }, currentLocation === 'masRoadhouse' ? {
    style: {
      backgroundColor: 'red'
    }
  } : {}, {
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  })), /*#__PURE__*/React.createElement("div", _extends({
    "data-locationimg": "/img/locations/police-station.png",
    className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].policeStation,
    onClick: () => handleLocationChange('policeStation')
  }, currentLocation === 'policeStation' ? {
    style: {
      backgroundColor: 'red'
    }
  } : {}, {
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  })), /*#__PURE__*/React.createElement("div", _extends({
    "data-locationimg": "/img/locations/velmas-diner.png",
    className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].velmasDiner,
    onClick: () => handleLocationChange('velmasDiner')
  }, currentLocation === 'velmasDiner' ? {
    style: {
      backgroundColor: 'red'
    }
  } : {}, {
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  })), /*#__PURE__*/React.createElement("div", _extends({
    "data-locationimg": "",
    className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scenicStreet2,
    onClick: () => handleLocationChange('scenicStreet2')
  }, currentLocation === 'scenicStreet2' ? {
    style: {
      backgroundColor: 'red'
    }
  } : {})), /*#__PURE__*/React.createElement("div", _extends({
    "data-locationimg": "",
    className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].residentialStreet2,
    onClick: () => handleLocationChange('residentialStreet2')
  }, currentLocation === 'residentialStreet2' ? {
    style: {
      backgroundColor: 'red'
    }
  } : {})), /*#__PURE__*/React.createElement("div", _extends({
    "data-locationimg": "",
    className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].bridge1,
    onClick: () => handleLocationChange('bridge1')
  }, currentLocation === 'bridge1' ? {
    style: {
      backgroundColor: 'red'
    }
  } : {})), /*#__PURE__*/React.createElement("div", _extends({
    "data-locationimg": "",
    className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].bridge2,
    onClick: () => handleLocationChange('bridge2')
  }, currentLocation === 'bridge2' ? {
    style: {
      backgroundColor: 'red'
    }
  } : {})), /*#__PURE__*/React.createElement("div", _extends({
    "data-locationimg": "/img/locations/unvisited-isle.png",
    className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].unvisitedIsle,
    onClick: () => handleLocationChange('unvisitedIsle')
  }, currentLocation === 'unvisitedIsle' ? {
    style: {
      backgroundColor: 'red'
    }
  } : {}, {
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  })), /*#__PURE__*/React.createElement("div", _extends({
    "data-locationimg": "/img/locations/tick-tock-club.png",
    className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].tickTockClub,
    onClick: () => handleLocationChange('tickTockClub')
  }, currentLocation === 'tickTockClub' ? {
    style: {
      backgroundColor: 'red'
    }
  } : {}, {
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  })), /*#__PURE__*/React.createElement("div", _extends({
    "data-locationimg": "/img/locations/river-docks.png",
    className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].riverDocks,
    onClick: () => handleLocationChange('riverDocks')
  }, currentLocation === 'riverDocks' ? {
    style: {
      backgroundColor: 'red'
    }
  } : {}, {
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  })), /*#__PURE__*/React.createElement("div", _extends({
    "data-locationimg": "",
    className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].residentialStreet3,
    onClick: () => handleLocationChange('residentialStreet3')
  }, currentLocation === 'residentialStreet3' ? {
    style: {
      backgroundColor: 'red'
    }
  } : {})), /*#__PURE__*/React.createElement("div", _extends({
    "data-locationimg": "/img/locations/graveyard.png",
    className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].graveyard,
    onClick: () => handleLocationChange('graveyard')
  }, currentLocation === 'graveyard' ? {
    style: {
      backgroundColor: 'red'
    }
  } : {}, {
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  })), /*#__PURE__*/React.createElement("div", _extends({
    "data-locationimg": "/img/locations/general-store.png",
    className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].generalStore,
    onClick: () => handleLocationChange('generalStore')
  }, currentLocation === 'generalStore' ? {
    style: {
      backgroundColor: 'red'
    }
  } : {}, {
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  })), /*#__PURE__*/React.createElement("div", _extends({
    "data-locationimg": "/img/locations/black-cave.png",
    className: _Map_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].blackCave,
    onClick: () => handleLocationChange('blackCave')
  }, currentLocation === 'blackCave' ? {
    style: {
      backgroundColor: 'red'
    }
  } : {}, {
    onMouseEnter: handleHover,
    onMouseLeave: handleUnhover
  })));
}

/***/ }),

/***/ "./src/components/NavBar/NavBar.js":
/*!*****************************************!*\
  !*** ./src/components/NavBar/NavBar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.module.scss */ "./src/components/NavBar/NavBar.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function NavBar() {
  return /*#__PURE__*/React.createElement("div", {
    className: _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].navBar
  }, /*#__PURE__*/React.createElement("h1", null, "ARKHAM HORROR (THIRD EDITION)"));
}

/***/ }),

/***/ "./src/components/PlayButton/PlayButton.js":
/*!*************************************************!*\
  !*** ./src/components/PlayButton/PlayButton.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayButton)
/* harmony export */ });
/* harmony import */ var _PlayButton_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayButton.module.scss */ "./src/components/PlayButton/PlayButton.module.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PlayButton(_ref) {
  let {
    setSelection
  } = _ref;
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  const handleClick = () => {
    navigate('/selection');
    setSelection('select scenario button');
  };
  return /*#__PURE__*/React.createElement("h1", {
    className: _PlayButton_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].playButton,
    onClick: handleClick
  }, "PLAY NOW");
}

/***/ }),

/***/ "./src/components/ScenarioMenuScenario/ScenarioMenuScenario.js":
/*!*********************************************************************!*\
  !*** ./src/components/ScenarioMenuScenario/ScenarioMenuScenario.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScenarioMenuScenario)
/* harmony export */ });
/* harmony import */ var _ScenarioMenuScenario_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScenarioMenuScenario.module.scss */ "./src/components/ScenarioMenuScenario/ScenarioMenuScenario.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ScenarioMenuScenario(_ref) {
  let {
    scenarioMenuScenario,
    selection,
    setSelection,
    setActiveScenario
  } = _ref;
  const handleScenarioClick = () => {
    setSelection('select investigator(s) button');
    setActiveScenario(scenarioMenuScenario);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _ScenarioMenuScenario_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].scenario,
    onClick: handleScenarioClick
  }, /*#__PURE__*/React.createElement("h1", null, scenarioMenuScenario.name));
}

/***/ }),

/***/ "./src/components/ScenarioSelectionMenu/ScenarioSelectionMenu.js":
/*!***********************************************************************!*\
  !*** ./src/components/ScenarioSelectionMenu/ScenarioSelectionMenu.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScenarioSelectionMenu)
/* harmony export */ });
/* harmony import */ var _ScenarioMenuScenario_ScenarioMenuScenario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ScenarioMenuScenario/ScenarioMenuScenario */ "./src/components/ScenarioMenuScenario/ScenarioMenuScenario.js");
/* harmony import */ var _ScenarioSelectionMenu_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScenarioSelectionMenu.module.scss */ "./src/components/ScenarioSelectionMenu/ScenarioSelectionMenu.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ScenarioSelectionMenu(_ref) {
  let {
    selection,
    setSelection,
    scenarioMenuScenarios,
    setActiveScenario
  } = _ref;
  const scenarios = scenarioMenuScenarios.map(scenario => /*#__PURE__*/React.createElement(_ScenarioMenuScenario_ScenarioMenuScenario__WEBPACK_IMPORTED_MODULE_0__["default"], {
    key: scenario._id,
    scenarioMenuScenario: scenario,
    selection: selection,
    setSelection: setSelection,
    setActiveScenario: setActiveScenario
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: _ScenarioSelectionMenu_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].scenarioMenu
  }, scenarios);
}

/***/ }),

/***/ "./src/components/SelectionArea/SelectionArea.js":
/*!*******************************************************!*\
  !*** ./src/components/SelectionArea/SelectionArea.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectionArea)
/* harmony export */ });
/* harmony import */ var _SelectionArea_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectionArea.module.scss */ "./src/components/SelectionArea/SelectionArea.module.scss");
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logo/Logo */ "./src/components/Logo/Logo.js");
/* harmony import */ var _PlayButton_PlayButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PlayButton/PlayButton */ "./src/components/PlayButton/PlayButton.js");
/* harmony import */ var _ScenarioSelectionMenu_ScenarioSelectionMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ScenarioSelectionMenu/ScenarioSelectionMenu */ "./src/components/ScenarioSelectionMenu/ScenarioSelectionMenu.js");
/* harmony import */ var _InvestigatorSelectionMenu_InvestigatorSelectionMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InvestigatorSelectionMenu/InvestigatorSelectionMenu */ "./src/components/InvestigatorSelectionMenu/InvestigatorSelectionMenu.js");
/* harmony import */ var _StartingCardSelection_StartingCardSelection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../StartingCardSelection/StartingCardSelection */ "./src/components/StartingCardSelection/StartingCardSelection.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/* import { useLocation } from 'react-router-dom'; */





function SelectionArea(_ref) {
  let {
    selection,
    setSelection,
    scenarioMenuScenarios,
    activeScenario,
    setActiveScenario,
    investigatorMenuInvestigators,
    activeInvestigators,
    setActiveInvestigators
  } = _ref;
  /* const location = useLocation(); */

  const handleSelectScenarioClick = () => {
    setSelection('scenario selection menu');
  };
  const handleSelectInvestigatorClick = () => {
    setSelection('investigator selection menu');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _SelectionArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].selectionArea
  }, selection === 'home' ? /*#__PURE__*/React.createElement("div", {
    className: _SelectionArea_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].homeSelection
  }, /*#__PURE__*/React.createElement(_Logo_Logo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: "30vw"
  }), /*#__PURE__*/React.createElement(_PlayButton_PlayButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setSelection: setSelection
  })) : selection === 'select scenario button' ? /*#__PURE__*/React.createElement("button", {
    onClick: handleSelectScenarioClick
  }, "SELECT SCENARIO") : selection === 'scenario selection menu' ? /*#__PURE__*/React.createElement(_ScenarioSelectionMenu_ScenarioSelectionMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selection: selection,
    setSelection: setSelection,
    scenarioMenuScenarios: scenarioMenuScenarios,
    setActiveScenario: setActiveScenario
  }) : selection === 'select investigator(s) button' ? /*#__PURE__*/React.createElement("button", {
    onClick: handleSelectInvestigatorClick
  }, "SELECT INVESTIGATOR(S)") : selection === 'investigator selection menu' ? /*#__PURE__*/React.createElement(_InvestigatorSelectionMenu_InvestigatorSelectionMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    activeScenario: activeScenario,
    investigatorMenuInvestigators: investigatorMenuInvestigators,
    activeInvestigators: activeInvestigators,
    setActiveInvestigators: setActiveInvestigators,
    setSelection: setSelection,
    selection: selection
  }) : selection === 'starting card selection' ? /*#__PURE__*/React.createElement(_StartingCardSelection_StartingCardSelection__WEBPACK_IMPORTED_MODULE_5__["default"], {
    activeInvestigators: activeInvestigators,
    selection: selection
  }) : /*#__PURE__*/React.createElement("div", null));
}

/***/ }),

/***/ "./src/components/StartingCardSelection/StartingCardSelection.js":
/*!***********************************************************************!*\
  !*** ./src/components/StartingCardSelection/StartingCardSelection.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StartingCardSelection)
/* harmony export */ });
/* harmony import */ var _StartingCardSelection_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StartingCardSelection.module.scss */ "./src/components/StartingCardSelection/StartingCardSelection.module.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function StartingCardSelection(_ref) {
  let {
    activeInvestigators
  } = _ref;
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  const handleCardClick = () => {
    navigate('/play');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _StartingCardSelection_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].selection
  }, /*#__PURE__*/React.createElement("h2", null, activeInvestigators[0].name, ": Choose Your Starting Cards"), /*#__PURE__*/React.createElement("div", {
    className: _StartingCardSelection_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].row2
  }, /*#__PURE__*/React.createElement("p", {
    className: _StartingCardSelection_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].image
  }, activeInvestigators[0].name), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "You start with:"), /*#__PURE__*/React.createElement("p", {
    className: _StartingCardSelection_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].image
  }, "Static starting card")), /*#__PURE__*/React.createElement("p", null, "AND"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Choose one of the following:"), /*#__PURE__*/React.createElement("div", {
    className: _StartingCardSelection_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].options
  }, /*#__PURE__*/React.createElement("p", {
    className: _StartingCardSelection_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].image,
    onClick: handleCardClick
  }, "Starting card option"), /*#__PURE__*/React.createElement("p", {
    className: _StartingCardSelection_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].image,
    onClick: handleCardClick
  }, "Starting card option")))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _pages_App_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/App/App */ "./src/pages/App/App.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");




const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById('app'));
root.render( /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, /*#__PURE__*/React.createElement(_pages_App_App__WEBPACK_IMPORTED_MODULE_2__["default"], null))));

/***/ }),

/***/ "./src/pages/App/App.js":
/*!******************************!*\
  !*** ./src/pages/App/App.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _HomePage_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HomePage/HomePage */ "./src/pages/HomePage/HomePage.js");
/* harmony import */ var _SelectionPage_SelectionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SelectionPage/SelectionPage */ "./src/pages/SelectionPage/SelectionPage.js");
/* harmony import */ var _StartingCardSelectionPage_StartingCardSelectionPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../StartingCardSelectionPage/StartingCardSelectionPage */ "./src/pages/StartingCardSelectionPage/StartingCardSelectionPage.js");
/* harmony import */ var _GamePage_GamePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../GamePage/GamePage */ "./src/pages/GamePage/GamePage.js");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/NavBar/NavBar */ "./src/components/NavBar/NavBar.js");







function App() {
  const [selection, setSelection] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [activeScenario, setActiveScenario] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [activeInvestigators, setActiveInvestigators] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useLocation)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setSelection('home');
  }, [location.pathname === '/']);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      selection: selection,
      setSelection: setSelection
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/selection",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SelectionPage_SelectionPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
      selection: selection,
      setSelection: setSelection,
      activeScenario: activeScenario,
      setActiveScenario: setActiveScenario,
      activeInvestigators: activeInvestigators,
      setActiveInvestigators: setActiveInvestigators
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/startingcards",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StartingCardSelectionPage_StartingCardSelectionPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeInvestigators: activeInvestigators,
      setActiveInvestigators: setActiveInvestigators,
      selection: selection,
      setSelection: setSelection
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/play",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GamePage_GamePage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      activeScenario: activeScenario
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Navigate, {
      to: "/"
    })
  })));
}

/***/ }),

/***/ "./src/pages/GamePage/GamePage.js":
/*!****************************************!*\
  !*** ./src/pages/GamePage/GamePage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GamePage)
/* harmony export */ });
/* harmony import */ var _GamePage_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GamePage.module.scss */ "./src/pages/GamePage/GamePage.module.scss");
/* harmony import */ var _components_GameArea_GameArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/GameArea/GameArea */ "./src/components/GameArea/GameArea.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function GamePage(_ref) {
  let {
    activeScenario
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: _GamePage_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].gamePage
  }, /*#__PURE__*/React.createElement("h2", null, "Scenario: ", activeScenario.name), /*#__PURE__*/React.createElement(_components_GameArea_GameArea__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/***/ }),

/***/ "./src/pages/HomePage/HomePage.js":
/*!****************************************!*\
  !*** ./src/pages/HomePage/HomePage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _components_SelectionArea_SelectionArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/SelectionArea/SelectionArea */ "./src/components/SelectionArea/SelectionArea.js");
/* harmony import */ var _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.module.scss */ "./src/pages/HomePage/HomePage.module.scss");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function HomePage(_ref) {
  let {
    selection,
    setSelection
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: _HomePage_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].homePage
  }, /*#__PURE__*/React.createElement(_components_SelectionArea_SelectionArea__WEBPACK_IMPORTED_MODULE_0__["default"], {
    selection: selection,
    setSelection: setSelection
  }));
}

/***/ }),

/***/ "./src/pages/SelectionPage/SelectionPage.js":
/*!**************************************************!*\
  !*** ./src/pages/SelectionPage/SelectionPage.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectionPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SelectionArea_SelectionArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/SelectionArea/SelectionArea */ "./src/components/SelectionArea/SelectionArea.js");
/* harmony import */ var _utilities_scenarios_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/scenarios-api */ "./src/utilities/scenarios-api.js");
/* harmony import */ var _utilities_investigators_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/investigators-api */ "./src/utilities/investigators-api.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




function SelectionPage(_ref) {
  let {
    selection,
    setSelection,
    activeScenario,
    setActiveScenario,
    activeInvestigators,
    setActiveInvestigators
  } = _ref;
  const [scenarioMenuScenarios, setScenarioMenuScenarios] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [investigatorMenuInvestigators, setInvestigatorMenuInvestigators] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    function getScenarios() {
      return _getScenarios.apply(this, arguments);
    }
    function _getScenarios() {
      _getScenarios = _asyncToGenerator(function* () {
        const fetchedScenarios = yield _utilities_scenarios_api__WEBPACK_IMPORTED_MODULE_2__.getAllScenarios();
        setScenarioMenuScenarios(fetchedScenarios);
      });
      return _getScenarios.apply(this, arguments);
    }
    getScenarios();
    function getInvestigators() {
      return _getInvestigators.apply(this, arguments);
    }
    function _getInvestigators() {
      _getInvestigators = _asyncToGenerator(function* () {
        const fetchedInvestigators = yield _utilities_investigators_api__WEBPACK_IMPORTED_MODULE_3__.getAllInvestigators();
        setInvestigatorMenuInvestigators(fetchedInvestigators);
      });
      return _getInvestigators.apply(this, arguments);
    }
    getInvestigators();
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_components_SelectionArea_SelectionArea__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selection: selection,
    setSelection: setSelection,
    scenarioMenuScenarios: scenarioMenuScenarios,
    activeScenario: activeScenario,
    setActiveScenario: setActiveScenario,
    investigatorMenuInvestigators: investigatorMenuInvestigators,
    activeInvestigators: activeInvestigators,
    setActiveInvestigators: setActiveInvestigators
  }));
}

/***/ }),

/***/ "./src/pages/StartingCardSelectionPage/StartingCardSelectionPage.js":
/*!**************************************************************************!*\
  !*** ./src/pages/StartingCardSelectionPage/StartingCardSelectionPage.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StartingCardSelectionPage)
/* harmony export */ });
/* harmony import */ var _components_SelectionArea_SelectionArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/SelectionArea/SelectionArea */ "./src/components/SelectionArea/SelectionArea.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function StartingCardSelectionPage(_ref) {
  let {
    selection,
    setSelection,
    activeInvestigators
  } = _ref;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_components_SelectionArea_SelectionArea__WEBPACK_IMPORTED_MODULE_0__["default"], {
    selection: selection,
    setSelection: setSelection,
    activeInvestigators: activeInvestigators
  }));
}

/***/ }),

/***/ "./src/utilities/investigators-api.js":
/*!********************************************!*\
  !*** ./src/utilities/investigators-api.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllInvestigators: () => (/* binding */ getAllInvestigators)
/* harmony export */ });
/* unused harmony export getInvestigator */
/* harmony import */ var _send_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-request */ "./src/utilities/send-request.js");

const BASE_URL = '/api/investigators';
function getAllInvestigators() {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])(BASE_URL);
}
function getInvestigator(id) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/").concat(id));
}

/***/ }),

/***/ "./src/utilities/scenarios-api.js":
/*!****************************************!*\
  !*** ./src/utilities/scenarios-api.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllScenarios: () => (/* binding */ getAllScenarios)
/* harmony export */ });
/* unused harmony export getScenario */
/* harmony import */ var _send_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-request */ "./src/utilities/send-request.js");

const BASE_URL = '/api/scenarios';
function getAllScenarios() {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])(BASE_URL);
}
function getScenario(id) {
  return (0,_send_request__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(BASE_URL, "/").concat(id));
}

/***/ }),

/***/ "./src/utilities/send-request.js":
/*!***************************************!*\
  !*** ./src/utilities/send-request.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sendRequest)
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function sendRequest(_x) {
  return _sendRequest.apply(this, arguments);
}
function _sendRequest() {
  _sendRequest = _asyncToGenerator(function (url) {
    let method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
    let payload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return function* () {
      const options = {
        method
      };
      if (payload) {
        options.headers = {
          'Content-Type': 'application/json'
        };
        options.body = JSON.stringify(payload);
      }
      const res = yield fetch(url, options);
      if (res.ok) return res.json();
      throw new Error('Bad Request');
    }();
  });
  return _sendRequest.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/GameArea/GameArea.module.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/GameArea/GameArea.module.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ooJ0AsRg7fTGhvXTlMHH {
  background-image: linear-gradient(var(--serpent), var(--serpent), var(--black));
  width: 90vw;
  height: auto;
  border: 0.5vmin double var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1vmin;
  padding: 1vmin;
  text-align: center;
}
.ooJ0AsRg7fTGhvXTlMHH .uKjBLQrGMwNN90jEaL33, .ooJ0AsRg7fTGhvXTlMHH .s3gbuTwpIuFYmdTl7lww {
  border-radius: 0.5vmin;
}
.ooJ0AsRg7fTGhvXTlMHH .uKjBLQrGMwNN90jEaL33:hover, .ooJ0AsRg7fTGhvXTlMHH .s3gbuTwpIuFYmdTl7lww:hover {
  opacity: 0.7;
  cursor: pointer;
}
.ooJ0AsRg7fTGhvXTlMHH .uKjBLQrGMwNN90jEaL33 {
  width: 5vmin;
  height: 8vmin;
  margin: 0.25vmin;
}
.ooJ0AsRg7fTGhvXTlMHH .s3gbuTwpIuFYmdTl7lww {
  width: 8vmin;
  height: 12vmin;
  border: 0.1vmin solid var(--white);
}
.ooJ0AsRg7fTGhvXTlMHH ._SbK0YgtjdR4ePcc3gg5, .ooJ0AsRg7fTGhvXTlMHH .hpidgKyHkby6WAGEU1sy, .ooJ0AsRg7fTGhvXTlMHH .EbIEEBeq57R8IAXwjZ9u, .ooJ0AsRg7fTGhvXTlMHH .hbyCNNoPNiIgqpolDo7w {
  border: 0.1vmin solid var(--white);
  width: 25vmin;
  height: 15vmin;
}
.ooJ0AsRg7fTGhvXTlMHH .HaZbuvMmXcfkfpFn5ilw {
  display: flex;
  justify-content: space-between;
}
.ooJ0AsRg7fTGhvXTlMHH .HaZbuvMmXcfkfpFn5ilw .LBFErDh703j4zNTtPRgB {
  display: flex;
  flex-direction: column;
}
.ooJ0AsRg7fTGhvXTlMHH .HaZbuvMmXcfkfpFn5ilw .LBFErDh703j4zNTtPRgB .jhaehgvlSEHbGYlDCdEq {
  width: 8vmin;
  height: 12vmin;
}
.ooJ0AsRg7fTGhvXTlMHH .HaZbuvMmXcfkfpFn5ilw .mVvXiBaCO6fq9g8DJDxV {
  display: flex;
  flex-direction: column;
}
.ooJ0AsRg7fTGhvXTlMHH .HaZbuvMmXcfkfpFn5ilw .mVvXiBaCO6fq9g8DJDxV .HxJBkWFpYTzqeVF5LM4l, .ooJ0AsRg7fTGhvXTlMHH .HaZbuvMmXcfkfpFn5ilw .mVvXiBaCO6fq9g8DJDxV .mpzbwwiPjFInzVHvZY4I {
  display: flex;
}
.ooJ0AsRg7fTGhvXTlMHH .HaZbuvMmXcfkfpFn5ilw ._SbK0YgtjdR4ePcc3gg5 {
  transform: rotate(180deg);
}
.ooJ0AsRg7fTGhvXTlMHH .HaZbuvMmXcfkfpFn5ilw .g7CNkXUukJ7jr312s9Rc {
  border: 0.1vmin solid var(--white);
  width: 25vmin;
  height: 15vmin;
}
.ooJ0AsRg7fTGhvXTlMHH .HaZbuvMmXcfkfpFn5ilw .Tk36zRSCL1XST95jjhDt {
  display: flex;
}
.ooJ0AsRg7fTGhvXTlMHH .HaZbuvMmXcfkfpFn5ilw .Tk36zRSCL1XST95jjhDt .QQS7WnxRqkdX6efaohTu {
  width: 8vmin;
  height: 12vmin;
}
.ooJ0AsRg7fTGhvXTlMHH .qn9J0mGaE3dh1881fT3x {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ooJ0AsRg7fTGhvXTlMHH .qn9J0mGaE3dh1881fT3x .hpidgKyHkby6WAGEU1sy {
  transform: rotate(90deg);
}
.ooJ0AsRg7fTGhvXTlMHH .qn9J0mGaE3dh1881fT3x .hTNal7I2HJwH0e5S5jMW {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* .map {
      background-image: url("../../../public/img/sample-map.png");
      background-size: cover;
      width: 30vw;
      height: 30vw;
  } */
}
.ooJ0AsRg7fTGhvXTlMHH .qn9J0mGaE3dh1881fT3x .hTNal7I2HJwH0e5S5jMW .hwz9n2a0893EvH45MeqI {
  display: flex;
  margin-top: 2vw;
}
.ooJ0AsRg7fTGhvXTlMHH .qn9J0mGaE3dh1881fT3x .EbIEEBeq57R8IAXwjZ9u {
  transform: rotate(-90deg);
}
.ooJ0AsRg7fTGhvXTlMHH .jAdcDdzf2S45xUb5Wbzp {
  display: flex;
  justify-content: space-evenly;
  margin-top: 3vw;
}
.ooJ0AsRg7fTGhvXTlMHH .jAdcDdzf2S45xUb5Wbzp .bfNokLyiFAmXTOpoaqwg, .ooJ0AsRg7fTGhvXTlMHH .jAdcDdzf2S45xUb5Wbzp .mJODS93fV56gCOTCqzdo {
  display: flex;
}
.ooJ0AsRg7fTGhvXTlMHH .jAdcDdzf2S45xUb5Wbzp .Zo9Gp0Sv2cwGObJ99nwD {
  border: 0.1vmin solid var(--white);
  width: 15vmin;
  height: 15vmin;
}
.ooJ0AsRg7fTGhvXTlMHH .jAdcDdzf2S45xUb5Wbzp .ssyUOifSCTHcyg_rBpp7 {
  border: 0.1vmin solid var(--white);
  width: 12vmin;
  height: 12vmin;
  border-radius: 50%;
}`, "",{"version":3,"sources":["webpack://./src/components/GameArea/GameArea.module.scss"],"names":[],"mappings":"AAAA;EACI,+EAAA;EACA,WAAA;EACA,YAAA;EACA,mCAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;AACJ;AACI;EACI,sBAAA;AACR;AAEI;EACI,YAAA;EACA,eAAA;AAAR;AAGI;EACI,YAAA;EACA,aAAA;EACA,gBAAA;AADR;AAII;EACI,YAAA;EACA,cAAA;EACA,kCAAA;AAFR;AAKI;EACI,kCAAA;EACA,aAAA;EACA,cAAA;AAHR;AAMI;EACI,aAAA;EACA,8BAAA;AAJR;AAMQ;EACI,aAAA;EACA,sBAAA;AAJZ;AAMY;EACI,YAAA;EACA,cAAA;AAJhB;AAQQ;EACI,aAAA;EACA,sBAAA;AANZ;AAQY;EACI,aAAA;AANhB;AAUQ;EACI,yBAAA;AARZ;AAWQ;EACI,kCAAA;EACA,aAAA;EACA,cAAA;AATZ;AAYQ;EACI,aAAA;AAVZ;AAYY;EACI,YAAA;EACA,cAAA;AAVhB;AAeI;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;AAbR;AAeQ;EACI,wBAAA;AAbZ;AAgBQ;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EAEA;;;;;KAAA;AAVZ;AAiBY;EACI,aAAA;EACA,eAAA;AAfhB;AAmBQ;EACI,yBAAA;AAjBZ;AAqBI;EACI,aAAA;EACA,6BAAA;EACA,eAAA;AAnBR;AAqBQ;EACI,aAAA;AAnBZ;AAsBQ;EACI,kCAAA;EACA,aAAA;EACA,cAAA;AApBZ;AAuBQ;EACI,kCAAA;EACA,aAAA;EACA,cAAA;EACA,kBAAA;AArBZ","sourcesContent":[".gameArea {\n    background-image: linear-gradient(var(--serpent), var(--serpent), var(--black));\n    width: 90vw;\n    height: auto;\n    border: .5vmin double var(--white);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    font-size: 1vmin;\n    padding: 1vmin;\n    text-align: center;\n\n    .smallCard, .mediumCard {\n        border-radius: .5vmin;\n    }\n \n    .smallCard:hover, .mediumCard:hover {\n        opacity: .7;\n        cursor: pointer;\n    }\n\n    .smallCard {\n        width: 5vmin;\n        height: 8vmin;\n        margin: .25vmin;\n    }\n\n    .mediumCard {\n        width: 8vmin;\n        height: 12vmin;\n        border: .1vmin solid var(--white);\n    }\n\n    .player1Area, .player2Area, .player3Area, .player4Area {\n        border: .1vmin solid var(--white);\n        width: 25vmin;\n        height: 15vmin;\n    }\n\n    .row1 {\n        display: flex;\n        justify-content: space-between;\n\n        .monsterDeck {\n            display: flex;\n            flex-direction: column;\n\n            .monsterDeckHolder {\n                width: 8vmin;\n                height: 12vmin;\n            }\n        }\n    \n        .assetsStore {\n            display: flex;\n            flex-direction: column;\n\n            .assets, .store {\n                display: flex;\n            }\n        }\n\n        .player1Area {\n            transform: rotate(180deg);\n        }\n\n        .archiveArea {\n            border: .1vmin solid var(--white);\n            width: 25vmin;\n            height: 15vmin;\n        }\n\n        .eventArea {\n            display: flex;\n\n            .eventDeck {\n                width: 8vmin;\n                height: 12vmin;\n            }\n        }\n    }\n\n    .row2 {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n\n        .player2Area {\n            transform: rotate(90deg);\n        }\n\n        .center {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n\n            /* .map {\n                background-image: url(\"../../../public/img/sample-map.png\");\n                background-size: cover;\n                width: 30vw;\n                height: 30vw;\n            } */\n\n            .encounterDecks {\n                display: flex;\n                margin-top: 2vw;\n            }\n        }\n\n        .player3Area {\n            transform: rotate(-90deg);\n        }\n    }\n\n    .row3 {\n        display: flex;\n        justify-content: space-evenly;\n        margin-top: 3vw;\n\n        .headlineArea, .anomalyDeckArea {\n            display: flex;\n        }\n\n        .diceArea {\n            border: .1vmin solid var(--white);\n            width: 15vmin;\n            height: 15vmin;\n        }\n\n        .mythosCup {\n            border: .1vmin solid var(--white);\n            width: 12vmin;\n            height: 12vmin;\n            border-radius: 50%;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"gameArea": `ooJ0AsRg7fTGhvXTlMHH`,
	"smallCard": `uKjBLQrGMwNN90jEaL33`,
	"mediumCard": `s3gbuTwpIuFYmdTl7lww`,
	"player1Area": `_SbK0YgtjdR4ePcc3gg5`,
	"player2Area": `hpidgKyHkby6WAGEU1sy`,
	"player3Area": `EbIEEBeq57R8IAXwjZ9u`,
	"player4Area": `hbyCNNoPNiIgqpolDo7w`,
	"row1": `HaZbuvMmXcfkfpFn5ilw`,
	"monsterDeck": `LBFErDh703j4zNTtPRgB`,
	"monsterDeckHolder": `jhaehgvlSEHbGYlDCdEq`,
	"assetsStore": `mVvXiBaCO6fq9g8DJDxV`,
	"assets": `HxJBkWFpYTzqeVF5LM4l`,
	"store": `mpzbwwiPjFInzVHvZY4I`,
	"archiveArea": `g7CNkXUukJ7jr312s9Rc`,
	"eventArea": `Tk36zRSCL1XST95jjhDt`,
	"eventDeck": `QQS7WnxRqkdX6efaohTu`,
	"row2": `qn9J0mGaE3dh1881fT3x`,
	"center": `hTNal7I2HJwH0e5S5jMW`,
	"encounterDecks": `hwz9n2a0893EvH45MeqI`,
	"row3": `jAdcDdzf2S45xUb5Wbzp`,
	"headlineArea": `bfNokLyiFAmXTOpoaqwg`,
	"anomalyDeckArea": `mJODS93fV56gCOTCqzdo`,
	"diceArea": `Zo9Gp0Sv2cwGObJ99nwD`,
	"mythosCup": `ssyUOifSCTHcyg_rBpp7`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/HoverDisplayArea/HoverDisplayArea.module.scss":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/HoverDisplayArea/HoverDisplayArea.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.clPioik8VHDl_2bRcVxc {
  position: absolute;
  top: 35%;
  left: 25%;
  z-index: 3;
  width: 50%;
}
.clPioik8VHDl_2bRcVxc .suyidLpsdBkTMrXa_jKQ {
  width: 40%;
  border: 0.5vmin double var(--white);
  border-radius: 3vmin;
}`, "",{"version":3,"sources":["webpack://./src/components/HoverDisplayArea/HoverDisplayArea.module.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,UAAA;AACJ;AACI;EACI,UAAA;EACA,mCAAA;EACA,oBAAA;AACR","sourcesContent":[".hoverDisplayArea {\n    position: absolute;\n    top: 35%;\n    left: 25%;\n    z-index: 3;\n    width: 50%;\n\n    .hoveredImage {\n        width: 40%;\n        border: .5vmin double var(--white);\n        border-radius: 3vmin;\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"hoverDisplayArea": `clPioik8VHDl_2bRcVxc`,
	"hoveredImage": `suyidLpsdBkTMrXa_jKQ`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/InvestigatorMenuInvestigator/InvestigatorMenuInvestigator.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/InvestigatorMenuInvestigator/InvestigatorMenuInvestigator.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.xXeuNJUbDCjo94wh3EXK {
  border: 0.1vmin solid var(--white);
  width: 20vmax;
  height: 3vmax;
  display: block;
  font-size: 1vmin;
  color: var(--white);
  margin: 1vmin 3vmin;
  text-align: center;
}

.xXeuNJUbDCjo94wh3EXK:hover {
  cursor: pointer;
  background-color: var(--black);
}

.xXeuNJUbDCjo94wh3EXK h1 {
  color: var(--white);
}`, "",{"version":3,"sources":["webpack://./src/components/InvestigatorMenuInvestigator/InvestigatorMenuInvestigator.module.scss"],"names":[],"mappings":"AAAA;EACI,kCAAA;EACA,aAAA;EACA,aAAA;EACA,cAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,kBAAA;AACJ;;AAEA;EACI,eAAA;EACA,8BAAA;AACJ;;AAEA;EACI,mBAAA;AACJ","sourcesContent":[".investigator {\n    border: 0.1vmin solid var(--white);\n    width: 20vmax;\n    height: 3vmax;\n    display: block;\n    font-size: 1vmin;\n    color: var(--white);\n    margin: 1vmin 3vmin;\n    text-align: center;\n}\n\n.investigator:hover {\n    cursor: pointer;\n    background-color: var(--black);\n}\n\n.investigator h1 {\n    color: var(--white);\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"investigator": `xXeuNJUbDCjo94wh3EXK`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/InvestigatorSelectionMenu/InvestigatorSelectionMenu.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/InvestigatorSelectionMenu/InvestigatorSelectionMenu.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Map/Map.module.scss":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Map/Map.module.scss ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.gfE4zyWlNHJZrlD_LBwF,
.QQ18BxcYcjhiNzkAYukB,
.ZAXWYDO_5a200bndFbtA,
.O_kdruXIARHJq3HxtuPi,
.DnhMdca6inqkbXgQJ8RM,
.XOT9fpyDK4B7tRoAMd0R,
.UG01WPK3dlZQwhjHZOwQ,
.d0YsY72CODTWfeqGXhbd,
.OqqN9tFRPAzP_WGZd8CM,
.OQtpyeSUD5KHq236qI6k,
.QSPpOrbdHN03KYQCfkB_,
.vvffEd2AbHZE7oCLDM8X,
.yxNbUsWX67JktMQkhOFK,
.yNauBGJ0b3aQ57Hwt7QM,
.pI79mMx_hejGO1ugUxnM,
.jV0MCcUk6a1adhjU4dsz,
.cQSe_XvK1qp3aP_OFlOg,
.LtP8kULyfzPLn__x4oe2,
._9GSF9pjyxqF28Vye9dhk,
.ITfZQ5vUIAh4zLW7J9VG,
.br6rFkkqKF9I8LTg9qBv,
.GHBEtUh_TxORhqEkpgf_ {
  position: absolute;
  height: 5vmin;
  width: 5vmin;
  border: 0.1vmin solid var(--white);
  z-index: 2;
}

.gfE4zyWlNHJZrlD_LBwF:hover,
.QQ18BxcYcjhiNzkAYukB:hover,
.ZAXWYDO_5a200bndFbtA:hover,
.O_kdruXIARHJq3HxtuPi:hover,
.DnhMdca6inqkbXgQJ8RM:hover,
.XOT9fpyDK4B7tRoAMd0R:hover,
.UG01WPK3dlZQwhjHZOwQ:hover,
.d0YsY72CODTWfeqGXhbd:hover,
.OqqN9tFRPAzP_WGZd8CM:hover,
.OQtpyeSUD5KHq236qI6k:hover,
.QSPpOrbdHN03KYQCfkB_:hover,
.vvffEd2AbHZE7oCLDM8X:hover,
.yxNbUsWX67JktMQkhOFK:hover,
.yNauBGJ0b3aQ57Hwt7QM:hover,
.pI79mMx_hejGO1ugUxnM:hover,
.jV0MCcUk6a1adhjU4dsz:hover,
.cQSe_XvK1qp3aP_OFlOg:hover,
.LtP8kULyfzPLn__x4oe2:hover,
._9GSF9pjyxqF28Vye9dhk:hover,
.ITfZQ5vUIAh4zLW7J9VG:hover,
.br6rFkkqKF9I8LTg9qBv:hover,
.GHBEtUh_TxORhqEkpgf_:hover {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.231);
}

.gfE4zyWlNHJZrlD_LBwF {
  top: 50%;
  left: 30%;
}

.QQ18BxcYcjhiNzkAYukB {
  top: 60%;
  left: 30%;
}

.ZAXWYDO_5a200bndFbtA {
  top: 55%;
  left: 25%;
}

.O_kdruXIARHJq3HxtuPi {
  top: 55%;
  left: 36%;
}

.DnhMdca6inqkbXgQJ8RM {
  top: 50%;
  left: 45%;
}

.XOT9fpyDK4B7tRoAMd0R {
  top: 60%;
  left: 45%;
}

.UG01WPK3dlZQwhjHZOwQ {
  top: 55%;
  left: 40%;
}

.d0YsY72CODTWfeqGXhbd {
  top: 55%;
  left: 51.5%;
}

.OqqN9tFRPAzP_WGZd8CM {
  top: 55%;
  left: 63%;
}

.OQtpyeSUD5KHq236qI6k {
  top: 60%;
  left: 58%;
}

.QSPpOrbdHN03KYQCfkB_ {
  top: 50%;
  left: 58%;
}

.vvffEd2AbHZE7oCLDM8X {
  top: 68%;
  left: 32%;
}

.yxNbUsWX67JktMQkhOFK {
  top: 68%;
  left: 40%;
}

.yNauBGJ0b3aQ57Hwt7QM {
  top: 68%;
  left: 48%;
}

.pI79mMx_hejGO1ugUxnM {
  top: 68%;
  left: 55%;
}

.jV0MCcUk6a1adhjU4dsz {
  top: 75%;
  left: 37%;
}

.cQSe_XvK1qp3aP_OFlOg {
  top: 90%;
  left: 37%;
}

.LtP8kULyfzPLn__x4oe2 {
  top: 85%;
  left: 32%;
}

._9GSF9pjyxqF28Vye9dhk {
  top: 80%;
  left: 44%;
}

.ITfZQ5vUIAh4zLW7J9VG {
  top: 85%;
  left: 55%;
}

.br6rFkkqKF9I8LTg9qBv {
  top: 90%;
  left: 50%;
}

.GHBEtUh_TxORhqEkpgf_ {
  top: 75%;
  left: 50%;
}`, "",{"version":3,"sources":["webpack://./src/components/Map/Map.module.scss"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;EAsBI,kBAAA;EACA,aAAA;EACA,YAAA;EACA,kCAAA;EACA,UAAA;AACJ;;AAEA;;;;;;;;;;;;;;;;;;;;;;EAsBI,eAAA;EACA,4CAAA;AACJ;;AAEA;EACI,QAAA;EACA,SAAA;AACJ;;AAEA;EACI,QAAA;EACA,SAAA;AACJ;;AAEA;EACI,QAAA;EACA,SAAA;AACJ;;AAEA;EACI,QAAA;EACA,SAAA;AACJ;;AAEA;EACI,QAAA;EACA,SAAA;AACJ;;AAEA;EACI,QAAA;EACA,SAAA;AACJ;;AAEA;EACI,QAAA;EACA,SAAA;AACJ;;AAEA;EACI,QAAA;EACA,WAAA;AACJ;;AAEA;EACI,QAAA;EACA,SAAA;AACJ;;AAEA;EACI,QAAA;EACA,SAAA;AACJ;;AAEA;EACI,QAAA;EACA,SAAA;AACJ;;AAEA;EACI,QAAA;EACA,SAAA;AACJ;;AAEA;EACI,QAAA;EACA,SAAA;AACJ;;AAEA;EACI,QAAA;EACA,SAAA;AACJ;;AAEA;EACI,QAAA;EACA,SAAA;AACJ;;AAEA;EACI,QAAA;EACA,SAAA;AACJ;;AAEA;EACI,QAAA;EACA,SAAA;AACJ;;AAEA;EACI,QAAA;EACA,SAAA;AACJ;;AAEA;EACI,QAAA;EACA,SAAA;AACJ;;AAEA;EACI,QAAA;EACA,SAAA;AACJ;;AAEA;EACI,QAAA;EACA,SAAA;AACJ;;AAEA;EACI,QAAA;EACA,SAAA;AACJ","sourcesContent":[".arkhamAdvertiser,\n.trainStation,\n.curiositieShoppe,\n.scenicStreet1,\n.independenceSquare,\n.laBellaLuna,\n.arkhamAsylum,\n.residentialStreet1,\n.masRoadhouse,\n.policeStation,\n.velmasDiner,\n.scenicStreet2,\n.residentialStreet2,\n.bridge1,\n.bridge2,\n.unvisitedIsle,\n.tickTockClub,\n.riverDocks,\n.residentialStreet3,\n.graveyard,\n.generalStore,\n.blackCave {\n    position: absolute;\n    height: 5vmin;\n    width: 5vmin;\n    border: .1vmin solid var(--white);\n    z-index: 2;\n}\n\n.arkhamAdvertiser:hover,\n.trainStation:hover,\n.curiositieShoppe:hover,\n.scenicStreet1:hover,\n.independenceSquare:hover,\n.laBellaLuna:hover,\n.arkhamAsylum:hover,\n.residentialStreet1:hover,\n.masRoadhouse:hover,\n.policeStation:hover,\n.velmasDiner:hover,\n.scenicStreet2:hover,\n.residentialStreet2:hover,\n.bridge1:hover,\n.bridge2:hover,\n.unvisitedIsle:hover,\n.tickTockClub:hover,\n.riverDocks:hover,\n.residentialStreet3:hover,\n.graveyard:hover,\n.generalStore:hover,\n.blackCave:hover {\n    cursor: pointer;\n    background-color: rgba(255, 255, 255, 0.231);\n}\n\n.arkhamAdvertiser {\n    top: 50%;\n    left: 30%;\n}\n\n.trainStation {\n    top: 60%;\n    left: 30%;\n}\n\n.curiositieShoppe {\n    top: 55%;\n    left: 25%;\n}\n\n.scenicStreet1 {\n    top: 55%;\n    left: 36%;\n}\n\n.independenceSquare {\n    top: 50%;\n    left: 45%;\n}\n\n.laBellaLuna {\n    top: 60%;\n    left: 45%;\n}\n\n.arkhamAsylum {\n    top: 55%;\n    left: 40%;\n}\n\n.residentialStreet1 {\n    top: 55%;\n    left: 51.5%;\n}\n\n.masRoadhouse {\n    top: 55%;\n    left: 63%;\n}\n\n.policeStation {\n    top: 60%;\n    left: 58%;\n}\n\n.velmasDiner {\n    top: 50%;\n    left: 58%;\n}\n\n.scenicStreet2 {\n    top: 68%;\n    left: 32%;\n}\n\n.residentialStreet2 {\n    top: 68%;\n    left: 40%;\n}\n\n.bridge1 {\n    top: 68%;\n    left: 48%;\n}\n\n.bridge2 {\n    top: 68%;\n    left: 55%;\n}\n\n.unvisitedIsle {\n    top: 75%;\n    left: 37%;\n}\n\n.tickTockClub {\n    top: 90%;\n    left: 37%;\n}\n\n.riverDocks {\n    top: 85%;\n    left: 32%;\n}\n\n.residentialStreet3 {\n    top: 80%;\n    left: 44%;\n}\n\n.graveyard {\n    top: 85%;\n    left: 55%;\n}\n\n.generalStore {\n    top: 90%;\n    left: 50%;\n}\n\n.blackCave {\n    top: 75%;\n    left: 50%;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"arkhamAdvertiser": `gfE4zyWlNHJZrlD_LBwF`,
	"trainStation": `QQ18BxcYcjhiNzkAYukB`,
	"curiositieShoppe": `ZAXWYDO_5a200bndFbtA`,
	"scenicStreet1": `O_kdruXIARHJq3HxtuPi`,
	"independenceSquare": `DnhMdca6inqkbXgQJ8RM`,
	"laBellaLuna": `XOT9fpyDK4B7tRoAMd0R`,
	"arkhamAsylum": `UG01WPK3dlZQwhjHZOwQ`,
	"residentialStreet1": `d0YsY72CODTWfeqGXhbd`,
	"masRoadhouse": `OqqN9tFRPAzP_WGZd8CM`,
	"policeStation": `OQtpyeSUD5KHq236qI6k`,
	"velmasDiner": `QSPpOrbdHN03KYQCfkB_`,
	"scenicStreet2": `vvffEd2AbHZE7oCLDM8X`,
	"residentialStreet2": `yxNbUsWX67JktMQkhOFK`,
	"bridge1": `yNauBGJ0b3aQ57Hwt7QM`,
	"bridge2": `pI79mMx_hejGO1ugUxnM`,
	"unvisitedIsle": `jV0MCcUk6a1adhjU4dsz`,
	"tickTockClub": `cQSe_XvK1qp3aP_OFlOg`,
	"riverDocks": `LtP8kULyfzPLn__x4oe2`,
	"residentialStreet3": `_9GSF9pjyxqF28Vye9dhk`,
	"graveyard": `ITfZQ5vUIAh4zLW7J9VG`,
	"generalStore": `br6rFkkqKF9I8LTg9qBv`,
	"blackCave": `GHBEtUh_TxORhqEkpgf_`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.uHPMBSEvh_wKqGtsHFje {
  background-image: linear-gradient(var(--serpent), var(--serpent), var(--black));
  color: var(--white);
  padding: 0.1vmin 3vmin;
  text-align: center;
  font-family: "Bigelow Rules", serif;
  letter-spacing: 0.5vmin;
}`, "",{"version":3,"sources":["webpack://./src/components/NavBar/NavBar.module.scss"],"names":[],"mappings":"AAAA;EACI,+EAAA;EACA,mBAAA;EACA,sBAAA;EACA,kBAAA;EACA,mCAAA;EACA,uBAAA;AACJ","sourcesContent":[".navBar {\n    background-image: linear-gradient(var(--serpent), var(--serpent), var(--black));\n    color: var(--white);\n    padding: .1vmin 3vmin;\n    text-align: center;\n    font-family: \"Bigelow Rules\", serif;\n    letter-spacing: .5vmin;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"navBar": `uHPMBSEvh_wKqGtsHFje`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/PlayButton/PlayButton.module.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/PlayButton/PlayButton.module.scss ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.qOqE086LCvGBMrHErr6k {
  background-color: var(--black);
  color: var(--white);
  font-family: "Bigelow Rules", serif;
  letter-spacing: 0.5vmin;
  padding: 2vmin 4vmin;
  border: 0.5vmin double var(--white);
}

.qOqE086LCvGBMrHErr6k:hover {
  background-color: var(--serpent);
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/components/PlayButton/PlayButton.module.scss"],"names":[],"mappings":"AAAA;EACI,8BAAA;EACA,mBAAA;EACA,mCAAA;EACA,uBAAA;EACA,oBAAA;EACA,mCAAA;AACJ;;AAEA;EACI,gCAAA;EACA,eAAA;AACJ","sourcesContent":[".playButton {\n    background-color: var(--black);\n    color: var(--white);\n    font-family: \"Bigelow Rules\", serif;\n    letter-spacing: .5vmin;\n    padding: 2vmin 4vmin;\n    border: .5vmin double var(--white);\n}\n\n.playButton:hover {\n    background-color: var(--serpent);\n    cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"playButton": `qOqE086LCvGBMrHErr6k`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ScenarioMenuScenario/ScenarioMenuScenario.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ScenarioMenuScenario/ScenarioMenuScenario.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.j9azgDUj7T_aEX3sfnfq {
  border: 0.1vmin solid var(--white);
  width: 20vmax;
  height: 3vmax;
  display: block;
  font-size: 1vmin;
  color: var(--white);
  margin: 1vmin 3vmin;
  text-align: center;
}

.j9azgDUj7T_aEX3sfnfq:hover {
  cursor: pointer;
  background-color: var(--black);
}`, "",{"version":3,"sources":["webpack://./src/components/ScenarioMenuScenario/ScenarioMenuScenario.module.scss"],"names":[],"mappings":"AAAA;EACI,kCAAA;EACA,aAAA;EACA,aAAA;EACA,cAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,kBAAA;AACJ;;AAEA;EACI,eAAA;EACA,8BAAA;AACJ","sourcesContent":[".scenario {\n    border: 0.1vmin solid var(--white);\n    width: 20vmax;\n    height: 3vmax;\n    display: block;\n    font-size: 1vmin;\n    color: var(--white);\n    margin: 1vmin 3vmin;\n    text-align: center;\n}\n\n.scenario:hover {\n    cursor: pointer;\n    background-color: var(--black);\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"scenario": `j9azgDUj7T_aEX3sfnfq`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ScenarioSelectionMenu/ScenarioSelectionMenu.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ScenarioSelectionMenu/ScenarioSelectionMenu.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.jpfA5EVw83arFNGjSfRE {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
}`, "",{"version":3,"sources":["webpack://./src/components/ScenarioSelectionMenu/ScenarioSelectionMenu.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,eAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;AACJ","sourcesContent":[".scenarioMenu {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"scenarioMenu": `jpfA5EVw83arFNGjSfRE`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SelectionArea/SelectionArea.module.scss":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SelectionArea/SelectionArea.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.QkfkWULl_9KRgW17IeKh {
  background-image: linear-gradient(var(--serpent), var(--serpent), var(--black));
  width: 60vw;
  height: 70vh;
  align-self: center;
  margin: 10vmin;
  padding: 5vmin;
  border: 0.5vmin double var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
}
.QkfkWULl_9KRgW17IeKh .ji4s1197YZuzUSWBhOCS {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}`, "",{"version":3,"sources":["webpack://./src/components/SelectionArea/SelectionArea.module.scss"],"names":[],"mappings":"AAAA;EACI,+EAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;EACA,cAAA;EACA,mCAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AACJ;AACI;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,6BAAA;AACR","sourcesContent":[".selectionArea {\n    background-image: linear-gradient(var(--serpent), var(--serpent), var(--black));\n    width: 60vw;\n    height: 70vh;\n    align-self: center;\n    margin: 10vmin;\n    padding: 5vmin;\n    border: .5vmin double var(--white);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    .homeSelection {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-evenly;\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"selectionArea": `QkfkWULl_9KRgW17IeKh`,
	"homeSelection": `ji4s1197YZuzUSWBhOCS`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/StartingCardSelection/StartingCardSelection.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/StartingCardSelection/StartingCardSelection.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.yhliLPA2d6dKJlSzQJaE {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--white);
}
.yhliLPA2d6dKJlSzQJaE .lDmEW1wOYmNRO8xUQ3e0 {
  display: flex;
  align-items: center;
}
.yhliLPA2d6dKJlSzQJaE .nJMVFxvPCF4bNfBTrdhU {
  border: 0.1vmin solid var(--white);
  margin: 0 3vmin;
  padding: 10vmin 1vmin;
}
.yhliLPA2d6dKJlSzQJaE .wKiEnfLpMmagB1DCY7EU {
  display: flex;
}
.yhliLPA2d6dKJlSzQJaE .wKiEnfLpMmagB1DCY7EU p:hover {
  background-color: var(--black);
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/components/StartingCardSelection/StartingCardSelection.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;AACJ;AACI;EACI,aAAA;EACA,mBAAA;AACR;AAEI;EACI,kCAAA;EACA,eAAA;EACA,qBAAA;AAAR;AAGI;EACI,aAAA;AADR;AAII;EACI,8BAAA;EACA,eAAA;AAFR","sourcesContent":[".selection {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: var(--white);\n\n    .row2 {\n        display: flex;\n        align-items: center;   \n    }\n\n    .image {\n        border: .1vmin solid var(--white);\n        margin: 0 3vmin;\n        padding: 10vmin 1vmin;\n    }\n\n    .options {\n        display: flex;\n    }\n\n    .options p:hover {\n        background-color: var(--black);\n        cursor: pointer;\n    }\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"selection": `yhliLPA2d6dKJlSzQJaE`,
	"row2": `lDmEW1wOYmNRO8xUQ3e0`,
	"image": `nJMVFxvPCF4bNfBTrdhU`,
	"options": `wKiEnfLpMmagB1DCY7EU`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/GamePage/GamePage.module.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/GamePage/GamePage.module.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.CgjxyfEdobTkp_s1g1uU {
  display: flex;
  flex-direction: column;
  height: 90vh;
}`, "",{"version":3,"sources":["webpack://./src/pages/HomePage/HomePage.module.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,YAAA;AACJ","sourcesContent":[".homePage {\n    display: flex;\n    flex-direction: column;\n    height: 90vh;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"homePage": `CgjxyfEdobTkp_s1g1uU`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/GameArea/GameArea.module.scss":
/*!******************************************************!*\
  !*** ./src/components/GameArea/GameArea.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_GameArea_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./GameArea.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/GameArea/GameArea.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_GameArea_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_GameArea_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_GameArea_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_GameArea_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/HoverDisplayArea/HoverDisplayArea.module.scss":
/*!**********************************************************************!*\
  !*** ./src/components/HoverDisplayArea/HoverDisplayArea.module.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HoverDisplayArea_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./HoverDisplayArea.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/HoverDisplayArea/HoverDisplayArea.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HoverDisplayArea_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HoverDisplayArea_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HoverDisplayArea_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HoverDisplayArea_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/InvestigatorMenuInvestigator/InvestigatorMenuInvestigator.module.scss":
/*!**********************************************************************************************!*\
  !*** ./src/components/InvestigatorMenuInvestigator/InvestigatorMenuInvestigator.module.scss ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_InvestigatorMenuInvestigator_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./InvestigatorMenuInvestigator.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/InvestigatorMenuInvestigator/InvestigatorMenuInvestigator.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_InvestigatorMenuInvestigator_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_InvestigatorMenuInvestigator_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_InvestigatorMenuInvestigator_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_InvestigatorMenuInvestigator_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/InvestigatorSelectionMenu/InvestigatorSelectionMenu.module.scss":
/*!****************************************************************************************!*\
  !*** ./src/components/InvestigatorSelectionMenu/InvestigatorSelectionMenu.module.scss ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_InvestigatorSelectionMenu_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./InvestigatorSelectionMenu.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/InvestigatorSelectionMenu/InvestigatorSelectionMenu.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_InvestigatorSelectionMenu_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_InvestigatorSelectionMenu_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_InvestigatorSelectionMenu_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_InvestigatorSelectionMenu_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/Map/Map.module.scss":
/*!********************************************!*\
  !*** ./src/components/Map/Map.module.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Map_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./Map.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/Map/Map.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Map_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Map_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Map_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_Map_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/NavBar/NavBar.module.scss":
/*!**************************************************!*\
  !*** ./src/components/NavBar/NavBar.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./NavBar.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/NavBar/NavBar.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/PlayButton/PlayButton.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/PlayButton/PlayButton.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_PlayButton_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./PlayButton.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/PlayButton/PlayButton.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_PlayButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_PlayButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_PlayButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_PlayButton_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ScenarioMenuScenario/ScenarioMenuScenario.module.scss":
/*!******************************************************************************!*\
  !*** ./src/components/ScenarioMenuScenario/ScenarioMenuScenario.module.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ScenarioMenuScenario_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ScenarioMenuScenario.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ScenarioMenuScenario/ScenarioMenuScenario.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ScenarioMenuScenario_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ScenarioMenuScenario_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ScenarioMenuScenario_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ScenarioMenuScenario_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/ScenarioSelectionMenu/ScenarioSelectionMenu.module.scss":
/*!********************************************************************************!*\
  !*** ./src/components/ScenarioSelectionMenu/ScenarioSelectionMenu.module.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ScenarioSelectionMenu_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./ScenarioSelectionMenu.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/ScenarioSelectionMenu/ScenarioSelectionMenu.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ScenarioSelectionMenu_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ScenarioSelectionMenu_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ScenarioSelectionMenu_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ScenarioSelectionMenu_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/SelectionArea/SelectionArea.module.scss":
/*!****************************************************************!*\
  !*** ./src/components/SelectionArea/SelectionArea.module.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SelectionArea_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./SelectionArea.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/SelectionArea/SelectionArea.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SelectionArea_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SelectionArea_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SelectionArea_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_SelectionArea_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/StartingCardSelection/StartingCardSelection.module.scss":
/*!********************************************************************************!*\
  !*** ./src/components/StartingCardSelection/StartingCardSelection.module.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_StartingCardSelection_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./StartingCardSelection.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/components/StartingCardSelection/StartingCardSelection.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_StartingCardSelection_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_StartingCardSelection_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_StartingCardSelection_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_StartingCardSelection_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/GamePage/GamePage.module.scss":
/*!*************************************************!*\
  !*** ./src/pages/GamePage/GamePage.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_GamePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./GamePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/GamePage/GamePage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_GamePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_GamePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_GamePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_GamePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/HomePage/HomePage.module.scss":
/*!*************************************************!*\
  !*** ./src/pages/HomePage/HomePage.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./HomePage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/pages/HomePage/HomePage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"App": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkarkham_horror_board_game_3e"] = self["webpackChunkarkham_horror_board_game_3e"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-354ecd"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=App.25b164a20212c7778902bddc34c1e7a3.js.map