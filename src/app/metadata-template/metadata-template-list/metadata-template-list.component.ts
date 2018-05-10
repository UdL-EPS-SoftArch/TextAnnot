import { Component, OnInit } from '@angular/core';
import { MetadataTemplateService } from '../metadata-template.service';
import { MetadataTemplate } from '../metadata-template';

@Component({
  selector: 'app-list-metadata-templates',
  templateUrl: './metadata-template-list.component.html',
  styleUrls: ['./metadata-template-list.component.css']
})
export class ListMetadataTemplateComponent implements OnInit {

  public metadatatemplates: MetadataTemplate[] = [];
  public totalMetadatatemplate = 0;
  public errorMessage = '';
  constructor(private sampleService: MetadataTemplateService) { }

  ngOnInit() {
    this.sampleService.getAll().subscribe(
      (samples: MetadataTemplate[]) => {
        this.metadatatemplates = samples;
        this.totalMetadatatemplate = this.metadatatemplates.length; });
  }
}
