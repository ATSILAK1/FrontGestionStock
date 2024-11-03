import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { AuthenticationService } from '../../../Service/authentication.service';
import { FormControl , FormGroup , ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { routes } from '../../../app.routes';
import { Router,RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports :[ReactiveFormsModule,CommonModule ,HttpClientModule]
})
export class LoginComponent implements OnInit {
 
  errorMessage :string = ''
  loginForm = new FormGroup({
    userName: new FormControl<string>('',Validators.required),
    passWord: new FormControl<string>('',Validators.required)
  })
  constructor( private authServ : AuthenticationService , private router : Router)
  {
   
  } 
  ngOnInit(): void {
    
  }

  login(): void {
     if (this.loginForm.valid)
    {
      this.authServ.Login(this.loginForm.value.userName!,this.loginForm.value.passWord!).subscribe({
        next:(response)  =>{
          console.log(response)
          if(response.user != null)
          this.router.navigate(['home'])
           
          },
        error :(error) =>{
          console.log(error)
          this.errorMessage = "Mot de passe Incorrecte"
        }} );

  }
  else 
  this.errorMessage = "erreur Check Form "

    
     
  
}}
