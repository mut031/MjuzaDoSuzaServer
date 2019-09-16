(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tv-tv-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tv/playlist-item/playlist-item.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tv/playlist-item/playlist-item.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item [attr.color]=\"result.isCurrent ? 'primary' : ''\" class=\"item\">\n  <ion-thumbnail (click)=\"playMe()\" class=\"ion-margin-end thumbnail\">\n    <img src=\"{{result.thumbnail}}\">\n  </ion-thumbnail>\n  <ion-label>\n    <h2 (click)=\"playMe()\" class=\"title\">{{result?.title}}</h2>\n    <p>{{result?.description}}</p>\n  </ion-label>\n  <ion-icon (click)=\"removeFromPlaylist()\" name=\"trash\" class=\"ion-margin-start trash\" color=\"danger\"></ion-icon>\n</ion-item>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tv/tv.page.html":
/*!***********************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tv/tv.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content *ngIf=\"currentSong\">\n  <ion-grid class=\"grid ion-padding\">\n    <ion-row>\n      <ion-col size=\"5\" class=\"col\">\n        <youtube-player [videoId]=\"currentSong.id\" (ready)=\"savePlayer($event)\" (change)=\"onStateChange($event)\"></youtube-player>\n      </ion-col>\n      <ion-col size=\"7\">\n        <ion-list>\n          <app-playlist-item *ngFor=\"let item of items\" [result]=\"item\" (updatePlaylist)=\"updatePlaylist()\" (playSong)=\"playSongOnClick($event[0])\">\n          </app-playlist-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tv/playlist-item/playlist-item.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/tv/playlist-item/playlist-item.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thumbnail {\n  cursor: pointer;\n}\n\n.title:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.trash:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZlZHJhbi9EZXNrdG9wL21qdXphL01qdXphRG9TdXphL3NyYy9hcHAvdHYvcGxheWxpc3QtaXRlbS9wbGF5bGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90di9wbGF5bGlzdC1pdGVtL3BsYXlsaXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSwwQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURDQTtFQUNJLGVBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3R2L3BsYXlsaXN0LWl0ZW0vcGxheWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aHVtYm5haWwge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50aXRsZTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udHJhc2g6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iLCIudGh1bWJuYWlsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGl0bGU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udHJhc2g6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/tv/playlist-item/playlist-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tv/playlist-item/playlist-item.component.ts ***!
  \*************************************************************/
/*! exports provided: PlaylistItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistItemComponent", function() { return PlaylistItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let PlaylistItemComponent = class PlaylistItemComponent {
    constructor(http) {
        this.http = http;
        this.updatePlaylist = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.playSong = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        console.log(this.result.id);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            body: this.result
        };
    }
    removeFromPlaylist() {
        console.log('deleting from playlist');
        this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_URL}/playlist`, this.httpOptions)
            .subscribe(data => {
            if (data)
                this.updatePlaylist.emit();
        });
    }
    playMe() {
        this.playSong.emit([this.result.id]);
    }
};
PlaylistItemComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PlaylistItemComponent.prototype, "result", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], PlaylistItemComponent.prototype, "updatePlaylist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], PlaylistItemComponent.prototype, "playSong", void 0);
PlaylistItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-playlist-item',
        template: __webpack_require__(/*! raw-loader!./playlist-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/tv/playlist-item/playlist-item.component.html"),
        styles: [__webpack_require__(/*! ./playlist-item.component.scss */ "./src/app/tv/playlist-item/playlist-item.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PlaylistItemComponent);



/***/ }),

/***/ "./src/app/tv/tv.module.ts":
/*!*********************************!*\
  !*** ./src/app/tv/tv.module.ts ***!
  \*********************************/
/*! exports provided: TvPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvPageModule", function() { return TvPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tv_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tv.page */ "./src/app/tv/tv.page.ts");
/* harmony import */ var _playlist_item_playlist_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./playlist-item/playlist-item.component */ "./src/app/tv/playlist-item/playlist-item.component.ts");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/fesm2015/ngx-youtube-player.js");









const routes = [
    {
        path: '',
        component: _tv_page__WEBPACK_IMPORTED_MODULE_6__["TvPage"]
    }
];
let TvPageModule = class TvPageModule {
};
TvPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ngx_youtube_player__WEBPACK_IMPORTED_MODULE_8__["NgxYoutubePlayerModule"]
        ],
        declarations: [_tv_page__WEBPACK_IMPORTED_MODULE_6__["TvPage"], _playlist_item_playlist_item_component__WEBPACK_IMPORTED_MODULE_7__["PlaylistItemComponent"]]
    })
], TvPageModule);



/***/ }),

/***/ "./src/app/tv/tv.page.scss":
/*!*********************************!*\
  !*** ./src/app/tv/tv.page.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R2L3R2LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tv/tv.page.ts":
/*!*******************************!*\
  !*** ./src/app/tv/tv.page.ts ***!
  \*******************************/
/*! exports provided: TvPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvPage", function() { return TvPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let TvPage = class TvPage {
    constructor(http) {
        this.http = http;
        this.items = [];
    }
    ngOnInit() {
        this.getPlaylist();
    }
    getPlaylist() {
        this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_URL}/playlist`)
            .subscribe((data) => {
            this.currentSong = data.filter((item, index) => {
                if (item.isCurrent) {
                    this.currentSongIndex = index;
                    return true;
                }
                return false;
            })[0];
            this.items = data;
        });
    }
    updatePlaylist() {
        this.getPlaylist();
    }
    onStateChange(event) {
        this.ytEvent = event.data;
        if (this.ytEvent === 0) {
            this.playNextSong();
        }
    }
    playNextSong() {
        this.currentSong = this.items[++this.currentSongIndex];
        this.items[this.currentSongIndex].isCurrent = true;
        this.items[this.currentSongIndex - 1].isCurrent = false;
        this.updateCurrentSong(this.items[this.currentSongIndex - 1].id);
        this.player.loadVideoById(this.currentSong.id);
    }
    playSongOnClick(id) {
        let oldId = this.items[this.currentSongIndex].id;
        this.items[this.currentSongIndex].isCurrent = false;
        this.currentSongIndex = this.items.findIndex(item => item.id === id);
        this.items[this.currentSongIndex].isCurrent = true;
        this.currentSong = this.items[this.currentSongIndex];
        this.updateCurrentSong(oldId);
        this.player.loadVideoById(id);
    }
    savePlayer(player) {
        this.player = player;
        this.playVideo();
    }
    updateCurrentSong(oldId) {
        this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_URL}/playlist`, { id: this.currentSong.id, isNew: true })
            .subscribe(data => console.log('put response', data));
        this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_URL}/playlist`, { id: oldId, isNew: false })
            .subscribe(data => console.log('put response', data));
    }
    playVideo() {
        this.player.playVideo();
    }
    pauseVideo() {
        this.player.pauseVideo();
    }
};
TvPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TvPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tv',
        template: __webpack_require__(/*! raw-loader!./tv.page.html */ "./node_modules/raw-loader/index.js!./src/app/tv/tv.page.html"),
        styles: [__webpack_require__(/*! ./tv.page.scss */ "./src/app/tv/tv.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], TvPage);



/***/ })

}]);
//# sourceMappingURL=tv-tv-module-es2015.js.map