import { TagHierarchyService } from './../tag-hierarchy.service';
import { Component, OnInit } from '@angular/core';
import { TagHierarchy } from '../tag-hierarchy';

@Component({
  selector: 'app-tag-hierarchy-list',
  templateUrl: './tag-hierarchy-list.component.html',
  styleUrls: ['./tag-hierarchy-list.component.css']
})
export class TagHierarchyListComponent implements OnInit {
  public tagHierarchies: TagHierarchy[] = [];

  constructor(private tagHierararchyService: TagHierarchyService) { }

  ngOnInit() {
    this.tagHierararchyService.getAll().subscribe(
      res => this.tagHierarchies = res
    );
  }

}
