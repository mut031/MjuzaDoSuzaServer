(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tv-tv-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tv/playlist-item/playlist-item.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tv/playlist-item/playlist-item.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item [attr.color]=\"result._id === currentId ? 'primary' : ''\" class=\"item\" [disabled]=\"result._id === currentId ? true : false\">\r\n  <ion-thumbnail (click)=\"playMe()\" class=\"ion-margin-end thumbnail\">\r\n    <img src=\"{{result.thumbnail}}\">\r\n  </ion-thumbnail>\r\n  <ion-label>\r\n    <h2 (click)=\"playMe()\" class=\"title\">{{result?.title}}</h2>\r\n    <p>{{result?.description}}</p>\r\n  </ion-label>\r\n  <ion-icon (click)=\"deleteMe()\" name=\"trash\" class=\"ion-margin-start trash\" color=\"danger\"></ion-icon>\r\n</ion-item>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tv/tv.page.html":
/*!***********************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tv/tv.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col offset=\"2\" class=\"align-items-center justify-content-center\" size=\"8\">\r\n\r\n        <ion-card>\r\n          <ion-card-header>\r\n\r\n            <h1>Room code: {{roomId | uppercase}}</h1>\r\n            <ion-item  lines=\"none\">\r\n                <ion-label>Show video player</ion-label>\r\n                <ion-toggle slot=\"start\"  [(ngModel)]=\"showPlayer\"  name=\"blueberry\" checked></ion-toggle>\r\n              </ion-item>\r\n          </ion-card-header>\r\n          <ion-card-content class=\"ion-text-center\" *ngIf=\"currentSong\">\r\n            <youtube-player width=\"70%\" [hidden]=\"!showPlayer\" [videoId]=\"currentSong._id\" (ready)=\"savePlayer($event)\"\r\n              (change)=\"onStateChange($event)\">\r\n            </youtube-player>\r\n            <ion-list>\r\n              <app-playlist-item *ngFor=\"let item of items\" [result]=\"item\" [currentId]=\"currentSong._id\"\r\n                (playSong)=\"playNextSong($event[0])\" (deleteSong)=\"removeSongFromPlaylist($event[0])\">\r\n              </app-playlist-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/tv/playlist-item/playlist-item.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/tv/playlist-item/playlist-item.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thumbnail {\n  cursor: pointer;\n}\n\n.title:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.trash:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHYvcGxheWxpc3QtaXRlbS9DOlxcSW9uaWNcXE1qdXphRG9TdXphL3NyY1xcYXBwXFx0dlxccGxheWxpc3QtaXRlbVxccGxheWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHYvcGxheWxpc3QtaXRlbS9wbGF5bGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQ0E7RUFDSSxlQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC90di9wbGF5bGlzdC1pdGVtL3BsYXlsaXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGh1bWJuYWlsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udGl0bGU6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50cmFzaDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCIudGh1bWJuYWlsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGl0bGU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udHJhc2g6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlaylistItemComponent = /** @class */ (function () {
    function PlaylistItemComponent() {
        this.playSong = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteSong = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PlaylistItemComponent.prototype.ngOnInit = function () { };
    PlaylistItemComponent.prototype.deleteMe = function () {
        if (this.currentId !== this.result._id)
            this.deleteSong.emit([this.result]);
    };
    PlaylistItemComponent.prototype.playMe = function () {
        if (this.currentId !== this.result._id)
            this.playSong.emit([this.result._id]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlaylistItemComponent.prototype, "result", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PlaylistItemComponent.prototype, "currentId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PlaylistItemComponent.prototype, "playSong", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PlaylistItemComponent.prototype, "deleteSong", void 0);
    PlaylistItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-playlist-item',
            template: __webpack_require__(/*! raw-loader!./playlist-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/tv/playlist-item/playlist-item.component.html"),
            styles: [__webpack_require__(/*! ./playlist-item.component.scss */ "./src/app/tv/playlist-item/playlist-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlaylistItemComponent);
    return PlaylistItemComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tv_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tv.page */ "./src/app/tv/tv.page.ts");
/* harmony import */ var _playlist_item_playlist_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./playlist-item/playlist-item.component */ "./src/app/tv/playlist-item/playlist-item.component.ts");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/fesm5/ngx-youtube-player.js");









var routes = [
    {
        path: '',
        component: _tv_page__WEBPACK_IMPORTED_MODULE_6__["TvPage"]
    }
];
var TvPageModule = /** @class */ (function () {
    function TvPageModule() {
    }
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
    return TvPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");









var TvPage = /** @class */ (function () {
    function TvPage(ds, http, socket, route, router, toastController) {
        this.ds = ds;
        this.http = http;
        this.socket = socket;
        this.route = route;
        this.router = router;
        this.toastController = toastController;
        this.items = [];
        this.showPlayer = true;
    }
    TvPage.prototype.ngOnInit = function () {
        var _this = this;
        this.roomId = this.route.snapshot.paramMap.get('id');
        if (!this.roomId) {
            this.router.navigate(['/home']);
        }
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_URL + "/playlists")
            .subscribe(function (data) {
            if (!data.filter(function (item) { return item.title === _this.roomId; }).length)
                _this.router.navigate(['/home']);
        });
        this.getRoomAdmin();
        this.socket.connect();
        this.socket.emit('createRoom', { roomId: this.roomId });
        this.socket.fromEvent('update').subscribe(function () {
            _this.getPlaylistForRoom();
        });
        this.getPlaylistForRoom();
    };
    TvPage.prototype.getRoomAdmin = function () {
        var _this = this;
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_URL + "/playlists/" + this.roomId)
            .subscribe(function (data) {
            if (data && data.user.length > 0 && data.user !== localStorage.getItem('username')) {
                _this.router.navigate(['/home']);
            }
        });
    };
    TvPage.prototype.getPlaylistForRoom = function () {
        var _this = this;
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_URL + "/songs/" + this.roomId)
            .subscribe(function (data) {
            _this.items = data;
            _this.currentSong = _this.items.filter(function (item) { return item.playlists.find(function (item) { return item.roomId === _this.roomId && item.isCurrent; }); })[0];
            _this.currentSongIndex = _this.items.indexOf(_this.currentSong);
        });
    };
    TvPage.prototype.onStateChange = function (event) {
        this.ytEvent = event.data;
        if (this.ytEvent === 0) {
            this.playNextSong(this.items[this.currentSongIndex + 1] ? this.items[this.currentSongIndex + 1]._id : this.items[0]._id);
        }
    };
    TvPage.prototype.removeSongFromPlaylist = function (song) {
        var _this = this;
        if (song._id !== this.currentSong._id) {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                }),
                body: { roomId: this.roomId, song: song }
            };
            this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_URL + "/song", httpOptions)
                .subscribe(function (data) { return _this.presentToastWithOptions(data); });
        }
    };
    TvPage.prototype.playNextSong = function (newSongId) {
        if (newSongId !== this.currentSong._id) {
            this.updateCurrentSong(newSongId);
            this.player.loadVideoById(newSongId);
        }
    };
    TvPage.prototype.updateCurrentSong = function (newId) {
        var _this = this;
        var songs = this.items.filter(function (item) { return item._id === newId || item._id === _this.currentSong._id; })
            .map(function (item) {
            var index = item.playlists.findIndex(function (item) { return item.roomId === _this.roomId; });
            item.playlists[index].isCurrent = !item.playlists[index].isCurrent;
            return item;
        });
        this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_URL + "/song", { songs: songs, roomId: this.roomId })
            .subscribe(function (data) { return _this.presentToastWithOptions(data); });
    };
    TvPage.prototype.savePlayer = function (player) {
        this.player = player;
        this.playVideo();
    };
    TvPage.prototype.playVideo = function () {
        this.player.playVideo();
    };
    TvPage.prototype.pauseVideo = function () {
        this.player.pauseVideo();
    };
    TvPage.prototype.presentToastWithOptions = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
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
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    TvPage.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
    ]; };
    TvPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tv',
            template: __webpack_require__(/*! raw-loader!./tv.page.html */ "./node_modules/raw-loader/index.js!./src/app/tv/tv.page.html"),
            styles: [__webpack_require__(/*! ./tv.page.scss */ "./src/app/tv/tv.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
    ], TvPage);
    return TvPage;
}());



/***/ })

}]);
//# sourceMappingURL=tv-tv-module-es5.js.map