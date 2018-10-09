import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CoursesService } from './../services/courses.service';
import { Router } from '@angular/router';
import { Course } from '../course';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as courseActions from './../ngrx/actions/course.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../interfaces/app-state';

@Component({
    selector: 'app-update-course',
    templateUrl: './update-course.component.html',
    styleUrls: ['./update-course.component.scss']
})
export class UpdateCourseComponent implements OnInit {
    course: Course;
    editForm: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private courseService: CoursesService,
        private location: Location,
        private store: Store<AppState>
    ) { }

    ngOnInit() {
        const courseId = localStorage.getItem('editCourseId');
        if (!courseId) {
            alert('Invalid action.');
            this.router.navigate(['courses']);
            return;
        }
        this.editForm = this.formBuilder.group({
            id: [],
            name: ['', Validators.required],
            description: ['', Validators.required],
            date: ['', Validators.required],
            length: ['', Validators.required],
            isTopRated: ['', Validators.required],
            authors: ['']
        });
        this.courseService.getCourseById(+courseId).subscribe(data => {
            this.editForm.setValue(data);
        });
    }

    onSubmit(value) {
        // this.courseService
        //     .updateCourse(this.editForm.value)
        //     .pipe(first())
        //     .subscribe(data => {
        //         this.router.navigate(['courses']);
        //     }, error => {
        //         alert(error);
        //     });
        console.log(this.editForm.value);
        this.store.dispatch(new courseActions.UpdateCourseAction(this.editForm.value));
        
    }

    back() {
        this.location.back();
    }
}
