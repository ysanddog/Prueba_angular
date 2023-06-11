import { Component, ElementRef, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { Resultado } from 'src/app/interfaces/pokeapi';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private pokemonservice: PokemonService){}
  @ViewChild('tarjetas') tarjetasElement!:ElementRef;

  listapokemon:Resultado[]=[]

  pagina:number =1;
  cargando:boolean = false;
  pokemonSeleccionado?:Pokemon;
  detalle:boolean=false;

  ngOnInit():void{
    this.cargarLista();
    this.pokemonservice.getById("1");
  }

  async cargarLista(){
    if(this.cargando) return;
    this.cargando=true;
    this.listapokemon = [...this.listapokemon, ...await this.pokemonservice.getByPage(this.pagina)];
    this.pagina++;
    this.cargando=false;
  }

  onScroll(e:any){
    if(this.cargando) return;
    if(
      Math.round(this.tarjetasElement.nativeElement.clientHeight + this.tarjetasElement.nativeElement.scrollTop) === e.srcElement.scrollHeight){
        this.cargarLista();
      }
      
  }
  async tarjetaClickeada(id:string){
    if(this.pokemonSeleccionado && id === this.pokemonSeleccionado?.id.toString()){
      return this.cambiarEstadoDetalle();
    }
    this.pokemonSeleccionado = await this.pokemonservice.getById(id);
  }

  cambiarEstadoDetalle(){
    if(this.pokemonSeleccionado){
    this.detalle = !this.detalle;
    
    }
  }

  
}
