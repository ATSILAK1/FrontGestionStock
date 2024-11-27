import { Routes } from '@angular/router';
import { LoginComponent } from './components/Login/login/login.component';
import { MainpageComponent } from './components/Home/mainpage/mainpage.component';
import { isAdminInGuard, isLoggedInGuard } from './Service/is-logged-in.guard';
import { UpdateproduitComponent } from './components/produit/updateproduit/updateproduit.component';
import { AddFournisseurComponent } from './components/fournisseur/add-fournisseur/add-fournisseur.component';

import { TransactionachataddComponent } from './components/transaction/achat/transactionachatadd/transactionachatadd.component';
import { TransacationventeaddComponent } from './components/transaction/vente/transacationventeadd/transacationventeadd.component';

export const routes: Routes = [
    // il faut securise le login cas : si on est deja connecter on peut pas y se reloger 
    {path:"login", component:LoginComponent},
    {path:"home",component:MainpageComponent , canActivate : [isLoggedInGuard]},
    {path:"produit/edit/:id",component:UpdateproduitComponent, canActivate : [isLoggedInGuard , isAdminInGuard]},
    {path:"fournisseur",component:AddFournisseurComponent, canActivate : [isLoggedInGuard ]},
    {path:"transactionachat",component:TransactionachataddComponent , canActivate:[isLoggedInGuard]},
    {path:"transactionvente",component:TransacationventeaddComponent , canActivate:[isLoggedInGuard]},

   
];
