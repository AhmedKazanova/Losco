import { Component, OnInit, OnDestroy,PLATFORM_ID, Inject  } from '@angular/core';
import { filter, Subscription } from 'rxjs';
import { ApiserviceService } from 'src/app/shared/services/ApiCrud/apiservice.service';
import { environment } from 'src/environments/environment';
import { Manager } from '../../Admin/models/Manager';
import { NavigationEnd, Router } from '@angular/router';
import { isPlatformServer } from '@angular/common';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit , OnDestroy {

  SubscripArr:Subscription[] = []
  isServer:boolean = false
  lang: string = ''
  url:string = `${environment.imageUrl}`
  AboutSlidesArr:Manager [] = []
  AboutSmallSlidesArr:Manager [] = []
  AboutContentArr:Manager[] = []
  OurVision:Manager= {id: 0,arabicHeading: '',englishHeading: '',arabicText: '',englishText: '',imagePath: '',changetype: '',type: 0}
  OurGoals:Manager= {id: 0,arabicHeading: '',englishHeading: '',arabicText: '',englishText: '',imagePath: '',changetype: '',type: 0}
  About:any
  sub:Subscription = new Subscription
  SwipperAbout:any;

  constructor(
    @Inject(PLATFORM_ID) platformID:Object,
    private _Router:Router ,
    private _ApiserviceService:ApiserviceService) {
      this.isServer = isPlatformServer(platformID)
    }


  ngOnInit(): void {
    this.getLanguage()
    this.getAboutSlideImages()
    this.getAboutSmallSlideImages()
    this.getContent()
    this.getOurVision()
    this.getOurGoals()
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
 this.About={
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 20,
      grabCursor: true,
      loop: true,
      loopFillGroupWithBlank: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
      },

    }

    this.SwipperAbout = {
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 20,
      grabCursor: false,
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
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
 let CallApiAboutSlide:Subscription =this._ApiserviceService.getById("Manager",2).subscribe({
      next:(res:any)=>{
        if(res.length > 0){
          this.AboutSlidesArr = res
          for (let i = 0; i < this.AboutSlidesArr.length; i++) {
            this.AboutSlidesArr[i].imagePath = this.url+this.AboutSlidesArr[i].imagePath
            this.AboutSlidesArr[i].changetype = this.AboutSlidesArr[i].imagePath.split("\\")[2].split(".")[1]
          }
        }
      }
    })
    this.SubscripArr.push(CallApiAboutSlide)
}
getAboutSmallSlideImages(){
  let CallApiAboutSmallSlide:Subscription = this._ApiserviceService.getById("Manager",5).subscribe({
      next:(res:any)=>{
        if(res.length > 0){
          this.AboutSmallSlidesArr = res
          for (let i = 0; i < this.AboutSmallSlidesArr.length; i++) {
            this.AboutSmallSlidesArr[i].imagePath = this.url+ this.AboutSmallSlidesArr[i].imagePath
            this.AboutSmallSlidesArr[i].changetype = this.AboutSmallSlidesArr[i].imagePath.split("\\")[2].split(".")[1]
          }
        }
      }
    })
    this.SubscripArr.push(CallApiAboutSmallSlide)
}
getContent(){
  let CallApiContent:Subscription = this._ApiserviceService.getById("Manager",502).subscribe({
    next:(res:any)=>{
      if(res.length > 0){
        this.AboutContentArr = res
      }
    }
  })
  this.SubscripArr.push(CallApiContent)
}
getOurVision(){
  let CallApiOurVision:Subscription = this._ApiserviceService.getById("Manager",503).subscribe({
    next:(res:any)=>{
      if(res.length > 0){
        this.OurVision = res[0]
      }
    }
  })
  this.SubscripArr.push(CallApiOurVision)
}
getOurGoals(){
  let CallApiOurGoals:Subscription = this._ApiserviceService.getById("Manager",504).subscribe({
    next:(res:any)=>{
      if(res.length > 0){
        this.OurGoals = res[0]
      }
    }
  })
  this.SubscripArr.push(CallApiOurGoals)
}

ngOnDestroy(): void {
    for (let i = 0; i < this.SubscripArr.length; i++) {
      this.SubscripArr[i].unsubscribe()
    }
}


}
