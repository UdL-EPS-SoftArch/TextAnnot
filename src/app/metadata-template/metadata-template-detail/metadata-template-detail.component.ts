import { ModalService } from '../../shared/confirm-modal/modal.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataTemplate } from '../metadata-template';
import { MetadataTemplateService } from '../metadata-template.service';
import { ConfirmModalComponent } from '../../shared/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-metadata-template-detail',
  templateUrl: './metadata-template-detail.component.html',
  styleUrls: ['./metadata-template-detail.css']
})
export class MetadataTemplateDetailComponent implements OnInit {
  public metadataTemplate: MetadataTemplate = new MetadataTemplate();
  public errorMessage: string;
  public detailsPageTitle = 'MetadataTemplate';
  public detailsPageSubtitle = 'Details about a MetadataTemplate';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private metadataTemplateService: MetadataTemplateService,
              private confirmService: ModalService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('name');
    this.metadataTemplateService.get(id).subscribe(
      metadataTemplate => this.metadataTemplate = metadataTemplate);
  }

  public delete() {
    this.confirmService.init(ConfirmModalComponent, {
      title: 'Delete metadataTemplate',
      message: 'Delete metadataTemplate?'
    }).subscribe(
      deleted => {
        if (deleted) {
          this.metadataTemplateService.delete(this.metadataTemplate).subscribe(
            () => this.router.navigate(['metadataTemplates']));
        }
      }
    );
  }
}
