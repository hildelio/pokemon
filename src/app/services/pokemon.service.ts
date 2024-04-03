import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  http = inject(HttpClient);
    
  getPokemons(offset: number, limit: number): Observable<any> {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    return this.http.get<any>(url);
  }

  getRandomPokemon(): Observable<any> {
    const randomId = Math.floor(Math.random() * 151) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
    return this.http.get<any>(url);
  }

}
