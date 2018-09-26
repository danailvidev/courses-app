import { Directive } from '@angular/core';
import { ElementRef } from "@angular/core";

@Directive({
  selector: '[appUpcomingcourse]'
})
export class UpcomingcourseDirective {

  constructor(Element: ElementRef) {
    Element.nativeElement.style.borderColor = "blue";
  }

}
