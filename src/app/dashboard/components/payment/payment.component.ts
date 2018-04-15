import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AccountService} from '../../services/account.service';
import {AccountInfo} from '../../models/accountInfo';

@Component({
  selector: 'wed-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  accountInfo: AccountInfo;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAccountInfo().subscribe(data => {
      this.accountInfo = data;
      console.log(this.accountInfo);
    });
  }

  public doPayment(form: NgForm): void {
    console.log(form);
  }
}
