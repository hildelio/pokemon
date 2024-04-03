import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  pokemon$: Observable<any> | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.generateRandomPokemon();
  }

  generateRandomPokemon(): void {
    const randomPokemonId = Math.floor(Math.random() * 151) + 1;
    this.pokemon$ = this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
  }
}
