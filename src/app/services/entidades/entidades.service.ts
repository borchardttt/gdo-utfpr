import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntidadesService {

  private apiUrl = 'http://apigdoutfpr.onrender.com/entidades';

  constructor(private http: HttpClient) {}

  getAllEntidades(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getEntidadeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createEntidade(entidade: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, entidade);
  }

  updateEntidade(id: number, entidade: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, entidade);
  }

  deleteEntidade(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
