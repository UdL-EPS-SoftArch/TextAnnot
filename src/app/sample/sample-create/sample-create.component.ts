import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sample } from '../sample';
import { SampleService } from '../sample.service';
import { Linguist } from '../../user/linguist';

@Component({
  selector: 'app-sample-create',
  templateUrl: '../sample-form/sample-form.component.html'
})
export class SampleCreateComponent implements OnInit {
  public sample: Sample;
  public errorMessage: string;
  public formTitle = 'Create Sample';
  public formSubtitle = 'Creates a new sample';

  constructor(private router: Router,
              private SampleService: SampleService) { }

  ngOnInit() {
    this.sample = new Sample();
  }

  onSubmit(): void {
    this.SampleService.create(this.sample)
        .subscribe(
          Sample => this.router.navigate([Sample.uri]));
  }
}
