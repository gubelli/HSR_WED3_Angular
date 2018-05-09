import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/services';
import {Account} from '../../auth/models';

@Component({
  selector: 'wed-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isAuthenticated = false;
  user: Account;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authenticatedUserChange.subscribe( user => {
      if (user) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
      this.user = user;
    } );
  }

}
