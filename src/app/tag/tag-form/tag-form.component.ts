import { Component, OnInit } from '@angular/core';
import { Tag } from '../tag';
import { Router } from '@angular/router';
import { TagService } from '../tag.service';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.css']
})
export class TagFormComponent implements OnInit {

  public tag: Tag;
  public errorMessage: string;
  public formTitle = 'Create Tag';
  public formSubtitle = 'Create a new Tag';

  constructor(private router: Router,
              private tagService: TagService) { }

  ngOnInit() {
    this.tag = new Tag();
  }

  onSubmit(): void {
    this.tagService.create(this.tag)
      .subscribe(
        () => this.router.navigate(['/tags']));
  }

}
