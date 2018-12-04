import { TagService } from './../tag.service';
import { Tag } from './../tag'
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag-search',
  templateUrl: './tag-search.component.html',
  styleUrls: ['./tag-search.component.css']
})
export class TagSearchComponent implements OnInit {

  @Output()
  emitResults: EventEmitter<Tag[]> = new EventEmitter();

  public errorMessage: string;
  constructor(private tagService: TagService) { }

  ngOnInit() {
  }

  filterBy(filterValue: string): void {
    this.tagService.findByNameContaining(filterValue).subscribe(
      tags => this.emitResults.emit(tags)
    );
  }
}
