import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MetadataValue} from '../metadataValue';
import {MetadataValueService} from '../metadataValue.service';

@Component({
  selector: 'app-metadata-value-delete',
  templateUrl: './metadata-value-delete.component.html'
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
    this.metadataValueService.get(id).subscribe(
      metaValue => this.metaValue = metaValue);
  }

  delete() {
    this.metadataValueService.delete(this.metaValue).subscribe(
      () => this.router.navigate(['metadataValues']));
  }
}
