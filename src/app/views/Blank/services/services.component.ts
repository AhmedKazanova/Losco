import { Component, OnInit, OnDestroy,PLATFORM_ID, Inject } from '@angular/core';
import { ApiserviceService } from 'src/app/shared/services/ApiCrud/apiservice.service';
import { environment } from 'src/environments/environment';
import { Manager } from '../../Admin/models/Manager';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { isPlatformServer } from '@angular/common';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit,OnDestroy {


  constructor(
    @Inject(PLATFORM_ID) platformID:Object,
    private _Router:Router,
     private _ApiserviceService:ApiserviceService)
      {
        this.isServer = isPlatformServer(platformID)
      }

  SubscripArr:Subscription[] = []
  isServer:boolean = false
  ServicesSlidesArr:Manager [] = []
  GallaryImagesArr:Manager []  = []
  LogisticArr:Manager[] = []
  LogisticArtArr:Manager[] = []
  lang: string = ''
  url:string = `${environment.imageUrl}`
  SectionOne:Manager = {id: 0,arabicHeading: '',englishHeading: '',arabicText: '',englishText: '',imagePath: '',changetype: '',type: 0}
  SectionTwo:Manager = {id: 0,arabicHeading: '',englishHeading: '',arabicText: '',englishText: '',imagePath: '',changetype: '',type: 0}
  SectionFour:Manager = {id: 0,arabicHeading: '',englishHeading: '',arabicText: '',englishText: '',imagePath: '',changetype: '',type: 0}
  Services:any;
  sub:Subscription = new Subscription

ngOnInit(): void {
  this.getLanguage()
  this.getAboutSlideImages()
  this.getGallaryImages()
  this.getSectionOneContents()
  this.getSectionTwo()
  this.getSectionFour()
  this.getLogistic()
  this.getLogisticArt()
  this.playSwiper()

this.sub=this._Router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe({
    next:(value:any)=>{
      let language = value.urlAfterRedirects.split('/')[1]
      this.lang = language
}});

this.SubscripArr.push(this.sub)

}

playSwiper(){
  if(!this.isServer){
   this.Services={
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 20,
      grabCursor: true,
      loop: false,
      loopFillGroupWithBlank: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
      },

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
getAboutSlideImages(){
 let CallApiAboutSlide:Subscription = this._ApiserviceService.getById("Manager",3).subscribe({
    next:(res:any)=>{
      if(res.length > 0){
        this.ServicesSlidesArr = res
        for (let i = 0; i < this.ServicesSlidesArr.length; i++) {
          this.ServicesSlidesArr[i].imagePath = this.url+this.ServicesSlidesArr[i].imagePath
          this.ServicesSlidesArr[i].changetype = this.ServicesSlidesArr[i].imagePath.split("\\")[2].split(".")[1]
        }
      }
    }
  })
  this.SubscripArr.push(CallApiAboutSlide)
}
getGallaryImages(){
  let CallApiGallaryImages:Subscription =this._ApiserviceService.getById("Manager",6).subscribe({
  next:(res:any)=>{
    if(res.length > 0){
      this.GallaryImagesArr = res
      for (let i = 0; i < this.GallaryImagesArr.length; i++) {
        this.GallaryImagesArr[i].imagePath = this.url+this.GallaryImagesArr[i].imagePath
      }
    }
  }
})
this.SubscripArr.push(CallApiGallaryImages)
}
getSectionOneContents(){
  let CallApiOneContents:Subscription = this._ApiserviceService.getById("Manager",505).subscribe({
  next:(res:any)=>{
    if(res.length > 0){
      this.SectionOne = res[0]
      this.SectionOne.imagePath = this.url+this.SectionOne.imagePath
    }
  }
})
this.SubscripArr.push(CallApiOneContents)
}
getSectionTwo(){
  let CallApiSectionTwo:Subscription = this._ApiserviceService.getById("Manager",10).subscribe({
  next:(res:any)=>{
    if(res.length > 0){
      this.SectionTwo = res[0]
      this.SectionTwo.imagePath = this.url+this.SectionTwo.imagePath
    }
  }
})
this.SubscripArr.push(CallApiSectionTwo)
}
getSectionFour(){
  let CallApiSectionFour:Subscription = this._ApiserviceService.getById("Manager",11).subscribe({
  next:(res:any)=>{
    if(res.length > 0){
      this.SectionFour = res[0]
      this.SectionFour.imagePath = this.url+this.SectionFour.imagePath
    }
  }
})
this.SubscripArr.push(CallApiSectionFour)
}
getLogistic(){
  let CallApiLogistic:Subscription = this._ApiserviceService.getById("Manager",12).subscribe({
  next:(res:any)=>{
    if(res.length > 0){
      this.LogisticArr = res
      for (let i = 0; i < this.LogisticArr.length; i++) {
        this.LogisticArr[i].imagePath = this.url+this.LogisticArr[i].imagePath
      }
    }
  }
})
this.SubscripArr.push(CallApiLogistic)
}
getLogisticArt(){
  let CallApiLogisticArt:Subscription = this._ApiserviceService.getById("Manager",13).subscribe({
  next:(res:any)=>{
    if(res.length > 0){
      this.LogisticArtArr = res
      for (let i = 0; i < this.LogisticArtArr.length; i++) {
        this.LogisticArtArr[i].imagePath = this.url+this.LogisticArtArr[i].imagePath
      }
    }
  }
})
this.SubscripArr.push(CallApiLogisticArt)
}

ngOnDestroy(): void {
  for (let i = 0; i < this.SubscripArr.length; i++) {
    this.SubscripArr[i].unsubscribe()
  }
}

}
