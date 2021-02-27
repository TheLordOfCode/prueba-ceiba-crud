import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'src/app/core/core.module';
import { ListarPersonasComponent } from './listar-personas/listar-personas.component';
import { PersonasComponent } from './personas.component';
import { RegistrarPersonaComponent } from './registrar-persona/registrar-persona.component';
import { PersonasRoutingModule } from './personas-routing.module';


@NgModule({
  declarations: [PersonasComponent, ListarPersonasComponent, RegistrarPersonaComponent],
  imports: [
    CommonModule,
    CoreModule,
    PersonasRoutingModule,
  ]
})
export class PersonasModule { }
