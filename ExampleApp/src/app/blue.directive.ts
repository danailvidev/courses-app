import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlue]'
})
export class BlueDirective {

  constructor(element: ElementRef) { 
     element.nativeElement.style.color = "blue";
  }

}
