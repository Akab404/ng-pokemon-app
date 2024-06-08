import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { CommonModule } from '@angular/common';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [
    PokemonTypeColorPipe,
    CommonModule,
  ],
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit{

  pokemonList!: Pokemon[];
  pokemon!: Pokemon|undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.pokemonList = POKEMONS;
    const pokemonId: string|null = this.route.snapshot.paramMap.get(`id`);

    if (pokemonId) {
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == + pokemonId)
    }
  }

  goToPokemonsList() {
    this.router.navigate([`/pokemons`])
  }

}
