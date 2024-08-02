import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardLargeImage]',
  host: {'class': 'g-card__large-image'}
})
export class CardLargeImageDirective {}
