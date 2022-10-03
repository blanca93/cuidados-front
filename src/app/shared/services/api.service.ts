import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuidado } from '../models/cuidado';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  getData(): Observable<Cuidado[]> {
    return this.http.get<Cuidado[]>(`${environment.apiUrl}/cuidados`);
  }

  savePersona(persona: string): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/persona`, persona);
  }

  saveCuidado(cuidado: Cuidado): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/cuidados`, cuidado);
  }
}
