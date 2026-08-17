import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CorridaService } from '../../service/corrida.service';
import { Corrida } from '../../models/corrida';

@Component({
  selector: 'app-corrida',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './corrida.component.html',
  styleUrl: './corrida.component.css'
})
export class CorridaComponent {
  descricao = '';
  data = '';
  local = '';
  distancia = 0;

  constructor(private corridaService : CorridaService) {}

  exibirDados(){
    console.log(this.descricao, this.data, this.local, this.distancia);

    this.LimparDados();
  };

  LimparDados(){
    this.descricao = '';
    this.data = '';
    this.local = '';
    this.distancia = 0;
  };

  cadastrar(){
    const corrida = new Corrida();

    corrida.descricao = this.descricao;
    corrida.data = new Date(this.data);
    corrida.local = this.local;
    corrida.distancia = this.distancia;

    this.corridaService.cadastrarCorrida(corrida);

    this.LimparDados();

    this.corridaService.listarCorridas();
  }

}
