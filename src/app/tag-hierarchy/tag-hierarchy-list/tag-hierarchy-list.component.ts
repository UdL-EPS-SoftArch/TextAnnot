import { TagHierarchyService } from './../tag-hierarchy.service';
import { Component, OnInit, Input } from '@angular/core';
import { TagHierarchy } from '../tag-hierarchy';

@Component({
  selector: 'app-tag-hierarchy-list',
  templateUrl: './tag-hierarchy-list.component.html',
  styleUrls: ['./tag-hierarchy-list.component.css']
})
export class TagHierarchyListComponent implements OnInit {
  @Input() public tagHierarchies: TagHierarchy[] = [];

  constructor() { }

  ngOnInit() {

  }

}
