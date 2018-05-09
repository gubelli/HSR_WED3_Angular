import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {AccountService} from '../../services/account.service';
import {AccountInfo} from '../../models/accountInfo';
import {Transaction} from '../../models/transaction';
import {TransactionService} from '../../services/transaction.service';
import {DataService} from '../../../core/services/data.service';

@Component({
  selector: 'wed-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @ViewChild('paymentForm') paymentForm: NgForm;

  accountInfo: AccountInfo;
  targetAccount: AccountInfo;
  targetAccountError: any;
  isSubmitted = false;
  transaction: Transaction;

  constructor(private accountService: AccountService,
              private transactionService: TransactionService,
              private dataService: DataService) { }

  ngOnInit() {
    this.loadAccountInfo();
  }

  public doTransaction(): void {
    if (this.paymentForm.valid && !this.targetAccountError) {
      const transaction = new Transaction(
        this.accountInfo.accountNr,
        this.paymentForm.value.to,
        this.paymentForm.value.amount,
        0,
        new Date()
      );
      this.storeTransaction(transaction);
    }
  }

  private storeTransaction(transaction: Transaction): void {
    this.transactionService.createTransaction(transaction).subscribe(result => {
      if (result) {
        this.isSubmitted = true;
        this.transaction = result;
        this.dataService.setTransaction(result);
      }
    });
  }

  private loadAccountInfo(): void {
    this.accountService.getOwnAccountInfo().subscribe(data => {
      this.accountInfo = data;
    });
  }

  public validTargetAccount(to: NgModel): void {
    if (to.valid) {
      const accountId = to.value;
      if (accountId != this.accountInfo.accountNr) {
        this.accountService.getAccountInfo(accountId).subscribe(account => {
          if (account) {
            this.targetAccount = account;
            this.targetAccountError = null;
          } else {
            this.targetAccountError = {unknown: true};
          }});
      } else {
        this.targetAccountError = {invalid: true};
      }
    }
  }

  public startOver(): void {
    this.isSubmitted = false;
    this.loadAccountInfo();
  }
}
