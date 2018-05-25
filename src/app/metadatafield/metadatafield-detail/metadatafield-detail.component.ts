import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Metadatafield} from '../metadatafield';
import { MetadatafieldService } from '../metadatafield.service';

@Component({
  selector: 'app-metadatafield-detail',
  templateUrl: './metadatafield-detail.component.html'
})
export class MetadatafieldDetailComponent implements OnInit {
  public metaField: Metadatafield = new Metadatafield();
  public errorMessage: string;
  public detailsPageTitle = 'MetadataField';
  public detailsPageSubtitle = 'Details about a MetadataField';

  constructor(private route: ActivatedRoute,
              private metadataFieldService: MetadatafieldService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.metadataFieldService.get(id).subscribe(
      metadataField => this.metaField = metadataField);
  }
}
