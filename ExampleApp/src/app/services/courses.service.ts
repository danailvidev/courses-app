import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()

export class CoursesService {

constructor(private http: Http) { }

  getAllCourses() {
    return this.http.get("../../data/courses.json")
      .map(res => res.json());
  }

}
