import { Component, OnInit } from '@angular/core';
import {SampleService} from "../../sample/sample.service";
import {Sample} from "../../sample/sample";
import {MetadataTemplate} from "../metadata-template";
import {MetadataTemplateService} from "../metadata-template.service";

@Component({
  selector: 'app-metadata-template-list',
  templateUrl: './metadata-template-list.component.html',
  styleUrls: ['./metadata-template-list.component.css']
})
export class MetadataTemplateListComponent implements OnInit {

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
