import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';

const route: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'home', component:HomepageComponent},
  {path:'cart', component:CartComponent},
  {path:'**', component:HomepageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    MatToolbarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
