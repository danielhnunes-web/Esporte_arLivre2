import { Component } from '@angular/core';
import { Corrida } from '../../models/corrida';
import { CorridaService } from '../../service/corrida.service';
import { Router } from '@angular/router';
import { signal } from '@angular/core';

@Component({
  selector: 'app-corridas',
  standalone: true,
  imports: [],
  templateUrl: './corridas.component.html',
  styleUrl: './corridas.component.css'
})
export class CorridasComponent {

  listaCorridas = signal<Corrida[]>([]);

  constructor(
    private listaService: CorridaService,
    private router: Router,
  ) {}

  ngOnInit(){
    this.listarCorrida()
  };

  listarCorrida() {
    const dadosCorridas = this.listaService.listarCorridas();

    this.listaCorridas.set(
      [...dadosCorridas].sort((a, b) => a.descricao.localeCompare(b.descricao))
    );
  
    console.table(this.listaCorridas());
  };

  excluirCorrida(id: number) {
    if (confirm("Deseja Excluir a Corrida?")){
      this.listaService.excluirCorrida(id);
      
      this.listaCorridas.set(this.listaService.listarCorridas());
    }

  };

  carregaDadosCorridaForm(corrida: Corrida){
    this.listaService.corridaSelecionada = corrida;
    this.router.navigate(['/cadastroCorrida'])

  };
  

}
