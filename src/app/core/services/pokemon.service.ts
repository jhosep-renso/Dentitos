import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonResults } from '../../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  // getPokemonList(): Observable<any> {
    // console.log('getPokemonList')
  getPokemonList(): Observable<PokemonResults> {
    return this.http.get<PokemonResults>('http://localhost:3000/estudiante');
    // return this.http.get<any>('http://localhost:3000/estudiante');
  }
}
