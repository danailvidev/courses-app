import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as authActions from './../actions/auth.actions';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/auth.service';
import { switchMap, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AuthEffects {

    constructor(
        private authService: AuthenticationService,
        private actions$: Actions,
        private router: Router) { }

    @Effect() loginUser$ = this.actions$
        .ofType(authActions.LOGIN_USER)
        .pipe(
            switchMap((action: authActions.LoginUserAction) => this.authService.login(action.payload)),
            map((user) => (new authActions.LoginUserSuccessAction(user))),
            map(() => (new authActions.GetCurrentUserAction())),
            tap(() => this.router.navigate(['/courses']))
        );

    @Effect() getCurrentUser$ = this.actions$
        .ofType(authActions.GET_CURRENT_USER_DATA)
        .pipe(
            switchMap(() => this.authService.userInfo()),
            map(currentUser => (new authActions.GetCurrentUserSuccessAction(currentUser)))
        );

    @Effect() logoutUser$ = this.actions$
        .ofType(authActions.LOGOUT_USER)
        .pipe(
            switchMap(() => this.authService.logout()),
            map(() => (new authActions.LogoutUserSuccessAction()))
        );
}
