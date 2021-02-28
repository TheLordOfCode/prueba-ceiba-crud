import { Injectable } from '@angular/core';
import { Persona } from '../model/persona';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  apiPersonas = environment.apiPersonas;

  constructor( private httpClient: HttpClient) { }

  construirFormulario(): FormGroup {
    return new FormGroup({
      id: new FormControl(null),
      cedula: new FormControl(null, Validators.required),
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      fechaNacimiento: new FormControl('', Validators.required),
    });
  }

  obtenerPersonas(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(`${this.apiPersonas}`);
  }

  obtenerPersonaPorId(id: string): Observable<Persona>{
    return this.httpClient.get<Persona>(`${this.apiPersonas}/${id}`);
  }

  guardarPersona(persona: Persona): Observable<string>{
    return this.httpClient.post<string>(`${this.apiPersonas}`, persona);
  }

  actualizarPersona(id: string, persona: Persona): Observable<string>{
    return this.httpClient.put<string>(`${this.apiPersonas}/${id}`, persona);
  }

  eliminarPersonaPorId(id: string): Observable<Persona[]>{
    return this.httpClient.delete<Persona[]>(`${this.apiPersonas}/${id}`);
  }
}
