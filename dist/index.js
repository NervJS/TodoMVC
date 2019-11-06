(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["index"],{

/***/ "../../taro/packages/taro-mini-runner/node_modules/babel-loader/lib/index.js!../../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/index.js?!./src/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/luckyadam/Dev/jdc/taro/packages/taro-mini-runner/node_modules/babel-loader/lib!/Users/luckyadam/Dev/jdc/taro/packages/taro-mini-runner/node_modules/vue-loader/lib??vue-loader-options!./src/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      color: ''
    };
  },
  methods: {
    exampleParentOnTap: function exampleParentOnTap(e) {
      console.log('parent is fired', e);
    },
    exampleOnTap: function exampleOnTap(e) {
      console.log('example is fired', e);
    },
    changeColor: function changeColor() {
      this.color = this.color ? '' : 'red';
    },
    "goto": function goto() {
      wx.navigateTo({
        url: '/pages/logs/logs'
      });
    }
  },
  fuck: 'you',
  created: function created() {
    // debugger
    console.log('created');
  },
  onShow: function onShow() {
    console.log('onshow');
  },
  onHide: function onHide() {
    console.log('onHide');
  },
  filters: {
    colorName: function colorName(color) {
      return color ? 'red' : 'black';
    }
  }
});

/***/ }),

/***/ "../../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/index.js?!./src/index.vue?vue&type=template&id=2964abc9&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/luckyadam/Dev/jdc/taro/packages/taro-mini-runner/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/luckyadam/Dev/jdc/taro/packages/taro-mini-runner/node_modules/vue-loader/lib??vue-loader-options!./src/index.vue?vue&type=template&id=2964abc9& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticClass: "root" }, [
    _c("view", { staticClass: "parent", on: { tap: _vm.exampleParentOnTap } }, [
      _c(
        "view",
        {
          staticClass: "title",
          on: {
            tap: function($event) {
              $event.stopPropagation()
              return _vm.exampleOnTap($event)
            }
          }
        },
        [_vm._v("Example")]
      )
    ]),
    _vm._v(" "),
    _c(
      "view",
      {
        staticClass: "list",
        style: { color: _vm.color },
        on: { tap: _vm.changeColor }
      },
      [_vm._v("\n    " + _vm._s(_vm._f("colorName")(_vm.color)) + "\n  ")]
    ),
    _vm._v(" "),
    _c("button", { on: { tap: _vm.goto } }, [_vm._v("goto todo")])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/index.vue":
/*!***********************!*\
  !*** ./src/index.vue ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "../../taro/packages/taro-runtime/dist/index.js");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_vue_vue_type_template_id_2964abc9___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2964abc9& */ "./src/index.vue?vue&type=template&id=2964abc9&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _taro_packages_taro_mini_runner_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/runtime/componentNormalizer.js");




/* normalize component */


var component = Object(_taro_packages_taro_mini_runner_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_2__["default"], _index_vue_vue_type_template_id_2964abc9___WEBPACK_IMPORTED_MODULE_1__["render"], _index_vue_vue_type_template_id_2964abc9___WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"], false, null, null, "7932f7e6");
component.options.__file = "src/index.vue";
Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(component.exports));

/***/ }),

/***/ "./src/index.vue?vue&type=script&lang=js&":
/*!************************************************!*\
  !*** ./src/index.vue?vue&type=script&lang=js& ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taro_packages_taro_mini_runner_node_modules_babel_loader_lib_index_js_taro_packages_taro_mini_runner_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../taro/packages/taro-mini-runner/node_modules/babel-loader/lib!../../../taro/packages/taro-mini-runner/node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "../../taro/packages/taro-mini-runner/node_modules/babel-loader/lib/index.js!../../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/index.js?!./src/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_taro_packages_taro_mini_runner_node_modules_babel_loader_lib_index_js_taro_packages_taro_mini_runner_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/index.vue?vue&type=template&id=2964abc9&":
/*!******************************************************!*\
  !*** ./src/index.vue?vue&type=template&id=2964abc9& ***!
  \******************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taro_packages_taro_mini_runner_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_taro_packages_taro_mini_runner_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2964abc9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../taro/packages/taro-mini-runner/node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2964abc9& */ "../../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/index.js?!./src/index.vue?vue&type=template&id=2964abc9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _taro_packages_taro_mini_runner_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_taro_packages_taro_mini_runner_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2964abc9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _taro_packages_taro_mini_runner_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_taro_packages_taro_mini_runner_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2964abc9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["./src/index.vue","runtime","vendors"]]]);