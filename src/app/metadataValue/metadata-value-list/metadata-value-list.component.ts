import { Component, OnInit } from '@angular/core';
import {MetadataValue} from '../metadataValue';
import {MetadataValueService} from '../metadataValue.service';

@Component({
  selector: 'app-metadata-value-list',
  templateUrl: './metadata-value-list.component.html',
  styleUrls: ['./metadata-value-list.component.css']
})
export class MetadataValueListComponent implements OnInit {
  public metadataValues: MetadataValue[] = [];
  public totalmetadataValues = 0;
  public errorMessage = '';

  constructor(private metadataValueService: MetadataValueService) {}

  ngOnInit() {
    this.metadataValueService.getAllMetadataValues()
      .subscribe(
        (metadataValues: MetadataValue[]) => {
          this.metadataValues = metadataValues;
          this.totalmetadataValues = metadataValues.length; });
  }

  showSearchResults(metadataValues) {
    this.metadataValues = metadataValues;
  }
}
