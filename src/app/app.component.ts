import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { initializeApp } from 'firebase/app';
import * as moment from 'moment';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isServer:boolean = false

  constructor(
    @Inject(PLATFORM_ID) platformID:Object,
    @Inject(DOCUMENT) private document: Document,
  ) {

    this.isServer = isPlatformServer(platformID)





}
  ngOnInit(): void {

const time = moment.utc()
const firebaseConfig = {}
initializeApp(firebaseConfig)

    const headTag = this.document.getElementsByTagName('head')[0] as HTMLHeadElement;

    const bundleName =  'bootstrap.min.css';
    const newLink = this.document.createElement('link');
    newLink.id = 'bootstrap.min.css';
    newLink.rel = 'stylesheet';
    newLink.href = bundleName;
    headTag.appendChild(newLink);
    //
    const bundleName3 =  'styles.css';
    const newLink3 = this.document.createElement('link');
    newLink3.id = 'styles.css';
    newLink3.rel = 'preload'
    newLink3.as = "style"
    newLink3.href = bundleName3;
    newLink3.media = 'all'
    newLink3.onload = function(e){
       newLink3.rel = 'stylesheet';
    }
    headTag.appendChild(newLink3);
    //



 if(this.isServer == false){
  let getLang = localStorage.getItem("LOCALIZE_DEFAULT_LANGUAGE")
  if(getLang != null && getLang != undefined){
    if(getLang == 'ar'){
      this.document.dir = "rtl"
      this.document.getElementsByTagName('html')[0].lang = 'ar'
    }else if(getLang == 'en'){
      this.document.dir = "ltr"
      this.document.getElementsByTagName('html')[0].lang = 'en'
    }
  }
 }


}


}
