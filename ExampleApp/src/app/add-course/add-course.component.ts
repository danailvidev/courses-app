import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CoursesService } from './../services/courses.service';
import { Router } from '@angular/router';
import * as courseActions from './../ngrx/actions/course.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../interfaces/app-state';
import { Course } from '../course';

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private courseService: CoursesService,
        private store: Store<AppState>
    ) { }

    course: Course = new Course();

    addForm: FormGroup;

    ngOnInit() {
        this.addForm = this.fb.group({
            'name': new FormControl('', Validators.required),
            'description': new FormControl('', Validators.required),
            'creation_date': new FormControl('', Validators.required),
            'durationLength': new FormControl(Validators.required),
            'authors': new FormControl('', Validators.required)
        });
    }

    onSubmit() {
        this.store.dispatch(new courseActions.CreateCourseAction(this.addForm.value));
        this.router.navigate(['/courses']);
    }
}
