import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  standalone: true,
  imports: [
    CommonModule,
    BorderCardDirective,
    PokemonTypeColorPipe,
    RouterModule
  ],
})
export class AppComponent {

}
