import { Pipe, PipeTransform } from '@angular/core';
import { GenderEnum } from '../enum/GenderEnum';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: number): string {
    switch(value){
      case GenderEnum.Male:
                return 'Male';
            case GenderEnum.Female:
                return 'Female';
            case GenderEnum.Other:
                return 'Other';
            default:
                return 'Unknown';
    }
  }

}
