import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from './../services/courses.service';
import { Router } from '@angular/router';
import * as courseActions from './../ngrx/actions/course.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../interfaces/app-state';

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private courseService: CoursesService,
        private store: Store<AppState>
    ) { }

    addForm: FormGroup;

    ngOnInit() {
        this.addForm = this.formBuilder.group({
            id: [],
            name: ['', Validators.required],
            date: ['', Validators.required],
            title: ['', Validators.required],
            length: ['', Validators.required],
            description: ['', Validators.required],
            creation_date: ['', Validators.required],
            duration: ['', Validators.required],
            isTopRated: ['', Validators.required],
            authors: ['', Validators.required]
        });
    }

    onSubmit() {
        this.store.dispatch(new courseActions.CreateCourseAction(this.addForm.value));
        this.router.navigate(['/courses']);
    }
}
