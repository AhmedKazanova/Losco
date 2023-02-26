"use strict";(self.webpackChunkDemo=self.webpackChunkDemo||[]).push([["src_app_views_Admin_managenews_news_module_ts"],{9052:(O,m,o)=>{o.r(m),o.d(m,{NewsModule:()=>g});var d=o(6895),u=o(4076),_=o(9905),b=o(727),x=o(9300),e=o(4650),l=o(4006),A=o(2340),w=o(5760),f=o(9066);const T=["ImageInput"];function Z(s,a){if(1&s&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&s){const t=e.oxw(2).$implicit;e.xp6(1),e.Oqu(t.arabicDate)}}function C(s,a){if(1&s&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&s){const t=e.oxw(2).$implicit;e.xp6(1),e.Oqu(t.englishDate)}}function U(s,a){if(1&s&&(e.TgZ(0,"span"),e.YNc(1,Z,2,1,"span",26),e.YNc(2,C,2,1,"span",26),e.qZA()),2&s){const t=e.oxw(3);e.xp6(1),e.Q6J("ngIf","ar"==t.lang),e.xp6(1),e.Q6J("ngIf","en"==t.lang)}}function v(s,a){if(1&s&&(e.ynx(0),e.YNc(1,U,3,2,"span",26),e.BQk()),2&s){const t=a.$implicit,n=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",n.date.split("-")[1]==t.id)}}function M(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.ALo(13,"date"),e.YNc(14,v,2,1,"ng-container",20),e.qZA(),e.TgZ(15,"td"),e._UZ(16,"img",22),e.qZA(),e.TgZ(17,"td")(18,"div",23)(19,"button",24),e.NdJ("click",function(){const r=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.OpenUpdateModel(r))}),e._uU(20,"Edite"),e.qZA(),e.TgZ(21,"button",25),e.NdJ("click",function(){const r=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.delete(r))}),e._uU(22,"Delete"),e.qZA()()()()}if(2&s){const t=a.$implicit,n=a.index,i=e.oxw();e.xp6(2),e.Oqu(n+1),e.xp6(2),e.Oqu(t.arabicHeading),e.xp6(2),e.Oqu(t.englishHeading),e.xp6(2),e.Oqu(t.arabicText),e.xp6(2),e.Oqu(t.englishText),e.xp6(2),e.hij(" ",e.xi3(13,8,t.date,"d")," "),e.xp6(2),e.Q6J("ngForOf",i.dateArr),e.xp6(2),e.s9C("src",i.url+t.imagePath,e.LSH)}}function D(s,a){if(1&s&&e._UZ(0,"img",42),2&s){const t=e.oxw(2);e.s9C("src",t.base65,e.LSH)}}function H(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",27)(1,"form",28)(2,"div",29),e._UZ(3,"input",30),e.ALo(4,"translate"),e.ALo(5,"translate"),e._UZ(6,"input",31),e.ALo(7,"translate"),e.ALo(8,"translate"),e.TgZ(9,"input",32),e.NdJ("change",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.updateImage(i,null==r.newsID?null:r.newsID.value))}),e.qZA(),e.YNc(10,D,1,1,"img",33),e.qZA(),e.TgZ(11,"div",29),e._UZ(12,"textarea",34)(13,"textarea",35),e.TgZ(14,"div",36)(15,"label",37),e._uU(16,"Date"),e.qZA(),e._UZ(17,"input",38),e.qZA(),e.TgZ(18,"div",39)(19,"button",40),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.update())}),e._uU(20),e.ALo(21,"translate"),e.qZA(),e.TgZ(22,"button",41),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.cancle())}),e._uU(23),e.ALo(24,"translate"),e.qZA()()()()()}if(2&s){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.formUpdate),e.xp6(2),e.s9C("placeholder",e.lcZ(4,8,"ArabicHeading")),e.s9C("title",e.lcZ(5,10,"ArabicHeading")),e.xp6(3),e.s9C("placeholder",e.lcZ(7,12,"EnglishHeading")),e.s9C("title",e.lcZ(8,14,"EnglishHeading")),e.xp6(4),e.Q6J("ngIf",t.base65),e.xp6(10),e.hij(" ",e.lcZ(21,16,"Update")," "),e.xp6(3),e.Oqu(e.lcZ(24,18,"Cancle"))}}class h{constructor(a,t,n){this._Router=a,this._ApiserviceService=n,this.sub=new b.w0,this.SubscripArr=[],this.isServer=!1,this.fileToUpload="",this.filename="",this.filenameUpdate="",this.fileUpdateUpload="",this.data={newsID:0,imagePath:"",arabicHeading:"",arabicText:"",englishHeading:"",englishText:"",date:""},this.dateArr=[],this.newsArr=[],this.url=`${A.N.imageUrl}`,this.openUpdate=!1,this.lang="",this.formUpdate=new l.cw({newsID:new l.NI(null),arabicHeading:new l.NI(null),arabicText:new l.NI(null),englishHeading:new l.NI(null),englishText:new l.NI(null),imagePath:new l.NI(null),date:new l.NI(null)}),this.isServer=(0,d.PM)(t)}get newsID(){return this.formUpdate.get("newsID")}get arabicHeading(){return this.formUpdate.get("arabicHeading")}get arabicText(){return this.formUpdate.get("arabicText")}get englishHeading(){return this.formUpdate.get("englishHeading")}get englishText(){return this.formUpdate.get("englishText")}get imagePath(){return this.formUpdate.get("imagePath")}get date(){return this.formUpdate.get("date")}ngOnInit(){this.dateArr=[{id:1,arabicDate:"\u0645\u062d\u0631\u0645",englishDate:"Muharram"},{id:2,arabicDate:"\u0635\u0641\u0631",englishDate:"Safar"},{id:3,arabicDate:"\u0631\u0628\u064a\u0639 \u0627\u0644\u0623\u0648\u0644",englishDate:"Rabi Al-Awwal"},{id:4,arabicDate:"\u0631\u0628\u064a\u0639 \u0627\u0644\u062b\u0627\u0646\u064a",englishDate:"Rabi Al-Thani"},{id:5,arabicDate:"\u062c\u0645\u0627\u062f\u0649 \u0627\u0644\u0623\u0648\u0644",englishDate:"Jumada Al-Awwal"},{id:6,arabicDate:"\u062c\u0645\u0627\u062f\u0649 \u0627\u0644\u062b\u0627\u0646\u064a",englishDate:"Jumada Al-Thani"},{id:7,arabicDate:"\u0631\u062c\u0628",englishDate:"Rajab"},{id:8,arabicDate:"\u0634\u0639\u0628\u0627\u0646",englishDate:"Sha`ban"},{id:9,arabicDate:"\u0631\u0645\u0636\u0627\u0646",englishDate:"Ramadan"},{id:10,arabicDate:"\u0634\u0648\u0627\u0644",englishDate:"Shawwal"},{id:11,arabicDate:"\u0630\u0648 \u0627\u0644\u0642\u0639\u062f\u0629",englishDate:"Dhul Qa`dah"},{id:12,arabicDate:"\u0630\u0648 \u0627\u0644\u062d\u062c\u0629",englishDate:"Dhul-Hijjah"}],this.getLanguage(),this.getNews(),this.sub=this._Router.events.pipe((0,x.h)(a=>a instanceof u.m2)).subscribe({next:a=>{let t=a.urlAfterRedirects.split("/")[1];this.lang=t}}),this.SubscripArr.push(this.sub)}getNews(){let a=this._ApiserviceService.get("News").subscribe({next:t=>{this.newsArr=t,this.newsArr.reverse()}});this.SubscripArr.push(a)}getImagePath(a){let t=a.target.files[0];null!=t?(new FormData,this.fileToUpload=t,this.filename=t.name,new FileReader):(this.fileToUpload="",this.filename="")}send(){if(""!=this.data.arabicHeading.trim())if(""!=this.data.arabicText.trim())if(""!=this.data.englishHeading.trim())if(""!=this.data.englishText.trim())if(""!=this.data.date)if(""!=this.filename&&""!=this.fileToUpload){let a=new FormData;a.append("file",this.fileToUpload,this.filename);let t={arabicHeading:this.data.arabicHeading,arabicText:this.data.arabicText,englishHeading:this.data.englishHeading,englishText:this.data.englishText,date:this.data.date,imagePath:""},n=this._ApiserviceService.post("News/upload",a).subscribe({next:i=>{t.imagePath=i;let r=this._ApiserviceService.post("News",t).subscribe({next:p=>{"ar"==this.lang?alert("\u062a\u0645 \u0627\u0644\u0627\u0636\u0627\u0641\u0629 \u0628\u0646\u062c\u0627\u062d"):alert("Add Success"),this.getNews(),this.data={newsID:0,imagePath:"",arabicHeading:"",arabicText:"",englishHeading:"",englishText:"",date:""},this.ImageInput.nativeElement.value="",this.fileToUpload="",this.filename=""}});this.SubscripArr.push(r)}});this.SubscripArr.push(n)}else"ar"==this.lang?alert("\u0627\u062f\u062e\u0644 \u0635\u0648\u0631\u0629"):alert("Enter The Image");else"ar"==this.lang?alert("\u0627\u062f\u062e\u0644 \u0627\u0644\u062a\u0627\u0631\u064a\u062e"):alert("Enter The Date");else"ar"==this.lang?alert("\u062d\u0642\u0644 \u0627\u0644\u0645\u062d\u062a\u0648\u064a  \u0628\u0627\u0644\u0627\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0641\u0627\u0631\u063a"):alert("Input Field English Text");else"ar"==this.lang?alert("\u062d\u0642\u0644 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0631\u0626\u064a\u0633\u064a \u0628\u0627\u0644\u0627\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0641\u0627\u0631\u063a"):alert("Input Field English Heading");else"ar"==this.lang?alert("\u062d\u0642\u0644 \u0627\u0644\u0645\u062d\u062a\u0648\u064a  \u0628\u0627\u0644\u0639\u0631\u0628\u064a \u0641\u0627\u0631\u063a"):alert("Input Field Arabic Text");else"ar"==this.lang?alert("\u062d\u0642\u0644 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0631\u0626\u064a\u0633\u064a \u0628\u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0641\u0627\u0631\u063a"):alert("Input Field Arabic Heading")}cancle(){this.openUpdate=!1,this.formUpdate.reset()}OpenUpdateModel(a){this.openUpdate=!0,this.newsID?.patchValue(a.newsID),this.arabicHeading?.patchValue(a.arabicHeading),this.arabicText?.patchValue(a.arabicText),this.englishHeading?.patchValue(a.englishHeading),this.englishText?.patchValue(a.englishText),this.imagePath?.patchValue(a.imagePath),this.date?.patchValue(a.date),this.base65=this.url+a.imagePath}updateImage(a,t){let n=a.target.files[0];if(null!=n){new FormData,this.fileUpdateUpload=n,this.filenameUpdate=n.name;const r=new FileReader;r.readAsDataURL(n),r.onload=()=>{this.base65=r.result}}else this.newsArr.find(i=>i.newsID==t),this.fileUpdateUpload="",this.filenameUpdate="",this.base65=this.url+this.newsArr.find(i=>i.newsID==t)?.imagePath}update(){if(""==this.filenameUpdate||""==this.fileUpdateUpload){if(null!=this.newsID?.value||0!=this.newsID?.value||null!=this.newsID?.value){let t=this._ApiserviceService.put("News",this.newsID?.value,{newsID:this.newsID?.value,imagePath:this.imagePath?.value,arabicHeading:this.arabicHeading?.value,arabicText:this.arabicText?.value,englishHeading:this.englishHeading?.value,englishText:this.englishText?.value,date:this.date?.value}).subscribe({next:n=>{alert("Success"),this.getNews(),this.formUpdate.reset(),this.openUpdate=!1,this.filenameUpdate="",this.fileUpdateUpload=""}});this.SubscripArr.push(t)}}else{let a=new FormData;if(a.append("file",this.fileUpdateUpload,this.filenameUpdate),null!=this.newsID?.value||0!=this.newsID?.value||null!=this.newsID?.value){let t={newsID:this.newsID?.value,imagePath:"",arabicHeading:this.arabicHeading?.value,arabicText:this.arabicText?.value,englishHeading:this.englishHeading?.value,englishText:this.englishText?.value,date:this.date?.value},n=this._ApiserviceService.post("News/upload",a).subscribe({next:i=>{t.imagePath=i;let r=this._ApiserviceService.put("News",this.newsID?.value,t).subscribe({next:p=>{alert("Success"),this.getNews(),this.formUpdate.reset(),this.openUpdate=!1,this.filenameUpdate="",this.fileUpdateUpload=""}});this.SubscripArr.push(r)}});this.SubscripArr.push(n)}}}delete(a){if(window.confirm("Are You Sure ?")){let n=this._ApiserviceService.delete("News",a.newsID).subscribe({next:i=>{alert("Success"),this.getNews()}});this.SubscripArr.push(n)}}getLanguage(){if(this.isServer)return"";{let a=localStorage.getItem("LOCALIZE_DEFAULT_LANGUAGE");null!=a&&null!=a&&""!=a&&(this.lang=a)}}ngOnDestroy(){for(let a=0;a<this.SubscripArr.length;a++)this.SubscripArr[a].unsubscribe()}}h.\u0275fac=function(a){return new(a||h)(e.Y36(u.F0),e.Y36(e.Lbi),e.Y36(w.O))},h.\u0275cmp=e.Xpm({type:h,selectors:[["app-managenews"]],viewQuery:function(a,t){if(1&a&&e.Gf(T,5),2&a){let n;e.iGM(n=e.CRH())&&(t.ImageInput=n.first)}},decls:65,vars:64,consts:[[1,"py-2","fs-1","text-center"],[1,"d-flex","justify-content-between","flex-wrap"],[1,"mx-auto","col-11","col-sm-6","col-lg-5","p-2"],["type","text","name","Arabic Heading",1,"form-control","fs-3",3,"ngModel","placeholder","title","ngModelChange"],["name","arabicText","name","text","cols","30","rows","5",1,"form-control","fs-3","mt-4",3,"ngModel","placeholder","title","ngModelChange"],["type","text","name","englishHeading",1,"form-control","fs-3",3,"ngModel","placeholder","title","ngModelChange"],["name","englishText","name","text","cols","30","rows","5",1,"form-control","fs-3","mt-4",3,"ngModel","placeholder","title","ngModelChange"],[1,"col-12","text-center"],[1,"col-11","col-sm-6","col-lg-4","mx-auto"],["for","date"],["name","date","id","date","type","date",1,"form-control","fs-3",3,"ngModel","ngModelChange"],["for","image"],["id","image","name","image","type","file",1,"form-control","fs-3",3,"change"],["ImageInput",""],["type","submit",1,"btn","btn-dark","fs-3","d-block","col-11","col-sm-6","col-lg-4","mx-auto","mt-4",3,"click"],[1,"table-responsive","mt-4"],[1,"table","table-striped","table-hover","table-dark"],[1,"col-1"],[1,"col-2"],[1,"col-3"],[4,"ngFor","ngForOf"],["class","popUp",4,"ngIf"],["height","150","alt","",1,"col-12",3,"src"],[1,"d-flex","justify-content-center","px-1"],[1,"btn","btn-warning","text-white","fs-3","col-5","mx-3",3,"click"],[1,"btn","btn-danger","fs-3","col-5","mx-3",3,"click"],[4,"ngIf"],[1,"popUp"],[1,"col-11","mx-auto","d-flex","align-items-start","flex-wrap","bg-light","p-3",3,"formGroup"],[1,"col-12","col-sm-6","p-2"],["type","text","formControlName","arabicHeading","id","updatearabicHeading","name","Arabic Heading",1,"form-control","fs-3","mb-3",3,"placeholder","title"],["type","text","formControlName","englishHeading","id","updateenglishHeading","name","English Heading",1,"form-control","fs-3",3,"placeholder","title"],["type","file",1,"form-control","fs-3","my-3",3,"change"],["class","col-12 ","height","200","alt","","srcset","",3,"src",4,"ngIf"],["formControlName","arabicText","name","arabicText","id","","cols","30","rows","3",1,"form-control","fs-3"],["formControlName","englishText","name","englishText","id","","cols","30","rows","3",1,"form-control","my-3","fs-3"],[1,"col-12","p-1","text-center"],["for",""],["formControlName","date","type","date",1,"form-control","my-2"],[1,"d-flex","justify-content-between","p-1"],["type","submit",1,"btn","btn-dark","fs-3","d-block","col-5","mt-4",3,"click"],["type","reset",1,"btn","btn-secondary","fs-3","d-block","col-5","mt-4",3,"click"],["height","200","alt","","srcset","",1,"col-12",3,"src"]],template:function(a,t){1&a&&(e.TgZ(0,"section")(1,"h1",0),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"form",1)(5,"div",2)(6,"input",3),e.NdJ("ngModelChange",function(i){return t.data.arabicHeading=i}),e.ALo(7,"translate"),e.ALo(8,"translate"),e.qZA(),e.TgZ(9,"textarea",4),e.NdJ("ngModelChange",function(i){return t.data.arabicText=i}),e.ALo(10,"translate"),e.ALo(11,"translate"),e._uU(12,"      "),e.qZA()(),e.TgZ(13,"div",2)(14,"input",5),e.NdJ("ngModelChange",function(i){return t.data.englishHeading=i}),e.ALo(15,"translate"),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"textarea",6),e.NdJ("ngModelChange",function(i){return t.data.englishText=i}),e.ALo(18,"translate"),e.ALo(19,"translate"),e.qZA()(),e.TgZ(20,"div",7)(21,"div",8)(22,"label",9),e._uU(23),e.ALo(24,"translate"),e.qZA(),e.TgZ(25,"input",10),e.NdJ("ngModelChange",function(i){return t.data.date=i}),e.qZA()(),e.TgZ(26,"div",8)(27,"label",11),e._uU(28),e.ALo(29,"translate"),e.qZA(),e.TgZ(30,"input",12,13),e.NdJ("change",function(i){return t.getImagePath(i)}),e.qZA()(),e.TgZ(32,"button",14),e.NdJ("click",function(){return t.send()}),e._uU(33),e.ALo(34,"translate"),e.qZA()()(),e.TgZ(35,"div",15)(36,"table",16)(37,"thead")(38,"tr")(39,"th",17),e._uU(40,"#"),e.qZA(),e.TgZ(41,"th",17),e._uU(42),e.ALo(43,"translate"),e.qZA(),e.TgZ(44,"th",18),e._uU(45),e.ALo(46,"translate"),e.qZA(),e.TgZ(47,"th",18),e._uU(48),e.ALo(49,"translate"),e.qZA(),e.TgZ(50,"th",18),e._uU(51),e.ALo(52,"translate"),e.qZA(),e.TgZ(53,"th",18),e._uU(54),e.ALo(55,"translate"),e.qZA(),e.TgZ(56,"th",19),e._uU(57),e.ALo(58,"translate"),e.qZA(),e.TgZ(59,"th",18),e._uU(60),e.ALo(61,"translate"),e.qZA()()(),e.TgZ(62,"tbody"),e.YNc(63,M,23,11,"tr",20),e.qZA()()(),e.YNc(64,H,25,20,"div",21),e.qZA()),2&a&&(e.xp6(2),e.Oqu(e.lcZ(3,26,"News")),e.xp6(4),e.s9C("placeholder",e.lcZ(7,28,"ArabicHeading")),e.s9C("title",e.lcZ(8,30,"ArabicHeading")),e.Q6J("ngModel",t.data.arabicHeading),e.xp6(3),e.s9C("placeholder",e.lcZ(10,32,"ArabicText")),e.s9C("title",e.lcZ(11,34,"ArabicText")),e.Q6J("ngModel",t.data.arabicText),e.xp6(5),e.s9C("placeholder",e.lcZ(15,36,"EnglishHeading")),e.s9C("title",e.lcZ(16,38,"EnglishHeading")),e.Q6J("ngModel",t.data.englishHeading),e.xp6(3),e.s9C("placeholder",e.lcZ(18,40,"EnglishText")),e.s9C("title",e.lcZ(19,42,"EnglishText")),e.Q6J("ngModel",t.data.englishText),e.xp6(6),e.hij(" ",e.lcZ(24,44,"Date")," "),e.xp6(2),e.Q6J("ngModel",t.data.date),e.xp6(3),e.hij(" ",e.lcZ(29,46,"Image")," "),e.xp6(5),e.Oqu(e.lcZ(34,48,"Save")),e.xp6(9),e.Oqu(e.lcZ(43,50,"ArabicHeading")),e.xp6(3),e.Oqu(e.lcZ(46,52,"EnglishHeading")),e.xp6(3),e.Oqu(e.lcZ(49,54,"ArabicText")),e.xp6(3),e.Oqu(e.lcZ(52,56,"EnglishText")),e.xp6(3),e.Oqu(e.lcZ(55,58,"Date")),e.xp6(3),e.Oqu(e.lcZ(58,60,"Image")),e.xp6(3),e.Oqu(e.lcZ(61,62,"Option")),e.xp6(3),e.Q6J("ngForOf",t.newsArr),e.xp6(1),e.Q6J("ngIf",t.openUpdate))},dependencies:[d.sg,d.O5,l._Y,l.Fj,l.JJ,l.JL,l.On,l.F,l.sg,l.u,d.uU,f.X$],styles:["section[_ngcontent-%COMP%]{min-height:100vh}.popUp[_ngcontent-%COMP%]{position:fixed;inset:0;background-color:#33333380;z-index:99999999999999999;display:flex;justify-content:center;align-items:center;overflow-y:scroll}form[_ngcontent-%COMP%]{min-height:70vh}table[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{color:#fff!important;border:none!important;background-image:none!important}form[_ngcontent-%COMP%]   button.save[_ngcontent-%COMP%]{background-color:#4c4c4c;color:#fff}input[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus{box-shadow:none!important}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{border:1px solid gray!important}td[_ngcontent-%COMP%]{font-size:1.5rem!important}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%], label[_ngcontent-%COMP%], th[_ngcontent-%COMP%], option[_ngcontent-%COMP%]{font-size:1.6rem!important}th[_ngcontent-%COMP%]{padding:10px}table[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{aspect-ratio:140 / 70;object-fit:contain}"]});const I=[{path:"",component:h,title:"Manage News",canActivate:[_.u]}];class c{}c.\u0275fac=function(a){return new(a||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[u.Bz.forChild(I),u.Bz]});var N=o(2054);class g{}g.\u0275fac=function(a){return new(a||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({imports:[d.ez,c,N.fQ,f.aw,l.u5,l.UX]})}}]);