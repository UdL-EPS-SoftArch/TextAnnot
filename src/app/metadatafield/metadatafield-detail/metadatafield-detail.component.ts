import { ModalService } from './../../shared/confirm-modal/modal.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Metadatafield} from '../metadatafield';
import { MetadatafieldService } from '../metadatafield.service';
import { ConfirmModalComponent } from '../../shared/confirm-modal/confirm-modal.component';
import { MetadataTemplate } from '../../metadata-template/metadata-template';

@Component({
  selector: 'app-metadatafield-detail',
  templateUrl: './metadatafield-detail.component.html',
  styleUrls: ['../metadataList.component.css']
})
export class MetadatafieldDetailComponent implements OnInit {
  public metaField: Metadatafield = new Metadatafield();
  public errorMessage: string;
  public detailsPageTitle = 'MetadataField';
  public detailsPageSubtitle = 'Details about a MetadataField';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private metadataFieldService: MetadatafieldService,
              private confirmService: ModalService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.metadataFieldService.get(id).subscribe(
      metadataField => {
        this.metaField = metadataField;
        this.metaField.getRelation(MetadataTemplate, 'definedAt')
          .subscribe(metadataTemplate => this.metaField.definedAt = metadataTemplate);
      }
    );
  }

  public delete() {
    this.confirmService.init(ConfirmModalComponent, {
      title: 'Delete metadatafield',
      message: 'Delete metadatafield?'
    }).subscribe(
      deleted => {
        if (deleted) {
          this.metadataFieldService.delete(this.metaField).subscribe(
            () => this.router.navigate(['metadataFields']));
        }
      }
    );
  }
}
