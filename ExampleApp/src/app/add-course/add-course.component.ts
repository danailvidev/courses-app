import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from './../services/courses.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private courseService: CoursesService
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
            isTopRated: ['', Validators.required]
        });
    }

    onSubmit() {
        this.courseService.createCourse(this.addForm.value).subscribe(data => {
            this.router.navigate(['courses']);
        });
    }
}
