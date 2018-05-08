import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MetadataValueService} from '../metadataValue.service';
import {MetadataValue} from '../metadataValue';
import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'metadata-value-edit',
  templateUrl: './metadata-value-form.component.html'
})
export class MetadataValueFormComponent implements OnInit {
  public metadataValue: MetadataValue;
  public metadataValueForm: FormGroup;
  public errorMessage: string;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private metadataValueService: MetadataValueService) {
    this.metadataValueForm = fb.group({
      'value': [{value: '', disabled: true}, Validators.required],
    });
  }

  ngOnInit() {
    this.metadataValue = new MetadataValue();
    this.route.params
      .map(params => params['id'])
      .subscribe((id) =>
        this.metadataValueService.get(id).subscribe(
          metadataValue => this.metadataValue = metadataValue,
          error => this.errorMessage = <any>error.message));
  }

  onSubmit(): void {
    this.metadataValueService.update(this.metadataValue)
      .subscribe(
        metadataValue => this.router.navigate([metadataValue.uri]),
        error => this.errorMessage =
          error.errors ? <any>error.errors[0].message : <any>error.message);
  }
}
