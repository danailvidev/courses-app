import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../interfaces/app-state';
import * as authActions from '../ngrx/actions/auth.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    user: any;

    constructor(private authSvc: AuthenticationService, private store: Store<AppState>) { }

    ngOnInit() {
        this.getCurrentUserData();

        this.store.select(state => state.currentUser).subscribe(res => {
            this.user = res;
        }, (err) => {
            console.log(err);
        });
    }

    getCurrentUserData() {
        this.store.dispatch(new authActions.GetCurrentUserAction());
    }

    logOut() {
        this.store.dispatch(new authActions.LogoutUserAction());
    }

}
