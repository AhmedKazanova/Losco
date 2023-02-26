import { Component, OnInit, OnDestroy,PLATFORM_ID, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { ApiserviceService } from 'src/app/shared/services/ApiCrud/apiservice.service';
import { Manager } from '../models/Manager';
import { isPlatformServer } from '@angular/common';



@Component({
  selector: 'app-managecontent',
  templateUrl: './managecontent.component.html',
  styleUrls: ['./managecontent.component.css']
})
export class ManagecontentComponent  implements OnInit , OnDestroy{

  constructor(
    @Inject(PLATFORM_ID) platformID:Object,
    private _Router:Router,
    private _ApiserviceService:ApiserviceService) {
      this.isServer = isPlatformServer(platformID)
    }

sub:Subscription = new Subscription
SubscripArr:Subscription[] = []
isServer:boolean = false
data:Manager = {id:0,arabicHeading: '',englishHeading: '',arabicText: '',englishText: '',imagePath: '',changetype: '',type: 0}
lang:string = ''
contentArr:Manager[] = []
selectArr:Manager[] = []
AdminAction:string = "Add"
pageArr:any[] = []
changeFilter:number = 0



ngOnInit(): void {
  this.getLanguage()
  this.getContents()

  this.pageArr = [
    {id:500,arabicPage:'عن لوسكو الصفحة الرئيسية',englishPage:"About Home Page"},
    {id:501,arabicPage:'ارقام لوسكو',englishPage:"Losco Numbers"},
    {id:502,arabicPage:'محتوي صفحة عن لوسكو',englishPage:"About Page Content"},
    {id:503,arabicPage:'رؤيتنا',englishPage:"Our Vision"},
    {id:504,arabicPage:'اهدافنا',englishPage:"Our Goals"},
    {id:505,arabicPage:'ًصفحة الخدمات سيكشن 1',englishPage:"Services Page Section 1"},
  ]




this.sub=  this._Router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe({
    next:(value:any)=>{
      let language = value.urlAfterRedirects.split('/')[1]
      this.lang = language
}});

this.SubscripArr.push(this.sub)


}

filter(event:any){
  this.changeFilter = Number(event.target.value)
  if(this.changeFilter == 0){
    this.selectArr = this.contentArr
  }else {
    this.selectArr = this.contentArr.filter(el=>el.type == this.changeFilter)
  }
}
getContents(){
let CallApiGetContent:Subscription =  this._ApiserviceService.get("Manager").subscribe({
  next:(res:any)=>{
    if(res.length > 0){

      this.contentArr = res.filter((el:Manager)=>el.type >= 500 )


      if(this.changeFilter == 0){
        this.selectArr = this.contentArr
      }else {
        this.selectArr = this.contentArr.filter(el=>el.type == this.changeFilter)
      }

      this.selectArr.reverse()

    }
  }
})

this.SubscripArr.push(CallApiGetContent)
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
  }

  else if(this.data.type == 0){
    if(this.lang == 'ar'){
      alert("اختر المكان للاضافة")
    }else {
      alert("Chose The Page")
    }
    return
  }

  let about = this.contentArr.find(el=>el.type == 500)
  let ourVision = this.contentArr.find(el=>el.type == 503)
  let ourGoals = this.contentArr.find(el=>el.type == 504)
  let serviceSetionOne = this.contentArr.find(el=>el.type == 505)

  if(about && about.type == this.data.type){
    if(this.lang == 'ar'){
      alert("المحتوي موجود بالفعل")
    }else {
      alert("Content IsExist")
    }
    return
  }else if(ourVision && ourVision.type == this.data.type){
    if(this.lang == 'ar'){
      alert("المحتوي موجود بالفعل")
    }else {
      alert("Content IsExist")
    }
    return
  }else if(ourGoals && ourGoals.type == this.data.type){
    if(this.lang == 'ar'){
      alert("المحتوي موجود بالفعل")
    }else {
      alert("Content IsExist")
    }
    return
  }else if(serviceSetionOne && serviceSetionOne.type == this.data.type){
    if(this.lang == 'ar'){
      alert("المحتوي موجود بالفعل")
    }else {
      alert("Content IsExist")
    }
    return
  }
  else if(this.AdminAction == "Add") {
    let model = {
      arabicHeading:this.data.arabicHeading.trim(),
      arabicText:this.data.arabicText.trim(),
      englishHeading:this.data.englishHeading.trim(),
      englishText:this.data.englishText.trim(),
      type:this.data.type
    }
    let CallApiSendContent:Subscription =  this._ApiserviceService.post("Manager",model).subscribe({
      next:(res:any)=>{
  this.data = {
    id: 0,
    arabicHeading: '',
    englishHeading: '',
    arabicText: '',
    englishText: '',
    imagePath: '',
    changetype: '',
    type: 0
  }
  if(this.lang == 'ar'){
    alert("تم الاضافة بنجاح")
  }else {
    alert("Add Success")
  }
        this.getContents()
      }
    })

    this.SubscripArr.push(CallApiSendContent)
  }


}
edite(content:Manager){
  console.log(content)
  this.AdminAction = "Update"
  this.data.id = content.id
  this.data.arabicHeading = content.arabicHeading
  this.data.englishHeading = content.englishHeading
  this.data.arabicText = content.arabicText
  this.data.englishText = content.englishText
  this.data.type = content.type
}
cancle(){
  this.AdminAction = "Add"
  this.data = {
    id: 0,
    arabicHeading: '',
    englishHeading: '',
    arabicText: '',
    englishText: '',
    imagePath: '',
    changetype: '',
    type: 0
  }
}
Delete(content:Manager){
  let confirm:boolean = window.confirm("Are You Sure ?")

  if(confirm){
  let CallApiDeleteContent:Subscription =  this._ApiserviceService.delete("Manager",content.id).subscribe({
      next:(res:any)=>{
        alert("Success")
        this.getContents()
      }
    })

    this.SubscripArr.push(CallApiDeleteContent)
  }
}
update(){

  if(this.AdminAction == "Update"){

    if(this.data.arabicHeading == "" ){
      if(this.lang == 'ar'){
        alert("حقل العنوان الرئيسي بالعربية فارغ")
      }else {
        alert("Input Field Arabic Heading")
      }
      return
    }else if(this.data.arabicText == ""){
      if(this.lang == 'ar'){
        alert("حقل المحتوي  بالعربي فارغ")
      }else {
        alert("Input Field Arabic Text")
      }
      return
    }else if(this.data.englishHeading == ""){
      if(this.lang == 'ar'){
        alert("حقل العنوان الرئيسي بالانجليزية فارغ")
      }else {
        alert("Input Field English Heading")
      }
      return
    }else if(this.data.englishText == ""){
      if(this.lang == 'ar'){
        alert("حقل المحتوي  بالانجليزية فارغ")
      }else {
        alert("Input Field English Text")
      }
      return
    }else if(this.data.type == 0){
      if(this.lang == 'ar'){
        alert("اختر المكان للاضافة")
      }else {
        alert("Chose The Page")
      }
      return
    }else {

    let CallApiUpdate:Subscription =  this._ApiserviceService.put("Manager",this.data.id,this.data).subscribe({
        next:(res:any)=>{
          if(this.lang == 'ar'){
            alert("تم التعديل  بنجاح")
          }else {
            alert("Update Success")
          }
          this.getContents()
          this.AdminAction = "Add"
          this.data = {
            id: 0,
            arabicHeading: '',
            englishHeading: '',
            arabicText: '',
            englishText: '',
            imagePath: '',
            changetype: '',
            type: 0
          }
        }
      })

      this.SubscripArr.push(CallApiUpdate)
    }


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
