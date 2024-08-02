import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-directive-header',
  host: {'class': 'g-card__header'}
})
export class CardDirectiveHeaderDirective {}
