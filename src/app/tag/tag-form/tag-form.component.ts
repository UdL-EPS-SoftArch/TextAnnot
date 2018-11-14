import { ErrorMessageService } from './../../error-handler/error-message.service';
import { TagHierarchyService } from './../../tag-hierarchy/tag-hierarchy.service';
import { TagHierarchy } from './../../tag-hierarchy/tag-hierarchy';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
  public tagHierarchy: TagHierarchy[];
  public errorMessage: string;
  public formTitle = 'Create Tag';
  public formSubtitle = 'Create a new Tag';
  public uriTagHierarchy: string;
  @Output() public afterInsert: EventEmitter<TagHierarchy> = new EventEmitter<TagHierarchy>();

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
  }

  onSubmit(): void {
    this.tagService.create(this.tag)
      .subscribe(
        (res: Tag) => {
          this.afterInsert.emit(Object.assign({}, res));
          this.tag.name = '';
          this.modalService.dismissAll();
        },
        () => this.errorService.showErrorMessage('Error creating Tag Hierarchy'));
  }
  open(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
    });
  }
}
