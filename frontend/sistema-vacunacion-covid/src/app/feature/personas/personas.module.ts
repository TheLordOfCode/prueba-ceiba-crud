import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { CoreModule } from 'src/app/core/core.module';
import { ListarPersonasComponent } from './listar-personas/listar-personas.component';
import { PersonasComponent } from './personas.component';
import { RegistrarPersonaComponent } from './registrar-persona/registrar-persona.component';
import { PersonasRoutingModule } from './personas-routing.module';
import { NgbDatepickerModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PersonasComponent, ListarPersonasComponent, RegistrarPersonaComponent],
  imports: [
    CommonModule,
    CoreModule,
    PersonasRoutingModule,
    NgbToastModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDatepickerModule
  ]
})
export class PersonasModule { }
