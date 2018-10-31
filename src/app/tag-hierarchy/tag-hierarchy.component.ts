import { TagHierarchyService } from './tag-hierarchy.service';
import { Component, OnInit } from '@angular/core';
import { TagHierarchy } from './tag-hierarchy';

@Component({
  selector: 'app-tag-hierarchy',
  templateUrl: './tag-hierarchy.component.html',
  styleUrls: ['./tag-hierarchy.component.css']
})
export class TagHierarchyComponent implements OnInit {
  public tagHierarchies: TagHierarchy[] = [];

  constructor(private tagHierarchyService: TagHierarchyService) { }

  ngOnInit() {
    this.tagHierarchyService.getAll().subscribe(
      res => this.tagHierarchies = res,
      err => alert(err)
    );
  }

  onSearch(tagHierarchies: TagHierarchy[]) {
    this.tagHierarchies = tagHierarchies;
  }

  onAdded(tagHierarchy: TagHierarchy) {
    this.tagHierarchies.push(tagHierarchy);
    console.log(this.tagHierarchies);
  }
}
