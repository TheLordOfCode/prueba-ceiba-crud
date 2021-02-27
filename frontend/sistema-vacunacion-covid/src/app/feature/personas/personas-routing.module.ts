import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPersonasComponent } from './listar-personas/listar-personas.component';
import { PersonasComponent } from './personas.component';
import { RegistrarPersonaComponent } from './registrar-persona/registrar-persona.component';

const routes: Routes = [
  {
    path: 'personas',
    component: PersonasComponent,
    children: [
      { path: '', component: ListarPersonasComponent },
      { path: 'registrar', component: RegistrarPersonaComponent },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: '/personas' },
  { path: '**', pathMatch: 'full', redirectTo: '/personas' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonasRoutingModule {}
