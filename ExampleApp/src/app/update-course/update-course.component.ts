import { Component, OnInit } from '@angular/core';
import { CoursesService } from "./../services/courses.service"; 
import { Router } from "@angular/router";
import { Course } from "../course"; 
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

@Component({
  selector: "app-update-course",
  templateUrl: "./update-course.component.html",
  styleUrls: ["./update-course.component.scss"]
})
export class UpdateCourseComponent implements OnInit {
  course: Course;
  editForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private courseService: CoursesService
  ) {}

  ngOnInit() {
   
    let courseId = localStorage.getItem("editCourseId");
    if (!courseId) {
      alert("Invalid action.");
      this.router.navigate(["courses"]);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      name: ["", Validators.required],
      description: ["", Validators.required],
      date: ["", Validators.required],
      length: ["", Validators.required],
      isTopRated: ["", Validators.required]
    });
    this.courseService.getCourseById(+courseId).subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.courseService
      .updateCourse(this.editForm.value)
      .pipe(first())
      .subscribe(data => {
          this.router.navigate(["courses"]);
        }, error => {
          alert(error);
        });
  }
}
