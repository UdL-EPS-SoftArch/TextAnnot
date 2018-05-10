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
  public MetadataValue: MetadataValue;
  public errorMessage: string;
  public formTitle = 'Edit MetadataValue';
  public formSubtitle = 'Edit the value of a MetadataValue';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private MetadataValueService: MetadataValueService) {
  }

  ngOnInit() {
    this.MetadataValue = new MetadataValue();
    const id = this.route.snapshot.paramMap.get('id');
    this.MetadataValueService.get(id).subscribe(
      MetadataValue => this.MetadataValue = MetadataValue);
  }

  onSubmit(): void {
    this.MetadataValueService.update(this.MetadataValue)
      .subscribe(
        MetadataValue => this.router.navigate([MetadataValue.uri]));
  }
}
