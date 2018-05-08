import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { XMLSample } from '../XMLsample';
import { XMLSampleService } from '../XMLsample.service';
import { Linguist } from '../../user/linguist';

@Component({
  selector: 'app-XMLsample-create',
  templateUrl: '../XMLsample-form/XMLsample-form.component.html'
})
export class XMLSampleCreateComponent implements OnInit {
  public XMLsample: XMLSample;
  public errorMessage: string;
  public formTitle = 'Create XMLSample';
  public formSubtitle = 'Creates a new XMLsample';

  constructor(private router: Router,
              private XMLSampleService: XMLSampleService) { }

  ngOnInit() {
    this.XMLsample = new XMLSample();
  }

  onSubmit(): void {
    this.XMLSampleService.create(this.XMLsample)
      .subscribe(
        XMLSample => this.router.navigate([XMLSample.uri]));
  }
}
