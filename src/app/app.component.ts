import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}
ngOnInit(): void {}
//   servname=''
//   abc(myname:any){
//     this.xyz.dblogic(myname)
//     console.log("hi" +myname)
//   }
// }
  title = 'project';
rateOfInterest=2;
principle:any;
month:any;
rate:any;
select(myval1:any){
  console.log(this.rateOfInterest)
    this.rateOfInterest=myval1;
        console.log(this.rateOfInterest)
}
cal(principle:any,month:any,rate:any){
  this.principle=principle;
  this.month=month;
  this.rate=rate;
  var a=this.principle*this.month*this.rate;
  var b=a/100;
  console.log(b)





}
// mydata=""

}
