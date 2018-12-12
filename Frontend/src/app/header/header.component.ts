import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  public sidenavButtonClick = new EventEmitter<void>();
  public loggedIn: boolean;
  public user = null;

  constructor(private authService: UserService) {
    this.authService.isLoggedIn().then((loggedIn) => {
      this.loggedIn = loggedIn;
      if (loggedIn) {
        this.authService.getCurrentUser().then((user) => {
          this.user = user;
        });
      }
    });
  }

  ngOnInit() {
  }

  onSidenavButtonClick(): void {
    this.sidenavButtonClick.emit();
  }

  onLoginClick(): void {
    this.authService.facebookLogin();
  }

  onLogoutClick(): void {
    this.authService.logout();
    window.location.reload();
    sessionStorage.clear();
    localStorage.clear();
  }
}