import { Component, OnInit } from '@angular/core';
import { courses } from './../data/courses';

@Component({
  selector: 'app-course-listing',
  templateUrl: './course-listing.component.html',
  styleUrls: ['./course-listing.component.scss']
})
export class CourseListingComponent implements OnInit {

  constructor() { }

  courses: Array<any> = courses;

  ngOnInit() {
  }

}
