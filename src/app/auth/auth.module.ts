import {NgModule, ModuleWithProviders} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {AuthService, SecurityTokenStore} from './services';
import {AuthResourceService, TokenInterceptor} from './resources';

import {LoginComponent, RegisterComponent} from './components';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';

const EXPORTED_DECLARATIONS = [
  LoginComponent, RegisterComponent
];
const INTERNAL_DECLARATIONS = [
  ...EXPORTED_DECLARATIONS
];
const EXPORTS = [
  ...EXPORTED_DECLARATIONS
];

@NgModule({
  declarations: INTERNAL_DECLARATIONS,
  imports: [
    FormsModule,
    SharedModule,
    CommonModule
  ],
  exports: EXPORTS,
  providers: [ AuthResourceService ]
})
export class AuthModule {
  static forRoot(config?: {}): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        // DI Providers (Services, Tokens, Factories...) to be used globally and instantiate only once

        // TODO: Add services/guards/... here, if additional classes are placed within the Auth moduley
        AuthService,
        SecurityTokenStore,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true
        }]
    };
  }
}
