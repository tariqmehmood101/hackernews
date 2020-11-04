import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanize'
})
export class HumanizePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/([A-Z])/g, ' $1').trim();
  }
}
