import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    baseAuthUrl = environment.backend['baseUrl'];
    TOKEN_KEY = 'token';
    DATA_KEY = 'userData';
    headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    options = new HttpResponse({ headers: this.headers });

    get token() {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    constructor(private http: HttpClient, private router: Router) {
    }

    login(userData): Observable<any> {
        const body = userData;
        return this.http.post<any>(this.baseAuthUrl + 'auth/login', body)
            .pipe(
                map(res => {
                this.saveToken(res.token);
                this.saveUserData(res.userData);
            }));
    }

    logout(): Observable<any> {
        try {
            localStorage.removeItem(this.TOKEN_KEY);
            localStorage.removeItem(this.DATA_KEY);
            this.router.navigate(['/login']);
            return of(true);
        } catch (err) {
            console.error('server error:', err);
            return of(false);
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

    userInfo(): Observable<any> {
        if (this.isAuthenticated) {
            return this.http.post<any>(this.baseAuthUrl + 'auth/userinfo', {})
            .pipe(map(res => {
                this.saveUserData(res.userData);
                return res;
            }));
        } else {
            return of(false);
        }
    }
}
