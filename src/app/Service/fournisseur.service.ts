import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Fournisseur } from '../../Models';


@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private _urlFournisseur = "http://127.0.0.1:8000/gestion/fournisseur"

  
  constructor(private _httpClient : HttpClient) { }


  GetAll()
  {
    return this._httpClient.get(this._urlFournisseur);
  }

  GetById(id:number)
  {
    return this._httpClient.get(this._urlFournisseur+'/'+id)
  }

  AjouterFournisseur(fournisseur:Fournisseur)
  {
    return this._httpClient.post(this._urlFournisseur,fournisseur)
  }
  getProperties(APIUrl: string): Observable<any> {
    return this._httpClient.get(APIUrl);
  }

  searchOptions(query: string): Observable<any[]> {
    // Remplace 'https://api.example.com/search' par l'URL de ton API
    return this._httpClient.get<any[]>(this._urlFournisseur+`/autocomplete?nomfournisseur=`+query);
  }
} 
