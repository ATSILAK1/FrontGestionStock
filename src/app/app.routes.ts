import { Routes } from '@angular/router';
import { LoginComponent } from './components/Login/login/login.component';
import { MainpageComponent } from './components/Home/mainpage/mainpage.component';
import { isLoggedInGuard } from './Service/is-logged-in.guard';

export const routes: Routes = [
    // il faut securise le login cas : si on est deja connecter on peut pas y se reloger 
    {path: "login", component:LoginComponent},

    {path: "home",component:MainpageComponent , canActivate : [isLoggedInGuard]},
   
];
