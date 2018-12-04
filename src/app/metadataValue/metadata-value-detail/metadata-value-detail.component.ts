import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MetadataValue} from '../metadataValue';
import {MetadataValueService} from '../metadataValue.service';

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
              private metadataValueService: MetadataValueService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.metadataValueService.get(id).subscribe(
      metadataValue => this.metaValue = metadataValue);
  }
}
