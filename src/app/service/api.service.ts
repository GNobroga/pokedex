import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { PokemonResult } from '../model/pokemon-result';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private API_URL: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

    constructor(private http: HttpClient) {}

    get allData(): Observable<(PokemonResult & { status: any })[]> {
        return this.http.get<any>(this.API_URL).pipe(
            map( value => {
                (value.results as PokemonResult[]).forEach( result => {
                    const { url }: { url: string } = result;
                    this.apiGetPokemons(url)
                        .subscribe(res => ((result as PokemonResult & { status: any }).status = res))
                });
                return value.results;
            })
        );
    }

    public apiGetPokemons(url: string): Observable<any> {
        return this.http.get<any>(url)
    }

}
