import { Routes } from '@angular/router';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { CardsComponent } from './pages/cards/cards.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: 'pokemons', component: PokemonComponent },
  { path: 'cards', component: CardsComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/pokemons' } 
];
