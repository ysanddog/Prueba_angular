import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-foto-pokemon',
  templateUrl: './foto-pokemon.component.html',
  styleUrls: ['./foto-pokemon.component.scss']
})
export class FotoPokemonComponent{
 
  @Input() pokemon?:Pokemon;
}
