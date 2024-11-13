import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransactionAchat } from '../../Models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private _BaseUrl = 'http://127.0.0.1:8000/gestion/transaction'
  constructor(private _httpClient : HttpClient) { }

  GetAllTransactionAchat()
  {
    return this._httpClient.get(this._BaseUrl+'achat')
  }

  AjouterTransactionAchat(transactionachat:TransactionAchat)
  {
    return this._httpClient.post(this._BaseUrl+"achat",transactionachat)
  }

  getProperties(APIUrl: string): Observable<any> {
    return this._httpClient.get(APIUrl);
  }
  SupprimerAchat(id:number)
  {
    return this._httpClient.delete(this._BaseUrl+"/"+id.toString())
  }

}
