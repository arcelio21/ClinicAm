import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idenCard'
})
export class IdentificationCardPipe implements PipeTransform {

  transform(value: string): number {
    let idenCardWithinZero = value.replace(/^0+/,'');
    let idenCardWithinHyphen = idenCardWithinZero.replace(/-/g,'');

    return  Number(idenCardWithinHyphen);
  }

}
