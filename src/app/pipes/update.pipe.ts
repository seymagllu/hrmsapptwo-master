import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'update'
})
export class UpdatePipe implements PipeTransform {

  transform(value: boolean): string {
    if(value === false){
      return "Güncellemeler Onay Bekliyor";
    }else{
      return "Bilgiler Güncel";
    }
  }

}
