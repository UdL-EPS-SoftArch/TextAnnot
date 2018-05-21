import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Metadatafield } from '../metadatafield';
import { MetadatafieldService } from '../metadatafield.service';
import {MetadatafieldDetailComponent} from '../metadatafield-detail/metadatafield-detail.component';

@Component({
  selector: 'app-metadatafield-delete',
  templateUrl: './metadatafield-delete.component.html'
})
export class MetadatafieldDeleteComponent implements OnInit {
  public metaFile: Metadatafield = new Metadatafield();
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private metadataFieldService: MetadatafieldService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.metadataFieldService.get(id).subscribe(
      metaFile => this.metaFile = metaFile);
  }

  delete() {
    this.metadataFieldService.delete(this.metaFile).subscribe(
      () => this.router.navigate(['metadataFields']));
  }
}
