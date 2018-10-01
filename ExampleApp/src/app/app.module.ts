import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { CourseListingComponent } from './course-listing/course-listing.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CoursesService } from './services/courses.service';
import { DurationPipe } from './duration.pipe';
import { OrderbyPipe } from './orderby.pipe';
import { FilterPipe } from './filter.pipe';
import { CoursedateDirective } from './coursedate.directive';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      BreadcrumbComponent,
      FooterComponent,
      UserComponent,
      CourseListingComponent,
      CourseItemComponent,
      DurationPipe,
      OrderbyPipe,
      FilterPipe,
      CoursedateDirective,
      LoginComponent,
      routingComponents
   ],
   imports: [
      BrowserModule,
      HttpModule,
      FormsModule,
      AppRoutingModule
   ],
   providers: [
      CoursesService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
 