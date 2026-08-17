import { Component } from '@angular/core';
import { Atleta } from '../../models/Atleta';
import { AtletaServiceService } from '../../service/atleta-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atleta-list',
  standalone: true,
  imports: [],
  templateUrl: './atleta-list.component.html',
  styleUrl: './atleta-list.component.css'
})

export class AtletaListComponent {

  listaAtletas: Atleta[] = [];

  constructor( private listaService: AtletaServiceService,
    private router : Router) {};

  ngOnInit(){
    this.listar();
  };

  listar() {
    this.listaService.listarAtletas()
      .subscribe({
        next: (dadosAtletas) => {
          this.listaAtletas = [...dadosAtletas].
          sort((a, b) => a.nome.localeCompare(b.
          nome))
          console.table(this.listaAtletas)
  
          return this.listaAtletas
        },
        error: (msgErro) => {
          console.log("Erro ao listar Atletas "
          , msgErro)
        }
      })
  
    return this.listaAtletas;
  };

}
