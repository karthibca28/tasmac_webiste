import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderName',
  standalone: true
})
export class OrderNamePipe implements PipeTransform {

  transform(stockDetails: any[]): any[] {
    return stockDetails.sort((a, b) => {
      const brandA = a.brandName?.toLowerCase() || '';
      const brandB = b.brandName?.toLowerCase() || '';
      return brandA.localeCompare(brandB);
    });
  }
}
