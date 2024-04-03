import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  pokemon$: Observable<any> | undefined;

  constructor(private http: HttpClient) {}

  pokemonService = inject(PokemonService);

  ngOnInit(): void {
    this.generateRandomPokemon();
  }

  generateRandomPokemon(): void {
    this.pokemon$ = this.pokemonService.getRandomPokemon();
  }
}
