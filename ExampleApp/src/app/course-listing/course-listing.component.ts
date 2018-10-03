import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CoursesService } from "./../services/courses.service"; 
import { Course } from "../course"; 


@Component({
  selector: "app-course-listing",
  templateUrl: "./course-listing.component.html",
  styleUrls: ["./course-listing.component.scss"]
})
export class CourseListingComponent implements OnInit {
  courses: Course[];

  constructor(private router: Router, private courseService: CoursesService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }

  deleteCourse(course: Course): void {
    this.courseService.deleteCourse(course.id).subscribe(data => {
      this.courses = this.courses.filter(c => c !== course);
    });
  }

  updateCourse(course: Course): void {
    localStorage.removeItem("editCourseId");
    localStorage.setItem("editCourseId", course.id.toString());
    this.router.navigate(["update-course"]);
  }

  addCourse(): void {
    this.router.navigate(["courses/new"]);
  }

  order = "creation_date";
  ascending = false;
}