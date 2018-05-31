import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MetadataTemplate } from '../metadata-template';
import { MetadataTemplateService} from '../metadata-template.service';


@Component({
  selector: 'app-sample-search',
  templateUrl: './template-search.component.html',
  styleUrls: ['./template-search.component.css']
})
export class TemplateSearchComponent {
  @Input()
  samples: MetadataTemplate[];
  @Output()
  emitResults: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;
  constructor(private templateService: MetadataTemplateService) {
  }

  performSearch(searchTerm: string): void {
    this.templateService.findByDefinesName(searchTerm).subscribe(
      templates => { this.emitResults.emit(templates); });
  }
}
