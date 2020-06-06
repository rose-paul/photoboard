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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Modal.tsx":
/*!**********************************!*\
  !*** ./src/components/Modal.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Modal = (props) => {
    return (React.createElement("div", { className: "modal-background", onClick: () => props.data.updateModal(null, null) },
        React.createElement("div", { className: "modal", onClick: e => e.stopPropagation() },
            React.createElement("img", { src: props.data.path, style: { objectFit: 'contain' } }),
            React.createElement("caption", null,
                React.createElement("p", null, props.data.description)))));
};
exports.default = Modal;


/***/ }),

/***/ "./src/components/PhotoBoard.tsx":
/*!***************************************!*\
  !*** ./src/components/PhotoBoard.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoBoard = void 0;
const React = __webpack_require__(/*! react */ "react");
const PhotoCard_1 = __webpack_require__(/*! ./PhotoCard */ "./src/components/PhotoCard.tsx");
const Modal_1 = __webpack_require__(/*! ./Modal */ "./src/components/Modal.tsx");
// var boardStyle = {
//     display: "flex",
//     flexWrap: "wrap",
//     height: "inherit",
//     width: 90 + "%",
//     border: "1px solid red",
//     backgroundColor: "purple"
// }
exports.PhotoBoard = (props) => {
    const [modal, showModal] = React.useState(null);
    function updateModal(path, description) {
        if (!path && !description) {
            showModal(null);
            return;
        }
        const data = {
            path,
            description,
            updateModal
        };
        showModal(React.createElement(Modal_1.default, { data: data }));
    }
    return (React.createElement("div", { className: "wrapper" },
        modal,
        React.createElement("div", { className: "board" }, props.photoList.map(image => {
            const metadata = { path: image, description: "none", showModal: updateModal };
            return React.createElement(PhotoCard_1.default, { metadata: metadata });
        }))));
};
exports.default = exports.PhotoBoard;


/***/ }),

/***/ "./src/components/PhotoCard.tsx":
/*!**************************************!*\
  !*** ./src/components/PhotoCard.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
// var photoStyle = {
//     maxWidth: 500 + "px",
//     objectFit: "fill",
// }
const PhotoCard = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("img", { src: props.metadata.path, alt: props.metadata.description, className: "photo", onClick: () => props.metadata.showModal(props.metadata.path, props.metadata.description) })));
};
exports.default = PhotoCard;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
const PhotoBoard_1 = __webpack_require__(/*! ./components/PhotoBoard */ "./src/components/PhotoBoard.tsx");
document.addEventListener('DOMContentLoaded', () => {
    const photoList = [
        "../photos/BumperCars.svg",
        "../photos/Chernobyl_Lenin.svg",
        "../photos/ChernobylRadar.svg",
        "../photos/ChildrenWard.svg",
        "../photos/Hospital_Gynecology.svg",
        "../photos/Kiryak_Hide_cropped.svg",
        "../photos/Memorial911.svg",
        "../photos/Milkovo_BusStop.svg",
        "../photos/ParentsCorner.svg",
        "../photos/Reindeer1_Tongue.svg",
        "../photos/Riverdale_Subway.svg",
        "../photos/Smoking.svg",
        "../photos/SportComplex_Court.svg",
        "../photos/SportComplex2.svg",
        "../photos/SugarLoaf_TennisCourt.svg",
        "../photos/BrooklynBrown.jpg"
    ];
    ReactDOM.render(React.createElement(PhotoBoard_1.PhotoBoard, { photoList: photoList }), document.getElementById("root"));
});


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map