import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {MetadataValue} from '../metadataValue';
import {MetadataValueService} from '../metadataValue.service';

@Component({
  selector: 'app-metadata-value-edit',
  templateUrl: '../metadata-value-form/metadata-value-form.component.html'
})
export class MetadataValueEditComponent implements OnInit {
  public metadataValue: MetadataValue;
  public errorMessage: string;
  public formTitle = 'Edit MetadataValue';
  public formSubtitle = 'Edit the value of a MetadataValue';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private metadataValueService: MetadataValueService) {
  }

  ngOnInit() {
    this.metadataValue = new MetadataValue();
    const id = this.route.snapshot.paramMap.get('id');
    this.metadataValueService.get(id).subscribe(
      metadataValue => this.metadataValue = metadataValue);
  }

  onSubmit(): void {
    this.metadataValueService.update(this.metadataValue)
      .subscribe(
        metadataValue => this.router.navigate([metadataValue.uri]));
  }
}
