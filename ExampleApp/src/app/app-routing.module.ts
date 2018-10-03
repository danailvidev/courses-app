import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CourseListingComponent } from './course-listing/course-listing.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { LoginComponent } from "./login/login.component";
import { UpdateCourseComponent } from "./update-course/update-course.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/courses",
    pathMatch: "full"
  },
  { path: "courses", component: CourseListingComponent },
  { path: "courses/new", component: AddCourseComponent },
  { path: "login", component: LoginComponent },
  { path: "update-course", component: UpdateCourseComponent },
  { path: "**", component: NotFoundComponent }
];




@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { } 
export const routingComponents = [CourseListingComponent, AddCourseComponent];