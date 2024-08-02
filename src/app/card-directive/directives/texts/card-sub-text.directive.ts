import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-sub-text, [appCardSubtext]',
  host: {'class': 'g-card__sub-text'}
})
export class CardSubTextDirective {}
