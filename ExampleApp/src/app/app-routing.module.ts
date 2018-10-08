import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListingComponent } from './course-listing/course-listing.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { LoginComponent } from './login/login.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/auth.guard';
import { LoaderComponent } from './loader/loader.component';
import { ShowErrorsComponent } from './show-errors.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/courses',
        pathMatch: 'full'
    },
    { path: 'courses', canActivate: [AuthGuard], component: CourseListingComponent },
    { path: 'courses/new', canActivate: [AuthGuard], component: AddCourseComponent },
    { path: 'login', component: LoginComponent },
    { path: 'update-course', canActivate: [AuthGuard], component: UpdateCourseComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [CourseListingComponent, AddCourseComponent, LoaderComponent, ShowErrorsComponent];