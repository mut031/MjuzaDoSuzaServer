(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{L6id:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),e=function(){return function(){}}(),o=u("pMnS"),s=u("oBZk"),i=u("ZZ/e"),r=u("Ip0R"),a=u("gIcY"),b=u("mrSG"),c=u("AytR"),d=u("EnSQ"),p=function(){function n(n,l,u,t){this.toastController=n,this.http=l,this.ds=u,this.modalController=t,this.username="",this.password="",this.user=""}return n.prototype.ngOnInit=function(){console.log(this.modalName)},n.prototype.register=function(){var n=this;this.username&&this.password?this.http.post(c.a.SERVER_URL+"/user",{user:{username:this.username,password:this.password}}).subscribe((function(l){"danger"!==l.status?(n.ds.setIsLogged(!0),n.ds.setUsername(n.username),localStorage.setItem("username",n.username),n.user=n.username,n.username="",n.password="",n.presentToastWithOptions(l),n.modalController.dismiss()):n.presentToastWithOptions({message:"Username already taken.",status:"danger"})})):this.presentToastWithOptions({message:"Username and password required.",status:"danger"})},n.prototype.login=function(){var n=this;this.username&&this.password?this.http.get(c.a.SERVER_URL+"/user/"+this.username).subscribe((function(l){if(l&&l.password===n.password)return n.ds.setIsLogged(!0),n.ds.setUsername(n.username),localStorage.setItem("username",n.username),n.user=n.username,n.username="",n.password="",void n.modalController.dismiss();n.presentToastWithOptions({message:"Username doesn't exist.",status:"danger"})})):this.presentToastWithOptions({message:"Username and password required.",status:"danger"})},n.prototype.presentToastWithOptions=function(n){return b.b(this,void 0,void 0,(function(){return b.e(this,(function(l){switch(l.label){case 0:return[4,this.toastController.create({message:n.message,position:"bottom",duration:2e3,color:n.status,buttons:[{side:"start",icon:"musical-notes"},{icon:"close",role:"cancel"}]})];case 1:return l.sent().present(),[2]}}))}))},n}(),h=function(){function n(n,l,u,t,e,o){this.socket=n,this.router=l,this.http=u,this.toastController=t,this.ds=e,this.modalController=o,this.user=""}return n.prototype.ngOnInit=function(){var n=this;this.socket.connect(),this.sub=this.ds._username.subscribe((function(l){n.user=l}))},n.prototype.logout=function(){this.user="",localStorage.removeItem("username"),this.ds.setUsername("")},n.prototype.createRoom=function(){var n=this,l=this.makeid(5);this.http.post(c.a.SERVER_URL+"/playlist",{item:{title:l,description:"test description",user:this.ds.getUsername()}}).subscribe((function(u){u&&(n.presentToastWithOptions(u),n.router.navigate(["/tv",{id:l}]))}))},n.prototype.joinRoom=function(){var n=this;this.joinRoomId&&this.http.get(c.a.SERVER_URL+"/playlists").subscribe((function(l){console.log(l),l.filter((function(l){return l.title===n.joinRoomId})).length&&n.router.navigate(["/user",{id:n.joinRoomId}])}))},n.prototype.makeid=function(n){for(var l="",u="ABCDEFGHIJKLMNOPQRSTUVWXZY0123456789",t=0;t<n;t++)l+=u.charAt(Math.floor(Math.random()*u.length));return l},n.prototype.presentToastWithOptions=function(n){return b.b(this,void 0,void 0,(function(){return b.e(this,(function(l){switch(l.label){case 0:return[4,this.toastController.create({message:n.message,position:"bottom",duration:2e3,color:n.status,buttons:[{side:"start",icon:"musical-notes"},{icon:"close",role:"cancel"}]})];case 1:return l.sent().present(),[2]}}))}))},n.prototype.presentModal=function(n){return b.b(this,void 0,void 0,(function(){return b.e(this,(function(l){switch(l.label){case 0:return[4,this.modalController.create({component:p,componentProps:{modalName:n}})];case 1:return[4,l.sent().present()];case 2:return[2,l.sent()]}}))}))},n.prototype.ngOnDestroy=function(){this.sub&&this.sub.unsubscribe()},n}(),g=u("92vz"),m=u("ZYCi"),f=u("t/Na"),k=t.rb({encapsulation:0,styles:[['@import url(https://fonts.googleapis.com/css?family=Girassol|Indie+Flower&display=swap);ion-card[_ngcontent-%COMP%]{min-height:100%}ion-icon[_ngcontent-%COMP%]{font-size:64px}ion-input[_ngcontent-%COMP%]{text-align:center;--border-color:black}.room-input[_ngcontent-%COMP%]{margin-top:15px;--border-style:solid;--border-width:1px}.user-input[_ngcontent-%COMP%]{margin-right:10px}.title[_ngcontent-%COMP%]{font-family:"Indie Flower",sans-serif;font-size:64px}span[_ngcontent-%COMP%]{font-family:sans-serif}']],data:{}});function C(n){return t.Nb(0,[(n()(),t.tb(0,0,null,null,9,"ion-toolbar",[],null,null,null,s.T,s.w)),t.sb(1,49152,null,0,i.Ab,[t.h,t.k,t.z],null,null),(n()(),t.tb(2,0,null,0,7,"ion-buttons",[["slot","end"]],null,null,null,s.z,s.c)),t.sb(3,49152,null,0,i.j,[t.h,t.k,t.z],null,null),(n()(),t.tb(4,0,null,0,2,"ion-button",[["id","loginBtn"],["shape","round"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.presentModal("Login")&&t),t}),s.y,s.b)),t.sb(5,49152,null,0,i.i,[t.h,t.k,t.z],{shape:[0,"shape"]},null),(n()(),t.Lb(-1,0,[" Login "])),(n()(),t.tb(7,0,null,0,2,"ion-button",[["id","registerBtn"],["shape","round"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.presentModal("Register")&&t),t}),s.y,s.b)),t.sb(8,49152,null,0,i.i,[t.h,t.k,t.z],{shape:[0,"shape"]},null),(n()(),t.Lb(-1,0,[" Register "]))],(function(n,l){n(l,5,0,"round"),n(l,8,0,"round")}),null)}function y(n){return t.Nb(0,[(n()(),t.tb(0,0,null,null,13,"ion-toolbar",[],null,null,null,s.T,s.w)),t.sb(1,49152,null,0,i.Ab,[t.h,t.k,t.z],null,null),(n()(),t.tb(2,0,null,0,6,"ion-item",[["lines","none"]],null,null,null,s.J,s.m)),t.sb(3,49152,null,0,i.F,[t.h,t.k,t.z],{lines:[0,"lines"]},null),(n()(),t.tb(4,0,null,0,2,"ion-thumbnail",[["class","ion-margin-end"]],null,null,null,s.Q,s.t)),t.sb(5,49152,null,0,i.xb,[t.h,t.k,t.z],null,null),(n()(),t.tb(6,0,null,0,0,"img",[["src","../../assets/icons/profile-icon.png"]],null,null,null,null,null)),(n()(),t.tb(7,0,null,0,1,"h5",[],null,null,null,null,null)),(n()(),t.Lb(8,null,["Hello, ","!"])),(n()(),t.tb(9,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,s.z,s.c)),t.sb(10,49152,null,0,i.j,[t.h,t.k,t.z],null,null),(n()(),t.tb(11,0,null,0,2,"ion-button",[["id","logoutBtn"],["shape","round"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.logout()&&t),t}),s.y,s.b)),t.sb(12,49152,null,0,i.i,[t.h,t.k,t.z],{shape:[0,"shape"]},null),(n()(),t.Lb(-1,0,[" Logout "]))],(function(n,l){n(l,3,0,"none"),n(l,12,0,"round")}),(function(n,l){n(l,8,0,l.component.user)}))}function z(n){return t.Nb(0,[(n()(),t.tb(0,0,null,null,5,"ion-header",[],null,null,null,s.G,s.j)),t.sb(1,49152,null,0,i.z,[t.h,t.k,t.z],null,null),(n()(),t.ib(16777216,null,0,1,null,C)),t.sb(3,16384,null,0,r.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.ib(16777216,null,0,1,null,y)),t.sb(5,16384,null,0,r.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.tb(6,0,null,null,42,"ion-content",[["class","ion-text-center ion-padding content"]],null,null,null,s.E,s.h)),t.sb(7,49152,null,0,i.s,[t.h,t.k,t.z],null,null),(n()(),t.tb(8,0,null,0,1,"h1",[["class","title"]],null,null,null,null,null)),(n()(),t.Lb(-1,null,["Mjuza Do Suza"])),(n()(),t.tb(10,0,null,0,38,"ion-grid",[],null,null,null,s.F,s.i)),t.sb(11,49152,null,0,i.y,[t.h,t.k,t.z],null,null),(n()(),t.tb(12,0,null,0,36,"ion-row",[],null,null,null,s.M,s.p)),t.sb(13,49152,null,0,i.hb,[t.h,t.k,t.z],null,null),(n()(),t.tb(14,0,null,0,21,"ion-col",[["offset-lg","3"],["size-lg","3"],["size-sm","12"]],null,null,null,s.D,s.g)),t.sb(15,49152,null,0,i.r,[t.h,t.k,t.z],null,null),(n()(),t.tb(16,0,null,0,19,"ion-card",[],null,null,null,s.C,s.d)),t.sb(17,49152,null,0,i.k,[t.h,t.k,t.z],null,null),(n()(),t.tb(18,0,null,0,3,"ion-card-header",[],null,null,null,s.B,s.f)),t.sb(19,49152,null,0,i.m,[t.h,t.k,t.z],null,null),(n()(),t.tb(20,0,null,0,1,"ion-icon",[["color","primary"],["name","headset"]],null,null,null,s.H,s.k)),t.sb(21,49152,null,0,i.A,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(n()(),t.tb(22,0,null,0,13,"ion-card-content",[],null,null,null,s.A,s.e)),t.sb(23,49152,null,0,i.l,[t.h,t.k,t.z],null,null),(n()(),t.tb(24,0,null,0,2,"ion-button",[["id","joinBtn"],["shape","round"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.joinRoom()&&t),t}),s.y,s.b)),t.sb(25,49152,null,0,i.i,[t.h,t.k,t.z],{shape:[0,"shape"]},null),(n()(),t.Lb(-1,0,[" JOIN ROOM "])),(n()(),t.tb(27,0,null,0,8,"ion-item",[["class","room-input"]],null,null,null,s.J,s.m)),t.sb(28,49152,null,0,i.F,[t.h,t.k,t.z],null,null),(n()(),t.tb(29,0,null,0,6,"ion-input",[["id","roomInput"],["placeholder","Enter room ID"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==t.Fb(n,30)._handleBlurEvent(u.target)&&e),"ionChange"===l&&(e=!1!==t.Fb(n,30)._handleInputEvent(u.target)&&e),"ngModelChange"===l&&(e=!1!==(o.joinRoomId=u)&&e),"ngModelChange"===l&&(e=!1!==(o.joinRoomId=u.toLocaleUpperCase())&&e),e}),s.I,s.l)),t.sb(30,16384,null,0,i.Ib,[t.k],null,null),t.Ib(1024,null,a.b,(function(n){return[n]}),[i.Ib]),t.sb(32,671744,null,0,a.e,[[8,null],[8,null],[8,null],[6,a.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ib(2048,null,a.c,null,[a.e]),t.sb(34,16384,null,0,a.d,[[4,a.c]],null,null),t.sb(35,49152,null,0,i.E,[t.h,t.k,t.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t.tb(36,0,null,0,12,"ion-col",[["size-lg","3"],["size-sm","12"]],null,null,null,s.D,s.g)),t.sb(37,49152,null,0,i.r,[t.h,t.k,t.z],null,null),(n()(),t.tb(38,0,null,0,10,"ion-card",[],null,null,null,s.C,s.d)),t.sb(39,49152,null,0,i.k,[t.h,t.k,t.z],null,null),(n()(),t.tb(40,0,null,0,3,"ion-card-header",[],null,null,null,s.B,s.f)),t.sb(41,49152,null,0,i.m,[t.h,t.k,t.z],null,null),(n()(),t.tb(42,0,null,0,1,"ion-icon",[["color","primary"],["name","musical-notes"]],null,null,null,s.H,s.k)),t.sb(43,49152,null,0,i.A,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(n()(),t.tb(44,0,null,0,4,"ion-card-content",[],null,null,null,s.A,s.e)),t.sb(45,49152,null,0,i.l,[t.h,t.k,t.z],null,null),(n()(),t.tb(46,0,null,0,2,"ion-button",[["id","createBtn"],["shape","round"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.createRoom()&&t),t}),s.y,s.b)),t.sb(47,49152,null,0,i.i,[t.h,t.k,t.z],{shape:[0,"shape"]},null),(n()(),t.Lb(-1,0,[" Create room "]))],(function(n,l){var u=l.component;n(l,3,0,!u.user),n(l,5,0,u.user),n(l,21,0,"primary","headset"),n(l,25,0,"round"),n(l,32,0,u.joinRoomId),n(l,35,0,"Enter room ID","text"),n(l,43,0,"primary","musical-notes"),n(l,47,0,"round")}),(function(n,l){n(l,29,0,t.Fb(l,34).ngClassUntouched,t.Fb(l,34).ngClassTouched,t.Fb(l,34).ngClassPristine,t.Fb(l,34).ngClassDirty,t.Fb(l,34).ngClassValid,t.Fb(l,34).ngClassInvalid,t.Fb(l,34).ngClassPending)}))}function v(n){return t.Nb(0,[(n()(),t.tb(0,0,null,null,1,"app-home",[],null,null,null,z,k)),t.sb(1,245760,null,0,h,[g.a,m.m,f.c,i.Jb,d.a,i.Eb],null,null)],(function(n,l){n(l,1,0)}),null)}var I=t.pb("app-home",h,v,{},{},[]),F=t.rb({encapsulation:0,styles:[["#submitBtn[_ngcontent-%COMP%]{padding-top:5px;padding-bottom:5px}"]],data:{}});function w(n){return t.Nb(0,[(n()(),t.tb(0,0,null,null,6,"ion-header",[],null,null,null,s.G,s.j)),t.sb(1,49152,null,0,i.z,[t.h,t.k,t.z],null,null),(n()(),t.tb(2,0,null,0,4,"ion-toolbar",[],null,null,null,s.T,s.w)),t.sb(3,49152,null,0,i.Ab,[t.h,t.k,t.z],null,null),(n()(),t.tb(4,0,null,0,2,"ion-title",[],null,null,null,s.R,s.u)),t.sb(5,49152,null,0,i.yb,[t.h,t.k,t.z],null,null),(n()(),t.Lb(6,0,["",""])),(n()(),t.tb(7,0,null,null,24,"ion-content",[],null,null,null,s.E,s.h)),t.sb(8,49152,null,0,i.s,[t.h,t.k,t.z],null,null),(n()(),t.tb(9,0,null,0,22,"ion-card",[["style","text-align: center"]],null,null,null,s.C,s.d)),t.sb(10,49152,null,0,i.k,[t.h,t.k,t.z],null,null),(n()(),t.tb(11,0,null,0,8,"ion-item",[["class","user-input"]],null,null,null,s.J,s.m)),t.sb(12,49152,null,0,i.F,[t.h,t.k,t.z],null,null),(n()(),t.tb(13,0,null,0,6,"ion-input",[["id","username"],["placeholder","Username"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==t.Fb(n,14)._handleBlurEvent(u.target)&&e),"ionChange"===l&&(e=!1!==t.Fb(n,14)._handleInputEvent(u.target)&&e),"ngModelChange"===l&&(e=!1!==(o.username=u)&&e),e}),s.I,s.l)),t.sb(14,16384,null,0,i.Ib,[t.k],null,null),t.Ib(1024,null,a.b,(function(n){return[n]}),[i.Ib]),t.sb(16,671744,null,0,a.e,[[8,null],[8,null],[8,null],[6,a.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ib(2048,null,a.c,null,[a.e]),t.sb(18,16384,null,0,a.d,[[4,a.c]],null,null),t.sb(19,49152,null,0,i.E,[t.h,t.k,t.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t.tb(20,0,null,0,8,"ion-item",[["class","user-input"]],null,null,null,s.J,s.m)),t.sb(21,49152,null,0,i.F,[t.h,t.k,t.z],null,null),(n()(),t.tb(22,0,null,0,6,"ion-input",[["id","password"],["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==t.Fb(n,23)._handleBlurEvent(u.target)&&e),"ionChange"===l&&(e=!1!==t.Fb(n,23)._handleInputEvent(u.target)&&e),"ngModelChange"===l&&(e=!1!==(o.password=u)&&e),e}),s.I,s.l)),t.sb(23,16384,null,0,i.Ib,[t.k],null,null),t.Ib(1024,null,a.b,(function(n){return[n]}),[i.Ib]),t.sb(25,671744,null,0,a.e,[[8,null],[8,null],[8,null],[6,a.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ib(2048,null,a.c,null,[a.e]),t.sb(27,16384,null,0,a.d,[[4,a.c]],null,null),t.sb(28,49152,null,0,i.E,[t.h,t.k,t.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t.tb(29,0,null,0,2,"ion-button",[["color","danger"],["id","submitBtn"],["shape","round"]],null,[[null,"click"]],(function(n,l,u){var t=!0,e=n.component;return"click"===l&&(t=!1!==("Login"===e.modalName?e.login():e.register())&&t),t}),s.y,s.b)),t.sb(30,49152,null,0,i.i,[t.h,t.k,t.z],{color:[0,"color"],shape:[1,"shape"]},null),(n()(),t.Lb(-1,0,[" Submit "]))],(function(n,l){var u=l.component;n(l,16,0,u.username),n(l,19,0,"Username","text"),n(l,25,0,u.password),n(l,28,0,"Password","password"),n(l,30,0,"danger","round")}),(function(n,l){n(l,6,0,l.component.modalName),n(l,13,0,t.Fb(l,18).ngClassUntouched,t.Fb(l,18).ngClassTouched,t.Fb(l,18).ngClassPristine,t.Fb(l,18).ngClassDirty,t.Fb(l,18).ngClassValid,t.Fb(l,18).ngClassInvalid,t.Fb(l,18).ngClassPending),n(l,22,0,t.Fb(l,27).ngClassUntouched,t.Fb(l,27).ngClassTouched,t.Fb(l,27).ngClassPristine,t.Fb(l,27).ngClassDirty,t.Fb(l,27).ngClassValid,t.Fb(l,27).ngClassInvalid,t.Fb(l,27).ngClassPending)}))}function M(n){return t.Nb(0,[(n()(),t.tb(0,0,null,null,1,"app-login",[],null,null,null,w,F)),t.sb(1,114688,null,0,p,[i.Jb,f.c,d.a,i.Eb],null,null)],(function(n,l){n(l,1,0)}),null)}var R=t.pb("app-login",p,M,{modalName:"modalName"},{},[]);u.d(l,"HomePageModuleNgFactory",(function(){return E}));var E=t.qb(e,[],(function(n){return t.Cb([t.Db(512,t.j,t.bb,[[8,[o.a,I,R]],[3,t.j],t.x]),t.Db(4608,r.k,r.j,[t.u,[2,r.s]]),t.Db(4608,a.g,a.g,[]),t.Db(4608,i.a,i.a,[t.z,t.g]),t.Db(4608,i.Eb,i.Eb,[i.a,t.j,t.q]),t.Db(4608,i.Hb,i.Hb,[i.a,t.j,t.q]),t.Db(1073742336,r.b,r.b,[]),t.Db(1073742336,a.f,a.f,[]),t.Db(1073742336,a.a,a.a,[]),t.Db(1073742336,i.Cb,i.Cb,[]),t.Db(1073742336,m.n,m.n,[[2,m.s],[2,m.m]]),t.Db(1073742336,e,e,[]),t.Db(1024,m.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);