import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MetadataValue} from '../metadataValue';
import {MetadataValueService} from '../metadataValue.service';
import { ModalService } from './../../shared/confirm-modal/modal.service';
import { ConfirmModalComponent } from './../../shared/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-metadata-value-detail',
  templateUrl: './metadata-value-detail.component.html',
  styleUrls: ['../metadataValue.component.css']
})
export class MetadataValueDetailComponent implements OnInit {
  public metaValue: MetadataValue = new MetadataValue();
  public errorMessage: string;
  public detailsPageTitle = 'MetadataValue';
  public detailsPageSubtitle = 'Details about a MetadataValue';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private confirmService: ModalService,
              private metadataValueService: MetadataValueService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.metadataValueService.get(id).subscribe(
      metadataValue => this.metaValue = metadataValue);
  }

  public delete() {
    this.confirmService.init(ConfirmModalComponent, {
      title: 'Delete metadata value',
      message: 'Delete metadata value?'
    }).subscribe(
      deleted => {
        if (deleted) {
          this.metadataValueService.delete(this.metaValue).subscribe(
            () => this.router.navigate(['metadataValues']));
        }
      }
    );
  }
}
