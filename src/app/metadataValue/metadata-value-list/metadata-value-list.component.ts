import {Component, OnInit} from '@angular/core';
import {MetadataValue} from '../metadataValue';
import {MetadataValueService} from '../metadataValue.service';

@Component({
  selector: 'app-metadata-value-list',
  templateUrl: './metadata-value-list.component.html',
})
export class MetadataValueListComponent implements OnInit {
  public metadataValues: MetadataValue[] = [];
  public totalMetadataValues = 0;
  public errorMessage = '';

  constructor(private metadataValueService: MetadataValueService) {
  }

  ngOnInit() {
    this.metadataValueService.getAll()
      .subscribe(
        (metadataValues: MetadataValue[]) => {
          this.metadataValues = metadataValues;
          this.totalMetadataValues = metadataValues.length;
        });
  }

  showSearchResults(metadataValues) {
    this.metadataValues = metadataValues;
  }
}
