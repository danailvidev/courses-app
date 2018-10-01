import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'
import { CoursesService } from "./../services/courses.service"; 
import "rxjs/add/operator/map";



@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor(private http: Http) { }

  confirmationMessage:string = "Course successfully added!";
  isAdded:boolean = false;
  
  courseObj:object = {};

  addNewCourse = function(course) {
    this.courseObj = {
      "title": course.title,
      "creation_date": course.creation_date,
      "duration": course.duration,
      "description": course.description
    }

    this.http.post("http://localhost:3000/courses", this.courseObj).subscribe((res:Response) => {
      this.isAdded = true; 
    });
  
  }  

  ngOnInit() {
  }

}
