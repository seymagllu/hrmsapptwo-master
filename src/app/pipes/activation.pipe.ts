import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activation'
})
export class ActivationPipe implements PipeTransform {

  transform(value: boolean): string {
    if(value){
      return "Aktif";
    }else{
      return "Pasif";
    }
  }

}
