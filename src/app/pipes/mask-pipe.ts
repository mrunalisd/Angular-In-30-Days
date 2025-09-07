import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, visibleChars: number = 4): string {
    if (!value) return '';
    const maskedSection = '*'.repeat(value.length - visibleChars);
    const visibleSection = value.slice(-visibleChars);
    return maskedSection + visibleSection;
  }

}
