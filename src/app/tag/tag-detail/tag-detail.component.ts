import { Component, OnInit } from '@angular/core';
import {TagHierarchy} from '../../tag-hierarchy/tag-hierarchy';
import {Tag} from '../tag';
import {ActivatedRoute, Router} from '@angular/router';
import {TagService} from '../tag.service';

@Component({
  selector: 'app-tag-detail',
  templateUrl: './tag-detail.component.html',
  styleUrls: ['./tag-detail.component.css']
})
export class TagDetailComponent implements OnInit {

  public tagHierarchy: TagHierarchy;
  public tag: Tag;
  public parent: Tag;
  public errorMessage: string;
  public formTitle = ' details';
  public formSubtitle = 'Tag details page';
  public tags: Tag[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tagService: TagService
  ) { }

  ngOnInit() {
    this.tag = new Tag();
    const id = this.route.snapshot.paramMap.get('id');
    this.tagService.get(id).subscribe(
      tag => {
        this.tag = tag;
        this.formTitle = tag.name + this.formTitle;

        this.tag.getRelation(TagHierarchy, 'tagHierarchy').subscribe(
          (tagHierarchy: TagHierarchy) => this.tag.tagHierarchy = tagHierarchy
        );


        this.tag.getRelation(Tag, 'parent').subscribe(
          (parent: Tag) => this.tag.parent = parent,
          error1 => console.log(error1)
        );

      }

    );
  }

  delete() {
    this.tagService.delete(this.tag).subscribe(
      () => this.router.navigate(['tags']));
  }

}
