import { Component, OnInit } from '@angular/core';
import { TagHierarchy } from '../tag-hierarchy';
import { ActivatedRoute, Router } from '@angular/router';
import { TagHierarchyService } from '../tag-hierarchy.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-tag-hierarchy-detail',
  templateUrl: './tag-hierarchy-detail.component.html',
  styleUrls: ['./tag-hierarchy-detail.component.css']
})
export class TagHierarchyDetailComponent implements OnInit {

  public tagHierarchy: TagHierarchy;
  public errorMessage: string;
  public formTitle = ' details';
  public formSubtitle = 'Taghierarchy details page';
  public tagHierarchies: TagHierarchy[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private tagHierarchyService: TagHierarchyService
  ) { }

  ngOnInit() {
    this.tagHierarchy = new TagHierarchy();
    const id = this.route.snapshot.paramMap.get('id');
    this.tagHierarchyService.get(id).subscribe(
      tagHierarchyObj => {
        this.tagHierarchy = tagHierarchyObj;
        this.formTitle = tagHierarchyObj.name + this.formTitle;
      }
    );
    this.tagHierarchyService.getAll().subscribe(
      (tagHierarchies: TagHierarchy[]) => {
        this.tagHierarchies = tagHierarchies;
      }
    );
  }

}
