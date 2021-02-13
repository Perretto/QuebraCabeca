(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vitoria-vitoria-module"],{

/***/ "OcKJ":
/*!***************************************************!*\
  !*** ./src/app/vitoria/vitoria-routing.module.ts ***!
  \***************************************************/
/*! exports provided: VitoriaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VitoriaPageRoutingModule", function() { return VitoriaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _vitoria_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vitoria.page */ "tsQ+");




const routes = [
    {
        path: '',
        component: _vitoria_page__WEBPACK_IMPORTED_MODULE_3__["VitoriaPage"]
    }
];
let VitoriaPageRoutingModule = class VitoriaPageRoutingModule {
};
VitoriaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VitoriaPageRoutingModule);



/***/ }),

/***/ "c4x6":
/*!*******************************************!*\
  !*** ./src/app/vitoria/vitoria.module.ts ***!
  \*******************************************/
/*! exports provided: VitoriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VitoriaPageModule", function() { return VitoriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _vitoria_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vitoria-routing.module */ "OcKJ");
/* harmony import */ var _vitoria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vitoria.page */ "tsQ+");







let VitoriaPageModule = class VitoriaPageModule {
};
VitoriaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _vitoria_routing_module__WEBPACK_IMPORTED_MODULE_5__["VitoriaPageRoutingModule"]
        ],
        declarations: [_vitoria_page__WEBPACK_IMPORTED_MODULE_6__["VitoriaPage"]]
    })
], VitoriaPageModule);



/***/ })

}]);
//# sourceMappingURL=vitoria-vitoria-module.js.map