import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-avatar-small, [appCardAvatarSmall]',
  host: { 'class': 'g-card-avatar-small'}
})
export class CardAvatarSmallDirective {}
