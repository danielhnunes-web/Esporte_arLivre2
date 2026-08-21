import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Atleta } from '../../models/Atleta';
import { AtletaServiceService } from '../../service/atleta-service.service';

import { Corrida } from '../../models/corrida';
import { CorridaService } from '../../service/corrida.service';

@Component({
  selector: 'app-inscricao',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inscricao.component.html',
  styleUrl: './inscricao.component.css'
})
export class InscricaoComponent implements OnInit {

  listaAtletas: Atleta[] = [];
  listaCorridas: Corrida[] = [];

  atletaSelecionado = 0;
  corridaSelecionada = 0;

  cpf = '';

  distancias: number[] = [];
  distancia = 0;

  tamanhoCamiseta = '';

  categoria = '';

  valorInscricao = 89.90;

  termosAceitos = false;

  constructor(
    private atletaService: AtletaServiceService,
    private corridaService: CorridaService
  ) {}

  ngOnInit(): void {

    this.carregarAtletas();

    this.carregarCorridas();

  }

  carregarAtletas() {

    this.atletaService.listarAtletas().subscribe({

      next: (dados) => {

        this.listaAtletas = dados;

        console.log('Atletas carregados:', this.listaAtletas);

      },

      error: (erro) => {

        console.error('Erro ao carregar atletas:', erro);

      }

    });

  }

  carregarCorridas() {

    this.listaCorridas = this.corridaService.listarCorridas();

    console.log('Corridas carregadas:', this.listaCorridas);

  }

  selecionarCorrida() {

    const corrida = this.listaCorridas.find(
      item => item.id === Number(this.corridaSelecionada)
    );

    if (corrida) {

      this.distancias = [...corrida.distancias];

    } else {

      this.distancias = [];
      this.distancia = 0;

    }

  }

  buscarPorCpf() {

    if (!this.cpf) {
      return;
    }

    const cpfNumerico = Number(
      this.cpf.replace(/\D/g, '')
    );

    const atleta = this.listaAtletas.find(
      item => Number(item.cpf) === cpfNumerico
    );

    if (atleta) {

      this.atletaSelecionado = atleta.id;

      this.atualizarCategoria(atleta);

    } else {

      alert('Atleta não encontrado.');

      this.atletaSelecionado = 0;

    }

  }

  selecionarAtleta() {

    const atleta = this.listaAtletas.find(
      item => item.id === Number(this.atletaSelecionado)
    );

    if (atleta) {

      this.atualizarCategoria(atleta);

      this.cpf = String(atleta.cpf);

    }

  }

  atualizarCategoria(atleta: Atleta) {

    if (!atleta.dataNascimento) {
  
      this.categoria = '';
  
      return;
  
    }
  
    const nascimento = new Date(atleta.dataNascimento);
  
    const hoje = new Date();
  
    let idade = hoje.getFullYear() - nascimento.getFullYear();
  
    const mes = hoje.getMonth() - nascimento.getMonth();
  
    if (
      mes < 0 ||
      (mes === 0 && hoje.getDate() < nascimento.getDate())
    ) {
  
      idade--;
  
    }
  
    let faixa = '';
  
    if (idade < 18) {
      faixa = 'Até 17 anos';  
    } else if (idade <= 29) { 
      faixa = '18 - 29 anos'; 
    } else if (idade <= 39) { 
      faixa = '30 - 39 anos'; 
    } else if (idade <= 49) {  
      faixa = '40 - 49 anos';  
    } else if (idade <= 59) {  
      faixa = '50 - 59 anos';  
    } else { 
      faixa = '60+ anos';
    }
   
    let sexoCategoria = '';

    if (atleta.sexo === 'M') {  
      sexoCategoria = 'Geral Masculino';  
    } else if (atleta.sexo === 'F') { 
      sexoCategoria = 'Geral Feminino'; 
    } else {  
      sexoCategoria = 'Geral';  
    }
  
    this.categoria = `${sexoCategoria} / ${faixa}`;
  
  }

  finalizarInscricao() {

    if (!this.atletaSelecionado) {

      alert('Selecione um atleta.');

      return;

    }

    if (!this.corridaSelecionada) {

      alert('Selecione uma corrida.');

      return;

    }

    if (!this.distancia) {

      alert('Selecione uma distância para a prova.');

      return;

    }

    if (!this.tamanhoCamiseta) {

      alert('Selecione o tamanho da camiseta.');

      return;

    }

    if (!this.termosAceitos) {

      alert('Você precisa aceitar os termos do regulamento.');

      return;

    }

    const atleta = this.listaAtletas.find(
      item => item.id === Number(this.atletaSelecionado)
    );

    const corrida = this.listaCorridas.find(
      item => item.id === Number(this.corridaSelecionada)
    );

    console.log('===== INSCRIÇÃO =====');
    console.log('Atleta:', atleta)
    console.log('Corrida:', corrida);
    console.log('Distância:', this.distancias);
    console.log('Camiseta:', this.tamanhoCamiseta);
    console.log('Categoria:', this.categoria);
    console.log('Valor:', this.valorInscricao);
    alert('Inscrição realizada com sucesso!');

  }

}