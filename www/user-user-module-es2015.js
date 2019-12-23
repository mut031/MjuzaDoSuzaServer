(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/user/search-result/search-result.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/search-result/search-result.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item (click)=\"addToPlaylist()\" class=\"item\">\r\n  <ion-thumbnail class=\"ion-margin-end\">\r\n    <img src=\"{{result.thumbnail}}\">\r\n  </ion-thumbnail>\r\n  <ion-label class=\"ion-text-wrap\">\r\n    <h3>{{result?.title}}</h3>\r\n    <p>{{result?.description}}</p>\r\n    <p>{{result?.duration}}</p>\r\n  </ion-label>\r\n  <ion-spinner *ngIf=\"isAdding\" color=\"primary\" class=\"ion-margin\"></ion-spinner>\r\n</ion-item>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding\" *ngIf=\"!isSearching\">\r\n  <ion-searchbar id=\"search\" [(ngModel)]=\"query\" (change)=\"onSearch($event)\"></ion-searchbar>\r\n  <ion-list>\r\n    <app-search-result *ngFor=\"let item of items\" [result]=\"item\"></app-search-result>\r\n  </ion-list>\r\n\r\n  <ion-content *ngIf=\"!items.length && !firstSearch\" class=\"ion-text-center\">\r\n    <ion-icon name=\"outlet\" class=\"outlet\" color=\"danger\"></ion-icon>\r\n    <ion-text color=\"medium\">\r\n      <h1>Oh snap!</h1>\r\n      <p>No results found for \"{{query}}\"</p>\r\n    </ion-text>\r\n  </ion-content>\r\n\r\n  <ion-content *ngIf=\"firstSearch\" class=\"ion-text-center\">\r\n    <ion-icon name=\"musical-notes\" class=\"notes\" color=\"primary\"></ion-icon>\r\n    <ion-text color=\"medium\">\r\n      <h1>Mjuza Do Suza</h1>\r\n      <p>Search and add songs to playlist</p>\r\n    </ion-text>\r\n  </ion-content>\r\n\r\n</ion-content>\r\n<ion-spinner id=\"spinner\" color=\"primary\" *ngIf=\"isSearching\"></ion-spinner>"

/***/ }),

/***/ "./src/app/user/search-result/search-result.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/user/search-result/search-result.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zZWFyY2gtcmVzdWx0L0M6XFxJb25pY1xcTWp1emFEb1N1emEvc3JjXFxhcHBcXHVzZXJcXHNlYXJjaC1yZXN1bHRcXHNlYXJjaC1yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdXNlci9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvLyAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcclxufSIsIi5pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/search-result/search-result.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/search-result/search-result.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function() { return SearchResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let SearchResultComponent = class SearchResultComponent {
    constructor(http, toastController) {
        this.http = http;
        this.toastController = toastController;
        this.isAdding = false;
    }
    ngOnInit() { }
    presentToastWithOptions(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: data["message"],
                position: 'bottom',
                duration: 2000,
                color: data["status"],
                buttons: [
                    {
                        side: 'start',
                        icon: 'musical-notes',
                    },
                    {
                        icon: 'close',
                        role: 'cancel'
                    }
                ]
            });
            toast.present();
        });
    }
    addToPlaylist() {
        this.isAdding = true;
        this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_URL}/song`, { item: this.result })
            .subscribe((data) => {
            setTimeout(() => {
                this.presentToastWithOptions(data);
                this.isAdding = false;
            }, 1100);
        });
    }
};
SearchResultComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SearchResultComponent.prototype, "result", void 0);
SearchResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-result',
        template: __webpack_require__(/*! raw-loader!./search-result.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/search-result/search-result.component.html"),
        styles: [__webpack_require__(/*! ./search-result.component.scss */ "./src/app/user/search-result/search-result.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], SearchResultComponent);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.page */ "./src/app/user/user.page.ts");
/* harmony import */ var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-result/search-result.component */ "./src/app/user/search-result/search-result.component.ts");








const routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]
    }
];
let UserPageModule = class UserPageModule {
};
UserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"], _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_7__["SearchResultComponent"]]
    })
], UserPageModule);



/***/ }),

/***/ "./src/app/user/user.page.scss":
/*!*************************************!*\
  !*** ./src/app/user/user.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#spinner {\n  display: block;\n  margin: auto;\n}\n\n.outlet, .notes {\n  zoom: 5;\n  margin: 10px auto 0;\n  display: block;\n}\n\n#search {\n  --icon-color: #3880ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9DOlxcSW9uaWNcXE1qdXphRG9TdXphL3NyY1xcYXBwXFx1c2VyXFx1c2VyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdXNlci91c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzcGlubmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ub3V0bGV0LCAubm90ZXMge1xyXG4gICAgem9vbTogNTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvIDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI3NlYXJjaCB7XHJcbiAgICAtLWljb24tY29sb3I6ICMzODgwZmY7XHJcbn0iLCIjc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5vdXRsZXQsIC5ub3RlcyB7XG4gIHpvb206IDU7XG4gIG1hcmdpbjogMTBweCBhdXRvIDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jc2VhcmNoIHtcbiAgLS1pY29uLWNvbG9yOiAjMzg4MGZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/user.page.ts":
/*!***********************************!*\
  !*** ./src/app/user/user.page.ts ***!
  \***********************************/
/*! exports provided: UserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPage", function() { return UserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UserPage = class UserPage {
    constructor(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.items = [];
        this.isSearching = false;
        this.firstSearch = true;
    }
    ngOnInit() {
        this.roomId = this.route.snapshot.paramMap.get('id');
        if (!this.roomId) {
            this.router.navigate(['/home']);
        }
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_URL}/playlists`)
            .subscribe((data) => {
            if (!data.filter(item => item.title === this.roomId).length)
                this.router.navigate(['/home']);
        });
    }
    apiUrl(query) {
        let q = query.replace(' ', '%20');
        return `/search?q=${q}`;
        // return `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${q}&key=${environment.YOUTUBE_API_KEY}`;
    }
    // getPlaylistForRoom() {
    //   this.http.get(`${environment.SERVER_URL}/songs/${this.roomId}`)
    //     .subscribe((data: Array<Item>) => {
    //       this.items = data;
    //       this.currentSong = this.items[0];
    //       this.currentSongIndex = 0;
    //     });
    // }
    onSearch(e) {
        this.firstSearch = false;
        this.query = e.target.value;
        this.isSearching = true;
        this.http.get(this.apiUrl(e.target.value))
            .subscribe(data => {
            this.filterResults(data);
            this.isSearching = false;
        });
    }
    filterResults(data) {
        this.items = data.results
            .filter(item => item.video.duration !== 'Playlist')
            .map(item => {
            return {
                _id: item.video.id,
                title: item.video.title,
                description: item.uploader.username,
                thumbnail: item.video.thumbnail_src,
                duration: item.video.duration,
                playlists: [{ roomId: this.roomId }]
            };
        });
    }
};
UserPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(/*! raw-loader!./user.page.html */ "./node_modules/raw-loader/index.js!./src/app/user/user.page.html"),
        styles: [__webpack_require__(/*! ./user.page.scss */ "./src/app/user/user.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], UserPage);



/***/ })

}]);
//# sourceMappingURL=user-user-module-es2015.js.map