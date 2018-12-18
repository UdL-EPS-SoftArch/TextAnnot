import { Component, OnInit } from '@angular/core';
import { Metadatafield } from '../metadatafield';
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
          this.metadataFields = this.metadataFields.concat(metadataFields);
          this.totalmetadataFields += metadataFields.length;

          // Get next pages of the resource
          if (this.metadatafieldlistcomp.hasNext()) {
            this.metadatafieldlistcomp.next()
              .subscribe(
                (nextMetadataFields: Metadatafield[]) => {
                  this.metadataFields = this.metadataFields.concat(nextMetadataFields);
                  this.totalmetadataFields += nextMetadataFields.length;
                });
          }
        });
  }

  showSearchResults(metadataFields) {
    this.metadataFields = metadataFields;
  }
}
