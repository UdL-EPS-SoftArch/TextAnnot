import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MetadataValue} from '../metadataValue';
import {MetadataValueService} from '../metadataValue.service';

@Component({
  selector: 'app-metadata-value-search',
  templateUrl: './metadata-value-search.component.html',
  styleUrls: ['./metadata-value-search.component.css']
})
export class MetadataValueSearchComponent {
  @Input()
  metadata: MetadataValue[];
  @Output()
  emitResults: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;
  constructor(private metadataValueService: MetadataValueService) {
  }

  performSearch(searchTerm: string): void {
    this.metadataValueService.getMetadataValuesByUsername(searchTerm).subscribe(
      metadata => { this.emitResults.emit(metadata); });
  }
}
