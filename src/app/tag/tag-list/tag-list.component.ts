import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Tag } from "../tag";

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  @Input() public tags: Tag[] = [];

  @Output() public deleteItem: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  delete(index: number): void {
    this.deleteItem.emit(index);
  }

}
