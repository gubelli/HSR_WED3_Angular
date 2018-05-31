import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[wedConfirmation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ConfirmationDirective, multi: true }]
})
export class ConfirmationDirective implements Validator {
  @Input('wedConfirmation')
  password: string;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const passwordConfirmation = control.value;
    if ( passwordConfirmation && this.password) {
      if (passwordConfirmation === this.password) {
        return null;
      } else {
        return {hasError: true};
      }
    }
    return null;
  }

}
