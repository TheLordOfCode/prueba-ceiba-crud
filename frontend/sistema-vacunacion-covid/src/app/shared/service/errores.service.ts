import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ErroresService {
  constructor() {}

  errores(form: FormGroup, controlName: string, ngForm?: any): any {
    if (form) {
      const errores = form.get(controlName).errors;
      return {
        thereAreErrors:
          (form.get(controlName).dirty ||
          (ngForm === null || ngForm === undefined ? false : ngForm.submitted)) &&
          !!errores,
        errores,
      };
    }
    return { thereAreErrors: false };
  }

  erroresWithoutDirty(form: FormGroup, controlName: string, ngForm?: any): any {
    if (form) {
      const errores = form.get(controlName).errors;
      return {
        thereAreErrors: (ngForm === null || ngForm === undefined ? false : ngForm.submitted) && !!errores,
        errores,
      };
    }
    return { thereAreErrors: false };
  }
}
