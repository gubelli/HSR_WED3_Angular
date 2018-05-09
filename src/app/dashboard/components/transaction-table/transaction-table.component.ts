import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Transaction} from '../../models/transaction';
import {TransactionService} from '../../services/transaction.service';
import {TableSettings} from '../../../shared/table/table.component';
import {DataService} from '../../../core/services/data.service';

@Component({
  selector: 'wed-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss']
})
export class TransactionTableComponent implements OnInit, OnChanges {
  @Input()
  count?;

  @Input()
  fromDate?: Date;

  @Input()
  toDate?: Date;

  tableSettings: TableSettings[] = [
    {column: 'from', title: 'Source', formatAsNumber: false },
    {column: 'target', title: 'Target', formatAsNumber: false},
    {column: 'amount', title: 'Amount [CHF]', formatAsNumber: true},
    {column: 'total', title: 'Balance [CHF]', formatAsNumber: true}
  ];

  data: Transaction[];

  constructor(private transactionService: TransactionService,
              private dataService: DataService) { }

  ngOnInit() {
    this.dataService.transaction.subscribe( () => this.loadTransactionWithCount());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.fromDate && this.toDate) {
      this.loadTransactionByDate();
    } else if (this.count) {
      this.loadTransactionWithCount();
    }
  }

  private loadTransactionByDate(): void{
    this.transactionService.getTransaction({fromDate: this.fromDate, toDate: this.toDate}).subscribe( data => {
      if (data) {
        this.data = data;
      }
    });
  }

  private loadTransactionWithCount(): void{
    this.transactionService.getTransaction({count: this.count}).subscribe( data => {
      if (data) {
        this.data = data;
      }
    });
  }

}
