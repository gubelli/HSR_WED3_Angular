import { Injectable } from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {Transaction} from '../../dashboard/models';

@Injectable()
export class DataService {
  private _transaction = new Subject<Transaction>();
  public readonly transaction: Observable<Transaction> = this._transaction.asObservable();

  constructor() { }

  public setTransaction(transaction: Transaction): void {
    this._transaction.next(transaction);
  }

}
