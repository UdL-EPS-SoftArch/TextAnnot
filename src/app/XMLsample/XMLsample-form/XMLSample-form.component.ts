import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {XMLSample} from "../XMLsample";
import {XMLSampleService} from "../XMLsample.service";

@Component({
  selector: 'app-XMLSample-form',
  templateUrl: './XMLsample-form.component.html',
  styleUrls: ['./XMLSample-form.component.css']
})
export class XMLSampleFormComponent implements OnInit {

  public XMLSample: XMLSample;
  public errorMessage: string;
  public formTitle = 'Upload XML Samples';
  public formSubtitle = 'Upload XML Samples';

  constructor(private router: Router,
              private XMLSampleService: XMLSampleService) { }

  ngOnInit() {
    this.XMLSample = new XMLSample();
  }

  onSubmit(): void {
    this.XMLSampleService.addXMLSample(this.XMLSample)
      .subscribe(
        XMLSample => this.router.navigate(['/XMLSamples']));
  }
}
