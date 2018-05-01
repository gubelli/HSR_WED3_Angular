import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'wed-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public doPayment(form: NgForm) {
    console.log(form);
  }
}
