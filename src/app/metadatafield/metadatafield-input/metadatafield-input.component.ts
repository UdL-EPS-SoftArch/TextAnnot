import {Component, Input, OnInit} from '@angular/core';
import {Metadatafield} from '../metadatafield';
import {MetadataValue} from '../../metadataValue/metadataValue';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-metadatafield-input',
  templateUrl: './metadatafield-input.component.html',
  styleUrls: ['./metadatafield-input.component.css']
})
export class MetadatafieldInputComponent implements OnInit {
  public metadataValue: MetadataValue;
  public fieldValue: string;
  public mValue: MetadataValue;
  constructor() { }
  @Input() metadataField: Metadatafield;
  @Input() metadataValues: MetadataValue[];

  ngOnInit() {
    this.metadataValues.forEach(metadataVal => {

      if(metadataVal.fieldName ==  this.metadataField.name){
        this.mValue = metadataVal;
        this.fieldValue = metadataVal.value;
      }
    });
    if(this.mValue == undefined){
      this.mValue = new MetadataValue();
      this.mValue.value = "";
    }
  }
  onSubmit() {
    this.metadataValue = new MetadataValue();
    this.metadataValue.value = this.fieldValue;
    this.metadataValue.values = this.metadataField;
    this.metadataValue.fieldName = this.metadataField.name;
    return this.metadataValue;
  }
}
