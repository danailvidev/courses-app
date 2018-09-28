import { Directive, ElementRef, Input, OnInit } from "@angular/core";


@Directive({
  selector: '[appCoursedate]'
})
export class CoursedateDirective {

  constructor(element: ElementRef) { 

    let borderColor;

    if (1>4) {
      borderColor = "blue";
    } else if (1<4) {
      borderColor = "green";
    } else {
      borderColor = "gray";
    }

    element.nativeElement.style.borderColor = borderColor;
  }

}
