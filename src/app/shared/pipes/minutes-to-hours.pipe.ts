import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'm2h'
})
export class MinutesToHoursPipe implements PipeTransform {
  transform(value: number): string {
    let isNegative = value < 0;
    let hours = Math.floor(Math.abs(value) / 60);
    let minutes = Math.floor(Math.abs(value) % 60);
    return (isNegative? '-' : '') + hours + ' h ' + minutes + ' m ';
  }
}
