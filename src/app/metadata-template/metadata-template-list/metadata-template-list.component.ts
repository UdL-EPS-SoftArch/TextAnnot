import { Component, OnInit } from '@angular/core';
import { MetadataTemplateService } from '../metadata-template.service';
import { MetadataTemplate } from '../metadata-template';

@Component({
  selector: 'app-list-metadata-templates',
  templateUrl: './metadata-template-list.component.html',
  styleUrls: ['./metadata-template-list.component.css']
})
export class ListMetadataTemplateComponent implements OnInit {

  public metadataTemplates: MetadataTemplate[] = [];
  public totalMetadataTemplate = 0;
  public errorMessage = '';
  constructor(private templateService: MetadataTemplateService) { }

  ngOnInit() {
    this.templateService.getAll().subscribe(
      (templates: MetadataTemplate[]) => {
        this.metadataTemplates = templates;
        this.totalMetadataTemplate = this.metadataTemplates.length; });
  }
}
