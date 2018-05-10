import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetadatafieldService } from '../metadatafield.service';
import { Metadatafield } from '../metadatafield';


@Component({
  selector: 'app-metadatafield-create',
  templateUrl: '../metadatafield-form/metadatafield-form.component.html'
})
export class MetadafieldCreateComponent implements OnInit {
  public metadatafield: Metadatafield;
  public errorMessage: string;
  public formTitle = 'Create Metadatafield';
  public formSubtitle = 'Creates a new metadatafield';

  constructor(private router: Router,
              private metadataField: MetadatafieldService) { }

  ngOnInit() {
    this.metadatafield = new Metadatafield();
  }

  onSubmit(): void {
    this.metadataField.create(this.metadatafield)
      .subscribe(
        metadafield => this.router.navigate([metadafield.uri]));
  }
}
