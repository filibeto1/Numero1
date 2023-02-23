import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    email: String;
    password: string;
    confirmPassword : string;
   
    
    constructor(){
     this.email = '';
     this.password = '';
     this.confirmPassword= '';
   
    }
    register(){
     console.log('Email: '+ this.email);
     console.log('Password: '+ this.password);
     console.log('confirPassword: '+this.confirmPassword)
    }
   }