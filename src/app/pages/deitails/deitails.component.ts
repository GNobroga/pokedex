import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-deitails',
    templateUrl: './deitails.component.html',
    styleUrls: ['./deitails.component.scss'],
})
export class DeitailsComponent {
    private POKEMON_URI: string = 'https://pokeapi.co/api/v2/pokemon';
    private POKEMON_NAME: string = 'https://pokeapi.co/api/v2/pokemon-species';
    public pokemon: any;

    constructor(
        private activate: ActivatedRoute,
        private service: ApiService,
        private router: Router
    ) {
        const id: number = parseInt(this.activate.snapshot.params['id']);
        const pokemon = this.service.apiGetPokemons(
            `${this.POKEMON_URI}/${id}`
        );
        const name = this.service.apiGetPokemons(`${this.POKEMON_NAME}/${id}`);

        //Faz a busca dos dados nas API`s e quando as duas tiverem prontas o valor e entregue.
        forkJoin([pokemon, name]).subscribe((res) => {
            (this.pokemon = res)
            console.log(res)
        });
    }

    public async toBack(): Promise<any> {
        await this.router.navigate(['']);
    }
}
