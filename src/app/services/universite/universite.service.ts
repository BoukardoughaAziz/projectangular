import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Universite } from '../../models/Universite'; // Adjust the path to your Universite model

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  private apiUrl = 'http://localhost:8081/api/universite'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getUniversites(): Observable<Universite[]> {
    return this.http.get<Universite[]>(`${this.apiUrl}/getall`);
  }
  
  getUniversiteById(id: number): Observable<Universite> {
    return this.http.get<Universite>(`${this.apiUrl}/getbyid/${id}`);
  }

  addUniversite(universite: Universite): Observable<Universite> {
    return this.http.post<Universite>(`${this.apiUrl}/adduniversite`, universite);
  }

  updateUniversite(universite: Universite): Observable<Universite> {
    return this.http.put<Universite>(`${this.apiUrl}/updateuniversite`, universite);
  }

  affecterFoyerAUniversite(idFoyer: number, nomUniversite: string): Observable<Universite> {
    return this.http.put<Universite>(`${this.apiUrl}/affecterFoyerAUniversite/${idFoyer}/${nomUniversite}`, {});
  }

  desaffecterFoyerAUniversite(idUniversite: number): Observable<Universite> {
    return this.http.put<Universite>(`${this.apiUrl}/desaffecterFoyerAUniversite/${idUniversite}`, {});

    
  }

  deleteUniversite(idUniversite: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${idUniversite}`);
  }
}
