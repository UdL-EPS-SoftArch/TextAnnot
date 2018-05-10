import { Component, OnInit } from '@angular/core';
import { MetadataTemplateService } from '../metadata-template.service';
import { MetadataTemplate } from '../metadata-template';

@Component({
  selector: 'app-metadata-template-list',
  templateUrl: './metadata-template-list.component.html',
  styleUrls: ['./metadata-template-list.component.css']
})
export class ListMetadataTemplateComponent implements OnInit {

  public metadataTemplates: MetadataTemplate[] = [];
  public totalMetadataTemplates = 0;
  public errorMessage = '';
  constructor(private metadataTemplateService: MetadataTemplateService) { }

  ngOnInit() {
    this.metadataTemplateService.getAll().subscribe(
      (metadataTemplates: MetadataTemplate[]) => {
        this.metadataTemplates = metadataTemplates;
        this.totalMetadataTemplates = metadataTemplates.length; });
  }
  showSearchResults(metadataTemplates: MetadataTemplate[]) {
    this.metadataTemplates = metadataTemplates;
  }
}
