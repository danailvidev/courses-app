import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as courseActions from './../actions/course.actions';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { CoursesService } from '../../services/courses.service';
import { switchMap, tap, map } from 'rxjs/operators';

@Injectable()
export class CourseEffects {

    constructor(
        private coursesSvc: CoursesService,
        private actions$: Actions,
        private router: Router) { }

    @Effect() loadCourses$ = this.actions$
        .ofType(courseActions.LOAD_COURSES)
        .pipe(
            switchMap((action: any) => this.coursesSvc.getCourses(action.payload)),
            map(courses => (new courseActions.LoadCoursesSuccessAction(courses)))
        );

    @Effect() createCourse$ = this.actions$
        .ofType(courseActions.CREATE_COURSE)
        .pipe(
            switchMap((action: courseActions.CreateCourseAction) => this.coursesSvc.createCourse(action.payload)),
            map(courses => (new courseActions.CreateCourseSuccessAction(courses))),
            tap( () => this.router.navigate(['/courses']))
        );

    @Effect() updateCourse$ = this.actions$
        .ofType(courseActions.UPDATE_COURSE)
        .pipe(
            switchMap((action: courseActions.UpdateCourseAction) => this.coursesSvc.updateCourse(action.payload)),
            map(courses => (new courseActions.UpdateCourseSuccessAction(courses))),
            tap( () => this.router.navigate(['/courses']))
        );

    @Effect() deleteCourse$ = this.actions$
        .ofType(courseActions.DELETE_COURSE)
        .pipe(
            switchMap((action: courseActions.DeleteCourseAction) => this.coursesSvc.deleteCourse(action.payload.id)),
            tap((course: any) => (new courseActions.DeleteCourseSuccessAction(course.payload))),
        );
}
