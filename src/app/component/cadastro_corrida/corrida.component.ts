import { Component, OnInit } from '@angular/core';
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
export class CorridaComponent implements OnInit{
  descricao = '';
  data = '';
  local = '';
  distancia = 0;

  idCorrida = 0
  editar = false

  constructor(private corridaService : CorridaService) {}

  ngOnInit() {
  
    const corrida = this.corridaService.corridaSelecionada;

    if (corrida) {
  
      this.editar = true;
      this.idCorrida = corrida.id;
      this.descricao = corrida.descricao;
      this.data = this.formatarData(corrida.data);
      this.local = corrida.local;
      this.distancia = corrida.distancia;
  
      // IMPORTANTE: limpa depois de carregar a corrida
      this.corridaService.limparCorridaSelecionada();
  
    } else {
  
      this.editar = false;
      this.idCorrida = 0;
      this.descricao = '';
      this.data = '';
      this.local = '';
      this.distancia = 0;
  
    }
  };

  formatarData(data: Date): string {

    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');

    return `${ano}-${mes}-${dia}`;
  }

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

    if(this.editar){
      corrida.id = this.idCorrida
      
      this.corridaService.alterarCorrida(corrida)
      
    }else{
      this.corridaService.cadastrarCorrida(corrida)

    }

    this.LimparDados();

    this.editar = false;
    this.idCorrida = 0;

    this.corridaService.listarCorridas();
  };

  novoCadastro() {

    this.editar = false;
    this.idCorrida = 0;
  
    this.descricao = '';
    this.data = '';
    this.local = '';
    this.distancia = 0;
  
    this.corridaService.limparCorridaSelecionada();
  
  };

}
