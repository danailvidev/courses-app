import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appNewcourse]'
})
export class NewcourseDirective {

  constructor(Element: ElementRef) {
     Element.nativeElement.style.borderColor = "green";
  }

}
