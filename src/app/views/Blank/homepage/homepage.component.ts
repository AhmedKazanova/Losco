import { Component, OnDestroy, OnInit,PLATFORM_ID, Inject } from '@angular/core';
import { ApiserviceService } from 'src/app/shared/services/ApiCrud/apiservice.service';
import { environment } from 'src/environments/environment';
import { Manager } from '../../Admin/models/Manager';
import {  NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { isPlatformServer } from '@angular/common';

interface NewsData {
  newsID:number
  arabicHeading:string
  arabicText:string
  englishHeading:string
  englishText:string
  imagePath:string
  date:string
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit , OnDestroy {

  SubscripArr:Subscription[] = []
  isServer:boolean = false
  lang: string = ''
  url:string = `${environment.imageUrl}`
  HomeSlidesArr:Manager [] = []
  About:Manager = {
    id: 0,
    arabicHeading: '',
    englishHeading: '',
    arabicText: '',
    englishText: '',
    imagePath: '',
    changetype: '',
    type: 0
  }
  ServicesArr:Manager[] = []
  BrandsArr:Manager[] = []
  NumbersArr:Manager[] = []
  newsArr:NewsData[] = []
  dateArr:any[] = []
  ClientsArr:Manager[] = []
  Home:any;
  SwipperNews:any;
  SwipperClients:any;
  sub:Subscription = new Subscription



  constructor(
    @Inject(PLATFORM_ID) platformID:Object,
    private _ApiserviceService:ApiserviceService,
    private _Router:Router){
      this.isServer = isPlatformServer(platformID)
  }

  ngOnInit(): void {
    this.getLanguage()
      this.getHomeSlideImages()
      this.getAbout()
      this.getServices()
     // this.getBrand()
      this.getNumbers()
      this.getNews()
      this.getClients()
      this.playSwiper()


this.sub=this._Router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe({
        next:(value:any)=>{
          let language = value.urlAfterRedirects.split('/')[1]
          this.lang = language
  }});

  this.SubscripArr.push(this.sub)

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
    {id:12,arabicDate:'ذو الحجة',englishDate:'Dhul-Hijjah'}]

  }

  playSwiper(){
    if(!this.isServer){

   this.Home = {
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

      this.SwipperNews = {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: false,
        loop: false,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },

      }

      this.SwipperClients = {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: false,
        loop: false,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
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

  getHomeSlideImages(){
    let CallApiHomeSlide:Subscription = this._ApiserviceService.getById("Manager",1).subscribe({
        next:(res:any)=>{
          if(res.length > 0){
            this.HomeSlidesArr = res
            for (let i = 0; i < this.HomeSlidesArr.length; i++) {
              this.HomeSlidesArr[i].changetype = this.HomeSlidesArr[i].imagePath.split("\\")[2].split(".")[1]
            }
          }
        }
      })

      this.SubscripArr.push(CallApiHomeSlide)
  }
  getAbout(){
   let CallApiAbout:Subscription = this._ApiserviceService.getById("Manager",500).subscribe({
      next:(res:any)=>{
        if(res.length > 0){
          this.About = res[0]
        }
      }
    })
    this.SubscripArr.push(CallApiAbout)
  }
  getServices(){
   let CallApiServices:Subscription = this._ApiserviceService.getById("Manager",7).subscribe({
      next:(res:any)=>{
        if(res.length > 0){
          this.ServicesArr = res
        }
      }
    })
    this.SubscripArr.push(CallApiServices)
  }
  getNumbers(){
   let CallApiNumbers:Subscription = this._ApiserviceService.getById("Manager",501).subscribe({
      next:(res:any)=>{
        if(res.length > 0){
          this.NumbersArr = res
        }
      }
    })
    this.SubscripArr.push(CallApiNumbers)
  }
  // getBrand(){
  // let CallApiBrand:Subscription =  this._ApiserviceService.getById("Manager",8).subscribe({
  //     next:(res:any)=>{
  //       if(res.length > 0){
  //         this.BrandsArr = res
  //       }
  //     }
  //   })
  //   this.SubscripArr.push(CallApiBrand)
  // }
  getNews(){
   let CallApiNews:Subscription = this._ApiserviceService.get("News").subscribe({
      next:(res:any)=>{
        if(res.length > 0){
          this.newsArr = res
        }
      }
    })
    this.SubscripArr.push(CallApiNews)
  }
  getClients(){
   let CallApiClients:Subscription = this._ApiserviceService.getById("Manager",9).subscribe({
      next:(res:any)=>{
        if(res.length > 0){
          this.ClientsArr = res
        }
      }
    })
    this.SubscripArr.push(CallApiClients)
  }





  ngOnDestroy(): void {
    for (let i = 0; i < this.SubscripArr.length; i++) {
      this.SubscripArr[i].unsubscribe()
    }
  }

}
