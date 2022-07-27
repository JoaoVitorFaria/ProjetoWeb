import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class GeneralService {

  constructor(private http: HttpClient) { }

  createAssociado(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/associado`, data);
  }
  
  getAssociado(): Observable<any>{
    return this.http.get(`${baseUrl}/associado`);
  }

  deleteAssociado(id: number): Observable<any>{
    return this.http.delete(`${baseUrl}/associado/${id}`);
  }

  createPublicacao(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/publicacao`, data);
  }

  getPublicacao(): Observable<any>{
    return this.http.get(`${baseUrl}/publicacao`);
  }

  deletePublicacao(id: number): Observable<any>{
    return this.http.delete(`${baseUrl}/publicacao/${id}`);
  }

  createExemplar(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/exemplar`, data);
  }

  getExemplar(): Observable<any>{
    return this.http.get(`${baseUrl}/exemplar`);
  }

  deleteExemplar(id: number): Observable<any>{
    return this.http.delete(`${baseUrl}/exemplar/${id}`);
  }

}
