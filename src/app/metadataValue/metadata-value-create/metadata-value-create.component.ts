import { Linguist } from '../../user/linguist';
import {MetadataValue} from '../metadataValue';
import {MetadataValueService} from '../metadataValue.service';
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-metadata-value-create',
  templateUrl: '../metadata-value-form/metadata-value-form.component.html'
})
export class MetadataValueCreateComponent implements OnInit {
  public MetadataValue: MetadataValue;
  public errorMessage: string;
  public formTitle = 'Create MetadataValue';
  public formSubtitle = 'Creates a new MetadataValue';

  constructor(private router: Router,
              private MetadataValueService: MetadataValueService) { }

  ngOnInit() {
    this.MetadataValue = new MetadataValue();
  }

  onSubmit(): void {
    this.MetadataValueService.create(this.MetadataValue)
      .subscribe(
        MetadataValue => this.router.navigate([MetadataValue.uri]));
  }
}
