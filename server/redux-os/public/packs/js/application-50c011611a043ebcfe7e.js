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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
// alert("")
// alert('')
Rails = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
Rails.start();

__webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js").start();

__webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js").start();

__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'channels'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())); // require("chartkick")
// require("chart.js")
// require("chartkick")


__webpack_require__(/*! chartkick */ "./node_modules/chartkick/dist/chartkick.js").use(__webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js"));

document.addEventListener("turbolinks:load", function () {
  $('[data-toggle="popover"]').popover();
  var entityValueMarking = document.getElementById('entity-value-marking');
  document.querySelectorAll('form[action="/wit_ai_parse_model_examples"]').forEach(function (form) {
    form.addEventListener('ajax:before', function (e) {
      if (form.dataset.isComplete !== 'true') {
        e.preventDefault();
        entityValueMarking.style.display = 'block';
        alert('Pls select the text that should be the extracted value for this property.');

        var onFinalSelectionChange = function onFinalSelectionChange() {
          var selection = document.getSelection();
          var isConfirmed = confirm('Confirm this property value? ' + selection);

          if (!isConfirmed) {
            return;
          }

          form.querySelector('input[name="wit_ai_parse_model_example[entity_value]"]').value = selection;
          form.querySelector('input[name="wit_ai_parse_model_example[parsable_resource_entity_value_start_index]"]').value = selection.baseNode.parentElement.dataset.index;
          form.querySelector('input[name="wit_ai_parse_model_example[parsable_resource_entity_value_end_index]"]').value = selection.extentNode.parentElement.dataset.index;
          form.dataset.isComplete = 'true';
          Rails.fire(form, 'submit');
        };

        var lastTimeStamp = 0;
        document.addEventListener('selectionchange', function (e) {
          setTimeout(function () {
            if (e.timeStamp === lastTimeStamp) {
              onFinalSelectionChange();
            }
          }, 1000);
          lastTimeStamp = e.timeStamp;
        });
      }
    });
  });
}); // Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true
// // import and load opal ruby files
// import init_app from 'opal_loader.rb';
// init_app();
// Opal.load('opal_loader');

__webpack_require__(/*! trix */ "./node_modules/trix/dist/trix.js");

__webpack_require__(/*! @rails/actiontext */ "./node_modules/@rails/actiontext/app/javascript/actiontext/index.js");

/***/ }),

/***/ "./node_modules/@rails/actiontext/app/javascript/actiontext/attachment_upload.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@rails/actiontext/app/javascript/actiontext/attachment_upload.js ***!
  \***************************************************************************************/
/*! exports provided: AttachmentUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentUpload", function() { return AttachmentUpload; });
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_activestorage__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var AttachmentUpload =
/*#__PURE__*/
function () {
  function AttachmentUpload(attachment, element) {
    _classCallCheck(this, AttachmentUpload);

    this.attachment = attachment;
    this.element = element;
    this.directUpload = new _rails_activestorage__WEBPACK_IMPORTED_MODULE_0__["DirectUpload"](attachment.file, this.directUploadUrl, this);
  }

  _createClass(AttachmentUpload, [{
    key: "start",
    value: function start() {
      this.directUpload.create(this.directUploadDidComplete.bind(this));
    }
  }, {
    key: "directUploadWillStoreFileWithXHR",
    value: function directUploadWillStoreFileWithXHR(xhr) {
      var _this = this;

      xhr.upload.addEventListener("progress", function (event) {
        var progress = event.loaded / event.total * 100;

        _this.attachment.setUploadProgress(progress);
      });
    }
  }, {
    key: "directUploadDidComplete",
    value: function directUploadDidComplete(error, attributes) {
      if (error) {
        throw new Error("Direct upload failed: ".concat(error));
      }

      this.attachment.setAttributes({
        sgid: attributes.attachable_sgid,
        url: this.createBlobUrl(attributes.signed_id, attributes.filename)
      });
    }
  }, {
    key: "createBlobUrl",
    value: function createBlobUrl(signedId, filename) {
      return this.blobUrlTemplate.replace(":signed_id", signedId).replace(":filename", encodeURIComponent(filename));
    }
  }, {
    key: "directUploadUrl",
    get: function get() {
      return this.element.dataset.directUploadUrl;
    }
  }, {
    key: "blobUrlTemplate",
    get: function get() {
      return this.element.dataset.blobUrlTemplate;
    }
  }]);

  return AttachmentUpload;
}();

/***/ }),

/***/ "./node_modules/@rails/actiontext/app/javascript/actiontext/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@rails/actiontext/app/javascript/actiontext/index.js ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attachment_upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attachment_upload */ "./node_modules/@rails/actiontext/app/javascript/actiontext/attachment_upload.js");

addEventListener("trix-attachment-add", function (event) {
  var attachment = event.attachment,
      target = event.target;

  if (attachment.file) {
    var upload = new _attachment_upload__WEBPACK_IMPORTED_MODULE_0__["AttachmentUpload"](attachment, target);
    upload.start();
  }
});

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }

        return md5blks;
      }

      function md5blk_array(a) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }

        return md5blks;
      }

      function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }

        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function rhex(n) {
        var s = "",
            j;

        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }

        return s;
      }

      function hex(x) {
        var i;

        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }

        return x.join("");
      }

      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;

            if (val < 0) {
              return Math.max(val + length, 0);
            }

            return Math.min(val, length);
          }

          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;

            if (to !== undefined) {
              end = clamp(to, length);
            }

            if (begin > end) {
              return new ArrayBuffer(0);
            }

            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }

      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }

        return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;

        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
      }

      function SparkMD5() {
        this.reset();
      }

      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };

      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);
        return this;
      };

      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };

      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };

      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };

      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(this._hash, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };

      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };

      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };

      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
    });
  });

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);

    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }

    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);

        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();

  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');

    if (element) {
      return element.getAttribute("content");
    }
  }

  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }

  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    return root.querySelector(selector);
  }

  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};

    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }

    return event;
  }

  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }

  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;

      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type,
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");

      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};

        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }

        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
            responseType = _xhr.responseType,
            response = _xhr.response;

        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();

  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;

      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";

      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
            status = _xhr.status,
            response = _xhr.response;

        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();

  var id = 0;

  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }

    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }

          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();

  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }

      return object[methodName].apply(object, messages);
    }
  }

  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }

    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);

            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }

          _this.dispatch("end");

          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;

        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });

        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;

        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();

  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }

    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var controllers = this.createDirectUploadControllers();

        var startNextController = function startNextController() {
          var controller = controllers.shift();

          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);

                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();

            _this.dispatch("end");
          }
        };

        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();

  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;

  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }

  function didClick(event) {
    var target = event.target;

    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }

  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }

  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }

  function handleFormSubmissionEvent(event) {
    var form = event.target;

    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }

    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;

    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);

        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }

  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

    if (button) {
      var _button = button,
          disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }

    submitButtonsByForm["delete"](form);
  }

  function disable(input) {
    input.disabled = true;
  }

  function enable(input) {
    input.disabled = false;
  }

  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }

  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/master/actionview/app/assets/javascripts
Released under the MIT license
 */
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        }

        CSRFProtection(xhr);
        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function processResponse(response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (input.closest('fieldset[disabled]')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function disableLinkElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function disableFormElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/chartkick/dist/chartkick.js":
/*!**************************************************!*\
  !*** ./node_modules/chartkick/dist/chartkick.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * Chartkick.js
 * Create beautiful charts with one line of JavaScript
 * https://github.com/ankane/chartkick.js
 * v3.1.1
 * MIT License
 */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function () {
  'use strict';

  function isArray(variable) {
    return Object.prototype.toString.call(variable) === "[object Array]";
  }

  function isFunction(variable) {
    return variable instanceof Function;
  }

  function isPlainObject(variable) {
    return Object.prototype.toString.call(variable) === "[object Object]";
  } // https://github.com/madrobby/zepto/blob/master/src/zepto.js


  function extend(target, source) {
    var key;

    for (key in source) {
      if (isPlainObject(source[key]) || isArray(source[key])) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
          target[key] = {};
        }

        if (isArray(source[key]) && !isArray(target[key])) {
          target[key] = [];
        }

        extend(target[key], source[key]);
      } else if (source[key] !== undefined) {
        target[key] = source[key];
      }
    }
  }

  function merge(obj1, obj2) {
    var target = {};
    extend(target, obj1);
    extend(target, obj2);
    return target;
  }

  var DATE_PATTERN = /^(\d\d\d\d)(-)?(\d\d)(-)?(\d\d)$/i; // https://github.com/Do/iso8601.js

  var ISO8601_PATTERN = /(\d\d\d\d)(-)?(\d\d)(-)?(\d\d)(T)?(\d\d)(:)?(\d\d)?(:)?(\d\d)?([.,]\d+)?($|Z|([+-])(\d\d)(:)?(\d\d)?)/i;
  var DECIMAL_SEPARATOR = String(1.5).charAt(1);

  function parseISO8601(input) {
    var day, hour, matches, milliseconds, minutes, month, offset, result, seconds, type, year;
    type = Object.prototype.toString.call(input);

    if (type === "[object Date]") {
      return input;
    }

    if (type !== "[object String]") {
      return;
    }

    matches = input.match(ISO8601_PATTERN);

    if (matches) {
      year = parseInt(matches[1], 10);
      month = parseInt(matches[3], 10) - 1;
      day = parseInt(matches[5], 10);
      hour = parseInt(matches[7], 10);
      minutes = matches[9] ? parseInt(matches[9], 10) : 0;
      seconds = matches[11] ? parseInt(matches[11], 10) : 0;
      milliseconds = matches[12] ? parseFloat(DECIMAL_SEPARATOR + matches[12].slice(1)) * 1000 : 0;
      result = Date.UTC(year, month, day, hour, minutes, seconds, milliseconds);

      if (matches[13] && matches[14]) {
        offset = matches[15] * 60;

        if (matches[17]) {
          offset += parseInt(matches[17], 10);
        }

        offset *= matches[14] === "-" ? -1 : 1;
        result -= offset * 60 * 1000;
      }

      return new Date(result);
    }
  } // end iso8601.js


  function negativeValues(series) {
    var i, j, data;

    for (i = 0; i < series.length; i++) {
      data = series[i].data;

      for (j = 0; j < data.length; j++) {
        if (data[j][1] < 0) {
          return true;
        }
      }
    }

    return false;
  }

  function toStr(n) {
    return "" + n;
  }

  function toFloat(n) {
    return parseFloat(n);
  }

  function toDate(n) {
    var matches, year, month, day;

    if (_typeof(n) !== "object") {
      if (typeof n === "number") {
        n = new Date(n * 1000); // ms
      } else {
        n = toStr(n);

        if (matches = n.match(DATE_PATTERN)) {
          year = parseInt(matches[1], 10);
          month = parseInt(matches[3], 10) - 1;
          day = parseInt(matches[5], 10);
          return new Date(year, month, day);
        } else {
          // str
          // try our best to get the str into iso8601
          // TODO be smarter about this
          var str = n.replace(/ /, "T").replace(" ", "").replace("UTC", "Z");
          n = parseISO8601(str) || new Date(n);
        }
      }
    }

    return n;
  }

  function toArr(n) {
    if (!isArray(n)) {
      var arr = [],
          i;

      for (i in n) {
        if (n.hasOwnProperty(i)) {
          arr.push([i, n[i]]);
        }
      }

      n = arr;
    }

    return n;
  }

  function jsOptionsFunc(defaultOptions, hideLegend, setTitle, setMin, setMax, setStacked, setXtitle, setYtitle) {
    return function (chart, opts, chartOptions) {
      var series = chart.data;
      var options = merge({}, defaultOptions);
      options = merge(options, chartOptions || {});

      if (chart.hideLegend || "legend" in opts) {
        hideLegend(options, opts.legend, chart.hideLegend);
      }

      if (opts.title) {
        setTitle(options, opts.title);
      } // min


      if ("min" in opts) {
        setMin(options, opts.min);
      } else if (!negativeValues(series)) {
        setMin(options, 0);
      } // max


      if (opts.max) {
        setMax(options, opts.max);
      }

      if ("stacked" in opts) {
        setStacked(options, opts.stacked);
      }

      if (opts.colors) {
        options.colors = opts.colors;
      }

      if (opts.xtitle) {
        setXtitle(options, opts.xtitle);
      }

      if (opts.ytitle) {
        setYtitle(options, opts.ytitle);
      } // merge library last


      options = merge(options, opts.library || {});
      return options;
    };
  }

  function sortByTime(a, b) {
    return a[0].getTime() - b[0].getTime();
  }

  function sortByNumberSeries(a, b) {
    return a[0] - b[0];
  }

  function sortByNumber(a, b) {
    return a - b;
  }

  function isMinute(d) {
    return d.getMilliseconds() === 0 && d.getSeconds() === 0;
  }

  function isHour(d) {
    return isMinute(d) && d.getMinutes() === 0;
  }

  function isDay(d) {
    return isHour(d) && d.getHours() === 0;
  }

  function isWeek(d, dayOfWeek) {
    return isDay(d) && d.getDay() === dayOfWeek;
  }

  function isMonth(d) {
    return isDay(d) && d.getDate() === 1;
  }

  function isYear(d) {
    return isMonth(d) && d.getMonth() === 0;
  }

  function isDate(obj) {
    return !isNaN(toDate(obj)) && toStr(obj).length >= 6;
  }

  function isNumber(obj) {
    return typeof obj === "number";
  }

  function formatValue(pre, value, options) {
    pre = pre || "";

    if (options.prefix) {
      if (value < 0) {
        value = value * -1;
        pre += "-";
      }

      pre += options.prefix;
    }

    if (options.thousands || options.decimal) {
      value = toStr(value);
      var parts = value.split(".");
      value = parts[0];

      if (options.thousands) {
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, options.thousands);
      }

      if (parts.length > 1) {
        value += (options.decimal || ".") + parts[1];
      }
    }

    return pre + value + (options.suffix || "");
  }

  function seriesOption(chart, series, option) {
    if (option in series) {
      return series[option];
    } else if (option in chart.options) {
      return chart.options[option];
    }

    return null;
  }

  function allZeros(data) {
    var i, j, d;

    for (i = 0; i < data.length; i++) {
      d = data[i].data;

      for (j = 0; j < d.length; j++) {
        if (d[j][1] != 0) {
          return false;
        }
      }
    }

    return true;
  }

  var baseOptions = {
    maintainAspectRatio: false,
    animation: false,
    tooltips: {
      displayColors: false,
      callbacks: {}
    },
    legend: {},
    title: {
      fontSize: 20,
      fontColor: "#333"
    }
  };
  var defaultOptions = {
    scales: {
      yAxes: [{
        ticks: {
          maxTicksLimit: 4
        },
        scaleLabel: {
          fontSize: 16,
          // fontStyle: "bold",
          fontColor: "#333"
        }
      }],
      xAxes: [{
        gridLines: {
          drawOnChartArea: false
        },
        scaleLabel: {
          fontSize: 16,
          // fontStyle: "bold",
          fontColor: "#333"
        },
        time: {},
        ticks: {}
      }]
    }
  }; // http://there4.io/2012/05/02/google-chart-color-list/

  var defaultColors = ["#3366CC", "#DC3912", "#FF9900", "#109618", "#990099", "#3B3EAC", "#0099C6", "#DD4477", "#66AA00", "#B82E2E", "#316395", "#994499", "#22AA99", "#AAAA11", "#6633CC", "#E67300", "#8B0707", "#329262", "#5574A6", "#651067"];

  var hideLegend = function hideLegend(options, legend, _hideLegend) {
    if (legend !== undefined) {
      options.legend.display = !!legend;

      if (legend && legend !== true) {
        options.legend.position = legend;
      }
    } else if (_hideLegend) {
      options.legend.display = false;
    }
  };

  var setTitle = function setTitle(options, title) {
    options.title.display = true;
    options.title.text = title;
  };

  var setMin = function setMin(options, min) {
    if (min !== null) {
      options.scales.yAxes[0].ticks.min = toFloat(min);
    }
  };

  var setMax = function setMax(options, max) {
    options.scales.yAxes[0].ticks.max = toFloat(max);
  };

  var setBarMin = function setBarMin(options, min) {
    if (min !== null) {
      options.scales.xAxes[0].ticks.min = toFloat(min);
    }
  };

  var setBarMax = function setBarMax(options, max) {
    options.scales.xAxes[0].ticks.max = toFloat(max);
  };

  var setStacked = function setStacked(options, stacked) {
    options.scales.xAxes[0].stacked = !!stacked;
    options.scales.yAxes[0].stacked = !!stacked;
  };

  var setXtitle = function setXtitle(options, title) {
    options.scales.xAxes[0].scaleLabel.display = true;
    options.scales.xAxes[0].scaleLabel.labelString = title;
  };

  var setYtitle = function setYtitle(options, title) {
    options.scales.yAxes[0].scaleLabel.display = true;
    options.scales.yAxes[0].scaleLabel.labelString = title;
  }; // https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb


  var addOpacity = function addOpacity(hex, opacity) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? "rgba(" + parseInt(result[1], 16) + ", " + parseInt(result[2], 16) + ", " + parseInt(result[3], 16) + ", " + opacity + ")" : hex;
  }; // check if not null or undefined
  // https://stackoverflow.com/a/27757708/1177228


  var notnull = function notnull(x) {
    return x != null;
  };

  var setLabelSize = function setLabelSize(chart, data, options) {
    var maxLabelSize = Math.ceil(chart.element.offsetWidth / 4.0 / data.labels.length);

    if (maxLabelSize > 25) {
      maxLabelSize = 25;
    } else if (maxLabelSize < 10) {
      maxLabelSize = 10;
    }

    if (!options.scales.xAxes[0].ticks.callback) {
      options.scales.xAxes[0].ticks.callback = function (value) {
        value = toStr(value);

        if (value.length > maxLabelSize) {
          return value.substring(0, maxLabelSize - 2) + "...";
        } else {
          return value;
        }
      };
    }
  };

  var setFormatOptions = function setFormatOptions(chart, options, chartType) {
    var formatOptions = {
      prefix: chart.options.prefix,
      suffix: chart.options.suffix,
      thousands: chart.options.thousands,
      decimal: chart.options.decimal
    };

    if (chartType !== "pie") {
      var myAxes = options.scales.yAxes;

      if (chartType === "bar") {
        myAxes = options.scales.xAxes;
      }

      if (!myAxes[0].ticks.callback) {
        myAxes[0].ticks.callback = function (value) {
          return formatValue("", value, formatOptions);
        };
      }
    }

    if (!options.tooltips.callbacks.label) {
      if (chartType === "scatter") {
        options.tooltips.callbacks.label = function (item, data) {
          var label = data.datasets[item.datasetIndex].label || '';

          if (label) {
            label += ': ';
          }

          return label + '(' + item.xLabel + ', ' + item.yLabel + ')';
        };
      } else if (chartType === "bubble") {
        options.tooltips.callbacks.label = function (item, data) {
          var label = data.datasets[item.datasetIndex].label || '';

          if (label) {
            label += ': ';
          }

          var dataPoint = data.datasets[item.datasetIndex].data[item.index];
          return label + '(' + item.xLabel + ', ' + item.yLabel + ', ' + dataPoint.v + ')';
        };
      } else if (chartType === "pie") {
        // need to use separate label for pie charts
        options.tooltips.callbacks.label = function (tooltipItem, data) {
          var dataLabel = data.labels[tooltipItem.index];
          var value = ': ';

          if (isArray(dataLabel)) {
            // show value on first line of multiline label
            // need to clone because we are changing the value
            dataLabel = dataLabel.slice();
            dataLabel[0] += value;
          } else {
            dataLabel += value;
          }

          return formatValue(dataLabel, data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index], formatOptions);
        };
      } else {
        var valueLabel = chartType === "bar" ? "xLabel" : "yLabel";

        options.tooltips.callbacks.label = function (tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || '';

          if (label) {
            label += ': ';
          }

          return formatValue(label, tooltipItem[valueLabel], formatOptions);
        };
      }
    }
  };

  var jsOptions = jsOptionsFunc(merge(baseOptions, defaultOptions), hideLegend, setTitle, setMin, setMax, setStacked, setXtitle, setYtitle);

  var createDataTable = function createDataTable(chart, options, chartType) {
    var datasets = [];
    var labels = [];
    var colors = chart.options.colors || defaultColors;
    var day = true;
    var week = true;
    var dayOfWeek;
    var month = true;
    var year = true;
    var hour = true;
    var minute = true;
    var series = chart.data;
    var max = 0;

    if (chartType === "bubble") {
      for (var i$1 = 0; i$1 < series.length; i$1++) {
        var s$1 = series[i$1];

        for (var j$1 = 0; j$1 < s$1.data.length; j$1++) {
          if (s$1.data[j$1][2] > max) {
            max = s$1.data[j$1][2];
          }
        }
      }
    }

    var i,
        j,
        s,
        d,
        key,
        rows = [],
        rows2 = [];

    if (chartType === "bar" || chartType === "column" || chart.xtype !== "number" && chart.xtype !== "bubble") {
      var sortedLabels = [];

      for (i = 0; i < series.length; i++) {
        s = series[i];

        for (j = 0; j < s.data.length; j++) {
          d = s.data[j];
          key = chart.xtype == "datetime" ? d[0].getTime() : d[0];

          if (!rows[key]) {
            rows[key] = new Array(series.length);
          }

          rows[key][i] = toFloat(d[1]);

          if (sortedLabels.indexOf(key) === -1) {
            sortedLabels.push(key);
          }
        }
      }

      if (chart.xtype === "datetime" || chart.xtype === "number") {
        sortedLabels.sort(sortByNumber);
      }

      for (j = 0; j < series.length; j++) {
        rows2.push([]);
      }

      var value;
      var k;

      for (k = 0; k < sortedLabels.length; k++) {
        i = sortedLabels[k];

        if (chart.xtype === "datetime") {
          value = new Date(toFloat(i)); // TODO make this efficient

          day = day && isDay(value);

          if (!dayOfWeek) {
            dayOfWeek = value.getDay();
          }

          week = week && isWeek(value, dayOfWeek);
          month = month && isMonth(value);
          year = year && isYear(value);
          hour = hour && isHour(value);
          minute = minute && isMinute(value);
        } else {
          value = i;
        }

        labels.push(value);

        for (j = 0; j < series.length; j++) {
          // Chart.js doesn't like undefined
          rows2[j].push(rows[i][j] === undefined ? null : rows[i][j]);
        }
      }
    } else {
      for (var i$2 = 0; i$2 < series.length; i$2++) {
        var s$2 = series[i$2];
        var d$1 = [];

        for (var j$2 = 0; j$2 < s$2.data.length; j$2++) {
          var point = {
            x: toFloat(s$2.data[j$2][0]),
            y: toFloat(s$2.data[j$2][1])
          };

          if (chartType === "bubble") {
            point.r = toFloat(s$2.data[j$2][2]) * 20 / max; // custom attribute, for tooltip

            point.v = s$2.data[j$2][2];
          }

          d$1.push(point);
        }

        rows2.push(d$1);
      }
    }

    for (i = 0; i < series.length; i++) {
      s = series[i];
      var color = s.color || colors[i];
      var backgroundColor = chartType !== "line" ? addOpacity(color, 0.5) : color;
      var dataset = {
        label: s.name || "",
        data: rows2[i],
        fill: chartType === "area",
        borderColor: color,
        backgroundColor: backgroundColor,
        pointBackgroundColor: color,
        borderWidth: 2,
        pointHoverBackgroundColor: color
      };

      if (s.stack) {
        dataset.stack = s.stack;
      }

      var curve = seriesOption(chart, s, "curve");

      if (curve === false) {
        dataset.lineTension = 0;
      }

      var points = seriesOption(chart, s, "points");

      if (points === false) {
        dataset.pointRadius = 0;
        dataset.pointHitRadius = 5;
      }

      dataset = merge(dataset, chart.options.dataset || {});
      dataset = merge(dataset, s.library || {});
      dataset = merge(dataset, s.dataset || {});
      datasets.push(dataset);
    }

    var xmin = chart.options.xmin;
    var xmax = chart.options.xmax;

    if (chart.xtype === "datetime") {
      if (notnull(xmin)) {
        options.scales.xAxes[0].time.min = toDate(xmin).getTime();
      }

      if (notnull(xmax)) {
        options.scales.xAxes[0].time.max = toDate(xmax).getTime();
      }
    } else if (chart.xtype === "number") {
      if (notnull(xmin)) {
        options.scales.xAxes[0].ticks.min = xmin;
      }

      if (notnull(xmax)) {
        options.scales.xAxes[0].ticks.max = xmax;
      }
    }

    if (chart.xtype === "datetime" && labels.length > 0) {
      var minTime = (notnull(xmin) ? toDate(xmin) : labels[0]).getTime();
      var maxTime = (notnull(xmax) ? toDate(xmax) : labels[0]).getTime();

      for (i = 1; i < labels.length; i++) {
        var value$1 = labels[i].getTime();

        if (value$1 < minTime) {
          minTime = value$1;
        }

        if (value$1 > maxTime) {
          maxTime = value$1;
        }
      }

      var timeDiff = (maxTime - minTime) / (86400 * 1000.0);

      if (!options.scales.xAxes[0].time.unit) {
        var step;

        if (year || timeDiff > 365 * 10) {
          options.scales.xAxes[0].time.unit = "year";
          step = 365;
        } else if (month || timeDiff > 30 * 10) {
          options.scales.xAxes[0].time.unit = "month";
          step = 30;
        } else if (day || timeDiff > 10) {
          options.scales.xAxes[0].time.unit = "day";
          step = 1;
        } else if (hour || timeDiff > 0.5) {
          options.scales.xAxes[0].time.displayFormats = {
            hour: "MMM D, h a"
          };
          options.scales.xAxes[0].time.unit = "hour";
          step = 1 / 24.0;
        } else if (minute) {
          options.scales.xAxes[0].time.displayFormats = {
            minute: "h:mm a"
          };
          options.scales.xAxes[0].time.unit = "minute";
          step = 1 / 24.0 / 60.0;
        }

        if (step && timeDiff > 0) {
          var unitStepSize = Math.ceil(timeDiff / step / (chart.element.offsetWidth / 100.0));

          if (week && step === 1) {
            unitStepSize = Math.ceil(unitStepSize / 7.0) * 7;
          }

          options.scales.xAxes[0].time.unitStepSize = unitStepSize;
        }
      }

      if (!options.scales.xAxes[0].time.tooltipFormat) {
        if (day) {
          options.scales.xAxes[0].time.tooltipFormat = "ll";
        } else if (hour) {
          options.scales.xAxes[0].time.tooltipFormat = "MMM D, h a";
        } else if (minute) {
          options.scales.xAxes[0].time.tooltipFormat = "h:mm a";
        }
      }
    }

    var data = {
      labels: labels,
      datasets: datasets
    };
    return data;
  };

  var defaultExport = function defaultExport(library) {
    this.name = "chartjs";
    this.library = library;
  };

  defaultExport.prototype.renderLineChart = function renderLineChart(chart, chartType) {
    var chartOptions = {}; // fix for https://github.com/chartjs/Chart.js/issues/2441

    if (!chart.options.max && allZeros(chart.data)) {
      chartOptions.max = 1;
    }

    var options = jsOptions(chart, merge(chartOptions, chart.options));
    setFormatOptions(chart, options, chartType);
    var data = createDataTable(chart, options, chartType || "line");

    if (chart.xtype === "number") {
      options.scales.xAxes[0].type = "linear";
      options.scales.xAxes[0].position = "bottom";
    } else {
      options.scales.xAxes[0].type = chart.xtype === "string" ? "category" : "time";
    }

    this.drawChart(chart, "line", data, options);
  };

  defaultExport.prototype.renderPieChart = function renderPieChart(chart) {
    var options = merge({}, baseOptions);

    if (chart.options.donut) {
      options.cutoutPercentage = 50;
    }

    if ("legend" in chart.options) {
      hideLegend(options, chart.options.legend);
    }

    if (chart.options.title) {
      setTitle(options, chart.options.title);
    }

    options = merge(options, chart.options.library || {});
    setFormatOptions(chart, options, "pie");
    var labels = [];
    var values = [];

    for (var i = 0; i < chart.data.length; i++) {
      var point = chart.data[i];
      labels.push(point[0]);
      values.push(point[1]);
    }

    var dataset = {
      data: values,
      backgroundColor: chart.options.colors || defaultColors
    };
    dataset = merge(dataset, chart.options.dataset || {});
    var data = {
      labels: labels,
      datasets: [dataset]
    };
    this.drawChart(chart, "pie", data, options);
  };

  defaultExport.prototype.renderColumnChart = function renderColumnChart(chart, chartType) {
    var options;

    if (chartType === "bar") {
      var barOptions = merge(baseOptions, defaultOptions);
      delete barOptions.scales.yAxes[0].ticks.maxTicksLimit;
      options = jsOptionsFunc(barOptions, hideLegend, setTitle, setBarMin, setBarMax, setStacked, setXtitle, setYtitle)(chart, chart.options);
    } else {
      options = jsOptions(chart, chart.options);
    }

    setFormatOptions(chart, options, chartType);
    var data = createDataTable(chart, options, "column");

    if (chartType !== "bar") {
      setLabelSize(chart, data, options);
    }

    this.drawChart(chart, chartType === "bar" ? "horizontalBar" : "bar", data, options);
  };

  defaultExport.prototype.renderAreaChart = function renderAreaChart(chart) {
    this.renderLineChart(chart, "area");
  };

  defaultExport.prototype.renderBarChart = function renderBarChart(chart) {
    this.renderColumnChart(chart, "bar");
  };

  defaultExport.prototype.renderScatterChart = function renderScatterChart(chart, chartType) {
    chartType = chartType || "scatter";
    var options = jsOptions(chart, chart.options);
    setFormatOptions(chart, options, chartType);

    if (!("showLines" in options)) {
      options.showLines = false;
    }

    var data = createDataTable(chart, options, chartType);
    options.scales.xAxes[0].type = "linear";
    options.scales.xAxes[0].position = "bottom";
    this.drawChart(chart, chartType, data, options);
  };

  defaultExport.prototype.renderBubbleChart = function renderBubbleChart(chart) {
    this.renderScatterChart(chart, "bubble");
  };

  defaultExport.prototype.destroy = function destroy(chart) {
    if (chart.chart) {
      chart.chart.destroy();
    }
  };

  defaultExport.prototype.drawChart = function drawChart(chart, type, data, options) {
    this.destroy(chart);
    var chartOptions = {
      type: type,
      data: data,
      options: options
    };

    if (chart.options.code) {
      window.console.log("new Chart(ctx, " + JSON.stringify(chartOptions) + ");");
    }

    chart.element.innerHTML = "<canvas></canvas>";
    var ctx = chart.element.getElementsByTagName("CANVAS")[0];
    chart.chart = new this.library(ctx, chartOptions);
  };

  var defaultOptions$1 = {
    chart: {},
    xAxis: {
      title: {
        text: null
      },
      labels: {
        style: {
          fontSize: "12px"
        }
      }
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {
        style: {
          fontSize: "12px"
        }
      }
    },
    title: {
      text: null
    },
    credits: {
      enabled: false
    },
    legend: {
      borderWidth: 0
    },
    tooltip: {
      style: {
        fontSize: "12px"
      }
    },
    plotOptions: {
      areaspline: {},
      series: {
        marker: {}
      }
    }
  };

  var hideLegend$1 = function hideLegend$1(options, legend, hideLegend) {
    if (legend !== undefined) {
      options.legend.enabled = !!legend;

      if (legend && legend !== true) {
        if (legend === "top" || legend === "bottom") {
          options.legend.verticalAlign = legend;
        } else {
          options.legend.layout = "vertical";
          options.legend.verticalAlign = "middle";
          options.legend.align = legend;
        }
      }
    } else if (hideLegend) {
      options.legend.enabled = false;
    }
  };

  var setTitle$1 = function setTitle$1(options, title) {
    options.title.text = title;
  };

  var setMin$1 = function setMin$1(options, min) {
    options.yAxis.min = min;
  };

  var setMax$1 = function setMax$1(options, max) {
    options.yAxis.max = max;
  };

  var setStacked$1 = function setStacked$1(options, stacked) {
    options.plotOptions.series.stacking = stacked ? stacked === true ? "normal" : stacked : null;
  };

  var setXtitle$1 = function setXtitle$1(options, title) {
    options.xAxis.title.text = title;
  };

  var setYtitle$1 = function setYtitle$1(options, title) {
    options.yAxis.title.text = title;
  };

  var jsOptions$1 = jsOptionsFunc(defaultOptions$1, hideLegend$1, setTitle$1, setMin$1, setMax$1, setStacked$1, setXtitle$1, setYtitle$1);

  var setFormatOptions$1 = function setFormatOptions$1(chart, options, chartType) {
    var formatOptions = {
      prefix: chart.options.prefix,
      suffix: chart.options.suffix,
      thousands: chart.options.thousands,
      decimal: chart.options.decimal
    };

    if (chartType !== "pie" && !options.yAxis.labels.formatter) {
      options.yAxis.labels.formatter = function () {
        return formatValue("", this.value, formatOptions);
      };
    }

    if (!options.tooltip.pointFormatter) {
      options.tooltip.pointFormatter = function () {
        return '<span style="color:' + this.color + "\">\u25CF</span> " + formatValue(this.series.name + ': <b>', this.y, formatOptions) + '</b><br/>';
      };
    }
  };

  var defaultExport$1 = function defaultExport(library) {
    this.name = "highcharts";
    this.library = library;
  };

  defaultExport$1.prototype.renderLineChart = function renderLineChart(chart, chartType) {
    chartType = chartType || "spline";
    var chartOptions = {};

    if (chartType === "areaspline") {
      chartOptions = {
        plotOptions: {
          areaspline: {
            stacking: "normal"
          },
          area: {
            stacking: "normal"
          },
          series: {
            marker: {
              enabled: false
            }
          }
        }
      };
    }

    if (chart.options.curve === false) {
      if (chartType === "areaspline") {
        chartType = "area";
      } else if (chartType === "spline") {
        chartType = "line";
      }
    }

    var options = jsOptions$1(chart, chart.options, chartOptions),
        data,
        i,
        j;
    options.xAxis.type = chart.xtype === "string" ? "category" : chart.xtype === "number" ? "linear" : "datetime";

    if (!options.chart.type) {
      options.chart.type = chartType;
    }

    setFormatOptions$1(chart, options, chartType);
    var series = chart.data;

    for (i = 0; i < series.length; i++) {
      series[i].name = series[i].name || "Value";
      data = series[i].data;

      if (chart.xtype === "datetime") {
        for (j = 0; j < data.length; j++) {
          data[j][0] = data[j][0].getTime();
        }
      }

      series[i].marker = {
        symbol: "circle"
      };

      if (chart.options.points === false) {
        series[i].marker.enabled = false;
      }
    }

    this.drawChart(chart, series, options);
  };

  defaultExport$1.prototype.renderScatterChart = function renderScatterChart(chart) {
    var options = jsOptions$1(chart, chart.options, {});
    options.chart.type = "scatter";
    this.drawChart(chart, chart.data, options);
  };

  defaultExport$1.prototype.renderPieChart = function renderPieChart(chart) {
    var chartOptions = merge(defaultOptions$1, {});

    if (chart.options.colors) {
      chartOptions.colors = chart.options.colors;
    }

    if (chart.options.donut) {
      chartOptions.plotOptions = {
        pie: {
          innerSize: "50%"
        }
      };
    }

    if ("legend" in chart.options) {
      hideLegend$1(chartOptions, chart.options.legend);
    }

    if (chart.options.title) {
      setTitle$1(chartOptions, chart.options.title);
    }

    var options = merge(chartOptions, chart.options.library || {});
    setFormatOptions$1(chart, options, "pie");
    var series = [{
      type: "pie",
      name: chart.options.label || "Value",
      data: chart.data
    }];
    this.drawChart(chart, series, options);
  };

  defaultExport$1.prototype.renderColumnChart = function renderColumnChart(chart, chartType) {
    chartType = chartType || "column";
    var series = chart.data;
    var options = jsOptions$1(chart, chart.options),
        i,
        j,
        s,
        d,
        rows = [],
        categories = [];
    options.chart.type = chartType;
    setFormatOptions$1(chart, options, chartType);

    for (i = 0; i < series.length; i++) {
      s = series[i];

      for (j = 0; j < s.data.length; j++) {
        d = s.data[j];

        if (!rows[d[0]]) {
          rows[d[0]] = new Array(series.length);
          categories.push(d[0]);
        }

        rows[d[0]][i] = d[1];
      }
    }

    if (chart.xtype === "number") {
      categories.sort(sortByNumber);
    }

    options.xAxis.categories = categories;
    var newSeries = [],
        d2;

    for (i = 0; i < series.length; i++) {
      d = [];

      for (j = 0; j < categories.length; j++) {
        d.push(rows[categories[j]][i] || 0);
      }

      d2 = {
        name: series[i].name || "Value",
        data: d
      };

      if (series[i].stack) {
        d2.stack = series[i].stack;
      }

      newSeries.push(d2);
    }

    this.drawChart(chart, newSeries, options);
  };

  defaultExport$1.prototype.renderBarChart = function renderBarChart(chart) {
    this.renderColumnChart(chart, "bar");
  };

  defaultExport$1.prototype.renderAreaChart = function renderAreaChart(chart) {
    this.renderLineChart(chart, "areaspline");
  };

  defaultExport$1.prototype.destroy = function destroy(chart) {
    if (chart.chart) {
      chart.chart.destroy();
    }
  };

  defaultExport$1.prototype.drawChart = function drawChart(chart, data, options) {
    this.destroy(chart);
    options.chart.renderTo = chart.element.id;
    options.series = data;

    if (chart.options.code) {
      window.console.log("new Highcharts.Chart(" + JSON.stringify(options) + ");");
    }

    chart.chart = new this.library.Chart(options);
  };

  var loaded = {};
  var callbacks = []; // Set chart options

  var defaultOptions$2 = {
    chartArea: {},
    fontName: "'Lucida Grande', 'Lucida Sans Unicode', Verdana, Arial, Helvetica, sans-serif",
    pointSize: 6,
    legend: {
      textStyle: {
        fontSize: 12,
        color: "#444"
      },
      alignment: "center",
      position: "right"
    },
    curveType: "function",
    hAxis: {
      textStyle: {
        color: "#666",
        fontSize: 12
      },
      titleTextStyle: {},
      gridlines: {
        color: "transparent"
      },
      baselineColor: "#ccc",
      viewWindow: {}
    },
    vAxis: {
      textStyle: {
        color: "#666",
        fontSize: 12
      },
      titleTextStyle: {},
      baselineColor: "#ccc",
      viewWindow: {}
    },
    tooltip: {
      textStyle: {
        color: "#666",
        fontSize: 12
      }
    }
  };

  var hideLegend$2 = function hideLegend$2(options, legend, hideLegend) {
    if (legend !== undefined) {
      var position;

      if (!legend) {
        position = "none";
      } else if (legend === true) {
        position = "right";
      } else {
        position = legend;
      }

      options.legend.position = position;
    } else if (hideLegend) {
      options.legend.position = "none";
    }
  };

  var setTitle$2 = function setTitle$2(options, title) {
    options.title = title;
    options.titleTextStyle = {
      color: "#333",
      fontSize: "20px"
    };
  };

  var setMin$2 = function setMin$2(options, min) {
    options.vAxis.viewWindow.min = min;
  };

  var setMax$2 = function setMax$2(options, max) {
    options.vAxis.viewWindow.max = max;
  };

  var setBarMin$1 = function setBarMin$1(options, min) {
    options.hAxis.viewWindow.min = min;
  };

  var setBarMax$1 = function setBarMax$1(options, max) {
    options.hAxis.viewWindow.max = max;
  };

  var setStacked$2 = function setStacked$2(options, stacked) {
    options.isStacked = stacked ? stacked : false;
  };

  var setXtitle$2 = function setXtitle$2(options, title) {
    options.hAxis.title = title;
    options.hAxis.titleTextStyle.italic = false;
  };

  var setYtitle$2 = function setYtitle$2(options, title) {
    options.vAxis.title = title;
    options.vAxis.titleTextStyle.italic = false;
  };

  var jsOptions$2 = jsOptionsFunc(defaultOptions$2, hideLegend$2, setTitle$2, setMin$2, setMax$2, setStacked$2, setXtitle$2, setYtitle$2);

  var resize = function resize(callback) {
    if (window.attachEvent) {
      window.attachEvent("onresize", callback);
    } else if (window.addEventListener) {
      window.addEventListener("resize", callback, true);
    }

    callback();
  };

  var defaultExport$2 = function defaultExport(library) {
    this.name = "google";
    this.library = library;
  };

  defaultExport$2.prototype.renderLineChart = function renderLineChart(chart) {
    var this$1 = this;
    this.waitForLoaded(chart, function () {
      var chartOptions = {};

      if (chart.options.curve === false) {
        chartOptions.curveType = "none";
      }

      if (chart.options.points === false) {
        chartOptions.pointSize = 0;
      }

      var options = jsOptions$2(chart, chart.options, chartOptions);
      var data = this$1.createDataTable(chart.data, chart.xtype);
      this$1.drawChart(chart, "LineChart", data, options);
    });
  };

  defaultExport$2.prototype.renderPieChart = function renderPieChart(chart) {
    var this$1 = this;
    this.waitForLoaded(chart, function () {
      var chartOptions = {
        chartArea: {
          top: "10%",
          height: "80%"
        },
        legend: {}
      };

      if (chart.options.colors) {
        chartOptions.colors = chart.options.colors;
      }

      if (chart.options.donut) {
        chartOptions.pieHole = 0.5;
      }

      if ("legend" in chart.options) {
        hideLegend$2(chartOptions, chart.options.legend);
      }

      if (chart.options.title) {
        setTitle$2(chartOptions, chart.options.title);
      }

      var options = merge(merge(defaultOptions$2, chartOptions), chart.options.library || {});
      var data = new this$1.library.visualization.DataTable();
      data.addColumn("string", "");
      data.addColumn("number", "Value");
      data.addRows(chart.data);
      this$1.drawChart(chart, "PieChart", data, options);
    });
  };

  defaultExport$2.prototype.renderColumnChart = function renderColumnChart(chart) {
    var this$1 = this;
    this.waitForLoaded(chart, function () {
      var options = jsOptions$2(chart, chart.options);
      var data = this$1.createDataTable(chart.data, chart.xtype);
      this$1.drawChart(chart, "ColumnChart", data, options);
    });
  };

  defaultExport$2.prototype.renderBarChart = function renderBarChart(chart) {
    var this$1 = this;
    this.waitForLoaded(chart, function () {
      var chartOptions = {
        hAxis: {
          gridlines: {
            color: "#ccc"
          }
        }
      };
      var options = jsOptionsFunc(defaultOptions$2, hideLegend$2, setTitle$2, setBarMin$1, setBarMax$1, setStacked$2, setXtitle$2, setYtitle$2)(chart, chart.options, chartOptions);
      var data = this$1.createDataTable(chart.data, chart.xtype);
      this$1.drawChart(chart, "BarChart", data, options);
    });
  };

  defaultExport$2.prototype.renderAreaChart = function renderAreaChart(chart) {
    var this$1 = this;
    this.waitForLoaded(chart, function () {
      var chartOptions = {
        isStacked: true,
        pointSize: 0,
        areaOpacity: 0.5
      };
      var options = jsOptions$2(chart, chart.options, chartOptions);
      var data = this$1.createDataTable(chart.data, chart.xtype);
      this$1.drawChart(chart, "AreaChart", data, options);
    });
  };

  defaultExport$2.prototype.renderGeoChart = function renderGeoChart(chart) {
    var this$1 = this;
    this.waitForLoaded(chart, function () {
      var chartOptions = {
        legend: "none",
        colorAxis: {
          colors: chart.options.colors || ["#f6c7b6", "#ce502d"]
        }
      };
      var options = merge(merge(defaultOptions$2, chartOptions), chart.options.library || {});
      var data = new this$1.library.visualization.DataTable();
      data.addColumn("string", "");
      data.addColumn("number", chart.options.label || "Value");
      data.addRows(chart.data);
      this$1.drawChart(chart, "GeoChart", data, options);
    });
  };

  defaultExport$2.prototype.renderScatterChart = function renderScatterChart(chart) {
    var this$1 = this;
    this.waitForLoaded(chart, function () {
      var chartOptions = {};
      var options = jsOptions$2(chart, chart.options, chartOptions);
      var series = chart.data,
          rows2 = [],
          i,
          j,
          data,
          d;

      for (i = 0; i < series.length; i++) {
        series[i].name = series[i].name || "Value";
        d = series[i].data;

        for (j = 0; j < d.length; j++) {
          var row = new Array(series.length + 1);
          row[0] = d[j][0];
          row[i + 1] = d[j][1];
          rows2.push(row);
        }
      }

      data = new this$1.library.visualization.DataTable();
      data.addColumn("number", "");

      for (i = 0; i < series.length; i++) {
        data.addColumn("number", series[i].name);
      }

      data.addRows(rows2);
      this$1.drawChart(chart, "ScatterChart", data, options);
    });
  };

  defaultExport$2.prototype.renderTimeline = function renderTimeline(chart) {
    var this$1 = this;
    this.waitForLoaded(chart, "timeline", function () {
      var chartOptions = {
        legend: "none"
      };

      if (chart.options.colors) {
        chartOptions.colors = chart.options.colors;
      }

      var options = merge(merge(defaultOptions$2, chartOptions), chart.options.library || {});
      var data = new this$1.library.visualization.DataTable();
      data.addColumn({
        type: "string",
        id: "Name"
      });
      data.addColumn({
        type: "date",
        id: "Start"
      });
      data.addColumn({
        type: "date",
        id: "End"
      });
      data.addRows(chart.data);
      chart.element.style.lineHeight = "normal";
      this$1.drawChart(chart, "Timeline", data, options);
    });
  };

  defaultExport$2.prototype.destroy = function destroy(chart) {
    if (chart.chart) {
      chart.chart.clearChart();
    }
  };

  defaultExport$2.prototype.drawChart = function drawChart(chart, type, data, options) {
    this.destroy(chart);

    if (chart.options.code) {
      window.console.log("var data = new google.visualization.DataTable(" + data.toJSON() + ");\nvar chart = new google.visualization." + type + "(element);\nchart.draw(data, " + JSON.stringify(options) + ");");
    }

    chart.chart = new this.library.visualization[type](chart.element);
    resize(function () {
      chart.chart.draw(data, options);
    });
  };

  defaultExport$2.prototype.waitForLoaded = function waitForLoaded(chart, pack, callback) {
    var this$1 = this;

    if (!callback) {
      callback = pack;
      pack = "corechart";
    }

    callbacks.push({
      pack: pack,
      callback: callback
    });

    if (loaded[pack]) {
      this.runCallbacks();
    } else {
      loaded[pack] = true; // https://groups.google.com/forum/#!topic/google-visualization-api/fMKJcyA2yyI

      var loadOptions = {
        packages: [pack],
        callback: function callback() {
          this$1.runCallbacks();
        }
      };

      var config = chart.__config();

      if (config.language) {
        loadOptions.language = config.language;
      }

      if (pack === "corechart" && config.mapsApiKey) {
        loadOptions.mapsApiKey = config.mapsApiKey;
      }

      this.library.charts.load("current", loadOptions);
    }
  };

  defaultExport$2.prototype.runCallbacks = function runCallbacks() {
    var cb, call;

    for (var i = 0; i < callbacks.length; i++) {
      cb = callbacks[i];
      call = this.library.visualization && (cb.pack === "corechart" && this.library.visualization.LineChart || cb.pack === "timeline" && this.library.visualization.Timeline);

      if (call) {
        cb.callback();
        callbacks.splice(i, 1);
        i--;
      }
    }
  }; // cant use object as key


  defaultExport$2.prototype.createDataTable = function createDataTable(series, columnType) {
    var i,
        j,
        s,
        d,
        key,
        rows = [],
        sortedLabels = [];

    for (i = 0; i < series.length; i++) {
      s = series[i];
      series[i].name = series[i].name || "Value";

      for (j = 0; j < s.data.length; j++) {
        d = s.data[j];
        key = columnType === "datetime" ? d[0].getTime() : d[0];

        if (!rows[key]) {
          rows[key] = new Array(series.length);
          sortedLabels.push(key);
        }

        rows[key][i] = toFloat(d[1]);
      }
    }

    var rows2 = [];
    var day = true;
    var value;

    for (j = 0; j < sortedLabels.length; j++) {
      i = sortedLabels[j];

      if (columnType === "datetime") {
        value = new Date(toFloat(i));
        day = day && isDay(value);
      } else if (columnType === "number") {
        value = toFloat(i);
      } else {
        value = i;
      }

      rows2.push([value].concat(rows[i]));
    }

    if (columnType === "datetime") {
      rows2.sort(sortByTime);
    } else if (columnType === "number") {
      rows2.sort(sortByNumberSeries);

      for (i = 0; i < rows2.length; i++) {
        rows2[i][0] = toStr(rows2[i][0]);
      }

      columnType = "string";
    } // create datatable


    var data = new this.library.visualization.DataTable();
    columnType = columnType === "datetime" && day ? "date" : columnType;
    data.addColumn(columnType, "");

    for (i = 0; i < series.length; i++) {
      data.addColumn("number", series[i].name);
    }

    data.addRows(rows2);
    return data;
  };

  var pendingRequests = [],
      runningRequests = 0,
      maxRequests = 4;

  function pushRequest(url, success, error) {
    pendingRequests.push([url, success, error]);
    runNext();
  }

  function runNext() {
    if (runningRequests < maxRequests) {
      var request = pendingRequests.shift();

      if (request) {
        runningRequests++;
        getJSON(request[0], request[1], request[2]);
        runNext();
      }
    }
  }

  function requestComplete() {
    runningRequests--;
    runNext();
  }

  function getJSON(url, success, error) {
    ajaxCall(url, success, function (jqXHR, textStatus, errorThrown) {
      var message = typeof errorThrown === "string" ? errorThrown : errorThrown.message;
      error(message);
    });
  }

  function ajaxCall(url, success, error) {
    var $ = window.jQuery || window.Zepto || window.$;

    if ($) {
      $.ajax({
        dataType: "json",
        url: url,
        success: success,
        error: error,
        complete: requestComplete
      });
    } else {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onload = function () {
        requestComplete();

        if (xhr.status === 200) {
          success(JSON.parse(xhr.responseText), xhr.statusText, xhr);
        } else {
          error(xhr, "error", xhr.statusText);
        }
      };

      xhr.send();
    }
  }

  var config = {};
  var adapters = []; // helpers

  function setText(element, text) {
    if (document.body.innerText) {
      element.innerText = text;
    } else {
      element.textContent = text;
    }
  }

  function chartError(element, message) {
    setText(element, "Error Loading Chart: " + message);
    element.style.color = "#ff0000";
  }

  function errorCatcher(chart) {
    try {
      chart.__render();
    } catch (err) {
      chartError(chart.element, err.message);
      throw err;
    }
  }

  function fetchDataSource(chart, dataSource) {
    if (typeof dataSource === "string") {
      pushRequest(dataSource, function (data) {
        chart.rawData = data;
        errorCatcher(chart);
      }, function (message) {
        chartError(chart.element, message);
      });
    } else {
      chart.rawData = dataSource;
      errorCatcher(chart);
    }
  }

  function addDownloadButton(chart) {
    var element = chart.element;
    var link = document.createElement("a");
    var download = chart.options.download;

    if (download === true) {
      download = {};
    } else if (typeof download === "string") {
      download = {
        filename: download
      };
    }

    link.download = download.filename || "chart.png"; // https://caniuse.com/download

    link.style.position = "absolute";
    link.style.top = "20px";
    link.style.right = "20px";
    link.style.zIndex = 1000;
    link.style.lineHeight = "20px";
    link.target = "_blank"; // for safari

    var image = document.createElement("img");
    image.alt = "Download";
    image.style.border = "none"; // icon from font-awesome
    // http://fa2png.io/

    image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABCFBMVEUAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMywEsqxAAAAV3RSTlMAAQIDBggJCgsMDQ4PERQaHB0eISIjJCouLzE0OTo/QUJHSUpLTU5PUllhYmltcHh5foWLjI+SlaCio6atr7S1t7m6vsHHyM7R2tze5Obo7fHz9ff5+/1hlxK2AAAA30lEQVQYGUXBhVYCQQBA0TdYWAt2d3d3YWAHyur7/z9xgD16Lw0DW+XKx+1GgX+FRzM3HWQWrHl5N/oapW5RPe0PkBu+UYeICvozTWZVK23Ao04B79oJrOsJDOoxkZoQPWgX29pHpCZEk7rEvQYiNSFq1UMqvlCjJkRBS1R8hb00Vb/TajtBL7nTHE1X1vyMQF732dQhyF2o6SAwrzP06iUQzvwsArlnzcOdrgBhJyHa1QOgO9U1GsKuvjUTjavliZYQ8nNPapG6sap/3nrIdJ6bOWzmX/fy0XVpfzZP3S8OJT3g9EEiJwAAAABJRU5ErkJggg==";
    link.appendChild(image);
    element.style.position = "relative";
    chart.__downloadAttached = true; // mouseenter

    chart.__enterEvent = addEvent(element, "mouseover", function (e) {
      var related = e.relatedTarget; // check download option again to ensure it wasn't changed

      if ((!related || related !== this && !childOf(this, related)) && chart.options.download) {
        link.href = chart.toImage(download);
        element.appendChild(link);
      }
    }); // mouseleave

    chart.__leaveEvent = addEvent(element, "mouseout", function (e) {
      var related = e.relatedTarget;

      if (!related || related !== this && !childOf(this, related)) {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      }
    });
  } // https://stackoverflow.com/questions/10149963/adding-event-listener-cross-browser


  function addEvent(elem, event, fn) {
    if (elem.addEventListener) {
      elem.addEventListener(event, fn, false);
      return fn;
    } else {
      var fn2 = function fn2() {
        // set the this pointer same as addEventListener when fn is called
        return fn.call(elem, window.event);
      };

      elem.attachEvent("on" + event, fn2);
      return fn2;
    }
  }

  function removeEvent(elem, event, fn) {
    if (elem.removeEventListener) {
      elem.removeEventListener(event, fn, false);
    } else {
      elem.detachEvent("on" + event, fn);
    }
  } // https://gist.github.com/shawnbot/4166283


  function childOf(p, c) {
    if (p === c) {
      return false;
    }

    while (c && c !== p) {
      c = c.parentNode;
    }

    return c === p;
  }

  function getAdapterType(library) {
    if (library) {
      if (library.product === "Highcharts") {
        return defaultExport$1;
      } else if (library.charts) {
        return defaultExport$2;
      } else if (isFunction(library)) {
        return defaultExport;
      }
    }

    throw new Error("Unknown adapter");
  }

  function addAdapter(library) {
    var adapterType = getAdapterType(library);
    var adapter = new adapterType(library);

    if (adapters.indexOf(adapter) === -1) {
      adapters.push(adapter);
    }
  }

  function loadAdapters() {
    if ("Chart" in window) {
      addAdapter(window.Chart);
    }

    if ("Highcharts" in window) {
      addAdapter(window.Highcharts);
    }

    if (window.google && window.google.charts) {
      addAdapter(window.google);
    }
  }

  function dataEmpty(data, chartType) {
    if (chartType === "PieChart" || chartType === "GeoChart" || chartType === "Timeline") {
      return data.length === 0;
    } else {
      for (var i = 0; i < data.length; i++) {
        if (data[i].data.length > 0) {
          return false;
        }
      }

      return true;
    }
  }

  function renderChart(chartType, chart) {
    if (chart.options.messages && chart.options.messages.empty && dataEmpty(chart.data, chartType)) {
      setText(chart.element, chart.options.messages.empty);
    } else {
      callAdapter(chartType, chart);

      if (chart.options.download && !chart.__downloadAttached && chart.adapter === "chartjs") {
        addDownloadButton(chart);
      }
    }
  } // TODO remove chartType if cross-browser way
  // to get the name of the chart class


  function callAdapter(chartType, chart) {
    var i, adapter, fnName, adapterName;
    fnName = "render" + chartType;
    adapterName = chart.options.adapter;
    loadAdapters();

    for (i = 0; i < adapters.length; i++) {
      adapter = adapters[i];

      if ((!adapterName || adapterName === adapter.name) && isFunction(adapter[fnName])) {
        chart.adapter = adapter.name;
        chart.__adapterObject = adapter;
        return adapter[fnName](chart);
      }
    }

    if (adapters.length > 0) {
      throw new Error("No charting library found for " + chartType);
    } else {
      throw new Error("No charting libraries found - be sure to include one before your charts");
    }
  } // process data


  var toFormattedKey = function toFormattedKey(key, keyType) {
    if (keyType === "number") {
      key = toFloat(key);
    } else if (keyType === "datetime") {
      key = toDate(key);
    } else {
      key = toStr(key);
    }

    return key;
  };

  var formatSeriesData = function formatSeriesData(data, keyType) {
    var r = [],
        key,
        j;

    for (j = 0; j < data.length; j++) {
      if (keyType === "bubble") {
        r.push([toFloat(data[j][0]), toFloat(data[j][1]), toFloat(data[j][2])]);
      } else {
        key = toFormattedKey(data[j][0], keyType);
        r.push([key, toFloat(data[j][1])]);
      }
    }

    if (keyType === "datetime") {
      r.sort(sortByTime);
    } else if (keyType === "number") {
      r.sort(sortByNumberSeries);
    }

    return r;
  };

  function detectXType(series, noDatetime) {
    if (detectXTypeWithFunction(series, isNumber)) {
      return "number";
    } else if (!noDatetime && detectXTypeWithFunction(series, isDate)) {
      return "datetime";
    } else {
      return "string";
    }
  }

  function detectXTypeWithFunction(series, func) {
    var i, j, data;

    for (i = 0; i < series.length; i++) {
      data = toArr(series[i].data);

      for (j = 0; j < data.length; j++) {
        if (!func(data[j][0])) {
          return false;
        }
      }
    }

    return true;
  } // creates a shallow copy of each element of the array
  // elements are expected to be objects


  function copySeries(series) {
    var newSeries = [],
        i,
        j;

    for (i = 0; i < series.length; i++) {
      var copy = {};

      for (j in series[i]) {
        if (series[i].hasOwnProperty(j)) {
          copy[j] = series[i][j];
        }
      }

      newSeries.push(copy);
    }

    return newSeries;
  }

  function processSeries(chart, keyType, noDatetime) {
    var i;
    var opts = chart.options;
    var series = chart.rawData; // see if one series or multiple

    if (!isArray(series) || _typeof(series[0]) !== "object" || isArray(series[0])) {
      series = [{
        name: opts.label,
        data: series
      }];
      chart.hideLegend = true;
    } else {
      chart.hideLegend = false;
    }

    chart.xtype = keyType ? keyType : opts.discrete ? "string" : detectXType(series, noDatetime); // right format

    series = copySeries(series);

    for (i = 0; i < series.length; i++) {
      series[i].data = formatSeriesData(toArr(series[i].data), chart.xtype);
    }

    return series;
  }

  function processSimple(chart) {
    var perfectData = toArr(chart.rawData),
        i;

    for (i = 0; i < perfectData.length; i++) {
      perfectData[i] = [toStr(perfectData[i][0]), toFloat(perfectData[i][1])];
    }

    return perfectData;
  } // define classes


  var Chart = function Chart(element, dataSource, options) {
    var elementId;

    if (typeof element === "string") {
      elementId = element;
      element = document.getElementById(element);

      if (!element) {
        throw new Error("No element with id " + elementId);
      }
    }

    this.element = element;
    this.options = merge(Chartkick.options, options || {});
    this.dataSource = dataSource;
    Chartkick.charts[element.id] = this;
    fetchDataSource(this, dataSource);

    if (this.options.refresh) {
      this.startRefresh();
    }
  };

  Chart.prototype.getElement = function getElement() {
    return this.element;
  };

  Chart.prototype.getDataSource = function getDataSource() {
    return this.dataSource;
  };

  Chart.prototype.getData = function getData() {
    return this.data;
  };

  Chart.prototype.getOptions = function getOptions() {
    return this.options;
  };

  Chart.prototype.getChartObject = function getChartObject() {
    return this.chart;
  };

  Chart.prototype.getAdapter = function getAdapter() {
    return this.adapter;
  };

  Chart.prototype.updateData = function updateData(dataSource, options) {
    this.dataSource = dataSource;

    if (options) {
      this.__updateOptions(options);
    }

    fetchDataSource(this, dataSource);
  };

  Chart.prototype.setOptions = function setOptions(options) {
    this.__updateOptions(options);

    this.redraw();
  };

  Chart.prototype.redraw = function redraw() {
    fetchDataSource(this, this.rawData);
  };

  Chart.prototype.refreshData = function refreshData() {
    if (typeof this.dataSource === "string") {
      // prevent browser from caching
      var sep = this.dataSource.indexOf("?") === -1 ? "?" : "&";
      var url = this.dataSource + sep + "_=" + new Date().getTime();
      fetchDataSource(this, url);
    }
  };

  Chart.prototype.startRefresh = function startRefresh() {
    var this$1 = this;
    var refresh = this.options.refresh;

    if (refresh && typeof this.dataSource !== "string") {
      throw new Error("Data source must be a URL for refresh");
    }

    if (!this.intervalId) {
      if (refresh) {
        this.intervalId = setInterval(function () {
          this$1.refreshData();
        }, refresh * 1000);
      } else {
        throw new Error("No refresh interval");
      }
    }
  };

  Chart.prototype.stopRefresh = function stopRefresh() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };

  Chart.prototype.toImage = function toImage(download) {
    if (this.adapter === "chartjs") {
      if (download && download.background && download.background !== "transparent") {
        // https://stackoverflow.com/questions/30464750/chartjs-line-chart-set-background-color
        var canvas = this.chart.chart.canvas;
        var ctx = this.chart.chart.ctx;
        var tmpCanvas = document.createElement("canvas");
        var tmpCtx = tmpCanvas.getContext("2d");
        tmpCanvas.width = ctx.canvas.width;
        tmpCanvas.height = ctx.canvas.height;
        tmpCtx.fillStyle = download.background;
        tmpCtx.fillRect(0, 0, tmpCanvas.width, tmpCanvas.height);
        tmpCtx.drawImage(canvas, 0, 0);
        return tmpCanvas.toDataURL("image/png");
      } else {
        return this.chart.toBase64Image();
      }
    } else {
      // TODO throw error in next major version
      // throw new Error("Feature only available for Chart.js");
      return null;
    }
  };

  Chart.prototype.destroy = function destroy() {
    if (this.__adapterObject) {
      this.__adapterObject.destroy(this);
    }

    if (this.__enterEvent) {
      removeEvent(this.element, "mouseover", this.__enterEvent);
    }

    if (this.__leaveEvent) {
      removeEvent(this.element, "mouseout", this.__leaveEvent);
    }
  };

  Chart.prototype.__updateOptions = function __updateOptions(options) {
    var updateRefresh = options.refresh && options.refresh !== this.options.refresh;
    this.options = merge(Chartkick.options, options);

    if (updateRefresh) {
      this.stopRefresh();
      this.startRefresh();
    }
  };

  Chart.prototype.__render = function __render() {
    this.data = this.__processData();
    renderChart(this.__chartName(), this);
  };

  Chart.prototype.__config = function __config() {
    return config;
  };

  var LineChart =
  /*@__PURE__*/
  function (Chart) {
    function LineChart() {
      Chart.apply(this, arguments);
    }

    if (Chart) LineChart.__proto__ = Chart;
    LineChart.prototype = Object.create(Chart && Chart.prototype);
    LineChart.prototype.constructor = LineChart;

    LineChart.prototype.__processData = function __processData() {
      return processSeries(this);
    };

    LineChart.prototype.__chartName = function __chartName() {
      return "LineChart";
    };

    return LineChart;
  }(Chart);

  var PieChart =
  /*@__PURE__*/
  function (Chart) {
    function PieChart() {
      Chart.apply(this, arguments);
    }

    if (Chart) PieChart.__proto__ = Chart;
    PieChart.prototype = Object.create(Chart && Chart.prototype);
    PieChart.prototype.constructor = PieChart;

    PieChart.prototype.__processData = function __processData() {
      return processSimple(this);
    };

    PieChart.prototype.__chartName = function __chartName() {
      return "PieChart";
    };

    return PieChart;
  }(Chart);

  var ColumnChart =
  /*@__PURE__*/
  function (Chart) {
    function ColumnChart() {
      Chart.apply(this, arguments);
    }

    if (Chart) ColumnChart.__proto__ = Chart;
    ColumnChart.prototype = Object.create(Chart && Chart.prototype);
    ColumnChart.prototype.constructor = ColumnChart;

    ColumnChart.prototype.__processData = function __processData() {
      return processSeries(this, null, true);
    };

    ColumnChart.prototype.__chartName = function __chartName() {
      return "ColumnChart";
    };

    return ColumnChart;
  }(Chart);

  var BarChart =
  /*@__PURE__*/
  function (Chart) {
    function BarChart() {
      Chart.apply(this, arguments);
    }

    if (Chart) BarChart.__proto__ = Chart;
    BarChart.prototype = Object.create(Chart && Chart.prototype);
    BarChart.prototype.constructor = BarChart;

    BarChart.prototype.__processData = function __processData() {
      return processSeries(this, null, true);
    };

    BarChart.prototype.__chartName = function __chartName() {
      return "BarChart";
    };

    return BarChart;
  }(Chart);

  var AreaChart =
  /*@__PURE__*/
  function (Chart) {
    function AreaChart() {
      Chart.apply(this, arguments);
    }

    if (Chart) AreaChart.__proto__ = Chart;
    AreaChart.prototype = Object.create(Chart && Chart.prototype);
    AreaChart.prototype.constructor = AreaChart;

    AreaChart.prototype.__processData = function __processData() {
      return processSeries(this);
    };

    AreaChart.prototype.__chartName = function __chartName() {
      return "AreaChart";
    };

    return AreaChart;
  }(Chart);

  var GeoChart =
  /*@__PURE__*/
  function (Chart) {
    function GeoChart() {
      Chart.apply(this, arguments);
    }

    if (Chart) GeoChart.__proto__ = Chart;
    GeoChart.prototype = Object.create(Chart && Chart.prototype);
    GeoChart.prototype.constructor = GeoChart;

    GeoChart.prototype.__processData = function __processData() {
      return processSimple(this);
    };

    GeoChart.prototype.__chartName = function __chartName() {
      return "GeoChart";
    };

    return GeoChart;
  }(Chart);

  var ScatterChart =
  /*@__PURE__*/
  function (Chart) {
    function ScatterChart() {
      Chart.apply(this, arguments);
    }

    if (Chart) ScatterChart.__proto__ = Chart;
    ScatterChart.prototype = Object.create(Chart && Chart.prototype);
    ScatterChart.prototype.constructor = ScatterChart;

    ScatterChart.prototype.__processData = function __processData() {
      return processSeries(this, "number");
    };

    ScatterChart.prototype.__chartName = function __chartName() {
      return "ScatterChart";
    };

    return ScatterChart;
  }(Chart);

  var BubbleChart =
  /*@__PURE__*/
  function (Chart) {
    function BubbleChart() {
      Chart.apply(this, arguments);
    }

    if (Chart) BubbleChart.__proto__ = Chart;
    BubbleChart.prototype = Object.create(Chart && Chart.prototype);
    BubbleChart.prototype.constructor = BubbleChart;

    BubbleChart.prototype.__processData = function __processData() {
      return processSeries(this, "bubble");
    };

    BubbleChart.prototype.__chartName = function __chartName() {
      return "BubbleChart";
    };

    return BubbleChart;
  }(Chart);

  var Timeline =
  /*@__PURE__*/
  function (Chart) {
    function Timeline() {
      Chart.apply(this, arguments);
    }

    if (Chart) Timeline.__proto__ = Chart;
    Timeline.prototype = Object.create(Chart && Chart.prototype);
    Timeline.prototype.constructor = Timeline;

    Timeline.prototype.__processData = function __processData() {
      var i,
          data = this.rawData;

      for (i = 0; i < data.length; i++) {
        data[i][1] = toDate(data[i][1]);
        data[i][2] = toDate(data[i][2]);
      }

      return data;
    };

    Timeline.prototype.__chartName = function __chartName() {
      return "Timeline";
    };

    return Timeline;
  }(Chart);

  var Chartkick = {
    LineChart: LineChart,
    PieChart: PieChart,
    ColumnChart: ColumnChart,
    BarChart: BarChart,
    AreaChart: AreaChart,
    GeoChart: GeoChart,
    ScatterChart: ScatterChart,
    BubbleChart: BubbleChart,
    Timeline: Timeline,
    charts: {},
    configure: function configure(options) {
      for (var key in options) {
        if (options.hasOwnProperty(key)) {
          config[key] = options[key];
        }
      }
    },
    setDefaultOptions: function setDefaultOptions(opts) {
      Chartkick.options = opts;
    },
    eachChart: function eachChart(callback) {
      for (var chartId in Chartkick.charts) {
        if (Chartkick.charts.hasOwnProperty(chartId)) {
          callback(Chartkick.charts[chartId]);
        }
      }
    },
    config: config,
    options: {},
    adapters: adapters,
    addAdapter: addAdapter,
    use: function use(adapter) {
      addAdapter(adapter);
      return Chartkick;
    }
  }; // not ideal, but allows for simpler integration

  if (typeof window !== "undefined" && !window.Chartkick) {
    window.Chartkick = Chartkick;
  } // backwards compatibility for esm require


  Chartkick["default"] = Chartkick;
  return Chartkick;
});

/***/ }),

/***/ "./node_modules/highcharts/highcharts.js":
/*!***********************************************!*\
  !*** ./node_modules/highcharts/highcharts.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 Highcharts JS v7.2.0 (2019-09-03)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (P, N) {
  "object" === ( false ? undefined : _typeof(module)) && module.exports ? (N["default"] = N, module.exports = P.document ? N(P) : N) :  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return N(P);
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})("undefined" !== typeof window ? window : this, function (P) {
  function N(c, n, A, D) {
    c.hasOwnProperty(n) || (c[n] = D.apply(null, A));
  }

  var H = {};
  N(H, "parts/Globals.js", [], function () {
    var c = "undefined" !== typeof P ? P : "undefined" !== typeof window ? window : {},
        n = c.document,
        A = c.navigator && c.navigator.userAgent || "",
        D = n && n.createElementNS && !!n.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        F = /(edge|msie|trident)/i.test(A) && !c.opera,
        z = -1 !== A.indexOf("Firefox"),
        u = -1 !== A.indexOf("Chrome"),
        L = z && 4 > parseInt(A.split("Firefox/")[1], 10);
    return {
      product: "Highcharts",
      version: "7.2.0",
      deg2rad: 2 * Math.PI / 360,
      doc: n,
      hasBidiBug: L,
      hasTouch: !!c.TouchEvent,
      isMS: F,
      isWebKit: -1 !== A.indexOf("AppleWebKit"),
      isFirefox: z,
      isChrome: u,
      isSafari: !u && -1 !== A.indexOf("Safari"),
      isTouchDevice: /(Mobile|Android|Windows Phone)/.test(A),
      SVG_NS: "http://www.w3.org/2000/svg",
      chartCount: 0,
      seriesTypes: {},
      symbolSizes: {},
      svg: D,
      win: c,
      marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"],
      noop: function noop() {},
      charts: [],
      dateFormats: {}
    };
  });
  N(H, "parts/Utilities.js", [H["parts/Globals.js"]], function (c) {
    function n(b, a) {
      return parseInt(b, a || 10);
    }

    function A(b) {
      return "string" === typeof b;
    }

    function D(b) {
      b = Object.prototype.toString.call(b);
      return "[object Array]" === b || "[object Array Iterator]" === b;
    }

    function F(b, a) {
      return !!b && "object" === _typeof(b) && (!a || !D(b));
    }

    function z(b) {
      return F(b) && "number" === typeof b.nodeType;
    }

    function u(b) {
      var a = b && b.constructor;
      return !(!F(b, !0) || z(b) || !a || !a.name || "Object" === a.name);
    }

    function L(b) {
      return "number" === typeof b && !isNaN(b) && Infinity > b && -Infinity < b;
    }

    function y(b) {
      return "undefined" !== typeof b && null !== b;
    }

    function C(b, a, d) {
      var f;
      A(a) ? y(d) ? b.setAttribute(a, d) : b && b.getAttribute && ((f = b.getAttribute(a)) || "class" !== a || (f = b.getAttribute(a + "Name"))) : x(a, function (a, d) {
        b.setAttribute(d, a);
      });
      return f;
    }

    function x(b, a, d) {
      for (var f in b) {
        Object.hasOwnProperty.call(b, f) && a.call(d || b[f], b[f], f, b);
      }
    }

    c.timers = [];
    var m = c.charts,
        p = c.doc,
        g = c.win;

    c.error = function (b, a, d) {
      var f = L(b) ? "Highcharts error #" + b + ": www.highcharts.com/errors/" + b : b,
          e = function e() {
        if (a) throw Error(f);
        g.console && console.log(f);
      };

      d ? c.fireEvent(d, "displayError", {
        code: b,
        message: f
      }, e) : e();
    };

    c.Fx = function (b, a, d) {
      this.options = a;
      this.elem = b;
      this.prop = d;
    };

    c.Fx.prototype = {
      dSetter: function dSetter() {
        var b = this.paths[0],
            a = this.paths[1],
            d = [],
            f = this.now,
            e = b.length;
        if (1 === f) d = this.toD;else if (e === a.length && 1 > f) for (; e--;) {
          var c = parseFloat(b[e]);
          d[e] = isNaN(c) ? a[e] : f * parseFloat("" + (a[e] - c)) + c;
        } else d = a;
        this.elem.attr("d", d, null, !0);
      },
      update: function update() {
        var b = this.elem,
            a = this.prop,
            d = this.now,
            f = this.options.step;
        if (this[a + "Setter"]) this[a + "Setter"]();else b.attr ? b.element && b.attr(a, d, null, !0) : b.style[a] = d + this.unit;
        f && f.call(b, d, this);
      },
      run: function run(b, a, d) {
        var f = this,
            e = f.options,
            h = function h(a) {
          return h.stopped ? !1 : f.step(a);
        },
            r = g.requestAnimationFrame || function (a) {
          setTimeout(a, 13);
        },
            E = function E() {
          for (var a = 0; a < c.timers.length; a++) {
            c.timers[a]() || c.timers.splice(a--, 1);
          }

          c.timers.length && r(E);
        };

        b !== a || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date(), this.start = b, this.end = a, this.unit = d, this.now = this.start, this.pos = 0, h.elem = this.elem, h.prop = this.prop, h() && 1 === c.timers.push(h) && r(E)) : (delete e.curAnim[this.prop], e.complete && 0 === Object.keys(e.curAnim).length && e.complete.call(this.elem));
      },
      step: function step(b) {
        var a = +new Date(),
            d = this.options,
            f = this.elem,
            e = d.complete,
            c = d.duration,
            r = d.curAnim;
        if (f.attr && !f.element) b = !1;else if (b || a >= c + this.startTime) {
          this.now = this.end;
          this.pos = 1;
          this.update();
          var E = r[this.prop] = !0;
          x(r, function (a) {
            !0 !== a && (E = !1);
          });
          E && e && e.call(f);
          b = !1;
        } else this.pos = d.easing((a - this.startTime) / c), this.now = this.start + (this.end - this.start) * this.pos, this.update(), b = !0;
        return b;
      },
      initPath: function initPath(b, a, d) {
        function f(a) {
          for (t = a.length; t--;) {
            var b = "M" === a[t] || "L" === a[t];
            var d = /[a-zA-Z]/.test(a[t + 3]);
            b && d && a.splice(t + 1, 0, a[t + 1], a[t + 2], a[t + 1], a[t + 2]);
          }
        }

        function e(a, b) {
          for (; a.length < J;) {
            a[0] = b[J - a.length];
            var d = a.slice(0, v);
            [].splice.apply(a, [0, 0].concat(d));
            B && (d = a.slice(a.length - v), [].splice.apply(a, [a.length, 0].concat(d)), t--);
          }

          a[0] = "M";
        }

        function c(a, b) {
          for (var d = (J - a.length) / v; 0 < d && d--;) {
            k = a.slice().splice(a.length / I - v, v * I), k[0] = b[J - v - d * v], q && (k[v - 6] = k[v - 2], k[v - 5] = k[v - 1]), [].splice.apply(a, [a.length / I, 0].concat(k)), B && d--;
          }
        }

        a = a || "";
        var r = b.startX,
            E = b.endX,
            q = -1 < a.indexOf("C"),
            v = q ? 7 : 3,
            k,
            t;
        a = a.split(" ");
        d = d.slice();
        var B = b.isArea,
            I = B ? 2 : 1;
        q && (f(a), f(d));

        if (r && E) {
          for (t = 0; t < r.length; t++) {
            if (r[t] === E[0]) {
              var w = t;
              break;
            } else if (r[0] === E[E.length - r.length + t]) {
              w = t;
              var l = !0;
              break;
            } else if (r[r.length - 1] === E[E.length - r.length + t]) {
              w = r.length - t;
              break;
            }
          }

          "undefined" === typeof w && (a = []);
        }

        if (a.length && L(w)) {
          var J = d.length + w * I * v;
          l ? (e(a, d), c(d, a)) : (e(d, a), c(a, d));
        }

        return [a, d];
      },
      fillSetter: function fillSetter() {
        c.Fx.prototype.strokeSetter.apply(this, arguments);
      },
      strokeSetter: function strokeSetter() {
        this.elem.attr(this.prop, c.color(this.start).tweenTo(c.color(this.end), this.pos), null, !0);
      }
    };

    c.merge = function () {
      var b,
          a = arguments,
          d = {},
          f = function f(a, b) {
        "object" !== _typeof(a) && (a = {});
        x(b, function (d, e) {
          !F(d, !0) || u(d) || z(d) ? a[e] = b[e] : a[e] = f(a[e] || {}, d);
        });
        return a;
      };

      !0 === a[0] && (d = a[1], a = Array.prototype.slice.call(a, 2));
      var e = a.length;

      for (b = 0; b < e; b++) {
        d = f(d, a[b]);
      }

      return d;
    };

    c.syncTimeout = function (b, a, d) {
      if (a) return setTimeout(b, a, d);
      b.call(0, d);
    };

    c.clearTimeout = function (b) {
      y(b) && clearTimeout(b);
    };

    c.extend = function (b, a) {
      var d;
      b || (b = {});

      for (d in a) {
        b[d] = a[d];
      }

      return b;
    };

    c.pick = function () {
      var b = arguments,
          a,
          d = b.length;

      for (a = 0; a < d; a++) {
        var f = b[a];
        if ("undefined" !== typeof f && null !== f) return f;
      }
    };

    c.css = function (b, a) {
      c.isMS && !c.svg && a && "undefined" !== typeof a.opacity && (a.filter = "alpha(opacity=" + 100 * a.opacity + ")");
      c.extend(b.style, a);
    };

    c.createElement = function (b, a, d, f, e) {
      b = p.createElement(b);
      var h = c.css;
      a && c.extend(b, a);
      e && h(b, {
        padding: "0",
        border: "none",
        margin: "0"
      });
      d && h(b, d);
      f && f.appendChild(b);
      return b;
    };

    c.extendClass = function (b, a) {
      var d = function d() {};

      d.prototype = new b();
      c.extend(d.prototype, a);
      return d;
    };

    c.pad = function (b, a, d) {
      return Array((a || 2) + 1 - String(b).replace("-", "").length).join(d || "0") + b;
    };

    c.relativeLength = function (b, a, d) {
      return /%$/.test(b) ? a * parseFloat(b) / 100 + (d || 0) : parseFloat(b);
    };

    c.wrap = function (b, a, d) {
      var f = b[a];

      b[a] = function () {
        var a = Array.prototype.slice.call(arguments),
            b = arguments,
            c = this;

        c.proceed = function () {
          f.apply(c, arguments.length ? arguments : b);
        };

        a.unshift(f);
        a = d.apply(this, a);
        c.proceed = null;
        return a;
      };
    };

    c.datePropsToTimestamps = function (b) {
      x(b, function (a, d) {
        F(a) && "function" === typeof a.getTime ? b[d] = a.getTime() : (F(a) || D(a)) && c.datePropsToTimestamps(a);
      });
    };

    c.formatSingle = function (b, a, d) {
      var f = /\.([0-9])/,
          e = c.defaultOptions.lang;
      /f$/.test(b) ? (d = (d = b.match(f)) ? d[1] : -1, null !== a && (a = c.numberFormat(a, d, e.decimalPoint, -1 < b.indexOf(",") ? e.thousandsSep : ""))) : a = (d || c.time).dateFormat(b, a);
      return a;
    };

    c.format = function (b, a, d) {
      for (var f = "{", e = !1, h, r, E, q, v = [], k; b;) {
        f = b.indexOf(f);
        if (-1 === f) break;
        h = b.slice(0, f);

        if (e) {
          h = h.split(":");
          r = h.shift().split(".");
          q = r.length;
          k = a;

          for (E = 0; E < q; E++) {
            k && (k = k[r[E]]);
          }

          h.length && (k = c.formatSingle(h.join(":"), k, d));
          v.push(k);
        } else v.push(h);

        b = b.slice(f + 1);
        f = (e = !e) ? "}" : "{";
      }

      v.push(b);
      return v.join("");
    };

    c.getMagnitude = function (b) {
      return Math.pow(10, Math.floor(Math.log(b) / Math.LN10));
    };

    c.normalizeTickInterval = function (b, a, d, f, e) {
      var h = b;
      d = c.pick(d, 1);
      var r = b / d;
      a || (a = e ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === f && (1 === d ? a = a.filter(function (a) {
        return 0 === a % 1;
      }) : .1 >= d && (a = [1 / d])));

      for (f = 0; f < a.length && !(h = a[f], e && h * d >= b || !e && r <= (a[f] + (a[f + 1] || a[f])) / 2); f++) {
        ;
      }

      return h = c.correctFloat(h * d, -Math.round(Math.log(.001) / Math.LN10));
    };

    c.stableSort = function (b, a) {
      var d = b.length,
          f,
          e;

      for (e = 0; e < d; e++) {
        b[e].safeI = e;
      }

      b.sort(function (b, d) {
        f = a(b, d);
        return 0 === f ? b.safeI - d.safeI : f;
      });

      for (e = 0; e < d; e++) {
        delete b[e].safeI;
      }
    };

    c.arrayMin = function (b) {
      for (var a = b.length, d = b[0]; a--;) {
        b[a] < d && (d = b[a]);
      }

      return d;
    };

    c.arrayMax = function (b) {
      for (var a = b.length, d = b[0]; a--;) {
        b[a] > d && (d = b[a]);
      }

      return d;
    };

    c.destroyObjectProperties = function (b, a) {
      x(b, function (d, f) {
        d && d !== a && d.destroy && d.destroy();
        delete b[f];
      });
    };

    c.discardElement = function (b) {
      var a = c.garbageBin;
      a || (a = c.createElement("div"));
      b && a.appendChild(b);
      a.innerHTML = "";
    };

    c.correctFloat = function (b, a) {
      return parseFloat(b.toPrecision(a || 14));
    };

    c.setAnimation = function (b, a) {
      a.renderer.globalAnimation = c.pick(b, a.options.chart.animation, !0);
    };

    c.animObject = function (b) {
      return F(b) ? c.merge(b) : {
        duration: b ? 500 : 0
      };
    };

    c.timeUnits = {
      millisecond: 1,
      second: 1E3,
      minute: 6E4,
      hour: 36E5,
      day: 864E5,
      week: 6048E5,
      month: 24192E5,
      year: 314496E5
    };

    c.numberFormat = function (b, a, d, f) {
      b = +b || 0;
      a = +a;
      var e = c.defaultOptions.lang,
          h = (b.toString().split(".")[1] || "").split("e")[0].length,
          r = b.toString().split("e");
      if (-1 === a) a = Math.min(h, 20);else if (!L(a)) a = 2;else if (a && r[1] && 0 > r[1]) {
        var m = a + +r[1];
        0 <= m ? (r[0] = (+r[0]).toExponential(m).split("e")[0], a = m) : (r[0] = r[0].split(".")[0] || 0, b = 20 > a ? (r[0] * Math.pow(10, r[1])).toFixed(a) : 0, r[1] = 0);
      }
      var q = (Math.abs(r[1] ? r[0] : b) + Math.pow(10, -Math.max(a, h) - 1)).toFixed(a);
      h = String(n(q));
      m = 3 < h.length ? h.length % 3 : 0;
      d = c.pick(d, e.decimalPoint);
      f = c.pick(f, e.thousandsSep);
      b = (0 > b ? "-" : "") + (m ? h.substr(0, m) + f : "");
      b += h.substr(m).replace(/(\d{3})(?=\d)/g, "$1" + f);
      a && (b += d + q.slice(-a));
      r[1] && 0 !== +b && (b += "e" + r[1]);
      return b;
    };

    Math.easeInOutSine = function (b) {
      return -.5 * (Math.cos(Math.PI * b) - 1);
    };

    c.getStyle = function (b, a, d) {
      if ("width" === a) return a = Math.min(b.offsetWidth, b.scrollWidth), d = b.getBoundingClientRect && b.getBoundingClientRect().width, d < a && d >= a - 1 && (a = Math.floor(d)), Math.max(0, a - c.getStyle(b, "padding-left") - c.getStyle(b, "padding-right"));
      if ("height" === a) return Math.max(0, Math.min(b.offsetHeight, b.scrollHeight) - c.getStyle(b, "padding-top") - c.getStyle(b, "padding-bottom"));
      g.getComputedStyle || c.error(27, !0);
      if (b = g.getComputedStyle(b, void 0)) b = b.getPropertyValue(a), c.pick(d, "opacity" !== a) && (b = n(b));
      return b;
    };

    c.inArray = function (b, a, d) {
      return a.indexOf(b, d);
    };

    c.find = Array.prototype.find ? function (b, a) {
      return b.find(a);
    } : function (b, a) {
      var d,
          f = b.length;

      for (d = 0; d < f; d++) {
        if (a(b[d], d)) return b[d];
      }
    };
    c.keys = Object.keys;

    c.offset = function (b) {
      var a = p.documentElement;
      b = b.parentElement || b.parentNode ? b.getBoundingClientRect() : {
        top: 0,
        left: 0
      };
      return {
        top: b.top + (g.pageYOffset || a.scrollTop) - (a.clientTop || 0),
        left: b.left + (g.pageXOffset || a.scrollLeft) - (a.clientLeft || 0)
      };
    };

    c.stop = function (b, a) {
      for (var d = c.timers.length; d--;) {
        c.timers[d].elem !== b || a && a !== c.timers[d].prop || (c.timers[d].stopped = !0);
      }
    };

    x({
      map: "map",
      each: "forEach",
      grep: "filter",
      reduce: "reduce",
      some: "some"
    }, function (b, a) {
      c[a] = function (a) {
        return Array.prototype[b].apply(a, [].slice.call(arguments, 1));
      };
    });

    c.addEvent = function (b, a, d, f) {
      void 0 === f && (f = {});
      var e = b.addEventListener || c.addEventListenerPolyfill;
      var h = "function" === typeof b && b.prototype ? b.prototype.protoEvents = b.prototype.protoEvents || {} : b.hcEvents = b.hcEvents || {};
      c.Point && b instanceof c.Point && b.series && b.series.chart && (b.series.chart.runTrackerClick = !0);
      e && e.call(b, a, d, !1);
      h[a] || (h[a] = []);
      h[a].push({
        fn: d,
        order: "number" === typeof f.order ? f.order : Infinity
      });
      h[a].sort(function (a, b) {
        return a.order - b.order;
      });
      return function () {
        c.removeEvent(b, a, d);
      };
    };

    c.removeEvent = function (b, a, d) {
      function f(a, d) {
        var e = b.removeEventListener || c.removeEventListenerPolyfill;
        e && e.call(b, a, d, !1);
      }

      function e(d) {
        var e;

        if (b.nodeName) {
          if (a) {
            var c = {};
            c[a] = !0;
          } else c = d;

          x(c, function (a, b) {
            if (d[b]) for (e = d[b].length; e--;) {
              f(b, d[b][e].fn);
            }
          });
        }
      }

      var h;
      ["protoEvents", "hcEvents"].forEach(function (c) {
        var r = b[c];
        r && (a ? (h = r[a] || [], d ? (r[a] = h.filter(function (a) {
          return d !== a.fn;
        }), f(a, d)) : (e(r), r[a] = [])) : (e(r), b[c] = {}));
      });
    };

    c.fireEvent = function (b, a, d, f) {
      var e;
      d = d || {};

      if (p.createEvent && (b.dispatchEvent || b.fireEvent)) {
        var h = p.createEvent("Events");
        h.initEvent(a, !0, !0);
        c.extend(h, d);
        b.dispatchEvent ? b.dispatchEvent(h) : b.fireEvent(a, h);
      } else d.target || c.extend(d, {
        preventDefault: function preventDefault() {
          d.defaultPrevented = !0;
        },
        target: b,
        type: a
      }), function (a, f) {
        void 0 === a && (a = []);
        void 0 === f && (f = []);
        var c = 0,
            h = 0,
            k = a.length + f.length;

        for (e = 0; e < k; e++) {
          !1 === (a[c] ? f[h] ? a[c].order <= f[h].order ? a[c++] : f[h++] : a[c++] : f[h++]).fn.call(b, d) && d.preventDefault();
        }
      }(b.protoEvents && b.protoEvents[a], b.hcEvents && b.hcEvents[a]);

      f && !d.defaultPrevented && f.call(b, d);
    };

    c.animate = function (b, a, d) {
      var f,
          e = "",
          h,
          r;

      if (!F(d)) {
        var m = arguments;
        d = {
          duration: m[2],
          easing: m[3],
          complete: m[4]
        };
      }

      L(d.duration) || (d.duration = 400);
      d.easing = "function" === typeof d.easing ? d.easing : Math[d.easing] || Math.easeInOutSine;
      d.curAnim = c.merge(a);
      x(a, function (q, v) {
        c.stop(b, v);
        r = new c.Fx(b, d, v);
        h = null;
        "d" === v ? (r.paths = r.initPath(b, b.d, a.d), r.toD = a.d, f = 0, h = 1) : b.attr ? f = b.attr(v) : (f = parseFloat(c.getStyle(b, v)) || 0, "opacity" !== v && (e = "px"));
        h || (h = q);
        h && h.match && h.match("px") && (h = h.replace(/px/g, ""));
        r.run(f, h, e);
      });
    };

    c.seriesType = function (b, a, d, f, e) {
      var h = c.getOptions(),
          r = c.seriesTypes;
      h.plotOptions[b] = c.merge(h.plotOptions[a], d);
      r[b] = c.extendClass(r[a] || function () {}, f);
      r[b].prototype.type = b;
      e && (r[b].prototype.pointClass = c.extendClass(c.Point, e));
      return r[b];
    };

    c.uniqueKey = function () {
      var b = Math.random().toString(36).substring(2, 9),
          a = 0;
      return function () {
        return "highcharts-" + b + "-" + a++;
      };
    }();

    c.isFunction = function (b) {
      return "function" === typeof b;
    };

    g.jQuery && (g.jQuery.fn.highcharts = function () {
      var b = [].slice.call(arguments);
      if (this[0]) return b[0] ? (new c[A(b[0]) ? b.shift() : "Chart"](this[0], b[0], b[1]), this) : m[C(this[0], "data-highcharts-chart")];
    });
    return {
      attr: C,
      defined: y,
      erase: function erase(b, a) {
        for (var d = b.length; d--;) {
          if (b[d] === a) {
            b.splice(d, 1);
            break;
          }
        }
      },
      isArray: D,
      isClass: u,
      isDOMElement: z,
      isNumber: L,
      isObject: F,
      isString: A,
      objectEach: x,
      pInt: n,
      splat: function splat(b) {
        return D(b) ? b : [b];
      }
    };
  });
  N(H, "parts/Color.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.isNumber,
        D = n.pInt,
        F = c.merge;

    c.Color = function (z) {
      if (!(this instanceof c.Color)) return new c.Color(z);
      this.init(z);
    };

    c.Color.prototype = {
      parsers: [{
        regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
        parse: function parse(c) {
          return [D(c[1]), D(c[2]), D(c[3]), parseFloat(c[4], 10)];
        }
      }, {
        regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
        parse: function parse(c) {
          return [D(c[1]), D(c[2]), D(c[3]), 1];
        }
      }],
      names: {
        white: "#ffffff",
        black: "#000000"
      },
      init: function init(z) {
        var u, n;
        if ((this.input = z = this.names[z && z.toLowerCase ? z.toLowerCase() : ""] || z) && z.stops) this.stops = z.stops.map(function (x) {
          return new c.Color(x[1]);
        });else {
          if (z && z.charAt && "#" === z.charAt()) {
            var y = z.length;
            z = parseInt(z.substr(1), 16);
            7 === y ? u = [(z & 16711680) >> 16, (z & 65280) >> 8, z & 255, 1] : 4 === y && (u = [(z & 3840) >> 4 | (z & 3840) >> 8, (z & 240) >> 4 | z & 240, (z & 15) << 4 | z & 15, 1]);
          }

          if (!u) for (n = this.parsers.length; n-- && !u;) {
            var C = this.parsers[n];
            (y = C.regex.exec(z)) && (u = C.parse(y));
          }
        }
        this.rgba = u || [];
      },
      get: function get(c) {
        var u = this.input,
            z = this.rgba;

        if (this.stops) {
          var y = F(u);
          y.stops = [].concat(y.stops);
          this.stops.forEach(function (u, x) {
            y.stops[x] = [y.stops[x][0], u.get(c)];
          });
        } else y = z && A(z[0]) ? "rgb" === c || !c && 1 === z[3] ? "rgb(" + z[0] + "," + z[1] + "," + z[2] + ")" : "a" === c ? z[3] : "rgba(" + z.join(",") + ")" : u;

        return y;
      },
      brighten: function brighten(c) {
        var u,
            z = this.rgba;
        if (this.stops) this.stops.forEach(function (u) {
          u.brighten(c);
        });else if (A(c) && 0 !== c) for (u = 0; 3 > u; u++) {
          z[u] += D(255 * c), 0 > z[u] && (z[u] = 0), 255 < z[u] && (z[u] = 255);
        }
        return this;
      },
      setOpacity: function setOpacity(c) {
        this.rgba[3] = c;
        return this;
      },
      tweenTo: function tweenTo(c, u) {
        var z = this.rgba,
            y = c.rgba;
        y.length && z && z.length ? (c = 1 !== y[3] || 1 !== z[3], u = (c ? "rgba(" : "rgb(") + Math.round(y[0] + (z[0] - y[0]) * (1 - u)) + "," + Math.round(y[1] + (z[1] - y[1]) * (1 - u)) + "," + Math.round(y[2] + (z[2] - y[2]) * (1 - u)) + (c ? "," + (y[3] + (z[3] - y[3]) * (1 - u)) : "") + ")") : u = c.input || "none";
        return u;
      }
    };

    c.color = function (z) {
      return new c.Color(z);
    };
  });
  N(H, "parts/SvgRenderer.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.attr,
        D = n.defined,
        F = n.erase,
        z = n.isArray,
        u = n.isNumber,
        L = n.isObject,
        y = n.isString,
        C = n.objectEach,
        x = n.pInt,
        m = n.splat,
        p = c.addEvent,
        g = c.animate,
        b = c.charts,
        a = c.color,
        d = c.css,
        f = c.createElement,
        e = c.deg2rad,
        h = c.destroyObjectProperties,
        r = c.doc,
        E = c.extend,
        q = c.hasTouch,
        v = c.isFirefox,
        k = c.isMS,
        t = c.isWebKit,
        B = c.merge,
        I = c.noop,
        w = c.pick,
        l = c.removeEvent,
        J = c.stop,
        K = c.svg,
        T = c.SVG_NS,
        R = c.symbolSizes,
        S = c.win;

    var M = c.SVGElement = function () {
      return this;
    };

    E(M.prototype, {
      opacity: 1,
      SVG_NS: T,
      textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor".split(" "),
      init: function init(a, b) {
        this.element = "span" === b ? f(b) : r.createElementNS(this.SVG_NS, b);
        this.renderer = a;
        c.fireEvent(this, "afterInit");
      },
      animate: function animate(a, b, d) {
        var G = c.animObject(w(b, this.renderer.globalAnimation, !0));
        w(r.hidden, r.msHidden, r.webkitHidden, !1) && (G.duration = 0);
        0 !== G.duration ? (d && (G.complete = d), g(this, a, G)) : (this.attr(a, void 0, d), C(a, function (a, b) {
          G.step && G.step.call(this, a, {
            prop: b,
            pos: 1
          });
        }, this));
        return this;
      },
      complexColor: function complexColor(a, b, d) {
        var G = this.renderer,
            l,
            w,
            e,
            f,
            k,
            O,
            t,
            h,
            J,
            K,
            r,
            Q = [],
            M;
        c.fireEvent(this.renderer, "complexColor", {
          args: arguments
        }, function () {
          a.radialGradient ? w = "radialGradient" : a.linearGradient && (w = "linearGradient");
          w && (e = a[w], k = G.gradients, t = a.stops, K = d.radialReference, z(e) && (a[w] = e = {
            x1: e[0],
            y1: e[1],
            x2: e[2],
            y2: e[3],
            gradientUnits: "userSpaceOnUse"
          }), "radialGradient" === w && K && !D(e.gradientUnits) && (f = e, e = B(e, G.getRadialAttr(K, f), {
            gradientUnits: "userSpaceOnUse"
          })), C(e, function (a, G) {
            "id" !== G && Q.push(G, a);
          }), C(t, function (a) {
            Q.push(a);
          }), Q = Q.join(","), k[Q] ? r = k[Q].attr("id") : (e.id = r = c.uniqueKey(), k[Q] = O = G.createElement(w).attr(e).add(G.defs), O.radAttr = f, O.stops = [], t.forEach(function (a) {
            0 === a[1].indexOf("rgba") ? (l = c.color(a[1]), h = l.get("rgb"), J = l.get("a")) : (h = a[1], J = 1);
            a = G.createElement("stop").attr({
              offset: a[0],
              "stop-color": h,
              "stop-opacity": J
            }).add(O);
            O.stops.push(a);
          })), M = "url(" + G.url + "#" + r + ")", d.setAttribute(b, M), d.gradient = Q, a.toString = function () {
            return M;
          });
        });
      },
      applyTextOutline: function applyTextOutline(a) {
        var b = this.element,
            G;
        -1 !== a.indexOf("contrast") && (a = a.replace(/contrast/g, this.renderer.getContrast(b.style.fill)));
        a = a.split(" ");
        var d = a[a.length - 1];

        if ((G = a[0]) && "none" !== G && c.svg) {
          this.fakeTS = !0;
          a = [].slice.call(b.getElementsByTagName("tspan"));
          this.ySetter = this.xSetter;
          G = G.replace(/(^[\d\.]+)(.*?)$/g, function (a, b, G) {
            return 2 * b + G;
          });
          this.removeTextOutline(a);
          var w = b.firstChild;
          a.forEach(function (a, l) {
            0 === l && (a.setAttribute("x", b.getAttribute("x")), l = b.getAttribute("y"), a.setAttribute("y", l || 0), null === l && b.setAttribute("y", 0));
            a = a.cloneNode(1);
            A(a, {
              "class": "highcharts-text-outline",
              fill: d,
              stroke: d,
              "stroke-width": G,
              "stroke-linejoin": "round"
            });
            b.insertBefore(a, w);
          });
        }
      },
      removeTextOutline: function removeTextOutline(a) {
        for (var b = a.length, G; b--;) {
          G = a[b], "highcharts-text-outline" === G.getAttribute("class") && F(a, this.element.removeChild(G));
        }
      },
      symbolCustomAttribs: "x y width height r start end innerR anchorX anchorY rounded".split(" "),
      attr: function attr(a, b, d, l) {
        var G = this.element,
            w,
            e = this,
            f,
            k,
            O = this.symbolCustomAttribs;

        if ("string" === typeof a && void 0 !== b) {
          var t = a;
          a = {};
          a[t] = b;
        }

        "string" === typeof a ? e = (this[a + "Getter"] || this._defaultGetter).call(this, a, G) : (C(a, function (b, d) {
          f = !1;
          l || J(this, d);
          this.symbolName && -1 !== c.inArray(d, O) && (w || (this.symbolAttr(a), w = !0), f = !0);
          !this.rotation || "x" !== d && "y" !== d || (this.doTransform = !0);
          f || (k = this[d + "Setter"] || this._defaultSetter, k.call(this, b, d, G), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d) && this.updateShadows(d, b, k));
        }, this), this.afterSetters());
        d && d.call(this);
        return e;
      },
      afterSetters: function afterSetters() {
        this.doTransform && (this.updateTransform(), this.doTransform = !1);
      },
      updateShadows: function updateShadows(a, b, d) {
        for (var G = this.shadows, l = G.length; l--;) {
          d.call(G[l], "height" === a ? Math.max(b - (G[l].cutHeight || 0), 0) : "d" === a ? this.d : b, a, G[l]);
        }
      },
      addClass: function addClass(a, b) {
        var d = this.attr("class") || "";
        b || (a = (a || "").split(/ /g).reduce(function (a, b) {
          -1 === d.indexOf(b) && a.push(b);
          return a;
        }, d ? [d] : []).join(" "));
        a !== d && this.attr("class", a);
        return this;
      },
      hasClass: function hasClass(a) {
        return -1 !== (this.attr("class") || "").split(" ").indexOf(a);
      },
      removeClass: function removeClass(a) {
        return this.attr("class", (this.attr("class") || "").replace(a, ""));
      },
      symbolAttr: function symbolAttr(a) {
        var b = this;
        "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function (d) {
          b[d] = w(a[d], b[d]);
        });
        b.attr({
          d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b)
        });
      },
      clip: function clip(a) {
        return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none");
      },
      crisp: function crisp(a, b) {
        b = b || a.strokeWidth || 0;
        var d = Math.round(b) % 2 / 2;
        a.x = Math.floor(a.x || this.x || 0) + d;
        a.y = Math.floor(a.y || this.y || 0) + d;
        a.width = Math.floor((a.width || this.width || 0) - 2 * d);
        a.height = Math.floor((a.height || this.height || 0) - 2 * d);
        D(a.strokeWidth) && (a.strokeWidth = b);
        return a;
      },
      css: function css(a) {
        var b = this.styles,
            G = {},
            l = this.element,
            w = "",
            e = !b,
            f = ["textOutline", "textOverflow", "width"];
        a && a.color && (a.fill = a.color);
        b && C(a, function (a, d) {
          a !== b[d] && (G[d] = a, e = !0);
        });

        if (e) {
          b && (a = E(b, G));
          if (a) if (null === a.width || "auto" === a.width) delete this.textWidth;else if ("text" === l.nodeName.toLowerCase() && a.width) var k = this.textWidth = x(a.width);
          this.styles = a;
          k && !K && this.renderer.forExport && delete a.width;

          if (l.namespaceURI === this.SVG_NS) {
            var c = function c(a, b) {
              return "-" + b.toLowerCase();
            };

            C(a, function (a, b) {
              -1 === f.indexOf(b) && (w += b.replace(/([A-Z])/g, c) + ":" + a + ";");
            });
            w && A(l, "style", w);
          } else d(l, a);

          this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), a && a.textOutline && this.applyTextOutline(a.textOutline));
        }

        return this;
      },
      getStyle: function getStyle(a) {
        return S.getComputedStyle(this.element || this, "").getPropertyValue(a);
      },
      strokeWidth: function strokeWidth() {
        if (!this.renderer.styledMode) return this["stroke-width"] || 0;
        var a = this.getStyle("stroke-width");
        if (a.indexOf("px") === a.length - 2) a = x(a);else {
          var b = r.createElementNS(T, "rect");
          A(b, {
            width: a,
            "stroke-width": 0
          });
          this.element.parentNode.appendChild(b);
          a = b.getBBox().width;
          b.parentNode.removeChild(b);
        }
        return a;
      },
      on: function on(a, b) {
        var d = this,
            l = d.element;
        q && "click" === a ? (l.ontouchstart = function (a) {
          d.touchEventFired = Date.now();
          a.preventDefault();
          b.call(l, a);
        }, l.onclick = function (a) {
          (-1 === S.navigator.userAgent.indexOf("Android") || 1100 < Date.now() - (d.touchEventFired || 0)) && b.call(l, a);
        }) : l["on" + a] = b;
        return this;
      },
      setRadialReference: function setRadialReference(a) {
        var b = this.renderer.gradients[this.element.gradient];
        this.element.radialReference = a;
        b && b.radAttr && b.animate(this.renderer.getRadialAttr(a, b.radAttr));
        return this;
      },
      translate: function translate(a, b) {
        return this.attr({
          translateX: a,
          translateY: b
        });
      },
      invert: function invert(a) {
        this.inverted = a;
        this.updateTransform();
        return this;
      },
      updateTransform: function updateTransform() {
        var a = this.translateX || 0,
            b = this.translateY || 0,
            d = this.scaleX,
            l = this.scaleY,
            e = this.inverted,
            f = this.rotation,
            k = this.matrix,
            c = this.element;
        e && (a += this.width, b += this.height);
        a = ["translate(" + a + "," + b + ")"];
        D(k) && a.push("matrix(" + k.join(",") + ")");
        e ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + w(this.rotationOriginX, c.getAttribute("x"), 0) + " " + w(this.rotationOriginY, c.getAttribute("y") || 0) + ")");
        (D(d) || D(l)) && a.push("scale(" + w(d, 1) + " " + w(l, 1) + ")");
        a.length && c.setAttribute("transform", a.join(" "));
      },
      toFront: function toFront() {
        var a = this.element;
        a.parentNode.appendChild(a);
        return this;
      },
      align: function align(a, b, d) {
        var l,
            G = {};
        var e = this.renderer;
        var f = e.alignedObjects;
        var k, c;

        if (a) {
          if (this.alignOptions = a, this.alignByTranslate = b, !d || y(d)) this.alignTo = l = d || "renderer", F(f, this), f.push(this), d = null;
        } else a = this.alignOptions, b = this.alignByTranslate, l = this.alignTo;

        d = w(d, e[l], e);
        l = a.align;
        e = a.verticalAlign;
        f = (d.x || 0) + (a.x || 0);
        var t = (d.y || 0) + (a.y || 0);
        "right" === l ? k = 1 : "center" === l && (k = 2);
        k && (f += (d.width - (a.width || 0)) / k);
        G[b ? "translateX" : "x"] = Math.round(f);
        "bottom" === e ? c = 1 : "middle" === e && (c = 2);
        c && (t += (d.height - (a.height || 0)) / c);
        G[b ? "translateY" : "y"] = Math.round(t);
        this[this.placed ? "animate" : "attr"](G);
        this.placed = !0;
        this.alignAttr = G;
        return this;
      },
      getBBox: function getBBox(a, b) {
        var d,
            l = this.renderer,
            G = this.element,
            f = this.styles,
            k = this.textStr,
            c,
            t = l.cache,
            h = l.cacheKeys,
            O = G.namespaceURI === this.SVG_NS;
        b = w(b, this.rotation);
        var B = b * e;
        var J = l.styledMode ? G && M.prototype.getStyle.call(G, "font-size") : f && f.fontSize;

        if (D(k)) {
          var K = k.toString();
          -1 === K.indexOf("<") && (K = K.replace(/[0-9]/g, "0"));
          K += ["", b || 0, J, this.textWidth, f && f.textOverflow].join();
        }

        K && !a && (d = t[K]);

        if (!d) {
          if (O || l.forExport) {
            try {
              (c = this.fakeTS && function (a) {
                [].forEach.call(G.querySelectorAll(".highcharts-text-outline"), function (b) {
                  b.style.display = a;
                });
              }) && c("none"), d = G.getBBox ? E({}, G.getBBox()) : {
                width: G.offsetWidth,
                height: G.offsetHeight
              }, c && c("");
            } catch (Z) {
              "";
            }

            if (!d || 0 > d.width) d = {
              width: 0,
              height: 0
            };
          } else d = this.htmlGetBBox();

          l.isSVG && (a = d.width, l = d.height, O && (d.height = l = {
            "11px,17": 14,
            "13px,20": 16
          }[f && f.fontSize + "," + Math.round(l)] || l), b && (d.width = Math.abs(l * Math.sin(B)) + Math.abs(a * Math.cos(B)), d.height = Math.abs(l * Math.cos(B)) + Math.abs(a * Math.sin(B))));

          if (K && 0 < d.height) {
            for (; 250 < h.length;) {
              delete t[h.shift()];
            }

            t[K] || h.push(K);
            t[K] = d;
          }
        }

        return d;
      },
      show: function show(a) {
        return this.attr({
          visibility: a ? "inherit" : "visible"
        });
      },
      hide: function hide(a) {
        a ? this.attr({
          y: -9999
        }) : this.attr({
          visibility: "hidden"
        });
        return this;
      },
      fadeOut: function fadeOut(a) {
        var b = this;
        b.animate({
          opacity: 0
        }, {
          duration: a || 150,
          complete: function complete() {
            b.attr({
              y: -9999
            });
          }
        });
      },
      add: function add(a) {
        var b = this.renderer,
            d = this.element;
        a && (this.parentGroup = a);
        this.parentInverted = a && a.inverted;
        void 0 !== this.textStr && b.buildText(this);
        this.added = !0;
        if (!a || a.handleZ || this.zIndex) var l = this.zIndexSetter();
        l || (a ? a.element : b.box).appendChild(d);
        if (this.onAdd) this.onAdd();
        return this;
      },
      safeRemoveChild: function safeRemoveChild(a) {
        var b = a.parentNode;
        b && b.removeChild(a);
      },
      destroy: function destroy() {
        var a = this,
            b = a.element || {},
            d = a.renderer,
            l = d.isSVG && "SPAN" === b.nodeName && a.parentGroup,
            w = b.ownerSVGElement,
            e = a.clipPath;
        b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;
        J(a);
        e && w && ([].forEach.call(w.querySelectorAll("[clip-path],[CLIP-PATH]"), function (a) {
          -1 < a.getAttribute("clip-path").indexOf(e.element.id) && a.removeAttribute("clip-path");
        }), a.clipPath = e.destroy());

        if (a.stops) {
          for (w = 0; w < a.stops.length; w++) {
            a.stops[w] = a.stops[w].destroy();
          }

          a.stops = null;
        }

        a.safeRemoveChild(b);

        for (d.styledMode || a.destroyShadows(); l && l.div && 0 === l.div.childNodes.length;) {
          b = l.parentGroup, a.safeRemoveChild(l.div), delete l.div, l = b;
        }

        a.alignTo && F(d.alignedObjects, a);
        C(a, function (b, d) {
          a[d] && a[d].parentGroup === a && a[d].destroy && a[d].destroy();
          delete a[d];
        });
      },
      shadow: function shadow(a, b, d) {
        var l = [],
            e,
            f = this.element;
        if (!a) this.destroyShadows();else if (!this.shadows) {
          var G = w(a.width, 3);
          var k = (a.opacity || .15) / G;
          var c = this.parentInverted ? "(-1,-1)" : "(" + w(a.offsetX, 1) + ", " + w(a.offsetY, 1) + ")";

          for (e = 1; e <= G; e++) {
            var t = f.cloneNode(0);
            var h = 2 * G + 1 - 2 * e;
            A(t, {
              stroke: a.color || "#000000",
              "stroke-opacity": k * e,
              "stroke-width": h,
              transform: "translate" + c,
              fill: "none"
            });
            t.setAttribute("class", (t.getAttribute("class") || "") + " highcharts-shadow");
            d && (A(t, "height", Math.max(A(t, "height") - h, 0)), t.cutHeight = h);
            b ? b.element.appendChild(t) : f.parentNode && f.parentNode.insertBefore(t, f);
            l.push(t);
          }

          this.shadows = l;
        }
        return this;
      },
      destroyShadows: function destroyShadows() {
        (this.shadows || []).forEach(function (a) {
          this.safeRemoveChild(a);
        }, this);
        this.shadows = void 0;
      },
      xGetter: function xGetter(a) {
        "circle" === this.element.nodeName && ("x" === a ? a = "cx" : "y" === a && (a = "cy"));
        return this._defaultGetter(a);
      },
      _defaultGetter: function _defaultGetter(a) {
        a = w(this[a + "Value"], this[a], this.element ? this.element.getAttribute(a) : null, 0);
        /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
        return a;
      },
      dSetter: function dSetter(a, b, d) {
        a && a.join && (a = a.join(" "));
        /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
        this[b] !== a && (d.setAttribute(b, a), this[b] = a);
      },
      dashstyleSetter: function dashstyleSetter(a) {
        var b,
            d = this["stroke-width"];
        "inherit" === d && (d = 1);

        if (a = a && a.toLowerCase()) {
          a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");

          for (b = a.length; b--;) {
            a[b] = x(a[b]) * d;
          }

          a = a.join(",").replace(/NaN/g, "none");
          this.element.setAttribute("stroke-dasharray", a);
        }
      },
      alignSetter: function alignSetter(a) {
        var b = {
          left: "start",
          center: "middle",
          right: "end"
        };
        b[a] && (this.alignValue = a, this.element.setAttribute("text-anchor", b[a]));
      },
      opacitySetter: function opacitySetter(a, b, d) {
        this[b] = a;
        d.setAttribute(b, a);
      },
      titleSetter: function titleSetter(a) {
        var b = this.element.getElementsByTagName("title")[0];
        b || (b = r.createElementNS(this.SVG_NS, "title"), this.element.appendChild(b));
        b.firstChild && b.removeChild(b.firstChild);
        b.appendChild(r.createTextNode(String(w(a, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">")));
      },
      textSetter: function textSetter(a) {
        a !== this.textStr && (delete this.bBox, delete this.textPxLength, this.textStr = a, this.added && this.renderer.buildText(this));
      },
      setTextPath: function setTextPath(a, b) {
        var d = this.element,
            l = {
          textAnchor: "text-anchor"
        },
            w = !1,
            e = this.textPathWrapper,
            f = !e;
        b = B(!0, {
          enabled: !0,
          attributes: {
            dy: -5,
            startOffset: "50%",
            textAnchor: "middle"
          }
        }, b);
        var k = b.attributes;

        if (a && b && b.enabled) {
          this.options && this.options.padding && (k.dx = -this.options.padding);
          e || (this.textPathWrapper = e = this.renderer.createElement("textPath"), w = !0);
          var G = e.element;
          (b = a.element.getAttribute("id")) || a.element.setAttribute("id", b = c.uniqueKey());
          if (f) for (a = d.getElementsByTagName("tspan"); a.length;) {
            a[0].setAttribute("y", 0), G.appendChild(a[0]);
          }
          w && e.add({
            element: this.text ? this.text.element : d
          });
          G.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.renderer.url + "#" + b);
          D(k.dy) && (G.parentNode.setAttribute("dy", k.dy), delete k.dy);
          D(k.dx) && (G.parentNode.setAttribute("dx", k.dx), delete k.dx);
          C(k, function (a, b) {
            G.setAttribute(l[b] || b, a);
          });
          d.removeAttribute("transform");
          this.removeTextOutline.call(e, [].slice.call(d.getElementsByTagName("tspan")));
          this.text && !this.renderer.styledMode && this.attr({
            fill: "none",
            "stroke-width": 0
          });
          this.applyTextOutline = this.updateTransform = I;
        } else e && (delete this.updateTransform, delete this.applyTextOutline, this.destroyTextPath(d, a));

        return this;
      },
      destroyTextPath: function destroyTextPath(a, b) {
        var d;
        b.element.setAttribute("id", "");

        for (d = this.textPathWrapper.element.childNodes; d.length;) {
          a.firstChild.appendChild(d[0]);
        }

        a.firstChild.removeChild(this.textPathWrapper.element);
        delete b.textPathWrapper;
      },
      fillSetter: function fillSetter(a, b, d) {
        "string" === typeof a ? d.setAttribute(b, a) : a && this.complexColor(a, b, d);
      },
      visibilitySetter: function visibilitySetter(a, b, d) {
        "inherit" === a ? d.removeAttribute(b) : this[b] !== a && d.setAttribute(b, a);
        this[b] = a;
      },
      zIndexSetter: function zIndexSetter(a, b) {
        var d = this.renderer,
            l = this.parentGroup,
            w = (l || d).element || d.box,
            e = this.element,
            f = !1;
        d = w === d.box;
        var k = this.added;
        var c;
        D(a) ? (e.setAttribute("data-z-index", a), a = +a, this[b] === a && (k = !1)) : D(this[b]) && e.removeAttribute("data-z-index");
        this[b] = a;

        if (k) {
          (a = this.zIndex) && l && (l.handleZ = !0);
          b = w.childNodes;

          for (c = b.length - 1; 0 <= c && !f; c--) {
            l = b[c];
            k = l.getAttribute("data-z-index");
            var G = !D(k);
            if (l !== e) if (0 > a && G && !d && !c) w.insertBefore(e, b[c]), f = !0;else if (x(k) <= a || G && (!D(a) || 0 <= a)) w.insertBefore(e, b[c + 1] || null), f = !0;
          }

          f || (w.insertBefore(e, b[d ? 3 : 0] || null), f = !0);
        }

        return f;
      },
      _defaultSetter: function _defaultSetter(a, b, d) {
        d.setAttribute(b, a);
      }
    });
    M.prototype.yGetter = M.prototype.xGetter;

    M.prototype.translateXSetter = M.prototype.translateYSetter = M.prototype.rotationSetter = M.prototype.verticalAlignSetter = M.prototype.rotationOriginXSetter = M.prototype.rotationOriginYSetter = M.prototype.scaleXSetter = M.prototype.scaleYSetter = M.prototype.matrixSetter = function (a, b) {
      this[b] = a;
      this.doTransform = !0;
    };

    M.prototype["stroke-widthSetter"] = M.prototype.strokeSetter = function (a, b, d) {
      this[b] = a;
      this.stroke && this["stroke-width"] ? (M.prototype.fillSetter.call(this, this.stroke, "stroke", d), d.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === b && 0 === a && this.hasStroke ? (d.removeAttribute("stroke"), this.hasStroke = !1) : this.renderer.styledMode && this["stroke-width"] && (d.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0);
    };

    n = c.SVGRenderer = function () {
      this.init.apply(this, arguments);
    };

    E(n.prototype, {
      Element: M,
      SVG_NS: T,
      init: function init(a, b, l, w, e, f, k) {
        var c = this.createElement("svg").attr({
          version: "1.1",
          "class": "highcharts-root"
        });
        k || c.css(this.getStyle(w));
        w = c.element;
        a.appendChild(w);
        A(a, "dir", "ltr");
        -1 === a.innerHTML.indexOf("xmlns") && A(w, "xmlns", this.SVG_NS);
        this.isSVG = !0;
        this.box = w;
        this.boxWrapper = c;
        this.alignedObjects = [];
        this.url = (v || t) && r.getElementsByTagName("base").length ? S.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
        this.createElement("desc").add().element.appendChild(r.createTextNode("Created with Highcharts 7.2.0"));
        this.defs = this.createElement("defs").add();
        this.allowHTML = f;
        this.forExport = e;
        this.styledMode = k;
        this.gradients = {};
        this.cache = {};
        this.cacheKeys = [];
        this.imgCount = 0;
        this.setSize(b, l, !1);
        var G;
        v && a.getBoundingClientRect && (b = function b() {
          d(a, {
            left: 0,
            top: 0
          });
          G = a.getBoundingClientRect();
          d(a, {
            left: Math.ceil(G.left) - G.left + "px",
            top: Math.ceil(G.top) - G.top + "px"
          });
        }, b(), this.unSubPixelFix = p(S, "resize", b));
      },
      definition: function definition(a) {
        function b(a, l) {
          var w;
          m(a).forEach(function (a) {
            var e = d.createElement(a.tagName),
                f = {};
            C(a, function (a, b) {
              "tagName" !== b && "children" !== b && "textContent" !== b && (f[b] = a);
            });
            e.attr(f);
            e.add(l || d.defs);
            a.textContent && e.element.appendChild(r.createTextNode(a.textContent));
            b(a.children || [], e);
            w = e;
          });
          return w;
        }

        var d = this;
        return b(a);
      },
      getStyle: function getStyle(a) {
        return this.style = E({
          fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
          fontSize: "12px"
        }, a);
      },
      setStyle: function setStyle(a) {
        this.boxWrapper.css(this.getStyle(a));
      },
      isHidden: function isHidden() {
        return !this.boxWrapper.getBBox().width;
      },
      destroy: function destroy() {
        var a = this.defs;
        this.box = null;
        this.boxWrapper = this.boxWrapper.destroy();
        h(this.gradients || {});
        this.gradients = null;
        a && (this.defs = a.destroy());
        this.unSubPixelFix && this.unSubPixelFix();
        return this.alignedObjects = null;
      },
      createElement: function createElement(a) {
        var b = new this.Element();
        b.init(this, a);
        return b;
      },
      draw: I,
      getRadialAttr: function getRadialAttr(a, b) {
        return {
          cx: a[0] - a[2] / 2 + b.cx * a[2],
          cy: a[1] - a[2] / 2 + b.cy * a[2],
          r: b.r * a[2]
        };
      },
      truncate: function truncate(a, b, d, l, w, e, f) {
        var k = this,
            c = a.rotation,
            t,
            G = l ? 1 : 0,
            h = (d || l).length,
            B = h,
            J = [],
            K = function K(a) {
          b.firstChild && b.removeChild(b.firstChild);
          a && b.appendChild(r.createTextNode(a));
        },
            M = function M(e, c) {
          c = c || e;
          if (void 0 === J[c]) if (b.getSubStringLength) try {
            J[c] = w + b.getSubStringLength(0, l ? c + 1 : c);
          } catch (aa) {
            "";
          } else k.getSpanWidth && (K(f(d || l, e)), J[c] = w + k.getSpanWidth(a, b));
          return J[c];
        },
            O;

        a.rotation = 0;
        var q = M(b.textContent.length);

        if (O = w + q > e) {
          for (; G <= h;) {
            B = Math.ceil((G + h) / 2), l && (t = f(l, B)), q = M(B, t && t.length - 1), G === h ? G = h + 1 : q > e ? h = B - 1 : G = B;
          }

          0 === h ? K("") : d && h === d.length - 1 || K(t || f(d || l, B));
        }

        l && l.splice(0, B);
        a.actualWidth = q;
        a.rotation = c;
        return O;
      },
      escapes: {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
      },
      buildText: function buildText(a) {
        var b = a.element,
            l = this,
            e = l.forExport,
            f = w(a.textStr, "").toString(),
            k = -1 !== f.indexOf("<"),
            c = b.childNodes,
            t,
            h = A(b, "x"),
            G = a.styles,
            B = a.textWidth,
            J = G && G.lineHeight,
            M = G && G.textOutline,
            q = G && "ellipsis" === G.textOverflow,
            v = G && "nowrap" === G.whiteSpace,
            I = G && G.fontSize,
            m,
            g = c.length;
        G = B && !a.added && this.box;

        var E = function E(a) {
          var d;
          l.styledMode || (d = /(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : I || l.style.fontSize || 12);
          return J ? x(J) : l.fontMetrics(d, a.getAttribute("style") ? a : b).h;
        },
            p = function p(a, b) {
          C(l.escapes, function (d, l) {
            b && -1 !== b.indexOf(d) || (a = a.toString().replace(new RegExp(d, "g"), l));
          });
          return a;
        },
            R = function R(a, b) {
          var d = a.indexOf("<");
          a = a.substring(d, a.indexOf(">") - d);
          d = a.indexOf(b + "=");
          if (-1 !== d && (d = d + b.length + 1, b = a.charAt(d), '"' === b || "'" === b)) return a = a.substring(d + 1), a.substring(0, a.indexOf(b));
        },
            S = /<br.*?>/g;

        var u = [f, q, v, J, M, I, B].join();

        if (u !== a.textCache) {
          for (a.textCache = u; g--;) {
            b.removeChild(c[g]);
          }

          k || M || q || B || -1 !== f.indexOf(" ") && (!v || S.test(f)) ? (G && G.appendChild(b), k ? (f = l.styledMode ? f.replace(/<(b|strong)>/g, '<span class="highcharts-strong">').replace(/<(i|em)>/g, '<span class="highcharts-emphasized">') : f.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">'), f = f.replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(S)) : f = [f], f = f.filter(function (a) {
            return "" !== a;
          }), f.forEach(function (w, f) {
            var k = 0,
                c = 0;
            w = w.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
            var G = w.split("|||");
            G.forEach(function (w) {
              if ("" !== w || 1 === G.length) {
                var J = {},
                    M = r.createElementNS(l.SVG_NS, "tspan"),
                    O,
                    g;
                (O = R(w, "class")) && A(M, "class", O);
                if (O = R(w, "style")) O = O.replace(/(;| |^)color([ :])/, "$1fill$2"), A(M, "style", O);
                (g = R(w, "href")) && !e && (A(M, "onclick", 'location.href="' + g + '"'), A(M, "class", "highcharts-anchor"), l.styledMode || d(M, {
                  cursor: "pointer"
                }));
                w = p(w.replace(/<[a-zA-Z\/](.|\n)*?>/g, "") || " ");

                if (" " !== w) {
                  M.appendChild(r.createTextNode(w));
                  k ? J.dx = 0 : f && null !== h && (J.x = h);
                  A(M, J);
                  b.appendChild(M);
                  !k && m && (!K && e && d(M, {
                    display: "block"
                  }), A(M, "dy", E(M)));

                  if (B) {
                    var Q = w.replace(/([^\^])-/g, "$1- ").split(" ");
                    J = !v && (1 < G.length || f || 1 < Q.length);
                    g = 0;
                    var x = E(M);
                    if (q) t = l.truncate(a, M, w, void 0, 0, Math.max(0, B - parseInt(I || 12, 10)), function (a, b) {
                      return a.substring(0, b) + "\u2026";
                    });else if (J) for (; Q.length;) {
                      Q.length && !v && 0 < g && (M = r.createElementNS(T, "tspan"), A(M, {
                        dy: x,
                        x: h
                      }), O && A(M, "style", O), M.appendChild(r.createTextNode(Q.join(" ").replace(/- /g, "-"))), b.appendChild(M)), l.truncate(a, M, null, Q, 0 === g ? c : 0, B, function (a, b) {
                        return Q.slice(0, b).join(" ").replace(/- /g, "-");
                      }), c = a.actualWidth, g++;
                    }
                  }

                  k++;
                }
              }
            });
            m = m || b.childNodes.length;
          }), q && t && a.attr("title", p(a.textStr, ["&lt;", "&gt;"])), G && G.removeChild(b), M && a.applyTextOutline && a.applyTextOutline(M)) : b.appendChild(r.createTextNode(p(f)));
        }
      },
      getContrast: function getContrast(b) {
        b = a(b).rgba;
        b[0] *= 1;
        b[1] *= 1.2;
        b[2] *= .5;
        return 459 < b[0] + b[1] + b[2] ? "#000000" : "#FFFFFF";
      },
      button: function button(a, b, d, l, w, e, f, c, t, h) {
        var G = this.label(a, b, d, t, null, null, h, null, "button"),
            J = 0,
            K = this.styledMode;
        G.attr(B({
          padding: 8,
          r: 2
        }, w));

        if (!K) {
          w = B({
            fill: "#f7f7f7",
            stroke: "#cccccc",
            "stroke-width": 1,
            style: {
              color: "#333333",
              cursor: "pointer",
              fontWeight: "normal"
            }
          }, w);
          var M = w.style;
          delete w.style;
          e = B(w, {
            fill: "#e6e6e6"
          }, e);
          var r = e.style;
          delete e.style;
          f = B(w, {
            fill: "#e6ebf5",
            style: {
              color: "#000000",
              fontWeight: "bold"
            }
          }, f);
          var q = f.style;
          delete f.style;
          c = B(w, {
            style: {
              color: "#cccccc"
            }
          }, c);
          var O = c.style;
          delete c.style;
        }

        p(G.element, k ? "mouseover" : "mouseenter", function () {
          3 !== J && G.setState(1);
        });
        p(G.element, k ? "mouseout" : "mouseleave", function () {
          3 !== J && G.setState(J);
        });

        G.setState = function (a) {
          1 !== a && (G.state = J = a);
          G.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][a || 0]);
          K || G.attr([w, e, f, c][a || 0]).css([M, r, q, O][a || 0]);
        };

        K || G.attr(w).css(E({
          cursor: "default"
        }, M));
        return G.on("click", function (a) {
          3 !== J && l.call(G, a);
        });
      },
      crispLine: function crispLine(a, b) {
        a[1] === a[4] && (a[1] = a[4] = Math.round(a[1]) - b % 2 / 2);
        a[2] === a[5] && (a[2] = a[5] = Math.round(a[2]) + b % 2 / 2);
        return a;
      },
      path: function path(a) {
        var b = this.styledMode ? {} : {
          fill: "none"
        };
        z(a) ? b.d = a : L(a) && E(b, a);
        return this.createElement("path").attr(b);
      },
      circle: function circle(a, b, d) {
        a = L(a) ? a : void 0 === a ? {} : {
          x: a,
          y: b,
          r: d
        };
        b = this.createElement("circle");

        b.xSetter = b.ySetter = function (a, b, d) {
          d.setAttribute("c" + b, a);
        };

        return b.attr(a);
      },
      arc: function arc(a, b, d, l, w, e) {
        L(a) ? (l = a, b = l.y, d = l.r, a = l.x) : l = {
          innerR: l,
          start: w,
          end: e
        };
        a = this.symbol("arc", a, b, d, d, l);
        a.r = d;
        return a;
      },
      rect: function rect(a, b, d, l, w, e) {
        w = L(a) ? a.r : w;
        var f = this.createElement("rect");
        a = L(a) ? a : void 0 === a ? {} : {
          x: a,
          y: b,
          width: Math.max(d, 0),
          height: Math.max(l, 0)
        };
        this.styledMode || (void 0 !== e && (a.strokeWidth = e, a = f.crisp(a)), a.fill = "none");
        w && (a.r = w);

        f.rSetter = function (a, b, d) {
          f.r = a;
          A(d, {
            rx: a,
            ry: a
          });
        };

        f.rGetter = function () {
          return f.r;
        };

        return f.attr(a);
      },
      setSize: function setSize(a, b, d) {
        var l = this.alignedObjects,
            e = l.length;
        this.width = a;
        this.height = b;

        for (this.boxWrapper.animate({
          width: a,
          height: b
        }, {
          step: function step() {
            this.attr({
              viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
            });
          },
          duration: w(d, !0) ? void 0 : 0
        }); e--;) {
          l[e].align();
        }
      },
      g: function g(a) {
        var b = this.createElement("g");
        return a ? b.attr({
          "class": "highcharts-" + a
        }) : b;
      },
      image: function image(a, b, d, l, w, e) {
        var f = {
          preserveAspectRatio: "none"
        },
            k = function k(a, b) {
          a.setAttributeNS ? a.setAttributeNS("http://www.w3.org/1999/xlink", "href", b) : a.setAttribute("hc-svg-href", b);
        },
            c = function c(b) {
          k(t.element, a);
          e.call(t, b);
        };

        1 < arguments.length && E(f, {
          x: b,
          y: d,
          width: l,
          height: w
        });
        var t = this.createElement("image").attr(f);
        e ? (k(t.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), f = new S.Image(), p(f, "load", c), f.src = a, f.complete && c({})) : k(t.element, a);
        return t;
      },
      symbol: function symbol(a, l, e, k, c, t) {
        var h = this,
            B = /^url\((.*?)\)$/,
            G = B.test(a),
            J = !G && (this.symbols[a] ? a : "circle"),
            K = J && this.symbols[J],
            M = D(l) && K && K.call(this.symbols, Math.round(l), Math.round(e), k, c, t);

        if (K) {
          var q = this.path(M);
          h.styledMode || q.attr("fill", "none");
          E(q, {
            symbolName: J,
            x: l,
            y: e,
            width: k,
            height: c
          });
          t && E(q, t);
        } else if (G) {
          var v = a.match(B)[1];
          q = this.image(v);
          q.imgwidth = w(R[v] && R[v].width, t && t.width);
          q.imgheight = w(R[v] && R[v].height, t && t.height);

          var I = function I() {
            q.attr({
              width: q.width,
              height: q.height
            });
          };

          ["width", "height"].forEach(function (a) {
            q[a + "Setter"] = function (a, b) {
              var d = {},
                  l = this["img" + b],
                  w = "width" === b ? "translateX" : "translateY";
              this[b] = a;
              D(l) && (t && "within" === t.backgroundSize && this.width && this.height && (l = Math.round(l * Math.min(this.width / this.imgwidth, this.height / this.imgheight))), this.element && this.element.setAttribute(b, l), this.alignByTranslate || (d[w] = ((this[b] || 0) - l) / 2, this.attr(d)));
            };
          });
          D(l) && q.attr({
            x: l,
            y: e
          });
          q.isImg = !0;
          D(q.imgwidth) && D(q.imgheight) ? I() : (q.attr({
            width: 0,
            height: 0
          }), f("img", {
            onload: function onload() {
              var a = b[h.chartIndex];
              0 === this.width && (d(this, {
                position: "absolute",
                top: "-999em"
              }), r.body.appendChild(this));
              R[v] = {
                width: this.width,
                height: this.height
              };
              q.imgwidth = this.width;
              q.imgheight = this.height;
              q.element && I();
              this.parentNode && this.parentNode.removeChild(this);
              h.imgCount--;
              if (!h.imgCount && a && a.onload) a.onload();
            },
            src: v
          }), this.imgCount++);
        }

        return q;
      },
      symbols: {
        circle: function circle(a, b, d, l) {
          return this.arc(a + d / 2, b + l / 2, d / 2, l / 2, {
            start: .5 * Math.PI,
            end: 2.5 * Math.PI,
            open: !1
          });
        },
        square: function square(a, b, d, l) {
          return ["M", a, b, "L", a + d, b, a + d, b + l, a, b + l, "Z"];
        },
        triangle: function triangle(a, b, d, l) {
          return ["M", a + d / 2, b, "L", a + d, b + l, a, b + l, "Z"];
        },
        "triangle-down": function triangleDown(a, b, d, l) {
          return ["M", a, b, "L", a + d, b, a + d / 2, b + l, "Z"];
        },
        diamond: function diamond(a, b, d, l) {
          return ["M", a + d / 2, b, "L", a + d, b + l / 2, a + d / 2, b + l, a, b + l / 2, "Z"];
        },
        arc: function arc(a, b, d, l, e) {
          var f = e.start,
              k = e.r || d,
              c = e.r || l || d,
              t = e.end - .001;
          d = e.innerR;
          l = w(e.open, .001 > Math.abs(e.end - e.start - 2 * Math.PI));
          var h = Math.cos(f),
              B = Math.sin(f),
              J = Math.cos(t);
          t = Math.sin(t);
          f = .001 > e.end - f - Math.PI ? 0 : 1;
          e = ["M", a + k * h, b + c * B, "A", k, c, 0, f, w(e.clockwise, 1), a + k * J, b + c * t];
          D(d) && e.push(l ? "M" : "L", a + d * J, b + d * t, "A", d, d, 0, f, 0, a + d * h, b + d * B);
          e.push(l ? "" : "Z");
          return e;
        },
        callout: function callout(a, b, d, l, w) {
          var e = Math.min(w && w.r || 0, d, l),
              f = e + 6,
              k = w && w.anchorX;
          w = w && w.anchorY;
          var c = ["M", a + e, b, "L", a + d - e, b, "C", a + d, b, a + d, b, a + d, b + e, "L", a + d, b + l - e, "C", a + d, b + l, a + d, b + l, a + d - e, b + l, "L", a + e, b + l, "C", a, b + l, a, b + l, a, b + l - e, "L", a, b + e, "C", a, b, a, b, a + e, b];
          k && k > d ? w > b + f && w < b + l - f ? c.splice(13, 3, "L", a + d, w - 6, a + d + 6, w, a + d, w + 6, a + d, b + l - e) : c.splice(13, 3, "L", a + d, l / 2, k, w, a + d, l / 2, a + d, b + l - e) : k && 0 > k ? w > b + f && w < b + l - f ? c.splice(33, 3, "L", a, w + 6, a - 6, w, a, w - 6, a, b + e) : c.splice(33, 3, "L", a, l / 2, k, w, a, l / 2, a, b + e) : w && w > l && k > a + f && k < a + d - f ? c.splice(23, 3, "L", k + 6, b + l, k, b + l + 6, k - 6, b + l, a + e, b + l) : w && 0 > w && k > a + f && k < a + d - f && c.splice(3, 3, "L", k - 6, b, k, b - 6, k + 6, b, d - e, b);
          return c;
        }
      },
      clipRect: function clipRect(a, b, d, l) {
        var w = c.uniqueKey() + "-",
            e = this.createElement("clipPath").attr({
          id: w
        }).add(this.defs);
        a = this.rect(a, b, d, l, 0).add(e);
        a.id = w;
        a.clipPath = e;
        a.count = 0;
        return a;
      },
      text: function text(a, b, d, l) {
        var w = {};
        if (l && (this.allowHTML || !this.forExport)) return this.html(a, b, d);
        w.x = Math.round(b || 0);
        d && (w.y = Math.round(d));
        D(a) && (w.text = a);
        a = this.createElement("text").attr(w);
        l || (a.xSetter = function (a, b, d) {
          var l = d.getElementsByTagName("tspan"),
              w = d.getAttribute(b),
              e;

          for (e = 0; e < l.length; e++) {
            var f = l[e];
            f.getAttribute(b) === w && f.setAttribute(b, a);
          }

          d.setAttribute(b, a);
        });
        return a;
      },
      fontMetrics: function fontMetrics(a, b) {
        a = !this.styledMode && /px/.test(a) || !S.getComputedStyle ? a || b && b.style && b.style.fontSize || this.style && this.style.fontSize : b && M.prototype.getStyle.call(b, "font-size");
        a = /px/.test(a) ? x(a) : 12;
        b = 24 > a ? a + 3 : Math.round(1.2 * a);
        return {
          h: b,
          b: Math.round(.8 * b),
          f: a
        };
      },
      rotCorr: function rotCorr(a, b, d) {
        var l = a;
        b && d && (l = Math.max(l * Math.cos(b * e), 4));
        return {
          x: -a / 3 * Math.sin(b * e),
          y: l
        };
      },
      label: function label(a, b, d, w, e, f, k, c, t) {
        var h = this,
            J = h.styledMode,
            K = h.g("button" !== t && "label"),
            q = K.text = h.text("", 0, 0, k).attr({
          zIndex: 1
        }),
            r,
            v,
            G = 0,
            I = 3,
            m = 0,
            g,
            p,
            O,
            T,
            x,
            Q = {},
            R,
            S,
            z = /^url\((.*?)\)$/.test(w),
            y = J || z,
            n = function n() {
          return J ? r.strokeWidth() % 2 / 2 : (R ? parseInt(R, 10) : 0) % 2 / 2;
        };

        t && K.addClass("highcharts-" + t);

        var L = function L() {
          var a = q.element.style,
              b = {};
          v = (void 0 === g || void 0 === p || x) && D(q.textStr) && q.getBBox();
          K.width = (g || v.width || 0) + 2 * I + m;
          K.height = (p || v.height || 0) + 2 * I;
          S = I + Math.min(h.fontMetrics(a && a.fontSize, q).b, v ? v.height : Infinity);
          y && (r || (K.box = r = h.symbols[w] || z ? h.symbol(w) : h.rect(), r.addClass(("button" === t ? "" : "highcharts-label-box") + (t ? " highcharts-" + t + "-box" : "")), r.add(K), a = n(), b.x = a, b.y = (c ? -S : 0) + a), b.width = Math.round(K.width), b.height = Math.round(K.height), r.attr(E(b, Q)), Q = {});
        };

        var C = function C() {
          var a = m + I;
          var b = c ? 0 : S;
          D(g) && v && ("center" === x || "right" === x) && (a += {
            center: .5,
            right: 1
          }[x] * (g - v.width));
          if (a !== q.x || b !== q.y) q.attr("x", a), q.hasBoxWidthChanged && (v = q.getBBox(!0), L()), void 0 !== b && q.attr("y", b);
          q.x = a;
          q.y = b;
        };

        var A = function A(a, b) {
          r ? r.attr(a, b) : Q[a] = b;
        };

        K.onAdd = function () {
          q.add(K);
          K.attr({
            text: a || 0 === a ? a : "",
            x: b,
            y: d
          });
          r && D(e) && K.attr({
            anchorX: e,
            anchorY: f
          });
        };

        K.widthSetter = function (a) {
          g = u(a) ? a : null;
        };

        K.heightSetter = function (a) {
          p = a;
        };

        K["text-alignSetter"] = function (a) {
          x = a;
        };

        K.paddingSetter = function (a) {
          D(a) && a !== I && (I = K.padding = a, C());
        };

        K.paddingLeftSetter = function (a) {
          D(a) && a !== m && (m = a, C());
        };

        K.alignSetter = function (a) {
          a = {
            left: 0,
            center: .5,
            right: 1
          }[a];
          a !== G && (G = a, v && K.attr({
            x: O
          }));
        };

        K.textSetter = function (a) {
          void 0 !== a && q.attr({
            text: a
          });
          L();
          C();
        };

        K["stroke-widthSetter"] = function (a, b) {
          a && (y = !0);
          R = this["stroke-width"] = a;
          A(b, a);
        };

        J ? K.rSetter = function (a, b) {
          A(b, a);
        } : K.strokeSetter = K.fillSetter = K.rSetter = function (a, b) {
          "r" !== b && ("fill" === b && a && (y = !0), K[b] = a);
          A(b, a);
        };

        K.anchorXSetter = function (a, b) {
          e = K.anchorX = a;
          A(b, Math.round(a) - n() - O);
        };

        K.anchorYSetter = function (a, b) {
          f = K.anchorY = a;
          A(b, a - T);
        };

        K.xSetter = function (a) {
          K.x = a;
          G && (a -= G * ((g || v.width) + 2 * I), K["forceAnimate:x"] = !0);
          O = Math.round(a);
          K.attr("translateX", O);
        };

        K.ySetter = function (a) {
          T = K.y = Math.round(a);
          K.attr("translateY", T);
        };

        var U = K.css;
        k = {
          css: function css(a) {
            if (a) {
              var b = {};
              a = B(a);
              K.textProps.forEach(function (d) {
                void 0 !== a[d] && (b[d] = a[d], delete a[d]);
              });
              q.css(b);
              "width" in b && L();
              "fontSize" in b && (L(), C());
            }

            return U.call(K, a);
          },
          getBBox: function getBBox() {
            return {
              width: v.width + 2 * I,
              height: v.height + 2 * I,
              x: v.x - I,
              y: v.y - I
            };
          },
          destroy: function destroy() {
            l(K.element, "mouseenter");
            l(K.element, "mouseleave");
            q && (q = q.destroy());
            r && (r = r.destroy());
            M.prototype.destroy.call(K);
            K = h = L = C = A = null;
          }
        };
        J || (k.shadow = function (a) {
          a && (L(), r && r.shadow(a));
          return K;
        });
        return E(K, k);
      }
    });
    c.Renderer = n;
  });
  N(H, "parts/Html.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.attr,
        D = n.defined,
        F = n.pInt,
        z = c.createElement,
        u = c.css,
        L = c.extend,
        y = c.isFirefox,
        C = c.isMS,
        x = c.isWebKit,
        m = c.pick,
        p = c.SVGElement;
    n = c.SVGRenderer;
    var g = c.win;
    L(p.prototype, {
      htmlCss: function htmlCss(b) {
        var a = "SPAN" === this.element.tagName && b && "width" in b,
            d = m(a && b.width, void 0);

        if (a) {
          delete b.width;
          this.textWidth = d;
          var f = !0;
        }

        b && "ellipsis" === b.textOverflow && (b.whiteSpace = "nowrap", b.overflow = "hidden");
        this.styles = L(this.styles, b);
        u(this.element, b);
        f && this.htmlUpdateTransform();
        return this;
      },
      htmlGetBBox: function htmlGetBBox() {
        var b = this.element;
        return {
          x: b.offsetLeft,
          y: b.offsetTop,
          width: b.offsetWidth,
          height: b.offsetHeight
        };
      },
      htmlUpdateTransform: function htmlUpdateTransform() {
        if (this.added) {
          var b = this.renderer,
              a = this.element,
              d = this.translateX || 0,
              f = this.translateY || 0,
              e = this.x || 0,
              c = this.y || 0,
              r = this.textAlign || "left",
              m = {
            left: 0,
            center: .5,
            right: 1
          }[r],
              q = this.styles,
              v = q && q.whiteSpace;
          u(a, {
            marginLeft: d,
            marginTop: f
          });
          !b.styledMode && this.shadows && this.shadows.forEach(function (a) {
            u(a, {
              marginLeft: d + 1,
              marginTop: f + 1
            });
          });
          this.inverted && [].forEach.call(a.childNodes, function (d) {
            b.invertChild(d, a);
          });

          if ("SPAN" === a.tagName) {
            q = this.rotation;
            var k = this.textWidth && F(this.textWidth),
                t = [q, r, a.innerHTML, this.textWidth, this.textAlign].join(),
                B;
            (B = k !== this.oldTextWidth) && !(B = k > this.oldTextWidth) && ((B = this.textPxLength) || (u(a, {
              width: "",
              whiteSpace: v || "nowrap"
            }), B = a.offsetWidth), B = B > k);
            B && (/[ \-]/.test(a.textContent || a.innerText) || "ellipsis" === a.style.textOverflow) ? (u(a, {
              width: k + "px",
              display: "block",
              whiteSpace: v || "normal"
            }), this.oldTextWidth = k, this.hasBoxWidthChanged = !0) : this.hasBoxWidthChanged = !1;
            t !== this.cTT && (v = b.fontMetrics(a.style.fontSize, a).b, !D(q) || q === (this.oldRotation || 0) && r === this.oldAlign || this.setSpanRotation(q, m, v), this.getSpanCorrection(!D(q) && this.textPxLength || a.offsetWidth, v, m, q, r));
            u(a, {
              left: e + (this.xCorr || 0) + "px",
              top: c + (this.yCorr || 0) + "px"
            });
            this.cTT = t;
            this.oldRotation = q;
            this.oldAlign = r;
          }
        } else this.alignOnAdd = !0;
      },
      setSpanRotation: function setSpanRotation(b, a, d) {
        var f = {},
            e = this.renderer.getTransformKey();
        f[e] = f.transform = "rotate(" + b + "deg)";
        f[e + (y ? "Origin" : "-origin")] = f.transformOrigin = 100 * a + "% " + d + "px";
        u(this.element, f);
      },
      getSpanCorrection: function getSpanCorrection(b, a, d) {
        this.xCorr = -b * d;
        this.yCorr = -a;
      }
    });
    L(n.prototype, {
      getTransformKey: function getTransformKey() {
        return C && !/Edge/.test(g.navigator.userAgent) ? "-ms-transform" : x ? "-webkit-transform" : y ? "MozTransform" : g.opera ? "-o-transform" : "";
      },
      html: function html(b, a, d) {
        var f = this.createElement("span"),
            e = f.element,
            c = f.renderer,
            r = c.isSVG,
            g = function g(a, b) {
          ["opacity", "visibility"].forEach(function (d) {
            a[d + "Setter"] = function (e, f, k) {
              var w = a.div ? a.div.style : b;
              p.prototype[d + "Setter"].call(this, e, f, k);
              w && (w[f] = e);
            };
          });
          a.addedSetters = !0;
        };

        f.textSetter = function (a) {
          a !== e.innerHTML && (delete this.bBox, delete this.oldTextWidth);
          this.textStr = a;
          e.innerHTML = m(a, "");
          f.doTransform = !0;
        };

        r && g(f, f.element.style);

        f.xSetter = f.ySetter = f.alignSetter = f.rotationSetter = function (a, b) {
          "align" === b && (b = "textAlign");
          f[b] = a;
          f.doTransform = !0;
        };

        f.afterSetters = function () {
          this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1);
        };

        f.attr({
          text: b,
          x: Math.round(a),
          y: Math.round(d)
        }).css({
          position: "absolute"
        });
        c.styledMode || f.css({
          fontFamily: this.style.fontFamily,
          fontSize: this.style.fontSize
        });
        e.style.whiteSpace = "nowrap";
        f.css = f.htmlCss;
        r && (f.add = function (a) {
          var b = c.box.parentNode,
              d = [];

          if (this.parentGroup = a) {
            var t = a.div;

            if (!t) {
              for (; a;) {
                d.push(a), a = a.parentGroup;
              }

              d.reverse().forEach(function (a) {
                function e(b, d) {
                  a[d] = b;
                  "translateX" === d ? l.left = b + "px" : l.top = b + "px";
                  a.doTransform = !0;
                }

                var w = A(a.element, "class");
                t = a.div = a.div || z("div", w ? {
                  className: w
                } : void 0, {
                  position: "absolute",
                  left: (a.translateX || 0) + "px",
                  top: (a.translateY || 0) + "px",
                  display: a.display,
                  opacity: a.opacity,
                  pointerEvents: a.styles && a.styles.pointerEvents
                }, t || b);
                var l = t.style;
                L(a, {
                  classSetter: function (a) {
                    return function (b) {
                      this.element.setAttribute("class", b);
                      a.className = b;
                    };
                  }(t),
                  on: function on() {
                    d[0].div && f.on.apply({
                      element: d[0].div
                    }, arguments);
                    return a;
                  },
                  translateXSetter: e,
                  translateYSetter: e
                });
                a.addedSetters || g(a);
              });
            }
          } else t = b;

          t.appendChild(e);
          f.added = !0;
          f.alignOnAdd && f.htmlUpdateTransform();
          return f;
        });
        return f;
      }
    });
  });
  N(H, "parts/Time.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.isObject,
        F = n.objectEach,
        z = n.splat,
        u = c.extend,
        L = c.merge,
        y = c.pick,
        C = c.timeUnits,
        x = c.win;

    c.Time = function (c) {
      this.update(c, !1);
    };

    c.Time.prototype = {
      defaultOptions: {},
      update: function update(c) {
        var m = y(c && c.useUTC, !0),
            g = this;
        this.options = c = L(!0, this.options || {}, c);
        this.Date = c.Date || x.Date || Date;
        this.timezoneOffset = (this.useUTC = m) && c.timezoneOffset;
        this.getTimezoneOffset = this.timezoneOffsetFunction();
        (this.variableTimezone = !(m && !c.getTimezoneOffset && !c.timezone)) || this.timezoneOffset ? (this.get = function (b, a) {
          var d = a.getTime(),
              f = d - g.getTimezoneOffset(a);
          a.setTime(f);
          b = a["getUTC" + b]();
          a.setTime(d);
          return b;
        }, this.set = function (b, a, d) {
          if ("Milliseconds" === b || "Seconds" === b || "Minutes" === b && 0 === a.getTimezoneOffset() % 60) a["set" + b](d);else {
            var f = g.getTimezoneOffset(a);
            f = a.getTime() - f;
            a.setTime(f);
            a["setUTC" + b](d);
            b = g.getTimezoneOffset(a);
            f = a.getTime() + b;
            a.setTime(f);
          }
        }) : m ? (this.get = function (b, a) {
          return a["getUTC" + b]();
        }, this.set = function (b, a, d) {
          return a["setUTC" + b](d);
        }) : (this.get = function (b, a) {
          return a["get" + b]();
        }, this.set = function (b, a, d) {
          return a["set" + b](d);
        });
      },
      makeTime: function makeTime(m, p, g, b, a, d) {
        if (this.useUTC) {
          var f = this.Date.UTC.apply(0, arguments);
          var e = this.getTimezoneOffset(f);
          f += e;
          var h = this.getTimezoneOffset(f);
          e !== h ? f += h - e : e - 36E5 !== this.getTimezoneOffset(f - 36E5) || c.isSafari || (f -= 36E5);
        } else f = new this.Date(m, p, y(g, 1), y(b, 0), y(a, 0), y(d, 0)).getTime();

        return f;
      },
      timezoneOffsetFunction: function timezoneOffsetFunction() {
        var m = this,
            p = this.options,
            g = x.moment;
        if (!this.useUTC) return function (b) {
          return 6E4 * new Date(b).getTimezoneOffset();
        };

        if (p.timezone) {
          if (g) return function (b) {
            return 6E4 * -g.tz(b, p.timezone).utcOffset();
          };
          c.error(25);
        }

        return this.useUTC && p.getTimezoneOffset ? function (b) {
          return 6E4 * p.getTimezoneOffset(b);
        } : function () {
          return 6E4 * (m.timezoneOffset || 0);
        };
      },
      dateFormat: function dateFormat(m, p, g) {
        if (!A(p) || isNaN(p)) return c.defaultOptions.lang.invalidDate || "";
        m = c.pick(m, "%Y-%m-%d %H:%M:%S");
        var b = this,
            a = new this.Date(p),
            d = this.get("Hours", a),
            f = this.get("Day", a),
            e = this.get("Date", a),
            h = this.get("Month", a),
            r = this.get("FullYear", a),
            E = c.defaultOptions.lang,
            q = E.weekdays,
            v = E.shortWeekdays,
            k = c.pad;
        a = c.extend({
          a: v ? v[f] : q[f].substr(0, 3),
          A: q[f],
          d: k(e),
          e: k(e, 2, " "),
          w: f,
          b: E.shortMonths[h],
          B: E.months[h],
          m: k(h + 1),
          o: h + 1,
          y: r.toString().substr(2, 2),
          Y: r,
          H: k(d),
          k: d,
          I: k(d % 12 || 12),
          l: d % 12 || 12,
          M: k(b.get("Minutes", a)),
          p: 12 > d ? "AM" : "PM",
          P: 12 > d ? "am" : "pm",
          S: k(a.getSeconds()),
          L: k(Math.floor(p % 1E3), 3)
        }, c.dateFormats);
        F(a, function (a, d) {
          for (; -1 !== m.indexOf("%" + d);) {
            m = m.replace("%" + d, "function" === typeof a ? a.call(b, p) : a);
          }
        });
        return g ? m.substr(0, 1).toUpperCase() + m.substr(1) : m;
      },
      resolveDTLFormat: function resolveDTLFormat(c) {
        return D(c, !0) ? c : (c = z(c), {
          main: c[0],
          from: c[1],
          to: c[2]
        });
      },
      getTimeTicks: function getTimeTicks(c, p, g, b) {
        var a = this,
            d = [],
            f = {};
        var e = new a.Date(p);
        var h = c.unitRange,
            r = c.count || 1,
            m;
        b = y(b, 1);

        if (A(p)) {
          a.set("Milliseconds", e, h >= C.second ? 0 : r * Math.floor(a.get("Milliseconds", e) / r));
          h >= C.second && a.set("Seconds", e, h >= C.minute ? 0 : r * Math.floor(a.get("Seconds", e) / r));
          h >= C.minute && a.set("Minutes", e, h >= C.hour ? 0 : r * Math.floor(a.get("Minutes", e) / r));
          h >= C.hour && a.set("Hours", e, h >= C.day ? 0 : r * Math.floor(a.get("Hours", e) / r));
          h >= C.day && a.set("Date", e, h >= C.month ? 1 : Math.max(1, r * Math.floor(a.get("Date", e) / r)));

          if (h >= C.month) {
            a.set("Month", e, h >= C.year ? 0 : r * Math.floor(a.get("Month", e) / r));
            var q = a.get("FullYear", e);
          }

          h >= C.year && a.set("FullYear", e, q - q % r);
          h === C.week && (q = a.get("Day", e), a.set("Date", e, a.get("Date", e) - q + b + (q < b ? -7 : 0)));
          q = a.get("FullYear", e);
          b = a.get("Month", e);
          var v = a.get("Date", e),
              k = a.get("Hours", e);
          p = e.getTime();
          a.variableTimezone && (m = g - p > 4 * C.month || a.getTimezoneOffset(p) !== a.getTimezoneOffset(g));
          p = e.getTime();

          for (e = 1; p < g;) {
            d.push(p), p = h === C.year ? a.makeTime(q + e * r, 0) : h === C.month ? a.makeTime(q, b + e * r) : !m || h !== C.day && h !== C.week ? m && h === C.hour && 1 < r ? a.makeTime(q, b, v, k + e * r) : p + h * r : a.makeTime(q, b, v + e * r * (h === C.day ? 1 : 7)), e++;
          }

          d.push(p);
          h <= C.hour && 1E4 > d.length && d.forEach(function (b) {
            0 === b % 18E5 && "000000000" === a.dateFormat("%H%M%S%L", b) && (f[b] = "day");
          });
        }

        d.info = u(c, {
          higherRanks: f,
          totalRange: h * r
        });
        return d;
      }
    };
  });
  N(H, "parts/Options.js", [H["parts/Globals.js"]], function (c) {
    var n = c.color,
        A = c.merge;
    c.defaultOptions = {
      colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
      symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
      lang: {
        loading: "Loading...",
        months: "January February March April May June July August September October November December".split(" "),
        shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        decimalPoint: ".",
        numericSymbols: "kMGTPE".split(""),
        resetZoom: "Reset zoom",
        resetZoomTitle: "Reset zoom level 1:1",
        thousandsSep: " "
      },
      global: {},
      time: c.Time.prototype.defaultOptions,
      chart: {
        styledMode: !1,
        borderRadius: 0,
        colorCount: 10,
        defaultSeriesType: "line",
        ignoreHiddenSeries: !0,
        spacing: [10, 10, 15, 10],
        resetZoomButton: {
          theme: {
            zIndex: 6
          },
          position: {
            align: "right",
            x: -10,
            y: 10
          }
        },
        width: null,
        height: null,
        borderColor: "#335cad",
        backgroundColor: "#ffffff",
        plotBorderColor: "#cccccc"
      },
      title: {
        text: "Chart title",
        align: "center",
        margin: 15,
        widthAdjust: -44
      },
      subtitle: {
        text: "",
        align: "center",
        widthAdjust: -44
      },
      caption: {
        margin: 15,
        text: "",
        align: "left",
        verticalAlign: "bottom"
      },
      plotOptions: {},
      labels: {
        style: {
          position: "absolute",
          color: "#333333"
        }
      },
      legend: {
        enabled: !0,
        align: "center",
        alignColumns: !0,
        layout: "horizontal",
        labelFormatter: function labelFormatter() {
          return this.name;
        },
        borderColor: "#999999",
        borderRadius: 0,
        navigation: {
          activeColor: "#003399",
          inactiveColor: "#cccccc"
        },
        itemStyle: {
          color: "#333333",
          cursor: "pointer",
          fontSize: "12px",
          fontWeight: "bold",
          textOverflow: "ellipsis"
        },
        itemHoverStyle: {
          color: "#000000"
        },
        itemHiddenStyle: {
          color: "#cccccc"
        },
        shadow: !1,
        itemCheckboxStyle: {
          position: "absolute",
          width: "13px",
          height: "13px"
        },
        squareSymbol: !0,
        symbolPadding: 5,
        verticalAlign: "bottom",
        x: 0,
        y: 0,
        title: {
          style: {
            fontWeight: "bold"
          }
        }
      },
      loading: {
        labelStyle: {
          fontWeight: "bold",
          position: "relative",
          top: "45%"
        },
        style: {
          position: "absolute",
          backgroundColor: "#ffffff",
          opacity: .5,
          textAlign: "center"
        }
      },
      tooltip: {
        enabled: !0,
        animation: c.svg,
        borderRadius: 3,
        dateTimeLabelFormats: {
          millisecond: "%A, %b %e, %H:%M:%S.%L",
          second: "%A, %b %e, %H:%M:%S",
          minute: "%A, %b %e, %H:%M",
          hour: "%A, %b %e, %H:%M",
          day: "%A, %b %e, %Y",
          week: "Week from %A, %b %e, %Y",
          month: "%B %Y",
          year: "%Y"
        },
        footerFormat: "",
        padding: 8,
        snap: c.isTouchDevice ? 25 : 10,
        headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
        pointFormat: "<span style=\"color:{point.color}\">\u25CF</span> {series.name}: <b>{point.y}</b><br/>",
        backgroundColor: n("#f7f7f7").setOpacity(.85).get(),
        borderWidth: 1,
        shadow: !0,
        style: {
          color: "#333333",
          cursor: "default",
          fontSize: "12px",
          pointerEvents: "none",
          whiteSpace: "nowrap"
        }
      },
      credits: {
        enabled: !0,
        href: "https://www.highcharts.com?credits",
        position: {
          align: "right",
          x: -10,
          verticalAlign: "bottom",
          y: -5
        },
        style: {
          cursor: "pointer",
          color: "#999999",
          fontSize: "9px"
        },
        text: "Highcharts.com"
      }
    };

    c.setOptions = function (n) {
      c.defaultOptions = A(!0, c.defaultOptions, n);
      c.time.update(A(c.defaultOptions.global, c.defaultOptions.time), !1);
      return c.defaultOptions;
    };

    c.getOptions = function () {
      return c.defaultOptions;
    };

    c.defaultPlotOptions = c.defaultOptions.plotOptions;
    c.time = new c.Time(A(c.defaultOptions.global, c.defaultOptions.time));

    c.dateFormat = function (n, A, z) {
      return c.time.dateFormat(n, A, z);
    };

    "";
  });
  N(H, "parts/Tick.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.isNumber,
        F = c.correctFloat,
        z = c.destroyObjectProperties,
        u = c.fireEvent,
        L = c.merge,
        y = c.pick,
        C = c.deg2rad;

    c.Tick = function (c, m, p, g, b) {
      this.axis = c;
      this.pos = m;
      this.type = p || "";
      this.isNewLabel = this.isNew = !0;
      this.parameters = b || {};
      this.tickmarkOffset = this.parameters.tickmarkOffset;
      this.options = this.parameters.options;
      p || g || this.addLabel();
    };

    c.Tick.prototype = {
      addLabel: function addLabel() {
        var x = this,
            m = x.axis,
            p = m.options,
            g = m.chart,
            b = m.categories,
            a = m.names,
            d = x.pos,
            f = y(x.options && x.options.labels, p.labels),
            e = m.tickPositions,
            h = d === e[0],
            r = d === e[e.length - 1];
        b = this.parameters.category || (b ? y(b[d], a[d], d) : d);
        var E = x.label;
        e = e.info;
        var q, v;

        if (m.isDatetimeAxis && e) {
          var k = g.time.resolveDTLFormat(p.dateTimeLabelFormats[!p.grid && e.higherRanks[d] || e.unitName]);
          var t = k.main;
        }

        x.isFirst = h;
        x.isLast = r;
        x.formatCtx = {
          axis: m,
          chart: g,
          isFirst: h,
          isLast: r,
          dateTimeLabelFormat: t,
          tickPositionInfo: e,
          value: m.isLog ? F(m.lin2log(b)) : b,
          pos: d
        };
        p = m.labelFormatter.call(x.formatCtx, this.formatCtx);
        if (v = k && k.list) x.shortenLabel = function () {
          for (q = 0; q < v.length; q++) {
            if (E.attr({
              text: m.labelFormatter.call(c.extend(x.formatCtx, {
                dateTimeLabelFormat: v[q]
              }))
            }), E.getBBox().width < m.getSlotWidth(x) - 2 * y(f.padding, 5)) return;
          }

          E.attr({
            text: ""
          });
        };
        if (A(E)) E && E.textStr !== p && (!E.textWidth || f.style && f.style.width || E.styles.width || E.css({
          width: null
        }), E.attr({
          text: p
        }), E.textPxLength = E.getBBox().width);else {
          if (x.label = E = A(p) && f.enabled ? g.renderer.text(p, 0, 0, f.useHTML).add(m.labelGroup) : null) g.styledMode || E.css(L(f.style)), E.textPxLength = E.getBBox().width;
          x.rotation = 0;
        }
      },
      getLabelSize: function getLabelSize() {
        return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
      },
      handleOverflow: function handleOverflow(c) {
        var m = this.axis,
            p = m.options.labels,
            g = c.x,
            b = m.chart.chartWidth,
            a = m.chart.spacing,
            d = y(m.labelLeft, Math.min(m.pos, a[3]));
        a = y(m.labelRight, Math.max(m.isRadial ? 0 : m.pos + m.len, b - a[1]));
        var f = this.label,
            e = this.rotation,
            h = {
          left: 0,
          center: .5,
          right: 1
        }[m.labelAlign || f.attr("align")],
            r = f.getBBox().width,
            E = m.getSlotWidth(this),
            q = E,
            v = 1,
            k,
            t = {};
        if (e || "justify" !== y(p.overflow, "justify")) 0 > e && g - h * r < d ? k = Math.round(g / Math.cos(e * C) - d) : 0 < e && g + h * r > a && (k = Math.round((b - g) / Math.cos(e * C)));else if (b = g + (1 - h) * r, g - h * r < d ? q = c.x + q * (1 - h) - d : b > a && (q = a - c.x + q * h, v = -1), q = Math.min(E, q), q < E && "center" === m.labelAlign && (c.x += v * (E - q - h * (E - Math.min(r, q)))), r > q || m.autoRotation && (f.styles || {}).width) k = q;
        k && (this.shortenLabel ? this.shortenLabel() : (t.width = Math.floor(k), (p.style || {}).textOverflow || (t.textOverflow = "ellipsis"), f.css(t)));
      },
      getPosition: function getPosition(x, m, p, g) {
        var b = this.axis,
            a = b.chart,
            d = g && a.oldChartHeight || a.chartHeight;
        x = {
          x: x ? c.correctFloat(b.translate(m + p, null, null, g) + b.transB) : b.left + b.offset + (b.opposite ? (g && a.oldChartWidth || a.chartWidth) - b.right - b.left : 0),
          y: x ? d - b.bottom + b.offset - (b.opposite ? b.height : 0) : c.correctFloat(d - b.translate(m + p, null, null, g) - b.transB)
        };
        x.y = Math.max(Math.min(x.y, 1E5), -1E5);
        u(this, "afterGetPosition", {
          pos: x
        });
        return x;
      },
      getLabelPosition: function getLabelPosition(c, m, p, g, b, a, d, f) {
        var e = this.axis,
            h = e.transA,
            r = e.isLinked && e.linkedParent ? e.linkedParent.reversed : e.reversed,
            E = e.staggerLines,
            q = e.tickRotCorr || {
          x: 0,
          y: 0
        },
            v = b.y,
            k = g || e.reserveSpaceDefault ? 0 : -e.labelOffset * ("center" === e.labelAlign ? .5 : 1),
            t = {};
        A(v) || (v = 0 === e.side ? p.rotation ? -8 : -p.getBBox().height : 2 === e.side ? q.y + 8 : Math.cos(p.rotation * C) * (q.y - p.getBBox(!1, 0).height / 2));
        c = c + b.x + k + q.x - (a && g ? a * h * (r ? -1 : 1) : 0);
        m = m + v - (a && !g ? a * h * (r ? 1 : -1) : 0);
        E && (p = d / (f || 1) % E, e.opposite && (p = E - p - 1), m += e.labelOffset / E * p);
        t.x = c;
        t.y = Math.round(m);
        u(this, "afterGetLabelPosition", {
          pos: t,
          tickmarkOffset: a,
          index: d
        });
        return t;
      },
      getMarkPath: function getMarkPath(c, m, p, g, b, a) {
        return a.crispLine(["M", c, m, "L", c + (b ? 0 : -p), m + (b ? p : 0)], g);
      },
      renderGridLine: function renderGridLine(c, m, p) {
        var g = this.axis,
            b = g.options,
            a = this.gridLine,
            d = {},
            f = this.pos,
            e = this.type,
            h = y(this.tickmarkOffset, g.tickmarkOffset),
            r = g.chart.renderer,
            E = e ? e + "Grid" : "grid",
            q = b[E + "LineWidth"],
            v = b[E + "LineColor"];
        b = b[E + "LineDashStyle"];
        a || (g.chart.styledMode || (d.stroke = v, d["stroke-width"] = q, b && (d.dashstyle = b)), e || (d.zIndex = 1), c && (m = 0), this.gridLine = a = r.path().attr(d).addClass("highcharts-" + (e ? e + "-" : "") + "grid-line").add(g.gridGroup));
        if (a && (p = g.getPlotLinePath({
          value: f + h,
          lineWidth: a.strokeWidth() * p,
          force: "pass",
          old: c
        }))) a[c || this.isNew ? "attr" : "animate"]({
          d: p,
          opacity: m
        });
      },
      renderMark: function renderMark(c, m, p) {
        var g = this.axis,
            b = g.options,
            a = g.chart.renderer,
            d = this.type,
            f = d ? d + "Tick" : "tick",
            e = g.tickSize(f),
            h = this.mark,
            r = !h,
            E = c.x;
        c = c.y;
        var q = y(b[f + "Width"], !d && g.isXAxis ? 1 : 0);
        b = b[f + "Color"];
        e && (g.opposite && (e[0] = -e[0]), r && (this.mark = h = a.path().addClass("highcharts-" + (d ? d + "-" : "") + "tick").add(g.axisGroup), g.chart.styledMode || h.attr({
          stroke: b,
          "stroke-width": q
        })), h[r ? "attr" : "animate"]({
          d: this.getMarkPath(E, c, e[0], h.strokeWidth() * p, g.horiz, a),
          opacity: m
        }));
      },
      renderLabel: function renderLabel(c, m, p, g) {
        var b = this.axis,
            a = b.horiz,
            d = b.options,
            f = this.label,
            e = d.labels,
            h = e.step;
        b = y(this.tickmarkOffset, b.tickmarkOffset);
        var r = !0,
            E = c.x;
        c = c.y;
        f && D(E) && (f.xy = c = this.getLabelPosition(E, c, f, a, e, b, g, h), this.isFirst && !this.isLast && !y(d.showFirstLabel, 1) || this.isLast && !this.isFirst && !y(d.showLastLabel, 1) ? r = !1 : !a || e.step || e.rotation || m || 0 === p || this.handleOverflow(c), h && g % h && (r = !1), r && D(c.y) ? (c.opacity = p, f[this.isNewLabel ? "attr" : "animate"](c), this.isNewLabel = !1) : (f.attr("y", -9999), this.isNewLabel = !0));
      },
      render: function render(x, m, p) {
        var g = this.axis,
            b = g.horiz,
            a = this.pos,
            d = y(this.tickmarkOffset, g.tickmarkOffset);
        a = this.getPosition(b, a, d, m);
        d = a.x;
        var f = a.y;
        g = b && d === g.pos + g.len || !b && f === g.pos ? -1 : 1;
        p = y(p, 1);
        this.isActive = !0;
        this.renderGridLine(m, p, g);
        this.renderMark(a, p, g);
        this.renderLabel(a, m, p, x);
        this.isNew = !1;
        c.fireEvent(this, "afterRender");
      },
      destroy: function destroy() {
        z(this, this.axis);
      }
    };
  });
  N(H, "parts/Axis.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.isArray,
        F = n.isNumber,
        z = n.isString,
        u = n.objectEach,
        L = n.splat,
        y = c.addEvent,
        C = c.animObject,
        x = c.arrayMax,
        m = c.arrayMin,
        p = c.color,
        g = c.correctFloat,
        b = c.defaultOptions,
        a = c.deg2rad,
        d = c.destroyObjectProperties,
        f = c.extend,
        e = c.fireEvent,
        h = c.format,
        r = c.getMagnitude,
        E = c.merge,
        q = c.normalizeTickInterval,
        v = c.pick,
        k = c.removeEvent,
        t = c.seriesTypes,
        B = c.syncTimeout,
        I = c.Tick;

    n = function n() {
      this.init.apply(this, arguments);
    };

    c.extend(n.prototype, {
      defaultOptions: {
        dateTimeLabelFormats: {
          millisecond: {
            main: "%H:%M:%S.%L",
            range: !1
          },
          second: {
            main: "%H:%M:%S",
            range: !1
          },
          minute: {
            main: "%H:%M",
            range: !1
          },
          hour: {
            main: "%H:%M",
            range: !1
          },
          day: {
            main: "%e. %b"
          },
          week: {
            main: "%e. %b"
          },
          month: {
            main: "%b '%y"
          },
          year: {
            main: "%Y"
          }
        },
        endOnTick: !1,
        labels: {
          enabled: !0,
          indentation: 10,
          x: 0,
          style: {
            color: "#666666",
            cursor: "default",
            fontSize: "11px"
          }
        },
        maxPadding: .01,
        minorTickLength: 2,
        minorTickPosition: "outside",
        minPadding: .01,
        showEmpty: !0,
        startOfWeek: 1,
        startOnTick: !1,
        tickLength: 10,
        tickPixelInterval: 100,
        tickmarkPlacement: "between",
        tickPosition: "outside",
        title: {
          align: "middle",
          style: {
            color: "#666666"
          }
        },
        type: "linear",
        minorGridLineColor: "#f2f2f2",
        minorGridLineWidth: 1,
        minorTickColor: "#999999",
        lineColor: "#ccd6eb",
        lineWidth: 1,
        gridLineColor: "#e6e6e6",
        tickColor: "#ccd6eb"
      },
      defaultYAxisOptions: {
        endOnTick: !0,
        maxPadding: .05,
        minPadding: .05,
        tickPixelInterval: 72,
        showLastLabel: !0,
        labels: {
          x: -8
        },
        startOnTick: !0,
        title: {
          rotation: 270,
          text: "Values"
        },
        stackLabels: {
          allowOverlap: !1,
          enabled: !1,
          crop: !0,
          overflow: "justify",
          formatter: function formatter() {
            return c.numberFormat(this.total, -1);
          },
          style: {
            color: "#000000",
            fontSize: "11px",
            fontWeight: "bold",
            textOutline: "1px contrast"
          }
        },
        gridLineWidth: 1,
        lineWidth: 0
      },
      defaultLeftAxisOptions: {
        labels: {
          x: -15
        },
        title: {
          rotation: 270
        }
      },
      defaultRightAxisOptions: {
        labels: {
          x: 15
        },
        title: {
          rotation: 90
        }
      },
      defaultBottomAxisOptions: {
        labels: {
          autoRotation: [-45],
          x: 0
        },
        margin: 15,
        title: {
          rotation: 0
        }
      },
      defaultTopAxisOptions: {
        labels: {
          autoRotation: [-45],
          x: 0
        },
        margin: 15,
        title: {
          rotation: 0
        }
      },
      init: function init(a, b) {
        var d = b.isX,
            l = this;
        l.chart = a;
        l.horiz = a.inverted && !l.isZAxis ? !d : d;
        l.isXAxis = d;
        l.coll = l.coll || (d ? "xAxis" : "yAxis");
        e(this, "init", {
          userOptions: b
        });
        l.opposite = b.opposite;
        l.side = b.side || (l.horiz ? l.opposite ? 0 : 2 : l.opposite ? 1 : 3);
        l.setOptions(b);
        var w = this.options,
            f = w.type;
        l.labelFormatter = w.labels.formatter || l.defaultLabelFormatter;
        l.userOptions = b;
        l.minPixelPadding = 0;
        l.reversed = w.reversed;
        l.visible = !1 !== w.visible;
        l.zoomEnabled = !1 !== w.zoomEnabled;
        l.hasNames = "category" === f || !0 === w.categories;
        l.categories = w.categories || l.hasNames;
        l.names || (l.names = [], l.names.keys = {});
        l.plotLinesAndBandsGroups = {};
        l.isLog = "logarithmic" === f;
        l.isDatetimeAxis = "datetime" === f;
        l.positiveValuesOnly = l.isLog && !l.allowNegativeLog;
        l.isLinked = A(w.linkedTo);
        l.ticks = {};
        l.labelEdge = [];
        l.minorTicks = {};
        l.plotLinesAndBands = [];
        l.alternateBands = {};
        l.len = 0;
        l.minRange = l.userMinRange = w.minRange || w.maxZoom;
        l.range = w.range;
        l.offset = w.offset || 0;
        l.stacks = {};
        l.oldStacks = {};
        l.stacksTouched = 0;
        l.max = null;
        l.min = null;
        l.crosshair = v(w.crosshair, L(a.options.tooltip.crosshairs)[d ? 0 : 1], !1);
        b = l.options.events;
        -1 === a.axes.indexOf(l) && (d ? a.axes.splice(a.xAxis.length, 0, l) : a.axes.push(l), a[l.coll].push(l));
        l.series = l.series || [];
        a.inverted && !l.isZAxis && d && void 0 === l.reversed && (l.reversed = !0);
        u(b, function (a, b) {
          c.isFunction(a) && y(l, b, a);
        });
        l.lin2log = w.linearToLogConverter || l.lin2log;
        l.isLog && (l.val2lin = l.log2lin, l.lin2val = l.lin2log);
        e(this, "afterInit");
      },
      setOptions: function setOptions(a) {
        this.options = E(this.defaultOptions, "yAxis" === this.coll && this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], E(b[this.coll], a));
        e(this, "afterSetOptions", {
          userOptions: a
        });
      },
      defaultLabelFormatter: function defaultLabelFormatter() {
        var a = this.axis,
            d = this.value,
            e = a.chart.time,
            f = a.categories,
            k = this.dateTimeLabelFormat,
            t = b.lang,
            B = t.numericSymbols;
        t = t.numericSymbolMagnitude || 1E3;
        var r = B && B.length,
            q = a.options.labels.format;
        a = a.isLog ? Math.abs(d) : a.tickInterval;
        if (q) var v = h(q, this, e);else if (f) v = d;else if (k) v = e.dateFormat(k, d);else if (r && 1E3 <= a) for (; r-- && void 0 === v;) {
          e = Math.pow(t, r + 1), a >= e && 0 === 10 * d % e && null !== B[r] && 0 !== d && (v = c.numberFormat(d / e, -1) + B[r]);
        }
        void 0 === v && (v = 1E4 <= Math.abs(d) ? c.numberFormat(d, -1) : c.numberFormat(d, -1, void 0, ""));
        return v;
      },
      getSeriesExtremes: function getSeriesExtremes() {
        var a = this,
            b = a.chart,
            d;
        e(this, "getSeriesExtremes", null, function () {
          a.hasVisibleSeries = !1;
          a.dataMin = a.dataMax = a.threshold = null;
          a.softThreshold = !a.isXAxis;
          a.buildStacks && a.buildStacks();
          a.series.forEach(function (l) {
            if (l.visible || !b.options.chart.ignoreHiddenSeries) {
              var e = l.options,
                  w = e.threshold;
              a.hasVisibleSeries = !0;
              a.positiveValuesOnly && 0 >= w && (w = null);

              if (a.isXAxis) {
                if (e = l.xData, e.length) {
                  d = l.getXExtremes(e);
                  var f = d.min;
                  var c = d.max;
                  F(f) || f instanceof Date || (e = e.filter(F), d = l.getXExtremes(e), f = d.min, c = d.max);
                  e.length && (a.dataMin = Math.min(v(a.dataMin, f), f), a.dataMax = Math.max(v(a.dataMax, c), c));
                }
              } else if (l.getExtremes(), c = l.dataMax, f = l.dataMin, A(f) && A(c) && (a.dataMin = Math.min(v(a.dataMin, f), f), a.dataMax = Math.max(v(a.dataMax, c), c)), A(w) && (a.threshold = w), !e.softThreshold || a.positiveValuesOnly) a.softThreshold = !1;
            }
          });
        });
        e(this, "afterGetSeriesExtremes");
      },
      translate: function translate(a, b, d, e, f, c) {
        var l = this.linkedParent || this,
            w = 1,
            k = 0,
            t = e ? l.oldTransA : l.transA;
        e = e ? l.oldMin : l.min;
        var h = l.minPixelPadding;
        f = (l.isOrdinal || l.isBroken || l.isLog && f) && l.lin2val;
        t || (t = l.transA);
        d && (w *= -1, k = l.len);
        l.reversed && (w *= -1, k -= w * (l.sector || l.len));
        b ? (a = (a * w + k - h) / t + e, f && (a = l.lin2val(a))) : (f && (a = l.val2lin(a)), a = F(e) ? w * (a - e) * t + k + w * h + (F(c) ? t * c : 0) : void 0);
        return a;
      },
      toPixels: function toPixels(a, b) {
        return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos);
      },
      toValue: function toValue(a, b) {
        return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0);
      },
      getPlotLinePath: function getPlotLinePath(a) {
        var b = this,
            d = b.chart,
            f = b.left,
            w = b.top,
            c = a.old,
            k = a.value,
            t = a.translatedValue,
            h = a.lineWidth,
            B = a.force,
            r,
            q,
            I,
            m,
            g = c && d.oldChartHeight || d.chartHeight,
            p = c && d.oldChartWidth || d.chartWidth,
            E,
            x = b.transB,
            u = function u(a, b, d) {
          if ("pass" !== B && a < b || a > d) B ? a = Math.min(Math.max(b, a), d) : E = !0;
          return a;
        };

        a = {
          value: k,
          lineWidth: h,
          old: c,
          force: B,
          acrossPanes: a.acrossPanes,
          translatedValue: t
        };
        e(this, "getPlotLinePath", a, function (a) {
          t = v(t, b.translate(k, null, null, c));
          t = Math.min(Math.max(-1E5, t), 1E5);
          r = I = Math.round(t + x);
          q = m = Math.round(g - t - x);
          F(t) ? b.horiz ? (q = w, m = g - b.bottom, r = I = u(r, f, f + b.width)) : (r = f, I = p - b.right, q = m = u(q, w, w + b.height)) : (E = !0, B = !1);
          a.path = E && !B ? null : d.renderer.crispLine(["M", r, q, "L", I, m], h || 1);
        });
        return a.path;
      },
      getLinearTickPositions: function getLinearTickPositions(a, b, d) {
        var l = g(Math.floor(b / a) * a);
        d = g(Math.ceil(d / a) * a);
        var e = [],
            f;
        g(l + a) === l && (f = 20);
        if (this.single) return [b];

        for (b = l; b <= d;) {
          e.push(b);
          b = g(b + a, f);
          if (b === w) break;
          var w = b;
        }

        return e;
      },
      getMinorTickInterval: function getMinorTickInterval() {
        var a = this.options;
        return !0 === a.minorTicks ? v(a.minorTickInterval, "auto") : !1 === a.minorTicks ? null : a.minorTickInterval;
      },
      getMinorTickPositions: function getMinorTickPositions() {
        var a = this,
            b = a.options,
            d = a.tickPositions,
            e = a.minorTickInterval,
            f = [],
            c = a.pointRangePadding || 0,
            k = a.min - c;
        c = a.max + c;
        var t = c - k;
        if (t && t / e < a.len / 3) if (a.isLog) this.paddedTicks.forEach(function (b, d, l) {
          d && f.push.apply(f, a.getLogTickPositions(e, l[d - 1], l[d], !0));
        });else if (a.isDatetimeAxis && "auto" === this.getMinorTickInterval()) f = f.concat(a.getTimeTicks(a.normalizeTimeTickInterval(e), k, c, b.startOfWeek));else for (b = k + (d[0] - k) % e; b <= c && b !== f[0]; b += e) {
          f.push(b);
        }
        0 !== f.length && a.trimTicks(f);
        return f;
      },
      adjustForMinRange: function adjustForMinRange() {
        var a = this.options,
            b = this.min,
            d = this.max,
            e,
            f,
            c,
            k,
            t;
        this.isXAxis && void 0 === this.minRange && !this.isLog && (A(a.min) || A(a.max) ? this.minRange = null : (this.series.forEach(function (a) {
          k = a.xData;

          for (f = t = a.xIncrement ? 1 : k.length - 1; 0 < f; f--) {
            if (c = k[f] - k[f - 1], void 0 === e || c < e) e = c;
          }
        }), this.minRange = Math.min(5 * e, this.dataMax - this.dataMin)));

        if (d - b < this.minRange) {
          var h = this.dataMax - this.dataMin >= this.minRange;
          var B = this.minRange;
          var r = (B - d + b) / 2;
          r = [b - r, v(a.min, b - r)];
          h && (r[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin);
          b = x(r);
          d = [b + B, v(a.max, b + B)];
          h && (d[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax);
          d = m(d);
          d - b < B && (r[0] = d - B, r[1] = v(a.min, d - B), b = x(r));
        }

        this.min = b;
        this.max = d;
      },
      getClosest: function getClosest() {
        var a;
        this.categories ? a = 1 : this.series.forEach(function (b) {
          var d = b.closestPointRange,
              l = b.visible || !b.chart.options.chart.ignoreHiddenSeries;
          !b.noSharedTooltip && A(d) && l && (a = A(a) ? Math.min(a, d) : d);
        });
        return a;
      },
      nameToX: function nameToX(a) {
        var b = D(this.categories),
            d = b ? this.categories : this.names,
            e = a.options.x;
        a.series.requireSorting = !1;
        A(e) || (e = !1 === this.options.uniqueNames ? a.series.autoIncrement() : b ? d.indexOf(a.name) : v(d.keys[a.name], -1));

        if (-1 === e) {
          if (!b) var f = d.length;
        } else f = e;

        void 0 !== f && (this.names[f] = a.name, this.names.keys[a.name] = f);
        return f;
      },
      updateNames: function updateNames() {
        var a = this,
            b = this.names;
        0 < b.length && (Object.keys(b.keys).forEach(function (a) {
          delete b.keys[a];
        }), b.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function (b) {
          b.xIncrement = null;
          if (!b.points || b.isDirtyData) a.max = Math.max(a.max, b.xData.length - 1), b.processData(), b.generatePoints();
          b.data.forEach(function (d, l) {
            if (d && d.options && void 0 !== d.name) {
              var e = a.nameToX(d);
              void 0 !== e && e !== d.x && (d.x = e, b.xData[l] = e);
            }
          });
        }));
      },
      setAxisTranslation: function setAxisTranslation(a) {
        var b = this,
            d = b.max - b.min,
            f = b.axisPointRange || 0,
            c = 0,
            w = 0,
            k = b.linkedParent,
            h = !!b.categories,
            B = b.transA,
            r = b.isXAxis;

        if (r || h || f) {
          var q = b.getClosest();
          k ? (c = k.minPointOffset, w = k.pointRangePadding) : b.series.forEach(function (a) {
            var d = h ? 1 : r ? v(a.options.pointRange, q, 0) : b.axisPointRange || 0,
                l = a.options.pointPlacement;
            f = Math.max(f, d);
            if (!b.single || h) a = t.xrange && a instanceof t.xrange ? !r : r, c = Math.max(c, a && z(l) ? 0 : d / 2), w = Math.max(w, a && "on" === l ? 0 : d);
          });
          k = b.ordinalSlope && q ? b.ordinalSlope / q : 1;
          b.minPointOffset = c *= k;
          b.pointRangePadding = w *= k;
          b.pointRange = Math.min(f, d);
          r && (b.closestPointRange = q);
        }

        a && (b.oldTransA = B);
        b.translationSlope = b.transA = B = b.staticScale || b.len / (d + w || 1);
        b.transB = b.horiz ? b.left : b.bottom;
        b.minPixelPadding = B * c;
        e(this, "afterSetAxisTranslation");
      },
      minFromRange: function minFromRange() {
        return this.max - this.range;
      },
      setTickInterval: function setTickInterval(a) {
        var b = this,
            d = b.chart,
            f = b.options,
            w = b.isLog,
            k = b.isDatetimeAxis,
            t = b.isXAxis,
            h = b.isLinked,
            B = f.maxPadding,
            I = f.minPadding,
            m = f.tickInterval,
            p = f.tickPixelInterval,
            E = b.categories,
            x = F(b.threshold) ? b.threshold : null,
            u = b.softThreshold;
        k || E || h || this.getTickAmount();
        var z = v(b.userMin, f.min);
        var y = v(b.userMax, f.max);

        if (h) {
          b.linkedParent = d[b.coll][f.linkedTo];
          var n = b.linkedParent.getExtremes();
          b.min = v(n.min, n.dataMin);
          b.max = v(n.max, n.dataMax);
          f.type !== b.linkedParent.options.type && c.error(11, 1, d);
        } else {
          if (!u && A(x)) if (b.dataMin >= x) n = x, I = 0;else if (b.dataMax <= x) {
            var L = x;
            B = 0;
          }
          b.min = v(z, n, b.dataMin);
          b.max = v(y, L, b.dataMax);
        }

        w && (b.positiveValuesOnly && !a && 0 >= Math.min(b.min, v(b.dataMin, b.min)) && c.error(10, 1, d), b.min = g(b.log2lin(b.min), 15), b.max = g(b.log2lin(b.max), 15));
        b.range && A(b.max) && (b.userMin = b.min = z = Math.max(b.dataMin, b.minFromRange()), b.userMax = y = b.max, b.range = null);
        e(b, "foundExtremes");
        b.beforePadding && b.beforePadding();
        b.adjustForMinRange();
        !(E || b.axisPointRange || b.usePercentage || h) && A(b.min) && A(b.max) && (d = b.max - b.min) && (!A(z) && I && (b.min -= d * I), !A(y) && B && (b.max += d * B));
        F(f.softMin) && !F(b.userMin) && f.softMin < b.min && (b.min = z = f.softMin);
        F(f.softMax) && !F(b.userMax) && f.softMax > b.max && (b.max = y = f.softMax);
        F(f.floor) && (b.min = Math.min(Math.max(b.min, f.floor), Number.MAX_VALUE));
        F(f.ceiling) && (b.max = Math.max(Math.min(b.max, f.ceiling), v(b.userMax, -Number.MAX_VALUE)));
        u && A(b.dataMin) && (x = x || 0, !A(z) && b.min < x && b.dataMin >= x ? b.min = b.options.minRange ? Math.min(x, b.max - b.minRange) : x : !A(y) && b.max > x && b.dataMax <= x && (b.max = b.options.minRange ? Math.max(x, b.min + b.minRange) : x));
        b.tickInterval = b.min === b.max || void 0 === b.min || void 0 === b.max ? 1 : h && !m && p === b.linkedParent.options.tickPixelInterval ? m = b.linkedParent.tickInterval : v(m, this.tickAmount ? (b.max - b.min) / Math.max(this.tickAmount - 1, 1) : void 0, E ? 1 : (b.max - b.min) * p / Math.max(b.len, p));
        t && !a && b.series.forEach(function (a) {
          a.processData(b.min !== b.oldMin || b.max !== b.oldMax);
        });
        b.setAxisTranslation(!0);
        b.beforeSetTickPositions && b.beforeSetTickPositions();
        b.postProcessTickInterval && (b.tickInterval = b.postProcessTickInterval(b.tickInterval));
        b.pointRange && !m && (b.tickInterval = Math.max(b.pointRange, b.tickInterval));
        a = v(f.minTickInterval, b.isDatetimeAxis && b.closestPointRange);
        !m && b.tickInterval < a && (b.tickInterval = a);
        k || w || m || (b.tickInterval = q(b.tickInterval, null, r(b.tickInterval), v(f.allowDecimals, !(.5 < b.tickInterval && 5 > b.tickInterval && 1E3 < b.max && 9999 > b.max)), !!this.tickAmount));
        this.tickAmount || (b.tickInterval = b.unsquish());
        this.setTickPositions();
      },
      setTickPositions: function setTickPositions() {
        var a = this.options,
            b = a.tickPositions;
        var d = this.getMinorTickInterval();
        var f = a.tickPositioner,
            k = a.startOnTick,
            t = a.endOnTick;
        this.tickmarkOffset = this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0;
        this.minorTickInterval = "auto" === d && this.tickInterval ? this.tickInterval / 5 : d;
        this.single = this.min === this.max && A(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== a.allowDecimals);
        this.tickPositions = d = b && b.slice();
        !d && (!this.ordinalPositions && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200) ? (d = [this.min, this.max], c.error(19, !1, this.chart)) : d = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), d.length > this.len && (d = [d[0], d.pop()], d[0] === d[1] && (d.length = 1)), this.tickPositions = d, f && (f = f.apply(this, [this.min, this.max]))) && (this.tickPositions = d = f);
        this.paddedTicks = d.slice(0);
        this.trimTicks(d, k, t);
        this.isLinked || (this.single && 2 > d.length && !this.categories && (this.min -= .5, this.max += .5), b || f || this.adjustTickAmount());
        e(this, "afterSetTickPositions");
      },
      trimTicks: function trimTicks(a, b, d) {
        var f = a[0],
            c = a[a.length - 1],
            l = this.minPointOffset || 0;
        e(this, "trimTicks");

        if (!this.isLinked) {
          if (b && -Infinity !== f) this.min = f;else for (; this.min - l > a[0];) {
            a.shift();
          }
          if (d) this.max = c;else for (; this.max + l < a[a.length - 1];) {
            a.pop();
          }
          0 === a.length && A(f) && !this.options.tickPositions && a.push((c + f) / 2);
        }
      },
      alignToOthers: function alignToOthers() {
        var a = {},
            b,
            d = this.options;
        !1 === this.chart.options.chart.alignTicks || !1 === d.alignTicks || !1 === d.startOnTick || !1 === d.endOnTick || this.isLog || this.chart[this.coll].forEach(function (d) {
          var f = d.options;
          f = [d.horiz ? f.left : f.top, f.width, f.height, f.pane].join();
          d.series.length && (a[f] ? b = !0 : a[f] = 1);
        });
        return b;
      },
      getTickAmount: function getTickAmount() {
        var a = this.options,
            b = a.tickAmount,
            d = a.tickPixelInterval;
        !A(a.tickInterval) && this.len < d && !this.isRadial && !this.isLog && a.startOnTick && a.endOnTick && (b = 2);
        !b && this.alignToOthers() && (b = Math.ceil(this.len / d) + 1);
        4 > b && (this.finalTickAmt = b, b = 5);
        this.tickAmount = b;
      },
      adjustTickAmount: function adjustTickAmount() {
        var a = this.options,
            b = this.tickInterval,
            d = this.tickPositions,
            f = this.tickAmount,
            e = this.finalTickAmt,
            c = d && d.length,
            k = v(this.threshold, this.softThreshold ? 0 : null),
            t;

        if (this.hasData()) {
          if (c < f) {
            for (t = this.min; d.length < f;) {
              d.length % 2 || t === k ? d.push(g(d[d.length - 1] + b)) : d.unshift(g(d[0] - b));
            }

            this.transA *= (c - 1) / (f - 1);
            this.min = a.startOnTick ? d[0] : Math.min(this.min, d[0]);
            this.max = a.endOnTick ? d[d.length - 1] : Math.max(this.max, d[d.length - 1]);
          } else c > f && (this.tickInterval *= 2, this.setTickPositions());

          if (A(e)) {
            for (b = a = d.length; b--;) {
              (3 === e && 1 === b % 2 || 2 >= e && 0 < b && b < a - 1) && d.splice(b, 1);
            }

            this.finalTickAmt = void 0;
          }
        }
      },
      setScale: function setScale() {
        var a = this.series.some(function (a) {
          return a.isDirtyData || a.isDirty || a.xAxis && a.xAxis.isDirty;
        }),
            b;
        this.oldMin = this.min;
        this.oldMax = this.max;
        this.oldAxisLength = this.len;
        this.setAxisSize();
        (b = this.len !== this.oldAxisLength) || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = b || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks();
        e(this, "afterSetScale");
      },
      setExtremes: function setExtremes(a, b, d, c, k) {
        var l = this,
            w = l.chart;
        d = v(d, !0);
        l.series.forEach(function (a) {
          delete a.kdTree;
        });
        k = f(k, {
          min: a,
          max: b
        });
        e(l, "setExtremes", k, function () {
          l.userMin = a;
          l.userMax = b;
          l.eventArgs = k;
          d && w.redraw(c);
        });
      },
      zoom: function zoom(a, b) {
        var d = this.dataMin,
            f = this.dataMax,
            c = this.options,
            k = Math.min(d, v(c.min, d)),
            l = Math.max(f, v(c.max, f));
        a = {
          newMin: a,
          newMax: b
        };
        e(this, "zoom", a, function (a) {
          var b = a.newMin,
              e = a.newMax;
          if (b !== this.min || e !== this.max) this.allowZoomOutside || (A(d) && (b < k && (b = k), b > l && (b = l)), A(f) && (e < k && (e = k), e > l && (e = l))), this.displayBtn = void 0 !== b || void 0 !== e, this.setExtremes(b, e, !1, void 0, {
            trigger: "zoom"
          });
          a.zoomed = !0;
        });
        return a.zoomed;
      },
      setAxisSize: function setAxisSize() {
        var a = this.chart,
            b = this.options,
            d = b.offsets || [0, 0, 0, 0],
            f = this.horiz,
            e = this.width = Math.round(c.relativeLength(v(b.width, a.plotWidth - d[3] + d[1]), a.plotWidth)),
            k = this.height = Math.round(c.relativeLength(v(b.height, a.plotHeight - d[0] + d[2]), a.plotHeight)),
            t = this.top = Math.round(c.relativeLength(v(b.top, a.plotTop + d[0]), a.plotHeight, a.plotTop));
        b = this.left = Math.round(c.relativeLength(v(b.left, a.plotLeft + d[3]), a.plotWidth, a.plotLeft));
        this.bottom = a.chartHeight - k - t;
        this.right = a.chartWidth - e - b;
        this.len = Math.max(f ? e : k, 0);
        this.pos = f ? b : t;
      },
      getExtremes: function getExtremes() {
        var a = this.isLog;
        return {
          min: a ? g(this.lin2log(this.min)) : this.min,
          max: a ? g(this.lin2log(this.max)) : this.max,
          dataMin: this.dataMin,
          dataMax: this.dataMax,
          userMin: this.userMin,
          userMax: this.userMax
        };
      },
      getThreshold: function getThreshold(a) {
        var b = this.isLog,
            d = b ? this.lin2log(this.min) : this.min;
        b = b ? this.lin2log(this.max) : this.max;
        null === a || -Infinity === a ? a = d : Infinity === a ? a = b : d > a ? a = d : b < a && (a = b);
        return this.translate(a, 0, 1, 0, 1);
      },
      autoLabelAlign: function autoLabelAlign(a) {
        var b = (v(a, 0) - 90 * this.side + 720) % 360;
        a = {
          align: "center"
        };
        e(this, "autoLabelAlign", a, function (a) {
          15 < b && 165 > b ? a.align = "right" : 195 < b && 345 > b && (a.align = "left");
        });
        return a.align;
      },
      tickSize: function tickSize(a) {
        var b = this.options,
            d = b[a + "Length"],
            f = v(b[a + "Width"], "tick" === a && this.isXAxis && !this.categories ? 1 : 0);

        if (f && d) {
          "inside" === b[a + "Position"] && (d = -d);
          var c = [d, f];
        }

        a = {
          tickSize: c
        };
        e(this, "afterTickSize", a);
        return a.tickSize;
      },
      labelMetrics: function labelMetrics() {
        var a = this.tickPositions && this.tickPositions[0] || 0;
        return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[a] && this.ticks[a].label);
      },
      unsquish: function unsquish() {
        var b = this.options.labels,
            d = this.horiz,
            f = this.tickInterval,
            e = f,
            c = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / f),
            k,
            t = b.rotation,
            h = this.labelMetrics(),
            B,
            r = Number.MAX_VALUE,
            q,
            I = this.max - this.min,
            m = function m(a) {
          var b = a / (c || 1);
          b = 1 < b ? Math.ceil(b) : 1;
          b * f > I && Infinity !== a && Infinity !== c && I && (b = Math.ceil(I / f));
          return g(b * f);
        };

        d ? (q = !b.staggerLines && !b.step && (A(t) ? [t] : c < v(b.autoRotationLimit, 80) && b.autoRotation)) && q.forEach(function (b) {
          if (b === t || b && -90 <= b && 90 >= b) {
            B = m(Math.abs(h.h / Math.sin(a * b)));
            var d = B + Math.abs(b / 360);
            d < r && (r = d, k = b, e = B);
          }
        }) : b.step || (e = m(h.h));
        this.autoRotation = q;
        this.labelRotation = v(k, t);
        return e;
      },
      getSlotWidth: function getSlotWidth(a) {
        var b = this.chart,
            d = this.horiz,
            f = this.options.labels,
            e = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
            c = b.margin[3];
        return a && a.slotWidth || d && 2 > (f.step || 0) && !f.rotation && (this.staggerLines || 1) * this.len / e || !d && (f.style && parseInt(f.style.width, 10) || c && c - b.spacing[3] || .33 * b.chartWidth);
      },
      renderUnsquish: function renderUnsquish() {
        var a = this.chart,
            b = a.renderer,
            d = this.tickPositions,
            f = this.ticks,
            e = this.options.labels,
            c = e && e.style || {},
            k = this.horiz,
            t = this.getSlotWidth(),
            h = Math.max(1, Math.round(t - 2 * (e.padding || 5))),
            B = {},
            r = this.labelMetrics(),
            q = e.style && e.style.textOverflow,
            v = 0;
        z(e.rotation) || (B.rotation = e.rotation || 0);
        d.forEach(function (a) {
          (a = f[a]) && a.label && a.label.textPxLength > v && (v = a.label.textPxLength);
        });
        this.maxLabelLength = v;
        if (this.autoRotation) v > h && v > r.h ? B.rotation = this.labelRotation : this.labelRotation = 0;else if (t) {
          var I = h;

          if (!q) {
            var m = "clip";

            for (h = d.length; !k && h--;) {
              var g = d[h];
              if (g = f[g].label) g.styles && "ellipsis" === g.styles.textOverflow ? g.css({
                textOverflow: "clip"
              }) : g.textPxLength > t && g.css({
                width: t + "px"
              }), g.getBBox().height > this.len / d.length - (r.h - r.f) && (g.specificTextOverflow = "ellipsis");
            }
          }
        }
        B.rotation && (I = v > .5 * a.chartHeight ? .33 * a.chartHeight : v, q || (m = "ellipsis"));
        if (this.labelAlign = e.align || this.autoLabelAlign(this.labelRotation)) B.align = this.labelAlign;
        d.forEach(function (a) {
          var b = (a = f[a]) && a.label,
              d = c.width,
              e = {};
          b && (b.attr(B), a.shortenLabel ? a.shortenLabel() : I && !d && "nowrap" !== c.whiteSpace && (I < b.textPxLength || "SPAN" === b.element.tagName) ? (e.width = I, q || (e.textOverflow = b.specificTextOverflow || m), b.css(e)) : b.styles && b.styles.width && !e.width && !d && b.css({
            width: null
          }), delete b.specificTextOverflow, a.rotation = B.rotation);
        }, this);
        this.tickRotCorr = b.rotCorr(r.b, this.labelRotation || 0, 0 !== this.side);
      },
      hasData: function hasData() {
        return this.series.some(function (a) {
          return a.hasData();
        }) || this.options.showEmpty && A(this.min) && A(this.max);
      },
      addTitle: function addTitle(a) {
        var b = this.chart.renderer,
            d = this.horiz,
            f = this.opposite,
            e = this.options.title,
            c,
            k = this.chart.styledMode;
        this.axisTitle || ((c = e.textAlign) || (c = (d ? {
          low: "left",
          middle: "center",
          high: "right"
        } : {
          low: f ? "right" : "left",
          middle: "center",
          high: f ? "left" : "right"
        })[e.align]), this.axisTitle = b.text(e.text, 0, 0, e.useHTML).attr({
          zIndex: 7,
          rotation: e.rotation || 0,
          align: c
        }).addClass("highcharts-axis-title"), k || this.axisTitle.css(E(e.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0);
        k || e.style.width || this.isRadial || this.axisTitle.css({
          width: this.len
        });
        this.axisTitle[a ? "show" : "hide"](a);
      },
      generateTick: function generateTick(a) {
        var b = this.ticks;
        b[a] ? b[a].addLabel() : b[a] = new I(this, a);
      },
      getOffset: function getOffset() {
        var a = this,
            b = a.chart,
            d = b.renderer,
            f = a.options,
            c = a.tickPositions,
            k = a.ticks,
            t = a.horiz,
            h = a.side,
            B = b.inverted && !a.isZAxis ? [1, 0, 3, 2][h] : h,
            r,
            q = 0,
            I = 0,
            m = f.title,
            g = f.labels,
            p = 0,
            E = b.axisOffset;
        b = b.clipOffset;
        var x = [-1, 1, 1, -1][h],
            z = f.className,
            y = a.axisParent;
        var n = a.hasData();
        a.showAxis = r = n || v(f.showEmpty, !0);
        a.staggerLines = a.horiz && g.staggerLines;
        a.axisGroup || (a.gridGroup = d.g("grid").attr({
          zIndex: f.gridZIndex || 1
        }).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (z || "")).add(y), a.axisGroup = d.g("axis").attr({
          zIndex: f.zIndex || 2
        }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (z || "")).add(y), a.labelGroup = d.g("axis-labels").attr({
          zIndex: g.zIndex || 7
        }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels " + (z || "")).add(y));
        n || a.isLinked ? (c.forEach(function (b, d) {
          a.generateTick(b, d);
        }), a.renderUnsquish(), a.reserveSpaceDefault = 0 === h || 2 === h || {
          1: "left",
          3: "right"
        }[h] === a.labelAlign, v(g.reserveSpace, "center" === a.labelAlign ? !0 : null, a.reserveSpaceDefault) && c.forEach(function (a) {
          p = Math.max(k[a].getLabelSize(), p);
        }), a.staggerLines && (p *= a.staggerLines), a.labelOffset = p * (a.opposite ? -1 : 1)) : u(k, function (a, b) {
          a.destroy();
          delete k[b];
        });

        if (m && m.text && !1 !== m.enabled && (a.addTitle(r), r && !1 !== m.reserveSpace)) {
          a.titleOffset = q = a.axisTitle.getBBox()[t ? "height" : "width"];
          var L = m.offset;
          I = A(L) ? 0 : v(m.margin, t ? 5 : 10);
        }

        a.renderLine();
        a.offset = x * v(f.offset, E[h] ? E[h] + (f.margin || 0) : 0);
        a.tickRotCorr = a.tickRotCorr || {
          x: 0,
          y: 0
        };
        d = 0 === h ? -a.labelMetrics().h : 2 === h ? a.tickRotCorr.y : 0;
        I = Math.abs(p) + I;
        p && (I = I - d + x * (t ? v(g.y, a.tickRotCorr.y + 8 * x) : g.x));
        a.axisTitleMargin = v(L, I);
        a.getMaxLabelDimensions && (a.maxLabelDimensions = a.getMaxLabelDimensions(k, c));
        t = this.tickSize("tick");
        E[h] = Math.max(E[h], a.axisTitleMargin + q + x * a.offset, I, c && c.length && t ? t[0] + x * a.offset : 0);
        f = f.offset ? 0 : 2 * Math.floor(a.axisLine.strokeWidth() / 2);
        b[B] = Math.max(b[B], f);
        e(this, "afterGetOffset");
      },
      getLinePath: function getLinePath(a) {
        var b = this.chart,
            d = this.opposite,
            f = this.offset,
            e = this.horiz,
            c = this.left + (d ? this.width : 0) + f;
        f = b.chartHeight - this.bottom - (d ? this.height : 0) + f;
        d && (a *= -1);
        return b.renderer.crispLine(["M", e ? this.left : c, e ? f : this.top, "L", e ? b.chartWidth - this.right : c, e ? f : b.chartHeight - this.bottom], a);
      },
      renderLine: function renderLine() {
        this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({
          stroke: this.options.lineColor,
          "stroke-width": this.options.lineWidth,
          zIndex: 7
        }));
      },
      getTitlePosition: function getTitlePosition() {
        var a = this.horiz,
            b = this.left,
            d = this.top,
            f = this.len,
            c = this.options.title,
            k = a ? b : d,
            t = this.opposite,
            h = this.offset,
            B = c.x || 0,
            r = c.y || 0,
            q = this.axisTitle,
            v = this.chart.renderer.fontMetrics(c.style && c.style.fontSize, q);
        q = Math.max(q.getBBox(null, 0).height - v.h - 1, 0);
        f = {
          low: k + (a ? 0 : f),
          middle: k + f / 2,
          high: k + (a ? f : 0)
        }[c.align];
        b = (a ? d + this.height : b) + (a ? 1 : -1) * (t ? -1 : 1) * this.axisTitleMargin + [-q, q, v.f, -q][this.side];
        a = {
          x: a ? f + B : b + (t ? this.width : 0) + h + B,
          y: a ? b + r - (t ? this.height : 0) + h : f + r
        };
        e(this, "afterGetTitlePosition", {
          titlePosition: a
        });
        return a;
      },
      renderMinorTick: function renderMinorTick(a) {
        var b = this.chart.hasRendered && F(this.oldMin),
            d = this.minorTicks;
        d[a] || (d[a] = new I(this, a, "minor"));
        b && d[a].isNew && d[a].render(null, !0);
        d[a].render(null, !1, 1);
      },
      renderTick: function renderTick(a, b) {
        var d = this.isLinked,
            f = this.ticks,
            e = this.chart.hasRendered && F(this.oldMin);
        if (!d || a >= this.min && a <= this.max) f[a] || (f[a] = new I(this, a)), e && f[a].isNew && f[a].render(b, !0, -1), f[a].render(b);
      },
      render: function render() {
        var a = this,
            b = a.chart,
            d = a.options,
            f = a.isLog,
            k = a.isLinked,
            t = a.tickPositions,
            h = a.axisTitle,
            r = a.ticks,
            q = a.minorTicks,
            v = a.alternateBands,
            m = d.stackLabels,
            g = d.alternateGridColor,
            p = a.tickmarkOffset,
            E = a.axisLine,
            x = a.showAxis,
            z = C(b.renderer.globalAnimation),
            y,
            n;
        a.labelEdge.length = 0;
        a.overlap = !1;
        [r, q, v].forEach(function (a) {
          u(a, function (a) {
            a.isActive = !1;
          });
        });
        if (a.hasData() || k) a.minorTickInterval && !a.categories && a.getMinorTickPositions().forEach(function (b) {
          a.renderMinorTick(b);
        }), t.length && (t.forEach(function (b, d) {
          a.renderTick(b, d);
        }), p && (0 === a.min || a.single) && (r[-1] || (r[-1] = new I(a, -1, null, !0)), r[-1].render(-1))), g && t.forEach(function (d, e) {
          n = void 0 !== t[e + 1] ? t[e + 1] + p : a.max - p;
          0 === e % 2 && d < a.max && n <= a.max + (b.polar ? -p : p) && (v[d] || (v[d] = new c.PlotLineOrBand(a)), y = d + p, v[d].options = {
            from: f ? a.lin2log(y) : y,
            to: f ? a.lin2log(n) : n,
            color: g
          }, v[d].render(), v[d].isActive = !0);
        }), a._addedPlotLB || ((d.plotLines || []).concat(d.plotBands || []).forEach(function (b) {
          a.addPlotBandOrLine(b);
        }), a._addedPlotLB = !0);
        [r, q, v].forEach(function (a) {
          var d,
              f = [],
              e = z.duration;
          u(a, function (a, b) {
            a.isActive || (a.render(b, !1, 0), a.isActive = !1, f.push(b));
          });
          B(function () {
            for (d = f.length; d--;) {
              a[f[d]] && !a[f[d]].isActive && (a[f[d]].destroy(), delete a[f[d]]);
            }
          }, a !== v && b.hasRendered && e ? e : 0);
        });
        E && (E[E.isPlaced ? "animate" : "attr"]({
          d: this.getLinePath(E.strokeWidth())
        }), E.isPlaced = !0, E[x ? "show" : "hide"](x));
        h && x && (d = a.getTitlePosition(), F(d.y) ? (h[h.isNew ? "attr" : "animate"](d), h.isNew = !1) : (h.attr("y", -9999), h.isNew = !0));
        m && m.enabled && a.renderStackTotals();
        a.isDirty = !1;
        e(this, "afterRender");
      },
      redraw: function redraw() {
        this.visible && (this.render(), this.plotLinesAndBands.forEach(function (a) {
          a.render();
        }));
        this.series.forEach(function (a) {
          a.isDirty = !0;
        });
      },
      keepProps: "extKey hcEvents names series userMax userMin".split(" "),
      destroy: function destroy(a) {
        var b = this,
            f = b.stacks,
            c = b.plotLinesAndBands,
            t;
        e(this, "destroy", {
          keepEvents: a
        });
        a || k(b);
        u(f, function (a, b) {
          d(a);
          f[b] = null;
        });
        [b.ticks, b.minorTicks, b.alternateBands].forEach(function (a) {
          d(a);
        });
        if (c) for (a = c.length; a--;) {
          c[a].destroy();
        }
        "stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function (a) {
          b[a] && (b[a] = b[a].destroy());
        });

        for (t in b.plotLinesAndBandsGroups) {
          b.plotLinesAndBandsGroups[t] = b.plotLinesAndBandsGroups[t].destroy();
        }

        u(b, function (a, d) {
          -1 === b.keepProps.indexOf(d) && delete b[d];
        });
      },
      drawCrosshair: function drawCrosshair(a, b) {
        var d,
            f = this.crosshair,
            c = v(f.snap, !0),
            k,
            l = this.cross;
        e(this, "drawCrosshair", {
          e: a,
          point: b
        });
        a || (a = this.cross && this.cross.e);

        if (this.crosshair && !1 !== (A(b) || !c)) {
          c ? A(b) && (k = v("colorAxis" !== this.coll ? b.crosshairPos : null, this.isXAxis ? b.plotX : this.len - b.plotY)) : k = a && (this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos);
          A(k) && (d = this.getPlotLinePath({
            value: b && (this.isXAxis ? b.x : v(b.stackY, b.y)),
            translatedValue: k
          }) || null);

          if (!A(d)) {
            this.hideCrosshair();
            return;
          }

          c = this.categories && !this.isRadial;
          l || (this.cross = l = this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (c ? "category " : "thin ") + f.className).attr({
            zIndex: v(f.zIndex, 2)
          }).add(), this.chart.styledMode || (l.attr({
            stroke: f.color || (c ? p("#ccd6eb").setOpacity(.25).get() : "#cccccc"),
            "stroke-width": v(f.width, 1)
          }).css({
            "pointer-events": "none"
          }), f.dashStyle && l.attr({
            dashstyle: f.dashStyle
          })));
          l.show().attr({
            d: d
          });
          c && !f.width && l.attr({
            "stroke-width": this.transA
          });
          this.cross.e = a;
        } else this.hideCrosshair();

        e(this, "afterDrawCrosshair", {
          e: a,
          point: b
        });
      },
      hideCrosshair: function hideCrosshair() {
        this.cross && this.cross.hide();
        e(this, "afterHideCrosshair");
      }
    });
    return c.Axis = n;
  });
  N(H, "parts/DateTimeAxis.js", [H["parts/Globals.js"]], function (c) {
    var n = c.Axis,
        A = c.getMagnitude,
        D = c.normalizeTickInterval,
        F = c.timeUnits;

    n.prototype.getTimeTicks = function () {
      return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
    };

    n.prototype.normalizeTimeTickInterval = function (c, u) {
      var z = u || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]];
      u = z[z.length - 1];
      var y = F[u[0]],
          n = u[1],
          x;

      for (x = 0; x < z.length && !(u = z[x], y = F[u[0]], n = u[1], z[x + 1] && c <= (y * n[n.length - 1] + F[z[x + 1][0]]) / 2); x++) {
        ;
      }

      y === F.year && c < 5 * y && (n = [1, 2, 5]);
      c = D(c / y, n, "year" === u[0] ? Math.max(A(c / y), 1) : 1);
      return {
        unitRange: y,
        count: c,
        unitName: u[0]
      };
    };
  });
  N(H, "parts/LogarithmicAxis.js", [H["parts/Globals.js"]], function (c) {
    var n = c.Axis,
        A = c.getMagnitude,
        D = c.normalizeTickInterval,
        F = c.pick;

    n.prototype.getLogTickPositions = function (c, u, n, y) {
      var z = this.options,
          x = this.len,
          m = [];
      y || (this._minorAutoInterval = null);
      if (.5 <= c) c = Math.round(c), m = this.getLinearTickPositions(c, u, n);else if (.08 <= c) {
        x = Math.floor(u);
        var p, g;

        for (z = .3 < c ? [1, 2, 4] : .15 < c ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; x < n + 1 && !g; x++) {
          var b = z.length;

          for (p = 0; p < b && !g; p++) {
            var a = this.log2lin(this.lin2log(x) * z[p]);
            a > u && (!y || d <= n) && void 0 !== d && m.push(d);
            d > n && (g = !0);
            var d = a;
          }
        }
      } else u = this.lin2log(u), n = this.lin2log(n), c = y ? this.getMinorTickInterval() : z.tickInterval, c = F("auto" === c ? null : c, this._minorAutoInterval, z.tickPixelInterval / (y ? 5 : 1) * (n - u) / ((y ? x / this.tickPositions.length : x) || 1)), c = D(c, null, A(c)), m = this.getLinearTickPositions(c, u, n).map(this.log2lin), y || (this._minorAutoInterval = c / 5);
      y || (this.tickInterval = c);
      return m;
    };

    n.prototype.log2lin = function (c) {
      return Math.log(c) / Math.LN10;
    };

    n.prototype.lin2log = function (c) {
      return Math.pow(10, c);
    };
  });
  N(H, "parts/PlotLineOrBand.js", [H["parts/Globals.js"], H["parts/Axis.js"], H["parts/Utilities.js"]], function (c, n, A) {
    var D = A.defined,
        F = A.erase,
        z = A.objectEach,
        u = c.arrayMax,
        L = c.arrayMin,
        y = c.destroyObjectProperties,
        C = c.merge,
        x = c.pick;

    c.PlotLineOrBand = function (c, p) {
      this.axis = c;
      p && (this.options = p, this.id = p.id);
    };

    c.PlotLineOrBand.prototype = {
      render: function render() {
        c.fireEvent(this, "render");
        var m = this,
            p = m.axis,
            g = p.horiz,
            b = m.options,
            a = b.label,
            d = m.label,
            f = b.to,
            e = b.from,
            h = b.value,
            r = D(e) && D(f),
            E = D(h),
            q = m.svgElem,
            v = !q,
            k = [],
            t = b.color,
            B = x(b.zIndex, 0),
            I = b.events;
        k = {
          "class": "highcharts-plot-" + (r ? "band " : "line ") + (b.className || "")
        };
        var w = {},
            l = p.chart.renderer,
            J = r ? "bands" : "lines";
        p.isLog && (e = p.log2lin(e), f = p.log2lin(f), h = p.log2lin(h));
        p.chart.styledMode || (E ? (k.stroke = t || "#999999", k["stroke-width"] = x(b.width, 1), b.dashStyle && (k.dashstyle = b.dashStyle)) : r && (k.fill = t || "#e6ebf5", b.borderWidth && (k.stroke = b.borderColor, k["stroke-width"] = b.borderWidth)));
        w.zIndex = B;
        J += "-" + B;
        (t = p.plotLinesAndBandsGroups[J]) || (p.plotLinesAndBandsGroups[J] = t = l.g("plot-" + J).attr(w).add());
        v && (m.svgElem = q = l.path().attr(k).add(t));
        if (E) k = p.getPlotLinePath({
          value: h,
          lineWidth: q.strokeWidth(),
          acrossPanes: b.acrossPanes
        });else if (r) k = p.getPlotBandPath(e, f, b);else return;
        (v || !q.d) && k && k.length ? (q.attr({
          d: k
        }), I && z(I, function (a, b) {
          q.on(b, function (a) {
            I[b].apply(m, [a]);
          });
        })) : q && (k ? (q.show(!0), q.animate({
          d: k
        })) : q.d && (q.hide(), d && (m.label = d = d.destroy())));
        a && (D(a.text) || D(a.formatter)) && k && k.length && 0 < p.width && 0 < p.height && !k.isFlat ? (a = C({
          align: g && r && "center",
          x: g ? !r && 4 : 10,
          verticalAlign: !g && r && "middle",
          y: g ? r ? 16 : 10 : r ? 6 : -4,
          rotation: g && !r && 90
        }, a), this.renderLabel(a, k, r, B)) : d && d.hide();
        return m;
      },
      renderLabel: function renderLabel(c, p, g, b) {
        var a = this.label,
            d = this.axis.chart.renderer;
        a || (a = {
          align: c.textAlign || c.align,
          rotation: c.rotation,
          "class": "highcharts-plot-" + (g ? "band" : "line") + "-label " + (c.className || "")
        }, a.zIndex = b, b = this.getLabelText(c), this.label = a = d.text(b, 0, 0, c.useHTML).attr(a).add(), this.axis.chart.styledMode || a.css(c.style));
        d = p.xBounds || [p[1], p[4], g ? p[6] : p[1]];
        p = p.yBounds || [p[2], p[5], g ? p[7] : p[2]];
        g = L(d);
        b = L(p);
        a.align(c, !1, {
          x: g,
          y: b,
          width: u(d) - g,
          height: u(p) - b
        });
        a.show(!0);
      },
      getLabelText: function getLabelText(c) {
        return D(c.formatter) ? c.formatter.call(this) : c.text;
      },
      destroy: function destroy() {
        F(this.axis.plotLinesAndBands, this);
        delete this.axis;
        y(this);
      }
    };
    c.extend(n.prototype, {
      getPlotBandPath: function getPlotBandPath(c, p) {
        var g = this.getPlotLinePath({
          value: p,
          force: !0,
          acrossPanes: this.options.acrossPanes
        }),
            b = this.getPlotLinePath({
          value: c,
          force: !0,
          acrossPanes: this.options.acrossPanes
        }),
            a = [],
            d = this.horiz,
            f = 1;
        c = c < this.min && p < this.min || c > this.max && p > this.max;

        if (b && g) {
          if (c) {
            var e = b.toString() === g.toString();
            f = 0;
          }

          for (c = 0; c < b.length; c += 6) {
            d && g[c + 1] === b[c + 1] ? (g[c + 1] += f, g[c + 4] += f) : d || g[c + 2] !== b[c + 2] || (g[c + 2] += f, g[c + 5] += f), a.push("M", b[c + 1], b[c + 2], "L", b[c + 4], b[c + 5], g[c + 4], g[c + 5], g[c + 1], g[c + 2], "z"), a.isFlat = e;
          }
        }

        return a;
      },
      addPlotBand: function addPlotBand(c) {
        return this.addPlotBandOrLine(c, "plotBands");
      },
      addPlotLine: function addPlotLine(c) {
        return this.addPlotBandOrLine(c, "plotLines");
      },
      addPlotBandOrLine: function addPlotBandOrLine(m, p) {
        var g = new c.PlotLineOrBand(this, m).render(),
            b = this.userOptions;

        if (g) {
          if (p) {
            var a = b[p] || [];
            a.push(m);
            b[p] = a;
          }

          this.plotLinesAndBands.push(g);
        }

        return g;
      },
      removePlotBandOrLine: function removePlotBandOrLine(c) {
        for (var m = this.plotLinesAndBands, g = this.options, b = this.userOptions, a = m.length; a--;) {
          m[a].id === c && m[a].destroy();
        }

        [g.plotLines || [], b.plotLines || [], g.plotBands || [], b.plotBands || []].forEach(function (b) {
          for (a = b.length; a--;) {
            b[a].id === c && F(b, b[a]);
          }
        });
      },
      removePlotBand: function removePlotBand(c) {
        this.removePlotBandOrLine(c);
      },
      removePlotLine: function removePlotLine(c) {
        this.removePlotBandOrLine(c);
      }
    });
  });
  N(H, "parts/Tooltip.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.isNumber,
        F = n.isString,
        z = n.splat;
    "";
    var u = c.doc,
        L = c.extend,
        y = c.format,
        C = c.merge,
        x = c.pick,
        m = c.syncTimeout,
        p = c.timeUnits;

    c.Tooltip = function () {
      this.init.apply(this, arguments);
    };

    c.Tooltip.prototype = {
      init: function init(c, b) {
        this.chart = c;
        this.options = b;
        this.crosshairs = [];
        this.now = {
          x: 0,
          y: 0
        };
        this.isHidden = !0;
        this.split = b.split && !c.inverted;
        this.shared = b.shared || this.split;
        this.outside = x(b.outside, !(!c.scrollablePixelsX && !c.scrollablePixelsY)) && !this.split;
      },
      cleanSplit: function cleanSplit(c) {
        this.chart.series.forEach(function (b) {
          var a = b && b.tt;
          a && (!a.isActive || c ? b.tt = a.destroy() : a.isActive = !1);
        });
      },
      applyFilter: function applyFilter() {
        var c = this.chart;
        c.renderer.definition({
          tagName: "filter",
          id: "drop-shadow-" + c.index,
          opacity: .5,
          children: [{
            tagName: "feGaussianBlur",
            "in": "SourceAlpha",
            stdDeviation: 1
          }, {
            tagName: "feOffset",
            dx: 1,
            dy: 1
          }, {
            tagName: "feComponentTransfer",
            children: [{
              tagName: "feFuncA",
              type: "linear",
              slope: .3
            }]
          }, {
            tagName: "feMerge",
            children: [{
              tagName: "feMergeNode"
            }, {
              tagName: "feMergeNode",
              "in": "SourceGraphic"
            }]
          }]
        });
        c.renderer.definition({
          tagName: "style",
          textContent: ".highcharts-tooltip-" + c.index + "{filter:url(#drop-shadow-" + c.index + ")}"
        });
      },
      getLabel: function getLabel() {
        var g = this,
            b = this.chart.renderer,
            a = this.chart.styledMode,
            d = this.options,
            f = "tooltip" + (A(d.className) ? " " + d.className : ""),
            e;

        if (!this.label) {
          this.outside && (this.container = e = c.doc.createElement("div"), e.className = "highcharts-tooltip-container", c.css(e, {
            position: "absolute",
            top: "1px",
            pointerEvents: d.style && d.style.pointerEvents,
            zIndex: 3
          }), c.doc.body.appendChild(e), this.renderer = b = new c.Renderer(e, 0, 0, {}, void 0, void 0, b.styledMode));
          this.split ? this.label = b.g(f) : (this.label = b.label("", 0, 0, d.shape || "callout", null, null, d.useHTML, null, f).attr({
            padding: d.padding,
            r: d.borderRadius
          }), a || this.label.attr({
            fill: d.backgroundColor,
            "stroke-width": d.borderWidth
          }).css(d.style).shadow(d.shadow));
          a && (this.applyFilter(), this.label.addClass("highcharts-tooltip-" + this.chart.index));

          if (this.outside) {
            var h = {
              x: this.label.xSetter,
              y: this.label.ySetter
            };

            this.label.xSetter = function (a, b) {
              h[b].call(this.label, g.distance);
              e.style.left = a + "px";
            };

            this.label.ySetter = function (a, b) {
              h[b].call(this.label, g.distance);
              e.style.top = a + "px";
            };
          }

          this.label.attr({
            zIndex: 8
          }).add();
        }

        return this.label;
      },
      update: function update(c) {
        this.destroy();
        C(!0, this.chart.options.tooltip.userOptions, c);
        this.init(this.chart, C(!0, this.options, c));
      },
      destroy: function destroy() {
        this.label && (this.label = this.label.destroy());
        this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy());
        this.renderer && (this.renderer = this.renderer.destroy(), c.discardElement(this.container));
        c.clearTimeout(this.hideTimer);
        c.clearTimeout(this.tooltipTimeout);
      },
      move: function move(g, b, a, d) {
        var f = this,
            e = f.now,
            h = !1 !== f.options.animation && !f.isHidden && (1 < Math.abs(g - e.x) || 1 < Math.abs(b - e.y)),
            r = f.followPointer || 1 < f.len;
        L(e, {
          x: h ? (2 * e.x + g) / 3 : g,
          y: h ? (e.y + b) / 2 : b,
          anchorX: r ? void 0 : h ? (2 * e.anchorX + a) / 3 : a,
          anchorY: r ? void 0 : h ? (e.anchorY + d) / 2 : d
        });
        f.getLabel().attr(e);
        h && (c.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
          f && f.move(g, b, a, d);
        }, 32));
      },
      hide: function hide(g) {
        var b = this;
        c.clearTimeout(this.hideTimer);
        g = x(g, this.options.hideDelay, 500);
        this.isHidden || (this.hideTimer = m(function () {
          b.getLabel()[g ? "fadeOut" : "hide"]();
          b.isHidden = !0;
        }, g));
      },
      getAnchor: function getAnchor(c, b) {
        var a = this.chart,
            d = a.pointer,
            f = a.inverted,
            e = a.plotTop,
            h = a.plotLeft,
            r = 0,
            g = 0,
            q,
            v;
        c = z(c);
        this.followPointer && b ? (void 0 === b.chartX && (b = d.normalize(b)), c = [b.chartX - a.plotLeft, b.chartY - e]) : c[0].tooltipPos ? c = c[0].tooltipPos : (c.forEach(function (a) {
          q = a.series.yAxis;
          v = a.series.xAxis;
          r += a.plotX + (!f && v ? v.left - h : 0);
          g += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!f && q ? q.top - e : 0);
        }), r /= c.length, g /= c.length, c = [f ? a.plotWidth - g : r, this.shared && !f && 1 < c.length && b ? b.chartY - e : f ? a.plotHeight - r : g]);
        return c.map(Math.round);
      },
      getPosition: function getPosition(c, b, a) {
        var d = this.chart,
            f = this.distance,
            e = {},
            h = d.inverted && a.h || 0,
            r,
            g = this.outside,
            q = g ? u.documentElement.clientWidth - 2 * f : d.chartWidth,
            v = g ? Math.max(u.body.scrollHeight, u.documentElement.scrollHeight, u.body.offsetHeight, u.documentElement.offsetHeight, u.documentElement.clientHeight) : d.chartHeight,
            k = d.pointer.chartPosition,
            t = d.containerScaling,
            B = function B(a) {
          return t ? a * t.scaleX : a;
        },
            I = function I(a) {
          return t ? a * t.scaleY : a;
        },
            w = function w(e) {
          var l = "x" === e;
          return [e, l ? q : v, l ? c : b].concat(g ? [l ? B(c) : I(b), l ? k.left - f + B(a.plotX + d.plotLeft) : k.top - f + I(a.plotY + d.plotTop), 0, l ? q : v] : [l ? c : b, l ? a.plotX + d.plotLeft : a.plotY + d.plotTop, l ? d.plotLeft : d.plotTop, l ? d.plotLeft + d.plotWidth : d.plotTop + d.plotHeight]);
        },
            l = w("y"),
            m = w("x"),
            p = !this.followPointer && x(a.ttBelow, !d.inverted === !!a.negative),
            n = function n(a, b, d, c, k, l, t) {
          var w = "y" === a ? I(f) : B(f),
              r = (d - c) / 2,
              q = c < k - f,
              v = k + f + c < b,
              g = k - w - d + r;
          k = k + w - r;
          if (p && v) e[a] = k;else if (!p && q) e[a] = g;else if (q) e[a] = Math.min(t - c, 0 > g - h ? g : g - h);else if (v) e[a] = Math.max(l, k + h + d > b ? k : k + h);else return !1;
        },
            y = function y(a, b, d, c, k) {
          var l;
          k < f || k > b - f ? l = !1 : e[a] = k < d / 2 ? 1 : k > b - c / 2 ? b - c - 2 : k - d / 2;
          return l;
        },
            z = function z(a) {
          var b = l;
          l = m;
          m = b;
          r = a;
        },
            M = function M() {
          !1 !== n.apply(0, l) ? !1 !== y.apply(0, m) || r || (z(!0), M()) : r ? e.x = e.y = 0 : (z(!0), M());
        };

        (d.inverted || 1 < this.len) && z();
        M();
        return e;
      },
      defaultFormatter: function defaultFormatter(c) {
        var b = this.points || z(this);
        var a = [c.tooltipFooterHeaderFormatter(b[0])];
        a = a.concat(c.bodyFormatter(b));
        a.push(c.tooltipFooterHeaderFormatter(b[0], !0));
        return a;
      },
      refresh: function refresh(g, b) {
        var a = this.chart,
            d = this.options,
            f = g,
            e = {},
            h = [];
        var r = d.formatter || this.defaultFormatter;
        e = this.shared;
        var m = a.styledMode;

        if (d.enabled) {
          c.clearTimeout(this.hideTimer);
          this.followPointer = z(f)[0].series.tooltipOptions.followPointer;
          var q = this.getAnchor(f, b);
          b = q[0];
          var v = q[1];
          !e || f.series && f.series.noSharedTooltip ? e = f.getLabelConfig() : (a.pointer.applyInactiveState(f), f.forEach(function (a) {
            a.setState("hover");
            h.push(a.getLabelConfig());
          }), e = {
            x: f[0].category,
            y: f[0].y
          }, e.points = h, f = f[0]);
          this.len = h.length;
          r = r.call(e, this);
          e = f.series;
          this.distance = x(e.tooltipOptions.distance, 16);
          !1 === r ? this.hide() : (a = this.getLabel(), this.isHidden && a.attr({
            opacity: 1
          }).show(), this.split ? this.renderSplit(r, z(g)) : (d.style.width && !m || a.css({
            width: this.chart.spacingBox.width
          }), a.attr({
            text: r && r.join ? r.join("") : r
          }), a.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + x(f.colorIndex, e.colorIndex)), m || a.attr({
            stroke: d.borderColor || f.color || e.color || "#666666"
          }), this.updatePosition({
            plotX: b,
            plotY: v,
            negative: f.negative,
            ttBelow: f.ttBelow,
            h: q[2] || 0
          })), this.isHidden = !1);
          c.fireEvent(this, "refresh");
        }
      },
      renderSplit: function renderSplit(g, b) {
        var a = this,
            d = [],
            f = this.chart,
            e = f.renderer,
            h = !0,
            r = this.options,
            m = 0,
            q,
            v = this.getLabel(),
            k = f.plotTop;
        F(g) && (g = [!1, g]);
        g.slice(0, b.length + 1).forEach(function (c, B) {
          if (!1 !== c && "" !== c) {
            B = b[B - 1] || {
              isHeader: !0,
              plotX: b[0].plotX,
              plotY: f.plotHeight
            };
            var t = B.series || a,
                w = t.tt,
                l = B.series || {},
                g = "highcharts-color-" + x(B.colorIndex, l.colorIndex, "none");
            w || (w = {
              padding: r.padding,
              r: r.borderRadius
            }, f.styledMode || (w.fill = r.backgroundColor, w["stroke-width"] = r.borderWidth), t.tt = w = e.label(null, null, null, (B.isHeader ? r.headerShape : r.shape) || "callout", null, null, r.useHTML).addClass("highcharts-tooltip-box " + g).attr(w).add(v));
            w.isActive = !0;
            w.attr({
              text: c
            });
            f.styledMode || w.css(r.style).shadow(r.shadow).attr({
              stroke: r.borderColor || B.color || l.color || "#333333"
            });
            c = w.getBBox();
            g = c.width + w.strokeWidth();
            B.isHeader ? (m = c.height, f.xAxis[0].opposite && (q = !0, k -= m), c = Math.max(0, Math.min(B.plotX + f.plotLeft - g / 2, f.chartWidth + (f.scrollablePixelsX ? f.scrollablePixelsX - f.marginRight : 0) - g))) : c = B.plotX + f.plotLeft - x(r.distance, 16) - g;
            0 > c && (h = !1);
            B.isHeader ? l = q ? -m : f.plotHeight + m : (l = l.yAxis, l = l.pos - k + Math.max(0, Math.min(B.plotY || 0, l.len)));
            d.push({
              target: l,
              rank: B.isHeader ? 1 : 0,
              size: t.tt.getBBox().height + 1,
              point: B,
              x: c,
              tt: w
            });
          }
        });
        this.cleanSplit();
        r.positioner && d.forEach(function (b) {
          var d = r.positioner.call(a, b.tt.getBBox().width, b.size, b.point);
          b.x = d.x;
          b.align = 0;
          b.target = d.y;
          b.rank = x(d.rank, b.rank);
        });
        c.distribute(d, f.plotHeight + m);
        d.forEach(function (b) {
          var d = b.point,
              c = d.series,
              e = c && c.yAxis;
          b.tt.attr({
            visibility: void 0 === b.pos ? "hidden" : "inherit",
            x: h || d.isHeader || r.positioner ? b.x : d.plotX + f.plotLeft + a.distance,
            y: b.pos + k,
            anchorX: d.isHeader ? d.plotX + f.plotLeft : d.plotX + c.xAxis.pos,
            anchorY: d.isHeader ? f.plotTop + f.plotHeight / 2 : e.pos + Math.max(0, Math.min(d.plotY, e.len))
          });
        });
      },
      updatePosition: function updatePosition(g) {
        var b = this.chart,
            a = b.pointer,
            d = this.getLabel(),
            f = g.plotX + b.plotLeft,
            e = g.plotY + b.plotTop;
        a.chartPosition || (a.chartPosition = c.offset(b.container));
        g = (this.options.positioner || this.getPosition).call(this, d.width, d.height, g);

        if (this.outside) {
          var h = (this.options.borderWidth || 0) + 2 * this.distance;
          this.renderer.setSize(d.width + h, d.height + h, !1);
          if (b = b.containerScaling) c.css(this.container, {
            transform: "scale(" + b.scaleX + ", " + b.scaleY + ")"
          }), f *= b.scaleX, e *= b.scaleY;
          f += a.chartPosition.left - g.x;
          e += a.chartPosition.top - g.y;
        }

        this.move(Math.round(g.x), Math.round(g.y || 0), f, e);
      },
      getDateFormat: function getDateFormat(c, b, a, d) {
        var f = this.chart.time,
            e = f.dateFormat("%m-%d %H:%M:%S.%L", b),
            h = {
          millisecond: 15,
          second: 12,
          minute: 9,
          hour: 6,
          day: 3
        },
            r = "millisecond";

        for (g in p) {
          if (c === p.week && +f.dateFormat("%w", b) === a && "00:00:00.000" === e.substr(6)) {
            var g = "week";
            break;
          }

          if (p[g] > c) {
            g = r;
            break;
          }

          if (h[g] && e.substr(h[g]) !== "01-01 00:00:00.000".substr(h[g])) break;
          "week" !== g && (r = g);
        }

        if (g) var q = f.resolveDTLFormat(d[g]).main;
        return q;
      },
      getXDateFormat: function getXDateFormat(c, b, a) {
        b = b.dateTimeLabelFormats;
        var d = a && a.closestPointRange;
        return (d ? this.getDateFormat(d, c.x, a.options.startOfWeek, b) : b.day) || b.year;
      },
      tooltipFooterHeaderFormatter: function tooltipFooterHeaderFormatter(g, b) {
        var a = b ? "footer" : "header",
            d = g.series,
            f = d.tooltipOptions,
            e = f.xDateFormat,
            h = d.xAxis,
            r = h && "datetime" === h.options.type && D(g.key),
            m = f[a + "Format"];
        b = {
          isFooter: b,
          labelConfig: g
        };
        c.fireEvent(this, "headerFormatter", b, function (a) {
          r && !e && (e = this.getXDateFormat(g, f, h));
          r && e && (g.point && g.point.tooltipDateKeys || ["key"]).forEach(function (a) {
            m = m.replace("{point." + a + "}", "{point." + a + ":" + e + "}");
          });
          d.chart.styledMode && (m = this.styledModeFormat(m));
          a.text = y(m, {
            point: g,
            series: d
          }, this.chart.time);
        });
        return b.text;
      },
      bodyFormatter: function bodyFormatter(c) {
        return c.map(function (b) {
          var a = b.series.tooltipOptions;
          return (a[(b.point.formatPrefix || "point") + "Formatter"] || b.point.tooltipFormatter).call(b.point, a[(b.point.formatPrefix || "point") + "Format"] || "");
        });
      },
      styledModeFormat: function styledModeFormat(c) {
        return c.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex}"');
      }
    };
  });
  N(H, "parts/Pointer.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.attr,
        D = n.defined,
        F = n.isNumber,
        z = n.isObject,
        u = n.objectEach,
        L = n.splat,
        y = c.addEvent,
        C = c.charts,
        x = c.color,
        m = c.css,
        p = c.extend,
        g = c.find,
        b = c.fireEvent,
        a = c.offset,
        d = c.pick,
        f = c.Tooltip;

    c.Pointer = function (a, b) {
      this.init(a, b);
    };

    c.Pointer.prototype = {
      init: function init(a, b) {
        this.options = b;
        this.chart = a;
        this.runChartClick = b.chart.events && !!b.chart.events.click;
        this.pinchDown = [];
        this.lastValidTouch = {};
        f && (a.tooltip = new f(a, b.tooltip), this.followTouchMove = d(b.tooltip.followTouchMove, !0));
        this.setDOMEvents();
      },
      zoomOption: function zoomOption(a) {
        var b = this.chart,
            c = b.options.chart,
            f = c.zoomType || "";
        b = b.inverted;
        /touch/.test(a.type) && (f = d(c.pinchType, f));
        this.zoomX = a = /x/.test(f);
        this.zoomY = f = /y/.test(f);
        this.zoomHor = a && !b || f && b;
        this.zoomVert = f && !b || a && b;
        this.hasZoom = a || f;
      },
      normalize: function normalize(b, d) {
        var c = b.touches ? b.touches.length ? b.touches.item(0) : b.changedTouches[0] : b;
        d || (this.chartPosition = d = a(this.chart.container));
        var f = c.pageX - d.left;
        d = c.pageY - d.top;
        if (c = this.chart.containerScaling) f /= c.scaleX, d /= c.scaleY;
        return p(b, {
          chartX: Math.round(f),
          chartY: Math.round(d)
        });
      },
      getCoordinates: function getCoordinates(a) {
        var b = {
          xAxis: [],
          yAxis: []
        };
        this.chart.axes.forEach(function (d) {
          b[d.isXAxis ? "xAxis" : "yAxis"].push({
            axis: d,
            value: d.toValue(a[d.horiz ? "chartX" : "chartY"])
          });
        });
        return b;
      },
      findNearestKDPoint: function findNearestKDPoint(a, b, d) {
        var c;
        a.forEach(function (a) {
          var f = !(a.noSharedTooltip && b) && 0 > a.options.findNearestPointBy.indexOf("y");
          a = a.searchPoint(d, f);

          if ((f = z(a, !0)) && !(f = !z(c, !0))) {
            f = c.distX - a.distX;
            var e = c.dist - a.dist,
                t = (a.series.group && a.series.group.zIndex) - (c.series.group && c.series.group.zIndex);
            f = 0 < (0 !== f && b ? f : 0 !== e ? e : 0 !== t ? t : c.series.index > a.series.index ? -1 : 1);
          }

          f && (c = a);
        });
        return c;
      },
      getPointFromEvent: function getPointFromEvent(a) {
        a = a.target;

        for (var b; a && !b;) {
          b = a.point, a = a.parentNode;
        }

        return b;
      },
      getChartCoordinatesFromPoint: function getChartCoordinatesFromPoint(a, b) {
        var c = a.series,
            f = c.xAxis;
        c = c.yAxis;
        var e = d(a.clientX, a.plotX),
            h = a.shapeArgs;
        if (f && c) return b ? {
          chartX: f.len + f.pos - e,
          chartY: c.len + c.pos - a.plotY
        } : {
          chartX: e + f.pos,
          chartY: a.plotY + c.pos
        };
        if (h && h.x && h.y) return {
          chartX: h.x,
          chartY: h.y
        };
      },
      getHoverData: function getHoverData(a, b, c, f, q, v) {
        var e,
            t = [];
        f = !(!f || !a);
        var h = b && !b.stickyTracking ? [b] : c.filter(function (a) {
          return a.visible && !(!q && a.directTouch) && d(a.options.enableMouseTracking, !0) && a.stickyTracking;
        });
        b = (e = f || !v ? a : this.findNearestKDPoint(h, q, v)) && e.series;
        e && (q && !b.noSharedTooltip ? (h = c.filter(function (a) {
          return a.visible && !(!q && a.directTouch) && d(a.options.enableMouseTracking, !0) && !a.noSharedTooltip;
        }), h.forEach(function (a) {
          var b = g(a.points, function (a) {
            return a.x === e.x && !a.isNull;
          });
          z(b) && (a.chart.isBoosting && (b = a.getPoint(b)), t.push(b));
        })) : t.push(e));
        return {
          hoverPoint: e,
          hoverSeries: b,
          hoverPoints: t
        };
      },
      runPointActions: function runPointActions(a, b) {
        var f = this.chart,
            e = f.tooltip && f.tooltip.options.enabled ? f.tooltip : void 0,
            h = e ? e.shared : !1,
            v = b || f.hoverPoint,
            k = v && v.series || f.hoverSeries;
        k = this.getHoverData(v, k, f.series, (!a || "touchmove" !== a.type) && (!!b || k && k.directTouch && this.isDirectTouch), h, a);
        v = k.hoverPoint;
        var t = k.hoverPoints;
        b = (k = k.hoverSeries) && k.tooltipOptions.followPointer;
        h = h && k && !k.noSharedTooltip;

        if (v && (v !== f.hoverPoint || e && e.isHidden)) {
          (f.hoverPoints || []).forEach(function (a) {
            -1 === t.indexOf(a) && a.setState();
          });
          if (f.hoverSeries !== k) k.onMouseOver();
          this.applyInactiveState(t);
          (t || []).forEach(function (a) {
            a.setState("hover");
          });
          f.hoverPoint && f.hoverPoint.firePointEvent("mouseOut");
          if (!v.series) return;
          v.firePointEvent("mouseOver");
          f.hoverPoints = t;
          f.hoverPoint = v;
          e && e.refresh(h ? t : v, a);
        } else b && e && !e.isHidden && (v = e.getAnchor([{}], a), e.updatePosition({
          plotX: v[0],
          plotY: v[1]
        }));

        this.unDocMouseMove || (this.unDocMouseMove = y(f.container.ownerDocument, "mousemove", function (a) {
          var b = C[c.hoverChartIndex];
          if (b) b.pointer.onDocumentMouseMove(a);
        }));
        f.axes.forEach(function (b) {
          var f = d(b.crosshair.snap, !0),
              e = f ? c.find(t, function (a) {
            return a.series[b.coll] === b;
          }) : void 0;
          e || !f ? b.drawCrosshair(a, e) : b.hideCrosshair();
        });
      },
      applyInactiveState: function applyInactiveState(a) {
        var b = [],
            d;
        (a || []).forEach(function (a) {
          d = a.series;
          b.push(d);
          d.linkedParent && b.push(d.linkedParent);
          d.linkedSeries && (b = b.concat(d.linkedSeries));
          d.navigatorSeries && b.push(d.navigatorSeries);
        });
        this.chart.series.forEach(function (a) {
          -1 === b.indexOf(a) ? a.setState("inactive", !0) : a.options.inactiveOtherPoints && a.setAllPointsToState("inactive");
        });
      },
      reset: function reset(a, b) {
        var d = this.chart,
            c = d.hoverSeries,
            f = d.hoverPoint,
            e = d.hoverPoints,
            k = d.tooltip,
            t = k && k.shared ? e : f;
        a && t && L(t).forEach(function (b) {
          b.series.isCartesian && void 0 === b.plotX && (a = !1);
        });
        if (a) k && t && L(t).length && (k.refresh(t), k.shared && e ? e.forEach(function (a) {
          a.setState(a.state, !0);
          a.series.isCartesian && (a.series.xAxis.crosshair && a.series.xAxis.drawCrosshair(null, a), a.series.yAxis.crosshair && a.series.yAxis.drawCrosshair(null, a));
        }) : f && (f.setState(f.state, !0), d.axes.forEach(function (a) {
          a.crosshair && a.drawCrosshair(null, f);
        })));else {
          if (f) f.onMouseOut();
          e && e.forEach(function (a) {
            a.setState();
          });
          if (c) c.onMouseOut();
          k && k.hide(b);
          this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());
          d.axes.forEach(function (a) {
            a.hideCrosshair();
          });
          this.hoverX = d.hoverPoints = d.hoverPoint = null;
        }
      },
      scaleGroups: function scaleGroups(a, b) {
        var d = this.chart,
            c;
        d.series.forEach(function (f) {
          c = a || f.getPlotBox();
          f.xAxis && f.xAxis.zoomEnabled && f.group && (f.group.attr(c), f.markerGroup && (f.markerGroup.attr(c), f.markerGroup.clip(b ? d.clipRect : null)), f.dataLabelsGroup && f.dataLabelsGroup.attr(c));
        });
        d.clipRect.attr(b || d.clipBox);
      },
      dragStart: function dragStart(a) {
        var b = this.chart;
        b.mouseIsDown = a.type;
        b.cancelClick = !1;
        b.mouseDownX = this.mouseDownX = a.chartX;
        b.mouseDownY = this.mouseDownY = a.chartY;
      },
      drag: function drag(a) {
        var b = this.chart,
            d = b.options.chart,
            c = a.chartX,
            f = a.chartY,
            e = this.zoomHor,
            k = this.zoomVert,
            t = b.plotLeft,
            B = b.plotTop,
            I = b.plotWidth,
            w = b.plotHeight,
            l = this.selectionMarker,
            g = this.mouseDownX,
            m = this.mouseDownY,
            p = d.panKey && a[d.panKey + "Key"];
        if (!l || !l.touch) if (c < t ? c = t : c > t + I && (c = t + I), f < B ? f = B : f > B + w && (f = B + w), this.hasDragged = Math.sqrt(Math.pow(g - c, 2) + Math.pow(m - f, 2)), 10 < this.hasDragged) {
          var u = b.isInsidePlot(g - t, m - B);
          b.hasCartesianSeries && (this.zoomX || this.zoomY) && u && !p && !l && (this.selectionMarker = l = b.renderer.rect(t, B, e ? 1 : I, k ? 1 : w, 0).attr({
            "class": "highcharts-selection-marker",
            zIndex: 7
          }).add(), b.styledMode || l.attr({
            fill: d.selectionMarkerFill || x("#335cad").setOpacity(.25).get()
          }));
          l && e && (c -= g, l.attr({
            width: Math.abs(c),
            x: (0 < c ? 0 : c) + g
          }));
          l && k && (c = f - m, l.attr({
            height: Math.abs(c),
            y: (0 < c ? 0 : c) + m
          }));
          u && !l && d.panning && b.pan(a, d.panning);
        }
      },
      drop: function drop(a) {
        var d = this,
            c = this.chart,
            f = this.hasPinched;

        if (this.selectionMarker) {
          var e = {
            originalEvent: a,
            xAxis: [],
            yAxis: []
          },
              v = this.selectionMarker,
              k = v.attr ? v.attr("x") : v.x,
              t = v.attr ? v.attr("y") : v.y,
              B = v.attr ? v.attr("width") : v.width,
              I = v.attr ? v.attr("height") : v.height,
              w;
          if (this.hasDragged || f) c.axes.forEach(function (b) {
            if (b.zoomEnabled && D(b.min) && (f || d[{
              xAxis: "zoomX",
              yAxis: "zoomY"
            }[b.coll]])) {
              var c = b.horiz,
                  l = "touchend" === a.type ? b.minPixelPadding : 0,
                  h = b.toValue((c ? k : t) + l);
              c = b.toValue((c ? k + B : t + I) - l);
              e[b.coll].push({
                axis: b,
                min: Math.min(h, c),
                max: Math.max(h, c)
              });
              w = !0;
            }
          }), w && b(c, "selection", e, function (a) {
            c.zoom(p(a, f ? {
              animation: !1
            } : null));
          });
          F(c.index) && (this.selectionMarker = this.selectionMarker.destroy());
          f && this.scaleGroups();
        }

        c && F(c.index) && (m(c.container, {
          cursor: c._cursor
        }), c.cancelClick = 10 < this.hasDragged, c.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []);
      },
      onContainerMouseDown: function onContainerMouseDown(a) {
        a = this.normalize(a);
        2 !== a.button && (this.zoomOption(a), a.preventDefault && a.preventDefault(), this.dragStart(a));
      },
      onDocumentMouseUp: function onDocumentMouseUp(a) {
        C[c.hoverChartIndex] && C[c.hoverChartIndex].pointer.drop(a);
      },
      onDocumentMouseMove: function onDocumentMouseMove(a) {
        var b = this.chart,
            d = this.chartPosition;
        a = this.normalize(a, d);
        !d || this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || this.reset();
      },
      onContainerMouseLeave: function onContainerMouseLeave(a) {
        var b = C[c.hoverChartIndex];
        b && (a.relatedTarget || a.toElement) && (b.pointer.reset(), b.pointer.chartPosition = null);
      },
      onContainerMouseMove: function onContainerMouseMove(a) {
        var b = this.chart;
        D(c.hoverChartIndex) && C[c.hoverChartIndex] && C[c.hoverChartIndex].mouseIsDown || (c.hoverChartIndex = b.index);
        a = this.normalize(a);
        a.preventDefault || (a.returnValue = !1);
        "mousedown" === b.mouseIsDown && this.drag(a);
        !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || b.openMenu || this.runPointActions(a);
      },
      inClass: function inClass(a, b) {
        for (var d; a;) {
          if (d = A(a, "class")) {
            if (-1 !== d.indexOf(b)) return !0;
            if (-1 !== d.indexOf("highcharts-container")) return !1;
          }

          a = a.parentNode;
        }
      },
      onTrackerMouseOut: function onTrackerMouseOut(a) {
        var b = this.chart.hoverSeries;
        a = a.relatedTarget || a.toElement;
        this.isDirectTouch = !1;
        if (!(!b || !a || b.stickyTracking || this.inClass(a, "highcharts-tooltip") || this.inClass(a, "highcharts-series-" + b.index) && this.inClass(a, "highcharts-tracker"))) b.onMouseOut();
      },
      onContainerClick: function onContainerClick(a) {
        var d = this.chart,
            c = d.hoverPoint,
            f = d.plotLeft,
            e = d.plotTop;
        a = this.normalize(a);
        d.cancelClick || (c && this.inClass(a.target, "highcharts-tracker") ? (b(c.series, "click", p(a, {
          point: c
        })), d.hoverPoint && c.firePointEvent("click", a)) : (p(a, this.getCoordinates(a)), d.isInsidePlot(a.chartX - f, a.chartY - e) && b(d, "click", a)));
      },
      setDOMEvents: function setDOMEvents() {
        var a = this,
            b = a.chart.container,
            d = b.ownerDocument;

        b.onmousedown = function (b) {
          a.onContainerMouseDown(b);
        };

        b.onmousemove = function (b) {
          a.onContainerMouseMove(b);
        };

        b.onclick = function (b) {
          a.onContainerClick(b);
        };

        this.unbindContainerMouseLeave = y(b, "mouseleave", a.onContainerMouseLeave);
        c.unbindDocumentMouseUp || (c.unbindDocumentMouseUp = y(d, "mouseup", a.onDocumentMouseUp));
        c.hasTouch && (y(b, "touchstart", function (b) {
          a.onContainerTouchStart(b);
        }), y(b, "touchmove", function (b) {
          a.onContainerTouchMove(b);
        }), c.unbindDocumentTouchEnd || (c.unbindDocumentTouchEnd = y(d, "touchend", a.onDocumentTouchEnd)));
      },
      destroy: function destroy() {
        var a = this;
        a.unDocMouseMove && a.unDocMouseMove();
        this.unbindContainerMouseLeave();
        c.chartCount || (c.unbindDocumentMouseUp && (c.unbindDocumentMouseUp = c.unbindDocumentMouseUp()), c.unbindDocumentTouchEnd && (c.unbindDocumentTouchEnd = c.unbindDocumentTouchEnd()));
        clearInterval(a.tooltipTimeout);
        u(a, function (b, d) {
          a[d] = null;
        });
      }
    };
  });
  N(H, "parts/TouchPointer.js", [H["parts/Globals.js"]], function (c) {
    var n = c.charts,
        A = c.extend,
        D = c.noop,
        F = c.pick;
    A(c.Pointer.prototype, {
      pinchTranslate: function pinchTranslate(c, u, n, y, A, x) {
        this.zoomHor && this.pinchTranslateDirection(!0, c, u, n, y, A, x);
        this.zoomVert && this.pinchTranslateDirection(!1, c, u, n, y, A, x);
      },
      pinchTranslateDirection: function pinchTranslateDirection(c, u, n, y, A, x, m, p) {
        var g = this.chart,
            b = c ? "x" : "y",
            a = c ? "X" : "Y",
            d = "chart" + a,
            f = c ? "width" : "height",
            e = g["plot" + (c ? "Left" : "Top")],
            h,
            r,
            E = p || 1,
            q = g.inverted,
            v = g.bounds[c ? "h" : "v"],
            k = 1 === u.length,
            t = u[0][d],
            B = n[0][d],
            I = !k && u[1][d],
            w = !k && n[1][d];

        n = function n() {
          !k && 20 < Math.abs(t - I) && (E = p || Math.abs(B - w) / Math.abs(t - I));
          r = (e - B) / E + t;
          h = g["plot" + (c ? "Width" : "Height")] / E;
        };

        n();
        u = r;

        if (u < v.min) {
          u = v.min;
          var l = !0;
        } else u + h > v.max && (u = v.max - h, l = !0);

        l ? (B -= .8 * (B - m[b][0]), k || (w -= .8 * (w - m[b][1])), n()) : m[b] = [B, w];
        q || (x[b] = r - e, x[f] = h);
        x = q ? 1 / E : E;
        A[f] = h;
        A[b] = u;
        y[q ? c ? "scaleY" : "scaleX" : "scale" + a] = E;
        y["translate" + a] = x * e + (B - x * t);
      },
      pinch: function pinch(c) {
        var u = this,
            n = u.chart,
            y = u.pinchDown,
            z = c.touches,
            x = z.length,
            m = u.lastValidTouch,
            p = u.hasZoom,
            g = u.selectionMarker,
            b = {},
            a = 1 === x && (u.inClass(c.target, "highcharts-tracker") && n.runTrackerClick || u.runChartClick),
            d = {};
        1 < x && (u.initiated = !0);
        p && u.initiated && !a && c.preventDefault();
        [].map.call(z, function (a) {
          return u.normalize(a);
        });
        "touchstart" === c.type ? ([].forEach.call(z, function (a, b) {
          y[b] = {
            chartX: a.chartX,
            chartY: a.chartY
          };
        }), m.x = [y[0].chartX, y[1] && y[1].chartX], m.y = [y[0].chartY, y[1] && y[1].chartY], n.axes.forEach(function (a) {
          if (a.zoomEnabled) {
            var b = n.bounds[a.horiz ? "h" : "v"],
                d = a.minPixelPadding,
                c = a.toPixels(Math.min(F(a.options.min, a.dataMin), a.dataMin)),
                f = a.toPixels(Math.max(F(a.options.max, a.dataMax), a.dataMax)),
                q = Math.max(c, f);
            b.min = Math.min(a.pos, Math.min(c, f) - d);
            b.max = Math.max(a.pos + a.len, q + d);
          }
        }), u.res = !0) : u.followTouchMove && 1 === x ? this.runPointActions(u.normalize(c)) : y.length && (g || (u.selectionMarker = g = A({
          destroy: D,
          touch: !0
        }, n.plotBox)), u.pinchTranslate(y, z, b, g, d, m), u.hasPinched = p, u.scaleGroups(b, d), u.res && (u.res = !1, this.reset(!1, 0)));
      },
      touch: function touch(n, u) {
        var z = this.chart,
            y;
        if (z.index !== c.hoverChartIndex) this.onContainerMouseLeave({
          relatedTarget: !0
        });
        c.hoverChartIndex = z.index;
        if (1 === n.touches.length) {
          if (n = this.normalize(n), (y = z.isInsidePlot(n.chartX - z.plotLeft, n.chartY - z.plotTop)) && !z.openMenu) {
            u && this.runPointActions(n);

            if ("touchmove" === n.type) {
              u = this.pinchDown;
              var A = u[0] ? 4 <= Math.sqrt(Math.pow(u[0].chartX - n.chartX, 2) + Math.pow(u[0].chartY - n.chartY, 2)) : !1;
            }

            F(A, !0) && this.pinch(n);
          } else u && this.reset();
        } else 2 === n.touches.length && this.pinch(n);
      },
      onContainerTouchStart: function onContainerTouchStart(c) {
        this.zoomOption(c);
        this.touch(c, !0);
      },
      onContainerTouchMove: function onContainerTouchMove(c) {
        this.touch(c);
      },
      onDocumentTouchEnd: function onDocumentTouchEnd(z) {
        n[c.hoverChartIndex] && n[c.hoverChartIndex].pointer.drop(z);
      }
    });
  });
  N(H, "parts/MSPointer.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.objectEach,
        D = c.addEvent,
        F = c.charts,
        z = c.css,
        u = c.doc;
    n = c.extend;
    var L = c.noop,
        y = c.Pointer,
        C = c.removeEvent,
        x = c.win,
        m = c.wrap;

    if (!c.hasTouch && (x.PointerEvent || x.MSPointerEvent)) {
      var p = {},
          g = !!x.PointerEvent,
          b = function b() {
        var a = [];

        a.item = function (a) {
          return this[a];
        };

        A(p, function (b) {
          a.push({
            pageX: b.pageX,
            pageY: b.pageY,
            target: b.target
          });
        });
        return a;
      },
          a = function a(_a, f, e, h) {
        "touch" !== _a.pointerType && _a.pointerType !== _a.MSPOINTER_TYPE_TOUCH || !F[c.hoverChartIndex] || (h(_a), h = F[c.hoverChartIndex].pointer, h[f]({
          type: e,
          target: _a.currentTarget,
          preventDefault: L,
          touches: b()
        }));
      };

      n(y.prototype, {
        onContainerPointerDown: function onContainerPointerDown(b) {
          a(b, "onContainerTouchStart", "touchstart", function (a) {
            p[a.pointerId] = {
              pageX: a.pageX,
              pageY: a.pageY,
              target: a.currentTarget
            };
          });
        },
        onContainerPointerMove: function onContainerPointerMove(b) {
          a(b, "onContainerTouchMove", "touchmove", function (a) {
            p[a.pointerId] = {
              pageX: a.pageX,
              pageY: a.pageY
            };
            p[a.pointerId].target || (p[a.pointerId].target = a.currentTarget);
          });
        },
        onDocumentPointerUp: function onDocumentPointerUp(b) {
          a(b, "onDocumentTouchEnd", "touchend", function (a) {
            delete p[a.pointerId];
          });
        },
        batchMSEvents: function batchMSEvents(a) {
          a(this.chart.container, g ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
          a(this.chart.container, g ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
          a(u, g ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
        }
      });
      m(y.prototype, "init", function (a, b, c) {
        a.call(this, b, c);
        this.hasZoom && z(b.container, {
          "-ms-touch-action": "none",
          "touch-action": "none"
        });
      });
      m(y.prototype, "setDOMEvents", function (a) {
        a.apply(this);
        (this.hasZoom || this.followTouchMove) && this.batchMSEvents(D);
      });
      m(y.prototype, "destroy", function (a) {
        this.batchMSEvents(C);
        a.call(this);
      });
    }
  });
  N(H, "parts/Legend.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.isNumber,
        F = c.addEvent,
        z = c.css,
        u = c.discardElement,
        L = c.fireEvent;
    n = c.isFirefox;
    var y = c.marginNames,
        C = c.merge,
        x = c.pick,
        m = c.setAnimation,
        p = c.stableSort,
        g = c.win,
        b = c.wrap;

    c.Legend = function (a, b) {
      this.init(a, b);
    };

    c.Legend.prototype = {
      init: function init(a, b) {
        this.chart = a;
        this.setOptions(b);
        b.enabled && (this.render(), F(this.chart, "endResize", function () {
          this.legend.positionCheckboxes();
        }), this.proximate ? this.unchartrender = F(this.chart, "render", function () {
          this.legend.proximatePositions();
          this.legend.positionItems();
        }) : this.unchartrender && this.unchartrender());
      },
      setOptions: function setOptions(a) {
        var b = x(a.padding, 8);
        this.options = a;
        this.chart.styledMode || (this.itemStyle = a.itemStyle, this.itemHiddenStyle = C(this.itemStyle, a.itemHiddenStyle));
        this.itemMarginTop = a.itemMarginTop || 0;
        this.padding = b;
        this.initialItemY = b - 5;
        this.symbolWidth = x(a.symbolWidth, 16);
        this.pages = [];
        this.proximate = "proximate" === a.layout && !this.chart.inverted;
      },
      update: function update(a, b) {
        var d = this.chart;
        this.setOptions(C(!0, this.options, a));
        this.destroy();
        d.isDirtyLegend = d.isDirtyBox = !0;
        x(b, !0) && d.redraw();
        L(this, "afterUpdate");
      },
      colorizeItem: function colorizeItem(a, b) {
        a.legendGroup[b ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");

        if (!this.chart.styledMode) {
          var d = this.options,
              c = a.legendItem,
              h = a.legendLine,
              r = a.legendSymbol,
              g = this.itemHiddenStyle.color;
          d = b ? d.itemStyle.color : g;
          var q = b ? a.color || g : g,
              v = a.options && a.options.marker,
              k = {
            fill: q
          };
          c && c.css({
            fill: d,
            color: d
          });
          h && h.attr({
            stroke: q
          });
          r && (v && r.isMarker && (k = a.pointAttribs(), b || (k.stroke = k.fill = g)), r.attr(k));
        }

        L(this, "afterColorizeItem", {
          item: a,
          visible: b
        });
      },
      positionItems: function positionItems() {
        this.allItems.forEach(this.positionItem, this);
        this.chart.isResizing || this.positionCheckboxes();
      },
      positionItem: function positionItem(a) {
        var b = this.options,
            c = b.symbolPadding;
        b = !b.rtl;
        var e = a._legendItemPos,
            h = e[0];
        e = e[1];
        var r = a.checkbox;
        if ((a = a.legendGroup) && a.element) a[A(a.translateY) ? "animate" : "attr"]({
          translateX: b ? h : this.legendWidth - h - 2 * c - 4,
          translateY: e
        });
        r && (r.x = h, r.y = e);
      },
      destroyItem: function destroyItem(a) {
        var b = a.checkbox;
        ["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach(function (b) {
          a[b] && (a[b] = a[b].destroy());
        });
        b && u(a.checkbox);
      },
      destroy: function destroy() {
        function a(a) {
          this[a] && (this[a] = this[a].destroy());
        }

        this.getAllItems().forEach(function (b) {
          ["legendItem", "legendGroup"].forEach(a, b);
        });
        "clipRect up down pager nav box title group".split(" ").forEach(a, this);
        this.display = null;
      },
      positionCheckboxes: function positionCheckboxes() {
        var a = this.group && this.group.alignAttr,
            b = this.clipHeight || this.legendHeight,
            c = this.titleHeight;

        if (a) {
          var e = a.translateY;
          this.allItems.forEach(function (d) {
            var f = d.checkbox;

            if (f) {
              var h = e + c + f.y + (this.scrollOffset || 0) + 3;
              z(f, {
                left: a.translateX + d.checkboxOffset + f.x - 20 + "px",
                top: h + "px",
                display: this.proximate || h > e - 6 && h < e + b - 6 ? "" : "none"
              });
            }
          }, this);
        }
      },
      renderTitle: function renderTitle() {
        var a = this.options,
            b = this.padding,
            c = a.title,
            e = 0;
        c.text && (this.title || (this.title = this.chart.renderer.label(c.text, b - 3, b - 4, null, null, null, a.useHTML, null, "legend-title").attr({
          zIndex: 1
        }), this.chart.styledMode || this.title.css(c.style), this.title.add(this.group)), c.width || this.title.css({
          width: this.maxLegendWidth + "px"
        }), a = this.title.getBBox(), e = a.height, this.offsetWidth = a.width, this.contentGroup.attr({
          translateY: e
        }));
        this.titleHeight = e;
      },
      setText: function setText(a) {
        var b = this.options;
        a.legendItem.attr({
          text: b.labelFormat ? c.format(b.labelFormat, a, this.chart.time) : b.labelFormatter.call(a)
        });
      },
      renderItem: function renderItem(a) {
        var b = this.chart,
            c = b.renderer,
            e = this.options,
            h = this.symbolWidth,
            r = e.symbolPadding,
            g = this.itemStyle,
            q = this.itemHiddenStyle,
            v = "horizontal" === e.layout ? x(e.itemDistance, 20) : 0,
            k = !e.rtl,
            t = a.legendItem,
            B = !a.series,
            I = !B && a.series.drawLegendSymbol ? a.series : a,
            w = I.options;
        w = this.createCheckboxForItem && w && w.showCheckbox;
        v = h + r + v + (w ? 20 : 0);
        var l = e.useHTML,
            m = a.options.className;
        t || (a.legendGroup = c.g("legend-item").addClass("highcharts-" + I.type + "-series highcharts-color-" + a.colorIndex + (m ? " " + m : "") + (B ? " highcharts-series-" + a.index : "")).attr({
          zIndex: 1
        }).add(this.scrollGroup), a.legendItem = t = c.text("", k ? h + r : -r, this.baseline || 0, l), b.styledMode || t.css(C(a.visible ? g : q)), t.attr({
          align: k ? "left" : "right",
          zIndex: 2
        }).add(a.legendGroup), this.baseline || (this.fontMetrics = c.fontMetrics(b.styledMode ? 12 : g.fontSize, t), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, t.attr("y", this.baseline)), this.symbolHeight = e.symbolHeight || this.fontMetrics.f, I.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, t, l));
        w && !a.checkbox && this.createCheckboxForItem(a);
        this.colorizeItem(a, a.visible);
        !b.styledMode && g.width || t.css({
          width: (e.itemWidth || this.widthOption || b.spacingBox.width) - v
        });
        this.setText(a);
        b = t.getBBox();
        a.itemWidth = a.checkboxOffset = e.itemWidth || a.legendItemWidth || b.width + v;
        this.maxItemWidth = Math.max(this.maxItemWidth, a.itemWidth);
        this.totalItemWidth += a.itemWidth;
        this.itemHeight = a.itemHeight = Math.round(a.legendItemHeight || b.height || this.symbolHeight);
      },
      layoutItem: function layoutItem(a) {
        var b = this.options,
            c = this.padding,
            e = "horizontal" === b.layout,
            h = a.itemHeight,
            g = b.itemMarginBottom || 0,
            m = this.itemMarginTop,
            q = e ? x(b.itemDistance, 20) : 0,
            v = this.maxLegendWidth;
        b = b.alignColumns && this.totalItemWidth > v ? this.maxItemWidth : a.itemWidth;
        e && this.itemX - c + b > v && (this.itemX = c, this.lastLineHeight && (this.itemY += m + this.lastLineHeight + g), this.lastLineHeight = 0);
        this.lastItemY = m + this.itemY + g;
        this.lastLineHeight = Math.max(h, this.lastLineHeight);
        a._legendItemPos = [this.itemX, this.itemY];
        e ? this.itemX += b : (this.itemY += m + h + g, this.lastLineHeight = h);
        this.offsetWidth = this.widthOption || Math.max((e ? this.itemX - c - (a.checkbox ? 0 : q) : b) + c, this.offsetWidth);
      },
      getAllItems: function getAllItems() {
        var a = [];
        this.chart.series.forEach(function (b) {
          var d = b && b.options;
          b && x(d.showInLegend, A(d.linkedTo) ? !1 : void 0, !0) && (a = a.concat(b.legendItems || ("point" === d.legendType ? b.data : b)));
        });
        L(this, "afterGetAllItems", {
          allItems: a
        });
        return a;
      },
      getAlignment: function getAlignment() {
        var a = this.options;
        return this.proximate ? a.align.charAt(0) + "tv" : a.floating ? "" : a.align.charAt(0) + a.verticalAlign.charAt(0) + a.layout.charAt(0);
      },
      adjustMargins: function adjustMargins(a, b) {
        var d = this.chart,
            c = this.options,
            h = this.getAlignment();
        h && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function (f, e) {
          f.test(h) && !A(a[e]) && (d[y[e]] = Math.max(d[y[e]], d.legend[(e + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][e] * c[e % 2 ? "x" : "y"] + x(c.margin, 12) + b[e] + (d.titleOffset[e] || 0)));
        });
      },
      proximatePositions: function proximatePositions() {
        var a = this.chart,
            b = [],
            f = "left" === this.options.align;
        this.allItems.forEach(function (d) {
          var e = f;

          if (d.yAxis && d.points) {
            d.xAxis.options.reversed && (e = !e);
            var g = c.find(e ? d.points : d.points.slice(0).reverse(), function (a) {
              return D(a.plotY);
            });
            e = d.legendGroup.getBBox().height;
            var m = d.yAxis.top - a.plotTop;
            d.visible ? (g = g ? g.plotY : d.yAxis.height, g += m - .3 * e) : g = m + d.yAxis.height;
            b.push({
              target: g,
              size: e,
              item: d
            });
          }
        }, this);
        c.distribute(b, a.plotHeight);
        b.forEach(function (b) {
          b.item._legendItemPos[1] = a.plotTop - a.spacing[0] + b.pos;
        });
      },
      render: function render() {
        var a = this.chart,
            b = a.renderer,
            f = this.group,
            e,
            h = this.box,
            g = this.options,
            m = this.padding;
        this.itemX = m;
        this.itemY = this.initialItemY;
        this.lastItemY = this.offsetWidth = 0;
        this.widthOption = c.relativeLength(g.width, a.spacingBox.width - m);
        var q = a.spacingBox.width - 2 * m - g.x;
        -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (q /= 2);
        this.maxLegendWidth = this.widthOption || q;
        f || (this.group = f = b.g("legend").attr({
          zIndex: 7
        }).add(), this.contentGroup = b.g().attr({
          zIndex: 1
        }).add(f), this.scrollGroup = b.g().add(this.contentGroup));
        this.renderTitle();
        q = this.getAllItems();
        p(q, function (a, b) {
          return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0);
        });
        g.reversed && q.reverse();
        this.allItems = q;
        this.display = e = !!q.length;
        this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0;
        q.forEach(this.renderItem, this);
        q.forEach(this.layoutItem, this);
        q = (this.widthOption || this.offsetWidth) + m;
        var v = this.lastItemY + this.lastLineHeight + this.titleHeight;
        v = this.handleOverflow(v);
        v += m;
        h || (this.box = h = b.rect().addClass("highcharts-legend-box").attr({
          r: g.borderRadius
        }).add(f), h.isNew = !0);
        a.styledMode || h.attr({
          stroke: g.borderColor,
          "stroke-width": g.borderWidth || 0,
          fill: g.backgroundColor || "none"
        }).shadow(g.shadow);
        0 < q && 0 < v && (h[h.isNew ? "attr" : "animate"](h.crisp.call({}, {
          x: 0,
          y: 0,
          width: q,
          height: v
        }, h.strokeWidth())), h.isNew = !1);
        h[e ? "show" : "hide"]();
        a.styledMode && "none" === f.getStyle("display") && (q = v = 0);
        this.legendWidth = q;
        this.legendHeight = v;
        e && (b = a.spacingBox, h = b.y, /(lth|ct|rth)/.test(this.getAlignment()) && 0 < a.titleOffset[0] ? h += a.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < a.titleOffset[2] && (h -= a.titleOffset[2]), h !== b.y && (b = C(b, {
          y: h
        })), f.align(C(g, {
          width: q,
          height: v,
          verticalAlign: this.proximate ? "top" : g.verticalAlign
        }), !0, b));
        this.proximate || this.positionItems();
        L(this, "afterRender");
      },
      handleOverflow: function handleOverflow(a) {
        var b = this,
            c = this.chart,
            e = c.renderer,
            h = this.options,
            g = h.y,
            m = this.padding;
        g = c.spacingBox.height + ("top" === h.verticalAlign ? -g : g) - m;

        var q = h.maxHeight,
            v,
            k = this.clipRect,
            t = h.navigation,
            B = x(t.animation, !0),
            I = t.arrowSize || 12,
            w = this.nav,
            l = this.pages,
            p,
            K = this.allItems,
            n = function n(a) {
          "number" === typeof a ? k.attr({
            height: a
          }) : k && (b.clipRect = k.destroy(), b.contentGroup.clip());
          b.contentGroup.div && (b.contentGroup.div.style.clip = a ? "rect(" + m + "px,9999px," + (m + a) + "px,0)" : "auto");
        },
            u = function u(a) {
          b[a] = e.circle(0, 0, 1.3 * I).translate(I / 2, I / 2).add(w);
          c.styledMode || b[a].attr("fill", "rgba(0,0,0,0.0001)");
          return b[a];
        };

        "horizontal" !== h.layout || "middle" === h.verticalAlign || h.floating || (g /= 2);
        q && (g = Math.min(g, q));
        l.length = 0;
        a > g && !1 !== t.enabled ? (this.clipHeight = v = Math.max(g - 20 - this.titleHeight - m, 0), this.currentPage = x(this.currentPage, 1), this.fullHeight = a, K.forEach(function (a, b) {
          var d = a._legendItemPos[1],
              c = Math.round(a.legendItem.getBBox().height),
              f = l.length;
          if (!f || d - l[f - 1] > v && (p || d) !== l[f - 1]) l.push(p || d), f++;
          a.pageIx = f - 1;
          p && (K[b - 1].pageIx = f - 1);
          b === K.length - 1 && d + c - l[f - 1] > v && d !== p && (l.push(d), a.pageIx = f);
          d !== p && (p = d);
        }), k || (k = b.clipRect = e.clipRect(0, m, 9999, 0), b.contentGroup.clip(k)), n(v), w || (this.nav = w = e.g().attr({
          zIndex: 1
        }).add(this.group), this.up = e.symbol("triangle", 0, 0, I, I).add(w), u("upTracker").on("click", function () {
          b.scroll(-1, B);
        }), this.pager = e.text("", 15, 10).addClass("highcharts-legend-navigation"), c.styledMode || this.pager.css(t.style), this.pager.add(w), this.down = e.symbol("triangle-down", 0, 0, I, I).add(w), u("downTracker").on("click", function () {
          b.scroll(1, B);
        })), b.scroll(0), a = g) : w && (n(), this.nav = w.destroy(), this.scrollGroup.attr({
          translateY: 1
        }), this.clipHeight = 0);
        return a;
      },
      scroll: function scroll(a, b) {
        var d = this.pages,
            c = d.length,
            h = this.currentPage + a;
        a = this.clipHeight;
        var g = this.options.navigation,
            p = this.pager,
            q = this.padding;
        h > c && (h = c);
        0 < h && (void 0 !== b && m(b, this.chart), this.nav.attr({
          translateX: q,
          translateY: a + this.padding + 7 + this.titleHeight,
          visibility: "visible"
        }), [this.up, this.upTracker].forEach(function (a) {
          a.attr({
            "class": 1 === h ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
          });
        }), p.attr({
          text: h + "/" + c
        }), [this.down, this.downTracker].forEach(function (a) {
          a.attr({
            x: 18 + this.pager.getBBox().width,
            "class": h === c ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
          });
        }, this), this.chart.styledMode || (this.up.attr({
          fill: 1 === h ? g.inactiveColor : g.activeColor
        }), this.upTracker.css({
          cursor: 1 === h ? "default" : "pointer"
        }), this.down.attr({
          fill: h === c ? g.inactiveColor : g.activeColor
        }), this.downTracker.css({
          cursor: h === c ? "default" : "pointer"
        })), this.scrollOffset = -d[h - 1] + this.initialItemY, this.scrollGroup.animate({
          translateY: this.scrollOffset
        }), this.currentPage = h, this.positionCheckboxes());
      }
    };
    c.LegendSymbolMixin = {
      drawRectangle: function drawRectangle(a, b) {
        var d = a.symbolHeight,
            c = a.options.squareSymbol;
        b.legendSymbol = this.chart.renderer.rect(c ? (a.symbolWidth - d) / 2 : 0, a.baseline - d + 1, c ? d : a.symbolWidth, d, x(a.options.symbolRadius, d / 2)).addClass("highcharts-point").attr({
          zIndex: 3
        }).add(b.legendGroup);
      },
      drawLineMarker: function drawLineMarker(a) {
        var b = this.options,
            c = b.marker,
            e = a.symbolWidth,
            h = a.symbolHeight,
            g = h / 2,
            m = this.chart.renderer,
            q = this.legendGroup;
        a = a.baseline - Math.round(.3 * a.fontMetrics.b);
        var v = {};
        this.chart.styledMode || (v = {
          "stroke-width": b.lineWidth || 0
        }, b.dashStyle && (v.dashstyle = b.dashStyle));
        this.legendLine = m.path(["M", 0, a, "L", e, a]).addClass("highcharts-graph").attr(v).add(q);
        c && !1 !== c.enabled && e && (b = Math.min(x(c.radius, g), g), 0 === this.symbol.indexOf("url") && (c = C(c, {
          width: h,
          height: h
        }), b = 0), this.legendSymbol = c = m.symbol(this.symbol, e / 2 - b, a - b, 2 * b, 2 * b, c).addClass("highcharts-point").add(q), c.isMarker = !0);
      }
    };
    (/Trident\/7\.0/.test(g.navigator && g.navigator.userAgent) || n) && b(c.Legend.prototype, "positionItem", function (a, b) {
      var d = this,
          c = function c() {
        b._legendItemPos && a.call(d, b);
      };

      c();
      d.bubbleLegend || setTimeout(c);
    });
  });
  N(H, "parts/Chart.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.attr,
        D = n.defined,
        F = n.erase,
        z = n.isArray,
        u = n.isNumber,
        L = n.isObject,
        y = n.isString,
        C = n.objectEach,
        x = n.pInt,
        m = n.splat,
        p = c.addEvent,
        g = c.animate,
        b = c.animObject,
        a = c.doc,
        d = c.Axis,
        f = c.createElement,
        e = c.defaultOptions,
        h = c.discardElement,
        r = c.charts,
        E = c.css,
        q = c.extend,
        v = c.find,
        k = c.fireEvent,
        t = c.Legend,
        B = c.marginNames,
        I = c.merge,
        w = c.Pointer,
        l = c.pick,
        J = c.removeEvent,
        K = c.seriesTypes,
        T = c.syncTimeout,
        R = c.win,
        S = c.Chart = function () {
      this.getArgs.apply(this, arguments);
    };

    c.chart = function (a, b, d) {
      return new S(a, b, d);
    };

    q(S.prototype, {
      callbacks: [],
      getArgs: function getArgs() {
        var a = [].slice.call(arguments);
        if (y(a[0]) || a[0].nodeName) this.renderTo = a.shift();
        this.init(a[0], a[1]);
      },
      init: function init(a, b) {
        var d,
            f = a.series,
            l = a.plotOptions || {};
        k(this, "init", {
          args: arguments
        }, function () {
          a.series = null;
          d = I(e, a);
          C(d.plotOptions, function (a, b) {
            L(a) && (a.tooltip = l[b] && I(l[b].tooltip) || void 0);
          });
          d.tooltip.userOptions = a.chart && a.chart.forExport && a.tooltip.userOptions || a.tooltip;
          d.series = a.series = f;
          this.userOptions = a;
          var t = d.chart,
              B = t.events;
          this.margin = [];
          this.spacing = [];
          this.bounds = {
            h: {},
            v: {}
          };
          this.labelCollectors = [];
          this.callback = b;
          this.isResizing = 0;
          this.options = d;
          this.axes = [];
          this.series = [];
          this.time = a.time && Object.keys(a.time).length ? new c.Time(a.time) : c.time;
          this.styledMode = t.styledMode;
          this.hasCartesianSeries = t.showAxes;
          var h = this;
          h.index = r.length;
          r.push(h);
          c.chartCount++;
          B && C(B, function (a, b) {
            c.isFunction(a) && p(h, b, a);
          });
          h.xAxis = [];
          h.yAxis = [];
          h.pointCount = h.colorCounter = h.symbolCounter = 0;
          k(h, "afterInit");
          h.firstRender();
        });
      },
      initSeries: function initSeries(a) {
        var b = this.options.chart;
        (b = K[a.type || b.type || b.defaultSeriesType]) || c.error(17, !0, this);
        b = new b();
        b.init(this, a);
        return b;
      },
      orderSeries: function orderSeries(a) {
        var b = this.series;

        for (a = a || 0; a < b.length; a++) {
          b[a] && (b[a].index = a, b[a].name = b[a].getName());
        }
      },
      isInsidePlot: function isInsidePlot(a, b, d) {
        var c = d ? b : a;
        a = d ? a : b;
        return 0 <= c && c <= this.plotWidth && 0 <= a && a <= this.plotHeight;
      },
      redraw: function redraw(a) {
        k(this, "beforeRedraw");
        var b = this.axes,
            d = this.series,
            f = this.pointer,
            e = this.legend,
            l = this.userOptions.legend,
            t = this.isDirtyLegend,
            h = this.hasCartesianSeries,
            B = this.isDirtyBox,
            w = this.renderer,
            g = w.isHidden(),
            v = [];
        this.setResponsive && this.setResponsive(!1);
        c.setAnimation(a, this);
        g && this.temporaryDisplay();
        this.layOutTitles();

        for (a = d.length; a--;) {
          var m = d[a];

          if (m.options.stacking) {
            var I = !0;

            if (m.isDirty) {
              var p = !0;
              break;
            }
          }
        }

        if (p) for (a = d.length; a--;) {
          m = d[a], m.options.stacking && (m.isDirty = !0);
        }
        d.forEach(function (a) {
          a.isDirty && ("point" === a.options.legendType ? (a.updateTotals && a.updateTotals(), t = !0) : l && (l.labelFormatter || l.labelFormat) && (t = !0));
          a.isDirtyData && k(a, "updatedData");
        });
        t && e && e.options.enabled && (e.render(), this.isDirtyLegend = !1);
        I && this.getStacks();
        h && b.forEach(function (a) {
          a.updateNames();
          a.setScale();
        });
        this.getMargins();
        h && (b.forEach(function (a) {
          a.isDirty && (B = !0);
        }), b.forEach(function (a) {
          var b = a.min + "," + a.max;
          a.extKey !== b && (a.extKey = b, v.push(function () {
            k(a, "afterSetExtremes", q(a.eventArgs, a.getExtremes()));
            delete a.eventArgs;
          }));
          (B || I) && a.redraw();
        }));
        B && this.drawChartBox();
        k(this, "predraw");
        d.forEach(function (a) {
          (B || a.isDirty) && a.visible && a.redraw();
          a.isDirtyData = !1;
        });
        f && f.reset(!0);
        w.draw();
        k(this, "redraw");
        k(this, "render");
        g && this.temporaryDisplay(!0);
        v.forEach(function (a) {
          a.call();
        });
      },
      get: function get(a) {
        function b(b) {
          return b.id === a || b.options && b.options.id === a;
        }

        var d = this.series,
            c;
        var f = v(this.axes, b) || v(this.series, b);

        for (c = 0; !f && c < d.length; c++) {
          f = v(d[c].points || [], b);
        }

        return f;
      },
      getAxes: function getAxes() {
        var a = this,
            b = this.options,
            c = b.xAxis = m(b.xAxis || {});
        b = b.yAxis = m(b.yAxis || {});
        k(this, "getAxes");
        c.forEach(function (a, b) {
          a.index = b;
          a.isX = !0;
        });
        b.forEach(function (a, b) {
          a.index = b;
        });
        c.concat(b).forEach(function (b) {
          new d(a, b);
        });
        k(this, "afterGetAxes");
      },
      getSelectedPoints: function getSelectedPoints() {
        var a = [];
        this.series.forEach(function (b) {
          a = a.concat((b[b.hasGroupedData ? "points" : "data"] || []).filter(function (a) {
            return l(a.selectedStaging, a.selected);
          }));
        });
        return a;
      },
      getSelectedSeries: function getSelectedSeries() {
        return this.series.filter(function (a) {
          return a.selected;
        });
      },
      setTitle: function setTitle(a, b, d) {
        this.applyDescription("title", a);
        this.applyDescription("subtitle", b);
        this.applyDescription("caption", void 0);
        this.layOutTitles(d);
      },
      applyDescription: function applyDescription(a, b) {
        var d = this,
            c = "title" === a ? {
          color: "#333333",
          fontSize: this.options.isStock ? "16px" : "18px"
        } : {
          color: "#666666"
        };
        c = this.options[a] = I(!this.styledMode && {
          style: c
        }, this.options[a], b);
        var f = this[a];
        f && b && (this[a] = f = f.destroy());
        c && !f && (f = this.renderer.text(c.text, 0, 0, c.useHTML).attr({
          align: c.align,
          "class": "highcharts-" + a,
          zIndex: c.zIndex || 4
        }).add(), f.update = function (b) {
          d[{
            title: "setTitle",
            subtitle: "setSubtitle",
            caption: "setCaption"
          }[a]](b);
        }, this.styledMode || f.css(c.style), this[a] = f);
      },
      layOutTitles: function layOutTitles(a) {
        var b = [0, 0, 0],
            d = this.renderer,
            c = this.spacingBox;
        ["title", "subtitle", "caption"].forEach(function (a) {
          var f = this[a],
              e = this.options[a],
              k = e.verticalAlign || "top";
          a = "title" === a ? -3 : "top" === k ? b[0] + 2 : 0;

          if (f) {
            if (!this.styledMode) var l = e.style.fontSize;
            l = d.fontMetrics(l, f).b;
            f.css({
              width: (e.width || c.width + (e.widthAdjust || 0)) + "px"
            });
            var t = f.getBBox(e.useHTML).height;
            f.align(q({
              y: "bottom" === k ? l : a + l,
              height: t
            }, e), !1, "spacingBox");
            e.floating || ("top" === k ? b[0] = Math.ceil(b[0] + t) : "bottom" === k && (b[2] = Math.ceil(b[2] + t)));
          }
        }, this);
        b[0] && "top" === (this.options.title.verticalAlign || "top") && (b[0] += this.options.title.margin);
        b[2] && "bottom" === this.options.caption.verticalAlign && (b[2] += this.options.caption.margin);
        var f = !this.titleOffset || this.titleOffset.join(",") !== b.join(",");
        this.titleOffset = b;
        !this.isDirtyBox && f && (this.isDirtyBox = this.isDirtyLegend = f, this.hasRendered && l(a, !0) && this.isDirtyBox && this.redraw());
      },
      getChartSize: function getChartSize() {
        var a = this.options.chart,
            b = a.width;
        a = a.height;
        var d = this.renderTo;
        D(b) || (this.containerWidth = c.getStyle(d, "width"));
        D(a) || (this.containerHeight = c.getStyle(d, "height"));
        this.chartWidth = Math.max(0, b || this.containerWidth || 600);
        this.chartHeight = Math.max(0, c.relativeLength(a, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400));
      },
      temporaryDisplay: function temporaryDisplay(b) {
        var d = this.renderTo;
        if (b) for (; d && d.style;) {
          d.hcOrigStyle && (c.css(d, d.hcOrigStyle), delete d.hcOrigStyle), d.hcOrigDetached && (a.body.removeChild(d), d.hcOrigDetached = !1), d = d.parentNode;
        } else for (; d && d.style;) {
          a.body.contains(d) || d.parentNode || (d.hcOrigDetached = !0, a.body.appendChild(d));
          if ("none" === c.getStyle(d, "display", !1) || d.hcOricDetached) d.hcOrigStyle = {
            display: d.style.display,
            height: d.style.height,
            overflow: d.style.overflow
          }, b = {
            display: "block",
            overflow: "hidden"
          }, d !== this.renderTo && (b.height = 0), c.css(d, b), d.offsetWidth || d.style.setProperty("display", "block", "important");
          d = d.parentNode;
          if (d === a.body) break;
        }
      },
      setClassName: function setClassName(a) {
        this.container.className = "highcharts-container " + (a || "");
      },
      getContainer: function getContainer() {
        var b = this.options,
            d = b.chart;
        var e = this.renderTo;
        var l = c.uniqueKey(),
            t,
            h;
        e || (this.renderTo = e = d.renderTo);
        y(e) && (this.renderTo = e = a.getElementById(e));
        e || c.error(13, !0, this);
        var B = x(A(e, "data-highcharts-chart"));
        u(B) && r[B] && r[B].hasRendered && r[B].destroy();
        A(e, "data-highcharts-chart", this.index);
        e.innerHTML = "";
        d.skipClone || e.offsetWidth || this.temporaryDisplay();
        this.getChartSize();
        B = this.chartWidth;
        var w = this.chartHeight;
        E(e, {
          overflow: "hidden"
        });
        this.styledMode || (t = q({
          position: "relative",
          overflow: "hidden",
          width: B + "px",
          height: w + "px",
          textAlign: "left",
          lineHeight: "normal",
          zIndex: 0,
          "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
        }, d.style));
        this.container = e = f("div", {
          id: l
        }, t, e);
        this._cursor = e.style.cursor;
        this.renderer = new (c[d.renderer] || c.Renderer)(e, B, w, null, d.forExport, b.exporting && b.exporting.allowHTML, this.styledMode);
        this.setClassName(d.className);
        if (this.styledMode) for (h in b.defs) {
          this.renderer.definition(b.defs[h]);
        } else this.renderer.setStyle(d.style);
        this.renderer.chartIndex = this.index;
        k(this, "afterGetContainer");
      },
      getMargins: function getMargins(a) {
        var b = this.spacing,
            d = this.margin,
            c = this.titleOffset;
        this.resetMargins();
        c[0] && !D(d[0]) && (this.plotTop = Math.max(this.plotTop, c[0] + b[0]));
        c[2] && !D(d[2]) && (this.marginBottom = Math.max(this.marginBottom, c[2] + b[2]));
        this.legend && this.legend.display && this.legend.adjustMargins(d, b);
        k(this, "getMargins");
        a || this.getAxisMargins();
      },
      getAxisMargins: function getAxisMargins() {
        var a = this,
            b = a.axisOffset = [0, 0, 0, 0],
            d = a.colorAxis,
            c = a.margin,
            f = function f(a) {
          a.forEach(function (a) {
            a.visible && a.getOffset();
          });
        };

        a.hasCartesianSeries ? f(a.axes) : d && d.length && f(d);
        B.forEach(function (d, f) {
          D(c[f]) || (a[d] += b[f]);
        });
        a.setChartSize();
      },
      reflow: function reflow(b) {
        var d = this,
            f = d.options.chart,
            e = d.renderTo,
            k = D(f.width) && D(f.height),
            l = f.width || c.getStyle(e, "width");
        f = f.height || c.getStyle(e, "height");
        e = b ? b.target : R;

        if (!k && !d.isPrinting && l && f && (e === R || e === a)) {
          if (l !== d.containerWidth || f !== d.containerHeight) c.clearTimeout(d.reflowTimeout), d.reflowTimeout = T(function () {
            d.container && d.setSize(void 0, void 0, !1);
          }, b ? 100 : 0);
          d.containerWidth = l;
          d.containerHeight = f;
        }
      },
      setReflow: function setReflow(a) {
        var b = this;
        !1 === a || this.unbindReflow ? !1 === a && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = p(R, "resize", function (a) {
          b.options && b.reflow(a);
        }), p(this, "destroy", this.unbindReflow));
      },
      setSize: function setSize(a, d, f) {
        var e = this,
            l = e.renderer;
        e.isResizing += 1;
        c.setAnimation(f, e);
        e.oldChartHeight = e.chartHeight;
        e.oldChartWidth = e.chartWidth;
        void 0 !== a && (e.options.chart.width = a);
        void 0 !== d && (e.options.chart.height = d);
        e.getChartSize();

        if (!e.styledMode) {
          var t = l.globalAnimation;
          (t ? g : E)(e.container, {
            width: e.chartWidth + "px",
            height: e.chartHeight + "px"
          }, t);
        }

        e.setChartSize(!0);
        l.setSize(e.chartWidth, e.chartHeight, f);
        e.axes.forEach(function (a) {
          a.isDirty = !0;
          a.setScale();
        });
        e.isDirtyLegend = !0;
        e.isDirtyBox = !0;
        e.layOutTitles();
        e.getMargins();
        e.redraw(f);
        e.oldChartHeight = null;
        k(e, "resize");
        T(function () {
          e && k(e, "endResize", null, function () {
            --e.isResizing;
          });
        }, b(t).duration);
      },
      setChartSize: function setChartSize(a) {
        var b = this.inverted,
            d = this.renderer,
            c = this.chartWidth,
            f = this.chartHeight,
            e = this.options.chart,
            l = this.spacing,
            t = this.clipOffset,
            B,
            h,
            w,
            g;
        this.plotLeft = B = Math.round(this.plotLeft);
        this.plotTop = h = Math.round(this.plotTop);
        this.plotWidth = w = Math.max(0, Math.round(c - B - this.marginRight));
        this.plotHeight = g = Math.max(0, Math.round(f - h - this.marginBottom));
        this.plotSizeX = b ? g : w;
        this.plotSizeY = b ? w : g;
        this.plotBorderWidth = e.plotBorderWidth || 0;
        this.spacingBox = d.spacingBox = {
          x: l[3],
          y: l[0],
          width: c - l[3] - l[1],
          height: f - l[0] - l[2]
        };
        this.plotBox = d.plotBox = {
          x: B,
          y: h,
          width: w,
          height: g
        };
        c = 2 * Math.floor(this.plotBorderWidth / 2);
        b = Math.ceil(Math.max(c, t[3]) / 2);
        d = Math.ceil(Math.max(c, t[0]) / 2);
        this.clipBox = {
          x: b,
          y: d,
          width: Math.floor(this.plotSizeX - Math.max(c, t[1]) / 2 - b),
          height: Math.max(0, Math.floor(this.plotSizeY - Math.max(c, t[2]) / 2 - d))
        };
        a || this.axes.forEach(function (a) {
          a.setAxisSize();
          a.setAxisTranslation();
        });
        k(this, "afterSetChartSize", {
          skipAxes: a
        });
      },
      resetMargins: function resetMargins() {
        k(this, "resetMargins");
        var a = this,
            b = a.options.chart;
        ["margin", "spacing"].forEach(function (d) {
          var c = b[d],
              f = L(c) ? c : [c, c, c, c];
          ["Top", "Right", "Bottom", "Left"].forEach(function (c, e) {
            a[d][e] = l(b[d + c], f[e]);
          });
        });
        B.forEach(function (b, d) {
          a[b] = l(a.margin[d], a.spacing[d]);
        });
        a.axisOffset = [0, 0, 0, 0];
        a.clipOffset = [0, 0, 0, 0];
      },
      drawChartBox: function drawChartBox() {
        var a = this.options.chart,
            b = this.renderer,
            d = this.chartWidth,
            c = this.chartHeight,
            f = this.chartBackground,
            e = this.plotBackground,
            l = this.plotBorder,
            t = this.styledMode,
            B = this.plotBGImage,
            h = a.backgroundColor,
            w = a.plotBackgroundColor,
            g = a.plotBackgroundImage,
            q,
            v = this.plotLeft,
            m = this.plotTop,
            I = this.plotWidth,
            p = this.plotHeight,
            r = this.plotBox,
            K = this.clipRect,
            x = this.clipBox,
            J = "animate";
        f || (this.chartBackground = f = b.rect().addClass("highcharts-background").add(), J = "attr");
        if (t) var n = q = f.strokeWidth();else {
          n = a.borderWidth || 0;
          q = n + (a.shadow ? 8 : 0);
          h = {
            fill: h || "none"
          };
          if (n || f["stroke-width"]) h.stroke = a.borderColor, h["stroke-width"] = n;
          f.attr(h).shadow(a.shadow);
        }
        f[J]({
          x: q / 2,
          y: q / 2,
          width: d - q - n % 2,
          height: c - q - n % 2,
          r: a.borderRadius
        });
        J = "animate";
        e || (J = "attr", this.plotBackground = e = b.rect().addClass("highcharts-plot-background").add());
        e[J](r);
        t || (e.attr({
          fill: w || "none"
        }).shadow(a.plotShadow), g && (B ? B.animate(r) : this.plotBGImage = b.image(g, v, m, I, p).add()));
        K ? K.animate({
          width: x.width,
          height: x.height
        }) : this.clipRect = b.clipRect(x);
        J = "animate";
        l || (J = "attr", this.plotBorder = l = b.rect().addClass("highcharts-plot-border").attr({
          zIndex: 1
        }).add());
        t || l.attr({
          stroke: a.plotBorderColor,
          "stroke-width": a.plotBorderWidth || 0,
          fill: "none"
        });
        l[J](l.crisp({
          x: v,
          y: m,
          width: I,
          height: p
        }, -l.strokeWidth()));
        this.isDirtyBox = !1;
        k(this, "afterDrawChartBox");
      },
      propFromSeries: function propFromSeries() {
        var a = this,
            b = a.options.chart,
            d,
            c = a.options.series,
            f,
            e;
        ["inverted", "angular", "polar"].forEach(function (k) {
          d = K[b.type || b.defaultSeriesType];
          e = b[k] || d && d.prototype[k];

          for (f = c && c.length; !e && f--;) {
            (d = K[c[f].type]) && d.prototype[k] && (e = !0);
          }

          a[k] = e;
        });
      },
      linkSeries: function linkSeries() {
        var a = this,
            b = a.series;
        b.forEach(function (a) {
          a.linkedSeries.length = 0;
        });
        b.forEach(function (b) {
          var d = b.options.linkedTo;
          y(d) && (d = ":previous" === d ? a.series[b.index - 1] : a.get(d)) && d.linkedParent !== b && (d.linkedSeries.push(b), b.linkedParent = d, b.visible = l(b.options.visible, d.options.visible, b.visible));
        });
        k(this, "afterLinkSeries");
      },
      renderSeries: function renderSeries() {
        this.series.forEach(function (a) {
          a.translate();
          a.render();
        });
      },
      renderLabels: function renderLabels() {
        var a = this,
            b = a.options.labels;
        b.items && b.items.forEach(function (d) {
          var c = q(b.style, d.style),
              f = x(c.left) + a.plotLeft,
              e = x(c.top) + a.plotTop + 12;
          delete c.left;
          delete c.top;
          a.renderer.text(d.html, f, e).attr({
            zIndex: 2
          }).css(c).add();
        });
      },
      render: function render() {
        var a = this.axes,
            b = this.colorAxis,
            d = this.renderer,
            c = this.options,
            f = 0,
            e = function e(a) {
          a.forEach(function (a) {
            a.visible && a.render();
          });
        };

        this.setTitle();
        this.legend = new t(this, c.legend);
        this.getStacks && this.getStacks();
        this.getMargins(!0);
        this.setChartSize();
        c = this.plotWidth;
        a.some(function (a) {
          if (a.horiz && a.visible && a.options.labels.enabled && a.series.length) return f = 21, !0;
        });
        var k = this.plotHeight = Math.max(this.plotHeight - f, 0);
        a.forEach(function (a) {
          a.setScale();
        });
        this.getAxisMargins();
        var l = 1.1 < c / this.plotWidth;
        var h = 1.05 < k / this.plotHeight;
        if (l || h) a.forEach(function (a) {
          (a.horiz && l || !a.horiz && h) && a.setTickInterval(!0);
        }), this.getMargins();
        this.drawChartBox();
        this.hasCartesianSeries ? e(a) : b && b.length && e(b);
        this.seriesGroup || (this.seriesGroup = d.g("series-group").attr({
          zIndex: 3
        }).add());
        this.renderSeries();
        this.renderLabels();
        this.addCredits();
        this.setResponsive && this.setResponsive();
        this.updateContainerScaling();
        this.hasRendered = !0;
      },
      addCredits: function addCredits(a) {
        var b = this;
        a = I(!0, this.options.credits, a);
        a.enabled && !this.credits && (this.credits = this.renderer.text(a.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () {
          a.href && (R.location.href = a.href);
        }).attr({
          align: a.position.align,
          zIndex: 8
        }), b.styledMode || this.credits.css(a.style), this.credits.add().align(a.position), this.credits.update = function (a) {
          b.credits = b.credits.destroy();
          b.addCredits(a);
        });
      },
      updateContainerScaling: function updateContainerScaling() {
        var a = this.container;

        if (a.offsetWidth && a.offsetHeight && a.getBoundingClientRect) {
          var b = a.getBoundingClientRect(),
              d = b.width / a.offsetWidth;
          a = b.height / a.offsetHeight;
          1 !== d || 1 !== a ? this.containerScaling = {
            scaleX: d,
            scaleY: a
          } : delete this.containerScaling;
        }
      },
      destroy: function destroy() {
        var a = this,
            b = a.axes,
            d = a.series,
            f = a.container,
            e,
            l = f && f.parentNode;
        k(a, "destroy");
        a.renderer.forExport ? F(r, a) : r[a.index] = void 0;
        c.chartCount--;
        a.renderTo.removeAttribute("data-highcharts-chart");
        J(a);

        for (e = b.length; e--;) {
          b[e] = b[e].destroy();
        }

        this.scroller && this.scroller.destroy && this.scroller.destroy();

        for (e = d.length; e--;) {
          d[e] = d[e].destroy();
        }

        "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function (b) {
          var d = a[b];
          d && d.destroy && (a[b] = d.destroy());
        });
        f && (f.innerHTML = "", J(f), l && h(f));
        C(a, function (b, d) {
          delete a[d];
        });
      },
      firstRender: function firstRender() {
        var a = this,
            b = a.options;

        if (!a.isReadyToRender || a.isReadyToRender()) {
          a.getContainer();
          a.resetMargins();
          a.setChartSize();
          a.propFromSeries();
          a.getAxes();
          (z(b.series) ? b.series : []).forEach(function (b) {
            a.initSeries(b);
          });
          a.linkSeries();
          k(a, "beforeRender");
          w && (a.pointer = new w(a, b));
          a.render();
          if (!a.renderer.imgCount && a.onload) a.onload();
          a.temporaryDisplay(!0);
        }
      },
      onload: function onload() {
        this.callbacks.concat([this.callback]).forEach(function (a) {
          a && void 0 !== this.index && a.apply(this, [this]);
        }, this);
        k(this, "load");
        k(this, "render");
        D(this.index) && this.setReflow(this.options.chart.reflow);
        this.onload = null;
      }
    });
  });
  N(H, "parts/ScrollablePlotArea.js", [H["parts/Globals.js"]], function (c) {
    var n = c.addEvent,
        A = c.Chart;
    "";
    n(A, "afterSetChartSize", function (n) {
      var A = this.options.chart.scrollablePlotArea,
          z = A && A.minWidth;
      A = A && A.minHeight;

      if (!this.renderer.forExport) {
        if (z) {
          if (this.scrollablePixelsX = z = Math.max(0, z - this.chartWidth)) {
            this.plotWidth += z;
            this.inverted ? (this.clipBox.height += z, this.plotBox.height += z) : (this.clipBox.width += z, this.plotBox.width += z);
            var u = {
              1: {
                name: "right",
                value: z
              }
            };
          }
        } else A && (this.scrollablePixelsY = z = Math.max(0, A - this.chartHeight)) && (this.plotHeight += z, this.inverted ? (this.clipBox.width += z, this.plotBox.width += z) : (this.clipBox.height += z, this.plotBox.height += z), u = {
          2: {
            name: "bottom",
            value: z
          }
        });

        u && !n.skipAxes && this.axes.forEach(function (n) {
          u[n.side] ? n.getPlotLinePath = function () {
            var y = u[n.side].name,
                z = this[y];
            this[y] = z - u[n.side].value;
            var x = c.Axis.prototype.getPlotLinePath.apply(this, arguments);
            this[y] = z;
            return x;
          } : (n.setAxisSize(), n.setAxisTranslation());
        });
      }
    });
    n(A, "render", function () {
      this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed();
    });

    A.prototype.setUpScrolling = function () {
      var n = {
        WebkitOverflowScrolling: "touch",
        overflowX: "hidden",
        overflowY: "hidden"
      };
      this.scrollablePixelsX && (n.overflowX = "auto");
      this.scrollablePixelsY && (n.overflowY = "auto");
      this.scrollingContainer = c.createElement("div", {
        className: "highcharts-scrolling"
      }, n, this.renderTo);
      this.innerContainer = c.createElement("div", {
        className: "highcharts-inner-container"
      }, null, this.scrollingContainer);
      this.innerContainer.appendChild(this.container);
      this.setUpScrolling = null;
    };

    A.prototype.moveFixedElements = function () {
      var c = this.container,
          n = this.fixedRenderer,
          z = ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-reset-zoom .highcharts-subtitle .highcharts-title .highcharts-legend-checkbox".split(" "),
          u;
      this.scrollablePixelsX && !this.inverted ? u = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted ? u = ".highcharts-xaxis" : this.scrollablePixelsY && !this.inverted ? u = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (u = ".highcharts-yaxis");
      z.push(u, u + "-labels");
      z.forEach(function (u) {
        [].forEach.call(c.querySelectorAll(u), function (c) {
          (c.namespaceURI === n.SVG_NS ? n.box : n.box.parentNode).appendChild(c);
          c.style.pointerEvents = "auto";
        });
      });
    };

    A.prototype.applyFixed = function () {
      var A,
          F = !this.fixedDiv,
          z = this.options.chart.scrollablePlotArea;
      F ? (this.fixedDiv = c.createElement("div", {
        className: "highcharts-fixed"
      }, {
        position: "absolute",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 2
      }, null, !0), this.renderTo.insertBefore(this.fixedDiv, this.renderTo.firstChild), this.renderTo.style.overflow = "visible", this.fixedRenderer = A = new c.Renderer(this.fixedDiv, this.chartWidth, this.chartHeight), this.scrollableMask = A.path().attr({
        fill: c.color(this.options.chart.backgroundColor || "#fff").setOpacity(c.pick(z.opacity, .85)).get(),
        zIndex: -1
      }).addClass("highcharts-scrollable-mask").add(), this.moveFixedElements(), n(this, "afterShowResetZoom", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight);
      A = this.chartWidth + (this.scrollablePixelsX || 0);
      var u = this.chartHeight + (this.scrollablePixelsY || 0);
      c.stop(this.container);
      this.container.style.width = A + "px";
      this.container.style.height = u + "px";
      this.renderer.boxWrapper.attr({
        width: A,
        height: u,
        viewBox: [0, 0, A, u].join(" ")
      });
      this.chartBackground.attr({
        width: A,
        height: u
      });
      this.scrollablePixelsY && (this.scrollingContainer.style.height = this.chartHeight + "px");
      F && (z.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * z.scrollPositionX), z.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * z.scrollPositionY));
      u = this.axisOffset;
      F = this.plotTop - u[0] - 1;
      z = this.plotLeft - u[3] - 1;
      A = this.plotTop + this.plotHeight + u[2] + 1;
      u = this.plotLeft + this.plotWidth + u[1] + 1;
      var L = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0),
          y = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0);
      F = this.scrollablePixelsX ? ["M", 0, F, "L", this.plotLeft - 1, F, "L", this.plotLeft - 1, A, "L", 0, A, "Z", "M", L, F, "L", this.chartWidth, F, "L", this.chartWidth, A, "L", L, A, "Z"] : this.scrollablePixelsY ? ["M", z, 0, "L", z, this.plotTop - 1, "L", u, this.plotTop - 1, "L", u, 0, "Z", "M", z, y, "L", z, this.chartHeight, "L", u, this.chartHeight, "L", u, y, "Z"] : ["M", 0, 0];
      "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({
        d: F
      });
    };
  });
  N(H, "parts/Point.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.erase,
        F = n.isArray,
        z = n.isNumber,
        u = n.isObject,
        L,
        y = c.extend,
        C = c.fireEvent,
        x = c.format,
        m = c.pick,
        p = c.uniqueKey,
        g = c.removeEvent;

    c.Point = L = function L() {};

    c.Point.prototype = {
      init: function init(b, a, d) {
        this.series = b;
        this.applyOptions(a, d);
        this.id = A(this.id) ? this.id : p();
        this.resolveColor();
        b.chart.pointCount++;
        C(this, "afterInit");
        return this;
      },
      resolveColor: function resolveColor() {
        var b = this.series;
        var a = b.chart.options.chart.colorCount;
        var d = b.chart.styledMode;
        d || this.options.color || (this.color = b.color);
        b.options.colorByPoint ? (d || (a = b.options.colors || b.chart.options.colors, this.color = this.color || a[b.colorCounter], a = a.length), d = b.colorCounter, b.colorCounter++, b.colorCounter === a && (b.colorCounter = 0)) : d = b.colorIndex;
        this.colorIndex = m(this.colorIndex, d);
      },
      applyOptions: function applyOptions(b, a) {
        var d = this.series,
            c = d.options.pointValKey || d.pointValKey;
        b = L.prototype.optionsToObject.call(this, b);
        y(this, b);
        this.options = this.options ? y(this.options, b) : b;
        b.group && delete this.group;
        b.dataLabels && delete this.dataLabels;
        c && (this.y = this[c]);
        this.formatPrefix = (this.isNull = m(this.isValid && !this.isValid(), null === this.x || !z(this.y))) ? "null" : "point";
        this.selected && (this.state = "select");
        "name" in this && void 0 === a && d.xAxis && d.xAxis.hasNames && (this.x = d.xAxis.nameToX(this));
        void 0 === this.x && d && (this.x = void 0 === a ? d.autoIncrement(this) : a);
        return this;
      },
      setNestedProperty: function setNestedProperty(b, a, d) {
        d.split(".").reduce(function (b, d, c, g) {
          b[d] = g.length - 1 === c ? a : u(b[d], !0) ? b[d] : {};
          return b[d];
        }, b);
        return b;
      },
      optionsToObject: function optionsToObject(b) {
        var a = {},
            d = this.series,
            f = d.options.keys,
            e = f || d.pointArrayMap || ["y"],
            h = e.length,
            g = 0,
            m = 0;
        if (z(b) || null === b) a[e[0]] = b;else if (F(b)) for (!f && b.length > h && (d = _typeof(b[0]), "string" === d ? a.name = b[0] : "number" === d && (a.x = b[0]), g++); m < h;) {
          f && void 0 === b[g] || (0 < e[m].indexOf(".") ? c.Point.prototype.setNestedProperty(a, b[g], e[m]) : a[e[m]] = b[g]), g++, m++;
        } else "object" === _typeof(b) && (a = b, b.dataLabels && (d._hasPointLabels = !0), b.marker && (d._hasPointMarkers = !0));
        return a;
      },
      getClassName: function getClassName() {
        return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
      },
      getZone: function getZone() {
        var b = this.series,
            a = b.zones;
        b = b.zoneAxis || "y";
        var d = 0,
            c;

        for (c = a[d]; this[b] >= c.value;) {
          c = a[++d];
        }

        this.nonZonedColor || (this.nonZonedColor = this.color);
        this.color = c && c.color && !this.options.color ? c.color : this.nonZonedColor;
        return c;
      },
      destroy: function destroy() {
        var b = this.series.chart,
            a = b.hoverPoints,
            d;
        b.pointCount--;
        a && (this.setState(), D(a, this), a.length || (b.hoverPoints = null));
        if (this === b.hoverPoint) this.onMouseOut();
        if (this.graphic || this.dataLabel || this.dataLabels) g(this), this.destroyElements();
        this.legendItem && b.legend.destroyItem(this);

        for (d in this) {
          this[d] = null;
        }
      },
      destroyElements: function destroyElements(b) {
        var a = this,
            d = [],
            c;
        b = b || {
          graphic: 1,
          dataLabel: 1
        };
        b.graphic && d.push("graphic", "shadowGroup");
        b.dataLabel && d.push("dataLabel", "dataLabelUpper", "connector");

        for (c = d.length; c--;) {
          var e = d[c];
          a[e] && (a[e] = a[e].destroy());
        }

        ["dataLabel", "connector"].forEach(function (d) {
          var c = d + "s";
          b[d] && a[c] && (a[c].forEach(function (a) {
            a.element && a.destroy();
          }), delete a[c]);
        });
      },
      getLabelConfig: function getLabelConfig() {
        return {
          x: this.category,
          y: this.y,
          color: this.color,
          colorIndex: this.colorIndex,
          key: this.name || this.category,
          series: this.series,
          point: this,
          percentage: this.percentage,
          total: this.total || this.stackTotal
        };
      },
      tooltipFormatter: function tooltipFormatter(b) {
        var a = this.series,
            d = a.tooltipOptions,
            c = m(d.valueDecimals, ""),
            e = d.valuePrefix || "",
            h = d.valueSuffix || "";
        a.chart.styledMode && (b = a.chart.tooltip.styledModeFormat(b));
        (a.pointArrayMap || ["y"]).forEach(function (a) {
          a = "{point." + a;
          if (e || h) b = b.replace(RegExp(a + "}", "g"), e + a + "}" + h);
          b = b.replace(RegExp(a + "}", "g"), a + ":,." + c + "f}");
        });
        return x(b, {
          point: this,
          series: this.series
        }, a.chart.time);
      },
      firePointEvent: function firePointEvent(b, a, d) {
        var c = this,
            e = this.series.options;
        (e.point.events[b] || c.options && c.options.events && c.options.events[b]) && this.importEvents();
        "click" === b && e.allowPointSelect && (d = function d(a) {
          c.select && c.select(null, a.ctrlKey || a.metaKey || a.shiftKey);
        });
        C(this, b, a, d);
      },
      visible: !0
    };
  });
  N(H, "parts/Series.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.erase,
        F = n.isArray,
        z = n.isNumber,
        u = n.isString,
        L = n.objectEach,
        y = n.splat,
        C = c.addEvent,
        x = c.animObject,
        m = c.arrayMax,
        p = c.arrayMin,
        g = c.correctFloat,
        b = c.defaultOptions,
        a = c.defaultPlotOptions,
        d = c.extend,
        f = c.fireEvent,
        e = c.merge,
        h = c.pick,
        r = c.removeEvent,
        E = c.SVGElement,
        q = c.syncTimeout,
        v = c.win;
    c.Series = c.seriesType("line", null, {
      lineWidth: 2,
      allowPointSelect: !1,
      showCheckbox: !1,
      animation: {
        duration: 1E3
      },
      events: {},
      marker: {
        lineWidth: 0,
        lineColor: "#ffffff",
        enabledThreshold: 2,
        radius: 4,
        states: {
          normal: {
            animation: !0
          },
          hover: {
            animation: {
              duration: 50
            },
            enabled: !0,
            radiusPlus: 2,
            lineWidthPlus: 1
          },
          select: {
            fillColor: "#cccccc",
            lineColor: "#000000",
            lineWidth: 2
          }
        }
      },
      point: {
        events: {}
      },
      dataLabels: {
        align: "center",
        formatter: function formatter() {
          return null === this.y ? "" : c.numberFormat(this.y, -1);
        },
        padding: 5,
        style: {
          fontSize: "11px",
          fontWeight: "bold",
          color: "contrast",
          textOutline: "1px contrast"
        },
        verticalAlign: "bottom",
        x: 0,
        y: 0
      },
      cropThreshold: 300,
      opacity: 1,
      pointRange: 0,
      softThreshold: !0,
      states: {
        normal: {
          animation: !0
        },
        hover: {
          animation: {
            duration: 50
          },
          lineWidthPlus: 1,
          marker: {},
          halo: {
            size: 10,
            opacity: .25
          }
        },
        select: {
          animation: {
            duration: 0
          }
        },
        inactive: {
          animation: {
            duration: 50
          },
          opacity: .2
        }
      },
      stickyTracking: !0,
      turboThreshold: 1E3,
      findNearestPointBy: "x"
    }, {
      axisTypes: ["xAxis", "yAxis"],
      coll: "series",
      colorCounter: 0,
      cropShoulder: 1,
      directTouch: !1,
      isCartesian: !0,
      parallelArrays: ["x", "y"],
      pointClass: c.Point,
      requireSorting: !0,
      sorted: !0,
      init: function init(a, b) {
        f(this, "init", {
          options: b
        });
        var e = this,
            k = a.series,
            t;
        this.eventOptions = this.eventOptions || {};
        e.chart = a;
        e.options = b = e.setOptions(b);
        e.linkedSeries = [];
        e.bindAxes();
        d(e, {
          name: b.name,
          state: "",
          visible: !1 !== b.visible,
          selected: !0 === b.selected
        });
        var l = b.events;
        L(l, function (a, b) {
          c.isFunction(a) && e.eventOptions[b] !== a && (c.isFunction(e.eventOptions[b]) && r(e, b, e.eventOptions[b]), e.eventOptions[b] = a, C(e, b, a));
        });
        if (l && l.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0;
        e.getColor();
        e.getSymbol();
        e.parallelArrays.forEach(function (a) {
          e[a + "Data"] || (e[a + "Data"] = []);
        });
        e.points || e.data || e.setData(b.data, !1);
        e.isCartesian && (a.hasCartesianSeries = !0);
        k.length && (t = k[k.length - 1]);
        e._i = h(t && t._i, -1) + 1;
        a.orderSeries(this.insert(k));
        f(this, "afterInit");
      },
      insert: function insert(a) {
        var b = this.options.index,
            d;

        if (z(b)) {
          for (d = a.length; d--;) {
            if (b >= h(a[d].options.index, a[d]._i)) {
              a.splice(d + 1, 0, this);
              break;
            }
          }

          -1 === d && a.unshift(this);
          d += 1;
        } else a.push(this);

        return h(d, a.length - 1);
      },
      bindAxes: function bindAxes() {
        var a = this,
            b = a.options,
            d = a.chart,
            e;
        f(this, "bindAxes", null, function () {
          (a.axisTypes || []).forEach(function (f) {
            d[f].forEach(function (d) {
              e = d.options;
              if (b[f] === e.index || void 0 !== b[f] && b[f] === e.id || void 0 === b[f] && 0 === e.index) a.insert(d.series), a[f] = d, d.isDirty = !0;
            });
            a[f] || a.optionalAxis === f || c.error(18, !0, d);
          });
        });
      },
      updateParallelArrays: function updateParallelArrays(a, b) {
        var d = a.series,
            c = arguments,
            f = z(b) ? function (c) {
          var f = "y" === c && d.toYData ? d.toYData(a) : a[c];
          d[c + "Data"][b] = f;
        } : function (a) {
          Array.prototype[b].apply(d[a + "Data"], Array.prototype.slice.call(c, 2));
        };
        d.parallelArrays.forEach(f);
      },
      hasData: function hasData() {
        return this.visible && void 0 !== this.dataMax && void 0 !== this.dataMin || this.visible && this.yData && 0 < this.yData.length;
      },
      autoIncrement: function autoIncrement() {
        var a = this.options,
            b = this.xIncrement,
            d,
            c = a.pointIntervalUnit,
            f = this.chart.time;
        b = h(b, a.pointStart, 0);
        this.pointInterval = d = h(this.pointInterval, a.pointInterval, 1);
        c && (a = new f.Date(b), "day" === c ? f.set("Date", a, f.get("Date", a) + d) : "month" === c ? f.set("Month", a, f.get("Month", a) + d) : "year" === c && f.set("FullYear", a, f.get("FullYear", a) + d), d = a.getTime() - b);
        this.xIncrement = b + d;
        return b;
      },
      setOptions: function setOptions(a) {
        var d = this.chart,
            c = d.options,
            k = c.plotOptions,
            w = d.userOptions || {};
        a = e(a);
        d = d.styledMode;
        var l = {
          plotOptions: k,
          userOptions: a
        };
        f(this, "setOptions", l);
        var g = l.plotOptions[this.type],
            q = w.plotOptions || {};
        this.userOptions = l.userOptions;
        w = e(g, k.series, w.plotOptions && w.plotOptions[this.type], a);
        this.tooltipOptions = e(b.tooltip, b.plotOptions.series && b.plotOptions.series.tooltip, b.plotOptions[this.type].tooltip, c.tooltip.userOptions, k.series && k.series.tooltip, k[this.type].tooltip, a.tooltip);
        this.stickyTracking = h(a.stickyTracking, q[this.type] && q[this.type].stickyTracking, q.series && q.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : w.stickyTracking);
        null === g.marker && delete w.marker;
        this.zoneAxis = w.zoneAxis;
        c = this.zones = (w.zones || []).slice();
        !w.negativeColor && !w.negativeFillColor || w.zones || (k = {
          value: w[this.zoneAxis + "Threshold"] || w.threshold || 0,
          className: "highcharts-negative"
        }, d || (k.color = w.negativeColor, k.fillColor = w.negativeFillColor), c.push(k));
        c.length && A(c[c.length - 1].value) && c.push(d ? {} : {
          color: this.color,
          fillColor: this.fillColor
        });
        f(this, "afterSetOptions", {
          options: w
        });
        return w;
      },
      getName: function getName() {
        return h(this.options.name, "Series " + (this.index + 1));
      },
      getCyclic: function getCyclic(a, b, d) {
        var c = this.chart,
            f = this.userOptions,
            e = a + "Index",
            k = a + "Counter",
            t = d ? d.length : h(c.options.chart[a + "Count"], c[a + "Count"]);

        if (!b) {
          var B = h(f[e], f["_" + e]);
          A(B) || (c.series.length || (c[k] = 0), f["_" + e] = B = c[k] % t, c[k] += 1);
          d && (b = d[B]);
        }

        void 0 !== B && (this[e] = B);
        this[a] = b;
      },
      getColor: function getColor() {
        this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || a[this.type].color, this.chart.options.colors);
      },
      getSymbol: function getSymbol() {
        this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols);
      },
      findPointIndex: function findPointIndex(a, b) {
        var d = a.id;
        a = a.x;
        var c = this.points,
            f;

        if (d) {
          var e = (d = this.chart.get(d)) && d.index;
          void 0 !== e && (f = !0);
        }

        void 0 === e && z(a) && (e = this.xData.indexOf(a, b));
        -1 !== e && void 0 !== e && this.cropped && (e = e >= this.cropStart ? e - this.cropStart : e);
        !f && c[e] && c[e].touched && (e = void 0);
        return e;
      },
      drawLegendSymbol: c.LegendSymbolMixin.drawLineMarker,
      updateData: function updateData(a) {
        var b = this.options,
            d = this.points,
            c = [],
            f,
            e,
            k,
            h = this.requireSorting,
            g = a.length === d.length,
            q = !0;
        this.xIncrement = null;
        a.forEach(function (a, e) {
          var l = A(a) && this.pointClass.prototype.optionsToObject.call({
            series: this
          }, a) || {};
          var t = l.x;
          if (l.id || z(t)) if (t = this.findPointIndex(l, k), -1 === t || void 0 === t ? c.push(a) : d[t] && a !== b.data[t] ? (d[t].update(a, !1, null, !1), d[t].touched = !0, h && (k = t + 1)) : d[t] && (d[t].touched = !0), !g || e !== t || this.hasDerivedData) f = !0;
        }, this);
        if (f) for (a = d.length; a--;) {
          (e = d[a]) && !e.touched && e.remove(!1);
        } else g ? a.forEach(function (a, b) {
          d[b].update && a !== d[b].y && d[b].update(a, !1, null, !1);
        }) : q = !1;
        d.forEach(function (a) {
          a && (a.touched = !1);
        });
        if (!q) return !1;
        c.forEach(function (a) {
          this.addPoint(a, !1, null, null, !1);
        }, this);
        return !0;
      },
      setData: function setData(a, b, d, f) {
        var e = this,
            k = e.points,
            t = k && k.length || 0,
            g,
            q = e.options,
            v = e.chart,
            m = null,
            B = e.xAxis,
            p = q.turboThreshold,
            I = this.xData,
            r = this.yData,
            x = (g = e.pointArrayMap) && g.length,
            n = q.keys,
            y = 0,
            E = 1,
            A;
        a = a || [];
        g = a.length;
        b = h(b, !0);
        !1 !== f && g && t && !e.cropped && !e.hasGroupedData && e.visible && !e.isSeriesBoosting && (A = this.updateData(a));

        if (!A) {
          e.xIncrement = null;
          e.colorCounter = 0;
          this.parallelArrays.forEach(function (a) {
            e[a + "Data"].length = 0;
          });

          if (p && g > p) {
            for (d = 0; null === m && d < g;) {
              m = a[d], d++;
            }

            if (z(m)) for (d = 0; d < g; d++) {
              I[d] = this.autoIncrement(), r[d] = a[d];
            } else if (F(m)) {
              if (x) for (d = 0; d < g; d++) {
                m = a[d], I[d] = m[0], r[d] = m.slice(1, x + 1);
              } else for (n && (y = n.indexOf("x"), E = n.indexOf("y"), y = 0 <= y ? y : 0, E = 0 <= E ? E : 1), d = 0; d < g; d++) {
                m = a[d], I[d] = m[y], r[d] = m[E];
              }
            } else c.error(12, !1, v);
          } else for (d = 0; d < g; d++) {
            void 0 !== a[d] && (m = {
              series: e
            }, e.pointClass.prototype.applyOptions.apply(m, [a[d]]), e.updateParallelArrays(m, d));
          }

          r && u(r[0]) && c.error(14, !0, v);
          e.data = [];
          e.options.data = e.userOptions.data = a;

          for (d = t; d--;) {
            k[d] && k[d].destroy && k[d].destroy();
          }

          B && (B.minRange = B.userMinRange);
          e.isDirty = v.isDirtyBox = !0;
          e.isDirtyData = !!k;
          d = !1;
        }

        "point" === q.legendType && (this.processData(), this.generatePoints());
        b && v.redraw(d);
      },
      processData: function processData(a) {
        var b = this.xData,
            d = this.yData,
            f = b.length;
        var e = 0;
        var k = this.xAxis,
            h = this.options;
        var g = h.cropThreshold;
        var q = this.getExtremesFromAll || h.getExtremesFromAll,
            m = this.isCartesian;
        h = k && k.val2lin;
        var v = k && k.isLog,
            p = this.requireSorting;
        if (m && !this.isDirty && !k.isDirty && !this.yAxis.isDirty && !a) return !1;

        if (k) {
          a = k.getExtremes();
          var r = a.min;
          var x = a.max;
        }

        if (m && this.sorted && !q && (!g || f > g || this.forceCrop)) if (b[f - 1] < r || b[0] > x) b = [], d = [];else if (this.yData && (b[0] < r || b[f - 1] > x)) {
          e = this.cropData(this.xData, this.yData, r, x);
          b = e.xData;
          d = e.yData;
          e = e.start;
          var n = !0;
        }

        for (g = b.length || 1; --g;) {
          if (f = v ? h(b[g]) - h(b[g - 1]) : b[g] - b[g - 1], 0 < f && (void 0 === u || f < u)) var u = f;else 0 > f && p && (c.error(15, !1, this.chart), p = !1);
        }

        this.cropped = n;
        this.cropStart = e;
        this.processedXData = b;
        this.processedYData = d;
        this.closestPointRange = this.basePointRange = u;
      },
      cropData: function cropData(a, b, d, c, f) {
        var e = a.length,
            k = 0,
            t = e,
            g;
        f = h(f, this.cropShoulder);

        for (g = 0; g < e; g++) {
          if (a[g] >= d) {
            k = Math.max(0, g - f);
            break;
          }
        }

        for (d = g; d < e; d++) {
          if (a[d] > c) {
            t = d + f;
            break;
          }
        }

        return {
          xData: a.slice(k, t),
          yData: b.slice(k, t),
          start: k,
          end: t
        };
      },
      generatePoints: function generatePoints() {
        var a = this.options,
            b = a.data,
            c = this.data,
            e,
            h = this.processedXData,
            l = this.processedYData,
            g = this.pointClass,
            q = h.length,
            m = this.cropStart || 0,
            v = this.hasGroupedData;
        a = a.keys;
        var p = [],
            r;
        c || v || (c = [], c.length = b.length, c = this.data = c);
        a && v && (this.options.keys = !1);

        for (r = 0; r < q; r++) {
          var x = m + r;

          if (v) {
            var n = new g().init(this, [h[r]].concat(y(l[r])));
            n.dataGroup = this.groupMap[r];
            n.dataGroup.options && (n.options = n.dataGroup.options, d(n, n.dataGroup.options), delete n.dataLabels);
          } else (n = c[x]) || void 0 === b[x] || (c[x] = n = new g().init(this, b[x], h[r]));

          n && (n.index = x, p[r] = n);
        }

        this.options.keys = a;
        if (c && (q !== (e = c.length) || v)) for (r = 0; r < e; r++) {
          r !== m || v || (r += q), c[r] && (c[r].destroyElements(), c[r].plotX = void 0);
        }
        this.data = c;
        this.points = p;
        f(this, "afterGeneratePoints");
      },
      getXExtremes: function getXExtremes(a) {
        return {
          min: p(a),
          max: m(a)
        };
      },
      getExtremes: function getExtremes(a) {
        var b = this.xAxis,
            d = this.yAxis,
            c = this.processedXData || this.xData,
            e = [],
            k = 0,
            h = 0;
        var g = 0;
        var q = this.requireSorting ? this.cropShoulder : 0,
            v = d ? d.positiveValuesOnly : !1,
            r;
        a = a || this.stackedYData || this.processedYData || [];
        d = a.length;
        b && (g = b.getExtremes(), h = g.min, g = g.max);

        for (r = 0; r < d; r++) {
          var x = c[r];
          var n = a[r];
          var u = (z(n) || F(n)) && (n.length || 0 < n || !v);
          x = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !b || (c[r + q] || x) >= h && (c[r - q] || x) <= g;
          if (u && x) if (u = n.length) for (; u--;) {
            z(n[u]) && (e[k++] = n[u]);
          } else e[k++] = n;
        }

        this.dataMin = p(e);
        this.dataMax = m(e);
        f(this, "afterGetExtremes");
      },
      translate: function translate() {
        this.processedXData || this.processData();
        this.generatePoints();
        var a = this.options,
            b = a.stacking,
            d = this.xAxis,
            c = d.categories,
            e = this.yAxis,
            l = this.points,
            q = l.length,
            m = !!this.modifyValue,
            v,
            p = this.pointPlacementToXValue(),
            r = z(p),
            n = a.threshold,
            x = a.startFromThreshold ? n : 0,
            u,
            y = this.zoneAxis || "y",
            E = Number.MAX_VALUE;

        for (v = 0; v < q; v++) {
          var C = l[v],
              L = C.x;
          var D = C.y;
          var H = C.low,
              N = b && e.stacks[(this.negStacks && D < (x ? 0 : n) ? "-" : "") + this.stackKey];
          e.positiveValuesOnly && null !== D && 0 >= D && (C.isNull = !0);
          C.plotX = u = g(Math.min(Math.max(-1E5, d.translate(L, 0, 0, 0, 1, p, "flags" === this.type)), 1E5));

          if (b && this.visible && N && N[L]) {
            var W = this.getStackIndicator(W, L, this.index);

            if (!C.isNull) {
              var P = N[L];
              var X = P.points[W.key];
            }
          }

          F(X) && (H = X[0], D = X[1], H === x && W.key === N[L].base && (H = h(z(n) && n, e.min)), e.positiveValuesOnly && 0 >= H && (H = null), C.total = C.stackTotal = P.total, C.percentage = P.total && C.y / P.total * 100, C.stackY = D, this.irregularWidths || P.setOffset(this.pointXOffset || 0, this.barW || 0));
          C.yBottom = A(H) ? Math.min(Math.max(-1E5, e.translate(H, 0, 1, 0, 1)), 1E5) : null;
          m && (D = this.modifyValue(D, C));
          C.plotY = D = "number" === typeof D && Infinity !== D ? Math.min(Math.max(-1E5, e.translate(D, 0, 1, 0, 1)), 1E5) : void 0;
          C.isInside = void 0 !== D && 0 <= D && D <= e.len && 0 <= u && u <= d.len;
          C.clientX = r ? g(d.translate(L, 0, 0, 0, 1, p)) : u;
          C.negative = C[y] < (a[y + "Threshold"] || n || 0);
          C.category = c && void 0 !== c[C.x] ? c[C.x] : C.x;

          if (!C.isNull) {
            void 0 !== Y && (E = Math.min(E, Math.abs(u - Y)));
            var Y = u;
          }

          C.zone = this.zones.length && C.getZone();
        }

        this.closestPointRangePx = E;
        f(this, "afterTranslate");
      },
      getValidPoints: function getValidPoints(a, b, d) {
        var c = this.chart;
        return (a || this.points || []).filter(function (a) {
          return b && !c.isInsidePlot(a.plotX, a.plotY, c.inverted) ? !1 : d || !a.isNull;
        });
      },
      getClipBox: function getClipBox(a, b) {
        var d = this.options,
            c = this.chart,
            f = c.inverted,
            e = this.xAxis,
            k = e && this.yAxis;
        a && !1 === d.clip && k ? a = f ? {
          y: -c.chartWidth + k.len + k.pos,
          height: c.chartWidth,
          width: c.chartHeight,
          x: -c.chartHeight + e.len + e.pos
        } : {
          y: -k.pos,
          height: c.chartHeight,
          width: c.chartWidth,
          x: -e.pos
        } : (a = this.clipBox || c.clipBox, b && (a.width = c.plotSizeX, a.x = 0));
        return b ? {
          width: a.width,
          x: a.x
        } : a;
      },
      setClip: function setClip(a) {
        var b = this.chart,
            d = this.options,
            c = b.renderer,
            f = b.inverted,
            e = this.clipBox,
            k = this.getClipBox(a),
            h = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, k.height, d.xAxis, d.yAxis].join(),
            g = b[h],
            q = b[h + "m"];
        g || (a && (k.width = 0, f && (k.x = b.plotSizeX + (!1 !== d.clip ? 0 : b.plotTop)), b[h + "m"] = q = c.clipRect(f ? b.plotSizeX + 99 : -99, f ? -b.plotLeft : -b.plotTop, 99, f ? b.chartWidth : b.chartHeight)), b[h] = g = c.clipRect(k), g.count = {
          length: 0
        });
        a && !g.count[this.index] && (g.count[this.index] = !0, g.count.length += 1);
        if (!1 !== d.clip || a) this.group.clip(a || e ? g : b.clipRect), this.markerGroup.clip(q), this.sharedClipKey = h;
        a || (g.count[this.index] && (delete g.count[this.index], --g.count.length), 0 === g.count.length && h && b[h] && (e || (b[h] = b[h].destroy()), b[h + "m"] && (b[h + "m"] = b[h + "m"].destroy())));
      },
      animate: function animate(a) {
        var b = this.chart,
            d = x(this.options.animation);
        if (a) this.setClip(d);else {
          var c = this.sharedClipKey;
          a = b[c];
          var f = this.getClipBox(d, !0);
          a && a.animate(f, d);
          b[c + "m"] && b[c + "m"].animate({
            width: f.width + 99,
            x: f.x - (b.inverted ? 0 : 99)
          }, d);
          this.animate = null;
        }
      },
      afterAnimate: function afterAnimate() {
        this.setClip();
        f(this, "afterAnimate");
        this.finishedAnimating = !0;
      },
      drawPoints: function drawPoints() {
        var a = this.points,
            b = this.chart,
            d,
            c = this.options.marker,
            f = this[this.specialGroup] || this.markerGroup;
        var e = this.xAxis;
        var g = h(c.enabled, !e || e.isRadial ? !0 : null, this.closestPointRangePx >= c.enabledThreshold * c.radius);
        if (!1 !== c.enabled || this._hasPointMarkers) for (e = 0; e < a.length; e++) {
          var q = a[e];
          var m = (d = q.graphic) ? "animate" : "attr";
          var v = q.marker || {};
          var p = !!q.marker;
          var r = g && void 0 === v.enabled || v.enabled;
          var n = !1 !== q.isInside;

          if (r && !q.isNull) {
            r = h(v.symbol, this.symbol);
            var x = this.markerAttribs(q, q.selected && "select");
            d ? d[n ? "show" : "hide"](n).animate(x) : n && (0 < x.width || q.hasImage) && (q.graphic = d = b.renderer.symbol(r, x.x, x.y, x.width, x.height, p ? v : c).add(f));
            if (d && !b.styledMode) d[m](this.pointAttribs(q, q.selected && "select"));
            d && d.addClass(q.getClassName(), !0);
          } else d && (q.graphic = d.destroy());
        }
      },
      markerAttribs: function markerAttribs(a, b) {
        var d = this.options.marker,
            c = a.marker || {},
            f = c.symbol || d.symbol,
            e = h(c.radius, d.radius);
        b && (d = d.states[b], b = c.states && c.states[b], e = h(b && b.radius, d && d.radius, e + (d && d.radiusPlus || 0)));
        a.hasImage = f && 0 === f.indexOf("url");
        a.hasImage && (e = 0);
        a = {
          x: Math.floor(a.plotX) - e,
          y: a.plotY - e
        };
        e && (a.width = a.height = 2 * e);
        return a;
      },
      pointAttribs: function pointAttribs(a, b) {
        var d = this.options.marker,
            c = a && a.options,
            f = c && c.marker || {},
            e = this.color,
            k = c && c.color,
            t = a && a.color;
        c = h(f.lineWidth, d.lineWidth);
        var g = a && a.zone && a.zone.color;
        a = 1;
        e = k || g || t || e;
        k = f.fillColor || d.fillColor || e;
        e = f.lineColor || d.lineColor || e;
        b = b || "normal";
        d = d.states[b];
        b = f.states && f.states[b] || {};
        c = h(b.lineWidth, d.lineWidth, c + h(b.lineWidthPlus, d.lineWidthPlus, 0));
        k = b.fillColor || d.fillColor || k;
        e = b.lineColor || d.lineColor || e;
        a = h(b.opacity, d.opacity, a);
        return {
          stroke: e,
          "stroke-width": c,
          fill: k,
          opacity: a
        };
      },
      destroy: function destroy(a) {
        var b = this,
            d = b.chart,
            e = /AppleWebKit\/533/.test(v.navigator.userAgent),
            k,
            l,
            h = b.data || [],
            g,
            q;
        f(b, "destroy");
        a || r(b);
        (b.axisTypes || []).forEach(function (a) {
          (q = b[a]) && q.series && (D(q.series, b), q.isDirty = q.forceRedraw = !0);
        });
        b.legendItem && b.chart.legend.destroyItem(b);

        for (l = h.length; l--;) {
          (g = h[l]) && g.destroy && g.destroy();
        }

        b.points = null;
        c.clearTimeout(b.animationTimeout);
        L(b, function (a, b) {
          a instanceof E && !a.survive && (k = e && "group" === b ? "hide" : "destroy", a[k]());
        });
        d.hoverSeries === b && (d.hoverSeries = null);
        D(d.series, b);
        d.orderSeries();
        L(b, function (d, c) {
          a && "hcEvents" === c || delete b[c];
        });
      },
      getGraphPath: function getGraphPath(a, b, d) {
        var c = this,
            f = c.options,
            e = f.step,
            k,
            h = [],
            t = [],
            g;
        a = a || c.points;
        (k = a.reversed) && a.reverse();
        (e = {
          right: 1,
          center: 2
        }[e] || e && 3) && k && (e = 4 - e);
        !f.connectNulls || b || d || (a = this.getValidPoints(a));
        a.forEach(function (k, l) {
          var q = k.plotX,
              v = k.plotY,
              m = a[l - 1];
          (k.leftCliff || m && m.rightCliff) && !d && (g = !0);
          k.isNull && !A(b) && 0 < l ? g = !f.connectNulls : k.isNull && !b ? g = !0 : (0 === l || g ? l = ["M", k.plotX, k.plotY] : c.getPointSpline ? l = c.getPointSpline(a, k, l) : e ? (l = 1 === e ? ["L", m.plotX, v] : 2 === e ? ["L", (m.plotX + q) / 2, m.plotY, "L", (m.plotX + q) / 2, v] : ["L", q, m.plotY], l.push("L", q, v)) : l = ["L", q, v], t.push(k.x), e && (t.push(k.x), 2 === e && t.push(k.x)), h.push.apply(h, l), g = !1);
        });
        h.xMap = t;
        return c.graphPath = h;
      },
      drawGraph: function drawGraph() {
        var a = this,
            b = this.options,
            d = (this.gappedPath || this.getGraphPath).call(this),
            c = this.chart.styledMode,
            f = [["graph", "highcharts-graph"]];
        c || f[0].push(b.lineColor || this.color || "#cccccc", b.dashStyle);
        f = a.getZonesGraphs(f);
        f.forEach(function (f, e) {
          var k = f[0],
              l = a[k],
              h = l ? "animate" : "attr";
          l ? (l.endX = a.preventGraphAnimation ? null : d.xMap, l.animate({
            d: d
          })) : d.length && (a[k] = l = a.chart.renderer.path(d).addClass(f[1]).attr({
            zIndex: 1
          }).add(a.group));
          l && !c && (k = {
            stroke: f[2],
            "stroke-width": b.lineWidth,
            fill: a.fillGraph && a.color || "none"
          }, f[3] ? k.dashstyle = f[3] : "square" !== b.linecap && (k["stroke-linecap"] = k["stroke-linejoin"] = "round"), l[h](k).shadow(2 > e && b.shadow));
          l && (l.startX = d.xMap, l.isArea = d.isArea);
        });
      },
      getZonesGraphs: function getZonesGraphs(a) {
        this.zones.forEach(function (b, d) {
          d = ["zone-graph-" + d, "highcharts-graph highcharts-zone-graph-" + d + " " + (b.className || "")];
          this.chart.styledMode || d.push(b.color || this.color, b.dashStyle || this.options.dashStyle);
          a.push(d);
        }, this);
        return a;
      },
      applyZones: function applyZones() {
        var a = this,
            b = this.chart,
            d = b.renderer,
            c = this.zones,
            f,
            e,
            g = this.clips || [],
            q,
            m = this.graph,
            v = this.area,
            p = Math.max(b.chartWidth, b.chartHeight),
            r = this[(this.zoneAxis || "y") + "Axis"],
            n = b.inverted,
            x,
            u,
            y,
            E = !1;

        if (c.length && (m || v) && r && void 0 !== r.min) {
          var z = r.reversed;
          var A = r.horiz;
          m && !this.showLine && m.hide();
          v && v.hide();
          var C = r.getExtremes();
          c.forEach(function (c, k) {
            f = z ? A ? b.plotWidth : 0 : A ? 0 : r.toPixels(C.min) || 0;
            f = Math.min(Math.max(h(e, f), 0), p);
            e = Math.min(Math.max(Math.round(r.toPixels(h(c.value, C.max), !0) || 0), 0), p);
            E && (f = e = r.toPixels(C.max));
            x = Math.abs(f - e);
            u = Math.min(f, e);
            y = Math.max(f, e);
            r.isXAxis ? (q = {
              x: n ? y : u,
              y: 0,
              width: x,
              height: p
            }, A || (q.x = b.plotHeight - q.x)) : (q = {
              x: 0,
              y: n ? y : u,
              width: p,
              height: x
            }, A && (q.y = b.plotWidth - q.y));
            n && d.isVML && (q = r.isXAxis ? {
              x: 0,
              y: z ? u : y,
              height: q.width,
              width: b.chartWidth
            } : {
              x: q.y - b.plotLeft - b.spacingBox.x,
              y: 0,
              width: q.height,
              height: b.chartHeight
            });
            g[k] ? g[k].animate(q) : g[k] = d.clipRect(q);
            m && a["zone-graph-" + k].clip(g[k]);
            v && a["zone-area-" + k].clip(g[k]);
            E = c.value > C.max;
            a.resetZones && 0 === e && (e = void 0);
          });
          this.clips = g;
        } else a.visible && (m && m.show(!0), v && v.show(!0));
      },
      invertGroups: function invertGroups(a) {
        function b() {
          ["group", "markerGroup"].forEach(function (b) {
            d[b] && (c.renderer.isVML && d[b].attr({
              width: d.yAxis.len,
              height: d.xAxis.len
            }), d[b].width = d.yAxis.len, d[b].height = d.xAxis.len, d[b].invert(a));
          });
        }

        var d = this,
            c = d.chart;

        if (d.xAxis) {
          var f = C(c, "resize", b);
          C(d, "destroy", f);
          b(a);
          d.invertGroups = b;
        }
      },
      plotGroup: function plotGroup(a, b, d, c, f) {
        var e = this[a],
            k = !e;
        k && (this[a] = e = this.chart.renderer.g().attr({
          zIndex: c || .1
        }).add(f));
        e.addClass("highcharts-" + b + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (A(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (e.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0);
        e.attr({
          visibility: d
        })[k ? "attr" : "animate"](this.getPlotBox());
        return e;
      },
      getPlotBox: function getPlotBox() {
        var a = this.chart,
            b = this.xAxis,
            d = this.yAxis;
        a.inverted && (b = d, d = this.xAxis);
        return {
          translateX: b ? b.left : a.plotLeft,
          translateY: d ? d.top : a.plotTop,
          scaleX: 1,
          scaleY: 1
        };
      },
      render: function render() {
        var a = this,
            b = a.chart,
            d = a.options,
            c = !!a.animate && b.renderer.isSVG && x(d.animation).duration,
            e = a.visible ? "inherit" : "hidden",
            l = d.zIndex,
            h = a.hasRendered,
            g = b.seriesGroup,
            m = b.inverted;
        f(this, "render");
        var v = a.plotGroup("group", "series", e, l, g);
        a.markerGroup = a.plotGroup("markerGroup", "markers", e, l, g);
        c && a.animate(!0);
        v.inverted = a.isCartesian || a.invertable ? m : !1;
        a.drawGraph && (a.drawGraph(), a.applyZones());
        a.visible && a.drawPoints();
        a.drawDataLabels && a.drawDataLabels();
        a.redrawPoints && a.redrawPoints();
        a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker();
        a.invertGroups(m);
        !1 === d.clip || a.sharedClipKey || h || v.clip(b.clipRect);
        c && a.animate();
        h || (a.animationTimeout = q(function () {
          a.afterAnimate();
        }, c));
        a.isDirty = !1;
        a.hasRendered = !0;
        f(a, "afterRender");
      },
      redraw: function redraw() {
        var a = this.chart,
            b = this.isDirty || this.isDirtyData,
            d = this.group,
            c = this.xAxis,
            f = this.yAxis;
        d && (a.inverted && d.attr({
          width: a.plotWidth,
          height: a.plotHeight
        }), d.animate({
          translateX: h(c && c.left, a.plotLeft),
          translateY: h(f && f.top, a.plotTop)
        }));
        this.translate();
        this.render();
        b && delete this.kdTree;
      },
      kdAxisArray: ["clientX", "plotY"],
      searchPoint: function searchPoint(a, b) {
        var d = this.xAxis,
            c = this.yAxis,
            f = this.chart.inverted;
        return this.searchKDTree({
          clientX: f ? d.len - a.chartY + d.pos : a.chartX - d.pos,
          plotY: f ? c.len - a.chartX + c.pos : a.chartY - c.pos
        }, b, a);
      },
      buildKDTree: function buildKDTree(a) {
        function b(a, c, f) {
          var e;

          if (e = a && a.length) {
            var k = d.kdAxisArray[c % f];
            a.sort(function (a, b) {
              return a[k] - b[k];
            });
            e = Math.floor(e / 2);
            return {
              point: a[e],
              left: b(a.slice(0, e), c + 1, f),
              right: b(a.slice(e + 1), c + 1, f)
            };
          }
        }

        this.buildingKdTree = !0;
        var d = this,
            c = -1 < d.options.findNearestPointBy.indexOf("y") ? 2 : 1;
        delete d.kdTree;
        q(function () {
          d.kdTree = b(d.getValidPoints(null, !d.directTouch), c, c);
          d.buildingKdTree = !1;
        }, d.options.kdNow || a && "touchstart" === a.type ? 0 : 1);
      },
      searchKDTree: function searchKDTree(a, b, d) {
        function c(a, b, d, l) {
          var g = b.point,
              q = f.kdAxisArray[d % l],
              t = g;
          var m = A(a[e]) && A(g[e]) ? Math.pow(a[e] - g[e], 2) : null;
          var v = A(a[k]) && A(g[k]) ? Math.pow(a[k] - g[k], 2) : null;
          v = (m || 0) + (v || 0);
          g.dist = A(v) ? Math.sqrt(v) : Number.MAX_VALUE;
          g.distX = A(m) ? Math.sqrt(m) : Number.MAX_VALUE;
          q = a[q] - g[q];
          v = 0 > q ? "left" : "right";
          m = 0 > q ? "right" : "left";
          b[v] && (v = c(a, b[v], d + 1, l), t = v[h] < t[h] ? v : g);
          b[m] && Math.sqrt(q * q) < t[h] && (a = c(a, b[m], d + 1, l), t = a[h] < t[h] ? a : t);
          return t;
        }

        var f = this,
            e = this.kdAxisArray[0],
            k = this.kdAxisArray[1],
            h = b ? "distX" : "dist";
        b = -1 < f.options.findNearestPointBy.indexOf("y") ? 2 : 1;
        this.kdTree || this.buildingKdTree || this.buildKDTree(d);
        if (this.kdTree) return c(a, this.kdTree, b, b);
      },
      pointPlacementToXValue: function pointPlacementToXValue() {
        var a = this.options.pointPlacement;
        "between" === a && (a = .5);
        z(a) && (a *= h(this.options.pointRange || this.xAxis.pointRange));
        return a;
      }
    });
    "";
  });
  N(H, "parts/Stacking.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.objectEach;
    n = c.Axis;
    var F = c.Chart,
        z = c.correctFloat,
        u = c.destroyObjectProperties,
        L = c.format,
        y = c.pick,
        C = c.Series;

    c.StackItem = function (c, m, p, g, b) {
      var a = c.chart.inverted;
      this.axis = c;
      this.isNegative = p;
      this.options = m = m || {};
      this.x = g;
      this.total = null;
      this.points = {};
      this.stack = b;
      this.rightCliff = this.leftCliff = 0;
      this.alignOptions = {
        align: m.align || (a ? p ? "left" : "right" : "center"),
        verticalAlign: m.verticalAlign || (a ? "middle" : p ? "bottom" : "top"),
        y: m.y,
        x: m.x
      };
      this.textAlign = m.textAlign || (a ? p ? "right" : "left" : "center");
    };

    c.StackItem.prototype = {
      destroy: function destroy() {
        u(this, this.axis);
      },
      render: function render(c) {
        var m = this.axis.chart,
            p = this.options,
            g = p.format;
        g = g ? L(g, this, m.time) : p.formatter.call(this);
        this.label ? this.label.attr({
          text: g,
          visibility: "hidden"
        }) : (this.label = m.renderer.label(g, null, null, p.shape, null, null, p.useHTML, !1, "stack-labels"), g = {
          text: g,
          align: this.textAlign,
          rotation: p.rotation,
          padding: y(p.padding, 0),
          visibility: "hidden"
        }, this.label.attr(g), m.styledMode || this.label.css(p.style), this.label.added || this.label.add(c));
        this.label.labelrank = m.plotHeight;
      },
      setOffset: function setOffset(c, m, p, g, b) {
        var a = this.axis,
            d = a.chart;
        g = a.translate(a.usePercentage ? 100 : g ? g : this.total, 0, 0, 0, 1);
        p = a.translate(p ? p : 0);
        p = A(g) && Math.abs(g - p);
        c = y(b, d.xAxis[0].translate(this.x)) + c;
        a = A(g) && this.getStackBox(d, this, c, g, m, p, a);
        m = this.label;
        c = this.isNegative;
        b = "justify" === y(this.options.overflow, "justify");

        if (m && a) {
          p = m.getBBox();
          var f = d.inverted ? c ? p.width : 0 : p.width / 2,
              e = d.inverted ? p.height / 2 : c ? -4 : p.height + 4;
          this.alignOptions.x = y(this.options.x, 0);
          m.align(this.alignOptions, null, a);
          g = m.alignAttr;
          m.show();
          g.y -= e;
          b && (g.x -= f, C.prototype.justifyDataLabel.call(this.axis, m, this.alignOptions, g, p, a), g.x += f);
          g.x = m.alignAttr.x;
          m.attr({
            x: g.x,
            y: g.y
          });
          y(!b && this.options.crop, !0) && ((d = d.isInsidePlot(m.x + (d.inverted ? 0 : -p.width / 2), m.y) && d.isInsidePlot(m.x + (d.inverted ? c ? -p.width : p.width : p.width / 2), m.y + p.height)) || m.hide());
        }
      },
      getStackBox: function getStackBox(c, m, p, g, b, a, d) {
        var f = m.axis.reversed,
            e = c.inverted;
        c = d.height + d.pos - (e ? c.plotLeft : c.plotTop);
        m = m.isNegative && !f || !m.isNegative && f;
        return {
          x: e ? m ? g : g - a : p,
          y: e ? c - p - b : m ? c - g - a : c - g,
          width: e ? a : b,
          height: e ? b : a
        };
      }
    };

    F.prototype.getStacks = function () {
      var c = this,
          m = c.inverted;
      c.yAxis.forEach(function (c) {
        c.stacks && c.hasVisibleSeries && (c.oldStacks = c.stacks);
      });
      c.series.forEach(function (p) {
        var g = p.xAxis && p.xAxis.options || {};
        !p.options.stacking || !0 !== p.visible && !1 !== c.options.chart.ignoreHiddenSeries || (p.stackKey = [p.type, y(p.options.stack, ""), m ? g.top : g.left, m ? g.height : g.width].join());
      });
    };

    n.prototype.buildStacks = function () {
      var c = this.series,
          m = y(this.options.reversedStacks, !0),
          p = c.length,
          g;

      if (!this.isXAxis) {
        this.usePercentage = !1;

        for (g = p; g--;) {
          c[m ? g : p - g - 1].setStackedPoints();
        }

        for (g = 0; g < p; g++) {
          c[g].modifyStacks();
        }
      }
    };

    n.prototype.renderStackTotals = function () {
      var c = this.chart,
          m = c.renderer,
          p = this.stacks,
          g = this.stackTotalGroup;
      g || (this.stackTotalGroup = g = m.g("stack-labels").attr({
        visibility: "visible",
        zIndex: 6
      }).add());
      g.translate(c.plotLeft, c.plotTop);
      D(p, function (b) {
        D(b, function (a) {
          a.render(g);
        });
      });
    };

    n.prototype.resetStacks = function () {
      var c = this,
          m = c.stacks;
      c.isXAxis || D(m, function (m) {
        D(m, function (g, b) {
          g.touched < c.stacksTouched ? (g.destroy(), delete m[b]) : (g.total = null, g.cumulative = null);
        });
      });
    };

    n.prototype.cleanStacks = function () {
      if (!this.isXAxis) {
        if (this.oldStacks) var c = this.stacks = this.oldStacks;
        D(c, function (c) {
          D(c, function (c) {
            c.cumulative = c.total;
          });
        });
      }
    };

    C.prototype.setStackedPoints = function () {
      if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
        var n = this.processedXData,
            m = this.processedYData,
            p = [],
            g = m.length,
            b = this.options,
            a = b.threshold,
            d = y(b.startFromThreshold && a, 0),
            f = b.stack;
        b = b.stacking;
        var e = this.stackKey,
            h = "-" + e,
            r = this.negStacks,
            u = this.yAxis,
            q = u.stacks,
            v = u.oldStacks,
            k,
            t;
        u.stacksTouched += 1;

        for (t = 0; t < g; t++) {
          var B = n[t];
          var I = m[t];
          var w = this.getStackIndicator(w, B, this.index);
          var l = w.key;
          var J = (k = r && I < (d ? 0 : a)) ? h : e;
          q[J] || (q[J] = {});
          q[J][B] || (v[J] && v[J][B] ? (q[J][B] = v[J][B], q[J][B].total = null) : q[J][B] = new c.StackItem(u, u.options.stackLabels, k, B, f));
          J = q[J][B];
          null !== I ? (J.points[l] = J.points[this.index] = [y(J.cumulative, d)], A(J.cumulative) || (J.base = l), J.touched = u.stacksTouched, 0 < w.index && !1 === this.singleStacks && (J.points[l][0] = J.points[this.index + "," + B + ",0"][0])) : J.points[l] = J.points[this.index] = null;
          "percent" === b ? (k = k ? e : h, r && q[k] && q[k][B] ? (k = q[k][B], J.total = k.total = Math.max(k.total, J.total) + Math.abs(I) || 0) : J.total = z(J.total + (Math.abs(I) || 0))) : J.total = z(J.total + (I || 0));
          J.cumulative = y(J.cumulative, d) + (I || 0);
          null !== I && (J.points[l].push(J.cumulative), p[t] = J.cumulative);
        }

        "percent" === b && (u.usePercentage = !0);
        this.stackedYData = p;
        u.oldStacks = {};
      }
    };

    C.prototype.modifyStacks = function () {
      var c = this,
          m = c.stackKey,
          p = c.yAxis.stacks,
          g = c.processedXData,
          b,
          a = c.options.stacking;
      c[a + "Stacker"] && [m, "-" + m].forEach(function (d) {
        for (var f = g.length, e, h; f--;) {
          if (e = g[f], b = c.getStackIndicator(b, e, c.index, d), h = (e = p[d] && p[d][e]) && e.points[b.key]) c[a + "Stacker"](h, e, f);
        }
      });
    };

    C.prototype.percentStacker = function (c, m, p) {
      m = m.total ? 100 / m.total : 0;
      c[0] = z(c[0] * m);
      c[1] = z(c[1] * m);
      this.stackedYData[p] = c[1];
    };

    C.prototype.getStackIndicator = function (c, m, p, g) {
      !A(c) || c.x !== m || g && c.key !== g ? c = {
        x: m,
        index: 0,
        key: g
      } : c.index++;
      c.key = [p, m, c.index].join();
      return c;
    };
  });
  N(H, "parts/Dynamics.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.erase,
        F = n.isArray,
        z = n.isNumber,
        u = n.isObject,
        L = n.isString,
        y = n.objectEach,
        C = n.splat,
        x = c.addEvent,
        m = c.animate,
        p = c.Axis;
    n = c.Chart;
    var g = c.createElement,
        b = c.css,
        a = c.extend,
        d = c.fireEvent,
        f = c.merge,
        e = c.pick,
        h = c.Point,
        r = c.Series,
        E = c.seriesTypes,
        q = c.setAnimation;

    c.cleanRecursively = function (a, b) {
      var d = {};
      y(a, function (f, e) {
        if (u(a[e], !0) && !a.nodeType && b[e]) f = c.cleanRecursively(a[e], b[e]), Object.keys(f).length && (d[e] = f);else if (u(a[e]) || a[e] !== b[e]) d[e] = a[e];
      });
      return d;
    };

    a(n.prototype, {
      addSeries: function addSeries(a, b, c) {
        var f,
            k = this;
        a && (b = e(b, !0), d(k, "addSeries", {
          options: a
        }, function () {
          f = k.initSeries(a);
          k.isDirtyLegend = !0;
          k.linkSeries();
          d(k, "afterAddSeries", {
            series: f
          });
          b && k.redraw(c);
        }));
        return f;
      },
      addAxis: function addAxis(a, b, d, c) {
        return this.createAxis(b ? "xAxis" : "yAxis", {
          axis: a,
          redraw: d,
          animation: c
        });
      },
      addColorAxis: function addColorAxis(a, b, d) {
        return this.createAxis("colorAxis", {
          axis: a,
          redraw: b,
          animation: d
        });
      },
      createAxis: function createAxis(a, b) {
        var d = this.options,
            k = "colorAxis" === a,
            h = b.redraw,
            g = b.animation;
        b = f(b.axis, {
          index: this[a].length,
          isX: "xAxis" === a
        });
        var l = k ? new c.ColorAxis(this, b) : new p(this, b);
        d[a] = C(d[a] || {});
        d[a].push(b);
        k && (this.isDirtyLegend = !0);
        e(h, !0) && this.redraw(g);
        return l;
      },
      showLoading: function showLoading(d) {
        var c = this,
            f = c.options,
            h = c.loadingDiv,
            q = f.loading,
            v = function v() {
          h && b(h, {
            left: c.plotLeft + "px",
            top: c.plotTop + "px",
            width: c.plotWidth + "px",
            height: c.plotHeight + "px"
          });
        };

        h || (c.loadingDiv = h = g("div", {
          className: "highcharts-loading highcharts-loading-hidden"
        }, null, c.container), c.loadingSpan = g("span", {
          className: "highcharts-loading-inner"
        }, null, h), x(c, "redraw", v));
        h.className = "highcharts-loading";
        c.loadingSpan.innerHTML = e(d, f.lang.loading, "");
        c.styledMode || (b(h, a(q.style, {
          zIndex: 10
        })), b(c.loadingSpan, q.labelStyle), c.loadingShown || (b(h, {
          opacity: 0,
          display: ""
        }), m(h, {
          opacity: q.style.opacity || .5
        }, {
          duration: q.showDuration || 0
        })));
        c.loadingShown = !0;
        v();
      },
      hideLoading: function hideLoading() {
        var a = this.options,
            d = this.loadingDiv;
        d && (d.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || m(d, {
          opacity: 0
        }, {
          duration: a.loading.hideDuration || 100,
          complete: function complete() {
            b(d, {
              display: "none"
            });
          }
        }));
        this.loadingShown = !1;
      },
      propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
      propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
      propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),
      collectionsWithUpdate: "xAxis yAxis zAxis series colorAxis pane".split(" "),
      update: function update(a, b, h, g) {
        var k = this,
            q = {
          credits: "addCredits",
          title: "setTitle",
          subtitle: "setSubtitle",
          caption: "setCaption"
        },
            l,
            m,
            t,
            v = a.isResponsiveOptions,
            r = [];
        d(k, "update", {
          options: a
        });
        v || k.setResponsive(!1, !0);
        a = c.cleanRecursively(a, k.options);
        f(!0, k.userOptions, a);

        if (l = a.chart) {
          f(!0, k.options.chart, l);
          "className" in l && k.setClassName(l.className);
          "reflow" in l && k.setReflow(l.reflow);

          if ("inverted" in l || "polar" in l || "type" in l) {
            k.propFromSeries();
            var p = !0;
          }

          "alignTicks" in l && (p = !0);
          y(l, function (a, b) {
            -1 !== k.propsRequireUpdateSeries.indexOf("chart." + b) && (m = !0);
            -1 !== k.propsRequireDirtyBox.indexOf(b) && (k.isDirtyBox = !0);
            v || -1 === k.propsRequireReflow.indexOf(b) || (t = !0);
          });
          !k.styledMode && "style" in l && k.renderer.setStyle(l.style);
        }

        !k.styledMode && a.colors && (this.options.colors = a.colors);
        a.plotOptions && f(!0, this.options.plotOptions, a.plotOptions);
        a.time && this.time === c.time && (this.time = new c.Time(a.time));
        y(a, function (a, b) {
          if (k[b] && "function" === typeof k[b].update) k[b].update(a, !1);else if ("function" === typeof k[q[b]]) k[q[b]](a);
          "chart" !== b && -1 !== k.propsRequireUpdateSeries.indexOf(b) && (m = !0);
        });
        this.collectionsWithUpdate.forEach(function (b) {
          if (a[b]) {
            if ("series" === b) {
              var d = [];
              k[b].forEach(function (a, b) {
                a.options.isInternal || d.push(e(a.options.index, b));
              });
            }

            C(a[b]).forEach(function (a, c) {
              (c = A(a.id) && k.get(a.id) || k[b][d ? d[c] : c]) && c.coll === b && (c.update(a, !1), h && (c.touched = !0));
              !c && h && k.collectionsWithInit[b] && (k.collectionsWithInit[b][0].apply(k, [a].concat(k.collectionsWithInit[b][1] || []).concat([!1])).touched = !0);
            });
            h && k[b].forEach(function (a) {
              a.touched || a.options.isInternal ? delete a.touched : r.push(a);
            });
          }
        });
        r.forEach(function (a) {
          a.remove && a.remove(!1);
        });
        p && k.axes.forEach(function (a) {
          a.update({}, !1);
        });
        m && k.series.forEach(function (a) {
          a.update({}, !1);
        });
        a.loading && f(!0, k.options.loading, a.loading);
        p = l && l.width;
        l = l && l.height;
        L(l) && (l = c.relativeLength(l, p || k.chartWidth));
        t || z(p) && p !== k.chartWidth || z(l) && l !== k.chartHeight ? k.setSize(p, l, g) : e(b, !0) && k.redraw(g);
        d(k, "afterUpdate", {
          options: a,
          redraw: b,
          animation: g
        });
      },
      setSubtitle: function setSubtitle(a, b) {
        this.applyDescription("subtitle", a);
        this.layOutTitles(b);
      },
      setCaption: function setCaption(a, b) {
        this.applyDescription("caption", a);
        this.layOutTitles(b);
      }
    });
    n.prototype.collectionsWithInit = {
      xAxis: [n.prototype.addAxis, [!0]],
      yAxis: [n.prototype.addAxis, [!1]],
      colorAxis: [n.prototype.addColorAxis, [!1]],
      series: [n.prototype.addSeries]
    };
    a(h.prototype, {
      update: function update(a, b, d, c) {
        function f() {
          k.applyOptions(a);
          null === k.y && h && (k.graphic = h.destroy());
          u(a, !0) && (h && h.element && a && a.marker && void 0 !== a.marker.symbol && (k.graphic = h.destroy()), a && a.dataLabels && k.dataLabel && (k.dataLabel = k.dataLabel.destroy()), k.connector && (k.connector = k.connector.destroy()));
          g = k.index;
          l.updateParallelArrays(k, g);
          m.data[g] = u(m.data[g], !0) || u(a, !0) ? k.options : e(a, m.data[g]);
          l.isDirty = l.isDirtyData = !0;
          !l.fixedBox && l.hasCartesianSeries && (q.isDirtyBox = !0);
          "point" === m.legendType && (q.isDirtyLegend = !0);
          b && q.redraw(d);
        }

        var k = this,
            l = k.series,
            h = k.graphic,
            g,
            q = l.chart,
            m = l.options;
        b = e(b, !0);
        !1 === c ? f() : k.firePointEvent("update", {
          options: a
        }, f);
      },
      remove: function remove(a, b) {
        this.series.removePoint(this.series.data.indexOf(this), a, b);
      }
    });
    a(r.prototype, {
      addPoint: function addPoint(a, b, c, f, h) {
        var k = this.options,
            l = this.data,
            g = this.chart,
            q = this.xAxis;
        q = q && q.hasNames && q.names;
        var m = k.data,
            t = this.xData,
            v;
        b = e(b, !0);
        var r = {
          series: this
        };
        this.pointClass.prototype.applyOptions.apply(r, [a]);
        var p = r.x;
        var n = t.length;
        if (this.requireSorting && p < t[n - 1]) for (v = !0; n && t[n - 1] > p;) {
          n--;
        }
        this.updateParallelArrays(r, "splice", n, 0, 0);
        this.updateParallelArrays(r, n);
        q && r.name && (q[p] = r.name);
        m.splice(n, 0, a);
        v && (this.data.splice(n, 0, null), this.processData());
        "point" === k.legendType && this.generatePoints();
        c && (l[0] && l[0].remove ? l[0].remove(!1) : (l.shift(), this.updateParallelArrays(r, "shift"), m.shift()));
        !1 !== h && d(this, "addPoint", {
          point: r
        });
        this.isDirtyData = this.isDirty = !0;
        b && g.redraw(f);
      },
      removePoint: function removePoint(a, b, d) {
        var c = this,
            f = c.data,
            k = f[a],
            l = c.points,
            h = c.chart,
            g = function g() {
          l && l.length === f.length && l.splice(a, 1);
          f.splice(a, 1);
          c.options.data.splice(a, 1);
          c.updateParallelArrays(k || {
            series: c
          }, "splice", a, 1);
          k && k.destroy();
          c.isDirty = !0;
          c.isDirtyData = !0;
          b && h.redraw();
        };

        q(d, h);
        b = e(b, !0);
        k ? k.firePointEvent("remove", null, g) : g();
      },
      remove: function remove(a, b, c, f) {
        function k() {
          h.destroy(f);
          h.remove = null;
          l.isDirtyLegend = l.isDirtyBox = !0;
          l.linkSeries();
          e(a, !0) && l.redraw(b);
        }

        var h = this,
            l = h.chart;
        !1 !== c ? d(h, "remove", null, k) : k();
      },
      update: function update(b, k) {
        b = c.cleanRecursively(b, this.userOptions);
        d(this, "update", {
          options: b
        });
        var h = this,
            g = h.chart,
            q = h.userOptions,
            m = h.initialType || h.type,
            l = b.type || q.type || g.options.chart.type,
            r = !(this.hasDerivedData || b.dataGrouping || l && l !== this.type || void 0 !== b.pointStart || b.pointInterval || b.pointIntervalUnit || b.keys),
            p = E[m].prototype,
            v,
            n = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"],
            u = ["eventOptions", "navigatorSeries", "baseSeries"],
            x = h.finishedAnimating && {
          animation: !1
        },
            y = {};
        r && (u.push("data", "isDirtyData", "points", "processedXData", "processedYData", "xIncrement", "_hasPointMarkers", "_hasPointLabels", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), !1 !== b.visible && u.push("area", "graph"), h.parallelArrays.forEach(function (a) {
          u.push(a + "Data");
        }), b.data && this.setData(b.data, !1));
        b = f(q, x, {
          index: void 0 === q.index ? h.index : q.index,
          pointStart: e(q.pointStart, h.xData[0])
        }, !r && {
          data: h.options.data
        }, b);
        r && b.data && (b.data = h.options.data);
        u = n.concat(u);
        u.forEach(function (a) {
          u[a] = h[a];
          delete h[a];
        });
        h.remove(!1, null, !1, !0);

        for (v in p) {
          h[v] = void 0;
        }

        E[l || m] ? a(h, E[l || m].prototype) : c.error(17, !0, g);
        u.forEach(function (a) {
          h[a] = u[a];
        });
        h.init(g, b);

        if (r && this.points) {
          var z = h.options;
          !1 === z.visible ? (y.graphic = 1, y.dataLabel = 1) : h._hasPointLabels || (l = z.marker, p = z.dataLabels, l && (!1 === l.enabled || "symbol" in l) && (y.graphic = 1), p && !1 === p.enabled && (y.dataLabel = 1));
          this.points.forEach(function (a) {
            a && a.series && (a.resolveColor(), Object.keys(y).length && a.destroyElements(y), !1 === z.showInLegend && a.legendItem && g.legend.destroyItem(a));
          }, this);
        }

        b.zIndex !== q.zIndex && n.forEach(function (a) {
          h[a] && h[a].attr({
            zIndex: b.zIndex
          });
        });
        h.initialType = m;
        g.linkSeries();
        d(this, "afterUpdate");
        e(k, !0) && g.redraw(r ? void 0 : !1);
      },
      setName: function setName(a) {
        this.name = this.options.name = this.userOptions.name = a;
        this.chart.isDirtyLegend = !0;
      }
    });
    a(p.prototype, {
      update: function update(b, d) {
        var c = this.chart,
            k = b && b.events || {};
        b = f(this.userOptions, b);
        c.options[this.coll].indexOf && (c.options[this.coll][c.options[this.coll].indexOf(this.userOptions)] = b);
        y(c.options[this.coll].events, function (a, b) {
          "undefined" === typeof k[b] && (k[b] = void 0);
        });
        this.destroy(!0);
        this.init(c, a(b, {
          events: k
        }));
        c.isDirtyBox = !0;
        e(d, !0) && c.redraw();
      },
      remove: function remove(a) {
        for (var b = this.chart, d = this.coll, c = this.series, f = c.length; f--;) {
          c[f] && c[f].remove(!1);
        }

        D(b.axes, this);
        D(b[d], this);
        F(b.options[d]) ? b.options[d].splice(this.options.index, 1) : delete b.options[d];
        b[d].forEach(function (a, b) {
          a.options.index = a.userOptions.index = b;
        });
        this.destroy();
        b.isDirtyBox = !0;
        e(a, !0) && b.redraw();
      },
      setTitle: function setTitle(a, b) {
        this.update({
          title: a
        }, b);
      },
      setCategories: function setCategories(a, b) {
        this.update({
          categories: a
        }, b);
      }
    });
  });
  N(H, "parts/AreaSeries.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.objectEach,
        D = c.color,
        F = c.pick,
        z = c.Series;
    n = c.seriesType;
    n("area", "line", {
      softThreshold: !1,
      threshold: 0
    }, {
      singleStacks: !1,
      getStackPoints: function getStackPoints(c) {
        var n = [],
            u = [],
            z = this.xAxis,
            x = this.yAxis,
            m = x.stacks[this.stackKey],
            p = {},
            g = this.index,
            b = x.series,
            a = b.length,
            d = F(x.options.reversedStacks, !0) ? 1 : -1,
            f;
        c = c || this.points;

        if (this.options.stacking) {
          for (f = 0; f < c.length; f++) {
            c[f].leftNull = c[f].rightNull = null, p[c[f].x] = c[f];
          }

          A(m, function (a, b) {
            null !== a.total && u.push(b);
          });
          u.sort(function (a, b) {
            return a - b;
          });
          var e = b.map(function (a) {
            return a.visible;
          });
          u.forEach(function (b, c) {
            var h = 0,
                q,
                r;
            if (p[b] && !p[b].isNull) n.push(p[b]), [-1, 1].forEach(function (k) {
              var h = 1 === k ? "rightNull" : "leftNull",
                  v = 0,
                  n = m[u[c + k]];
              if (n) for (f = g; 0 <= f && f < a;) {
                q = n.points[f], q || (f === g ? p[b][h] = !0 : e[f] && (r = m[b].points[f]) && (v -= r[1] - r[0])), f += d;
              }
              p[b][1 === k ? "rightCliff" : "leftCliff"] = v;
            });else {
              for (f = g; 0 <= f && f < a;) {
                if (q = m[b].points[f]) {
                  h = q[1];
                  break;
                }

                f += d;
              }

              h = x.translate(h, 0, 1, 0, 1);
              n.push({
                isNull: !0,
                plotX: z.translate(b, 0, 0, 0, 1),
                x: b,
                plotY: h,
                yBottom: h
              });
            }
          });
        }

        return n;
      },
      getGraphPath: function getGraphPath(n) {
        var u = z.prototype.getGraphPath,
            y = this.options,
            A = y.stacking,
            x = this.yAxis,
            m,
            p = [],
            g = [],
            b = this.index,
            a = x.stacks[this.stackKey],
            d = y.threshold,
            f = Math.round(x.getThreshold(y.threshold));
        y = c.pick(y.connectNulls, "percent" === A);

        var e = function e(c, _e, k) {
          var h = n[c];
          c = A && a[h.x].points[b];
          var q = h[k + "Null"] || 0;
          k = h[k + "Cliff"] || 0;
          h = !0;

          if (k || q) {
            var m = (q ? c[0] : c[1]) + k;
            var v = c[0] + k;
            h = !!q;
          } else !A && n[_e] && n[_e].isNull && (m = v = d);

          void 0 !== m && (g.push({
            plotX: r,
            plotY: null === m ? f : x.getThreshold(m),
            isNull: h,
            isCliff: !0
          }), p.push({
            plotX: r,
            plotY: null === v ? f : x.getThreshold(v),
            doCurve: !1
          }));
        };

        n = n || this.points;
        A && (n = this.getStackPoints(n));

        for (m = 0; m < n.length; m++) {
          var h = n[m].isNull;
          var r = F(n[m].rectPlotX, n[m].plotX);
          var E = F(n[m].yBottom, f);
          if (!h || y) y || e(m, m - 1, "left"), h && !A && y || (g.push(n[m]), p.push({
            x: m,
            plotX: r,
            plotY: E
          })), y || e(m, m + 1, "right");
        }

        m = u.call(this, g, !0, !0);
        p.reversed = !0;
        h = u.call(this, p, !0, !0);
        h.length && (h[0] = "L");
        h = m.concat(h);
        u = u.call(this, g, !1, y);
        h.xMap = m.xMap;
        this.areaPath = h;
        return u;
      },
      drawGraph: function drawGraph() {
        this.areaPath = [];
        z.prototype.drawGraph.apply(this);
        var c = this,
            n = this.areaPath,
            y = this.options,
            A = [["area", "highcharts-area", this.color, y.fillColor]];
        this.zones.forEach(function (n, m) {
          A.push(["zone-area-" + m, "highcharts-area highcharts-zone-area-" + m + " " + n.className, n.color || c.color, n.fillColor || y.fillColor]);
        });
        A.forEach(function (u) {
          var m = u[0],
              p = c[m],
              g = p ? "animate" : "attr",
              b = {};
          p ? (p.endX = c.preventGraphAnimation ? null : n.xMap, p.animate({
            d: n
          })) : (b.zIndex = 0, p = c[m] = c.chart.renderer.path(n).addClass(u[1]).add(c.group), p.isArea = !0);
          c.chart.styledMode || (b.fill = F(u[3], D(u[2]).setOpacity(F(y.fillOpacity, .75)).get()));
          p[g](b);
          p.startX = n.xMap;
          p.shiftUnit = y.step ? 2 : 1;
        });
      },
      drawLegendSymbol: c.LegendSymbolMixin.drawRectangle
    });
    "";
  });
  N(H, "parts/SplineSeries.js", [H["parts/Globals.js"]], function (c) {
    var n = c.pick;
    c = c.seriesType;
    c("spline", "line", {}, {
      getPointSpline: function getPointSpline(c, D, F) {
        var z = D.plotX,
            u = D.plotY,
            A = c[F - 1];
        F = c[F + 1];

        if (A && !A.isNull && !1 !== A.doCurve && !D.isCliff && F && !F.isNull && !1 !== F.doCurve && !D.isCliff) {
          c = A.plotY;
          var y = F.plotX;
          F = F.plotY;
          var C = 0;
          var x = (1.5 * z + A.plotX) / 2.5;
          var m = (1.5 * u + c) / 2.5;
          y = (1.5 * z + y) / 2.5;
          var p = (1.5 * u + F) / 2.5;
          y !== x && (C = (p - m) * (y - z) / (y - x) + u - p);
          m += C;
          p += C;
          m > c && m > u ? (m = Math.max(c, u), p = 2 * u - m) : m < c && m < u && (m = Math.min(c, u), p = 2 * u - m);
          p > F && p > u ? (p = Math.max(F, u), m = 2 * u - p) : p < F && p < u && (p = Math.min(F, u), m = 2 * u - p);
          D.rightContX = y;
          D.rightContY = p;
        }

        D = ["C", n(A.rightContX, A.plotX), n(A.rightContY, A.plotY), n(x, z), n(m, u), z, u];
        A.rightContX = A.rightContY = null;
        return D;
      }
    });
    "";
  });
  N(H, "parts/AreaSplineSeries.js", [H["parts/Globals.js"]], function (c) {
    var n = c.seriesTypes.area.prototype,
        A = c.seriesType;
    A("areaspline", "spline", c.defaultPlotOptions.area, {
      getStackPoints: n.getStackPoints,
      getGraphPath: n.getGraphPath,
      drawGraph: n.drawGraph,
      drawLegendSymbol: c.LegendSymbolMixin.drawRectangle
    });
    "";
  });
  N(H, "parts/ColumnSeries.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.isNumber,
        F = c.animObject,
        z = c.color,
        u = c.extend,
        L = c.merge,
        y = c.pick,
        C = c.Series;
    n = c.seriesType;
    var x = c.svg;
    n("column", "line", {
      borderRadius: 0,
      crisp: !0,
      groupPadding: .2,
      marker: null,
      pointPadding: .1,
      minPointLength: 0,
      cropThreshold: 50,
      pointRange: null,
      states: {
        hover: {
          halo: !1,
          brightness: .1
        },
        select: {
          color: "#cccccc",
          borderColor: "#000000"
        }
      },
      dataLabels: {
        align: null,
        verticalAlign: null,
        y: null
      },
      softThreshold: !1,
      startFromThreshold: !0,
      stickyTracking: !1,
      tooltip: {
        distance: 6
      },
      threshold: 0,
      borderColor: "#ffffff"
    }, {
      cropShoulder: 0,
      directTouch: !0,
      trackerGroups: ["group", "dataLabelsGroup"],
      negStacks: !0,
      init: function init() {
        C.prototype.init.apply(this, arguments);
        var c = this,
            p = c.chart;
        p.hasRendered && p.series.forEach(function (g) {
          g.type === c.type && (g.isDirty = !0);
        });
      },
      getColumnMetrics: function getColumnMetrics() {
        var c = this,
            p = c.options,
            g = c.xAxis,
            b = c.yAxis,
            a = g.options.reversedStacks;
        a = g.reversed && !a || !g.reversed && a;
        var d,
            f = {},
            e = 0;
        !1 === p.grouping ? e = 1 : c.chart.series.forEach(function (a) {
          var h = a.yAxis,
              k = a.options;

          if (a.type === c.type && (a.visible || !c.chart.options.chart.ignoreHiddenSeries) && b.len === h.len && b.pos === h.pos) {
            if (k.stacking) {
              d = a.stackKey;
              void 0 === f[d] && (f[d] = e++);
              var g = f[d];
            } else !1 !== k.grouping && (g = e++);

            a.columnIndex = g;
          }
        });
        var h = Math.min(Math.abs(g.transA) * (g.ordinalSlope || p.pointRange || g.closestPointRange || g.tickInterval || 1), g.len),
            r = h * p.groupPadding,
            n = (h - 2 * r) / (e || 1);
        p = Math.min(p.maxPointWidth || g.len, y(p.pointWidth, n * (1 - 2 * p.pointPadding)));
        c.columnMetrics = {
          width: p,
          offset: (n - p) / 2 + (r + ((c.columnIndex || 0) + (a ? 1 : 0)) * n - h / 2) * (a ? -1 : 1)
        };
        return c.columnMetrics;
      },
      crispCol: function crispCol(c, p, g, b) {
        var a = this.chart,
            d = this.borderWidth,
            f = -(d % 2 ? .5 : 0);
        d = d % 2 ? .5 : 1;
        a.inverted && a.renderer.isVML && (d += 1);
        this.options.crisp && (g = Math.round(c + g) + f, c = Math.round(c) + f, g -= c);
        b = Math.round(p + b) + d;
        f = .5 >= Math.abs(p) && .5 < b;
        p = Math.round(p) + d;
        b -= p;
        f && b && (--p, b += 1);
        return {
          x: c,
          y: p,
          width: g,
          height: b
        };
      },
      translate: function translate() {
        var c = this,
            p = c.chart,
            g = c.options,
            b = c.dense = 2 > c.closestPointRange * c.xAxis.transA;
        b = c.borderWidth = y(g.borderWidth, b ? 0 : 1);
        var a = c.yAxis,
            d = g.threshold,
            f = c.translatedThreshold = a.getThreshold(d),
            e = y(g.minPointLength, 5),
            h = c.getColumnMetrics(),
            r = h.width,
            n = c.barW = Math.max(r, 1 + 2 * b),
            q = c.pointXOffset = h.offset,
            v = c.dataMin,
            k = c.dataMax;
        p.inverted && (f -= .5);
        g.pointPadding && (n = Math.ceil(n));
        C.prototype.translate.apply(c);
        c.points.forEach(function (b) {
          var h = y(b.yBottom, f),
              g = 999 + Math.abs(h),
              m = r;
          g = Math.min(Math.max(-g, b.plotY), a.len + g);
          var l = b.plotX + q,
              t = n,
              u = Math.min(g, h),
              x = Math.max(g, h) - u;

          if (e && Math.abs(x) < e) {
            x = e;
            var z = !a.reversed && !b.negative || a.reversed && b.negative;
            b.y === d && c.dataMax <= d && a.min < d && v !== k && (z = !z);
            u = Math.abs(u - f) > e ? h - e : f - (z ? e : 0);
          }

          A(b.options.pointWidth) && (m = t = Math.ceil(b.options.pointWidth), l -= Math.round((m - r) / 2));
          b.barX = l;
          b.pointWidth = m;
          b.tooltipPos = p.inverted ? [a.len + a.pos - p.plotLeft - g, c.xAxis.len - l - t / 2, x] : [l + t / 2, g + a.pos - p.plotTop, x];
          b.shapeType = c.pointClass.prototype.shapeType || "rect";
          b.shapeArgs = c.crispCol.apply(c, b.isNull ? [l, f, t, 0] : [l, u, t, x]);
        });
      },
      getSymbol: c.noop,
      drawLegendSymbol: c.LegendSymbolMixin.drawRectangle,
      drawGraph: function drawGraph() {
        this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
      },
      pointAttribs: function pointAttribs(c, p) {
        var g = this.options,
            b = this.pointAttrToOptions || {};
        var a = b.stroke || "borderColor";
        var d = b["stroke-width"] || "borderWidth",
            f = c && c.color || this.color,
            e = c && c[a] || g[a] || this.color || f,
            h = c && c[d] || g[d] || this[d] || 0;
        b = c && c.options.dashStyle || g.dashStyle;
        var m = y(g.opacity, 1);

        if (c && this.zones.length) {
          var n = c.getZone();
          f = c.options.color || n && (n.color || c.nonZonedColor) || this.color;
          n && (e = n.borderColor || e, b = n.dashStyle || b, h = n.borderWidth || h);
        }

        p && (c = L(g.states[p], c.options.states && c.options.states[p] || {}), p = c.brightness, f = c.color || void 0 !== p && z(f).brighten(c.brightness).get() || f, e = c[a] || e, h = c[d] || h, b = c.dashStyle || b, m = y(c.opacity, m));
        a = {
          fill: f,
          stroke: e,
          "stroke-width": h,
          opacity: m
        };
        b && (a.dashstyle = b);
        return a;
      },
      drawPoints: function drawPoints() {
        var c = this,
            p = this.chart,
            g = c.options,
            b = p.renderer,
            a = g.animationLimit || 250,
            d;
        c.points.forEach(function (f) {
          var e = f.graphic,
              h = e && p.pointCount < a ? "animate" : "attr";

          if (D(f.plotY) && null !== f.y) {
            d = f.shapeArgs;
            e && e.element.nodeName !== f.shapeType && (e = e.destroy());
            if (e) e[h](L(d));else f.graphic = e = b[f.shapeType](d).add(f.group || c.group);
            if (g.borderRadius) e[h]({
              r: g.borderRadius
            });
            p.styledMode || e[h](c.pointAttribs(f, f.selected && "select")).shadow(!1 !== f.allowShadow && g.shadow, null, g.stacking && !g.borderRadius);
            e.addClass(f.getClassName(), !0);
          } else e && (f.graphic = e.destroy());
        });
      },
      animate: function animate(c) {
        var m = this,
            g = this.yAxis,
            b = m.options,
            a = this.chart.inverted,
            d = {},
            f = a ? "translateX" : "translateY";
        if (x) if (c) d.scaleY = .001, c = Math.min(g.pos + g.len, Math.max(g.pos, g.toPixels(b.threshold))), a ? d.translateX = c - g.len : d.translateY = c, m.clipBox && m.setClip(), m.group.attr(d);else {
          var e = m.group.attr(f);
          m.group.animate({
            scaleY: 1
          }, u(F(m.options.animation), {
            step: function step(a, b) {
              d[f] = e + b.pos * (g.pos - e);
              m.group.attr(d);
            }
          }));
          m.animate = null;
        }
      },
      remove: function remove() {
        var c = this,
            p = c.chart;
        p.hasRendered && p.series.forEach(function (g) {
          g.type === c.type && (g.isDirty = !0);
        });
        C.prototype.remove.apply(c, arguments);
      }
    });
    "";
  });
  N(H, "parts/BarSeries.js", [H["parts/Globals.js"]], function (c) {
    c = c.seriesType;
    c("bar", "column", null, {
      inverted: !0
    });
    "";
  });
  N(H, "parts/ScatterSeries.js", [H["parts/Globals.js"]], function (c) {
    var n = c.Series,
        A = c.seriesType;
    A("scatter", "line", {
      lineWidth: 0,
      findNearestPointBy: "xy",
      jitter: {
        x: 0,
        y: 0
      },
      marker: {
        enabled: !0
      },
      tooltip: {
        headerFormat: "<span style=\"color:{point.color}\">\u25CF</span> <span style=\"font-size: 10px\"> {series.name}</span><br/>",
        pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
      }
    }, {
      sorted: !1,
      requireSorting: !1,
      noSharedTooltip: !0,
      trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
      takeOrdinalPosition: !1,
      drawGraph: function drawGraph() {
        this.options.lineWidth && n.prototype.drawGraph.call(this);
      },
      applyJitter: function applyJitter() {
        var c = this,
            n = this.options.jitter,
            z = this.points.length;
        n && this.points.forEach(function (u, A) {
          ["x", "y"].forEach(function (y, C) {
            var x = "plot" + y.toUpperCase();

            if (n[y] && !u.isNull) {
              var m = c[y + "Axis"];
              var p = n[y] * m.transA;

              if (m && !m.isLog) {
                var g = Math.max(0, u[x] - p);
                m = Math.min(m.len, u[x] + p);
                C = 1E4 * Math.sin(A + C * z);
                u[x] = g + (m - g) * (C - Math.floor(C));
                "x" === y && (u.clientX = u.plotX);
              }
            }
          });
        });
      }
    });
    c.addEvent(n, "afterTranslate", function () {
      this.applyJitter && this.applyJitter();
    });
    "";
  });
  N(H, "mixins/centered-series.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.isNumber,
        D = c.deg2rad,
        F = c.pick,
        z = c.relativeLength;
    c.CenteredSeriesMixin = {
      getCenter: function getCenter() {
        var c = this.options,
            n = this.chart,
            y = 2 * (c.slicedOffset || 0),
            A = n.plotWidth - 2 * y;
        n = n.plotHeight - 2 * y;
        var x = c.center;
        x = [F(x[0], "50%"), F(x[1], "50%"), c.size || "100%", c.innerSize || 0];
        var m = Math.min(A, n),
            p;

        for (p = 0; 4 > p; ++p) {
          var g = x[p];
          c = 2 > p || 2 === p && /%$/.test(g);
          x[p] = z(g, [A, n, m, x[2]][p]) + (c ? y : 0);
        }

        x[3] > x[2] && (x[3] = x[2]);
        return x;
      },
      getStartAndEndRadians: function getStartAndEndRadians(c, n) {
        c = A(c) ? c : 0;
        n = A(n) && n > c && 360 > n - c ? n : c + 360;
        return {
          start: D * (c + -90),
          end: D * (n + -90)
        };
      }
    };
  });
  N(H, "parts/PieSeries.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.isNumber,
        F = c.addEvent;
    n = c.CenteredSeriesMixin;
    var z = n.getStartAndEndRadians,
        u = c.merge,
        H = c.noop,
        y = c.pick,
        C = c.Point,
        x = c.Series,
        m = c.seriesType,
        p = c.fireEvent,
        g = c.setAnimation;
    m("pie", "line", {
      center: [null, null],
      clip: !1,
      colorByPoint: !0,
      dataLabels: {
        allowOverlap: !0,
        connectorPadding: 5,
        distance: 30,
        enabled: !0,
        formatter: function formatter() {
          return this.point.isNull ? void 0 : this.point.name;
        },
        softConnector: !0,
        x: 0,
        connectorShape: "fixedOffset",
        crookDistance: "70%"
      },
      fillColor: void 0,
      ignoreHiddenPoint: !0,
      inactiveOtherPoints: !0,
      legendType: "point",
      marker: null,
      size: null,
      showInLegend: !1,
      slicedOffset: 10,
      stickyTracking: !1,
      tooltip: {
        followPointer: !0
      },
      borderColor: "#ffffff",
      borderWidth: 1,
      states: {
        hover: {
          brightness: .1
        }
      }
    }, {
      isCartesian: !1,
      requireSorting: !1,
      directTouch: !0,
      noSharedTooltip: !0,
      trackerGroups: ["group", "dataLabelsGroup"],
      axisTypes: [],
      pointAttribs: c.seriesTypes.column.prototype.pointAttribs,
      animate: function animate(b) {
        var a = this,
            d = a.points,
            c = a.startAngleRad;
        b || (d.forEach(function (b) {
          var d = b.graphic,
              f = b.shapeArgs;
          d && (d.attr({
            r: b.startR || a.center[3] / 2,
            start: c,
            end: c
          }), d.animate({
            r: f.r,
            start: f.start,
            end: f.end
          }, a.options.animation));
        }), a.animate = null);
      },
      hasData: function hasData() {
        return !!this.processedXData.length;
      },
      updateTotals: function updateTotals() {
        var b,
            a = 0,
            d = this.points,
            c = d.length,
            e = this.options.ignoreHiddenPoint;

        for (b = 0; b < c; b++) {
          var h = d[b];
          a += e && !h.visible ? 0 : h.isNull ? 0 : h.y;
        }

        this.total = a;

        for (b = 0; b < c; b++) {
          h = d[b], h.percentage = 0 < a && (h.visible || !e) ? h.y / a * 100 : 0, h.total = a;
        }
      },
      generatePoints: function generatePoints() {
        x.prototype.generatePoints.call(this);
        this.updateTotals();
      },
      getX: function getX(b, a, d) {
        var c = this.center,
            e = this.radii ? this.radii[d.index] : c[2] / 2;
        return c[0] + (a ? -1 : 1) * Math.cos(Math.asin(Math.max(Math.min((b - c[1]) / (e + d.labelDistance), 1), -1))) * (e + d.labelDistance) + (0 < d.labelDistance ? (a ? -1 : 1) * this.options.dataLabels.padding : 0);
      },
      translate: function translate(b) {
        this.generatePoints();
        var a = 0,
            d = this.options,
            f = d.slicedOffset,
            e = f + (d.borderWidth || 0),
            h = z(d.startAngle, d.endAngle),
            g = this.startAngleRad = h.start;
        h = (this.endAngleRad = h.end) - g;
        var m = this.points,
            q = d.dataLabels.distance;
        d = d.ignoreHiddenPoint;
        var v,
            k = m.length;
        b || (this.center = b = this.getCenter());

        for (v = 0; v < k; v++) {
          var t = m[v];
          var n = g + a * h;
          if (!d || t.visible) a += t.percentage / 100;
          var u = g + a * h;
          t.shapeType = "arc";
          t.shapeArgs = {
            x: b[0],
            y: b[1],
            r: b[2] / 2,
            innerR: b[3] / 2,
            start: Math.round(1E3 * n) / 1E3,
            end: Math.round(1E3 * u) / 1E3
          };
          t.labelDistance = y(t.options.dataLabels && t.options.dataLabels.distance, q);
          t.labelDistance = c.relativeLength(t.labelDistance, t.shapeArgs.r);
          this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, t.labelDistance);
          u = (u + n) / 2;
          u > 1.5 * Math.PI ? u -= 2 * Math.PI : u < -Math.PI / 2 && (u += 2 * Math.PI);
          t.slicedTranslation = {
            translateX: Math.round(Math.cos(u) * f),
            translateY: Math.round(Math.sin(u) * f)
          };
          var w = Math.cos(u) * b[2] / 2;
          var l = Math.sin(u) * b[2] / 2;
          t.tooltipPos = [b[0] + .7 * w, b[1] + .7 * l];
          t.half = u < -Math.PI / 2 || u > Math.PI / 2 ? 1 : 0;
          t.angle = u;
          n = Math.min(e, t.labelDistance / 5);
          t.labelPosition = {
            natural: {
              x: b[0] + w + Math.cos(u) * t.labelDistance,
              y: b[1] + l + Math.sin(u) * t.labelDistance
            },
            "final": {},
            alignment: 0 > t.labelDistance ? "center" : t.half ? "right" : "left",
            connectorPosition: {
              breakAt: {
                x: b[0] + w + Math.cos(u) * n,
                y: b[1] + l + Math.sin(u) * n
              },
              touchingSliceAt: {
                x: b[0] + w,
                y: b[1] + l
              }
            }
          };
        }

        p(this, "afterTranslate");
      },
      drawEmpty: function drawEmpty() {
        var b = this.options;

        if (0 === this.total) {
          var a = this.center[0];
          var d = this.center[1];
          this.graph || (this.graph = this.chart.renderer.circle(a, d, 0).addClass("highcharts-graph").add(this.group));
          this.graph.animate({
            "stroke-width": b.borderWidth,
            cx: a,
            cy: d,
            r: this.center[2] / 2,
            fill: b.fillColor || "none",
            stroke: b.color || "#cccccc"
          });
        } else this.graph && (this.graph = this.graph.destroy());
      },
      redrawPoints: function redrawPoints() {
        var b = this,
            a = b.chart,
            d = a.renderer,
            c,
            e,
            h,
            g,
            m = b.options.shadow;
        this.drawEmpty();
        !m || b.shadowGroup || a.styledMode || (b.shadowGroup = d.g("shadow").attr({
          zIndex: -1
        }).add(b.group));
        b.points.forEach(function (f) {
          var q = {};
          e = f.graphic;

          if (!f.isNull && e) {
            g = f.shapeArgs;
            c = f.getTranslate();

            if (!a.styledMode) {
              var k = f.shadowGroup;
              m && !k && (k = f.shadowGroup = d.g("shadow").add(b.shadowGroup));
              k && k.attr(c);
              h = b.pointAttribs(f, f.selected && "select");
            }

            f.delayedRendering ? (e.setRadialReference(b.center).attr(g).attr(c), a.styledMode || e.attr(h).attr({
              "stroke-linejoin": "round"
            }).shadow(m, k), f.delayedRendering = !1) : (e.setRadialReference(b.center), a.styledMode || u(!0, q, h), u(!0, q, g, c), e.animate(q));
            e.attr({
              visibility: f.visible ? "inherit" : "hidden"
            });
            e.addClass(f.getClassName());
          } else e && (f.graphic = e.destroy());
        });
      },
      drawPoints: function drawPoints() {
        var b = this.chart.renderer;
        this.points.forEach(function (a) {
          a.graphic || (a.graphic = b[a.shapeType](a.shapeArgs).add(a.series.group), a.delayedRendering = !0);
        });
      },
      searchPoint: H,
      sortByAngle: function sortByAngle(b, a) {
        b.sort(function (b, c) {
          return void 0 !== b.angle && (c.angle - b.angle) * a;
        });
      },
      drawLegendSymbol: c.LegendSymbolMixin.drawRectangle,
      getCenter: n.getCenter,
      getSymbol: H,
      drawGraph: null
    }, {
      init: function init() {
        C.prototype.init.apply(this, arguments);
        var b = this;
        b.name = y(b.name, "Slice");

        var a = function a(_a2) {
          b.slice("select" === _a2.type);
        };

        F(b, "select", a);
        F(b, "unselect", a);
        return b;
      },
      isValid: function isValid() {
        return D(this.y) && 0 <= this.y;
      },
      setVisible: function setVisible(b, a) {
        var c = this,
            f = c.series,
            e = f.chart,
            h = f.options.ignoreHiddenPoint;
        a = y(a, h);
        b !== c.visible && (c.visible = c.options.visible = b = void 0 === b ? !c.visible : b, f.options.data[f.data.indexOf(c)] = c.options, ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(function (a) {
          if (c[a]) c[a][b ? "show" : "hide"](!0);
        }), c.legendItem && e.legend.colorizeItem(c, b), b || "hover" !== c.state || c.setState(""), h && (f.isDirty = !0), a && e.redraw());
      },
      slice: function slice(b, a, c) {
        var d = this.series;
        g(c, d.chart);
        y(a, !0);
        this.sliced = this.options.sliced = A(b) ? b : !this.sliced;
        d.options.data[d.data.indexOf(this)] = this.options;
        this.graphic.animate(this.getTranslate());
        this.shadowGroup && this.shadowGroup.animate(this.getTranslate());
      },
      getTranslate: function getTranslate() {
        return this.sliced ? this.slicedTranslation : {
          translateX: 0,
          translateY: 0
        };
      },
      haloPath: function haloPath(b) {
        var a = this.shapeArgs;
        return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(a.x, a.y, a.r + b, a.r + b, {
          innerR: a.r - 1,
          start: a.start,
          end: a.end
        });
      },
      connectorShapes: {
        fixedOffset: function fixedOffset(b, a, c) {
          var d = a.breakAt;
          a = a.touchingSliceAt;
          return ["M", b.x, b.y].concat(c.softConnector ? ["C", b.x + ("left" === b.alignment ? -5 : 5), b.y, 2 * d.x - a.x, 2 * d.y - a.y, d.x, d.y] : ["L", d.x, d.y]).concat(["L", a.x, a.y]);
        },
        straight: function straight(b, a) {
          a = a.touchingSliceAt;
          return ["M", b.x, b.y, "L", a.x, a.y];
        },
        crookedLine: function crookedLine(b, a, d) {
          a = a.touchingSliceAt;
          var f = this.series,
              e = f.center[0],
              h = f.chart.plotWidth,
              g = f.chart.plotLeft;
          f = b.alignment;
          var m = this.shapeArgs.r;
          d = c.relativeLength(d.crookDistance, 1);
          d = "left" === f ? e + m + (h + g - e - m) * (1 - d) : g + (e - m) * d;
          e = ["L", d, b.y];
          if ("left" === f ? d > b.x || d < a.x : d < b.x || d > a.x) e = [];
          return ["M", b.x, b.y].concat(e).concat(["L", a.x, a.y]);
        }
      },
      getConnectorPath: function getConnectorPath() {
        var b = this.labelPosition,
            a = this.series.options.dataLabels,
            c = a.connectorShape,
            f = this.connectorShapes;
        f[c] && (c = f[c]);
        return c.call(this, {
          x: b["final"].x,
          y: b["final"].y,
          alignment: b.alignment
        }, b.connectorPosition, a);
      }
    });
    "";
  });
  N(H, "parts/DataLabels.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.isArray,
        F = n.objectEach,
        z = n.splat,
        u = c.arrayMax,
        H = c.extend,
        y = c.format,
        C = c.merge;
    n = c.noop;
    var x = c.pick,
        m = c.relativeLength,
        p = c.Series,
        g = c.seriesTypes,
        b = c.stableSort;

    c.distribute = function (a, d, f) {
      function e(a, b) {
        return a.target - b.target;
      }

      var h,
          g = !0,
          m = a,
          q = [];
      var p = 0;
      var k = m.reducedLen || d;

      for (h = a.length; h--;) {
        p += a[h].size;
      }

      if (p > k) {
        b(a, function (a, b) {
          return (b.rank || 0) - (a.rank || 0);
        });

        for (p = h = 0; p <= k;) {
          p += a[h].size, h++;
        }

        q = a.splice(h - 1, a.length);
      }

      b(a, e);

      for (a = a.map(function (a) {
        return {
          size: a.size,
          targets: [a.target],
          align: x(a.align, .5)
        };
      }); g;) {
        for (h = a.length; h--;) {
          g = a[h], p = (Math.min.apply(0, g.targets) + Math.max.apply(0, g.targets)) / 2, g.pos = Math.min(Math.max(0, p - g.size * g.align), d - g.size);
        }

        h = a.length;

        for (g = !1; h--;) {
          0 < h && a[h - 1].pos + a[h - 1].size > a[h].pos && (a[h - 1].size += a[h].size, a[h - 1].targets = a[h - 1].targets.concat(a[h].targets), a[h - 1].align = .5, a[h - 1].pos + a[h - 1].size > d && (a[h - 1].pos = d - a[h - 1].size), a.splice(h, 1), g = !0);
        }
      }

      m.push.apply(m, q);
      h = 0;
      a.some(function (a) {
        var b = 0;
        if (a.targets.some(function () {
          m[h].pos = a.pos + b;
          if (Math.abs(m[h].pos - m[h].target) > f) return m.slice(0, h + 1).forEach(function (a) {
            delete a.pos;
          }), m.reducedLen = (m.reducedLen || d) - .1 * d, m.reducedLen > .1 * d && c.distribute(m, d, f), !0;
          b += m[h].size;
          h++;
        })) return !0;
      });
      b(m, e);
    };

    p.prototype.drawDataLabels = function () {
      function a(a, b) {
        var c = b.filter;
        return c ? (b = c.operator, a = a[c.property], c = c.value, ">" === b && a > c || "<" === b && a < c || ">=" === b && a >= c || "<=" === b && a <= c || "==" === b && a == c || "===" === b && a === c ? !0 : !1) : !0;
      }

      function b(a, b) {
        var c = [],
            d;
        if (D(a) && !D(b)) c = a.map(function (a) {
          return C(a, b);
        });else if (D(b) && !D(a)) c = b.map(function (b) {
          return C(a, b);
        });else if (D(a) || D(b)) for (d = Math.max(a.length, b.length); d--;) {
          c[d] = C(a[d], b[d]);
        } else c = C(a, b);
        return c;
      }

      var f = this,
          e = f.chart,
          h = f.options,
          g = h.dataLabels,
          m = f.points,
          q,
          p = f.hasRendered || 0,
          k = c.animObject(h.animation).duration,
          t = Math.min(k, 200),
          n = !e.renderer.forExport && x(g.defer, 0 < t),
          u = e.renderer;
      g = b(b(e.options.plotOptions && e.options.plotOptions.series && e.options.plotOptions.series.dataLabels, e.options.plotOptions && e.options.plotOptions[f.type] && e.options.plotOptions[f.type].dataLabels), g);
      c.fireEvent(this, "drawDataLabels");

      if (D(g) || g.enabled || f._hasPointLabels) {
        var w = f.plotGroup("dataLabelsGroup", "data-labels", n && !p ? "hidden" : "inherit", g.zIndex || 6);
        n && (w.attr({
          opacity: +p
        }), p || setTimeout(function () {
          var a = f.dataLabelsGroup;
          a && (f.visible && w.show(!0), a[h.animation ? "animate" : "attr"]({
            opacity: 1
          }, {
            duration: t
          }));
        }, k - t));
        m.forEach(function (c) {
          q = z(b(g, c.dlOptions || c.options && c.options.dataLabels));
          q.forEach(function (b, d) {
            var k = b.enabled && (!c.isNull || c.dataLabelOnNull) && a(c, b),
                g = c.dataLabels ? c.dataLabels[d] : c.dataLabel,
                l = c.connectors ? c.connectors[d] : c.connector,
                q = x(b.distance, c.labelDistance),
                m = !g;

            if (k) {
              var t = c.getLabelConfig();
              var p = x(b[c.formatPrefix + "Format"], b.format);
              t = A(p) ? y(p, t, e.time) : (b[c.formatPrefix + "Formatter"] || b.formatter).call(t, b);
              p = b.style;
              var n = b.rotation;
              e.styledMode || (p.color = x(b.color, p.color, f.color, "#000000"), "contrast" === p.color && (c.contrastColor = u.getContrast(c.color || f.color), p.color = !A(q) && b.inside || 0 > q || h.stacking ? c.contrastColor : "#000000"), h.cursor && (p.cursor = h.cursor));
              var r = {
                r: b.borderRadius || 0,
                rotation: n,
                padding: b.padding,
                zIndex: 1
              };
              e.styledMode || (r.fill = b.backgroundColor, r.stroke = b.borderColor, r["stroke-width"] = b.borderWidth);
              F(r, function (a, b) {
                void 0 === a && delete r[b];
              });
            }

            !g || k && A(t) ? k && A(t) && (g ? r.text = t : (c.dataLabels = c.dataLabels || [], g = c.dataLabels[d] = n ? u.text(t, 0, -9999).addClass("highcharts-data-label") : u.label(t, 0, -9999, b.shape, null, null, b.useHTML, null, "data-label"), d || (c.dataLabel = g), g.addClass(" highcharts-data-label-color-" + c.colorIndex + " " + (b.className || "") + (b.useHTML ? " highcharts-tracker" : ""))), g.options = b, g.attr(r), e.styledMode || g.css(p).shadow(b.shadow), g.added || g.add(w), b.textPath && !b.useHTML && g.setTextPath(c.getDataLabelPath && c.getDataLabelPath(g) || c.graphic, b.textPath), f.alignDataLabel(c, g, b, null, m)) : (c.dataLabel = c.dataLabel && c.dataLabel.destroy(), c.dataLabels && (1 === c.dataLabels.length ? delete c.dataLabels : delete c.dataLabels[d]), d || delete c.dataLabel, l && (c.connector = c.connector.destroy(), c.connectors && (1 === c.connectors.length ? delete c.connectors : delete c.connectors[d])));
          });
        });
      }

      c.fireEvent(this, "afterDrawDataLabels");
    };

    p.prototype.alignDataLabel = function (a, b, c, e, h) {
      var d = this.chart,
          f = this.isCartesian && d.inverted,
          g = x(a.dlBox && a.dlBox.centerX, a.plotX, -9999),
          m = x(a.plotY, -9999),
          k = b.getBBox(),
          p = c.rotation,
          n = c.align,
          u = this.visible && (a.series.forceDL || d.isInsidePlot(g, Math.round(m), f) || e && d.isInsidePlot(g, f ? e.x + 1 : e.y + e.height - 1, f)),
          w = "justify" === x(c.overflow, "justify");

      if (u) {
        var l = d.renderer.fontMetrics(d.styledMode ? void 0 : c.style.fontSize, b).b;
        e = H({
          x: f ? this.yAxis.len - m : g,
          y: Math.round(f ? this.xAxis.len - g : m),
          width: 0,
          height: 0
        }, e);
        H(c, {
          width: k.width,
          height: k.height
        });
        p ? (w = !1, g = d.renderer.rotCorr(l, p), g = {
          x: e.x + c.x + e.width / 2 + g.x,
          y: e.y + c.y + {
            top: 0,
            middle: .5,
            bottom: 1
          }[c.verticalAlign] * e.height
        }, b[h ? "attr" : "animate"](g).attr({
          align: n
        }), m = (p + 720) % 360, m = 180 < m && 360 > m, "left" === n ? g.y -= m ? k.height : 0 : "center" === n ? (g.x -= k.width / 2, g.y -= k.height / 2) : "right" === n && (g.x -= k.width, g.y -= m ? 0 : k.height), b.placed = !0, b.alignAttr = g) : (b.align(c, null, e), g = b.alignAttr);
        w && 0 <= e.height ? this.justifyDataLabel(b, c, g, k, e, h) : x(c.crop, !0) && (u = d.isInsidePlot(g.x, g.y) && d.isInsidePlot(g.x + k.width, g.y + k.height));
        if (c.shape && !p) b[h ? "attr" : "animate"]({
          anchorX: f ? d.plotWidth - a.plotY : a.plotX,
          anchorY: f ? d.plotHeight - a.plotX : a.plotY
        });
      }

      u || (b.hide(!0), b.placed = !1);
    };

    p.prototype.justifyDataLabel = function (a, b, c, e, g, m) {
      var d = this.chart,
          f = b.align,
          h = b.verticalAlign,
          k = a.box ? 0 : a.padding || 0;
      var p = c.x + k;

      if (0 > p) {
        "right" === f ? (b.align = "left", b.inside = !0) : b.x = -p;
        var n = !0;
      }

      p = c.x + e.width - k;
      p > d.plotWidth && ("left" === f ? (b.align = "right", b.inside = !0) : b.x = d.plotWidth - p, n = !0);
      p = c.y + k;
      0 > p && ("bottom" === h ? (b.verticalAlign = "top", b.inside = !0) : b.y = -p, n = !0);
      p = c.y + e.height - k;
      p > d.plotHeight && ("top" === h ? (b.verticalAlign = "bottom", b.inside = !0) : b.y = d.plotHeight - p, n = !0);
      n && (a.placed = !m, a.align(b, null, g));
      return n;
    };

    g.pie && (g.pie.prototype.dataLabelPositioners = {
      radialDistributionY: function radialDistributionY(a) {
        return a.top + a.distributeBox.pos;
      },
      radialDistributionX: function radialDistributionX(a, b, c, e) {
        return a.getX(c < b.top + 2 || c > b.bottom - 2 ? e : c, b.half, b);
      },
      justify: function justify(a, b, c) {
        return c[0] + (a.half ? -1 : 1) * (b + a.labelDistance);
      },
      alignToPlotEdges: function alignToPlotEdges(a, b, c, e) {
        a = a.getBBox().width;
        return b ? a + e : c - a - e;
      },
      alignToConnectors: function alignToConnectors(a, b, c, e) {
        var d = 0,
            f;
        a.forEach(function (a) {
          f = a.dataLabel.getBBox().width;
          f > d && (d = f);
        });
        return b ? d + e : c - d - e;
      }
    }, g.pie.prototype.drawDataLabels = function () {
      var a = this,
          b = a.data,
          f,
          e = a.chart,
          g = a.options.dataLabels,
          m = g.connectorPadding,
          n,
          q = e.plotWidth,
          v = e.plotHeight,
          k = e.plotLeft,
          t = Math.round(e.chartWidth / 3),
          y,
          z = a.center,
          w = z[2] / 2,
          l = z[1],
          J,
          D,
          F,
          H,
          L = [[], []],
          M,
          G,
          N,
          Q,
          P = [0, 0, 0, 0],
          U = a.dataLabelPositioners,
          V;
      a.visible && (g.enabled || a._hasPointLabels) && (b.forEach(function (a) {
        a.dataLabel && a.visible && a.dataLabel.shortened && (a.dataLabel.attr({
          width: "auto"
        }).css({
          width: "auto",
          textOverflow: "clip"
        }), a.dataLabel.shortened = !1);
      }), p.prototype.drawDataLabels.apply(a), b.forEach(function (a) {
        a.dataLabel && (a.visible ? (L[a.half].push(a), a.dataLabel._pos = null, !A(g.style.width) && !A(a.options.dataLabels && a.options.dataLabels.style && a.options.dataLabels.style.width) && a.dataLabel.getBBox().width > t && (a.dataLabel.css({
          width: .7 * t
        }), a.dataLabel.shortened = !0)) : (a.dataLabel = a.dataLabel.destroy(), a.dataLabels && 1 === a.dataLabels.length && delete a.dataLabels));
      }), L.forEach(function (b, d) {
        var h = b.length,
            p = [],
            n;

        if (h) {
          a.sortByAngle(b, d - .5);

          if (0 < a.maxLabelDistance) {
            var t = Math.max(0, l - w - a.maxLabelDistance);
            var r = Math.min(l + w + a.maxLabelDistance, e.plotHeight);
            b.forEach(function (a) {
              0 < a.labelDistance && a.dataLabel && (a.top = Math.max(0, l - w - a.labelDistance), a.bottom = Math.min(l + w + a.labelDistance, e.plotHeight), n = a.dataLabel.getBBox().height || 21, a.distributeBox = {
                target: a.labelPosition.natural.y - a.top + n / 2,
                size: n,
                rank: a.y
              }, p.push(a.distributeBox));
            });
            t = r + n - t;
            c.distribute(p, t, t / 5);
          }

          for (Q = 0; Q < h; Q++) {
            f = b[Q];
            F = f.labelPosition;
            J = f.dataLabel;
            N = !1 === f.visible ? "hidden" : "inherit";
            G = t = F.natural.y;
            p && A(f.distributeBox) && (void 0 === f.distributeBox.pos ? N = "hidden" : (H = f.distributeBox.size, G = U.radialDistributionY(f)));
            delete f.positionIndex;
            if (g.justify) M = U.justify(f, w, z);else switch (g.alignTo) {
              case "connectors":
                M = U.alignToConnectors(b, d, q, k);
                break;

              case "plotEdges":
                M = U.alignToPlotEdges(J, d, q, k);
                break;

              default:
                M = U.radialDistributionX(a, f, G, t);
            }
            J._attr = {
              visibility: N,
              align: F.alignment
            };
            J._pos = {
              x: M + g.x + ({
                left: m,
                right: -m
              }[F.alignment] || 0),
              y: G + g.y - 10
            };
            F["final"].x = M;
            F["final"].y = G;
            x(g.crop, !0) && (D = J.getBBox().width, t = null, M - D < m && 1 === d ? (t = Math.round(D - M + m), P[3] = Math.max(t, P[3])) : M + D > q - m && 0 === d && (t = Math.round(M + D - q + m), P[1] = Math.max(t, P[1])), 0 > G - H / 2 ? P[0] = Math.max(Math.round(-G + H / 2), P[0]) : G + H / 2 > v && (P[2] = Math.max(Math.round(G + H / 2 - v), P[2])), J.sideOverflow = t);
          }
        }
      }), 0 === u(P) || this.verifyDataLabelOverflow(P)) && (this.placeDataLabels(), this.points.forEach(function (b) {
        V = C(g, b.options.dataLabels);

        if (n = x(V.connectorWidth, 1)) {
          var c;
          y = b.connector;

          if ((J = b.dataLabel) && J._pos && b.visible && 0 < b.labelDistance) {
            N = J._attr.visibility;
            if (c = !y) b.connector = y = e.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + b.colorIndex + (b.className ? " " + b.className : "")).add(a.dataLabelsGroup), e.styledMode || y.attr({
              "stroke-width": n,
              stroke: V.connectorColor || b.color || "#666666"
            });
            y[c ? "attr" : "animate"]({
              d: b.getConnectorPath()
            });
            y.attr("visibility", N);
          } else y && (b.connector = y.destroy());
        }
      }));
    }, g.pie.prototype.placeDataLabels = function () {
      this.points.forEach(function (a) {
        var b = a.dataLabel,
            c;
        b && a.visible && ((c = b._pos) ? (b.sideOverflow && (b._attr.width = Math.max(b.getBBox().width - b.sideOverflow, 0), b.css({
          width: b._attr.width + "px",
          textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis"
        }), b.shortened = !0), b.attr(b._attr), b[b.moved ? "animate" : "attr"](c), b.moved = !0) : b && b.attr({
          y: -9999
        }));
        delete a.distributeBox;
      }, this);
    }, g.pie.prototype.alignDataLabel = n, g.pie.prototype.verifyDataLabelOverflow = function (a) {
      var b = this.center,
          c = this.options,
          e = c.center,
          g = c.minSize || 80,
          p = null !== c.size;

      if (!p) {
        if (null !== e[0]) var n = Math.max(b[2] - Math.max(a[1], a[3]), g);else n = Math.max(b[2] - a[1] - a[3], g), b[0] += (a[3] - a[1]) / 2;
        null !== e[1] ? n = Math.max(Math.min(n, b[2] - Math.max(a[0], a[2])), g) : (n = Math.max(Math.min(n, b[2] - a[0] - a[2]), g), b[1] += (a[0] - a[2]) / 2);
        n < b[2] ? (b[2] = n, b[3] = Math.min(m(c.innerSize || 0, n), n), this.translate(b), this.drawDataLabels && this.drawDataLabels()) : p = !0;
      }

      return p;
    });
    g.column && (g.column.prototype.alignDataLabel = function (a, b, c, e, g) {
      var d = this.chart.inverted,
          f = a.series,
          h = a.dlBox || a.shapeArgs,
          m = x(a.below, a.plotY > x(this.translatedThreshold, f.yAxis.len)),
          k = x(c.inside, !!this.options.stacking);
      h && (e = C(h), 0 > e.y && (e.height += e.y, e.y = 0), h = e.y + e.height - f.yAxis.len, 0 < h && (e.height -= h), d && (e = {
        x: f.yAxis.len - e.y - e.height,
        y: f.xAxis.len - e.x - e.width,
        width: e.height,
        height: e.width
      }), k || (d ? (e.x += m ? 0 : e.width, e.width = 0) : (e.y += m ? e.height : 0, e.height = 0)));
      c.align = x(c.align, !d || k ? "center" : m ? "right" : "left");
      c.verticalAlign = x(c.verticalAlign, d || k ? "middle" : m ? "top" : "bottom");
      p.prototype.alignDataLabel.call(this, a, b, c, e, g);
      c.inside && a.contrastColor && b.css({
        color: a.contrastColor
      });
    });
  });
  N(H, "modules/overlapping-datalabels.src.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.isArray,
        D = n.objectEach;
    n = c.Chart;
    var F = c.pick,
        z = c.addEvent,
        u = c.fireEvent;
    z(n, "render", function () {
      var c = [];
      (this.labelCollectors || []).forEach(function (n) {
        c = c.concat(n());
      });
      (this.yAxis || []).forEach(function (n) {
        n.options.stackLabels && !n.options.stackLabels.allowOverlap && D(n.stacks, function (n) {
          D(n, function (n) {
            c.push(n.label);
          });
        });
      });
      (this.series || []).forEach(function (n) {
        var u = n.options.dataLabels;
        n.visible && (!1 !== u.enabled || n._hasPointLabels) && n.points.forEach(function (n) {
          n.visible && (A(n.dataLabels) ? n.dataLabels : n.dataLabel ? [n.dataLabel] : []).forEach(function (m) {
            var p = m.options;
            m.labelrank = F(p.labelrank, n.labelrank, n.shapeArgs && n.shapeArgs.height);
            p.allowOverlap || c.push(m);
          });
        });
      });
      this.hideOverlappingLabels(c);
    });

    n.prototype.hideOverlappingLabels = function (c) {
      var n = this,
          z = c.length,
          x = n.renderer,
          m,
          p,
          g;

      var b = function b(a) {
        var b = a.box ? 0 : a.padding || 0;
        var c = 0;

        if (a && (!a.alignAttr || a.placed)) {
          var d = a.alignAttr || {
            x: a.attr("x"),
            y: a.attr("y")
          };
          var f = a.parentGroup;
          a.width || (c = a.getBBox(), a.width = c.width, a.height = c.height, c = x.fontMetrics(null, a.element).h);
          return {
            x: d.x + (f.translateX || 0) + b,
            y: d.y + (f.translateY || 0) + b - c,
            width: a.width - 2 * b,
            height: a.height - 2 * b
          };
        }
      };

      for (p = 0; p < z; p++) {
        if (m = c[p]) m.oldOpacity = m.opacity, m.newOpacity = 1, m.absoluteBox = b(m);
      }

      c.sort(function (a, b) {
        return (b.labelrank || 0) - (a.labelrank || 0);
      });

      for (p = 0; p < z; p++) {
        var a = (b = c[p]) && b.absoluteBox;

        for (m = p + 1; m < z; ++m) {
          var d = (g = c[m]) && g.absoluteBox;
          !a || !d || b === g || 0 === b.newOpacity || 0 === g.newOpacity || d.x > a.x + a.width || d.x + d.width < a.x || d.y > a.y + a.height || d.y + d.height < a.y || ((b.labelrank < g.labelrank ? b : g).newOpacity = 0);
        }
      }

      c.forEach(function (a) {
        var b;

        if (a) {
          var c = a.newOpacity;
          a.oldOpacity !== c && (a.alignAttr && a.placed ? (c ? a.show(!0) : b = function b() {
            a.hide(!0);
            a.placed = !1;
          }, a.alignAttr.opacity = c, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, b), u(n, "afterHideOverlappingLabels")) : a.attr({
            opacity: c
          }));
          a.isOld = !0;
        }
      });
    };
  });
  N(H, "parts/Interaction.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.defined,
        D = n.isArray,
        F = n.isObject,
        z = n.objectEach,
        u = c.addEvent;
    n = c.Chart;
    var H = c.createElement,
        y = c.css,
        C = c.defaultOptions,
        x = c.defaultPlotOptions,
        m = c.extend,
        p = c.fireEvent,
        g = c.hasTouch,
        b = c.Legend,
        a = c.merge,
        d = c.pick,
        f = c.Point,
        e = c.Series,
        h = c.seriesTypes,
        r = c.svg;
    var E = c.TrackerMixin = {
      drawTrackerPoint: function drawTrackerPoint() {
        var a = this,
            b = a.chart,
            c = b.pointer,
            d = function d(a) {
          var b = c.getPointFromEvent(a);
          void 0 !== b && (c.isDirectTouch = !0, b.onMouseOver(a));
        },
            e;

        a.points.forEach(function (a) {
          e = D(a.dataLabels) ? a.dataLabels : a.dataLabel ? [a.dataLabel] : [];
          a.graphic && (a.graphic.element.point = a);
          e.forEach(function (b) {
            b.div ? b.div.point = a : b.element.point = a;
          });
        });
        a._hasTracking || (a.trackerGroups.forEach(function (e) {
          if (a[e]) {
            a[e].addClass("highcharts-tracker").on("mouseover", d).on("mouseout", function (a) {
              c.onTrackerMouseOut(a);
            });
            if (g) a[e].on("touchstart", d);
            !b.styledMode && a.options.cursor && a[e].css(y).css({
              cursor: a.options.cursor
            });
          }
        }), a._hasTracking = !0);
        p(this, "afterDrawTracker");
      },
      drawTrackerGraph: function drawTrackerGraph() {
        var a = this,
            b = a.options,
            c = b.trackByArea,
            d = [].concat(c ? a.areaPath : a.graphPath),
            e = d.length,
            f = a.chart,
            h = f.pointer,
            l = f.renderer,
            m = f.options.tooltip.snap,
            n = a.tracker,
            u,
            x = function x() {
          if (f.hoverSeries !== a) a.onMouseOver();
        },
            y = "rgba(192,192,192," + (r ? .0001 : .002) + ")";

        if (e && !c) for (u = e + 1; u--;) {
          "M" === d[u] && d.splice(u + 1, 0, d[u + 1] - m, d[u + 2], "L"), (u && "M" === d[u] || u === e) && d.splice(u, 0, "L", d[u - 2] + m, d[u - 1]);
        }
        n ? n.attr({
          d: d
        }) : a.graph && (a.tracker = l.path(d).attr({
          visibility: a.visible ? "visible" : "hidden",
          zIndex: 2
        }).addClass(c ? "highcharts-tracker-area" : "highcharts-tracker-line").add(a.group), f.styledMode || a.tracker.attr({
          "stroke-linejoin": "round",
          stroke: y,
          fill: c ? y : "none",
          "stroke-width": a.graph.strokeWidth() + (c ? 0 : 2 * m)
        }), [a.tracker, a.markerGroup].forEach(function (a) {
          a.addClass("highcharts-tracker").on("mouseover", x).on("mouseout", function (a) {
            h.onTrackerMouseOut(a);
          });
          b.cursor && !f.styledMode && a.css({
            cursor: b.cursor
          });
          if (g) a.on("touchstart", x);
        }));
        p(this, "afterDrawTracker");
      }
    };
    h.column && (h.column.prototype.drawTracker = E.drawTrackerPoint);
    h.pie && (h.pie.prototype.drawTracker = E.drawTrackerPoint);
    h.scatter && (h.scatter.prototype.drawTracker = E.drawTrackerPoint);
    m(b.prototype, {
      setItemEvents: function setItemEvents(b, c, d) {
        var e = this,
            g = e.chart.renderer.boxWrapper,
            k = b instanceof f,
            h = "highcharts-legend-" + (k ? "point" : "series") + "-active",
            l = e.chart.styledMode;
        (d ? c : b.legendGroup).on("mouseover", function () {
          b.visible && e.allItems.forEach(function (a) {
            b !== a && a.setState("inactive", !k);
          });
          b.setState("hover");
          b.visible && g.addClass(h);
          l || c.css(e.options.itemHoverStyle);
        }).on("mouseout", function () {
          e.chart.styledMode || c.css(a(b.visible ? e.itemStyle : e.itemHiddenStyle));
          e.allItems.forEach(function (a) {
            b !== a && a.setState("", !k);
          });
          g.removeClass(h);
          b.setState();
        }).on("click", function (a) {
          var c = function c() {
            b.setVisible && b.setVisible();
            e.allItems.forEach(function (a) {
              b !== a && a.setState(b.visible ? "inactive" : "", !k);
            });
          };

          g.removeClass(h);
          a = {
            browserEvent: a
          };
          b.firePointEvent ? b.firePointEvent("legendItemClick", a, c) : p(b, "legendItemClick", a, c);
        });
      },
      createCheckboxForItem: function createCheckboxForItem(a) {
        a.checkbox = H("input", {
          type: "checkbox",
          className: "highcharts-legend-checkbox",
          checked: a.selected,
          defaultChecked: a.selected
        }, this.options.itemCheckboxStyle, this.chart.container);
        u(a.checkbox, "click", function (b) {
          p(a.series || a, "checkboxClick", {
            checked: b.target.checked,
            item: a
          }, function () {
            a.select();
          });
        });
      }
    });
    m(n.prototype, {
      showResetZoom: function showResetZoom() {
        function a() {
          b.zoomOut();
        }

        var b = this,
            c = C.lang,
            d = b.options.chart.resetZoomButton,
            e = d.theme,
            f = e.states,
            g = "chart" === d.relativeTo || "spaceBox" === d.relativeTo ? null : "plotBox";
        p(this, "beforeShowResetZoom", null, function () {
          b.resetZoomButton = b.renderer.button(c.resetZoom, null, null, a, e, f && f.hover).attr({
            align: d.position.align,
            title: c.resetZoomTitle
          }).addClass("highcharts-reset-zoom").add().align(d.position, !1, g);
        });
        p(this, "afterShowResetZoom");
      },
      zoomOut: function zoomOut() {
        p(this, "selection", {
          resetSelection: !0
        }, this.zoom);
      },
      zoom: function zoom(a) {
        var b = this,
            c,
            e = b.pointer,
            f = !1,
            g = b.inverted ? e.mouseDownX : e.mouseDownY;
        !a || a.resetSelection ? (b.axes.forEach(function (a) {
          c = a.zoom();
        }), e.initiated = !1) : a.xAxis.concat(a.yAxis).forEach(function (a) {
          var d = a.axis,
              k = b.inverted ? d.left : d.top,
              h = b.inverted ? k + d.width : k + d.height,
              l = d.isXAxis,
              m = !1;
          if (!l && g >= k && g <= h || l || !A(g)) m = !0;
          e[l ? "zoomX" : "zoomY"] && m && (c = d.zoom(a.min, a.max), d.displayBtn && (f = !0));
        });
        var h = b.resetZoomButton;
        f && !h ? b.showResetZoom() : !f && F(h) && (b.resetZoomButton = h.destroy());
        c && b.redraw(d(b.options.chart.animation, a && a.animation, 100 > b.pointCount));
      },
      pan: function pan(a, b) {
        var c = this,
            d = c.hoverPoints,
            e;
        p(this, "pan", {
          originalEvent: a
        }, function () {
          d && d.forEach(function (a) {
            a.setState();
          });
          ("xy" === b ? [1, 0] : [1]).forEach(function (b) {
            b = c[b ? "xAxis" : "yAxis"][0];
            var d = b.horiz,
                f = a[d ? "chartX" : "chartY"];
            d = d ? "mouseDownX" : "mouseDownY";
            var g = c[d],
                k = (b.pointRange || 0) / 2,
                h = b.reversed && !c.inverted || !b.reversed && c.inverted ? -1 : 1,
                m = b.getExtremes(),
                n = b.toValue(g - f, !0) + k * h;
            h = b.toValue(g + b.len - f, !0) - k * h;
            var p = h < n;
            g = p ? h : n;
            n = p ? n : h;
            h = Math.min(m.dataMin, k ? m.min : b.toValue(b.toPixels(m.min) - b.minPixelPadding));
            k = Math.max(m.dataMax, k ? m.max : b.toValue(b.toPixels(m.max) + b.minPixelPadding));
            p = h - g;
            0 < p && (n += p, g = h);
            p = n - k;
            0 < p && (n = k, g -= p);
            b.series.length && g !== m.min && n !== m.max && (b.setExtremes(g, n, !1, !1, {
              trigger: "pan"
            }), e = !0);
            c[d] = f;
          });
          e && c.redraw(!1);
          y(c.container, {
            cursor: "move"
          });
        });
      }
    });
    m(f.prototype, {
      select: function select(a, b) {
        var c = this,
            e = c.series,
            f = e.chart;
        this.selectedStaging = a = d(a, !c.selected);
        c.firePointEvent(a ? "select" : "unselect", {
          accumulate: b
        }, function () {
          c.selected = c.options.selected = a;
          e.options.data[e.data.indexOf(c)] = c.options;
          c.setState(a && "select");
          b || f.getSelectedPoints().forEach(function (a) {
            var b = a.series;
            a.selected && a !== c && (a.selected = a.options.selected = !1, b.options.data[b.data.indexOf(a)] = a.options, a.setState(f.hoverPoints && b.options.inactiveOtherPoints ? "inactive" : ""), a.firePointEvent("unselect"));
          });
        });
        delete this.selectedStaging;
      },
      onMouseOver: function onMouseOver(a) {
        var b = this.series.chart,
            c = b.pointer;
        a = a ? c.normalize(a) : c.getChartCoordinatesFromPoint(this, b.inverted);
        c.runPointActions(a, this);
      },
      onMouseOut: function onMouseOut() {
        var a = this.series.chart;
        this.firePointEvent("mouseOut");
        this.series.options.inactiveOtherPoints || (a.hoverPoints || []).forEach(function (a) {
          a.setState();
        });
        a.hoverPoints = a.hoverPoint = null;
      },
      importEvents: function importEvents() {
        if (!this.hasImportedEvents) {
          var b = this,
              d = a(b.series.options.point, b.options).events;
          b.events = d;
          z(d, function (a, d) {
            c.isFunction(a) && u(b, d, a);
          });
          this.hasImportedEvents = !0;
        }
      },
      setState: function setState(a, b) {
        var c = this.series,
            e = this.state,
            f = c.options.states[a || "normal"] || {},
            g = x[c.type].marker && c.options.marker,
            h = g && !1 === g.enabled,
            l = g && g.states && g.states[a || "normal"] || {},
            n = !1 === l.enabled,
            q = c.stateMarkerGraphic,
            r = this.marker || {},
            v = c.chart,
            u = c.halo,
            y,
            z = g && c.markerAttribs;
        a = a || "";

        if (!(a === this.state && !b || this.selected && "select" !== a || !1 === f.enabled || a && (n || h && !1 === l.enabled) || a && r.states && r.states[a] && !1 === r.states[a].enabled)) {
          this.state = a;
          z && (y = c.markerAttribs(this, a));

          if (this.graphic) {
            e && this.graphic.removeClass("highcharts-point-" + e);
            a && this.graphic.addClass("highcharts-point-" + a);

            if (!v.styledMode) {
              var A = c.pointAttribs(this, a);
              var C = d(v.options.chart.animation, f.animation);
              c.options.inactiveOtherPoints && ((this.dataLabels || []).forEach(function (a) {
                a && a.animate({
                  opacity: A.opacity
                }, C);
              }), this.connector && this.connector.animate({
                opacity: A.opacity
              }, C));
              this.graphic.animate(A, C);
            }

            y && this.graphic.animate(y, d(v.options.chart.animation, l.animation, g.animation));
            q && q.hide();
          } else {
            if (a && l) {
              e = r.symbol || c.symbol;
              q && q.currentSymbol !== e && (q = q.destroy());
              if (y) if (q) q[b ? "animate" : "attr"]({
                x: y.x,
                y: y.y
              });else e && (c.stateMarkerGraphic = q = v.renderer.symbol(e, y.x, y.y, y.width, y.height).add(c.markerGroup), q.currentSymbol = e);
              !v.styledMode && q && q.attr(c.pointAttribs(this, a));
            }

            q && (q[a && this.isInside ? "show" : "hide"](), q.element.point = this);
          }

          a = f.halo;
          f = (q = this.graphic || q) && q.visibility || "inherit";
          a && a.size && q && "hidden" !== f ? (u || (c.halo = u = v.renderer.path().add(q.parentGroup)), u.show()[b ? "animate" : "attr"]({
            d: this.haloPath(a.size)
          }), u.attr({
            "class": "highcharts-halo highcharts-color-" + d(this.colorIndex, c.colorIndex) + (this.className ? " " + this.className : ""),
            visibility: f,
            zIndex: -1
          }), u.point = this, v.styledMode || u.attr(m({
            fill: this.color || c.color,
            "fill-opacity": a.opacity
          }, a.attributes))) : u && u.point && u.point.haloPath && u.animate({
            d: u.point.haloPath(0)
          }, null, u.hide);
          p(this, "afterSetState");
        }
      },
      haloPath: function haloPath(a) {
        return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - a, this.plotY - a, 2 * a, 2 * a);
      }
    });
    m(e.prototype, {
      onMouseOver: function onMouseOver() {
        var a = this.chart,
            b = a.hoverSeries;
        if (b && b !== this) b.onMouseOut();
        this.options.events.mouseOver && p(this, "mouseOver");
        this.setState("hover");
        a.hoverSeries = this;
      },
      onMouseOut: function onMouseOut() {
        var a = this.options,
            b = this.chart,
            c = b.tooltip,
            d = b.hoverPoint;
        b.hoverSeries = null;
        if (d) d.onMouseOut();
        this && a.events.mouseOut && p(this, "mouseOut");
        !c || this.stickyTracking || c.shared && !this.noSharedTooltip || c.hide();
        b.series.forEach(function (a) {
          a.setState("", !0);
        });
      },
      setState: function setState(a, b) {
        var c = this,
            e = c.options,
            f = c.graph,
            g = e.inactiveOtherPoints,
            h = e.states,
            l = e.lineWidth,
            m = e.opacity,
            n = d(h[a || "normal"] && h[a || "normal"].animation, c.chart.options.chart.animation);
        e = 0;
        a = a || "";

        if (c.state !== a && ([c.group, c.markerGroup, c.dataLabelsGroup].forEach(function (b) {
          b && (c.state && b.removeClass("highcharts-series-" + c.state), a && b.addClass("highcharts-series-" + a));
        }), c.state = a, !c.chart.styledMode)) {
          if (h[a] && !1 === h[a].enabled) return;
          a && (l = h[a].lineWidth || l + (h[a].lineWidthPlus || 0), m = d(h[a].opacity, m));
          if (f && !f.dashstyle) for (h = {
            "stroke-width": l
          }, f.animate(h, n); c["zone-graph-" + e];) {
            c["zone-graph-" + e].attr(h), e += 1;
          }
          g || [c.group, c.markerGroup, c.dataLabelsGroup, c.labelBySeries].forEach(function (a) {
            a && a.animate({
              opacity: m
            }, n);
          });
        }

        b && g && c.points && c.setAllPointsToState(a);
      },
      setAllPointsToState: function setAllPointsToState(a) {
        this.points.forEach(function (b) {
          b.setState && b.setState(a);
        });
      },
      setVisible: function setVisible(a, b) {
        var c = this,
            d = c.chart,
            e = c.legendItem,
            f = d.options.chart.ignoreHiddenSeries,
            g = c.visible;
        var h = (c.visible = a = c.options.visible = c.userOptions.visible = void 0 === a ? !g : a) ? "show" : "hide";
        ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function (a) {
          if (c[a]) c[a][h]();
        });
        if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c) c.onMouseOut();
        e && d.legend.colorizeItem(c, a);
        c.isDirty = !0;
        c.options.stacking && d.series.forEach(function (a) {
          a.options.stacking && a.visible && (a.isDirty = !0);
        });
        c.linkedSeries.forEach(function (b) {
          b.setVisible(a, !1);
        });
        f && (d.isDirtyBox = !0);
        p(c, h);
        !1 !== b && d.redraw();
      },
      show: function show() {
        this.setVisible(!0);
      },
      hide: function hide() {
        this.setVisible(!1);
      },
      select: function select(a) {
        this.selected = a = this.options.selected = void 0 === a ? !this.selected : a;
        this.checkbox && (this.checkbox.checked = a);
        p(this, a ? "select" : "unselect");
      },
      drawTracker: E.drawTrackerGraph
    });
  });
  N(H, "parts/Responsive.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = n.isArray,
        D = n.isObject,
        F = n.objectEach,
        z = n.splat;
    n = c.Chart;
    var u = c.pick;

    n.prototype.setResponsive = function (n, u) {
      var y = this.options.responsive,
          x = [],
          m = this.currentResponsive;
      !u && y && y.rules && y.rules.forEach(function (m) {
        void 0 === m._id && (m._id = c.uniqueKey());
        this.matchResponsiveRule(m, x);
      }, this);
      u = c.merge.apply(0, x.map(function (m) {
        return c.find(y.rules, function (c) {
          return c._id === m;
        }).chartOptions;
      }));
      u.isResponsiveOptions = !0;
      x = x.toString() || void 0;
      x !== (m && m.ruleIds) && (m && this.update(m.undoOptions, n, !0), x ? (m = this.currentOptions(u), m.isResponsiveOptions = !0, this.currentResponsive = {
        ruleIds: x,
        mergedOptions: u,
        undoOptions: m
      }, this.update(u, n, !0)) : this.currentResponsive = void 0);
    };

    n.prototype.matchResponsiveRule = function (c, n) {
      var y = c.condition;
      (y.callback || function () {
        return this.chartWidth <= u(y.maxWidth, Number.MAX_VALUE) && this.chartHeight <= u(y.maxHeight, Number.MAX_VALUE) && this.chartWidth >= u(y.minWidth, 0) && this.chartHeight >= u(y.minHeight, 0);
      }).call(this) && n.push(c._id);
    };

    n.prototype.currentOptions = function (c) {
      function n(c, p, g, b) {
        var a;
        F(c, function (c, f) {
          if (!b && -1 < u.collectionsWithUpdate.indexOf(f)) for (c = z(c), g[f] = [], a = 0; a < c.length; a++) {
            p[f][a] && (g[f][a] = {}, n(c[a], p[f][a], g[f][a], b + 1));
          } else D(c) ? (g[f] = A(c) ? [] : {}, n(c, p[f] || {}, g[f], b + 1)) : g[f] = void 0 === p[f] ? null : p[f];
        });
      }

      var u = this,
          x = {};
      n(c, this.options, x, 0);
      return x;
    };
  });
  N(H, "masters/highcharts.src.js", [H["parts/Globals.js"], H["parts/Utilities.js"]], function (c, n) {
    var A = c.extend;
    A(c, {
      attr: n.attr,
      defined: n.defined,
      erase: n.erase,
      isArray: n.isArray,
      isClass: n.isClass,
      isDOMElement: n.isDOMElement,
      isNumber: n.isNumber,
      isObject: n.isObject,
      isString: n.isString,
      objectEach: n.objectEach,
      pInt: n.pInt,
      splat: n.splat
    });
    return c;
  });
  H["masters/highcharts.src.js"]._modules = H;
  return H["masters/highcharts.src.js"];
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function registerImmediate(handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function onGlobalMessage(event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function registerImmediate(handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function registerImmediate(handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function registerImmediate(handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function registerImmediate(handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/trix/dist/trix.js":
/*!****************************************!*\
  !*** ./node_modules/trix/dist/trix.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Trix 1.2.0
Copyright © 2019 Basecamp, LLC
http://trix-editor.org/
 */
(function () {}).call(this), function () {
  var t;
  null == window.Set && (window.Set = t = function () {
    function t() {
      this.clear();
    }

    return t.prototype.clear = function () {
      return this.values = [];
    }, t.prototype.has = function (t) {
      return -1 !== this.values.indexOf(t);
    }, t.prototype.add = function (t) {
      return this.has(t) || this.values.push(t), this;
    }, t.prototype["delete"] = function (t) {
      var e;
      return -1 === (e = this.values.indexOf(t)) ? !1 : (this.values.splice(e, 1), !0);
    }, t.prototype.forEach = function () {
      var t;
      return (t = this.values).forEach.apply(t, arguments);
    }, t;
  }());
}.call(this), function (t) {
  function e() {}

  function n(t, e) {
    return function () {
      t.apply(e, arguments);
    };
  }

  function i(t) {
    if ("object" != _typeof(this)) throw new TypeError("Promises must be constructed via new");
    if ("function" != typeof t) throw new TypeError("not a function");
    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(t, this);
  }

  function o(t, e) {
    for (; 3 === t._state;) {
      t = t._value;
    }

    return 0 === t._state ? void t._deferreds.push(e) : (t._handled = !0, void h(function () {
      var n = 1 === t._state ? e.onFulfilled : e.onRejected;
      if (null === n) return void (1 === t._state ? r : s)(e.promise, t._value);
      var i;

      try {
        i = n(t._value);
      } catch (o) {
        return void s(e.promise, o);
      }

      r(e.promise, i);
    }));
  }

  function r(t, e) {
    try {
      if (e === t) throw new TypeError("A promise cannot be resolved with itself.");

      if (e && ("object" == _typeof(e) || "function" == typeof e)) {
        var o = e.then;
        if (e instanceof i) return t._state = 3, t._value = e, void a(t);
        if ("function" == typeof o) return void c(n(o, e), t);
      }

      t._state = 1, t._value = e, a(t);
    } catch (r) {
      s(t, r);
    }
  }

  function s(t, e) {
    t._state = 2, t._value = e, a(t);
  }

  function a(t) {
    2 === t._state && 0 === t._deferreds.length && setTimeout(function () {
      t._handled || p(t._value);
    }, 1);

    for (var e = 0, n = t._deferreds.length; n > e; e++) {
      o(t, t._deferreds[e]);
    }

    t._deferreds = null;
  }

  function u(t, e, n) {
    this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n;
  }

  function c(t, e) {
    var n = !1;

    try {
      t(function (t) {
        n || (n = !0, r(e, t));
      }, function (t) {
        n || (n = !0, s(e, t));
      });
    } catch (i) {
      if (n) return;
      n = !0, s(e, i);
    }
  }

  var l = setTimeout,
      h = "function" == typeof setImmediate && setImmediate || function (t) {
    l(t, 1);
  },
      p = function p(t) {
    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
  };

  i.prototype["catch"] = function (t) {
    return this.then(null, t);
  }, i.prototype.then = function (t, n) {
    var r = new i(e);
    return o(this, new u(t, n, r)), r;
  }, i.all = function (t) {
    var e = Array.prototype.slice.call(t);
    return new i(function (t, n) {
      function i(r, s) {
        try {
          if (s && ("object" == _typeof(s) || "function" == typeof s)) {
            var a = s.then;
            if ("function" == typeof a) return void a.call(s, function (t) {
              i(r, t);
            }, n);
          }

          e[r] = s, 0 === --o && t(e);
        } catch (u) {
          n(u);
        }
      }

      if (0 === e.length) return t([]);

      for (var o = e.length, r = 0; r < e.length; r++) {
        i(r, e[r]);
      }
    });
  }, i.resolve = function (t) {
    return t && "object" == _typeof(t) && t.constructor === i ? t : new i(function (e) {
      e(t);
    });
  }, i.reject = function (t) {
    return new i(function (e, n) {
      n(t);
    });
  }, i.race = function (t) {
    return new i(function (e, n) {
      for (var i = 0, o = t.length; o > i; i++) {
        t[i].then(e, n);
      }
    });
  }, i._setImmediateFn = function (t) {
    h = t;
  }, i._setUnhandledRejectionFn = function (t) {
    p = t;
  },  true && module.exports ? module.exports = i : t.Promise || (t.Promise = i);
}(this), function () {
  var t = "object" == _typeof(window.customElements),
      e = "function" == typeof document.registerElement,
      n = t || e;

  n || (
  /**
  * @license
  * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
  * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  * Code distributed by Google as part of the polymer project is also
  * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  "undefined" == typeof WeakMap && !function () {
    var t = Object.defineProperty,
        e = Date.now() % 1e9,
        n = function n() {
      this.name = "__st" + (1e9 * Math.random() >>> 0) + (e++ + "__");
    };

    n.prototype = {
      set: function set(e, n) {
        var i = e[this.name];
        return i && i[0] === e ? i[1] = n : t(e, this.name, {
          value: [e, n],
          writable: !0
        }), this;
      },
      get: function get(t) {
        var e;
        return (e = t[this.name]) && e[0] === t ? e[1] : void 0;
      },
      "delete": function _delete(t) {
        var e = t[this.name];
        return e && e[0] === t ? (e[0] = e[1] = void 0, !0) : !1;
      },
      has: function has(t) {
        var e = t[this.name];
        return e ? e[0] === t : !1;
      }
    }, window.WeakMap = n;
  }(), function (t) {
    function e(t) {
      A.push(t), b || (b = !0, g(i));
    }

    function n(t) {
      return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(t) || t;
    }

    function i() {
      b = !1;
      var t = A;
      A = [], t.sort(function (t, e) {
        return t.uid_ - e.uid_;
      });
      var e = !1;
      t.forEach(function (t) {
        var n = t.takeRecords();
        o(t), n.length && (t.callback_(n, t), e = !0);
      }), e && i();
    }

    function o(t) {
      t.nodes_.forEach(function (e) {
        var n = m.get(e);
        n && n.forEach(function (e) {
          e.observer === t && e.removeTransientObservers();
        });
      });
    }

    function r(t, e) {
      for (var n = t; n; n = n.parentNode) {
        var i = m.get(n);
        if (i) for (var o = 0; o < i.length; o++) {
          var r = i[o],
              s = r.options;

          if (n === t || s.subtree) {
            var a = e(s);
            a && r.enqueue(a);
          }
        }
      }
    }

    function s(t) {
      this.callback_ = t, this.nodes_ = [], this.records_ = [], this.uid_ = ++C;
    }

    function a(t, e) {
      this.type = t, this.target = e, this.addedNodes = [], this.removedNodes = [], this.previousSibling = null, this.nextSibling = null, this.attributeName = null, this.attributeNamespace = null, this.oldValue = null;
    }

    function u(t) {
      var e = new a(t.type, t.target);
      return e.addedNodes = t.addedNodes.slice(), e.removedNodes = t.removedNodes.slice(), e.previousSibling = t.previousSibling, e.nextSibling = t.nextSibling, e.attributeName = t.attributeName, e.attributeNamespace = t.attributeNamespace, e.oldValue = t.oldValue, e;
    }

    function c(t, e) {
      return x = new a(t, e);
    }

    function l(t) {
      return w ? w : (w = u(x), w.oldValue = t, w);
    }

    function h() {
      x = w = void 0;
    }

    function p(t) {
      return t === w || t === x;
    }

    function d(t, e) {
      return t === e ? t : w && p(t) ? w : null;
    }

    function f(t, e, n) {
      this.observer = t, this.target = e, this.options = n, this.transientObservedNodes = [];
    }

    if (!t.JsMutationObserver) {
      var g,
          m = new WeakMap();
      if (/Trident|Edge/.test(navigator.userAgent)) g = setTimeout;else if (window.setImmediate) g = window.setImmediate;else {
        var v = [],
            y = String(Math.random());
        window.addEventListener("message", function (t) {
          if (t.data === y) {
            var e = v;
            v = [], e.forEach(function (t) {
              t();
            });
          }
        }), g = function g(t) {
          v.push(t), window.postMessage(y, "*");
        };
      }
      var b = !1,
          A = [],
          C = 0;
      s.prototype = {
        observe: function observe(t, e) {
          if (t = n(t), !e.childList && !e.attributes && !e.characterData || e.attributeOldValue && !e.attributes || e.attributeFilter && e.attributeFilter.length && !e.attributes || e.characterDataOldValue && !e.characterData) throw new SyntaxError();
          var i = m.get(t);
          i || m.set(t, i = []);

          for (var o, r = 0; r < i.length; r++) {
            if (i[r].observer === this) {
              o = i[r], o.removeListeners(), o.options = e;
              break;
            }
          }

          o || (o = new f(this, t, e), i.push(o), this.nodes_.push(t)), o.addListeners();
        },
        disconnect: function disconnect() {
          this.nodes_.forEach(function (t) {
            for (var e = m.get(t), n = 0; n < e.length; n++) {
              var i = e[n];

              if (i.observer === this) {
                i.removeListeners(), e.splice(n, 1);
                break;
              }
            }
          }, this), this.records_ = [];
        },
        takeRecords: function takeRecords() {
          var t = this.records_;
          return this.records_ = [], t;
        }
      };
      var x, w;
      f.prototype = {
        enqueue: function enqueue(t) {
          var n = this.observer.records_,
              i = n.length;

          if (n.length > 0) {
            var o = n[i - 1],
                r = d(o, t);
            if (r) return void (n[i - 1] = r);
          } else e(this.observer);

          n[i] = t;
        },
        addListeners: function addListeners() {
          this.addListeners_(this.target);
        },
        addListeners_: function addListeners_(t) {
          var e = this.options;
          e.attributes && t.addEventListener("DOMAttrModified", this, !0), e.characterData && t.addEventListener("DOMCharacterDataModified", this, !0), e.childList && t.addEventListener("DOMNodeInserted", this, !0), (e.childList || e.subtree) && t.addEventListener("DOMNodeRemoved", this, !0);
        },
        removeListeners: function removeListeners() {
          this.removeListeners_(this.target);
        },
        removeListeners_: function removeListeners_(t) {
          var e = this.options;
          e.attributes && t.removeEventListener("DOMAttrModified", this, !0), e.characterData && t.removeEventListener("DOMCharacterDataModified", this, !0), e.childList && t.removeEventListener("DOMNodeInserted", this, !0), (e.childList || e.subtree) && t.removeEventListener("DOMNodeRemoved", this, !0);
        },
        addTransientObserver: function addTransientObserver(t) {
          if (t !== this.target) {
            this.addListeners_(t), this.transientObservedNodes.push(t);
            var e = m.get(t);
            e || m.set(t, e = []), e.push(this);
          }
        },
        removeTransientObservers: function removeTransientObservers() {
          var t = this.transientObservedNodes;
          this.transientObservedNodes = [], t.forEach(function (t) {
            this.removeListeners_(t);

            for (var e = m.get(t), n = 0; n < e.length; n++) {
              if (e[n] === this) {
                e.splice(n, 1);
                break;
              }
            }
          }, this);
        },
        handleEvent: function handleEvent(t) {
          switch (t.stopImmediatePropagation(), t.type) {
            case "DOMAttrModified":
              var e = t.attrName,
                  n = t.relatedNode.namespaceURI,
                  i = t.target,
                  o = new c("attributes", i);
              o.attributeName = e, o.attributeNamespace = n;
              var s = t.attrChange === MutationEvent.ADDITION ? null : t.prevValue;
              r(i, function (t) {
                return !t.attributes || t.attributeFilter && t.attributeFilter.length && -1 === t.attributeFilter.indexOf(e) && -1 === t.attributeFilter.indexOf(n) ? void 0 : t.attributeOldValue ? l(s) : o;
              });
              break;

            case "DOMCharacterDataModified":
              var i = t.target,
                  o = c("characterData", i),
                  s = t.prevValue;
              r(i, function (t) {
                return t.characterData ? t.characterDataOldValue ? l(s) : o : void 0;
              });
              break;

            case "DOMNodeRemoved":
              this.addTransientObserver(t.target);

            case "DOMNodeInserted":
              var a,
                  u,
                  p = t.target;
              "DOMNodeInserted" === t.type ? (a = [p], u = []) : (a = [], u = [p]);
              var d = p.previousSibling,
                  f = p.nextSibling,
                  o = c("childList", t.target.parentNode);
              o.addedNodes = a, o.removedNodes = u, o.previousSibling = d, o.nextSibling = f, r(t.relatedNode, function (t) {
                return t.childList ? o : void 0;
              });
          }

          h();
        }
      }, t.JsMutationObserver = s, t.MutationObserver || (t.MutationObserver = s, s._isPolyfilled = !0);
    }
  }(self), function () {
    "use strict";

    if (!window.performance || !window.performance.now) {
      var t = Date.now();
      window.performance = {
        now: function now() {
          return Date.now() - t;
        }
      };
    }

    window.requestAnimationFrame || (window.requestAnimationFrame = function () {
      var t = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
      return t ? function (e) {
        return t(function () {
          e(performance.now());
        });
      } : function (t) {
        return window.setTimeout(t, 1e3 / 60);
      };
    }()), window.cancelAnimationFrame || (window.cancelAnimationFrame = function () {
      return window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function (t) {
        clearTimeout(t);
      };
    }());

    var e = function () {
      var t = document.createEvent("Event");
      return t.initEvent("foo", !0, !0), t.preventDefault(), t.defaultPrevented;
    }();

    if (!e) {
      var n = Event.prototype.preventDefault;

      Event.prototype.preventDefault = function () {
        this.cancelable && (n.call(this), Object.defineProperty(this, "defaultPrevented", {
          get: function get() {
            return !0;
          },
          configurable: !0
        }));
      };
    }

    var i = /Trident/.test(navigator.userAgent);

    if ((!window.CustomEvent || i && "function" != typeof window.CustomEvent) && (window.CustomEvent = function (t, e) {
      e = e || {};
      var n = document.createEvent("CustomEvent");
      return n.initCustomEvent(t, Boolean(e.bubbles), Boolean(e.cancelable), e.detail), n;
    }, window.CustomEvent.prototype = window.Event.prototype), !window.Event || i && "function" != typeof window.Event) {
      var o = window.Event;
      window.Event = function (t, e) {
        e = e || {};
        var n = document.createEvent("Event");
        return n.initEvent(t, Boolean(e.bubbles), Boolean(e.cancelable)), n;
      }, window.Event.prototype = o.prototype;
    }
  }(window.WebComponents), window.CustomElements = window.CustomElements || {
    flags: {}
  }, function (t) {
    var e = t.flags,
        n = [],
        i = function i(t) {
      n.push(t);
    },
        o = function o() {
      n.forEach(function (e) {
        e(t);
      });
    };

    t.addModule = i, t.initializeModules = o, t.hasNative = Boolean(document.registerElement), t.isIE = /Trident/.test(navigator.userAgent), t.useNative = !e.register && t.hasNative && !window.ShadowDOMPolyfill && (!window.HTMLImports || window.HTMLImports.useNative);
  }(window.CustomElements), window.CustomElements.addModule(function (t) {
    function e(t, e) {
      n(t, function (t) {
        return e(t) ? !0 : void i(t, e);
      }), i(t, e);
    }

    function n(t, e, i) {
      var o = t.firstElementChild;
      if (!o) for (o = t.firstChild; o && o.nodeType !== Node.ELEMENT_NODE;) {
        o = o.nextSibling;
      }

      for (; o;) {
        e(o, i) !== !0 && n(o, e, i), o = o.nextElementSibling;
      }

      return null;
    }

    function i(t, n) {
      for (var i = t.shadowRoot; i;) {
        e(i, n), i = i.olderShadowRoot;
      }
    }

    function o(t, e) {
      r(t, e, []);
    }

    function r(t, e, n) {
      if (t = window.wrap(t), !(n.indexOf(t) >= 0)) {
        n.push(t);

        for (var i, o = t.querySelectorAll("link[rel=" + s + "]"), a = 0, u = o.length; u > a && (i = o[a]); a++) {
          i["import"] && r(i["import"], e, n);
        }

        e(t);
      }
    }

    var s = window.HTMLImports ? window.HTMLImports.IMPORT_LINK_TYPE : "none";
    t.forDocumentTree = o, t.forSubtree = e;
  }), window.CustomElements.addModule(function (t) {
    function e(t, e) {
      return n(t, e) || i(t, e);
    }

    function n(e, n) {
      return t.upgrade(e, n) ? !0 : void (n && s(e));
    }

    function i(t, e) {
      b(t, function (t) {
        return n(t, e) ? !0 : void 0;
      });
    }

    function o(t) {
      w.push(t), x || (x = !0, setTimeout(r));
    }

    function r() {
      x = !1;

      for (var t, e = w, n = 0, i = e.length; i > n && (t = e[n]); n++) {
        t();
      }

      w = [];
    }

    function s(t) {
      C ? o(function () {
        a(t);
      }) : a(t);
    }

    function a(t) {
      t.__upgraded__ && !t.__attached && (t.__attached = !0, t.attachedCallback && t.attachedCallback());
    }

    function u(t) {
      c(t), b(t, function (t) {
        c(t);
      });
    }

    function c(t) {
      C ? o(function () {
        l(t);
      }) : l(t);
    }

    function l(t) {
      t.__upgraded__ && t.__attached && (t.__attached = !1, t.detachedCallback && t.detachedCallback());
    }

    function h(t) {
      for (var e = t, n = window.wrap(document); e;) {
        if (e == n) return !0;
        e = e.parentNode || e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host;
      }
    }

    function p(t) {
      if (t.shadowRoot && !t.shadowRoot.__watched) {
        y.dom && console.log("watching shadow-root for: ", t.localName);

        for (var e = t.shadowRoot; e;) {
          g(e), e = e.olderShadowRoot;
        }
      }
    }

    function d(t, n) {
      if (y.dom) {
        var i = n[0];

        if (i && "childList" === i.type && i.addedNodes && i.addedNodes) {
          for (var o = i.addedNodes[0]; o && o !== document && !o.host;) {
            o = o.parentNode;
          }

          var r = o && (o.URL || o._URL || o.host && o.host.localName) || "";
          r = r.split("/?").shift().split("/").pop();
        }

        console.group("mutations (%d) [%s]", n.length, r || "");
      }

      var s = h(t);
      n.forEach(function (t) {
        "childList" === t.type && (E(t.addedNodes, function (t) {
          t.localName && e(t, s);
        }), E(t.removedNodes, function (t) {
          t.localName && u(t);
        }));
      }), y.dom && console.groupEnd();
    }

    function f(t) {
      for (t = window.wrap(t), t || (t = window.wrap(document)); t.parentNode;) {
        t = t.parentNode;
      }

      var e = t.__observer;
      e && (d(t, e.takeRecords()), r());
    }

    function g(t) {
      if (!t.__observer) {
        var e = new MutationObserver(d.bind(this, t));
        e.observe(t, {
          childList: !0,
          subtree: !0
        }), t.__observer = e;
      }
    }

    function m(t) {
      t = window.wrap(t), y.dom && console.group("upgradeDocument: ", t.baseURI.split("/").pop());
      var n = t === window.wrap(document);
      e(t, n), g(t), y.dom && console.groupEnd();
    }

    function v(t) {
      A(t, m);
    }

    var y = t.flags,
        b = t.forSubtree,
        A = t.forDocumentTree,
        C = window.MutationObserver._isPolyfilled && y["throttle-attached"];
    t.hasPolyfillMutations = C, t.hasThrottledAttached = C;
    var x = !1,
        w = [],
        E = Array.prototype.forEach.call.bind(Array.prototype.forEach),
        S = Element.prototype.createShadowRoot;
    S && (Element.prototype.createShadowRoot = function () {
      var t = S.call(this);
      return window.CustomElements.watchShadow(this), t;
    }), t.watchShadow = p, t.upgradeDocumentTree = v, t.upgradeDocument = m, t.upgradeSubtree = i, t.upgradeAll = e, t.attached = s, t.takeRecords = f;
  }), window.CustomElements.addModule(function (t) {
    function e(e, i) {
      if ("template" === e.localName && window.HTMLTemplateElement && HTMLTemplateElement.decorate && HTMLTemplateElement.decorate(e), !e.__upgraded__ && e.nodeType === Node.ELEMENT_NODE) {
        var o = e.getAttribute("is"),
            r = t.getRegisteredDefinition(e.localName) || t.getRegisteredDefinition(o);
        if (r && (o && r.tag == e.localName || !o && !r["extends"])) return n(e, r, i);
      }
    }

    function n(e, n, o) {
      return s.upgrade && console.group("upgrade:", e.localName), n.is && e.setAttribute("is", n.is), i(e, n), e.__upgraded__ = !0, r(e), o && t.attached(e), t.upgradeSubtree(e, o), s.upgrade && console.groupEnd(), e;
    }

    function i(t, e) {
      Object.__proto__ ? t.__proto__ = e.prototype : (o(t, e.prototype, e["native"]), t.__proto__ = e.prototype);
    }

    function o(t, e, n) {
      for (var i = {}, o = e; o !== n && o !== HTMLElement.prototype;) {
        for (var r, s = Object.getOwnPropertyNames(o), a = 0; r = s[a]; a++) {
          i[r] || (Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(o, r)), i[r] = 1);
        }

        o = Object.getPrototypeOf(o);
      }
    }

    function r(t) {
      t.createdCallback && t.createdCallback();
    }

    var s = t.flags;
    t.upgrade = e, t.upgradeWithDefinition = n, t.implementPrototype = i;
  }), window.CustomElements.addModule(function (t) {
    function e(e, i) {
      var u = i || {};
      if (!e) throw new Error("document.registerElement: first argument `name` must not be empty");
      if (e.indexOf("-") < 0) throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '" + String(e) + "'.");
      if (o(e)) throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '" + String(e) + "'. The type name is invalid.");
      if (c(e)) throw new Error("DuplicateDefinitionError: a type with name '" + String(e) + "' is already registered");
      return u.prototype || (u.prototype = Object.create(HTMLElement.prototype)), u.__name = e.toLowerCase(), u["extends"] && (u["extends"] = u["extends"].toLowerCase()), u.lifecycle = u.lifecycle || {}, u.ancestry = r(u["extends"]), s(u), a(u), n(u.prototype), l(u.__name, u), u.ctor = h(u), u.ctor.prototype = u.prototype, u.prototype.constructor = u.ctor, t.ready && m(document), u.ctor;
    }

    function n(t) {
      if (!t.setAttribute._polyfilled) {
        var e = t.setAttribute;

        t.setAttribute = function (t, n) {
          i.call(this, t, n, e);
        };

        var n = t.removeAttribute;
        t.removeAttribute = function (t) {
          i.call(this, t, null, n);
        }, t.setAttribute._polyfilled = !0;
      }
    }

    function i(t, e, n) {
      t = t.toLowerCase();
      var i = this.getAttribute(t);
      n.apply(this, arguments);
      var o = this.getAttribute(t);
      this.attributeChangedCallback && o !== i && this.attributeChangedCallback(t, i, o);
    }

    function o(t) {
      for (var e = 0; e < C.length; e++) {
        if (t === C[e]) return !0;
      }
    }

    function r(t) {
      var e = c(t);
      return e ? r(e["extends"]).concat([e]) : [];
    }

    function s(t) {
      for (var e, n = t["extends"], i = 0; e = t.ancestry[i]; i++) {
        n = e.is && e.tag;
      }

      t.tag = n || t.__name, n && (t.is = t.__name);
    }

    function a(t) {
      if (!Object.__proto__) {
        var e = HTMLElement.prototype;

        if (t.is) {
          var n = document.createElement(t.tag);
          e = Object.getPrototypeOf(n);
        }

        for (var i, o = t.prototype, r = !1; o;) {
          o == e && (r = !0), i = Object.getPrototypeOf(o), i && (o.__proto__ = i), o = i;
        }

        r || console.warn(t.tag + " prototype not found in prototype chain for " + t.is), t["native"] = e;
      }
    }

    function u(t) {
      return y(E(t.tag), t);
    }

    function c(t) {
      return t ? x[t.toLowerCase()] : void 0;
    }

    function l(t, e) {
      x[t] = e;
    }

    function h(t) {
      return function () {
        return u(t);
      };
    }

    function p(t, e, n) {
      return t === w ? d(e, n) : S(t, e);
    }

    function d(t, e) {
      t && (t = t.toLowerCase()), e && (e = e.toLowerCase());
      var n = c(e || t);

      if (n) {
        if (t == n.tag && e == n.is) return new n.ctor();
        if (!e && !n.is) return new n.ctor();
      }

      var i;
      return e ? (i = d(t), i.setAttribute("is", e), i) : (i = E(t), t.indexOf("-") >= 0 && b(i, HTMLElement), i);
    }

    function f(t, e) {
      var n = t[e];

      t[e] = function () {
        var t = n.apply(this, arguments);
        return v(t), t;
      };
    }

    var g,
        m = (t.isIE, t.upgradeDocumentTree),
        v = t.upgradeAll,
        y = t.upgradeWithDefinition,
        b = t.implementPrototype,
        A = t.useNative,
        C = ["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"],
        x = {},
        w = "http://www.w3.org/1999/xhtml",
        E = document.createElement.bind(document),
        S = document.createElementNS.bind(document);
    g = Object.__proto__ || A ? function (t, e) {
      return t instanceof e;
    } : function (t, e) {
      if (t instanceof e) return !0;

      for (var n = t; n;) {
        if (n === e.prototype) return !0;
        n = n.__proto__;
      }

      return !1;
    }, f(Node.prototype, "cloneNode"), f(document, "importNode"), document.registerElement = e, document.createElement = d, document.createElementNS = p, t.registry = x, t["instanceof"] = g, t.reservedTagList = C, t.getRegisteredDefinition = c, document.register = document.registerElement;
  }), function (t) {
    function e() {
      r(window.wrap(document)), window.CustomElements.ready = !0;

      var t = window.requestAnimationFrame || function (t) {
        setTimeout(t, 16);
      };

      t(function () {
        setTimeout(function () {
          window.CustomElements.readyTime = Date.now(), window.HTMLImports && (window.CustomElements.elapsed = window.CustomElements.readyTime - window.HTMLImports.readyTime), document.dispatchEvent(new CustomEvent("WebComponentsReady", {
            bubbles: !0
          }));
        });
      });
    }

    var n = t.useNative,
        i = t.initializeModules;

    if (t.isIE, n) {
      var o = function o() {};

      t.watchShadow = o, t.upgrade = o, t.upgradeAll = o, t.upgradeDocumentTree = o, t.upgradeSubtree = o, t.takeRecords = o, t["instanceof"] = function (t, e) {
        return t instanceof e;
      };
    } else i();

    var r = t.upgradeDocumentTree,
        s = t.upgradeDocument;
    if (window.wrap || (window.ShadowDOMPolyfill ? (window.wrap = window.ShadowDOMPolyfill.wrapIfNeeded, window.unwrap = window.ShadowDOMPolyfill.unwrapIfNeeded) : window.wrap = window.unwrap = function (t) {
      return t;
    }), window.HTMLImports && (window.HTMLImports.__importsParsingHook = function (t) {
      t["import"] && s(wrap(t["import"]));
    }), "complete" === document.readyState || t.flags.eager) e();else if ("interactive" !== document.readyState || window.attachEvent || window.HTMLImports && !window.HTMLImports.ready) {
      var a = window.HTMLImports && !window.HTMLImports.ready ? "HTMLImportsLoaded" : "DOMContentLoaded";
      window.addEventListener(a, e);
    } else e();
  }(window.CustomElements));
}.call(this), function () {}.call(this), function () {
  var t = this;
  (function () {
    (function () {
      this.Trix = {
        VERSION: "1.2.0",
        ZERO_WIDTH_SPACE: "\uFEFF",
        NON_BREAKING_SPACE: "\xa0",
        OBJECT_REPLACEMENT_CHARACTER: "\uFFFC",
        browser: {
          composesExistingText: /Android.*Chrome/.test(navigator.userAgent),
          forcesObjectResizing: /Trident.*rv:11/.test(navigator.userAgent),
          supportsInputEvents: function () {
            var t, e, n, i;
            if ("undefined" == typeof InputEvent) return !1;

            for (i = ["data", "getTargetRanges", "inputType"], t = 0, e = i.length; e > t; t++) {
              if (n = i[t], !(n in InputEvent.prototype)) return !1;
            }

            return !0;
          }()
        },
        config: {}
      };
    }).call(this);
  }).call(t);
  var e = t.Trix;
  (function () {
    (function () {
      e.BasicObject = function () {
        function t() {}

        var e, n, i;
        return t.proxyMethod = function (t) {
          var i, o, r, s, a;
          return r = n(t), i = r.name, s = r.toMethod, a = r.toProperty, o = r.optional, this.prototype[i] = function () {
            var t, n;
            return t = null != s ? o ? "function" == typeof this[s] ? this[s]() : void 0 : this[s]() : null != a ? this[a] : void 0, o ? (n = null != t ? t[i] : void 0, null != n ? e.call(n, t, arguments) : void 0) : (n = t[i], e.call(n, t, arguments));
          };
        }, n = function n(t) {
          var e, n;
          if (!(n = t.match(i))) throw new Error("can't parse @proxyMethod expression: " + t);
          return e = {
            name: n[4]
          }, null != n[2] ? e.toMethod = n[1] : e.toProperty = n[1], null != n[3] && (e.optional = !0), e;
        }, e = Function.prototype.apply, i = /^(.+?)(\(\))?(\?)?\.(.+?)$/, t;
      }();
    }).call(this), function () {
      var t = function t(_t, e) {
        function i() {
          this.constructor = _t;
        }

        for (var o in e) {
          n.call(e, o) && (_t[o] = e[o]);
        }

        return i.prototype = e.prototype, _t.prototype = new i(), _t.__super__ = e.prototype, _t;
      },
          n = {}.hasOwnProperty;

      e.Object = function (n) {
        function i() {
          this.id = ++o;
        }

        var o;
        return t(i, n), o = 0, i.fromJSONString = function (t) {
          return this.fromJSON(JSON.parse(t));
        }, i.prototype.hasSameConstructorAs = function (t) {
          return this.constructor === (null != t ? t.constructor : void 0);
        }, i.prototype.isEqualTo = function (t) {
          return this === t;
        }, i.prototype.inspect = function () {
          var t, e, n;
          return t = function () {
            var t, i, o;
            i = null != (t = this.contentsForInspection()) ? t : {}, o = [];

            for (e in i) {
              n = i[e], o.push(e + "=" + n);
            }

            return o;
          }.call(this), "#<" + this.constructor.name + ":" + this.id + (t.length ? " " + t.join(", ") : "") + ">";
        }, i.prototype.contentsForInspection = function () {}, i.prototype.toJSONString = function () {
          return JSON.stringify(this);
        }, i.prototype.toUTF16String = function () {
          return e.UTF16String.box(this);
        }, i.prototype.getCacheKey = function () {
          return this.id.toString();
        }, i;
      }(e.BasicObject);
    }.call(this), function () {
      e.extend = function (t) {
        var e, n;

        for (e in t) {
          n = t[e], this[e] = n;
        }

        return this;
      };
    }.call(this), function () {
      e.extend({
        defer: function defer(t) {
          return setTimeout(t, 1);
        }
      });
    }.call(this), function () {
      var t, n;
      e.extend({
        normalizeSpaces: function normalizeSpaces(t) {
          return t.replace(RegExp("" + e.ZERO_WIDTH_SPACE, "g"), "").replace(RegExp("" + e.NON_BREAKING_SPACE, "g"), " ");
        },
        normalizeNewlines: function normalizeNewlines(t) {
          return t.replace(/\r\n/g, "\n");
        },
        breakableWhitespacePattern: RegExp("[^\\S" + e.NON_BREAKING_SPACE + "]"),
        squishBreakableWhitespace: function squishBreakableWhitespace(t) {
          return t.replace(RegExp("" + e.breakableWhitespacePattern.source, "g"), " ").replace(/\ {2,}/g, " ");
        },
        escapeHTML: function escapeHTML(t) {
          var e;
          return e = document.createElement("div"), e.textContent = t, e.innerHTML;
        },
        summarizeStringChange: function summarizeStringChange(t, i) {
          var o, r, s, a;
          return t = e.UTF16String.box(t), i = e.UTF16String.box(i), i.length < t.length ? (r = n(t, i), a = r[0], o = r[1]) : (s = n(i, t), o = s[0], a = s[1]), {
            added: o,
            removed: a
          };
        }
      }), n = function n(_n, i) {
        var o, r, s, a, u;
        return _n.isEqualTo(i) ? ["", ""] : (r = t(_n, i), a = r.utf16String.length, s = a ? (u = r.offset, r, o = _n.codepoints.slice(0, u).concat(_n.codepoints.slice(u + a)), t(i, e.UTF16String.fromCodepoints(o))) : t(i, _n), [r.utf16String.toString(), s.utf16String.toString()]);
      }, t = function t(_t2, e) {
        var n, i, o;

        for (n = 0, i = _t2.length, o = e.length; i > n && _t2.charAt(n).isEqualTo(e.charAt(n));) {
          n++;
        }

        for (; i > n + 1 && _t2.charAt(i - 1).isEqualTo(e.charAt(o - 1));) {
          i--, o--;
        }

        return {
          utf16String: _t2.slice(n, i),
          offset: n
        };
      };
    }.call(this), function () {
      e.extend({
        copyObject: function copyObject(t) {
          var e, n, i;
          null == t && (t = {}), n = {};

          for (e in t) {
            i = t[e], n[e] = i;
          }

          return n;
        },
        objectsAreEqual: function objectsAreEqual(t, e) {
          var n, i;
          if (null == t && (t = {}), null == e && (e = {}), Object.keys(t).length !== Object.keys(e).length) return !1;

          for (n in t) {
            if (i = t[n], i !== e[n]) return !1;
          }

          return !0;
        }
      });
    }.call(this), function () {
      var t = [].slice;
      e.extend({
        arraysAreEqual: function arraysAreEqual(t, e) {
          var n, i, o, r;
          if (null == t && (t = []), null == e && (e = []), t.length !== e.length) return !1;

          for (i = n = 0, o = t.length; o > n; i = ++n) {
            if (r = t[i], r !== e[i]) return !1;
          }

          return !0;
        },
        arrayStartsWith: function arrayStartsWith(t, n) {
          return null == t && (t = []), null == n && (n = []), e.arraysAreEqual(t.slice(0, n.length), n);
        },
        spliceArray: function spliceArray() {
          var e, n, i;
          return n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], i = n.slice(0), i.splice.apply(i, e), i;
        },
        summarizeArrayChange: function summarizeArrayChange(t, e) {
          var n, i, o, r, s, a, u, c, l, h, p;

          for (null == t && (t = []), null == e && (e = []), n = [], h = [], o = new Set(), r = 0, u = t.length; u > r; r++) {
            p = t[r], o.add(p);
          }

          for (i = new Set(), s = 0, c = e.length; c > s; s++) {
            p = e[s], i.add(p), o.has(p) || n.push(p);
          }

          for (a = 0, l = t.length; l > a; a++) {
            p = t[a], i.has(p) || h.push(p);
          }

          return {
            added: n,
            removed: h
          };
        }
      });
    }.call(this), function () {
      var t, n, i, o;
      t = null, n = null, o = null, i = null, e.extend({
        getAllAttributeNames: function getAllAttributeNames() {
          return null != t ? t : t = e.getTextAttributeNames().concat(e.getBlockAttributeNames());
        },
        getBlockConfig: function getBlockConfig(t) {
          return e.config.blockAttributes[t];
        },
        getBlockAttributeNames: function getBlockAttributeNames() {
          return null != n ? n : n = Object.keys(e.config.blockAttributes);
        },
        getTextConfig: function getTextConfig(t) {
          return e.config.textAttributes[t];
        },
        getTextAttributeNames: function getTextAttributeNames() {
          return null != o ? o : o = Object.keys(e.config.textAttributes);
        },
        getListAttributeNames: function getListAttributeNames() {
          var t, n;
          return null != i ? i : i = function () {
            var i, o;
            i = e.config.blockAttributes, o = [];

            for (t in i) {
              n = i[t].listAttribute, null != n && o.push(n);
            }

            return o;
          }();
        }
      });
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      t = document.documentElement, n = null != (i = null != (o = null != (r = t.matchesSelector) ? r : t.webkitMatchesSelector) ? o : t.msMatchesSelector) ? i : t.mozMatchesSelector, e.extend({
        handleEvent: function handleEvent(n, i) {
          var o, r, _s, a, u, c, l, h, p, d, f, g;

          return h = null != i ? i : {}, c = h.onElement, u = h.matchingSelector, g = h.withCallback, a = h.inPhase, l = h.preventDefault, d = h.times, r = null != c ? c : t, p = u, o = g, f = "capturing" === a, _s = function s(t) {
            var n;
            return null != d && 0 === --d && _s.destroy(), n = e.findClosestElementFromNode(t.target, {
              matchingSelector: p
            }), null != n && (null != g && g.call(n, t, n), l) ? t.preventDefault() : void 0;
          }, _s.destroy = function () {
            return r.removeEventListener(n, _s, f);
          }, r.addEventListener(n, _s, f), _s;
        },
        handleEventOnce: function handleEventOnce(t, n) {
          return null == n && (n = {}), n.times = 1, e.handleEvent(t, n);
        },
        triggerEvent: function triggerEvent(n, i) {
          var o, r, s, a, u, c, l;
          return l = null != i ? i : {}, c = l.onElement, r = l.bubbles, s = l.cancelable, o = l.attributes, a = null != c ? c : t, r = r !== !1, s = s !== !1, u = document.createEvent("Events"), u.initEvent(n, r, s), null != o && e.extend.call(u, o), a.dispatchEvent(u);
        },
        elementMatchesSelector: function elementMatchesSelector(t, e) {
          return 1 === (null != t ? t.nodeType : void 0) ? n.call(t, e) : void 0;
        },
        findClosestElementFromNode: function findClosestElementFromNode(t, n) {
          var i, o, r;

          for (o = null != n ? n : {}, i = o.matchingSelector, r = o.untilNode; null != t && t.nodeType !== Node.ELEMENT_NODE;) {
            t = t.parentNode;
          }

          if (null != t) {
            if (null == i) return t;
            if (t.closest && null == r) return t.closest(i);

            for (; t && t !== r;) {
              if (e.elementMatchesSelector(t, i)) return t;
              t = t.parentNode;
            }
          }
        },
        findInnerElement: function findInnerElement(t) {
          for (; null != t ? t.firstElementChild : void 0;) {
            t = t.firstElementChild;
          }

          return t;
        },
        innerElementIsActive: function innerElementIsActive(t) {
          return document.activeElement !== t && e.elementContainsNode(t, document.activeElement);
        },
        elementContainsNode: function elementContainsNode(t, e) {
          if (t && e) for (; e;) {
            if (e === t) return !0;
            e = e.parentNode;
          }
        },
        findNodeFromContainerAndOffset: function findNodeFromContainerAndOffset(t, e) {
          var n;
          if (t) return t.nodeType === Node.TEXT_NODE ? t : 0 === e ? null != (n = t.firstChild) ? n : t : t.childNodes.item(e - 1);
        },
        findElementFromContainerAndOffset: function findElementFromContainerAndOffset(t, n) {
          var i;
          return i = e.findNodeFromContainerAndOffset(t, n), e.findClosestElementFromNode(i);
        },
        findChildIndexOfNode: function findChildIndexOfNode(t) {
          var e;

          if (null != t ? t.parentNode : void 0) {
            for (e = 0; t = t.previousSibling;) {
              e++;
            }

            return e;
          }
        },
        removeNode: function removeNode(t) {
          var e;
          return null != t && null != (e = t.parentNode) ? e.removeChild(t) : void 0;
        },
        walkTree: function walkTree(t, e) {
          var n, i, o, r, s;
          return o = null != e ? e : {}, i = o.onlyNodesOfType, r = o.usingFilter, n = o.expandEntityReferences, s = function () {
            switch (i) {
              case "element":
                return NodeFilter.SHOW_ELEMENT;

              case "text":
                return NodeFilter.SHOW_TEXT;

              case "comment":
                return NodeFilter.SHOW_COMMENT;

              default:
                return NodeFilter.SHOW_ALL;
            }
          }(), document.createTreeWalker(t, s, null != r ? r : null, n === !0);
        },
        tagName: function tagName(t) {
          var e;
          return null != t && null != (e = t.tagName) ? e.toLowerCase() : void 0;
        },
        makeElement: function makeElement(t, e) {
          var n, i, o, r, s, a, u, c, l, h;

          if (null == e && (e = {}), "object" == _typeof(t) ? (e = t, t = e.tagName) : e = {
            attributes: e
          }, i = document.createElement(t), null != e.editable && (null == e.attributes && (e.attributes = {}), e.attributes.contenteditable = e.editable), e.attributes) {
            a = e.attributes;

            for (r in a) {
              h = a[r], i.setAttribute(r, h);
            }
          }

          if (e.style) {
            u = e.style;

            for (r in u) {
              h = u[r], i.style[r] = h;
            }
          }

          if (e.data) {
            c = e.data;

            for (r in c) {
              h = c[r], i.dataset[r] = h;
            }
          }

          if (e.className) for (l = e.className.split(" "), o = 0, s = l.length; s > o; o++) {
            n = l[o], i.classList.add(n);
          }
          return e.textContent && (i.textContent = e.textContent), i;
        },
        getBlockTagNames: function getBlockTagNames() {
          var t, n;
          return null != e.blockTagNames ? e.blockTagNames : e.blockTagNames = function () {
            var i, o;
            i = e.config.blockAttributes, o = [];

            for (t in i) {
              n = i[t].tagName, n && o.push(n);
            }

            return o;
          }();
        },
        nodeIsBlockContainer: function nodeIsBlockContainer(t) {
          return e.nodeIsBlockStartComment(null != t ? t.firstChild : void 0);
        },
        nodeProbablyIsBlockContainer: function nodeProbablyIsBlockContainer(t) {
          var n, i;
          return n = e.tagName(t), s.call(e.getBlockTagNames(), n) >= 0 && (i = e.tagName(t.firstChild), s.call(e.getBlockTagNames(), i) < 0);
        },
        nodeIsBlockStart: function nodeIsBlockStart(t, n) {
          var i;
          return i = (null != n ? n : {
            strict: !0
          }).strict, i ? e.nodeIsBlockStartComment(t) : e.nodeIsBlockStartComment(t) || !e.nodeIsBlockStartComment(t.firstChild) && e.nodeProbablyIsBlockContainer(t);
        },
        nodeIsBlockStartComment: function nodeIsBlockStartComment(t) {
          return e.nodeIsCommentNode(t) && "block" === (null != t ? t.data : void 0);
        },
        nodeIsCommentNode: function nodeIsCommentNode(t) {
          return (null != t ? t.nodeType : void 0) === Node.COMMENT_NODE;
        },
        nodeIsCursorTarget: function nodeIsCursorTarget(t, n) {
          var i;
          return i = (null != n ? n : {}).name, t ? e.nodeIsTextNode(t) ? t.data === e.ZERO_WIDTH_SPACE ? i ? t.parentNode.dataset.trixCursorTarget === i : !0 : void 0 : e.nodeIsCursorTarget(t.firstChild) : void 0;
        },
        nodeIsAttachmentElement: function nodeIsAttachmentElement(t) {
          return e.elementMatchesSelector(t, e.AttachmentView.attachmentSelector);
        },
        nodeIsEmptyTextNode: function nodeIsEmptyTextNode(t) {
          return e.nodeIsTextNode(t) && "" === (null != t ? t.data : void 0);
        },
        nodeIsTextNode: function nodeIsTextNode(t) {
          return (null != t ? t.nodeType : void 0) === Node.TEXT_NODE;
        }
      });
    }.call(this), function () {
      var t, n, i, o, r;
      t = e.copyObject, o = e.objectsAreEqual, e.extend({
        normalizeRange: i = function i(t) {
          var e;
          if (null != t) return Array.isArray(t) || (t = [t, t]), [n(t[0]), n(null != (e = t[1]) ? e : t[0])];
        },
        rangeIsCollapsed: function rangeIsCollapsed(t) {
          var e, n, o;
          if (null != t) return n = i(t), o = n[0], e = n[1], r(o, e);
        },
        rangesAreEqual: function rangesAreEqual(t, e) {
          var n, o, s, a, u, c;
          if (null != t && null != e) return s = i(t), o = s[0], n = s[1], a = i(e), c = a[0], u = a[1], r(o, c) && r(n, u);
        }
      }), n = function n(e) {
        return "number" == typeof e ? e : t(e);
      }, r = function r(t, e) {
        return "number" == typeof t ? t === e : o(t, e);
      };
    }.call(this), function () {
      var t, n, i, o, r;
      e.registerElement = function (t, e) {
        var s, a;
        return null == e && (e = {}), t = t.toLowerCase(), e = r(e), a = o(e), (s = a.defaultCSS) && (delete a.defaultCSS, n(s, t)), i(t, a);
      }, n = function n(e, _n2) {
        var i;
        return i = t(_n2), i.textContent = e.replace(/%t/g, _n2);
      }, t = function t(_t3) {
        var e;
        return e = document.createElement("style"), e.setAttribute("type", "text/css"), e.setAttribute("data-tag-name", _t3.toLowerCase()), document.head.insertBefore(e, document.head.firstChild), e;
      }, o = function o(t) {
        var e, n, i;
        n = {};

        for (e in t) {
          i = t[e], n[e] = "function" == typeof i ? {
            value: i
          } : i;
        }

        return n;
      }, r = function () {
        var t;
        return t = function t(_t4) {
          var e, n, i, o, r;

          for (e = {}, r = ["initialize", "connect", "disconnect"], n = 0, o = r.length; o > n; n++) {
            i = r[n], e[i] = _t4[i], delete _t4[i];
          }

          return e;
        }, window.customElements ? function (e) {
          var n, i, o, r, s;
          return s = t(e), o = s.initialize, n = s.connect, i = s.disconnect, o && (r = n, n = function n() {
            return this.initialized || (this.initialized = !0, o.call(this)), null != r ? r.call(this) : void 0;
          }), n && (e.connectedCallback = n), i && (e.disconnectedCallback = i), e;
        } : function (e) {
          var n, i, o, r;
          return r = t(e), o = r.initialize, n = r.connect, i = r.disconnect, o && (e.createdCallback = o), n && (e.attachedCallback = n), i && (e.detachedCallback = i), e;
        };
      }(), i = function () {
        return window.customElements ? function (t, e) {
          var _n3;

          return _n3 = function n() {
            return Reflect.construct(HTMLElement, [], _n3);
          }, _n3.prototype = Object.create(HTMLElement.prototype, e), window.customElements.define(t, _n3), _n3;
        } : function (t, e) {
          var n, i;
          return i = Object.create(HTMLElement.prototype, e), n = document.registerElement(t, {
            prototype: i
          }), Object.defineProperty(i, "constructor", {
            value: n
          }), n;
        };
      }();
    }.call(this), function () {
      var t, n;
      e.extend({
        getDOMSelection: function getDOMSelection() {
          var t;
          return t = window.getSelection(), t.rangeCount > 0 ? t : void 0;
        },
        getDOMRange: function getDOMRange() {
          var n, i;
          return (n = null != (i = e.getDOMSelection()) ? i.getRangeAt(0) : void 0) && !t(n) ? n : void 0;
        },
        setDOMRange: function setDOMRange(t) {
          var n;
          return n = window.getSelection(), n.removeAllRanges(), n.addRange(t), e.selectionChangeObserver.update();
        }
      }), t = function t(_t5) {
        return n(_t5.startContainer) || n(_t5.endContainer);
      }, n = function n(t) {
        return !Object.getPrototypeOf(t);
      };
    }.call(this), function () {
      var t;
      t = {
        "application/x-trix-feature-detection": "test"
      }, e.extend({
        dataTransferIsPlainText: function dataTransferIsPlainText(t) {
          var e, n, i;
          return i = t.getData("text/plain"), n = t.getData("text/html"), i && n ? (e = document.createElement("div"), e.innerHTML = n, e.textContent === i ? !e.querySelector(":not(meta)") : void 0) : null != i ? i.length : void 0;
        },
        dataTransferIsWritable: function dataTransferIsWritable(e) {
          var n, i;

          if (null != (null != e ? e.setData : void 0)) {
            for (n in t) {
              if (i = t[n], !function () {
                try {
                  return e.setData(n, i), e.getData(n) === i;
                } catch (t) {}
              }()) return;
            }

            return !0;
          }
        },
        keyEventIsKeyboardCommand: function () {
          return /Mac|^iP/.test(navigator.platform) ? function (t) {
            return t.metaKey;
          } : function (t) {
            return t.ctrlKey;
          };
        }()
      });
    }.call(this), function () {}.call(this), function () {
      var t,
          n = function n(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var o in e) {
          i.call(e, o) && (t[o] = e[o]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          i = {}.hasOwnProperty;

      t = e.arraysAreEqual, e.Hash = function (i) {
        function o(t) {
          null == t && (t = {}), this.values = s(t), o.__super__.constructor.apply(this, arguments);
        }

        var r, s, a, u, c;
        return n(o, i), o.fromCommonAttributesOfObjects = function (t) {
          var e, n, i, o, s, a;
          if (null == t && (t = []), !t.length) return new this();

          for (e = r(t[0]), i = e.getKeys(), a = t.slice(1), n = 0, o = a.length; o > n; n++) {
            s = a[n], i = e.getKeysCommonToHash(r(s)), e = e.slice(i);
          }

          return e;
        }, o.box = function (t) {
          return r(t);
        }, o.prototype.add = function (t, e) {
          return this.merge(u(t, e));
        }, o.prototype.remove = function (t) {
          return new e.Hash(s(this.values, t));
        }, o.prototype.get = function (t) {
          return this.values[t];
        }, o.prototype.has = function (t) {
          return t in this.values;
        }, o.prototype.merge = function (t) {
          return new e.Hash(a(this.values, c(t)));
        }, o.prototype.slice = function (t) {
          var n, i, o, r;

          for (r = {}, n = 0, o = t.length; o > n; n++) {
            i = t[n], this.has(i) && (r[i] = this.values[i]);
          }

          return new e.Hash(r);
        }, o.prototype.getKeys = function () {
          return Object.keys(this.values);
        }, o.prototype.getKeysCommonToHash = function (t) {
          var e, n, i, o, s;

          for (t = r(t), o = this.getKeys(), s = [], e = 0, i = o.length; i > e; e++) {
            n = o[e], this.values[n] === t.values[n] && s.push(n);
          }

          return s;
        }, o.prototype.isEqualTo = function (e) {
          return t(this.toArray(), r(e).toArray());
        }, o.prototype.isEmpty = function () {
          return 0 === this.getKeys().length;
        }, o.prototype.toArray = function () {
          var t, e, n;
          return (null != this.array ? this.array : this.array = function () {
            var i;
            e = [], i = this.values;

            for (t in i) {
              n = i[t], e.push(t, n);
            }

            return e;
          }.call(this)).slice(0);
        }, o.prototype.toObject = function () {
          return s(this.values);
        }, o.prototype.toJSON = function () {
          return this.toObject();
        }, o.prototype.contentsForInspection = function () {
          return {
            values: JSON.stringify(this.values)
          };
        }, u = function u(t, e) {
          var n;
          return n = {}, n[t] = e, n;
        }, a = function a(t, e) {
          var n, i, o;
          i = s(t);

          for (n in e) {
            o = e[n], i[n] = o;
          }

          return i;
        }, s = function s(t, e) {
          var n, i, o, r, s;

          for (r = {}, s = Object.keys(t).sort(), n = 0, o = s.length; o > n; n++) {
            i = s[n], i !== e && (r[i] = t[i]);
          }

          return r;
        }, r = function r(t) {
          return t instanceof e.Hash ? t : new e.Hash(t);
        }, c = function c(t) {
          return t instanceof e.Hash ? t.values : t;
        }, o;
      }(e.Object);
    }.call(this), function () {
      e.ObjectGroup = function () {
        function t(t, e) {
          var n, i;
          this.objects = null != t ? t : [], i = e.depth, n = e.asTree, n && (this.depth = i, this.objects = this.constructor.groupObjects(this.objects, {
            asTree: n,
            depth: this.depth + 1
          }));
        }

        return t.groupObjects = function (t, e) {
          var n, i, o, r, s, a, u, c, l;

          for (null == t && (t = []), l = null != e ? e : {}, o = l.depth, n = l.asTree, n && null == o && (o = 0), c = [], s = 0, a = t.length; a > s; s++) {
            if (u = t[s], r) {
              if (("function" == typeof u.canBeGrouped ? u.canBeGrouped(o) : void 0) && ("function" == typeof (i = r[r.length - 1]).canBeGroupedWith ? i.canBeGroupedWith(u, o) : void 0)) {
                r.push(u);
                continue;
              }

              c.push(new this(r, {
                depth: o,
                asTree: n
              })), r = null;
            }

            ("function" == typeof u.canBeGrouped ? u.canBeGrouped(o) : void 0) ? r = [u] : c.push(u);
          }

          return r && c.push(new this(r, {
            depth: o,
            asTree: n
          })), c;
        }, t.prototype.getObjects = function () {
          return this.objects;
        }, t.prototype.getDepth = function () {
          return this.depth;
        }, t.prototype.getCacheKey = function () {
          var t, e, n, i, o;

          for (e = ["objectGroup"], o = this.getObjects(), t = 0, n = o.length; n > t; t++) {
            i = o[t], e.push(i.getCacheKey());
          }

          return e.join("/");
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t6, e) {
        function i() {
          this.constructor = _t6;
        }

        for (var o in e) {
          n.call(e, o) && (_t6[o] = e[o]);
        }

        return i.prototype = e.prototype, _t6.prototype = new i(), _t6.__super__ = e.prototype, _t6;
      },
          n = {}.hasOwnProperty;

      e.ObjectMap = function (e) {
        function n(t) {
          var e, n, i, o, r;

          for (null == t && (t = []), this.objects = {}, i = 0, o = t.length; o > i; i++) {
            r = t[i], n = JSON.stringify(r), null == (e = this.objects)[n] && (e[n] = r);
          }
        }

        return t(n, e), n.prototype.find = function (t) {
          var e;
          return e = JSON.stringify(t), this.objects[e];
        }, n;
      }(e.BasicObject);
    }.call(this), function () {
      e.ElementStore = function () {
        function t(t) {
          this.reset(t);
        }

        var e;
        return t.prototype.add = function (t) {
          var n;
          return n = e(t), this.elements[n] = t;
        }, t.prototype.remove = function (t) {
          var n, i;
          return n = e(t), (i = this.elements[n]) ? (delete this.elements[n], i) : void 0;
        }, t.prototype.reset = function (t) {
          var e, n, i;

          for (null == t && (t = []), this.elements = {}, n = 0, i = t.length; i > n; n++) {
            e = t[n], this.add(e);
          }

          return t;
        }, e = function e(t) {
          return t.dataset.trixStoreKey;
        }, t;
      }();
    }.call(this), function () {}.call(this), function () {
      var t = function t(_t7, e) {
        function i() {
          this.constructor = _t7;
        }

        for (var o in e) {
          n.call(e, o) && (_t7[o] = e[o]);
        }

        return i.prototype = e.prototype, _t7.prototype = new i(), _t7.__super__ = e.prototype, _t7;
      },
          n = {}.hasOwnProperty;

      e.Operation = function (e) {
        function n() {
          return n.__super__.constructor.apply(this, arguments);
        }

        return t(n, e), n.prototype.isPerforming = function () {
          return this.performing === !0;
        }, n.prototype.hasPerformed = function () {
          return this.performed === !0;
        }, n.prototype.hasSucceeded = function () {
          return this.performed && this.succeeded;
        }, n.prototype.hasFailed = function () {
          return this.performed && !this.succeeded;
        }, n.prototype.getPromise = function () {
          return null != this.promise ? this.promise : this.promise = new Promise(function (t) {
            return function (e, n) {
              return t.performing = !0, t.perform(function (i, o) {
                return t.succeeded = i, t.performing = !1, t.performed = !0, t.succeeded ? e(o) : n(o);
              });
            };
          }(this));
        }, n.prototype.perform = function (t) {
          return t(!1);
        }, n.prototype.release = function () {
          var t;
          return null != (t = this.promise) && "function" == typeof t.cancel && t.cancel(), this.promise = null, this.performing = null, this.performed = null, this.succeeded = null;
        }, n.proxyMethod("getPromise().then"), n.proxyMethod("getPromise().catch"), n;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s = function s(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          a.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          a = {}.hasOwnProperty;

      e.UTF16String = function (t) {
        function e(t, e) {
          this.ucs2String = t, this.codepoints = e, this.length = this.codepoints.length, this.ucs2Length = this.ucs2String.length;
        }

        return s(e, t), e.box = function (t) {
          return null == t && (t = ""), t instanceof this ? t : this.fromUCS2String(null != t ? t.toString() : void 0);
        }, e.fromUCS2String = function (t) {
          return new this(t, o(t));
        }, e.fromCodepoints = function (t) {
          return new this(r(t), t);
        }, e.prototype.offsetToUCS2Offset = function (t) {
          return r(this.codepoints.slice(0, Math.max(0, t))).length;
        }, e.prototype.offsetFromUCS2Offset = function (t) {
          return o(this.ucs2String.slice(0, Math.max(0, t))).length;
        }, e.prototype.slice = function () {
          var t;
          return this.constructor.fromCodepoints((t = this.codepoints).slice.apply(t, arguments));
        }, e.prototype.charAt = function (t) {
          return this.slice(t, t + 1);
        }, e.prototype.isEqualTo = function (t) {
          return this.constructor.box(t).ucs2String === this.ucs2String;
        }, e.prototype.toJSON = function () {
          return this.ucs2String;
        }, e.prototype.getCacheKey = function () {
          return this.ucs2String;
        }, e.prototype.toString = function () {
          return this.ucs2String;
        }, e;
      }(e.BasicObject), t = 1 === ("function" == typeof Array.from ? Array.from("\uD83D\uDC7C").length : void 0), n = null != ("function" == typeof " ".codePointAt ? " ".codePointAt(0) : void 0), i = " \uD83D\uDC7C" === ("function" == typeof String.fromCodePoint ? String.fromCodePoint(32, 128124) : void 0), o = t && n ? function (t) {
        return Array.from(t).map(function (t) {
          return t.codePointAt(0);
        });
      } : function (t) {
        var e, n, i, o, r;

        for (o = [], e = 0, i = t.length; i > e;) {
          r = t.charCodeAt(e++), r >= 55296 && 56319 >= r && i > e && (n = t.charCodeAt(e++), 56320 === (64512 & n) ? r = ((1023 & r) << 10) + (1023 & n) + 65536 : e--), o.push(r);
        }

        return o;
      }, r = i ? function (t) {
        return String.fromCodePoint.apply(String, t);
      } : function (t) {
        var e, n, i;
        return e = function () {
          var e, o, r;

          for (r = [], e = 0, o = t.length; o > e; e++) {
            i = t[e], n = "", i > 65535 && (i -= 65536, n += String.fromCharCode(i >>> 10 & 1023 | 55296), i = 56320 | 1023 & i), r.push(n + String.fromCharCode(i));
          }

          return r;
        }(), e.join("");
      };
    }.call(this), function () {}.call(this), function () {}.call(this), function () {
      e.config.lang = {
        attachFiles: "Attach Files",
        bold: "Bold",
        bullets: "Bullets",
        "byte": "Byte",
        bytes: "Bytes",
        captionPlaceholder: "Add a caption\u2026",
        code: "Code",
        heading1: "Heading",
        indent: "Increase Level",
        italic: "Italic",
        link: "Link",
        numbers: "Numbers",
        outdent: "Decrease Level",
        quote: "Quote",
        redo: "Redo",
        remove: "Remove",
        strike: "Strikethrough",
        undo: "Undo",
        unlink: "Unlink",
        url: "URL",
        urlPlaceholder: "Enter a URL\u2026",
        GB: "GB",
        KB: "KB",
        MB: "MB",
        PB: "PB",
        TB: "TB"
      };
    }.call(this), function () {
      e.config.css = {
        attachment: "attachment",
        attachmentCaption: "attachment__caption",
        attachmentCaptionEditor: "attachment__caption-editor",
        attachmentMetadata: "attachment__metadata",
        attachmentMetadataContainer: "attachment__metadata-container",
        attachmentName: "attachment__name",
        attachmentProgress: "attachment__progress",
        attachmentSize: "attachment__size",
        attachmentToolbar: "attachment__toolbar",
        attachmentGallery: "attachment-gallery"
      };
    }.call(this), function () {
      var t;
      e.config.blockAttributes = t = {
        "default": {
          tagName: "div",
          parse: !1
        },
        quote: {
          tagName: "blockquote",
          nestable: !0
        },
        heading1: {
          tagName: "h1",
          terminal: !0,
          breakOnReturn: !0,
          group: !1
        },
        code: {
          tagName: "pre",
          terminal: !0,
          text: {
            plaintext: !0
          }
        },
        bulletList: {
          tagName: "ul",
          parse: !1
        },
        bullet: {
          tagName: "li",
          listAttribute: "bulletList",
          group: !1,
          nestable: !0,
          test: function test(n) {
            return e.tagName(n.parentNode) === t[this.listAttribute].tagName;
          }
        },
        numberList: {
          tagName: "ol",
          parse: !1
        },
        number: {
          tagName: "li",
          listAttribute: "numberList",
          group: !1,
          nestable: !0,
          test: function test(n) {
            return e.tagName(n.parentNode) === t[this.listAttribute].tagName;
          }
        },
        attachmentGallery: {
          tagName: "div",
          exclusive: !0,
          terminal: !0,
          parse: !1,
          group: !1
        }
      };
    }.call(this), function () {
      var t, n;
      t = e.config.lang, n = [t.bytes, t.KB, t.MB, t.GB, t.TB, t.PB], e.config.fileSize = {
        prefix: "IEC",
        precision: 2,
        formatter: function formatter(e) {
          var i, o, r, s, a;

          switch (e) {
            case 0:
              return "0 " + t.bytes;

            case 1:
              return "1 " + t["byte"];

            default:
              return i = function () {
                switch (this.prefix) {
                  case "SI":
                    return 1e3;

                  case "IEC":
                    return 1024;
                }
              }.call(this), o = Math.floor(Math.log(e) / Math.log(i)), r = e / Math.pow(i, o), s = r.toFixed(this.precision), a = s.replace(/0*$/, "").replace(/\.$/, ""), a + " " + n[o];
          }
        }
      };
    }.call(this), function () {
      e.config.textAttributes = {
        bold: {
          tagName: "strong",
          inheritable: !0,
          parser: function parser(t) {
            var e;
            return e = window.getComputedStyle(t), "bold" === e.fontWeight || e.fontWeight >= 600;
          }
        },
        italic: {
          tagName: "em",
          inheritable: !0,
          parser: function parser(t) {
            var e;
            return e = window.getComputedStyle(t), "italic" === e.fontStyle;
          }
        },
        href: {
          groupTagName: "a",
          parser: function parser(t) {
            var n, i, o;
            return n = e.AttachmentView.attachmentSelector, o = "a:not(" + n + ")", (i = e.findClosestElementFromNode(t, {
              matchingSelector: o
            })) ? i.getAttribute("href") : void 0;
          }
        },
        strike: {
          tagName: "del",
          inheritable: !0
        },
        frozen: {
          style: {
            backgroundColor: "highlight"
          }
        }
      };
    }.call(this), function () {
      var t, n, i, o, r;
      r = "[data-trix-serialize=false]", o = ["contenteditable", "data-trix-id", "data-trix-store-key", "data-trix-mutable", "data-trix-placeholder", "tabindex"], n = "data-trix-serialized-attributes", i = "[" + n + "]", t = new RegExp("<!--block-->", "g"), e.extend({
        serializers: {
          "application/json": function applicationJson(t) {
            var n;
            if (t instanceof e.Document) n = t;else {
              if (!(t instanceof HTMLElement)) throw new Error("unserializable object");
              n = e.Document.fromHTML(t.innerHTML);
            }
            return n.toSerializableDocument().toJSONString();
          },
          "text/html": function textHtml(s) {
            var a, u, c, l, h, p, d, f, g, m, v, y, b, A, C, x, w;
            if (s instanceof e.Document) l = e.DocumentView.render(s);else {
              if (!(s instanceof HTMLElement)) throw new Error("unserializable object");
              l = s.cloneNode(!0);
            }

            for (A = l.querySelectorAll(r), h = 0, g = A.length; g > h; h++) {
              c = A[h], e.removeNode(c);
            }

            for (p = 0, m = o.length; m > p; p++) {
              for (a = o[p], C = l.querySelectorAll("[" + a + "]"), d = 0, v = C.length; v > d; d++) {
                c = C[d], c.removeAttribute(a);
              }
            }

            for (x = l.querySelectorAll(i), f = 0, y = x.length; y > f; f++) {
              c = x[f];

              try {
                u = JSON.parse(c.getAttribute(n)), c.removeAttribute(n);

                for (b in u) {
                  w = u[b], c.setAttribute(b, w);
                }
              } catch (E) {}
            }

            return l.innerHTML.replace(t, "");
          }
        },
        deserializers: {
          "application/json": function applicationJson(t) {
            return e.Document.fromJSONString(t);
          },
          "text/html": function textHtml(t) {
            return e.Document.fromHTML(t);
          }
        },
        serializeToContentType: function serializeToContentType(t, n) {
          var i;
          if (i = e.serializers[n]) return i(t);
          throw new Error("unknown content type: " + n);
        },
        deserializeFromContentType: function deserializeFromContentType(t, n) {
          var i;
          if (i = e.deserializers[n]) return i(t);
          throw new Error("unknown content type: " + n);
        }
      });
    }.call(this), function () {
      var t;
      t = e.config.lang, e.config.toolbar = {
        getDefaultHTML: function getDefaultHTML() {
          return '<div class="trix-button-row">\n  <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="' + t.bold + '" tabindex="-1">' + t.bold + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="' + t.italic + '" tabindex="-1">' + t.italic + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="' + t.strike + '" tabindex="-1">' + t.strike + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="' + t.link + '" tabindex="-1">' + t.link + '</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="' + t.heading1 + '" tabindex="-1">' + t.heading1 + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="' + t.quote + '" tabindex="-1">' + t.quote + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="' + t.code + '" tabindex="-1">' + t.code + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="' + t.bullets + '" tabindex="-1">' + t.bullets + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="' + t.numbers + '" tabindex="-1">' + t.numbers + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="' + t.outdent + '" tabindex="-1">' + t.outdent + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="' + t.indent + '" tabindex="-1">' + t.indent + '</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="' + t.attachFiles + '" tabindex="-1">' + t.attachFiles + '</button>\n  </span>\n\n  <span class="trix-button-group-spacer"></span>\n\n  <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="' + t.undo + '" tabindex="-1">' + t.undo + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="' + t.redo + '" tabindex="-1">' + t.redo + '</button>\n  </span>\n</div>\n\n<div class="trix-dialogs" data-trix-dialogs>\n  <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">\n    <div class="trix-dialog__link-fields">\n      <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="' + t.urlPlaceholder + '" aria-label="' + t.url + '" required data-trix-input>\n      <div class="trix-button-group">\n        <input type="button" class="trix-button trix-button--dialog" value="' + t.link + '" data-trix-method="setAttribute">\n        <input type="button" class="trix-button trix-button--dialog" value="' + t.unlink + '" data-trix-method="removeAttribute">\n      </div>\n    </div>\n  </div>\n</div>';
        }
      };
    }.call(this), function () {
      e.config.undoInterval = 5e3;
    }.call(this), function () {
      e.config.attachments = {
        preview: {
          presentation: "gallery",
          caption: {
            name: !0,
            size: !0
          }
        },
        file: {
          caption: {
            size: !0
          }
        }
      };
    }.call(this), function () {
      e.config.keyNames = {
        8: "backspace",
        9: "tab",
        13: "return",
        27: "escape",
        37: "left",
        39: "right",
        46: "delete",
        68: "d",
        72: "h",
        79: "o"
      };
    }.call(this), function () {
      e.config.input = {
        level2Enabled: !0,
        getLevel: function getLevel() {
          return this.level2Enabled && e.browser.supportsInputEvents ? 2 : 0;
        },
        pickFiles: function pickFiles(t) {
          var n;
          return n = e.makeElement("input", {
            type: "file",
            multiple: !0,
            hidden: !0,
            id: this.fileInputId
          }), n.addEventListener("change", function () {
            return t(n.files), e.removeNode(n);
          }), e.removeNode(document.getElementById(this.fileInputId)), document.body.appendChild(n), n.click();
        },
        fileInputId: "trix-file-input-" + Date.now().toString(16)
      };
    }.call(this), function () {}.call(this), function () {
      e.registerElement("trix-toolbar", {
        defaultCSS: "%t {\n  display: block;\n}\n\n%t {\n  white-space: nowrap;\n}\n\n%t [data-trix-dialog] {\n  display: none;\n}\n\n%t [data-trix-dialog][data-trix-active] {\n  display: block;\n}\n\n%t [data-trix-dialog] [data-trix-validate]:invalid {\n  background-color: #ffdddd;\n}",
        initialize: function initialize() {
          return "" === this.innerHTML ? this.innerHTML = e.config.toolbar.getDefaultHTML() : void 0;
        }
      });
    }.call(this), function () {
      var t = function t(_t8, e) {
        function i() {
          this.constructor = _t8;
        }

        for (var o in e) {
          n.call(e, o) && (_t8[o] = e[o]);
        }

        return i.prototype = e.prototype, _t8.prototype = new i(), _t8.__super__ = e.prototype, _t8;
      },
          n = {}.hasOwnProperty,
          i = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      e.ObjectView = function (n) {
        function o(t, e) {
          this.object = t, this.options = null != e ? e : {}, this.childViews = [], this.rootView = this;
        }

        return t(o, n), o.prototype.getNodes = function () {
          var t, e, n, i, o;

          for (null == this.nodes && (this.nodes = this.createNodes()), i = this.nodes, o = [], t = 0, e = i.length; e > t; t++) {
            n = i[t], o.push(n.cloneNode(!0));
          }

          return o;
        }, o.prototype.invalidate = function () {
          var t;
          return this.nodes = null, null != (t = this.parentView) ? t.invalidate() : void 0;
        }, o.prototype.invalidateViewForObject = function (t) {
          var e;
          return null != (e = this.findViewForObject(t)) ? e.invalidate() : void 0;
        }, o.prototype.findOrCreateCachedChildView = function (t, e) {
          var n;
          return (n = this.getCachedViewForObject(e)) ? this.recordChildView(n) : (n = this.createChildView.apply(this, arguments), this.cacheViewForObject(n, e)), n;
        }, o.prototype.createChildView = function (t, n, i) {
          var o;
          return null == i && (i = {}), n instanceof e.ObjectGroup && (i.viewClass = t, t = e.ObjectGroupView), o = new t(n, i), this.recordChildView(o);
        }, o.prototype.recordChildView = function (t) {
          return t.parentView = this, t.rootView = this.rootView, i.call(this.childViews, t) < 0 && this.childViews.push(t), t;
        }, o.prototype.getAllChildViews = function () {
          var t, e, n, i, o;

          for (o = [], i = this.childViews, e = 0, n = i.length; n > e; e++) {
            t = i[e], o.push(t), o = o.concat(t.getAllChildViews());
          }

          return o;
        }, o.prototype.findElement = function () {
          return this.findElementForObject(this.object);
        }, o.prototype.findElementForObject = function (t) {
          var e;
          return (e = null != t ? t.id : void 0) ? this.rootView.element.querySelector("[data-trix-id='" + e + "']") : void 0;
        }, o.prototype.findViewForObject = function (t) {
          var e, n, i, o;

          for (i = this.getAllChildViews(), e = 0, n = i.length; n > e; e++) {
            if (o = i[e], o.object === t) return o;
          }
        }, o.prototype.getViewCache = function () {
          return this.rootView !== this ? this.rootView.getViewCache() : this.isViewCachingEnabled() ? null != this.viewCache ? this.viewCache : this.viewCache = {} : void 0;
        }, o.prototype.isViewCachingEnabled = function () {
          return this.shouldCacheViews !== !1;
        }, o.prototype.enableViewCaching = function () {
          return this.shouldCacheViews = !0;
        }, o.prototype.disableViewCaching = function () {
          return this.shouldCacheViews = !1;
        }, o.prototype.getCachedViewForObject = function (t) {
          var e;
          return null != (e = this.getViewCache()) ? e[t.getCacheKey()] : void 0;
        }, o.prototype.cacheViewForObject = function (t, e) {
          var n;
          return null != (n = this.getViewCache()) ? n[e.getCacheKey()] = t : void 0;
        }, o.prototype.garbageCollectCachedViews = function () {
          var t, e, n, o, r, s;

          if (t = this.getViewCache()) {
            s = this.getAllChildViews().concat(this), n = function () {
              var t, e, n;

              for (n = [], t = 0, e = s.length; e > t; t++) {
                r = s[t], n.push(r.object.getCacheKey());
              }

              return n;
            }(), o = [];

            for (e in t) {
              i.call(n, e) < 0 && o.push(delete t[e]);
            }

            return o;
          }
        }, o;
      }(e.BasicObject);
    }.call(this), function () {
      var t = function t(_t9, e) {
        function i() {
          this.constructor = _t9;
        }

        for (var o in e) {
          n.call(e, o) && (_t9[o] = e[o]);
        }

        return i.prototype = e.prototype, _t9.prototype = new i(), _t9.__super__ = e.prototype, _t9;
      },
          n = {}.hasOwnProperty;

      e.ObjectGroupView = function (e) {
        function n() {
          n.__super__.constructor.apply(this, arguments), this.objectGroup = this.object, this.viewClass = this.options.viewClass, delete this.options.viewClass;
        }

        return t(n, e), n.prototype.getChildViews = function () {
          var t, e, n, i;
          if (!this.childViews.length) for (i = this.objectGroup.getObjects(), t = 0, e = i.length; e > t; t++) {
            n = i[t], this.findOrCreateCachedChildView(this.viewClass, n, this.options);
          }
          return this.childViews;
        }, n.prototype.createNodes = function () {
          var t, e, n, i, o, r, s, a, u;

          for (t = this.createContainerElement(), s = this.getChildViews(), e = 0, i = s.length; i > e; e++) {
            for (u = s[e], a = u.getNodes(), n = 0, o = a.length; o > n; n++) {
              r = a[n], t.appendChild(r);
            }
          }

          return [t];
        }, n.prototype.createContainerElement = function (t) {
          return null == t && (t = this.objectGroup.getDepth()), this.getChildViews()[0].createContainerElement(t);
        }, n;
      }(e.ObjectView);
    }.call(this), function () {
      var t = function t(_t10, e) {
        function i() {
          this.constructor = _t10;
        }

        for (var o in e) {
          n.call(e, o) && (_t10[o] = e[o]);
        }

        return i.prototype = e.prototype, _t10.prototype = new i(), _t10.__super__ = e.prototype, _t10;
      },
          n = {}.hasOwnProperty;

      e.Controller = function (e) {
        function n() {
          return n.__super__.constructor.apply(this, arguments);
        }

        return t(n, e), n;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a = function a(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          u = function u(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          c.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          c = {}.hasOwnProperty,
          l = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      t = e.findClosestElementFromNode, i = e.nodeIsEmptyTextNode, n = e.nodeIsBlockStartComment, o = e.normalizeSpaces, r = e.summarizeStringChange, s = e.tagName, e.MutationObserver = function (e) {
        function c(t) {
          this.element = t, this.didMutate = a(this.didMutate, this), this.observer = new window.MutationObserver(this.didMutate), this.start();
        }

        var _h, p, d, f;

        return u(c, e), p = "data-trix-mutable", d = "[" + p + "]", f = {
          attributes: !0,
          childList: !0,
          characterData: !0,
          characterDataOldValue: !0,
          subtree: !0
        }, c.prototype.start = function () {
          return this.reset(), this.observer.observe(this.element, f);
        }, c.prototype.stop = function () {
          return this.observer.disconnect();
        }, c.prototype.didMutate = function (t) {
          var e, n;
          return (e = this.mutations).push.apply(e, this.findSignificantMutations(t)), this.mutations.length ? (null != (n = this.delegate) && "function" == typeof n.elementDidMutate && n.elementDidMutate(this.getMutationSummary()), this.reset()) : void 0;
        }, c.prototype.reset = function () {
          return this.mutations = [];
        }, c.prototype.findSignificantMutations = function (t) {
          var e, n, i, o;

          for (o = [], e = 0, n = t.length; n > e; e++) {
            i = t[e], this.mutationIsSignificant(i) && o.push(i);
          }

          return o;
        }, c.prototype.mutationIsSignificant = function (t) {
          var e, n, i, o;
          if (this.nodeIsMutable(t.target)) return !1;

          for (o = this.nodesModifiedByMutation(t), e = 0, n = o.length; n > e; e++) {
            if (i = o[e], this.nodeIsSignificant(i)) return !0;
          }

          return !1;
        }, c.prototype.nodeIsSignificant = function (t) {
          return t !== this.element && !this.nodeIsMutable(t) && !i(t);
        }, c.prototype.nodeIsMutable = function (e) {
          return t(e, {
            matchingSelector: d
          });
        }, c.prototype.nodesModifiedByMutation = function (t) {
          var e;

          switch (e = [], t.type) {
            case "attributes":
              t.attributeName !== p && e.push(t.target);
              break;

            case "characterData":
              e.push(t.target.parentNode), e.push(t.target);
              break;

            case "childList":
              e.push.apply(e, t.addedNodes), e.push.apply(e, t.removedNodes);
          }

          return e;
        }, c.prototype.getMutationSummary = function () {
          return this.getTextMutationSummary();
        }, c.prototype.getTextMutationSummary = function () {
          var t, e, n, i, o, r, s, a, u, c, h;

          for (a = this.getTextChangesFromCharacterData(), n = a.additions, o = a.deletions, h = this.getTextChangesFromChildList(), u = h.additions, r = 0, s = u.length; s > r; r++) {
            e = u[r], l.call(n, e) < 0 && n.push(e);
          }

          return o.push.apply(o, h.deletions), c = {}, (t = n.join("")) && (c.textAdded = t), (i = o.join("")) && (c.textDeleted = i), c;
        }, c.prototype.getMutationsByType = function (t) {
          var e, n, i, o, r;

          for (o = this.mutations, r = [], e = 0, n = o.length; n > e; e++) {
            i = o[e], i.type === t && r.push(i);
          }

          return r;
        }, c.prototype.getTextChangesFromChildList = function () {
          var t, e, i, r, s, a, u, c, l, p, d;

          for (t = [], u = [], a = this.getMutationsByType("childList"), e = 0, r = a.length; r > e; e++) {
            s = a[e], t.push.apply(t, s.addedNodes), u.push.apply(u, s.removedNodes);
          }

          return c = 0 === t.length && 1 === u.length && n(u[0]), c ? (p = [], d = ["\n"]) : (p = _h(t), d = _h(u)), {
            additions: function () {
              var t, e, n;

              for (n = [], i = t = 0, e = p.length; e > t; i = ++t) {
                l = p[i], l !== d[i] && n.push(o(l));
              }

              return n;
            }(),
            deletions: function () {
              var t, e, n;

              for (n = [], i = t = 0, e = d.length; e > t; i = ++t) {
                l = d[i], l !== p[i] && n.push(o(l));
              }

              return n;
            }()
          };
        }, c.prototype.getTextChangesFromCharacterData = function () {
          var t, e, n, i, s, a, u, c;
          return e = this.getMutationsByType("characterData"), e.length && (c = e[0], n = e[e.length - 1], s = o(c.oldValue), i = o(n.target.data), a = r(s, i), t = a.added, u = a.removed), {
            additions: t ? [t] : [],
            deletions: u ? [u] : []
          };
        }, _h = function h(t) {
          var e, n, i, o;

          for (null == t && (t = []), o = [], e = 0, n = t.length; n > e; e++) {
            switch (i = t[e], i.nodeType) {
              case Node.TEXT_NODE:
                o.push(i.data);
                break;

              case Node.ELEMENT_NODE:
                "br" === s(i) ? o.push("\n") : o.push.apply(o, _h(i.childNodes));
            }
          }

          return o;
        }, c;
      }(e.BasicObject);
    }.call(this), function () {
      var t = function t(_t11, e) {
        function i() {
          this.constructor = _t11;
        }

        for (var o in e) {
          n.call(e, o) && (_t11[o] = e[o]);
        }

        return i.prototype = e.prototype, _t11.prototype = new i(), _t11.__super__ = e.prototype, _t11;
      },
          n = {}.hasOwnProperty;

      e.FileVerificationOperation = function (e) {
        function n(t) {
          this.file = t;
        }

        return t(n, e), n.prototype.perform = function (t) {
          var e;
          return e = new FileReader(), e.onerror = function () {
            return t(!1);
          }, e.onload = function (n) {
            return function () {
              e.onerror = null;

              try {
                e.abort();
              } catch (i) {}

              return t(!0, n.file);
            };
          }(this), e.readAsArrayBuffer(this.file);
        }, n;
      }(e.Operation);
    }.call(this), function () {
      var t,
          n,
          i = function i(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          o.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      t = e.handleEvent, n = e.innerElementIsActive, e.InputController = function (o) {
        function r(n) {
          var i;
          this.element = n, this.mutationObserver = new e.MutationObserver(this.element), this.mutationObserver.delegate = this;

          for (i in this.events) {
            t(i, {
              onElement: this.element,
              withCallback: this.handlerFor(i)
            });
          }
        }

        return i(r, o), r.prototype.events = {}, r.prototype.elementDidMutate = function () {}, r.prototype.editorWillSyncDocumentView = function () {
          return this.mutationObserver.stop();
        }, r.prototype.editorDidSyncDocumentView = function () {
          return this.mutationObserver.start();
        }, r.prototype.requestRender = function () {
          var t;
          return null != (t = this.delegate) && "function" == typeof t.inputControllerDidRequestRender ? t.inputControllerDidRequestRender() : void 0;
        }, r.prototype.requestReparse = function () {
          var t;
          return null != (t = this.delegate) && "function" == typeof t.inputControllerDidRequestReparse && t.inputControllerDidRequestReparse(), this.requestRender();
        }, r.prototype.attachFiles = function (t) {
          var n, i;
          return i = function () {
            var i, o, r;

            for (r = [], i = 0, o = t.length; o > i; i++) {
              n = t[i], r.push(new e.FileVerificationOperation(n));
            }

            return r;
          }(), Promise.all(i).then(function (t) {
            return function (e) {
              return t.handleInput(function () {
                var t, n;
                return null != (t = this.delegate) && t.inputControllerWillAttachFiles(), null != (n = this.responder) && n.insertFiles(e), this.requestRender();
              });
            };
          }(this));
        }, r.prototype.handlerFor = function (t) {
          return function (e) {
            return function (i) {
              return i.defaultPrevented ? void 0 : e.handleInput(function () {
                return n(this.element) ? void 0 : (this.eventName = t, this.events[t].call(this, i));
              });
            };
          }(this);
        }, r.prototype.handleInput = function (t) {
          var e, n;

          try {
            return null != (e = this.delegate) && e.inputControllerWillHandleInput(), t.call(this);
          } finally {
            null != (n = this.delegate) && n.inputControllerDidHandleInput();
          }
        }, r;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          u,
          c,
          l,
          h,
          p,
          d,
          f = function f(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          g.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          g = {}.hasOwnProperty,
          m = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      c = e.makeElement, l = e.objectsAreEqual, d = e.tagName, n = e.browser, a = e.keyEventIsKeyboardCommand, o = e.dataTransferIsWritable, i = e.dataTransferIsPlainText, u = e.config.keyNames, e.Level0InputController = function (n) {
        function s() {
          s.__super__.constructor.apply(this, arguments), this.resetInputSummary();
        }

        var d;
        return f(s, n), d = 0, s.prototype.setInputSummary = function (t) {
          var e, n;
          null == t && (t = {}), this.inputSummary.eventName = this.eventName;

          for (e in t) {
            n = t[e], this.inputSummary[e] = n;
          }

          return this.inputSummary;
        }, s.prototype.resetInputSummary = function () {
          return this.inputSummary = {};
        }, s.prototype.reset = function () {
          return this.resetInputSummary(), e.selectionChangeObserver.reset();
        }, s.prototype.elementDidMutate = function (t) {
          var e;
          return this.isComposing() ? null != (e = this.delegate) && "function" == typeof e.inputControllerDidAllowUnhandledInput ? e.inputControllerDidAllowUnhandledInput() : void 0 : this.handleInput(function () {
            return this.mutationIsSignificant(t) && (this.mutationIsExpected(t) ? this.requestRender() : this.requestReparse()), this.reset();
          });
        }, s.prototype.mutationIsExpected = function (t) {
          var e, n, i, o, r, s, a, u, c, l;
          return a = t.textAdded, u = t.textDeleted, this.inputSummary.preferDocument ? !0 : (e = null != a ? a === this.inputSummary.textAdded : !this.inputSummary.textAdded, n = null != u ? this.inputSummary.didDelete : !this.inputSummary.didDelete, c = ("\n" === a || " \n" === a) && !e, l = "\n" === u && !n, s = c && !l || l && !c, s && (o = this.getSelectedRange()) && (i = c ? a.replace(/\n$/, "").length || -1 : (null != a ? a.length : void 0) || 1, null != (r = this.responder) ? r.positionIsBlockBreak(o[1] + i) : void 0) ? !0 : e && n);
        }, s.prototype.mutationIsSignificant = function (t) {
          var e, n, i;
          return i = Object.keys(t).length > 0, e = "" === (null != (n = this.compositionInput) ? n.getEndData() : void 0), i || !e;
        }, s.prototype.events = {
          keydown: function keydown(t) {
            var n, i, o, r, s, c, l, h, p;

            if (this.isComposing() || this.resetInputSummary(), this.inputSummary.didInput = !0, r = u[t.keyCode]) {
              for (i = this.keys, h = ["ctrl", "alt", "shift", "meta"], o = 0, c = h.length; c > o; o++) {
                l = h[o], t[l + "Key"] && ("ctrl" === l && (l = "control"), i = null != i ? i[l] : void 0);
              }

              null != (null != i ? i[r] : void 0) && (this.setInputSummary({
                keyName: r
              }), e.selectionChangeObserver.reset(), i[r].call(this, t));
            }

            return a(t) && (n = String.fromCharCode(t.keyCode).toLowerCase()) && (s = function () {
              var e, n, i, o;

              for (i = ["alt", "shift"], o = [], e = 0, n = i.length; n > e; e++) {
                l = i[e], t[l + "Key"] && o.push(l);
              }

              return o;
            }(), s.push(n), null != (p = this.delegate) ? p.inputControllerDidReceiveKeyboardCommand(s) : void 0) ? t.preventDefault() : void 0;
          },
          keypress: function keypress(t) {
            var e, n, i;
            if (null == this.inputSummary.eventName && !t.metaKey && (!t.ctrlKey || t.altKey)) return (i = p(t)) ? (null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.insertString(i), this.setInputSummary({
              textAdded: i,
              didDelete: this.selectionIsExpanded()
            })) : void 0;
          },
          textInput: function textInput(t) {
            var e, n, i, o;
            return e = t.data, o = this.inputSummary.textAdded, o && o !== e && o.toUpperCase() === e ? (n = this.getSelectedRange(), this.setSelectedRange([n[0], n[1] + o.length]), null != (i = this.responder) && i.insertString(e), this.setInputSummary({
              textAdded: e
            }), this.setSelectedRange(n)) : void 0;
          },
          dragenter: function dragenter(t) {
            return t.preventDefault();
          },
          dragstart: function dragstart(t) {
            var e, n;
            return n = t.target, this.serializeSelectionToDataTransfer(t.dataTransfer), this.draggedRange = this.getSelectedRange(), null != (e = this.delegate) && "function" == typeof e.inputControllerDidStartDrag ? e.inputControllerDidStartDrag() : void 0;
          },
          dragover: function dragover(t) {
            var e, n;
            return !this.draggedRange && !this.canAcceptDataTransfer(t.dataTransfer) || (t.preventDefault(), e = {
              x: t.clientX,
              y: t.clientY
            }, l(e, this.draggingPoint)) ? void 0 : (this.draggingPoint = e, null != (n = this.delegate) && "function" == typeof n.inputControllerDidReceiveDragOverPoint ? n.inputControllerDidReceiveDragOverPoint(this.draggingPoint) : void 0);
          },
          dragend: function dragend() {
            var t;
            return null != (t = this.delegate) && "function" == typeof t.inputControllerDidCancelDrag && t.inputControllerDidCancelDrag(), this.draggedRange = null, this.draggingPoint = null;
          },
          drop: function drop(t) {
            var n, i, o, r, s, a, u, c, l;
            return t.preventDefault(), o = null != (s = t.dataTransfer) ? s.files : void 0, r = {
              x: t.clientX,
              y: t.clientY
            }, null != (a = this.responder) && a.setLocationRangeFromPointRange(r), (null != o ? o.length : void 0) ? this.attachFiles(o) : this.draggedRange ? (null != (u = this.delegate) && u.inputControllerWillMoveText(), null != (c = this.responder) && c.moveTextFromRange(this.draggedRange), this.draggedRange = null, this.requestRender()) : (i = t.dataTransfer.getData("application/x-trix-document")) && (n = e.Document.fromJSONString(i), null != (l = this.responder) && l.insertDocument(n), this.requestRender()), this.draggedRange = null, this.draggingPoint = null;
          },
          cut: function cut(t) {
            var e, n;
            return (null != (e = this.responder) ? e.selectionIsExpanded() : void 0) && (this.serializeSelectionToDataTransfer(t.clipboardData) && t.preventDefault(), null != (n = this.delegate) && n.inputControllerWillCutText(), this.deleteInDirection("backward"), t.defaultPrevented) ? this.requestRender() : void 0;
          },
          copy: function copy(t) {
            var e;
            return (null != (e = this.responder) ? e.selectionIsExpanded() : void 0) && this.serializeSelectionToDataTransfer(t.clipboardData) ? t.preventDefault() : void 0;
          },
          paste: function paste(t) {
            var n, o, s, a, u, c, l, p, f, g, v, y, b, A, C, x, w, E, S, R, k, D;
            return n = null != (p = t.clipboardData) ? p : t.testClipboardData, l = {
              clipboard: n
            }, null == n || h(t) ? void this.getPastedHTMLUsingHiddenElement(function (t) {
              return function (e) {
                var n, i, o;
                return l.type = "text/html", l.html = e, null != (n = t.delegate) && n.inputControllerWillPaste(l), null != (i = t.responder) && i.insertHTML(l.html), t.requestRender(), null != (o = t.delegate) ? o.inputControllerDidPaste(l) : void 0;
              };
            }(this)) : ((a = n.getData("URL")) ? (l.type = "URL", l.href = a, l.string = (c = n.getData("public.url-name")) ? e.squishBreakableWhitespace(c).trim() : a, null != (f = this.delegate) && f.inputControllerWillPaste(l), this.setInputSummary({
              textAdded: l.string,
              didDelete: this.selectionIsExpanded()
            }), null != (C = this.responder) && C.insertText(e.Text.textForStringWithAttributes(l.string, {
              href: l.href
            })), this.requestRender(), null != (x = this.delegate) && x.inputControllerDidPaste(l)) : i(n) ? (l.type = "text/plain", l.string = n.getData("text/plain"), null != (w = this.delegate) && w.inputControllerWillPaste(l), this.setInputSummary({
              textAdded: l.string,
              didDelete: this.selectionIsExpanded()
            }), null != (E = this.responder) && E.insertString(l.string), this.requestRender(), null != (S = this.delegate) && S.inputControllerDidPaste(l)) : (u = n.getData("text/html")) ? (l.type = "text/html", l.html = u, null != (R = this.delegate) && R.inputControllerWillPaste(l), null != (k = this.responder) && k.insertHTML(l.html), this.requestRender(), null != (D = this.delegate) && D.inputControllerDidPaste(l)) : m.call(n.types, "Files") >= 0 && (s = null != (g = n.items) && null != (v = g[0]) && "function" == typeof v.getAsFile ? v.getAsFile() : void 0) && (!s.name && (o = r(s)) && (s.name = "pasted-file-" + ++d + "." + o), l.type = "File", l.file = s, null != (y = this.delegate) && y.inputControllerWillAttachFiles(), null != (b = this.responder) && b.insertFile(l.file), this.requestRender(), null != (A = this.delegate) && A.inputControllerDidPaste(l)), t.preventDefault());
          },
          compositionstart: function compositionstart(t) {
            return this.getCompositionInput().start(t.data);
          },
          compositionupdate: function compositionupdate(t) {
            return this.getCompositionInput().update(t.data);
          },
          compositionend: function compositionend(t) {
            return this.getCompositionInput().end(t.data);
          },
          beforeinput: function beforeinput() {
            return this.inputSummary.didInput = !0;
          },
          input: function input(t) {
            return this.inputSummary.didInput = !0, t.stopPropagation();
          }
        }, s.prototype.keys = {
          backspace: function backspace(t) {
            var e;
            return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t);
          },
          "delete": function _delete(t) {
            var e;
            return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t);
          },
          "return": function _return() {
            var t, e;
            return this.setInputSummary({
              preferDocument: !0
            }), null != (t = this.delegate) && t.inputControllerWillPerformTyping(), null != (e = this.responder) ? e.insertLineBreak() : void 0;
          },
          tab: function tab(t) {
            var e, n;
            return (null != (e = this.responder) ? e.canIncreaseNestingLevel() : void 0) ? (null != (n = this.responder) && n.increaseNestingLevel(), this.requestRender(), t.preventDefault()) : void 0;
          },
          left: function left(t) {
            var e;
            return this.selectionIsInCursorTarget() ? (t.preventDefault(), null != (e = this.responder) ? e.moveCursorInDirection("backward") : void 0) : void 0;
          },
          right: function right(t) {
            var e;
            return this.selectionIsInCursorTarget() ? (t.preventDefault(), null != (e = this.responder) ? e.moveCursorInDirection("forward") : void 0) : void 0;
          },
          control: {
            d: function d(t) {
              var e;
              return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t);
            },
            h: function h(t) {
              var e;
              return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t);
            },
            o: function o(t) {
              var e, n;
              return t.preventDefault(), null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.insertString("\n", {
                updatePosition: !1
              }), this.requestRender();
            }
          },
          shift: {
            "return": function _return(t) {
              var e, n;
              return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.insertString("\n"), this.requestRender(), t.preventDefault();
            },
            tab: function tab(t) {
              var e, n;
              return (null != (e = this.responder) ? e.canDecreaseNestingLevel() : void 0) ? (null != (n = this.responder) && n.decreaseNestingLevel(), this.requestRender(), t.preventDefault()) : void 0;
            },
            left: function left(t) {
              return this.selectionIsInCursorTarget() ? (t.preventDefault(), this.expandSelectionInDirection("backward")) : void 0;
            },
            right: function right(t) {
              return this.selectionIsInCursorTarget() ? (t.preventDefault(), this.expandSelectionInDirection("forward")) : void 0;
            }
          },
          alt: {
            backspace: function backspace() {
              var t;
              return this.setInputSummary({
                preferDocument: !1
              }), null != (t = this.delegate) ? t.inputControllerWillPerformTyping() : void 0;
            }
          },
          meta: {
            backspace: function backspace() {
              var t;
              return this.setInputSummary({
                preferDocument: !1
              }), null != (t = this.delegate) ? t.inputControllerWillPerformTyping() : void 0;
            }
          }
        }, s.prototype.getCompositionInput = function () {
          return this.isComposing() ? this.compositionInput : this.compositionInput = new t(this);
        }, s.prototype.isComposing = function () {
          return null != this.compositionInput && !this.compositionInput.isEnded();
        }, s.prototype.deleteInDirection = function (t, e) {
          var n;
          return (null != (n = this.responder) ? n.deleteInDirection(t) : void 0) !== !1 ? this.setInputSummary({
            didDelete: !0
          }) : e ? (e.preventDefault(), this.requestRender()) : void 0;
        }, s.prototype.serializeSelectionToDataTransfer = function (t) {
          var n, i;
          if (o(t)) return n = null != (i = this.responder) ? i.getSelectedDocument().toSerializableDocument() : void 0, t.setData("application/x-trix-document", JSON.stringify(n)), t.setData("text/html", e.DocumentView.render(n).innerHTML), t.setData("text/plain", n.toString().replace(/\n$/, "")), !0;
        }, s.prototype.canAcceptDataTransfer = function (t) {
          var e, n, i, o, r, s;

          for (s = {}, o = null != (i = null != t ? t.types : void 0) ? i : [], e = 0, n = o.length; n > e; e++) {
            r = o[e], s[r] = !0;
          }

          return s.Files || s["application/x-trix-document"] || s["text/html"] || s["text/plain"];
        }, s.prototype.getPastedHTMLUsingHiddenElement = function (t) {
          var n, i, o;
          return i = this.getSelectedRange(), o = {
            position: "absolute",
            left: window.pageXOffset + "px",
            top: window.pageYOffset + "px",
            opacity: 0
          }, n = c({
            style: o,
            tagName: "div",
            editable: !0
          }), document.body.appendChild(n), n.focus(), requestAnimationFrame(function (o) {
            return function () {
              var r;
              return r = n.innerHTML, e.removeNode(n), o.setSelectedRange(i), t(r);
            };
          }(this));
        }, s.proxyMethod("responder?.getSelectedRange"), s.proxyMethod("responder?.setSelectedRange"), s.proxyMethod("responder?.expandSelectionInDirection"), s.proxyMethod("responder?.selectionIsInCursorTarget"), s.proxyMethod("responder?.selectionIsExpanded"), s;
      }(e.InputController), r = function r(t) {
        var e, n;
        return null != (e = t.type) && null != (n = e.match(/\/(\w+)$/)) ? n[1] : void 0;
      }, s = null != ("function" == typeof " ".codePointAt ? " ".codePointAt(0) : void 0), p = function p(t) {
        var n;
        return t.key && s && t.key.codePointAt(0) === t.keyCode ? t.key : (null === t.which ? n = t.keyCode : 0 !== t.which && 0 !== t.charCode && (n = t.charCode), null != n && "escape" !== u[n] ? e.UTF16String.fromCodepoints([n]).toString() : void 0);
      }, h = function h(t) {
        var e, n, i, o, r, s, a, u, c, l;

        if (u = t.clipboardData) {
          if (m.call(u.types, "text/html") >= 0) {
            for (c = u.types, i = 0, s = c.length; s > i; i++) {
              if (l = c[i], e = /^CorePasteboardFlavorType/.test(l), n = /^dyn\./.test(l) && u.getData(l), a = e || n) return !0;
            }

            return !1;
          }

          return o = m.call(u.types, "com.apple.webarchive") >= 0, r = m.call(u.types, "com.apple.flat-rtfd") >= 0, o || r;
        }
      }, t = function (t) {
        function e(t) {
          var e;
          this.inputController = t, e = this.inputController, this.responder = e.responder, this.delegate = e.delegate, this.inputSummary = e.inputSummary, this.data = {};
        }

        return f(e, t), e.prototype.start = function (t) {
          var e, n;
          return this.data.start = t, this.isSignificant() ? ("keypress" === this.inputSummary.eventName && this.inputSummary.textAdded && null != (e = this.responder) && e.deleteInDirection("left"), this.selectionIsExpanded() || (this.insertPlaceholder(), this.requestRender()), this.range = null != (n = this.responder) ? n.getSelectedRange() : void 0) : void 0;
        }, e.prototype.update = function (t) {
          var e;
          return this.data.update = t, this.isSignificant() && (e = this.selectPlaceholder()) ? (this.forgetPlaceholder(), this.range = e) : void 0;
        }, e.prototype.end = function (t) {
          var e, n, i, o;
          return this.data.end = t, this.isSignificant() ? (this.forgetPlaceholder(), this.canApplyToDocument() ? (this.setInputSummary({
            preferDocument: !0,
            didInput: !1
          }), null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.setSelectedRange(this.range), null != (i = this.responder) && i.insertString(this.data.end), null != (o = this.responder) ? o.setSelectedRange(this.range[0] + this.data.end.length) : void 0) : null != this.data.start || null != this.data.update ? (this.requestReparse(), this.inputController.reset()) : void 0) : this.inputController.reset();
        }, e.prototype.getEndData = function () {
          return this.data.end;
        }, e.prototype.isEnded = function () {
          return null != this.getEndData();
        }, e.prototype.isSignificant = function () {
          return n.composesExistingText ? this.inputSummary.didInput : !0;
        }, e.prototype.canApplyToDocument = function () {
          var t, e;
          return 0 === (null != (t = this.data.start) ? t.length : void 0) && (null != (e = this.data.end) ? e.length : void 0) > 0 && null != this.range;
        }, e.proxyMethod("inputController.setInputSummary"), e.proxyMethod("inputController.requestRender"), e.proxyMethod("inputController.requestReparse"), e.proxyMethod("responder?.selectionIsExpanded"), e.proxyMethod("responder?.insertPlaceholder"), e.proxyMethod("responder?.selectPlaceholder"), e.proxyMethod("responder?.forgetPlaceholder"), e;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function o(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          r = function r(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          s.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          s = {}.hasOwnProperty,
          a = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      t = e.dataTransferIsPlainText, n = e.keyEventIsKeyboardCommand, i = e.objectsAreEqual, e.Level2InputController = function (s) {
        function u() {
          return this.render = o(this.render, this), u.__super__.constructor.apply(this, arguments);
        }

        var c, l, h, p, d, f;
        return r(u, s), u.prototype.elementDidMutate = function () {
          var t;
          return this.scheduledRender ? this.composing && null != (t = this.delegate) && "function" == typeof t.inputControllerDidAllowUnhandledInput ? t.inputControllerDidAllowUnhandledInput() : void 0 : this.reparse();
        }, u.prototype.scheduleRender = function () {
          return null != this.scheduledRender ? this.scheduledRender : this.scheduledRender = requestAnimationFrame(this.render);
        }, u.prototype.render = function () {
          var t;
          return cancelAnimationFrame(this.scheduledRender), this.scheduledRender = null, this.composing || null != (t = this.delegate) && t.render(), "function" == typeof this.afterRender && this.afterRender(), this.afterRender = null;
        }, u.prototype.reparse = function () {
          var t;
          return null != (t = this.delegate) ? t.reparse() : void 0;
        }, u.prototype.events = {
          keydown: function keydown(t) {
            var e, i, o, r;

            if (n(t)) {
              if (e = l(t), null != (r = this.delegate) ? r.inputControllerDidReceiveKeyboardCommand(e) : void 0) return t.preventDefault();
            } else if (o = t.key, t.altKey && (o += "+Alt"), t.shiftKey && (o += "+Shift"), i = this.keys[o]) return this.withEvent(t, i);
          },
          paste: function paste(t) {
            var n, i, o, r, s, a, u, c, l;
            return h(t) ? (t.preventDefault(), this.attachFiles(t.clipboardData.files)) : p(t) ? (t.preventDefault(), i = {
              type: "text/plain",
              string: t.clipboardData.getData("text/plain")
            }, null != (o = this.delegate) && o.inputControllerWillPaste(i), null != (r = this.responder) && r.insertString(i.string), this.render(), null != (s = this.delegate) ? s.inputControllerDidPaste(i) : void 0) : (n = null != (a = t.clipboardData) ? a.getData("URL") : void 0) ? (t.preventDefault(), i = {
              type: "URL",
              href: n,
              string: n
            }, null != (u = this.delegate) && u.inputControllerWillPaste(i), null != (c = this.responder) && c.insertText(e.Text.textForStringWithAttributes(i.string, {
              href: i.href
            })), this.render(), null != (l = this.delegate) ? l.inputControllerDidPaste(i) : void 0) : void 0;
          },
          beforeinput: function beforeinput(t) {
            var e;
            return (e = this.inputTypes[t.inputType]) ? (this.withEvent(t, e), this.scheduleRender()) : void 0;
          },
          input: function input() {
            return e.selectionChangeObserver.reset();
          },
          dragstart: function dragstart(t) {
            var e, n;
            return (null != (e = this.responder) ? e.selectionContainsAttachments() : void 0) ? (t.dataTransfer.setData("application/x-trix-dragging", !0), this.dragging = {
              range: null != (n = this.responder) ? n.getSelectedRange() : void 0,
              point: d(t)
            }) : void 0;
          },
          dragenter: function dragenter(t) {
            return c(t) ? t.preventDefault() : void 0;
          },
          dragover: function dragover(t) {
            var e, n;
            return this.dragging && (t.preventDefault(), e = d(t), !i(e, this.dragging.point)) ? (this.dragging.point = e, null != (n = this.responder) ? n.setLocationRangeFromPointRange(e) : void 0) : void 0;
          },
          drop: function drop(t) {
            var e, n, i, o;
            return this.dragging ? (t.preventDefault(), null != (n = this.delegate) && n.inputControllerWillMoveText(), null != (i = this.responder) && i.moveTextFromRange(this.dragging.range), this.dragging = null, this.scheduleRender()) : c(t) ? (t.preventDefault(), e = d(t), null != (o = this.responder) && o.setLocationRangeFromPointRange(e), this.attachFiles(t.dataTransfer.files)) : void 0;
          },
          dragend: function dragend() {
            var t;
            return this.dragging ? (null != (t = this.responder) && t.setSelectedRange(this.dragging.range), this.dragging = null) : void 0;
          },
          compositionend: function compositionend() {
            return this.composing ? (this.composing = !1, this.scheduleRender()) : void 0;
          }
        }, u.prototype.keys = {
          ArrowLeft: function ArrowLeft() {
            var t, e;
            return (null != (t = this.responder) ? t.shouldManageMovingCursorInDirection("backward") : void 0) ? (this.event.preventDefault(), null != (e = this.responder) ? e.moveCursorInDirection("backward") : void 0) : void 0;
          },
          ArrowRight: function ArrowRight() {
            var t, e;
            return (null != (t = this.responder) ? t.shouldManageMovingCursorInDirection("forward") : void 0) ? (this.event.preventDefault(), null != (e = this.responder) ? e.moveCursorInDirection("forward") : void 0) : void 0;
          },
          Backspace: function Backspace() {
            var t, e, n;
            return (null != (t = this.responder) ? t.shouldManageDeletingInDirection("backward") : void 0) ? (this.event.preventDefault(), null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.deleteInDirection("backward"), this.render()) : void 0;
          },
          Tab: function Tab() {
            var t, e;
            return (null != (t = this.responder) ? t.canIncreaseNestingLevel() : void 0) ? (this.event.preventDefault(), null != (e = this.responder) && e.increaseNestingLevel(), this.render()) : void 0;
          },
          "Tab+Shift": function TabShift() {
            var t, e;
            return (null != (t = this.responder) ? t.canDecreaseNestingLevel() : void 0) ? (this.event.preventDefault(), null != (e = this.responder) && e.decreaseNestingLevel(), this.render()) : void 0;
          }
        }, u.prototype.inputTypes = {
          deleteByComposition: function deleteByComposition() {
            return this.deleteInDirection("backward", {
              recordUndoEntry: !1
            });
          },
          deleteByCut: function deleteByCut() {
            return this.deleteInDirection("backward");
          },
          deleteByDrag: function deleteByDrag() {
            return this.event.preventDefault(), this.withTargetDOMRange(function () {
              var t;
              return this.deleteByDragRange = null != (t = this.responder) ? t.getSelectedRange() : void 0;
            });
          },
          deleteCompositionText: function deleteCompositionText() {
            return this.deleteInDirection("backward", {
              recordUndoEntry: !1
            });
          },
          deleteContent: function deleteContent() {
            return this.deleteInDirection("backward");
          },
          deleteContentBackward: function deleteContentBackward() {
            return this.deleteInDirection("backward");
          },
          deleteContentForward: function deleteContentForward() {
            return this.deleteInDirection("forward");
          },
          deleteEntireSoftLine: function deleteEntireSoftLine() {
            return this.deleteInDirection("forward");
          },
          deleteHardLineBackward: function deleteHardLineBackward() {
            return this.deleteInDirection("backward");
          },
          deleteHardLineForward: function deleteHardLineForward() {
            return this.deleteInDirection("forward");
          },
          deleteSoftLineBackward: function deleteSoftLineBackward() {
            return this.deleteInDirection("backward");
          },
          deleteSoftLineForward: function deleteSoftLineForward() {
            return this.deleteInDirection("forward");
          },
          deleteWordBackward: function deleteWordBackward() {
            return this.deleteInDirection("backward");
          },
          deleteWordForward: function deleteWordForward() {
            return this.deleteInDirection("forward");
          },
          formatBackColor: function formatBackColor() {
            return this.activateAttributeIfSupported("backgroundColor", this.event.data);
          },
          formatBold: function formatBold() {
            return this.toggleAttributeIfSupported("bold");
          },
          formatFontColor: function formatFontColor() {
            return this.activateAttributeIfSupported("color", this.event.data);
          },
          formatFontName: function formatFontName() {
            return this.activateAttributeIfSupported("font", this.event.data);
          },
          formatIndent: function formatIndent() {
            var t;
            return (null != (t = this.responder) ? t.canIncreaseNestingLevel() : void 0) ? this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.increaseNestingLevel() : void 0;
            }) : void 0;
          },
          formatItalic: function formatItalic() {
            return this.toggleAttributeIfSupported("italic");
          },
          formatJustifyCenter: function formatJustifyCenter() {
            return this.toggleAttributeIfSupported("justifyCenter");
          },
          formatJustifyFull: function formatJustifyFull() {
            return this.toggleAttributeIfSupported("justifyFull");
          },
          formatJustifyLeft: function formatJustifyLeft() {
            return this.toggleAttributeIfSupported("justifyLeft");
          },
          formatJustifyRight: function formatJustifyRight() {
            return this.toggleAttributeIfSupported("justifyRight");
          },
          formatOutdent: function formatOutdent() {
            var t;
            return (null != (t = this.responder) ? t.canDecreaseNestingLevel() : void 0) ? this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.decreaseNestingLevel() : void 0;
            }) : void 0;
          },
          formatRemove: function formatRemove() {
            return this.withTargetDOMRange(function () {
              var t, e, n, i;
              i = [];

              for (t in null != (e = this.responder) ? e.getCurrentAttributes() : void 0) {
                i.push(null != (n = this.responder) ? n.removeCurrentAttribute(t) : void 0);
              }

              return i;
            });
          },
          formatSetBlockTextDirection: function formatSetBlockTextDirection() {
            return this.activateAttributeIfSupported("blockDir", this.event.data);
          },
          formatSetInlineTextDirection: function formatSetInlineTextDirection() {
            return this.activateAttributeIfSupported("textDir", this.event.data);
          },
          formatStrikeThrough: function formatStrikeThrough() {
            return this.toggleAttributeIfSupported("strike");
          },
          formatSubscript: function formatSubscript() {
            return this.toggleAttributeIfSupported("sub");
          },
          formatSuperscript: function formatSuperscript() {
            return this.toggleAttributeIfSupported("sup");
          },
          formatUnderline: function formatUnderline() {
            return this.toggleAttributeIfSupported("underline");
          },
          historyRedo: function historyRedo() {
            var t;
            return null != (t = this.delegate) ? t.inputControllerWillPerformRedo() : void 0;
          },
          historyUndo: function historyUndo() {
            var t;
            return null != (t = this.delegate) ? t.inputControllerWillPerformUndo() : void 0;
          },
          insertCompositionText: function insertCompositionText() {
            return this.composing = !0, this.insertString(this.event.data);
          },
          insertFromComposition: function insertFromComposition() {
            return this.composing = !1, this.insertString(this.event.data);
          },
          insertFromDrop: function insertFromDrop() {
            var t, e;
            return (t = this.deleteByDragRange) ? (this.deleteByDragRange = null, null != (e = this.delegate) && e.inputControllerWillMoveText(), this.withTargetDOMRange(function () {
              var e;
              return null != (e = this.responder) ? e.moveTextFromRange(t) : void 0;
            })) : void 0;
          },
          insertFromPaste: function insertFromPaste() {
            var n, i, o, r, s, a, u, c, l, h;
            return n = this.event.dataTransfer, s = {
              dataTransfer: n
            }, (i = n.getData("URL")) ? (s.type = "URL", s.href = i, s.string = (r = n.getData("public.url-name")) ? e.squishBreakableWhitespace(r).trim() : i, null != (a = this.delegate) && a.inputControllerWillPaste(s), this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.insertText(e.Text.textForStringWithAttributes(s.string, {
                href: s.href
              })) : void 0;
            }), this.afterRender = function (t) {
              return function () {
                var e;
                return null != (e = t.delegate) ? e.inputControllerDidPaste(s) : void 0;
              };
            }(this)) : t(n) ? (s.type = "text/plain", s.string = n.getData("text/plain"), null != (u = this.delegate) && u.inputControllerWillPaste(s), this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.insertString(s.string) : void 0;
            }), this.afterRender = function (t) {
              return function () {
                var e;
                return null != (e = t.delegate) ? e.inputControllerDidPaste(s) : void 0;
              };
            }(this)) : (o = n.getData("text/html")) ? (s.type = "text/html", s.html = o, null != (c = this.delegate) && c.inputControllerWillPaste(s), this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.insertHTML(s.html) : void 0;
            }), this.afterRender = function (t) {
              return function () {
                var e;
                return null != (e = t.delegate) ? e.inputControllerDidPaste(s) : void 0;
              };
            }(this)) : (null != (l = n.files) ? l.length : void 0) ? (s.type = "File", s.file = n.files[0], null != (h = this.delegate) && h.inputControllerWillPaste(s), this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.insertFile(s.file) : void 0;
            }), this.afterRender = function (t) {
              return function () {
                var e;
                return null != (e = t.delegate) ? e.inputControllerDidPaste(s) : void 0;
              };
            }(this)) : void 0;
          },
          insertFromYank: function insertFromYank() {
            return this.insertString(this.event.data);
          },
          insertLineBreak: function insertLineBreak() {
            return this.insertString("\n");
          },
          insertLink: function insertLink() {
            return this.activateAttributeIfSupported("href", this.event.data);
          },
          insertOrderedList: function insertOrderedList() {
            return this.toggleAttributeIfSupported("number");
          },
          insertParagraph: function insertParagraph() {
            var t;
            return null != (t = this.delegate) && t.inputControllerWillPerformTyping(), this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.insertLineBreak() : void 0;
            });
          },
          insertReplacementText: function insertReplacementText() {
            return this.insertString(this.event.dataTransfer.getData("text/plain"), {
              updatePosition: !1
            });
          },
          insertText: function insertText() {
            var t, e;
            return this.insertString(null != (t = this.event.data) ? t : null != (e = this.event.dataTransfer) ? e.getData("text/plain") : void 0);
          },
          insertTranspose: function insertTranspose() {
            return this.insertString(this.event.data);
          },
          insertUnorderedList: function insertUnorderedList() {
            return this.toggleAttributeIfSupported("bullet");
          }
        }, u.prototype.insertString = function (t, e) {
          var n;
          return null == t && (t = ""), null != (n = this.delegate) && n.inputControllerWillPerformTyping(), this.withTargetDOMRange(function () {
            var n;
            return null != (n = this.responder) ? n.insertString(t, e) : void 0;
          });
        }, u.prototype.toggleAttributeIfSupported = function (t) {
          var n;
          return a.call(e.getAllAttributeNames(), t) >= 0 ? (null != (n = this.delegate) && n.inputControllerWillPerformFormatting(t), this.withTargetDOMRange(function () {
            var e;
            return null != (e = this.responder) ? e.toggleCurrentAttribute(t) : void 0;
          })) : void 0;
        }, u.prototype.activateAttributeIfSupported = function (t, n) {
          var i;
          return a.call(e.getAllAttributeNames(), t) >= 0 ? (null != (i = this.delegate) && i.inputControllerWillPerformFormatting(t), this.withTargetDOMRange(function () {
            var e;
            return null != (e = this.responder) ? e.setCurrentAttribute(t, n) : void 0;
          })) : void 0;
        }, u.prototype.deleteInDirection = function (t, e) {
          var n, i, o, r;
          return o = (null != e ? e : {
            recordUndoEntry: !0
          }).recordUndoEntry, o && null != (r = this.delegate) && r.inputControllerWillPerformTyping(), i = function (e) {
            return function () {
              var n;
              return null != (n = e.responder) ? n.deleteInDirection(t) : void 0;
            };
          }(this), (n = this.getTargetDOMRange({
            minLength: 2
          })) ? this.withTargetDOMRange(n, i) : i();
        }, u.prototype.withTargetDOMRange = function (t, n) {
          var i;
          return "function" == typeof t && (n = t, t = this.getTargetDOMRange()), t ? null != (i = this.responder) ? i.withTargetDOMRange(t, n.bind(this)) : void 0 : (e.selectionChangeObserver.reset(), n.call(this));
        }, u.prototype.getTargetDOMRange = function (t) {
          var e, n, i, o;
          return i = (null != t ? t : {
            minLength: 0
          }).minLength, (o = "function" == typeof (e = this.event).getTargetRanges ? e.getTargetRanges() : void 0) && o.length && (n = f(o[0]), 0 === i || n.toString().length >= i) ? n : void 0;
        }, f = function f(t) {
          var e;
          return e = document.createRange(), e.setStart(t.startContainer, t.startOffset), e.setEnd(t.endContainer, t.endOffset), e;
        }, u.prototype.withEvent = function (t, e) {
          var n;
          this.event = t;

          try {
            n = e.call(this);
          } finally {
            this.event = null;
          }

          return n;
        }, c = function c(t) {
          var e, n;
          return a.call(null != (e = null != (n = t.dataTransfer) ? n.types : void 0) ? e : [], "Files") >= 0;
        }, h = function h(t) {
          var e;
          return (e = t.clipboardData) ? a.call(e.types, "Files") >= 0 && 1 === e.types.length && e.files.length >= 1 : void 0;
        }, p = function p(t) {
          var e;
          return (e = t.clipboardData) ? a.call(e.types, "text/plain") >= 0 && 1 === e.types.length : void 0;
        }, l = function l(t) {
          var e;
          return e = [], t.altKey && e.push("alt"), t.shiftKey && e.push("shift"), e.push(t.key), e;
        }, d = function d(t) {
          return {
            x: t.clientX,
            y: t.clientY
          };
        }, u;
      }(e.InputController);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          u,
          c,
          l = function l(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          h = function h(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          p.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          p = {}.hasOwnProperty;

      n = e.defer, i = e.escapeHTML, o = e.handleEvent, a = e.makeElement, c = e.tagName, u = e.config, s = u.lang, t = u.css, r = u.keyNames, e.AttachmentEditorController = function (u) {
        function p(t, e, n, i) {
          this.attachmentPiece = t, this.element = e, this.container = n, this.options = null != i ? i : {}, this.didBlurCaption = l(this.didBlurCaption, this), this.didChangeCaption = l(this.didChangeCaption, this), this.didInputCaption = l(this.didInputCaption, this), this.didKeyDownCaption = l(this.didKeyDownCaption, this), this.didClickActionButton = l(this.didClickActionButton, this), this.didClickToolbar = l(this.didClickToolbar, this), this.attachment = this.attachmentPiece.attachment, "a" === c(this.element) && (this.element = this.element.firstChild), this.install();
        }

        var d;
        return h(p, u), d = function d(t) {
          return function () {
            var e;
            return e = t.apply(this, arguments), e["do"](), null == this.undos && (this.undos = []), this.undos.push(e.undo);
          };
        }, p.prototype.install = function () {
          return this.makeElementMutable(), this.addToolbar(), this.attachment.isPreviewable() ? this.installCaptionEditor() : void 0;
        }, p.prototype.uninstall = function () {
          var t, e;

          for (this.savePendingCaption(); e = this.undos.pop();) {
            e();
          }

          return null != (t = this.delegate) ? t.didUninstallAttachmentEditor(this) : void 0;
        }, p.prototype.savePendingCaption = function () {
          var t, e, n;
          return null != this.pendingCaption ? (t = this.pendingCaption, this.pendingCaption = null, t ? null != (e = this.delegate) && "function" == typeof e.attachmentEditorDidRequestUpdatingAttributesForAttachment ? e.attachmentEditorDidRequestUpdatingAttributesForAttachment({
            caption: t
          }, this.attachment) : void 0 : null != (n = this.delegate) && "function" == typeof n.attachmentEditorDidRequestRemovingAttributeForAttachment ? n.attachmentEditorDidRequestRemovingAttributeForAttachment("caption", this.attachment) : void 0) : void 0;
        }, p.prototype.makeElementMutable = d(function () {
          return {
            "do": function (t) {
              return function () {
                return t.element.dataset.trixMutable = !0;
              };
            }(this),
            undo: function (t) {
              return function () {
                return delete t.element.dataset.trixMutable;
              };
            }(this)
          };
        }), p.prototype.addToolbar = d(function () {
          var n, r, u;
          return n = a({
            tagName: "div",
            className: t.attachmentToolbar,
            data: {
              trixMutable: !0
            }
          }), n.innerHTML = '<div class="trix-button-row">\n  <span class="trix-button-group trix-button-group--actions">\n    <button type="button" data-trix-action="remove" class="trix-button trix-button--remove" title="' + s.remove + '">' + s.remove + "</button>\n  </span>\n</div>", this.attachment.isPreviewable() && (r = i(this.attachment.getFilename()), u = i(this.attachment.getFormattedFilesize()), n.innerHTML += '<div class="' + t.attachmentMetadataContainer + '">\n  <span class="' + t.attachmentMetadata + '">\n    <span class="' + t.attachmentName + '" title="' + r + '">' + r + '</span>\n    <span class="' + t.attachmentSize + '">' + u + "</span>\n  </span>\n</div>"), o("click", {
            onElement: n,
            withCallback: this.didClickToolbar
          }), o("click", {
            onElement: n,
            matchingSelector: "[data-trix-action]",
            withCallback: this.didClickActionButton
          }), {
            "do": function (t) {
              return function () {
                return t.element.appendChild(n);
              };
            }(this),
            undo: function () {
              return function () {
                return e.removeNode(n);
              };
            }(this)
          };
        }), p.prototype.installCaptionEditor = d(function () {
          var i, r, u, c, l;
          return c = a({
            tagName: "textarea",
            className: t.attachmentCaptionEditor,
            attributes: {
              placeholder: s.captionPlaceholder
            },
            data: {
              trixMutable: !0
            }
          }), c.value = this.attachmentPiece.getCaption(), l = c.cloneNode(), l.classList.add("trix-autoresize-clone"), l.tabIndex = -1, i = function i() {
            return l.value = c.value, c.style.height = l.scrollHeight + "px";
          }, o("input", {
            onElement: c,
            withCallback: i
          }), o("input", {
            onElement: c,
            withCallback: this.didInputCaption
          }), o("keydown", {
            onElement: c,
            withCallback: this.didKeyDownCaption
          }), o("change", {
            onElement: c,
            withCallback: this.didChangeCaption
          }), o("blur", {
            onElement: c,
            withCallback: this.didBlurCaption
          }), u = this.element.querySelector("figcaption"), r = u.cloneNode(), {
            "do": function (e) {
              return function () {
                return u.style.display = "none", r.appendChild(c), r.appendChild(l), r.classList.add(t.attachmentCaption + "--editing"), u.parentElement.insertBefore(r, u), i(), e.options.editCaption ? n(function () {
                  return c.focus();
                }) : void 0;
              };
            }(this),
            undo: function undo() {
              return e.removeNode(r), u.style.display = null;
            }
          };
        }), p.prototype.didClickToolbar = function (t) {
          return t.preventDefault(), t.stopPropagation();
        }, p.prototype.didClickActionButton = function (t) {
          var e, n;

          switch (e = t.target.getAttribute("data-trix-action")) {
            case "remove":
              return null != (n = this.delegate) ? n.attachmentEditorDidRequestRemovalOfAttachment(this.attachment) : void 0;
          }
        }, p.prototype.didKeyDownCaption = function (t) {
          var e;
          return "return" === r[t.keyCode] ? (t.preventDefault(), this.savePendingCaption(), null != (e = this.delegate) && "function" == typeof e.attachmentEditorDidRequestDeselectingAttachment ? e.attachmentEditorDidRequestDeselectingAttachment(this.attachment) : void 0) : void 0;
        }, p.prototype.didInputCaption = function (t) {
          return this.pendingCaption = t.target.value.replace(/\s/g, " ").trim();
        }, p.prototype.didChangeCaption = function () {
          return this.savePendingCaption();
        }, p.prototype.didBlurCaption = function () {
          return this.savePendingCaption();
        }, p;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function o(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          r.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          r = {}.hasOwnProperty;

      i = e.makeElement, t = e.config.css, e.AttachmentView = function (r) {
        function s() {
          s.__super__.constructor.apply(this, arguments), this.attachment = this.object, this.attachment.uploadProgressDelegate = this, this.attachmentPiece = this.options.piece;
        }

        var a;
        return o(s, r), s.attachmentSelector = "[data-trix-attachment]", s.prototype.createContentNodes = function () {
          return [];
        }, s.prototype.createNodes = function () {
          var e, n, o, r, s, u, c;
          if (e = r = i({
            tagName: "figure",
            className: this.getClassName(),
            data: this.getData(),
            editable: !1
          }), (n = this.getHref()) && (r = i({
            tagName: "a",
            editable: !1,
            attributes: {
              href: n,
              tabindex: -1
            }
          }), e.appendChild(r)), this.attachment.hasContent()) r.innerHTML = this.attachment.getContent();else for (c = this.createContentNodes(), o = 0, s = c.length; s > o; o++) {
            u = c[o], r.appendChild(u);
          }
          return r.appendChild(this.createCaptionElement()), this.attachment.isPending() && (this.progressElement = i({
            tagName: "progress",
            attributes: {
              "class": t.attachmentProgress,
              value: this.attachment.getUploadProgress(),
              max: 100
            },
            data: {
              trixMutable: !0,
              trixStoreKey: ["progressElement", this.attachment.id].join("/")
            }
          }), e.appendChild(this.progressElement)), [a("left"), e, a("right")];
        }, s.prototype.createCaptionElement = function () {
          var e, n, o, r, s, a, u;
          return o = i({
            tagName: "figcaption",
            className: t.attachmentCaption
          }), (e = this.attachmentPiece.getCaption()) ? (o.classList.add(t.attachmentCaption + "--edited"), o.textContent = e) : (n = this.getCaptionConfig(), n.name && (r = this.attachment.getFilename()), n.size && (a = this.attachment.getFormattedFilesize()), r && (s = i({
            tagName: "span",
            className: t.attachmentName,
            textContent: r
          }), o.appendChild(s)), a && (r && o.appendChild(document.createTextNode(" ")), u = i({
            tagName: "span",
            className: t.attachmentSize,
            textContent: a
          }), o.appendChild(u))), o;
        }, s.prototype.getClassName = function () {
          var e, n;
          return n = [t.attachment, t.attachment + "--" + this.attachment.getType()], (e = this.attachment.getExtension()) && n.push(t.attachment + "--" + e), n.join(" ");
        }, s.prototype.getData = function () {
          var t, e;
          return e = {
            trixAttachment: JSON.stringify(this.attachment),
            trixContentType: this.attachment.getContentType(),
            trixId: this.attachment.id
          }, t = this.attachmentPiece.attributes, t.isEmpty() || (e.trixAttributes = JSON.stringify(t)), this.attachment.isPending() && (e.trixSerialize = !1), e;
        }, s.prototype.getHref = function () {
          return n(this.attachment.getContent(), "a") ? void 0 : this.attachment.getHref();
        }, s.prototype.getCaptionConfig = function () {
          var t, n, i;
          return i = this.attachment.getType(), t = e.copyObject(null != (n = e.config.attachments[i]) ? n.caption : void 0), "file" === i && (t.name = !0), t;
        }, s.prototype.findProgressElement = function () {
          var t;
          return null != (t = this.findElement()) ? t.querySelector("progress") : void 0;
        }, a = function a(t) {
          return i({
            tagName: "span",
            textContent: e.ZERO_WIDTH_SPACE,
            data: {
              trixCursorTarget: t,
              trixSerialize: !1
            }
          });
        }, s.prototype.attachmentDidChangeUploadProgress = function () {
          var t, e;
          return e = this.attachment.getUploadProgress(), null != (t = this.findProgressElement()) ? t.value = e : void 0;
        }, s;
      }(e.ObjectView), n = function n(t, e) {
        var n;
        return n = i("div"), n.innerHTML = null != t ? t : "", n.querySelector(e);
      };
    }.call(this), function () {
      var t,
          n = function n(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var o in e) {
          i.call(e, o) && (t[o] = e[o]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          i = {}.hasOwnProperty;

      t = e.makeElement, e.PreviewableAttachmentView = function (i) {
        function o() {
          o.__super__.constructor.apply(this, arguments), this.attachment.previewDelegate = this;
        }

        return n(o, i), o.prototype.createContentNodes = function () {
          return this.image = t({
            tagName: "img",
            attributes: {
              src: ""
            },
            data: {
              trixMutable: !0
            }
          }), this.refresh(this.image), [this.image];
        }, o.prototype.createCaptionElement = function () {
          var t;
          return t = o.__super__.createCaptionElement.apply(this, arguments), t.textContent || t.setAttribute("data-trix-placeholder", e.config.lang.captionPlaceholder), t;
        }, o.prototype.refresh = function (t) {
          var e;
          return null == t && (t = null != (e = this.findElement()) ? e.querySelector("img") : void 0), t ? this.updateAttributesForImage(t) : void 0;
        }, o.prototype.updateAttributesForImage = function (t) {
          var e, n, i, o, r, s;
          return r = this.attachment.getURL(), n = this.attachment.getPreviewURL(), t.src = n || r, n === r ? t.removeAttribute("data-trix-serialized-attributes") : (i = JSON.stringify({
            src: r
          }), t.setAttribute("data-trix-serialized-attributes", i)), s = this.attachment.getWidth(), e = this.attachment.getHeight(), null != s && (t.width = s), null != e && (t.height = e), o = ["imageElement", this.attachment.id, t.src, t.width, t.height].join("/"), t.dataset.trixStoreKey = o;
        }, o.prototype.attachmentDidChangeAttributes = function () {
          return this.refresh(this.image), this.refresh();
        }, o;
      }(e.AttachmentView);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function o(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          r.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          r = {}.hasOwnProperty;

      i = e.makeElement, t = e.findInnerElement, n = e.getTextConfig, e.PieceView = function (r) {
        function s() {
          var t;
          s.__super__.constructor.apply(this, arguments), this.piece = this.object, this.attributes = this.piece.getAttributes(), t = this.options, this.textConfig = t.textConfig, this.context = t.context, this.piece.attachment ? this.attachment = this.piece.attachment : this.string = this.piece.toString();
        }

        var a;
        return o(s, r), s.prototype.createNodes = function () {
          var e, n, i, o, r, s;

          if (s = this.attachment ? this.createAttachmentNodes() : this.createStringNodes(), e = this.createElement()) {
            for (i = t(e), n = 0, o = s.length; o > n; n++) {
              r = s[n], i.appendChild(r);
            }

            s = [e];
          }

          return s;
        }, s.prototype.createAttachmentNodes = function () {
          var t, n;
          return t = this.attachment.isPreviewable() ? e.PreviewableAttachmentView : e.AttachmentView, n = this.createChildView(t, this.piece.attachment, {
            piece: this.piece
          }), n.getNodes();
        }, s.prototype.createStringNodes = function () {
          var t, e, n, o, r, s, a, u, c, l;
          if (null != (u = this.textConfig) ? u.plaintext : void 0) return [document.createTextNode(this.string)];

          for (a = [], c = this.string.split("\n"), n = e = 0, o = c.length; o > e; n = ++e) {
            l = c[n], n > 0 && (t = i("br"), a.push(t)), (r = l.length) && (s = document.createTextNode(this.preserveSpaces(l)), a.push(s));
          }

          return a;
        }, s.prototype.createElement = function () {
          var t, e, o, r, s, a, u, c, l;
          c = {}, a = this.attributes;

          for (r in a) {
            if (l = a[r], (t = n(r)) && (t.tagName && (s = i(t.tagName), o ? (o.appendChild(s), o = s) : e = o = s), t.styleProperty && (c[t.styleProperty] = l), t.style)) {
              u = t.style;

              for (r in u) {
                l = u[r], c[r] = l;
              }
            }
          }

          if (Object.keys(c).length) {
            null == e && (e = i("span"));

            for (r in c) {
              l = c[r], e.style[r] = l;
            }
          }

          return e;
        }, s.prototype.createContainerElement = function () {
          var t, e, o, r, s;
          r = this.attributes;

          for (o in r) {
            if (s = r[o], (e = n(o)) && e.groupTagName) return t = {}, t[o] = s, i(e.groupTagName, t);
          }
        }, a = e.NON_BREAKING_SPACE, s.prototype.preserveSpaces = function (t) {
          return this.context.isLast && (t = t.replace(/\ $/, a)), t = t.replace(/(\S)\ {3}(\S)/g, "$1 " + a + " $2").replace(/\ {2}/g, a + " ").replace(/\ {2}/g, " " + a), (this.context.isFirst || this.context.followsWhitespace) && (t = t.replace(/^\ /, a)), t;
        }, s;
      }(e.ObjectView);
    }.call(this), function () {
      var t = function t(_t12, e) {
        function i() {
          this.constructor = _t12;
        }

        for (var o in e) {
          n.call(e, o) && (_t12[o] = e[o]);
        }

        return i.prototype = e.prototype, _t12.prototype = new i(), _t12.__super__ = e.prototype, _t12;
      },
          n = {}.hasOwnProperty;

      e.TextView = function (n) {
        function i() {
          i.__super__.constructor.apply(this, arguments), this.text = this.object, this.textConfig = this.options.textConfig;
        }

        var o;
        return t(i, n), i.prototype.createNodes = function () {
          var t, n, i, r, s, a, u, c, l, h;

          for (a = [], c = e.ObjectGroup.groupObjects(this.getPieces()), r = c.length - 1, i = n = 0, s = c.length; s > n; i = ++n) {
            u = c[i], t = {}, 0 === i && (t.isFirst = !0), i === r && (t.isLast = !0), o(l) && (t.followsWhitespace = !0), h = this.findOrCreateCachedChildView(e.PieceView, u, {
              textConfig: this.textConfig,
              context: t
            }), a.push.apply(a, h.getNodes()), l = u;
          }

          return a;
        }, i.prototype.getPieces = function () {
          var t, e, n, i, o;

          for (i = this.text.getPieces(), o = [], t = 0, e = i.length; e > t; t++) {
            n = i[t], n.hasAttribute("blockBreak") || o.push(n);
          }

          return o;
        }, o = function o(t) {
          return /\s$/.test(null != t ? t.toString() : void 0);
        }, i;
      }(e.ObjectView);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function o(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          r.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          r = {}.hasOwnProperty;

      i = e.makeElement, n = e.getBlockConfig, t = e.config.css, e.BlockView = function (r) {
        function s() {
          s.__super__.constructor.apply(this, arguments), this.block = this.object, this.attributes = this.block.getAttributes();
        }

        return o(s, r), s.prototype.createNodes = function () {
          var t, o, r, s, a, u, c, l, h;
          if (t = document.createComment("block"), u = [t], this.block.isEmpty() ? u.push(i("br")) : (l = null != (c = n(this.block.getLastAttribute())) ? c.text : void 0, h = this.findOrCreateCachedChildView(e.TextView, this.block.text, {
            textConfig: l
          }), u.push.apply(u, h.getNodes()), this.shouldAddExtraNewlineElement() && u.push(i("br"))), this.attributes.length) return u;

          for (o = i(e.config.blockAttributes["default"].tagName), r = 0, s = u.length; s > r; r++) {
            a = u[r], o.appendChild(a);
          }

          return [o];
        }, s.prototype.createContainerElement = function (e) {
          var o, r, s, a;
          return o = this.attributes[e], a = n(o).tagName, r = {
            tagName: a
          }, "attachmentGallery" === o && (s = this.block.getBlockBreakPosition(), r.className = t.attachmentGallery + " " + t.attachmentGallery + "--" + s), i(r);
        }, s.prototype.shouldAddExtraNewlineElement = function () {
          return /\n\n$/.test(this.block.toString());
        }, s;
      }(e.ObjectView);
    }.call(this), function () {
      var t,
          n,
          i = function i(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          o.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      t = e.defer, n = e.makeElement, e.DocumentView = function (o) {
        function r() {
          r.__super__.constructor.apply(this, arguments), this.element = this.options.element, this.elementStore = new e.ElementStore(), this.setDocument(this.object);
        }

        var s, a, u;
        return i(r, o), r.render = function (t) {
          var e, i;
          return e = n("div"), i = new this(t, {
            element: e
          }), i.render(), i.sync(), e;
        }, r.prototype.setDocument = function (t) {
          return t.isEqualTo(this.document) ? void 0 : this.document = this.object = t;
        }, r.prototype.render = function () {
          var t, i, o, r, s, a, u;

          if (this.childViews = [], this.shadowElement = n("div"), !this.document.isEmpty()) {
            for (s = e.ObjectGroup.groupObjects(this.document.getBlocks(), {
              asTree: !0
            }), a = [], t = 0, i = s.length; i > t; t++) {
              r = s[t], u = this.findOrCreateCachedChildView(e.BlockView, r), a.push(function () {
                var t, e, n, i;

                for (n = u.getNodes(), i = [], t = 0, e = n.length; e > t; t++) {
                  o = n[t], i.push(this.shadowElement.appendChild(o));
                }

                return i;
              }.call(this));
            }

            return a;
          }
        }, r.prototype.isSynced = function () {
          return s(this.shadowElement, this.element);
        }, r.prototype.sync = function () {
          var t;

          for (t = this.createDocumentFragmentForSync(); this.element.lastChild;) {
            this.element.removeChild(this.element.lastChild);
          }

          return this.element.appendChild(t), this.didSync();
        }, r.prototype.didSync = function () {
          return this.elementStore.reset(a(this.element)), t(function (t) {
            return function () {
              return t.garbageCollectCachedViews();
            };
          }(this));
        }, r.prototype.createDocumentFragmentForSync = function () {
          var t, e, n, i, o, r, s, u, c, l;

          for (e = document.createDocumentFragment(), u = this.shadowElement.childNodes, n = 0, o = u.length; o > n; n++) {
            s = u[n], e.appendChild(s.cloneNode(!0));
          }

          for (c = a(e), i = 0, r = c.length; r > i; i++) {
            t = c[i], (l = this.elementStore.remove(t)) && t.parentNode.replaceChild(l, t);
          }

          return e;
        }, a = function a(t) {
          return t.querySelectorAll("[data-trix-store-key]");
        }, s = function s(t, e) {
          return u(t.innerHTML) === u(e.innerHTML);
        }, u = function u(t) {
          return t.replace(/&nbsp;/g, " ");
        }, r;
      }(e.ObjectView);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s = function s(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          a = function a(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          u.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          u = {}.hasOwnProperty;

      i = e.findClosestElementFromNode, o = e.handleEvent, r = e.innerElementIsActive, n = e.defer, t = e.AttachmentView.attachmentSelector, e.CompositionController = function (u) {
        function c(n, i) {
          this.element = n, this.composition = i, this.didClickAttachment = s(this.didClickAttachment, this), this.didBlur = s(this.didBlur, this), this.didFocus = s(this.didFocus, this), this.documentView = new e.DocumentView(this.composition.document, {
            element: this.element
          }), o("focus", {
            onElement: this.element,
            withCallback: this.didFocus
          }), o("blur", {
            onElement: this.element,
            withCallback: this.didBlur
          }), o("click", {
            onElement: this.element,
            matchingSelector: "a[contenteditable=false]",
            preventDefault: !0
          }), o("mousedown", {
            onElement: this.element,
            matchingSelector: t,
            withCallback: this.didClickAttachment
          }), o("click", {
            onElement: this.element,
            matchingSelector: "a" + t,
            preventDefault: !0
          });
        }

        return a(c, u), c.prototype.didFocus = function () {
          var t, e, n;
          return t = function (t) {
            return function () {
              var e;
              return t.focused ? void 0 : (t.focused = !0, null != (e = t.delegate) && "function" == typeof e.compositionControllerDidFocus ? e.compositionControllerDidFocus() : void 0);
            };
          }(this), null != (e = null != (n = this.blurPromise) ? n.then(t) : void 0) ? e : t();
        }, c.prototype.didBlur = function () {
          return this.blurPromise = new Promise(function (t) {
            return function (e) {
              return n(function () {
                var n;
                return r(t.element) || (t.focused = null, null != (n = t.delegate) && "function" == typeof n.compositionControllerDidBlur && n.compositionControllerDidBlur()), t.blurPromise = null, e();
              });
            };
          }(this));
        }, c.prototype.didClickAttachment = function (t, e) {
          var n, o, r;
          return n = this.findAttachmentForElement(e), o = null != i(t.target, {
            matchingSelector: "figcaption"
          }), null != (r = this.delegate) && "function" == typeof r.compositionControllerDidSelectAttachment ? r.compositionControllerDidSelectAttachment(n, {
            editCaption: o
          }) : void 0;
        }, c.prototype.getSerializableElement = function () {
          return this.isEditingAttachment() ? this.documentView.shadowElement : this.element;
        }, c.prototype.render = function () {
          var t, e, n;
          return this.revision !== this.composition.revision && (this.documentView.setDocument(this.composition.document), this.documentView.render(), this.revision = this.composition.revision), this.canSyncDocumentView() && !this.documentView.isSynced() && (null != (t = this.delegate) && "function" == typeof t.compositionControllerWillSyncDocumentView && t.compositionControllerWillSyncDocumentView(), this.documentView.sync(), null != (e = this.delegate) && "function" == typeof e.compositionControllerDidSyncDocumentView && e.compositionControllerDidSyncDocumentView()), null != (n = this.delegate) && "function" == typeof n.compositionControllerDidRender ? n.compositionControllerDidRender() : void 0;
        }, c.prototype.rerenderViewForObject = function (t) {
          return this.invalidateViewForObject(t), this.render();
        }, c.prototype.invalidateViewForObject = function (t) {
          return this.documentView.invalidateViewForObject(t);
        }, c.prototype.isViewCachingEnabled = function () {
          return this.documentView.isViewCachingEnabled();
        }, c.prototype.enableViewCaching = function () {
          return this.documentView.enableViewCaching();
        }, c.prototype.disableViewCaching = function () {
          return this.documentView.disableViewCaching();
        }, c.prototype.refreshViewCache = function () {
          return this.documentView.garbageCollectCachedViews();
        }, c.prototype.isEditingAttachment = function () {
          return null != this.attachmentEditor;
        }, c.prototype.installAttachmentEditorForAttachment = function (t, n) {
          var i, o, r;
          if ((null != (r = this.attachmentEditor) ? r.attachment : void 0) !== t && (o = this.documentView.findElementForObject(t))) return this.uninstallAttachmentEditor(), i = this.composition.document.getAttachmentPieceForAttachment(t), this.attachmentEditor = new e.AttachmentEditorController(i, o, this.element, n), this.attachmentEditor.delegate = this;
        }, c.prototype.uninstallAttachmentEditor = function () {
          var t;
          return null != (t = this.attachmentEditor) ? t.uninstall() : void 0;
        }, c.prototype.didUninstallAttachmentEditor = function () {
          return this.attachmentEditor = null, this.render();
        }, c.prototype.attachmentEditorDidRequestUpdatingAttributesForAttachment = function (t, e) {
          var n;
          return null != (n = this.delegate) && "function" == typeof n.compositionControllerWillUpdateAttachment && n.compositionControllerWillUpdateAttachment(e), this.composition.updateAttributesForAttachment(t, e);
        }, c.prototype.attachmentEditorDidRequestRemovingAttributeForAttachment = function (t, e) {
          var n;
          return null != (n = this.delegate) && "function" == typeof n.compositionControllerWillUpdateAttachment && n.compositionControllerWillUpdateAttachment(e), this.composition.removeAttributeForAttachment(t, e);
        }, c.prototype.attachmentEditorDidRequestRemovalOfAttachment = function (t) {
          var e;
          return null != (e = this.delegate) && "function" == typeof e.compositionControllerDidRequestRemovalOfAttachment ? e.compositionControllerDidRequestRemovalOfAttachment(t) : void 0;
        }, c.prototype.attachmentEditorDidRequestDeselectingAttachment = function (t) {
          var e;
          return null != (e = this.delegate) && "function" == typeof e.compositionControllerDidRequestDeselectingAttachment ? e.compositionControllerDidRequestDeselectingAttachment(t) : void 0;
        }, c.prototype.canSyncDocumentView = function () {
          return !this.isEditingAttachment();
        }, c.prototype.findAttachmentForElement = function (t) {
          return this.composition.document.getAttachmentById(parseInt(t.dataset.trixId, 10));
        }, c;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function o(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          r = function r(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          s.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          s = {}.hasOwnProperty;

      n = e.handleEvent, i = e.triggerEvent, t = e.findClosestElementFromNode, e.ToolbarController = function (e) {
        function s(t) {
          this.element = t, this.didKeyDownDialogInput = o(this.didKeyDownDialogInput, this), this.didClickDialogButton = o(this.didClickDialogButton, this), this.didClickAttributeButton = o(this.didClickAttributeButton, this), this.didClickActionButton = o(this.didClickActionButton, this), this.attributes = {}, this.actions = {}, this.resetDialogInputs(), n("mousedown", {
            onElement: this.element,
            matchingSelector: a,
            withCallback: this.didClickActionButton
          }), n("mousedown", {
            onElement: this.element,
            matchingSelector: c,
            withCallback: this.didClickAttributeButton
          }), n("click", {
            onElement: this.element,
            matchingSelector: v,
            preventDefault: !0
          }), n("click", {
            onElement: this.element,
            matchingSelector: l,
            withCallback: this.didClickDialogButton
          }), n("keydown", {
            onElement: this.element,
            matchingSelector: h,
            withCallback: this.didKeyDownDialogInput
          });
        }

        var a, u, c, l, h, p, d, f, g, m, v;
        return r(s, e), c = "[data-trix-attribute]", a = "[data-trix-action]", v = c + ", " + a, p = "[data-trix-dialog]", u = p + "[data-trix-active]", l = p + " [data-trix-method]", h = p + " [data-trix-input]", s.prototype.didClickActionButton = function (t, e) {
          var n, i, o;
          return null != (i = this.delegate) && i.toolbarDidClickButton(), t.preventDefault(), n = d(e), this.getDialog(n) ? this.toggleDialog(n) : null != (o = this.delegate) ? o.toolbarDidInvokeAction(n) : void 0;
        }, s.prototype.didClickAttributeButton = function (t, e) {
          var n, i, o;
          return null != (i = this.delegate) && i.toolbarDidClickButton(), t.preventDefault(), n = f(e), this.getDialog(n) ? this.toggleDialog(n) : null != (o = this.delegate) && o.toolbarDidToggleAttribute(n), this.refreshAttributeButtons();
        }, s.prototype.didClickDialogButton = function (e, n) {
          var i, o;
          return i = t(n, {
            matchingSelector: p
          }), o = n.getAttribute("data-trix-method"), this[o].call(this, i);
        }, s.prototype.didKeyDownDialogInput = function (t, e) {
          var n, i;
          return 13 === t.keyCode && (t.preventDefault(), n = e.getAttribute("name"), i = this.getDialog(n), this.setAttribute(i)), 27 === t.keyCode ? (t.preventDefault(), this.hideDialog()) : void 0;
        }, s.prototype.updateActions = function (t) {
          return this.actions = t, this.refreshActionButtons();
        }, s.prototype.refreshActionButtons = function () {
          return this.eachActionButton(function (t) {
            return function (e, n) {
              return e.disabled = t.actions[n] === !1;
            };
          }(this));
        }, s.prototype.eachActionButton = function (t) {
          var e, n, i, o, r;

          for (o = this.element.querySelectorAll(a), r = [], n = 0, i = o.length; i > n; n++) {
            e = o[n], r.push(t(e, d(e)));
          }

          return r;
        }, s.prototype.updateAttributes = function (t) {
          return this.attributes = t, this.refreshAttributeButtons();
        }, s.prototype.refreshAttributeButtons = function () {
          return this.eachAttributeButton(function (t) {
            return function (e, n) {
              return e.disabled = t.attributes[n] === !1, t.attributes[n] || t.dialogIsVisible(n) ? (e.setAttribute("data-trix-active", ""), e.classList.add("trix-active")) : (e.removeAttribute("data-trix-active"), e.classList.remove("trix-active"));
            };
          }(this));
        }, s.prototype.eachAttributeButton = function (t) {
          var e, n, i, o, r;

          for (o = this.element.querySelectorAll(c), r = [], n = 0, i = o.length; i > n; n++) {
            e = o[n], r.push(t(e, f(e)));
          }

          return r;
        }, s.prototype.applyKeyboardCommand = function (t) {
          var e, n, o, r, s, a, u;

          for (s = JSON.stringify(t.sort()), u = this.element.querySelectorAll("[data-trix-key]"), r = 0, a = u.length; a > r; r++) {
            if (e = u[r], o = e.getAttribute("data-trix-key").split("+"), n = JSON.stringify(o.sort()), n === s) return i("mousedown", {
              onElement: e
            }), !0;
          }

          return !1;
        }, s.prototype.dialogIsVisible = function (t) {
          var e;
          return (e = this.getDialog(t)) ? e.hasAttribute("data-trix-active") : void 0;
        }, s.prototype.toggleDialog = function (t) {
          return this.dialogIsVisible(t) ? this.hideDialog() : this.showDialog(t);
        }, s.prototype.showDialog = function (t) {
          var e, n, i, o, r, s, a, u, c, l;

          for (this.hideDialog(), null != (a = this.delegate) && a.toolbarWillShowDialog(), i = this.getDialog(t), i.setAttribute("data-trix-active", ""), i.classList.add("trix-active"), u = i.querySelectorAll("input[disabled]"), o = 0, s = u.length; s > o; o++) {
            n = u[o], n.removeAttribute("disabled");
          }

          return (e = f(i)) && (r = m(i, t)) && (r.value = null != (c = this.attributes[e]) ? c : "", r.select()), null != (l = this.delegate) ? l.toolbarDidShowDialog(t) : void 0;
        }, s.prototype.setAttribute = function (t) {
          var e, n, i;
          return e = f(t), n = m(t, e), n.willValidate && !n.checkValidity() ? (n.setAttribute("data-trix-validate", ""), n.classList.add("trix-validate"), n.focus()) : (null != (i = this.delegate) && i.toolbarDidUpdateAttribute(e, n.value), this.hideDialog());
        }, s.prototype.removeAttribute = function (t) {
          var e, n;
          return e = f(t), null != (n = this.delegate) && n.toolbarDidRemoveAttribute(e), this.hideDialog();
        }, s.prototype.hideDialog = function () {
          var t, e;
          return (t = this.element.querySelector(u)) ? (t.removeAttribute("data-trix-active"), t.classList.remove("trix-active"), this.resetDialogInputs(), null != (e = this.delegate) ? e.toolbarDidHideDialog(g(t)) : void 0) : void 0;
        }, s.prototype.resetDialogInputs = function () {
          var t, e, n, i, o;

          for (i = this.element.querySelectorAll(h), o = [], t = 0, n = i.length; n > t; t++) {
            e = i[t], e.setAttribute("disabled", "disabled"), e.removeAttribute("data-trix-validate"), o.push(e.classList.remove("trix-validate"));
          }

          return o;
        }, s.prototype.getDialog = function (t) {
          return this.element.querySelector("[data-trix-dialog=" + t + "]");
        }, m = function m(t, e) {
          return null == e && (e = f(t)), t.querySelector("[data-trix-input][name='" + e + "']");
        }, d = function d(t) {
          return t.getAttribute("data-trix-action");
        }, f = function f(t) {
          var e;
          return null != (e = t.getAttribute("data-trix-attribute")) ? e : t.getAttribute("data-trix-dialog-attribute");
        }, g = function g(t) {
          return t.getAttribute("data-trix-dialog");
        }, s;
      }(e.BasicObject);
    }.call(this), function () {
      var t = function t(_t13, e) {
        function i() {
          this.constructor = _t13;
        }

        for (var o in e) {
          n.call(e, o) && (_t13[o] = e[o]);
        }

        return i.prototype = e.prototype, _t13.prototype = new i(), _t13.__super__ = e.prototype, _t13;
      },
          n = {}.hasOwnProperty;

      e.ImagePreloadOperation = function (e) {
        function n(t) {
          this.url = t;
        }

        return t(n, e), n.prototype.perform = function (t) {
          var e;
          return e = new Image(), e.onload = function (n) {
            return function () {
              return e.width = n.width = e.naturalWidth, e.height = n.height = e.naturalHeight, t(!0, e);
            };
          }(this), e.onerror = function () {
            return t(!1);
          }, e.src = this.url;
        }, n;
      }(e.Operation);
    }.call(this), function () {
      var t = function t(_t14, e) {
        return function () {
          return _t14.apply(e, arguments);
        };
      },
          n = function n(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var o in e) {
          i.call(e, o) && (t[o] = e[o]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          i = {}.hasOwnProperty;

      e.Attachment = function (i) {
        function o(n) {
          null == n && (n = {}), this.releaseFile = t(this.releaseFile, this), o.__super__.constructor.apply(this, arguments), this.attributes = e.Hash.box(n), this.didChangeAttributes();
        }

        return n(o, i), o.previewablePattern = /^image(\/(gif|png|jpe?g)|$)/, o.attachmentForFile = function (t) {
          var e, n;
          return n = this.attributesForFile(t), e = new this(n), e.setFile(t), e;
        }, o.attributesForFile = function (t) {
          return new e.Hash({
            filename: t.name,
            filesize: t.size,
            contentType: t.type
          });
        }, o.fromJSON = function (t) {
          return new this(t);
        }, o.prototype.getAttribute = function (t) {
          return this.attributes.get(t);
        }, o.prototype.hasAttribute = function (t) {
          return this.attributes.has(t);
        }, o.prototype.getAttributes = function () {
          return this.attributes.toObject();
        }, o.prototype.setAttributes = function (t) {
          var e, n, i;
          return null == t && (t = {}), e = this.attributes.merge(t), this.attributes.isEqualTo(e) ? void 0 : (this.attributes = e, this.didChangeAttributes(), null != (n = this.previewDelegate) && "function" == typeof n.attachmentDidChangeAttributes && n.attachmentDidChangeAttributes(this), null != (i = this.delegate) && "function" == typeof i.attachmentDidChangeAttributes ? i.attachmentDidChangeAttributes(this) : void 0);
        }, o.prototype.didChangeAttributes = function () {
          return this.isPreviewable() ? this.preloadURL() : void 0;
        }, o.prototype.isPending = function () {
          return null != this.file && !(this.getURL() || this.getHref());
        }, o.prototype.isPreviewable = function () {
          return this.attributes.has("previewable") ? this.attributes.get("previewable") : this.constructor.previewablePattern.test(this.getContentType());
        }, o.prototype.getType = function () {
          return this.hasContent() ? "content" : this.isPreviewable() ? "preview" : "file";
        }, o.prototype.getURL = function () {
          return this.attributes.get("url");
        }, o.prototype.getHref = function () {
          return this.attributes.get("href");
        }, o.prototype.getFilename = function () {
          var t;
          return null != (t = this.attributes.get("filename")) ? t : "";
        }, o.prototype.getFilesize = function () {
          return this.attributes.get("filesize");
        }, o.prototype.getFormattedFilesize = function () {
          var t;
          return t = this.attributes.get("filesize"), "number" == typeof t ? e.config.fileSize.formatter(t) : "";
        }, o.prototype.getExtension = function () {
          var t;
          return null != (t = this.getFilename().match(/\.(\w+)$/)) ? t[1].toLowerCase() : void 0;
        }, o.prototype.getContentType = function () {
          return this.attributes.get("contentType");
        }, o.prototype.hasContent = function () {
          return this.attributes.has("content");
        }, o.prototype.getContent = function () {
          return this.attributes.get("content");
        }, o.prototype.getWidth = function () {
          return this.attributes.get("width");
        }, o.prototype.getHeight = function () {
          return this.attributes.get("height");
        }, o.prototype.getFile = function () {
          return this.file;
        }, o.prototype.setFile = function (t) {
          return this.file = t, this.isPreviewable() ? this.preloadFile() : void 0;
        }, o.prototype.releaseFile = function () {
          return this.releasePreloadedFile(), this.file = null;
        }, o.prototype.getUploadProgress = function () {
          var t;
          return null != (t = this.uploadProgress) ? t : 0;
        }, o.prototype.setUploadProgress = function (t) {
          var e;
          return this.uploadProgress !== t ? (this.uploadProgress = t, null != (e = this.uploadProgressDelegate) && "function" == typeof e.attachmentDidChangeUploadProgress ? e.attachmentDidChangeUploadProgress(this) : void 0) : void 0;
        }, o.prototype.toJSON = function () {
          return this.getAttributes();
        }, o.prototype.getCacheKey = function () {
          return [o.__super__.getCacheKey.apply(this, arguments), this.attributes.getCacheKey(), this.getPreviewURL()].join("/");
        }, o.prototype.getPreviewURL = function () {
          return this.previewURL || this.preloadingURL;
        }, o.prototype.setPreviewURL = function (t) {
          var e, n;
          return t !== this.getPreviewURL() ? (this.previewURL = t, null != (e = this.previewDelegate) && "function" == typeof e.attachmentDidChangeAttributes && e.attachmentDidChangeAttributes(this), null != (n = this.delegate) && "function" == typeof n.attachmentDidChangePreviewURL ? n.attachmentDidChangePreviewURL(this) : void 0) : void 0;
        }, o.prototype.preloadURL = function () {
          return this.preload(this.getURL(), this.releaseFile);
        }, o.prototype.preloadFile = function () {
          return this.file ? (this.fileObjectURL = URL.createObjectURL(this.file), this.preload(this.fileObjectURL)) : void 0;
        }, o.prototype.releasePreloadedFile = function () {
          return this.fileObjectURL ? (URL.revokeObjectURL(this.fileObjectURL), this.fileObjectURL = null) : void 0;
        }, o.prototype.preload = function (t, n) {
          var i;
          return t && t !== this.getPreviewURL() ? (this.preloadingURL = t, i = new e.ImagePreloadOperation(t), i.then(function (e) {
            return function (i) {
              var o, r;
              return r = i.width, o = i.height, e.setAttributes({
                width: r,
                height: o
              }), e.preloadingURL = null, e.setPreviewURL(t), "function" == typeof n ? n() : void 0;
            };
          }(this))) : void 0;
        }, o;
      }(e.Object);
    }.call(this), function () {
      var t = function t(_t15, e) {
        function i() {
          this.constructor = _t15;
        }

        for (var o in e) {
          n.call(e, o) && (_t15[o] = e[o]);
        }

        return i.prototype = e.prototype, _t15.prototype = new i(), _t15.__super__ = e.prototype, _t15;
      },
          n = {}.hasOwnProperty;

      e.Piece = function (n) {
        function i(t, n) {
          null == n && (n = {}), i.__super__.constructor.apply(this, arguments), this.attributes = e.Hash.box(n);
        }

        return t(i, n), i.types = {}, i.registerType = function (t, e) {
          return e.type = t, this.types[t] = e;
        }, i.fromJSON = function (t) {
          var e;
          return (e = this.types[t.type]) ? e.fromJSON(t) : void 0;
        }, i.prototype.copyWithAttributes = function (t) {
          return new this.constructor(this.getValue(), t);
        }, i.prototype.copyWithAdditionalAttributes = function (t) {
          return this.copyWithAttributes(this.attributes.merge(t));
        }, i.prototype.copyWithoutAttribute = function (t) {
          return this.copyWithAttributes(this.attributes.remove(t));
        }, i.prototype.copy = function () {
          return this.copyWithAttributes(this.attributes);
        }, i.prototype.getAttribute = function (t) {
          return this.attributes.get(t);
        }, i.prototype.getAttributesHash = function () {
          return this.attributes;
        }, i.prototype.getAttributes = function () {
          return this.attributes.toObject();
        }, i.prototype.getCommonAttributes = function () {
          var t, e, n;
          return (n = pieceList.getPieceAtIndex(0)) ? (t = n.attributes, e = t.getKeys(), pieceList.eachPiece(function (n) {
            return e = t.getKeysCommonToHash(n.attributes), t = t.slice(e);
          }), t.toObject()) : {};
        }, i.prototype.hasAttribute = function (t) {
          return this.attributes.has(t);
        }, i.prototype.hasSameStringValueAsPiece = function (t) {
          return null != t && this.toString() === t.toString();
        }, i.prototype.hasSameAttributesAsPiece = function (t) {
          return null != t && (this.attributes === t.attributes || this.attributes.isEqualTo(t.attributes));
        }, i.prototype.isBlockBreak = function () {
          return !1;
        }, i.prototype.isEqualTo = function (t) {
          return i.__super__.isEqualTo.apply(this, arguments) || this.hasSameConstructorAs(t) && this.hasSameStringValueAsPiece(t) && this.hasSameAttributesAsPiece(t);
        }, i.prototype.isEmpty = function () {
          return 0 === this.length;
        }, i.prototype.isSerializable = function () {
          return !0;
        }, i.prototype.toJSON = function () {
          return {
            type: this.constructor.type,
            attributes: this.getAttributes()
          };
        }, i.prototype.contentsForInspection = function () {
          return {
            type: this.constructor.type,
            attributes: this.attributes.inspect()
          };
        }, i.prototype.canBeGrouped = function () {
          return this.hasAttribute("href");
        }, i.prototype.canBeGroupedWith = function (t) {
          return this.getAttribute("href") === t.getAttribute("href");
        }, i.prototype.getLength = function () {
          return this.length;
        }, i.prototype.canBeConsolidatedWith = function () {
          return !1;
        }, i;
      }(e.Object);
    }.call(this), function () {
      var t = function t(_t16, e) {
        function i() {
          this.constructor = _t16;
        }

        for (var o in e) {
          n.call(e, o) && (_t16[o] = e[o]);
        }

        return i.prototype = e.prototype, _t16.prototype = new i(), _t16.__super__ = e.prototype, _t16;
      },
          n = {}.hasOwnProperty;

      e.Piece.registerType("attachment", e.AttachmentPiece = function (n) {
        function i(t) {
          this.attachment = t, i.__super__.constructor.apply(this, arguments), this.length = 1, this.ensureAttachmentExclusivelyHasAttribute("href"), this.attachment.hasContent() || this.removeProhibitedAttributes();
        }

        return t(i, n), i.fromJSON = function (t) {
          return new this(e.Attachment.fromJSON(t.attachment), t.attributes);
        }, i.permittedAttributes = ["caption", "presentation"], i.prototype.ensureAttachmentExclusivelyHasAttribute = function (t) {
          return this.hasAttribute(t) ? (this.attachment.hasAttribute(t) || this.attachment.setAttributes(this.attributes.slice(t)), this.attributes = this.attributes.remove(t)) : void 0;
        }, i.prototype.removeProhibitedAttributes = function () {
          var t;
          return t = this.attributes.slice(this.constructor.permittedAttributes), t.isEqualTo(this.attributes) ? void 0 : this.attributes = t;
        }, i.prototype.getValue = function () {
          return this.attachment;
        }, i.prototype.isSerializable = function () {
          return !this.attachment.isPending();
        }, i.prototype.getCaption = function () {
          var t;
          return null != (t = this.attributes.get("caption")) ? t : "";
        }, i.prototype.isEqualTo = function (t) {
          var e;
          return i.__super__.isEqualTo.apply(this, arguments) && this.attachment.id === (null != t && null != (e = t.attachment) ? e.id : void 0);
        }, i.prototype.toString = function () {
          return e.OBJECT_REPLACEMENT_CHARACTER;
        }, i.prototype.toJSON = function () {
          var t;
          return t = i.__super__.toJSON.apply(this, arguments), t.attachment = this.attachment, t;
        }, i.prototype.getCacheKey = function () {
          return [i.__super__.getCacheKey.apply(this, arguments), this.attachment.getCacheKey()].join("/");
        }, i.prototype.toConsole = function () {
          return JSON.stringify(this.toString());
        }, i;
      }(e.Piece));
    }.call(this), function () {
      var t,
          n = function n(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var o in e) {
          i.call(e, o) && (t[o] = e[o]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          i = {}.hasOwnProperty;

      t = e.normalizeNewlines, e.Piece.registerType("string", e.StringPiece = function (e) {
        function i(e) {
          i.__super__.constructor.apply(this, arguments), this.string = t(e), this.length = this.string.length;
        }

        return n(i, e), i.fromJSON = function (t) {
          return new this(t.string, t.attributes);
        }, i.prototype.getValue = function () {
          return this.string;
        }, i.prototype.toString = function () {
          return this.string.toString();
        }, i.prototype.isBlockBreak = function () {
          return "\n" === this.toString() && this.getAttribute("blockBreak") === !0;
        }, i.prototype.toJSON = function () {
          var t;
          return t = i.__super__.toJSON.apply(this, arguments), t.string = this.string, t;
        }, i.prototype.canBeConsolidatedWith = function (t) {
          return null != t && this.hasSameConstructorAs(t) && this.hasSameAttributesAsPiece(t);
        }, i.prototype.consolidateWith = function (t) {
          return new this.constructor(this.toString() + t.toString(), this.attributes);
        }, i.prototype.splitAtOffset = function (t) {
          var e, n;
          return 0 === t ? (e = null, n = this) : t === this.length ? (e = this, n = null) : (e = new this.constructor(this.string.slice(0, t), this.attributes), n = new this.constructor(this.string.slice(t), this.attributes)), [e, n];
        }, i.prototype.toConsole = function () {
          var t;
          return t = this.string, t.length > 15 && (t = t.slice(0, 14) + "\u2026"), JSON.stringify(t.toString());
        }, i;
      }(e.Piece));
    }.call(this), function () {
      var t,
          n = function n(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var o in e) {
          i.call(e, o) && (t[o] = e[o]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          i = {}.hasOwnProperty,
          o = [].slice;

      t = e.spliceArray, e.SplittableList = function (e) {
        function i(t) {
          null == t && (t = []), i.__super__.constructor.apply(this, arguments), this.objects = t.slice(0), this.length = this.objects.length;
        }

        var r, s, a;
        return n(i, e), i.box = function (t) {
          return t instanceof this ? t : new this(t);
        }, i.prototype.indexOf = function (t) {
          return this.objects.indexOf(t);
        }, i.prototype.splice = function () {
          var e;
          return e = 1 <= arguments.length ? o.call(arguments, 0) : [], new this.constructor(t.apply(null, [this.objects].concat(o.call(e))));
        }, i.prototype.eachObject = function (t) {
          var e, n, i, o, r, s;

          for (r = this.objects, s = [], n = e = 0, i = r.length; i > e; n = ++e) {
            o = r[n], s.push(t(o, n));
          }

          return s;
        }, i.prototype.insertObjectAtIndex = function (t, e) {
          return this.splice(e, 0, t);
        }, i.prototype.insertSplittableListAtIndex = function (t, e) {
          return this.splice.apply(this, [e, 0].concat(o.call(t.objects)));
        }, i.prototype.insertSplittableListAtPosition = function (t, e) {
          var n, i, o;
          return o = this.splitObjectAtPosition(e), i = o[0], n = o[1], new this.constructor(i).insertSplittableListAtIndex(t, n);
        }, i.prototype.editObjectAtIndex = function (t, e) {
          return this.replaceObjectAtIndex(e(this.objects[t]), t);
        }, i.prototype.replaceObjectAtIndex = function (t, e) {
          return this.splice(e, 1, t);
        }, i.prototype.removeObjectAtIndex = function (t) {
          return this.splice(t, 1);
        }, i.prototype.getObjectAtIndex = function (t) {
          return this.objects[t];
        }, i.prototype.getSplittableListInRange = function (t) {
          var e, n, i, o;
          return i = this.splitObjectsAtRange(t), n = i[0], e = i[1], o = i[2], new this.constructor(n.slice(e, o + 1));
        }, i.prototype.selectSplittableList = function (t) {
          var e, n;
          return n = function () {
            var n, i, o, r;

            for (o = this.objects, r = [], n = 0, i = o.length; i > n; n++) {
              e = o[n], t(e) && r.push(e);
            }

            return r;
          }.call(this), new this.constructor(n);
        }, i.prototype.removeObjectsInRange = function (t) {
          var e, n, i, o;
          return i = this.splitObjectsAtRange(t), n = i[0], e = i[1], o = i[2], new this.constructor(n).splice(e, o - e + 1);
        }, i.prototype.transformObjectsInRange = function (t, e) {
          var n, i, o, r, s, a, u;
          return s = this.splitObjectsAtRange(t), r = s[0], i = s[1], a = s[2], u = function () {
            var t, s, u;

            for (u = [], n = t = 0, s = r.length; s > t; n = ++t) {
              o = r[n], u.push(n >= i && a >= n ? e(o) : o);
            }

            return u;
          }(), new this.constructor(u);
        }, i.prototype.splitObjectsAtRange = function (t) {
          var e, n, i, o, s, u;
          return o = this.splitObjectAtPosition(a(t)), n = o[0], e = o[1], i = o[2], s = new this.constructor(n).splitObjectAtPosition(r(t) + i), n = s[0], u = s[1], [n, e, u - 1];
        }, i.prototype.getObjectAtPosition = function (t) {
          var e, n, i;
          return i = this.findIndexAndOffsetAtPosition(t), e = i.index, n = i.offset, this.objects[e];
        }, i.prototype.splitObjectAtPosition = function (t) {
          var e, n, i, o, r, s, a, u, c, l;
          return s = this.findIndexAndOffsetAtPosition(t), e = s.index, r = s.offset, o = this.objects.slice(0), null != e ? 0 === r ? (c = e, l = 0) : (i = this.getObjectAtIndex(e), a = i.splitAtOffset(r), n = a[0], u = a[1], o.splice(e, 1, n, u), c = e + 1, l = n.getLength() - r) : (c = o.length, l = 0), [o, c, l];
        }, i.prototype.consolidate = function () {
          var t, e, n, i, o, r;

          for (i = [], o = this.objects[0], r = this.objects.slice(1), t = 0, e = r.length; e > t; t++) {
            n = r[t], ("function" == typeof o.canBeConsolidatedWith ? o.canBeConsolidatedWith(n) : void 0) ? o = o.consolidateWith(n) : (i.push(o), o = n);
          }

          return null != o && i.push(o), new this.constructor(i);
        }, i.prototype.consolidateFromIndexToIndex = function (t, e) {
          var n, i, r;
          return i = this.objects.slice(0), r = i.slice(t, e + 1), n = new this.constructor(r).consolidate().toArray(), this.splice.apply(this, [t, r.length].concat(o.call(n)));
        }, i.prototype.findIndexAndOffsetAtPosition = function (t) {
          var e, n, i, o, r, s, a;

          for (e = 0, a = this.objects, i = n = 0, o = a.length; o > n; i = ++n) {
            if (s = a[i], r = e + s.getLength(), t >= e && r > t) return {
              index: i,
              offset: t - e
            };
            e = r;
          }

          return {
            index: null,
            offset: null
          };
        }, i.prototype.findPositionAtIndexAndOffset = function (t, e) {
          var n, i, o, r, s, a;

          for (s = 0, a = this.objects, n = i = 0, o = a.length; o > i; n = ++i) {
            if (r = a[n], t > n) s += r.getLength();else if (n === t) {
              s += e;
              break;
            }
          }

          return s;
        }, i.prototype.getEndPosition = function () {
          var t, e;
          return null != this.endPosition ? this.endPosition : this.endPosition = function () {
            var n, i, o;

            for (e = 0, o = this.objects, n = 0, i = o.length; i > n; n++) {
              t = o[n], e += t.getLength();
            }

            return e;
          }.call(this);
        }, i.prototype.toString = function () {
          return this.objects.join("");
        }, i.prototype.toArray = function () {
          return this.objects.slice(0);
        }, i.prototype.toJSON = function () {
          return this.toArray();
        }, i.prototype.isEqualTo = function (t) {
          return i.__super__.isEqualTo.apply(this, arguments) || s(this.objects, null != t ? t.objects : void 0);
        }, s = function s(t, e) {
          var n, i, o, r, s;
          if (null == e && (e = []), t.length !== e.length) return !1;

          for (s = !0, i = n = 0, o = t.length; o > n; i = ++n) {
            r = t[i], s && !r.isEqualTo(e[i]) && (s = !1);
          }

          return s;
        }, i.prototype.contentsForInspection = function () {
          var t;
          return {
            objects: "[" + function () {
              var e, n, i, o;

              for (i = this.objects, o = [], e = 0, n = i.length; n > e; e++) {
                t = i[e], o.push(t.inspect());
              }

              return o;
            }.call(this).join(", ") + "]"
          };
        }, a = function a(t) {
          return t[0];
        }, r = function r(t) {
          return t[1];
        }, i;
      }(e.Object);
    }.call(this), function () {
      var t = function t(_t17, e) {
        function i() {
          this.constructor = _t17;
        }

        for (var o in e) {
          n.call(e, o) && (_t17[o] = e[o]);
        }

        return i.prototype = e.prototype, _t17.prototype = new i(), _t17.__super__ = e.prototype, _t17;
      },
          n = {}.hasOwnProperty;

      e.Text = function (n) {
        function i(t) {
          var n;
          null == t && (t = []), i.__super__.constructor.apply(this, arguments), this.pieceList = new e.SplittableList(function () {
            var e, i, o;

            for (o = [], e = 0, i = t.length; i > e; e++) {
              n = t[e], n.isEmpty() || o.push(n);
            }

            return o;
          }());
        }

        return t(i, n), i.textForAttachmentWithAttributes = function (t, n) {
          var i;
          return i = new e.AttachmentPiece(t, n), new this([i]);
        }, i.textForStringWithAttributes = function (t, n) {
          var i;
          return i = new e.StringPiece(t, n), new this([i]);
        }, i.fromJSON = function (t) {
          var n, i;
          return i = function () {
            var i, o, r;

            for (r = [], i = 0, o = t.length; o > i; i++) {
              n = t[i], r.push(e.Piece.fromJSON(n));
            }

            return r;
          }(), new this(i);
        }, i.prototype.copy = function () {
          return this.copyWithPieceList(this.pieceList);
        }, i.prototype.copyWithPieceList = function (t) {
          return new this.constructor(t.consolidate().toArray());
        }, i.prototype.copyUsingObjectMap = function (t) {
          var e, n;
          return n = function () {
            var n, i, o, r, s;

            for (o = this.getPieces(), s = [], n = 0, i = o.length; i > n; n++) {
              e = o[n], s.push(null != (r = t.find(e)) ? r : e);
            }

            return s;
          }.call(this), new this.constructor(n);
        }, i.prototype.appendText = function (t) {
          return this.insertTextAtPosition(t, this.getLength());
        }, i.prototype.insertTextAtPosition = function (t, e) {
          return this.copyWithPieceList(this.pieceList.insertSplittableListAtPosition(t.pieceList, e));
        }, i.prototype.removeTextAtRange = function (t) {
          return this.copyWithPieceList(this.pieceList.removeObjectsInRange(t));
        }, i.prototype.replaceTextAtRange = function (t, e) {
          return this.removeTextAtRange(e).insertTextAtPosition(t, e[0]);
        }, i.prototype.moveTextFromRangeToPosition = function (t, e) {
          var n, i;
          if (!(t[0] <= e && e <= t[1])) return i = this.getTextAtRange(t), n = i.getLength(), t[0] < e && (e -= n), this.removeTextAtRange(t).insertTextAtPosition(i, e);
        }, i.prototype.addAttributeAtRange = function (t, e, n) {
          var i;
          return i = {}, i[t] = e, this.addAttributesAtRange(i, n);
        }, i.prototype.addAttributesAtRange = function (t, e) {
          return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, function (e) {
            return e.copyWithAdditionalAttributes(t);
          }));
        }, i.prototype.removeAttributeAtRange = function (t, e) {
          return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, function (e) {
            return e.copyWithoutAttribute(t);
          }));
        }, i.prototype.setAttributesAtRange = function (t, e) {
          return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, function (e) {
            return e.copyWithAttributes(t);
          }));
        }, i.prototype.getAttributesAtPosition = function (t) {
          var e, n;
          return null != (e = null != (n = this.pieceList.getObjectAtPosition(t)) ? n.getAttributes() : void 0) ? e : {};
        }, i.prototype.getCommonAttributes = function () {
          var t, n;
          return t = function () {
            var t, e, i, o;

            for (i = this.pieceList.toArray(), o = [], t = 0, e = i.length; e > t; t++) {
              n = i[t], o.push(n.getAttributes());
            }

            return o;
          }.call(this), e.Hash.fromCommonAttributesOfObjects(t).toObject();
        }, i.prototype.getCommonAttributesAtRange = function (t) {
          var e;
          return null != (e = this.getTextAtRange(t).getCommonAttributes()) ? e : {};
        }, i.prototype.getExpandedRangeForAttributeAtOffset = function (t, e) {
          var n, i, o;

          for (n = o = e, i = this.getLength(); n > 0 && this.getCommonAttributesAtRange([n - 1, o])[t];) {
            n--;
          }

          for (; i > o && this.getCommonAttributesAtRange([e, o + 1])[t];) {
            o++;
          }

          return [n, o];
        }, i.prototype.getTextAtRange = function (t) {
          return this.copyWithPieceList(this.pieceList.getSplittableListInRange(t));
        }, i.prototype.getStringAtRange = function (t) {
          return this.pieceList.getSplittableListInRange(t).toString();
        }, i.prototype.getStringAtPosition = function (t) {
          return this.getStringAtRange([t, t + 1]);
        }, i.prototype.startsWithString = function (t) {
          return this.getStringAtRange([0, t.length]) === t;
        }, i.prototype.endsWithString = function (t) {
          var e;
          return e = this.getLength(), this.getStringAtRange([e - t.length, e]) === t;
        }, i.prototype.getAttachmentPieces = function () {
          var t, e, n, i, o;

          for (i = this.pieceList.toArray(), o = [], t = 0, e = i.length; e > t; t++) {
            n = i[t], null != n.attachment && o.push(n);
          }

          return o;
        }, i.prototype.getAttachments = function () {
          var t, e, n, i, o;

          for (i = this.getAttachmentPieces(), o = [], t = 0, e = i.length; e > t; t++) {
            n = i[t], o.push(n.attachment);
          }

          return o;
        }, i.prototype.getAttachmentAndPositionById = function (t) {
          var e, n, i, o, r, s;

          for (o = 0, r = this.pieceList.toArray(), e = 0, n = r.length; n > e; e++) {
            if (i = r[e], (null != (s = i.attachment) ? s.id : void 0) === t) return {
              attachment: i.attachment,
              position: o
            };
            o += i.length;
          }

          return {
            attachment: null,
            position: null
          };
        }, i.prototype.getAttachmentById = function (t) {
          var e, n, i;
          return i = this.getAttachmentAndPositionById(t), e = i.attachment, n = i.position, e;
        }, i.prototype.getRangeOfAttachment = function (t) {
          var e, n;
          return n = this.getAttachmentAndPositionById(t.id), t = n.attachment, e = n.position, null != t ? [e, e + 1] : void 0;
        }, i.prototype.updateAttributesForAttachment = function (t, e) {
          var n;
          return (n = this.getRangeOfAttachment(e)) ? this.addAttributesAtRange(t, n) : this;
        }, i.prototype.getLength = function () {
          return this.pieceList.getEndPosition();
        }, i.prototype.isEmpty = function () {
          return 0 === this.getLength();
        }, i.prototype.isEqualTo = function (t) {
          var e;
          return i.__super__.isEqualTo.apply(this, arguments) || (null != t && null != (e = t.pieceList) ? e.isEqualTo(this.pieceList) : void 0);
        }, i.prototype.isBlockBreak = function () {
          return 1 === this.getLength() && this.pieceList.getObjectAtIndex(0).isBlockBreak();
        }, i.prototype.eachPiece = function (t) {
          return this.pieceList.eachObject(t);
        }, i.prototype.getPieces = function () {
          return this.pieceList.toArray();
        }, i.prototype.getPieceAtPosition = function (t) {
          return this.pieceList.getObjectAtPosition(t);
        }, i.prototype.contentsForInspection = function () {
          return {
            pieceList: this.pieceList.inspect()
          };
        }, i.prototype.toSerializableText = function () {
          var t;
          return t = this.pieceList.selectSplittableList(function (t) {
            return t.isSerializable();
          }), this.copyWithPieceList(t);
        }, i.prototype.toString = function () {
          return this.pieceList.toString();
        }, i.prototype.toJSON = function () {
          return this.pieceList.toJSON();
        }, i.prototype.toConsole = function () {
          var t;
          return JSON.stringify(function () {
            var e, n, i, o;

            for (i = this.pieceList.toArray(), o = [], e = 0, n = i.length; n > e; e++) {
              t = i[e], o.push(JSON.parse(t.toConsole()));
            }

            return o;
          }.call(this));
        }, i;
      }(e.Object);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s = function s(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          a.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          a = {}.hasOwnProperty,
          u = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      },
          c = [].slice;

      t = e.arraysAreEqual, r = e.spliceArray, i = e.getBlockConfig, n = e.getBlockAttributeNames, o = e.getListAttributeNames, e.Block = function (n) {
        function a(t, n) {
          null == t && (t = new e.Text()), null == n && (n = []), a.__super__.constructor.apply(this, arguments), this.text = h(t), this.attributes = n;
        }

        var l, h, p, d, f, g, m, v, y;
        return s(a, n), a.fromJSON = function (t) {
          var n;
          return n = e.Text.fromJSON(t.text), new this(n, t.attributes);
        }, a.prototype.isEmpty = function () {
          return this.text.isBlockBreak();
        }, a.prototype.isEqualTo = function (e) {
          return a.__super__.isEqualTo.apply(this, arguments) || this.text.isEqualTo(null != e ? e.text : void 0) && t(this.attributes, null != e ? e.attributes : void 0);
        }, a.prototype.copyWithText = function (t) {
          return new this.constructor(t, this.attributes);
        }, a.prototype.copyWithoutText = function () {
          return this.copyWithText(null);
        }, a.prototype.copyWithAttributes = function (t) {
          return new this.constructor(this.text, t);
        }, a.prototype.copyWithoutAttributes = function () {
          return this.copyWithAttributes(null);
        }, a.prototype.copyUsingObjectMap = function (t) {
          var e;
          return this.copyWithText((e = t.find(this.text)) ? e : this.text.copyUsingObjectMap(t));
        }, a.prototype.addAttribute = function (t) {
          var e;
          return e = this.attributes.concat(d(t)), this.copyWithAttributes(e);
        }, a.prototype.removeAttribute = function (t) {
          var e, n;
          return n = i(t).listAttribute, e = g(g(this.attributes, t), n), this.copyWithAttributes(e);
        }, a.prototype.removeLastAttribute = function () {
          return this.removeAttribute(this.getLastAttribute());
        }, a.prototype.getLastAttribute = function () {
          return f(this.attributes);
        }, a.prototype.getAttributes = function () {
          return this.attributes.slice(0);
        }, a.prototype.getAttributeLevel = function () {
          return this.attributes.length;
        }, a.prototype.getAttributeAtLevel = function (t) {
          return this.attributes[t - 1];
        }, a.prototype.hasAttribute = function (t) {
          return u.call(this.attributes, t) >= 0;
        }, a.prototype.hasAttributes = function () {
          return this.getAttributeLevel() > 0;
        }, a.prototype.getLastNestableAttribute = function () {
          return f(this.getNestableAttributes());
        }, a.prototype.getNestableAttributes = function () {
          var t, e, n, o, r;

          for (o = this.attributes, r = [], e = 0, n = o.length; n > e; e++) {
            t = o[e], i(t).nestable && r.push(t);
          }

          return r;
        }, a.prototype.getNestingLevel = function () {
          return this.getNestableAttributes().length;
        }, a.prototype.decreaseNestingLevel = function () {
          var t;
          return (t = this.getLastNestableAttribute()) ? this.removeAttribute(t) : this;
        }, a.prototype.increaseNestingLevel = function () {
          var t, e, n;
          return (t = this.getLastNestableAttribute()) ? (n = this.attributes.lastIndexOf(t), e = r.apply(null, [this.attributes, n + 1, 0].concat(c.call(d(t)))), this.copyWithAttributes(e)) : this;
        }, a.prototype.getListItemAttributes = function () {
          var t, e, n, o, r;

          for (o = this.attributes, r = [], e = 0, n = o.length; n > e; e++) {
            t = o[e], i(t).listAttribute && r.push(t);
          }

          return r;
        }, a.prototype.isListItem = function () {
          var t;
          return null != (t = i(this.getLastAttribute())) ? t.listAttribute : void 0;
        }, a.prototype.isTerminalBlock = function () {
          var t;
          return null != (t = i(this.getLastAttribute())) ? t.terminal : void 0;
        }, a.prototype.breaksOnReturn = function () {
          var t;
          return null != (t = i(this.getLastAttribute())) ? t.breakOnReturn : void 0;
        }, a.prototype.findLineBreakInDirectionFromPosition = function (t, e) {
          var n, i;
          return i = this.toString(), n = function () {
            switch (t) {
              case "forward":
                return i.indexOf("\n", e);

              case "backward":
                return i.slice(0, e).lastIndexOf("\n");
            }
          }(), -1 !== n ? n : void 0;
        }, a.prototype.contentsForInspection = function () {
          return {
            text: this.text.inspect(),
            attributes: this.attributes
          };
        }, a.prototype.toString = function () {
          return this.text.toString();
        }, a.prototype.toJSON = function () {
          return {
            text: this.text,
            attributes: this.attributes
          };
        }, a.prototype.getLength = function () {
          return this.text.getLength();
        }, a.prototype.canBeConsolidatedWith = function (t) {
          return !this.hasAttributes() && !t.hasAttributes();
        }, a.prototype.consolidateWith = function (t) {
          var n, i;
          return n = e.Text.textForStringWithAttributes("\n"), i = this.getTextWithoutBlockBreak().appendText(n), this.copyWithText(i.appendText(t.text));
        }, a.prototype.splitAtOffset = function (t) {
          var e, n;
          return 0 === t ? (e = null, n = this) : t === this.getLength() ? (e = this, n = null) : (e = this.copyWithText(this.text.getTextAtRange([0, t])), n = this.copyWithText(this.text.getTextAtRange([t, this.getLength()]))), [e, n];
        }, a.prototype.getBlockBreakPosition = function () {
          return this.text.getLength() - 1;
        }, a.prototype.getTextWithoutBlockBreak = function () {
          return m(this.text) ? this.text.getTextAtRange([0, this.getBlockBreakPosition()]) : this.text.copy();
        }, a.prototype.canBeGrouped = function (t) {
          return this.attributes[t];
        }, a.prototype.canBeGroupedWith = function (t, e) {
          var n, r, s, a;
          return s = t.getAttributes(), r = s[e], n = this.attributes[e], n === r && !(i(n).group === !1 && (a = s[e + 1], u.call(o(), a) < 0));
        }, h = function h(t) {
          return t = y(t), t = l(t);
        }, y = function y(t) {
          var n, i, o, r, s, a;
          return r = !1, a = t.getPieces(), i = 2 <= a.length ? c.call(a, 0, n = a.length - 1) : (n = 0, []), o = a[n++], null == o ? t : (i = function () {
            var t, e, n;

            for (n = [], t = 0, e = i.length; e > t; t++) {
              s = i[t], s.isBlockBreak() ? (r = !0, n.push(v(s))) : n.push(s);
            }

            return n;
          }(), r ? new e.Text(c.call(i).concat([o])) : t);
        }, p = e.Text.textForStringWithAttributes("\n", {
          blockBreak: !0
        }), l = function l(t) {
          return m(t) ? t : t.appendText(p);
        }, m = function m(t) {
          var e, n;
          return n = t.getLength(), 0 === n ? !1 : (e = t.getTextAtRange([n - 1, n]), e.isBlockBreak());
        }, v = function v(t) {
          return t.copyWithoutAttribute("blockBreak");
        }, d = function d(t) {
          var e;
          return e = i(t).listAttribute, null != e ? [e, t] : [t];
        }, f = function f(t) {
          return t.slice(-1)[0];
        }, g = function g(t, e) {
          var n;
          return n = t.lastIndexOf(e), -1 === n ? t : r(t, n, 1);
        }, a;
      }(e.Object);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function o(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          r.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          r = {}.hasOwnProperty,
          s = [].slice,
          a = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      n = e.tagName, i = e.walkTree, t = e.nodeIsAttachmentElement, e.HTMLSanitizer = function (r) {
        function u(t, e) {
          this.allowedAttributes = (null != e ? e : {}).allowedAttributes, null == this.allowedAttributes && (this.allowedAttributes = c), this.body = l(t);
        }

        var c, l, h;
        return o(u, r), c = "style href src width height class".split(" "), u.sanitize = function (t, e) {
          var n;
          return n = new this(t, e), n.sanitize(), n;
        }, u.prototype.sanitize = function () {
          return this.sanitizeElements(), this.normalizeListElementNesting();
        }, u.prototype.getHTML = function () {
          return this.body.innerHTML;
        }, u.prototype.getBody = function () {
          return this.body;
        }, u.prototype.sanitizeElements = function () {
          var t, n, o, r, s;

          for (s = i(this.body), r = []; s.nextNode();) {
            switch (o = s.currentNode, o.nodeType) {
              case Node.ELEMENT_NODE:
                h(o) ? r.push(o) : this.sanitizeElement(o);
                break;

              case Node.COMMENT_NODE:
                r.push(o);
            }
          }

          for (t = 0, n = r.length; n > t; t++) {
            o = r[t], e.removeNode(o);
          }

          return this.body;
        }, u.prototype.sanitizeElement = function (t) {
          var e, n, i, o;

          for (o = s.call(t.attributes), e = 0, n = o.length; n > e; e++) {
            i = o[e].name, a.call(this.allowedAttributes, i) >= 0 || 0 === i.indexOf("data-trix") || t.removeAttribute(i);
          }

          return t;
        }, u.prototype.normalizeListElementNesting = function () {
          var t, e, i, o, r;

          for (r = s.call(this.body.querySelectorAll("ul,ol")), t = 0, e = r.length; e > t; t++) {
            i = r[t], (o = i.previousElementSibling) && "li" === n(o) && o.appendChild(i);
          }

          return this.body;
        }, h = function h(e) {
          return (null != e ? e.nodeType : void 0) !== Node.ELEMENT_NODE || t(e) ? void 0 : "script" === n(e) || "false" === e.getAttribute("data-trix-serialize");
        }, l = function l(t) {
          var e, n, i, o, r;

          for (null == t && (t = ""), t = t.replace(/<\/html[^>]*>[^]*$/i, "</html>"), e = document.implementation.createHTMLDocument(""), e.documentElement.innerHTML = t, r = e.head.querySelectorAll("style"), i = 0, o = r.length; o > i; i++) {
            n = r[i], e.body.appendChild(n);
          }

          return e.body;
        }, u;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          u,
          c,
          l,
          h,
          p = function p(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          d.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          d = {}.hasOwnProperty,
          f = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      t = e.arraysAreEqual, s = e.makeElement, l = e.tagName, r = e.getBlockTagNames, h = e.walkTree, o = e.findClosestElementFromNode, i = e.elementContainsNode, a = e.nodeIsAttachmentElement, u = e.normalizeSpaces, n = e.breakableWhitespacePattern, c = e.squishBreakableWhitespace, e.HTMLParser = function (d) {
        function g(t, e) {
          this.html = t, this.referenceElement = (null != e ? e : {}).referenceElement, this.blocks = [], this.blockElements = [], this.processedElements = [];
        }

        var m, v, y, b, A, C, x, w, E, S, R, k;
        return p(g, d), g.parse = function (t, e) {
          var n;
          return n = new this(t, e), n.parse(), n;
        }, g.prototype.getDocument = function () {
          return e.Document.fromJSON(this.blocks);
        }, g.prototype.parse = function () {
          var t, n;

          try {
            for (this.createHiddenContainer(), t = e.HTMLSanitizer.sanitize(this.html).getHTML(), this.containerElement.innerHTML = t, n = h(this.containerElement, {
              usingFilter: w
            }); n.nextNode();) {
              this.processNode(n.currentNode);
            }

            return this.translateBlockElementMarginsToNewlines();
          } finally {
            this.removeHiddenContainer();
          }
        }, g.prototype.createHiddenContainer = function () {
          return this.referenceElement ? (this.containerElement = this.referenceElement.cloneNode(!1), this.containerElement.removeAttribute("id"), this.containerElement.setAttribute("data-trix-internal", ""), this.containerElement.style.display = "none", this.referenceElement.parentNode.insertBefore(this.containerElement, this.referenceElement.nextSibling)) : (this.containerElement = s({
            tagName: "div",
            style: {
              display: "none"
            }
          }), document.body.appendChild(this.containerElement));
        }, g.prototype.removeHiddenContainer = function () {
          return e.removeNode(this.containerElement);
        }, w = function w(t) {
          return "style" === l(t) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }, g.prototype.processNode = function (t) {
          switch (t.nodeType) {
            case Node.TEXT_NODE:
              return this.processTextNode(t);

            case Node.ELEMENT_NODE:
              return this.appendBlockForElement(t), this.processElement(t);
          }
        }, g.prototype.appendBlockForElement = function (e) {
          var n, o, r, s;

          if (r = this.isBlockElement(e), o = i(this.currentBlockElement, e), r && !this.isBlockElement(e.firstChild)) {
            if (!(this.isInsignificantTextNode(e.firstChild) && this.isBlockElement(e.firstElementChild) || (n = this.getBlockAttributes(e), o && t(n, this.currentBlock.attributes)))) return this.currentBlock = this.appendBlockForAttributesWithElement(n, e), this.currentBlockElement = e;
          } else if (this.currentBlockElement && !o && !r) return (s = this.findParentBlockElement(e)) ? this.appendBlockForElement(s) : (this.currentBlock = this.appendEmptyBlock(), this.currentBlockElement = null);
        }, g.prototype.findParentBlockElement = function (t) {
          var e;

          for (e = t.parentElement; e && e !== this.containerElement;) {
            if (this.isBlockElement(e) && f.call(this.blockElements, e) >= 0) return e;
            e = e.parentElement;
          }

          return null;
        }, g.prototype.processTextNode = function (t) {
          var e, n;
          return this.isInsignificantTextNode(t) ? void 0 : (n = t.data, v(t.parentNode) || (n = c(n), R(null != (e = t.previousSibling) ? e.textContent : void 0) && (n = C(n))), this.appendStringWithAttributes(n, this.getTextAttributes(t.parentNode)));
        }, g.prototype.processElement = function (t) {
          var e, n, i, o, r;
          if (a(t)) return e = y(t), Object.keys(e).length && (o = this.getTextAttributes(t), this.appendAttachmentWithAttributes(e, o), t.innerHTML = ""), this.processedElements.push(t);

          switch (l(t)) {
            case "br":
              return this.isExtraBR(t) || this.isBlockElement(t.nextSibling) || this.appendStringWithAttributes("\n", this.getTextAttributes(t)), this.processedElements.push(t);

            case "img":
              e = {
                url: t.getAttribute("src"),
                contentType: "image"
              }, i = A(t);

              for (n in i) {
                r = i[n], e[n] = r;
              }

              return this.appendAttachmentWithAttributes(e, this.getTextAttributes(t)), this.processedElements.push(t);

            case "tr":
              if (t.parentNode.firstChild !== t) return this.appendStringWithAttributes("\n");
              break;

            case "td":
              if (t.parentNode.firstChild !== t) return this.appendStringWithAttributes(" | ");
          }
        }, g.prototype.appendBlockForAttributesWithElement = function (t, e) {
          var n;
          return this.blockElements.push(e), n = m(t), this.blocks.push(n), n;
        }, g.prototype.appendEmptyBlock = function () {
          return this.appendBlockForAttributesWithElement([], null);
        }, g.prototype.appendStringWithAttributes = function (t, e) {
          return this.appendPiece(S(t, e));
        }, g.prototype.appendAttachmentWithAttributes = function (t, e) {
          return this.appendPiece(E(t, e));
        }, g.prototype.appendPiece = function (t) {
          return 0 === this.blocks.length && this.appendEmptyBlock(), this.blocks[this.blocks.length - 1].text.push(t);
        }, g.prototype.appendStringToTextAtIndex = function (t, e) {
          var n, i;
          return i = this.blocks[e].text, n = i[i.length - 1], "string" === (null != n ? n.type : void 0) ? n.string += t : i.push(S(t));
        }, g.prototype.prependStringToTextAtIndex = function (t, e) {
          var n, i;
          return i = this.blocks[e].text, n = i[0], "string" === (null != n ? n.type : void 0) ? n.string = t + n.string : i.unshift(S(t));
        }, S = function S(t, e) {
          var n;
          return null == e && (e = {}), n = "string", t = u(t), {
            string: t,
            attributes: e,
            type: n
          };
        }, E = function E(t, e) {
          var n;
          return null == e && (e = {}), n = "attachment", {
            attachment: t,
            attributes: e,
            type: n
          };
        }, m = function m(t) {
          var e;
          return null == t && (t = {}), e = [], {
            text: e,
            attributes: t
          };
        }, g.prototype.getTextAttributes = function (t) {
          var n, i, r, s, u, c, l, h, p, d, f, g, m;
          r = {}, d = e.config.textAttributes;

          for (n in d) {
            if (u = d[n], u.tagName && o(t, {
              matchingSelector: u.tagName,
              untilNode: this.containerElement
            })) r[n] = !0;else if (u.parser) {
              if (m = u.parser(t)) {
                for (i = !1, f = this.findBlockElementAncestors(t), c = 0, p = f.length; p > c; c++) {
                  if (s = f[c], u.parser(s) === m) {
                    i = !0;
                    break;
                  }
                }

                i || (r[n] = m);
              }
            } else u.styleProperty && (m = t.style[u.styleProperty]) && (r[n] = m);
          }

          if (a(t) && (l = t.getAttribute("data-trix-attributes"))) {
            g = JSON.parse(l);

            for (h in g) {
              m = g[h], r[h] = m;
            }
          }

          return r;
        }, g.prototype.getBlockAttributes = function (t) {
          var n, i, o, r;

          for (i = []; t && t !== this.containerElement;) {
            r = e.config.blockAttributes;

            for (n in r) {
              o = r[n], o.parse !== !1 && l(t) === o.tagName && (("function" == typeof o.test ? o.test(t) : void 0) || !o.test) && (i.push(n), o.listAttribute && i.push(o.listAttribute));
            }

            t = t.parentNode;
          }

          return i.reverse();
        }, g.prototype.findBlockElementAncestors = function (t) {
          var e, n;

          for (e = []; t && t !== this.containerElement;) {
            n = l(t), f.call(r(), n) >= 0 && e.push(t), t = t.parentNode;
          }

          return e;
        }, y = function y(t) {
          return JSON.parse(t.getAttribute("data-trix-attachment"));
        }, A = function A(t) {
          var e, n, i;
          return i = t.getAttribute("width"), n = t.getAttribute("height"), e = {}, i && (e.width = parseInt(i, 10)), n && (e.height = parseInt(n, 10)), e;
        }, g.prototype.isBlockElement = function (t) {
          var e;
          if ((null != t ? t.nodeType : void 0) === Node.ELEMENT_NODE && !a(t) && !o(t, {
            matchingSelector: "td",
            untilNode: this.containerElement
          })) return e = l(t), f.call(r(), e) >= 0 || "block" === window.getComputedStyle(t).display;
        }, g.prototype.isInsignificantTextNode = function (t) {
          var e, n, i;
          if ((null != t ? t.nodeType : void 0) === Node.TEXT_NODE && k(t.data) && (n = t.parentNode, i = t.previousSibling, e = t.nextSibling, (!x(n.previousSibling) || this.isBlockElement(n.previousSibling)) && !v(n))) return !i || this.isBlockElement(i) || !e || this.isBlockElement(e);
        }, g.prototype.isExtraBR = function (t) {
          return "br" === l(t) && this.isBlockElement(t.parentNode) && t.parentNode.lastChild === t;
        }, v = function v(t) {
          var e;
          return e = window.getComputedStyle(t).whiteSpace, "pre" === e || "pre-wrap" === e || "pre-line" === e;
        }, x = function x(t) {
          return t && !R(t.textContent);
        }, g.prototype.translateBlockElementMarginsToNewlines = function () {
          var t, e, n, i, o, r, s, a;

          for (e = this.getMarginOfDefaultBlockElement(), s = this.blocks, a = [], i = n = 0, o = s.length; o > n; i = ++n) {
            t = s[i], (r = this.getMarginOfBlockElementAtIndex(i)) && (r.top > 2 * e.top && this.prependStringToTextAtIndex("\n", i), a.push(r.bottom > 2 * e.bottom ? this.appendStringToTextAtIndex("\n", i) : void 0));
          }

          return a;
        }, g.prototype.getMarginOfBlockElementAtIndex = function (t) {
          var e, n;
          return !(e = this.blockElements[t]) || !e.textContent || (n = l(e), f.call(r(), n) >= 0 || f.call(this.processedElements, e) >= 0) ? void 0 : b(e);
        }, g.prototype.getMarginOfDefaultBlockElement = function () {
          var t;
          return t = s(e.config.blockAttributes["default"].tagName), this.containerElement.appendChild(t), b(t);
        }, b = function b(t) {
          var e;
          return e = window.getComputedStyle(t), "block" === e.display ? {
            top: parseInt(e.marginTop),
            bottom: parseInt(e.marginBottom)
          } : void 0;
        }, C = function C(t) {
          return t.replace(RegExp("^" + n.source + "+"), "");
        }, k = function k(t) {
          return RegExp("^" + n.source + "*$").test(t);
        }, R = function R(t) {
          return /\s$/.test(t);
        }, g;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r = function r(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          s.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          s = {}.hasOwnProperty,
          a = [].slice,
          u = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      t = e.arraysAreEqual, i = e.normalizeRange, o = e.rangeIsCollapsed, n = e.getBlockConfig, e.Document = function (s) {
        function c(t) {
          null == t && (t = []), c.__super__.constructor.apply(this, arguments), 0 === t.length && (t = [new e.Block()]), this.blockList = e.SplittableList.box(t);
        }

        var l;
        return r(c, s), c.fromJSON = function (t) {
          var n, i;
          return i = function () {
            var i, o, r;

            for (r = [], i = 0, o = t.length; o > i; i++) {
              n = t[i], r.push(e.Block.fromJSON(n));
            }

            return r;
          }(), new this(i);
        }, c.fromHTML = function (t, n) {
          return e.HTMLParser.parse(t, n).getDocument();
        }, c.fromString = function (t, n) {
          var i;
          return i = e.Text.textForStringWithAttributes(t, n), new this([new e.Block(i)]);
        }, c.prototype.isEmpty = function () {
          var t;
          return 1 === this.blockList.length && (t = this.getBlockAtIndex(0), t.isEmpty() && !t.hasAttributes());
        }, c.prototype.copy = function (t) {
          var e;
          return null == t && (t = {}), e = t.consolidateBlocks ? this.blockList.consolidate().toArray() : this.blockList.toArray(), new this.constructor(e);
        }, c.prototype.copyUsingObjectsFromDocument = function (t) {
          var n;
          return n = new e.ObjectMap(t.getObjects()), this.copyUsingObjectMap(n);
        }, c.prototype.copyUsingObjectMap = function (t) {
          var e, n, i;
          return n = function () {
            var n, o, r, s;

            for (r = this.getBlocks(), s = [], n = 0, o = r.length; o > n; n++) {
              e = r[n], s.push((i = t.find(e)) ? i : e.copyUsingObjectMap(t));
            }

            return s;
          }.call(this), new this.constructor(n);
        }, c.prototype.copyWithBaseBlockAttributes = function (t) {
          var e, n, i;
          return null == t && (t = []), i = function () {
            var i, o, r, s;

            for (r = this.getBlocks(), s = [], i = 0, o = r.length; o > i; i++) {
              n = r[i], e = t.concat(n.getAttributes()), s.push(n.copyWithAttributes(e));
            }

            return s;
          }.call(this), new this.constructor(i);
        }, c.prototype.replaceBlock = function (t, e) {
          var n;
          return n = this.blockList.indexOf(t), -1 === n ? this : new this.constructor(this.blockList.replaceObjectAtIndex(e, n));
        }, c.prototype.insertDocumentAtRange = function (t, e) {
          var n, r, s, a, u, c, l;
          return r = t.blockList, u = (e = i(e))[0], c = this.locationFromPosition(u), s = c.index, a = c.offset, l = this, n = this.getBlockAtPosition(u), o(e) && n.isEmpty() && !n.hasAttributes() ? l = new this.constructor(l.blockList.removeObjectAtIndex(s)) : n.getBlockBreakPosition() === a && u++, l = l.removeTextAtRange(e), new this.constructor(l.blockList.insertSplittableListAtPosition(r, u));
        }, c.prototype.mergeDocumentAtRange = function (e, n) {
          var o, r, s, a, u, c, l, h, p, d, f, g;
          return f = (n = i(n))[0], d = this.locationFromPosition(f), r = this.getBlockAtIndex(d.index).getAttributes(), o = e.getBaseBlockAttributes(), g = r.slice(-o.length), t(o, g) ? (l = r.slice(0, -o.length), c = e.copyWithBaseBlockAttributes(l)) : c = e.copy({
            consolidateBlocks: !0
          }).copyWithBaseBlockAttributes(r), s = c.getBlockCount(), a = c.getBlockAtIndex(0), t(r, a.getAttributes()) ? (u = a.getTextWithoutBlockBreak(), p = this.insertTextAtRange(u, n), s > 1 && (c = new this.constructor(c.getBlocks().slice(1)), h = f + u.getLength(), p = p.insertDocumentAtRange(c, h))) : p = this.insertDocumentAtRange(c, n), p;
        }, c.prototype.insertTextAtRange = function (t, e) {
          var n, o, r, s, a;
          return a = (e = i(e))[0], s = this.locationFromPosition(a), o = s.index, r = s.offset, n = this.removeTextAtRange(e), new this.constructor(n.blockList.editObjectAtIndex(o, function (e) {
            return e.copyWithText(e.text.insertTextAtPosition(t, r));
          }));
        }, c.prototype.removeTextAtRange = function (t) {
          var e, n, r, s, a, u, c, l, h, p, d, f, g, m, v, y, b, A, C, x, w;
          return p = t = i(t), l = p[0], A = p[1], o(t) ? this : (d = this.locationRangeFromRange(t), u = d[0], y = d[1], a = u.index, c = u.offset, s = this.getBlockAtIndex(a), v = y.index, b = y.offset, m = this.getBlockAtIndex(v), f = A - l === 1 && s.getBlockBreakPosition() === c && m.getBlockBreakPosition() !== b && "\n" === m.text.getStringAtPosition(b), f ? r = this.blockList.editObjectAtIndex(v, function (t) {
            return t.copyWithText(t.text.removeTextAtRange([b, b + 1]));
          }) : (h = s.text.getTextAtRange([0, c]), C = m.text.getTextAtRange([b, m.getLength()]), x = h.appendText(C), g = a !== v && 0 === c, w = g && s.getAttributeLevel() >= m.getAttributeLevel(), n = w ? m.copyWithText(x) : s.copyWithText(x), e = v + 1 - a, r = this.blockList.splice(a, e, n)), new this.constructor(r));
        }, c.prototype.moveTextFromRangeToPosition = function (t, e) {
          var n, o, r, s, u, c, l, h, p, d;
          return c = t = i(t), p = c[0], r = c[1], e >= p && r >= e ? this : (o = this.getDocumentAtRange(t), h = this.removeTextAtRange(t), u = e > p, u && (e -= o.getLength()), l = o.getBlocks(), s = l[0], n = 2 <= l.length ? a.call(l, 1) : [], 0 === n.length ? (d = s.getTextWithoutBlockBreak(), u && (e += 1)) : d = s.text, h = h.insertTextAtRange(d, e), 0 === n.length ? h : (o = new this.constructor(n), e += d.getLength(), h.insertDocumentAtRange(o, e)));
        }, c.prototype.addAttributeAtRange = function (t, e, i) {
          var o;
          return o = this.blockList, this.eachBlockAtRange(i, function (i, r, s) {
            return o = o.editObjectAtIndex(s, function () {
              return n(t) ? i.addAttribute(t, e) : r[0] === r[1] ? i : i.copyWithText(i.text.addAttributeAtRange(t, e, r));
            });
          }), new this.constructor(o);
        }, c.prototype.addAttribute = function (t, e) {
          var n;
          return n = this.blockList, this.eachBlock(function (i, o) {
            return n = n.editObjectAtIndex(o, function () {
              return i.addAttribute(t, e);
            });
          }), new this.constructor(n);
        }, c.prototype.removeAttributeAtRange = function (t, e) {
          var i;
          return i = this.blockList, this.eachBlockAtRange(e, function (e, o, r) {
            return n(t) ? i = i.editObjectAtIndex(r, function () {
              return e.removeAttribute(t);
            }) : o[0] !== o[1] ? i = i.editObjectAtIndex(r, function () {
              return e.copyWithText(e.text.removeAttributeAtRange(t, o));
            }) : void 0;
          }), new this.constructor(i);
        }, c.prototype.updateAttributesForAttachment = function (t, e) {
          var n, i, o, r;
          return o = (i = this.getRangeOfAttachment(e))[0], n = this.locationFromPosition(o).index, r = this.getTextAtIndex(n), new this.constructor(this.blockList.editObjectAtIndex(n, function (n) {
            return n.copyWithText(r.updateAttributesForAttachment(t, e));
          }));
        }, c.prototype.removeAttributeForAttachment = function (t, e) {
          var n;
          return n = this.getRangeOfAttachment(e), this.removeAttributeAtRange(t, n);
        }, c.prototype.insertBlockBreakAtRange = function (t) {
          var n, o, r, s;
          return s = (t = i(t))[0], r = this.locationFromPosition(s).offset, o = this.removeTextAtRange(t), 0 === r && (n = [new e.Block()]), new this.constructor(o.blockList.insertSplittableListAtPosition(new e.SplittableList(n), s));
        }, c.prototype.applyBlockAttributeAtRange = function (t, e, i) {
          var o, r, s, a;
          return s = this.expandRangeToLineBreaksAndSplitBlocks(i), r = s.document, i = s.range, o = n(t), o.listAttribute ? (r = r.removeLastListAttributeAtRange(i, {
            exceptAttributeName: t
          }), a = r.convertLineBreaksToBlockBreaksInRange(i), r = a.document, i = a.range) : r = o.exclusive ? r.removeBlockAttributesAtRange(i) : o.terminal ? r.removeLastTerminalAttributeAtRange(i) : r.consolidateBlocksAtRange(i), r.addAttributeAtRange(t, e, i);
        }, c.prototype.removeLastListAttributeAtRange = function (t, e) {
          var i;
          return null == e && (e = {}), i = this.blockList, this.eachBlockAtRange(t, function (t, o, r) {
            var s;
            if ((s = t.getLastAttribute()) && n(s).listAttribute && s !== e.exceptAttributeName) return i = i.editObjectAtIndex(r, function () {
              return t.removeAttribute(s);
            });
          }), new this.constructor(i);
        }, c.prototype.removeLastTerminalAttributeAtRange = function (t) {
          var e;
          return e = this.blockList, this.eachBlockAtRange(t, function (t, i, o) {
            var r;
            if ((r = t.getLastAttribute()) && n(r).terminal) return e = e.editObjectAtIndex(o, function () {
              return t.removeAttribute(r);
            });
          }), new this.constructor(e);
        }, c.prototype.removeBlockAttributesAtRange = function (t) {
          var e;
          return e = this.blockList, this.eachBlockAtRange(t, function (t, n, i) {
            return t.hasAttributes() ? e = e.editObjectAtIndex(i, function () {
              return t.copyWithoutAttributes();
            }) : void 0;
          }), new this.constructor(e);
        }, c.prototype.expandRangeToLineBreaksAndSplitBlocks = function (t) {
          var e, n, o, r, s, a, u, c, l;
          return a = t = i(t), l = a[0], r = a[1], c = this.locationFromPosition(l), o = this.locationFromPosition(r), e = this, u = e.getBlockAtIndex(c.index), null != (c.offset = u.findLineBreakInDirectionFromPosition("backward", c.offset)) && (s = e.positionFromLocation(c), e = e.insertBlockBreakAtRange([s, s + 1]), o.index += 1, o.offset -= e.getBlockAtIndex(c.index).getLength(), c.index += 1), c.offset = 0, 0 === o.offset && o.index > c.index ? (o.index -= 1, o.offset = e.getBlockAtIndex(o.index).getBlockBreakPosition()) : (n = e.getBlockAtIndex(o.index), "\n" === n.text.getStringAtRange([o.offset - 1, o.offset]) ? o.offset -= 1 : o.offset = n.findLineBreakInDirectionFromPosition("forward", o.offset), o.offset !== n.getBlockBreakPosition() && (s = e.positionFromLocation(o), e = e.insertBlockBreakAtRange([s, s + 1]))), l = e.positionFromLocation(c), r = e.positionFromLocation(o), t = i([l, r]), {
            document: e,
            range: t
          };
        }, c.prototype.convertLineBreaksToBlockBreaksInRange = function (t) {
          var e, n, o;
          return n = (t = i(t))[0], o = this.getStringAtRange(t).slice(0, -1), e = this, o.replace(/.*?\n/g, function (t) {
            return n += t.length, e = e.insertBlockBreakAtRange([n - 1, n]);
          }), {
            document: e,
            range: t
          };
        }, c.prototype.consolidateBlocksAtRange = function (t) {
          var e, n, o, r, s;
          return o = t = i(t), s = o[0], n = o[1], r = this.locationFromPosition(s).index, e = this.locationFromPosition(n).index, new this.constructor(this.blockList.consolidateFromIndexToIndex(r, e));
        }, c.prototype.getDocumentAtRange = function (t) {
          var e;
          return t = i(t), e = this.blockList.getSplittableListInRange(t).toArray(), new this.constructor(e);
        }, c.prototype.getStringAtRange = function (t) {
          var e, n, o;
          return o = t = i(t), n = o[o.length - 1], n !== this.getLength() && (e = -1), this.getDocumentAtRange(t).toString().slice(0, e);
        }, c.prototype.getBlockAtIndex = function (t) {
          return this.blockList.getObjectAtIndex(t);
        }, c.prototype.getBlockAtPosition = function (t) {
          var e;
          return e = this.locationFromPosition(t).index, this.getBlockAtIndex(e);
        }, c.prototype.getTextAtIndex = function (t) {
          var e;
          return null != (e = this.getBlockAtIndex(t)) ? e.text : void 0;
        }, c.prototype.getTextAtPosition = function (t) {
          var e;
          return e = this.locationFromPosition(t).index, this.getTextAtIndex(e);
        }, c.prototype.getPieceAtPosition = function (t) {
          var e, n, i;
          return i = this.locationFromPosition(t), e = i.index, n = i.offset, this.getTextAtIndex(e).getPieceAtPosition(n);
        }, c.prototype.getCharacterAtPosition = function (t) {
          var e, n, i;
          return i = this.locationFromPosition(t), e = i.index, n = i.offset, this.getTextAtIndex(e).getStringAtRange([n, n + 1]);
        }, c.prototype.getLength = function () {
          return this.blockList.getEndPosition();
        }, c.prototype.getBlocks = function () {
          return this.blockList.toArray();
        }, c.prototype.getBlockCount = function () {
          return this.blockList.length;
        }, c.prototype.getEditCount = function () {
          return this.editCount;
        }, c.prototype.eachBlock = function (t) {
          return this.blockList.eachObject(t);
        }, c.prototype.eachBlockAtRange = function (t, e) {
          var n, o, r, s, a, u, c, l, h, p, d, f;
          if (u = t = i(t), d = u[0], r = u[1], p = this.locationFromPosition(d), o = this.locationFromPosition(r), p.index === o.index) return n = this.getBlockAtIndex(p.index), f = [p.offset, o.offset], e(n, f, p.index);

          for (h = [], a = s = c = p.index, l = o.index; l >= c ? l >= s : s >= l; a = l >= c ? ++s : --s) {
            (n = this.getBlockAtIndex(a)) ? (f = function () {
              switch (a) {
                case p.index:
                  return [p.offset, n.text.getLength()];

                case o.index:
                  return [0, o.offset];

                default:
                  return [0, n.text.getLength()];
              }
            }(), h.push(e(n, f, a))) : h.push(void 0);
          }

          return h;
        }, c.prototype.getCommonAttributesAtRange = function (t) {
          var n, r, s;
          return r = (t = i(t))[0], o(t) ? this.getCommonAttributesAtPosition(r) : (s = [], n = [], this.eachBlockAtRange(t, function (t, e) {
            return e[0] !== e[1] ? (s.push(t.text.getCommonAttributesAtRange(e)), n.push(l(t))) : void 0;
          }), e.Hash.fromCommonAttributesOfObjects(s).merge(e.Hash.fromCommonAttributesOfObjects(n)).toObject());
        }, c.prototype.getCommonAttributesAtPosition = function (t) {
          var n, i, o, r, s, a, c, h, p, d;
          if (p = this.locationFromPosition(t), s = p.index, h = p.offset, o = this.getBlockAtIndex(s), !o) return {};
          r = l(o), n = o.text.getAttributesAtPosition(h), i = o.text.getAttributesAtPosition(h - 1), a = function () {
            var t, n;
            t = e.config.textAttributes, n = [];

            for (c in t) {
              d = t[c], d.inheritable && n.push(c);
            }

            return n;
          }();

          for (c in i) {
            d = i[c], (d === n[c] || u.call(a, c) >= 0) && (r[c] = d);
          }

          return r;
        }, c.prototype.getRangeOfCommonAttributeAtPosition = function (t, e) {
          var n, o, r, s, a, u, c, l, h;
          return a = this.locationFromPosition(e), r = a.index, s = a.offset, h = this.getTextAtIndex(r), u = h.getExpandedRangeForAttributeAtOffset(t, s), l = u[0], o = u[1], c = this.positionFromLocation({
            index: r,
            offset: l
          }), n = this.positionFromLocation({
            index: r,
            offset: o
          }), i([c, n]);
        }, c.prototype.getBaseBlockAttributes = function () {
          var t, e, n, i, o, r, s;

          for (t = this.getBlockAtIndex(0).getAttributes(), n = i = 1, s = this.getBlockCount(); s >= 1 ? s > i : i > s; n = s >= 1 ? ++i : --i) {
            e = this.getBlockAtIndex(n).getAttributes(), r = Math.min(t.length, e.length), t = function () {
              var n, i, s;

              for (s = [], o = n = 0, i = r; (i >= 0 ? i > n : n > i) && e[o] === t[o]; o = i >= 0 ? ++n : --n) {
                s.push(e[o]);
              }

              return s;
            }();
          }

          return t;
        }, l = function l(t) {
          var e, n;
          return n = {}, (e = t.getLastAttribute()) && (n[e] = !0), n;
        }, c.prototype.getAttachmentById = function (t) {
          var e, n, i, o;

          for (o = this.getAttachments(), n = 0, i = o.length; i > n; n++) {
            if (e = o[n], e.id === t) return e;
          }
        }, c.prototype.getAttachmentPieces = function () {
          var t;
          return t = [], this.blockList.eachObject(function (e) {
            var n;
            return n = e.text, t = t.concat(n.getAttachmentPieces());
          }), t;
        }, c.prototype.getAttachments = function () {
          var t, e, n, i, o;

          for (i = this.getAttachmentPieces(), o = [], t = 0, e = i.length; e > t; t++) {
            n = i[t], o.push(n.attachment);
          }

          return o;
        }, c.prototype.getRangeOfAttachment = function (t) {
          var e, n, o, r, s, a, u;

          for (r = 0, s = this.blockList.toArray(), n = e = 0, o = s.length; o > e; n = ++e) {
            if (a = s[n].text, u = a.getRangeOfAttachment(t)) return i([r + u[0], r + u[1]]);
            r += a.getLength();
          }
        }, c.prototype.getLocationRangeOfAttachment = function (t) {
          var e;
          return e = this.getRangeOfAttachment(t), this.locationRangeFromRange(e);
        }, c.prototype.getAttachmentPieceForAttachment = function (t) {
          var e, n, i, o;

          for (o = this.getAttachmentPieces(), e = 0, n = o.length; n > e; e++) {
            if (i = o[e], i.attachment === t) return i;
          }
        }, c.prototype.findRangesForBlockAttribute = function (t) {
          var e, n, i, o, r, s, a;

          for (r = 0, s = [], a = this.getBlocks(), n = 0, i = a.length; i > n; n++) {
            e = a[n], o = e.getLength(), e.hasAttribute(t) && s.push([r, r + o]), r += o;
          }

          return s;
        }, c.prototype.findRangesForTextAttribute = function (t, e) {
          var n, i, o, r, s, a, u, c, l, h;

          for (h = (null != e ? e : {}).withValue, a = 0, u = [], c = [], r = function r(e) {
            return null != h ? e.getAttribute(t) === h : e.hasAttribute(t);
          }, l = this.getPieces(), n = 0, i = l.length; i > n; n++) {
            s = l[n], o = s.getLength(), r(s) && (u[1] === a ? u[1] = a + o : c.push(u = [a, a + o])), a += o;
          }

          return c;
        }, c.prototype.locationFromPosition = function (t) {
          var e, n;
          return n = this.blockList.findIndexAndOffsetAtPosition(Math.max(0, t)), null != n.index ? n : (e = this.getBlocks(), {
            index: e.length - 1,
            offset: e[e.length - 1].getLength()
          });
        }, c.prototype.positionFromLocation = function (t) {
          return this.blockList.findPositionAtIndexAndOffset(t.index, t.offset);
        }, c.prototype.locationRangeFromPosition = function (t) {
          return i(this.locationFromPosition(t));
        }, c.prototype.locationRangeFromRange = function (t) {
          var e, n, o, r;
          if (t = i(t)) return r = t[0], n = t[1], o = this.locationFromPosition(r), e = this.locationFromPosition(n), i([o, e]);
        }, c.prototype.rangeFromLocationRange = function (t) {
          var e, n;
          return t = i(t), e = this.positionFromLocation(t[0]), o(t) || (n = this.positionFromLocation(t[1])), i([e, n]);
        }, c.prototype.isEqualTo = function (t) {
          return this.blockList.isEqualTo(null != t ? t.blockList : void 0);
        }, c.prototype.getTexts = function () {
          var t, e, n, i, o;

          for (i = this.getBlocks(), o = [], e = 0, n = i.length; n > e; e++) {
            t = i[e], o.push(t.text);
          }

          return o;
        }, c.prototype.getPieces = function () {
          var t, e, n, i, o;

          for (n = [], i = this.getTexts(), t = 0, e = i.length; e > t; t++) {
            o = i[t], n.push.apply(n, o.getPieces());
          }

          return n;
        }, c.prototype.getObjects = function () {
          return this.getBlocks().concat(this.getTexts()).concat(this.getPieces());
        }, c.prototype.toSerializableDocument = function () {
          var t;
          return t = [], this.blockList.eachObject(function (e) {
            return t.push(e.copyWithText(e.text.toSerializableText()));
          }), new this.constructor(t);
        }, c.prototype.toString = function () {
          return this.blockList.toString();
        }, c.prototype.toJSON = function () {
          return this.blockList.toJSON();
        }, c.prototype.toConsole = function () {
          var t;
          return JSON.stringify(function () {
            var e, n, i, o;

            for (i = this.blockList.toArray(), o = [], e = 0, n = i.length; n > e; e++) {
              t = i[e], o.push(JSON.parse(t.text.toConsole()));
            }

            return o;
          }.call(this));
        }, c;
      }(e.Object);
    }.call(this), function () {
      e.LineBreakInsertion = function () {
        function t(t) {
          var e;
          this.composition = t, this.document = this.composition.document, e = this.composition.getSelectedRange(), this.startPosition = e[0], this.endPosition = e[1], this.startLocation = this.document.locationFromPosition(this.startPosition), this.endLocation = this.document.locationFromPosition(this.endPosition), this.block = this.document.getBlockAtIndex(this.endLocation.index), this.breaksOnReturn = this.block.breaksOnReturn(), this.previousCharacter = this.block.text.getStringAtPosition(this.endLocation.offset - 1), this.nextCharacter = this.block.text.getStringAtPosition(this.endLocation.offset);
        }

        return t.prototype.shouldInsertBlockBreak = function () {
          return this.block.hasAttributes() && this.block.isListItem() && !this.block.isEmpty() ? 0 !== this.startLocation.offset : this.breaksOnReturn && "\n" !== this.nextCharacter;
        }, t.prototype.shouldBreakFormattedBlock = function () {
          return this.block.hasAttributes() && !this.block.isListItem() && (this.breaksOnReturn && "\n" === this.nextCharacter || "\n" === this.previousCharacter);
        }, t.prototype.shouldDecreaseListLevel = function () {
          return this.block.hasAttributes() && this.block.isListItem() && this.block.isEmpty();
        }, t.prototype.shouldPrependListItem = function () {
          return this.block.isListItem() && 0 === this.startLocation.offset && !this.block.isEmpty();
        }, t.prototype.shouldRemoveLastBlockAttribute = function () {
          return this.block.hasAttributes() && !this.block.isListItem() && this.block.isEmpty();
        }, t;
      }();
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          u,
          c,
          l,
          h = function h(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          p.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          p = {}.hasOwnProperty;

      s = e.normalizeRange, c = e.rangesAreEqual, u = e.rangeIsCollapsed, a = e.objectsAreEqual, t = e.arrayStartsWith, l = e.summarizeArrayChange, i = e.getAllAttributeNames, o = e.getBlockConfig, r = e.getTextConfig, n = e.extend, e.Composition = function (p) {
        function d() {
          this.document = new e.Document(), this.attachments = [], this.currentAttributes = {}, this.revision = 0;
        }

        var f;
        return h(d, p), d.prototype.setDocument = function (t) {
          var e;
          return t.isEqualTo(this.document) ? void 0 : (this.document = t, this.refreshAttachments(), this.revision++, null != (e = this.delegate) && "function" == typeof e.compositionDidChangeDocument ? e.compositionDidChangeDocument(t) : void 0);
        }, d.prototype.getSnapshot = function () {
          return {
            document: this.document,
            selectedRange: this.getSelectedRange()
          };
        }, d.prototype.loadSnapshot = function (t) {
          var n, i, o, r;
          return n = t.document, r = t.selectedRange, null != (i = this.delegate) && "function" == typeof i.compositionWillLoadSnapshot && i.compositionWillLoadSnapshot(), this.setDocument(null != n ? n : new e.Document()), this.setSelection(null != r ? r : [0, 0]), null != (o = this.delegate) && "function" == typeof o.compositionDidLoadSnapshot ? o.compositionDidLoadSnapshot() : void 0;
        }, d.prototype.insertText = function (t, e) {
          var n, i, o, r;
          return r = (null != e ? e : {
            updatePosition: !0
          }).updatePosition, i = this.getSelectedRange(), this.setDocument(this.document.insertTextAtRange(t, i)), o = i[0], n = o + t.getLength(), r && this.setSelection(n), this.notifyDelegateOfInsertionAtRange([o, n]);
        }, d.prototype.insertBlock = function (t) {
          var n;
          return null == t && (t = new e.Block()), n = new e.Document([t]), this.insertDocument(n);
        }, d.prototype.insertDocument = function (t) {
          var n, i, o;
          return null == t && (t = new e.Document()), i = this.getSelectedRange(), this.setDocument(this.document.insertDocumentAtRange(t, i)), o = i[0], n = o + t.getLength(), this.setSelection(n), this.notifyDelegateOfInsertionAtRange([o, n]);
        }, d.prototype.insertString = function (t, n) {
          var i, o;
          return i = this.getCurrentTextAttributes(), o = e.Text.textForStringWithAttributes(t, i), this.insertText(o, n);
        }, d.prototype.insertBlockBreak = function () {
          var t, e, n;
          return e = this.getSelectedRange(), this.setDocument(this.document.insertBlockBreakAtRange(e)), n = e[0], t = n + 1, this.setSelection(t), this.notifyDelegateOfInsertionAtRange([n, t]);
        }, d.prototype.insertLineBreak = function () {
          var t, n;
          return n = new e.LineBreakInsertion(this), n.shouldDecreaseListLevel() ? (this.decreaseListLevel(), this.setSelection(n.startPosition)) : n.shouldPrependListItem() ? (t = new e.Document([n.block.copyWithoutText()]), this.insertDocument(t)) : n.shouldInsertBlockBreak() ? this.insertBlockBreak() : n.shouldRemoveLastBlockAttribute() ? this.removeLastBlockAttribute() : n.shouldBreakFormattedBlock() ? this.breakFormattedBlock(n) : this.insertString("\n");
        }, d.prototype.insertHTML = function (t) {
          var n, i, o, r;
          return n = e.Document.fromHTML(t), o = this.getSelectedRange(), this.setDocument(this.document.mergeDocumentAtRange(n, o)), r = o[0], i = r + n.getLength() - 1, this.setSelection(i), this.notifyDelegateOfInsertionAtRange([r, i]);
        }, d.prototype.replaceHTML = function (t) {
          var n, i, o;
          return n = e.Document.fromHTML(t).copyUsingObjectsFromDocument(this.document), i = this.getLocationRange({
            strict: !1
          }), o = this.document.rangeFromLocationRange(i), this.setDocument(n), this.setSelection(o);
        }, d.prototype.insertFile = function (t) {
          return this.insertFiles([t]);
        }, d.prototype.insertFiles = function (t) {
          var n, i, o, r, s, a;

          for (i = [], r = 0, s = t.length; s > r; r++) {
            o = t[r], (null != (a = this.delegate) ? a.compositionShouldAcceptFile(o) : void 0) && (n = e.Attachment.attachmentForFile(o), i.push(n));
          }

          return this.insertAttachments(i);
        }, d.prototype.insertAttachment = function (t) {
          return this.insertAttachments([t]);
        }, d.prototype.insertAttachments = function (t) {
          var n, i, o, r, s, a, u, c, l;

          for (c = new e.Text(), r = 0, s = t.length; s > r; r++) {
            n = t[r], l = n.getType(), a = null != (u = e.config.attachments[l]) ? u.presentation : void 0, o = this.getCurrentTextAttributes(), a && (o.presentation = a), i = e.Text.textForAttachmentWithAttributes(n, o), c = c.appendText(i);
          }

          return this.insertText(c);
        }, d.prototype.shouldManageDeletingInDirection = function (t) {
          var e;

          if (e = this.getLocationRange(), u(e)) {
            if ("backward" === t && 0 === e[0].offset) return !0;
            if (this.shouldManageMovingCursorInDirection(t)) return !0;
          } else if (e[0].index !== e[1].index) return !0;

          return !1;
        }, d.prototype.deleteInDirection = function (t, e) {
          var n, i, o, r, s, a, c, l;
          return r = (null != e ? e : {}).length, s = this.getLocationRange(), a = this.getSelectedRange(), c = u(a), c ? o = "backward" === t && 0 === s[0].offset : l = s[0].index !== s[1].index, o && this.canDecreaseBlockAttributeLevel() && (i = this.getBlock(), i.isListItem() ? this.decreaseListLevel() : this.decreaseBlockAttributeLevel(), this.setSelection(a[0]), i.isEmpty()) ? !1 : (c && (a = this.getExpandedRangeInDirection(t, {
            length: r
          }), "backward" === t && (n = this.getAttachmentAtRange(a))), n ? (this.editAttachment(n), !1) : (this.setDocument(this.document.removeTextAtRange(a)), this.setSelection(a[0]), o || l ? !1 : void 0));
        }, d.prototype.moveTextFromRange = function (t) {
          var e;
          return e = this.getSelectedRange()[0], this.setDocument(this.document.moveTextFromRangeToPosition(t, e)), this.setSelection(e);
        }, d.prototype.removeAttachment = function (t) {
          var e;
          return (e = this.document.getRangeOfAttachment(t)) ? (this.stopEditingAttachment(), this.setDocument(this.document.removeTextAtRange(e)), this.setSelection(e[0])) : void 0;
        }, d.prototype.removeLastBlockAttribute = function () {
          var t, e, n, i;
          return n = this.getSelectedRange(), i = n[0], e = n[1], t = this.document.getBlockAtPosition(e), this.removeCurrentAttribute(t.getLastAttribute()), this.setSelection(i);
        }, f = " ", d.prototype.insertPlaceholder = function () {
          return this.placeholderPosition = this.getPosition(), this.insertString(f);
        }, d.prototype.selectPlaceholder = function () {
          return null != this.placeholderPosition ? (this.setSelectedRange([this.placeholderPosition, this.placeholderPosition + f.length]), this.getSelectedRange()) : void 0;
        }, d.prototype.forgetPlaceholder = function () {
          return this.placeholderPosition = null;
        }, d.prototype.hasCurrentAttribute = function (t) {
          var e;
          return e = this.currentAttributes[t], null != e && e !== !1;
        }, d.prototype.toggleCurrentAttribute = function (t) {
          var e;
          return (e = !this.currentAttributes[t]) ? this.setCurrentAttribute(t, e) : this.removeCurrentAttribute(t);
        }, d.prototype.canSetCurrentAttribute = function (t) {
          return o(t) ? this.canSetCurrentBlockAttribute(t) : this.canSetCurrentTextAttribute(t);
        }, d.prototype.canSetCurrentTextAttribute = function () {
          var t, e, n, i, o;

          if (e = this.getSelectedDocument()) {
            for (o = e.getAttachments(), n = 0, i = o.length; i > n; n++) {
              if (t = o[n], !t.hasContent()) return !1;
            }

            return !0;
          }
        }, d.prototype.canSetCurrentBlockAttribute = function () {
          var t;
          if (t = this.getBlock()) return !t.isTerminalBlock();
        }, d.prototype.setCurrentAttribute = function (t, e) {
          return o(t) ? this.setBlockAttribute(t, e) : (this.setTextAttribute(t, e), this.currentAttributes[t] = e, this.notifyDelegateOfCurrentAttributesChange());
        }, d.prototype.setTextAttribute = function (t, n) {
          var i, o, r, s;
          if (o = this.getSelectedRange()) return r = o[0], i = o[1], r !== i ? this.setDocument(this.document.addAttributeAtRange(t, n, o)) : "href" === t ? (s = e.Text.textForStringWithAttributes(n, {
            href: n
          }), this.insertText(s)) : void 0;
        }, d.prototype.setBlockAttribute = function (t, e) {
          var n, i;
          if (i = this.getSelectedRange()) return this.canSetCurrentAttribute(t) ? (n = this.getBlock(), this.setDocument(this.document.applyBlockAttributeAtRange(t, e, i)), this.setSelection(i)) : void 0;
        }, d.prototype.removeCurrentAttribute = function (t) {
          return o(t) ? (this.removeBlockAttribute(t), this.updateCurrentAttributes()) : (this.removeTextAttribute(t), delete this.currentAttributes[t], this.notifyDelegateOfCurrentAttributesChange());
        }, d.prototype.removeTextAttribute = function (t) {
          var e;
          if (e = this.getSelectedRange()) return this.setDocument(this.document.removeAttributeAtRange(t, e));
        }, d.prototype.removeBlockAttribute = function (t) {
          var e;
          if (e = this.getSelectedRange()) return this.setDocument(this.document.removeAttributeAtRange(t, e));
        }, d.prototype.canDecreaseNestingLevel = function () {
          var t;
          return (null != (t = this.getBlock()) ? t.getNestingLevel() : void 0) > 0;
        }, d.prototype.canIncreaseNestingLevel = function () {
          var e, n, i;
          if (e = this.getBlock()) return (null != (i = o(e.getLastNestableAttribute())) ? i.listAttribute : 0) ? (n = this.getPreviousBlock()) ? t(n.getListItemAttributes(), e.getListItemAttributes()) : void 0 : e.getNestingLevel() > 0;
        }, d.prototype.decreaseNestingLevel = function () {
          var t;
          if (t = this.getBlock()) return this.setDocument(this.document.replaceBlock(t, t.decreaseNestingLevel()));
        }, d.prototype.increaseNestingLevel = function () {
          var t;
          if (t = this.getBlock()) return this.setDocument(this.document.replaceBlock(t, t.increaseNestingLevel()));
        }, d.prototype.canDecreaseBlockAttributeLevel = function () {
          var t;
          return (null != (t = this.getBlock()) ? t.getAttributeLevel() : void 0) > 0;
        }, d.prototype.decreaseBlockAttributeLevel = function () {
          var t, e;
          return (t = null != (e = this.getBlock()) ? e.getLastAttribute() : void 0) ? this.removeCurrentAttribute(t) : void 0;
        }, d.prototype.decreaseListLevel = function () {
          var t, e, n, i, o, r;

          for (r = this.getSelectedRange()[0], o = this.document.locationFromPosition(r).index, n = o, t = this.getBlock().getAttributeLevel(); (e = this.document.getBlockAtIndex(n + 1)) && e.isListItem() && e.getAttributeLevel() > t;) {
            n++;
          }

          return r = this.document.positionFromLocation({
            index: o,
            offset: 0
          }), i = this.document.positionFromLocation({
            index: n,
            offset: 0
          }), this.setDocument(this.document.removeLastListAttributeAtRange([r, i]));
        }, d.prototype.updateCurrentAttributes = function () {
          var t, e, n, o, r, s;

          if (s = this.getSelectedRange({
            ignoreLock: !0
          })) {
            for (e = this.document.getCommonAttributesAtRange(s), r = i(), n = 0, o = r.length; o > n; n++) {
              t = r[n], e[t] || this.canSetCurrentAttribute(t) || (e[t] = !1);
            }

            if (!a(e, this.currentAttributes)) return this.currentAttributes = e, this.notifyDelegateOfCurrentAttributesChange();
          }
        }, d.prototype.getCurrentAttributes = function () {
          return n.call({}, this.currentAttributes);
        }, d.prototype.getCurrentTextAttributes = function () {
          var t, e, n, i;
          t = {}, n = this.currentAttributes;

          for (e in n) {
            i = n[e], i !== !1 && r(e) && (t[e] = i);
          }

          return t;
        }, d.prototype.freezeSelection = function () {
          return this.setCurrentAttribute("frozen", !0);
        }, d.prototype.thawSelection = function () {
          return this.removeCurrentAttribute("frozen");
        }, d.prototype.hasFrozenSelection = function () {
          return this.hasCurrentAttribute("frozen");
        }, d.proxyMethod("getSelectionManager().getPointRange"), d.proxyMethod("getSelectionManager().setLocationRangeFromPointRange"), d.proxyMethod("getSelectionManager().createLocationRangeFromDOMRange"), d.proxyMethod("getSelectionManager().locationIsCursorTarget"), d.proxyMethod("getSelectionManager().selectionIsExpanded"), d.proxyMethod("delegate?.getSelectionManager"), d.prototype.setSelection = function (t) {
          var e, n;
          return e = this.document.locationRangeFromRange(t), null != (n = this.delegate) ? n.compositionDidRequestChangingSelectionToLocationRange(e) : void 0;
        }, d.prototype.getSelectedRange = function () {
          var t;
          return (t = this.getLocationRange()) ? this.document.rangeFromLocationRange(t) : void 0;
        }, d.prototype.setSelectedRange = function (t) {
          var e;
          return e = this.document.locationRangeFromRange(t), this.getSelectionManager().setLocationRange(e);
        }, d.prototype.getPosition = function () {
          var t;
          return (t = this.getLocationRange()) ? this.document.positionFromLocation(t[0]) : void 0;
        }, d.prototype.getLocationRange = function (t) {
          var e, n;
          return null != (e = null != (n = this.targetLocationRange) ? n : this.getSelectionManager().getLocationRange(t)) ? e : s({
            index: 0,
            offset: 0
          });
        }, d.prototype.withTargetLocationRange = function (t, e) {
          var n;
          this.targetLocationRange = t;

          try {
            n = e();
          } finally {
            this.targetLocationRange = null;
          }

          return n;
        }, d.prototype.withTargetRange = function (t, e) {
          var n;
          return n = this.document.locationRangeFromRange(t), this.withTargetLocationRange(n, e);
        }, d.prototype.withTargetDOMRange = function (t, e) {
          var n;
          return n = this.createLocationRangeFromDOMRange(t, {
            strict: !1
          }), this.withTargetLocationRange(n, e);
        }, d.prototype.getExpandedRangeInDirection = function (t, e) {
          var n, i, o, r;
          return i = (null != e ? e : {}).length, o = this.getSelectedRange(), r = o[0], n = o[1], "backward" === t ? i ? r -= i : r = this.translateUTF16PositionFromOffset(r, -1) : i ? n += i : n = this.translateUTF16PositionFromOffset(n, 1), s([r, n]);
        }, d.prototype.shouldManageMovingCursorInDirection = function (t) {
          var e;
          return this.editingAttachment ? !0 : (e = this.getExpandedRangeInDirection(t), null != this.getAttachmentAtRange(e));
        }, d.prototype.moveCursorInDirection = function (t) {
          var e, n, i, o;
          return this.editingAttachment ? i = this.document.getRangeOfAttachment(this.editingAttachment) : (o = this.getSelectedRange(), i = this.getExpandedRangeInDirection(t), n = !c(o, i)), this.setSelectedRange("backward" === t ? i[0] : i[1]), n && (e = this.getAttachmentAtRange(i)) ? this.editAttachment(e) : void 0;
        }, d.prototype.expandSelectionInDirection = function (t, e) {
          var n, i;
          return n = (null != e ? e : {}).length, i = this.getExpandedRangeInDirection(t, {
            length: n
          }), this.setSelectedRange(i);
        }, d.prototype.expandSelectionForEditing = function () {
          return this.hasCurrentAttribute("href") ? this.expandSelectionAroundCommonAttribute("href") : void 0;
        }, d.prototype.expandSelectionAroundCommonAttribute = function (t) {
          var e, n;
          return e = this.getPosition(), n = this.document.getRangeOfCommonAttributeAtPosition(t, e), this.setSelectedRange(n);
        }, d.prototype.selectionContainsAttachments = function () {
          var t;
          return (null != (t = this.getSelectedAttachments()) ? t.length : void 0) > 0;
        }, d.prototype.selectionIsInCursorTarget = function () {
          return this.editingAttachment || this.positionIsCursorTarget(this.getPosition());
        }, d.prototype.positionIsCursorTarget = function (t) {
          var e;
          return (e = this.document.locationFromPosition(t)) ? this.locationIsCursorTarget(e) : void 0;
        }, d.prototype.positionIsBlockBreak = function (t) {
          var e;
          return null != (e = this.document.getPieceAtPosition(t)) ? e.isBlockBreak() : void 0;
        }, d.prototype.getSelectedDocument = function () {
          var t;
          return (t = this.getSelectedRange()) ? this.document.getDocumentAtRange(t) : void 0;
        }, d.prototype.getSelectedAttachments = function () {
          var t;
          return null != (t = this.getSelectedDocument()) ? t.getAttachments() : void 0;
        }, d.prototype.getAttachments = function () {
          return this.attachments.slice(0);
        }, d.prototype.refreshAttachments = function () {
          var t, e, n, i, o, r, s, a, u, c, h, p;

          for (n = this.document.getAttachments(), a = l(this.attachments, n), t = a.added, h = a.removed, this.attachments = n, i = 0, r = h.length; r > i; i++) {
            e = h[i], e.delegate = null, null != (u = this.delegate) && "function" == typeof u.compositionDidRemoveAttachment && u.compositionDidRemoveAttachment(e);
          }

          for (p = [], o = 0, s = t.length; s > o; o++) {
            e = t[o], e.delegate = this, p.push(null != (c = this.delegate) && "function" == typeof c.compositionDidAddAttachment ? c.compositionDidAddAttachment(e) : void 0);
          }

          return p;
        }, d.prototype.attachmentDidChangeAttributes = function (t) {
          var e;
          return this.revision++, null != (e = this.delegate) && "function" == typeof e.compositionDidEditAttachment ? e.compositionDidEditAttachment(t) : void 0;
        }, d.prototype.attachmentDidChangePreviewURL = function (t) {
          var e;
          return this.revision++, null != (e = this.delegate) && "function" == typeof e.compositionDidChangeAttachmentPreviewURL ? e.compositionDidChangeAttachmentPreviewURL(t) : void 0;
        }, d.prototype.editAttachment = function (t, e) {
          var n;
          if (t !== this.editingAttachment) return this.stopEditingAttachment(), this.editingAttachment = t, null != (n = this.delegate) && "function" == typeof n.compositionDidStartEditingAttachment ? n.compositionDidStartEditingAttachment(this.editingAttachment, e) : void 0;
        }, d.prototype.stopEditingAttachment = function () {
          var t;
          if (this.editingAttachment) return null != (t = this.delegate) && "function" == typeof t.compositionDidStopEditingAttachment && t.compositionDidStopEditingAttachment(this.editingAttachment), this.editingAttachment = null;
        }, d.prototype.updateAttributesForAttachment = function (t, e) {
          return this.setDocument(this.document.updateAttributesForAttachment(t, e));
        }, d.prototype.removeAttributeForAttachment = function (t, e) {
          return this.setDocument(this.document.removeAttributeForAttachment(t, e));
        }, d.prototype.breakFormattedBlock = function (t) {
          var n, i, o, r, s;
          return i = t.document, n = t.block, r = t.startPosition, s = [r - 1, r], n.getBlockBreakPosition() === t.startLocation.offset ? (n.breaksOnReturn() && "\n" === t.nextCharacter ? r += 1 : i = i.removeTextAtRange(s), s = [r, r]) : "\n" === t.nextCharacter ? "\n" === t.previousCharacter ? s = [r - 1, r + 1] : (s = [r, r + 1], r += 1) : t.startLocation.offset - 1 !== 0 && (r += 1), o = new e.Document([n.removeLastAttribute().copyWithoutText()]), this.setDocument(i.insertDocumentAtRange(o, s)), this.setSelection(r);
        }, d.prototype.getPreviousBlock = function () {
          var t, e;
          return (e = this.getLocationRange()) && (t = e[0].index, t > 0) ? this.document.getBlockAtIndex(t - 1) : void 0;
        }, d.prototype.getBlock = function () {
          var t;
          return (t = this.getLocationRange()) ? this.document.getBlockAtIndex(t[0].index) : void 0;
        }, d.prototype.getAttachmentAtRange = function (t) {
          var n;
          return n = this.document.getDocumentAtRange(t), n.toString() === e.OBJECT_REPLACEMENT_CHARACTER + "\n" ? n.getAttachments()[0] : void 0;
        }, d.prototype.notifyDelegateOfCurrentAttributesChange = function () {
          var t;
          return null != (t = this.delegate) && "function" == typeof t.compositionDidChangeCurrentAttributes ? t.compositionDidChangeCurrentAttributes(this.currentAttributes) : void 0;
        }, d.prototype.notifyDelegateOfInsertionAtRange = function (t) {
          var e;
          return null != (e = this.delegate) && "function" == typeof e.compositionDidPerformInsertionAtRange ? e.compositionDidPerformInsertionAtRange(t) : void 0;
        }, d.prototype.translateUTF16PositionFromOffset = function (t, e) {
          var n, i;
          return i = this.document.toUTF16String(), n = i.offsetFromUCS2Offset(t), i.offsetToUCS2Offset(n + e);
        }, d;
      }(e.BasicObject);
    }.call(this), function () {
      var t = function t(_t18, e) {
        function i() {
          this.constructor = _t18;
        }

        for (var o in e) {
          n.call(e, o) && (_t18[o] = e[o]);
        }

        return i.prototype = e.prototype, _t18.prototype = new i(), _t18.__super__ = e.prototype, _t18;
      },
          n = {}.hasOwnProperty;

      e.UndoManager = function (e) {
        function n(t) {
          this.composition = t, this.undoEntries = [], this.redoEntries = [];
        }

        var i;
        return t(n, e), n.prototype.recordUndoEntry = function (t, e) {
          var n, o, r, s, a;
          return s = null != e ? e : {}, o = s.context, n = s.consolidatable, r = this.undoEntries.slice(-1)[0], n && i(r, t, o) ? void 0 : (a = this.createEntry({
            description: t,
            context: o
          }), this.undoEntries.push(a), this.redoEntries = []);
        }, n.prototype.undo = function () {
          var t, e;
          return (e = this.undoEntries.pop()) ? (t = this.createEntry(e), this.redoEntries.push(t), this.composition.loadSnapshot(e.snapshot)) : void 0;
        }, n.prototype.redo = function () {
          var t, e;
          return (t = this.redoEntries.pop()) ? (e = this.createEntry(t), this.undoEntries.push(e), this.composition.loadSnapshot(t.snapshot)) : void 0;
        }, n.prototype.canUndo = function () {
          return this.undoEntries.length > 0;
        }, n.prototype.canRedo = function () {
          return this.redoEntries.length > 0;
        }, n.prototype.createEntry = function (t) {
          var e, n, i;
          return i = null != t ? t : {}, n = i.description, e = i.context, {
            description: null != n ? n.toString() : void 0,
            context: JSON.stringify(e),
            snapshot: this.composition.getSnapshot()
          };
        }, i = function i(t, e, n) {
          return (null != t ? t.description : void 0) === (null != e ? e.toString() : void 0) && (null != t ? t.context : void 0) === JSON.stringify(n);
        }, n;
      }(e.BasicObject);
    }.call(this), function () {
      var t;
      e.attachmentGalleryFilter = function (e) {
        var n;
        return n = new t(e), n.perform(), n.getSnapshot();
      }, t = function () {
        function t(t) {
          this.document = t.document, this.selectedRange = t.selectedRange;
        }

        var e, n, i;
        return e = "attachmentGallery", n = "presentation", i = "gallery", t.prototype.perform = function () {
          return this.removeBlockAttribute(), this.applyBlockAttribute();
        }, t.prototype.getSnapshot = function () {
          return {
            document: this.document,
            selectedRange: this.selectedRange
          };
        }, t.prototype.removeBlockAttribute = function () {
          var t, n, i, o, r;

          for (o = this.findRangesOfBlocks(), r = [], t = 0, n = o.length; n > t; t++) {
            i = o[t], r.push(this.document = this.document.removeAttributeAtRange(e, i));
          }

          return r;
        }, t.prototype.applyBlockAttribute = function () {
          var t, n, i, o, r, s;

          for (i = 0, r = this.findRangesOfPieces(), s = [], t = 0, n = r.length; n > t; t++) {
            o = r[t], o[1] - o[0] > 1 && (o[0] += i, o[1] += i, "\n" !== this.document.getCharacterAtPosition(o[1]) && (this.document = this.document.insertBlockBreakAtRange(o[1]), o[1] < this.selectedRange[1] && this.moveSelectedRangeForward(), o[1]++, i++), 0 !== o[0] && "\n" !== this.document.getCharacterAtPosition(o[0] - 1) && (this.document = this.document.insertBlockBreakAtRange(o[0]), o[0] < this.selectedRange[0] && this.moveSelectedRangeForward(), o[0]++, i++), s.push(this.document = this.document.applyBlockAttributeAtRange(e, !0, o)));
          }

          return s;
        }, t.prototype.findRangesOfBlocks = function () {
          return this.document.findRangesForBlockAttribute(e);
        }, t.prototype.findRangesOfPieces = function () {
          return this.document.findRangesForTextAttribute(n, {
            withValue: i
          });
        }, t.prototype.moveSelectedRangeForward = function () {
          return this.selectedRange[0] += 1, this.selectedRange[1] += 1;
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t19, e) {
        return function () {
          return _t19.apply(e, arguments);
        };
      };

      e.Editor = function () {
        function n(n, o, r) {
          this.composition = n, this.selectionManager = o, this.element = r, this.insertFiles = t(this.insertFiles, this), this.undoManager = new e.UndoManager(this.composition), this.filters = i.slice(0);
        }

        var i;
        return i = [e.attachmentGalleryFilter], n.prototype.loadDocument = function (t) {
          return this.loadSnapshot({
            document: t,
            selectedRange: [0, 0]
          });
        }, n.prototype.loadHTML = function (t) {
          return null == t && (t = ""), this.loadDocument(e.Document.fromHTML(t, {
            referenceElement: this.element
          }));
        }, n.prototype.loadJSON = function (t) {
          var n, i;
          return n = t.document, i = t.selectedRange, n = e.Document.fromJSON(n), this.loadSnapshot({
            document: n,
            selectedRange: i
          });
        }, n.prototype.loadSnapshot = function (t) {
          return this.undoManager = new e.UndoManager(this.composition), this.composition.loadSnapshot(t);
        }, n.prototype.getDocument = function () {
          return this.composition.document;
        }, n.prototype.getSelectedDocument = function () {
          return this.composition.getSelectedDocument();
        }, n.prototype.getSnapshot = function () {
          return this.composition.getSnapshot();
        }, n.prototype.toJSON = function () {
          return this.getSnapshot();
        }, n.prototype.deleteInDirection = function (t) {
          return this.composition.deleteInDirection(t);
        }, n.prototype.insertAttachment = function (t) {
          return this.composition.insertAttachment(t);
        }, n.prototype.insertDocument = function (t) {
          return this.composition.insertDocument(t);
        }, n.prototype.insertFile = function (t) {
          return this.composition.insertFile(t);
        }, n.prototype.insertFiles = function (t) {
          return this.composition.insertFiles(t);
        }, n.prototype.insertHTML = function (t) {
          return this.composition.insertHTML(t);
        }, n.prototype.insertString = function (t) {
          return this.composition.insertString(t);
        }, n.prototype.insertText = function (t) {
          return this.composition.insertText(t);
        }, n.prototype.insertLineBreak = function () {
          return this.composition.insertLineBreak();
        }, n.prototype.getSelectedRange = function () {
          return this.composition.getSelectedRange();
        }, n.prototype.getPosition = function () {
          return this.composition.getPosition();
        }, n.prototype.getClientRectAtPosition = function (t) {
          var e;
          return e = this.getDocument().locationRangeFromRange([t, t + 1]), this.selectionManager.getClientRectAtLocationRange(e);
        }, n.prototype.expandSelectionInDirection = function (t) {
          return this.composition.expandSelectionInDirection(t);
        }, n.prototype.moveCursorInDirection = function (t) {
          return this.composition.moveCursorInDirection(t);
        }, n.prototype.setSelectedRange = function (t) {
          return this.composition.setSelectedRange(t);
        }, n.prototype.activateAttribute = function (t, e) {
          return null == e && (e = !0), this.composition.setCurrentAttribute(t, e);
        }, n.prototype.attributeIsActive = function (t) {
          return this.composition.hasCurrentAttribute(t);
        }, n.prototype.canActivateAttribute = function (t) {
          return this.composition.canSetCurrentAttribute(t);
        }, n.prototype.deactivateAttribute = function (t) {
          return this.composition.removeCurrentAttribute(t);
        }, n.prototype.canDecreaseNestingLevel = function () {
          return this.composition.canDecreaseNestingLevel();
        }, n.prototype.canIncreaseNestingLevel = function () {
          return this.composition.canIncreaseNestingLevel();
        }, n.prototype.decreaseNestingLevel = function () {
          return this.canDecreaseNestingLevel() ? this.composition.decreaseNestingLevel() : void 0;
        }, n.prototype.increaseNestingLevel = function () {
          return this.canIncreaseNestingLevel() ? this.composition.increaseNestingLevel() : void 0;
        }, n.prototype.canRedo = function () {
          return this.undoManager.canRedo();
        }, n.prototype.canUndo = function () {
          return this.undoManager.canUndo();
        }, n.prototype.recordUndoEntry = function (t, e) {
          var n, i, o;
          return o = null != e ? e : {}, i = o.context, n = o.consolidatable, this.undoManager.recordUndoEntry(t, {
            context: i,
            consolidatable: n
          });
        }, n.prototype.redo = function () {
          return this.canRedo() ? this.undoManager.redo() : void 0;
        }, n.prototype.undo = function () {
          return this.canUndo() ? this.undoManager.undo() : void 0;
        }, n;
      }();
    }.call(this), function () {
      var t = function t(_t20, e) {
        function i() {
          this.constructor = _t20;
        }

        for (var o in e) {
          n.call(e, o) && (_t20[o] = e[o]);
        }

        return i.prototype = e.prototype, _t20.prototype = new i(), _t20.__super__ = e.prototype, _t20;
      },
          n = {}.hasOwnProperty;

      e.ManagedAttachment = function (e) {
        function n(t, e) {
          var n;
          this.attachmentManager = t, this.attachment = e, n = this.attachment, this.id = n.id, this.file = n.file;
        }

        return t(n, e), n.prototype.remove = function () {
          return this.attachmentManager.requestRemovalOfAttachment(this.attachment);
        }, n.proxyMethod("attachment.getAttribute"), n.proxyMethod("attachment.hasAttribute"), n.proxyMethod("attachment.setAttribute"), n.proxyMethod("attachment.getAttributes"), n.proxyMethod("attachment.setAttributes"), n.proxyMethod("attachment.isPending"), n.proxyMethod("attachment.isPreviewable"), n.proxyMethod("attachment.getURL"), n.proxyMethod("attachment.getHref"), n.proxyMethod("attachment.getFilename"), n.proxyMethod("attachment.getFilesize"), n.proxyMethod("attachment.getFormattedFilesize"), n.proxyMethod("attachment.getExtension"), n.proxyMethod("attachment.getContentType"), n.proxyMethod("attachment.getFile"), n.proxyMethod("attachment.setFile"), n.proxyMethod("attachment.releaseFile"), n.proxyMethod("attachment.getUploadProgress"), n.proxyMethod("attachment.setUploadProgress"), n;
      }(e.BasicObject);
    }.call(this), function () {
      var t = function t(_t21, e) {
        function i() {
          this.constructor = _t21;
        }

        for (var o in e) {
          n.call(e, o) && (_t21[o] = e[o]);
        }

        return i.prototype = e.prototype, _t21.prototype = new i(), _t21.__super__ = e.prototype, _t21;
      },
          n = {}.hasOwnProperty;

      e.AttachmentManager = function (n) {
        function i(t) {
          var e, n, i;

          for (null == t && (t = []), this.managedAttachments = {}, n = 0, i = t.length; i > n; n++) {
            e = t[n], this.manageAttachment(e);
          }
        }

        return t(i, n), i.prototype.getAttachments = function () {
          var t, e, n, i;
          n = this.managedAttachments, i = [];

          for (e in n) {
            t = n[e], i.push(t);
          }

          return i;
        }, i.prototype.manageAttachment = function (t) {
          var n, i;
          return null != (n = this.managedAttachments)[i = t.id] ? n[i] : n[i] = new e.ManagedAttachment(this, t);
        }, i.prototype.attachmentIsManaged = function (t) {
          return t.id in this.managedAttachments;
        }, i.prototype.requestRemovalOfAttachment = function (t) {
          var e;
          return this.attachmentIsManaged(t) && null != (e = this.delegate) && "function" == typeof e.attachmentManagerDidRequestRemovalOfAttachment ? e.attachmentManagerDidRequestRemovalOfAttachment(t) : void 0;
        }, i.prototype.unmanageAttachment = function (t) {
          var e;
          return e = this.managedAttachments[t.id], delete this.managedAttachments[t.id], e;
        }, i;
      }(e.BasicObject);
    }.call(this), function () {
      var t, n, i, o, r, s, a, u, c, l, h;
      t = e.elementContainsNode, n = e.findChildIndexOfNode, r = e.nodeIsBlockStart, s = e.nodeIsBlockStartComment, o = e.nodeIsBlockContainer, a = e.nodeIsCursorTarget, u = e.nodeIsEmptyTextNode, c = e.nodeIsTextNode, i = e.nodeIsAttachmentElement, l = e.tagName, h = e.walkTree, e.LocationMapper = function () {
        function e(t) {
          this.element = t;
        }

        var p, d, f, g;
        return e.prototype.findLocationFromContainerAndOffset = function (e, i, o) {
          var s, u, l, p, g, m, v;

          for (m = (null != o ? o : {
            strict: !0
          }).strict, u = 0, l = !1, p = {
            index: 0,
            offset: 0
          }, (s = this.findAttachmentElementParentForNode(e)) && (e = s.parentNode, i = n(s)), v = h(this.element, {
            usingFilter: f
          }); v.nextNode();) {
            if (g = v.currentNode, g === e && c(e)) {
              a(g) || (p.offset += i);
              break;
            }

            if (g.parentNode === e) {
              if (u++ === i) break;
            } else if (!t(e, g) && u > 0) break;

            r(g, {
              strict: m
            }) ? (l && p.index++, p.offset = 0, l = !0) : p.offset += d(g);
          }

          return p;
        }, e.prototype.findContainerAndOffsetFromLocation = function (t) {
          var e, i, s, u, l;

          if (0 === t.index && 0 === t.offset) {
            for (e = this.element, u = 0; e.firstChild;) {
              if (e = e.firstChild, o(e)) {
                u = 1;
                break;
              }
            }

            return [e, u];
          }

          if (l = this.findNodeAndOffsetFromLocation(t), i = l[0], s = l[1], i) {
            if (c(i)) 0 === d(i) ? (e = i.parentNode.parentNode, u = n(i.parentNode), a(i, {
              name: "right"
            }) && u++) : (e = i, u = t.offset - s);else {
              if (e = i.parentNode, !r(i.previousSibling) && !o(e)) for (; i === e.lastChild && (i = e, e = e.parentNode, !o(e));) {
                ;
              }
              u = n(i), 0 !== t.offset && u++;
            }
            return [e, u];
          }
        }, e.prototype.findNodeAndOffsetFromLocation = function (t) {
          var e, n, i, o, r, s, u, l;

          for (u = 0, l = this.getSignificantNodesForIndex(t.index), n = 0, i = l.length; i > n; n++) {
            if (e = l[n], o = d(e), t.offset <= u + o) if (c(e)) {
              if (r = e, s = u, t.offset === s && a(r)) break;
            } else r || (r = e, s = u);
            if (u += o, u > t.offset) break;
          }

          return [r, s];
        }, e.prototype.findAttachmentElementParentForNode = function (t) {
          for (; t && t !== this.element;) {
            if (i(t)) return t;
            t = t.parentNode;
          }
        }, e.prototype.getSignificantNodesForIndex = function (t) {
          var e, n, i, o, r;

          for (i = [], r = h(this.element, {
            usingFilter: p
          }), o = !1; r.nextNode();) {
            if (n = r.currentNode, s(n)) {
              if ("undefined" != typeof e && null !== e ? e++ : e = 0, e === t) o = !0;else if (o) break;
            } else o && i.push(n);
          }

          return i;
        }, d = function d(t) {
          var e;
          return t.nodeType === Node.TEXT_NODE ? a(t) ? 0 : (e = t.textContent, e.length) : "br" === l(t) || i(t) ? 1 : 0;
        }, p = function p(t) {
          return g(t) === NodeFilter.FILTER_ACCEPT ? f(t) : NodeFilter.FILTER_REJECT;
        }, g = function g(t) {
          return u(t) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }, f = function f(t) {
          return i(t.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }, e;
      }();
    }.call(this), function () {
      var t,
          n,
          i = [].slice;
      t = e.getDOMRange, n = e.setDOMRange, e.PointMapper = function () {
        function e() {}

        return e.prototype.createDOMRangeFromPoint = function (e) {
          var i, o, r, s, a, u, c, l;
          if (c = e.x, l = e.y, document.caretPositionFromPoint) return a = document.caretPositionFromPoint(c, l), r = a.offsetNode, o = a.offset, i = document.createRange(), i.setStart(r, o), i;
          if (document.caretRangeFromPoint) return document.caretRangeFromPoint(c, l);

          if (document.body.createTextRange) {
            s = t();

            try {
              u = document.body.createTextRange(), u.moveToPoint(c, l), u.select();
            } catch (h) {}

            return i = t(), n(s), i;
          }
        }, e.prototype.getClientRectsForDOMRange = function (t) {
          var e, n, o;
          return n = i.call(t.getClientRects()), o = n[0], e = n[n.length - 1], [o, e];
        }, e;
      }();
    }.call(this), function () {
      var t,
          n = function n(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          i = function i(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          o.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty,
          r = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      t = e.getDOMRange, e.SelectionChangeObserver = function (e) {
        function o() {
          this.run = n(this.run, this), this.update = n(this.update, this), this.selectionManagers = [];
        }

        var s;
        return i(o, e), o.prototype.start = function () {
          return this.started ? void 0 : (this.started = !0, "onselectionchange" in document ? document.addEventListener("selectionchange", this.update, !0) : this.run());
        }, o.prototype.stop = function () {
          return this.started ? (this.started = !1, document.removeEventListener("selectionchange", this.update, !0)) : void 0;
        }, o.prototype.registerSelectionManager = function (t) {
          return r.call(this.selectionManagers, t) < 0 ? (this.selectionManagers.push(t), this.start()) : void 0;
        }, o.prototype.unregisterSelectionManager = function (t) {
          var e;
          return this.selectionManagers = function () {
            var n, i, o, r;

            for (o = this.selectionManagers, r = [], n = 0, i = o.length; i > n; n++) {
              e = o[n], e !== t && r.push(e);
            }

            return r;
          }.call(this), 0 === this.selectionManagers.length ? this.stop() : void 0;
        }, o.prototype.notifySelectionManagersOfSelectionChange = function () {
          var t, e, n, i, o;

          for (n = this.selectionManagers, i = [], t = 0, e = n.length; e > t; t++) {
            o = n[t], i.push(o.selectionDidChange());
          }

          return i;
        }, o.prototype.update = function () {
          var e;
          return e = t(), s(e, this.domRange) ? void 0 : (this.domRange = e, this.notifySelectionManagersOfSelectionChange());
        }, o.prototype.reset = function () {
          return this.domRange = null, this.update();
        }, o.prototype.run = function () {
          return this.started ? (this.update(), requestAnimationFrame(this.run)) : void 0;
        }, s = function s(t, e) {
          return (null != t ? t.startContainer : void 0) === (null != e ? e.startContainer : void 0) && (null != t ? t.startOffset : void 0) === (null != e ? e.startOffset : void 0) && (null != t ? t.endContainer : void 0) === (null != e ? e.endContainer : void 0) && (null != t ? t.endOffset : void 0) === (null != e ? e.endOffset : void 0);
        }, o;
      }(e.BasicObject), null == e.selectionChangeObserver && (e.selectionChangeObserver = new e.SelectionChangeObserver());
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          u,
          c,
          l,
          h = function h(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          p = function p(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          d.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          d = {}.hasOwnProperty;

      i = e.getDOMSelection, n = e.getDOMRange, l = e.setDOMRange, t = e.elementContainsNode, s = e.nodeIsCursorTarget, r = e.innerElementIsActive, o = e.handleEvent, a = e.normalizeRange, u = e.rangeIsCollapsed, c = e.rangesAreEqual, e.SelectionManager = function (d) {
        function f(t) {
          this.element = t, this.selectionDidChange = h(this.selectionDidChange, this), this.didMouseDown = h(this.didMouseDown, this), this.locationMapper = new e.LocationMapper(this.element), this.pointMapper = new e.PointMapper(), this.lockCount = 0, o("mousedown", {
            onElement: this.element,
            withCallback: this.didMouseDown
          });
        }

        return p(f, d), f.prototype.getLocationRange = function (t) {
          var e, i;
          return null == t && (t = {}), e = t.strict === !1 ? this.createLocationRangeFromDOMRange(n(), {
            strict: !1
          }) : t.ignoreLock ? this.currentLocationRange : null != (i = this.lockedLocationRange) ? i : this.currentLocationRange;
        }, f.prototype.setLocationRange = function (t) {
          var e;
          if (!this.lockedLocationRange) return t = a(t), (e = this.createDOMRangeFromLocationRange(t)) ? (l(e), this.updateCurrentLocationRange(t)) : void 0;
        }, f.prototype.setLocationRangeFromPointRange = function (t) {
          var e, n;
          return t = a(t), n = this.getLocationAtPoint(t[0]), e = this.getLocationAtPoint(t[1]), this.setLocationRange([n, e]);
        }, f.prototype.getClientRectAtLocationRange = function (t) {
          var e;
          return (e = this.createDOMRangeFromLocationRange(t)) ? this.getClientRectsForDOMRange(e)[1] : void 0;
        }, f.prototype.locationIsCursorTarget = function (t) {
          var e, n, i;
          return i = this.findNodeAndOffsetFromLocation(t), e = i[0], n = i[1], s(e);
        }, f.prototype.lock = function () {
          return 0 === this.lockCount++ ? (this.updateCurrentLocationRange(), this.lockedLocationRange = this.getLocationRange()) : void 0;
        }, f.prototype.unlock = function () {
          var t;
          return 0 === --this.lockCount && (t = this.lockedLocationRange, this.lockedLocationRange = null, null != t) ? this.setLocationRange(t) : void 0;
        }, f.prototype.clearSelection = function () {
          var t;
          return null != (t = i()) ? t.removeAllRanges() : void 0;
        }, f.prototype.selectionIsCollapsed = function () {
          var t;
          return (null != (t = n()) ? t.collapsed : void 0) === !0;
        }, f.prototype.selectionIsExpanded = function () {
          return !this.selectionIsCollapsed();
        }, f.prototype.createLocationRangeFromDOMRange = function (t, e) {
          var n, i;
          if (null != t && this.domRangeWithinElement(t) && (i = this.findLocationFromContainerAndOffset(t.startContainer, t.startOffset, e))) return t.collapsed || (n = this.findLocationFromContainerAndOffset(t.endContainer, t.endOffset, e)), a([i, n]);
        }, f.proxyMethod("locationMapper.findLocationFromContainerAndOffset"), f.proxyMethod("locationMapper.findContainerAndOffsetFromLocation"), f.proxyMethod("locationMapper.findNodeAndOffsetFromLocation"), f.proxyMethod("pointMapper.createDOMRangeFromPoint"), f.proxyMethod("pointMapper.getClientRectsForDOMRange"), f.prototype.didMouseDown = function () {
          return this.pauseTemporarily();
        }, f.prototype.pauseTemporarily = function () {
          var e, n, i, r;
          return this.paused = !0, n = function (e) {
            return function () {
              var n, o, s;

              for (e.paused = !1, clearTimeout(r), o = 0, s = i.length; s > o; o++) {
                n = i[o], n.destroy();
              }

              return t(document, e.element) ? e.selectionDidChange() : void 0;
            };
          }(this), r = setTimeout(n, 200), i = function () {
            var t, i, r, s;

            for (r = ["mousemove", "keydown"], s = [], t = 0, i = r.length; i > t; t++) {
              e = r[t], s.push(o(e, {
                onElement: document,
                withCallback: n
              }));
            }

            return s;
          }();
        }, f.prototype.selectionDidChange = function () {
          return this.paused || r(this.element) ? void 0 : this.updateCurrentLocationRange();
        }, f.prototype.updateCurrentLocationRange = function (t) {
          var e;
          return (null != t ? t : t = this.createLocationRangeFromDOMRange(n())) && !c(t, this.currentLocationRange) ? (this.currentLocationRange = t, null != (e = this.delegate) && "function" == typeof e.locationRangeDidChange ? e.locationRangeDidChange(this.currentLocationRange.slice(0)) : void 0) : void 0;
        }, f.prototype.createDOMRangeFromLocationRange = function (t) {
          var e, n, i, o;
          return i = this.findContainerAndOffsetFromLocation(t[0]), n = u(t) ? i : null != (o = this.findContainerAndOffsetFromLocation(t[1])) ? o : i, null != i && null != n ? (e = document.createRange(), e.setStart.apply(e, i), e.setEnd.apply(e, n), e) : void 0;
        }, f.prototype.getLocationAtPoint = function (t) {
          var e, n;
          return (e = this.createDOMRangeFromPoint(t)) && null != (n = this.createLocationRangeFromDOMRange(e)) ? n[0] : void 0;
        }, f.prototype.domRangeWithinElement = function (e) {
          return e.collapsed ? t(this.element, e.startContainer) : t(this.element, e.startContainer) && t(this.element, e.endContainer);
        }, f;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r = function r(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          s.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          s = {}.hasOwnProperty,
          a = [].slice;

      i = e.rangeIsCollapsed, o = e.rangesAreEqual, n = e.objectsAreEqual, t = e.getBlockConfig, e.EditorController = function (s) {
        function u(t) {
          var n, i;
          this.editorElement = t.editorElement, n = t.document, i = t.html, this.selectionManager = new e.SelectionManager(this.editorElement), this.selectionManager.delegate = this, this.composition = new e.Composition(), this.composition.delegate = this, this.attachmentManager = new e.AttachmentManager(this.composition.getAttachments()), this.attachmentManager.delegate = this, this.inputController = new e["Level" + e.config.input.getLevel() + "InputController"](this.editorElement), this.inputController.delegate = this, this.inputController.responder = this.composition, this.compositionController = new e.CompositionController(this.editorElement, this.composition), this.compositionController.delegate = this, this.toolbarController = new e.ToolbarController(this.editorElement.toolbarElement), this.toolbarController.delegate = this, this.editor = new e.Editor(this.composition, this.selectionManager, this.editorElement), null != n ? this.editor.loadDocument(n) : this.editor.loadHTML(i);
        }

        var c;
        return r(u, s), u.prototype.registerSelectionManager = function () {
          return e.selectionChangeObserver.registerSelectionManager(this.selectionManager);
        }, u.prototype.unregisterSelectionManager = function () {
          return e.selectionChangeObserver.unregisterSelectionManager(this.selectionManager);
        }, u.prototype.render = function () {
          return this.compositionController.render();
        }, u.prototype.reparse = function () {
          return this.composition.replaceHTML(this.editorElement.innerHTML);
        }, u.prototype.compositionDidChangeDocument = function () {
          return this.notifyEditorElement("document-change"), this.handlingInput ? void 0 : this.render();
        }, u.prototype.compositionDidChangeCurrentAttributes = function (t) {
          return this.currentAttributes = t, this.toolbarController.updateAttributes(this.currentAttributes), this.updateCurrentActions(), this.notifyEditorElement("attributes-change", {
            attributes: this.currentAttributes
          });
        }, u.prototype.compositionDidPerformInsertionAtRange = function (t) {
          return this.pasting ? this.pastedRange = t : void 0;
        }, u.prototype.compositionShouldAcceptFile = function (t) {
          return this.notifyEditorElement("file-accept", {
            file: t
          });
        }, u.prototype.compositionDidAddAttachment = function (t) {
          var e;
          return e = this.attachmentManager.manageAttachment(t), this.notifyEditorElement("attachment-add", {
            attachment: e
          });
        }, u.prototype.compositionDidEditAttachment = function (t) {
          var e;
          return this.compositionController.rerenderViewForObject(t), e = this.attachmentManager.manageAttachment(t), this.notifyEditorElement("attachment-edit", {
            attachment: e
          }), this.notifyEditorElement("change");
        }, u.prototype.compositionDidChangeAttachmentPreviewURL = function (t) {
          return this.compositionController.invalidateViewForObject(t), this.notifyEditorElement("change");
        }, u.prototype.compositionDidRemoveAttachment = function (t) {
          var e;
          return e = this.attachmentManager.unmanageAttachment(t), this.notifyEditorElement("attachment-remove", {
            attachment: e
          });
        }, u.prototype.compositionDidStartEditingAttachment = function (t, e) {
          return this.attachmentLocationRange = this.composition.document.getLocationRangeOfAttachment(t), this.compositionController.installAttachmentEditorForAttachment(t, e), this.selectionManager.setLocationRange(this.attachmentLocationRange);
        }, u.prototype.compositionDidStopEditingAttachment = function () {
          return this.compositionController.uninstallAttachmentEditor(), this.attachmentLocationRange = null;
        }, u.prototype.compositionDidRequestChangingSelectionToLocationRange = function (t) {
          return !this.loadingSnapshot || this.isFocused() ? (this.requestedLocationRange = t, this.compositionRevisionWhenLocationRangeRequested = this.composition.revision, this.handlingInput ? void 0 : this.render()) : void 0;
        }, u.prototype.compositionWillLoadSnapshot = function () {
          return this.loadingSnapshot = !0;
        }, u.prototype.compositionDidLoadSnapshot = function () {
          return this.compositionController.refreshViewCache(), this.render(), this.loadingSnapshot = !1;
        }, u.prototype.getSelectionManager = function () {
          return this.selectionManager;
        }, u.proxyMethod("getSelectionManager().setLocationRange"), u.proxyMethod("getSelectionManager().getLocationRange"), u.prototype.attachmentManagerDidRequestRemovalOfAttachment = function (t) {
          return this.removeAttachment(t);
        }, u.prototype.compositionControllerWillSyncDocumentView = function () {
          return this.inputController.editorWillSyncDocumentView(), this.selectionManager.lock(), this.selectionManager.clearSelection();
        }, u.prototype.compositionControllerDidSyncDocumentView = function () {
          return this.inputController.editorDidSyncDocumentView(), this.selectionManager.unlock(), this.updateCurrentActions(), this.notifyEditorElement("sync");
        }, u.prototype.compositionControllerDidRender = function () {
          return null != this.requestedLocationRange && (this.compositionRevisionWhenLocationRangeRequested === this.composition.revision && this.selectionManager.setLocationRange(this.requestedLocationRange), this.requestedLocationRange = null, this.compositionRevisionWhenLocationRangeRequested = null), this.renderedCompositionRevision !== this.composition.revision && (this.runEditorFilters(), this.composition.updateCurrentAttributes(), this.notifyEditorElement("render")), this.renderedCompositionRevision = this.composition.revision;
        }, u.prototype.compositionControllerDidFocus = function () {
          return this.toolbarController.hideDialog(), this.notifyEditorElement("focus");
        }, u.prototype.compositionControllerDidBlur = function () {
          return this.notifyEditorElement("blur");
        }, u.prototype.compositionControllerDidSelectAttachment = function (t, e) {
          return this.composition.editAttachment(t, e);
        }, u.prototype.compositionControllerDidRequestDeselectingAttachment = function (t) {
          var e, n;
          return e = null != (n = this.attachmentLocationRange) ? n : this.composition.document.getLocationRangeOfAttachment(t), this.selectionManager.setLocationRange(e[1]);
        }, u.prototype.compositionControllerWillUpdateAttachment = function (t) {
          return this.editor.recordUndoEntry("Edit Attachment", {
            context: t.id,
            consolidatable: !0
          });
        }, u.prototype.compositionControllerDidRequestRemovalOfAttachment = function (t) {
          return this.removeAttachment(t);
        }, u.prototype.inputControllerWillHandleInput = function () {
          return this.handlingInput = !0, this.requestedRender = !1;
        }, u.prototype.inputControllerDidRequestRender = function () {
          return this.requestedRender = !0;
        }, u.prototype.inputControllerDidHandleInput = function () {
          return this.handlingInput = !1, this.requestedRender ? (this.requestedRender = !1, this.render()) : void 0;
        }, u.prototype.inputControllerDidAllowUnhandledInput = function () {
          return this.notifyEditorElement("change");
        }, u.prototype.inputControllerDidRequestReparse = function () {
          return this.reparse();
        }, u.prototype.inputControllerWillPerformTyping = function () {
          return this.recordTypingUndoEntry();
        }, u.prototype.inputControllerWillPerformFormatting = function (t) {
          return this.recordFormattingUndoEntry(t);
        }, u.prototype.inputControllerWillCutText = function () {
          return this.editor.recordUndoEntry("Cut");
        }, u.prototype.inputControllerWillPaste = function (t) {
          return this.editor.recordUndoEntry("Paste"), this.pasting = !0, this.notifyEditorElement("before-paste", {
            paste: t
          });
        }, u.prototype.inputControllerDidPaste = function (t) {
          return t.range = this.pastedRange, this.pastedRange = null, this.pasting = null, this.notifyEditorElement("paste", {
            paste: t
          });
        }, u.prototype.inputControllerWillMoveText = function () {
          return this.editor.recordUndoEntry("Move");
        }, u.prototype.inputControllerWillAttachFiles = function () {
          return this.editor.recordUndoEntry("Drop Files");
        }, u.prototype.inputControllerWillPerformUndo = function () {
          return this.editor.undo();
        }, u.prototype.inputControllerWillPerformRedo = function () {
          return this.editor.redo();
        }, u.prototype.inputControllerDidReceiveKeyboardCommand = function (t) {
          return this.toolbarController.applyKeyboardCommand(t);
        }, u.prototype.inputControllerDidStartDrag = function () {
          return this.locationRangeBeforeDrag = this.selectionManager.getLocationRange();
        }, u.prototype.inputControllerDidReceiveDragOverPoint = function (t) {
          return this.selectionManager.setLocationRangeFromPointRange(t);
        }, u.prototype.inputControllerDidCancelDrag = function () {
          return this.selectionManager.setLocationRange(this.locationRangeBeforeDrag), this.locationRangeBeforeDrag = null;
        }, u.prototype.locationRangeDidChange = function (t) {
          return this.composition.updateCurrentAttributes(), this.updateCurrentActions(), this.attachmentLocationRange && !o(this.attachmentLocationRange, t) && this.composition.stopEditingAttachment(), this.notifyEditorElement("selection-change");
        }, u.prototype.toolbarDidClickButton = function () {
          return this.getLocationRange() ? void 0 : this.setLocationRange({
            index: 0,
            offset: 0
          });
        }, u.prototype.toolbarDidInvokeAction = function (t) {
          return this.invokeAction(t);
        }, u.prototype.toolbarDidToggleAttribute = function (t) {
          return this.recordFormattingUndoEntry(t), this.composition.toggleCurrentAttribute(t), this.render(), this.selectionFrozen ? void 0 : this.editorElement.focus();
        }, u.prototype.toolbarDidUpdateAttribute = function (t, e) {
          return this.recordFormattingUndoEntry(t), this.composition.setCurrentAttribute(t, e), this.render(), this.selectionFrozen ? void 0 : this.editorElement.focus();
        }, u.prototype.toolbarDidRemoveAttribute = function (t) {
          return this.recordFormattingUndoEntry(t), this.composition.removeCurrentAttribute(t), this.render(), this.selectionFrozen ? void 0 : this.editorElement.focus();
        }, u.prototype.toolbarWillShowDialog = function () {
          return this.composition.expandSelectionForEditing(), this.freezeSelection();
        }, u.prototype.toolbarDidShowDialog = function (t) {
          return this.notifyEditorElement("toolbar-dialog-show", {
            dialogName: t
          });
        }, u.prototype.toolbarDidHideDialog = function (t) {
          return this.thawSelection(), this.editorElement.focus(), this.notifyEditorElement("toolbar-dialog-hide", {
            dialogName: t
          });
        }, u.prototype.freezeSelection = function () {
          return this.selectionFrozen ? void 0 : (this.selectionManager.lock(), this.composition.freezeSelection(), this.selectionFrozen = !0, this.render());
        }, u.prototype.thawSelection = function () {
          return this.selectionFrozen ? (this.composition.thawSelection(), this.selectionManager.unlock(), this.selectionFrozen = !1, this.render()) : void 0;
        }, u.prototype.actions = {
          undo: {
            test: function test() {
              return this.editor.canUndo();
            },
            perform: function perform() {
              return this.editor.undo();
            }
          },
          redo: {
            test: function test() {
              return this.editor.canRedo();
            },
            perform: function perform() {
              return this.editor.redo();
            }
          },
          link: {
            test: function test() {
              return this.editor.canActivateAttribute("href");
            }
          },
          increaseNestingLevel: {
            test: function test() {
              return this.editor.canIncreaseNestingLevel();
            },
            perform: function perform() {
              return this.editor.increaseNestingLevel() && this.render();
            }
          },
          decreaseNestingLevel: {
            test: function test() {
              return this.editor.canDecreaseNestingLevel();
            },
            perform: function perform() {
              return this.editor.decreaseNestingLevel() && this.render();
            }
          },
          attachFiles: {
            test: function test() {
              return !0;
            },
            perform: function perform() {
              return e.config.input.pickFiles(this.editor.insertFiles);
            }
          }
        }, u.prototype.canInvokeAction = function (t) {
          var e, n;
          return this.actionIsExternal(t) ? !0 : !!(null != (e = this.actions[t]) && null != (n = e.test) ? n.call(this) : void 0);
        }, u.prototype.invokeAction = function (t) {
          var e, n;
          return this.actionIsExternal(t) ? this.notifyEditorElement("action-invoke", {
            actionName: t
          }) : null != (e = this.actions[t]) && null != (n = e.perform) ? n.call(this) : void 0;
        }, u.prototype.actionIsExternal = function (t) {
          return /^x-./.test(t);
        }, u.prototype.getCurrentActions = function () {
          var t, e;
          e = {};

          for (t in this.actions) {
            e[t] = this.canInvokeAction(t);
          }

          return e;
        }, u.prototype.updateCurrentActions = function () {
          var t;
          return t = this.getCurrentActions(), n(t, this.currentActions) ? void 0 : (this.currentActions = t, this.toolbarController.updateActions(this.currentActions), this.notifyEditorElement("actions-change", {
            actions: this.currentActions
          }));
        }, u.prototype.runEditorFilters = function () {
          var t, e, n, i, o, r, s, a;

          for (a = this.composition.getSnapshot(), o = this.editor.filters, n = 0, i = o.length; i > n; n++) {
            e = o[n], t = a.document, s = a.selectedRange, a = null != (r = e.call(this.editor, a)) ? r : {}, null == a.document && (a.document = t), null == a.selectedRange && (a.selectedRange = s);
          }

          return c(a, this.composition.getSnapshot()) ? void 0 : this.composition.loadSnapshot(a);
        }, c = function c(t, e) {
          return o(t.selectedRange, e.selectedRange) && t.document.isEqualTo(e.document);
        }, u.prototype.updateInputElement = function () {
          var t, n;
          return t = this.compositionController.getSerializableElement(), n = e.serializeToContentType(t, "text/html"), this.editorElement.setInputElementValue(n);
        }, u.prototype.notifyEditorElement = function (t, e) {
          switch (t) {
            case "document-change":
              this.documentChangedSinceLastRender = !0;
              break;

            case "render":
              this.documentChangedSinceLastRender && (this.documentChangedSinceLastRender = !1, this.notifyEditorElement("change"));
              break;

            case "change":
            case "attachment-add":
            case "attachment-edit":
            case "attachment-remove":
              this.updateInputElement();
          }

          return this.editorElement.notify(t, e);
        }, u.prototype.removeAttachment = function (t) {
          return this.editor.recordUndoEntry("Delete Attachment"), this.composition.removeAttachment(t), this.render();
        }, u.prototype.recordFormattingUndoEntry = function (e) {
          var n, o;
          return n = t(e), o = this.selectionManager.getLocationRange(), n || !i(o) ? this.editor.recordUndoEntry("Formatting", {
            context: this.getUndoContext(),
            consolidatable: !0
          }) : void 0;
        }, u.prototype.recordTypingUndoEntry = function () {
          return this.editor.recordUndoEntry("Typing", {
            context: this.getUndoContext(this.currentAttributes),
            consolidatable: !0
          });
        }, u.prototype.getUndoContext = function () {
          var t;
          return t = 1 <= arguments.length ? a.call(arguments, 0) : [], [this.getLocationContext(), this.getTimeContext()].concat(a.call(t));
        }, u.prototype.getLocationContext = function () {
          var t;
          return t = this.selectionManager.getLocationRange(), i(t) ? t[0].index : t;
        }, u.prototype.getTimeContext = function () {
          return e.config.undoInterval > 0 ? Math.floor(new Date().getTime() / e.config.undoInterval) : 0;
        }, u.prototype.isFocused = function () {
          var t;
          return this.editorElement === (null != (t = this.editorElement.ownerDocument) ? t.activeElement : void 0);
        }, u;
      }(e.Controller);
    }.call(this), function () {
      var t, n, i, o, r, s;
      n = e.browser, r = e.makeElement, s = e.triggerEvent, i = e.handleEvent, o = e.handleEventOnce, t = e.AttachmentView.attachmentSelector, e.registerElement("trix-editor", function () {
        var a, u, c, l, h, p, d, f;
        return p = 0, u = function u(t) {
          return !document.querySelector(":focus") && t.hasAttribute("autofocus") && document.querySelector("[autofocus]") === t ? t.focus() : void 0;
        }, d = function d(t) {
          return t.hasAttribute("contenteditable") ? void 0 : (t.setAttribute("contenteditable", ""), o("focus", {
            onElement: t,
            withCallback: function withCallback() {
              return c(t);
            }
          }));
        }, a = function a(t) {
          return t.hasAttribute("role") ? void 0 : t.setAttribute("role", "textbox");
        }, c = function c(t) {
          return h(t), f(t);
        }, h = function h(t) {
          return ("function" == typeof document.queryCommandSupported ? document.queryCommandSupported("enableObjectResizing") : void 0) ? (document.execCommand("enableObjectResizing", !1, !1), i("mscontrolselect", {
            onElement: t,
            preventDefault: !0
          })) : void 0;
        }, f = function f() {
          var t;
          return ("function" == typeof document.queryCommandSupported ? document.queryCommandSupported("DefaultParagraphSeparator") : void 0) && (t = e.config.blockAttributes["default"].tagName, "div" === t || "p" === t) ? document.execCommand("DefaultParagraphSeparator", !1, t) : void 0;
        }, l = function () {
          return n.forcesObjectResizing ? {
            display: "inline",
            width: "auto"
          } : {
            display: "inline-block",
            width: "1px"
          };
        }(), {
          defaultCSS: "%t {\n  display: block;\n}\n\n%t:empty:not(:focus)::before {\n  content: attr(placeholder);\n  color: graytext;\n  cursor: text;\n}\n\n%t a[contenteditable=false] {\n  cursor: text;\n}\n\n%t img {\n  max-width: 100%;\n  height: auto;\n}\n\n%t " + t + " figcaption textarea {\n  resize: none;\n}\n\n%t " + t + " figcaption textarea.trix-autoresize-clone {\n  position: absolute;\n  left: -9999px;\n  max-height: 0px;\n}\n\n%t " + t + " figcaption[data-trix-placeholder]:empty::before {\n  content: attr(data-trix-placeholder);\n  color: graytext;\n}\n\n%t [data-trix-cursor-target] {\n  display: " + l.display + " !important;\n  width: " + l.width + " !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n}\n\n%t [data-trix-cursor-target=left] {\n  vertical-align: top !important;\n  margin-left: -1px !important;\n}\n\n%t [data-trix-cursor-target=right] {\n  vertical-align: bottom !important;\n  margin-right: -1px !important;\n}",
          trixId: {
            get: function get() {
              return this.hasAttribute("trix-id") ? this.getAttribute("trix-id") : (this.setAttribute("trix-id", ++p), this.trixId);
            }
          },
          toolbarElement: {
            get: function get() {
              var t, e, n;
              return this.hasAttribute("toolbar") ? null != (e = this.ownerDocument) ? e.getElementById(this.getAttribute("toolbar")) : void 0 : this.parentNode ? (n = "trix-toolbar-" + this.trixId, this.setAttribute("toolbar", n), t = r("trix-toolbar", {
                id: n
              }), this.parentNode.insertBefore(t, this), t) : void 0;
            }
          },
          inputElement: {
            get: function get() {
              var t, e, n;
              return this.hasAttribute("input") ? null != (n = this.ownerDocument) ? n.getElementById(this.getAttribute("input")) : void 0 : this.parentNode ? (e = "trix-input-" + this.trixId, this.setAttribute("input", e), t = r("input", {
                type: "hidden",
                id: e
              }), this.parentNode.insertBefore(t, this.nextElementSibling), t) : void 0;
            }
          },
          editor: {
            get: function get() {
              var t;
              return null != (t = this.editorController) ? t.editor : void 0;
            }
          },
          name: {
            get: function get() {
              var t;
              return null != (t = this.inputElement) ? t.name : void 0;
            }
          },
          value: {
            get: function get() {
              var t;
              return null != (t = this.inputElement) ? t.value : void 0;
            },
            set: function set(t) {
              var e;
              return this.defaultValue = t, null != (e = this.editor) ? e.loadHTML(this.defaultValue) : void 0;
            }
          },
          notify: function notify(t, e) {
            return this.editorController ? s("trix-" + t, {
              onElement: this,
              attributes: e
            }) : void 0;
          },
          setInputElementValue: function setInputElementValue(t) {
            var e;
            return null != (e = this.inputElement) ? e.value = t : void 0;
          },
          initialize: function initialize() {
            return d(this), a(this);
          },
          connect: function connect() {
            return this.hasAttribute("data-trix-internal") ? void 0 : (this.editorController || (s("trix-before-initialize", {
              onElement: this
            }), this.editorController = new e.EditorController({
              editorElement: this,
              html: this.defaultValue = this.value
            }), requestAnimationFrame(function (t) {
              return function () {
                return s("trix-initialize", {
                  onElement: t
                });
              };
            }(this))), this.editorController.registerSelectionManager(), this.registerResetListener(), u(this));
          },
          disconnect: function disconnect() {
            var t;
            return null != (t = this.editorController) && t.unregisterSelectionManager(), this.unregisterResetListener();
          },
          registerResetListener: function registerResetListener() {
            return this.resetListener = this.resetBubbled.bind(this), window.addEventListener("reset", this.resetListener, !1);
          },
          unregisterResetListener: function unregisterResetListener() {
            return window.removeEventListener("reset", this.resetListener, !1);
          },
          resetBubbled: function resetBubbled(t) {
            var e;
            return t.target !== (null != (e = this.inputElement) ? e.form : void 0) || t.defaultPrevented ? void 0 : this.reset();
          },
          reset: function reset() {
            return this.value = this.defaultValue;
          }
        };
      }());
    }.call(this), function () {}.call(this);
  }).call(this), "object" == ( false ? undefined : _typeof(module)) && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}.call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function () {
  var t = this;
  (function () {
    (function () {
      this.Turbolinks = {
        supported: function () {
          return null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener;
        }(),
        visit: function visit(t, r) {
          return e.controller.visit(t, r);
        },
        clearCache: function clearCache() {
          return e.controller.clearCache();
        },
        setProgressBarDelay: function setProgressBarDelay(t) {
          return e.controller.setProgressBarDelay(t);
        }
      };
    }).call(this);
  }).call(t);
  var e = t.Turbolinks;
  (function () {
    (function () {
      var t,
          r,
          n,
          o = [].slice;
      e.copyObject = function (t) {
        var e, r, n;
        r = {};

        for (e in t) {
          n = t[e], r[e] = n;
        }

        return r;
      }, e.closest = function (e, r) {
        return t.call(e, r);
      }, t = function () {
        var t, e;
        return t = document.documentElement, null != (e = t.closest) ? e : function (t) {
          var e;

          for (e = this; e;) {
            if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t)) return e;
            e = e.parentNode;
          }
        };
      }(), e.defer = function (t) {
        return setTimeout(t, 1);
      }, e.throttle = function (t) {
        var e;
        return e = null, function () {
          var r;
          return r = 1 <= arguments.length ? o.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame(function (n) {
            return function () {
              return e = null, t.apply(n, r);
            };
          }(this));
        };
      }, e.dispatch = function (t, e) {
        var r, o, i, s, a, u;
        return a = null != e ? e : {}, u = a.target, r = a.cancelable, o = a.data, i = document.createEvent("Events"), i.initEvent(t, !0, r === !0), i.data = null != o ? o : {}, i.cancelable && !n && (s = i.preventDefault, i.preventDefault = function () {
          return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
            get: function get() {
              return !0;
            }
          }), s.call(this);
        }), (null != u ? u : document).dispatchEvent(i), i;
      }, n = function () {
        var t;
        return t = document.createEvent("Events"), t.initEvent("test", !0, !0), t.preventDefault(), t.defaultPrevented;
      }(), e.match = function (t, e) {
        return r.call(t, e);
      }, r = function () {
        var t, e, r, n;
        return t = document.documentElement, null != (e = null != (r = null != (n = t.matchesSelector) ? n : t.webkitMatchesSelector) ? r : t.msMatchesSelector) ? e : t.mozMatchesSelector;
      }(), e.uuid = function () {
        var t, e, r;

        for (r = "", t = e = 1; 36 >= e; t = ++e) {
          r += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
        }

        return r;
      };
    }).call(this), function () {
      e.Location = function () {
        function t(t) {
          var e, r;
          null == t && (t = ""), r = document.createElement("a"), r.href = t.toString(), this.absoluteURL = r.href, e = r.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = r.hash.slice(1));
        }

        var e, r, n, o;
        return t.wrap = function (t) {
          return t instanceof this ? t : new this(t);
        }, t.prototype.getOrigin = function () {
          return this.absoluteURL.split("/", 3).join("/");
        }, t.prototype.getPath = function () {
          var t, e;
          return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/";
        }, t.prototype.getPathComponents = function () {
          return this.getPath().split("/").slice(1);
        }, t.prototype.getLastPathComponent = function () {
          return this.getPathComponents().slice(-1)[0];
        }, t.prototype.getExtension = function () {
          var t, e;
          return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : "";
        }, t.prototype.isHTML = function () {
          return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/);
        }, t.prototype.isPrefixedBy = function (t) {
          var e;
          return e = r(t), this.isEqualTo(t) || o(this.absoluteURL, e);
        }, t.prototype.isEqualTo = function (t) {
          return this.absoluteURL === (null != t ? t.absoluteURL : void 0);
        }, t.prototype.toCacheKey = function () {
          return this.requestURL;
        }, t.prototype.toJSON = function () {
          return this.absoluteURL;
        }, t.prototype.toString = function () {
          return this.absoluteURL;
        }, t.prototype.valueOf = function () {
          return this.absoluteURL;
        }, r = function r(t) {
          return e(t.getOrigin() + t.getPath());
        }, e = function e(t) {
          return n(t, "/") ? t : t + "/";
        }, o = function o(t, e) {
          return t.slice(0, e.length) === e;
        }, n = function n(t, e) {
          return t.slice(-e.length) === e;
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t, e) {
        return function () {
          return _t.apply(e, arguments);
        };
      };

      e.HttpRequest = function () {
        function r(r, n, o) {
          this.delegate = r, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(n).requestURL, this.referrer = e.Location.wrap(o).absoluteURL, this.createXHR();
        }

        return r.NETWORK_FAILURE = 0, r.TIMEOUT_FAILURE = -1, r.timeout = 60, r.prototype.send = function () {
          var t;
          return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0;
        }, r.prototype.cancel = function () {
          return this.xhr && this.sent ? this.xhr.abort() : void 0;
        }, r.prototype.requestProgressed = function (t) {
          return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0;
        }, r.prototype.requestLoaded = function () {
          return this.endRequest(function (t) {
            return function () {
              var e;
              return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText));
            };
          }(this));
        }, r.prototype.requestFailed = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE);
            };
          }(this));
        }, r.prototype.requestTimedOut = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE);
            };
          }(this));
        }, r.prototype.requestCanceled = function () {
          return this.endRequest();
        }, r.prototype.notifyApplicationBeforeRequestStart = function () {
          return e.dispatch("turbolinks:request-start", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.notifyApplicationAfterRequestEnd = function () {
          return e.dispatch("turbolinks:request-end", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.createXHR = function () {
          return this.xhr = new XMLHttpRequest(), this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled;
        }, r.prototype.endRequest = function (t) {
          return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0;
        }, r.prototype.setProgress = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0;
        }, r.prototype.destroy = function () {
          var t;
          return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t2, e) {
        return function () {
          return _t2.apply(e, arguments);
        };
      };

      e.ProgressBar = function () {
        function e() {
          this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement();
        }

        var r;
        return r = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + r + "ms ease-out, opacity " + r / 2 + "ms " + r / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
          return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling());
        }, e.prototype.hide = function () {
          return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (t) {
            return function () {
              return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1;
            };
          }(this))) : void 0;
        }, e.prototype.setValue = function (t) {
          return this.value = t, this.refresh();
        }, e.prototype.installStylesheetElement = function () {
          return document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        }, e.prototype.installProgressElement = function () {
          return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh();
        }, e.prototype.fadeProgressElement = function (t) {
          return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * r);
        }, e.prototype.uninstallProgressElement = function () {
          return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0;
        }, e.prototype.startTrickling = function () {
          return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, r);
        }, e.prototype.stopTrickling = function () {
          return clearInterval(this.trickleInterval), this.trickleInterval = null;
        }, e.prototype.trickle = function () {
          return this.setValue(this.value + Math.random() / 100);
        }, e.prototype.refresh = function () {
          return requestAnimationFrame(function (t) {
            return function () {
              return t.progressElement.style.width = 10 + 90 * t.value + "%";
            };
          }(this));
        }, e.prototype.createStylesheetElement = function () {
          var t;
          return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t;
        }, e.prototype.createProgressElement = function () {
          var t;
          return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t;
        }, e;
      }();
    }.call(this), function () {
      var t = function t(_t3, e) {
        return function () {
          return _t3.apply(e, arguments);
        };
      };

      e.BrowserAdapter = function () {
        function r(r) {
          this.controller = r, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar();
        }

        var n, o, i;
        return i = e.HttpRequest, n = i.NETWORK_FAILURE, o = i.TIMEOUT_FAILURE, r.prototype.visitProposedToLocationWithAction = function (t, e) {
          return this.controller.startVisitToLocationWithAction(t, e);
        }, r.prototype.visitStarted = function (t) {
          return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot();
        }, r.prototype.visitRequestStarted = function (t) {
          return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar();
        }, r.prototype.visitRequestProgressed = function (t) {
          return this.progressBar.setValue(t.progress);
        }, r.prototype.visitRequestCompleted = function (t) {
          return t.loadResponse();
        }, r.prototype.visitRequestFailedWithStatusCode = function (t, e) {
          switch (e) {
            case n:
            case o:
              return this.reload();

            default:
              return t.loadResponse();
          }
        }, r.prototype.visitRequestFinished = function (t) {
          return this.hideProgressBar();
        }, r.prototype.visitCompleted = function (t) {
          return t.followRedirect();
        }, r.prototype.pageInvalidated = function () {
          return this.reload();
        }, r.prototype.showProgressBarAfterDelay = function () {
          return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay);
        }, r.prototype.showProgressBar = function () {
          return this.progressBar.show();
        }, r.prototype.hideProgressBar = function () {
          return this.progressBar.hide(), clearTimeout(this.progressBarTimeout);
        }, r.prototype.reload = function () {
          return window.location.reload();
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t4, e) {
        return function () {
          return _t4.apply(e, arguments);
        };
      };

      e.History = function () {
        function r(e) {
          this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0;
        }, r.prototype.push = function (t, r) {
          return t = e.Location.wrap(t), this.update("push", t, r);
        }, r.prototype.replace = function (t, r) {
          return t = e.Location.wrap(t), this.update("replace", t, r);
        }, r.prototype.onPopState = function (t) {
          var r, n, o, i;
          return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (r = e.Location.wrap(window.location), o = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(r, o)) : void 0;
        }, r.prototype.onPageLoad = function (t) {
          return e.defer(function (t) {
            return function () {
              return t.pageLoaded = !0;
            };
          }(this));
        }, r.prototype.shouldHandlePopState = function () {
          return this.pageIsLoaded();
        }, r.prototype.pageIsLoaded = function () {
          return this.pageLoaded || "complete" === document.readyState;
        }, r.prototype.update = function (t, e, r) {
          var n;
          return n = {
            turbolinks: {
              restorationIdentifier: r
            }
          }, history[t + "State"](n, null, e);
        }, r;
      }();
    }.call(this), function () {
      e.HeadDetails = function () {
        function t(t) {
          var e, r, n, s, a, u;

          for (this.elements = {}, n = 0, a = t.length; a > n; n++) {
            u = t[n], u.nodeType === Node.ELEMENT_NODE && (s = u.outerHTML, r = null != (e = this.elements)[s] ? e[s] : e[s] = {
              type: i(u),
              tracked: o(u),
              elements: []
            }, r.elements.push(u));
          }
        }

        var e, r, n, o, i;
        return t.fromHeadElement = function (t) {
          var e;
          return new this(null != (e = null != t ? t.childNodes : void 0) ? e : []);
        }, t.prototype.hasElementWithKey = function (t) {
          return t in this.elements;
        }, t.prototype.getTrackedElementSignature = function () {
          var t, e;
          return function () {
            var r, n;
            r = this.elements, n = [];

            for (t in r) {
              e = r[t].tracked, e && n.push(t);
            }

            return n;
          }.call(this).join("");
        }, t.prototype.getScriptElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("script", t);
        }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("stylesheet", t);
        }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
          var r, n, o, i, s, a;
          o = this.elements, s = [];

          for (n in o) {
            i = o[n], a = i.type, r = i.elements, a !== t || e.hasElementWithKey(n) || s.push(r[0]);
          }

          return s;
        }, t.prototype.getProvisionalElements = function () {
          var t, e, r, n, o, i, s;
          r = [], n = this.elements;

          for (e in n) {
            o = n[e], s = o.type, i = o.tracked, t = o.elements, null != s || i ? t.length > 1 && r.push.apply(r, t.slice(1)) : r.push.apply(r, t);
          }

          return r;
        }, t.prototype.getMetaValue = function (t) {
          var e;
          return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0;
        }, t.prototype.findMetaElementByName = function (t) {
          var r, n, o, i;
          r = void 0, i = this.elements;

          for (o in i) {
            n = i[o].elements, e(n[0], t) && (r = n[0]);
          }

          return r;
        }, i = function i(t) {
          return r(t) ? "script" : n(t) ? "stylesheet" : void 0;
        }, o = function o(t) {
          return "reload" === t.getAttribute("data-turbolinks-track");
        }, r = function r(t) {
          var e;
          return e = t.tagName.toLowerCase(), "script" === e;
        }, n = function n(t) {
          var e;
          return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel");
        }, e = function e(t, _e) {
          var r;
          return r = t.tagName.toLowerCase(), "meta" === r && t.getAttribute("name") === _e;
        }, t;
      }();
    }.call(this), function () {
      e.Snapshot = function () {
        function t(t, e) {
          this.headDetails = t, this.bodyElement = e;
        }

        return t.wrap = function (t) {
          return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t);
        }, t.fromHTMLString = function (t) {
          var e;
          return e = document.createElement("html"), e.innerHTML = t, this.fromHTMLElement(e);
        }, t.fromHTMLElement = function (t) {
          var r, n, o, i;
          return o = t.querySelector("head"), r = null != (i = t.querySelector("body")) ? i : document.createElement("body"), n = e.HeadDetails.fromHeadElement(o), new this(n, r);
        }, t.prototype.clone = function () {
          return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0));
        }, t.prototype.getRootLocation = function () {
          var t, r;
          return r = null != (t = this.getSetting("root")) ? t : "/", new e.Location(r);
        }, t.prototype.getCacheControlValue = function () {
          return this.getSetting("cache-control");
        }, t.prototype.getElementForAnchor = function (t) {
          try {
            return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']");
          } catch (e) {}
        }, t.prototype.getPermanentElements = function () {
          return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementById = function (t) {
          return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementsPresentInSnapshot = function (t) {
          var e, r, n, o, i;

          for (o = this.getPermanentElements(), i = [], r = 0, n = o.length; n > r; r++) {
            e = o[r], t.getPermanentElementById(e.id) && i.push(e);
          }

          return i;
        }, t.prototype.findFirstAutofocusableElement = function () {
          return this.bodyElement.querySelector("[autofocus]");
        }, t.prototype.hasAnchor = function (t) {
          return null != this.getElementForAnchor(t);
        }, t.prototype.isPreviewable = function () {
          return "no-preview" !== this.getCacheControlValue();
        }, t.prototype.isCacheable = function () {
          return "no-cache" !== this.getCacheControlValue();
        }, t.prototype.isVisitable = function () {
          return "reload" !== this.getSetting("visit-control");
        }, t.prototype.getSetting = function (t) {
          return this.headDetails.getMetaValue("turbolinks-" + t);
        }, t;
      }();
    }.call(this), function () {
      var t = [].slice;

      e.Renderer = function () {
        function e() {}

        var r;
        return e.render = function () {
          var e, r, n, o;
          return n = arguments[0], r = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], o = function (t, e, r) {
            r.prototype = t.prototype;
            var n = new r(),
                o = t.apply(n, e);
            return Object(o) === o ? o : n;
          }(this, e, function () {}), o.delegate = n, o.render(r), o;
        }, e.prototype.renderView = function (t) {
          return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody);
        }, e.prototype.invalidateView = function () {
          return this.delegate.viewInvalidated();
        }, e.prototype.createScriptElement = function (t) {
          var e;
          return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, e.async = !1, r(e, t), e);
        }, r = function r(t, e) {
          var r, n, o, i, s, a, u;

          for (i = e.attributes, a = [], r = 0, n = i.length; n > r; r++) {
            s = i[r], o = s.name, u = s.value, a.push(t.setAttribute(o, u));
          }

          return a;
        }, e;
      }();
    }.call(this), function () {
      var t,
          r,
          n = function n(t, e) {
        function r() {
          this.constructor = t;
        }

        for (var n in e) {
          o.call(e, n) && (t[n] = e[n]);
        }

        return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      e.SnapshotRenderer = function (e) {
        function o(t, e, r) {
          this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = r, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement;
        }

        return n(o, e), o.prototype.render = function (t) {
          return this.shouldRender() ? (this.mergeHead(), this.renderView(function (e) {
            return function () {
              return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t();
            };
          }(this))) : this.invalidateView();
        }, o.prototype.mergeHead = function () {
          return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements();
        }, o.prototype.replaceBody = function () {
          var t;
          return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t);
        }, o.prototype.shouldRender = function () {
          return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical();
        }, o.prototype.trackedElementsAreIdentical = function () {
          return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature();
        }, o.prototype.copyNewHeadStylesheetElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadStylesheetElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadScriptElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadScriptElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(this.createScriptElement(t)));
          }

          return o;
        }, o.prototype.removeCurrentHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getCurrentHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.removeChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.relocateCurrentBodyPermanentElements = function () {
          var e, n, o, i, s, a, u;

          for (a = this.getCurrentBodyPermanentElements(), u = [], e = 0, n = a.length; n > e; e++) {
            i = a[e], s = t(i), o = this.newSnapshot.getPermanentElementById(i.id), r(i, s.element), r(o, i), u.push(s);
          }

          return u;
        }, o.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t) {
          var e, n, o, i, s, a, u;

          for (u = [], o = 0, i = t.length; i > o; o++) {
            a = t[o], n = a.element, s = a.permanentElement, e = s.cloneNode(!0), u.push(r(n, e));
          }

          return u;
        }, o.prototype.activateNewBodyScriptElements = function () {
          var t, e, n, o, i, s;

          for (i = this.getNewBodyScriptElements(), s = [], e = 0, o = i.length; o > e; e++) {
            n = i[e], t = this.createScriptElement(n), s.push(r(n, t));
          }

          return s;
        }, o.prototype.assignNewBody = function () {
          return document.body = this.newBody;
        }, o.prototype.focusFirstAutofocusableElement = function () {
          var t;
          return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0;
        }, o.prototype.getNewHeadStylesheetElements = function () {
          return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getNewHeadScriptElements = function () {
          return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getCurrentHeadProvisionalElements = function () {
          return this.currentHeadDetails.getProvisionalElements();
        }, o.prototype.getNewHeadProvisionalElements = function () {
          return this.newHeadDetails.getProvisionalElements();
        }, o.prototype.getCurrentBodyPermanentElements = function () {
          return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot);
        }, o.prototype.getNewBodyScriptElements = function () {
          return this.newBody.querySelectorAll("script");
        }, o;
      }(e.Renderer), t = function t(_t5) {
        var e;
        return e = document.createElement("meta"), e.setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", _t5.id), {
          element: e,
          permanentElement: _t5
        };
      }, r = function r(t, e) {
        var r;
        return (r = t.parentNode) ? r.replaceChild(e, t) : void 0;
      };
    }.call(this), function () {
      var t = function t(_t6, e) {
        function n() {
          this.constructor = _t6;
        }

        for (var o in e) {
          r.call(e, o) && (_t6[o] = e[o]);
        }

        return n.prototype = e.prototype, _t6.prototype = new n(), _t6.__super__ = e.prototype, _t6;
      },
          r = {}.hasOwnProperty;

      e.ErrorRenderer = function (e) {
        function r(t) {
          var e;
          e = document.createElement("html"), e.innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body");
        }

        return t(r, e), r.prototype.render = function (t) {
          return this.renderView(function (e) {
            return function () {
              return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t();
            };
          }(this));
        }, r.prototype.replaceHeadAndBody = function () {
          var t, e;
          return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t);
        }, r.prototype.activateBodyScriptElements = function () {
          var t, e, r, n, o, i;

          for (n = this.getScriptElements(), i = [], e = 0, r = n.length; r > e; e++) {
            o = n[e], t = this.createScriptElement(o), i.push(o.parentNode.replaceChild(t, o));
          }

          return i;
        }, r.prototype.getScriptElements = function () {
          return document.documentElement.querySelectorAll("script");
        }, r;
      }(e.Renderer);
    }.call(this), function () {
      e.View = function () {
        function t(t) {
          this.delegate = t, this.htmlElement = document.documentElement;
        }

        return t.prototype.getRootLocation = function () {
          return this.getSnapshot().getRootLocation();
        }, t.prototype.getElementForAnchor = function (t) {
          return this.getSnapshot().getElementForAnchor(t);
        }, t.prototype.getSnapshot = function () {
          return e.Snapshot.fromHTMLElement(this.htmlElement);
        }, t.prototype.render = function (t, e) {
          var r, n, o;
          return o = t.snapshot, r = t.error, n = t.isPreview, this.markAsPreview(n), null != o ? this.renderSnapshot(o, n, e) : this.renderError(r, e);
        }, t.prototype.markAsPreview = function (t) {
          return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview");
        }, t.prototype.renderSnapshot = function (t, r, n) {
          return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), e.Snapshot.wrap(t), r);
        }, t.prototype.renderError = function (t, r) {
          return e.ErrorRenderer.render(this.delegate, r, t);
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t7, e) {
        return function () {
          return _t7.apply(e, arguments);
        };
      };

      e.ScrollManager = function () {
        function r(r) {
          this.delegate = r, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0;
        }, r.prototype.scrollToElement = function (t) {
          return t.scrollIntoView();
        }, r.prototype.scrollToPosition = function (t) {
          var e, r;
          return e = t.x, r = t.y, window.scrollTo(e, r);
        }, r.prototype.onScroll = function (t) {
          return this.updatePosition({
            x: window.pageXOffset,
            y: window.pageYOffset
          });
        }, r.prototype.updatePosition = function (t) {
          var e;
          return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0;
        }, r;
      }();
    }.call(this), function () {
      e.SnapshotCache = function () {
        function t(t) {
          this.size = t, this.keys = [], this.snapshots = {};
        }

        var r;
        return t.prototype.has = function (t) {
          var e;
          return e = r(t), e in this.snapshots;
        }, t.prototype.get = function (t) {
          var e;
          if (this.has(t)) return e = this.read(t), this.touch(t), e;
        }, t.prototype.put = function (t, e) {
          return this.write(t, e), this.touch(t), e;
        }, t.prototype.read = function (t) {
          var e;
          return e = r(t), this.snapshots[e];
        }, t.prototype.write = function (t, e) {
          var n;
          return n = r(t), this.snapshots[n] = e;
        }, t.prototype.touch = function (t) {
          var e, n;
          return n = r(t), e = this.keys.indexOf(n), e > -1 && this.keys.splice(e, 1), this.keys.unshift(n), this.trim();
        }, t.prototype.trim = function () {
          var t, e, r, n, o;

          for (n = this.keys.splice(this.size), o = [], t = 0, r = n.length; r > t; t++) {
            e = n[t], o.push(delete this.snapshots[e]);
          }

          return o;
        }, r = function r(t) {
          return e.Location.wrap(t).toCacheKey();
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t8, e) {
        return function () {
          return _t8.apply(e, arguments);
        };
      };

      e.Visit = function () {
        function r(r, n, o) {
          this.controller = r, this.action = o, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {};
        }

        var n;
        return r.prototype.start = function () {
          return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0;
        }, r.prototype.cancel = function () {
          var t;
          return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0;
        }, r.prototype.complete = function () {
          var t;
          return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0;
        }, r.prototype.fail = function () {
          var t;
          return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0;
        }, r.prototype.changeHistory = function () {
          var t, e;
          return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0);
        }, r.prototype.issueRequest = function () {
          return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0;
        }, r.prototype.getCachedSnapshot = function () {
          var t;
          return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t;
        }, r.prototype.hasCachedSnapshot = function () {
          return null != this.getCachedSnapshot();
        }, r.prototype.loadCachedSnapshot = function () {
          var t, e;
          return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
            var r;
            return this.cacheSnapshot(), this.controller.render({
              snapshot: e,
              isPreview: t
            }, this.performScroll), "function" == typeof (r = this.adapter).visitRendered && r.visitRendered(this), t ? void 0 : this.complete();
          })) : void 0;
        }, r.prototype.loadResponse = function () {
          return null != this.response ? this.render(function () {
            var t, e;
            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
              error: this.response
            }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
              snapshot: this.response
            }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete());
          }) : void 0;
        }, r.prototype.followRedirect = function () {
          return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0;
        }, r.prototype.requestStarted = function () {
          var t;
          return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0;
        }, r.prototype.requestProgressed = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0;
        }, r.prototype.requestCompletedWithResponse = function (t, r) {
          return this.response = t, null != r && (this.redirectedToLocation = e.Location.wrap(r)), this.adapter.visitRequestCompleted(this);
        }, r.prototype.requestFailedWithStatusCode = function (t, e) {
          return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t);
        }, r.prototype.requestFinished = function () {
          var t;
          return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0;
        }, r.prototype.performScroll = function () {
          return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0);
        }, r.prototype.scrollToRestoredPosition = function () {
          var t, e;
          return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0;
        }, r.prototype.scrollToAnchor = function () {
          return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0;
        }, r.prototype.scrollToTop = function () {
          return this.controller.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.recordTimingMetric = function (t) {
          var e;
          return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = new Date().getTime();
        }, r.prototype.getTimingMetrics = function () {
          return e.copyObject(this.timingMetrics);
        }, n = function n(t) {
          switch (t) {
            case "replace":
              return "replaceHistoryWithLocationAndRestorationIdentifier";

            case "advance":
            case "restore":
              return "pushHistoryWithLocationAndRestorationIdentifier";
          }
        }, r.prototype.shouldIssueRequest = function () {
          return "restore" === this.action ? !this.hasCachedSnapshot() : !0;
        }, r.prototype.cacheSnapshot = function () {
          return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0);
        }, r.prototype.render = function (t) {
          return this.cancelRender(), this.frame = requestAnimationFrame(function (e) {
            return function () {
              return e.frame = null, t.call(e);
            };
          }(this));
        }, r.prototype.cancelRender = function () {
          return this.frame ? cancelAnimationFrame(this.frame) : void 0;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t9, e) {
        return function () {
          return _t9.apply(e, arguments);
        };
      };

      e.Controller = function () {
        function r() {
          this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500);
        }

        return r.prototype.start = function () {
          return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0;
        }, r.prototype.disable = function () {
          return this.enabled = !1;
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0;
        }, r.prototype.clearCache = function () {
          return this.cache = new e.SnapshotCache(10);
        }, r.prototype.visit = function (t, r) {
          var n, o;
          return null == r && (r = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (o = r.action) ? o : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0;
        }, r.prototype.startVisitToLocationWithAction = function (t, r, n) {
          var o;
          return e.supported ? (o = this.getRestorationDataForIdentifier(n), this.startVisit(t, r, {
            restorationData: o
          })) : window.location = t;
        }, r.prototype.setProgressBarDelay = function (t) {
          return this.progressBarDelay = t;
        }, r.prototype.startHistory = function () {
          return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.stopHistory = function () {
          return this.history.stop();
        }, r.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier);
        }, r.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, r) {
          var n;
          return this.restorationIdentifier = r, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
            restorationIdentifier: this.restorationIdentifier,
            restorationData: n,
            historyChanged: !0
          }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated();
        }, r.prototype.getCachedSnapshotForLocation = function (t) {
          var e;
          return null != (e = this.cache.get(t)) ? e.clone() : void 0;
        }, r.prototype.shouldCacheSnapshot = function () {
          return this.view.getSnapshot().isCacheable();
        }, r.prototype.cacheSnapshot = function () {
          var t, r;
          return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), r = this.view.getSnapshot(), t = this.lastRenderedLocation, e.defer(function (e) {
            return function () {
              return e.cache.put(t, r.clone());
            };
          }(this))) : void 0;
        }, r.prototype.scrollToAnchor = function (t) {
          var e;
          return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.scrollToElement = function (t) {
          return this.scrollManager.scrollToElement(t);
        }, r.prototype.scrollToPosition = function (t) {
          return this.scrollManager.scrollToPosition(t);
        }, r.prototype.scrollPositionChanged = function (t) {
          var e;
          return e = this.getCurrentRestorationData(), e.scrollPosition = t;
        }, r.prototype.render = function (t, e) {
          return this.view.render(t, e);
        }, r.prototype.viewInvalidated = function () {
          return this.adapter.pageInvalidated();
        }, r.prototype.viewWillRender = function (t) {
          return this.notifyApplicationBeforeRender(t);
        }, r.prototype.viewRendered = function () {
          return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender();
        }, r.prototype.pageLoaded = function () {
          return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad();
        }, r.prototype.clickCaptured = function () {
          return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1);
        }, r.prototype.clickBubbled = function (t) {
          var e, r, n;
          return this.enabled && this.clickEventIsSignificant(t) && (r = this.getVisitableLinkForNode(t.target)) && (n = this.getVisitableLocationForLink(r)) && this.applicationAllowsFollowingLinkToLocation(r, n) ? (t.preventDefault(), e = this.getActionForLink(r), this.visit(n, {
            action: e
          })) : void 0;
        }, r.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
          var r;
          return r = this.notifyApplicationAfterClickingLinkToLocation(t, e), !r.defaultPrevented;
        }, r.prototype.applicationAllowsVisitingLocation = function (t) {
          var e;
          return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented;
        }, r.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, r) {
          return e.dispatch("turbolinks:click", {
            target: t,
            data: {
              url: r.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
          return e.dispatch("turbolinks:before-visit", {
            data: {
              url: t.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationAfterVisitingLocation = function (t) {
          return e.dispatch("turbolinks:visit", {
            data: {
              url: t.absoluteURL
            }
          });
        }, r.prototype.notifyApplicationBeforeCachingSnapshot = function () {
          return e.dispatch("turbolinks:before-cache");
        }, r.prototype.notifyApplicationBeforeRender = function (t) {
          return e.dispatch("turbolinks:before-render", {
            data: {
              newBody: t
            }
          });
        }, r.prototype.notifyApplicationAfterRender = function () {
          return e.dispatch("turbolinks:render");
        }, r.prototype.notifyApplicationAfterPageLoad = function (t) {
          return null == t && (t = {}), e.dispatch("turbolinks:load", {
            data: {
              url: this.location.absoluteURL,
              timing: t
            }
          });
        }, r.prototype.startVisit = function (t, e, r) {
          var n;
          return null != (n = this.currentVisit) && n.cancel(), this.currentVisit = this.createVisit(t, e, r), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t);
        }, r.prototype.createVisit = function (t, r, n) {
          var o, i, s, a, u;
          return i = null != n ? n : {}, a = i.restorationIdentifier, s = i.restorationData, o = i.historyChanged, u = new e.Visit(this, t, r), u.restorationIdentifier = null != a ? a : e.uuid(), u.restorationData = e.copyObject(s), u.historyChanged = o, u.referrer = this.location, u;
        }, r.prototype.visitCompleted = function (t) {
          return this.notifyApplicationAfterPageLoad(t.getTimingMetrics());
        }, r.prototype.clickEventIsSignificant = function (t) {
          return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey);
        }, r.prototype.getVisitableLinkForNode = function (t) {
          return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0;
        }, r.prototype.getVisitableLocationForLink = function (t) {
          var r;
          return r = new e.Location(t.getAttribute("href")), this.locationIsVisitable(r) ? r : void 0;
        }, r.prototype.getActionForLink = function (t) {
          var e;
          return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance";
        }, r.prototype.nodeIsVisitable = function (t) {
          var r;
          return (r = e.closest(t, "[data-turbolinks]")) ? "false" !== r.getAttribute("data-turbolinks") : !0;
        }, r.prototype.locationIsVisitable = function (t) {
          return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML();
        }, r.prototype.getCurrentRestorationData = function () {
          return this.getRestorationDataForIdentifier(this.restorationIdentifier);
        }, r.prototype.getRestorationDataForIdentifier = function (t) {
          var e;
          return null != (e = this.restorationData)[t] ? e[t] : e[t] = {};
        }, r;
      }();
    }.call(this), function () {
      !function () {
        var t, e;
        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning")) for (; t = t.parentNode;) {
          if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML);
        }
      }();
    }.call(this), function () {
      var t, r, n;
      e.start = function () {
        return r() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0;
      }, r = function r() {
        return null == window.Turbolinks && (window.Turbolinks = e), n();
      }, t = function t() {
        var t;
        return t = new e.Controller(), t.adapter = new e.BrowserAdapter(t), t;
      }, n = function n() {
        return window.Turbolinks === e;
      }, n() && e.start();
    }.call(this);
  }).call(this), "object" == ( false ? undefined : _typeof(module)) && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ });
//# sourceMappingURL=application-50c011611a043ebcfe7e.js.map