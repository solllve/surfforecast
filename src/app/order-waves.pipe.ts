import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderWaves'
})
export class OrderWavesPipe implements PipeTransform {

  transform(array: Array<string>, args: string): any {
    return array;
  }

}
