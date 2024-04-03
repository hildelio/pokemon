import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {}
    
  getPokemons(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon');
  }

  getRandomPokemon(): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151) + 1}`);
  }

}
