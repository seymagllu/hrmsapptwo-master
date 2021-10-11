import { Pipe, PipeTransform } from '@angular/core';
import { JobAdvertisement } from '../models/job-advertisement/jobAdvertisement';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ads: JobAdvertisement[], filterText: string): JobAdvertisement[] {
    filterText = filterText ? filterText.toLowerCase() : "";

    return filterText
              ? ads.filter((ad : JobAdvertisement) => ad.city.name.toLowerCase().indexOf(filterText) !== -1)
              : ads;
  }

}
