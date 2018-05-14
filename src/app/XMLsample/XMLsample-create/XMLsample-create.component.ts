import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { XMLSample } from '../XMLsample';
import { XMLSampleService } from '../XMLsample.service';

@Component({
  selector: 'app-xml-sample-create',
  templateUrl: '../XMLsample-form/XMLsample-form.component.html'
})
export class XMLSampleCreateComponent implements OnInit {
  public xmlSample: XMLSample;
  public errorMessage: string;
  public formTitle = 'Create XMLSample';
  public formSubtitle = 'Creates a new XMLsample';

  constructor(private router: Router,
              private xmlSampleService: XMLSampleService) { }

  ngOnInit() {
    this.xmlSample = new XMLSample();
  }

  onSubmit(): void {
    this.xmlSampleService.create(this.xmlSample)
      .subscribe(
        xmlSample => this.router.navigate(['/samples']));
  }
}
