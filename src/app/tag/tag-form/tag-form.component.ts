import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ErrorMessageService } from './../../error-handler/error-message.service';
import { Tag } from '../tag';
import { TagService } from '../tag.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.css']
})
export class TagFormComponent implements OnInit {

  public tag: Tag;
  public errorMessage: string;
  public formTitle = 'Register Tags';
  public formSubtitle = 'Register a new Tag';
  @Output() public afterInsert: EventEmitter<Tag> = new EventEmitter<Tag>();

  constructor(private tagService: TagService,
              private modalService: NgbModal,
              private errorService: ErrorMessageService) { }

  ngOnInit() {
    this.tag = new Tag();
  }

  onSubmit(): void {
    this.tagService.create(this.tag)
      .subscribe(
        (res: Tag) => {
          this.afterInsert.emit(res);
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
