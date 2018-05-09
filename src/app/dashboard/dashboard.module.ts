import {NgModule, ModuleWithProviders} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {PaymentComponent} from './components';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AccountService} from './services/account.service';
import {TargetAccountValidationDirective} from './directives/target-account-validation.directive';
import {TransactionService} from './services/transaction.service';
import {TransactionTableComponent} from './components/transaction-table/transaction-table.component';
import {LatestTransactionsComponent} from './components/latest-transactions/latest-transactions.component';
import {AllTransactionsComponent} from './components/all-transactions/all-transactions.component';

const EXPORTED_DECLARATIONS = [
  // Declarations (Components / Directives) which can be used outside the Module
];
const INTERNAL_DECLARATIONS = [
  ...EXPORTED_DECLARATIONS,
  // Declarations (Components / Directives) which can be used inside the Module
  PaymentComponent,
  DashboardComponent,
  TargetAccountValidationDirective,
  TransactionTableComponent,
  LatestTransactionsComponent,
  AllTransactionsComponent
];
const EXPORTS = [
  ...EXPORTED_DECLARATIONS
  // Components/Directives (or even Modules) to export (available for other modules; and forRoot() )
];

@NgModule({
  declarations: INTERNAL_DECLARATIONS,
  imports: [
    // Other Modules to import (imports the exported Components/Directives from the other module)
    CommonModule, SharedModule, DashboardRoutingModule, FormsModule
  ],
  exports: EXPORTS,
  providers: [
    // DI Providers (hierarchical)
    // (Services, Tokens, Factories, ...) used from/within this Module; add either here or in forRoot();
    //  * Registers these Classes for the current Module; importing Modules will create new instances (for importing level and below)
    AccountService, TransactionService
  ]
})
export class DashboardModule {
  static forRoot(config?: {}): ModuleWithProviders {
    return {
      ngModule: DashboardModule,
      providers: [ ]
    };
  }

}
