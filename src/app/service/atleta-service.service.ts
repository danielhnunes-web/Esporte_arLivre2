import { Injectable } from '@angular/core';
import { Atleta } from '../models/Atleta';
import { splitNsName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AtletaServiceService {
  private atletas: Atleta[] = [];

  adicionarAtleta(atleta: Atleta){
    atleta.id = this.atletas.length + 1;

    this.atletas.push(atleta);
  };

  listarAtletas(){
    console.table(this.atletas);

    return this.atletas;
  };

  removerElemento(idAtleta: number){
    this.atletas = this.atletas.filter(elem=>elem.id !== idAtleta);
  };

  removerElemento2(atleta: Atleta){
    let posArray = this.atletas.findIndex(elem=>elem.id !== atleta.id)
    this.atletas.splice(1, posArray)
  };

  alterarElemento(atleta: Atleta){
    let posArray = this.atletas.findIndex(elem=>elem.id !== atleta.id)
    this.atletas[posArray] = atleta
  };

  constructor() { }
}
