import { Component, OnInit } from '@angular/core';
import { Linguist } from '../linguist';
import { ActivatedRoute, Router } from '@angular/router';
import { LinguistService } from '../linguist.service';

@Component({
  selector: 'app-linguist-delete',
  templateUrl: './user-delete.component.html'
})
export class LinguistDeleteComponent implements OnInit {
  public user: Linguist = new Linguist();
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private linguistService: LinguistService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.linguistService.getLinguist(id).subscribe(
          linguist => this.user = linguist,
          error => this.errorMessage = <any>error.message);
  }

  delete() {
    this.linguistService.deleteLinguist(this.user).subscribe(
      _ => this.router.navigate(['linguists']),
      error => this.errorMessage = <any>error.message);
  }
}
