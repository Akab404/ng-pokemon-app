import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { PokemonTypeColorPipe } from "../pokemon-type-color.pipe";
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from '../border-card.directive';

@Component({
    selector: 'app-list-pokemon',
    standalone: true,
    templateUrl: './list-pokemon.component.html',
    styles: ``,
    imports: [
      PokemonTypeColorPipe,
      CommonModule,
      BorderCardDirective,
    ]
})
export class ListPokemonComponent {
    pokemonList : Pokemon[] = POKEMONS;
}
