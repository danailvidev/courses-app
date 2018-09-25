import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { FooterComponent } from './footer/footer.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { UserComponent } from './user/user.component';
import { CourseListingComponent } from './course-listing/course-listing.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CoursesService } from './services/courses.service';
import { BlueDirective } from './blue.directive';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      BreadcrumbComponent,
      ToolboxComponent,
      FooterComponent,
      SearchboxComponent,
      UserComponent,
      CourseListingComponent,
      CourseItemComponent,
      BlueDirective,
   ],
   imports: [
       BrowserModule, HttpModule
   ],
   providers: [CoursesService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
 