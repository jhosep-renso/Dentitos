import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeNavbarComponent } from '../../shared/de-navbar/de-navbar.component';
import { PokemonService } from '../../core/services/pokemon.service';
import { Observable } from 'rxjs';
import { PokemonResults } from '../../interfaces/pokemon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ AsyncPipe, CommonModule, RouterModule, DeNavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent { // implements OnInit
  public pokemonResults$!: Observable<PokemonResults>;
  // public pokemonResults$!: any;
  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.pokemonResults$ = this.service.getPokemonList();
    this.pokemonResults$.subscribe((response: any) => {
      console.log('response', response)
    });
    // console.log('this', this.pokemonResults$);
  }

}
