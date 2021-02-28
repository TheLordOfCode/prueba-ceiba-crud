import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/shared/model/persona';
import { PersonaService } from 'src/app/shared/service/persona.service';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
})
export class ListarPersonasComponent implements OnInit {
  personas: Persona[] = [];
  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.obtenerPersonas().subscribe(
      (personas) => {
        this.personas = personas;
      },
      (err) => {}
    );
  }

  eliminarPersona(): void {}
}
