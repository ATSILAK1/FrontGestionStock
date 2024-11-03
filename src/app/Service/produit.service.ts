import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Produit } from '../../Models';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  _UrlProduit = "http://127.0.0.1:8000/gestion/"

  messageSuccesOrError = ""
  constructor(private _http: HttpClient) { }

  GetAllProduit():Observable<any>
  {
    return this._http.get(this._UrlProduit);
  }

  AjouterNouveauProduit( produit:Produit )
  {
    alert(produit.nom)

   //this._http.get(this._UrlProduit+"plist").forEach(resp => console.log(resp)) 
    
   this._http.post(this._UrlProduit+"pcreate", { prix: produit.prix, nom: produit.nom, description: produit.description },
    { headers: { 'Content-Type': 'application/json' } }
  ).subscribe({
    next: (response) =>{ 
      return response
    },
    error: (err) =>{ 
      
      return null ;
     
    }
  }); 
      
  }
}
