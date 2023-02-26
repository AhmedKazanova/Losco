"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=469,exports.ids=[469],exports.modules={89469:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdminhomeModule:()=>AdminhomeModule});var common=__webpack_require__(89318),router=__webpack_require__(14195),admin_guard=__webpack_require__(19543),core=__webpack_require__(40305),cjs=__webpack_require__(25095),gilsdav_ngx_translate_router=__webpack_require__(75887),ngx_translate_core=__webpack_require__(48173);class AdminHomeComponent{constructor(platformID,_Router){this._Router=_Router,this.lang="",this.isServer=!1,this.sub=new cjs.Subscription,this.isServer=(0,common.PM)(platformID)}ngOnInit(){this.getLanguage(),this.sub=this._Router.events.pipe((0,cjs.filter)(event=>event instanceof router.m2)).subscribe({next:value=>{let language=value.urlAfterRedirects.split("/")[1];this.lang=language}})}getLanguage(){if(this.isServer)return"";{let currentLang=localStorage.getItem("LOCALIZE_DEFAULT_LANGUAGE");null!=currentLang&&null!=currentLang&&""!=currentLang&&(this.lang=currentLang)}}ngOnDestroy(){this.sub.unsubscribe()}}__name(AdminHomeComponent,"AdminHomeComponent"),AdminHomeComponent.\u0275fac=__name(function(t){return new(t||AdminHomeComponent)(core.Y36(core.Lbi),core.Y36(router.F0))},"AdminHomeComponent_Factory"),AdminHomeComponent.\u0275cmp=core.Xpm({type:AdminHomeComponent,selectors:[["app-admin-home"]],decls:52,vars:45,consts:[[1,"settings",3,"title"],[1,"text-center","fw-bold","py-4","mb-5","px-2",3,"title"],["width","25","height","25","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-gear"],["d","M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"],["d","M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"],[1,"icons","p-2","d-flex","justify-content-center","justify-content-lg-between","align-items-center","flex-wrap"],[1,"text-center","p-2","col-12","col-sm-6","col-md-4","col-lg-3","col-xl-2"],["aria-label","Manage photos",3,"routerLink"],["width","100","height","100","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-images"],["d","M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"],["d","M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"],[1,"d-block","py-2","fs-2","fw-bold",3,"title"],["aria-label","Manage Content",3,"routerLink"],["width","100","height","100","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-filetype-txt"],["fill-rule","evenodd","d","M14 4.5V14a2 2 0 0 1-2 2h-2v-1h2a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.928 15.849v-3.337h1.136v-.662H0v.662h1.134v3.337h.794Zm4.689-3.999h-.894L4.9 13.289h-.035l-.832-1.439h-.932l1.228 1.983-1.24 2.016h.862l.853-1.415h.035l.85 1.415h.907l-1.253-1.992 1.274-2.007Zm1.93.662v3.337h-.794v-3.337H6.619v-.662h3.064v.662H8.546Z"],["aria-label","Manage News",3,"routerLink"],["width","100","height","100","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-newspaper"],["d","M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"],["d","M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"],["aria-label","Manage Messages",3,"routerLink"],["width","100","height","100","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-chat-dots"],["d","M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"],["d","m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"]],template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"section",0),core.ALo(1,"translate"),core.TgZ(2,"h1",1),core.ALo(3,"translate"),core.O4$(),core.TgZ(4,"svg",2),core._UZ(5,"path",3)(6,"path",4),core.qZA(),core._uU(7),core.ALo(8,"translate"),core.TgZ(9,"svg",2),core._UZ(10,"path",3)(11,"path",4),core.qZA()(),core.kcU(),core.TgZ(12,"div",5)(13,"div",6)(14,"a",7),core.ALo(15,"localize"),core.O4$(),core.TgZ(16,"svg",8),core._UZ(17,"path",9)(18,"path",10),core.qZA()(),core.kcU(),core.TgZ(19,"h2",11),core.ALo(20,"translate"),core._uU(21),core.ALo(22,"translate"),core.qZA()(),core.TgZ(23,"div",6)(24,"a",12),core.ALo(25,"localize"),core.O4$(),core.TgZ(26,"svg",13),core._UZ(27,"path",14),core.qZA()(),core.kcU(),core.TgZ(28,"h3",11),core.ALo(29,"translate"),core._uU(30),core.ALo(31,"translate"),core.qZA()(),core.TgZ(32,"div",6)(33,"a",15),core.ALo(34,"localize"),core.O4$(),core.TgZ(35,"svg",16),core._UZ(36,"path",17)(37,"path",18),core.qZA()(),core.kcU(),core.TgZ(38,"h4",11),core.ALo(39,"translate"),core._uU(40),core.ALo(41,"translate"),core.qZA()(),core.TgZ(42,"div",6)(43,"a",19),core.ALo(44,"localize"),core.O4$(),core.TgZ(45,"svg",20),core._UZ(46,"path",21)(47,"path",22),core.qZA()(),core.kcU(),core.TgZ(48,"h5",11),core.ALo(49,"translate"),core._uU(50),core.ALo(51,"translate"),core.qZA()()()()),2&rf&&(core.s9C("title",core.lcZ(1,15,"Settings")),core.xp6(2),core.s9C("title",core.lcZ(3,17,"Settings")),core.xp6(5),core.hij(" ",core.lcZ(8,19,"Settings")," "),core.xp6(7),core.Q6J("routerLink",core.lcZ(15,21,"/admin/managephotos")),core.xp6(5),core.s9C("title",core.lcZ(20,23,"ManagePhotos")),core.xp6(2),core.hij(" ",core.lcZ(22,25,"ManagePhotos")," "),core.xp6(3),core.Q6J("routerLink",core.lcZ(25,27,"/admin/managecontent")),core.xp6(4),core.s9C("title",core.lcZ(29,29,"ManageContent")),core.xp6(2),core.hij(" ",core.lcZ(31,31,"ManageContent")," "),core.xp6(3),core.Q6J("routerLink",core.lcZ(34,33,"/admin/managenews")),core.xp6(5),core.s9C("title",core.lcZ(39,35,"News")),core.xp6(2),core.hij(" ",core.lcZ(41,37,"News")," "),core.xp6(3),core.Q6J("routerLink",core.lcZ(44,39,"/admin/managemessages")),core.xp6(5),core.s9C("title",core.lcZ(49,41,"Messages")),core.xp6(2),core.hij(" ",core.lcZ(51,43,"Messages")," "))},"AdminHomeComponent_Template"),dependencies:[router.rH,gilsdav_ngx_translate_router.lO,ngx_translate_core.X$],styles:[".icons[_ngcontent-%COMP%]{min-height:50vh}"]});const routes=[{path:"",component:AdminHomeComponent,title:"Admin Home",canActivate:[admin_guard.u]}];class AdminhomeRoutingModule{}__name(AdminhomeRoutingModule,"AdminhomeRoutingModule"),AdminhomeRoutingModule.\u0275fac=__name(function(t){return new(t||AdminhomeRoutingModule)},"AdminhomeRoutingModule_Factory"),AdminhomeRoutingModule.\u0275mod=core.oAB({type:AdminhomeRoutingModule}),AdminhomeRoutingModule.\u0275inj=core.cJS({imports:[router.Bz.forChild(routes),router.Bz]});class AdminhomeModule{}__name(AdminhomeModule,"AdminhomeModule"),AdminhomeModule.\u0275fac=__name(function(t){return new(t||AdminhomeModule)},"AdminhomeModule_Factory"),AdminhomeModule.\u0275mod=core.oAB({type:AdminhomeModule}),AdminhomeModule.\u0275inj=core.cJS({imports:[common.ez,AdminhomeRoutingModule,gilsdav_ngx_translate_router.fQ,ngx_translate_core.aw]})}};