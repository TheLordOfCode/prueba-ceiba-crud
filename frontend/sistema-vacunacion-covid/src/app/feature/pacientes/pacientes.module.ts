import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { PacientesComponent } from './pacientes.component';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';
import { ListarPacientesComponent } from './listar-pacientes/listar-pacientes.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [PacientesComponent, ListarPacientesComponent, RegistrarPacienteComponent],
  imports: [
    CommonModule,
    CoreModule,
    PacientesRoutingModule,
  ]
})
export class PacientesModule { }
