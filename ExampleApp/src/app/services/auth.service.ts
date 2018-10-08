import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    baseAuthUrl = environment.backend['baseUrl'];
    TOKEN_KEY = 'token';
    DATA_KEY = 'userData';
    headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    options = new HttpResponse({ headers: this.headers });
    private _userData: any;

    get userData(): any {
        return this._userData;
    }

    set userData(value: any) {
        this._userData = value;
    }

    constructor(private http: HttpClient) {
    }

    login(userData): Observable<any> {
        const body = userData;
        return this.http.post<any>(this.baseAuthUrl + 'auth/login', body, this.options)
            .pipe(map(res => {
                this.saveToken(res.token);
                // login successful if there's a jwt token in the response
                this.saveUserData(res.userData);

                return true;
            }));
    }

    logout(): boolean {
        try {
            localStorage.removeItem(this.TOKEN_KEY);
            if (this.userData) {
                this.userData = null;
            }
            return true;
        } catch (err) {
            console.error('server error:', err);
            return false;
        }
    }

    private saveToken(token) {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    private saveUserData(data) {
        localStorage.setItem(this.DATA_KEY, JSON.stringify(data));
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    userInfo(): any {
        if (!this.userData) {
            this.userData = JSON.parse(localStorage.getItem(this.DATA_KEY));
        }
        return of(this.userData);
    }
}
