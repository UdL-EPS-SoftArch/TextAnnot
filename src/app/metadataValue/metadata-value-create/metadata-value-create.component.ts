import {MetadataValue} from '../metadataValue';
import {MetadataValueService} from '../metadataValue.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-metadata-value-create',
  templateUrl: '../metadata-value-form/metadata-value-form.component.html'
})
export class MetadataValueCreateComponent implements OnInit {
  public metadataValue: MetadataValue;
  public errorMessage: string;
  public formTitle = 'Create MetadataValue';
  public formSubtitle = 'Creates a new MetadataValue';

  constructor(private router: Router,
              private metadataValueService: MetadataValueService) {
  }

  ngOnInit() {
    this.metadataValue = new MetadataValue();
  }

  onSubmit(): void {
    this.metadataValueService.create(this.metadataValue)
      .subscribe(
        (metadataValue: MetadataValue) => this.router.navigate([metadataValue.uri]));
  }
}
