import { Injectable } from '@angular/core';
import { Atleta } from '../models/Atleta';
import { splitNsName } from '@angular/compiler';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtletaServiceService {

  constructor(private http: HttpClient) { }

  listarAtletas(): Observable<Atleta[]> {
      const urlApi = 'https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta'
      return this.http.get<Atleta[]>(urlApi)
  }

  listarAtleta(idAtleta: number): Observable<Atleta> {
      const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${idAtleta}`
      return this.http.get<Atleta>(urlApi)
  }

  salvarAtleta(atleta: Atleta): Observable<Atleta> {
      const urlApi = 'https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta'
      return this.http.post<Atleta>(urlApi, atleta)
  }

  excluirAtleta(idAtleta: number): Observable<Atleta> {
      const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${idAtleta}`
      return this.http.delete<Atleta>(urlApi)
  }

  alterarAtleta(atleta: Atleta): Observable<Atleta> {
      const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${atleta.id}`
      return this.http.put<Atleta>(urlApi, atleta)
  }


  // private atletas: Atleta[] = [];

  // adicionarAtleta(atleta: Atleta){
  //   atleta.id = this.atletas.length + 1;

  //   this.atletas.push(atleta);
  // };

  // listarAtletas(){
  //   console.table(this.atletas);

  //   return this.atletas;
  // };

  // removerElemento(idAtleta: number){
  //   this.atletas = this.atletas.filter(elem=>elem.id !== idAtleta);
  // };

  // removerElemento2(atleta: Atleta){
  //   let posArray = this.atletas.findIndex(elem=>elem.id !== atleta.id)
  //   this.atletas.splice(1, posArray)
  // };

  // alterarElemento(atleta: Atleta){
  //   let posArray = this.atletas.findIndex(elem=>elem.id !== atleta.id)
  //   this.atletas[posArray] = atleta
  // };

  // constructor() { }
}
