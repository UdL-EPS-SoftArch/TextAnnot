import { ErrorMessageService } from './../../error-handler/error-message.service';
import { TagHierarchyService } from './../../tag-hierarchy/tag-hierarchy.service';
import { TagHierarchy } from './../../tag-hierarchy/tag-hierarchy';
import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { Tag } from '../tag';
import { Router } from '@angular/router';
import { TagService } from '../tag.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.css']
})
export class TagFormComponent implements OnInit {
  public tag: Tag;
  public tagHierName: string;
  public parentTagName: string;
  public tagParent: Tag[];
  public tagHierarchy: TagHierarchy[];
  public errorMessage: string;
  public formTitle = 'Create Tag';
  public formSubtitle = 'Create a new Tag';
  public uriTagHierarchy: string;
  public uriTag: string;
  @Output() public afterInsert: EventEmitter<Tag> = new EventEmitter<Tag>();

  constructor(private router: Router,
              private tagService: TagService,
              private modalService: NgbModal,
              private tagHierarchyService: TagHierarchyService,
              private errorService: ErrorMessageService) { }

  ngOnInit() {
    this.tag = new Tag();
    this.tagHierarchyService.getAll().subscribe(
      res => {
        this.tagHierarchy = res;
      }
    );
    this.tagService.getAll().subscribe(
      res => {
        this.tagParent = res;
      }
    );
  }

  onSubmit(): void {
    this.tagService.create(this.tag)
      .subscribe(
        (res: Tag) => {
          this.afterInsert.emit(Object.assign({}, res));
          this.tag.name = '';
          this.tagHierName = '';
          this.parentTagName = '';
         this.modalService.dismissAll();
        },
        () => this.errorService.showErrorMessage('Error creating Tag Hierarchy'));
  }
  open(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
    });
  }

  optionSelectedth(val: number) {
    this.tag.tagHierarchy = this.tagHierarchy[val];
  }

  optionSelectedt(val: number) {
    /*if (this.tagParent[val].name === 'undefined') {
      this.parentTagName = 'Im a parent';
    }
    this.tag.parent = this.tagParent[val];*/
    this.tag.parent = this.tag;
  }
}
