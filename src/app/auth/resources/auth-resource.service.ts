import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

import {ResourceBase} from '../../core';

import {LoginInfo, Account, RegistrationInfo, Credential} from '../models';


@Injectable()
export class AuthResourceService extends ResourceBase {
  constructor(http: HttpClient) {
    super(http);
  }

  public register(model: RegistrationInfo): Observable<Account> {
    return this.post('/auth/register', model.toDto())
      .pipe(
        map((result: any) => {
          if (result) {
            return Account.fromDto(result);
          }
          return null;
        }),
        catchError((error: any) => of<Account>(null))
      );
  }

  public login(model: LoginInfo): Observable<Credential> {
    return this.post('/auth/login', model.toDto())
      .pipe(
        map((result: any) => {
          if (result) {
            return Credential.fromDto(result);
          }
          return null;
        }),
        catchError((error: any) => of<Credential>(null))
      );
  }
}
