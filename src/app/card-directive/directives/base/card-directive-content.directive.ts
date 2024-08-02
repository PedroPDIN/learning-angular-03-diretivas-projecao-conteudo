import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-directive-content',
  host: {'class': 'g-card__content'}
})
export class CardDirectiveContentDirective {}
