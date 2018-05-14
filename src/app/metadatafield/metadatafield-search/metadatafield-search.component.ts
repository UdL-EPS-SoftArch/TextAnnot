import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Metadatafield} from '../metadatafield';
import { MetadatafieldService } from '../metadatafield.service';

@Component({
  selector: 'app-metadatafield-search',
  templateUrl: './metadatafield-search.component.html',
  styleUrls: ['./metadatafield-search.component.css']
})
export class MetadatafieldSearchComponent {
  @Input()
  metadata: Metadatafield[];
  @Output()
  emitResults: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;
  constructor(private patata: MetadatafieldService) {
  }

  performSearch(searchTerm: string): void {
    this.patata.getMetadataFieldsByUsername(searchTerm).subscribe(
      metadata => { this.emitResults.emit(metadata); });
  }
}
