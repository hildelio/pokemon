import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

interface Pokemon {
  name: string;
  url: string;
}

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {
  pokemonList: Pokemon[] = [];
  currentPage = 1;
  itemsPerPage = 20;

  pokemonService = inject(PokemonService);
  
  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    const offset = (this.currentPage - 1) * this.itemsPerPage;
    this.pokemonService.getPokemons(offset, this.itemsPerPage).subscribe((response) => {
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
