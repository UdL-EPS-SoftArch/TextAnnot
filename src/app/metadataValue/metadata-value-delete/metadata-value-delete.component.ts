import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LinguistService} from '../../user/linguist.service';
import {Linguist} from '../../user/linguist';
import {MetadataValue} from '../metadataValue';
import {MetadataValueService} from '../metadataValue.service';

@Component({
  selector: 'app-metadata-value-delete',
  templateUrl: './metadata-value-delete.component.html',
  styleUrls: ['./metadata-value-delete.component.css']
})
export class MetadataValueDeleteComponent implements OnInit {
  public metaValue: MetadataValue = new MetadataValue();
  public errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private metadataValueService: MetadataValueService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.metadataValueService.getMetadataValue(id).subscribe(
      metaValue => this.metaValue = metaValue);
  }

  delete() {
    this.metadataValueService.deleteMetadataValue(this.metaValue).subscribe(
      () => this.router.navigate(['metadataValues']));
  }
}
