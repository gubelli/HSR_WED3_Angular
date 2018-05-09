import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wed-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.scss']
})
export class AllTransactionsComponent implements OnInit {

  actualDate = new Date();
  fromDate = new Date(this.actualDate.getFullYear(), this.actualDate.getMonth(), 1);
  toDate = new Date(this.actualDate.getFullYear(), this.actualDate.getMonth() + 1, 0);
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years = [2015, 2016, 2017, 2018];

  constructor() { }

  ngOnInit() {
  }

}
