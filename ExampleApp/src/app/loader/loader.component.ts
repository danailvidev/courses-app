import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
    selector: 'app-loader',
    templateUrl: 'loader.component.html',
    styleUrls: ['loader.component.scss']
})

export class LoaderComponent implements OnInit {
    show = false;
    constructor(private loaderSvc: LoaderService) { }

    ngOnInit() {
        this.loaderSvc.showLoader$.subscribe( res => {
            this.show = res;
        });
     }

    
}