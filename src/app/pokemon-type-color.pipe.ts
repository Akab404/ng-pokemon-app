import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor',
  standalone: true
})
export class PokemonTypeColorPipe implements PipeTransform {

   transform(type: string): string {

    let color: string;

    switch (type) {
      case 'Feu':
        color = 'danger';
        break;
      case 'Eau':
        color = 'primary';
        break;
      case 'Plante':
        color = 'success';
        break;
      case 'Insecte':
        color = 'warning';
        break;
      case 'Normal':
        color = 'secondary';
        break;
      case 'Vol':
        color = 'info';
        break;
      case 'Poison':
        color = 'dark';
        break;
      case 'Fée':
        color = 'indigo-100';
        break;
      case 'Psy':
        color = 'deep-purple darken-2';
        break;
      case 'Electrik':
        color = 'lime accent-1';
        break;
      case 'Combat':
        color = 'deep-orange';
        break;
      default:
        color = 'secondary';
        break;
    }

    return 'badge ' + `bg-${color}`;

  }

}
