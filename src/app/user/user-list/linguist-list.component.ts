import { Component, OnInit } from '@angular/core';
import { LinguistService } from '../linguist.service';
import { Linguist } from '../linguist';

@Component({
  selector: 'app-linguist-list',
  templateUrl: './linguist-list.component.html'
})
export class LinguistListComponent implements OnInit {
  public linguists: Linguist[] = [];
  public totalLinguists = 0;
  public errorMessage = '';

  constructor(private linguistService: LinguistService) {}

  ngOnInit() {
    this.linguistService.getAllLinguists()
      .subscribe(
        (linguists: Linguist[]) => {
          this.linguists = linguists;
          this.totalLinguists = linguists.length; },
        error => this.errorMessage = <any>error.error.message);
  }

  onSearch(linguists) {
    this.linguists = linguists;
  }
}
