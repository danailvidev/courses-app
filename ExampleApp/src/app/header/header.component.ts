import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    user:any;

  constructor(private authSvc: AuthenticationService) { }

  ngOnInit() {
    this.authSvc.userInfo().subscribe( res => {
        this.user = res;
    });
  }

  logOut() {
      this.authSvc.logout();
  }

}
  