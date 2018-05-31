import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wed-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.scss']
})
export class AllTransactionsComponent implements OnInit {

  actualDate = new Date();
  fromDate = new Date(this.actualDate.getFullYear(), this.actualDate.getMonth(), 1);
  toDate = new Date(this.actualDate.getFullYear(), this.actualDate.getMonth() + 1, 0, 23, 59, 59);
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years: number[] = [];

  selectedMonth: number = this.actualDate.getMonth();
  selectedYear: number = this.actualDate.getFullYear();

  constructor() { }

  ngOnInit() {
    for (let _i = this.actualDate.getFullYear(); _i > this.actualDate.getFullYear() - 3; _i--) {
      this.years.push(_i);
    }
  }

  public generateDateSpan(): void {
    this.fromDate = new Date(this.selectedYear, this.selectedMonth, 1);
    this.toDate = new Date(this.selectedYear, this.selectedMonth + 1, 0, 23, 59, 59);
  }
}
