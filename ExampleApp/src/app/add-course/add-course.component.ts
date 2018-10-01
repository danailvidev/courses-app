import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor(private http: Http) { }
  courseObj:object = {};

  ngOnInit() {
  }

}
