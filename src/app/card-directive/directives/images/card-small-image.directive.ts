import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardSmallImage]',
  host: {'class': 'g-card__small-image'}
})
export class CardSmallImageDirective {}
