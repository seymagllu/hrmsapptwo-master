import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verification'
})
export class VerificationPipe implements PipeTransform {

  transform(value: boolean): string {
    if(value){
      return "Onaylanmış";
    }else{
      return "Onay Bekliyor";
    }
  }

}
