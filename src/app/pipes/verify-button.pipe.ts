import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verifyButton'
})
export class VerifyButtonPipe implements PipeTransform {

  transform(value: boolean): string {
    if(!value){
      return "Onayı Kaldır";
    }else{
      return "Onayla";
    }
  }

}
