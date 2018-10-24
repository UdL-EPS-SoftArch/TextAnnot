import { Component, OnInit } from '@angular/core';
import { TagHierarchy } from '../tag-hierarchy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tag-hierarchy-form',
  templateUrl: './tag-hierarchy-form.component.html',
  styleUrls: ['./tag-hierarchy-form.component.css']
})
export class TagHierarchyFormComponent implements OnInit {

  public tagHierarchy: TagHierarchy;
  public errorMessage: string;
  public formTitle = 'Register Tag Hierarchies';
  public formSubtitle = 'Register a new TagHierarchy';

  constructor(private router: Router,
              /* private tagHierarchyService: TagHierarchyService */) { }

  ngOnInit() {
    this.tagHierarchy = new TagHierarchy();
  }

}
