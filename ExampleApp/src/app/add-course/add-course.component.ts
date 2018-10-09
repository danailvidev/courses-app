import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import * as courseActions from './../ngrx/actions/course.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../interfaces/app-state';
import { Course } from '../course';
import { CustomValidators } from '../custom-validators';

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private store: Store<AppState>,
        private location: Location
    ) { }

    course: Course = new Course();

    addForm: FormGroup;

    ngOnInit() {
        this.addForm = this.fb.group({
            'name': new FormControl('', Validators.compose([
                Validators.required,
                CustomValidators.maxLength
            ])),
            'description': new FormControl('', Validators.compose([
                Validators.required,
                CustomValidators.maxLengthTextArea
            ])),
            'date': new FormControl('', Validators.required),
            'length': new FormControl(Validators.required),
            'authors': new FormControl('', Validators.required),
            'isTopRated': new FormControl('', ),
        });
    }

    onSubmit(value) {
        this.store.dispatch(new courseActions.CreateCourseAction(value));
    }

    back() {
        this.location.back();
    }
}
