/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar _ReactRouterDOM = ReactRouterDOM,\n    HashRouter = _ReactRouterDOM.HashRouter,\n    Link = _ReactRouterDOM.Link,\n    NavLink = _ReactRouterDOM.NavLink,\n    Route = _ReactRouterDOM.Route,\n    Switch = _ReactRouterDOM.Switch;\n\nvar People = function People(_ref) {\n  var people = _ref.people;\n  return React.createElement(\"ul\", null, people.map(function (person) {\n    return React.createElement(\"li\", {\n      key: person.id\n    }, person.name);\n  }));\n};\n\nvar Places = function Places(_ref2) {\n  var places = _ref2.places;\n  return React.createElement(\"ul\", null, places.map(function (place) {\n    return React.createElement(\"li\", {\n      key: place.id\n    }, place.name);\n  }));\n};\n\nvar Things = function Things(_ref3) {\n  var things = _ref3.things;\n  return React.createElement(\"ul\", null, things.map(function (thing) {\n    return React.createElement(\"li\", {\n      key: thing.id\n    }, thing.name);\n  }));\n};\n\nvar Nav = function Nav(_ref4) {\n  var people = _ref4.people,\n      places = _ref4.places,\n      things = _ref4.things;\n  var links = [{\n    text: 'People',\n    to: '/people',\n    count: people.length\n  }, {\n    text: 'Places',\n    to: '/places',\n    count: places.length\n  }, {\n    text: 'Things',\n    to: '/things',\n    count: things.length\n  }];\n  return React.createElement(\"nav\", null, links.map(function (link) {\n    return React.createElement(NavLink, {\n      key: link.text,\n      to: link.to\n    }, link.text);\n  }));\n};\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));\n    _this.state = {\n      people: [],\n      places: [],\n      things: []\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var urls, _ref5, _ref6, people, places, things;\n\n      return regeneratorRuntime.async(function componentDidMount$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              urls = ['/api/people', '/api/places', '/api/things'];\n              _context.next = 3;\n              return regeneratorRuntime.awrap(Promise.all(urls.map(function (url) {\n                return axios.get(url).then(function (response) {\n                  return response.data;\n                });\n              })));\n\n            case 3:\n              _ref5 = _context.sent;\n              _ref6 = _slicedToArray(_ref5, 3);\n              people = _ref6[0];\n              places = _ref6[1];\n              things = _ref6[2];\n              this.setState({\n                people: people,\n                places: places,\n                things: things\n              });\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, null, this);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(HashRouter, null, React.createElement(Route, {\n        render: function render() {\n          return React.createElement(Nav, _this2.state);\n        }\n      }), React.createElement(\"div\", {\n        className: \"container\"\n      }, React.createElement(\"h1\", null, \"Acme Nouns\"), React.createElement(Route, {\n        path: \"/people\",\n        render: function render() {\n          return React.createElement(People, _this2.state);\n        }\n      }), React.createElement(Route, {\n        path: \"/places\",\n        render: function render() {\n          return React.createElement(Places, _this2.state);\n        }\n      }), React.createElement(Route, {\n        path: \"/things\",\n        render: function render() {\n          return React.createElement(Things, _this2.state);\n        }\n      })));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.querySelector('#root'));\n\n//# sourceURL=webpack:///./client/index.js?");

/***/ })

/******/ });