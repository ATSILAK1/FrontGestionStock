import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Produit } from '../../Models';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  _UrlProduit = 'http://127.0.0.1:8000/gestion/produit';

  messageSuccesOrError = '';

  private refreshNeeded = new Subject();
  constructor(private _http: HttpClient) {}

  searchOptions(query: string): Observable<any[]> {
    // Remplace 'https://api.example.com/search' par l'URL de ton API
    return this._http.get<any[]>(
      this._UrlProduit + `/autocomplete?nom=` + query
    );
  }

  GetAllProduit(): Observable<any> {
    return this._http.get(this._UrlProduit);
  }

  getProperties(APIUrl: string): Observable<any> {
    return this._http.get(APIUrl);
  }

  AjouterNouveauProduit(produit: Produit) {
    return this._http.post(this._UrlProduit, {
      prix: produit.prix,
      nom: produit.nom,
      description: produit.description,
      quantiteStock: produit.quantiteStock,
    });
  }

  SupprimerProduit(id: number) {
    this._http.delete(this._UrlProduit + '/' + id.toString()).subscribe({
      next: (response) => {
        console.log(response);
        return response;
      },
      error(err) {
        console.log(err);
        return err;
      },
    });
  }

  updateProduit(id: number, produit: Produit) {
    return this._http.put(this._UrlProduit + '/' + id, produit);
  }

  getProduit(id: number) {
    return this._http.get(this._UrlProduit + '/' + id);
  }
}
