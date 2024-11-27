import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatistiqueService {
  private _urlStats = 'http://127.0.0.1:8000/gestion/stats';
  constructor(private _http: HttpClient) {}

  getStats() {
    return this._http.get(this._urlStats);
  }
}
