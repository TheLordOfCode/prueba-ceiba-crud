import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPacientesComponent } from './listar-pacientes/listar-pacientes.component';

import { PacientesComponent } from './pacientes.component';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';

const routes: Routes = [
  {
    path: 'pacientes',
    component: PacientesComponent,
    children: [
      { path: '', component: ListarPacientesComponent },
      { path: 'registrar', component: RegistrarPacienteComponent },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: '/pacientes' },
  { path: '**', pathMatch: 'full', redirectTo: '/pacientes' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientesRoutingModule {}
