import { Injectable } from '@angular/core';
import { Corrida } from '../models/corrida';

@Injectable({
  providedIn: 'root'
})
export class CorridaService {
  private corridas: Corrida[] = [];

  cadastrarCorrida(corrida: Corrida){
    corrida.id = this.corridas.length + 1;

    this.corridas.push(corrida);
  };

  listarCorridas(){
    console.table(this.corridas);

    return this.corridas;
  };

  constructor() { }
}
