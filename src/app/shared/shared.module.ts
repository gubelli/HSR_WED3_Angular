import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TableComponent} from './table/table.component';
import {CommonModule} from '@angular/common';

const EXPORTED_DECLARATIONS = [
  TableComponent
];
const INTERNAL_DECLARATIONS = [
  ...EXPORTED_DECLARATIONS
  // Declarations (Components / Directives) which can be used inside the Module
];
const EXPORTS = [
  ...EXPORTED_DECLARATIONS
];

@NgModule({
  declarations: INTERNAL_DECLARATIONS,
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: EXPORTS,
  providers: []
})
export class SharedModule {
  // forRoot() isn't needed here...
}
