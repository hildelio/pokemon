import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

interface Pokemon {
  name: string;
  url: string;
}

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {
  pokemonList: Pokemon[] = [];
  currentPage = 1;
  itemsPerPage = 20;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    const offset = (this.currentPage - 1) * this.itemsPerPage;
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${this.itemsPerPage}`;

    this.http.get<any>(url).subscribe(response => {
      this.pokemonList = response.results;
    });
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.loadPokemons();
  }

  getPokemonId(url: string): string {
    const id = url.split('/').filter(Boolean).pop();
    return id || '';
  }
}
