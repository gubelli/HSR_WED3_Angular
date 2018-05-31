import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'wed-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input()
  tableSettings: TableSettings[];

  @Input()
  data;

  constructor() { }

  ngOnInit() {
  }

}

export interface TableSettings {
  column: string;
  title: string;
  formatAsNumber: boolean;
}
