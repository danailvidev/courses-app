import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.scss']
})
export class UpdateCourseComponent implements OnInit {

  id:number;
  data:object = {};
  courses = [];
  courseObj:object = {};
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor() { }

  updateCourse(course) {

  }

  ngOnInit() {
  }

}
