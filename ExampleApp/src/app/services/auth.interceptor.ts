import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from './auth.service';
import { LoaderService } from '../loader/loader.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private injector: Injector, private loaderSvc: LoaderService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        this.loaderSvc.showLoader$.next(true);
        const authService = this.injector.get(AuthenticationService);
        const token = authService.token || '';
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', token)
        });

        return next.handle(authRequest);
    }
}
