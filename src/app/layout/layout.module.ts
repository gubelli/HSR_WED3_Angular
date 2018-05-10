import {NgModule, ModuleWithProviders} from '@angular/core';
import {OneColumnLayoutComponent} from './one-column.layout';
import {NavigationComponent} from './navigation/navigation.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

const EXPORTED_DECLARATIONS = [
  // Declarations (Components / Directives) which can be used outside the Module
  OneColumnLayoutComponent
];
const INTERNAL_DECLARATIONS = [
  ...EXPORTED_DECLARATIONS,
  // Declarations (Components / Directives) which can be used inside the Module
  NavigationComponent
];
const EXPORTS = [
  ...EXPORTED_DECLARATIONS
  // Components/Directives (or even Modules) to export (available for other modules; and forRoot() )
];

@NgModule({
  declarations: INTERNAL_DECLARATIONS,
  imports: [ CommonModule, RouterModule],
  exports: EXPORTS,
  providers: [ ]
})
export class LayoutModule {
  static forRoot(config?: {}): ModuleWithProviders {
    return {
      ngModule: LayoutModule,
      providers: [ ]
    };
  }

}
