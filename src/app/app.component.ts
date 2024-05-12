import { Component, OnInit } from '@angular/core';
import { table } from 'node:console';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';



@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  standalone: true,
  imports: [
    CommonModule,
    BorderCardDirective,
    PokemonTypeColorPipe,
  ],
})
export class AppComponent implements OnInit {
  pokemonList : Pokemon[] = POKEMONS;
  pokemonSelected!: Pokemon|undefined;

  ngOnInit() {
    console.table(this.pokemonList);

  }
  selectPokemon(pokemonId: string){
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    if(pokemon) {
      console.log(`Vous avez demandé le pokemon ${pokemon.name}`);
    } else {
      console.log(`Désolé le pokemon n'existe pas`);
    }
    this.pokemonSelected = pokemon;

  }
}
