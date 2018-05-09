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

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_page_home_page_component__ = __webpack_require__("./src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__yosemite_page_yosemite_page_component__ = __webpack_require__("./src/app/yosemite-page/yosemite-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_update_comment_form_update_comment_component__ = __webpack_require__("./src/app/form-update-comment/form-update-comment.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Set up routes.
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_page_home_page_component__["a" /* HomePageComponent */], data: { title: 'Home' } },
    { path: 'yosemite', component: __WEBPACK_IMPORTED_MODULE_3__yosemite_page_yosemite_page_component__["a" /* YosemitePageComponent */], data: { title: 'Yosemite' } },
    { path: 'yosemite/comment/:id', component: __WEBPACK_IMPORTED_MODULE_4__form_update_comment_form_update_comment_component__["a" /* EditCommentComponent */], data: { title: 'Yosemite' } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "/* general styling */\r\nheader, footer, main {\r\n\tcolor:rgba(200, 200, 200, 1);\r\n}\r\n/* layout */\r\n/* 'autoprefixer: off' removes Angular's warnings related to grid-templates-areas */\r\n@supports(display: grid){\r\n\t.wrapper{\r\n\t\tdisplay: grid;\r\n\t\t/* autoprefixer: off */\r\n\t\tgrid-template-areas: \"header\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t \"main\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t \"footer\";\r\n\t\tgrid-template-columns: minmax(100px, 1fr);\r\n\t\tgrid-template-rows: minmax(80px, max-content) 2fr minmax(80px, max-content);\r\n\t}\r\n\r\n\theader  {\r\n\t\t/* autoprefixer: off */\r\n\t\tgrid-area: header;\r\n\t}\r\n\tmain {\r\n\t\t/* autoprefixer: off */\r\n\t\tgrid-area: main;\r\n\t}\r\n\tfooter {\r\n\t\t/* autoprefixer: off */\r\n\t\tgrid-area: footer;\r\n\t}\r\n\r\n\t@media(min-width:768px){\r\n\t\t.wrapper{\r\n\t\t\t/* autoprefixer: off */\r\n\t\t\tgrid-template-areas: \"header header\"\r\n\t\t\t\t\t\t\t \t \t\t\t\t\t\t\"main main\"\r\n\t\t\t\t\t\t\t \t \t\t\t\t\t\t\"footer footer\";\r\n\t\t\tgrid-template-columns: repeat(2, 1fr);\r\n\t\t\tgrid-template-rows: minmax(80px, max-content) 2fr minmax(80px, max-content);\r\n\t\t}\r\n\t}\r\n\r\n\t@media(min-width:1200px){\r\n\t\t.wrapper{\r\n\t\t\t/* autoprefixer: off */\r\n\t\t\tgrid-template-areas: \"header header header\"\r\n\t\t\t\t\t\t\t \t \t\t\t\t\t\t\"main main main\"\r\n\t\t\t\t\t\t\t \t \t\t\t\t\t\t\"footer footer footer\";\r\n\t\t\tgrid-template-columns: repeat(3, 1fr);\r\n\t\t\tgrid-template-rows: minmax(80px, max-content) 2fr minmax(80px, max-content);\r\n\t\t}\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <header>\n    <app-navigation></app-navigation>\n  </header>\n\n  <main>\n    <router-outlet></router-outlet>\n  </main>\n\n  <footer></footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
// https://toddmotto.com/dynamic-page-titles-angular-2-router-events
// Most of the business logic here is for setting up a title for
// pages dynamically.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* NavigationEnd */]; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) { return _this.titleService.setTitle(event['title']); });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["d" /* Title */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__ = __webpack_require__("./src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_simple_slideshow__ = __webpack_require__("./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__form_update_comment_form_update_comment_component__ = __webpack_require__("./src/app/form-update-comment/form-update-comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__comment_comment_component__ = __webpack_require__("./src/app/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__form_create_comment_form_create_comment_component__ = __webpack_require__("./src/app/form-create-comment/form-create-comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__yosemite_page_yosemite_page_component__ = __webpack_require__("./src/app/yosemite-page/yosemite-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_page_home_page_component__ = __webpack_require__("./src/app/home-page/home-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// https://www.npmjs.com/package/ng-simple-slideshow






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__comment_comment_component__["a" /* CommentComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_10__form_create_comment_form_create_comment_component__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_11__yosemite_page_yosemite_page_component__["a" /* YosemitePageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__form_update_comment_form_update_comment_component__["a" /* EditCommentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng_simple_slideshow__["a" /* SlideshowModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comment/comment.component.css":
/***/ (function(module, exports) {

module.exports = "p {\r\n\tfont-family: \"Raleway\", Arial, Helvetica, sans-serif;\r\n\tfont-weight: normal;\r\n\tcolor:rgba(200, 200, 200, 1);\r\n\tfont-size: 1rem;\r\n}\r\n\r\n.separator{\r\n\tcolor:#c27f49;\r\n}\r\n\r\n.small-button, .link-button {\r\n\tfont-family: \"Raleway\", Arial, Helvetica, sans-serif;\r\n\tmargin-top: 0.5em;\r\n\tfont-size: 1em;\r\n\tbackground:rgba(15, 15, 15, 1);\r\n\tcolor:hsl(27, 50%, 52%);\r\n\tborder:1px solid hsl(27, 50%, 52%);\r\n\tborder-radius: 2px;\r\n\tpadding: 0.4em 0.7em;\r\n\tcursor:pointer;\r\n\t-webkit-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.small-button:hover,\r\n.small-button:active,\r\n.small-button:focus,\r\n.link-button:hover,\r\n.link-button:active,\r\n.link-button:focus{\r\n\tcolor:rgba(200, 200, 200, 1);\r\n\tborder-color: hsl(27, 50%, 52%);\r\n\tborder-color: hsl(27, 50%, 52%);\r\n\t-webkit-box-shadow:0 0 0.8em hsl(27, 50%, 52%);\r\n\t        box-shadow:0 0 0.8em hsl(27, 50%, 52%);\r\n  cursor: pointer;\r\n}\r\n\r\n.link-button{\r\n\ttext-decoration: none;\r\n\tpadding: 0.45em 1.2em;\r\n\tmargin-right:0.5em;\r\n}\r\n\r\n.date {\r\n\tfont-size: 0.8em;\r\n\tcolor:rgba(150, 150, 150, 1);\r\n\tfont-style: italic;\r\n}\r\n"

/***/ }),

/***/ "./src/app/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <p>{{comment.username}}</p>\n  <p>{{comment.usercomment}}</p>\n\n  <!-- date, which comes from DB can be formated with Angular DatePipe -->\n  <p class=\"date\">{{comment.createdAt | date:'fullDate'}}</p>\n\n  <a routerLink=\"comment/{{comment._id}}\" class=\"link-button\">Edit</a>\n  <button class=\"small-button\" title=\"delete-comment\"\n    (click)=\"deleteComment()\">Delete</button>\n\n  <p class=\"separator\">_________________________</p>\n</div>\n"

/***/ }),

/***/ "./src/app/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_comment_service__ = __webpack_require__("./src/app/providers/comment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentComponent = /** @class */ (function () {
    function CommentComponent(commentService) {
        this.commentService = commentService;
    }
    CommentComponent.prototype.ngOnInit = function () { };
    //
    // This method calls commentService to delete the comment.
    //
    CommentComponent.prototype.deleteComment = function () {
        this.commentService.deleteComment(this.comment._id)
            .subscribe(function (result) {
            location.reload(); //reload page after deletion
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "comment", void 0);
    CommentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comment',
            template: __webpack_require__("./src/app/comment/comment.component.html"),
            styles: [__webpack_require__("./src/app/comment/comment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_comment_service__["a" /* CommentService */]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/form-create-comment/form-create-comment.component.css":
/***/ (function(module, exports) {

module.exports = "form {\r\n\twidth: 30vw;\r\n\tmargin:0 0 4em 0;\r\n\tpadding:0;\r\n}\r\n\r\nfieldset {\r\n\tpadding: 1em;\r\n\tmargin:0;\r\n\tborder: 1px solid hsl(27, 50%, 52%);\r\n}\r\n\r\nlegend {\r\n\tfont-size: 1.5em;\r\n\tcolor: hsl(27, 50%, 52%);\r\n}\r\n\r\nlabel {\r\n\tfont-family: \"Roboto\", sans-serif;\r\n\tcolor:  hsl(27, 50%, 52%);\r\n\tdisplay: block;\r\n\tpadding: 0;\r\n\tmargin:0;\r\n\tfont-size: 1.2em;\r\n}\r\n\r\ninput, textarea {\r\n\tfont-family: \"Raleway\", Arial, Helvetica, sans-serif;\r\n\tdisplay: block;\r\n\tmargin-bottom: 1em;\r\n\twidth: 15em;\r\n\tborder-top:none;\r\n\tborder-left:none;\r\n\tborder-right:none;\r\n\tborder-bottom: 1px solid hsl(27, 50%, 52%);\r\n\tbackground-color: rgba(15, 15, 15, 1);\r\n\tcolor:rgba(200, 200, 200, 1);\r\n}\r\n\r\ninput + label{\r\n\tmargin-top: 1em;\r\n}\r\n\r\nbutton {\r\n\tmargin-top: 0.5em;\r\n\tfont-size: 1.2em;\r\n\tbackground:rgba(15, 15, 15, 1);\r\n\tcolor:hsl(27, 50%, 52%);\r\n\tborder:1px solid hsl(27, 50%, 52%);\r\n\tborder-radius: 2px;\r\n\tpadding: 0.6em 1.2em;\r\n\tcursor:pointer;\r\n\t-webkit-transition:all 0.3s ease;\r\n\ttransition:all 0.3s ease;\r\n}\r\n\r\nbutton:hover,\r\nbutton:active,\r\nbutton:focus {\r\n\tcolor:rgba(200, 200, 200, 1);\r\n\tborder-color: hsl(27, 50%, 52%);\r\n\tborder-color: hsl(27, 50%, 52%);\r\n\t-webkit-box-shadow:0 0 0.8em hsl(27, 50%, 52%);\r\n\t        box-shadow:0 0 0.8em hsl(27, 50%, 52%);\r\n  cursor: pointer;\r\n}\r\n\r\n.hint {\r\n\tmargin-bottom: 1em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/form-create-comment/form-create-comment.component.html":
/***/ (function(module, exports) {

module.exports = "<form #newCommentForm=\"ngForm\" (ngSubmit)=\"save(newCommentForm)\">\n  \t<fieldset>\n    \t  <legend>Post your comment</legend>\n\n        <!-- username field -->\n    \t\t<label for=\"name\">Name</label>\n    \t\t<input required minlength=\"2\" #usernameEl=\"ngModel\" type=\"text\" name=\"name\"\n               placeholder=\"enter your name\" [(ngModel)]=\"comment.username\">\n\n        <div *ngIf=\"usernameEl.invalid && (usernameEl.dirty || usernameEl.touched)\">\n         <span *ngIf=\"usernameEl.errors.minlength\" class=\"hint\">\n           Name must be at least 2 characters long.\n         </span>\n        </div>\n\n\n        <!-- usercomment field -->\n    \t\t<label for=\"comment\">Your comment</label>\n    \t\t<textarea required minlength=\"4\"  #usercommentEl=\"ngModel\" rows=\"4\" name=\"comment\"\n                  placeholder=\"enter your comment\" [(ngModel)]=\"comment.usercomment\"></textarea>\n\n        <div *ngIf=\"usercommentEl.invalid && (usercommentEl.dirty || usercommentEl.touched)\">\n         <span *ngIf=\"usercommentEl.errors.minlength\" class=\"hint\">\n           Comment must be at least 4 characters long.\n         </span>\n        </div>\n\n        <button type=\"submit\" [disabled]=\"!newCommentForm.valid\">Submit</button>\n  \t</fieldset>\n</form>\n"

/***/ }),

/***/ "./src/app/form-create-comment/form-create-comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_comment_service__ = __webpack_require__("./src/app/providers/comment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = /** @class */ (function () {
    function FormComponent(commentService) {
        this.commentService = commentService;
        // to update existing comment list
        this.newCommentEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.comment = {};
    }
    FormComponent.prototype.ngOnInit = function () { };
    //
    // This method calls commentService to save the comment.
    //
    FormComponent.prototype.save = function (newCommentForm) {
        var _this = this;
        this.commentService.addComment(this.comment)
            .subscribe(function (comment) {
            // emit to update existing list by the parent component
            _this.newCommentEvent.emit(); // after comment will be created.
            newCommentForm.reset(); // reset the form
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "newCommentEvent", void 0);
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-form',
            template: __webpack_require__("./src/app/form-create-comment/form-create-comment.component.html"),
            styles: [__webpack_require__("./src/app/form-create-comment/form-create-comment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_comment_service__["a" /* CommentService */]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/form-update-comment/form-update-comment.component.css":
/***/ (function(module, exports) {

module.exports = "form {\r\n\twidth: 30vw;\r\n\tmargin:0 0 4em 0;\r\n\tpadding:0;\r\n\tpadding-left: 3em;\r\n}\r\n\r\nfieldset {\r\n\tpadding: 1em;\r\n\tmargin:0;\r\n\tborder: 1px solid hsl(27, 50%, 52%);\r\n}\r\n\r\nlegend {\r\n\tfont-size: 1.5em;\r\n\tcolor: hsl(27, 50%, 52%);\r\n}\r\n\r\nlabel {\r\n\tfont-family: \"Roboto\", sans-serif;\r\n\tcolor:  hsl(27, 50%, 52%);\r\n\tdisplay: block;\r\n\tpadding: 0;\r\n\tmargin:0;\r\n\tfont-size: 1.2em;\r\n}\r\n\r\ninput, textarea {\r\n\tfont-family: \"Raleway\", Arial, Helvetica, sans-serif;\r\n\tdisplay: block;\r\n\tmargin-bottom: 1em;\r\n\twidth: 15em;\r\n\tborder-top:none;\r\n\tborder-left:none;\r\n\tborder-right:none;\r\n\tborder-bottom: 1px solid hsl(27, 50%, 52%);\r\n\tbackground-color: rgba(15, 15, 15, 1);\r\n\tcolor:rgba(200, 200, 200, 1);\r\n}\r\n\r\ninput + label{\r\n\tmargin-top: 1em;\r\n}\r\n\r\nbutton {\r\n\tmargin-top: 0.5em;\r\n\tfont-size: 1.2em;\r\n\tbackground:rgba(15, 15, 15, 1);\r\n\tcolor:hsl(27, 50%, 52%);\r\n\tborder:1px solid hsl(27, 50%, 52%);\r\n\tborder-radius: 2px;\r\n\tpadding: 0.6em 1.2em;\r\n\tcursor:pointer;\r\n\t-webkit-transition:all 0.3s ease;\r\n\ttransition:all 0.3s ease;\r\n}\r\n\r\nbutton:hover,\r\nbutton:active,\r\nbutton:focus {\r\n\tcolor:rgba(200, 200, 200, 1);\r\n\tborder-color: hsl(27, 50%, 52%);\r\n\tborder-color: hsl(27, 50%, 52%);\r\n\t-webkit-box-shadow:0 0 0.8em hsl(27, 50%, 52%);\r\n\t        box-shadow:0 0 0.8em hsl(27, 50%, 52%);\r\n  cursor: pointer;\r\n}\r\n\r\n.arrow-button {\r\n\tpadding-left: 3em;\r\n\tfont-family: \"Raleway\", Arial, Helvetica, sans-serif;\r\n\tmargin-top: 0.5em;\r\n\tfont-size: 1.3em;\r\n\tbackground:rgba(15, 15, 15, 1);\r\n\tcolor:hsl(27, 50%, 52%);\r\n\tpadding: 0.4em 0.7em;\r\n\tcursor:pointer;\r\n\t-webkit-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.hint {\r\n\tmargin-bottom: 1em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/form-update-comment/form-update-comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"comment\">\n\n\t<form #editCommentForm=\"ngForm\" (ngSubmit)=\"updateComment(editCommentForm.value)\">\n\t\t <fieldset>\n\t\t\t\t <legend>Post your comment</legend>\n\n\t\t\t\t <!-- username field -->\n\t\t\t\t <label for=\"name\">Name</label>\n\t\t\t\t <input required minlength=\"2\" #usernameEl=\"ngModel\" type=\"text\"  name=\"usernameField\"\n\t\t\t\t \t\t\t\tplaceholder=\"enter your name\" [ngModel]=\"comment.username\">\n\n\t\t\t\t\t<div *ngIf=\"usernameEl.invalid && (usernameEl.dirty || usernameEl.touched)\">\n\t\t\t\t\t <div *ngIf=\"usernameEl.errors.minlength\">\n\t\t\t\t\t\t Name must be at least 2 characters long.\n\t\t\t\t\t </div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<!-- usercomment field -->\n\t\t\t\t <label for=\"comment\" id=\"commentLabel\">Your comment</label>\n\t\t\t\t <textarea required minlength=\"4\"  #usercommentEl=\"ngModel\" rows=\"4\" name=\"usercommentField\"\n\t\t\t\t \t\t\t\t\tplaceholder=\"enter your comment\" [ngModel]=\"comment.usercomment\"></textarea>\n\n\t\t\t\t\t<div *ngIf=\"usercommentEl.invalid && (usercommentEl.dirty || usercommentEl.touched)\">\n\t\t\t\t\t <div *ngIf=\"usercommentEl.errors.minlength\">\n\t\t\t\t\t\t Comment must be at least 4 characters long.\n\t\t\t\t\t </div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<button type=\"submit\" [disabled]=\"!editCommentForm.valid\">Update</button>\n\t\t </fieldset>\n\t</form>\n\n\t<button (click)=\"goBack()\" class=\"arrow-button\">&lArr;</button>\n</div>\n"

/***/ }),

/***/ "./src/app/form-update-comment/form-update-comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_comment_service__ = __webpack_require__("./src/app/providers/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_comment_model__ = __webpack_require__("./src/models/comment.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditCommentComponent = /** @class */ (function () {
    function EditCommentComponent(route, commentService, location, router) {
        this.route = route;
        this.commentService = commentService;
        this.location = location;
        this.router = router;
    }
    // Perform initialization logic, when component is fully set up.
    EditCommentComponent.prototype.ngOnInit = function () {
        this.getComment();
    };
    //
    // This method passes user id as a parameter
    // to the commentService getComment() method.
    //
    EditCommentComponent.prototype.getComment = function () {
        var _this = this;
        var param = this.route.snapshot.paramMap.get('id');
        this.commentService.getComment(param)
            .subscribe(function (comment) {
            _this.comment = comment;
        });
    };
    //
    // This method creates a comment object from input fields,
    // and pass it as a parameter to commentService method
    // to update the comment.
    //
    EditCommentComponent.prototype.updateComment = function (obj) {
        var _this = this;
        var param = this.route.snapshot.paramMap.get('id');
        this.comment.username = obj.usernameField;
        this.comment.usercomment = obj.usercommentField;
        this.commentService.updateComment(param, this.comment)
            .subscribe(function (result) {
            _this.router.navigate(['/yosemite']); // Go to yosemite page.
        });
    };
    // Go to previous page.
    EditCommentComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__models_comment_model__["a" /* Comment */])
    ], EditCommentComponent.prototype, "comment", void 0);
    EditCommentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-comment',
            template: __webpack_require__("./src/app/form-update-comment/form-update-comment.component.html"),
            styles: [__webpack_require__("./src/app/form-update-comment/form-update-comment.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_comment_service__["a" /* CommentService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__providers_comment_service__["a" /* CommentService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], EditCommentComponent);
    return EditCommentComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/***/ (function(module, exports) {

module.exports = "/* general styling */\r\n\r\n.wrapper{\r\n\toverflow:hidden;\r\n\tcolor:rgba(200, 200, 200, 1);\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n\tfont-family: \"Roboto\", sans-serif;\r\n}\r\n\r\nh2 {\r\n\tfont-size: 1.3em;\r\n}\r\n\r\nimg {\r\n\t\twidth:100%;\r\n\t}\r\n\r\n.home-links img {\r\n  width: 100%;\r\n  max-width: 250px;\r\n}\r\n\r\n.home-links {\r\n  margin-top:2%;\r\n  text-align: center;\r\n}\r\n\r\n@media(min-width:768px){\r\n  .home-links img {\r\n    max-width: 300px;\r\n  }\r\n}\r\n\r\n@media(min-width:1200px){\r\n  .home-links img {\r\n    max-width: 300px;\r\n  }\r\n}\r\n\r\n/*image links transitions and transforms*/\r\n\r\n.home-links{\r\n\t-webkit-transition: all 100ms ease-out;\r\n\ttransition: all 100ms ease-out;\r\n\r\n}\r\n\r\n.home-links:hover {\r\n\t-webkit-transform: translateY(-1em) scale(1.05);\r\n\t        transform: translateY(-1em) scale(1.05);\r\n\t-webkit-filter: brightness(0.7);\r\n\t        filter: brightness(0.7);\r\n}\r\n\r\n/* layout */\r\n\r\n@supports((display: -ms-grid) or (display: grid)){\r\n\t.wrapper{\r\n\t\tdisplay: grid;\r\n\t\t/* autoprefixer: off */\r\n\t\tgrid-template-areas: \"header\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t \"main\";\r\n\t\tgrid-template-columns: minmax(100px, 1fr);\r\n\t\tgrid-template-rows: minmax(80px, max-content) 1fr;\r\n\t}\r\n\t.header  {grid-area: header;}\r\n\t.main    {grid-area: main;}\r\n\r\n\t@media(min-width:768px){\r\n\t\t.wrapper{\r\n\t\t\t/* autoprefixer: off */\r\n\t\t\tgrid-template-areas: \"header header\"\r\n\t\t\t\t\t\t\t \t \t\t\t\t\t\t\"main main\";\r\n\t\t\tgrid-template-columns: repeat(2, 1fr);\r\n\t\t\tgrid-template-rows: minmax(80px, max-content) 1fr;\r\n\t\t}\r\n    .main{\r\n      display:-ms-grid;\r\n      display:grid;\r\n      -ms-grid-columns: (1fr)[2];\r\n          grid-template-columns: repeat(2, 1fr);\r\n    }\r\n\t}\r\n\r\n\t@media(min-width:1200px){\r\n\t\t.wrapper{\r\n\t\t\t/* autoprefixer: off */\r\n\t\t\tgrid-template-areas: \"header header header\"\r\n\t\t\t\t\t\t\t \t \t\t\t\t\t\t\"main main main\";\r\n\t\t\tgrid-template-columns: repeat(3, 1fr);\r\n\t\t\tgrid-template-rows: minmax(80px, max-content) 1fr;\r\n\t\t}\r\n    .main{\r\n      display:-ms-grid;\r\n      display:grid;\r\n      -ms-grid-columns: (1fr)[3];\r\n          grid-template-columns: repeat(3, 1fr);\r\n    }\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n\t\t<!-- header -->\n\t\t<div class=\"header\">\n\t\t\t<img src=\"assets/img/header.jpg\" alt=\"silhouettes of people walking during sunset\" >\n\t\t</div>\n\n\t\t<!-- main content of the page -->\n\t\t<div  class=\"main\">\n\n\t\t\t<section class=\"home-links\">\n\t\t\t\t<a href=\"/yosemite\"><img src=\"assets/img/yosemite_2.jpg\" alt=\"\"></a>\n\t\t\t\t<h2>Yosemite</h2>\n\t\t\t</section>\n\n\t\t\t<section class=\"home-links\">\n\t\t\t\t<a href=\"#\"><img src=\"assets/img/arches_2.jpg\" alt=\"\"></a>\n\t\t\t\t<h2>Arches</h2>\n\t\t\t</section>\n\n\t\t\t<section class=\"home-links\">\n\t\t\t\t<a href=\"#\"><img src=\"assets/img/everglades_2.jpg\" alt=\"\"></a>\n\t\t\t\t<h2>Everglades</h2>\n\t\t\t</section>\n\t\t</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
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

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () { };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__("./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__("./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/***/ (function(module, exports) {

module.exports = "nav {\r\n\tpadding-left: 1em;\r\n\tfont-size: 1.3em;\r\n\tfont-weight: bold;\r\n\twidth: 80%;\r\n\tfloat: left;\r\n\tpadding-top: 1em;\r\n\tpadding-bottom: 1em;\r\n}\r\nnav ul {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tlist-style-type: none;\r\n\ttext-align: left;\r\n}\r\nnav li {\r\n\tdisplay: inline;\r\n\tpadding-right: 3em;\r\n}\r\nnav a {\r\n\tdisplay: inline-block;\r\n\ttext-decoration: none;\r\n\tfont-family: \"Raleway\", Arial, Helvetica, sans-serif;\r\n\tfont-size: 1.5rem;\r\n\tcolor:rgba(200, 200, 200, 1);\r\n  position: relative;\r\n\t-webkit-transition: all 0.4s;\r\n\ttransition: all 0.4s;\r\n}\r\nnav a:hover {\r\n\tcolor:hsl(27, 50%, 52%);\r\n\tcursor: pointer;\r\n}\r\nnav .active a{\r\n    color: hsl(27, 50%, 52%);\r\n}\r\n/*nav link transitions*/\r\nnav a:after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 0%;\r\n  border-bottom: 2px solid hsl(27, 50%, 52%);\r\n  -webkit-transition: all 0.4s;\r\n  transition: all 0.4s;\r\n}\r\nnav a:hover:after {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav role=\"navigation\">\n\t<ul>\n\t\t\n\t\t<!-- without [routerLinkActiveOptions]=\"{ exact: true }\" - base link \"/\" is always active -->\n\t\t<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\"><a routerLink=\"\" class = \"nav\">Home</a></li>\n\t\t<li [routerLinkActive]=\"['active']\"><a routerLink=\"yosemite\" class=\"nav\">Yosemite</a></li>\n\t</ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
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

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__("./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/providers/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__ = __webpack_require__("./src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
        this.commentsUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment_prod__["a" /* environment */].apiurl;
    }
    // CRUD methods
    // Create comment.
    CommentService.prototype.addComment = function (comment) {
        return this.http.post(this.commentsUrl + '/api/create', comment, httpOptions);
    };
    // Read all comments.
    CommentService.prototype.getComments = function () {
        return this.http.get(this.commentsUrl + '/api');
    };
    // Read one comment.
    CommentService.prototype.getComment = function (id) {
        return this.http.get(this.commentsUrl + '/api/' + id);
    };
    // Update comment.
    CommentService.prototype.updateComment = function (id, comment) {
        return this.http.put(this.commentsUrl + '/api/update/' + id, comment, httpOptions);
    };
    // Delete comment.
    CommentService.prototype.deleteComment = function (id) {
        return this.http.delete(this.commentsUrl + '/api/delete/' + id);
    };
    CommentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/yosemite-page/yosemite-page.component.css":
/***/ (function(module, exports) {

module.exports = "/* gallery component overwrittes */\r\n::ng-deep .slideshow-container {\r\n\tposition: absolute !important;\r\n\tz-index: -1;\r\n}\r\n/* general styling */\r\n.wrapper{\r\n\tposition:absolute;\r\n\tmargin-top: 90vh;\r\n\tpadding-left: 3em;\r\n\tcolor:rgba(200, 200, 200, 1);\r\n}\r\nh1, h2, h3, h4, h5, h6 {\r\n\tfont-family: \"Roboto\", sans-serif;\r\n}\r\np, blockquote {\r\n\tfont-family: \"Raleway\", Arial, Helvetica, sans-serif;\r\n\tfont-size: 1rem;\r\n\tcolor: rgba(200, 200, 200, 1);\r\n}\r\nh2 {\r\n\tfont-size: 1.3em;\r\n}\r\n*:focus {\r\n\toutline: none;\r\n    border-color: hsl(27, 50%, 52%);\r\n    -webkit-box-shadow: 0 0 3px hsl(27, 50%, 52%);\r\n            box-shadow: 0 0 3px hsl(27, 50%, 52%);\r\n}\r\n.comment-title{\r\n\tcolor:hsl(27, 50%, 52%);;\r\n}\r\nblockquote {\r\n\tmax-width: 60vw;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tmargin-bottom: 2em;\r\n}\r\nblockquote {\r\n\t      -webkit-column-width: 350px;\r\n\t              column-width: 350px;\r\n\t-webkit-column-gap: 30px;\r\n\t        column-gap: 30px;\r\n\t-webkit-column-rule: 1px solid hsl(27, 50%, 52%);\r\n\t        column-rule: 1px solid hsl(27, 50%, 52%);\r\n}\r\narticle h1 {\r\n\tcolor: hsl(27, 50%, 52%);\r\n\tfont-size: 1.5em;\r\n}\r\n/*link style*/\r\na[href*=\"https\"]{\r\n\tpadding-right: 20px;\r\n}\r\na:not([class=\"nav\"]):link,\r\na:not([class=\"nav\"]):focus{\r\n\ttext-decoration: none;\r\n\tcolor: hsl(27, 50%, 52%);\r\n}\r\na:not([class=\"nav\"]):visited{\r\n\ttext-decoration: none;\r\n\t-webkit-text-decoration-skip: ink;\r\n\t        text-decoration-skip: ink;\r\n\tcolor: hsl(27, 40%, 52%);\r\n}\r\na:not([class=\"nav\"]):hover,\r\na:not([class=\"nav\"]):active {\r\n\tcolor: hsl(27, 60%, 52%);\r\n\ttext-decoration: underline;\r\n}\r\n"

/***/ }),

/***/ "./src/app/yosemite-page/yosemite-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- https://www.npmjs.com/package/ng-simple-slideshow -->\n<slideshow\n      [imageUrls]=\"imageSources\"\n      [height]=\"'80%'\"\n      [autoPlay]=true\n      [showDots]=true\n      [dotColor]=\"'#000'\"\n      [showCaptions]=true >\n</slideshow>\n\n<div class=\"wrapper\">\n  <article>\n    <h1>Yosemite National Park</h1>\n    <blockquote cite=\"https://www.nps.gov/yose/index.htm\">\n        Yosemite National Park is in California’s Sierra Nevada mountains.\n        It’s famed for its giant, ancient sequoia trees, and for Tunnel View,\n        the iconic vista of towering Bridalveil Fall and the granite cliffs of\n        El Capitan and Half Dome. In Yosemite Village are shops, restaurants,\n        lodging, the Yosemite Museum and the Ansel Adams Gallery, with prints\n        of the photographer’s renowned black-and-white landscapes of the are.\n        <a href=\"https://www.nps.gov/yose/index.htm\">Yosemite NP website.</a>\n    </blockquote>\n  </article>\n\n    <!-- call method listComments() when newCommentEvent happened -->\n\t <app-form (newCommentEvent) = \"listComments()\"></app-form>\n\n    <div class=\"comments-wrapper\">\n      <h2 class=\"comment-title\">Comments</h2>\n\n      <!-- iterate over component -->\n      <app-comment\n        *ngFor='let comment of comments'\n        [comment]=comment\n        >\n      </app-comment>\n\t\t</div>\n\t</div>\n"

/***/ }),

/***/ "./src/app/yosemite-page/yosemite-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YosemitePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_comment_service__ = __webpack_require__("./src/app/providers/comment.service.ts");
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



var YosemitePageComponent = /** @class */ (function () {
    function YosemitePageComponent(commentService, route, router) {
        this.commentService = commentService;
        this.route = route;
        this.router = router;
        // Image sources for gallery component.
        this.imageSources = ['assets/img/yosemite/1.jpg',
            'assets/img/yosemite/2.jpg',
            'assets/img/yosemite/3.jpg'];
    }
    // Perform initialization logic, when component is fully set up.
    YosemitePageComponent.prototype.ngOnInit = function () {
        this.listComments();
    };
    //
    // This method calls commentService to list the comments.
    //
    YosemitePageComponent.prototype.listComments = function () {
        var _this = this;
        this.commentService.getComments().subscribe(function (comments) {
            _this.comments = comments;
        });
    };
    YosemitePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-yosemite-page',
            template: __webpack_require__("./src/app/yosemite-page/yosemite-page.component.html"),
            styles: [__webpack_require__("./src/app/yosemite-page/yosemite-page.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_comment_service__["a" /* CommentService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_comment_service__["a" /* CommentService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], YosemitePageComponent);
    return YosemitePageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiurl: 'http://localhost:8080'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiurl: 'http://localhost:8080'
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/models/comment.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
// Create Comment Class.
var Comment = /** @class */ (function () {
    function Comment(username, usercomment) {
        // properties
        this.username = '';
        this.usercomment = '';
        this.username = username;
        this.usercomment = usercomment;
    }
    return Comment;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map