import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Transaction} from '../../dashboard/models/transaction';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {
  private _transaction = new Subject<Transaction>();
  public readonly transaction: Observable<Transaction> = this._transaction.asObservable();

  constructor() { }

  public setTransaction(transaction: Transaction): void {
    this._transaction.next(transaction);
  }

}
