import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 myname:any; 
mypass:any;  
constructor(private router:Router) { } 
 register(Username:any,Password:any)
{ 
    this.myname=  localStorage.getItem("Username");
    this.mypass=  localStorage.getItem("Password");  
    if((this.myname==Username)&&(this.mypass==Password) )
  {     
     alert("logged in") 
    this.router.navigateByUrl('register');

     }
   else{ 
          alert("username or password is wrong")   
     }  
    }
  ngOnInit(): void {
  }
}
