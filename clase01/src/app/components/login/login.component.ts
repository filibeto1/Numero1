import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 email: String;
 password: string;

 
 constructor(){
  this.email = '';
  this.password = '';

 }
 login(){
  console.log('Email: '+ this.email);
  console.log('Password: '+ this.password);
 }
}
