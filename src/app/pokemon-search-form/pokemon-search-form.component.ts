import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-search-form',
  templateUrl: './pokemon-search-form.component.html',
  styleUrls: ['./pokemon-search-form.component.css']
})
export class PokemonSearchFormComponent implements OnInit {
 pokemonName: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  searchPokemon() {
    if (this.pokemonName) {
      this.router.navigate([
        "pokemons",
        "details",
        this.pokemonName.toLowerCase()
      ]);
    }
  }
}




