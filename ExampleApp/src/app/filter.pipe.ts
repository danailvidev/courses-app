import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courses: any[], value: string, label: string): any[] {
    if (!courses) return [];
    if (!value) return courses;
    if (value == '' || value == null) return [];
    return courses.filter(e => e[label].toLowerCase().indexOf(value) > -1);
  }

}   
