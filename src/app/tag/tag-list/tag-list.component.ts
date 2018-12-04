import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Tag } from "../tag";
import { Router} from "@angular/router";
import {Sample} from "../../sample/sample";
import {MetadataTemplate} from "../../metadata-template/metadata-template";
import {SampleService} from "../../sample/sample.service";
import {TagService} from "../tag.service";
import {TagHierarchy} from "../../tag-hierarchy/tag-hierarchy";
import {forkJoin, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  @Input() public tags: Tag[] = [];

  @Output() public deleteItem: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  delete(index: number): void {
    this.deleteItem.emit(index);
  }

  showSearchResults(tags) {
    this.tags = tags;
  }

}

/*
this.tagService.getAll().subscribe(
      (tags: Tag[]) => {
        this.tags = tags;
        this.totalTags = tags.length;
        console.log(this.totalTags);

        // Get the tagHierarchy template for each tag
        this.tags.map(
          (tag: Tag) => {
            tag.getRelation(TagHierarchy, 'tagHierarchy').subscribe(
              (tagHierarchy: TagHierarchy) => tag.tagHierarchy = tagHierarchy
            );
          }
        );
        this.tags.map(
          (tag: Tag) => {
            tag.getRelation(Tag, 'parent').subscribe(
              (parent: Tag) => tag.parent = parent,
              error1 => console.log(error1)
            );
          }
        );
      });
 */
