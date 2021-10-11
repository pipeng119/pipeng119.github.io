import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform',
  pure: false
})
export class TransformPipe implements PipeTransform {

  transform(value: number): number {
    return value * 2;
  }

}
