import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinguistService } from '../linguist.service';
import { Linguist } from '../linguist';

@Component({
  selector: 'app-linguist-detail',
  templateUrl: './user-detail.component.html'
})
export class LinguistDetailComponent implements OnInit {
  public user: Linguist = new Linguist();
  public errorMessage: string;
  public detailsPageTitle = 'Linguist';
  public detailsPageSubtitle = 'Details about a registered user with role linguist';

  constructor(private route: ActivatedRoute,
              private linguistService: LinguistService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.linguistService.getLinguist(id).subscribe(
          linguist => this.user = linguist,
          error => this.errorMessage = <any>error.message);
  }
}
