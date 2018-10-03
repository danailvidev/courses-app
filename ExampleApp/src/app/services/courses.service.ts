import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from "../course"; 

@Injectable()
export class CoursesService {
  constructor(private http: HttpClient) {}
  baseUrl: string = "http://localhost:3004/courses";

  getCourses() {
    return this.http.get<Course[]>(this.baseUrl);
  }

  getCourseById(id: number) {
    return this.http.get<Course>(this.baseUrl + "/" + id);
  }

  createCourse(course: Course) {
    return this.http.post(this.baseUrl, course);
  }

  updateCourse(course: Course) {
    return this.http.put(this.baseUrl + "/" + course.id, course);
  }

  deleteCourse(id: number) {
    return this.http.delete(this.baseUrl + "/" + id);
  }
}
