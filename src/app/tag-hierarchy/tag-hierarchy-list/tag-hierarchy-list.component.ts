import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TagHierarchy } from '../tag-hierarchy';

@Component({
  selector: 'app-tag-hierarchy-list',
  templateUrl: './tag-hierarchy-list.component.html',
  styleUrls: ['./tag-hierarchy-list.component.css']
})
export class TagHierarchyListComponent implements OnInit {
  @Input() public tagHierarchies: TagHierarchy[] = [];

  @Output() public deleteItem: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  delete(index: number): void {
    this.deleteItem.emit(index);
  }
}
