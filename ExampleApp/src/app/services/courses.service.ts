import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../course';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable()
export class CoursesService {
    constructor(private http: HttpClient) { }
    baseUrl: string = environment.backend['baseUrl'] + 'courses';

    getCourses(params = {}) {
        return this.http.get<Course[]>(this.baseUrl, { params: params });
    }

    getCourseById(id: number) {
        return this.http.get<Course>(this.baseUrl + '/' + id);
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
