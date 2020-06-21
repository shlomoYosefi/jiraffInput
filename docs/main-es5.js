function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _comps_jiraff_admin_jiraff_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./comps/jiraff-admin/jiraff-admin.component */
    "./src/app/comps/jiraff-admin/jiraff-admin.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'jiraffInOut2';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-jiraff-admin");
        }
      },
      directives: [_comps_jiraff_admin_jiraff_admin_component__WEBPACK_IMPORTED_MODULE_1__["JiraffAdminComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _comps_jiraff_admin_jiraff_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./comps/jiraff-admin/jiraff-admin.component */
    "./src/app/comps/jiraff-admin/jiraff-admin.component.ts");
    /* harmony import */


    var _comps_jiraff_admin_jiraff_page_jiraff_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./comps/jiraff-admin/jiraff-page/jiraff-page.component */
    "./src/app/comps/jiraff-admin/jiraff-page/jiraff-page.component.ts");
    /* harmony import */


    var _comps_jiraff_admin_jiraff_item_jiraff_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./comps/jiraff-admin/jiraff-item/jiraff-item.component */
    "./src/app/comps/jiraff-admin/jiraff-item/jiraff-item.component.ts");
    /* harmony import */


    var _comps_jiraff_admin_jiraff_details_jiraff_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./comps/jiraff-admin/jiraff-details/jiraff-details.component */
    "./src/app/comps/jiraff-admin/jiraff-details/jiraff-details.component.ts");
    /* harmony import */


    var _comps_jiraff_admin_jiraff_lable_jiraff_lable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./comps/jiraff-admin/jiraff-lable/jiraff-lable.component */
    "./src/app/comps/jiraff-admin/jiraff-lable/jiraff-lable.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _comps_jiraff_admin_jiraff_admin_component__WEBPACK_IMPORTED_MODULE_3__["JiraffAdminComponent"], _comps_jiraff_admin_jiraff_page_jiraff_page_component__WEBPACK_IMPORTED_MODULE_4__["JiraffPageComponent"], _comps_jiraff_admin_jiraff_item_jiraff_item_component__WEBPACK_IMPORTED_MODULE_5__["JiraffItemComponent"], _comps_jiraff_admin_jiraff_details_jiraff_details_component__WEBPACK_IMPORTED_MODULE_6__["JiraffDetailsComponent"], _comps_jiraff_admin_jiraff_lable_jiraff_lable_component__WEBPACK_IMPORTED_MODULE_7__["JiraffLableComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _comps_jiraff_admin_jiraff_admin_component__WEBPACK_IMPORTED_MODULE_3__["JiraffAdminComponent"], _comps_jiraff_admin_jiraff_page_jiraff_page_component__WEBPACK_IMPORTED_MODULE_4__["JiraffPageComponent"], _comps_jiraff_admin_jiraff_item_jiraff_item_component__WEBPACK_IMPORTED_MODULE_5__["JiraffItemComponent"], _comps_jiraff_admin_jiraff_details_jiraff_details_component__WEBPACK_IMPORTED_MODULE_6__["JiraffDetailsComponent"], _comps_jiraff_admin_jiraff_lable_jiraff_lable_component__WEBPACK_IMPORTED_MODULE_7__["JiraffLableComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_comps_jiraff_admin_jiraff_page_jiraff_page_component__WEBPACK_IMPORTED_MODULE_4__["JiraffPageComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgPluralCase"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _comps_jiraff_admin_jiraff_admin_component__WEBPACK_IMPORTED_MODULE_3__["JiraffAdminComponent"], _comps_jiraff_admin_jiraff_page_jiraff_page_component__WEBPACK_IMPORTED_MODULE_4__["JiraffPageComponent"], _comps_jiraff_admin_jiraff_item_jiraff_item_component__WEBPACK_IMPORTED_MODULE_5__["JiraffItemComponent"], _comps_jiraff_admin_jiraff_details_jiraff_details_component__WEBPACK_IMPORTED_MODULE_6__["JiraffDetailsComponent"], _comps_jiraff_admin_jiraff_lable_jiraff_lable_component__WEBPACK_IMPORTED_MODULE_7__["JiraffLableComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/comps/jiraff-admin/jiraff-admin.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/comps/jiraff-admin/jiraff-admin.component.ts ***!
    \**************************************************************/

  /*! exports provided: JiraffAdminComponent */

  /***/
  function srcAppCompsJiraffAdminJiraffAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JiraffAdminComponent", function () {
      return JiraffAdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _jiraff_page_jiraff_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./jiraff-page/jiraff-page.component */
    "./src/app/comps/jiraff-admin/jiraff-page/jiraff-page.component.ts");

    var JiraffAdminComponent = /*#__PURE__*/function () {
      function JiraffAdminComponent() {
        _classCallCheck(this, JiraffAdminComponent);
      }

      _createClass(JiraffAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return JiraffAdminComponent;
    }();

    JiraffAdminComponent.ɵfac = function JiraffAdminComponent_Factory(t) {
      return new (t || JiraffAdminComponent)();
    };

    JiraffAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JiraffAdminComponent,
      selectors: [["app-jiraff-admin"]],
      decls: 1,
      vars: 0,
      template: function JiraffAdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-jiraff-page");
        }
      },
      directives: [_jiraff_page_jiraff_page_component__WEBPACK_IMPORTED_MODULE_1__["JiraffPageComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2ppcmFmZi1hZG1pbi9qaXJhZmYtYWRtaW4uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JiraffAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-jiraff-admin',
          templateUrl: './jiraff-admin.component.html',
          styleUrls: ['./jiraff-admin.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/comps/jiraff-admin/jiraff-details/jiraff-details.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/comps/jiraff-admin/jiraff-details/jiraff-details.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: JiraffDetailsComponent */

  /***/
  function srcAppCompsJiraffAdminJiraffDetailsJiraffDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JiraffDetailsComponent", function () {
      return JiraffDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _jiraff_lable_jiraff_lable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../jiraff-lable/jiraff-lable.component */
    "./src/app/comps/jiraff-admin/jiraff-lable/jiraff-lable.component.ts");

    function JiraffDetailsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-jiraff-lable", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-jiraff-lable", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.j.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.j.height);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.j.color);
      }
    }

    var JiraffDetailsComponent = /*#__PURE__*/function () {
      function JiraffDetailsComponent() {
        _classCallCheck(this, JiraffDetailsComponent);
      }

      _createClass(JiraffDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return JiraffDetailsComponent;
    }();

    JiraffDetailsComponent.ɵfac = function JiraffDetailsComponent_Factory(t) {
      return new (t || JiraffDetailsComponent)();
    };

    JiraffDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JiraffDetailsComponent,
      selectors: [["app-jiraff-details"]],
      inputs: {
        j: "j"
      },
      decls: 3,
      vars: 1,
      consts: [[4, "ngIf"], ["label", "height :", 3, "value"], ["label", "color :", 3, "value"]],
      template: function JiraffDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "jiraff-details works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, JiraffDetailsComponent_div_2_Template, 5, 3, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.j);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _jiraff_lable_jiraff_lable_component__WEBPACK_IMPORTED_MODULE_2__["JiraffLableComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2ppcmFmZi1hZG1pbi9qaXJhZmYtZGV0YWlscy9qaXJhZmYtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JiraffDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-jiraff-details',
          templateUrl: './jiraff-details.component.html',
          styleUrls: ['./jiraff-details.component.css']
        }]
      }], function () {
        return [];
      }, {
        j: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/comps/jiraff-admin/jiraff-item/jiraff-item.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/comps/jiraff-admin/jiraff-item/jiraff-item.component.ts ***!
    \*************************************************************************/

  /*! exports provided: JiraffItemComponent */

  /***/
  function srcAppCompsJiraffAdminJiraffItemJiraffItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JiraffItemComponent", function () {
      return JiraffItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _jiraff_lable_jiraff_lable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../jiraff-lable/jiraff-lable.component */
    "./src/app/comps/jiraff-admin/jiraff-lable/jiraff-lable.component.ts");

    var JiraffItemComponent = /*#__PURE__*/function () {
      function JiraffItemComponent() {
        _classCallCheck(this, JiraffItemComponent);

        this.clickNot = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteNot = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.randomColorNot = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(JiraffItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setTimeout(function () {
            _this.randomColorNot.emit(_this.j.color);
          }, 1000 * this.j.id);
        }
      }, {
        key: "deleteNotFn",
        value: function deleteNotFn() {
          this.deleteNot.emit(this.j.id);
        }
      }]);

      return JiraffItemComponent;
    }();

    JiraffItemComponent.ɵfac = function JiraffItemComponent_Factory(t) {
      return new (t || JiraffItemComponent)();
    };

    JiraffItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JiraffItemComponent,
      selectors: [["app-jiraff-item"]],
      inputs: {
        j: "j"
      },
      outputs: {
        clickNot: "clickNot",
        deleteNot: "deleteNot",
        randomColorNot: "randomColorNot"
      },
      decls: 9,
      vars: 5,
      consts: [[3, "click"], ["label", "height :", 3, "value"], ["label", "color :", 3, "value"]],
      template: function JiraffItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JiraffItemComponent_Template_div_click_0_listener() {
            return ctx.clickNot.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-jiraff-lable", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-jiraff-lable", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JiraffItemComponent_Template_button_click_7_listener() {
            return ctx.deleteNotFn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("jiraff-item" + (ctx.j.isBossy ? " bossy" : ""));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.j.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.j.height);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.j.color);
        }
      },
      directives: [_jiraff_lable_jiraff_lable_component__WEBPACK_IMPORTED_MODULE_1__["JiraffLableComponent"]],
      styles: [".jiraff-item[_ngcontent-%COMP%]{\r\n    padding: 2px;\r\n    border: 5px solid green;\r\n    margin: 4px;\r\n}\r\n\r\n.jiraff-item.bossy[_ngcontent-%COMP%]{\r\n    background-color: pink;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvamlyYWZmLWFkbWluL2ppcmFmZi1pdGVtL2ppcmFmZi1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2ppcmFmZi1hZG1pbi9qaXJhZmYtaXRlbS9qaXJhZmYtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmppcmFmZi1pdGVte1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgZ3JlZW47XHJcbiAgICBtYXJnaW46IDRweDtcclxufVxyXG5cclxuLmppcmFmZi1pdGVtLmJvc3N5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JiraffItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-jiraff-item',
          templateUrl: './jiraff-item.component.html',
          styleUrls: ['./jiraff-item.component.css']
        }]
      }], function () {
        return [];
      }, {
        j: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clickNot: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        deleteNot: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        randomColorNot: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/comps/jiraff-admin/jiraff-lable/jiraff-lable.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/comps/jiraff-admin/jiraff-lable/jiraff-lable.component.ts ***!
    \***************************************************************************/

  /*! exports provided: JiraffLableComponent */

  /***/
  function srcAppCompsJiraffAdminJiraffLableJiraffLableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JiraffLableComponent", function () {
      return JiraffLableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var JiraffLableComponent = /*#__PURE__*/function () {
      function JiraffLableComponent() {
        _classCallCheck(this, JiraffLableComponent);

        this.label = '';
        this.value = '';
      }

      _createClass(JiraffLableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return JiraffLableComponent;
    }();

    JiraffLableComponent.ɵfac = function JiraffLableComponent_Factory(t) {
      return new (t || JiraffLableComponent)();
    };

    JiraffLableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JiraffLableComponent,
      selectors: [["app-jiraff-lable"]],
      inputs: {
        label: "label",
        value: "value"
      },
      decls: 6,
      vars: 2,
      template: function JiraffLableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2ppcmFmZi1hZG1pbi9qaXJhZmYtbGFibGUvamlyYWZmLWxhYmxlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JiraffLableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-jiraff-lable',
          templateUrl: './jiraff-lable.component.html',
          styleUrls: ['./jiraff-lable.component.css']
        }]
      }], function () {
        return [];
      }, {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/comps/jiraff-admin/jiraff-page/jiraff-page.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/comps/jiraff-admin/jiraff-page/jiraff-page.component.ts ***!
    \*************************************************************************/

  /*! exports provided: JiraffPageComponent, jiraff */

  /***/
  function srcAppCompsJiraffAdminJiraffPageJiraffPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JiraffPageComponent", function () {
      return JiraffPageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jiraff", function () {
      return jiraff;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    function JiraffPageComponent_app_jiraff_item_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-jiraff-item", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickNot", function JiraffPageComponent_app_jiraff_item_5_Template_app_jiraff_item_clickNot_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var i_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.selectedJ = i_r1;
        })("deleteNot", function JiraffPageComponent_app_jiraff_item_5_Template_app_jiraff_item_deleteNot_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.deleteJ($event);
        })("randomColorNot", function JiraffPageComponent_app_jiraff_item_5_Template_app_jiraff_item_randomColorNot_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.bgRnd = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("j", i_r1);
      }
    }

    var JiraffPageComponent = /*#__PURE__*/function () {
      function JiraffPageComponent() {
        _classCallCheck(this, JiraffPageComponent);

        this.jiraffArary = [{
          id: 1,
          name: 'ariel',
          height: 5.32,
          color: 'blue',
          isBossy: true
        }, {
          id: 2,
          name: 'aaaaa',
          height: 7.32,
          color: 'black',
          isBossy: false
        }, {
          id: 3,
          name: 'bbbbb',
          height: 8.32,
          color: 'red',
          isBossy: false
        }, {
          id: 4,
          name: 'ccccc',
          height: 9.32,
          color: 'yellow',
          isBossy: true
        }, {
          id: 5,
          name: 'ddddd',
          height: 11.32,
          color: 'blue',
          isBossy: false
        }];
      }

      _createClass(JiraffPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "deleteJ",
        value: function deleteJ(Jid) {
          for (var i = 0; i < this.jiraffArary.length; i++) {
            if (this.jiraffArary[i].id == Jid) {
              this.jiraffArary.splice(i, 1);
            }
          }
        }
      }]);

      return JiraffPageComponent;
    }();

    JiraffPageComponent.ɵfac = function JiraffPageComponent_Factory(t) {
      return new (t || JiraffPageComponent)();
    };

    JiraffPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JiraffPageComponent,
      selectors: [["app-jiraff-page"]],
      decls: 7,
      vars: 4,
      consts: [[1, "wrapp"], [1, "force-jiraff-item"], ["class", "j-item-as-list", 3, "j", "clickNot", "deleteNot", "randomColorNot", 4, "ngFor", "ngForOf"], [3, "j"], [1, "j-item-as-list", 3, "j", "clickNot", "deleteNot", "randomColorNot"]],
      template: function JiraffPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "welcome jiraff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, JiraffPageComponent_app_jiraff_item_5_Template, 1, 1, "app-jiraff-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-jiraff-details", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.bgRnd, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jiraffArary);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("j", ctx.selectedJ);
        }
      },
      styles: [".j-item-as-list[_ngcontent-%COMP%]{\r\n    display: list-item;\r\n    \r\n}\r\n\r\n.force-jiraff-item[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: auto;\r\n    width: 40%;\r\n    \r\n}\r\n\r\n.wrapp[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvamlyYWZmLWFkbWluL2ppcmFmZi1wYWdlL2ppcmFmZi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVOztBQUVkOztBQUNBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2ppcmFmZi1hZG1pbi9qaXJhZmYtcGFnZS9qaXJhZmYtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmotaXRlbS1hcy1saXN0e1xyXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gICAgLyogd2lkdGg6IDQwdnc7ICovXHJcbn1cclxuXHJcbi5mb3JjZS1qaXJhZmYtaXRlbXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBcclxufVxyXG4ud3JhcHB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JiraffPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-jiraff-page',
          templateUrl: './jiraff-page.component.html',
          styleUrls: ['./jiraff-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();

    var jiraff = function jiraff() {
      _classCallCheck(this, jiraff);
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\stu\Desktop\New folder\jiraffInOut2\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map