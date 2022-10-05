import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuidado } from '../models/cuidado';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Persona } from '../models/persona';
import { Balance } from '../models/balance';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  getCuidados(): Observable<Cuidado[]> {
    return this.http.get<Cuidado[]>(`${environment.apiUrl}/cuidados`);
  }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${environment.apiUrl}/personas`);
  }

  getBalance(): Observable<Balance[]> {
    return this.http.get<Balance[]>(`${environment.apiUrl}/balance`);
  }

  savePersona(persona: string): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/personas`, persona);
  }

  saveCuidado(cuidado: Cuidado): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/cuidados`, cuidado);
  }
}
