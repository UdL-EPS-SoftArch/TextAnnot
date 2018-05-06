import { Component, OnInit } from '@angular/core';
import { SampleService} from '../sample.service';
import { Sample } from '../sample';

@Component({
  selector: 'app-sample-list',
  templateUrl: './sample-list.component.html',
  styleUrls: ['./sample-list.component.css']
})
export class SampleListComponent implements OnInit {

  public samples: Sample[] = [];
  public totalSamples = 0;
  public errorMessage = '';
  constructor(private sampleService: SampleService) { }

  ngOnInit() {
    this.sampleService.getAll().subscribe(
      (samples: Sample[]) => {
        this.samples = samples;
        this.totalSamples = samples.length; });
  }
  showSearchResults(samples) {
    this.samples = samples;
  }

}
