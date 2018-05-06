import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Sample } from "../sample";
import { SampleService} from "../sample.service";


@Component({
  selector: 'app-sample-search',
  templateUrl: './sample-search.component.html',
  styleUrls: ['./sample-search.component.css']
})
export class SampleSearchComponent{
  @Input()
  samples: Sample[];
  @Output()
  emitResults: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;
  constructor(private sampleService: SampleService) {
  }

  performSearch(searchTerm: string): void {
    this.sampleService.findByTextContaining(searchTerm).subscribe(
      samples => { this.emitResults.emit(samples); });
  }
}
