import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoaderService } from '../loader/loader.service';
import { Store } from '@ngrx/store';
import { AppState } from '../interfaces/app-state';
import * as authActions from './../ngrx/actions/auth.actions';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    isValidFormSubmitted = null;
    errorMessage: string;

    constructor(
        private auth: AuthenticationService,
        private router: Router,
        private fb: FormBuilder,
        private loaderSvc: LoaderService,
        private store: Store<AppState>) { }

    ngOnInit() {
        this.initLoginForm();
    }

    onSubmit(value: string) {
        this.isValidFormSubmitted = false;
        if (this.loginForm.invalid) {
            return;
        }
        this.signIn(value);
        this.isValidFormSubmitted = true;
    }

    signIn(value) {
        // this.auth.login(value).subscribe((res: any) => {
        //     this.errorMessage = '';
        //     this.router.navigate(['/courses']);
        // }, e => {
        //     this.loaderSvc.showLoader$.next(false);
        //     this.errorMessage = e.statusText;
        // });
        this.store.dispatch(new authActions.LoginUserAction(value));
        this.loaderSvc.showLoader$.next(false);
    }

    private initLoginForm() {
        this.loginForm = this.fb.group({
            'login': new FormControl('', Validators.compose([
                Validators.required
            ])),
            'password': new FormControl('', Validators.compose([
                Validators.required,
            ]))
        });
    }

}
