import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent {

  @Input() pokemon?: Pokemon;
  @Input() abierto:boolean= false;
  @Output() clicked= new EventEmitter();
  descripcion: string='';
  constructor(private pokemonService: PokemonService){}

  ngOnChanges(): void {
    if(this.pokemon){
    this.pokemonService.getDescripcion(this.pokemon?.id).then(res=>{
      this.descripcion=res;
    })
  }
  }
}
