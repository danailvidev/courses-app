import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { LoaderService } from '../loader/loader.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
    constructor(private router: Router, private url: LocationStrategy, private loaderSvc: LoaderService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(
            tap(event => {
                if (event.type === HttpEventType.Response) {
                    this.loaderSvc.showLoader$.next(false);
                }
            }, (err: any) => {
                this.loaderSvc.showLoader$.next(false);
            })
        );
    }
}
