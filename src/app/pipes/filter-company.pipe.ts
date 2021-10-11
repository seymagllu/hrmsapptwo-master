import { Pipe, PipeTransform } from '@angular/core';
import { Employer } from '../models/user/employer/employer';

@Pipe({
  name: 'filterCompany'
})
export class FilterCompanyPipe implements PipeTransform {

  transform(employers: Employer[], filterText: string): Employer[] {
    filterText = filterText ? filterText.toLowerCase() : "";

    return filterText
          ? employers.filter((emp: Employer) => emp.companyName.toLowerCase().indexOf(filterText) !== -1)
          : employers;
  }

}
