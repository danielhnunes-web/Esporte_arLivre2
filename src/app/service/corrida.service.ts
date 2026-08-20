import { Injectable } from '@angular/core';

import { Corrida } from '../models/corrida';

@Injectable({
  providedIn: 'root'
})
export class CorridaService {
  private corridas: Corrida[] = [];

  corridaSelecionada: Corrida | null = null;

  limparCorridaSelecionada() {
    this.corridaSelecionada = null;
  }

  cadastrarCorrida(corrida: Corrida){
    corrida.id = this.corridas.length + 1;

    this.corridas.push(corrida);
  };

  listarCorridas(){
    console.table(this.corridas);

    return this.corridas;
  };

  buscarPorId(id: number) {

    return this.corridas.find(corrida => corrida.id === id);
  
  };

  alterarCorrida(corrida: Corrida) {

    const indice = this.corridas.findIndex(
      item => item.id === corrida.id
    );
  
    if (indice !== -1) {
  
      this.corridas[indice] = corrida;
  
    }
  
  };

  excluirCorrida(id: number) {
    const indice = this.corridas.findIndex(corrida => corrida.id === id);
  
    if (indice !== -1) {
      this.corridas.splice(indice, 1);
    }
  }

  constructor() { }

}
