import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string="";
  password:string="";

  constructor(private loginService:LoginService, private router:Router){}
  
  submit() {
      this.loginService.login({"email":this.email, "password":this.password})
      .subscribe(
        data => {
        this.loginService.id = data.accountId as unknown as number;
        localStorage.setItem("accountId", data.accountId as unknown as string)
        this.router.navigate(['/home']);
      })
  }
}
