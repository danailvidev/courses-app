import {
    Directive,
    HostBinding,
    Input
} from '@angular/core';

@Directive({
    selector: '[borderColor]'
})
export class BorderColorDirective {
    currentTime: Date = new Date();

    @Input() set time(asd: any) {
        const creationDate = new Date(asd);
        const diff = Math.abs(creationDate.getTime() - this.currentTime.getTime());
        const daysDiff = Math.floor((((diff / 1000) / 60) / 60) / 24);

        if (creationDate.getTime() < this.currentTime.getTime() && daysDiff <= 14) {
            this.borderColor = 'green';
        } else if (creationDate.getTime() > this.currentTime.getTime()) {
            this.borderColor = 'blue';
        }
    }

    @HostBinding('style.color') color: string;
    @HostBinding('style.border-color') borderColor: string;

}
