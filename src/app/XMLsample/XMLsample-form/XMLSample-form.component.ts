import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {XMLSample} from '../XMLsample';
import {XMLSampleService} from '../XMLsample.service';

@Component({
  selector: 'app-xml-sample-form',
  templateUrl: './XMLsample-form.component.html',
  styleUrls: ['./XMLSample-form.component.css']
})
export class XMLSampleFormComponent implements OnInit {

  public xmlSample: XMLSample;
  public errorMessage: string;
  public formTitle = 'Upload XML Samples';
  public formSubtitle = 'Upload XML Samples';

  constructor(private router: Router,
              private xmlSampleService: XMLSampleService) { }

  ngOnInit() {
    this.xmlSample = new XMLSample();
  }

  onSubmit(): void {
    this.xmlSampleService.addXMLSample(this.xmlSample)
      .subscribe(
        xmlSample => this.router.navigate(['/XMLSamples']));
  }
}
