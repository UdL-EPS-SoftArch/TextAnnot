import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Tag } from "../tag";
import {Sample} from "../../sample/sample";
import {MetadataTemplate} from "../../metadata-template/metadata-template";
import {SampleService} from "../../sample/sample.service";
import {TagService} from "../tag.service";
import {TagHierarchy} from "../../tag-hierarchy/tag-hierarchy";

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  @Input() public tags: Tag[] = undefined;

  public totalTags = 0;
  @Output() public deleteItem: EventEmitter<number> = new EventEmitter<number>();

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.tagService.getAll().subscribe(
      (tags: Tag[]) => {
        this.tags = tags;
        this.totalTags = tags.length;

        // Get the tagHierarchy template for each tag
        this.tags.map(
          (tag: Tag) => {
            tag.getRelation(TagHierarchy, 'tagHierarchy').subscribe(
              (tagHierarchy: TagHierarchy) => tag.tagHierarchy = tagHierarchy
            );
          }
        );
      });
  }

  delete(index: number): void {
    this.deleteItem.emit(index);
  }

  showSearchResults(tags) {
    this.tags = tags;
  }

}
