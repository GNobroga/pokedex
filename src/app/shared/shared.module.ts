import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    declarations: [PokeHeaderComponent, PokeSearchComponent, PokeCardComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [
        PokeHeaderComponent,
        PokeSearchComponent,
        PokeCardComponent,
        FormsModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
    ],
})
export class SharedModule {}
