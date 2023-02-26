import { Component, ElementRef, ViewChild, OnInit, OnDestroy ,PLATFORM_ID, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { ApiserviceService } from 'src/app/shared/services/ApiCrud/apiservice.service';
import { environment } from 'src/environments/environment';
import { Manager } from '../models/Manager';
import { isPlatformServer } from '@angular/common';


@Component({
  selector: 'app-managephotos',
  templateUrl: './managephotos.component.html',
  styleUrls: ['./managephotos.component.css']
})
export class ManagephotosComponent implements OnInit,OnDestroy {

  SubscripArr:Subscription[] = []
  isServer:boolean = false
  sub:Subscription = new Subscription
  constructor(
    @Inject(PLATFORM_ID) platformID:Object,
    private _Router:Router,private _ApiserviceService:ApiserviceService) {
      this.isServer = isPlatformServer(platformID)
     }

  // to add
  fileToUpload = '';
  filename:any = ''
  typeFileSend:any
  ///////////////////////

  // toupdate
  filenameUpdate: string = '';
  fileUpdateUpload: string = '';
  base65:any
  typeFileUpdate:string = ''
  ///////////////////////
  lang:string = ''
  imagesArr:Manager [] = []
  selectArr:Manager [] = []
  url:string = `${environment.imageUrl}`
  slider:Manager = {id: 0,arabicHeading: '',englishHeading: '',arabicText: '',englishText: '',imagePath: '',changetype: '',type: 0}
  openUpdate:boolean = false
  pageArr:any[] = []
  changeFilter:number = 0
  @ViewChild('ImageInput') ImageInput!: ElementRef;
formUpdate:FormGroup = new FormGroup({
    slideId:new FormControl(null),
    arabicHeading:new FormControl(null),
    arabicText:new FormControl(null),
    englishHeading:new FormControl(null),
    englishText:new FormControl(null),
    imagePath:new FormControl(null),
    type:new FormControl(null),
})
get UpdateSlideId(){
    return this.formUpdate.get("slideId")
}
get UpdateArabicHeading(){
    return this.formUpdate.get("arabicHeading")
}
get UpdateArabicText(){
    return this.formUpdate.get("arabicText")
}
get UpdateEnglishHeading(){
    return this.formUpdate.get("englishHeading")
}
get UpdateEnglishText(){
    return this.formUpdate.get("englishText")
}
get UpdateimagePath(){
    return this.formUpdate.get("imagePath")
}
get Updatetype(){
    return this.formUpdate.get("type")
}

ngOnInit(): void {
  this.getLanguage()
    this.getSildeImages()
    this.pageArr = [
      // Done
      {id:1,arabicPage:"سلايدر الصفحة الرئيسية" ,englishPage:"Home Page Slider"},
      // Done
      {id:2,arabicPage:"سلايدر الصفحة عن لوسكو",englishPage:"About Page Slider"},
      // Done
      {id:3,arabicPage:"سلايدر الصفحة الخدمات",englishPage:"Services Page Slider"},
      // Done
      {id:4,arabicPage:"لوجو الوقع",englishPage:"Logo Website"},
      // Done
      {id:5,arabicPage:"سلايدر داخلي صفحة عن لوسكو",englishPage:"About Page Deep Slider"},
      // Done
      {id:6,arabicPage:"جاليري الصور",englishPage:"Gallary Photos"},
      // Done
      {id:7,arabicPage:"سيكشن عن لوسكو الصفحة الرئيسية",englishPage:"Section About Images"},
      // Done
      {id:8,arabicPage:"سيكشن علامتنا التجارية",englishPage:"Section Our Brand"},
      // Done
      {id:9,arabicPage:"سيكشن عملاءنا",englishPage:"Section Our Clients"},
      // Done
      {id:10,arabicPage:"سيكشن الثاني صفحة الخدمات",englishPage:"Services Page Section Two"},
      // Done
      {id:11,arabicPage:"سيكشن الرابع صفحة الخدمات",englishPage:"Services Page Section Four"},
      //Done
      {id:12,arabicPage:'لوجستك المستودعات',englishPage:"Warehouse Logistics"},
      // Done
      {id:13,arabicPage:'لوس ارت',englishPage:"Logistic Art"},
       // Done
      {id:14,arabicPage:'لوجو اللودر',englishPage:"Logo Loader"},
    ]



  this.sub= this._Router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe({
      next:(value:any)=>{
        let language = value.urlAfterRedirects.split('/')[1]
        this.lang = language
}});
this.SubscripArr.push(this.sub)
}

filter(event:any){
    this.changeFilter = Number(event.target.value)
    if(this.changeFilter == 0){
      this.selectArr = this.imagesArr
    }else {
      this.selectArr = this.imagesArr.filter(el=>el.type == this.changeFilter)
    }
}
getSildeImages(){
  let CallApiGetPhoto:Subscription =  this._ApiserviceService.get("Manager").subscribe({
      next:(res:any)=>{
        if(res.length > 0){

          this.imagesArr = res.filter((el:Manager)=>el.type < 500 )

          for (let i = 0; i < this.imagesArr.length; i++) {
            this.imagesArr[i].changetype = this.imagesArr[i].imagePath.split("\\")[2].split(".")[1]
          }

          if(this.changeFilter == 0){
            this.selectArr = this.imagesArr
          }else {
            this.selectArr = this.imagesArr.filter(el=>el.type == this.changeFilter)
          }

          this.selectArr.reverse()

        }
      }
    })
    this.SubscripArr.push(CallApiGetPhoto)
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

  let model = {
     arabicHeading:'',
     arabicText:'',
     englishHeading:'',
     englishText:'',
     type:0,
     imagePath:''
    }

    if(this.slider.arabicHeading.trim() == ''){
      if(this.lang == 'ar'){
        alert("حقل العنوان الرئيسي بالعربية فارغ")
      }else {
        alert("Input Field Arabic Heading")
      }
      return
    }else if(this.slider.englishHeading.trim() == ''){
      if(this.lang == 'ar'){
        alert("حقل العنوان الرئيسي بالانجليزية فارغ")
      }else {
        alert("Input Field English Heading")
      }
      return
    }else if( this.filename == '' || this.fileToUpload == ''){
      if(this.lang == 'ar'){
        alert("لم يتم ارفاق صورة")
      }else {
        alert("Input Image Field")
      }
        return
    }else if(this.slider.type == 0){
      if(this.lang == 'ar'){
        alert("اختر المكان للاضافة")
      }else {
        alert("Chose The Page")
      }
      return
    }


    let servicesSectionTwo  = this.imagesArr.find(el=>el.type == 10)
    let servicesSectionFour  = this.imagesArr.find(el=>el.type == 11)
    let logo = this.imagesArr.find(el=>el.type == 4)

    if(servicesSectionTwo && this.slider.type == servicesSectionTwo.type){
      alert("Content IsExist")
      return
    }else if(servicesSectionFour && this.slider.type == servicesSectionFour.type){
      alert("Content IsExist")
      return
    }
     if(logo && this.slider.type == logo.type){
      alert("Logo IsExist")
      return
    }

    else{

        model.arabicHeading = this.slider.arabicHeading.trim()
        model.englishHeading = this.slider.englishHeading.trim()
        model.arabicText = this.slider.arabicText.trim()
        model.englishText = this.slider.englishText.trim()
        model.type = this.slider.type

        let formData = new FormData();
        formData.append('file', this.fileToUpload, this.filename);

     let CallApiUploadSend:Subscription = this._ApiserviceService.post("Manager/upload",formData).subscribe({
          next:(res:any)=>{
            model.imagePath = res
            let CallApiSend:Subscription =    this._ApiserviceService.post("Manager",model).subscribe({
              next:(res:any)=>{

                if(this.lang == 'en'){
                  alert("Add Success")
                }else {
                  alert("تم الاضافة بنجاح")
                }

                this.getSildeImages()
                this.slider = {
                  id: 0,
                  arabicHeading: '',
                  englishHeading: '',
                  arabicText: '',
                  englishText: '',
                  imagePath: '',
                  changetype: '',
                  type: 0
                }
                this.ImageInput.nativeElement.value = '';
                this.fileToUpload = '';
                this.filename = ''
              }
            })
            this.SubscripArr.push(CallApiSend)
          }
        })
        this.SubscripArr.push(CallApiUploadSend)
      }

}
OpenUpdateModel(slide:Manager){
      this.openUpdate = true
      this.UpdateSlideId?.patchValue(slide.id)
      this.UpdateArabicHeading?.patchValue(slide.arabicHeading)
      this.UpdateArabicText?.patchValue(slide.arabicText)
      this.UpdateEnglishHeading?.patchValue(slide.englishHeading)
      this.UpdateEnglishText?.patchValue(slide.englishText)
      this.UpdateimagePath?.patchValue(slide.imagePath)
      this.Updatetype?.patchValue(slide.type)
      this.typeFileUpdate = slide.changetype
      this.base65 = this.url+slide.imagePath
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
        this.imagesArr.find(el=>el.id == id)
        this.fileUpdateUpload = '';
        this.filenameUpdate = '';
        this.base65 = this.url + this.imagesArr.find(el=>el.id == id)?.imagePath;
      }
}
cancle(){
      this.openUpdate = false
      this.typeFileUpdate = ''
      this.formUpdate.reset()
}
update(){

    if(this.UpdateArabicHeading?.value == null || this.UpdateArabicHeading?.value.trim() == ''){
      alert("Enter Arabic TitLe")
      return
    }else if(this.UpdateEnglishHeading?.value == null || this.UpdateEnglishHeading?.value.trim() == ''){
      alert("Enter English TitLe")
      return
    }else if(this.Updatetype?.value == null || this.Updatetype?.value == 0 || this.Updatetype?.value == ''){
      alert("Select Page")
      return
    }

      if (this.filenameUpdate == '' && this.fileUpdateUpload == '') {

        if(this.UpdateSlideId?.value != null && this.UpdateSlideId?.value != 0 && this.UpdateSlideId?.value != undefined){

          let model = {
            Id:this.UpdateSlideId?.value,
            arabicHeading:this.UpdateArabicHeading?.value.trim(),
            arabicText:this.UpdateArabicText?.value,
            englishHeading:this.UpdateEnglishHeading?.value.trim(),
            englishText:this.UpdateEnglishText?.value,
            type:this.Updatetype?.value,
            imagePath:this.UpdateimagePath?.value
          }

       let CallApiUpdate:Subscription = this._ApiserviceService.put("Manager",this.UpdateSlideId?.value,model).subscribe({
            next:(res:any)=>{
              if(this.lang == 'en'){
                alert("Update Success")
              }else {
                alert("تم التعديل بنجاح")
              }
              this.getSildeImages()
              this.formUpdate.reset()
              this.openUpdate = false
              this.filenameUpdate = '';
              this.fileUpdateUpload = '';
            }
          })
          this.SubscripArr.push(CallApiUpdate)
        }

      }else{

        let formData = new FormData();
        formData.append('file', this.fileUpdateUpload, this.filenameUpdate);

        if(this.UpdateSlideId?.value != null && this.UpdateSlideId?.value != 0 && this.UpdateSlideId?.value != undefined){

          let model = {
            Id:this.UpdateSlideId?.value,
            arabicHeading:this.UpdateArabicHeading?.value.trim(),
            arabicText:this.UpdateArabicText?.value,
            englishHeading:this.UpdateEnglishHeading?.value.trim(),
            englishText:this.UpdateEnglishText?.value,
            type:this.Updatetype?.value,
            imagePath:''
          }

          let CallApiupload:Subscription = this._ApiserviceService.post("Manager/upload",formData).subscribe({
            next:(res:any)=>{
              model.imagePath = res
              let CallApiupdate:Subscription =  this._ApiserviceService.put("Manager",this.UpdateSlideId?.value,model).subscribe({
                next:(res:any)=>{
                  if(this.lang == 'en'){
                    alert("Update Success")
                  }else {
                    alert("تم التعديل بنجاح")
                  }
                  this.getSildeImages()
                  this.formUpdate.reset()
                  this.openUpdate = false
                  this.filenameUpdate = '';
                  this.fileUpdateUpload = '';
                }
              })
              this.SubscripArr.push(CallApiupdate)
            }
          })
          this.SubscripArr.push(CallApiupload)
        }
      }



}
delete(slide:Manager){

  let confirm:boolean = window.confirm("Are You Sure ?")

  if(confirm){

let CallApiDelete:Subscription = this._ApiserviceService.delete("Manager",slide.id).subscribe({
    next:(res:any)=>{
      if(this.lang == 'en'){
        alert("Delete Success")
      }else {
        alert("تم الحذف بنجاح")
      }
      this.getSildeImages()
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
