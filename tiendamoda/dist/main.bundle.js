webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<app-navbar></app-navbar><br/>\n<router-outlet></router-outlet> <br>\n<app-footer id=\"pie\"></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__insertar_insertar_component__ = __webpack_require__("./src/app/insertar/insertar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__registro_registro_component__ = __webpack_require__("./src/app/registro/registro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__producto_service__ = __webpack_require__("./src/app/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__firebase_service__ = __webpack_require__("./src/app/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tour_info_tour_info_component__ = __webpack_require__("./src/app/tour-info/tour-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__filtro_categoria_filtro_categoria_component__ = __webpack_require__("./src/app/filtro-categoria/filtro-categoria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__carrito_carrito_component__ = __webpack_require__("./src/app/carrito/carrito.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__filtro_genero_filtro_genero_component__ = __webpack_require__("./src/app/filtro-genero/filtro-genero.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
    { path: 'ProductoInfo/:id', component: __WEBPACK_IMPORTED_MODULE_17__tour_info_tour_info_component__["a" /* TourInfoComponent */] },
    { path: 'Categoria/:categoria', component: __WEBPACK_IMPORTED_MODULE_18__filtro_categoria_filtro_categoria_component__["a" /* FiltroCategoriaComponent */] },
    { path: 'Genero/:genero', component: __WEBPACK_IMPORTED_MODULE_20__filtro_genero_filtro_genero_component__["a" /* FiltroGeneroComponent */] },
    { path: 'carrito', component: __WEBPACK_IMPORTED_MODULE_19__carrito_carrito_component__["a" /* CarritoComponent */] },
    { path: 'insertar', component: __WEBPACK_IMPORTED_MODULE_6__insertar_insertar_component__["a" /* InsertarComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__insertar_insertar_component__["a" /* InsertarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__registro_registro_component__["a" /* RegistroComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_17__tour_info_tour_info_component__["a" /* TourInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_18__filtro_categoria_filtro_categoria_component__["a" /* FiltroCategoriaComponent */],
                __WEBPACK_IMPORTED_MODULE_19__carrito_carrito_component__["a" /* CarritoComponent */],
                __WEBPACK_IMPORTED_MODULE_20__filtro_genero_filtro_genero_component__["a" /* FiltroGeneroComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_16__environments_environment__["a" /* environment */].config),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_11__firebase_service__["a" /* FirebaseService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carrito/carrito.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/carrito/carrito.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"carrito != null\">\n\n  <table class=\"table\" style=\"width: 60%\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Nombre</th>\n        <th scope=\"col\">Unidades</th>\n        <th scope=\"col\">Precio</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let p of carrito\">\n        <td>{{p.nombre}}</td>\n        <td>x{{p.unidades}}</td>\n        <td>{{p.precio}}€</td>\n      </tr>\n      <tr>\n        <td colspan=\"2\"><b>Total</b></td>\n        <td><b>{{total}}€ (IVA incluido)</b></td>\n      </tr>\n    </tbody>\n  </table>\n\n  <button (click) = \"limpiarCarrito()\">Limpiar carrito</button>\n\n</div>\n\n<div *ngIf = \"carrito == null\">\n\n  Tu carrito aun esta vacio empieza a <a routerLink=\"\">comprar </a>\n\n</div>\n"

/***/ }),

/***/ "./src/app/carrito/carrito.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarritoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarritoComponent = /** @class */ (function () {
    function CarritoComponent(router) {
        this.router = router;
        //products: Producto[] = [];  //lo que va a revoger el html
        this.total = 0;
    }
    CarritoComponent.prototype.ngOnInit = function () {
        //this.local = localStorage.getItem("carrito") === null ? "" : localStorage.getItem("carrito");
        if (localStorage.getItem("carrito") !== null && localStorage.getItem("carrito").length > 10) {
            this.carrito = JSON.parse(localStorage.getItem("carrito"));
            for (var _i = 0, _a = this.carrito; _i < _a.length; _i++) {
                var product = _a[_i];
                this.total += product.precio * product.unidades;
            }
        }
        else {
            console.log("Carrito vacio");
        }
    };
    CarritoComponent.prototype.limpiarCarrito = function () {
        localStorage.removeItem("carrito");
        this.router.navigateByUrl("/");
    };
    CarritoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-carrito',
            template: __webpack_require__("./src/app/carrito/carrito.component.html"),
            styles: [__webpack_require__("./src/app/carrito/carrito.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], CarritoComponent);
    return CarritoComponent;
}());



/***/ }),

/***/ "./src/app/filtro-categoria/filtro-categoria.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/filtro-categoria/filtro-categoria.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\" style=\"text-align: center;\">   \n  <div *ngFor=\"let p of productosObservable | async\" style=\"display: inline-block\">\n    <div *ngIf = \"categoria == p.categoria \">\n   \n      <div class=\"card\" style=\"width: 18rem\">\n        <img class=\"card-img-top\"  src=\"{{p.imagen}}\" alt=\"Card image cap\" width=\"237px\" height=\"180px\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{p.nombre}}</h5>\n          <p class=\"card-text\">{{p.precio}}</p>\n          <a [routerLink] = \"['/ProductoInfo', p.id]\"><button>Mas detalles</button></a>\n          <a [routerLink] = \"['/ProductoInfo', p.id]\"><button>Añadir al carrito</button></a>\n        </div>\n      </div>    \n          \n    </div>\n  </div>\n</div> -->\n\n<div style=\"text-align: center\">\n  <h1>{{categoria}}</h1>\n</div>\n<br>\n<div class=\"row\">\n  <ng-container *ngFor=\"let p of productosObservable | async\" align=\"center\">\n    <div *ngIf = \"categoria == p.categoria \">\n    <div class=\"card text-white bg-info mb-3\" style=\"width: 18rem;border: 1px black solid\">\n      <img class=\"card-img-top\" src=\"{{p.imagen}}\" alt=\"{{p.nombre}}\" widht=\"300px\" height=\"200px\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{p.nombre}}</h5>\n        <p class=\"card-text\">{{p.precio}}€</p>\n        <a [routerLink]=\"['/ProductoInfo', p.id]\" class=\"btn btn-light\">Más detalles</a>\n      </div>\n    </div> &nbsp;&nbsp;&nbsp;\n    </div>\n  </ng-container>\n</div>"

/***/ }),

/***/ "./src/app/filtro-categoria/filtro-categoria.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltroCategoriaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__producto_service__ = __webpack_require__("./src/app/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FiltroCategoriaComponent = /** @class */ (function () {
    function FiltroCategoriaComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    FiltroCategoriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productosObservable = this.getProductos();
        this.route.params
            .subscribe(function (params) {
            _this.categoria = params['categoria'].toString();
            console.log("Categoria: " + _this.categoria);
        });
    };
    FiltroCategoriaComponent.prototype.getProductos = function () {
        return this.service.getProductos();
    };
    FiltroCategoriaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-filtro-categoria',
            template: __webpack_require__("./src/app/filtro-categoria/filtro-categoria.component.html"),
            styles: [__webpack_require__("./src/app/filtro-categoria/filtro-categoria.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], FiltroCategoriaComponent);
    return FiltroCategoriaComponent;
}());



/***/ }),

/***/ "./src/app/filtro-genero/filtro-genero.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/filtro-genero/filtro-genero.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n    <h1>{{genero}}</h1>\n  </div>\n  <br>\n  <div class=\"row\">\n    <ng-container *ngFor=\"let p of productosObservable | async\" align=\"center\">\n      <div *ngIf = \"genero == p.genero \">\n      <div class=\"card text-white bg-info mb-3\" style=\"width: 18rem;border: 1px black solid\">\n        <img class=\"card-img-top\" src=\"{{p.imagen}}\" alt=\"{{p.nombre}}\" widht=\"300px\" height=\"200px\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{p.nombre}}</h5>\n          <p class=\"card-text\">{{p.precio}}€</p>\n          <a [routerLink]=\"['/ProductoInfo', p.id]\" class=\"btn btn-light\">Más detalles</a>\n        </div>\n      </div> &nbsp;&nbsp;&nbsp;\n      </div>\n    </ng-container>\n  </div>"

/***/ }),

/***/ "./src/app/filtro-genero/filtro-genero.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltroGeneroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__producto_service__ = __webpack_require__("./src/app/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FiltroGeneroComponent = /** @class */ (function () {
    function FiltroGeneroComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    FiltroGeneroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productosObservable = this.getProductos();
        this.route.params
            .subscribe(function (params) {
            _this.genero = params['genero'].toString();
            console.log("Genero: " + _this.genero);
        });
    };
    FiltroGeneroComponent.prototype.getProductos = function () {
        return this.service.getProductos();
    };
    FiltroGeneroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-filtro-genero',
            template: __webpack_require__("./src/app/filtro-genero/filtro-genero.component.html"),
            styles: [__webpack_require__("./src/app/filtro-genero/filtro-genero.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], FiltroGeneroComponent);
    return FiltroGeneroComponent;
}());



/***/ }),

/***/ "./src/app/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("./node_modules/firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirebaseService = /** @class */ (function () {
    function FirebaseService(firebaseAuth, afAuth, router) {
        this.firebaseAuth = firebaseAuth;
        this.afAuth = afAuth;
        this.router = router;
        this.user = firebaseAuth.authState;
    }
    FirebaseService.prototype.login = function (email, password) {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Nice, it worked!');
            _this.router.navigateByUrl('/insertar');
        })
            .catch(function (err) {
            console.log('Something went wrong: ', err.message);
        });
    };
    FirebaseService.prototype.emailSignup = function (email, password) {
        var _this = this;
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Sucess', value);
            _this.router.navigateByUrl('/email-login');
        })
            .catch(function (error) {
            console.log('Something went wrong: ', error);
        });
    };
    FirebaseService.prototype.googleLogin = function () {
        var _this = this;
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider)
            .then(function (value) {
            console.log('Sucess', value),
                _this.router.navigateByUrl('/insertar');
        })
            .catch(function (error) {
            console.log('Something went wrong: ', error);
        });
    };
    FirebaseService.prototype.twitterLogin = function () {
        var _this = this;
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].TwitterAuthProvider();
        return this.oAuthLogin(provider)
            .then(function (value) {
            console.log('Sucess', value),
                _this.router.navigateByUrl('/insertar');
        })
            .catch(function (error) {
            console.log('Something went wrong: ', error);
        });
    };
    FirebaseService.prototype.githubLogin = function () {
        var _this = this;
        var provider = new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GithubAuthProvider();
        return this.oAuthLogin(provider)
            .then(function (value) {
            console.log('Sucess', value),
                _this.router.navigateByUrl('/insertar');
        })
            .catch(function (error) {
            console.log('Something went wrong: ', error);
        });
    };
    FirebaseService.prototype.getAuth = function () {
        return this.afAuth.authState.map(function (auth) { return auth; });
    };
    FirebaseService.prototype.logout = function () {
        this.afAuth.auth.signOut();
        console.log("HACE EL LOGOUT");
    };
    FirebaseService.prototype.oAuthLogin = function (provider) {
        return this.afAuth.auth.signInWithPopup(provider);
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "#myFooter {\r\n\tbackground-color: #373a48;\r\n\tcolor:white;\r\n}\r\n\r\n#myFooter .footer-copyright{\r\n\tbackground-color: #383737;\r\n\tpadding-top:3px;\r\n\tpadding-bottom:3px;\r\n\ttext-align: center;\r\n}\r\n\r\n#myFooter .footer-copyright p{\r\n\tmargin:10px;\r\n\tcolor: #ccc;\r\n}\r\n\r\n#myFooter ul{\r\n\tlist-style-type: none;\r\n    padding-left: 0;\r\n    line-height: 1.7;\r\n\r\n}\r\n\r\n#myFooter h5{\r\n\tfont-size: 18px;\r\n    color: white;\r\n    font-weight: bold;\r\n    margin-top: 30px;\r\n}\r\n\r\n#myFooter a{\r\n\tcolor:#d2d1d1;\r\n\ttext-decoration: none;\r\n}\r\n\r\n#myFooter a:hover, #myFooter a:focus{\r\n\ttext-decoration: none;\r\n\tcolor:white;\r\n}\r\n\r\n#myFooter .myCols{\r\n\ttext-align: center;\r\n}\r\n\r\n#myFooter .social-networks{\r\n\ttext-align: center;\r\n\tpadding-top: 30px;\r\n\tpadding-bottom: 38px;\r\n}\r\n\r\n#myFooter .social-networks a{\r\n    font-size: 32px;\r\n    margin-right: 5px;\r\n    margin-left: 5px;\r\n    color: #f9f9f9;\r\n    padding: 10px;\r\n    -webkit-transition: 0.2s;\r\n    transition: 0.2s;\r\n}\r\n\r\n#myFooter .social-networks a:hover{\r\n\ttext-decoration: none;\r\n\r\n}\r\n\r\n#myFooter .facebook:hover{\r\n\tcolor:#0077e2;\r\n}\r\n\r\n#myFooter .google:hover{\r\n\tcolor:#ef1a1a;\r\n}\r\n\r\n#myFooter .twitter:hover{\r\n\tcolor: #00aced;\r\n}\r\n\r\n@media screen and (max-width: 767px){\r\n\t#myFooter {\r\n\t\ttext-align: center;\r\n\t}\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer id=\"myFooter\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-3 myCols\">\n                <h5>Get started</h5>\n                <ul>\n                    <li><a href=\"#\">Home</a></li>\n                    <li><a href=\"#\">Sign up</a></li>\n                    <li><a href=\"#\">Downloads</a></li>\n                </ul>\n            </div>\n            <div class=\"col-sm-3 myCols\">\n                <h5>About us</h5>\n                <ul>\n                    <li><a href=\"#\">Company Information</a></li>\n                    <li><a href=\"#\">Contact us</a></li>\n                    <li><a href=\"#\">Reviews</a></li>\n                </ul>\n            </div>\n            <div class=\"col-sm-3 myCols\">\n                <h5>Support</h5>\n                <ul>\n                    <li><a href=\"#\">FAQ</a></li>\n                    <li><a href=\"#\">Help desk</a></li>\n                    <li><a href=\"#\">Forums</a></li>\n                </ul>\n            </div>\n            <div class=\"col-sm-3 myCols\">\n                <h5>Legal</h5>\n                <ul>\n                    <li><a href=\"#\">Terms of Service</a></li>\n                    <li><a href=\"#\">Terms of Use</a></li>\n                    <li><a href=\"#\">Privacy Policy</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"social-networks\">\n        <a href=\"#\"><i class=\"fab fa-twitter\"></i></a>\n        <a href=\"#\"> <i class=\"fab fa-facebook-square\"></i></a>\n        <a href=\"#\"><i class=\"fab fa-google-plus-g\"></i></a>\n    </div>\n    <div class=\"footer-copyright\">\n        <p>© 2018 AlbertoTG17 </p>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "header{\r\n    background-color: #09C6C6;\r\n    height: 90px;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div>\n   <h1>{{titulo}}</h1> \n  </div>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.titulo = 'PocaesiumModa';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n  <h1>Todos los productos</h1>\n</div>\n<br>\n<div class=\"row\">\n  <ng-container *ngFor=\"let p of productosObservable | async\" align=\"center\"> \n    <div class=\"card text-white bg-info mb-3\" style=\"width: 18rem;border: 1px black solid\">\n      <img class=\"card-img-top\" src=\"{{p.imagen}}\" alt=\"{{p.nombre}}\" widht=\"300px\" height=\"200px\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{p.nombre}}</h5>\n        <p class=\"card-text\">{{p.precio}}€</p>\n        <a [routerLink]=\"['/ProductoInfo', p.id]\" class=\"btn btn-light\">Más detalles</a>\n      </div>\n    </div> &nbsp;&nbsp;&nbsp;\n  </ng-container>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__producto_service__ = __webpack_require__("./src/app/producto.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(service) {
        this.service = service;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.productosObservable = this.getProductos();
    };
    HomeComponent.prototype.getProductos = function () {
        return this.service.getProductos();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__producto_service__["a" /* ProductoService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/insertar/insertar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/insertar/insertar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-registro></app-registro>\n\n<div style=\"width: 70%\" *ngIf=\"firebaseService.user | async\">\n\t\n\t<br/>\n\t<h2>Crear nuevo producto</h2>\n\t<br/>\n\t<form (ngSubmit)=\"onSubmit()\">\n\t\t\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"ciudad\">Nombre</label>\n\t\t\t<input class=\"form-control\" [(ngModel)]=\"producto.nombre\" name=\"nombre\" required/>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"descripcion\">Id</label>\n\t\t\t<input class=\"form-control\" [(ngModel)]=\"producto.id\" name=\"id\" required/>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"descripcion\">Genero (larga)</label>\n\t\t\t<input class=\"form-control\" [(ngModel)]=\"producto.genero\" name=\"genero\" required/>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"descripcion\">Categoria</label>\n\t\t\t<input class=\"form-control\" [(ngModel)]=\"producto.categoria\" name=\"categoria\" required/>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"descripcion\">Precio</label>\n\t\t\t<input class=\"form-control\" [(ngModel)]=\"producto.precio\" name=\"precio\" required/>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"precio\">Imagen</label>\n\t\t\t<input class=\"form-control\" [(ngModel)]=\"producto.imagen\" name=\"imagen\" value=\"../../assets/madrid.jpg\" required/>\n\t\t</div>\n\t\t<button type=\"submit\" class=\"btn btn-primary\">Enviar</button>\n\t</form>\n\n</div>\n\n<div style=\"text-align: center;\" [hidden]=\"!submitted\">\n\t\t<h4>Tu petición ha sido enviada correctamente</h4>\n\t\t<button class=\"btn btn-success\" (click)=\"nuevoContacto()\">Add</button>\n</div>\n"

/***/ }),

/***/ "./src/app/insertar/insertar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsertarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_service__ = __webpack_require__("./src/app/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__producto_service__ = __webpack_require__("./src/app/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_producto__ = __webpack_require__("./src/app/model/producto.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InsertarComponent = /** @class */ (function () {
    function InsertarComponent(productoService, firebaseService) {
        this.productoService = productoService;
        this.firebaseService = firebaseService;
        this.producto = new __WEBPACK_IMPORTED_MODULE_3__model_producto__["a" /* Producto */]();
        this.submitted = false;
    }
    //insertar nuevp tour
    InsertarComponent.prototype.nuevoTour = function () {
        this.submitted = false;
        this.producto = new __WEBPACK_IMPORTED_MODULE_3__model_producto__["a" /* Producto */]();
    };
    InsertarComponent.prototype.saveTour = function () {
        this.productoService.crearProducto(this.producto);
        this.producto = new __WEBPACK_IMPORTED_MODULE_3__model_producto__["a" /* Producto */]();
    };
    InsertarComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.saveTour();
    };
    InsertarComponent.prototype.ngOnInit = function () {
    };
    InsertarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-insertar',
            template: __webpack_require__("./src/app/insertar/insertar.component.html"),
            styles: [__webpack_require__("./src/app/insertar/insertar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_1__firebase_service__["a" /* FirebaseService */]])
    ], InsertarComponent);
    return InsertarComponent;
}());



/***/ }),

/***/ "./src/app/model/producto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Producto; });
var Producto = /** @class */ (function () {
    function Producto() {
    }
    return Producto;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "* {\r\n    font-size: 1.05em;\r\n    color: white !important;\r\n}\r\n\r\nli{\r\n    padding-left: 40px;\r\n    \r\n}\r\n\r\nnav{\r\n    background-color: #373a48 !important;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/insertar\">Insertar</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/carrito\">Carrito &nbsp;<i class=\"fas fa-shopping-cart\"></i></a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Categoria\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n          <a class=\"dropdown-item\" [routerLink] = \"['/Categoria', 'camisetas']\" style=\"color: black !important;\">Camisetas</a>\n          <a class=\"dropdown-item\" [routerLink] = \"['/Categoria', 'pantalones']\" style=\"color: black !important;\">Pantalones</a>\n          <a class=\"dropdown-item\" [routerLink] = \"['/Categoria', 'calzado']\" style=\"color: black !important;\">Zapas</a>         \n        </div>\n      </li>\n\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Genero\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n          <a class=\"dropdown-item\" [routerLink] = \"['/Genero', 'mujer']\" style=\"color: black !important;\">Mujer</a>\n          <a class=\"dropdown-item\" [routerLink] = \"['/Genero', 'hombre']\" style=\"color: black !important;\">Hombre</a>\n          <a class=\"dropdown-item\" [routerLink] = \"['/Genero', 'niño']\" style=\"color: black !important;\">Niño</a> \n          <a class=\"dropdown-item\" [routerLink] = \"['/Genero', 'unisex']\" style=\"color: black !important;\">Unisex</a>        \n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/producto.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductoService = /** @class */ (function () {
    function ProductoService(db) {
        this.db = db;
        this.productosPath = '/productos'; //bd --> table
        this.productosRef = null;
        this.productosRef = db.list(this.productosPath);
    }
    ProductoService.prototype.crearProducto = function (producto) {
        this.productosRef.push(producto);
    };
    ProductoService.prototype.getProductos = function () {
        return this.db.list(this.productosPath).valueChanges();
    };
    ProductoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ProductoService);
    return ProductoService;
}());



/***/ }),

/***/ "./src/app/registro/registro.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registro/registro.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"login\" class=\"form-container\" *ngIf=\"!(firebaseService.user | async)\">\n    <button (click)=\"loginGoogle()\" class=\"btn btn-dark btn-lg btn-block\"><i class=\"fab fa-google\"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login or Signup With Google</button>\n    <button (click)=\"loginTwitter()\" class=\"btn btn-dark btn-lg btn-block\"><i class=\"fab fa-twitter\"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login or Signup With Twitter</button>\n    <button (click)=\"loginGithub()\" class=\"btn btn-dark btn-lg btn-block\"><i class=\"fab fa-github\"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login or Signup With GitHub</button>\n    <!--<button (click)=\"loginEmail()\" class=\"btn btn-dark btn-lg btn-block\"><i class=\"far fa-envelope-open\"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login or Signup With E-mail</button>\n    <a routerLink=\"/signup\" routerLinkActive=\"active\" class=\"create-account-txt\">No account? <strong>Create one here</strong></a>\n    -->\n  </div>\n<div id=\"login\" class=\"form-container\" *ngIf=\"firebaseService.user | async\">\n  <button (click)=\"logout()\">Logout</button>\n</div>\n\n\n<!-- <br/>\n<h1 *ngIf=\"firebaseService.user | async\">Welcome {{ (firebaseService.user | async)?.email }}!</h1>\n<br/>\n\n<div *ngIf=\"!(firebaseService.user | async)\">\n    <p><b>Para insertar debes estar regitrado.</b></p>\n    <input type=\"text\" [(ngModel)]=\"email\" placeholder=\"email\"><br>\n    <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"pass\"><br>\n  \n    <button (click)=\"signup()\" [disabled]=\"!email || !password\">\n      Signup\n    </button>\n  \n    <button (click)=\"login()\" [disabled]=\"!email || !password\">\n      Login\n    </button>\n  </div>\n  <button (click)=\"logout()\" *ngIf=\"firebaseService.user | async\">\n      Logout\n  </button> -->"

/***/ }),

/***/ "./src/app/registro/registro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_service__ = __webpack_require__("./src/app/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(firebaseService, firebaseAuth) {
        this.firebaseService = firebaseService;
        this.user = firebaseAuth.authState;
    }
    RegistroComponent.prototype.loginGoogle = function () {
        this.firebaseService.googleLogin();
    };
    RegistroComponent.prototype.loginTwitter = function () {
        this.firebaseService.twitterLogin();
    };
    RegistroComponent.prototype.loginGithub = function () {
        this.firebaseService.githubLogin();
    };
    RegistroComponent.prototype.loginEmail = function (email, password) {
        this.firebaseService.login(email, password);
    };
    RegistroComponent.prototype.logout = function () {
        this.firebaseService.logout();
    };
    //Login y logout
    /*signup() {
      this.firebaseService.signup(this.email, this.password);
      this.email = this.password = '';
    }
    
    login() {
      this.firebaseService.login(this.email, this.password);
      this.email = this.password = '';
    }
    
    logout() {
      this.firebaseService.logout();
    }*/
    RegistroComponent.prototype.ngOnInit = function () {
    };
    RegistroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registro',
            template: __webpack_require__("./src/app/registro/registro.component.html"),
            styles: [__webpack_require__("./src/app/registro/registro.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], RegistroComponent);
    return RegistroComponent;
}());



/***/ }),

/***/ "./src/app/tour-info/tour-info.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tour-info/tour-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"print-section\">\n\n  <ng-container id=\"print-section\" *ngFor=\"let p of productosObservable | async\" style=\"padding: 2.5%\">\n\n    <div *ngIf=\"id == p.id\" align=\"center\">\n\n      <h1>{{p.nombre}}</h1>\n      <br>\n      <div>\n        <div class=\"row\">\n\n          <div class=\"col-4\">\n            <div>\n              <br>\n              <br>\n              <p align=\"left\">\n                <b>Descipcion:</b> {{p.nombre}}</p>\n              <p align=\"left\">\n                <b>Precio:</b> {{p.precio}}€</p>\n              <p align=\"left\">\n                <b>Categoria:</b> {{p.categoria}}</p>\n              <p align=\"left\">\n                <b>Género:</b> {{p.genero}}</p>\n              <p align=\"left\">\n                <b>\n                  <label>Unidades:</label>\n                </b>&nbsp;\n                <input type=\"number\" #unidades value=\"1\" size=\"3px\">\n              </p>\n            </div>\n\n          </div>\n          <div class=\"col-6\" align=\"center\" style=\"width: 60%; height: 40%;\">\n            <img src=\"{{p.imagen}}\" alt=\"{{p.nombre}}\" style=\"width: 50%; height: 50%; border-radius: 10px\">\n          </div>\n          <div class=\"col-2\">          \n          </div>\n\n        </div>\n\n      </div>\n\n      <div class=\"col-2\">\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-2\">\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"addCart(p, unidades)\">Añadir\n            <i class=\"fas fa-shopping-cart\"></i>\n          </button>\n        </div>\n        <div class=\"col-2\">\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"printPDF()\">PDF</button>\n        </div>\n        <div class=\"col-8\"></div>\n      </div> <br/>\n      <div class=\"row\">\n        \n        <span style=\"color: green\">{{mensaje}}</span>\n      </div>\n\n    </div>\n\n  </ng-container>\n\n</div>"

/***/ }),

/***/ "./src/app/tour-info/tour-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TourInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__producto_service__ = __webpack_require__("./src/app/producto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TourInfoComponent = /** @class */ (function () {
    function TourInfoComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.unidades = 1;
    }
    TourInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productosObservable = this.getProductos();
        this.mensaje = "";
        this.route.params //recupera el parametro id 
            .subscribe(function (params) {
            _this.id = params['id'].toString();
            console.log("id: " + _this.id);
        });
        this.carrito = JSON.parse(localStorage.getItem("carrito")) === null ? [] : JSON.parse(localStorage.getItem("carrito"));
    };
    TourInfoComponent.prototype.getProductos = function () {
        return this.service.getProductos();
    };
    TourInfoComponent.prototype.printPDF = function () {
        var printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("<body onload=\"window.print();window.close()\">" + printContents + "</body>");
        popupWin.document.close();
    };
    TourInfoComponent.prototype.addCart = function (producto, unid) {
        //si aun no hay nada en el carrito
        console.log("Entra por if");
        var p = producto;
        var unidades = unid.value;
        p.unidades = unidades; //lo coje como string !!!!
        this.carrito.push(p);
        //localStorage.setItem("carrito", JSON.stringify(this.listaProductosAñadidos));
        localStorage.setItem("carrito", JSON.stringify(this.carrito));
        this.mensaje = "Has añadido " + p.unidades + " unidad(es) de " + p.nombre;
    };
    TourInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tour-info',
            template: __webpack_require__("./src/app/tour-info/tour-info.component.html"),
            styles: [__webpack_require__("./src/app/tour-info/tour-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__producto_service__["a" /* ProductoService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], TourInfoComponent);
    return TourInfoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    config: {
        apiKey: "AIzaSyA1lDk_xjfLDWIwAMw-Y09WHsjWCAsqgZ0",
        authDomain: "angulartienda.firebaseapp.com",
        databaseURL: "https://angulartienda.firebaseio.com",
        projectId: "angulartienda",
        storageBucket: "angulartienda.appspot.com",
        messagingSenderId: "365271180987"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map