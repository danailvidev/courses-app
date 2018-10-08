import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";
import { CoursesService } from "./../services/courses.service";
import { Course } from "../course";
import { Observable, fromEvent } from 'rxjs';
import { debounceTime, takeUntil, map, takeWhile } from 'rxjs/operators';

@Component({
    selector: "app-course-listing",
    templateUrl: "./course-listing.component.html",
    styleUrls: ["./course-listing.component.scss"]
})
export class CourseListingComponent implements OnInit, AfterViewInit {
    courses: Course[] = [];
    pageStart = 0;
    pageCount = 5;
    textFragment = '';
    pageSort = '';
    @ViewChild('search') search: ElementRef;


    constructor(private router: Router, private courseService: CoursesService) { }

    ngOnInit() {
        this.getCourses();
    }

    ngAfterViewInit() {
        fromEvent(this.search.nativeElement, 'keyup')
            .pipe(
                debounceTime(300),
            )
            .subscribe((res: any) => {
                this.textFragment = res.target.value;
                if (this.textFragment && (this.textFragment.length >= 3 || this.textFragment.length == 0)) {
                    this.getCourses();
                }
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

    getCourses() {
        let params = {
            start: this.pageStart,
            count: this.pageCount,
            textFragment: this.textFragment,
            sort: this.pageSort
        };
        this.courseService.getCourses(params).subscribe(data => {
            this.courses = data;
        });
    }

    sortCourses() {
        if (this.pageSort == 'asc') {
            this.pageSort = 'desc';
        } else {
            this.pageSort = 'asc';
        }
        this.getCourses();
    }



    loadMore() {
        this.pageCount += 2;
        this.getCourses();
    }
}