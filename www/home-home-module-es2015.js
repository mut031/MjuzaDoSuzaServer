(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar *ngIf=\"!user\">\r\n        <ion-buttons slot=\"end\">\r\n            <ion-item class=\"user-input\">\r\n                <ion-input type=\"text\" id=\"username\" [(ngModel)]=\"username\" placeholder=\"Username\">\r\n                </ion-input>\r\n            </ion-item>\r\n            <ion-item class=\"user-input\">\r\n                <ion-input type=\"password\" id=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\">\r\n                </ion-input>\r\n            </ion-item>\r\n            <ion-button id=\"loginBtn\" shape=\"round\" (click)=\"login()\">\r\n                Login\r\n            </ion-button>\r\n            <ion-button id=\"registerBtn\" shape=\"round\" (click)=\"register()\">\r\n                Register\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n    <ion-toolbar *ngIf=\"user\">\r\n        <ion-item lines=\"none\">\r\n        <ion-thumbnail class=\"ion-margin-end\">\r\n            <img src=\"../../assets/icons/profile-icon.png\">\r\n        </ion-thumbnail>\r\n        <h5>Hello, {{user}}!</h5>\r\n    </ion-item>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button id=\"logoutBtn\" shape=\"round\" (click)=\"logout()\">\r\n                Logout\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-text-center ion-padding content\">\r\n    <h1 class=\"title\">Mjuza Do Suza</h1>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col offset=\"3\" size=\"3\">\r\n                <ion-card>\r\n                    <ion-card-header>\r\n                        <ion-icon color=\"primary\" name=\"musical-notes\"></ion-icon>\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                        <ion-button id=\"createBtn\" shape=\"round\" (click)=\"createRoom()\">\r\n                            Create room\r\n                        </ion-button>\r\n                    </ion-card-content>\r\n                </ion-card>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n                <ion-card>\r\n                    <ion-card-header>\r\n                        <ion-icon color=\"primary\" name=\"headset\"></ion-icon>\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                        <ion-button id=\"joinBtn\" shape=\"round\" (click)=\"joinRoom()\">\r\n                            JOIN ROOM\r\n                        </ion-button>\r\n                        <ion-item class=\"room-input\">\r\n                            <ion-input type=\"text\" id=\"roomInput\" [(ngModel)]=\"joinRoomId\" (ngModelChange)=\"joinRoomId = $event.toLocaleUpperCase()\" placeholder=\"Enter room ID\">\r\n                            </ion-input>\r\n                        </ion-item>\r\n                        <!-- <ion-icon color=\"primary\" name=\"qr-scanner\"></ion-icon> -->\r\n                    </ion-card-content>\r\n                </ion-card>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Girassol|Indie+Flower&display=swap\");\nion-card {\n  min-height: 100%;\n}\nion-icon {\n  font-size: 64px;\n}\nion-input {\n  text-align: center;\n  --border-color: black;\n}\n.room-input {\n  margin-top: 15px;\n  --border-style: solid;\n  --border-width: 1px;\n}\n.user-input {\n  margin-right: 10px;\n}\n.title {\n  font-family: \"Indie Flower\", sans-serif;\n  font-size: 64px;\n}\nspan {\n  font-family: sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcSW9uaWNcXE1qdXphRG9TdXphL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ1EseUZBQUE7QUFqQ1I7RUFDSSxnQkFBQTtBQ0ZKO0FES0E7RUFDSSxlQUFBO0FDRko7QURNQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUNISjtBRE1BO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDSEo7QURNQTtFQUNJLGtCQUFBO0FDSEo7QURnQkE7RUFDRSx1Q0FBQTtFQUNBLGVBQUE7QUNiRjtBRGVBO0VBQ0UsdUJBQUE7QUNaRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKCdodHRwczovL2ltZy5mcmVlcGlrLmNvbS92cmlqZS1waG90by9hYnN0cmFjdC1pbmtibG90XzExMTItODE2LmpwZz9zaXplPTYyNiZleHQ9anBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjsgICAgXHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNjRweDtcclxufVxyXG5cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5yb29tLWlucHV0IHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG59XHJcblxyXG4udXNlci1pbnB1dCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi8vIGJvZHkge1xyXG4vLyAgIGZvbnQtZmFtaWx5OiAnQ3VzdG9tJywgRmFsbGJhY2ssIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gQGZvbnQtZmFjZSB7XHJcbi8vICAgICBmb250LWZhbWlseTogJ0N1c3RvbSc7XHJcbi8vICAgICBzcmM6IHVybCgnL2Fzc2V0cy9mb250L0dyaW5jaGVkUmVndWxhci5vdGYnKSBmb3JtYXQoJ29wZW50eXBlJyk7XHJcbi8vIH1cclxuXHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUdpcmFzc29sfEluZGllK0Zsb3dlciZkaXNwbGF5PXN3YXBcIik7XHJcbi50aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogNjRweDtcclxufVxyXG5zcGFuIHtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUdpcmFzc29sfEluZGllK0Zsb3dlciZkaXNwbGF5PXN3YXBcIik7XG5pb24tY2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA2NHB4O1xufVxuXG5pb24taW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuLnJvb20taW5wdXQge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG59XG5cbi51c2VyLWlucHV0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogXCJJbmRpZSBGbG93ZXJcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA2NHB4O1xufVxuXG5zcGFuIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");








let HomePage = class HomePage {
    constructor(socket, router, http, toastController, ds) {
        this.socket = socket;
        this.router = router;
        this.http = http;
        this.toastController = toastController;
        this.ds = ds;
        this.username = "";
        this.password = "";
        this.user = "";
    }
    ngOnInit() {
        this.socket.connect();
        this.user = localStorage.getItem('username');
    }
    logout() {
        this.user = "";
        localStorage.removeItem('username');
        this.ds.setUsername("");
    }
    register() {
        if (!this.username || !this.password) {
            this.presentToastWithOptions({ message: "Username and password required.", status: "danger" });
            return;
        }
        this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SERVER_URL}/user`, { user: { username: this.username, password: this.password } }).subscribe((data) => {
            if (data.status !== 'danger') {
                this.ds.setIsLogged(true);
                this.ds.setUsername(this.username);
                localStorage.setItem('username', this.username);
                this.user = this.username;
                this.username = "";
                this.password = "";
                this.presentToastWithOptions(data);
            }
            else
                this.presentToastWithOptions({ message: "Username already taken.", status: "danger" });
        });
    }
    login() {
        if (!this.username || !this.password) {
            this.presentToastWithOptions({ message: "Username and password required.", status: "danger" });
            return;
        }
        this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SERVER_URL}/user/${this.username}`)
            .subscribe((data) => {
            if (data) {
                if (data.password === this.password) {
                    this.ds.setIsLogged(true);
                    this.ds.setUsername(this.username);
                    localStorage.setItem('username', this.username);
                    this.user = this.username;
                    this.username = "";
                    this.password = "";
                    return;
                }
            }
            this.presentToastWithOptions({ message: "Username doesn't exist.", status: "danger" });
        });
    }
    createRoom() {
        let roomId = this.makeid(5);
        this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SERVER_URL}/playlist`, { item: { title: roomId, description: 'test description', user: this.ds.getUsername() } })
            .subscribe(data => {
            if (data) {
                this.presentToastWithOptions(data);
                this.router.navigate(['/tv', { id: roomId }]);
            }
        });
    }
    joinRoom() {
        if (this.joinRoomId) {
            this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SERVER_URL}/playlists`)
                .subscribe((data) => {
                console.log(data);
                if (data.filter(item => item.title === this.joinRoomId).length)
                    this.router.navigate(['/user', { id: this.joinRoomId }]);
            });
        }
    }
    makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXZY0123456789';
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
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
};
HomePage.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map