import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/shared/model/persona';
import { ErroresService } from 'src/app/shared/service/errores.service';
import { PersonaService } from 'src/app/shared/service/persona.service';
import { ToastService } from 'src/app/shared/service/toast-service';

@Component({
  selector: 'app-registrar-persona',
  templateUrl: './registrar-persona.component.html',
  providers: [DatePipe]
})
export class RegistrarPersonaComponent implements OnInit {
  showAlertSuccess = false;
  private readonly SUCCESS_FULLY_CREATED_EMPLOYEE = 'Empleado creado exitosamente';
  public readonly SUCCESS_FULLY_UPDATE_EMPLOYEE = 'Empleado actualizado exitosamente';
  message = '';
  formularioPersona: FormGroup;
  id: string;
  personaActual: Persona;
  fecha: NgbDateStruct;
  constructor(
    private activatedRoute: ActivatedRoute,
    private personaService: PersonaService,
    public erroresService: ErroresService,
  ) {}

  ngOnInit(): void {
    this.formularioPersona = this.personaService.construirFormulario();
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      this.id = params.id;
      if (this.id) {
        this.personaService.obtenerPersonaPorId(this.id).subscribe((personaActual) => {
          this.personaActual = personaActual;
          this.updateFormEmployee();
        });
      }
    });
  }

  public get hayId(): boolean {
    return this.id !== null && this.id !== undefined;
  }

  clickSaveOrEditEmployee(): void {
    this.showAlertSuccess = false;
    if (this.formularioPersona.valid) {
      this.validateSaveOrEdit();
    }
  }

  validateSaveOrEdit(): void {
    if (this.hayId) {
      this.personaService.actualizarPersona(this.id, this.formularioPersona.value).subscribe(() => {
        this.message = this.SUCCESS_FULLY_UPDATE_EMPLOYEE;
        this.mostrarAlertaExitosa();
      });
    } else {
      this.personaService.guardarPersona(this.formularioPersona.value).subscribe(() => {
        this.message = this.SUCCESS_FULLY_CREATED_EMPLOYEE;
        this.mostrarAlertaExitosa();
      });
    }
  }

  updateFormEmployee(): void {
    this.formularioPersona.get('id').setValue(this.personaActual.cedula);
    this.formularioPersona.get('cedula').setValue(this.personaActual.cedula);
    this.formularioPersona.get('nombre').setValue(this.personaActual.nombre);
    this.formularioPersona.get('apellido').setValue(this.personaActual.apellido);
    this.formularioPersona.get('fechaNacimiento').setValue(this.personaActual.fechaNacimiento);
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

  mostrarAlertaExitosa(): void {
  }
}
