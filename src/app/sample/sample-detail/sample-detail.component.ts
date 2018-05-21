import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Sample} from '../sample';
import {SampleService} from '../sample.service';

@Component({
  selector: 'app-sample-detail',
  templateUrl: './sample-detail.component.html'
})
export class SampleDetailComponent implements OnInit {
  public sample: Sample = new Sample();
  public errorMessage: string;
  public detailsPageTitle = 'Sample';
  public detailsPageSubtitle = 'Details about a Sample';

  constructor(private route: ActivatedRoute,
              private sampleService: SampleService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.sampleService.get(id).subscribe(
      sample => this.sample = sample);
  }
}
