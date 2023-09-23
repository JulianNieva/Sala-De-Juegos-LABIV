import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  { path:"",
    redirectTo:"/home",
    pathMatch:"full"},
  {
    path:"login",
    component:LoginComponent},
  {
    path:"register",
    component:RegisterComponent},
  { 
    path:"aboutme",
    component:AboutmeComponent},
  {
    path:"home",
    component:HomeComponent},
  {
    path:"chat",
    component:ChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
