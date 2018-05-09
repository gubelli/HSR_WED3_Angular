import { Component} from '@angular/core';
import {NavigationService} from '../../../core/services';

@Component({
  selector: 'wed-latest-transactions',
  templateUrl: './latest-transactions.component.html',
  styleUrls: ['./latest-transactions.component.scss']
})
export class LatestTransactionsComponent {
  constructor(private navigationService: NavigationService) { }

  public navigate(): void {
    this.navigationService.goToTransacations();
  }

}
