import { Component, Output, EventEmitter, DoCheck } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements DoCheck {

    public search: string = "";

    @Output()
    public onSearch: EventEmitter<string> = new EventEmitter();

    public onKeyDown(event: KeyboardEvent): void {
        if (event.code === "Enter") {
            this.send(this.search);
        }
    }

    public ngDoCheck(): void {
        this.send(this.search);
    }

    public send(value: string): void {
        this.onSearch.emit(value);
    }

}
