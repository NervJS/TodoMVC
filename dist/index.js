(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["index"],{

/***/ "../taro/packages/taro-mini-runner/node_modules/babel-loader/lib/index.js!../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/index.js?!./src/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ../taro/packages/taro-mini-runner/node_modules/babel-loader/lib!../taro/packages/taro-mini-runner/node_modules/vue-loader/lib??vue-loader-options!./src/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_item_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item.vue */ "./src/todo-item.vue");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.scss */ "./src/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_1__);
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
//
//
//
//
//
//
//
//
//


var STORAGE_KEY = 'todos-vuejs-2.0';
var todoStorage = {
  fetch: function fetch() {
    var todos = [];
    todos.forEach(function (todo, index) {
      todo.id = index;
    });
    todoStorage.uid = todos.length;
    return todos;
  },
  save: function save(todos) {
    console.log('save to storage');
  }
}; // visibility filters

var filters = {
  all: function all(todos) {
    return todos;
  },
  active: function active(todos) {
    return todos.filter(function (todo) {
      return !todo.completed;
    });
  },
  completed: function completed(todos) {
    return todos.filter(function (todo) {
      return todo.completed;
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'todo-item': _todo_item_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  // app initial state
  data: function data() {
    return {
      todos: todoStorage.fetch(),
      newTodo: '',
      editedTodo: null,
      visibility: 'all'
    };
  },
  // watch todos change for localStorage persistence
  watch: {
    todos: {
      handler: function handler(todos) {
        todoStorage.save(todos);
      },
      deep: true
    }
  },
  // computed properties
  // http://vuejs.org/guide/computed.html
  computed: {
    filteredTodos: function filteredTodos() {
      return filters[this.visibility](this.todos);
    },
    remaining: function remaining() {
      return filters.active(this.todos).length;
    },
    allDone: {
      get: function get() {
        return this.remaining === 0;
      },
      set: function set(value) {
        this.todos.forEach(function (todo) {
          todo.completed = value;
        });
      }
    }
  },
  filters: {
    pluralize: function pluralize(n) {
      return n === 1 ? 'item' : 'items';
    }
  },
  // methods that implement data logic.
  // note there's no DOM manipulation here at all.
  methods: {
    changeInput: function changeInput(e) {
      this.newTodo = e.target.value;
    },
    addTodo: function addTodo() {
      var value = this.newTodo && this.newTodo.trim();

      if (!value) {
        return;
      }

      this.newTodo = '';
      this.todos.push({
        id: todoStorage.uid++,
        title: value,
        completed: false
      });
    },
    setVisibility: function setVisibility(v) {
      this.visibility = v;
    },
    removeTodo: function removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    editTodo: function editTodo(todo) {
      this.beforeEditCache = todo.title;
      this.editedTodo = todo;
    },
    doneEdit: function doneEdit(todo) {
      if (!this.editedTodo) {
        return;
      }

      this.editedTodo = null;
      todo.title = todo.title.trim();

      if (!todo.title) {
        this.removeTodo(todo);
      }
    },
    cancelEdit: function cancelEdit(todo) {
      this.editedTodo = null;
      todo.title = this.beforeEditCache;
    },
    removeCompleted: function removeCompleted() {
      this.todos = filters.active(this.todos);
    }
  },
  // a custom directive to wait for the DOM to be updated
  // before focusing on the input field.
  // http://vuejs.org/guide/custom-directive.html
  directives: {
    'todo-focus': function todoFocus(el, binding) {
      if (binding.value) {
        console.log('focus()'); // el.focus()
      }
    }
  }
});

/***/ }),

/***/ "../taro/packages/taro-mini-runner/node_modules/babel-loader/lib/index.js!../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/index.js?!./src/todo-item.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ../taro/packages/taro-mini-runner/node_modules/babel-loader/lib!../taro/packages/taro-mini-runner/node_modules/vue-loader/lib??vue-loader-options!./src/todo-item.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      lastClickTime: 0
    };
  },
  props: {
    edit: Function,
    todo: Object
  },
  methods: {
    dbClick: function dbClick(e) {
      var currentTime = e.timeStamp;
      var gap = currentTime - this.lastClickTime;

      if (gap > 0 && gap < 300) {
        // double click
        this.edit(this.todo);
      }

      this.lastClickTime = currentTime;
    }
  }
});

/***/ }),

/***/ "../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/loaders/templateLoader.js?!../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/index.js?!./src/index.vue?vue&type=template&id=2964abc9&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../taro/packages/taro-mini-runner/node_modules/vue-loader/lib??vue-loader-options!./src/index.vue?vue&type=template&id=2964abc9& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "container" }, [
    _c("view", { staticClass: "header" }, [
      _c("view", { staticClass: "header-title-wrap" }, [
        _c("text", { staticClass: "title" }, [_vm._v("todos")])
      ]),
      _vm._v(" "),
      _c("view", { staticClass: "filters" }, [
        _c(
          "text",
          {
            class: { selected: _vm.visibility == "all", "filters-link": true },
            on: {
              tap: function($event) {
                return _vm.setVisibility("all")
              }
            }
          },
          [_vm._v("All")]
        ),
        _vm._v(" "),
        _c(
          "text",
          {
            class: {
              selected: _vm.visibility == "active",
              "filters-link": true
            },
            on: {
              tap: function($event) {
                return _vm.setVisibility("active")
              }
            }
          },
          [_vm._v("Active")]
        ),
        _vm._v(" "),
        _c(
          "text",
          {
            class: {
              selected: _vm.visibility == "completed",
              "filters-link": true
            },
            on: {
              tap: function($event) {
                return _vm.setVisibility("completed")
              }
            }
          },
          [_vm._v("Completed")]
        )
      ]),
      _vm._v(" "),
      _c("view", { staticClass: "textinput-wrap" }, [
        _c(
          "text",
          {
            class: {
              "textinput-wrap-icon": true,
              "icon-all-done": _vm.allDone && _vm.todos.length
            },
            on: {
              tap: function($event) {
                _vm.allDone = !_vm.allDone
              }
            }
          },
          [_vm._v("❯")]
        ),
        _vm._v(" "),
        _c("view", { staticClass: "textinput-wrap-input" }, [
          _c("input", {
            staticClass: "new-todo",
            attrs: { placeholder: "What needs to be done?" },
            domProps: { value: _vm.newTodo },
            on: { input: _vm.changeInput, confirm: _vm.addTodo }
          })
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "view",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.todos.length,
            expression: "todos.length"
          }
        ],
        staticClass: "main"
      },
      [
        _c(
          "view",
          { staticClass: "todo-list" },
          _vm._l(_vm.filteredTodos, function(todo) {
            return _c("view", { key: todo.id, staticClass: "li" }, [
              _c(
                "view",
                {
                  class: {
                    completed: todo.completed,
                    editing: todo == _vm.editedTodo
                  }
                },
                [
                  todo == _vm.editedTodo
                    ? _c("view", { staticClass: "edit" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: todo.title,
                              expression: "todo.title"
                            },
                            {
                              name: "todo-focus",
                              rawName: "v-todo-focus",
                              value: todo == _vm.editedTodo,
                              expression: "todo == editedTodo"
                            }
                          ],
                          staticClass: "new-todo",
                          attrs: { type: "text" },
                          domProps: { value: todo.title },
                          on: {
                            blur: function($event) {
                              return _vm.doneEdit(todo)
                            },
                            confirm: function($event) {
                              return _vm.doneEdit(todo)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(todo, "title", $event.target.value)
                            }
                          }
                        })
                      ])
                    : _c(
                        "view",
                        { staticClass: "toggle" },
                        [
                          _c("label", {
                            class: { label: true, checked: todo.completed },
                            on: {
                              tap: function($event) {
                                todo.completed = !todo.completed
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("todo-item", {
                            attrs: { todo: todo, edit: _vm.editTodo }
                          }),
                          _vm._v(" "),
                          _c("text", {
                            staticClass: "destroy",
                            on: {
                              tap: function($event) {
                                return _vm.removeTodo(todo)
                              }
                            }
                          })
                        ],
                        1
                      )
                ]
              )
            ])
          }),
          0
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "view",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.todos.length,
            expression: "todos.length"
          }
        ],
        staticClass: "footer"
      },
      [
        _c("text", { staticClass: "todo-count" }, [
          _c("text", { staticClass: "strong" }, [
            _vm._v(_vm._s(_vm.remaining))
          ]),
          _vm._v(
            " " + _vm._s(_vm._f("pluralize")(_vm.remaining)) + " left\n    "
          )
        ]),
        _vm._v(" "),
        _c(
          "view",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.todos.length > _vm.remaining,
                expression: "todos.length > remaining"
              }
            ],
            staticClass: "clear-completed",
            attrs: { type: "" },
            on: { tap: _vm.removeCompleted }
          },
          [_vm._v("\n      Clear completed\n    ")]
        )
      ]
    ),
    _vm._v(" "),
    _c("view", { staticClass: "info" }, [
      _c("view", { staticClass: "p" }, [_vm._v("Double-click to edit a todo")]),
      _vm._v(" "),
      _c("view", { staticClass: "p" }, [
        _vm._v("Part of "),
        _c("text", { staticClass: "a" }, [_vm._v("TodoMVC")])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/loaders/templateLoader.js?!../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/index.js?!./src/todo-item.vue?vue&type=template&id=1a9f37b1&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../taro/packages/taro-mini-runner/node_modules/vue-loader/lib??vue-loader-options!./src/todo-item.vue?vue&type=template&id=1a9f37b1& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("text", { staticClass: "text", on: { tap: _vm.dbClick } }, [
    _vm._v("\n  " + _vm._s(_vm.todo.title) + "\n")
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.vue":
/*!***********************!*\
  !*** ./src/index.vue ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "../taro/packages/taro-runtime/dist/runtime.esm.js");
/* harmony import */ var _index_vue_vue_type_template_id_2964abc9___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2964abc9& */ "./src/index.vue?vue&type=template&id=2964abc9&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _taro_packages_taro_mini_runner_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/runtime/componentNormalizer.js");




/* normalize component */


var component = Object(_taro_packages_taro_mini_runner_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_2__["default"], _index_vue_vue_type_template_id_2964abc9___WEBPACK_IMPORTED_MODULE_1__["render"], _index_vue_vue_type_template_id_2964abc9___WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"], false, null, null, "7a7fb96e");
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
/* harmony import */ var _taro_packages_taro_mini_runner_node_modules_babel_loader_lib_index_js_taro_packages_taro_mini_runner_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../taro/packages/taro-mini-runner/node_modules/babel-loader/lib!../../taro/packages/taro-mini-runner/node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "../taro/packages/taro-mini-runner/node_modules/babel-loader/lib/index.js!../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/index.js?!./src/index.vue?vue&type=script&lang=js&");
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
/* harmony import */ var _taro_packages_taro_mini_runner_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_taro_packages_taro_mini_runner_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2964abc9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../taro/packages/taro-mini-runner/node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2964abc9& */ "../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/loaders/templateLoader.js?!../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/index.js?!./src/index.vue?vue&type=template&id=2964abc9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _taro_packages_taro_mini_runner_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_taro_packages_taro_mini_runner_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2964abc9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _taro_packages_taro_mini_runner_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_taro_packages_taro_mini_runner_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2964abc9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/todo-item.vue":
/*!***************************!*\
  !*** ./src/todo-item.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_item_vue_vue_type_template_id_1a9f37b1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item.vue?vue&type=template&id=1a9f37b1& */ "./src/todo-item.vue?vue&type=template&id=1a9f37b1&");
/* harmony import */ var _todo_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-item.vue?vue&type=script&lang=js& */ "./src/todo-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _taro_packages_taro_mini_runner_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_taro_packages_taro_mini_runner_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _todo_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _todo_item_vue_vue_type_template_id_1a9f37b1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _todo_item_vue_vue_type_template_id_1a9f37b1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "a12c57e4"
  
)

component.options.__file = "src/todo-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/todo-item.vue?vue&type=script&lang=js&":
/*!****************************************************!*\
  !*** ./src/todo-item.vue?vue&type=script&lang=js& ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taro_packages_taro_mini_runner_node_modules_babel_loader_lib_index_js_taro_packages_taro_mini_runner_node_modules_vue_loader_lib_index_js_vue_loader_options_todo_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../taro/packages/taro-mini-runner/node_modules/babel-loader/lib!../../taro/packages/taro-mini-runner/node_modules/vue-loader/lib??vue-loader-options!./todo-item.vue?vue&type=script&lang=js& */ "../taro/packages/taro-mini-runner/node_modules/babel-loader/lib/index.js!../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/index.js?!./src/todo-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_taro_packages_taro_mini_runner_node_modules_babel_loader_lib_index_js_taro_packages_taro_mini_runner_node_modules_vue_loader_lib_index_js_vue_loader_options_todo_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/todo-item.vue?vue&type=template&id=1a9f37b1&":
/*!**********************************************************!*\
  !*** ./src/todo-item.vue?vue&type=template&id=1a9f37b1& ***!
  \**********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taro_packages_taro_mini_runner_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_taro_packages_taro_mini_runner_node_modules_vue_loader_lib_index_js_vue_loader_options_todo_item_vue_vue_type_template_id_1a9f37b1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../taro/packages/taro-mini-runner/node_modules/vue-loader/lib??vue-loader-options!./todo-item.vue?vue&type=template&id=1a9f37b1& */ "../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/loaders/templateLoader.js?!../taro/packages/taro-mini-runner/node_modules/vue-loader/lib/index.js?!./src/todo-item.vue?vue&type=template&id=1a9f37b1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _taro_packages_taro_mini_runner_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_taro_packages_taro_mini_runner_node_modules_vue_loader_lib_index_js_vue_loader_options_todo_item_vue_vue_type_template_id_1a9f37b1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _taro_packages_taro_mini_runner_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_taro_packages_taro_mini_runner_node_modules_vue_loader_lib_index_js_vue_loader_options_todo_item_vue_vue_type_template_id_1a9f37b1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["./src/index.vue","runtime","vendors"]]]);