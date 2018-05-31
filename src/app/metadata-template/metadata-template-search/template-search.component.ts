import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MetadataTemplate } from '../metadata-template';
import { MetadataTemplateService} from '../metadata-template.service';


@Component({
  selector: 'app-template-search',
  templateUrl: './template-search.component.html',
  styleUrls: ['./template-search.component.css']
})
export class TemplateSearchComponent {
  @Input()
  metadataTemplates: MetadataTemplate[];
  @Output()
  emitResults: EventEmitter<any> = new EventEmitter();

  public errorMessage: string;
  constructor(private templateService: MetadataTemplateService) {
  }

  doSearch(searchTerm: string): void {
    this.templateService.findByDefinesName(searchTerm).subscribe(
      templates => { this.emitResults.emit(templates); });
  }
}
