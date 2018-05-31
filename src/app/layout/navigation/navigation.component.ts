import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/services';
import {Account} from '../../auth/models';
import {NavigationService} from '../../core/services';

@Component({
  selector: 'wed-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isAuthenticated = false;
  isCollapsed: true;
  user: Account;

  constructor(private authService: AuthService,
              private navigationService: NavigationService) { }

  ngOnInit() {
    this.authService.authenticatedUserChange.subscribe( user => {
      this.isAuthenticated = !!user;
      this.user = user;
    } );
    this.user = this.authService.authenticatedUser;
    this.isAuthenticated = !! this.user;
  }

  public logout(): void {
    this.authService.logout();
    this.navigationService.goToHome();
  }
}
