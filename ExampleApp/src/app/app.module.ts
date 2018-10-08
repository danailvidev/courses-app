import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { CourseListingComponent } from './course-listing/course-listing.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CoursesService } from './services/courses.service';
import { DurationPipe } from './duration.pipe';
import { OrderbyPipe } from './orderby.pipe';
import { FilterPipe } from './filter.pipe';
import { CoursedateDirective } from './coursedate.directive';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BorderColorDirective } from './border.directive';
import { AuthenticationService } from './services/auth.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { AuthGuard } from './services/auth.guard';
import { LoaderService } from './loader/loader.service';
import { ResponseInterceptor } from './services/response.interceptor';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BreadcrumbComponent,
        FooterComponent,
        UserComponent,
        CourseListingComponent,
        DurationPipe,
        OrderbyPipe,
        FilterPipe,
        CoursedateDirective,
        LoginComponent,
        routingComponents,
        UpdateCourseComponent,
        NotFoundComponent,
        BorderColorDirective
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [
        CoursesService,
        AuthenticationService,
        AuthGuard,
        LoaderService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
