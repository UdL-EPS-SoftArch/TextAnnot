import { Component, OnInit } from '@angular/core';
import {Admin} from '../../user/admin';
import {ActivatedRoute} from '@angular/router';
import {AdminService} from '../../user/admin.service';
import {MetadataValue} from '../metadataValue';
import {MetadataValueService} from '../metadataValue.service';

@Component({
  selector: 'app-metadata-value-detail',
  templateUrl: './metadata-value-detail.component.html',
  styleUrls: ['./metadata-value-detail.component.css']
})
export class MetadataValueDetailComponent implements OnInit {
  public metaValue: MetadataValue = new MetadataValue();
  public errorMessage: string;
  public detailsPageTitle = 'MetadataValue';
  public detailsPageSubtitle = 'Details about a MetadataValue';

  constructor(private route: ActivatedRoute,
              private metadataValueService: MetadataValueService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.metadataValueService.get(id).subscribe(
      metadataValue => this.metaValue = metadataValue);
  }
}
