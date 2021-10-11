import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'updateButton'
})
export class UpdateButtonPipe implements PipeTransform {

  transform(value: boolean): string {
    if(value){
      return "Bilgiler Güncel";
    }else{
      return "Değişiklikleri Onayla";
    }
  }

}
