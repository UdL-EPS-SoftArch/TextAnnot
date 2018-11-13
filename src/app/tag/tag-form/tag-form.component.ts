import { TagHierarchyService } from './../../tag-hierarchy/tag-hierarchy.service';
import { TagHierarchy } from './../../tag-hierarchy/tag-hierarchy';
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
  public tagHierarchy: TagHierarchy[];
  public errorMessage: string;
  public formTitle = 'Create Tag';
  public formSubtitle = 'Create a new Tag';

  constructor(private router: Router,
              private tagService: TagService,
              private tagHierarchyService: TagHierarchyService) { }

  ngOnInit() {
    this.tag = new Tag();
    this.tagHierarchyService.getAll().subscribe(
      res => {
        this.tagHierarchy = res;
      }
    );
  }

  onSubmit(): void {
    this.tagService.create(this.tag)
      .subscribe(
        () => this.router.navigate(['/tags']));
  }

}
