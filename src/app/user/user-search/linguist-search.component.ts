import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Linguist } from '../linguist';
import { LinguistService } from '../linguist.service';

@Component({
  selector: 'app-linguist-search',
  templateUrl: './user-search.component.html'
})

export class LinguistSearchComponent {
  @Input()
  linguists: Linguist[];
  @Output()
  onSearch: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;
  constructor(private linguistService: LinguistService,
              private route: ActivatedRoute) {
  }

  performSearch(searchTerm: string): void {
    this.linguistService.getLinguistsByUsername(searchTerm).subscribe(
      linguists => { this.onSearch.emit(linguists); },
      error => this.errorMessage = <any>error.error.message);
  }
}

