import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MetadataValueService} from "../metadataValue.service";
import {MetadataValue} from "../metadataValue";
import {Component, OnInit} from "@angular/core";


@Component({
  selector: 'metadata-value-edit',
  templateUrl: './metadata-value-form.component.html'
})
export class MetadataValueFormComponent implements OnInit {
  public MetadataValue: MetadataValue;
  public MetadataValueForm: FormGroup;
  public errorMessage: string;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private MetadataValueService: MetadataValueService) {
    this.MetadataValueForm = fb.group({
      'value': [{value: '', disabled: true}, Validators.required],
    });
  }

  ngOnInit() {
    this.MetadataValue = new MetadataValue();
    this.route.params
      .map(params => params['id'])
      .subscribe((id) =>
        this.MetadataValueService.get(id).subscribe(
          MetadataValue => this.MetadataValue = MetadataValue,
          error => this.errorMessage = <any>error.message));
  }

  onSubmit(): void {
    this.MetadataValueService.update(this.MetadataValue)
      .subscribe(
        MetadataValue => this.router.navigate([MetadataValue.uri]),
        error => this.errorMessage =
          error.errors ? <any>error.errors[0].message : <any>error.message);
  }
}
