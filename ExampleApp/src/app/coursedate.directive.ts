import { Directive, ElementRef, Input, OnInit } from "@angular/core";


@Directive({
  selector: "[appCoursedate]"
})
export class CoursedateDirective implements OnInit {
  @Input()
  creation_date: string;
  today = Date.now();

  ngOnInit() {
    let creation_date = this.creation_date;
  }

  constructor(element: ElementRef) {
    let borderColor: string;

    if (1 > 4) {
      borderColor = "blue";
    } else if (1 < 4) {
      borderColor = "green";
    } else {
      borderColor = "gray";
    }


    element.nativeElement.style.borderColor = borderColor;
  }
}
 