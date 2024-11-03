import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../Models';



const currentTokenVariable:string = 'currentToken';
const currentUserVariable:string = 'currentUser'

@Injectable({
  providedIn: 'root'
  
  
})


export class AuthenticationService implements OnInit {

  

  private _loginUrl = "http://127.0.0.1:8000/auth";
  constructor(private _http: HttpClient) {}
  ngOnInit(): void {
    
  }
 
 
  // login method

  Login(username: string, password: string): Observable<any> {
    return this._http.post(this._loginUrl+"/login/", { username, password }).pipe(
      map((user: any) => {
        // prepare the response to be handled, then return
       
        if(user){

          localStorage.setItem(currentTokenVariable,JSON.stringify(user.token))
          localStorage.setItem(currentUserVariable,JSON.stringify(user.user))
        }
        return user;
      }
      
    )
    );
  }
  LoginByToken(){

  }




  Logout():void
  {
    localStorage.removeItem(currentUserVariable)
    localStorage.removeItem(currentTokenVariable)
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(currentTokenVariable); // Vérifier la présence du token
  }

  GetCurrentUser() : User | null
  {
      if (localStorage.getItem(currentUserVariable) == null)
          return null 
      
    return JSON.parse(localStorage.getItem(currentUserVariable)!)
  }
}
