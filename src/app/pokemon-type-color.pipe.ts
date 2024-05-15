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
        color = 'red-400';
        break;
      case 'Eau':
        color = 'cyan-400';
        break;
      case 'Plante':
        color = 'lime-400';
        break;
      case 'Insecte':
        color = 'green-400';
        break;
      case 'Normal':
        color = 'stone-400';
        break;
      case 'Vol':
        color = 'orange-300';
        break;
      case 'Poison':
        color = 'violet-500';
        break;
      case 'Fée':
        color = 'fuchsia-400';
        break;
      case 'Psy':
        color = 'rose-400';
        break;
      case 'Electrik':
        color = 'yellow-400';
        break;
      case 'Combat':
        color = 'indigo-400';
        break;
      default:
        color = 'current';
        break;
    }

    return 'badge ' + `bg-${color}`;

  }

}
