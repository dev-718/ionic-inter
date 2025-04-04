import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brazilNumberFormat',
})
export class BrazilNumberFormatPipe implements PipeTransform {
  transform(value: number | string): string {
    if (value == null || value === '') return '';

    // Convert to number and ensure two decimal places
    const numberValue = parseFloat(value.toString());

    // Format in Brazilian currency style with two decimal places
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(numberValue);
  }
}