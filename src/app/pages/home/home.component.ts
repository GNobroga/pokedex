import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResult } from 'src/app/model/pokemon-result';
import { ApiService } from 'src/app/service/api.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

    public pokemons: (PokemonResult & { status: any })[] | null = null;
    public copy: (PokemonResult & { status: any })[] | null = null;

    constructor(private service: ApiService) {
        this.service.allData.subscribe({
            next: value => {
                this.pokemons = value;
                this.copy = value;
            }
        });

    }

    public onSearch(value: string): void {
        this.pokemons = this.pokemons?.filter( pokemon => pokemon.name.includes(value))!;

        if (!this.pokemons?.length || value === "") {
            this.pokemons = this.copy;
        }
    }
}
