import { Component, OnInit } from '@angular/core';
import {Metadatafield} from '../metadatafield';
import { MetadatafieldService } from '../metadatafield.service';

@Component({
  selector: 'app-metadatafield-list',
  templateUrl: './metadatafield-list.component.html',
  styleUrls: ['./metadatafield-list.component.css']
})
export class MetadataFieldListComponent implements OnInit {
  public metadataFields: Metadatafield[] = [];
  public totalmetadataFields = 0;
  public errorMessage = '';

  constructor(private metadatafieldlistcomp: MetadatafieldService) {}

  ngOnInit() {
    this.metadatafieldlistcomp.getAll()
      .subscribe(
        (metadataFields: Metadatafield[]) => {
          this.metadataFields = metadataFields;
          this.totalmetadataFields = metadataFields.length; });
  }

  showSearchResults(metadataFields) {
    this.metadataFields = metadataFields;
  }
}
