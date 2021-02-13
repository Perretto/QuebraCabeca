(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jogo-jogo-module"],{

/***/ "0K6f":
/*!*************************************!*\
  !*** ./src/app/jogo/jogo.module.ts ***!
  \*************************************/
/*! exports provided: JogoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogoPageModule", function() { return JogoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _jogo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jogo-routing.module */ "xl9C");
/* harmony import */ var _jogo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jogo.page */ "mutv");







let JogoPageModule = class JogoPageModule {
};
JogoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _jogo_routing_module__WEBPACK_IMPORTED_MODULE_5__["JogoPageRoutingModule"]
        ],
        declarations: [_jogo_page__WEBPACK_IMPORTED_MODULE_6__["JogoPage"]]
    })
], JogoPageModule);



/***/ }),

/***/ "8gaT":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jogo/jogo.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col style=\"margin-top: 15px;\">\n          <ion-title size=\"large\">Movimentos {{mov}}</ion-title>\n        </ion-col>\n        <ion-col style=\"text-align: end;\">\n          <a (click)=\"ngOnInit()\"><h4><ion-icon  name=\"sync-outline\"></ion-icon></h4></a>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <div id=\"container\" style=\"text-align: center;margin-top: 30%;\">\n    <img (click)=\"onSwipe(0)\" id=\"campo0\" src=\"\" style=\"width: 100px;height:100px\"/>\n    <img (click)=\"onSwipe(1)\" id=\"campo1\" src=\"\" style=\"width: 100px;height:100px\"/>\n    <img (click)=\"onSwipe(2)\" id=\"campo2\" src=\"\" style=\"width: 100px;height:100px\"/>\n    <img (click)=\"onSwipe(3)\" id=\"campo3\" src=\"\" style=\"width: 100px;height:100px\"/>\n    <img (click)=\"onSwipe(4)\" id=\"campo4\" src=\"\" style=\"width: 100px;height:100px\"/>\n    <img (click)=\"onSwipe(5)\" id=\"campo5\" src=\"\" style=\"width: 100px;height:100px\"/>\n    <img (click)=\"onSwipe(6)\" id=\"campo6\" src=\"\" style=\"width: 100px;height:100px\"/>\n    <img (click)=\"onSwipe(7)\" id=\"campo7\" src=\"\" style=\"width: 100px;height:100px\"/>\n    <img (click)=\"onSwipe(8)\"  id=\"campo8\" src=\"\" style=\"width: 100px;height:100px\"/>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "frVJ":
/*!*************************************!*\
  !*** ./src/app/jogo/jogo.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2dvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "mutv":
/*!***********************************!*\
  !*** ./src/app/jogo/jogo.page.ts ***!
  \***********************************/
/*! exports provided: JogoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogoPage", function() { return JogoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_jogo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./jogo.page.html */ "8gaT");
/* harmony import */ var _jogo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jogo.page.scss */ "frVJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _vitoria_vitoria_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../vitoria/vitoria.page */ "tsQ+");







let JogoPage = class JogoPage {
    constructor(activatedRoute, modalCtrl) {
        this.activatedRoute = activatedRoute;
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
        this.mov = 0;
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
        this.misturar();
        this.desenhar();
    }
    misturar() {
        this.sequencia = [];
        var quantidade = 9;
        for (let index = 0; index < quantidade; index++) {
            this.sequencia.push(index);
        }
        this.sequencia = this.embaralhar(this.sequencia);
    }
    // Algoritmo de embaralhamento de Fisher–Yates
    embaralhar(array) {
        for (var i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    desenhar() {
        for (const key in this.sequencia) {
            if (Object.prototype.hasOwnProperty.call(this.sequencia, key)) {
                const element = this.sequencia[key];
                var elem = document.getElementById('campo' + key);
                elem.src = "../assets/img/" + element + ".jpg";
            }
        }
    }
    onSwipe(elem) {
        var porlinha = 3;
        //direita
        if (this.sequencia[elem + 1] == 0 && elem != 2 && elem != 5) {
            this.atualizarCampo(elem, elem + 1);
        }
        //esquerda
        if (this.sequencia[elem - 1] == 0 && elem != 0 && elem != 3 && elem != 6) {
            this.atualizarCampo(elem, elem - 1);
        }
        //baixo
        var novo = (elem + 1) + porlinha;
        if (this.sequencia[novo - 1] == 0 && elem != 6 && elem != 7 && elem != 8) {
            this.atualizarCampo(elem, novo - 1);
        }
        //cima
        novo = (elem + 1) - porlinha;
        if (this.sequencia[novo - 1] == 0 && elem != 0 && elem != 1 && elem != 2) {
            this.atualizarCampo(elem, novo - 1);
        }
        this.mov++;
    }
    atualizarCampo(antigo, novo) {
        var valor = this.sequencia[antigo];
        var valornovo = this.sequencia[novo];
        if (valornovo == 0) {
            this.sequencia[novo] = valor;
            this.sequencia[antigo] = 0;
            console.log(this.sequencia);
            this.desenhar();
        }
        if (this.verificar()) {
            this.desenharVitoria();
        }
    }
    verificar() {
        var ganhou = true;
        for (let index = 0; index < this.sequencia.length; index++) {
            const element = this.sequencia[index];
            if (((index + 1) != element && (index + 1) != this.sequencia.length) || (index + 1) == 9 && element != 0) {
                ganhou = false;
                break;
            }
        }
        return ganhou;
    }
    desenharVitoria() {
        this.createModal();
        this.ngOnInit();
    }
    createModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _vitoria_vitoria_page__WEBPACK_IMPORTED_MODULE_6__["VitoriaPage"],
                cssClass: 'my-custom-class',
                swipeToClose: true,
                presentingElement: yield this.modalCtrl.getTop()
            });
            return yield modal.present();
        });
    }
};
JogoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
JogoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-jogo',
        template: _raw_loader_jogo_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_jogo_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], JogoPage);



/***/ }),

/***/ "xl9C":
/*!*********************************************!*\
  !*** ./src/app/jogo/jogo-routing.module.ts ***!
  \*********************************************/
/*! exports provided: JogoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogoPageRoutingModule", function() { return JogoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _jogo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jogo.page */ "mutv");




const routes = [
    {
        path: '',
        component: _jogo_page__WEBPACK_IMPORTED_MODULE_3__["JogoPage"]
    }
];
let JogoPageRoutingModule = class JogoPageRoutingModule {
};
JogoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], JogoPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=jogo-jogo-module.js.map