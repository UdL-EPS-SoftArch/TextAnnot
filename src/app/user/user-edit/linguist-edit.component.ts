import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Linguist } from '../linguist';
import { LinguistService } from '../linguist.service';

@Component({
  selector: 'app-linguist-edit',
  templateUrl: '../user-form/user-form.component.html'
})
export class LinguistEditComponent implements OnInit {
  public user: Linguist;
  public errorMessage: string;
  public formTitle = 'Edit Linguist';
  public formSubtitle = 'Edit a user with role linguist';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private linguistService: LinguistService) { }

  ngOnInit() {
    this.user = new Linguist();
    const id = this.route.snapshot.paramMap.get('id');
    this.linguistService.get(id).subscribe(
          linguist => this.user = linguist,
          error => this.errorMessage = <any>error.message);
  }

  onSubmit(): void {
    this.user.authorities = [];
    this.linguistService.update(this.user)
        .subscribe(
          linguist => this.router.navigate([linguist.uri]),
          error => this.errorMessage = error.error ? <any>error.error.message : <any>error.message);
  }
}
