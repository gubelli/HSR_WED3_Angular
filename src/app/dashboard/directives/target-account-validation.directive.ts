import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {AccountService} from '../services/account.service';

@Directive({
  selector: '[wedTargetAccountValidation][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: TargetAccountValidationDirective, multi: true}]
})
export class TargetAccountValidationDirective implements Validator {
  @Input('wedTargetAccountValidation') sourceAccountNumber: number;

  constructor(private accountService: AccountService) {}

  validate(control: AbstractControl): {[key: string]: any} {
    const value: number = control.value;
    if (!value || String(value).length < 3) {
      return {minLength: true};
    } else if (value === this.sourceAccountNumber) {
      return {unknown: false};
    } else {
      this.accountService.getAccountInfo(value).subscribe(
        data => {
          if (data == null) {
            return {unknown: true};
          } else {
            return null;
          }
        }
      );
    }
  }

}
