import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/shared/model/persona';
import { ErroresService } from 'src/app/shared/service/errores.service';
import { PersonaService } from 'src/app/shared/service/persona.service';

@Component({
  selector: 'app-registrar-persona',
  templateUrl: './registrar-persona.component.html',
  providers: [DatePipe],
})
export class RegistrarPersonaComponent implements OnInit {
  showAlertSuccess = false;

  message = '';
  formularioPersona: FormGroup;
  id: string;
  personaActual: Persona;
  fecha: NgbDateStruct;
  constructor(
    private activatedRoute: ActivatedRoute,
    private personaService: PersonaService,
    public erroresService: ErroresService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.formularioPersona = this.personaService.construirFormulario();
    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
      if (this.id) {
        this.personaService
          .obtenerPersonaPorId(this.id)
          .subscribe((personaActual) => {
            this.personaActual = personaActual;
            this.updateFormPersona();
          });
      }
    });
  }

  public get hayId(): boolean {
    return this.id !== null && this.id !== undefined;
  }

  clickSaveOrEditPersona(): void {
    this.showAlertSuccess = false;
    if (this.formularioPersona.valid) {
      this.validateSaveOrEdit();
    }
  }

  validateSaveOrEdit(): void {
    if (this.hayId) {
      this.personaService
        .actualizarPersona(this.id, this.formularioPersona.value)
        .subscribe(
          (mensaje: string) => {
            this.message = mensaje;
            this.toastr.success('Persona Actualizada', 'OK', { timeOut: 3000 });
            this.mostrarAlertaExitosa();
          },
          (error) => {
            this.toastr.error(error.error.mensaje, 'Error', { timeOut: 3000 });
          }
        );
    } else {
      this.personaService
        .guardarPersona(this.formularioPersona.value)
        .subscribe(
          (mensaje: string) => {
            this.message = mensaje;
            this.toastr.success('Persona Guardada', 'OK', { timeOut: 3000 });
            this.mostrarAlertaExitosa();
          },
          (error) => {
            this.toastr.error(error.error.mensaje, 'Error', { timeOut: 3000 });
          }
        );
    }
  }

  updateFormPersona(): void {
    this.formularioPersona.get('id').setValue(this.personaActual.cedula);
    this.formularioPersona.get('cedula').setValue(this.personaActual.cedula);
    this.formularioPersona.get('nombre').setValue(this.personaActual.nombre);
    this.formularioPersona
      .get('apellido')
      .setValue(this.personaActual.apellido);
    this.formularioPersona
      .get('fechaNacimiento')
      .setValue(this.personaActual.fechaNacimiento);
  }

  getPersonFormGroup(): FormGroup {
    return this.formularioPersona.get('person') as FormGroup;
  }

  reset(): void {
    this.formularioPersona.reset();
  }

  closeAlerts(): void {
    this.showAlertSuccess = false;
  }

  mostrarAlertaExitosa(): void {}
}
