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
  public totalMetadataFields = 0;
  public pageTotalMetadataFields = 0;
  public errorMessage = '';
  public hasNext: Boolean;
  public actualPage: number;

  constructor(private metadatafieldService: MetadatafieldService) {}

  ngOnInit() {
    if (this.actualPage == null) {
      this.actualPage = 0;
    }

    this.metadatafieldService.getAll()
      .subscribe( () => {
        this.totalMetadataFields = this.metadatafieldService.totalElement();
        this.getMetadataFieldList();
      });
  }

  goNext() {
    if (this.hasNext) {
      this.actualPage++;
      this.getMetadataFieldList();
    }
  }

  goPrev() {
    if (this.actualPage > 0) {
      this.actualPage--;
      this.getMetadataFieldList();
    }

  }

  getMetadataFieldList() {
    this.metadatafieldService.page(this.actualPage)
      .subscribe(
        (metadataFields: Metadatafield[]) => {
          this.metadataFields = metadataFields;
          this.pageTotalMetadataFields = metadataFields.length;
          this.hasNext = this.metadatafieldService.hasNext();
      });
  }

  showSearchResults(metadataFields) {
    this.metadataFields = metadataFields;
  }
}
