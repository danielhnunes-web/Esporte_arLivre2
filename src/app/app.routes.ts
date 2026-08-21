import { Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { AtletaComponent } from './component/atleta/atleta.component';
import { CorridaComponent } from './component/cadastro_corrida/corrida.component';
import { AtletaListComponent } from './component/atleta-list/atleta-list.component';
import { CorridasComponent } from './component/corridas/corridas.component';
import { InscricaoComponent } from './component/inscricao/inscricao.component';

export const routes: Routes = [

    { path: "", redirectTo: "/home", pathMatch: "full" },

    { path: "home", component: HomeComponent },
    { path: "cadastroAtleta", component: AtletaComponent },
    { path: "cadastroCorrida", component: CorridaComponent },
    { path: "inscricao", component: InscricaoComponent},
    
    { path: "cadastroAtleta/:id", component: AtletaComponent },
    { path: "cadastroCorrida/:id", component: CorridaComponent },

    { path: "listaAtleta", component: AtletaListComponent },
    { path: "corridas", component: CorridasComponent },
];
