import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CourseListingComponent } from './course-listing/course-listing.component';
import { AddCourseComponent } from './add-course/add-course.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/courses",
    pathMatch: 'full'
  },
  { path: "courses", component: CourseListingComponent },
  { path: "courses/new", component: AddCourseComponent }
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { } 
export const routingComponents = [CourseListingComponent, AddCourseComponent];