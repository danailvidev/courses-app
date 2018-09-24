import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CoursesService } from './../services/courses.service'; 
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-course-listing',
  templateUrl: './course-listing.component.html',
  styleUrls: ['./course-listing.component.scss']
})
export class CourseListingComponent implements OnInit {

  courses: Array<any>;
  error: string;

  constructor(
    private http: Http,
    private coursesService: CoursesService 
  ) { }
   
  ngOnInit() {
    this.coursesService.getAllCourses()
      .subscribe(
        data => this.courses = data,
        error => this.error = error.statusText
      ); 
  }
 
}