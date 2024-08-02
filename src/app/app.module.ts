import { CardDirectiveContentDirective } from './card-directive/directives/base/card-directive-content.directive';
import { CardDirectiveHeaderDirective } from './card-directive/directives/base/card-directive-header.directive';
import { CardDirectiveComponent } from './card-directive/card-directive.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardAvatarLargeDirective } from './card/directives/card-avatar-large.directive';
import { CardAvatarSmallDirective } from './card/directives/card-avatar-small.directive';
import { CardMainTextDirective } from './card-directive/directives/texts/card-main-text.directive';
import { CardSubTextDirective } from './card-directive/directives/texts/card-sub-text.directive';
import { CardDescriptionTextDirective } from './card-directive/directives/texts/card-description-text.directive';
import { CardSmallImageDirective } from './card-directive/directives/images/card-small-image.directive';
import { CardLargeImageDirective } from './card-directive/directives/images/card-large-image.directive';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardAvatarLargeDirective,
    CardAvatarSmallDirective,
    CardDirectiveComponent,
    CardDirectiveHeaderDirective,
    CardDirectiveContentDirective,
    CardMainTextDirective,
    CardSubTextDirective,
    CardDescriptionTextDirective,
    CardSmallImageDirective,
    CardLargeImageDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
