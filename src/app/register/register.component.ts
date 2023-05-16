import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email:string="";
  password:string="";

  constructor(private loginService:LoginService, private router:Router){}
  
  submit() {
      this.loginService.register({"email":this.email, "password":this.password})
      .subscribe(
        json => {
        console.log(json)
        this.router.navigate(['/login']);
      })
  }
}
