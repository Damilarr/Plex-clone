import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
    transform(value:String, ...args: unknown[]): unknown {
      let length = (value.length);
      if (length > 16) {
        return value.toLowerCase()
      };
      return value;
    }
  }

// }
