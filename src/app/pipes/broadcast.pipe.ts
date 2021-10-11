import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'broadcast'
})
export class BroadcastPipe implements PipeTransform {

  transform(value: unknown, active: boolean, verified:boolean): string {
    if(active && verified){
      return "Yayında";
    }else{
      return "Yayında Değil";
    }
  }

}
