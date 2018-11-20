import { TagService } from './tag.service';
import { Component, OnInit } from '@angular/core';
import { Tag } from './tag';
import {ErrorMessageService} from "../error-handler/error-message.service";

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  public tags: Tag[] = [];
  constructor( private tagService: TagService,
               private errorService: ErrorMessageService) { }

  ngOnInit() {
    this.tagService.getAll().subscribe (
      res => this.tags = res,
      err => alert(err)
    );
  }
  onSearch(tags: Tag[]) {
    this.tags = tags;
  }

  onAdded(tag: Tag) {
    this.tags.push(tag);
    console.log(this.tags);
  }

  onDelete(index): void {
    this.tagService.delete(this.tags[index]).subscribe(
      () =>  this.tags.splice(index, 1),
      err => this.errorService.showErrorMessage(err)
    );
  }
}
