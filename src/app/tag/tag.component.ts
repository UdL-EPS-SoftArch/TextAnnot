import { TagService } from './tag.service';
import { Component, OnInit } from '@angular/core';
import { Tag } from './tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  public tags: Tag[] = [];
  constructor( private tagService: TagService) { }

  ngOnInit() {
    this.tagService.getAll().subscribe (
      res => this.tags = res,
      err => alert(err)
    );
  }
  onSearch(tags: Tag[]) {
    this.tags = tags;
  }
}
