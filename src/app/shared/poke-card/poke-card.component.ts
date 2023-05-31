import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent {

    @Input()
    public pokemon: any;

    constructor(private router: Router) {}


    public async toSee(id: number): Promise<any> {
        await this.router.navigate(["details", id]);
    }

}
