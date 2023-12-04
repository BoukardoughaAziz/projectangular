import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bloc } from 'src/app/models/Bloc';

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  url="http://localhost:8081/api/bloc"

  

  constructor(private http: HttpClient) { }

  getBlocs():Observable<Bloc[]>{
    return this.http.get<Bloc[]>( `${this.url}/getall`)
  }

  // getbloc(idbloc : number ):Observable<Bloc>{
  //   const userurl = `${this.url}/${idBloc}`;
  //   return this.http.get<Bloc>(userurl)
  // }

  addbloc(bloc :Bloc):Observable<Bloc>{
    return this.http.post<Bloc>(`${this.url}/addBloc`,bloc)
  }


  deleteBloc(idBloc : number){
    console.log(`${this.url}/deletebloc/${idBloc}`)
    return this.http.delete(`${this.url}/deleteBloc/${idBloc}`)
  }

}
