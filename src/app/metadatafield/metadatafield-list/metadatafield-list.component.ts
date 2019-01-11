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

    this.getMetadataFieldList();
    this.getTotalMetadataFields();

  }

  goNext() {
    if (this.hasNext) {
      this.actualPage++;
      console.log(this.actualPage);
      this.getMetadataFieldList();
    }
    console.log(this.hasNext);
  }

  goPrev() {
    if (this.actualPage > 0) {
      this.actualPage--;
      console.log(this.actualPage);
      this.getMetadataFieldList();
    }

  }

  getMetadataFieldList() {
    this.metadatafieldService.getAll()
      .subscribe( () => {

        this.metadatafieldService.page(this.actualPage)
          .subscribe(
            (metadataFields: Metadatafield[]) => {
              this.metadataFields = metadataFields;
              this.pageTotalMetadataFields = metadataFields.length;
              this.hasNext = this.metadatafieldService.hasNext();
            });
      });
  }

  getTotalMetadataFields() {
    this.metadatafieldService.getAll()
      .subscribe(
        (metadataFields: Metadatafield[]) => {
          this.totalMetadataFields += metadataFields.length;

          if (this.metadatafieldService.hasNext()) {
            this.metadatafieldService.next()
              .subscribe(
                (nextMetadataFields: Metadatafield[]) => {
                  this.totalMetadataFields += nextMetadataFields.length;
                });
          }
        });
  }

  showSearchResults(metadataFields) {
    this.metadataFields = metadataFields;
  }
}
