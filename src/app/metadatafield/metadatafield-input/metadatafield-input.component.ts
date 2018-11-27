import {Component, Input, OnInit} from '@angular/core';
import {Metadatafield} from '../metadatafield';
import {Sample} from '../../sample/sample';
import {MetadataValue} from '../../metadataValue/metadataValue';

@Component({
  selector: 'app-metadatafield-input',
  templateUrl: './metadatafield-input.component.html',
  styleUrls: ['./metadatafield-input.component.css']
})
export class MetadatafieldInputComponent implements OnInit {
  public metadataValue: MetadataValue;
  public fieldValue: string;
  constructor() { }
  @Input() metadataField: Metadatafield;

  ngOnInit() {
  }
  onSubmit() {
    this.metadataValue = new MetadataValue();
    this.metadataValue.value = this.fieldValue;
    this.metadataValue.valued = this.metadataField;
    this.metadataValue.fieldName = this.metadataField.name;
    return this.metadataValue;
  }
}
