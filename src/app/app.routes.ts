import { Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { AtletaComponent } from './component/atleta/atleta.component';
import { CorridaComponent } from './component/corrida/corrida.component';

export const routes: Routes = [

    { path: "", redirectTo: "/home", pathMatch: "full"},

    { path: "home", component: HomeComponent},
    { path: "cadastroAtleta", component: AtletaComponent},
    { path: "cadastroCorrida", component: CorridaComponent},
];
