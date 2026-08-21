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
  distancias: number[] = [];

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
      this.distancias = [...corrida.distancias];
  
      // IMPORTANTE: limpa depois de carregar a corrida
      this.corridaService.limparCorridaSelecionada();
  
    } else {
  
      this.novoCadastro()
    }
  };

  formatarData(data: Date): string {

    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');

    return `${ano}-${mes}-${dia}`;
  }

  selecionarDistancia(
    distancia: number,
    event: Event
  ) {

    const checkbox =
      event.target as HTMLInputElement;

    if (checkbox.checked) {

      if (!this.distancias.includes(distancia)) {

        this.distancias.push(distancia);

      }

    } else {

      this.distancias =
        this.distancias.filter(
          item => item !== distancia
        );

    }

    console.log(
      'Distâncias selecionadas:',
      this.distancias
    );

  }

  exibirDados(){
    console.log(this.descricao, this.data, this.local, this.distancias);

    this.LimparDados();
  };

  LimparDados(){
    this.descricao = '';
    this.data = '';
    this.local = '';
    this.distancias = [];
  };

  cadastrar(){
    const corrida = new Corrida();

    corrida.descricao = this.descricao;
    corrida.data = new Date(this.data);
    corrida.local = this.local;
    corrida.distancias = [...this.distancias];

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
    this.distancias = [];
  
    this.corridaService.limparCorridaSelecionada();
  
  };

}
