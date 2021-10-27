import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 ngOnInit(): void {
  }
login(Name:any,Password:any,phone:any){
  localStorage.setItem("Username",Name);
  localStorage.setItem("Password",Password);
  localStorage.setItem("Phone",phone);
  console.log(Name+""+Password)
}
constructor(private router:Router) { }
reg(){
this.router.navigateByUrl('login');
}
}
