(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/acesso/acesso.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/acesso/acesso.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div *ngIf=\"cadastro;else formLogin\" style=\"width: 100%\">\n      <div\n        class=\"col-sm-12 d-flex justify-content-center\">\n        <app-cadastro (exibirPainel)=\"exibirPainel($event)\"></app-cadastro>\n      </div>\n    </div>\n    <ng-template #formLogin>\n      <div class=\"col-sm-12 d-flex justify-content-center\">\n        <app-login (exibirPainel)=\"exibirPainel($event)\"></app-login>\n      </div>\n    </ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/acesso/cadastro/cadastro.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/acesso/cadastro/cadastro.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 20rem;\">\n  <div class=\"card-body\">\n    <div class=\"card-title\"></div>\n\n    <form [formGroup]=\"formulario\" (ngSubmit)=\"cadastrarUsuario()\">\n      <div class=\"form-group\">\n        <input\n          type=\"email\"\n          class=\"form-control\"\n          placeholder=\"E-mail\"\n          formControlName=\"email\"\n        >\n      </div>\n      <div class=\"form-group\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"Nome completo\"\n          formControlName=\"nome_completo\"\n        >\n      </div>\n      <div class=\"form-group\">\n        <input\n          type=\"password\"\n          class=\"form-control\"\n          placeholder=\"Senha\"\n          formControlName=\"senha\"\n        >\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary btn-sm btn-block\">Cadastre-se</button>\n    </form>\n    <hr />\n\n    <p class=\"small text-center\">Ao cadastrar-se, você concorda com nossos <b>Termos</b> e <b>Política de Privacidade</b>.</p>\n\n  </div>\n</div>\n<br />\n<div class=\"card\" style=\"width: 20rem;\">\n  <div class=\"card-body\">\n    <p class=\"card-text\">\n      Tem uma conta? <a href=\"#\" class=\"card-link\" (click)=\"exibirPainelLogin()\">Faça login</a>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/acesso/login/login.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/acesso/login/login.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 20rem;\">\n  <div class=\"card-body\">\n    <div class=\"card-title\"></div>\n\n    <form [formGroup]=\"formulario\" (ngSubmit)=\"autenticar()\">\n      <div class=\"form-group\">\n        <input\n          type=\"email\"\n          class=\"form-control\"\n          placeholder=\"E-mail\"\n          formControlName=\"email\"\n        >\n      </div>\n      <div class=\"form-group\">\n        <input\n          type=\"password\"\n          class=\"form-control\"\n          placeholder=\"Senha\"\n          formControlName=\"senha\"\n        >\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary btn-sm btn-block\">Entrar</button>\n    </form>\n    <hr />\n\n    <p class=\"small text-danger text-center\">O nome de usuário inserido não pertence a uma conta. Verifique seu nome de usuário e tente novamente.</p>\n\n  </div>\n</div>\n<br />\n<div class=\"card\" style=\"width: 20rem;\">\n  <div class=\"card-body\">\n    <p class=\"card-text\">\n      Não tem uma conta? <a href=\"#\" class=\"card-link\" (click)=\"exibirPainelCadastro()\">Cadastre-se</a>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-padrao\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/confirmar-cadastro/confirmar-cadastro.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/confirmar-cadastro/confirmar-cadastro.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  confirmar-cadastro works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/acesso/acesso.component.css":
/*!*********************************************!*\
  !*** ./src/app/acesso/acesso.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjZXNzby9hY2Vzc28uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/acesso/acesso.component.ts":
/*!********************************************!*\
  !*** ./src/app/acesso/acesso.component.ts ***!
  \********************************************/
/*! exports provided: AcessoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcessoComponent", function() { return AcessoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");



let AcessoComponent = class AcessoComponent {
    constructor(toastr) {
        this.toastr = toastr;
        this.cadastro = false;
    }
    ngOnInit() {
    }
    exibirPainel(event) {
        this.cadastro = event.local === 'cadastro' ? true : false;
        if (event.message !== null) {
            this.toastr.success(event.message, 'Seja bem vindo');
        }
    }
};
AcessoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-acesso',
        template: __webpack_require__(/*! raw-loader!./acesso.component.html */ "./node_modules/raw-loader/index.js!./src/app/acesso/acesso.component.html"),
        styles: [__webpack_require__(/*! ./acesso.component.css */ "./src/app/acesso/acesso.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
], AcessoComponent);



/***/ }),

/***/ "./src/app/acesso/cadastro/cadastro.component.css":
/*!********************************************************!*\
  !*** ./src/app/acesso/cadastro/cadastro.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\r\n    background-image: url('trailinglib.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: 95%;\r\n    height: 80px;\r\n    width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNlc3NvL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3Q0FBMEQ7SUFDMUQsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FjZXNzby9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdGl0bGUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi9hc3NldHMvdHJhaWxpbmdsaWIucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogOTUlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/acesso/cadastro/cadastro.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/acesso/cadastro/cadastro.component.ts ***!
  \*******************************************************/
/*! exports provided: CadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroComponent", function() { return CadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _usuario_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../usuario.model */ "./src/app/acesso/usuario.model.ts");






let CadastroComponent = class CadastroComponent {
    constructor(_auth, toastr) {
        this._auth = _auth;
        this.toastr = toastr;
        this.exibirPainel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formulario = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'nome_completo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'senha': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    }
    ngOnInit() { }
    exibirPainelLogin(msg) {
        this.exibirPainel.emit({ local: 'login', message: msg });
    }
    cadastrarUsuario() {
        let usuario = new _usuario_model__WEBPACK_IMPORTED_MODULE_5__["UserTrader"]();
        usuario.email = this.formulario.value.email;
        usuario.name = this.formulario.value.nome_completo;
        usuario.password = this.formulario.value.senha;
        this._auth.cadastrarUsuario(usuario)
            .then((dados) => {
            console.log('cadastro', dados);
            if (dados.retCode === 0) {
                this.exibirPainelLogin(dados.retMsg);
            }
            else {
                this.toastr.error(dados.retMsg, 'Ops!');
            }
            this.formulario.reset();
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], CadastroComponent.prototype, "exibirPainel", void 0);
CadastroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cadastro',
        template: __webpack_require__(/*! raw-loader!./cadastro.component.html */ "./node_modules/raw-loader/index.js!./src/app/acesso/cadastro/cadastro.component.html"),
        styles: [__webpack_require__(/*! ./cadastro.component.css */ "./src/app/acesso/cadastro/cadastro.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
], CadastroComponent);



/***/ }),

/***/ "./src/app/acesso/login/login.component.css":
/*!**************************************************!*\
  !*** ./src/app/acesso/login/login.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\r\n    background-image: url('trailinglib.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: 95%;\r\n    height: 80px;\r\n    width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNlc3NvL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3Q0FBMEQ7SUFDMUQsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FjZXNzby9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdGl0bGUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi8uLi9hc3NldHMvdHJhaWxpbmdsaWIucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogOTUlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/acesso/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/acesso/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../auth.service */ "./src/app/auth.service.ts");




let LoginComponent = class LoginComponent {
    constructor(_auth) {
        this._auth = _auth;
        this.exibirPainel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formulario = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'senha': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    }
    ngOnInit() { }
    exibirPainelCadastro() {
        this.exibirPainel.emit({ local: 'cadastro', message: null });
    }
    autenticar() {
        this._auth.autenticar(this.formulario.value.email, this.formulario.value.senha);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], LoginComponent.prototype, "exibirPainel", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/acesso/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/acesso/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/acesso/usuario.model.ts":
/*!*****************************************!*\
  !*** ./src/app/acesso/usuario.model.ts ***!
  \*****************************************/
/*! exports provided: UserTrader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTrader", function() { return UserTrader; });
class UserTrader {
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    padding-top: 5%\r\n}\r\n\r\n.bg-padrao{\r\n    background: #FAFAFA\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixPQUFPO0lBQ1A7QUFDSjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogNSVcclxufVxyXG5cclxuLmJnLXBhZHJhb3tcclxuICAgIGJhY2tncm91bmQ6ICNGQUZBRkFcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app-trailing';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _acesso_acesso_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./acesso/acesso.component */ "./src/app/acesso/acesso.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _acesso_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./acesso/login/login.component */ "./src/app/acesso/login/login.component.ts");
/* harmony import */ var _acesso_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./acesso/cadastro/cadastro.component */ "./src/app/acesso/cadastro/cadastro.component.ts");
/* harmony import */ var _confirmar_cadastro_confirmar_cadastro_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./confirmar-cadastro/confirmar-cadastro.component */ "./src/app/confirmar-cadastro/confirmar-cadastro.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _acesso_acesso_component__WEBPACK_IMPORTED_MODULE_11__["AcessoComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
            _acesso_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
            _acesso_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_15__["CadastroComponent"],
            _confirmar_cadastro_confirmar_cadastro_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmarCadastroComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_13__["ROUTES"]),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
                timeOut: 10000,
                positionClass: 'toast-top-full-width',
                preventDuplicates: true
            })
        ],
        providers: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AutenticacaoGuard"], _auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _acesso_acesso_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acesso/acesso.component */ "./src/app/acesso/acesso.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _confirmar_cadastro_confirmar_cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmar-cadastro/confirmar-cadastro.component */ "./src/app/confirmar-cadastro/confirmar-cadastro.component.ts");




const ROUTES = [
    { path: '', component: _acesso_acesso_component__WEBPACK_IMPORTED_MODULE_1__["AcessoComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AutenticacaoGuard"]] },
    { path: 'subscription', component: _confirmar_cadastro_confirmar_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmarCadastroComponent"] }
];


/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AutenticacaoGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticacaoGuard", function() { return AutenticacaoGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



let AutenticacaoGuard = class AutenticacaoGuard {
    constructor(_auth) {
        this._auth = _auth;
    }
    canActivate() {
        return this._auth.autenticado();
    }
};
AutenticacaoGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], AutenticacaoGuard);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let AuthService = class AuthService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    cadastrarUsuario(usuario) {
        const url = "http://mynetsurvey.com/api/auth/SignUp";
        const body = JSON.stringify(usuario);
        console.log('dados cadastro', body);
        return this.http.post(url, body, httpOptions).toPromise()
            .then((res) => {
            return res;
        })
            .catch((error) => {
            console.log('ERRO CADASTRO', error);
        });
    }
    autenticar(email, senha) {
        const url = "http://mynetsurvey.com/api/auth/SignIn";
        const body = JSON.stringify({ Email: email, Password: senha });
        console.log('dados login', body);
        return this.http.post(url, body, httpOptions).toPromise()
            .then((res) => {
            console.log('LOGIN:', res);
            this.token_id = res.consumerKey;
            localStorage.setItem('token', res.consumerKey);
            this.router.navigate(['/home']);
        })
            .catch((error) => {
            console.log('ERRO AUTENTICA', error);
        });
    }
    autenticado() {
        if (this.token_id === undefined && localStorage.getItem('idToken') !== null) {
            this.token_id = localStorage.getItem('idToken');
        }
        return this.token_id !== undefined;
    }
    sair() {
        localStorage.removeItem('idToken');
        this.token_id = undefined;
        this.router.navigate(['/']);
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "./src/app/confirmar-cadastro/confirmar-cadastro.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/confirmar-cadastro/confirmar-cadastro.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm1hci1jYWRhc3Ryby9jb25maXJtYXItY2FkYXN0cm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/confirmar-cadastro/confirmar-cadastro.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/confirmar-cadastro/confirmar-cadastro.component.ts ***!
  \********************************************************************/
/*! exports provided: ConfirmarCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmarCadastroComponent", function() { return ConfirmarCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConfirmarCadastroComponent = class ConfirmarCadastroComponent {
    constructor() { }
    ngOnInit() {
    }
};
ConfirmarCadastroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirmar-cadastro',
        template: __webpack_require__(/*! raw-loader!./confirmar-cadastro.component.html */ "./node_modules/raw-loader/index.js!./src/app/confirmar-cadastro/confirmar-cadastro.component.html"),
        styles: [__webpack_require__(/*! ./confirmar-cadastro.component.css */ "./src/app/confirmar-cadastro/confirmar-cadastro.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ConfirmarCadastroComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\apfwebdev\projects\app-trailing\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map