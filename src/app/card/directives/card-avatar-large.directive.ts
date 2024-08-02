import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-avatar-large, [appCardAvatarLarge]',
  host: {'class': 'g-card-avatar-large'}
})
export class CardAvatarLargeDirective {}
