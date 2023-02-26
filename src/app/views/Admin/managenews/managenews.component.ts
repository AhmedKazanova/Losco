import { filter, Subscription } from 'rxjs';
import { Component, ElementRef, ViewChild, OnInit, OnDestroy,PLATFORM_ID, Inject  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiserviceService } from 'src/app/shared/services/ApiCrud/apiservice.service';
import { environment } from 'src/environments/environment';
import { NewsData } from '../models/news-data';
import { isPlatformServer } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';





@Component({
  selector: 'app-managenews',
  templateUrl: './managenews.component.html',
  styleUrls: ['./managenews.component.css']
})
export class ManagenewsComponent implements OnInit,OnDestroy{


  constructor (
    private _Router:Router,
    @Inject(PLATFORM_ID) platformID:Object,
    private _ApiserviceService:ApiserviceService) {
      this.isServer = isPlatformServer(platformID)
    }
    sub:Subscription = new Subscription
  SubscripArr:Subscription[] = []
  isServer:boolean = false
  // to add
fileToUpload = '';
filename:any = ''
///////////////////////
// toupdate
filenameUpdate: string = '';
fileUpdateUpload: string = '';
base65:any
//////////////////////
data:NewsData = {newsID: 0,imagePath:'',arabicHeading: '',arabicText: '',englishHeading: '',englishText: '',date:''}
dateArr:any[] = []
newsArr:NewsData[] = []
@ViewChild('ImageInput') ImageInput!: ElementRef;
url:string = `${environment.imageUrl}`
openUpdate:boolean = false
lang: string = ''
formUpdate:FormGroup = new FormGroup({
  newsID:new FormControl(null),
  arabicHeading:new FormControl(null),
  arabicText:new FormControl(null),
  englishHeading:new FormControl(null),
  englishText:new FormControl(null),
  imagePath:new FormControl(null),
  date:new FormControl(null),
})
get newsID(){
  return this.formUpdate.get("newsID")
}
get arabicHeading(){
  return this.formUpdate.get("arabicHeading")
}
get arabicText(){
  return this.formUpdate.get("arabicText")
}
get englishHeading(){
  return this.formUpdate.get("englishHeading")
}
get englishText(){
  return this.formUpdate.get("englishText")
}
get imagePath(){
  return this.formUpdate.get("imagePath")
}
get date(){
  return this.formUpdate.get("date")
}
ngOnInit(): void {
  this.dateArr = [
    {id:1,arabicDate:'محرم',englishDate:'Muharram'},
    {id:2,arabicDate:'صفر',englishDate:'Safar'},
    {id:3,arabicDate:'ربيع الأول',englishDate:'Rabi Al-Awwal'},
    {id:4,arabicDate:'ربيع الثاني',englishDate:'Rabi Al-Thani'},
    {id:5,arabicDate:'جمادى الأول',englishDate:'Jumada Al-Awwal'},
    {id:6,arabicDate:'جمادى الثاني',englishDate:'Jumada Al-Thani'},
    {id:7,arabicDate:'رجب',englishDate:'Rajab'},
    {id:8,arabicDate:'شعبان',englishDate:'Sha`ban'},
    {id:9,arabicDate:'رمضان',englishDate:'Ramadan'},
    {id:10,arabicDate:'شوال',englishDate:'Shawwal'},
    {id:11,arabicDate:'ذو القعدة',englishDate:'Dhul Qa`dah'},
    {id:12,arabicDate:'ذو الحجة',englishDate:'Dhul-Hijjah'}
]
this.getLanguage()
this.getNews()




this.sub=this._Router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe({
  next:(value:any)=>{
    let language = value.urlAfterRedirects.split('/')[1]
    this.lang = language
}});

this.SubscripArr.push(this.sub)

}

getNews(){
 let CallApiGetNews:Subscription = this._ApiserviceService.get("News").subscribe({
    next:(res:any)=>{
      this.newsArr = res
      this.newsArr.reverse()
    }
  })
  this.SubscripArr.push(CallApiGetNews)
}
getImagePath(event:any) {
    let fileToUpload = event.target.files[0];
    if (fileToUpload != undefined) {
      const formData = new FormData();
      this.fileToUpload = fileToUpload;
      this.filename = fileToUpload.name;
      const reader = new FileReader();
    }else{
      this.fileToUpload = '';
      this.filename = ''
    }
}
send(){

  if(this.data.arabicHeading.trim() == "" ){
    if(this.lang == 'ar'){
      alert("حقل العنوان الرئيسي بالعربية فارغ")
    }else {
      alert("Input Field Arabic Heading")
    }
    return
  }else if(this.data.arabicText.trim() == ""){
    if(this.lang == 'ar'){
      alert("حقل المحتوي  بالعربي فارغ")
    }else {
      alert("Input Field Arabic Text")
    }
    return
  }else if(this.data.englishHeading.trim() == ""){
    if(this.lang == 'ar'){
      alert("حقل العنوان الرئيسي بالانجليزية فارغ")
    }else {
      alert("Input Field English Heading")
    }
    return
  }else if(this.data.englishText.trim() == ""){
    if(this.lang == 'ar'){
      alert("حقل المحتوي  بالانجليزية فارغ")
    }else {
      alert("Input Field English Text")
    }
    return
  }else if(this.data.date == ''){
    if(this.lang == 'ar'){
      alert("ادخل التاريخ")
    }else {
      alert("Enter The Date")
    }
    return
  }else if(this.filename == '' || this.fileToUpload == ''){
    if(this.lang == 'ar'){
      alert("ادخل صورة")
    }else {
      alert("Enter The Image")
    }
    return
  }
  else {
    let formData = new FormData();
    formData.append('file', this.fileToUpload, this.filename);

    let model =
    {
      arabicHeading:this.data.arabicHeading,
      arabicText:this.data.arabicText,
      englishHeading:this.data.englishHeading,
      englishText:this.data.englishText,
      date:this.data.date,
      imagePath:''
    }


    let CallApiUploadNews:Subscription =  this._ApiserviceService.post("News/upload",formData).subscribe({
      next:(res:any)=>{
        model.imagePath = res
        let CallApiSendNews:Subscription =  this._ApiserviceService.post("News",model).subscribe({
          next:(res:any)=>{
            if(this.lang == 'ar'){
              alert("تم الاضافة بنجاح")
            }else {
              alert("Add Success")
            }
            this.getNews()
            this.data={newsID: 0,imagePath:'',arabicHeading: '',arabicText: '',englishHeading: '',englishText: '',date:''}
            this.ImageInput.nativeElement.value = '';
            this.fileToUpload = '';
            this.filename = ''
          }
        })
        this.SubscripArr.push(CallApiSendNews)
      }
    })
    this.SubscripArr.push(CallApiUploadNews)


  }



}
cancle(){
  this.openUpdate = false
  this.formUpdate.reset()
}
OpenUpdateModel(news:NewsData){
  this.openUpdate = true
  this.newsID?.patchValue(news.newsID)
  this.arabicHeading?.patchValue(news.arabicHeading)
  this.arabicText?.patchValue(news.arabicText)
  this.englishHeading?.patchValue(news.englishHeading)
  this.englishText?.patchValue(news.englishText)
  this.imagePath?.patchValue(news.imagePath)
  this.date?.patchValue(news.date)
  this.base65 = this.url+news.imagePath
}
updateImage(event:any,id:number){
  let fileToUpload = event.target.files[0];
  if (fileToUpload != undefined) {
    const formData = new FormData();
    this.fileUpdateUpload = fileToUpload;
    this.filenameUpdate = fileToUpload.name;
    const reader = new FileReader();
    reader.readAsDataURL(fileToUpload);
    reader.onload = () => {
      this.base65 = reader.result;
    };
  }else{
    this.newsArr.find(el=>el.newsID == id)
    this.fileUpdateUpload = '';
    this.filenameUpdate = '';
    this.base65 = this.url + this.newsArr.find(el=>el.newsID == id)?.imagePath;
  }
}
update(){

  if (this.filenameUpdate == '' || this.fileUpdateUpload == '') {

    if(this.newsID?.value != null || this.newsID?.value != 0 || this.newsID?.value != undefined){

      let model=
      {
        newsID: this.newsID?.value,
        imagePath:this.imagePath?.value,
        arabicHeading: this.arabicHeading?.value,
        arabicText: this.arabicText?.value,
        englishHeading: this.englishHeading?.value,
        englishText: this.englishText?.value,
        date:this.date?.value
      }
    let Update:Subscription =  this._ApiserviceService.put("News",this.newsID?.value,model).subscribe({
        next:(res:any)=>{
          alert("Success")
          this.getNews()
          this.formUpdate.reset()
          this.openUpdate = false
          this.filenameUpdate = '';
          this.fileUpdateUpload = '';
        }
      })
      this.SubscripArr.push(Update)

    }

  }else{

    let formData = new FormData();
    formData.append('file', this.fileUpdateUpload, this.filenameUpdate);

    if(this.newsID?.value != null || this.newsID?.value != 0 || this.newsID?.value != undefined){

      let model=
      {
        newsID: this.newsID?.value,
        imagePath:'',
        arabicHeading: this.arabicHeading?.value,
        arabicText: this.arabicText?.value,
        englishHeading: this.englishHeading?.value,
        englishText: this.englishText?.value,
        date:this.date?.value
      }
    let UpdateUpload:Subscription =  this._ApiserviceService.post("News/upload",formData).subscribe({
        next:(res:any)=>{
          model.imagePath = res
          let Update:Subscription =    this._ApiserviceService.put("News",this.newsID?.value,model).subscribe({
            next:(res:any)=>{
              alert("Success")
              this.getNews()
              this.formUpdate.reset()
              this.openUpdate = false
              this.filenameUpdate = '';
              this.fileUpdateUpload = '';
            }
          })
          this.SubscripArr.push(Update)
        }
      })

      this.SubscripArr.push(UpdateUpload)
    }
  }

}
delete(news:NewsData){
  let confirm:boolean = window.confirm("Are You Sure ?")

  if(confirm){
  let CallApiDelete:Subscription =  this._ApiserviceService.delete("News",news.newsID).subscribe({
      next:(res:any)=>{
        alert("Success")
        this.getNews()
      }
    })
    this.SubscripArr.push(CallApiDelete)
  }
}
getLanguage():any{
  if(this.isServer){
    return ''
  }else {
    let currentLang = localStorage.getItem("LOCALIZE_DEFAULT_LANGUAGE")
    if(currentLang != undefined && currentLang != null && currentLang != ''){
      this.lang = currentLang
    }
  }
}
ngOnDestroy(): void {
  for (let i = 0; i < this.SubscripArr.length; i++) {
    this.SubscripArr[i].unsubscribe()
  }
}

}
