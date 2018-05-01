import { Injectable } from '@angular/core';
import {ResourceBase} from '../../core/resources/resource-base';
import {HttpClient} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {AccountInfo} from '../models/accountInfo';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AccountService extends ResourceBase {

  constructor(http: HttpClient) {
    super(http);
  }

  public getOwnAccountInfo(): Observable<AccountInfo> {
    return this.get('/accounts/')
      .pipe(
        map((result: any) => {
          if (result) {
            return AccountInfo.fromDto(result);
          }
          return null;
        }),
        catchError((error: any) => of<AccountInfo>(null))
      );
  }

  public getAccountInfo(accountId: number): Observable<AccountInfo> {
    return this.get('/accounts/' + accountId)
      .pipe(
        map((result: any) => {
          if (result) {
            return AccountInfo.fromDto(result);
          }
          return null;
        }),
        catchError((error: any) => of<AccountInfo>(null))
      );
  }
}
