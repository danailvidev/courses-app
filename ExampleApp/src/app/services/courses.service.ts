import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()

export class CoursesService {

constructor(private http: Http) { }

  getAllCourses() {
    return this.http
      .get("http://localhost:3000/courses")
      .map(res => res.json());
  }

  createCourse() {

  }

  getCourseById() {

  }

  updateCourse() {

  }

  removeCourse() {

  }

}
