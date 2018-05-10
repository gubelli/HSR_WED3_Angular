import { Injectable } from '@angular/core';
import {ResourceBase} from '../../core/resources';
import {HttpClient, HttpParams} from '@angular/common/http';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';
import {Transaction} from '../models';

@Injectable()
export class TransactionService extends ResourceBase {

  constructor(http: HttpClient) {
    super(http);
  }

  public createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.post('/accounts/transactions', transaction)
      .pipe(
        map((result: any) => {
          if (result) {
            return Transaction.fromDto(result);
          }
          return null;
        }),
        catchError((error: any) => of<Transaction>(null))
      );
  }

  public getTransaction(query: any): Observable<Transaction[]> {
    let params = new HttpParams();
    if (query.count) {
      params = params.set('count', query.count);
    } else if (query.fromDate && query.toDate) {
      params = params.set('fromDate', query.fromDate);
      params = params.set('toDate', query.toDate);
    } else {
      return of<Transaction[]>(null);
    }
    return this.getWithQuery('/accounts/transactions', params)
      .pipe(
        map((result: any) => {
          if (result) {
            return result['result'].map(data => Transaction.fromDto(data) ) ;
          }
          return null;
        }),
        catchError((error: any) => of<Transaction[]>(null))
      );
  }

}
