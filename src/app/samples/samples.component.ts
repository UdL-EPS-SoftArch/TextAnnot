import { Component, OnInit } from '@angular/core';
import {ListSamplesService} from './list-samples.service';
import {AuthenticationBasicService} from '../login-basic/authentication-basic.service';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {
  public title = 'TextAnnot - Written Corpus Annotation';

  constructor(private auth: AuthenticationBasicService,
              private list_samples: ListSamplesService) { }

  ngOnInit() {
    this.list_samples.getSamples()
    ;
  }

}
