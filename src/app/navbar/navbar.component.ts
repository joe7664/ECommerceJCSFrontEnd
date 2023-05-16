import { Component } from '@angular/core';
import {Router, Routes } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public loginService:LoginService, private router:Router){

  }
  isLoggedIn:number=0;
  ngOnInit(){
    this.isLoggedIn=this.loginService.id;
  }
  logout(){
    localStorage.setItem("accountId", "0");
    this.loginService.id=0;
    this.router.navigate(["/login"]);
  }
  logId(){
    console.log(this.isLoggedIn);
  }
}
