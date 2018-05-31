import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../../auth/services';
import {NavigationService} from '../services';

@Injectable()
export class RouteGuard implements CanActivate {

  constructor(private authService: AuthService,
              private navigationService: NavigationService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.hasCredentials) {
      return true;
    } else {
      this.navigationService.goToHome();
      return false;
    }
  }
}
