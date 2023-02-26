import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Manager } from 'src/app/views/Admin/models/Manager';
import { environment } from 'src/environments/environment';
import { ApiserviceService } from '../../services/ApiCrud/apiservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit,OnDestroy {

  constructor(public _ApiserviceService:ApiserviceService){}
  SubscripArr:Subscription[] = []
  lang: string = ''
  url:string = `${environment.imageUrl}`
  loader:Manager = {
    id: 0,
    arabicHeading: '',
    englishHeading: '',
    arabicText: '',
    englishText: '',
    imagePath: '',
    changetype: '',
    type: 0
  }

  logo:Manager = {
    id: 0,
    arabicHeading: '',
    englishHeading: '',
    arabicText: '',
    englishText: '',
    imagePath: '',
    changetype: '',
    type: 0
  }

  ngOnInit(): void {
    this.getLogo()
    this.getloader()
  }


  getLogo(){
   let getLogo:Subscription = this._ApiserviceService.getById("Manager",4).subscribe({
      next:(res:any)=>{
        if(res.length > 0){
          this.logo = res[0]
          this.logo.imagePath = this.url+this.logo.imagePath
        }
      }
    })
this.SubscripArr.push(getLogo)
  }

  getloader(){
    let getLogo:Subscription = this._ApiserviceService.getById("Manager",14).subscribe({
       next:(res:any)=>{
         if(res.length > 0){
           this.loader = res[0]
           this.loader.imagePath = this.url+this.loader.imagePath
         }
       }
     })
     this.SubscripArr.push(getLogo)
   }

  ngOnDestroy(): void {
    for (let i = 0; i < this.SubscripArr.length; i++) {
      this.SubscripArr[i].unsubscribe()
    }
  }

}
