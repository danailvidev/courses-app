import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

    transform(value: number): string {
      if (value > 0 && value / 60 < 1) {
        return value + ' Minutes';
      } else {
    
      let hour = Math.floor(value / 60);
      let minute = value - hour*60;
    
        return hour + ' Hour(s) ' + minute + ' Min';
      
    }
  } 
}
